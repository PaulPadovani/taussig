# TAUSSIG — Gestion de la complication (prise en charge péri-procédurale) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Gestion de la complication (prise en charge péri-procédurale) (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Prise en charge d'un événement indésirable](ValueSet-taussig-ae-management.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "ae-management",
  "url" : "https://taussig/fhir/CodeSystem/ae-management",
  "version" : "0.1.0",
  "name" : "TaussigAeManagement",
  "title" : "TAUSSIG — Gestion de la complication (prise en charge péri-procédurale)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Variable de prise en charge d'un événement indésirable de cathétérisme congénital (échelle d'escalade). Ancrage IPCCC/EPCC chap. 15 + SNOMED procédure. À valider cliniquement.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "concept" : [{
    "code" : "transcatheter_bailout",
    "display" : "Geste de rattrapage transcathéter"
  },
  {
    "code" : "surgical_bailout",
    "display" : "Geste de rattrapage chirurgical"
  },
  {
    "code" : "no_treatment",
    "display" : "Aucun traitement requis"
  },
  {
    "code" : "medical_treatment",
    "display" : "Traitement médical"
  },
  {
    "code" : "transfusion",
    "display" : "Transfusion"
  },
  {
    "code" : "thrombolysis",
    "display" : "Thrombolyse"
  },
  {
    "code" : "surgical_intervention",
    "display" : "Intervention chirurgicale"
  }]
}

```
