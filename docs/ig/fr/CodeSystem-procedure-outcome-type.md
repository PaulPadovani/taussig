# TAUSSIG — Type de résultat global de procédure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Type de résultat global de procédure (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Types de résultat global de procédure](ValueSet-procedure-outcome-type-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "procedure-outcome-type",
  "url" : "https://taussig/fhir/CodeSystem/procedure-outcome-type",
  "version" : "0.8.1",
  "name" : "ProcedureOutcomeType",
  "title" : "TAUSSIG — Type de résultat global de procédure",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Nature du résultat porté par une Observation TaussigProcedureOutcome. Le succès technique n'en fait pas partie : il est porté par Procedure.outcome du cathétérisme.",
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
    "code" : "hemodynamic_success",
    "display" : "Succès hémodynamique",
    "definition" : "Critère hémodynamique de succès atteint (valeur oui/non), distinct du succès technique."
  },
  {
    "code" : "residual_lesion_present",
    "display" : "Lésion résiduelle présente",
    "definition" : "Présence d'une lésion résiduelle en fin de procédure (valeur oui/non) ; le détail est porté par une Condition de type residual_lesion."
  },
  {
    "code" : "death_attribution",
    "display" : "Imputabilité du décès péri-procédural",
    "definition" : "Imputabilité d'un décès péri-procédural à la procédure (valeur codée, liste death-attribution-vs) ; le décès lui-même est porté par Patient.deceased[x]."
  }]
}

```
