# TAUSSIG — Échelle de gravité d'un EI - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Échelle de gravité d'un EI (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Échelles de gravité](ValueSet-severity-scale-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "severity-scale",
  "url" : "https://taussig/fhir/CodeSystem/severity-scale",
  "version" : "0.8.1",
  "name" : "SeverityScale",
  "title" : "TAUSSIG — Échelle de gravité d'un EI",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Échelle de gradation validée par la littérature.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 5,
  "concept" : [{
    "code" : "bergersen_c3po",
    "display" : "Bergersen / C3PO"
  },
  {
    "code" : "ncdr_impact",
    "display" : "NCDR-IMPACT"
  },
  {
    "code" : "ctcae_v5",
    "display" : "CTCAE v5"
  },
  {
    "code" : "clavien_dindo",
    "display" : "Clavien-Dindo"
  },
  {
    "code" : "other",
    "display" : "Autre"
  }]
}

```
