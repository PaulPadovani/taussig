# GeneticSyndromeToIcd11 - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ConceptMap: GeneticSyndromeToIcd11 (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "genetic-syndrome-to-icd11",
  "url" : "https://taussig/fhir/ConceptMap/genetic-syndrome-to-icd11",
  "version" : "0.6.0",
  "name" : "GeneticSyndromeToIcd11",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Crossmap Orphanet -> ICD-11 des syndromes génétiques TAUSSIG (références officielles Orphanet product1).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "group" : [{
    "source" : "http://www.orpha.net",
    "target" : "http://id.who.int/icd/release/11/mms",
    "element" : [{
      "code" : "870",
      "display" : "Trisomie 21",
      "target" : [{
        "code" : "LD40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "881",
      "display" : "Syndrome de Turner",
      "target" : [{
        "code" : "LD50.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "567",
      "display" : "Syndrome de délétion 22q11.2",
      "target" : [{
        "code" : "LD44.N0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "3380",
      "display" : "Syndrome de trisomie 18",
      "target" : [{
        "code" : "LD40.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "3378",
      "display" : "Syndrome de trisomie 13",
      "target" : [{
        "code" : "LD40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "365",
      "display" : "Glycogénose par déficit en maltase acide",
      "target" : [{
        "code" : "5C51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "95",
      "display" : "Ataxie de Friedreich",
      "target" : [{
        "code" : "8A03.10",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "98896",
      "display" : "Dystrophie musculaire de Duchenne",
      "target" : [{
        "code" : "8C70.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "558",
      "display" : "Syndrome de Marfan",
      "target" : [{
        "code" : "LD28.01",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "98249",
      "display" : "Syndrome d'Ehlers-Danlos",
      "target" : [{
        "code" : "LD28.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "60030",
      "display" : "Syndrome de Loeys-Dietz",
      "target" : [{
        "code" : "BD50.Z",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "648",
      "display" : "Syndrome de Noonan",
      "target" : [{
        "code" : "LD2F.15",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "805",
      "display" : "Sclérose tubéreuse de Bourneville",
      "target" : [{
        "code" : "LD2D.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "904",
      "display" : "Syndrome de Williams",
      "target" : [{
        "code" : "LD44.70",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "52",
      "display" : "Syndrome d'Alagille",
      "target" : [{
        "code" : "LB20.0Y",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "290",
      "display" : "Syndrome de rubéole congénitale",
      "target" : [{
        "code" : "KA62.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "68341",
      "display" : "Anomalies congénitales multiples/syndrome dysmorphique",
      "target" : [{
        "code" : "LD2F",
        "equivalence" : "relatedto"
      }]
    }]
  }]
}

```
