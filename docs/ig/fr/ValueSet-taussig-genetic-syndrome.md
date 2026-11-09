# TAUSSIG — Syndromes génétiques (Orphanet) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Syndromes génétiques (Orphanet) (Expérimental) 

 **References** 

* [TAUSSIG — Syndrome génétique (covariable de contexte)](StructureDefinition-taussig-genetic-syndrome-profile.md)

### Définition logique (CLD)

 

### Expansion

No Expansion for this valueset (Unknown Code System)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-genetic-syndrome",
  "url" : "https://taussig/fhir/ValueSet/taussig-genetic-syndrome",
  "version" : "0.1.0",
  "name" : "TaussigGeneticSyndrome",
  "title" : "TAUSSIG — Syndromes génétiques (Orphanet)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Working set Orphanet des syndromes congénitaux pertinents en cathétérisme (covariable de contexte de la POC). Code primaire Orphanet ; ICD-11 = classification (ConceptMap) ; ICD-10 = dérivé.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "copyright" : "Orphanet (c) 2025, CC-BY-4.0.",
  "compose" : {
    "include" : [{
      "system" : "http://www.orpha.net",
      "concept" : [{
        "code" : "870",
        "display" : "Trisomie 21"
      },
      {
        "code" : "881",
        "display" : "Syndrome de Turner"
      },
      {
        "code" : "567",
        "display" : "Syndrome de délétion 22q11.2"
      },
      {
        "code" : "3380",
        "display" : "Syndrome de trisomie 18"
      },
      {
        "code" : "3378",
        "display" : "Syndrome de trisomie 13"
      },
      {
        "code" : "365",
        "display" : "Glycogénose par déficit en maltase acide"
      },
      {
        "code" : "95",
        "display" : "Ataxie de Friedreich"
      },
      {
        "code" : "98896",
        "display" : "Dystrophie musculaire de Duchenne"
      },
      {
        "code" : "558",
        "display" : "Syndrome de Marfan"
      },
      {
        "code" : "98249",
        "display" : "Syndrome d'Ehlers-Danlos"
      },
      {
        "code" : "60030",
        "display" : "Syndrome de Loeys-Dietz"
      },
      {
        "code" : "648",
        "display" : "Syndrome de Noonan"
      },
      {
        "code" : "805",
        "display" : "Sclérose tubéreuse de Bourneville"
      },
      {
        "code" : "904",
        "display" : "Syndrome de Williams"
      },
      {
        "code" : "52",
        "display" : "Syndrome d'Alagille"
      },
      {
        "code" : "290",
        "display" : "Syndrome de rubéole congénitale"
      },
      {
        "code" : "68341",
        "display" : "Anomalies congénitales multiples/syndrome dysmorphique"
      }]
    }]
  }
}

```
