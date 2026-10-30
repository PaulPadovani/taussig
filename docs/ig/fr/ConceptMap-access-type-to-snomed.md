# AccessTypeToSnomed - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ConceptMap: AccessTypeToSnomed (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "access-type-to-snomed",
  "url" : "https://taussig/fhir/ConceptMap/access-type-to-snomed",
  "version" : "0.6.0",
  "name" : "AccessTypeToSnomed",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance du CodeSystem TAUSSIG access-type vers les vaisseaux SNOMED CT.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/access-type-vs",
  "targetCanonical" : "http://snomed.info/sct?fhir_vs",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/access-type",
    "target" : "http://snomed.info/sct",
    "element" : [{
      "code" : "arterial_femoral",
      "target" : [{
        "code" : "7657000",
        "display" : "artère fémorale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "venous_femoral",
      "target" : [{
        "code" : "83419000",
        "display" : "veine fémorale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "arterial_humeral",
      "target" : [{
        "code" : "17137000",
        "display" : "artère brachiale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "venous_humeral",
      "target" : [{
        "code" : "20115005",
        "display" : "veine brachiale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "arterial_carotid",
      "target" : [{
        "code" : "32062004",
        "display" : "artère carotide commune",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "venous_jugular",
      "target" : [{
        "code" : "12123001",
        "display" : "veine jugulaire interne",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "transhepatic",
      "target" : [{
        "code" : "8993003",
        "display" : "veine hépatique",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "umbilical",
      "target" : [{
        "code" : "367567000",
        "display" : "veine ombilicale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "surgical_hybrid",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "Voie d'abord (abord chirurgical/hybride), pas un vaisseau : pas de site SNOMED."
      }]
    }]
  }]
}

```
