# TAUSSIG — Types d'implant - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Types d'implant 

 **References** 

* [TAUSSIG — Implant cardiaque (substrat longitudinal)](StructureDefinition-taussig-cardiac-implant.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "implant-device-type-vs",
  "url" : "https://taussig/fhir/ValueSet/implant-device-type-vs",
  "version" : "0.6.0",
  "name" : "ImplantDeviceTypeVS",
  "title" : "TAUSSIG — Types d'implant",
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
      "system" : "https://taussig/fhir/CodeSystem/implant-device-type"
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/closure-device-type"
    }]
  }
}

```
