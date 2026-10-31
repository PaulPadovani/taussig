# TAUSSIG — Type de matériel - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## CodeSystem: TAUSSIG — Type de matériel (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Types de matériel (catégories)](ValueSet-material-type-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "material-type",
  "url" : "https://taussig/fhir/CodeSystem/material-type",
  "version" : "0.6.1",
  "name" : "MaterialType",
  "title" : "TAUSSIG — Type de matériel",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Catégorie de matériel utilisé pendant un geste.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 4,
  "concept" : [{
    "code" : "balloon",
    "display" : "Ballon"
  },
  {
    "code" : "stent",
    "display" : "Stent"
  },
  {
    "code" : "device_implant",
    "display" : "Dispositif implantable"
  },
  {
    "code" : "consumable",
    "display" : "Consommable"
  }]
}

```
