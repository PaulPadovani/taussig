# TAUSSIG — Diagnostics cardiaques congénitaux - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Diagnostics cardiaques congénitaux (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Liste des diagnostics cardiaques congénitaux](ValueSet-taussig-diagnosis.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "taussig-diagnosis",
  "language" : "fr",
  "url" : "https://taussig/fhir/CodeSystem/taussig-diagnosis",
  "version" : "0.8.1",
  "name" : "TaussigDiagnosis",
  "title" : "TAUSSIG — Diagnostics cardiaques congénitaux",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Terminologie d'interface TAUSSIG : 109 concepts (diagnostics cardiaques congénitaux) à identifiant neutre jamais réutilisé (dictionnaire v6.1, décision A1). L'annotateur choisit le libellé ; les codes ICD-11, IPCCC, CIM-10, ECHSA sont déduits par les ConceptMaps taussig-diagnosis-to-*, seulement quand la correspondance est « equivalent » ou « wider » et unique (décision A3).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 109,
  "property" : [{
    "code" : "ipccc-origin",
    "description" : "Code IPCCC dont le concept est issu.",
    "type" : "Coding"
  }],
  "concept" : [{
    "code" : "TAUSSIG-DIAG-0001",
    "display" : "Anomalie de position-orientation du cœur",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "02.01.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0002",
    "display" : "Lévocardie",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "02.01.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0003",
    "display" : "Dextrocardie",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "02.01.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0004",
    "display" : "Mésocardie",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "02.01.04"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0005",
    "display" : "Image en miroir complète",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "03.01.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0006",
    "display" : "Isomérisme droit",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "03.01.04"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0007",
    "display" : "Isomérisme gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "03.01.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0008",
    "display" : "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.03.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0009",
    "display" : "Connexions atrioventriculaires discordantes",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.04.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0010",
    "display" : "Transposition congénitalement corrigée des grandes artères",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0011",
    "display" : "Transposition des gros vaisseaux",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.05.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0012",
    "display" : "Ventricule droit à double issue",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.04"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0013",
    "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.18"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0014",
    "display" : "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0015",
    "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.40"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0016",
    "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.17"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0017",
    "display" : "Ventricule gauche à double issue",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.05.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0018",
    "display" : "Tronc artériel commun",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.01.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0019",
    "display" : "Tronc artériel commun à dominance aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.01.15"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0020",
    "display" : "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.01.18"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0021",
    "display" : "Anomalie congénitale de la veine médiastinale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "04.00.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0022",
    "display" : "Veine cave supérieure gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "04.01.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0023",
    "display" : "Absence de toit du sinus coronaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "04.04.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0024",
    "display" : "Anomalie du retour veineux pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "04.08.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0025",
    "display" : "Connexion veineuse pulmonaire totale anormale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "04.08.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0026",
    "display" : "Connexion veineuse pulmonaire partielle anormale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "04.07.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0027",
    "display" : "Syndrome du cimeterre",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "03.02.23"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0028",
    "display" : "Sténose ou hypoplasie veineuse pulmonaire congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "04.08.31"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0029",
    "display" : "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.00.15"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0030",
    "display" : "Anomalie congénitale de la valve tricuspide",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.01.11"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0031",
    "display" : "Insuffisance tricuspide congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.01.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0032",
    "display" : "Sténose congénitale de la valve tricuspide",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.01.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0033",
    "display" : "Dysplasie de la valve tricuspide",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.01.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0034",
    "display" : "Malformation d'Ebstein de la valve tricuspide",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.01.34"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0035",
    "display" : "Anomalie congénitale de la valve mitrale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.02.11"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0036",
    "display" : "Insuffisance mitrale congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.02.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0037",
    "display" : "Sténose valvulaire mitrale congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.02.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0038",
    "display" : "Dysplasie de la valve mitrale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.02.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0039",
    "display" : "Anomalie congénitale de l'appareil mitral sousvalvaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.02.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0040",
    "display" : "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.07.28"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0041",
    "display" : "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.06.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0042",
    "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.06.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0043",
    "display" : "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.06.08"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0044",
    "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.06.10"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0045",
    "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.06.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0046",
    "display" : "Communication septale auriculoventriculaire avec déséquilibre ventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.07.26"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0047",
    "display" : "Anomalie septal auriculoventriculaire et tétralogie de Fallot",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0048",
    "display" : "Anomalie congénitale du ventricule ou du septum ventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.00.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0049",
    "display" : "Obstruction congénitale de la voie de sortie du ventricule droit",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.05.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0050",
    "display" : "Ventricule droit à double chambre",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.03.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0051",
    "display" : "Tétralogie de Fallot",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0052",
    "display" : "Tétralogie de Fallot avec syndrome de valve pulmonaire absente",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.05.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0053",
    "display" : "Tétralogie de Fallot avec atrésie pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.26"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0054",
    "display" : "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.57"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0055",
    "display" : "Obstruction congénitale de la voie de sortie du ventricule gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.09.28"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0056",
    "display" : "Communication interventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.10.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0057",
    "display" : "Communication interventriculaire musculaire trabéculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.11.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0058",
    "display" : "Communication interventriculaire centrale périmembraneuse",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.10.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0059",
    "display" : "Communication interventriculaire non significatif sur le plan hémodynamique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.15.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0060",
    "display" : "Cœur fonctionnellement univentriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.22"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0061",
    "display" : "Connexion auriculoventriculaire à double entrée",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.14"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0062",
    "display" : "Atrésie de la valve tricuspide",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.01.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0063",
    "display" : "Atrésie mitrale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "06.02.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0064",
    "display" : "Syndrome d'hypoplasie du cœur gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0065",
    "display" : "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.04.29"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0066",
    "display" : "Anomalie congénitale de la valve pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.05.29"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0067",
    "display" : "Sténose congénitale de la valve pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.05.04"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0068",
    "display" : "Insuffisance congénitale de la valve pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.05.22"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0069",
    "display" : "Atrésie pulmonaire congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.05.16"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0070",
    "display" : "Atrésie pulmonaire avec septum ventriculaire intact",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "01.01.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0071",
    "display" : "Anomalie congénitale de la valve aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.15.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0072",
    "display" : "Sténose congénitale de la valve aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.15.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0073",
    "display" : "Insuffisance aortique congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.15.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0074",
    "display" : "Valve aortique bicuspide",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.15.22"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0075",
    "display" : "Atrésie de la valve aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.15.06"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0076",
    "display" : "Valve aortique unicuspide",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.15.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0077",
    "display" : "Sténose supravalvulaire aortique congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.16.18"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0078",
    "display" : "Anévrisme du sinus aortique de Valsalva",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.18.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0079",
    "display" : "Sténose sous-aortique congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.09.50"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0080",
    "display" : "Sténose sous-pulmonaire congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.05.32"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0081",
    "display" : "Anomalie congénitale des grandes artères, y compris le canal artériel",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.04.28"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0082",
    "display" : "Fenêtre aortopulmonaire congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.04.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0083",
    "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.07.16"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0084",
    "display" : "Anomalie congénitale de l'aorte ou de ses branches",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.09.34"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0085",
    "display" : "Coarctation de l'aorte",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.29.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0086",
    "display" : "Interruption de la crosse aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.29.31"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0087",
    "display" : "Anomalie congénitale de l'aorte thoracique descendante ou abdominale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.28.47"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0088",
    "display" : "Anomalie congénitale de la branche de l'arc aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.30.17"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0089",
    "display" : "Syndrome de compression trachéo-œsophagienne",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.31.40"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0090",
    "display" : "Persistance du canal artériel",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.27.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0091",
    "display" : "Anomalie congénitale des artères coronaires",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.46.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0092",
    "display" : "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.41.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0093",
    "display" : "Origine aortique anormale ou trajet anormal de l'artère coronaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.42.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0094",
    "display" : "Fistule artérielle coronaire congénitale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.45.16"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0095",
    "display" : "Malformation congénitale du péricarde",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.01.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0096",
    "display" : "Anomalie congénitale du septum auriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "05.07.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0097",
    "display" : "Foramen ovale perméable",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "05.03.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0098",
    "display" : "Communication interauriculaire dans la fosse ovale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "05.04.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0099",
    "display" : "Anomalie du sinus veineux",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "05.05.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0100",
    "display" : "Communication interauriculaire par l'orifice du sinus coronaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "05.05.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0101",
    "display" : "Anomalie congénitale de l'oreillette droite",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "05.01.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0102",
    "display" : "Anomalie congénitale de l'oreillette gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "05.02.11"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0103",
    "display" : "Oreillette gauche divisée",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "05.02.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0104",
    "display" : "Sténose ou hypoplasie congénitale centrale des artères pulmonaires (en amont de la bifurcation hilaire)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.10.37"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0105",
    "display" : "Sténose ou hypoplasie congénitale périphérique des artères pulmonaires (au niveau ou en aval de la bifurcation hilaire)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.10.38"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0106",
    "display" : "Artères pulmonaires droite et gauche congénitalement discontinues, non confluentes",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.10.30"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0107",
    "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) majeure(s) (MAPCA)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.08.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0108",
    "display" : "Fistule (malformation) artérioveineuse pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.19.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-DIAG-0109",
    "display" : "Bloc atrioventriculaire complet congénital idiopathique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.06.08"
      }
    }]
  }]
}

```
