# Exemple technique — TAUSSIG — Diagnostic cardiaque congénital - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Condition: Exemple technique — TAUSSIG — Diagnostic cardiaque congénital

Profil: [TAUSSIG — Diagnostic cardiaque congénital](StructureDefinition-taussig-cardiac-diagnosis.md)

Balise: 

**code**: Coarctation de l'aorte

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
  "code" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/taussig-diagnosis",
      "code" : "TAUSSIG-DIAG-0085"
    },
    {
      "system" : "http://id.who.int/icd/release/11/mms",
      "code" : "LA8B.21"
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/ipccc",
      "code" : "09.29.01"
    },
    {
      "system" : "http://hl7.org/fhir/sid/icd-10",
      "code" : "Q25.1"
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/echsa",
      "code" : "DIAG095"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
