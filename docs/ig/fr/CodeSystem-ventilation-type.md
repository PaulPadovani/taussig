# TAUSSIG — Mode ventilatoire - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Mode ventilatoire (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Modes ventilatoires](ValueSet-ventilation-type-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "ventilation-type",
  "url" : "https://taussig/fhir/CodeSystem/ventilation-type",
  "version" : "0.8.0",
  "name" : "VentilationType",
  "title" : "TAUSSIG — Mode ventilatoire",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Mode de ventilation pendant l'anesthésie.",
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
    "code" : "invasive",
    "display" : "Invasive"
  },
  {
    "code" : "non_invasive",
    "display" : "Non invasive"
  },
  {
    "code" : "spontaneous",
    "display" : "Spontanée"
  }]
}

```
