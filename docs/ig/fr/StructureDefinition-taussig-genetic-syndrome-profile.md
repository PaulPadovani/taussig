# TAUSSIG — Syndrome génétique (covariable de contexte) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Profil de ressource: TAUSSIG — Syndrome génétique (covariable de contexte) ( Expérimental ) 

**Utilisations:**

* Exemples pour ce/t/te Profil: [Condition/ex-taussig-genetic-syndrome-profile](Condition-ex-taussig-genetic-syndrome-profile.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-genetic-syndrome-profile)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Condition](http://hl7.org/fhir/R4/condition.html) 

#### Bindings terminologiques (différentiel)

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Condition](http://hl7.org/fhir/R4/condition.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [Condition](http://hl7.org/fhir/R4/condition.html) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Condition](http://hl7.org/fhir/R4/condition.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-genetic-syndrome-profile.csv), [Excel](../StructureDefinition-taussig-genetic-syndrome-profile.xlsx), [Schematron](../StructureDefinition-taussig-genetic-syndrome-profile.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-genetic-syndrome-profile",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-genetic-syndrome-profile",
  "version" : "0.8.0",
  "name" : "TaussigGeneticSyndrome",
  "title" : "TAUSSIG — Syndrome génétique (covariable de contexte)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Syndrome génétique comme covariable de contexte (POC KT, pas de cardiogénétique moléculaire). Codage Orphanet primaire + CIM-11 dérivé.",
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
  "type" : "Condition",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Condition",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Condition",
      "path" : "Condition"
    },
    {
      "id" : "Condition.code",
      "path" : "Condition.code",
      "label" : "Syndrome génétique",
      "short" : "Syndrome génétique",
      "mustSupport" : true,
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-genetic-syndrome"
      }
    },
    {
      "id" : "Condition.code.coding",
      "path" : "Condition.code.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "system"
        }],
        "rules" : "open"
      }
    },
    {
      "id" : "Condition.code.coding:orpha",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Condition.code.coding",
      "sliceName" : "orpha",
      "label" : "Code Orphanet",
      "short" : "Code Orphanet",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Condition.code.coding:orpha.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "http://www.orpha.net"
    },
    {
      "id" : "Condition.code.coding:icd11",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Condition.code.coding",
      "sliceName" : "icd11",
      "label" : "Code CIM-11",
      "short" : "Code CIM-11",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Condition.code.coding:icd11.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "http://id.who.int/icd/release/11/mms"
    },
    {
      "id" : "Condition.code.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
        "valueBoolean" : true
      },
      {
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Condition.code.text",
      "label" : "Libellé du syndrome (tel qu'écrit)",
      "short" : "Libellé du syndrome (tel qu'écrit)",
      "mustSupport" : true
    }]
  }
}

```
