# TAUSSIG — Modalité de mesure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Modalité de mesure (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Modalités de mesure](ValueSet-measurement-modality-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "measurement-modality",
  "url" : "https://taussig/fhir/CodeSystem/measurement-modality",
  "version" : "0.8.0",
  "name" : "MeasurementModality",
  "title" : "TAUSSIG — Modalité de mesure",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Modalité d'acquisition d'une mesure.",
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
    "code" : "catheterization",
    "display" : "Cathétérisme"
  },
  {
    "code" : "echocardiography",
    "display" : "Échocardiographie"
  },
  {
    "code" : "cardiac_mri",
    "display" : "IRM cardiaque"
  },
  {
    "code" : "ct",
    "display" : "Scanner"
  },
  {
    "code" : "ecg",
    "display" : "ECG"
  }]
}

```
