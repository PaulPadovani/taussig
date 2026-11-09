# TAUSSIG — Attributions d'EI - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Attributions d'EI (Expérimental) 

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
  "version" : "0.8.0",
  "name" : "AeAttributionVS",
  "title" : "TAUSSIG — Attributions d'EI",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — Attributions d'EI » utilisé par les profils TAUSSIG.",
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
