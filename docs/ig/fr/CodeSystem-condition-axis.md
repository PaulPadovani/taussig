# TAUSSIG — Axe d'une condition cardiaque - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## CodeSystem: TAUSSIG — Axe d'une condition cardiaque 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* Cette terminologie de référence (CodeSystem) n'est pas utilisée ici; elle peut être utilisée ailleurs (par exemple spécifications et/ou implémentations qui utilisent ce contenu)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "condition-axis",
  "url" : "https://taussig/fhir/CodeSystem/condition-axis",
  "version" : "0.6.0",
  "name" : "ConditionAxis",
  "title" : "TAUSSIG — Axe d'une condition cardiaque",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Distingue le diagnostic congénital des conditions évolutives.",
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
    "code" : "congenital",
    "display" : "Diagnostic congénital"
  },
  {
    "code" : "evolutive",
    "display" : "Condition évolutive"
  }]
}

```
