# TAUSSIG — Complications vers ECHSA - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Complications vers ECHSA (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-adverse-event-to-echsa",
  "url" : "https://taussig/fhir/ConceptMap/taussig-adverse-event-to-echsa",
  "version" : "0.8.1",
  "name" : "TaussigAdverseEventToEchsa",
  "title" : "TAUSSIG — Complications vers ECHSA",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (complications) vers ECHSA. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-adverse-event",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-adverse-event",
    "target" : "https://taussig/fhir/CodeSystem/echsa",
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
        "code" : "CP-2010-900",
        "display" : "Other complication",
        "equivalence" : "inexact",
        "comment" : "« autre complication »"
      },
      {
        "code" : "CP-2019-IC-10",
        "display" : "Complication of cardiovascular catheterization procedure",
        "equivalence" : "narrower",
        "comment" : "complication de cathétérisme seulement"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0003",
      "display" : "Arrêt cardiaque pendant l'intervention",
      "target" : [{
        "code" : "CP2",
        "display" : "Cardiac arrest, Timing = Cardiac arrest (MI) during or following procedure (Perioperative/Periprocedural = Intraoperative/Intraprocedural and/or Postoperative/Postprocedural)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0004",
      "display" : "Fibrillation atriale",
      "target" : [{
        "code" : "CP6",
        "display" : "Arrhythmia",
        "equivalence" : "wider",
        "comment" : "trouble du rythme"
      },
      {
        "code" : "CP-2019-IC-01",
        "display" : "Arrhythmia, Atrial, Atrial fibrillation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0005",
      "display" : "Flutter atrial",
      "target" : [{
        "code" : "CP6",
        "display" : "Arrhythmia",
        "equivalence" : "wider",
        "comment" : "trouble du rythme"
      },
      {
        "code" : "CP-2019-IC-02",
        "display" : "Arrhythmia, Atrial, Atrial flutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0006",
      "display" : "Trouble du rythme post-procédural",
      "target" : [{
        "code" : "CP6",
        "display" : "Arrhythmia",
        "equivalence" : "wider"
      },
      {
        "code" : "CP-2019-IC-03",
        "display" : "Arrhythmia, Atrial, Other",
        "equivalence" : "inexact",
        "comment" : "trouble du rythme atrial « autre »"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0007",
      "display" : "Bloc atrioventriculaire complet acquis",
      "target" : [{
        "code" : "CP6",
        "display" : "Arrhythmia",
        "equivalence" : "wider"
      },
      {
        "code" : "CP-2019-IC-04",
        "display" : "Arrhythmia, Heart block",
        "equivalence" : "wider",
        "comment" : "bloc cardiaque"
      },
      {
        "code" : "CP-2019-IC-05",
        "display" : "Arrhythmia, Heart block, Acquired",
        "equivalence" : "wider",
        "comment" : "bloc acquis sans précision du degré"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0008",
      "display" : "Tachycardie jonctionnelle ectopique post-procédurale",
      "target" : [{
        "code" : "CP6",
        "display" : "Arrhythmia",
        "equivalence" : "wider"
      },
      {
        "code" : "CP-2019-IC-06",
        "display" : "Arrhythmia, Junctional",
        "equivalence" : "wider",
        "comment" : "trouble jonctionnel"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0009",
      "display" : "Tachycardie ventriculaire",
      "target" : [{
        "code" : "CP6",
        "display" : "Arrhythmia",
        "equivalence" : "wider"
      },
      {
        "code" : "CP-2019-IC-08",
        "display" : "Arrhythmia, Ventricular",
        "equivalence" : "wider",
        "comment" : "trouble du rythme ventriculaire"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0010",
      "display" : "Arythmie nécessitant l'implantation d'un stimulateur",
      "target" : [{
        "code" : "CP5",
        "display" : "Arrhythmia necessitating pacemaker, Permanent pacemaker",
        "equivalence" : "equivalent"
      },
      {
        "code" : "CP-2019-IC-07",
        "display" : "Arrhythmia, Pacemaker implantation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0011",
      "display" : "Perforation d'une cavité cardiaque ou d'un vaisseau pendant le cathétérisme",
      "target" : [{
        "code" : "CP-2019-IC-13",
        "display" : "Complication of cardiovascular catheterization procedure, Perforation",
        "equivalence" : "equivalent"
      },
      {
        "code" : "CP-2019-IC-32",
        "display" : "Perforation",
        "equivalence" : "wider",
        "comment" : "perforation sans précision"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0012",
      "display" : "Tamponnade cardiaque post-procédurale",
      "target" : [{
        "code" : "CP10",
        "display" : "Pericardial effusion, Requiring drainage",
        "equivalence" : "inexact",
        "comment" : "épanchement drainé, pas nécessairement tamponnade"
      },
      {
        "code" : "CP-2019-IC-33",
        "display" : "Tamponade",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0013",
      "display" : "Décès peropératoire",
      "target" : [{
        "code" : "CP-2010-350",
        "display" : "Intraoperative death or intraprocedural death",
        "equivalence" : "equivalent"
      },
      {
        "code" : "CP-2019-IC-34",
        "display" : "Death",
        "equivalence" : "wider",
        "comment" : "décès sans précision du moment"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0014",
      "display" : "Communication interatriale résiduelle ou récidivante post-procédurale",
      "target" : [{
        "code" : "CP-2019-IC-16",
        "display" : "ASD, Postoperative interatrial communication",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0015",
      "display" : "Embolisation d'un dispositif cardiovasculaire pendant le cathétérisme",
      "target" : [{
        "code" : "CP-2019-IC-11",
        "display" : "Complication of cardiovascular catheterization procedure, Device embolization",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0016",
      "display" : "Dysfonction de dispositif (complication de cathétérisme)",
      "target" : [{
        "code" : "CP-2019-IC-12",
        "display" : "Complication of cardiovascular catheterization procedure, Device malfunction",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0017",
      "display" : "Corps étranger intracardiaque post-procédural",
      "target" : [{
        "code" : "CP-2019-IC-14",
        "display" : "Foreign body, Intracardiac foreign body",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0018",
      "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
      "target" : [{
        "code" : "CP-2019-IC-15",
        "display" : "Foreign body, Intravascular foreign body",
        "equivalence" : "wider",
        "comment" : "corps étranger intravasculaire sans précision du dispositif"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0019",
      "display" : "Perméabilité résiduelle du canal artériel post-procédurale",
      "target" : [{
        "code" : "CP-2019-IC-18",
        "display" : "PDA, Residual leak",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0020",
      "display" : "Communication interventriculaire résiduelle ou récidivante post-procédurale",
      "target" : [{
        "code" : "CP-2019-IC-17",
        "display" : "VSD, Postoperative interventricular communication",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0021",
      "display" : "Communication interatriale résiduelle",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0022",
      "display" : "Régurgitation aortique après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "CP-2019-IC-20",
        "display" : "Aortic regurgitation",
        "equivalence" : "wider",
        "comment" : "régurgitation sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0023",
      "display" : "Régurgitation mitrale après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "CP-2019-IC-22",
        "display" : "Mitral regurgitation",
        "equivalence" : "wider",
        "comment" : "régurgitation sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0024",
      "display" : "Dysfonction de prothèse valvulaire après lésion pendant le cathétérisme",
      "target" : [{
        "code" : "CP-2019-IC-19",
        "display" : "Prosthetic valve failure",
        "equivalence" : "wider",
        "comment" : "sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0025",
      "display" : "Régurgitation pulmonaire après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "CP-2019-IC-21",
        "display" : "Pulmonary regurgitation",
        "equivalence" : "wider",
        "comment" : "régurgitation sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0026",
      "display" : "Régurgitation tricuspide après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "CP-2019-IC-23",
        "display" : "Tricuspid regurgitation",
        "equivalence" : "wider",
        "comment" : "régurgitation sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0027",
      "display" : "Perte du pouls après cathétérisme",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0028",
      "display" : "Pseudoanévrisme au site d'abord",
      "target" : [{
        "code" : "CP-2019-IC-25",
        "display" : "Pseudoaneurysm",
        "equivalence" : "wider",
        "comment" : "pseudoanévrisme sans précision du site"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0029",
      "display" : "Dissection artérielle au site d'abord",
      "target" : [{
        "code" : "CP-2019-IC-30",
        "display" : "Dissection",
        "equivalence" : "wider",
        "comment" : "sans précision du site"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0030",
      "display" : "Extravasation de produit de contraste",
      "target" : [{
        "code" : "CP-2019-IC-29",
        "display" : "Extravasation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0031",
      "display" : "Fistule artérioveineuse au site d'abord",
      "target" : [{
        "code" : "CP-2019-IC-31",
        "display" : "Fistula",
        "equivalence" : "wider",
        "comment" : "sans précision du site"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0032",
      "display" : "Perforation artérielle au site d'abord",
      "target" : [{
        "code" : "CP-2019-IC-27",
        "display" : "Vessel perforation",
        "equivalence" : "wider",
        "comment" : "sans précision du site"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0033",
      "display" : "Problème d'équipement pendant le cathétérisme",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0034",
      "display" : "Embolisation d'un stent",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0035",
      "display" : "Rupture d'un conduit ou d'un vaisseau après implantation de stent",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0036",
      "display" : "Compression coronaire après implantation de dispositif transluminal",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0037",
      "display" : "Stent laissé déployé en position non prévue après migration ou embolisation",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0039",
      "display" : "Embolisation (délogement) d'un coil introduit par cathéter",
      "target" : [{
        "code" : "CP-2019-IC-11",
        "display" : "Complication of cardiovascular catheterization procedure, Device embolization",
        "equivalence" : "wider",
        "comment" : "embolisation de dispositif"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0040",
      "display" : "Thrombose vasculaire ou de conduit post-procédurale",
      "target" : [{
        "code" : "CP-2019-IC-24",
        "display" : "Thrombosis",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0041",
      "display" : "Hémorragie post-procédurale",
      "target" : [{
        "code" : "CP-2019-IC-26",
        "display" : "Bleeding (clinically relevant)",
        "equivalence" : "narrower",
        "comment" : "saignement cliniquement pertinent seulement"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0042",
      "display" : "Anévrisme aortique post-procédural",
      "target" : [{
        "code" : "CP-2019-IC-28",
        "display" : "Aneurysm",
        "equivalence" : "wider",
        "comment" : "anévrisme sans précision"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0043",
      "display" : "Anévrisme de l'aorte au site de coarctation après intervention",
      "target" : [{
        "code" : "CP-2019-IC-28",
        "display" : "Aneurysm",
        "equivalence" : "wider",
        "comment" : "anévrisme sans précision"
      }]
    }]
  }]
}

```
