# TAUSSIG — Intentions de cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Intentions de cathétérisme 

 **References** 

* [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "cath-intent-vs",
  "url" : "https://taussig/fhir/ValueSet/cath-intent-vs",
  "version" : "0.6.0",
  "name" : "CathIntentVS",
  "title" : "TAUSSIG — Intentions de cathétérisme",
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
      "system" : "https://taussig/fhir/CodeSystem/cath-intent"
    }]
  }
}

```
