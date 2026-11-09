# TAUSSIG — Médicaments péri-procéduraux (ATC) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Médicaments péri-procéduraux (ATC) (Expérimental) 

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
  "id" : "periprocedural-medication-atc-vs",
  "url" : "https://taussig/fhir/ValueSet/periprocedural-medication-atc-vs",
  "version" : "0.8.1",
  "name" : "PeriproceduralMedicationAtcVS",
  "title" : "TAUSSIG — Médicaments péri-procéduraux (ATC)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Molécules d'antibioprophylaxie et d'anticoagulation per-procédurale les plus attendues dans un compte rendu de cathétérisme pédiatrique. Liste courte proposée, à valider cliniquement.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://www.whocc.no/atc",
      "concept" : [{
        "code" : "J01DB04",
        "display" : "cefazolin",
        "designation" : [{
          "language" : "fr",
          "value" : "céfazoline"
        }]
      },
      {
        "code" : "J01DC02",
        "display" : "cefuroxime",
        "designation" : [{
          "language" : "fr",
          "value" : "céfuroxime"
        }]
      },
      {
        "code" : "J01XA01",
        "display" : "vancomycin",
        "designation" : [{
          "language" : "fr",
          "value" : "vancomycine"
        }]
      },
      {
        "code" : "B01AB01",
        "display" : "heparin",
        "designation" : [{
          "language" : "fr",
          "value" : "héparine"
        }]
      },
      {
        "code" : "B01AB05",
        "display" : "enoxaparin",
        "designation" : [{
          "language" : "fr",
          "value" : "énoxaparine"
        }]
      },
      {
        "code" : "B01AE06",
        "display" : "bivalirudin",
        "designation" : [{
          "language" : "fr",
          "value" : "bivalirudine"
        }]
      }]
    }]
  }
}

```
