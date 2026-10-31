# TAUSSIG — Rôle du médicament péri-procédural - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## CodeSystem: TAUSSIG — Rôle du médicament péri-procédural (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Rôles des médicaments péri-procéduraux](ValueSet-periprocedural-medication-purpose-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "periprocedural-medication-purpose",
  "url" : "https://taussig/fhir/CodeSystem/periprocedural-medication-purpose",
  "version" : "0.6.1",
  "name" : "PeriproceduralMedicationPurpose",
  "title" : "TAUSSIG — Rôle du médicament péri-procédural",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Rôle clinique d'une administration médicamenteuse pendant le cathétérisme.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 2,
  "concept" : [{
    "code" : "antibioprophylaxis",
    "display" : "Antibioprophylaxie"
  },
  {
    "code" : "anticoagulation",
    "display" : "Anticoagulation per-procédurale"
  }]
}

```
