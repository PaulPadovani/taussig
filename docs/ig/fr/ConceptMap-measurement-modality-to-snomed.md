# TAUSSIG — Modalité de mesure -> SNOMED (Observation.method) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ConceptMap: TAUSSIG — Modalité de mesure -> SNOMED (Observation.method) (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "measurement-modality-to-snomed",
  "url" : "https://taussig/fhir/ConceptMap/measurement-modality-to-snomed",
  "version" : "0.1.0",
  "name" : "MeasurementModalityToSnomed",
  "title" : "TAUSSIG — Modalité de mesure -> SNOMED (Observation.method)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Représentation FHIR « TAUSSIG — Modalité de mesure -> SNOMED (Observation.method) » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/measurement-modality",
    "target" : "http://snomed.info/sct",
    "element" : [{
      "code" : "catheterization",
      "target" : [{
        "code" : "41976001",
        "display" : "cathétérisme cardiaque",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "echocardiography",
      "target" : [{
        "code" : "40701008",
        "display" : "échocardiographie",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "cardiac_mri",
      "target" : [{
        "code" : "241620005",
        "display" : "IRM du cœur",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ct",
      "target" : [{
        "code" : "241547009",
        "display" : "tomodensitométrie du cœur",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "ecg",
      "target" : [{
        "code" : "29303009",
        "display" : "ECG",
        "equivalence" : "equivalent"
      }]
    }]
  }]
}

```
