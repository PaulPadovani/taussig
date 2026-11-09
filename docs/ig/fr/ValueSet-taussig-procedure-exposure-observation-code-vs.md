# TAUSSIG — Codes d'exposition et contraste - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Codes d'exposition et contraste (Expérimental) 

 **References** 

* [TAUSSIG — Exposition et contraste de procédure](StructureDefinition-taussig-procedure-exposure-observation.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-procedure-exposure-observation-code-vs",
  "url" : "https://taussig/fhir/ValueSet/taussig-procedure-exposure-observation-code-vs",
  "version" : "0.8.0",
  "name" : "TaussigProcedureExposureObservationCodeVS",
  "title" : "TAUSSIG — Codes d'exposition et contraste",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Codes des observations quantitatives liées à l'exposition radiologique et au contraste.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/procedure-observation-code"
    }]
  }
}

```
