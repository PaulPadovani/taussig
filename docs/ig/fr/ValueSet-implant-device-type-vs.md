# TAUSSIG — Types d'implant - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Types d'implant (Expérimental) 

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
  "version" : "0.8.1",
  "name" : "ImplantDeviceTypeVS",
  "title" : "TAUSSIG — Types d'implant",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — Types d'implant » utilisé par les profils TAUSSIG.",
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
