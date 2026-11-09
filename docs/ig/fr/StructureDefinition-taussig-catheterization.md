# TAUSSIG — Cathétérisme cardiaque (acte pivot) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Profil de ressource: TAUSSIG — Cathétérisme cardiaque (acte pivot) ( Expérimental ) 

**Utilisations:**

* Référence ce Profil: [Acte de survenue de l'EI](StructureDefinition-adverseEventProcedure.md), [TAUSSIG — Gestion anesthésique](StructureDefinition-taussig-anesthesia-management.md), [TAUSSIG — Anthropométrie au cathétérisme](StructureDefinition-taussig-cath-anthropometry-observation.md), [TAUSSIG — Mesure clinique (delta pre/post)](StructureDefinition-taussig-clinical-measurement.md)... Show 5 more, [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md), [TAUSSIG — Administration médicamenteuse péri-procédurale](StructureDefinition-taussig-periprocedural-medication-administration.md), [TAUSSIG — Exposition et contraste de procédure](StructureDefinition-taussig-procedure-exposure-observation.md), [TAUSSIG — Résultat global de procédure](StructureDefinition-taussig-procedure-outcome.md) and [TAUSSIG — Abord vasculaire](StructureDefinition-taussig-vascular-access.md)
* Exemples pour ce/t/te Profil: [Procedure/ex-taussig-catheterization](Procedure-ex-taussig-catheterization.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-catheterization)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Procedure](http://hl7.org/fhir/R4/procedure.html) 

#### Bindings terminologiques (différentiel)

#### Contraintes

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Procedure](http://hl7.org/fhir/R4/procedure.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [Procedure](http://hl7.org/fhir/R4/procedure.html) 

#### Bindings terminologiques (différentiel)

#### Contraintes

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Procedure](http://hl7.org/fhir/R4/procedure.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-catheterization.csv), [Excel](../StructureDefinition-taussig-catheterization.xlsx), [Schematron](../StructureDefinition-taussig-catheterization.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-catheterization",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-catheterization",
  "version" : "0.8.0",
  "name" : "TaussigCatheterization",
  "title" : "TAUSSIG — Cathétérisme cardiaque (acte pivot)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Acte de cathétérisme. Intention (diagnostique/interventionnel/hybride) en category ; acte codé par un concept TAUSSIG (CodeSystem taussig-procedure), dont SNOMED (interop), CCAM (administratif FR), IPCCC et ECHSA (registre) sont déduits par ConceptMap ; opérateurs, horodatages salle et peau, caractère urgent. Dosimétrie/anthropométrie portées par Observations liées.",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Procedure",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Procedure",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Procedure",
      "path" : "Procedure"
    },
    {
      "id" : "Procedure.extension",
      "path" : "Procedure.extension",
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
      "id" : "Procedure.extension:contrastUsed",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.extension",
      "sliceName" : "contrastUsed",
      "label" : "Produit de contraste utilisé",
      "short" : "Produit de contraste utilisé",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/contrastUsed"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.extension:roomPeriod",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.extension",
      "sliceName" : "roomPeriod",
      "label" : "Entrée et sortie de salle",
      "short" : "Entrée et sortie de salle",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/procedureRoomPeriod"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.extension:procedureUrgency",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.extension",
      "sliceName" : "procedureUrgency",
      "label" : "Caractère urgent",
      "short" : "Caractère urgent",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/procedureUrgency"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.status",
      "path" : "Procedure.status",
      "label" : "Statut de l'acte",
      "short" : "Statut de l'acte",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.category",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.category",
      "label" : "Intention (diagnostique, interventionnel, hybride)",
      "short" : "Intention (diagnostique, interventionnel, hybride)",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/cath-intent-vs"
      }
    },
    {
      "id" : "Procedure.code",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.code",
      "label" : "Type de cathétérisme",
      "short" : "Type de cathétérisme",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-procedure"
      }
    },
    {
      "id" : "Procedure.code.coding",
      "path" : "Procedure.code.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "system"
        }],
        "rules" : "open"
      }
    },
    {
      "id" : "Procedure.code.coding:taussig",
      "path" : "Procedure.code.coding",
      "sliceName" : "taussig",
      "label" : "Concept TAUSSIG de l'acte",
      "short" : "Concept TAUSSIG de l'acte",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.code.coding:taussig.system",
      "path" : "Procedure.code.coding.system",
      "min" : 1,
      "patternUri" : "https://taussig/fhir/CodeSystem/taussig-procedure"
    },
    {
      "id" : "Procedure.code.coding:snomed",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Procedure.code.coding",
      "sliceName" : "snomed",
      "label" : "Code SNOMED CT",
      "short" : "Code SNOMED CT",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Procedure.code.coding:snomed.system",
      "path" : "Procedure.code.coding.system",
      "min" : 1,
      "patternUri" : "http://snomed.info/sct"
    },
    {
      "id" : "Procedure.code.coding:ipccc",
      "path" : "Procedure.code.coding",
      "sliceName" : "ipccc",
      "label" : "Code IPCCC (déduit)",
      "short" : "Code IPCCC (déduit)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Procedure.code.coding:ipccc.system",
      "path" : "Procedure.code.coding.system",
      "min" : 1,
      "patternUri" : "https://taussig/fhir/CodeSystem/ipccc"
    },
    {
      "id" : "Procedure.code.coding:ccam",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Procedure.code.coding",
      "sliceName" : "ccam",
      "label" : "Code CCAM",
      "short" : "Code CCAM",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Procedure.code.coding:ccam.system",
      "path" : "Procedure.code.coding.system",
      "min" : 1,
      "patternUri" : "https://mos.esante.gouv.fr/NOS/TRE_R310-CCAM/FHIR/TRE-R310-CCAM"
    },
    {
      "id" : "Procedure.code.coding:echsa",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Procedure.code.coding",
      "sliceName" : "echsa",
      "label" : "Code ECHSA",
      "short" : "Code ECHSA",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Procedure.code.coding:echsa.system",
      "path" : "Procedure.code.coding.system",
      "min" : 1,
      "patternUri" : "https://taussig/fhir/CodeSystem/echsa"
    },
    {
      "id" : "Procedure.performed[x]",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Procedure.performed[x]",
      "label" : "Période du cathétérisme (peau à peau)",
      "short" : "Période du cathétérisme (peau à peau)",
      "type" : [{
        "code" : "Period"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.performed[x].start",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.performed[x].start",
      "label" : "Entrée peau (début)",
      "short" : "Entrée peau (début)",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.performed[x].end",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.performed[x].end",
      "label" : "Sortie peau (fin)",
      "short" : "Sortie peau (fin)",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.performer",
      "path" : "Procedure.performer",
      "label" : "Opérateur",
      "short" : "Opérateur",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.performer.function",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.performer.function",
      "label" : "Rôle de l'opérateur",
      "short" : "Rôle de l'opérateur",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/operator-role-vs"
      }
    },
    {
      "id" : "Procedure.performer.actor",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.performer.actor",
      "label" : "Praticien",
      "short" : "Praticien",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-practitioner"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.reasonReference",
      "path" : "Procedure.reasonReference",
      "label" : "Indication (diagnostic ou condition)",
      "short" : "Indication (diagnostic ou condition)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-cardiac-diagnosis",
        "https://taussig/fhir/StructureDefinition/taussig-cardiac-condition-profile"]
      }],
      "constraint" : [{
        "key" : "taussig-cath-1",
        "severity" : "error",
        "human" : "Une indication porte au plus un rôle : diagnosisRole (diagnostic congénital) OU indicationRole (condition évolutive), pas les deux.",
        "expression" : "(extension.where(url = 'https://taussig/fhir/StructureDefinition/diagnosisRole').exists() and extension.where(url = 'https://taussig/fhir/StructureDefinition/indicationRole').exists()).not()",
        "source" : "https://taussig/fhir/StructureDefinition/taussig-catheterization"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.reasonReference.extension:diagnosisRole",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.reasonReference.extension",
      "sliceName" : "diagnosisRole",
      "label" : "Rôle du diagnostic dans l'indication",
      "short" : "Rôle du diagnostic dans l'indication",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/diagnosisRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.reasonReference.extension:indicationRole",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.reasonReference.extension",
      "sliceName" : "indicationRole",
      "label" : "Rôle de la condition dans l'indication",
      "short" : "Rôle de la condition dans l'indication",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/indicationRole"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.outcome",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.outcome",
      "label" : "Succès technique de la procédure",
      "short" : "Succès technique de la procédure",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/technical-success-vs"
      }
    }]
  }
}

```
