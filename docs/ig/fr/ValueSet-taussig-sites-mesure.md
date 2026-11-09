# TAUSSIG — Sites anatomiques de mesure/geste (validé) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Sites anatomiques de mesure/geste (validé) (Expérimental) 

 **References** 

* [TAUSSIG — Mesure clinique (delta pre/post)](StructureDefinition-taussig-clinical-measurement.md)
* [TAUSSIG — Pose et port d'un implant](StructureDefinition-taussig-implant-use.md)
* [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-sites-mesure",
  "url" : "https://taussig/fhir/ValueSet/taussig-sites-mesure",
  "version" : "0.1.0",
  "name" : "TaussigSitesMesure",
  "title" : "TAUSSIG — Sites anatomiques de mesure/geste (validé)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Working set des sites de cathétérisme validé cliniquement (cavités, valves, septa, gros vaisseaux, abords, sites post-chirurgicaux). Codes SNOMED CT + 1 code TAUSSIG-local (connexion cavopulmonaire inférieure, absente de SNOMED).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "concept" : [{
        "code" : "73829009",
        "display" : "oreillette droite"
      },
      {
        "code" : "82471001",
        "display" : "oreillette gauche"
      },
      {
        "code" : "53085002",
        "display" : "ventricule cardiaque droit"
      },
      {
        "code" : "87878005",
        "display" : "ventricule cardiaque gauche"
      },
      {
        "code" : "46030003",
        "display" : "valve tricuspide"
      },
      {
        "code" : "91134007",
        "display" : "valve mitrale"
      },
      {
        "code" : "39057004",
        "display" : "valve pulmonaire"
      },
      {
        "code" : "34202007",
        "display" : "valve aortique"
      },
      {
        "code" : "58095006",
        "display" : "septum interauriculaire"
      },
      {
        "code" : "589001",
        "display" : "septum interventriculaire"
      },
      {
        "code" : "54247002",
        "display" : "aorte ascendante"
      },
      {
        "code" : "57034009",
        "display" : "arc aortique"
      },
      {
        "code" : "32672002",
        "display" : "aorte thoracique descendante"
      },
      {
        "code" : "88593004",
        "display" : "isthme aortique"
      },
      {
        "code" : "45341000",
        "display" : "tronc de l'artère pulmonaire"
      },
      {
        "code" : "78480002",
        "display" : "artère pulmonaire droite"
      },
      {
        "code" : "50408007",
        "display" : "artère pulmonaire gauche"
      },
      {
        "code" : "122972007",
        "display" : "veine pulmonaire"
      },
      {
        "code" : "48345005",
        "display" : "veine cave supérieure"
      },
      {
        "code" : "9642004",
        "display" : "veine cave supérieure gauche"
      },
      {
        "code" : "64131007",
        "display" : "veine cave inférieure"
      },
      {
        "code" : "4432005",
        "display" : "canal artériel"
      },
      {
        "code" : "50018008",
        "display" : "artère coronaire gauche"
      },
      {
        "code" : "13647002",
        "display" : "artère coronaire droite"
      },
      {
        "code" : "12691009",
        "display" : "tronc artériel brachiocéphalique"
      },
      {
        "code" : "7657000",
        "display" : "artère fémorale"
      },
      {
        "code" : "83419000",
        "display" : "veine fémorale"
      },
      {
        "code" : "12123001",
        "display" : "veine jugulaire interne"
      },
      {
        "code" : "9454009",
        "display" : "veine subclavière"
      },
      {
        "code" : "45631007",
        "display" : "artère radiale"
      },
      {
        "code" : "367567000",
        "display" : "veine ombilicale"
      },
      {
        "code" : "264824009",
        "display" : "conduit cardiaque"
      },
      {
        "code" : "443327008",
        "display" : "voie d'Hémi-Fontan"
      },
      {
        "code" : "443298009",
        "display" : "circulation de Fontan"
      },
      {
        "code" : "443724003",
        "display" : "fenestration de Fontan"
      },
      {
        "code" : "253689007",
        "display" : "artère collatérale aortopulmonaire majeure"
      },
      {
        "code" : "253690003",
        "display" : "artère collatérale systémicopulmonaire"
      },
      {
        "code" : "17137000",
        "display" : "artère brachiale"
      },
      {
        "code" : "20115005",
        "display" : "veine brachiale"
      },
      {
        "code" : "32062004",
        "display" : "artère carotide commune"
      },
      {
        "code" : "8993003",
        "display" : "veine hépatique"
      }]
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/taussig-local",
      "concept" : [{
        "code" : "TAUSSIG-CAVOPULM-INF",
        "display" : "dérivation cavopulmonaire inférieure (VCI→AP)"
      }]
    }]
  }
}

```
