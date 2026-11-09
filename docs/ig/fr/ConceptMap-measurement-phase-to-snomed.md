# TAUSSIG — Phase de mesure -> SNOMED (codage grossier ; sémantique fine = extension procedurePhase + related_gesture_id) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Phase de mesure -> SNOMED (codage grossier ; sémantique fine = extension procedurePhase + related_gesture_id) (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "measurement-phase-to-snomed",
  "url" : "https://taussig/fhir/ConceptMap/measurement-phase-to-snomed",
  "version" : "0.1.0",
  "name" : "MeasurementPhaseToSnomed",
  "title" : "TAUSSIG — Phase de mesure -> SNOMED (codage grossier ; sémantique fine = extension procedurePhase + related_gesture_id)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Représentation FHIR « TAUSSIG — Phase de mesure -> SNOMED (codage grossier ; sémantique fine = extension procedurePhase + related_gesture_id) » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceUri" : "https://taussig/fhir/ValueSet/procedure-phase-vs",
  "targetUri" : "http://snomed.info/sct?fhir_vs",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/procedure-phase",
    "target" : "http://snomed.info/sct",
    "element" : [{
      "code" : "baseline",
      "target" : [{
        "code" : "128974000",
        "display" : "état basal",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "pre_intervention",
      "target" : [{
        "code" : "72077002",
        "display" : "état préopératoire",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "post_intervention",
      "target" : [{
        "code" : "303110006",
        "display" : "période postopératoire",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "not_applicable",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "pas de concept SNOMED"
      }]
    }]
  }]
}

```
