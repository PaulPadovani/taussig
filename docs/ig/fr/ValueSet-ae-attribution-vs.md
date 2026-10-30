# TAUSSIG — Attributions d'EI - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Attributions d'EI 

 **References** 

* [Attribution de l'EI](StructureDefinition-adverseEventAttribution.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "ae-attribution-vs",
  "url" : "https://taussig/fhir/ValueSet/ae-attribution-vs",
  "version" : "0.6.0",
  "name" : "AeAttributionVS",
  "title" : "TAUSSIG — Attributions d'EI",
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
      "system" : "https://taussig/fhir/CodeSystem/ae-attribution"
    }]
  }
}

```
