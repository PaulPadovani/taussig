# TAUSSIG — Condition cardiaque évolutive - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profil de ressource: TAUSSIG — Condition cardiaque évolutive ( Expérimental ) 

**Utilisations:**

* Référence ce Profil: [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md) and [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md)
* Exemples pour ce/t/te Profil: [Condition/ex-taussig-cardiac-condition-profile](Condition-ex-taussig-cardiac-condition-profile.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-cardiac-condition-profile)

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

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-cardiac-condition-profile.csv), [Excel](../StructureDefinition-taussig-cardiac-condition-profile.xlsx), [Schematron](../StructureDefinition-taussig-cardiac-condition-profile.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-cardiac-condition-profile",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-cardiac-condition-profile",
  "version" : "0.8.1",
  "name" : "TaussigCardiacCondition",
  "title" : "TAUSSIG — Condition cardiaque évolutive",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Statut actuel de la cardiopathie : état d'étape chirurgicale (status post ECHSA) OU lésion résiduelle/acquise. Concept TAUSSIG saisi (taussig-condition) ; IPCCC, CIM-10 et ECHSA en sont déduits (0.8.1). Type (residual/acquired/post_surgical) = choix clinicien d'instance.",
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
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Condition.extension",
      "sliceName" : "relatedDiagnosis",
      "label" : "Diagnostic congénital d'origine",
      "short" : "Diagnostic congénital d'origine",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/relatedDiagnosis"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Condition.clinicalStatus",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Condition.clinicalStatus",
      "label" : "Statut clinique (active ou résolue)",
      "short" : "Statut clinique (active ou résolue)",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-condition-clinical-status-vs"
      }
    },
    {
      "id" : "Condition.category",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Condition.category",
      "label" : "Type de condition (résiduelle, acquise, post-chirurgicale)",
      "short" : "Type de condition (résiduelle, acquise, post-chirurgicale)",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/condition-type-vs"
      }
    },
    {
      "id" : "Condition.code",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Condition.code",
      "label" : "Condition cardiaque évolutive",
      "short" : "Condition cardiaque évolutive",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-condition"
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
      "id" : "Condition.code.coding:taussig",
      "path" : "Condition.code.coding",
      "sliceName" : "taussig",
      "label" : "Concept TAUSSIG de la condition",
      "short" : "Concept TAUSSIG de la condition",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-condition"
      }
    },
    {
      "id" : "Condition.code.coding:taussig.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "https://taussig/fhir/CodeSystem/taussig-condition"
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
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-condition-ipccc"
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
      "id" : "Condition.code.coding:snomed",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Condition.code.coding",
      "sliceName" : "snomed",
      "label" : "Code SNOMED CT",
      "short" : "Code SNOMED CT",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Condition.code.coding:snomed.system",
      "path" : "Condition.code.coding.system",
      "min" : 1,
      "patternUri" : "http://snomed.info/sct"
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
    },
    {
      "id" : "Condition.onset[x]",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Condition.onset[x]",
      "label" : "Date de début",
      "short" : "Date de début",
      "mustSupport" : true
    }]
  }
}

```
