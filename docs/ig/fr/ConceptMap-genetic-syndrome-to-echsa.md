# TAUSSIG — Syndromes génétiques (Orphanet) vers ECHSA - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Syndromes génétiques (Orphanet) vers ECHSA (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "genetic-syndrome-to-echsa",
  "url" : "https://taussig/fhir/ConceptMap/genetic-syndrome-to-echsa",
  "version" : "0.8.1",
  "name" : "GeneticSyndromeToEchsa",
  "title" : "TAUSSIG — Syndromes génétiques (Orphanet) vers ECHSA",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des 17 syndromes génétiques TAUSSIG (OrphaCode) vers ECHSA. Équivalence vue depuis l'OrphaCode (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-genetic-syndrome",
  "group" : [{
    "source" : "http://www.orpha.net",
    "target" : "https://taussig/fhir/CodeSystem/echsa",
    "element" : [{
      "code" : "870",
      "display" : "Trisomie 21",
      "target" : [{
        "code" : "NCA9",
        "display" : "Down syndrome (Trisomy 21)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "881",
      "display" : "Syndrome de Turner",
      "target" : [{
        "code" : "NCA29",
        "display" : "Turner syndrome (45XO)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "567",
      "display" : "Syndrome de délétion 22q11.2",
      "target" : [{
        "code" : "NCA8",
        "display" : "DiGeorge syndrome (velocardiofacial syndrome) (conotruncal anomaly face syndrome) (22q11 deletion)",
        "equivalence" : "equivalent",
        "comment" : "syndrome de DiGeorge / vélocardiofacial"
      }]
    },
    {
      "code" : "3380",
      "display" : "Syndrome de trisomie 18",
      "target" : [{
        "code" : "NCA-2010-S-150",
        "display" : "Edwards syndrome (Trisomy 18)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "3378",
      "display" : "Syndrome de trisomie 13",
      "target" : [{
        "code" : "NCA-2010-S-360",
        "display" : "Patau syndrome (Trisomy 13)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "365",
      "display" : "Glycogénose par déficit en maltase acide",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "95",
      "display" : "Ataxie de Friedreich",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "98896",
      "display" : "Dystrophie musculaire de Duchenne",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "558",
      "display" : "Syndrome de Marfan",
      "target" : [{
        "code" : "NCA17",
        "display" : "Marfan syndrome",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "98249",
      "display" : "Syndrome d'Ehlers-Danlos",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "60030",
      "display" : "Syndrome de Loeys-Dietz",
      "target" : [{
        "code" : "NCA-2010-S-270",
        "display" : "Loeys-Dietz syndrome",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "648",
      "display" : "Syndrome de Noonan",
      "target" : [{
        "code" : "NCA-2010-S-350",
        "display" : "Noonan syndrome",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "805",
      "display" : "Sclérose tubéreuse de Bourneville",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "904",
      "display" : "Syndrome de Williams",
      "target" : [{
        "code" : "NCA10",
        "display" : "Williams syndrome (Williams-Beuren syndrome)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "52",
      "display" : "Syndrome d'Alagille",
      "target" : [{
        "code" : "NCA4",
        "display" : "Alagille syndrome (intrahepatic biliary duct agenesis)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "290",
      "display" : "Syndrome de rubéole congénitale",
      "target" : [{
        "code" : "NCA7",
        "display" : "Fetal rubella syndrome (Congenital rubella syndrome)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "68341",
      "display" : "Anomalies congénitales multiples/syndrome dysmorphique",
      "target" : [{
        "code" : "NCA-2010-S-510",
        "display" : "Other syndromic abnormality(ies)",
        "equivalence" : "inexact",
        "comment" : "« autre anomalie syndromique »"
      }]
    }]
  }]
}

```
