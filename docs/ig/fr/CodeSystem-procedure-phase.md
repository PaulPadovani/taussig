# TAUSSIG — Phase procédurale d'une mesure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Phase procédurale d'une mesure (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Phases procédurales](ValueSet-procedure-phase-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "procedure-phase",
  "url" : "https://taussig/fhir/CodeSystem/procedure-phase",
  "version" : "0.8.0",
  "name" : "ProcedurePhase",
  "title" : "TAUSSIG — Phase procédurale d'une mesure",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Référentiel temporel pour le delta pre/post (cœur de la POC).",
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
    "code" : "baseline",
    "display" : "État de base"
  },
  {
    "code" : "pre_intervention",
    "display" : "Avant le geste"
  },
  {
    "code" : "post_intervention",
    "display" : "Après le geste"
  },
  {
    "code" : "not_applicable",
    "display" : "Non applicable"
  }]
}

```
