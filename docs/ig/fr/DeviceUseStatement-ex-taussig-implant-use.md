# Exemple technique — TAUSSIG — Pose et port d'un implant - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Exemple DeviceUseStatement: Exemple technique — TAUSSIG — Pose et port d'un implant

Profil: [TAUSSIG — Pose et port d'un implant](StructureDefinition-taussig-implant-use.md)

Balise: 

**status**: Active

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**derivedFrom**: [Procedure Pose de stent dans l'artère pulmonaire gauche](Procedure-ex-taussig-interventional-gesture.md)

**timing**: 2026-01-01 --> (en cours)

**device**: [Device : extension = Fonctionnel (TAUSSIG — État clinique d'un implant#functional),2026-01-01,true,->Device; manufacturer = Fabricant fictif; lotNumber = LOT-EXEMPLE-01; serialNumber = SN-EXEMPLE-0001; type = Stent](Device-ex-taussig-cardiac-implant.md)



## Resource Content

```json
{
  "resourceType" : "DeviceUseStatement",
  "id" : "ex-taussig-implant-use",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-implant-use"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "status" : "active",
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "derivedFrom" : [{
    "reference" : "Procedure/ex-taussig-interventional-gesture"
  }],
  "timingPeriod" : {
    "start" : "2026-01-01"
  },
  "device" : {
    "reference" : "Device/ex-taussig-cardiac-implant"
  }
}

```
