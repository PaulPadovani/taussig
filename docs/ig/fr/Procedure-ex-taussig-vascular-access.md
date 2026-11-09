# Exemple technique — TAUSSIG — Abord vasculaire - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Procedure: Exemple technique — TAUSSIG — Abord vasculaire

Profil: [TAUSSIG — Abord vasculaire](StructureDefinition-taussig-vascular-access.md)

Balise: 

**Écho-guidage**: false

**Taille d'introducteur**: 5 French (Détails : code UCUM[Ch] = '[Ch]')

**partOf**: [Procedure Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques](Procedure-ex-taussig-catheterization.md)

**status**: Unknown

**code**: Artériel fémoral

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**outcome**: réussi(e)



## Resource Content

```json
{
  "resourceType" : "Procedure",
  "id" : "ex-taussig-vascular-access",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-vascular-access"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "extension" : [{
    "url" : "https://taussig/fhir/StructureDefinition/echoGuided",
    "valueBoolean" : false
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/introducerSize",
    "valueQuantity" : {
      "value" : 5,
      "unit" : "French",
      "system" : "http://unitsofmeasure.org",
      "code" : "[Ch]"
    }
  }],
  "partOf" : [{
    "reference" : "Procedure/ex-taussig-catheterization"
  }],
  "status" : "unknown",
  "code" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/access-type",
      "code" : "arterial_femoral"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "outcome" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "385669000"
    }]
  }
}

```
