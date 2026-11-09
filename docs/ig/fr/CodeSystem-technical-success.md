# TAUSSIG — Succès technique de la procédure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Succès technique de la procédure (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Succès technique](ValueSet-technical-success-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "technical-success",
  "url" : "https://taussig/fhir/CodeSystem/technical-success",
  "version" : "0.8.0",
  "name" : "TechnicalSuccess",
  "title" : "TAUSSIG — Succès technique de la procédure",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Niveau de succès technique au niveau procédure.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 4,
  "concept" : [{
    "code" : "complete",
    "display" : "Complet"
  },
  {
    "code" : "partial",
    "display" : "Partiel"
  },
  {
    "code" : "failed",
    "display" : "Échec"
  },
  {
    "code" : "aborted",
    "display" : "Interrompu"
  }]
}

```
