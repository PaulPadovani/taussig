# TAUSSIG — Rôle de l'opérateur - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Rôle de l'opérateur (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Liste — Rôles de l'opérateur](ValueSet-operator-role-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "operator-role",
  "url" : "https://taussig/fhir/CodeSystem/operator-role",
  "version" : "0.8.1",
  "name" : "OperatorRole",
  "title" : "TAUSSIG — Rôle de l'opérateur",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Rôle d'un praticien dans la réalisation du cathétérisme (décision I1).",
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
    "code" : "primary_operator",
    "display" : "1er opérateur"
  },
  {
    "code" : "second_operator",
    "display" : "2e opérateur"
  },
  {
    "code" : "trainee_operator",
    "display" : "Opérateur en formation",
    "definition" : "Interne ou fellow réalisant tout ou partie de la procédure sous supervision."
  }]
}

```
