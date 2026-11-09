# TAUSSIG — Dispositifs de fermeture par cible - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Dispositifs de fermeture par cible (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Types d'implant](ValueSet-implant-device-type-vs.md)
* [TAUSSIG — Types de matériel (catégories)](ValueSet-material-type-vs.md)
* [TAUSSIG — Types de dispositifs interventionnels](ValueSet-taussig-materiel-types.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "closure-device-type",
  "url" : "https://taussig/fhir/CodeSystem/closure-device-type",
  "version" : "0.8.0",
  "name" : "ClosureDeviceType",
  "title" : "TAUSSIG — Dispositifs de fermeture par cible",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Catégories de dispositifs de fermeture distinguées par cible. Codes locaux TAUSSIG ; aucune équivalence SNOMED spécifique n'est affirmée.",
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
    "code" : "TAUSSIG-OCCLUDER-CIA",
    "display" : "Dispositif de fermeture de CIA"
  },
  {
    "code" : "TAUSSIG-OCCLUDER-CIV",
    "display" : "Dispositif de fermeture de CIV"
  },
  {
    "code" : "TAUSSIG-OCCLUDER-CANAL",
    "display" : "Dispositif de fermeture de canal artériel"
  },
  {
    "code" : "TAUSSIG-OCCLUDER-VASCULAR",
    "display" : "Dispositif de fermeture d’un autre vaisseau"
  },
  {
    "code" : "TAUSSIG-OCCLUDER-FOP",
    "display" : "Dispositif de fermeture de FOP"
  },
  {
    "code" : "TAUSSIG-OCCLUDER-PARAVALVULAR",
    "display" : "Prothèse de fermeture de fuite paravalvulaire"
  }]
}

```
