# TAUSSIG — Diagnostic cardiaque congénital - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profil de ressource: TAUSSIG — Diagnostic cardiaque congénital ( Expérimental ) 

**Utilisations:**

* Référence ce Profil: [Diagnostic congénital d'origine](StructureDefinition-relatedDiagnosis.md), [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md) and [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md)
* Exemples pour ce/t/te Profil: [Condition/ex-taussig-cardiac-diagnosis](Condition-ex-taussig-cardiac-diagnosis.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-cardiac-diagnosis)

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

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-cardiac-diagnosis.csv), [Excel](../StructureDefinition-taussig-cardiac-diagnosis.xlsx), [Schematron](../StructureDefinition-taussig-cardiac-diagnosis.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-cardiac-diagnosis",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-cardiac-diagnosis",
  "version" : "0.8.1",
  "name" : "TaussigCardiacDiagnosis",
  "title" : "TAUSSIG — Diagnostic cardiaque congénital",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Diagnostic congénital (substrat figé). Concept TAUSSIG saisi (taussig-diagnosis) ; CIM-11, IPCCC, CIM-10 et ECHSA en sont déduits par les ConceptMaps taussig-diagnosis-to-* (0.8.1). Le verrouillage (is_locked) est porté par verificationStatus=confirmed + Provenance.recorded.",
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
      "id" : "Condition.extension",
      "path" : "Condition.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      }
    },
    {
      "id" : "Condition.extension:relatedDiagnosis",
      "path" : "Condition.extension",
      "sliceName" : "relatedDiagnosis",
      "min" : 0,
      "max" : "0",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/relatedDiagnosis"]
      }]
    },
    {
      "id" : "Condition.verificationStatus",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Condition.verificationStatus",
      "label" : "Statut du diagnostic (confirmé, provisoire…)",
      "short" : "Statut du diagnostic (confirmé, provisoire…)",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://hl7.org/fhir/ValueSet/condition-ver-status"
      }
    },
    {
      "id" : "Condition.code",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Condition.code",
      "label" : "Diagnostic cardiaque congénital",
      "short" : "Diagnostic cardiaque congénital",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-diagnosis"
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
        "description" : "Concept TAUSSIG saisi et codages déduits (CIM-11, IPCCC, CIM-10, ECHSA).",
        "rules" : "open"
      }
    },
    {
      "id" : "Condition.code.coding:taussig",
      "path" : "Condition.code.coding",
      "sliceName" : "taussig",
      "label" : "Concept TAUSSIG du diagnostic",
      "short" : "Concept TAUSSIG du diagnostic",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-diagnosis"
      }
    },
    {
      "id" : "Condition.code.coding:taussig.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "https://taussig/fhir/CodeSystem/taussig-diagnosis"
    },
    {
      "id" : "Condition.code.coding:icd11",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Condition.code.coding",
      "sliceName" : "icd11",
      "label" : "Code CIM-11",
      "short" : "Code CIM-11",
      "min" : 0,
      "max" : "1",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-diagnosis-icd11"
      }
    },
    {
      "id" : "Condition.code.coding:icd11.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "http://id.who.int/icd/release/11/mms"
    },
    {
      "id" : "Condition.code.coding:ipccc",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Condition.code.coding",
      "sliceName" : "ipccc",
      "label" : "Code IPCCC",
      "short" : "Code IPCCC",
      "min" : 0,
      "max" : "1",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-diagnosis-ipccc"
      }
    },
    {
      "id" : "Condition.code.coding:ipccc.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "https://taussig/fhir/CodeSystem/ipccc"
    },
    {
      "id" : "Condition.code.coding:cim10",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Condition.code.coding",
      "sliceName" : "cim10",
      "label" : "Code CIM-10",
      "short" : "Code CIM-10",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Condition.code.coding:cim10.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "http://hl7.org/fhir/sid/icd-10"
    },
    {
      "id" : "Condition.code.coding:echsa",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Condition.code.coding",
      "sliceName" : "echsa",
      "label" : "Code ECHSA",
      "short" : "Code ECHSA",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Condition.code.coding:echsa.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "https://taussig/fhir/CodeSystem/echsa"
    },
    {
      "id" : "Condition.code.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
        "valueBoolean" : true
      },
      {
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Condition.code.text",
      "label" : "Libellé du concept TAUSSIG (déduit)",
      "short" : "Libellé du concept TAUSSIG (déduit)",
      "mustSupport" : true
    }]
  }
}

```
