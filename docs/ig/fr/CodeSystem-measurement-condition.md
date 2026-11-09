# TAUSSIG — Condition de mesure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Condition de mesure (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Conditions de mesure](ValueSet-measurement-condition-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "measurement-condition",
  "url" : "https://taussig/fhir/CodeSystem/measurement-condition",
  "version" : "0.8.1",
  "name" : "MeasurementCondition",
  "title" : "TAUSSIG — Condition de mesure",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Condition physiologique/pharmacologique pendant la mesure.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 7,
  "concept" : [{
    "code" : "resting",
    "display" : "Repos"
  },
  {
    "code" : "exercise",
    "display" : "Effort"
  },
  {
    "code" : "pharmacologic_stress",
    "display" : "Stress pharmacologique"
  },
  {
    "code" : "supplemental_o2",
    "display" : "Oxygène"
  },
  {
    "code" : "nitric_oxide",
    "display" : "Monoxyde d'azote"
  },
  {
    "code" : "room_air",
    "display" : "Air ambiant"
  },
  {
    "code" : "other",
    "display" : "Autre"
  }]
}

```
