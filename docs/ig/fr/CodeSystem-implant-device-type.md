# TAUSSIG — Type d'implant - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## CodeSystem: TAUSSIG — Type d'implant 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Types d'implant](ValueSet-implant-device-type-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "implant-device-type",
  "url" : "https://taussig/fhir/CodeSystem/implant-device-type",
  "version" : "0.6.0",
  "name" : "ImplantDeviceType",
  "title" : "TAUSSIG — Type d'implant",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Type de dispositif/substrat longitudinal.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 9,
  "concept" : [{
    "code" : "conduit",
    "display" : "Conduit"
  },
  {
    "code" : "shunt",
    "display" : "Shunt"
  },
  {
    "code" : "valve",
    "display" : "Valve"
  },
  {
    "code" : "stent",
    "display" : "Stent"
  },
  {
    "code" : "occluder",
    "display" : "Occluder"
  },
  {
    "code" : "baffle",
    "display" : "Baffle"
  },
  {
    "code" : "fenestration",
    "display" : "Fenestration"
  },
  {
    "code" : "coil",
    "display" : "Coil"
  },
  {
    "code" : "other",
    "display" : "Autre"
  }]
}

```
