# TAUSSIG — Phases procédurales - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Phases procédurales 

 **References** 

* [Phase procédurale (mesure)](StructureDefinition-procedurePhase.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "procedure-phase-vs",
  "url" : "https://taussig/fhir/ValueSet/procedure-phase-vs",
  "version" : "0.6.0",
  "name" : "ProcedurePhaseVS",
  "title" : "TAUSSIG — Phases procédurales",
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
      "system" : "https://taussig/fhir/CodeSystem/procedure-phase"
    }]
  }
}

```
