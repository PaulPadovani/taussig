# TAUSSIG — Complications vers IPCCC - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Complications vers IPCCC (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-adverse-event-to-ipccc",
  "url" : "https://taussig/fhir/ConceptMap/taussig-adverse-event-to-ipccc",
  "version" : "0.8.1",
  "name" : "TaussigAdverseEventToIpccc",
  "title" : "TAUSSIG — Complications vers IPCCC",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (complications) vers IPCCC. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-adverse-event",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-adverse-event",
    "target" : "https://taussig/fhir/CodeSystem/ipccc",
    "element" : [{
      "code" : "TAUSSIG-AE-0001",
      "display" : "Absence de complication post-procédurale",
      "target" : [{
        "code" : "15.90.03",
        "display" : "No postprocedural complications",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0002",
      "display" : "Complication liée à une intervention",
      "target" : [{
        "code" : "15.90.14",
        "display" : "Procedure related complication",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0003",
      "display" : "Arrêt cardiaque pendant l'intervention",
      "target" : [{
        "code" : "15.00.01",
        "display" : "Cardiac arrest during procedure",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0004",
      "display" : "Fibrillation atriale",
      "target" : [{
        "code" : "11.03.08",
        "display" : "Atrial fibrillation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0005",
      "display" : "Flutter atrial",
      "target" : [{
        "code" : "11.03.07",
        "display" : "Atrial flutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0006",
      "display" : "Trouble du rythme post-procédural",
      "target" : [{
        "code" : "11.00.00",
        "display" : "Arrhythmia",
        "equivalence" : "wider",
        "comment" : "trouble du rythme sans précision post-procédurale"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0007",
      "display" : "Bloc atrioventriculaire complet acquis",
      "target" : [{
        "code" : "11.06.10",
        "display" : "Acquired complete atrioventricular block",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0008",
      "display" : "Tachycardie jonctionnelle ectopique post-procédurale",
      "target" : [{
        "code" : "11.04.12",
        "display" : "Junctional ectopic tachycardia (His bundle): post-op",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0009",
      "display" : "Tachycardie ventriculaire",
      "target" : [{
        "code" : "11.05.06",
        "display" : "Ventricular tachycardia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0010",
      "display" : "Arythmie nécessitant l'implantation d'un stimulateur",
      "target" : [{
        "code" : "15.60.06",
        "display" : "Procedure related non-heart block arrhythmia requiring permanent pacemaker system",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0011",
      "display" : "Perforation d'une cavité cardiaque ou d'un vaisseau pendant le cathétérisme",
      "target" : [{
        "code" : "15.50.03",
        "display" : "Inadvertent perforation of cardiac chamber or vessel during cardiac catheterisation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0012",
      "display" : "Tamponnade cardiaque post-procédurale",
      "target" : [{
        "code" : "15.83.14",
        "display" : "Postprocedural cardiac tamponade",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0013",
      "display" : "Décès peropératoire",
      "target" : [{
        "code" : "12.33.31",
        "display" : "Intraoperative death",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0014",
      "display" : "Communication interatriale résiduelle ou récidivante post-procédurale",
      "target" : [{
        "code" : "15.10.72",
        "display" : "Postprocedural residual or recurrent interatrial communication ('ASD')",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0015",
      "display" : "Embolisation d'un dispositif cardiovasculaire pendant le cathétérisme",
      "target" : [{
        "code" : "15.51.47",
        "display" : "Embolisation of cardiovascular device during cardiac catheterisation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0016",
      "display" : "Dysfonction de dispositif (complication de cathétérisme)",
      "target" : [{
        "code" : "15.51.50",
        "display" : "Device malfunction during cardiac catheterisation procedure",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0017",
      "display" : "Corps étranger intracardiaque post-procédural",
      "target" : [{
        "code" : "15.80.17",
        "display" : "Postprocedural retained foreign body",
        "equivalence" : "wider",
        "comment" : "corps étranger retenu, sans précision du site"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0018",
      "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
      "target" : [{
        "code" : "15.50.37",
        "display" : "Embolisation of catheter introduced device",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0019",
      "display" : "Perméabilité résiduelle du canal artériel post-procédurale",
      "target" : [{
        "code" : "15.39.05",
        "display" : "Postprocedural residual arterial duct (ductus arteriosus) patency",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0020",
      "display" : "Communication interventriculaire résiduelle ou récidivante post-procédurale",
      "target" : [{
        "code" : "15.22.13",
        "display" : "Postprocedural residual or recurrent ventricular septal defect (VSD)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0021",
      "display" : "Communication interatriale résiduelle",
      "target" : [{
        "code" : "15.10.63",
        "display" : "Residual interatrial communication ('ASD')",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0022",
      "display" : "Régurgitation aortique après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "15.50.20",
        "display" : "Traumatic damage to heart valve during cardiovascular catheterisation procedure",
        "equivalence" : "wider",
        "comment" : "lésion valvulaire traumatique, toute valve et toute conséquence"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0023",
      "display" : "Régurgitation mitrale après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "15.50.20",
        "display" : "Traumatic damage to heart valve during cardiovascular catheterisation procedure",
        "equivalence" : "wider",
        "comment" : "lésion valvulaire traumatique, toute valve et toute conséquence"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0024",
      "display" : "Dysfonction de prothèse valvulaire après lésion pendant le cathétérisme",
      "target" : [{
        "code" : "15.50.20",
        "display" : "Traumatic damage to heart valve during cardiovascular catheterisation procedure",
        "equivalence" : "wider",
        "comment" : "lésion valvulaire traumatique"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0025",
      "display" : "Régurgitation pulmonaire après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "15.50.20",
        "display" : "Traumatic damage to heart valve during cardiovascular catheterisation procedure",
        "equivalence" : "wider",
        "comment" : "lésion valvulaire traumatique, toute valve et toute conséquence"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0026",
      "display" : "Régurgitation tricuspide après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "15.50.20",
        "display" : "Traumatic damage to heart valve during cardiovascular catheterisation procedure",
        "equivalence" : "wider",
        "comment" : "lésion valvulaire traumatique, toute valve et toute conséquence"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0027",
      "display" : "Perte du pouls après cathétérisme",
      "target" : [{
        "code" : "15.50.11",
        "display" : "Lost pulse after cardiac catheterisation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0028",
      "display" : "Pseudoanévrisme au site d'abord",
      "target" : [{
        "code" : "15.60.23",
        "display" : "Pseudo-aneurysm at access site for cardiovascular catheter procedure",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0029",
      "display" : "Dissection artérielle au site d'abord",
      "target" : [{
        "code" : "15.50.19",
        "display" : "Local complication at access site of cardiac catheterisation",
        "equivalence" : "wider",
        "comment" : "complication locale au site d'abord, toute nature"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0030",
      "display" : "Extravasation de produit de contraste",
      "target" : [{
        "code" : "15.50.19",
        "display" : "Local complication at access site of cardiac catheterisation",
        "equivalence" : "inexact",
        "comment" : "l'extravasation n'est pas toujours au site d'abord"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0031",
      "display" : "Fistule artérioveineuse au site d'abord",
      "target" : [{
        "code" : "15.50.19",
        "display" : "Local complication at access site of cardiac catheterisation",
        "equivalence" : "wider",
        "comment" : "complication locale au site d'abord, toute nature"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0032",
      "display" : "Perforation artérielle au site d'abord",
      "target" : [{
        "code" : "15.50.19",
        "display" : "Local complication at access site of cardiac catheterisation",
        "equivalence" : "wider",
        "comment" : "complication locale au site d'abord, toute nature"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0033",
      "display" : "Problème d'équipement pendant le cathétérisme",
      "target" : [{
        "code" : "15.50.30",
        "display" : "Equipment problem during cardiac catheterisation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0034",
      "display" : "Embolisation d'un stent",
      "target" : [{
        "code" : "15.50.71",
        "display" : "Embolisation of stent",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0035",
      "display" : "Rupture d'un conduit ou d'un vaisseau après implantation de stent",
      "target" : [{
        "code" : "15.50.78",
        "display" : "Rupture of conduit or vessel following stent implantation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0036",
      "display" : "Compression coronaire après implantation de dispositif transluminal",
      "target" : [{
        "code" : "15.50.61",
        "display" : "Coronary arterial compression following transluminal device implantation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0037",
      "display" : "Stent laissé déployé en position non prévue après migration ou embolisation",
      "target" : [{
        "code" : "15.50.91",
        "display" : "Stent left expanded in unplanned site after migration or embolisation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0039",
      "display" : "Embolisation (délogement) d'un coil introduit par cathéter",
      "target" : [{
        "code" : "15.50.65",
        "display" : "Embolisation (dislodgement) of catheter introduced coil",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0040",
      "display" : "Thrombose vasculaire ou de conduit post-procédurale",
      "target" : [{
        "code" : "15.00.21",
        "display" : "Postprocedural vascular or conduit thrombosis",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0041",
      "display" : "Hémorragie post-procédurale",
      "target" : [{
        "code" : "15.02.00",
        "display" : "Postprocedural haemorrhage",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0042",
      "display" : "Anévrisme aortique post-procédural",
      "target" : [{
        "code" : "15.37.80",
        "display" : "Postprocedural aortic aneurysm",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0043",
      "display" : "Anévrisme de l'aorte au site de coarctation après intervention",
      "target" : [{
        "code" : "15.37.07",
        "display" : "Postprocedural aneurysm of aorta at coarctation site",
        "equivalence" : "equivalent"
      }]
    }]
  }]
}

```
