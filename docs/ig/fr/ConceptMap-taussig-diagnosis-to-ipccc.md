# TAUSSIG — Diagnostics cardiaques congénitaux vers IPCCC - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Diagnostics cardiaques congénitaux vers IPCCC (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-diagnosis-to-ipccc",
  "url" : "https://taussig/fhir/ConceptMap/taussig-diagnosis-to-ipccc",
  "version" : "0.8.1",
  "name" : "TaussigDiagnosisToIpccc",
  "title" : "TAUSSIG — Diagnostics cardiaques congénitaux vers IPCCC",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (diagnostics cardiaques congénitaux) vers IPCCC. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-diagnosis",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-diagnosis",
    "target" : "https://taussig/fhir/CodeSystem/ipccc",
    "element" : [{
      "code" : "TAUSSIG-DIAG-0001",
      "display" : "Anomalie de position-orientation du cœur",
      "target" : [{
        "code" : "02.01.09",
        "display" : "Anomalous position-orientation of heart",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0002",
      "display" : "Lévocardie",
      "target" : [{
        "code" : "02.01.03",
        "display" : "Laevocardia: heart predominantly in left hemithorax",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0003",
      "display" : "Dextrocardie",
      "target" : [{
        "code" : "02.01.02",
        "display" : "Dextrocardia: heart predominantly in right hemithorax",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0004",
      "display" : "Mésocardie",
      "target" : [{
        "code" : "02.01.04",
        "display" : "Midline heart (mesocardia)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0005",
      "display" : "Image en miroir complète",
      "target" : [{
        "code" : "03.01.03",
        "display" : "Total mirror imagery (situs inversus totalis)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0006",
      "display" : "Isomérisme droit",
      "target" : [{
        "code" : "03.01.04",
        "display" : "Right isomerism",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0007",
      "display" : "Isomérisme gauche",
      "target" : [{
        "code" : "03.01.05",
        "display" : "Left isomerism",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0008",
      "display" : "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle",
      "target" : [{
        "code" : "01.03.09",
        "display" : "Congenital anomaly of an atrioventricular and-or ventriculo-arterial connection(s)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0009",
      "display" : "Connexions atrioventriculaires discordantes",
      "target" : [{
        "code" : "01.04.01",
        "display" : "Discordant atrioventricular connections",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0010",
      "display" : "Transposition congénitalement corrigée des grandes artères",
      "target" : [{
        "code" : "01.01.03",
        "display" : "Congenitally corrected transposition of great arteries (discordant atrioventricular & ventriculo-arterial connections)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0011",
      "display" : "Transposition des gros vaisseaux",
      "target" : [{
        "code" : "01.05.01",
        "display" : "Transposition of great arteries (discordant ventriculo-arterial connections) (TGA)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0012",
      "display" : "Ventricule droit à double issue",
      "target" : [{
        "code" : "01.01.04",
        "display" : "Double outlet right ventricle",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0013",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition",
      "target" : [{
        "code" : "01.01.18",
        "display" : "Double outlet right ventricle with subpulmonary ventricular septal defect, transposition type",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0014",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux",
      "target" : [{
        "code" : "01.01.19",
        "display" : "Double outlet right ventricle with non-committed ventricular septal defect",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0015",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire",
      "target" : [{
        "code" : "01.01.40",
        "display" : "Double outlet right ventricle with subaortic or doubly committed ventricular septal defect without pulmonary stenosis, ventricular septal defect type",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0016",
      "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot",
      "target" : [{
        "code" : "01.01.17",
        "display" : "Double outlet right ventricle with subaortic or doubly committed ventricular septal defect and pulmonary stenosis, Fallot type",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0017",
      "display" : "Ventricule gauche à double issue",
      "target" : [{
        "code" : "01.05.03",
        "display" : "Double outlet left ventricle",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0018",
      "display" : "Tronc artériel commun",
      "target" : [{
        "code" : "09.01.01",
        "display" : "Common arterial trunk (truncus arteriosus)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0019",
      "display" : "Tronc artériel commun à dominance aortique",
      "target" : [{
        "code" : "09.01.15",
        "display" : "Common arterial trunk (truncus arteriosus) with aortic dominance (no aortic arch obstruction)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0020",
      "display" : "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue",
      "target" : [{
        "code" : "09.01.18",
        "display" : "Common arterial trunk (truncus arteriosus) with pulmonary dominance and interrupted aortic arch",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0021",
      "display" : "Anomalie congénitale de la veine médiastinale",
      "target" : [{
        "code" : "04.00.07",
        "display" : "Congenital anomaly of mediastinal vein(s)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0022",
      "display" : "Veine cave supérieure gauche",
      "target" : [{
        "code" : "04.01.25",
        "display" : "Left superior caval vein (SVC)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0023",
      "display" : "Absence de toit du sinus coronaire",
      "target" : [{
        "code" : "04.04.13",
        "display" : "Unroofed coronary sinus",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0024",
      "display" : "Anomalie du retour veineux pulmonaire",
      "target" : [{
        "code" : "04.08.07",
        "display" : "Anomalous pulmonary venous connection",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0025",
      "display" : "Connexion veineuse pulmonaire totale anormale",
      "target" : [{
        "code" : "04.08.05",
        "display" : "Total anomalous pulmonary venous connection",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0026",
      "display" : "Connexion veineuse pulmonaire partielle anormale",
      "target" : [{
        "code" : "04.07.01",
        "display" : "Partial anomalous pulmonary venous connection(s)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0027",
      "display" : "Syndrome du cimeterre",
      "target" : [{
        "code" : "03.02.23",
        "display" : "Scimitar syndrome",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0028",
      "display" : "Sténose ou hypoplasie veineuse pulmonaire congénitale",
      "target" : [{
        "code" : "04.08.31",
        "display" : "Congenital pulmonary venous stenosis and-or hypoplasia",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0029",
      "display" : "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire",
      "target" : [{
        "code" : "06.00.15",
        "display" : "Congenital anomaly of an atrioventricular valve(s) and-or atrioventricular septum",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0030",
      "display" : "Anomalie congénitale de la valve tricuspide",
      "target" : [{
        "code" : "06.01.11",
        "display" : "Congenital anomaly of tricuspid valve",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0031",
      "display" : "Insuffisance tricuspide congénitale",
      "target" : [{
        "code" : "06.01.25",
        "display" : "Congenital tricuspid regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0032",
      "display" : "Sténose congénitale de la valve tricuspide",
      "target" : [{
        "code" : "06.01.07",
        "display" : "Congenital tricuspid valvar stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0033",
      "display" : "Dysplasie de la valve tricuspide",
      "target" : [{
        "code" : "06.01.03",
        "display" : "Dysplasia of tricuspid valve",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0034",
      "display" : "Malformation d'Ebstein de la valve tricuspide",
      "target" : [{
        "code" : "06.01.34",
        "display" : "Ebstein malformation of tricuspid valve",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0035",
      "display" : "Anomalie congénitale de la valve mitrale",
      "target" : [{
        "code" : "06.02.11",
        "display" : "Congenital anomaly of mitral valve",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0036",
      "display" : "Insuffisance mitrale congénitale",
      "target" : [{
        "code" : "06.02.25",
        "display" : "Congenital mitral regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0037",
      "display" : "Sténose valvulaire mitrale congénitale",
      "target" : [{
        "code" : "06.02.07",
        "display" : "Congenital mitral valvar stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0038",
      "display" : "Dysplasie de la valve mitrale",
      "target" : [{
        "code" : "06.02.03",
        "display" : "Dysplasia of mitral valve",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0039",
      "display" : "Anomalie congénitale de l'appareil mitral sousvalvaire",
      "target" : [{
        "code" : "06.02.21",
        "display" : "Congenital anomaly of mitral subvalvar apparatus",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0040",
      "display" : "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire",
      "target" : [{
        "code" : "06.07.28",
        "display" : "Common atrioventricular junction without an atrioventricular septal defect",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0041",
      "display" : "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire",
      "target" : [{
        "code" : "06.06.00",
        "display" : "Common atrioventricular junction with atrioventricular septal defect (AVSD)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0042",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement",
      "target" : [{
        "code" : "06.06.01",
        "display" : "Atrioventricular septal defect with communication at the atrial level only (primum atrial septal defect) (partial atrioventricular canal defect)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0043",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement",
      "target" : [{
        "code" : "06.06.08",
        "display" : "Atrioventricular septal defect with communication at the ventricular level only (atrioventricular canal defect with isolated ventricular communication)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0044",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire",
      "target" : [{
        "code" : "06.06.10",
        "display" : "Atrioventricular septal defect (atrioventricular canal defect) with communication at atrial level and restrictive communication at ventricular level (intermediate atrioventricular septal defect)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0045",
      "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire",
      "target" : [{
        "code" : "06.06.09",
        "display" : "Atrioventricular septal defect (atrioventricular canal defect) with communication at atrial level and unrestrictive communication at ventricular level (Complete atrioventricular septal defect)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0046",
      "display" : "Communication septale auriculoventriculaire avec déséquilibre ventriculaire",
      "target" : [{
        "code" : "06.07.26",
        "display" : "Atrioventricular septal defect (AVSD) with ventricular imbalance",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0047",
      "display" : "Anomalie septal auriculoventriculaire et tétralogie de Fallot",
      "target" : [{
        "code" : "01.01.20",
        "display" : "Atrioventricular septal defect and Tetralogy of Fallot",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0048",
      "display" : "Anomalie congénitale du ventricule ou du septum ventriculaire",
      "target" : [{
        "code" : "07.00.00",
        "display" : "Congenital anomaly of a ventricle and-or the ventricular septum",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0049",
      "display" : "Obstruction congénitale de la voie de sortie du ventricule droit",
      "target" : [{
        "code" : "07.05.20",
        "display" : "Congenital right ventricular outflow tract obstruction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0050",
      "display" : "Ventricule droit à double chambre",
      "target" : [{
        "code" : "07.03.01",
        "display" : "Double chambered right ventricle",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0051",
      "display" : "Tétralogie de Fallot",
      "target" : [{
        "code" : "01.01.01",
        "display" : "Tetralogy of Fallot",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0052",
      "display" : "Tétralogie de Fallot avec syndrome de valve pulmonaire absente",
      "target" : [{
        "code" : "09.05.25",
        "display" : "Tetralogy of Fallot with absent pulmonary valve syndrome",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0053",
      "display" : "Tétralogie de Fallot avec atrésie pulmonaire",
      "target" : [{
        "code" : "01.01.26",
        "display" : "Tetralogy of Fallot with pulmonary atresia",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0054",
      "display" : "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire",
      "target" : [{
        "code" : "01.01.57",
        "display" : "Tetralogy of Fallot with pulmonary atresia and systemic-to-pulmonary collateral artery(ies) (MAPCA(s))",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0055",
      "display" : "Obstruction congénitale de la voie de sortie du ventricule gauche",
      "target" : [{
        "code" : "07.09.28",
        "display" : "Congenital left ventricular outflow tract obstruction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0056",
      "display" : "Communication interventriculaire",
      "target" : [{
        "code" : "07.10.00",
        "display" : "Ventricular septal defect (VSD)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0057",
      "display" : "Communication interventriculaire musculaire trabéculaire",
      "target" : [{
        "code" : "07.11.01",
        "display" : "Trabecular muscular ventricular septal defect (VSD)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0058",
      "display" : "Communication interventriculaire centrale périmembraneuse",
      "target" : [{
        "code" : "07.10.01",
        "display" : "Perimembranous central ventricular septal defect (VSD)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0059",
      "display" : "Communication interventriculaire non significatif sur le plan hémodynamique",
      "target" : [{
        "code" : "07.15.01",
        "display" : "Ventricular septal defect(s) haemodynamically insignificant",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0060",
      "display" : "Cœur fonctionnellement univentriculaire",
      "target" : [{
        "code" : "01.01.22",
        "display" : "Functionally univentricular heart",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0061",
      "display" : "Connexion auriculoventriculaire à double entrée",
      "target" : [{
        "code" : "01.01.14",
        "display" : "Double inlet atrioventricular connection (double inlet ventricle)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0062",
      "display" : "Atrésie de la valve tricuspide",
      "target" : [{
        "code" : "06.01.01",
        "display" : "Tricuspid atresia",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0063",
      "display" : "Atrésie mitrale",
      "target" : [{
        "code" : "06.02.01",
        "display" : "Mitral atresia",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0064",
      "display" : "Syndrome d'hypoplasie du cœur gauche",
      "target" : [{
        "code" : "01.01.09",
        "display" : "Hypoplastic left heart syndrome",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0065",
      "display" : "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes",
      "target" : [{
        "code" : "09.04.29",
        "display" : "Congenital anomaly of ventriculo-arterial valve(s) and-or adjacent regions",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0066",
      "display" : "Anomalie congénitale de la valve pulmonaire",
      "target" : [{
        "code" : "09.05.29",
        "display" : "Congenital anomaly of pulmonary valve",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0067",
      "display" : "Sténose congénitale de la valve pulmonaire",
      "target" : [{
        "code" : "09.05.04",
        "display" : "Congenital pulmonary valvar stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0068",
      "display" : "Insuffisance congénitale de la valve pulmonaire",
      "target" : [{
        "code" : "09.05.22",
        "display" : "Congenital pulmonary regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0069",
      "display" : "Atrésie pulmonaire congénitale",
      "target" : [{
        "code" : "09.05.16",
        "display" : "Congenital pulmonary atresia",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0070",
      "display" : "Atrésie pulmonaire avec septum ventriculaire intact",
      "target" : [{
        "code" : "01.01.07",
        "display" : "Pulmonary atresia with intact ventricular septum",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0071",
      "display" : "Anomalie congénitale de la valve aortique",
      "target" : [{
        "code" : "09.15.19",
        "display" : "Congenital anomaly of aortic valve",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0072",
      "display" : "Sténose congénitale de la valve aortique",
      "target" : [{
        "code" : "09.15.01",
        "display" : "Congenital aortic valvar stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0073",
      "display" : "Insuffisance aortique congénitale",
      "target" : [{
        "code" : "09.15.07",
        "display" : "Congenital aortic regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0074",
      "display" : "Valve aortique bicuspide",
      "target" : [{
        "code" : "09.15.22",
        "display" : "Bicuspid aortic valve",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0075",
      "display" : "Atrésie de la valve aortique",
      "target" : [{
        "code" : "09.15.06",
        "display" : "Aortic valvar atresia",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0076",
      "display" : "Valve aortique unicuspide",
      "target" : [{
        "code" : "09.15.21",
        "display" : "Unicuspid aortic valve",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0077",
      "display" : "Sténose supravalvulaire aortique congénitale",
      "target" : [{
        "code" : "09.16.18",
        "display" : "Congenital supravalvar aortic stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0078",
      "display" : "Anévrisme du sinus aortique de Valsalva",
      "target" : [{
        "code" : "09.18.01",
        "display" : "Aneurysm of aortic sinus of Valsalva",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0079",
      "display" : "Sténose sous-aortique congénitale",
      "target" : [{
        "code" : "07.09.50",
        "display" : "Congenital subaortic stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0080",
      "display" : "Sténose sous-pulmonaire congénitale",
      "target" : [{
        "code" : "07.05.32",
        "display" : "Congenital subpulmonary stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0081",
      "display" : "Anomalie congénitale des grandes artères, y compris le canal artériel",
      "target" : [{
        "code" : "09.04.28",
        "display" : "Congenital anomaly of great arteries including arterial duct",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0082",
      "display" : "Fenêtre aortopulmonaire congénitale",
      "target" : [{
        "code" : "09.04.07",
        "display" : "Congenital aortopulmonary window",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0083",
      "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "09.07.16",
        "display" : "Congenital anomaly of pulmonary arterial tree",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0084",
      "display" : "Anomalie congénitale de l'aorte ou de ses branches",
      "target" : [{
        "code" : "07.09.34",
        "display" : "Congenital anomaly of aorta and-or its branches",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0085",
      "display" : "Coarctation de l'aorte",
      "target" : [{
        "code" : "09.29.01",
        "display" : "Coarctation of aorta",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0086",
      "display" : "Interruption de la crosse aortique",
      "target" : [{
        "code" : "09.29.31",
        "display" : "Interrupted aortic arch",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0087",
      "display" : "Anomalie congénitale de l'aorte thoracique descendante ou abdominale",
      "target" : [{
        "code" : "09.28.47",
        "display" : "Congenital anomaly of descending thoracic and-or abdominal aorta",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0088",
      "display" : "Anomalie congénitale de la branche de l'arc aortique",
      "target" : [{
        "code" : "09.30.17",
        "display" : "Congenital anomaly of aortic arch branch",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0089",
      "display" : "Syndrome de compression trachéo-œsophagienne",
      "target" : [{
        "code" : "09.31.40",
        "display" : "Tracheo-esophageal compressive syndrome",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0090",
      "display" : "Persistance du canal artériel",
      "target" : [{
        "code" : "09.27.21",
        "display" : "Patent arterial duct (PDA)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0091",
      "display" : "Anomalie congénitale des artères coronaires",
      "target" : [{
        "code" : "09.46.03",
        "display" : "Congenital anomaly of coronary artery(ies)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0092",
      "display" : "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "09.41.01",
        "display" : "Anomalous origin of coronary artery from pulmonary arterial tree",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0093",
      "display" : "Origine aortique anormale ou trajet anormal de l'artère coronaire",
      "target" : [{
        "code" : "09.42.00",
        "display" : "Anomalous aortic origin or course of coronary artery",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0094",
      "display" : "Fistule artérielle coronaire congénitale",
      "target" : [{
        "code" : "09.45.16",
        "display" : "Congenital coronary arterial fistula(s)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0095",
      "display" : "Malformation congénitale du péricarde",
      "target" : [{
        "code" : "10.01.05",
        "display" : "Congenital pericardial anomaly",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0096",
      "display" : "Anomalie congénitale du septum auriculaire",
      "target" : [{
        "code" : "05.07.01",
        "display" : "Congenital anomaly of atrial septum",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0097",
      "display" : "Foramen ovale perméable",
      "target" : [{
        "code" : "05.03.01",
        "display" : "Patent foramen ovale (PFO)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0098",
      "display" : "Communication interauriculaire dans la fosse ovale",
      "target" : [{
        "code" : "05.04.02",
        "display" : "Atrial septal defect (ASD) within oval fossa (secundum)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0099",
      "display" : "Anomalie du sinus veineux",
      "target" : [{
        "code" : "05.05.00",
        "display" : "Sinus venosus defect (ASD)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0100",
      "display" : "Communication interauriculaire par l'orifice du sinus coronaire",
      "target" : [{
        "code" : "05.05.03",
        "display" : "Interatrial communication (ASD) through coronary sinus orifice",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0101",
      "display" : "Anomalie congénitale de l'oreillette droite",
      "target" : [{
        "code" : "05.01.13",
        "display" : "Congenital anomaly of right atrium",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0102",
      "display" : "Anomalie congénitale de l'oreillette gauche",
      "target" : [{
        "code" : "05.02.11",
        "display" : "Congenital anomaly of left atrium",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0103",
      "display" : "Oreillette gauche divisée",
      "target" : [{
        "code" : "05.02.01",
        "display" : "Divided left atrium (cor triatriatum)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0104",
      "display" : "Sténose ou hypoplasie congénitale centrale des artères pulmonaires (en amont de la bifurcation hilaire)",
      "target" : [{
        "code" : "09.10.37",
        "display" : "Congenital central pulmonary arterial stenosis or hypoplasia proximal to hilar bifurcation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0105",
      "display" : "Sténose ou hypoplasie congénitale périphérique des artères pulmonaires (au niveau ou en aval de la bifurcation hilaire)",
      "target" : [{
        "code" : "09.10.38",
        "display" : "Congenital peripheral pulmonary arterial stenoses or hypoplasia at or beyond hilar bifurcation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0106",
      "display" : "Artères pulmonaires droite et gauche congénitalement discontinues, non confluentes",
      "target" : [{
        "code" : "09.10.30",
        "display" : "Congenitally discontinuous, non-confluent right and left pulmonary arteries",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0107",
      "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) majeure(s) (MAPCA)",
      "target" : [{
        "code" : "09.08.01",
        "display" : "Major systemic-to-pulmonary collateral artery(ies) (MAPCA(s))",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0108",
      "display" : "Fistule (malformation) artérioveineuse pulmonaire",
      "target" : [{
        "code" : "09.19.05",
        "display" : "Pulmonary arteriovenous fistula (malformation)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-DIAG-0109",
      "display" : "Bloc atrioventriculaire complet congénital idiopathique",
      "target" : [{
        "code" : "11.06.08",
        "display" : "Congenital idiopathic complete atrioventricular block",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    }]
  }]
}

```
