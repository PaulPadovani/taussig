# TAUSSIG — Rôles des médicaments péri-procéduraux - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Rôles des médicaments péri-procéduraux 

 **References** 

* [TAUSSIG — Administration médicamenteuse péri-procédurale](StructureDefinition-taussig-periprocedural-medication-administration.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "periprocedural-medication-purpose-vs",
  "url" : "https://taussig/fhir/ValueSet/periprocedural-medication-purpose-vs",
  "version" : "0.6.0",
  "name" : "PeriproceduralMedicationPurposeVS",
  "title" : "TAUSSIG — Rôles des médicaments péri-procéduraux",
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
      "system" : "https://taussig/fhir/CodeSystem/periprocedural-medication-purpose"
    }]
  }
}

```
