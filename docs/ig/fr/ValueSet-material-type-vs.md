# TAUSSIG — Types de matériel (catégories) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Types de matériel (catégories) 

 **References** 

* [TAUSSIG — Matériel utilisé (consommable de geste)](StructureDefinition-taussig-material-used.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "material-type-vs",
  "url" : "https://taussig/fhir/ValueSet/material-type-vs",
  "version" : "0.6.0",
  "name" : "MaterialTypeVS",
  "title" : "TAUSSIG — Types de matériel (catégories)",
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
      "system" : "https://taussig/fhir/CodeSystem/material-type"
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/closure-device-type"
    }]
  }
}

```
