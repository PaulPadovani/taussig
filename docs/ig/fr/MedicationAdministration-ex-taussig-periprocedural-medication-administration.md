# Exemple technique — TAUSSIG — Administration médicamenteuse péri-procédurale - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple MedicationAdministration: Exemple technique — TAUSSIG — Administration médicamenteuse péri-procédurale

Profil: [TAUSSIG — Administration médicamenteuse péri-procédurale](StructureDefinition-taussig-periprocedural-medication-administration.md)

Balise: 

**partOf**: [Procedure Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**category**: Antibioprophylaxie

**medication**: cefazolin

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**effective**: 2026-01-01



## Resource Content

```json
{
  "resourceType" : "MedicationAdministration",
  "id" : "ex-taussig-periprocedural-medication-administration",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-periprocedural-medication-administration"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "partOf" : [{
    "reference" : "Procedure/ex-taussig-catheterization"
  }],
  "status" : "unknown",
  "category" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/periprocedural-medication-purpose",
      "code" : "antibioprophylaxis"
    }]
  },
  "medicationCodeableConcept" : {
    "coding" : [{
      "system" : "http://www.whocc.no/atc",
      "code" : "J01DB04"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "effectiveDateTime" : "2026-01-01"
}

```
