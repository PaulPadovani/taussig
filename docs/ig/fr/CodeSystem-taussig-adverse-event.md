# TAUSSIG — Complications - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Complications (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Liste des complications](ValueSet-taussig-adverse-event.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "taussig-adverse-event",
  "language" : "fr",
  "url" : "https://taussig/fhir/CodeSystem/taussig-adverse-event",
  "version" : "0.8.1",
  "name" : "TaussigAdverseEvent",
  "title" : "TAUSSIG — Complications",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Terminologie d'interface TAUSSIG : 43 concepts (complications) à identifiant neutre jamais réutilisé (dictionnaire v6.1, décision A1). L'annotateur choisit le libellé ; les codes IPCCC, CIM-10, SNOMED, ECHSA sont déduits par les ConceptMaps taussig-adverse-event-to-*, seulement quand la correspondance est « equivalent » ou « wider » et unique (décision A3).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 43,
  "property" : [{
    "code" : "ipccc-origin",
    "description" : "Code IPCCC dont le concept est issu.",
    "type" : "Coding"
  },
  {
    "code" : "status",
    "uri" : "http://hl7.org/fhir/concept-properties#status",
    "description" : "Statut du concept (retired = retiré).",
    "type" : "code"
  },
  {
    "code" : "inactive",
    "uri" : "http://hl7.org/fhir/concept-properties#inactive",
    "description" : "Concept inactif, à ne plus choisir.",
    "type" : "boolean"
  },
  {
    "code" : "replaced-by",
    "description" : "Concept qui remplace un concept retiré.",
    "type" : "code"
  }],
  "concept" : [{
    "code" : "TAUSSIG-AE-0001",
    "display" : "Absence de complication post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.90.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0002",
    "display" : "Complication liée à une intervention",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.90.14"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0003",
    "display" : "Arrêt cardiaque pendant l'intervention",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.00.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0004",
    "display" : "Fibrillation atriale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.03.08"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0005",
    "display" : "Flutter atrial",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.03.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0006",
    "display" : "Trouble du rythme post-procédural",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.00.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0007",
    "display" : "Bloc atrioventriculaire complet acquis",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.06.10"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0008",
    "display" : "Tachycardie jonctionnelle ectopique post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.04.12"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0009",
    "display" : "Tachycardie ventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.05.06"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0010",
    "display" : "Arythmie nécessitant l'implantation d'un stimulateur",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.60.06"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0011",
    "display" : "Perforation d'une cavité cardiaque ou d'un vaisseau pendant le cathétérisme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0012",
    "display" : "Tamponnade cardiaque post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.83.14"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0013",
    "display" : "Décès peropératoire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.33.31"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0014",
    "display" : "Communication interatriale résiduelle ou récidivante post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.10.72"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0015",
    "display" : "Embolisation d'un dispositif cardiovasculaire pendant le cathétérisme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.51.47"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0016",
    "display" : "Dysfonction de dispositif (complication de cathétérisme)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.51.50"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0017",
    "display" : "Corps étranger intracardiaque post-procédural",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.80.17"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0018",
    "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.37"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0019",
    "display" : "Perméabilité résiduelle du canal artériel post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.39.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0020",
    "display" : "Communication interventriculaire résiduelle ou récidivante post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.22.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0021",
    "display" : "Communication interatriale résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.10.63"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0022",
    "display" : "Régurgitation aortique après lésion valvulaire pendant le cathétérisme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0023",
    "display" : "Régurgitation mitrale après lésion valvulaire pendant le cathétérisme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0024",
    "display" : "Dysfonction de prothèse valvulaire après lésion pendant le cathétérisme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0025",
    "display" : "Régurgitation pulmonaire après lésion valvulaire pendant le cathétérisme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0026",
    "display" : "Régurgitation tricuspide après lésion valvulaire pendant le cathétérisme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0027",
    "display" : "Perte du pouls après cathétérisme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.11"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0028",
    "display" : "Pseudoanévrisme au site d'abord",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.60.23"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0029",
    "display" : "Dissection artérielle au site d'abord",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0030",
    "display" : "Extravasation de produit de contraste",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0031",
    "display" : "Fistule artérioveineuse au site d'abord",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0032",
    "display" : "Perforation artérielle au site d'abord",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0033",
    "display" : "Problème d'équipement pendant le cathétérisme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.30"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0034",
    "display" : "Embolisation d'un stent",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.71"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0035",
    "display" : "Rupture d'un conduit ou d'un vaisseau après implantation de stent",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.78"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0036",
    "display" : "Compression coronaire après implantation de dispositif transluminal",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.61"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0037",
    "display" : "Stent laissé déployé en position non prévue après migration ou embolisation",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.91"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0038",
    "display" : "Dysfonction de dispositif pendant le cathétérisme",
    "definition" : "Concept retiré : retiré, remplacé par TAUSSIG-AE-0016 — doublon : même code IPCCC 15.51.50 (décision A6).",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.51.50"
      }
    },
    {
      "code" : "status",
      "valueCode" : "retired"
    },
    {
      "code" : "inactive",
      "valueBoolean" : true
    },
    {
      "code" : "replaced-by",
      "valueCode" : "TAUSSIG-AE-0016"
    }]
  },
  {
    "code" : "TAUSSIG-AE-0039",
    "display" : "Embolisation (délogement) d'un coil introduit par cathéter",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.65"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0040",
    "display" : "Thrombose vasculaire ou de conduit post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.00.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0041",
    "display" : "Hémorragie post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.02.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0042",
    "display" : "Anévrisme aortique post-procédural",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.37.80"
      }
    }]
  },
  {
    "code" : "TAUSSIG-AE-0043",
    "display" : "Anévrisme de l'aorte au site de coarctation après intervention",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.37.07"
      }
    }]
  }]
}

```
