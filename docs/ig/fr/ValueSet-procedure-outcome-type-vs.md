# TAUSSIG — Types de résultat global de procédure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Types de résultat global de procédure (Expérimental) 

 **References** 

* [TAUSSIG — Résultat global de procédure](StructureDefinition-taussig-procedure-outcome.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "procedure-outcome-type-vs",
  "url" : "https://taussig/fhir/ValueSet/procedure-outcome-type-vs",
  "version" : "0.8.0",
  "name" : "ProcedureOutcomeTypeVS",
  "title" : "TAUSSIG — Types de résultat global de procédure",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Les trois résultats globaux annotables d'un cathétérisme.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/procedure-outcome-type"
    }]
  }
}

```
