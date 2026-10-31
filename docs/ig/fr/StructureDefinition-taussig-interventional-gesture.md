# TAUSSIG — Geste interventionnel - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Profil de ressource: TAUSSIG — Geste interventionnel ( Expérimental ) 

**Utilisations:**

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
  "version" : "0.6.1",
  "name" : "TaussigInterventionalGesture",
  "title" : "TAUSSIG — Geste interventionnel",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Geste interventionnel ciblé (unité de l'effet pre/post). Quadruple codage IPCCC (pivot) + SNOMED (interop) + CCAM + ECHSA ; structure cible en bodySite (SNOMED sites de mesure) ; résultat en outcome.",
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
      "id" : "Procedure.statusReason",
      "path" : "Procedure.statusReason",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.code",
      "path" : "Procedure.code",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-procedure-snomed"
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
      "id" : "Procedure.code.coding:snomed",
      "path" : "Procedure.code.coding",
      "sliceName" : "snomed",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
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
      "path" : "Procedure.code.coding",
      "sliceName" : "ccam",
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
      "path" : "Procedure.code.coding",
      "sliceName" : "echsa",
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
      "id" : "Procedure.bodySite",
      "path" : "Procedure.bodySite",
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-sites-mesure"
      }
    },
    {
      "id" : "Procedure.bodySite.text",
      "path" : "Procedure.bodySite.text",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.outcome",
      "path" : "Procedure.outcome",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/gesture-result-vs"
      }
    }]
  }
}

```
