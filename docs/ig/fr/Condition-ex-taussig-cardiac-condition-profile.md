# Exemple technique — TAUSSIG — Condition cardiaque évolutive - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Exemple Condition: Exemple technique — TAUSSIG — Condition cardiaque évolutive

Profil: [TAUSSIG — Condition cardiaque évolutive](StructureDefinition-taussig-cardiac-condition-profile.md)

Balise: 

**Diagnostic congénital d'origine**: [Condition](Condition-ex-taussig-cardiac-diagnosis.md)

**category**: Lésion résiduelle

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "ex-taussig-cardiac-condition-profile",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-cardiac-condition-profile"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "extension" : [{
    "url" : "https://taussig/fhir/StructureDefinition/relatedDiagnosis",
    "valueReference" : {
      "reference" : "Condition/ex-taussig-cardiac-diagnosis"
    }
  }],
  "category" : [{
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/condition-type",
      "code" : "residual_lesion"
    }]
  }],
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
