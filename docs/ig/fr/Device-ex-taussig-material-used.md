# Exemple technique — TAUSSIG — Matériel utilisé (consommable de geste) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Exemple Device: Exemple technique — TAUSSIG — Matériel utilisé (consommable de geste)

Profil: [TAUSSIG — Matériel utilisé (consommable de geste)](StructureDefinition-taussig-material-used.md)

Balise: 

**manufacturer**: Fabricant fictif

**lotNumber**: LOT-EXEMPLE-01

**serialNumber**: SN-EXEMPLE-0001

**type**: Stent

> **property****type**: Couverture**valueCode**: Nu

> **property****type**: Mode d'expansion**valueCode**: Expansible au ballon

> **property****type**: Revêtement**valueCode**: Non actif

**patient**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)



## Resource Content

```json
{
  "resourceType" : "Device",
  "id" : "ex-taussig-material-used",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-material-used"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "manufacturer" : "Fabricant fictif",
  "lotNumber" : "LOT-EXEMPLE-01",
  "serialNumber" : "SN-EXEMPLE-0001",
  "type" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/material-type",
      "code" : "stent"
    }]
  },
  "property" : [{
    "type" : {
      "coding" : [{
        "system" : "https://taussig/fhir/CodeSystem/device-property",
        "code" : "covering"
      }]
    },
    "valueCode" : [{
      "coding" : [{
        "system" : "https://taussig/fhir/CodeSystem/stent-covering",
        "code" : "bare"
      }]
    }]
  },
  {
    "type" : {
      "coding" : [{
        "system" : "https://taussig/fhir/CodeSystem/device-property",
        "code" : "expansion_mode"
      }]
    },
    "valueCode" : [{
      "coding" : [{
        "system" : "https://taussig/fhir/CodeSystem/stent-expansion",
        "code" : "balloon_expandable"
      }]
    }]
  },
  {
    "type" : {
      "coding" : [{
        "system" : "https://taussig/fhir/CodeSystem/device-property",
        "code" : "coating"
      }]
    },
    "valueCode" : [{
      "coding" : [{
        "system" : "https://taussig/fhir/CodeSystem/stent-coating",
        "code" : "non_drug_eluting"
      }]
    }]
  }],
  "patient" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
