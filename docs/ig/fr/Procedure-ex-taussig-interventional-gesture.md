# Exemple technique — TAUSSIG — Geste interventionnel - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Exemple Procedure: Exemple technique — TAUSSIG — Geste interventionnel

Profil: [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md)

Balise: 

**partOf**: [Procedure : extension = false; status = unknown; performed[x] = 2026-01-01](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**usedReference**: [Device : type = Ballon](Device-ex-taussig-material-used.md)



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
  "partOf" : [{
    "reference" : "Procedure/ex-taussig-catheterization"
  }],
  "status" : "unknown",
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "usedReference" : [{
    "extension" : [{
      "url" : "https://taussig/fhir/StructureDefinition/usageSequence",
      "valueInteger" : 1
    },
    {
      "url" : "https://taussig/fhir/StructureDefinition/attemptNumber",
      "valueInteger" : 1
    }],
    "reference" : "Device/ex-taussig-material-used"
  }]
}

```
