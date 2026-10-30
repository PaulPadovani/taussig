# TAUSSIG — Échelles de gravité - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Échelles de gravité 

 **References** 

* [Échelle de gravité](StructureDefinition-severityScale.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "severity-scale-vs",
  "url" : "https://taussig/fhir/ValueSet/severity-scale-vs",
  "version" : "0.6.0",
  "name" : "SeverityScaleVS",
  "title" : "TAUSSIG — Échelles de gravité",
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
      "system" : "https://taussig/fhir/CodeSystem/severity-scale"
    }]
  }
}

```
