/* Shared age coordinates for every patient; no inferred dates or continuous states. */
(function(root){
'use strict';
function ageAt(birth,date){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(birth||'')||!/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(date||''))return null;
 const b=new Date(birth+'T00:00:00Z'),d=new Date(date),year=d.getUTCFullYear();
 if(!Number.isFinite(+b)||!Number.isFinite(+d))return null;
 const anniversary=y=>Date.UTC(y,b.getUTCMonth(),b.getUTCDate());
 let y=year;if(+d<anniversary(y))y--;
 return y-b.getUTCFullYear()+(+d-anniversary(y))/(anniversary(y+1)-anniversary(y));
}
function frame(model){
 const birth=model.patient.r.birthDate;
 const hasBirth=ageAt(birth,birth)!==null;
 const dates=model.nodes.map(n=>n.date).filter(d=>/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(d||'')).sort();
 const origin=hasBirth?birth:dates[0]?.slice(0,10);
 const ages=dates.map(d=>ageAt(origin,d)).filter(a=>a!==null);
 return {origin,hasBirth,end:Math.min(100,Math.max(18,Math.ceil(Math.max(0,...ages)/6)*6))};
}
function collect(model){
 const Model=root.TrajectoryModel||(typeof require==='function'?require('./model.js'):null);
 const birth=frame(model).origin,events=[],undated=[];
 function add(lane,node,date,label,sub,act=null){const age=ageAt(birth,date);const e={lane,node,date,age,label,sub,act};if(age===null)undated.push(e);else events.push(e);}
 for(const a of model.acts)add('acts',a,a.date,a.title,'Acte',a);
 for(const c of model.conditions){if(c.date)add('conditions',c,c.date,c.label,'Début documenté');else if(!model.diagnosis.includes(c)){
 const acts=model.linkedActs(c);if(acts.length)for(const a of acts)add('conditions',c,a.date,c.label,'Mention dans l’acte · début inconnu',a);else add('conditions',c,null,c.label,'Début inconnu');
 }}
 for(const a of model.acts)for(const d of a.devices)add('devices',d,a.date,d.label,'Présence liée au geste',a);
 // Observations keep their own effective dates, including historical observations.
 for(const n of model.nodes.filter(n=>n.r.resourceType==='Observation'))add(Model.profile(n.r,'taussig-procedure-outcome')?'outcomes':'measures',n,n.date,n.label,'Observation',n.act);
 for(const n of model.nodes.filter(n=>n.r.resourceType==='AdverseEvent'))add('outcomes',n,n.date,n.label,'Événement indésirable',n.act);
 return {events,undated};
}
function ticks(start,end){const span=end-start;const step=span<=1?1/12:span<=3?.25:span<=7?1:span<=20?2:5;const out=[];for(let i=Math.ceil((start-1e-8)/step);i*step<=end+1e-8;i++)out.push(Number((i*step).toFixed(8)));return out;}
function clampRange(start,end){const span=Math.max(1/12,Math.min(100,end-start));start=Math.max(-1,Math.min(100-span,start));return [start,start+span];}
function clusters(events,start,end,width,gap=34){const ordered=events.filter(e=>e.age>=start&&e.age<=end).sort((a,b)=>a.age-b.age);const groups=[];for(const e of ordered){const x=(e.age-start)/(end-start)*width,last=groups.at(-1);if(last&&x-last.x<gap)last.items.push(e);else groups.push({x,items:[e]});}return groups;}
const api={ageAt,frame,collect,ticks,clampRange,clusters};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.TrajectoryTime=api;
})(typeof window!=='undefined'?window:globalThis);
