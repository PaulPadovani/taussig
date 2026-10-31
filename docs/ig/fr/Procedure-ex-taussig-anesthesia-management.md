# Exemple technique — TAUSSIG — Gestion anesthésique - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Exemple Procedure: Exemple technique — TAUSSIG — Gestion anesthésique

Profil: [TAUSSIG — Gestion anesthésique](StructureDefinition-taussig-anesthesia-management.md)

Balise: 

**Mode ventilatoire**: spontaneous

**Assistance ECMO**: false

**partOf**: [Procedure : extension = false; status = unknown; performed[x] = 2026-01-01](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**code**: administration d'un anesthésique général

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)



## Resource Content

```json
{
  "resourceType" : "Procedure",
  "id" : "ex-taussig-anesthesia-management",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-anesthesia-management"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "extension" : [{
    "url" : "https://taussig/fhir/StructureDefinition/ventilationType",
    "valueCode" : "spontaneous"
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/ecmoSupport",
    "valueBoolean" : false
  }],
  "partOf" : [{
    "reference" : "Procedure/ex-taussig-catheterization"
  }],
  "status" : "unknown",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "50697003"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
