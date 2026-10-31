# Exemple technique — TAUSSIG — Matériel utilisé (consommable de geste) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Exemple Device: Exemple technique — TAUSSIG — Matériel utilisé (consommable de geste)

Profil: [TAUSSIG — Matériel utilisé (consommable de geste)](StructureDefinition-taussig-material-used.md)

Balise: 

**type**: Ballon

**patient**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)



## Resource Content

```json
{
  "resourceType" : "Device",
  "id" : "ex-taussig-material-used",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-material-used"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "type" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/material-type",
      "code" : "balloon"
    }]
  },
  "patient" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
