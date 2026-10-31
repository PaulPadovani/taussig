# TAUSSIG — Types de matériel (catégories) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## ValueSet: TAUSSIG — Types de matériel (catégories) (Expérimental) 

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
  "version" : "0.6.1",
  "name" : "MaterialTypeVS",
  "title" : "TAUSSIG — Types de matériel (catégories)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — Types de matériel (catégories) » utilisé par les profils TAUSSIG.",
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
