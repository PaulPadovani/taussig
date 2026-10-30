# TAUSSIG — Observations liées au cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## CodeSystem: TAUSSIG — Observations liées au cathétérisme 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Codes d'exposition et contraste](ValueSet-taussig-procedure-exposure-observation-code-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "procedure-observation-code",
  "url" : "https://taussig/fhir/CodeSystem/procedure-observation-code",
  "version" : "0.6.0",
  "name" : "ProcedureObservationCode",
  "title" : "TAUSSIG — Observations liées au cathétérisme",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Codes locaux transitoires pour les observations de procédure dont le code LOINC reste à vérifier.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 3,
  "concept" : [{
    "code" : "fluoroscopy-time",
    "display" : "Temps de fluoroscopie"
  },
  {
    "code" : "dose-area-product",
    "display" : "Produit dose-surface"
  },
  {
    "code" : "contrast-volume",
    "display" : "Volume de produit de contraste"
  }]
}

```
