# TAUSSIG — Statut clinique d'une condition évolutive - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Statut clinique d'une condition évolutive (Expérimental) 

 **References** 

* [TAUSSIG — Condition cardiaque évolutive](StructureDefinition-taussig-cardiac-condition-profile.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-condition-clinical-status-vs",
  "url" : "https://taussig/fhir/ValueSet/taussig-condition-clinical-status-vs",
  "version" : "0.8.1",
  "name" : "TaussigConditionClinicalStatusVS",
  "title" : "TAUSSIG — Statut clinique d'une condition évolutive",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Statut clinique d'une condition cardiaque évolutive au moment du cathétérisme : active ou résolue (décision B1). Distinct de l'état d'annotation « explicitement absent », qui signifie que la condition n'existe pas.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "version" : "3.0.0",
      "concept" : [{
        "code" : "active",
        "display" : "Active",
        "designation" : [{
          "language" : "fr",
          "value" : "Active"
        }]
      },
      {
        "code" : "resolved",
        "display" : "Resolved",
        "designation" : [{
          "language" : "fr",
          "value" : "Résolue"
        }]
      }]
    }]
  }
}

```
