# Exemple technique — TAUSSIG — Diagnostic cardiaque congénital - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Exemple Condition: Exemple technique — TAUSSIG — Diagnostic cardiaque congénital

Profil: [TAUSSIG — Diagnostic cardiaque congénital](StructureDefinition-taussig-cardiac-diagnosis.md)

Balise: 

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "ex-taussig-cardiac-diagnosis",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-cardiac-diagnosis"],
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
