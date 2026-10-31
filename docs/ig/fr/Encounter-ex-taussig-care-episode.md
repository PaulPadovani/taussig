# Exemple technique — TAUSSIG — Épisode de soins - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Exemple Encounter: Exemple technique — TAUSSIG — Épisode de soins

Profil: [TAUSSIG — Épisode de soins](StructureDefinition-taussig-care-episode.md)

Balise: 

**identifier**: Visit number/EX-ENCOUNTER-01

**status**: Finished

**class**: [ActCode: AMB](http://terminology.hl7.org/7.5.0/CodeSystem-v3-ActCode.html#v3-ActCode-AMB) (ambulatory)

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)

**period**: 2026-01-01 --> 2026-01-01



## Resource Content

```json
{
  "resourceType" : "Encounter",
  "id" : "ex-taussig-care-episode",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-care-episode"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "identifier" : [{
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code" : "VN"
      }]
    },
    "system" : "https://taussig/fhir/identifiers/technical-encounter",
    "value" : "EX-ENCOUNTER-01"
  }],
  "status" : "finished",
  "class" : {
    "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code" : "AMB"
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  },
  "period" : {
    "start" : "2026-01-01",
    "end" : "2026-01-01"
  }
}

```
