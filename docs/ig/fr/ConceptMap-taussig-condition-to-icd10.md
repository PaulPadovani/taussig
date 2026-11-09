# TAUSSIG — Conditions cardiaques évolutives vers CIM-10 - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Conditions cardiaques évolutives vers CIM-10 (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-condition-to-icd10",
  "url" : "https://taussig/fhir/ConceptMap/taussig-condition-to-icd10",
  "version" : "0.8.1",
  "name" : "TaussigConditionToIcd10",
  "title" : "TAUSSIG — Conditions cardiaques évolutives vers CIM-10",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (conditions cardiaques évolutives) vers CIM-10. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-condition",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-condition",
    "target" : "http://hl7.org/fhir/sid/icd-10",
    "element" : [{
      "code" : "TAUSSIG-COND-0001",
      "display" : "Création/agrandissement de communication interatriale",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0002",
      "display" : "Cerclage de l'artère pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0003",
      "display" : "Anastomose systémico-pulmonaire de Blalock-Taussig modifiée (MBTS)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0004",
      "display" : "Intervention de Norwood",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0005",
      "display" : "Anastomose cavopulmonaire unidirectionnelle (Glenn unidirectionnel)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0006",
      "display" : "Anastomose cavopulmonaire bidirectionnelle (Glenn bidirectionnel)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0007",
      "display" : "Anastomose cavopulmonaire bidirectionnelle bilatérale",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0008",
      "display" : "Fontan (TCPC), conduit extracardiaque, fenestré",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0009",
      "display" : "Fontan (TCPC), conduit extracardiaque, non fenestré",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0010",
      "display" : "Fontan (TCPC), tunnel latéral, fenestré",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0011",
      "display" : "Fontan (TCPC), tunnel latéral, non fenestré",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0012",
      "display" : "Réparation à un ventricule et demi",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0013",
      "display" : "Palliation, autre",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0014",
      "display" : "Endocardite infectieuse",
      "target" : [{
        "code" : "I33.0",
        "display" : "Acute and subacute infective endocarditis",
        "equivalence" : "equivalent",
        "comment" : "endocardite infectieuse"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0015",
      "display" : "Anomalie acquise de la veine cave supérieure",
      "target" : [{
        "code" : "I87.9",
        "display" : "Disorder of vein, unspecified",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0016",
      "display" : "Anomalie acquise de la veine cave inférieure",
      "target" : [{
        "code" : "I87.9",
        "display" : "Disorder of vein, unspecified",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0017",
      "display" : "Anomalie acquise du sinus coronaire",
      "target" : [{
        "code" : "I87.1",
        "display" : "Compression of vein",
        "equivalence" : "narrower",
        "comment" : "compression seulement"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0018",
      "display" : "Anomalie acquise des veines pulmonaires",
      "target" : [{
        "code" : "I28.9",
        "display" : "Disease of pulmonary vessels, unspecified",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0019",
      "display" : "Anomalie acquise de l'oreillette droite",
      "target" : [{
        "code" : "I51.8",
        "display" : "Other ill-defined heart diseases",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0020",
      "display" : "Anomalie acquise de l'oreillette gauche",
      "target" : [{
        "code" : "I51.8",
        "display" : "Other ill-defined heart diseases",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0021",
      "display" : "Communication interatriale résiduelle (CIA)",
      "target" : [{
        "code" : "Q21.1",
        "display" : "Atrial septal defect",
        "equivalence" : "wider",
        "comment" : "défaut septal d'origine persistant"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0022",
      "display" : "Régurgitation tricuspide résiduelle",
      "target" : [{
        "code" : "Q22.8",
        "display" : "Other congenital malformations of tricuspid valve",
        "equivalence" : "inexact",
        "comment" : "lésion valvulaire résiduelle, pas nécessairement congénitale"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0023",
      "display" : "Sténose mitrale résiduelle",
      "target" : [{
        "code" : "Q23.2",
        "display" : "Congenital mitral stenosis",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0024",
      "display" : "Régurgitation mitrale résiduelle",
      "target" : [{
        "code" : "Q23.3",
        "display" : "Congenital mitral insufficiency",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0025",
      "display" : "Régurgitation troncale résiduelle",
      "target" : [{
        "code" : "Q24.8",
        "display" : "Other specified congenital malformations of heart",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0026",
      "display" : "Sténose valvulaire pulmonaire résiduelle",
      "target" : [{
        "code" : "Q22.1",
        "display" : "Congenital pulmonary valve stenosis",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0027",
      "display" : "Régurgitation pulmonaire résiduelle",
      "target" : [{
        "code" : "Q22.2",
        "display" : "Congenital pulmonary valve insufficiency",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0028",
      "display" : "Sténose de la néovalve pulmonaire",
      "target" : [{
        "code" : "I37.0",
        "display" : "Pulmonary valve stenosis",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0029",
      "display" : "Régurgitation de la néovalve pulmonaire",
      "target" : [{
        "code" : "I37.1",
        "display" : "Pulmonary valve insufficiency",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0030",
      "display" : "Sténose valvulaire aortique résiduelle",
      "target" : [{
        "code" : "Q23.0",
        "display" : "Congenital stenosis of aortic valve",
        "equivalence" : "inexact",
        "comment" : "lésion valvulaire résiduelle, pas nécessairement congénitale"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0031",
      "display" : "Régurgitation aortique résiduelle",
      "target" : [{
        "code" : "Q23.1",
        "display" : "Congenital insufficiency of aortic valve",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0032",
      "display" : "Sténose de la néovalve aortique d'origine pulmonaire",
      "target" : [{
        "code" : "I35.0",
        "display" : "Aortic (valve) stenosis",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0033",
      "display" : "Régurgitation de la néovalve aortique d'origine pulmonaire",
      "target" : [{
        "code" : "I35.1",
        "display" : "Aortic (valve) insufficiency",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0034",
      "display" : "Sténose acquise de la néovalve aortique d'origine troncale",
      "target" : [{
        "code" : "I35.0",
        "display" : "Aortic (valve) stenosis",
        "equivalence" : "wider",
        "comment" : "néovalve aortique : sténose valvulaire aortique (corrigé v6.1) ; corrigé v6.1 — crossmap IPCCC : Q24.8 ; sténose acquise d'une néovalve aortique : maladie valvulaire aortique non rhumatismale"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0035",
      "display" : "Régurgitation acquise de la néovalve aortique d'origine troncale",
      "target" : [{
        "code" : "I35.1",
        "display" : "Aortic (valve) insufficiency",
        "equivalence" : "wider",
        "comment" : "néovalve aortique : insuffisance valvulaire aortique (corrigé v6.1) ; corrigé v6.1 — crossmap IPCCC : I38 ; régurgitation d'une néovalve aortique : la valve est connue"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0036",
      "display" : "Composante ventriculaire résiduelle de canal atrioventriculaire",
      "target" : [{
        "code" : "Q21.2",
        "display" : "Atrioventricular septal defect",
        "equivalence" : "wider",
        "comment" : "défaut septal d'origine persistant"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0037",
      "display" : "Régurgitation résiduelle de la valve atrioventriculaire commune",
      "target" : [{
        "code" : "Q24.8",
        "display" : "Other specified congenital malformations of heart",
        "equivalence" : "inexact",
        "comment" : "lésion valvulaire résiduelle codée par un code congénital résiduel"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0038",
      "display" : "Sténose acquise de la valve atrioventriculaire commune (connexions biventriculaires)",
      "target" : [{
        "code" : "I38",
        "display" : "Endocarditis, valve unspecified",
        "equivalence" : "wider",
        "comment" : "I38 inclut la sténose d'une valve non précisée ; la valve auriculoventriculaire commune n'est ni mitrale ni tricuspide"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0039",
      "display" : "Dilatation ventriculaire droite acquise",
      "target" : [{
        "code" : "I51.7",
        "display" : "Cardiomegaly",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0040",
      "display" : "Hypertrophie ventriculaire droite acquise",
      "target" : [{
        "code" : "I51.7",
        "display" : "Cardiomegaly",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0041",
      "display" : "Anévrisme ventriculaire droit acquis",
      "target" : [{
        "code" : "I25.3",
        "display" : "Aneurysm of heart",
        "equivalence" : "inexact",
        "comment" : "I25.3 relève des cardiopathies ischémiques chroniques"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0042",
      "display" : "Dysfonction ventriculaire droite",
      "target" : [{
        "code" : "I51.8",
        "display" : "Other ill-defined heart diseases",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0043",
      "display" : "Obstruction résiduelle de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "Q24.8",
        "display" : "Other specified congenital malformations of heart",
        "equivalence" : "inexact",
        "comment" : "lésion résiduelle codée par un code congénital résiduel"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0044",
      "display" : "Dilatation ventriculaire gauche acquise",
      "target" : [{
        "code" : "I51.7",
        "display" : "Cardiomegaly",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0045",
      "display" : "Hypertrophie ventriculaire gauche acquise",
      "target" : [{
        "code" : "I51.7",
        "display" : "Cardiomegaly",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0046",
      "display" : "Anévrisme ventriculaire gauche acquis",
      "target" : [{
        "code" : "I25.3",
        "display" : "Aneurysm of heart",
        "equivalence" : "inexact",
        "comment" : "I25.3 relève des cardiopathies ischémiques chroniques"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0047",
      "display" : "Défaillance ventriculaire gauche",
      "target" : [{
        "code" : "I50.1",
        "display" : "Left ventricular failure",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0048",
      "display" : "Complication post-procédurale de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "I51.8",
        "display" : "Other ill-defined heart diseases",
        "equivalence" : "inexact",
        "comment" : "complication post-procédurale (I97 / T81) codée comme maladie mal définie"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0049",
      "display" : "Sténose sous-aortique acquise",
      "target" : [{
        "code" : "I51.8",
        "display" : "Other ill-defined heart diseases",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0050",
      "display" : "Sténose sous-pulmonaire acquise",
      "target" : [{
        "code" : "I51.8",
        "display" : "Other ill-defined heart diseases",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0051",
      "display" : "Communication interventriculaire résiduelle (CIV)",
      "target" : [{
        "code" : "Q21.0",
        "display" : "Ventricular septal defect",
        "equivalence" : "wider",
        "comment" : "défaut septal d'origine persistant"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0052",
      "display" : "Cardiomyopathie restrictive",
      "target" : [{
        "code" : "I42.5",
        "display" : "Other restrictive cardiomyopathy",
        "equivalence" : "equivalent",
        "comment" : "code CIM-10 de la cardiomyopathie restrictive"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0053",
      "display" : "Anomalie acquise de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "I28.8",
        "display" : "Other specified diseases of pulmonary vessels",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0054",
      "display" : "Sténose post-procédurale du tronc de l'artère pulmonaire",
      "target" : [{
        "code" : "I28.8",
        "display" : "Other specified diseases of pulmonary vessels",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0055",
      "display" : "Sténose résiduelle de l'artère pulmonaire droite",
      "target" : [{
        "code" : "Q25.6",
        "display" : "Stenosis of pulmonary artery",
        "equivalence" : "inexact",
        "comment" : "sténose résiduelle, possiblement post-opératoire"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0056",
      "display" : "Sténose résiduelle de l'artère pulmonaire gauche",
      "target" : [{
        "code" : "Q25.6",
        "display" : "Stenosis of pulmonary artery",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0057",
      "display" : "Hypertension artérielle pulmonaire",
      "target" : [{
        "code" : "I27.0",
        "display" : "Primary pulmonary hypertension",
        "equivalence" : "narrower",
        "comment" : "l'HTAP du concept inclut les formes associées aux cardiopathies congénitales"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0058",
      "display" : "Embolie pulmonaire",
      "target" : [{
        "code" : "I26.9",
        "display" : "Pulmonary embolism without mention of acute cor pulmonale",
        "equivalence" : "narrower",
        "comment" : "sans cœur pulmonaire aigu seulement"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0059",
      "display" : "Sténose aortique supravalvulaire acquise",
      "target" : [{
        "code" : "I77.1",
        "display" : "Stricture of artery",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0060",
      "display" : "Dilatation acquise de l'aorte ascendante et/ou de la racine aortique",
      "target" : [{
        "code" : "I71.9",
        "display" : "Aortic aneurysm of unspecified site, without mention of rupture",
        "equivalence" : "inexact",
        "comment" : "une dilatation n'est pas un anévrisme"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0061",
      "display" : "Dilatation de la racine aortique",
      "target" : [{
        "code" : "Q25.4",
        "display" : "Other congenital malformations of aorta",
        "equivalence" : "inexact",
        "comment" : "la dilatation de la racine peut être acquise"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0062",
      "display" : "Dissection aortique",
      "target" : [{
        "code" : "I71.0",
        "display" : "Dissection of aorta [any part]",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0063",
      "display" : "Anévrisme aortique",
      "target" : [{
        "code" : "I71.2",
        "display" : "Thoracic aortic aneurysm, without mention of rupture",
        "equivalence" : "narrower",
        "comment" : "anévrisme thoracique non rompu seulement"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0064",
      "display" : "Coarctation aortique résiduelle",
      "target" : [{
        "code" : "Q25.1",
        "display" : "Coarctation of aorta",
        "equivalence" : "wider",
        "comment" : "défaut d'origine persistant"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0065",
      "display" : "Complication coronaire post-procédurale",
      "target" : [{
        "code" : "I77.8",
        "display" : "Other specified disorders of arteries and arterioles",
        "equivalence" : "inexact",
        "comment" : "complication post-procédurale codée comme maladie artérielle"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0066",
      "display" : "Persistance résiduelle du canal artériel (PDA)",
      "target" : [{
        "code" : "Q25.0",
        "display" : "Patent ductus arteriosus",
        "equivalence" : "wider",
        "comment" : "défaut d'origine persistant"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0067",
      "display" : "Complication liée à un conduit cardiaque",
      "target" : [{
        "code" : "T82.9",
        "display" : "Unspecified complication of cardiac and vascular prosthetic device, implant and graft",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0068",
      "display" : "Obstruction d'anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "T82.5",
        "display" : "Mechanical complication of other cardiac and vascular devices and implants",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0069",
      "display" : "Obstruction partielle d'anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "T82.5",
        "display" : "Mechanical complication of other cardiac and vascular devices and implants",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0070",
      "display" : "Obstruction complète d'anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "T82.5",
        "display" : "Mechanical complication of other cardiac and vascular devices and implants",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0071",
      "display" : "Défaillance d'autogreffe pulmonaire",
      "target" : [{
        "code" : "T82.8",
        "display" : "Other specified complications of cardiac and vascular prosthetic devices, implants and grafts",
        "equivalence" : "inexact",
        "comment" : "une autogreffe n'est pas une prothèse"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0072",
      "display" : "Circulation de Fontan défaillante",
      "target" : [{
        "code" : "T81.8",
        "display" : "Other complications of procedures, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "complication d'acte résiduelle ; l'échec de la circulation de Fontan n'y est pas décrit"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0073",
      "display" : "Épanchement péricardique",
      "target" : [{
        "code" : "I31.3",
        "display" : "Pericardial effusion (noninflammatory)",
        "equivalence" : "narrower",
        "comment" : "épanchement non inflammatoire seulement"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0074",
      "display" : "Complication après transplantation cardiaque ou pulmonaire",
      "target" : [{
        "code" : "I97.9",
        "display" : "Postprocedural disorder of circulatory system, unspecified",
        "equivalence" : "inexact",
        "comment" : "les complications de greffe relèvent de T86"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0075",
      "display" : "Sténose acquise des veines pulmonaires",
      "target" : [{
        "code" : "I28.8",
        "display" : "Other specified diseases of pulmonary vessels",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0076",
      "display" : "Obstruction d'une veine systémique",
      "target" : [{
        "code" : "I87.1",
        "display" : "Compression of vein",
        "equivalence" : "inexact",
        "comment" : "compression ≠ obstruction"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0077",
      "display" : "Collatérale(s) veino-veineuse(s) systémique(s)",
      "target" : [{
        "code" : "Q26.8",
        "display" : "Other congenital malformations of great veins",
        "equivalence" : "inexact",
        "comment" : "collatérales le plus souvent acquises après dérivation cavopulmonaire"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0078",
      "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) acquise(s)",
      "target" : [{
        "code" : "I77.8",
        "display" : "Other specified disorders of arteries and arterioles",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0079",
      "display" : "Fistules (malformations) artérioveineuses pulmonaires acquises",
      "target" : [{
        "code" : "I28.0",
        "display" : "Arteriovenous fistula of pulmonary vessels",
        "equivalence" : "equivalent",
        "comment" : "I28.0 exclut la forme congénitale (Q25.7)"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0080",
      "display" : "Cardiomyopathie dilatée",
      "target" : [{
        "code" : "I42.0",
        "display" : "Dilated cardiomyopathy",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0081",
      "display" : "Cardiomyopathie hypertrophique",
      "target" : [{
        "code" : "I42.2",
        "display" : "Other hypertrophic cardiomyopathy",
        "equivalence" : "inexact",
        "comment" : "la forme obstructive a son propre code (I42.1)"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0082",
      "display" : "Cardiomyopathie hypertrophique obstructive du ventricule gauche",
      "target" : [{
        "code" : "I42.1",
        "display" : "Obstructive hypertrophic cardiomyopathy",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0083",
      "display" : "Myocardite (cardiomyopathie inflammatoire)",
      "target" : [{
        "code" : "I51.4",
        "display" : "Myocarditis, unspecified",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0084",
      "display" : "Maladie de Kawasaki",
      "target" : [{
        "code" : "M30.3",
        "display" : "Mucocutaneous lymph node syndrome [Kawasaki]",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0085",
      "display" : "Infarctus du myocarde",
      "target" : [{
        "code" : "I21.9",
        "display" : "Acute myocardial infarction, unspecified",
        "equivalence" : "narrower",
        "comment" : "infarctus aigu seulement"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0086",
      "display" : "État après transplantation cardiaque",
      "target" : [{
        "code" : "Z94.1",
        "display" : "Heart transplant status",
        "equivalence" : "equivalent",
        "comment" : "statut de greffe cardiaque (ajouté v6.1) ; corrigé v6.1 — crossmap IPCCC : (vide) ; statut de greffe cardiaque (absent du crossmap)"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0087",
      "display" : "Maladie vasculaire pulmonaire irréversible",
      "target" : [{
        "code" : "I27.8",
        "display" : "Other specified pulmonary heart diseases",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0088",
      "display" : "Maladie vasculaire pulmonaire irréversible due à une cardiopathie congénitale (syndrome d'Eisenmenger)",
      "target" : [{
        "code" : "I27.8",
        "display" : "Other specified pulmonary heart diseases",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0089",
      "display" : "Trouble du rythme cardiaque",
      "target" : [{
        "code" : "I49.9",
        "display" : "Cardiac arrhythmia, unspecified",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0090",
      "display" : "Fibrillation atriale",
      "target" : [{
        "code" : "I48",
        "display" : "Atrial fibrillation and flutter",
        "equivalence" : "wider",
        "comment" : "I48 regroupe fibrillation et flutter"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0091",
      "display" : "Flutter atrial",
      "target" : [{
        "code" : "I48",
        "display" : "Atrial fibrillation and flutter",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0092",
      "display" : "Trouble du rythme atrial",
      "target" : [{
        "code" : "I49.8",
        "display" : "Other specified cardiac arrhythmias",
        "equivalence" : "inexact",
        "comment" : "la fibrillation et le flutter sont codés en I48"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0093",
      "display" : "Trouble du rythme de la jonction atrioventriculaire",
      "target" : [{
        "code" : "I49.8",
        "display" : "Other specified cardiac arrhythmias",
        "equivalence" : "inexact",
        "comment" : "les tachycardies jonctionnelles sont codées en I47.1"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0094",
      "display" : "Trouble du rythme ventriculaire",
      "target" : [{
        "code" : "I49.8",
        "display" : "Other specified cardiac arrhythmias",
        "equivalence" : "inexact",
        "comment" : "la tachycardie ventriculaire est codée en I47.2"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0095",
      "display" : "Tachycardie par réentrée atrioventriculaire avec préexcitation manifeste (Wolff-Parkinson-White)",
      "target" : [{
        "code" : "I45.6",
        "display" : "Pre-excitation syndrome",
        "equivalence" : "wider",
        "comment" : "I45.6 couvre tous les syndromes de préexcitation"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0096",
      "display" : "Bloc atrioventriculaire",
      "target" : [{
        "code" : "I44.3",
        "display" : "Other and unspecified atrioventricular block",
        "equivalence" : "inexact",
        "comment" : "le BAV complet est codé en I44.2"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0097",
      "display" : "Bloc atrioventriculaire complet acquis",
      "target" : [{
        "code" : "I44.2",
        "display" : "Atrioventricular block, complete",
        "equivalence" : "wider",
        "comment" : "ne précise pas l'origine acquise"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0098",
      "display" : "Indication de remplacement programmé d'un stimulateur cardiaque",
      "target" : [{
        "code" : "Z45.0",
        "display" : "Adjustment and management of cardiac devices",
        "equivalence" : "wider",
        "comment" : "ajustement et entretien d'un dispositif cardiaque (corrigé v6.1) ; corrigé v6.1 — crossmap IPCCC : T82.9 ; remplacement programmé : ajustement d'un dispositif, pas une complication"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0099",
      "display" : "Entéropathie exsudative post-procédurale",
      "target" : [{
        "code" : "K90.4",
        "display" : "Malabsorption due to intolerance, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "composante lésionnelle ; le concept exige aussi la cause externe"
      },
      {
        "code" : "Y83.8",
        "display" : "Other surgical procedures",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0100",
      "display" : "Bronchite plastique post-procédurale",
      "target" : [{
        "code" : "J98.0",
        "display" : "Diseases of bronchus, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "composante lésionnelle"
      },
      {
        "code" : "J95.8",
        "display" : "Other postprocedural respiratory disorders",
        "equivalence" : "inexact",
        "comment" : "composante post-procédurale"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0101",
      "display" : "Chylothorax",
      "target" : [{
        "code" : "J94.0",
        "display" : "Chylous effusion",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0102",
      "display" : "Embolisation d'un dispositif lors d'un cathétérisme cardiaque antérieur",
      "target" : [{
        "code" : "T82.8",
        "display" : "Other specified complications of cardiac and vascular prosthetic devices, implants and grafts",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0103",
      "display" : "Dysfonction d'un dispositif lors d'un cathétérisme cardiaque antérieur",
      "target" : [{
        "code" : "T82.5",
        "display" : "Mechanical complication of other cardiac and vascular devices and implants",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0104",
      "display" : "Perforation d'une cavité ou d'un vaisseau lors d'un cathétérisme cardiaque antérieur",
      "target" : [{
        "code" : "T81.2",
        "display" : "Accidental puncture and laceration during a procedure, not elsewhere classified",
        "equivalence" : "wider"
      },
      {
        "code" : "Y60.5",
        "display" : "During heart catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe complémentaire"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0105",
      "display" : "Corps étranger intracardiaque post-procédural",
      "target" : [{
        "code" : "T81.5",
        "display" : "Foreign body accidentally left in body cavity or operation wound following a procedure",
        "equivalence" : "wider",
        "comment" : "corps étranger laissé après un acte (corrigé v6.1) ; corrigé v6.1 — crossmap IPCCC : T81.8 ; corps étranger laissé lors d'un acte"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0106",
      "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
      "target" : [{
        "code" : "T82.8",
        "display" : "Other specified complications of cardiac and vascular prosthetic devices, implants and grafts",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0107",
      "display" : "Hémorragie post-procédurale",
      "target" : [{
        "code" : "T81.0",
        "display" : "Haemorrhage and haematoma complicating a procedure, not elsewhere classified",
        "equivalence" : "equivalent"
      }]
    }]
  }]
}

```
