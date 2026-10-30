# TAUSSIG — Types de condition évolutive - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Types de condition évolutive 

 **References** 

* [TAUSSIG — Condition cardiaque évolutive](StructureDefinition-taussig-cardiac-condition-profile.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "condition-type-vs",
  "url" : "https://taussig/fhir/ValueSet/condition-type-vs",
  "version" : "0.6.0",
  "name" : "ConditionTypeVS",
  "title" : "TAUSSIG — Types de condition évolutive",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/condition-type"
    }]
  }
}

```
