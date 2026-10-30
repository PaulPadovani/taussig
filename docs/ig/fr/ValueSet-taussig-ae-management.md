# TAUSSIG — Prise en charge d'un événement indésirable - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Prise en charge d'un événement indésirable 

 **References** 

* [Prise en charge de l'EI](StructureDefinition-adverseEventManagement.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-ae-management",
  "url" : "https://taussig/fhir/ValueSet/taussig-ae-management",
  "version" : "0.6.0",
  "name" : "TaussigAeManagement",
  "title" : "TAUSSIG — Prise en charge d'un événement indésirable",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Modes de prise en charge d'un EI pendant le cathétérisme (CodeSystem TAUSSIG ae-management).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/ae-management"
    }]
  }
}

```
