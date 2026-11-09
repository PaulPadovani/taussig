# TAUSSIG — Rôle d'une indication/diagnostic - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Rôle d'une indication/diagnostic (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Rôles d'indication](ValueSet-diagnosis-role-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "diagnosis-role",
  "url" : "https://taussig/fhir/CodeSystem/diagnosis-role",
  "version" : "0.8.1",
  "name" : "DiagnosisRole",
  "title" : "TAUSSIG — Rôle d'une indication/diagnostic",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Rôle de l'indication d'un cathétérisme.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 3,
  "concept" : [{
    "code" : "primary_indication",
    "display" : "Indication principale"
  },
  {
    "code" : "associated_lesion",
    "display" : "Lésion associée"
  },
  {
    "code" : "incidental",
    "display" : "Fortuit"
  }]
}

```
