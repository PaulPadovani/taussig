# TAUSSIG — Modes ventilatoires - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Modes ventilatoires (Expérimental) 

 **References** 

* [Mode ventilatoire](StructureDefinition-ventilationType.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "ventilation-type-vs",
  "url" : "https://taussig/fhir/ValueSet/ventilation-type-vs",
  "version" : "0.8.0",
  "name" : "VentilationTypeVS",
  "title" : "TAUSSIG — Modes ventilatoires",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — Modes ventilatoires » utilisé par les profils TAUSSIG.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/ventilation-type"
    }]
  }
}

```
