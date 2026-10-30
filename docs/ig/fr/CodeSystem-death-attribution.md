# TAUSSIG — Attribution du décès péri-procédural - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## CodeSystem: TAUSSIG — Attribution du décès péri-procédural 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Attributions du décès](ValueSet-death-attribution-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "death-attribution",
  "url" : "https://taussig/fhir/CodeSystem/death-attribution",
  "version" : "0.6.0",
  "name" : "DeathAttribution",
  "title" : "TAUSSIG — Attribution du décès péri-procédural",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Imputabilité d'un décès survenu en péri-procédure (ProcedureOutcome).",
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
    "code" : "procedure_related",
    "display" : "Lié à la procédure"
  },
  {
    "code" : "procedure_possibly_related",
    "display" : "Possiblement lié à la procédure"
  },
  {
    "code" : "unrelated",
    "display" : "Non lié"
  },
  {
    "code" : "unknown",
    "display" : "Inconnu"
  }]
}

```
