# Exemple technique — TAUSSIG — Syndrome génétique (covariable de contexte) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Condition: Exemple technique — TAUSSIG — Syndrome génétique (covariable de contexte)

Profil: [TAUSSIG — Syndrome génétique (covariable de contexte)](StructureDefinition-taussig-genetic-syndrome-profile.md)

Balise: 

**code**: 870

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "ex-taussig-genetic-syndrome-profile",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-genetic-syndrome-profile"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "code" : {
    "coding" : [{
      "system" : "http://www.orpha.net",
      "code" : "870"
    },
    {
      "system" : "http://id.who.int/icd/release/11/mms",
      "code" : "LD40.0"
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/echsa",
      "code" : "NCA9"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
