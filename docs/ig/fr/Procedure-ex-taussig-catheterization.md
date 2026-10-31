# Exemple technique — TAUSSIG — Cathétérisme cardiaque (acte pivot) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Exemple Procedure: Exemple technique — TAUSSIG — Cathétérisme cardiaque (acte pivot)

Profil: [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md)

Balise: 

**Produit de contraste utilisé**: false

**status**: Unknown

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**performed**: 2026-01-01

**reasonReference**: 

* [Condition](Condition-ex-taussig-cardiac-diagnosis.md)
* [Condition : extension = ->Condition; category = Lésion résiduelle](Condition-ex-taussig-cardiac-condition-profile.md)



## Resource Content

```json
{
  "resourceType" : "Procedure",
  "id" : "ex-taussig-catheterization",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-catheterization"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "extension" : [{
    "url" : "https://taussig/fhir/StructureDefinition/contrastUsed",
    "valueBoolean" : false
  }],
  "status" : "unknown",
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "performedDateTime" : "2026-01-01",
  "reasonReference" : [{
    "extension" : [{
      "url" : "https://taussig/fhir/StructureDefinition/diagnosisRole",
      "valueCode" : "primary_indication"
    }],
    "reference" : "Condition/ex-taussig-cardiac-diagnosis"
  },
  {
    "extension" : [{
      "url" : "https://taussig/fhir/StructureDefinition/indicationRole",
      "valueCode" : "primary_indication"
    }],
    "reference" : "Condition/ex-taussig-cardiac-condition-profile"
  }]
}

```
