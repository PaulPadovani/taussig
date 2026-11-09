# TAUSSIG — Catégorie de syndrome génétique - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Catégorie de syndrome génétique (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* Cette terminologie de référence (CodeSystem) n'est pas utilisée ici; elle peut être utilisée ailleurs (par exemple spécifications et/ou implémentations qui utilisent ce contenu)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "genetic-syndrome-category",
  "url" : "https://taussig/fhir/CodeSystem/genetic-syndrome-category",
  "version" : "0.8.0",
  "name" : "GeneticSyndromeCategory",
  "title" : "TAUSSIG — Catégorie de syndrome génétique",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Catégorie étiologique d'un syndrome génétique.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 5,
  "concept" : [{
    "code" : "chromosomal_anomaly",
    "display" : "Anomalie chromosomique"
  },
  {
    "code" : "monogenic_disorder",
    "display" : "Maladie monogénique"
  },
  {
    "code" : "syndromic_association",
    "display" : "Association syndromique"
  },
  {
    "code" : "teratogenic",
    "display" : "Tératogène"
  },
  {
    "code" : "unknown",
    "display" : "Inconnu"
  }]
}

```
