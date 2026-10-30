# TAUSSIG — Résultat d'un geste / d'un matériel - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## CodeSystem: TAUSSIG — Résultat d'un geste / d'un matériel 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Résultats de geste](ValueSet-gesture-result-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "gesture-result",
  "url" : "https://taussig/fhir/CodeSystem/gesture-result",
  "version" : "0.6.0",
  "name" : "GestureResult",
  "title" : "TAUSSIG — Résultat d'un geste / d'un matériel",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Résultat au niveau geste et tentative matériel.",
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
    "code" : "success",
    "display" : "Succès"
  },
  {
    "code" : "partial",
    "display" : "Partiel"
  },
  {
    "code" : "failure_repositioned",
    "display" : "Échec — repositionné"
  },
  {
    "code" : "failure_abandoned",
    "display" : "Échec — abandonné"
  }]
}

```
