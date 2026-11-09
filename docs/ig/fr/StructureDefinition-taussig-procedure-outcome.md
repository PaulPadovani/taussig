# TAUSSIG — Résultat global de procédure - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profil de ressource: TAUSSIG — Résultat global de procédure ( Expérimental ) 

**Utilisations:**

* Exemples pour ce/t/te Profil: [Observation/ex-taussig-procedure-outcome](Observation-ex-taussig-procedure-outcome.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-procedure-outcome)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

#### Bindings terminologiques (différentiel)

#### Contraintes

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

#### Bindings terminologiques (différentiel)

#### Contraintes

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-procedure-outcome.csv), [Excel](../StructureDefinition-taussig-procedure-outcome.xlsx), [Schematron](../StructureDefinition-taussig-procedure-outcome.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-procedure-outcome",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-procedure-outcome",
  "version" : "0.8.1",
  "name" : "TaussigProcedureOutcome",
  "title" : "TAUSSIG — Résultat global de procédure",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Synthèse du résultat procédural : succès hémodynamique, lésion résiduelle, imputabilité d'un décès péri-procédural (component). NB : succès TECHNIQUE porté par Procedure.outcome (geste/cathétérisme) ; décès porté par Patient.deceased[x].",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Observation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Observation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation",
      "constraint" : [{
        "key" : "taussig-outcome-1",
        "severity" : "error",
        "human" : "Succès hémodynamique et lésion résiduelle se renseignent par oui/non.",
        "expression" : "code.coding.where(system = 'https://taussig/fhir/CodeSystem/procedure-outcome-type' and (code = 'hemodynamic_success' or code = 'residual_lesion_present')).exists() implies (value.empty() or value.ofType(boolean).exists())",
        "source" : "https://taussig/fhir/StructureDefinition/taussig-procedure-outcome"
      },
      {
        "key" : "taussig-outcome-2",
        "severity" : "error",
        "human" : "L'imputabilité du décès se renseigne par une valeur codée (liste death-attribution-vs).",
        "expression" : "code.coding.where(system = 'https://taussig/fhir/CodeSystem/procedure-outcome-type' and code = 'death_attribution').exists() implies (value.empty() or value.ofType(CodeableConcept).exists())",
        "source" : "https://taussig/fhir/StructureDefinition/taussig-procedure-outcome"
      }]
    },
    {
      "id" : "Observation.partOf",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Observation.partOf",
      "label" : "Cathétérisme concerné",
      "short" : "Cathétérisme concerné",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-catheterization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.code",
      "path" : "Observation.code",
      "label" : "Type de résultat",
      "short" : "Type de résultat",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/procedure-outcome-type-vs"
      }
    },
    {
      "id" : "Observation.subject",
      "path" : "Observation.subject",
      "label" : "Patient",
      "short" : "Patient",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.value[x]",
      "label" : "Résultat (oui/non ou imputabilité)",
      "short" : "Résultat (oui/non ou imputabilité)",
      "type" : [{
        "code" : "CodeableConcept"
      },
      {
        "code" : "boolean"
      }],
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/death-attribution-vs"
      }
    },
    {
      "id" : "Observation.component",
      "path" : "Observation.component",
      "max" : "0"
    }]
  }
}

```
