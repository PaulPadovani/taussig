# TAUSSIG — Liste des diagnostics cardiaques congénitaux - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Liste des diagnostics cardiaques congénitaux (Expérimental) 

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
  "id" : "taussig-diagnosis",
  "url" : "https://taussig/fhir/ValueSet/taussig-diagnosis",
  "version" : "0.8.1",
  "name" : "TaussigDiagnosisVS",
  "title" : "TAUSSIG — Liste des diagnostics cardiaques congénitaux",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Les 109 concepts TAUSSIG actifs (diagnostics cardiaques congénitaux).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/taussig-diagnosis",
      "concept" : [{
        "code" : "TAUSSIG-DIAG-0001",
        "display" : "Anomalie de position-orientation du cœur"
      },
      {
        "code" : "TAUSSIG-DIAG-0002",
        "display" : "Lévocardie"
      },
      {
        "code" : "TAUSSIG-DIAG-0003",
        "display" : "Dextrocardie"
      },
      {
        "code" : "TAUSSIG-DIAG-0004",
        "display" : "Mésocardie"
      },
      {
        "code" : "TAUSSIG-DIAG-0005",
        "display" : "Image en miroir complète"
      },
      {
        "code" : "TAUSSIG-DIAG-0006",
        "display" : "Isomérisme droit"
      },
      {
        "code" : "TAUSSIG-DIAG-0007",
        "display" : "Isomérisme gauche"
      },
      {
        "code" : "TAUSSIG-DIAG-0008",
        "display" : "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle"
      },
      {
        "code" : "TAUSSIG-DIAG-0009",
        "display" : "Connexions atrioventriculaires discordantes"
      },
      {
        "code" : "TAUSSIG-DIAG-0010",
        "display" : "Transposition congénitalement corrigée des grandes artères"
      },
      {
        "code" : "TAUSSIG-DIAG-0011",
        "display" : "Transposition des gros vaisseaux"
      },
      {
        "code" : "TAUSSIG-DIAG-0012",
        "display" : "Ventricule droit à double issue"
      },
      {
        "code" : "TAUSSIG-DIAG-0013",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition"
      },
      {
        "code" : "TAUSSIG-DIAG-0014",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux"
      },
      {
        "code" : "TAUSSIG-DIAG-0015",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0016",
        "display" : "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot"
      },
      {
        "code" : "TAUSSIG-DIAG-0017",
        "display" : "Ventricule gauche à double issue"
      },
      {
        "code" : "TAUSSIG-DIAG-0018",
        "display" : "Tronc artériel commun"
      },
      {
        "code" : "TAUSSIG-DIAG-0019",
        "display" : "Tronc artériel commun à dominance aortique"
      },
      {
        "code" : "TAUSSIG-DIAG-0020",
        "display" : "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue"
      },
      {
        "code" : "TAUSSIG-DIAG-0021",
        "display" : "Anomalie congénitale de la veine médiastinale"
      },
      {
        "code" : "TAUSSIG-DIAG-0022",
        "display" : "Veine cave supérieure gauche"
      },
      {
        "code" : "TAUSSIG-DIAG-0023",
        "display" : "Absence de toit du sinus coronaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0024",
        "display" : "Anomalie du retour veineux pulmonaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0025",
        "display" : "Connexion veineuse pulmonaire totale anormale"
      },
      {
        "code" : "TAUSSIG-DIAG-0026",
        "display" : "Connexion veineuse pulmonaire partielle anormale"
      },
      {
        "code" : "TAUSSIG-DIAG-0027",
        "display" : "Syndrome du cimeterre"
      },
      {
        "code" : "TAUSSIG-DIAG-0028",
        "display" : "Sténose ou hypoplasie veineuse pulmonaire congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0029",
        "display" : "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0030",
        "display" : "Anomalie congénitale de la valve tricuspide"
      },
      {
        "code" : "TAUSSIG-DIAG-0031",
        "display" : "Insuffisance tricuspide congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0032",
        "display" : "Sténose congénitale de la valve tricuspide"
      },
      {
        "code" : "TAUSSIG-DIAG-0033",
        "display" : "Dysplasie de la valve tricuspide"
      },
      {
        "code" : "TAUSSIG-DIAG-0034",
        "display" : "Malformation d'Ebstein de la valve tricuspide"
      },
      {
        "code" : "TAUSSIG-DIAG-0035",
        "display" : "Anomalie congénitale de la valve mitrale"
      },
      {
        "code" : "TAUSSIG-DIAG-0036",
        "display" : "Insuffisance mitrale congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0037",
        "display" : "Sténose valvulaire mitrale congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0038",
        "display" : "Dysplasie de la valve mitrale"
      },
      {
        "code" : "TAUSSIG-DIAG-0039",
        "display" : "Anomalie congénitale de l'appareil mitral sousvalvaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0040",
        "display" : "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0041",
        "display" : "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0042",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement"
      },
      {
        "code" : "TAUSSIG-DIAG-0043",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement"
      },
      {
        "code" : "TAUSSIG-DIAG-0044",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0045",
        "display" : "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0046",
        "display" : "Communication septale auriculoventriculaire avec déséquilibre ventriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0047",
        "display" : "Anomalie septal auriculoventriculaire et tétralogie de Fallot"
      },
      {
        "code" : "TAUSSIG-DIAG-0048",
        "display" : "Anomalie congénitale du ventricule ou du septum ventriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0049",
        "display" : "Obstruction congénitale de la voie de sortie du ventricule droit"
      },
      {
        "code" : "TAUSSIG-DIAG-0050",
        "display" : "Ventricule droit à double chambre"
      },
      {
        "code" : "TAUSSIG-DIAG-0051",
        "display" : "Tétralogie de Fallot"
      },
      {
        "code" : "TAUSSIG-DIAG-0052",
        "display" : "Tétralogie de Fallot avec syndrome de valve pulmonaire absente"
      },
      {
        "code" : "TAUSSIG-DIAG-0053",
        "display" : "Tétralogie de Fallot avec atrésie pulmonaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0054",
        "display" : "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0055",
        "display" : "Obstruction congénitale de la voie de sortie du ventricule gauche"
      },
      {
        "code" : "TAUSSIG-DIAG-0056",
        "display" : "Communication interventriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0057",
        "display" : "Communication interventriculaire musculaire trabéculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0058",
        "display" : "Communication interventriculaire centrale périmembraneuse"
      },
      {
        "code" : "TAUSSIG-DIAG-0059",
        "display" : "Communication interventriculaire non significatif sur le plan hémodynamique"
      },
      {
        "code" : "TAUSSIG-DIAG-0060",
        "display" : "Cœur fonctionnellement univentriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0061",
        "display" : "Connexion auriculoventriculaire à double entrée"
      },
      {
        "code" : "TAUSSIG-DIAG-0062",
        "display" : "Atrésie de la valve tricuspide"
      },
      {
        "code" : "TAUSSIG-DIAG-0063",
        "display" : "Atrésie mitrale"
      },
      {
        "code" : "TAUSSIG-DIAG-0064",
        "display" : "Syndrome d'hypoplasie du cœur gauche"
      },
      {
        "code" : "TAUSSIG-DIAG-0065",
        "display" : "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes"
      },
      {
        "code" : "TAUSSIG-DIAG-0066",
        "display" : "Anomalie congénitale de la valve pulmonaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0067",
        "display" : "Sténose congénitale de la valve pulmonaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0068",
        "display" : "Insuffisance congénitale de la valve pulmonaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0069",
        "display" : "Atrésie pulmonaire congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0070",
        "display" : "Atrésie pulmonaire avec septum ventriculaire intact"
      },
      {
        "code" : "TAUSSIG-DIAG-0071",
        "display" : "Anomalie congénitale de la valve aortique"
      },
      {
        "code" : "TAUSSIG-DIAG-0072",
        "display" : "Sténose congénitale de la valve aortique"
      },
      {
        "code" : "TAUSSIG-DIAG-0073",
        "display" : "Insuffisance aortique congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0074",
        "display" : "Valve aortique bicuspide"
      },
      {
        "code" : "TAUSSIG-DIAG-0075",
        "display" : "Atrésie de la valve aortique"
      },
      {
        "code" : "TAUSSIG-DIAG-0076",
        "display" : "Valve aortique unicuspide"
      },
      {
        "code" : "TAUSSIG-DIAG-0077",
        "display" : "Sténose supravalvulaire aortique congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0078",
        "display" : "Anévrisme du sinus aortique de Valsalva"
      },
      {
        "code" : "TAUSSIG-DIAG-0079",
        "display" : "Sténose sous-aortique congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0080",
        "display" : "Sténose sous-pulmonaire congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0081",
        "display" : "Anomalie congénitale des grandes artères, y compris le canal artériel"
      },
      {
        "code" : "TAUSSIG-DIAG-0082",
        "display" : "Fenêtre aortopulmonaire congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0083",
        "display" : "Anomalie congénitale de l'arbre artériel pulmonaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0084",
        "display" : "Anomalie congénitale de l'aorte ou de ses branches"
      },
      {
        "code" : "TAUSSIG-DIAG-0085",
        "display" : "Coarctation de l'aorte"
      },
      {
        "code" : "TAUSSIG-DIAG-0086",
        "display" : "Interruption de la crosse aortique"
      },
      {
        "code" : "TAUSSIG-DIAG-0087",
        "display" : "Anomalie congénitale de l'aorte thoracique descendante ou abdominale"
      },
      {
        "code" : "TAUSSIG-DIAG-0088",
        "display" : "Anomalie congénitale de la branche de l'arc aortique"
      },
      {
        "code" : "TAUSSIG-DIAG-0089",
        "display" : "Syndrome de compression trachéo-œsophagienne"
      },
      {
        "code" : "TAUSSIG-DIAG-0090",
        "display" : "Persistance du canal artériel"
      },
      {
        "code" : "TAUSSIG-DIAG-0091",
        "display" : "Anomalie congénitale des artères coronaires"
      },
      {
        "code" : "TAUSSIG-DIAG-0092",
        "display" : "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0093",
        "display" : "Origine aortique anormale ou trajet anormal de l'artère coronaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0094",
        "display" : "Fistule artérielle coronaire congénitale"
      },
      {
        "code" : "TAUSSIG-DIAG-0095",
        "display" : "Malformation congénitale du péricarde"
      },
      {
        "code" : "TAUSSIG-DIAG-0096",
        "display" : "Anomalie congénitale du septum auriculaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0097",
        "display" : "Foramen ovale perméable"
      },
      {
        "code" : "TAUSSIG-DIAG-0098",
        "display" : "Communication interauriculaire dans la fosse ovale"
      },
      {
        "code" : "TAUSSIG-DIAG-0099",
        "display" : "Anomalie du sinus veineux"
      },
      {
        "code" : "TAUSSIG-DIAG-0100",
        "display" : "Communication interauriculaire par l'orifice du sinus coronaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0101",
        "display" : "Anomalie congénitale de l'oreillette droite"
      },
      {
        "code" : "TAUSSIG-DIAG-0102",
        "display" : "Anomalie congénitale de l'oreillette gauche"
      },
      {
        "code" : "TAUSSIG-DIAG-0103",
        "display" : "Oreillette gauche divisée"
      },
      {
        "code" : "TAUSSIG-DIAG-0104",
        "display" : "Sténose ou hypoplasie congénitale centrale des artères pulmonaires (en amont de la bifurcation hilaire)"
      },
      {
        "code" : "TAUSSIG-DIAG-0105",
        "display" : "Sténose ou hypoplasie congénitale périphérique des artères pulmonaires (au niveau ou en aval de la bifurcation hilaire)"
      },
      {
        "code" : "TAUSSIG-DIAG-0106",
        "display" : "Artères pulmonaires droite et gauche congénitalement discontinues, non confluentes"
      },
      {
        "code" : "TAUSSIG-DIAG-0107",
        "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) majeure(s) (MAPCA)"
      },
      {
        "code" : "TAUSSIG-DIAG-0108",
        "display" : "Fistule (malformation) artérioveineuse pulmonaire"
      },
      {
        "code" : "TAUSSIG-DIAG-0109",
        "display" : "Bloc atrioventriculaire complet congénital idiopathique"
      }]
    }]
  }
}

```
