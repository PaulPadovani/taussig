# Exemple technique — TAUSSIG — Condition cardiaque évolutive - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Condition: Exemple technique — TAUSSIG — Condition cardiaque évolutive

Profil: [TAUSSIG — Condition cardiaque évolutive](StructureDefinition-taussig-cardiac-condition-profile.md)

Balise: 

**Diagnostic congénital d'origine**: [Condition Coarctation de l'aorte](Condition-ex-taussig-cardiac-diagnosis.md)

**clinicalStatus**: Active

**category**: Lésion résiduelle

**code**: Coarctation aortique résiduelle

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
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "code" : "active"
    }]
  },
  "category" : [{
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/condition-type",
      "code" : "residual_lesion"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/taussig-condition",
      "code" : "TAUSSIG-COND-0064"
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/ipccc",
      "code" : "15.37.05"
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
