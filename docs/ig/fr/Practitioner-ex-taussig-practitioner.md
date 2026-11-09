# Exemple technique — TAUSSIG — Praticien - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Practitioner: Exemple technique — TAUSSIG — Praticien

Profil: [TAUSSIG — Praticien](StructureDefinition-taussig-practitioner.md)

Balise: 

[OPERATEUR_1]

-------



## Resource Content

```json
{
  "resourceType" : "Practitioner",
  "id" : "ex-taussig-practitioner",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-practitioner"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "name" : [{
    "text" : "[OPERATEUR_1]"
  }]
}

```
