/* Pure FHIR R4 presentation adapter. No NLP, no inferred longitudinal state. */
(function(root){
'use strict';
const arr=x=>Array.isArray(x)?x:[];
const concept=x=>x?.text||arr(x?.coding).map(c=>c.display||c.code).filter(Boolean).join(' / ')||'';
const profile=(r,s)=>arr(r.meta?.profile).some(p=>p.split('|')[0].endsWith('/'+s));
const extension=(r,s)=>arr(r.extension).find(e=>e.url?.endsWith('/'+s));
const phase=r=>extension(r,'procedurePhase')?.valueCode||'';
function references(x,path='',out=[]){
 if(!x||typeof x!=='object')return out;
 if(typeof x.reference==='string')out.push({ref:x.reference,path});
 for(const [k,v] of Object.entries(x)) if(k!=='text'&&k!=='reference'){
  if(Array.isArray(v))v.forEach((a,i)=>references(a,`${path}.${k}[${i}]`,out));
  else if(v&&typeof v==='object')references(v,`${path}.${k}`,out);
 }
 return out;
}
function dateOf(r){
 const raw=r.performedDateTime||r.performedPeriod?.start||r.effectiveDateTime||r.effectivePeriod?.start||r.onsetDateTime||r.onsetPeriod?.start||(r.resourceType==='Encounter'?r.period?.start:null)||(r.resourceType==='AdverseEvent'?r.date:null);
 return typeof raw==='string'&&/^\d{4}(-\d{2})?(-\d{2})?(T.*)?$/.test(raw)&&Number.isFinite(Date.parse(raw))?raw:null;
}
function label(r){return concept(r.code)||concept(r.event)||r.deviceName?.[0]?.name||concept(r.type)||r.description||r.name?.[0]?.text||[...arr(r.name?.[0]?.given),r.name?.[0]?.family].filter(Boolean).join(' ')||r.resourceType;}
function normalize(bundle){
 if(bundle?.resourceType!=='Bundle'||!Array.isArray(bundle.entry))throw Error('Choisissez un Bundle FHIR JSON contenant des ressources.');
 const nodes=bundle.entry.filter(e=>e.resource?.resourceType).map((e,i)=>({key:e.fullUrl||`${e.resource.resourceType}/${e.resource.id||'entry-'+i}`,r:e.resource}));
 const patients=nodes.filter(n=>n.r.resourceType==='Patient');
 if(patients.length!==1)throw Error('Cette version attend exactement un patient par Bundle.');
 const aliases=new Map();
 for(const n of nodes){
  for(const alias of new Set([n.key,n.r.id?`${n.r.resourceType}/${n.r.id}`:null].filter(Boolean))){
   if(aliases.has(alias)&&aliases.get(alias)!==n)throw Error('Identifiants de ressources ambigus ou dupliqués : '+alias);
   aliases.set(alias,n);
  }
 }
 const resolve=ref=>aliases.get(typeof ref==='string'?ref:ref?.reference);
 const warnings=[];
 for(const n of nodes){
  const patientRef=n.r.subject||n.r.patient;
  if(patientRef?.reference&&resolve(patientRef)!==patients[0])throw Error('Une ressource désigne un autre patient ou un patient non résolu. Import refusé.');
  n.label=label(n.r);n.date=dateOf(n.r);n.links=references(n.r).map(x=>({...x,node:resolve(x.ref)}));
  for(const l of n.links)if(!l.node)warnings.push(`${n.r.resourceType}/${n.r.id||'?'} : référence non résolue ${l.ref}`);
 }
 const procedures=nodes.filter(n=>n.r.resourceType==='Procedure');
 const acts=procedures.filter(n=>profile(n.r,'taussig-catheterization')||!arr(n.r.partOf).some(p=>resolve(p)?.r.resourceType==='Procedure')).sort((a,b)=>(a.date||'9999').localeCompare(b.date||'9999'));
 const actSet=new Set(acts);
 function parentAct(n,seen=new Set()){
  if(!n||seen.has(n))return null;
  if(actSet.has(n))return n;
  seen.add(n);
  for(const p of arr(n.r.partOf)){const found=parentAct(resolve(p),seen);if(found)return found;}
  // An Encounter reference is an explicit episode link, but only unambiguous acts qualify.
  if(n.r.encounter){const matches=acts.filter(a=>resolve(a.r.encounter)===resolve(n.r.encounter)&&resolve(n.r.encounter));if(matches.length===1)return matches[0];}
  return null;
 }
 for(const n of nodes)n.act=parentAct(n);
 for(const a of acts){
  a.children=nodes.filter(n=>n!==a&&n.act===a);
  a.gestures=a.children.filter(n=>n.r.resourceType==='Procedure');
  a.observations=a.children.filter(n=>n.r.resourceType==='Observation');
  a.conditions=[...new Set([a,...a.gestures].flatMap(n=>arr(n.r.reasonReference).map(resolve)).filter(n=>n?.r.resourceType==='Condition'))];
  a.devices=[...new Set([a,...a.gestures].flatMap(n=>arr(n.r.focalDevice).map(f=>resolve(f.manipulated))).filter(n=>n?.r.resourceType==='Device'))];
  a.title=a.gestures.map(n=>n.label).join(' · ')||a.label;
 }
 const devices=nodes.filter(n=>n.r.resourceType==='Device');
 const conditions=nodes.filter(n=>n.r.resourceType==='Condition');
 const diagnosis=conditions.filter(n=>profile(n.r,'taussig-cardiac-diagnosis'));
 const dated=nodes.filter(n=>n.date);
 return {bundle,nodes,patient:patients[0],acts,devices,conditions,diagnosis,dated,warnings:[...new Set(warnings)],resolve,
  sourcesFor(n){
   const docs=new Set();const add=x=>{const t=resolve(x);if(t?.r.resourceType==='DocumentReference')docs.add(t);};
   add(n.r.meta?.source);arr(n.r.derivedFrom).forEach(add);
   nodes.filter(x=>x.r.resourceType==='Provenance'&&arr(x.r.target).some(t=>resolve(t)===n)).forEach(p=>arr(p.r.entity).forEach(e=>add(e.what)));
   return [...docs];
  },
  linkedActs(n){return acts.filter(a=>a===n||n.act===a||a.devices.includes(n)||a.conditions.includes(n));}
 };
}
function measurementKey(n){const r=n.r;return JSON.stringify([r.code,r.bodySite,r.method,r.valueQuantity?.system,r.valueQuantity?.code||r.valueQuantity?.unit,arr(r.extension).filter(e=>!e.url?.endsWith('/procedurePhase')),arr(r.partOf).map(p=>p.reference)]);}
function observationGroups(observations){
 const groups=new Map();
 for(const n of observations){const key=measurementKey(n);if(!groups.has(key))groups.set(key,{label:n.label,site:concept(n.r.bodySite),items:[]});groups.get(key).items.push(n);}
 return [...groups.values()];
}
const api={normalize,concept,phase,profile,dateOf,label,observationGroups};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.TrajectoryModel=api;
})(typeof window!=='undefined'?window:globalThis);
