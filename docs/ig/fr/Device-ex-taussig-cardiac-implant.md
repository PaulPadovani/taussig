# Exemple technique — TAUSSIG — Implant cardiaque (substrat longitudinal) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Device: Exemple technique — TAUSSIG — Implant cardiaque (substrat longitudinal)

Profil: [TAUSSIG — Implant cardiaque (substrat longitudinal)](StructureDefinition-taussig-cardiac-implant.md)

Balise: 

**État clinique de l'implant**: [TAUSSIG — État clinique d'un implant: functional](CodeSystem-implant-status.md#implant-status-functional) (Fonctionnel)

**Date de l'état de l'implant**: 2026-01-01

**Posé en externe**: true

**Implant précédent**: [Device](Device-ex-prior-implant.md)

**manufacturer**: Fabricant fictif

**lotNumber**: LOT-EXEMPLE-01

**serialNumber**: SN-EXEMPLE-0001

### DeviceNames

| | | |
| :--- | :--- | :--- |
| - | **Name** | **Type** |
| * | Dispositif fictif — exemple technique | Model name |

**type**: Stent

> **property****type**: Couverture**valueCode**: Nu

> **property****type**: Mode d'expansion**valueCode**: Expansible au ballon

> **property****type**: Revêtement**valueCode**: Non actif

**patient**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)



## Resource Content

```json
{
  "resourceType" : "Device",
  "id" : "ex-taussig-cardiac-implant",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-cardiac-implant"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "extension" : [{
    "url" : "https://taussig/fhir/StructureDefinition/implantClinicalStatus",
    "valueCoding" : {
      "system" : "https://taussig/fhir/CodeSystem/implant-status",
      "code" : "functional"
    }
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/implantStatusDate",
    "valueDateTime" : "2026-01-01"
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/implantedExternally",
    "valueBoolean" : true
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/previousImplant",
    "valueReference" : {
      "reference" : "Device/ex-prior-implant"
    }
  }],
  "manufacturer" : "Fabricant fictif",
  "lotNumber" : "LOT-EXEMPLE-01",
  "serialNumber" : "SN-EXEMPLE-0001",
  "deviceName" : [{
    "name" : "Dispositif fictif — exemple technique",
    "type" : "model-name"
  }],
  "type" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/implant-device-type",
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
