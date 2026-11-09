# TAUSSIG — Diagnostics congénitaux (CIM-11 MMS) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Diagnostics congénitaux (CIM-11 MMS) (Expérimental) 

 **References** 

* [TAUSSIG — Diagnostic cardiaque congénital](StructureDefinition-taussig-cardiac-diagnosis.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-diagnosis-icd11",
  "url" : "https://taussig/fhir/ValueSet/taussig-diagnosis-icd11",
  "version" : "0.1.0",
  "name" : "TaussigDiagnosisIcd11",
  "title" : "TAUSSIG — Diagnostics congénitaux (CIM-11 MMS)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Axe de classification diagnostique de la POC : énumération des entités CIM-11 MMS retenues pour les cardiopathies congénitales, avec le libellé français officiel de l'OMS. Liaison extensible : un code CIM-11 hors liste reste admis, mais l'autocomplétion et les statistiques se font sur ce working set curé.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://id.who.int/icd/release/11/mms",
      "concept" : [{
        "code" : "LA80",
        "display" : "Anomalie de position-orientation du cœur",
        "designation" : [{
          "language" : "en",
          "value" : "Anomalous position-orientation of heart"
        }]
      },
      {
        "code" : "LA80.0",
        "display" : "Lévocardie",
        "designation" : [{
          "language" : "en",
          "value" : "Laevocardia"
        }]
      },
      {
        "code" : "LA80.1",
        "display" : "Dextrocardie",
        "designation" : [{
          "language" : "en",
          "value" : "Dextrocardia"
        }]
      },
      {
        "code" : "LA80.2",
        "display" : "Mésocardie",
        "designation" : [{
          "language" : "en",
          "value" : "Mesocardia"
        }]
      },
      {
        "code" : "LA82",
        "display" : "Image en miroir complète",
        "designation" : [{
          "language" : "en",
          "value" : "Total mirror imagery"
        }]
      },
      {
        "code" : "LA83",
        "display" : "Isomérisme droit",
        "designation" : [{
          "language" : "en",
          "value" : "Right isomerism"
        }]
      },
      {
        "code" : "LA84",
        "display" : "Isomérisme gauche",
        "designation" : [{
          "language" : "en",
          "value" : "Left isomerism"
        }]
      },
      {
        "code" : "LA85",
        "display" : "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of an atrioventricular or ventriculo-arterial connection"
        }]
      },
      {
        "code" : "LA85.0",
        "display" : "Connexions atrioventriculaires discordantes",
        "designation" : [{
          "language" : "en",
          "value" : "Discordant atrioventricular connections"
        }]
      },
      {
        "code" : "LA85.00",
        "display" : "Transposition congénitalement corrigée des grandes artères",
        "designation" : [{
          "language" : "en",
          "value" : "Congenitally corrected transposition of great arteries"
        }]
      },
      {
        "code" : "LA85.1",
        "display" : "Transposition des gros vaisseaux",
        "designation" : [{
          "language" : "en",
          "value" : "Transposition of the great arteries"
        }]
      },
      {
        "code" : "LA85.2",
        "display" : "Ventricule droit à double issue",
        "designation" : [{
          "language" : "en",
          "value" : "Double outlet right ventricle"
        }]
      },
      {
        "code" : "LA85.20",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition",
        "designation" : [{
          "language" : "en",
          "value" : "Double outlet right ventricle with subpulmonary ventricular septal defect, transposition type"
        }]
      },
      {
        "code" : "LA85.21",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux",
        "designation" : [{
          "language" : "en",
          "value" : "Double outlet right ventricle with non-committed ventricular septal defect"
        }]
      },
      {
        "code" : "LA85.22",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Double outlet right ventricle with subaortic or doubly committed ventricular septal defect without pulmonary stenosis, ventricular septal defect type"
        }]
      },
      {
        "code" : "LA85.23",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot",
        "designation" : [{
          "language" : "en",
          "value" : "Double outlet right ventricle with subaortic or doubly committed ventricular septal defect and pulmonary stenosis, Fallot type"
        }]
      },
      {
        "code" : "LA85.3",
        "display" : "Ventricule gauche à double issue",
        "designation" : [{
          "language" : "en",
          "value" : "Double outlet left ventricle"
        }]
      },
      {
        "code" : "LA85.4",
        "display" : "Tronc artériel commun",
        "designation" : [{
          "language" : "en",
          "value" : "Common arterial trunk"
        }]
      },
      {
        "code" : "LA85.40",
        "display" : "Tronc artériel commun à dominance aortique",
        "designation" : [{
          "language" : "en",
          "value" : "Common arterial trunk with aortic dominance"
        }]
      },
      {
        "code" : "LA85.41",
        "display" : "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue",
        "designation" : [{
          "language" : "en",
          "value" : "Common arterial trunk with pulmonary dominance and interrupted aortic arch"
        }]
      },
      {
        "code" : "LA86",
        "display" : "Anomalie congénitale de la veine médiastinale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of mediastinal vein"
        }]
      },
      {
        "code" : "LA86.0",
        "display" : "Veine cave supérieure gauche",
        "designation" : [{
          "language" : "en",
          "value" : "Left superior caval vein"
        }]
      },
      {
        "code" : "LA86.1",
        "display" : "Absence de toit du sinus coronaire",
        "designation" : [{
          "language" : "en",
          "value" : "Unroofed coronary sinus"
        }]
      },
      {
        "code" : "LA86.2",
        "display" : "Anomalie du retour veineux pulmonaire",
        "designation" : [{
          "language" : "en",
          "value" : "Anomalous pulmonary venous connection"
        }]
      },
      {
        "code" : "LA86.20",
        "display" : "Connexion veineuse pulmonaire totale anormale",
        "designation" : [{
          "language" : "en",
          "value" : "Total anomalous pulmonary venous connection"
        }]
      },
      {
        "code" : "LA86.21",
        "display" : "Connexion veineuse pulmonaire partielle anormale",
        "designation" : [{
          "language" : "en",
          "value" : "Partial anomalous pulmonary venous connection"
        }]
      },
      {
        "code" : "LA86.22",
        "display" : "Syndrome du cimeterre",
        "designation" : [{
          "language" : "en",
          "value" : "Scimitar syndrome"
        }]
      },
      {
        "code" : "LA86.3",
        "display" : "Sténose ou hypoplasie veineuse pulmonaire congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital pulmonary venous stenosis or hypoplasia"
        }]
      },
      {
        "code" : "LA87",
        "display" : "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of an atrioventricular valve or atrioventricular septum"
        }]
      },
      {
        "code" : "LA87.0",
        "display" : "Anomalie congénitale de la valve tricuspide",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of tricuspid valve"
        }]
      },
      {
        "code" : "LA87.00",
        "display" : "Insuffisance tricuspide congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital tricuspid regurgitation"
        }]
      },
      {
        "code" : "LA87.01",
        "display" : "Sténose congénitale de la valve tricuspide",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital tricuspid valvar stenosis"
        }]
      },
      {
        "code" : "LA87.02",
        "display" : "Dysplasie de la valve tricuspide",
        "designation" : [{
          "language" : "en",
          "value" : "Dysplasia of tricuspid valve"
        }]
      },
      {
        "code" : "LA87.03",
        "display" : "Malformation d'Ebstein de la valve tricuspide",
        "designation" : [{
          "language" : "en",
          "value" : "Ebstein malformation of tricuspid valve"
        }]
      },
      {
        "code" : "LA87.1",
        "display" : "Anomalie congénitale de la valve mitrale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of mitral valve"
        }]
      },
      {
        "code" : "LA87.10",
        "display" : "Insuffisance mitrale congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital mitral regurgitation"
        }]
      },
      {
        "code" : "LA87.11",
        "display" : "Sténose valvulaire mitrale congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital mitral valvar stenosis"
        }]
      },
      {
        "code" : "LA87.12",
        "display" : "Dysplasie de la valve mitrale",
        "designation" : [{
          "language" : "en",
          "value" : "Dysplasia of mitral valve"
        }]
      },
      {
        "code" : "LA87.13",
        "display" : "Anomalie congénitale de l'appareil mitral sousvalvaire",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of mitral subvalvar apparatus"
        }]
      },
      {
        "code" : "LA87.3",
        "display" : "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Common atrioventricular junction without an atrioventricular septal defect"
        }]
      },
      {
        "code" : "LA87.4",
        "display" : "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Common atrioventricular junction with atrioventricular septal defect"
        }]
      },
      {
        "code" : "LA87.40",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement",
        "designation" : [{
          "language" : "en",
          "value" : "Atrioventricular septal defect with communication at the atrial level only"
        }]
      },
      {
        "code" : "LA87.41",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement",
        "designation" : [{
          "language" : "en",
          "value" : "Atrioventricular septal defect with communication at the ventricular level only"
        }]
      },
      {
        "code" : "LA87.42",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Atrioventricular septal defect with communication at atrial level and restrictive communication at ventricular level"
        }]
      },
      {
        "code" : "LA87.43",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Atrioventricular septal defect with communication at atrial level and unrestrictive communication at ventricular level"
        }]
      },
      {
        "code" : "LA87.44",
        "display" : "Communication septale auriculoventriculaire avec déséquilibre ventriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Atrioventricular septal defect with ventricular imbalance"
        }]
      },
      {
        "code" : "LA87.45",
        "display" : "Anomalie septal auriculoventriculaire et tétralogie de Fallot",
        "designation" : [{
          "language" : "en",
          "value" : "Atrioventricular septal defect and tetralogy of Fallot"
        }]
      },
      {
        "code" : "LA88",
        "display" : "Anomalie congénitale du ventricule ou du septum ventriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of a ventricle or the ventricular septum"
        }]
      },
      {
        "code" : "LA88.0",
        "display" : "Obstruction congénitale de la voie de sortie du ventricule droit",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital right ventricular outflow tract obstruction"
        }]
      },
      {
        "code" : "LA88.1",
        "display" : "Ventricule droit à double chambre",
        "designation" : [{
          "language" : "en",
          "value" : "Double chambered right ventricle"
        }]
      },
      {
        "code" : "LA88.2",
        "display" : "Tétralogie de Fallot",
        "designation" : [{
          "language" : "en",
          "value" : "Tetralogy of Fallot"
        }]
      },
      {
        "code" : "LA88.20",
        "display" : "Tétralogie de Fallot avec syndrome de valve pulmonaire absente",
        "designation" : [{
          "language" : "en",
          "value" : "Tetralogy of Fallot with absent pulmonary valve syndrome"
        }]
      },
      {
        "code" : "LA88.21",
        "display" : "Tétralogie de Fallot avec atrésie pulmonaire",
        "designation" : [{
          "language" : "en",
          "value" : "Tetralogy of Fallot with pulmonary atresia"
        }]
      },
      {
        "code" : "LA88.22",
        "display" : "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire",
        "designation" : [{
          "language" : "en",
          "value" : "Tetralogy of Fallot with pulmonary atresia and systemic-to-pulmonary collateral artery"
        }]
      },
      {
        "code" : "LA88.3",
        "display" : "Obstruction congénitale de la voie de sortie du ventricule gauche",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital left ventricular outflow tract obstruction"
        }]
      },
      {
        "code" : "LA88.4",
        "display" : "Communication interventriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Ventricular septal defect"
        }]
      },
      {
        "code" : "LA88.40",
        "display" : "Communication interventriculaire musculaire trabéculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Trabecular muscular ventricular septal defect"
        }]
      },
      {
        "code" : "LA88.41",
        "display" : "Communication interventriculaire centrale périmembraneuse",
        "designation" : [{
          "language" : "en",
          "value" : "Perimembranous central ventricular septal defect"
        }]
      },
      {
        "code" : "LA88.42",
        "display" : "Communication interventriculaire non significatif sur le plan hémodynamique",
        "designation" : [{
          "language" : "en",
          "value" : "Ventricular septal defect haemodynamically insignificant"
        }]
      },
      {
        "code" : "LA89",
        "display" : "Cœur fonctionnellement univentriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Functionally univentricular heart"
        }]
      },
      {
        "code" : "LA89.0",
        "display" : "Connexion auriculoventriculaire à double entrée",
        "designation" : [{
          "language" : "en",
          "value" : "Double inlet atrioventricular connection"
        }]
      },
      {
        "code" : "LA89.1",
        "display" : "Atrésie de la valve tricuspide",
        "designation" : [{
          "language" : "en",
          "value" : "Tricuspid atresia"
        }]
      },
      {
        "code" : "LA89.2",
        "display" : "Atrésie mitrale",
        "designation" : [{
          "language" : "en",
          "value" : "Mitral atresia"
        }]
      },
      {
        "code" : "LA89.3",
        "display" : "Syndrome d'hypoplasie du cœur gauche",
        "designation" : [{
          "language" : "en",
          "value" : "Hypoplastic left heart syndrome"
        }]
      },
      {
        "code" : "LA8A",
        "display" : "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of a ventriculo-arterial valve or adjacent regions"
        }]
      },
      {
        "code" : "LA8A.0",
        "display" : "Anomalie congénitale de la valve pulmonaire",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of pulmonary valve"
        }]
      },
      {
        "code" : "LA8A.00",
        "display" : "Sténose congénitale de la valve pulmonaire",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital pulmonary valvar stenosis"
        }]
      },
      {
        "code" : "LA8A.01",
        "display" : "Insuffisance congénitale de la valve pulmonaire",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital pulmonary regurgitation"
        }]
      },
      {
        "code" : "LA8A.1",
        "display" : "Atrésie pulmonaire congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital pulmonary atresia"
        }]
      },
      {
        "code" : "LA8A.10",
        "display" : "Atrésie pulmonaire avec septum ventriculaire intact",
        "designation" : [{
          "language" : "en",
          "value" : "Pulmonary atresia with intact ventricular septum"
        }]
      },
      {
        "code" : "LA8A.2",
        "display" : "Anomalie congénitale de la valve aortique",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of aortic valve"
        }]
      },
      {
        "code" : "LA8A.20",
        "display" : "Sténose congénitale de la valve aortique",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital aortic valvar stenosis"
        }]
      },
      {
        "code" : "LA8A.21",
        "display" : "Insuffisance aortique congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital aortic regurgitation"
        }]
      },
      {
        "code" : "LA8A.22",
        "display" : "Valve aortique bicuspide",
        "designation" : [{
          "language" : "en",
          "value" : "Bicuspid aortic valve"
        }]
      },
      {
        "code" : "LA8A.23",
        "display" : "Atrésie de la valve aortique",
        "designation" : [{
          "language" : "en",
          "value" : "Aortic valvar atresia"
        }]
      },
      {
        "code" : "LA8A.24",
        "display" : "Valve aortique unicuspide",
        "designation" : [{
          "language" : "en",
          "value" : "Unicuspid aortic valve"
        }]
      },
      {
        "code" : "LA8A.3",
        "display" : "Sténose supravalvulaire aortique congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital supravalvar aortic stenosis"
        }]
      },
      {
        "code" : "LA8A.4",
        "display" : "Anévrisme du sinus aortique de Valsalva",
        "designation" : [{
          "language" : "en",
          "value" : "Aneurysm of aortic sinus of Valsalva"
        }]
      },
      {
        "code" : "LA8A.5",
        "display" : "Sténose sous-aortique congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital subaortic stenosis"
        }]
      },
      {
        "code" : "LA8A.6",
        "display" : "Sténose sous-pulmonaire congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital subpulmonary stenosis"
        }]
      },
      {
        "code" : "LA8B",
        "display" : "Anomalie congénitale des grandes artères, y compris le canal artériel",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of great arteries including arterial duct"
        }]
      },
      {
        "code" : "LA8B.0",
        "display" : "Fenêtre aortopulmonaire congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital aortopulmonary window"
        }]
      },
      {
        "code" : "LA8B.1",
        "display" : "Anomalie congénitale de l'arbre artériel pulmonaire",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of pulmonary arterial tree"
        }]
      },
      {
        "code" : "LA8B.2",
        "display" : "Anomalie congénitale de l'aorte ou de ses branches",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of aorta or its branches"
        }]
      },
      {
        "code" : "LA8B.21",
        "display" : "Coarctation de l'aorte",
        "designation" : [{
          "language" : "en",
          "value" : "Coarctation of aorta"
        }]
      },
      {
        "code" : "LA8B.22",
        "display" : "Interruption de la crosse aortique",
        "designation" : [{
          "language" : "en",
          "value" : "Interrupted aortic arch"
        }]
      },
      {
        "code" : "LA8B.23",
        "display" : "Anomalie congénitale de l'aorte thoracique descendante ou abdominale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of descending thoracic or abdominal aorta"
        }]
      },
      {
        "code" : "LA8B.24",
        "display" : "Anomalie congénitale de la branche de l'arc aortique",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of aortic arch branch"
        }]
      },
      {
        "code" : "LA8B.3",
        "display" : "Syndrome de compression trachéo-œsophagienne",
        "designation" : [{
          "language" : "en",
          "value" : "Tracheo-oesophageal compressive syndrome"
        }]
      },
      {
        "code" : "LA8B.4",
        "display" : "Persistance du canal artériel",
        "designation" : [{
          "language" : "en",
          "value" : "Patent arterial duct"
        }]
      },
      {
        "code" : "LA8C",
        "display" : "Anomalie congénitale des artères coronaires",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of coronary artery"
        }]
      },
      {
        "code" : "LA8C.0",
        "display" : "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire",
        "designation" : [{
          "language" : "en",
          "value" : "Anomalous origin of coronary artery from pulmonary arterial tree"
        }]
      },
      {
        "code" : "LA8C.1",
        "display" : "Origine aortique anormale ou trajet anormal de l'artère coronaire",
        "designation" : [{
          "language" : "en",
          "value" : "Anomalous aortic origin or course of coronary artery"
        }]
      },
      {
        "code" : "LA8C.2",
        "display" : "Fistule artérielle coronaire congénitale",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital coronary arterial fistula"
        }]
      },
      {
        "code" : "LA8D",
        "display" : "Malformation congénitale du péricarde",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital pericardial anomaly"
        }]
      },
      {
        "code" : "LA8E",
        "display" : "Anomalie congénitale du septum auriculaire",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of atrial septum"
        }]
      },
      {
        "code" : "LA8E.0",
        "display" : "Foramen ovale perméable",
        "designation" : [{
          "language" : "en",
          "value" : "Patent oval foramen"
        }]
      },
      {
        "code" : "LA8E.1",
        "display" : "Communication interauriculaire dans la fosse ovale",
        "designation" : [{
          "language" : "en",
          "value" : "Atrial septal defect within oval fossa"
        }]
      },
      {
        "code" : "LA8E.2",
        "display" : "Anomalie du sinus veineux",
        "designation" : [{
          "language" : "en",
          "value" : "Sinus venosus defect"
        }]
      },
      {
        "code" : "LA8E.3",
        "display" : "Communication interauriculaire par l'orifice du sinus coronaire",
        "designation" : [{
          "language" : "en",
          "value" : "Interatrial communication through coronary sinus orifice"
        }]
      },
      {
        "code" : "LA8F",
        "display" : "Anomalie congénitale de l'oreillette droite",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of right atrium"
        }]
      },
      {
        "code" : "LA8G",
        "display" : "Anomalie congénitale de l'oreillette gauche",
        "designation" : [{
          "language" : "en",
          "value" : "Congenital anomaly of left atrium"
        }]
      },
      {
        "code" : "LA8G.0",
        "display" : "Oreillette gauche divisée",
        "designation" : [{
          "language" : "en",
          "value" : "Divided left atrium"
        }]
      },
      {
        "code" : "LA90.5",
        "display" : "Fistule artérioveineuse pulmonaire"
      },
      {
        "code" : "BC63.20",
        "display" : "Bloc auriculoventriculaire complet congénital"
      }]
    }]
  }
}

```
