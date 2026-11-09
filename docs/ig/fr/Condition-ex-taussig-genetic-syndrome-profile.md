# Exemple technique — TAUSSIG — Syndrome génétique (covariable de contexte) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Exemple Condition: Exemple technique — TAUSSIG — Syndrome génétique (covariable de contexte)

Profil: [TAUSSIG — Syndrome génétique (covariable de contexte)](StructureDefinition-taussig-genetic-syndrome-profile.md)

Balise: 

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
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
