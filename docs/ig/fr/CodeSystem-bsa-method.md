# TAUSSIG — Méthode de calcul de surface corporelle - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## CodeSystem: TAUSSIG — Méthode de calcul de surface corporelle 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Méthodes de calcul BSA](ValueSet-bsa-method-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "bsa-method",
  "url" : "https://taussig/fhir/CodeSystem/bsa-method",
  "version" : "0.6.0",
  "name" : "BsaMethod",
  "title" : "TAUSSIG — Méthode de calcul de surface corporelle",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Formule utilisée pour calculer la surface corporelle (BSA).",
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
    "code" : "haycock",
    "display" : "Haycock"
  },
  {
    "code" : "dubois",
    "display" : "DuBois"
  },
  {
    "code" : "mosteller",
    "display" : "Mosteller"
  },
  {
    "code" : "boyd",
    "display" : "Boyd"
  }]
}

```
