# Exemple technique — TAUSSIG — Administration médicamenteuse péri-procédurale - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Exemple MedicationAdministration: Exemple technique — TAUSSIG — Administration médicamenteuse péri-procédurale

Profil: [TAUSSIG — Administration médicamenteuse péri-procédurale](StructureDefinition-taussig-periprocedural-medication-administration.md)

Balise: 

**status**: Unknown

**medication**: Médicament non précisé — exemple technique

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
  "status" : "unknown",
  "medicationCodeableConcept" : {
    "text" : "Médicament non précisé — exemple technique"
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "effectiveDateTime" : "2026-01-01"
}

```
