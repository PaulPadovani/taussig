# Exemple technique — TAUSSIG — Poids de naissance - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Exemple Observation: Exemple technique — TAUSSIG — Poids de naissance

Profil: [TAUSSIG — Poids de naissance](StructureDefinition-taussig-birth-weight-observation.md)

Balise: 

**status**: Unknown

**code**: Poids corporel à la naissance [Masse] Patient ; Numérique ; Résultat mesuré

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**effective**: 2020-01-01

**value**: 3200 g (Détails : code UCUMg = 'g')



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "ex-taussig-birth-weight-observation",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-birth-weight-observation"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "status" : "unknown",
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "8339-4"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "effectiveDateTime" : "2020-01-01",
  "valueQuantity" : {
    "value" : 3200,
    "unit" : "g",
    "system" : "http://unitsofmeasure.org",
    "code" : "g"
  }
}

```
