# TAUSSIG — Type d'abord vasculaire - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Type d'abord vasculaire (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Types d'abord vasculaire](ValueSet-access-type-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "access-type",
  "url" : "https://taussig/fhir/CodeSystem/access-type",
  "version" : "0.8.0",
  "name" : "AccessType",
  "title" : "TAUSSIG — Type d'abord vasculaire",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Voie d'abord vasculaire.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 11,
  "concept" : [{
    "code" : "arterial_femoral",
    "display" : "Artériel fémoral"
  },
  {
    "code" : "venous_femoral",
    "display" : "Veineux fémoral"
  },
  {
    "code" : "arterial_humeral",
    "display" : "Artériel huméral"
  },
  {
    "code" : "venous_humeral",
    "display" : "Veineux huméral"
  },
  {
    "code" : "arterial_carotid",
    "display" : "Artériel carotidien"
  },
  {
    "code" : "venous_jugular",
    "display" : "Veineux jugulaire"
  },
  {
    "code" : "transhepatic",
    "display" : "Transhépatique"
  },
  {
    "code" : "umbilical",
    "display" : "Ombilical"
  },
  {
    "code" : "surgical_hybrid",
    "display" : "Chirurgical/hybride"
  },
  {
    "code" : "arterial_radial",
    "display" : "Artériel radial"
  },
  {
    "code" : "transthoracic",
    "display" : "Transthoracique",
    "definition" : "Abord transthoracique : périventriculaire, transapical ou ponction directe."
  }]
}

```
