# TAUSSIG — Rôles des médicaments péri-procéduraux - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## ValueSet: TAUSSIG — Rôles des médicaments péri-procéduraux (Expérimental) 

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
  "version" : "0.6.1",
  "name" : "PeriproceduralMedicationPurposeVS",
  "title" : "TAUSSIG — Rôles des médicaments péri-procéduraux",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — Rôles des médicaments péri-procéduraux » utilisé par les profils TAUSSIG.",
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
