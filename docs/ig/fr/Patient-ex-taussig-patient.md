# Exemple technique — TAUSSIG — Patient - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Exemple Patient: Exemple technique — TAUSSIG — Patient

Profil: [TAUSSIG — Patient](StructureDefinition-taussig-patient.md)

Balise: 

Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01

-------



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "ex-taussig-patient",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-patient"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "name" : [{
    "text" : "Patient fictif — exemple technique"
  }],
  "gender" : "unknown",
  "birthDate" : "2020-01-01"
}

```
