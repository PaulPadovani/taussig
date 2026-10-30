# TAUSSIG — Conditions de mesure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Conditions de mesure 

 **References** 

* [Condition de mesure](StructureDefinition-measurementCondition.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "measurement-condition-vs",
  "url" : "https://taussig/fhir/ValueSet/measurement-condition-vs",
  "version" : "0.6.0",
  "name" : "MeasurementConditionVS",
  "title" : "TAUSSIG — Conditions de mesure",
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
      "system" : "https://taussig/fhir/CodeSystem/measurement-condition"
    }]
  }
}

```
