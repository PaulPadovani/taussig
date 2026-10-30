# TAUSSIG — États d'implant - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — États d'implant 

 **References** 

* [État clinique de l'implant](StructureDefinition-implantClinicalStatus.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "implant-status-vs",
  "url" : "https://taussig/fhir/ValueSet/implant-status-vs",
  "version" : "0.6.0",
  "name" : "ImplantStatusVS",
  "title" : "TAUSSIG — États d'implant",
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
      "system" : "https://taussig/fhir/CodeSystem/implant-status"
    }]
  }
}

```
