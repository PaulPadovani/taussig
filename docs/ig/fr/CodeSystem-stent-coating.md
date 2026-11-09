# TAUSSIG — Revêtement actif d'un stent - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Revêtement actif d'un stent (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Liste — Revêtement actif d'un stent](ValueSet-stent-coating-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "stent-coating",
  "url" : "https://taussig/fhir/CodeSystem/stent-coating",
  "version" : "0.8.0",
  "name" : "StentCoating",
  "title" : "TAUSSIG — Revêtement actif d'un stent",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Stent actif (à élution médicamenteuse) ou non (décision M2).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 2,
  "concept" : [{
    "code" : "drug_eluting",
    "display" : "Actif (à élution médicamenteuse)"
  },
  {
    "code" : "non_drug_eluting",
    "display" : "Non actif"
  }]
}

```
