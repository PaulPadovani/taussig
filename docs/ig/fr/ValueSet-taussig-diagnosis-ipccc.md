# TAUSSIG — Diagnostics congénitaux (IPCCC) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Diagnostics congénitaux (IPCCC) (Expérimental) 

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
  "id" : "taussig-diagnosis-ipccc",
  "url" : "https://taussig/fhir/ValueSet/taussig-diagnosis-ipccc",
  "version" : "0.1.0",
  "name" : "TaussigDiagnosisIpccc",
  "title" : "TAUSSIG — Diagnostics congénitaux (IPCCC)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Équivalents IPCCC des diagnostics congénitaux du working set CIM-11 (codage parallèle de précision clinique). Un même code IPCCC peut répondre à plusieurs entités CIM-11.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/ipccc",
      "concept" : [{
        "code" : "02.01.09",
        "display" : "Anomalie de position-orientation du cœur"
      },
      {
        "code" : "02.01.03",
        "display" : "Lévocardie"
      },
      {
        "code" : "02.01.02",
        "display" : "Dextrocardie"
      },
      {
        "code" : "02.01.04",
        "display" : "Mésocardie"
      },
      {
        "code" : "03.01.03",
        "display" : "Image en miroir complète"
      },
      {
        "code" : "03.01.04",
        "display" : "Isomérisme droit"
      },
      {
        "code" : "03.01.05",
        "display" : "Isomérisme gauche"
      },
      {
        "code" : "01.03.09",
        "display" : "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle"
      },
      {
        "code" : "01.04.01",
        "display" : "Connexions atrioventriculaires discordantes"
      },
      {
        "code" : "01.01.03",
        "display" : "Transposition congénitalement corrigée des grandes artères"
      },
      {
        "code" : "01.05.01",
        "display" : "Transposition des gros vaisseaux"
      },
      {
        "code" : "01.01.04",
        "display" : "Ventricule droit à double issue"
      },
      {
        "code" : "01.01.18",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition"
      },
      {
        "code" : "01.01.19",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux"
      },
      {
        "code" : "01.01.40",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire"
      },
      {
        "code" : "01.01.17",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot"
      },
      {
        "code" : "01.05.03",
        "display" : "Ventricule gauche à double issue"
      },
      {
        "code" : "09.01.01",
        "display" : "Tronc artériel commun"
      },
      {
        "code" : "09.01.15",
        "display" : "Tronc artériel commun à dominance aortique"
      },
      {
        "code" : "09.01.18",
        "display" : "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue"
      },
      {
        "code" : "04.00.07",
        "display" : "Anomalie congénitale de la veine médiastinale"
      },
      {
        "code" : "04.01.25",
        "display" : "Veine cave supérieure gauche"
      },
      {
        "code" : "04.04.13",
        "display" : "Absence de toit du sinus coronaire"
      },
      {
        "code" : "04.08.07",
        "display" : "Anomalie du retour veineux pulmonaire"
      },
      {
        "code" : "04.08.05",
        "display" : "Connexion veineuse pulmonaire totale anormale"
      },
      {
        "code" : "04.07.01",
        "display" : "Connexion veineuse pulmonaire partielle anormale"
      },
      {
        "code" : "03.02.23",
        "display" : "Syndrome du cimeterre"
      },
      {
        "code" : "04.08.31",
        "display" : "Sténose ou hypoplasie veineuse pulmonaire congénitale"
      },
      {
        "code" : "06.00.15",
        "display" : "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire"
      },
      {
        "code" : "06.01.11",
        "display" : "Anomalie congénitale de la valve tricuspide"
      },
      {
        "code" : "06.01.25",
        "display" : "Insuffisance tricuspide congénitale"
      },
      {
        "code" : "06.01.07",
        "display" : "Sténose congénitale de la valve tricuspide"
      },
      {
        "code" : "06.01.03",
        "display" : "Dysplasie de la valve tricuspide"
      },
      {
        "code" : "06.01.34",
        "display" : "Malformation d'Ebstein de la valve tricuspide"
      },
      {
        "code" : "06.02.11",
        "display" : "Anomalie congénitale de la valve mitrale"
      },
      {
        "code" : "06.02.25",
        "display" : "Insuffisance mitrale congénitale"
      },
      {
        "code" : "06.02.07",
        "display" : "Sténose valvulaire mitrale congénitale"
      },
      {
        "code" : "06.02.03",
        "display" : "Dysplasie de la valve mitrale"
      },
      {
        "code" : "06.02.21",
        "display" : "Anomalie congénitale de l'appareil mitral sousvalvaire"
      },
      {
        "code" : "06.07.28",
        "display" : "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire"
      },
      {
        "code" : "06.06.00",
        "display" : "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire"
      },
      {
        "code" : "06.06.01",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement"
      },
      {
        "code" : "06.06.08",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement"
      },
      {
        "code" : "06.06.10",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire"
      },
      {
        "code" : "06.06.09",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire"
      },
      {
        "code" : "06.07.26",
        "display" : "Communication septale auriculoventriculaire avec déséquilibre ventriculaire"
      },
      {
        "code" : "01.01.20",
        "display" : "Anomalie septal auriculoventriculaire et tétralogie de Fallot"
      },
      {
        "code" : "07.00.00",
        "display" : "Anomalie congénitale du ventricule ou du septum ventriculaire"
      },
      {
        "code" : "07.05.20",
        "display" : "Obstruction congénitale de la voie de sortie du ventricule droit"
      },
      {
        "code" : "07.03.01",
        "display" : "Ventricule droit à double chambre"
      },
      {
        "code" : "01.01.01",
        "display" : "Tétralogie de Fallot"
      },
      {
        "code" : "09.05.25",
        "display" : "Tétralogie de Fallot avec syndrome de valve pulmonaire absente"
      },
      {
        "code" : "01.01.26",
        "display" : "Tétralogie de Fallot avec atrésie pulmonaire"
      },
      {
        "code" : "01.01.57",
        "display" : "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire"
      },
      {
        "code" : "07.09.28",
        "display" : "Obstruction congénitale de la voie de sortie du ventricule gauche"
      },
      {
        "code" : "07.10.00",
        "display" : "Communication interventriculaire"
      },
      {
        "code" : "07.11.01",
        "display" : "Communication interventriculaire musculaire trabéculaire"
      },
      {
        "code" : "07.10.01",
        "display" : "Communication interventriculaire centrale périmembraneuse"
      },
      {
        "code" : "07.15.01",
        "display" : "Communication interventriculaire non significatif sur le plan hémodynamique"
      },
      {
        "code" : "01.01.22",
        "display" : "Cœur fonctionnellement univentriculaire"
      },
      {
        "code" : "01.01.14",
        "display" : "Connexion auriculoventriculaire à double entrée"
      },
      {
        "code" : "06.01.01",
        "display" : "Atrésie de la valve tricuspide"
      },
      {
        "code" : "06.02.01",
        "display" : "Atrésie mitrale"
      },
      {
        "code" : "01.01.09",
        "display" : "Syndrome d'hypoplasie du cœur gauche"
      },
      {
        "code" : "09.04.29",
        "display" : "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes"
      },
      {
        "code" : "09.05.29",
        "display" : "Anomalie congénitale de la valve pulmonaire"
      },
      {
        "code" : "09.05.04",
        "display" : "Sténose congénitale de la valve pulmonaire"
      },
      {
        "code" : "09.05.22",
        "display" : "Insuffisance congénitale de la valve pulmonaire"
      },
      {
        "code" : "09.05.16",
        "display" : "Atrésie pulmonaire congénitale"
      },
      {
        "code" : "01.01.07",
        "display" : "Atrésie pulmonaire avec septum ventriculaire intact"
      },
      {
        "code" : "09.15.19",
        "display" : "Anomalie congénitale de la valve aortique"
      },
      {
        "code" : "09.15.01",
        "display" : "Sténose congénitale de la valve aortique"
      },
      {
        "code" : "09.15.07",
        "display" : "Insuffisance aortique congénitale"
      },
      {
        "code" : "09.15.22",
        "display" : "Valve aortique bicuspide"
      },
      {
        "code" : "09.15.06",
        "display" : "Atrésie de la valve aortique"
      },
      {
        "code" : "09.15.21",
        "display" : "Valve aortique unicuspide"
      },
      {
        "code" : "09.16.18",
        "display" : "Sténose supravalvulaire aortique congénitale"
      },
      {
        "code" : "09.18.01",
        "display" : "Anévrisme du sinus aortique de Valsalva"
      },
      {
        "code" : "07.09.50",
        "display" : "Sténose sous-aortique congénitale"
      },
      {
        "code" : "07.05.32",
        "display" : "Sténose sous-pulmonaire congénitale"
      },
      {
        "code" : "09.04.28",
        "display" : "Anomalie congénitale des grandes artères, y compris le canal artériel"
      },
      {
        "code" : "09.04.07",
        "display" : "Fenêtre aortopulmonaire congénitale"
      },
      {
        "code" : "09.07.16",
        "display" : "Anomalie congénitale de l'arbre artériel pulmonaire"
      },
      {
        "code" : "07.09.34",
        "display" : "Anomalie congénitale de l'aorte ou de ses branches"
      },
      {
        "code" : "09.29.01",
        "display" : "Coarctation de l'aorte"
      },
      {
        "code" : "09.29.31",
        "display" : "Interruption de la crosse aortique"
      },
      {
        "code" : "09.28.47",
        "display" : "Anomalie congénitale de l'aorte thoracique descendante ou abdominale"
      },
      {
        "code" : "09.30.17",
        "display" : "Anomalie congénitale de la branche de l'arc aortique"
      },
      {
        "code" : "09.31.40",
        "display" : "Syndrome de compression trachéo-œsophagienne"
      },
      {
        "code" : "09.27.21",
        "display" : "Persistance du canal artériel"
      },
      {
        "code" : "09.46.03",
        "display" : "Anomalie congénitale des artères coronaires"
      },
      {
        "code" : "09.41.01",
        "display" : "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire"
      },
      {
        "code" : "09.42.00",
        "display" : "Origine aortique anormale ou trajet anormal de l'artère coronaire"
      },
      {
        "code" : "09.45.16",
        "display" : "Fistule artérielle coronaire congénitale"
      },
      {
        "code" : "10.01.05",
        "display" : "Malformation congénitale du péricarde"
      },
      {
        "code" : "05.07.01",
        "display" : "Anomalie congénitale du septum auriculaire"
      },
      {
        "code" : "05.03.01",
        "display" : "Foramen ovale perméable"
      },
      {
        "code" : "05.04.02",
        "display" : "Communication interauriculaire dans la fosse ovale"
      },
      {
        "code" : "05.05.00",
        "display" : "Anomalie du sinus veineux"
      },
      {
        "code" : "05.05.03",
        "display" : "Communication interauriculaire par l'orifice du sinus coronaire"
      },
      {
        "code" : "05.01.13",
        "display" : "Anomalie congénitale de l'oreillette droite"
      },
      {
        "code" : "05.02.11",
        "display" : "Anomalie congénitale de l'oreillette gauche"
      },
      {
        "code" : "05.02.01",
        "display" : "Oreillette gauche divisée"
      },
      {
        "code" : "09.10.37",
        "display" : "Sténose ou hypoplasie congénitale centrale des artères pulmonaires (en amont de la bifurcation hilaire)"
      },
      {
        "code" : "09.10.38",
        "display" : "Sténose ou hypoplasie congénitale périphérique des artères pulmonaires (au niveau ou en aval de la bifurcation hilaire)"
      },
      {
        "code" : "09.10.30",
        "display" : "Artères pulmonaires droite et gauche congénitalement discontinues, non confluentes"
      },
      {
        "code" : "09.08.01",
        "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) majeure(s) (MAPCA)"
      },
      {
        "code" : "09.19.05",
        "display" : "Fistule (malformation) artérioveineuse pulmonaire"
      },
      {
        "code" : "11.06.08",
        "display" : "Bloc atrioventriculaire complet congénital idiopathique"
      }]
    }]
  }
}

```
