# TAUSSIG — Méthode de confirmation génétique - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Méthode de confirmation génétique (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* Cette terminologie de référence (CodeSystem) n'est pas utilisée ici; elle peut être utilisée ailleurs (par exemple spécifications et/ou implémentations qui utilisent ce contenu)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "genetic-method",
  "url" : "https://taussig/fhir/CodeSystem/genetic-method",
  "version" : "0.8.0",
  "name" : "GeneticMethod",
  "title" : "TAUSSIG — Méthode de confirmation génétique",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Méthode ayant confirmé/écarté le syndrome (Observation.method).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 5,
  "concept" : [{
    "code" : "clinical",
    "display" : "Clinique"
  },
  {
    "code" : "cytogenetic",
    "display" : "Cytogénétique"
  },
  {
    "code" : "molecular",
    "display" : "Moléculaire"
  },
  {
    "code" : "suspected",
    "display" : "Suspecté"
  },
  {
    "code" : "ruled_out",
    "display" : "Écarté"
  }]
}

```
