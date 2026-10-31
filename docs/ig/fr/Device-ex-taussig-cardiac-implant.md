# Exemple technique — TAUSSIG — Implant cardiaque (substrat longitudinal) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Exemple Device: Exemple technique — TAUSSIG — Implant cardiaque (substrat longitudinal)

Profil: [TAUSSIG — Implant cardiaque (substrat longitudinal)](StructureDefinition-taussig-cardiac-implant.md)

Balise: 

**État clinique de l'implant**: [TAUSSIG — État clinique d'un implant: functional](CodeSystem-implant-status.md#implant-status-functional) (Fonctionnel)

**Posé en externe**: true

**Implant précédent**: [Device](Device-ex-prior-implant.md)

### DeviceNames

| | | |
| :--- | :--- | :--- |
| - | **Name** | **Type** |
| * | Dispositif fictif — exemple technique | User Friendly name |

**type**: Stent

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
    "url" : "https://taussig/fhir/StructureDefinition/implantedExternally",
    "valueBoolean" : true
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/previousImplant",
    "valueReference" : {
      "reference" : "Device/ex-prior-implant"
    }
  }],
  "deviceName" : [{
    "name" : "Dispositif fictif — exemple technique",
    "type" : "user-friendly-name"
  }],
  "type" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/implant-device-type",
      "code" : "stent"
    }]
  },
  "patient" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
