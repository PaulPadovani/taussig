# TAUSSIG — Syndromes génétiques (Orphanet) vers CIM-10 - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Syndromes génétiques (Orphanet) vers CIM-10 (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "genetic-syndrome-to-icd10",
  "url" : "https://taussig/fhir/ConceptMap/genetic-syndrome-to-icd10",
  "version" : "0.8.1",
  "name" : "GeneticSyndromeToIcd10",
  "title" : "TAUSSIG — Syndromes génétiques (Orphanet) vers CIM-10",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des 17 syndromes génétiques TAUSSIG (OrphaCode) vers CIM-10. Équivalence vue depuis l'OrphaCode (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4). Relations CIM validées par Orphanet (Orphadata, produit 1 FR, 2025-12-09, CC BY 4.0) : E → equivalent, NTBT → wider, BTNT → narrower.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-genetic-syndrome",
  "group" : [{
    "source" : "http://www.orpha.net",
    "target" : "http://hl7.org/fhir/sid/icd-10",
    "element" : [{
      "code" : "870",
      "display" : "Trisomie 21",
      "target" : [{
        "code" : "Q90.0",
        "display" : "Trisomy 21, meiotic nondisjunction",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q90.1",
        "display" : "Trisomy 21, mosaicism (mitotic nondisjunction)",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q90.2",
        "display" : "Trisomy 21, translocation",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q90.9",
        "display" : "Down syndrome, unspecified",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      }]
    },
    {
      "code" : "881",
      "display" : "Syndrome de Turner",
      "target" : [{
        "code" : "Q96.0",
        "display" : "Karyotype 45,X",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q96.1",
        "display" : "Karyotype 46,X iso (Xq)",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q96.8",
        "display" : "Other variants of Turner syndrome",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q96.9",
        "display" : "Turner syndrome, unspecified",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q96.2",
        "display" : "Karyotype 46,X with abnormal sex chromosome, except iso (Xq)",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q96.3",
        "display" : "Mosaicism, 45,X/46,XX or XY",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q96.4",
        "display" : "Mosaicism, 45,X/other cell line(s) with abnormal sex chromosome",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      }]
    },
    {
      "code" : "567",
      "display" : "Syndrome de délétion 22q11.2",
      "target" : [{
        "code" : "D82.1",
        "display" : "Di George syndrome",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "3380",
      "display" : "Syndrome de trisomie 18",
      "target" : [{
        "code" : "Q91.0",
        "display" : "Trisomy 18, meiotic nondisjunction",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q91.1",
        "display" : "Trisomy 18, mosaicism (mitotic nondisjunction)",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q91.2",
        "display" : "Trisomy 18, translocation",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q91.3",
        "display" : "Edwards syndrome, unspecified",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      }]
    },
    {
      "code" : "3378",
      "display" : "Syndrome de trisomie 13",
      "target" : [{
        "code" : "Q91.4",
        "display" : "Trisomy 13, meiotic nondisjunction",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q91.5",
        "display" : "Trisomy 13, mosaicism (mitotic nondisjunction)",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q91.6",
        "display" : "Trisomy 13, translocation",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      },
      {
        "code" : "Q91.7",
        "display" : "Patau syndrome, unspecified",
        "equivalence" : "narrower",
        "comment" : "relation Orphanet validée (BTNT)"
      }]
    },
    {
      "code" : "365",
      "display" : "Glycogénose par déficit en maltase acide",
      "target" : [{
        "code" : "E74.0",
        "display" : "Glycogen storage disease",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "95",
      "display" : "Ataxie de Friedreich",
      "target" : [{
        "code" : "G11.1",
        "display" : "Early-onset cerebellar ataxia",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "98896",
      "display" : "Dystrophie musculaire de Duchenne",
      "target" : [{
        "code" : "G71.0",
        "display" : "Muscular dystrophy",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "558",
      "display" : "Syndrome de Marfan",
      "target" : [{
        "code" : "Q87.4",
        "display" : "Marfan syndrome",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "98249",
      "display" : "Syndrome d'Ehlers-Danlos",
      "target" : [{
        "code" : "Q79.6",
        "display" : "Ehlers-Danlos syndrome",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "60030",
      "display" : "Syndrome de Loeys-Dietz",
      "target" : [{
        "code" : "Q87.4",
        "display" : "Marfan syndrome",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "648",
      "display" : "Syndrome de Noonan",
      "target" : [{
        "code" : "Q87.1",
        "display" : "Congenital malformation syndromes predominantly associated with short stature",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "805",
      "display" : "Sclérose tubéreuse de Bourneville",
      "target" : [{
        "code" : "Q85.1",
        "display" : "Tuberous sclerosis",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "904",
      "display" : "Syndrome de Williams",
      "target" : [{
        "code" : "Q93.8",
        "display" : "Other deletions from the autosomes",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "52",
      "display" : "Syndrome d'Alagille",
      "target" : [{
        "code" : "Q44.7",
        "display" : "Other congenital malformations of liver",
        "equivalence" : "wider",
        "comment" : "relation Orphanet validée (NTBT)"
      }]
    },
    {
      "code" : "290",
      "display" : "Syndrome de rubéole congénitale",
      "target" : [{
        "code" : "P35.0",
        "display" : "Congenital rubella syndrome",
        "equivalence" : "equivalent",
        "comment" : "relation Orphanet validée"
      }]
    },
    {
      "code" : "68341",
      "display" : "Anomalies congénitales multiples/syndrome dysmorphique",
      "target" : [{
        "code" : "Q89.7",
        "display" : "Multiple congenital malformations, not elsewhere classified",
        "equivalence" : "inexact",
        "comment" : "groupe Orphanet sans alignement CIM publié"
      }]
    }]
  }]
}

```
