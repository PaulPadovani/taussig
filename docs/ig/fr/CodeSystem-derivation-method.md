# TAUSSIG — Dérivation d'une mesure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## CodeSystem: TAUSSIG — Dérivation d'une mesure 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Dérivation](ValueSet-derivation-method-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "derivation-method",
  "url" : "https://taussig/fhir/CodeSystem/derivation-method",
  "version" : "0.6.0",
  "name" : "DerivationMethod",
  "title" : "TAUSSIG — Dérivation d'une mesure",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Mesure directe ou valeur calculée.",
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
    "code" : "measured",
    "display" : "Mesuré"
  },
  {
    "code" : "calculated",
    "display" : "Calculé"
  }]
}

```
