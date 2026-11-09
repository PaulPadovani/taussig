# Exemple technique — TAUSSIG — Exposition et contraste de procédure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Observation: Exemple technique — TAUSSIG — Exposition et contraste de procédure

Profil: [TAUSSIG — Exposition et contraste de procédure](StructureDefinition-taussig-procedure-exposure-observation.md)

Balise: 

**partOf**: [Procedure Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**code**: Temps de fluoroscopie

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**effective**: 2026-01-01

**value**: 5 min (Détails : code UCUMmin = 'min')



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "ex-taussig-procedure-exposure-observation",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-procedure-exposure-observation"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "partOf" : [{
    "reference" : "Procedure/ex-taussig-catheterization"
  }],
  "status" : "unknown",
  "code" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/procedure-observation-code",
      "code" : "fluoroscopy-time"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "effectiveDateTime" : "2026-01-01",
  "valueQuantity" : {
    "value" : 5,
    "unit" : "min",
    "system" : "http://unitsofmeasure.org",
    "code" : "min"
  }
}

```
