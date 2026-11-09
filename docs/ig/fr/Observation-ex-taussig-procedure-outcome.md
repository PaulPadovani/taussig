# Exemple technique — TAUSSIG — Résultat global de procédure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Observation: Exemple technique — TAUSSIG — Résultat global de procédure

Profil: [TAUSSIG — Résultat global de procédure](StructureDefinition-taussig-procedure-outcome.md)

Balise: 

**partOf**: [Procedure Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**code**: Succès hémodynamique

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**value**: true



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "ex-taussig-procedure-outcome",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-procedure-outcome"],
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
      "system" : "https://taussig/fhir/CodeSystem/procedure-outcome-type",
      "code" : "hemodynamic_success"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "valueBoolean" : true
}

```
