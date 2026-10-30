# TAUSSIG — Concepts locaux (sans équivalent de référence) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## CodeSystem: TAUSSIG — Concepts locaux (sans équivalent de référence) (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Sites anatomiques de mesure/geste (validé)](ValueSet-taussig-sites-mesure.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "taussig-local",
  "url" : "https://taussig/fhir/CodeSystem/taussig-local",
  "version" : "0.6.0",
  "name" : "TaussigLocal",
  "title" : "TAUSSIG — Concepts locaux (sans équivalent de référence)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Concepts nécessaires au modèle et vérifiés absents des terminologies de référence. Chaque code documente l'absence constatée.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 1,
  "concept" : [{
    "code" : "TAUSSIG-CAVOPULM-INF",
    "display" : "Dérivation cavopulmonaire inférieure (VCI vers artère pulmonaire)",
    "definition" : "Anastomose entre la veine cave inférieure et l'artère pulmonaire, isolée. SNOMED CT ne\n    fournit de concept que pour la dérivation supérieure (443327008) et pour la dérivation\n    totale (443298009), et aucune structure corporelle pour la composante inférieure seule."
  }]
}

```
