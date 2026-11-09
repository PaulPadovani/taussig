# TAUSSIG — Propriété codée d'un dispositif - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Propriété codée d'un dispositif (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* Cette terminologie de référence (CodeSystem) n'est pas utilisée ici; elle peut être utilisée ailleurs (par exemple spécifications et/ou implémentations qui utilisent ce contenu)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "device-property",
  "url" : "https://taussig/fhir/CodeSystem/device-property",
  "version" : "0.8.1",
  "name" : "DeviceProperty",
  "title" : "TAUSSIG — Propriété codée d'un dispositif",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Type de propriété codée portée par Device.property (décision M2).",
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
    "code" : "covering",
    "display" : "Couverture"
  },
  {
    "code" : "expansion_mode",
    "display" : "Mode d'expansion"
  },
  {
    "code" : "coating",
    "display" : "Revêtement"
  }]
}

```
