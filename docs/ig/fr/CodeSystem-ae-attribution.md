# TAUSSIG — Attribution d'un EI - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Attribution d'un EI (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Attributions d'EI](ValueSet-ae-attribution-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "ae-attribution",
  "url" : "https://taussig/fhir/CodeSystem/ae-attribution",
  "version" : "0.8.1",
  "name" : "AeAttribution",
  "title" : "TAUSSIG — Attribution d'un EI",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Cause suspectée d'un événement indésirable.",
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
    "code" : "device",
    "display" : "Dispositif"
  },
  {
    "code" : "vascular_access",
    "display" : "Abord vasculaire"
  },
  {
    "code" : "anesthesia",
    "display" : "Anesthésie"
  },
  {
    "code" : "procedure_technique",
    "display" : "Technique procédurale"
  },
  {
    "code" : "patient_condition",
    "display" : "État du patient"
  },
  {
    "code" : "contrast",
    "display" : "Produit de contraste"
  },
  {
    "code" : "unknown",
    "display" : "Inconnu"
  }]
}

```
