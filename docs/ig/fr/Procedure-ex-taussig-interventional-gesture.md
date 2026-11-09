# Exemple technique — TAUSSIG — Geste interventionnel - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Exemple Procedure: Exemple technique — TAUSSIG — Geste interventionnel

Profil: [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md)

Balise: 

**Rang du geste dans le cathétérisme**: 1

**partOf**: [Procedure Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**code**: Pose de stent dans l'artère pulmonaire gauche

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**reasonReference**: [Condition : extension = ->Condition; category = Lésion résiduelle](Condition-ex-taussig-cardiac-condition-profile.md)

### FocalDevices

| | | |
| :--- | :--- | :--- |
| - | **Action** | **Manipulated** |
| * | Implantation — exemple technique | [Device : extension = Fonctionnel (TAUSSIG — État clinique d'un implant#functional),2026-01-01,true,->Device; manufacturer = Fabricant fictif; lotNumber = LOT-EXEMPLE-01; serialNumber = SN-EXEMPLE-0001; type = Stent](Device-ex-taussig-cardiac-implant.md) |

**usedReference**: [Device : manufacturer = Fabricant fictif; lotNumber = LOT-EXEMPLE-01; serialNumber = SN-EXEMPLE-0001; type = Stent](Device-ex-taussig-material-used.md)



## Resource Content

```json
{
  "resourceType" : "Procedure",
  "id" : "ex-taussig-interventional-gesture",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-interventional-gesture"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "extension" : [{
    "url" : "https://taussig/fhir/StructureDefinition/gestureSequence",
    "valuePositiveInt" : 1
  }],
  "partOf" : [{
    "reference" : "Procedure/ex-taussig-catheterization"
  }],
  "status" : "unknown",
  "code" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/taussig-procedure",
      "code" : "TAUSSIG-PROC-0057"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "reasonReference" : [{
    "reference" : "Condition/ex-taussig-cardiac-condition-profile"
  }],
  "focalDevice" : [{
    "action" : {
      "text" : "Implantation — exemple technique"
    },
    "manipulated" : {
      "reference" : "Device/ex-taussig-cardiac-implant"
    }
  }],
  "usedReference" : [{
    "extension" : [{
      "url" : "https://taussig/fhir/StructureDefinition/usageSequence",
      "valueInteger" : 1
    },
    {
      "url" : "https://taussig/fhir/StructureDefinition/attemptNumber",
      "valueInteger" : 1
    },
    {
      "url" : "https://taussig/fhir/StructureDefinition/attemptResult",
      "valueCodeableConcept" : {
        "coding" : [{
          "system" : "https://taussig/fhir/CodeSystem/gesture-result",
          "code" : "success"
        }]
      }
    }],
    "reference" : "Device/ex-taussig-material-used"
  }]
}

```
