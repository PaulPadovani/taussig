# TAUSSIG — Geste interventionnel - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profil de ressource: TAUSSIG — Geste interventionnel ( Expérimental ) 

**Utilisations:**

* Référence ce Profil: [Acte de survenue de l'EI](StructureDefinition-adverseEventProcedure.md), [TAUSSIG — Mesure clinique (delta pre/post)](StructureDefinition-taussig-clinical-measurement.md) and [TAUSSIG — Pose et port d'un implant](StructureDefinition-taussig-implant-use.md)
* Exemples pour ce/t/te Profil: [Procedure/ex-taussig-interventional-gesture](Procedure-ex-taussig-interventional-gesture.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-interventional-gesture)

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

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Procedure](http://hl7.org/fhir/R4/procedure.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [Procedure](http://hl7.org/fhir/R4/procedure.html) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Procedure](http://hl7.org/fhir/R4/procedure.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-interventional-gesture.csv), [Excel](../StructureDefinition-taussig-interventional-gesture.xlsx), [Schematron](../StructureDefinition-taussig-interventional-gesture.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-interventional-gesture",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-interventional-gesture",
  "version" : "0.8.1",
  "name" : "TaussigInterventionalGesture",
  "title" : "TAUSSIG — Geste interventionnel",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Geste interventionnel ciblé (unité de l'effet pre/post). Codé par un concept TAUSSIG (188 concepts, Short List IPCCC du cathétérisme) ; IPCCC, SNOMED (interop), CCAM et ECHSA en sont déduits par ConceptMap ; structure cible en bodySite (SNOMED sites de mesure) ; résultat en outcome ; rang dans le cathétérisme.",
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
      "id" : "Procedure.extension:gestureSequence",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.extension",
      "sliceName" : "gestureSequence",
      "label" : "Rang du geste dans le cathétérisme",
      "short" : "Rang du geste dans le cathétérisme",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/gestureSequence"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.partOf",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.partOf",
      "label" : "Cathétérisme concerné",
      "short" : "Cathétérisme concerné",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-catheterization"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.statusReason",
      "path" : "Procedure.statusReason",
      "label" : "Motif d'échec",
      "short" : "Motif d'échec",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.statusReason.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
        "valueBoolean" : true
      },
      {
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.statusReason.text",
      "label" : "Motif d'échec (texte)",
      "short" : "Motif d'échec (texte)",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.code",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.code",
      "label" : "Geste interventionnel",
      "short" : "Geste interventionnel",
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
      "label" : "Concept TAUSSIG du geste",
      "short" : "Concept TAUSSIG du geste",
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
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "Procedure.code.coding",
      "sliceName" : "ipccc",
      "label" : "Code IPCCC",
      "short" : "Code IPCCC",
      "min" : 0,
      "max" : "1",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-procedure-ipccc"
      }
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
      "id" : "Procedure.reasonReference",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.reasonReference",
      "label" : "Lésion ciblée (diagnostic ou condition)",
      "short" : "Lésion ciblée (diagnostic ou condition)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-cardiac-diagnosis",
        "https://taussig/fhir/StructureDefinition/taussig-cardiac-condition-profile"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.bodySite",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.bodySite",
      "label" : "Structure anatomique ciblée",
      "short" : "Structure anatomique ciblée",
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-sites-mesure"
      }
    },
    {
      "id" : "Procedure.bodySite.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
        "valueBoolean" : true
      },
      {
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.bodySite.text",
      "label" : "Libellé de la structure ciblée",
      "short" : "Libellé de la structure ciblée",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.outcome",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.outcome",
      "label" : "Résultat du geste",
      "short" : "Résultat du geste",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/gesture-result-vs"
      }
    },
    {
      "id" : "Procedure.focalDevice",
      "path" : "Procedure.focalDevice",
      "label" : "Implant posé ou repris",
      "short" : "Implant posé ou repris",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.focalDevice.action",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Procedure.focalDevice.action",
      "label" : "Action sur l'implant (pose, redilatation…)",
      "short" : "Action sur l'implant (pose, redilatation…)",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.focalDevice.manipulated",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.focalDevice.manipulated",
      "label" : "Implant concerné",
      "short" : "Implant concerné",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-cardiac-implant"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.usedReference",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.usedReference",
      "label" : "Matériel utilisé",
      "short" : "Matériel utilisé",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-material-used"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.usedReference.extension:usageSequence",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.usedReference.extension",
      "sliceName" : "usageSequence",
      "label" : "Ordre d'utilisation du matériel",
      "short" : "Ordre d'utilisation du matériel",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/usageSequence"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.usedReference.extension:attemptNumber",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.usedReference.extension",
      "sliceName" : "attemptNumber",
      "label" : "Numéro de tentative",
      "short" : "Numéro de tentative",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/attemptNumber"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.usedReference.extension:attemptResult",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Procedure.usedReference.extension",
      "sliceName" : "attemptResult",
      "label" : "Résultat de la tentative",
      "short" : "Résultat de la tentative",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/attemptResult"]
      }],
      "mustSupport" : true
    }]
  }
}

```
