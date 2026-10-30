# TAUSSIG — Intention du cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## CodeSystem: TAUSSIG — Intention du cathétérisme 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Intentions de cathétérisme](ValueSet-cath-intent-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "cath-intent",
  "url" : "https://taussig/fhir/CodeSystem/cath-intent",
  "version" : "0.6.0",
  "name" : "CathIntent",
  "title" : "TAUSSIG — Intention du cathétérisme",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Intention globale de la procédure de cathétérisme.",
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
    "code" : "diagnostic",
    "display" : "Diagnostique"
  },
  {
    "code" : "interventional",
    "display" : "Interventionnel"
  },
  {
    "code" : "hybrid",
    "display" : "Hybride"
  }]
}

```
