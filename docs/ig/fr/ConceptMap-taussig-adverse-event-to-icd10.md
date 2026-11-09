# TAUSSIG — Complications vers CIM-10 - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Complications vers CIM-10 (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-adverse-event-to-icd10",
  "url" : "https://taussig/fhir/ConceptMap/taussig-adverse-event-to-icd10",
  "version" : "0.8.1",
  "name" : "TaussigAdverseEventToIcd10",
  "title" : "TAUSSIG — Complications vers CIM-10",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (complications) vers CIM-10. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-adverse-event",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-adverse-event",
    "target" : "http://hl7.org/fhir/sid/icd-10",
    "element" : [{
      "code" : "TAUSSIG-AE-0001",
      "display" : "Absence de complication post-procédurale",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0002",
      "display" : "Complication liée à une intervention",
      "target" : [{
        "code" : "T81.8",
        "display" : "Other complications of procedures, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "catégorie résiduelle ; d'autres complications ont leur code (T81.0, T81.2…)"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0003",
      "display" : "Arrêt cardiaque pendant l'intervention",
      "target" : [{
        "code" : "T81.8",
        "display" : "Other complications of procedures, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "l'arrêt cardiaque se code I46 avec une cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0004",
      "display" : "Fibrillation atriale",
      "target" : [{
        "code" : "I48",
        "display" : "Atrial fibrillation and flutter",
        "equivalence" : "wider",
        "comment" : "fibrillation et flutter"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0005",
      "display" : "Flutter atrial",
      "target" : [{
        "code" : "I48",
        "display" : "Atrial fibrillation and flutter",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0006",
      "display" : "Trouble du rythme post-procédural",
      "target" : [{
        "code" : "I49.9",
        "display" : "Cardiac arrhythmia, unspecified",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0007",
      "display" : "Bloc atrioventriculaire complet acquis",
      "target" : [{
        "code" : "I44.2",
        "display" : "Atrioventricular block, complete",
        "equivalence" : "equivalent",
        "comment" : "le BAV congénital est codé Q24.6"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0008",
      "display" : "Tachycardie jonctionnelle ectopique post-procédurale",
      "target" : [{
        "code" : "I97.1",
        "display" : "Other functional disturbances following cardiac surgery",
        "equivalence" : "inexact",
        "comment" : "suite de chirurgie cardiaque, pas de cathétérisme"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0009",
      "display" : "Tachycardie ventriculaire",
      "target" : [{
        "code" : "I47.2",
        "display" : "Ventricular tachycardia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0010",
      "display" : "Arythmie nécessitant l'implantation d'un stimulateur",
      "target" : [{
        "code" : "I97.1",
        "display" : "Other functional disturbances following cardiac surgery",
        "equivalence" : "inexact",
        "comment" : "suite de chirurgie cardiaque"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0011",
      "display" : "Perforation d'une cavité cardiaque ou d'un vaisseau pendant le cathétérisme",
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
      "code" : "TAUSSIG-AE-0012",
      "display" : "Tamponnade cardiaque post-procédurale",
      "target" : [{
        "code" : "I31.9",
        "display" : "Disease of pericardium, unspecified",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0013",
      "display" : "Décès peropératoire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0014",
      "display" : "Communication interatriale résiduelle ou récidivante post-procédurale",
      "target" : [{
        "code" : "Q21.1",
        "display" : "Atrial septal defect",
        "equivalence" : "wider",
        "comment" : "défaut septal persistant"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0015",
      "display" : "Embolisation d'un dispositif cardiovasculaire pendant le cathétérisme",
      "target" : [{
        "code" : "T82.8",
        "display" : "Other specified complications of cardiac and vascular prosthetic devices, implants and grafts",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0016",
      "display" : "Dysfonction de dispositif (complication de cathétérisme)",
      "target" : [{
        "code" : "T82.5",
        "display" : "Mechanical complication of other cardiac and vascular devices and implants",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0017",
      "display" : "Corps étranger intracardiaque post-procédural",
      "target" : [{
        "code" : "T81.5",
        "display" : "Foreign body accidentally left in body cavity or operation wound following a procedure",
        "equivalence" : "wider",
        "comment" : "corrigé v6.1 — crossmap IPCCC : T81.8 ; corps étranger laissé lors d'un acte"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0018",
      "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
      "target" : [{
        "code" : "T82.8",
        "display" : "Other specified complications of cardiac and vascular prosthetic devices, implants and grafts",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0019",
      "display" : "Perméabilité résiduelle du canal artériel post-procédurale",
      "target" : [{
        "code" : "Q25.0",
        "display" : "Patent ductus arteriosus",
        "equivalence" : "wider",
        "comment" : "défaut persistant ; corrigé v6.1 — crossmap IPCCC : I77.8 ; perméabilité du canal artériel"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0020",
      "display" : "Communication interventriculaire résiduelle ou récidivante post-procédurale",
      "target" : [{
        "code" : "Q21.0",
        "display" : "Ventricular septal defect",
        "equivalence" : "wider",
        "comment" : "défaut septal persistant"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0021",
      "display" : "Communication interatriale résiduelle",
      "target" : [{
        "code" : "Q21.1",
        "display" : "Atrial septal defect",
        "equivalence" : "wider",
        "comment" : "défaut septal persistant"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0022",
      "display" : "Régurgitation aortique après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "T81.2",
        "display" : "Accidental puncture and laceration during a procedure, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "déchirure accidentelle ; la conséquence valvulaire n'est pas codée"
      },
      {
        "code" : "Y60.5",
        "display" : "During heart catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0023",
      "display" : "Régurgitation mitrale après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "T81.2",
        "display" : "Accidental puncture and laceration during a procedure, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "déchirure accidentelle ; la conséquence valvulaire n'est pas codée"
      },
      {
        "code" : "Y60.5",
        "display" : "During heart catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0024",
      "display" : "Dysfonction de prothèse valvulaire après lésion pendant le cathétérisme",
      "target" : [{
        "code" : "T81.2",
        "display" : "Accidental puncture and laceration during a procedure, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "déchirure accidentelle ; la dysfonction de prothèse n'est pas codée"
      },
      {
        "code" : "Y60.5",
        "display" : "During heart catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0025",
      "display" : "Régurgitation pulmonaire après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "T81.2",
        "display" : "Accidental puncture and laceration during a procedure, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "déchirure accidentelle ; la conséquence valvulaire n'est pas codée"
      },
      {
        "code" : "Y60.5",
        "display" : "During heart catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0026",
      "display" : "Régurgitation tricuspide après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "T81.2",
        "display" : "Accidental puncture and laceration during a procedure, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "déchirure accidentelle ; la conséquence valvulaire n'est pas codée"
      },
      {
        "code" : "Y60.5",
        "display" : "During heart catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0027",
      "display" : "Perte du pouls après cathétérisme",
      "target" : [{
        "code" : "T81.7",
        "display" : "Vascular complications following a procedure, not elsewhere classified",
        "equivalence" : "wider"
      },
      {
        "code" : "Y84.0",
        "display" : "Cardiac catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0028",
      "display" : "Pseudoanévrisme au site d'abord",
      "target" : [{
        "code" : "T81.7",
        "display" : "Vascular complications following a procedure, not elsewhere classified",
        "equivalence" : "wider",
        "comment" : "corrigé v6.1 — crossmap IPCCC : T81.8 ; complication vasculaire d'un acte"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0029",
      "display" : "Dissection artérielle au site d'abord",
      "target" : [{
        "code" : "T81.7",
        "display" : "Vascular complications following a procedure, not elsewhere classified",
        "equivalence" : "wider"
      },
      {
        "code" : "Y84.0",
        "display" : "Cardiac catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0030",
      "display" : "Extravasation de produit de contraste",
      "target" : [{
        "code" : "T81.7",
        "display" : "Vascular complications following a procedure, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "complication vasculaire ; l'extravasation n'est pas forcément vasculaire"
      },
      {
        "code" : "Y84.0",
        "display" : "Cardiac catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0031",
      "display" : "Fistule artérioveineuse au site d'abord",
      "target" : [{
        "code" : "T81.7",
        "display" : "Vascular complications following a procedure, not elsewhere classified",
        "equivalence" : "wider"
      },
      {
        "code" : "Y84.0",
        "display" : "Cardiac catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0032",
      "display" : "Perforation artérielle au site d'abord",
      "target" : [{
        "code" : "T81.7",
        "display" : "Vascular complications following a procedure, not elsewhere classified",
        "equivalence" : "wider"
      },
      {
        "code" : "Y84.0",
        "display" : "Cardiac catheterization",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0033",
      "display" : "Problème d'équipement pendant le cathétérisme",
      "target" : [{
        "code" : "T82.5",
        "display" : "Mechanical complication of other cardiac and vascular devices and implants",
        "equivalence" : "inexact",
        "comment" : "un problème d'équipement n'est pas une complication du patient"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0034",
      "display" : "Embolisation d'un stent",
      "target" : [{
        "code" : "T82.8",
        "display" : "Other specified complications of cardiac and vascular prosthetic devices, implants and grafts",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0035",
      "display" : "Rupture d'un conduit ou d'un vaisseau après implantation de stent",
      "target" : [{
        "code" : "T82.8",
        "display" : "Other specified complications of cardiac and vascular prosthetic devices, implants and grafts",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0036",
      "display" : "Compression coronaire après implantation de dispositif transluminal",
      "target" : [{
        "code" : "T82.5",
        "display" : "Mechanical complication of other cardiac and vascular devices and implants",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0037",
      "display" : "Stent laissé déployé en position non prévue après migration ou embolisation",
      "target" : [{
        "code" : "T82.5",
        "display" : "Mechanical complication of other cardiac and vascular devices and implants",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0039",
      "display" : "Embolisation (délogement) d'un coil introduit par cathéter",
      "target" : [{
        "code" : "T82.8",
        "display" : "Other specified complications of cardiac and vascular prosthetic devices, implants and grafts",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0040",
      "display" : "Thrombose vasculaire ou de conduit post-procédurale",
      "target" : [{
        "code" : "T81.7",
        "display" : "Vascular complications following a procedure, not elsewhere classified",
        "equivalence" : "wider",
        "comment" : "corrigé v6.1 — crossmap IPCCC : T81.0 ; T81.0 désigne une hémorragie ; une thrombose est une complication vasculaire"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0041",
      "display" : "Hémorragie post-procédurale",
      "target" : [{
        "code" : "T81.0",
        "display" : "Haemorrhage and haematoma complicating a procedure, not elsewhere classified",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0042",
      "display" : "Anévrisme aortique post-procédural",
      "target" : [{
        "code" : "I71.2",
        "display" : "Thoracic aortic aneurysm, without mention of rupture",
        "equivalence" : "inexact",
        "comment" : "lésion ; le concept exige l'origine post-procédurale"
      },
      {
        "code" : "Y83.8",
        "display" : "Other surgical procedures",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0043",
      "display" : "Anévrisme de l'aorte au site de coarctation après intervention",
      "target" : [{
        "code" : "I71.2",
        "display" : "Thoracic aortic aneurysm, without mention of rupture",
        "equivalence" : "inexact",
        "comment" : "idem"
      },
      {
        "code" : "Y83.8",
        "display" : "Other surgical procedures",
        "equivalence" : "inexact",
        "comment" : "cause externe"
      }]
    }]
  }]
}

```
