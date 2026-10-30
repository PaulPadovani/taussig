# TAUSSIG — Condition de mesure -> SNOMED - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ConceptMap: TAUSSIG — Condition de mesure -> SNOMED (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "measurement-condition-to-snomed",
  "url" : "https://taussig/fhir/ConceptMap/measurement-condition-to-snomed",
  "version" : "0.6.0",
  "name" : "MeasurementConditionToSnomed",
  "title" : "TAUSSIG — Condition de mesure -> SNOMED",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/measurement-condition",
    "target" : "http://snomed.info/sct",
    "element" : [{
      "code" : "resting",
      "target" : [{
        "code" : "263678003",
        "display" : "au repos",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "exercise",
      "target" : [{
        "code" : "128976003",
        "display" : "état à l'effort",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "pharmacologic_stress",
      "target" : [{
        "code" : "428813002",
        "display" : "épreuve de stress pharmacologique",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "supplemental_o2",
      "target" : [{
        "code" : "57485005",
        "display" : "oxygénothérapie",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "nitric_oxide",
      "target" : [{
        "code" : "6710000",
        "display" : "monoxyde d'azote",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "room_air",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "Pas de concept SNOMED — TAUSSIG-local."
      }]
    },
    {
      "code" : "other",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "Pas de concept SNOMED — TAUSSIG-local."
      }]
    }]
  }]
}

```
