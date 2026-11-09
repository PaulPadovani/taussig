# TAUSSIG — Diagnostics cardiaques congénitaux vers ECHSA - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Diagnostics cardiaques congénitaux vers ECHSA (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-diagnosis-to-echsa",
  "url" : "https://taussig/fhir/ConceptMap/taussig-diagnosis-to-echsa",
  "version" : "0.8.1",
  "name" : "TaussigDiagnosisToEchsa",
  "title" : "TAUSSIG — Diagnostics cardiaques congénitaux vers ECHSA",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (diagnostics cardiaques congénitaux) vers ECHSA. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-diagnosis",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-diagnosis",
    "target" : "https://taussig/fhir/CodeSystem/echsa",
    "element" : [{
      "code" : "TAUSSIG-DIAG-0001",
      "display" : "Anomalie de position-orientation du cœur",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0002",
      "display" : "Lévocardie",
      "target" : [{
        "code" : "DIAG-2010-2100",
        "display" : "Levocardia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0003",
      "display" : "Dextrocardie",
      "target" : [{
        "code" : "DIAG-2010-2090",
        "display" : "Dextrocardia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0004",
      "display" : "Mésocardie",
      "target" : [{
        "code" : "DIAG-2010-2110",
        "display" : "Mesocardia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0005",
      "display" : "Image en miroir complète",
      "target" : [{
        "code" : "DIAG-2010-2120",
        "display" : "Situs inversus",
        "equivalence" : "wider",
        "comment" : "« situs inversus » sans précision de totalité"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0006",
      "display" : "Isomérisme droit",
      "target" : [{
        "code" : "DIAG115",
        "display" : "Atrial Isomerism, Right",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0007",
      "display" : "Isomérisme gauche",
      "target" : [{
        "code" : "DIAG114",
        "display" : "Atrial Isomerism, Left",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0008",
      "display" : "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0009",
      "display" : "Connexions atrioventriculaires discordantes",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0010",
      "display" : "Transposition congénitalement corrigée des grandes artères",
      "target" : [{
        "code" : "DIAG082",
        "display" : "Congenitally corrected TGA",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG155",
        "display" : "Congenitally corrected TGA, VSD",
        "equivalence" : "narrower",
        "comment" : "avec CIV"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0011",
      "display" : "Transposition des gros vaisseaux",
      "target" : [{
        "code" : "DIAG083",
        "display" : "TGA, IVS",
        "equivalence" : "narrower",
        "comment" : "sous-type de TGV selon la CIV et l'obstacle gauche"
      },
      {
        "code" : "DIAG084",
        "display" : "TGA, IVS-LVOTO",
        "equivalence" : "narrower",
        "comment" : "sous-type de TGV selon la CIV et l'obstacle gauche"
      },
      {
        "code" : "DIAG085",
        "display" : "TGA, VSD",
        "equivalence" : "narrower",
        "comment" : "sous-type de TGV selon la CIV et l'obstacle gauche"
      },
      {
        "code" : "DIAG086",
        "display" : "TGA, VSD-LVOTO",
        "equivalence" : "narrower",
        "comment" : "sous-type de TGV selon la CIV et l'obstacle gauche"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0012",
      "display" : "Ventricule droit à double issue",
      "target" : [{
        "code" : "DIAG088",
        "display" : "DORV, VSD type",
        "equivalence" : "narrower",
        "comment" : "type CIV"
      },
      {
        "code" : "DIAG-2024-3",
        "display" : "DORV",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0013",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition",
      "target" : [{
        "code" : "DIAG090",
        "display" : "DORV, TGA type",
        "equivalence" : "equivalent",
        "comment" : "type TGV (Taussig-Bing)"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0014",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux",
      "target" : [{
        "code" : "DIAG091",
        "display" : "DORV, Remote VSD (uncommitted VSD)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0015",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire",
      "target" : [{
        "code" : "DIAG088",
        "display" : "DORV, VSD type",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0016",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot",
      "target" : [{
        "code" : "DIAG089",
        "display" : "DORV, TOF type",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG-2024-4",
        "display" : "DORV, Fallot type",
        "equivalence" : "equivalent",
        "comment" : "doublon ECHSA de DIAG089"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0017",
      "display" : "Ventricule gauche à double issue",
      "target" : [{
        "code" : "DIAG093",
        "display" : "DOLV",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0018",
      "display" : "Tronc artériel commun",
      "target" : [{
        "code" : "DIAG016",
        "display" : "Truncus arteriosus",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0019",
      "display" : "Tronc artériel commun à dominance aortique",
      "target" : [{
        "code" : "DIAG016",
        "display" : "Truncus arteriosus",
        "equivalence" : "wider",
        "comment" : "ECHSA ne précise pas la dominance"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0020",
      "display" : "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue",
      "target" : [{
        "code" : "DIAG-2010-2010",
        "display" : "Truncus arteriosus + Interrupted aortic arch",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0021",
      "display" : "Anomalie congénitale de la veine médiastinale",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0022",
      "display" : "Veine cave supérieure gauche",
      "target" : [{
        "code" : "DIAG026",
        "display" : "Systemic venous anomaly",
        "equivalence" : "wider",
        "comment" : "anomalie veineuse systémique, non précisée"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0023",
      "display" : "Absence de toit du sinus coronaire",
      "target" : [{
        "code" : "DIAG004",
        "display" : "ASD, Coronary sinus",
        "equivalence" : "inexact",
        "comment" : "le code ECHSA décrit la CIA par le sinus coronaire (rang 100), pas toute absence de toit"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0024",
      "display" : "Anomalie du retour veineux pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0025",
      "display" : "Connexion veineuse pulmonaire totale anormale",
      "target" : [{
        "code" : "DIAG019",
        "display" : "Total anomalous pulmonary venous connection (TAPVC), Type 1 (supracardiac)",
        "equivalence" : "narrower",
        "comment" : "type de RVPAT"
      },
      {
        "code" : "DIAG020",
        "display" : "Total anomalous pulmonary venous connection (TAPVC), Type 2 (cardiac)",
        "equivalence" : "narrower",
        "comment" : "type de RVPAT"
      },
      {
        "code" : "DIAG021",
        "display" : "Total anomalous pulmonary venous connection (TAPVC), Type 3 (infracardiac)",
        "equivalence" : "narrower",
        "comment" : "type de RVPAT"
      },
      {
        "code" : "DIAG022",
        "display" : "Total anomalous pulmonary venous connection (TAPVC), Type 4 (mixed)",
        "equivalence" : "narrower",
        "comment" : "type de RVPAT"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0026",
      "display" : "Connexion veineuse pulmonaire partielle anormale",
      "target" : [{
        "code" : "DIAG017",
        "display" : "Partial anomalous pulmonary venous connection (PAPVC)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0027",
      "display" : "Syndrome du cimeterre",
      "target" : [{
        "code" : "DIAG018",
        "display" : "Partial anomalous pulmonary venous connection (PAPVC), scimitar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0028",
      "display" : "Sténose ou hypoplasie veineuse pulmonaire congénitale",
      "target" : [{
        "code" : "DIAG025",
        "display" : "Pulmonary venous stenosis",
        "equivalence" : "wider",
        "comment" : "ECHSA ne distingue pas congénital et acquis"
      },
      {
        "code" : "DIAG-2019-11",
        "display" : "Pulmonary venous stenosis, Spontaneous",
        "equivalence" : "inexact",
        "comment" : "« spontanée » : ni strictement congénitale, ni post-opératoire"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0029",
      "display" : "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0030",
      "display" : "Anomalie congénitale de la valve tricuspide",
      "target" : [{
        "code" : "DIAG040",
        "display" : "Tricuspid valve, Other",
        "equivalence" : "inexact",
        "comment" : "catégorie « autre » de la valve tricuspide"
      },
      {
        "code" : "DIAG039",
        "display" : "Tricuspid regurgitation and tricuspid stenosis",
        "equivalence" : "narrower",
        "comment" : "IT et RT"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0031",
      "display" : "Insuffisance tricuspide congénitale",
      "target" : [{
        "code" : "DIAG037",
        "display" : "Tricuspid regurgitation, non-Ebstein's related",
        "equivalence" : "equivalent",
        "comment" : "IT non liée à une maladie d'Ebstein"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0032",
      "display" : "Sténose congénitale de la valve tricuspide",
      "target" : [{
        "code" : "DIAG038",
        "display" : "Tricuspid stenosis",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0033",
      "display" : "Dysplasie de la valve tricuspide",
      "target" : [{
        "code" : "DIAG040",
        "display" : "Tricuspid valve, Other",
        "equivalence" : "wider",
        "comment" : "catégorie « autre »"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0034",
      "display" : "Malformation d'Ebstein de la valve tricuspide",
      "target" : [{
        "code" : "DIAG036",
        "display" : "Ebstein's anomaly",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0035",
      "display" : "Anomalie congénitale de la valve mitrale",
      "target" : [{
        "code" : "DIAG068",
        "display" : "Mitral valve, Other",
        "equivalence" : "inexact",
        "comment" : "catégorie « autre » de la valve mitrale"
      },
      {
        "code" : "DIAG066",
        "display" : "Mitral regurgitation and mitral stenosis",
        "equivalence" : "narrower",
        "comment" : "IM et RM"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0036",
      "display" : "Insuffisance mitrale congénitale",
      "target" : [{
        "code" : "DIAG067",
        "display" : "Mitral regurgitation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0037",
      "display" : "Sténose valvulaire mitrale congénitale",
      "target" : [{
        "code" : "DIAG062",
        "display" : "Mitral stenosis, Valvar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0038",
      "display" : "Dysplasie de la valve mitrale",
      "target" : [{
        "code" : "DIAG068",
        "display" : "Mitral valve, Other",
        "equivalence" : "wider",
        "comment" : "catégorie « autre »"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0039",
      "display" : "Anomalie congénitale de l'appareil mitral sousvalvaire",
      "target" : [{
        "code" : "DIAG063",
        "display" : "Mitral stenosis, Subvalvar",
        "equivalence" : "narrower",
        "comment" : "seulement la sténose sous-valvulaire"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0040",
      "display" : "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0041",
      "display" : "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire",
      "target" : [{
        "code" : "DIAG010",
        "display" : "AVC (AVSD), Complete (CAVSD)",
        "equivalence" : "narrower",
        "comment" : "forme complète seulement"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0042",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement",
      "target" : [{
        "code" : "DIAG012",
        "display" : "AVC (AVSD), Partial (incomplete) (PAVSD) (ASD, primum)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0043",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement",
      "target" : [{
        "code" : "DIAG011",
        "display" : "AVC (AVSD), Intermediate (transitional)",
        "equivalence" : "inexact",
        "comment" : "ECHSA « intermédiaire (transitionnel) » suppose une communication auriculaire ; le concept n'a qu'une communication ventriculaire"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0044",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire",
      "target" : [{
        "code" : "DIAG010",
        "display" : "AVC (AVSD), Complete (CAVSD)",
        "equivalence" : "inexact",
        "comment" : "le concept est la forme intermédiaire, pas la forme complète"
      },
      {
        "code" : "DIAG011",
        "display" : "AVC (AVSD), Intermediate (transitional)",
        "equivalence" : "equivalent",
        "comment" : "ajout v6.1 : forme intermédiaire (transitionnelle) ; ajouté v6.1 — forme intermédiaire (transitionnelle) du canal atrioventriculaire, absente de la liste v6"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0045",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire",
      "target" : [{
        "code" : "DIAG010",
        "display" : "AVC (AVSD), Complete (CAVSD)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0046",
      "display" : "Communication septale auriculoventriculaire avec déséquilibre ventriculaire",
      "target" : [{
        "code" : "DIAG078",
        "display" : "Single ventricle, Unbalanced AV canal",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0047",
      "display" : "Anomalie septal auriculoventriculaire et tétralogie de Fallot",
      "target" : [{
        "code" : "DIAG029",
        "display" : "TOF, AVC (AVSD)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0048",
      "display" : "Anomalie congénitale du ventricule ou du septum ventriculaire",
      "target" : [{
        "code" : "DIAG121",
        "display" : "Hypoplastic LV",
        "equivalence" : "narrower",
        "comment" : "sous-type"
      },
      {
        "code" : "DIAG120",
        "display" : "Hypoplastic RV",
        "equivalence" : "narrower",
        "comment" : "sous-type"
      },
      {
        "code" : "DIAG-2019-27",
        "display" : "Diverticulum, Ventricular, Left",
        "equivalence" : "narrower",
        "comment" : "sous-type"
      },
      {
        "code" : "DIAG-2019-28",
        "display" : "Diverticulum, Ventricular, Right",
        "equivalence" : "narrower",
        "comment" : "sous-type"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0049",
      "display" : "Obstruction congénitale de la voie de sortie du ventricule droit",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0050",
      "display" : "Ventricule droit à double chambre",
      "target" : [{
        "code" : "DIAG046",
        "display" : "DCRV",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0051",
      "display" : "Tétralogie de Fallot",
      "target" : [{
        "code" : "DIAG028",
        "display" : "TOF",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG-2010-2140",
        "display" : "TOF, Pulmonary stenosis",
        "equivalence" : "narrower",
        "comment" : "avec sténose pulmonaire"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0052",
      "display" : "Tétralogie de Fallot avec syndrome de valve pulmonaire absente",
      "target" : [{
        "code" : "DIAG030",
        "display" : "TOF, Absent pulmonary valve",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0053",
      "display" : "Tétralogie de Fallot avec atrésie pulmonaire",
      "target" : [{
        "code" : "DIAG033",
        "display" : "Pulmonary atresia, VSD (Including TOF, PA)",
        "equivalence" : "wider",
        "comment" : "inclut l'atrésie pulmonaire avec CIV hors Fallot"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0054",
      "display" : "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire",
      "target" : [{
        "code" : "DIAG034",
        "display" : "Pulmonary atresia, VSD-MAPCA (pseudotruncus)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0055",
      "display" : "Obstruction congénitale de la voie de sortie du ventricule gauche",
      "target" : [{
        "code" : "DIAG051",
        "display" : "Aortic stenosis, Subvalvar",
        "equivalence" : "narrower",
        "comment" : "sténose sous-aortique seulement"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0056",
      "display" : "Communication interventriculaire",
      "target" : [{
        "code" : "DIAG168",
        "display" : "VSD + Aortic arch hypoplasia",
        "equivalence" : "narrower",
        "comment" : "sous-type ou association"
      },
      {
        "code" : "DIAG169",
        "display" : "VSD + Coarctation of aorta",
        "equivalence" : "narrower",
        "comment" : "sous-type ou association"
      },
      {
        "code" : "DIAG008",
        "display" : "VSD, Multiple",
        "equivalence" : "narrower",
        "comment" : "sous-type ou association"
      },
      {
        "code" : "DIAG170",
        "display" : "VSD, Type 1 (Subarterial) (Supracristal) (Conal septal defect) (Infundibular)",
        "equivalence" : "narrower",
        "comment" : "sous-type ou association"
      },
      {
        "code" : "DIAG172",
        "display" : "VSD, Type 3 (Inlet) (AV canal type)",
        "equivalence" : "narrower",
        "comment" : "sous-type ou association"
      },
      {
        "code" : "DIAG174",
        "display" : "VSD, Type: Gerbode type (LV-RA communication)",
        "equivalence" : "narrower",
        "comment" : "sous-type ou association"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0057",
      "display" : "Communication interventriculaire musculaire trabéculaire",
      "target" : [{
        "code" : "DIAG173",
        "display" : "VSD, Type 4 (Muscular)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0058",
      "display" : "Communication interventriculaire centrale périmembraneuse",
      "target" : [{
        "code" : "DIAG171",
        "display" : "VSD, Type 2 (Perimembranous) (Paramembranous) (Conoventricular)",
        "equivalence" : "wider",
        "comment" : "CIV périmembraneuse, sans précision de la position centrale"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0059",
      "display" : "Communication interventriculaire non significatif sur le plan hémodynamique",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0060",
      "display" : "Cœur fonctionnellement univentriculaire",
      "target" : [{
        "code" : "DIAG080",
        "display" : "Single ventricle, Other",
        "equivalence" : "inexact",
        "comment" : "catégorie « autre » du ventricule unique"
      },
      {
        "code" : "DIAG-2010-851",
        "display" : "Single Ventricle + Total anomalous pulmonary venous connection (TAPVC)",
        "equivalence" : "narrower",
        "comment" : "association avec RVPAT"
      },
      {
        "code" : "DIAG079",
        "display" : "Single ventricle, Heterotaxia syndrome",
        "equivalence" : "narrower",
        "comment" : "hétérotaxie"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0061",
      "display" : "Connexion auriculoventriculaire à double entrée",
      "target" : [{
        "code" : "DIAG074",
        "display" : "Single ventricle, DILV",
        "equivalence" : "narrower",
        "comment" : "double entrée dans le ventricule gauche seulement"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0062",
      "display" : "Atrésie de la valve tricuspide",
      "target" : [{
        "code" : "DIAG077",
        "display" : "Single ventricle, Tricuspid atresia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0063",
      "display" : "Atrésie mitrale",
      "target" : [{
        "code" : "DIAG076",
        "display" : "Single ventricle, Mitral atresia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0064",
      "display" : "Syndrome d'hypoplasie du cœur gauche",
      "target" : [{
        "code" : "DIAG069",
        "display" : "Hypoplastic left heart syndrome (HLHS)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0065",
      "display" : "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes",
      "target" : [{
        "code" : "DIAG060",
        "display" : "LV to aorta tunnel",
        "equivalence" : "narrower",
        "comment" : "tunnel ventricule gauche-aorte seulement"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0066",
      "display" : "Anomalie congénitale de la valve pulmonaire",
      "target" : [{
        "code" : "DIAG047",
        "display" : "Pulmonary valve, Other",
        "equivalence" : "inexact",
        "comment" : "catégorie « autre » de la valve pulmonaire"
      },
      {
        "code" : "DIAG050",
        "display" : "Pulmonary insufficiency and pulmonary stenosis",
        "equivalence" : "narrower",
        "comment" : "IP et RP"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0067",
      "display" : "Sténose congénitale de la valve pulmonaire",
      "target" : [{
        "code" : "DIAG041",
        "display" : "Pulmonary stenosis, Valvar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0068",
      "display" : "Insuffisance congénitale de la valve pulmonaire",
      "target" : [{
        "code" : "DIAG049",
        "display" : "Pulmonary insufficiency",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0069",
      "display" : "Atrésie pulmonaire congénitale",
      "target" : [{
        "code" : "DIAG031",
        "display" : "Pulmonary atresia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0070",
      "display" : "Atrésie pulmonaire avec septum ventriculaire intact",
      "target" : [{
        "code" : "DIAG032",
        "display" : "Pulmonary atresia, IVS",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0071",
      "display" : "Anomalie congénitale de la valve aortique",
      "target" : [{
        "code" : "DIAG058",
        "display" : "Aortic valve, Other",
        "equivalence" : "inexact",
        "comment" : "catégorie « autre » de la valve aortique"
      },
      {
        "code" : "DIAG057",
        "display" : "Aortic insufficiency and aortic stenosis",
        "equivalence" : "narrower",
        "comment" : "IA et RA"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0072",
      "display" : "Sténose congénitale de la valve aortique",
      "target" : [{
        "code" : "DIAG052",
        "display" : "Aortic stenosis, Valvar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0073",
      "display" : "Insuffisance aortique congénitale",
      "target" : [{
        "code" : "DIAG056",
        "display" : "Aortic insufficiency",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0074",
      "display" : "Valve aortique bicuspide",
      "target" : [{
        "code" : "DIAG058",
        "display" : "Aortic valve, Other",
        "equivalence" : "wider",
        "comment" : "catégorie « autre »"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0075",
      "display" : "Atrésie de la valve aortique",
      "target" : [{
        "code" : "DIAG055",
        "display" : "Aortic valve atresia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0076",
      "display" : "Valve aortique unicuspide",
      "target" : [{
        "code" : "DIAG058",
        "display" : "Aortic valve, Other",
        "equivalence" : "wider",
        "comment" : "catégorie « autre »"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0077",
      "display" : "Sténose supravalvulaire aortique congénitale",
      "target" : [{
        "code" : "DIAG053",
        "display" : "Aortic stenosis, Supravalvar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0078",
      "display" : "Anévrisme du sinus aortique de Valsalva",
      "target" : [{
        "code" : "DIAG059",
        "display" : "Sinus of Valsalva aneurysm",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0079",
      "display" : "Sténose sous-aortique congénitale",
      "target" : [{
        "code" : "DIAG051",
        "display" : "Aortic stenosis, Subvalvar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0080",
      "display" : "Sténose sous-pulmonaire congénitale",
      "target" : [{
        "code" : "DIAG166",
        "display" : "Pulmonary stenosis, Subvalvar",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0081",
      "display" : "Anomalie congénitale des grandes artères, y compris le canal artériel",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0082",
      "display" : "Fenêtre aortopulmonaire congénitale",
      "target" : [{
        "code" : "DIAG014",
        "display" : "AP window (aortopulmonary window)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0083",
      "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "DIAG042",
        "display" : "Pulmonary artery stenosis (hypoplasia), Main (trunk)",
        "equivalence" : "narrower",
        "comment" : "sténose du tronc ou des branches seulement"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0084",
      "display" : "Anomalie congénitale de l'aorte ou de ses branches",
      "target" : [{
        "code" : "DIAG096",
        "display" : "Aortic arch hypoplasia",
        "equivalence" : "narrower",
        "comment" : "hypoplasie de l'arche seulement"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0085",
      "display" : "Coarctation de l'aorte",
      "target" : [{
        "code" : "DIAG095",
        "display" : "Coarctation of aorta",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0086",
      "display" : "Interruption de la crosse aortique",
      "target" : [{
        "code" : "DIAG098",
        "display" : "Interrupted aortic arch",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG-2010-2000",
        "display" : "Interrupted aortic arch + AP window (aortopulmonary window)",
        "equivalence" : "narrower",
        "comment" : "association avec fenêtre aortopulmonaire"
      },
      {
        "code" : "DIAG-2010-2020",
        "display" : "Interrupted aortic arch + VSD",
        "equivalence" : "narrower",
        "comment" : "association avec CIV"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0087",
      "display" : "Anomalie congénitale de l'aorte thoracique descendante ou abdominale",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0088",
      "display" : "Anomalie congénitale de la branche de l'arc aortique",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0089",
      "display" : "Syndrome de compression trachéo-œsophagienne",
      "target" : [{
        "code" : "DIAG100",
        "display" : "Vascular ring",
        "equivalence" : "inexact",
        "comment" : "un anneau vasculaire n'est pas toujours compressif, et une compression n'est pas toujours un anneau"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0090",
      "display" : "Persistance du canal artériel",
      "target" : [{
        "code" : "DIAG099",
        "display" : "Patent ductus arteriosus",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0091",
      "display" : "Anomalie congénitale des artères coronaires",
      "target" : [{
        "code" : "DIAG161",
        "display" : "Coronary artery anomaly, Other",
        "equivalence" : "inexact",
        "comment" : "catégorie « autre » des anomalies coronaires"
      },
      {
        "code" : "DIAG157",
        "display" : "Coronary artery anomaly, Aneurysm",
        "equivalence" : "narrower",
        "comment" : "anévrisme ou occlusion d'une artère précise"
      },
      {
        "code" : "DIAG-2019-35",
        "display" : "Coronary artery anomaly, Aneurysm from LAD",
        "equivalence" : "narrower",
        "comment" : "anévrisme ou occlusion d'une artère précise"
      },
      {
        "code" : "DIAG-2019-36",
        "display" : "Coronary artery anomaly, Aneurysm from LCA main",
        "equivalence" : "narrower",
        "comment" : "anévrisme ou occlusion d'une artère précise"
      },
      {
        "code" : "DIAG-2019-37",
        "display" : "Coronary artery anomaly, Aneurysm from LCX",
        "equivalence" : "narrower",
        "comment" : "anévrisme ou occlusion d'une artère précise"
      },
      {
        "code" : "DIAG-2019-38",
        "display" : "Coronary artery anomaly, Aneurysm from RCA",
        "equivalence" : "narrower",
        "comment" : "anévrisme ou occlusion d'une artère précise"
      },
      {
        "code" : "DIAG-2019-43",
        "display" : "Coronary artery anomaly, Occlusion from LAD",
        "equivalence" : "narrower",
        "comment" : "anévrisme ou occlusion d'une artère précise"
      },
      {
        "code" : "DIAG-2019-44",
        "display" : "Coronary artery anomaly, Occlusion from LCA main",
        "equivalence" : "narrower",
        "comment" : "anévrisme ou occlusion d'une artère précise"
      },
      {
        "code" : "DIAG-2019-45",
        "display" : "Coronary artery anomaly, Occlusion from LCX",
        "equivalence" : "narrower",
        "comment" : "anévrisme ou occlusion d'une artère précise"
      },
      {
        "code" : "DIAG-2019-46",
        "display" : "Coronary artery anomaly, Occlusion from RCA",
        "equivalence" : "narrower",
        "comment" : "anévrisme ou occlusion d'une artère précise"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0092",
      "display" : "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "DIAG159",
        "display" : "Coronary artery anomaly, Anomalous pulmonary origin (includes ALCAPA)",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG-2019-33",
        "display" : "Coronary artery anomaly, ALCAPA",
        "equivalence" : "narrower",
        "comment" : "ALCAPA"
      },
      {
        "code" : "DIAG-2019-34",
        "display" : "Coronary artery anomaly, ARCAPA",
        "equivalence" : "narrower",
        "comment" : "ARCAPA"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0093",
      "display" : "Origine aortique anormale ou trajet anormal de l'artère coronaire",
      "target" : [{
        "code" : "DIAG158",
        "display" : "Coronary artery anomaly, Anomalous aortic origin of coronary artery from aorta (AAOCA)",
        "equivalence" : "narrower",
        "comment" : "origine aortique anormale seulement, pas le trajet"
      },
      {
        "code" : "DIAG-2019-32",
        "display" : "Coronary artery anomaly, Abnormal origin other",
        "equivalence" : "inexact",
        "comment" : "« autre origine anormale »"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0094",
      "display" : "Fistule artérielle coronaire congénitale",
      "target" : [{
        "code" : "DIAG160",
        "display" : "Coronary artery anomaly, Fistula",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG-2019-39",
        "display" : "Coronary artery anomaly, Fistula from LAD",
        "equivalence" : "narrower",
        "comment" : "fistule d'une artère précise"
      },
      {
        "code" : "DIAG-2019-40",
        "display" : "Coronary artery anomaly, Fistula from LCA main",
        "equivalence" : "narrower",
        "comment" : "fistule d'une artère précise"
      },
      {
        "code" : "DIAG-2019-41",
        "display" : "Coronary artery anomaly, Fistula from LCX",
        "equivalence" : "narrower",
        "comment" : "fistule d'une artère précise"
      },
      {
        "code" : "DIAG-2019-42",
        "display" : "Coronary artery anomaly, Fistula from RCA",
        "equivalence" : "narrower",
        "comment" : "fistule d'une artère précise"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0095",
      "display" : "Malformation congénitale du péricarde",
      "target" : [{
        "code" : "DIAG073",
        "display" : "Pericardial disease, Other",
        "equivalence" : "inexact",
        "comment" : "maladie péricardique « autre », congénitale ou acquise"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0096",
      "display" : "Anomalie congénitale du septum auriculaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0097",
      "display" : "Foramen ovale perméable",
      "target" : [{
        "code" : "DIAG001",
        "display" : "PFO",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0098",
      "display" : "Communication interauriculaire dans la fosse ovale",
      "target" : [{
        "code" : "DIAG002",
        "display" : "ASD, Secundum",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0099",
      "display" : "Anomalie du sinus veineux",
      "target" : [{
        "code" : "DIAG003",
        "display" : "ASD, Sinus venosus",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0100",
      "display" : "Communication interauriculaire par l'orifice du sinus coronaire",
      "target" : [{
        "code" : "DIAG004",
        "display" : "ASD, Coronary sinus",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0101",
      "display" : "Anomalie congénitale de l'oreillette droite",
      "target" : [{
        "code" : "DIAG-2019-30",
        "display" : "Diverticulum, Atrium, Right",
        "equivalence" : "narrower",
        "comment" : "diverticule seulement"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0102",
      "display" : "Anomalie congénitale de l'oreillette gauche",
      "target" : [{
        "code" : "DIAG-2019-29",
        "display" : "Diverticulum, Atrium, Left",
        "equivalence" : "narrower",
        "comment" : "diverticule seulement"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0103",
      "display" : "Oreillette gauche divisée",
      "target" : [{
        "code" : "DIAG024",
        "display" : "Cor triatriatum",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0104",
      "display" : "Sténose ou hypoplasie congénitale centrale des artères pulmonaires (en amont de la bifurcation hilaire)",
      "target" : [{
        "code" : "DIAG043",
        "display" : "Pulmonary artery stenosis, Branch, Central (within the hilar bifurcation)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0105",
      "display" : "Sténose ou hypoplasie congénitale périphérique des artères pulmonaires (au niveau ou en aval de la bifurcation hilaire)",
      "target" : [{
        "code" : "DIAG044",
        "display" : "Pulmonary artery stenosis, Branch, Peripheral (at or beyond the hilar bifurcation)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0106",
      "display" : "Artères pulmonaires droite et gauche congénitalement discontinues, non confluentes",
      "target" : [{
        "code" : "DIAG165",
        "display" : "Pulmonary artery, Discontinuous",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0107",
      "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) majeure(s) (MAPCA)",
      "target" : [{
        "code" : "DIAG035",
        "display" : "MAPCA(s) (major aortopulmonary collateral[s]) (without PA-VSD)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0108",
      "display" : "Fistule (malformation) artérioveineuse pulmonaire",
      "target" : [{
        "code" : "DIAG127",
        "display" : "Pulmonary AV fistula",
        "equivalence" : "wider",
        "comment" : "ECHSA ne distingue pas congénital et acquis"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0109",
      "display" : "Bloc atrioventriculaire complet congénital idiopathique",
      "target" : [{
        "code" : "DIAG111",
        "display" : "Arrhythmia, Heart block, Congenital",
        "equivalence" : "wider",
        "comment" : "le concept TAUSSIG est idiopathique"
      }]
    }]
  }]
}

```
