# TAUSSIG — Diagnostics cardiaques congénitaux vers ICD-11 - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Diagnostics cardiaques congénitaux vers ICD-11 (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-diagnosis-to-icd11",
  "url" : "https://taussig/fhir/ConceptMap/taussig-diagnosis-to-icd11",
  "version" : "0.8.1",
  "name" : "TaussigDiagnosisToIcd11",
  "title" : "TAUSSIG — Diagnostics cardiaques congénitaux vers ICD-11",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (diagnostics cardiaques congénitaux) vers ICD-11. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-diagnosis",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-diagnosis",
    "target" : "http://id.who.int/icd/release/11/mms",
    "element" : [{
      "code" : "TAUSSIG-DIAG-0001",
      "display" : "Anomalie de position-orientation du cœur",
      "target" : [{
        "code" : "LA80",
        "display" : "Anomalie de position-orientation du cœur",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0002",
      "display" : "Lévocardie",
      "target" : [{
        "code" : "LA80.0",
        "display" : "Lévocardie",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0003",
      "display" : "Dextrocardie",
      "target" : [{
        "code" : "LA80.1",
        "display" : "Dextrocardie",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0004",
      "display" : "Mésocardie",
      "target" : [{
        "code" : "LA80.2",
        "display" : "Mésocardie",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0005",
      "display" : "Image en miroir complète",
      "target" : [{
        "code" : "LA82",
        "display" : "Image en miroir complète",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0006",
      "display" : "Isomérisme droit",
      "target" : [{
        "code" : "LA83",
        "display" : "Isomérisme droit",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0007",
      "display" : "Isomérisme gauche",
      "target" : [{
        "code" : "LA84",
        "display" : "Isomérisme gauche",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0008",
      "display" : "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle",
      "target" : [{
        "code" : "LA85",
        "display" : "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0009",
      "display" : "Connexions atrioventriculaires discordantes",
      "target" : [{
        "code" : "LA85.0",
        "display" : "Connexions atrioventriculaires discordantes",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0010",
      "display" : "Transposition congénitalement corrigée des grandes artères",
      "target" : [{
        "code" : "LA85.00",
        "display" : "Transposition congénitalement corrigée des grandes artères",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0011",
      "display" : "Transposition des gros vaisseaux",
      "target" : [{
        "code" : "LA85.1",
        "display" : "Transposition des gros vaisseaux",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0012",
      "display" : "Ventricule droit à double issue",
      "target" : [{
        "code" : "LA85.2",
        "display" : "Ventricule droit à double issue",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0013",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition",
      "target" : [{
        "code" : "LA85.20",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0014",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux",
      "target" : [{
        "code" : "LA85.21",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0015",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire",
      "target" : [{
        "code" : "LA85.22",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0016",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot",
      "target" : [{
        "code" : "LA85.23",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0017",
      "display" : "Ventricule gauche à double issue",
      "target" : [{
        "code" : "LA85.3",
        "display" : "Ventricule gauche à double issue",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0018",
      "display" : "Tronc artériel commun",
      "target" : [{
        "code" : "LA85.4",
        "display" : "Tronc artériel commun",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0019",
      "display" : "Tronc artériel commun à dominance aortique",
      "target" : [{
        "code" : "LA85.40",
        "display" : "Tronc artériel commun à dominance aortique",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0020",
      "display" : "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue",
      "target" : [{
        "code" : "LA85.41",
        "display" : "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0021",
      "display" : "Anomalie congénitale de la veine médiastinale",
      "target" : [{
        "code" : "LA86",
        "display" : "Anomalie congénitale de la veine médiastinale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0022",
      "display" : "Veine cave supérieure gauche",
      "target" : [{
        "code" : "LA86.0",
        "display" : "Veine cave supérieure gauche",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0023",
      "display" : "Absence de toit du sinus coronaire",
      "target" : [{
        "code" : "LA86.1",
        "display" : "Absence de toit du sinus coronaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0024",
      "display" : "Anomalie du retour veineux pulmonaire",
      "target" : [{
        "code" : "LA86.2",
        "display" : "Anomalie du retour veineux pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0025",
      "display" : "Connexion veineuse pulmonaire totale anormale",
      "target" : [{
        "code" : "LA86.20",
        "display" : "Connexion veineuse pulmonaire totale anormale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0026",
      "display" : "Connexion veineuse pulmonaire partielle anormale",
      "target" : [{
        "code" : "LA86.21",
        "display" : "Connexion veineuse pulmonaire partielle anormale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0027",
      "display" : "Syndrome du cimeterre",
      "target" : [{
        "code" : "LA86.22",
        "display" : "Syndrome du cimeterre",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0028",
      "display" : "Sténose ou hypoplasie veineuse pulmonaire congénitale",
      "target" : [{
        "code" : "LA86.3",
        "display" : "Sténose ou hypoplasie veineuse pulmonaire congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0029",
      "display" : "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire",
      "target" : [{
        "code" : "LA87",
        "display" : "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0030",
      "display" : "Anomalie congénitale de la valve tricuspide",
      "target" : [{
        "code" : "LA87.0",
        "display" : "Anomalie congénitale de la valve tricuspide",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0031",
      "display" : "Insuffisance tricuspide congénitale",
      "target" : [{
        "code" : "LA87.00",
        "display" : "Insuffisance tricuspide congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0032",
      "display" : "Sténose congénitale de la valve tricuspide",
      "target" : [{
        "code" : "LA87.01",
        "display" : "Sténose congénitale de la valve tricuspide",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0033",
      "display" : "Dysplasie de la valve tricuspide",
      "target" : [{
        "code" : "LA87.02",
        "display" : "Dysplasie de la valve tricuspide",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0034",
      "display" : "Malformation d'Ebstein de la valve tricuspide",
      "target" : [{
        "code" : "LA87.03",
        "display" : "Malformation d'Ebstein de la valve tricuspide",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0035",
      "display" : "Anomalie congénitale de la valve mitrale",
      "target" : [{
        "code" : "LA87.1",
        "display" : "Anomalie congénitale de la valve mitrale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0036",
      "display" : "Insuffisance mitrale congénitale",
      "target" : [{
        "code" : "LA87.10",
        "display" : "Insuffisance mitrale congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0037",
      "display" : "Sténose valvulaire mitrale congénitale",
      "target" : [{
        "code" : "LA87.11",
        "display" : "Sténose valvulaire mitrale congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0038",
      "display" : "Dysplasie de la valve mitrale",
      "target" : [{
        "code" : "LA87.12",
        "display" : "Dysplasie de la valve mitrale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0039",
      "display" : "Anomalie congénitale de l'appareil mitral sousvalvaire",
      "target" : [{
        "code" : "LA87.13",
        "display" : "Anomalie congénitale de l'appareil mitral sousvalvaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0040",
      "display" : "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire",
      "target" : [{
        "code" : "LA87.3",
        "display" : "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0041",
      "display" : "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire",
      "target" : [{
        "code" : "LA87.4",
        "display" : "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0042",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement",
      "target" : [{
        "code" : "LA87.40",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0043",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement",
      "target" : [{
        "code" : "LA87.41",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0044",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire",
      "target" : [{
        "code" : "LA87.42",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0045",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire",
      "target" : [{
        "code" : "LA87.43",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0046",
      "display" : "Communication septale auriculoventriculaire avec déséquilibre ventriculaire",
      "target" : [{
        "code" : "LA87.44",
        "display" : "Communication septale auriculoventriculaire avec déséquilibre ventriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0047",
      "display" : "Anomalie septal auriculoventriculaire et tétralogie de Fallot",
      "target" : [{
        "code" : "LA87.45",
        "display" : "Anomalie septal auriculoventriculaire et tétralogie de Fallot",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0048",
      "display" : "Anomalie congénitale du ventricule ou du septum ventriculaire",
      "target" : [{
        "code" : "LA88",
        "display" : "Anomalie congénitale du ventricule ou du septum ventriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0049",
      "display" : "Obstruction congénitale de la voie de sortie du ventricule droit",
      "target" : [{
        "code" : "LA88.0",
        "display" : "Obstruction congénitale de la voie de sortie du ventricule droit",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0050",
      "display" : "Ventricule droit à double chambre",
      "target" : [{
        "code" : "LA88.1",
        "display" : "Ventricule droit à double chambre",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0051",
      "display" : "Tétralogie de Fallot",
      "target" : [{
        "code" : "LA88.2",
        "display" : "Tétralogie de Fallot",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0052",
      "display" : "Tétralogie de Fallot avec syndrome de valve pulmonaire absente",
      "target" : [{
        "code" : "LA88.20",
        "display" : "Tétralogie de Fallot avec syndrome de valve pulmonaire absente",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0053",
      "display" : "Tétralogie de Fallot avec atrésie pulmonaire",
      "target" : [{
        "code" : "LA88.21",
        "display" : "Tétralogie de Fallot avec atrésie pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0054",
      "display" : "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire",
      "target" : [{
        "code" : "LA88.22",
        "display" : "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0055",
      "display" : "Obstruction congénitale de la voie de sortie du ventricule gauche",
      "target" : [{
        "code" : "LA88.3",
        "display" : "Obstruction congénitale de la voie de sortie du ventricule gauche",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0056",
      "display" : "Communication interventriculaire",
      "target" : [{
        "code" : "LA88.4",
        "display" : "Communication interventriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0057",
      "display" : "Communication interventriculaire musculaire trabéculaire",
      "target" : [{
        "code" : "LA88.40",
        "display" : "Communication interventriculaire musculaire trabéculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0058",
      "display" : "Communication interventriculaire centrale périmembraneuse",
      "target" : [{
        "code" : "LA88.41",
        "display" : "Communication interventriculaire centrale périmembraneuse",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0059",
      "display" : "Communication interventriculaire non significatif sur le plan hémodynamique",
      "target" : [{
        "code" : "LA88.42",
        "display" : "Communication interventriculaire non significatif sur le plan hémodynamique",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0060",
      "display" : "Cœur fonctionnellement univentriculaire",
      "target" : [{
        "code" : "LA89",
        "display" : "Cœur fonctionnellement univentriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0061",
      "display" : "Connexion auriculoventriculaire à double entrée",
      "target" : [{
        "code" : "LA89.0",
        "display" : "Connexion auriculoventriculaire à double entrée",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0062",
      "display" : "Atrésie de la valve tricuspide",
      "target" : [{
        "code" : "LA89.1",
        "display" : "Atrésie de la valve tricuspide",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0063",
      "display" : "Atrésie mitrale",
      "target" : [{
        "code" : "LA89.2",
        "display" : "Atrésie mitrale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0064",
      "display" : "Syndrome d'hypoplasie du cœur gauche",
      "target" : [{
        "code" : "LA89.3",
        "display" : "Syndrome d'hypoplasie du cœur gauche",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0065",
      "display" : "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes",
      "target" : [{
        "code" : "LA8A",
        "display" : "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0066",
      "display" : "Anomalie congénitale de la valve pulmonaire",
      "target" : [{
        "code" : "LA8A.0",
        "display" : "Anomalie congénitale de la valve pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0067",
      "display" : "Sténose congénitale de la valve pulmonaire",
      "target" : [{
        "code" : "LA8A.00",
        "display" : "Sténose congénitale de la valve pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0068",
      "display" : "Insuffisance congénitale de la valve pulmonaire",
      "target" : [{
        "code" : "LA8A.01",
        "display" : "Insuffisance congénitale de la valve pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0069",
      "display" : "Atrésie pulmonaire congénitale",
      "target" : [{
        "code" : "LA8A.1",
        "display" : "Atrésie pulmonaire congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0070",
      "display" : "Atrésie pulmonaire avec septum ventriculaire intact",
      "target" : [{
        "code" : "LA8A.10",
        "display" : "Atrésie pulmonaire avec septum ventriculaire intact",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0071",
      "display" : "Anomalie congénitale de la valve aortique",
      "target" : [{
        "code" : "LA8A.2",
        "display" : "Anomalie congénitale de la valve aortique",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0072",
      "display" : "Sténose congénitale de la valve aortique",
      "target" : [{
        "code" : "LA8A.20",
        "display" : "Sténose congénitale de la valve aortique",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0073",
      "display" : "Insuffisance aortique congénitale",
      "target" : [{
        "code" : "LA8A.21",
        "display" : "Insuffisance aortique congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0074",
      "display" : "Valve aortique bicuspide",
      "target" : [{
        "code" : "LA8A.22",
        "display" : "Valve aortique bicuspide",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0075",
      "display" : "Atrésie de la valve aortique",
      "target" : [{
        "code" : "LA8A.23",
        "display" : "Atrésie de la valve aortique",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0076",
      "display" : "Valve aortique unicuspide",
      "target" : [{
        "code" : "LA8A.24",
        "display" : "Valve aortique unicuspide",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0077",
      "display" : "Sténose supravalvulaire aortique congénitale",
      "target" : [{
        "code" : "LA8A.3",
        "display" : "Sténose supravalvulaire aortique congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0078",
      "display" : "Anévrisme du sinus aortique de Valsalva",
      "target" : [{
        "code" : "LA8A.4",
        "display" : "Anévrisme du sinus aortique de Valsalva",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0079",
      "display" : "Sténose sous-aortique congénitale",
      "target" : [{
        "code" : "LA8A.5",
        "display" : "Sténose sous-aortique congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0080",
      "display" : "Sténose sous-pulmonaire congénitale",
      "target" : [{
        "code" : "LA8A.6",
        "display" : "Sténose sous-pulmonaire congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0081",
      "display" : "Anomalie congénitale des grandes artères, y compris le canal artériel",
      "target" : [{
        "code" : "LA8B",
        "display" : "Anomalie congénitale des grandes artères, y compris le canal artériel",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0082",
      "display" : "Fenêtre aortopulmonaire congénitale",
      "target" : [{
        "code" : "LA8B.0",
        "display" : "Fenêtre aortopulmonaire congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0083",
      "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "LA8B.1",
        "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0084",
      "display" : "Anomalie congénitale de l'aorte ou de ses branches",
      "target" : [{
        "code" : "LA8B.2",
        "display" : "Anomalie congénitale de l'aorte ou de ses branches",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0085",
      "display" : "Coarctation de l'aorte",
      "target" : [{
        "code" : "LA8B.21",
        "display" : "Coarctation de l'aorte",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0086",
      "display" : "Interruption de la crosse aortique",
      "target" : [{
        "code" : "LA8B.22",
        "display" : "Interruption de la crosse aortique",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0087",
      "display" : "Anomalie congénitale de l'aorte thoracique descendante ou abdominale",
      "target" : [{
        "code" : "LA8B.23",
        "display" : "Anomalie congénitale de l'aorte thoracique descendante ou abdominale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0088",
      "display" : "Anomalie congénitale de la branche de l'arc aortique",
      "target" : [{
        "code" : "LA8B.24",
        "display" : "Anomalie congénitale de la branche de l'arc aortique",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0089",
      "display" : "Syndrome de compression trachéo-œsophagienne",
      "target" : [{
        "code" : "LA8B.3",
        "display" : "Syndrome de compression trachéo-œsophagienne",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0090",
      "display" : "Persistance du canal artériel",
      "target" : [{
        "code" : "LA8B.4",
        "display" : "Persistance du canal artériel",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0091",
      "display" : "Anomalie congénitale des artères coronaires",
      "target" : [{
        "code" : "LA8C",
        "display" : "Anomalie congénitale des artères coronaires",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0092",
      "display" : "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "LA8C.0",
        "display" : "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0093",
      "display" : "Origine aortique anormale ou trajet anormal de l'artère coronaire",
      "target" : [{
        "code" : "LA8C.1",
        "display" : "Origine aortique anormale ou trajet anormal de l'artère coronaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0094",
      "display" : "Fistule artérielle coronaire congénitale",
      "target" : [{
        "code" : "LA8C.2",
        "display" : "Fistule artérielle coronaire congénitale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0095",
      "display" : "Malformation congénitale du péricarde",
      "target" : [{
        "code" : "LA8D",
        "display" : "Malformation congénitale du péricarde",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0096",
      "display" : "Anomalie congénitale du septum auriculaire",
      "target" : [{
        "code" : "LA8E",
        "display" : "Anomalie congénitale du septum auriculaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0097",
      "display" : "Foramen ovale perméable",
      "target" : [{
        "code" : "LA8E.0",
        "display" : "Foramen ovale perméable",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0098",
      "display" : "Communication interauriculaire dans la fosse ovale",
      "target" : [{
        "code" : "LA8E.1",
        "display" : "Communication interauriculaire dans la fosse ovale",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0099",
      "display" : "Anomalie du sinus veineux",
      "target" : [{
        "code" : "LA8E.2",
        "display" : "Anomalie du sinus veineux",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0100",
      "display" : "Communication interauriculaire par l'orifice du sinus coronaire",
      "target" : [{
        "code" : "LA8E.3",
        "display" : "Communication interauriculaire par l'orifice du sinus coronaire",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0101",
      "display" : "Anomalie congénitale de l'oreillette droite",
      "target" : [{
        "code" : "LA8F",
        "display" : "Anomalie congénitale de l'oreillette droite",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0102",
      "display" : "Anomalie congénitale de l'oreillette gauche",
      "target" : [{
        "code" : "LA8G",
        "display" : "Anomalie congénitale de l'oreillette gauche",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0103",
      "display" : "Oreillette gauche divisée",
      "target" : [{
        "code" : "LA8G.0",
        "display" : "Oreillette gauche divisée",
        "equivalence" : "equivalent",
        "comment" : "terme IPCCC repris par la CIM-11 (hiérarchie diagnostique IPCCC–CIM-11)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0104",
      "display" : "Sténose ou hypoplasie congénitale centrale des artères pulmonaires (en amont de la bifurcation hilaire)",
      "target" : [{
        "code" : "LA8B.1",
        "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
        "equivalence" : "wider",
        "comment" : "pas d'entité CIM-11 plus fine (v6)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0105",
      "display" : "Sténose ou hypoplasie congénitale périphérique des artères pulmonaires (au niveau ou en aval de la bifurcation hilaire)",
      "target" : [{
        "code" : "LA8B.1",
        "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0106",
      "display" : "Artères pulmonaires droite et gauche congénitalement discontinues, non confluentes",
      "target" : [{
        "code" : "LA8B.1",
        "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0107",
      "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) majeure(s) (MAPCA)",
      "target" : [{
        "code" : "LA8B.1",
        "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
        "equivalence" : "wider",
        "comment" : "pas d'entité CIM-11 pour les MAPCA (v6)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0108",
      "display" : "Fistule (malformation) artérioveineuse pulmonaire",
      "target" : [{
        "code" : "LA90.5",
        "display" : "Fistule artérioveineuse pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "fistule artérioveineuse pulmonaire, malformation du développement"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0109",
      "display" : "Bloc atrioventriculaire complet congénital idiopathique",
      "target" : [{
        "code" : "BC63.20",
        "display" : "Bloc auriculoventriculaire complet congénital",
        "equivalence" : "wider",
        "comment" : "BC63.20 couvre tout BAV complet congénital ; le concept TAUSSIG est idiopathique"
      }]
    }]
  }]
}

```
