# TAUSSIG — État clinique d'un implant - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — État clinique d'un implant (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — États d'implant](ValueSet-implant-status-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "implant-status",
  "url" : "https://taussig/fhir/CodeSystem/implant-status",
  "version" : "0.8.1",
  "name" : "ImplantStatus",
  "title" : "TAUSSIG — État clinique d'un implant",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "État clinique courant d'un implant (porté en extension de Device).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 6,
  "concept" : [{
    "code" : "functional",
    "display" : "Fonctionnel"
  },
  {
    "code" : "degenerated",
    "display" : "Dégénéré"
  },
  {
    "code" : "stenotic",
    "display" : "Sténosé"
  },
  {
    "code" : "occluded",
    "display" : "Occlus"
  },
  {
    "code" : "explanted",
    "display" : "Explanté"
  },
  {
    "code" : "embolized",
    "display" : "Embolisé"
  }]
}

```
