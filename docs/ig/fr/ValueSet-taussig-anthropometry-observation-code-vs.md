# TAUSSIG — Codes d'anthropométrie per-cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Codes d'anthropométrie per-cathétérisme 

 **References** 

* [TAUSSIG — Anthropométrie au cathétérisme](StructureDefinition-taussig-cath-anthropometry-observation.md)

### Définition logique (CLD)

 

### Expansion

No Expansion for this valueset (Unknown Code System)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-anthropometry-observation-code-vs",
  "url" : "https://taussig/fhir/ValueSet/taussig-anthropometry-observation-code-vs",
  "version" : "0.6.0",
  "name" : "TaussigAnthropometryObservationCodeVS",
  "title" : "TAUSSIG — Codes d'anthropométrie per-cathétérisme",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Codes LOINC utilisés pour poids, taille et surface corporelle au moment du cathétérisme.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://loinc.org",
      "concept" : [{
        "code" : "29463-7",
        "display" : "Body weight"
      },
      {
        "code" : "8302-2",
        "display" : "Body height"
      },
      {
        "code" : "8277-6",
        "display" : "Body surface area"
      }]
    }]
  }
}

```
