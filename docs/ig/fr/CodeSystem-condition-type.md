# TAUSSIG — Type de condition évolutive - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Type de condition évolutive (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Types de condition évolutive](ValueSet-condition-type-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "condition-type",
  "url" : "https://taussig/fhir/CodeSystem/condition-type",
  "version" : "0.8.1",
  "name" : "ConditionType",
  "title" : "TAUSSIG — Type de condition évolutive",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Catégorie d'une lésion évolutive.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 3,
  "concept" : [{
    "code" : "residual_lesion",
    "display" : "Lésion résiduelle"
  },
  {
    "code" : "acquired_lesion",
    "display" : "Lésion acquise"
  },
  {
    "code" : "post_surgical_state",
    "display" : "État post-chirurgical"
  }]
}

```
