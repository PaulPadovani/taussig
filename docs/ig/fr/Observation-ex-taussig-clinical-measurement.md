# Exemple technique — TAUSSIG — Mesure clinique (delta pre/post) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Observation: Exemple technique — TAUSSIG — Mesure clinique (delta pre/post)

Profil: [TAUSSIG — Mesure clinique (delta pre/post)](StructureDefinition-taussig-clinical-measurement.md)

Balise: 

**Phase procédurale (mesure)**: baseline

**Condition de mesure**: resting

**Dérivation de la mesure**: measured

**partOf**: [Procedure Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**code**: Pression systolique

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**effective**: 2026-01-01

**value**: 20 mmHg (Détails : code UCUMmm[Hg] = 'mm[Hg]')

**method**: Cathétérisme



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "ex-taussig-clinical-measurement",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-clinical-measurement"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "extension" : [{
    "url" : "https://taussig/fhir/StructureDefinition/procedurePhase",
    "valueCode" : "baseline"
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/measurementCondition",
    "valueCode" : "resting"
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/derivationMethod",
    "valueCode" : "measured"
  }],
  "partOf" : [{
    "reference" : "Procedure/ex-taussig-catheterization"
  }],
  "status" : "unknown",
  "code" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/measurement-property",
      "code" : "pressure_systolic"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "effectiveDateTime" : "2026-01-01",
  "valueQuantity" : {
    "value" : 20,
    "unit" : "mmHg",
    "system" : "http://unitsofmeasure.org",
    "code" : "mm[Hg]"
  },
  "method" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/measurement-modality",
      "code" : "catheterization"
    }]
  }
}

```
