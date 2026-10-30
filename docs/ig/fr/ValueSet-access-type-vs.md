# TAUSSIG — Types d'abord vasculaire - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Types d'abord vasculaire 

 **References** 

* [TAUSSIG — Abord vasculaire](StructureDefinition-taussig-vascular-access.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "access-type-vs",
  "url" : "https://taussig/fhir/ValueSet/access-type-vs",
  "version" : "0.6.0",
  "name" : "AccessTypeVS",
  "title" : "TAUSSIG — Types d'abord vasculaire",
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
      "system" : "https://taussig/fhir/CodeSystem/access-type"
    }]
  }
}

```
