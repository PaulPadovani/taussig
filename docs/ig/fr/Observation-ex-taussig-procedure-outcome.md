# Exemple technique — TAUSSIG — Résultat global de procédure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Exemple Observation: Exemple technique — TAUSSIG — Résultat global de procédure

Profil: [TAUSSIG — Résultat global de procédure](StructureDefinition-taussig-procedure-outcome.md)

Balise: 

**partOf**: [Procedure : extension = false; status = unknown; performed[x] = 2026-01-01](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**code**: Exemple technique de résultat — valeur non renseignée

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)



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
    "text" : "Exemple technique de résultat — valeur non renseignée"
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
