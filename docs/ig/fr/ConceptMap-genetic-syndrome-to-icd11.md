# TAUSSIG — Syndromes génétiques (Orphanet) vers ICD-11 - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Syndromes génétiques (Orphanet) vers ICD-11 (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "genetic-syndrome-to-icd11",
  "url" : "https://taussig/fhir/ConceptMap/genetic-syndrome-to-icd11",
  "version" : "0.8.1",
  "name" : "GeneticSyndromeToIcd11",
  "title" : "TAUSSIG — Syndromes génétiques (Orphanet) vers ICD-11",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des 17 syndromes génétiques TAUSSIG (OrphaCode) vers ICD-11. Équivalence vue depuis l'OrphaCode (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4). Relations CIM validées par Orphanet (Orphadata, produit 1 FR, 2025-12-09, CC BY 4.0) : E → equivalent, NTBT → wider, BTNT → narrower.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-genetic-syndrome",
  "group" : [{
    "source" : "http://www.orpha.net",
    "target" : "http://id.who.int/icd/release/11/mms",
    "element" : [{
      "code" : "870",
      "display" : "Trisomie 21",
      "target" : [{
        "code" : "LD40.0",
        "display" : "Trisomie 21 complète",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "881",
      "display" : "Syndrome de Turner",
      "target" : [{
        "code" : "LD50.0",
        "display" : "Syndrome de Turner",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "567",
      "display" : "Syndrome de délétion 22q11.2",
      "target" : [{
        "code" : "LD44.N0",
        "display" : "Phénotype CATCH 22",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "3380",
      "display" : "Syndrome de trisomie 18",
      "target" : [{
        "code" : "LD40.2",
        "display" : "Trisomie 18 complète",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "3378",
      "display" : "Syndrome de trisomie 13",
      "target" : [{
        "code" : "LD40.1",
        "display" : "Trisomie 13 complète",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "365",
      "display" : "Glycogénose par déficit en maltase acide",
      "target" : [{
        "code" : "5C51.3",
        "display" : "Thésaurismose glycogénique",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "95",
      "display" : "Ataxie de Friedreich",
      "target" : [{
        "code" : "8A03.10",
        "display" : "Ataxie de Friedreich",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "98896",
      "display" : "Dystrophie musculaire de Duchenne",
      "target" : [{
        "code" : "8C70.1",
        "display" : "Dystrophie musculaire de Duchenne",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "558",
      "display" : "Syndrome de Marfan",
      "target" : [{
        "code" : "LD28.01",
        "display" : "Syndrome de Marfan",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "98249",
      "display" : "Syndrome d'Ehlers-Danlos",
      "target" : [{
        "code" : "LD28.1",
        "display" : "Syndrome d'Ehlers-Danlos",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "60030",
      "display" : "Syndrome de Loeys-Dietz",
      "target" : [{
        "code" : "BD50.Z",
        "display" : "Anévrisme aortique ou dissection, sans précision",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "648",
      "display" : "Syndrome de Noonan",
      "target" : [{
        "code" : "LD2F.15",
        "display" : "Syndrome de Noonan",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "805",
      "display" : "Sclérose tubéreuse de Bourneville",
      "target" : [{
        "code" : "LD2D.2",
        "display" : "Sclérose tubéreuse",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "904",
      "display" : "Syndrome de Williams",
      "target" : [{
        "code" : "LD44.70",
        "display" : "Délétions du bras long du chromosome 7",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "52",
      "display" : "Syndrome d'Alagille",
      "target" : [{
        "code" : "LB20.0Y",
        "display" : "Autres anomalies structurelles du développement du foie",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "290",
      "display" : "Syndrome de rubéole congénitale",
      "target" : [{
        "code" : "KA62.8",
        "display" : "Syndrome de rubéole congénitale",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "68341",
      "display" : "Anomalies congénitales multiples/syndrome dysmorphique",
      "target" : [{
        "code" : "LD2F",
        "display" : "Syndromes présentant de multiples malformations, sans atteinte prédominante du système corporel",
        "equivalence" : "inexact",
        "comment" : "groupe Orphanet sans alignement CIM publié"
      }]
    }]
  }]
}

```
