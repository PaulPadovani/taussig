# TAUSSIG — Caractère urgent du cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Caractère urgent du cathétérisme (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Liste — Caractère urgent du cathétérisme](ValueSet-procedure-urgency-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "procedure-urgency",
  "url" : "https://taussig/fhir/CodeSystem/procedure-urgency",
  "version" : "0.8.0",
  "name" : "ProcedureUrgencyCS",
  "title" : "TAUSSIG — Caractère urgent du cathétérisme",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Caractère urgent du cathétérisme, en 4 niveaux d'après le statut de procédure du registre NCDR IMPACT (dictionnaire v2.0.1, élément 5020) ; définitions résumées en français (décision I3).",
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
    "code" : "elective",
    "display" : "Programmé",
    "definition" : "Réalisable en ambulatoire ou lors d'une hospitalisation ultérieure sans risque significatif ; chez un patient hospitalisé stable, réalisé pendant le séjour par commodité."
  },
  {
    "code" : "urgent",
    "display" : "Urgent",
    "definition" : "Réalisé pendant l'hospitalisation, avant la sortie, en raison d'inquiétudes significatives."
  },
  {
    "code" : "emergency",
    "display" : "En urgence",
    "definition" : "Réalisé dès que possible en raison d'un risque vital : un cas programmé serait décalé, ou l'équipe d'astreinte appelée."
  },
  {
    "code" : "salvage",
    "display" : "De sauvetage",
    "definition" : "Dernier recours : choc cardiogénique au début de la procédure, avec massage cardiaque d'au moins 60 secondes dans les 10 minutes précédentes ou assistance circulatoire extracorporelle non prévue."
  }]
}

```
