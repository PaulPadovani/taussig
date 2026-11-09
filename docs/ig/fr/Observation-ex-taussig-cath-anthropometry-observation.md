# Exemple technique — TAUSSIG — Anthropométrie au cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Observation: Exemple technique — TAUSSIG — Anthropométrie au cathétérisme

Profil: [TAUSSIG — Anthropométrie au cathétérisme](StructureDefinition-taussig-cath-anthropometry-observation.md)

Balise: 

**partOf**: [Procedure Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**category**: Vital Signs

**code**: Poids corporel [Masse] Patient ; Numérique

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**effective**: 2026-01-01

**value**: 20 kg (Détails : code UCUMkg = 'kg')



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "ex-taussig-cath-anthropometry-observation",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-cath-anthropometry-observation"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "partOf" : [{
    "reference" : "Procedure/ex-taussig-catheterization"
  }],
  "status" : "unknown",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "vital-signs"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "29463-7"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "effectiveDateTime" : "2026-01-01",
  "valueQuantity" : {
    "value" : 20,
    "unit" : "kg",
    "system" : "http://unitsofmeasure.org",
    "code" : "kg"
  }
}

```
