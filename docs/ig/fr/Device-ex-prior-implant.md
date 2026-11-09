# Dispositif antérieur fictif — exemple technique - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple Device: Dispositif antérieur fictif — exemple technique

Profil: [TAUSSIG — Implant cardiaque (substrat longitudinal)](StructureDefinition-taussig-cardiac-implant.md)

### DeviceNames

| | | |
| :--- | :--- | :--- |
| - | **Name** | **Type** |
| * | Dispositif antérieur fictif | Model name |



## Resource Content

```json
{
  "resourceType" : "Device",
  "id" : "ex-prior-implant",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-cardiac-implant"]
  },
  "deviceName" : [{
    "name" : "Dispositif antérieur fictif",
    "type" : "model-name"
  }]
}

```
