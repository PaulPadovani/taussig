# TAUSSIG — Mode d'expansion d'un stent - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Mode d'expansion d'un stent (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Liste — Mode d'expansion d'un stent](ValueSet-stent-expansion-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "stent-expansion",
  "url" : "https://taussig/fhir/CodeSystem/stent-expansion",
  "version" : "0.8.1",
  "name" : "StentExpansion",
  "title" : "TAUSSIG — Mode d'expansion d'un stent",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Stent expansible au ballon ou auto-expansible (décision M2).",
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
    "code" : "balloon_expandable",
    "display" : "Expansible au ballon"
  },
  {
    "code" : "self_expanding",
    "display" : "Auto-expansible"
  }]
}

```
