# Exemple technique — TAUSSIG — Cathétérisme cardiaque (acte pivot) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Exemple Procedure: Exemple technique — TAUSSIG — Cathétérisme cardiaque (acte pivot)

Profil: [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md)

Balise: 

**Produit de contraste utilisé**: false

**Période en salle de cathétérisme**: 2026-01-01 08:45:00+0100 --> 2026-01-01 10:15:00+0100

**Caractère urgent du cathétérisme**: Programmé

**status**: Unknown

**code**: Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**performed**: 2026-01-01 09:00:00+0100 --> 2026-01-01 10:00:00+0100

### Performers

| | | |
| :--- | :--- | :--- |
| - | **Function** | **Actor** |
| * | 1er opérateur | [Fictif Exemple](Practitioner-ex-taussig-practitioner.md) |

**reasonReference**: 

* [Condition](Condition-ex-taussig-cardiac-diagnosis.md)
* [Condition : extension = ->Condition; category = Lésion résiduelle](Condition-ex-taussig-cardiac-condition-profile.md)

**outcome**: Complet



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
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/procedureRoomPeriod",
    "valuePeriod" : {
      "start" : "2026-01-01T08:45:00+01:00",
      "end" : "2026-01-01T10:15:00+01:00"
    }
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/procedureUrgency",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "https://taussig/fhir/CodeSystem/procedure-urgency",
        "code" : "elective"
      }]
    }
  }],
  "status" : "unknown",
  "code" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/taussig-procedure",
      "code" : "TAUSSIG-PROC-0007"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "performedPeriod" : {
    "start" : "2026-01-01T09:00:00+01:00",
    "end" : "2026-01-01T10:00:00+01:00"
  },
  "performer" : [{
    "function" : {
      "coding" : [{
        "system" : "https://taussig/fhir/CodeSystem/operator-role",
        "code" : "primary_operator"
      }]
    },
    "actor" : {
      "reference" : "Practitioner/ex-taussig-practitioner"
    }
  }],
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
  }],
  "outcome" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/technical-success",
      "code" : "complete"
    }]
  }
}

```
