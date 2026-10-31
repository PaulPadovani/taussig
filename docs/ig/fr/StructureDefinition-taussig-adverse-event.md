# TAUSSIG — Événement indésirable - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Profil de ressource: TAUSSIG — Événement indésirable ( Expérimental ) 

**Utilisations:**

* Exemples pour ce/t/te Profil: [AdverseEvent/ex-taussig-adverse-event](AdverseEvent-ex-taussig-adverse-event.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-adverse-event)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [AdverseEvent](http://hl7.org/fhir/R4/adverseevent.html) 

#### Bindings terminologiques (différentiel)

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [AdverseEvent](http://hl7.org/fhir/R4/adverseevent.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [AdverseEvent](http://hl7.org/fhir/R4/adverseevent.html) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [AdverseEvent](http://hl7.org/fhir/R4/adverseevent.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-adverse-event.csv), [Excel](../StructureDefinition-taussig-adverse-event.xlsx), [Schematron](../StructureDefinition-taussig-adverse-event.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-adverse-event",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-adverse-event",
  "version" : "0.6.1",
  "name" : "TaussigAdverseEvent",
  "title" : "TAUSSIG — Événement indésirable",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Complication péri-procédurale. Codage SNOMED (event) + IPCCC/CIM-10/ECHSA en codings parallèles ; gravité 1-5 selon échelle validée (extensions) ; attribution & prise en charge en extensions (réalisation R4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "AdverseEvent",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/AdverseEvent",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "AdverseEvent",
      "path" : "AdverseEvent"
    },
    {
      "id" : "AdverseEvent.extension",
      "path" : "AdverseEvent.extension",
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
      "id" : "AdverseEvent.extension:severityScale",
      "path" : "AdverseEvent.extension",
      "sliceName" : "severityScale",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/severityScale"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "AdverseEvent.extension:severityLevel",
      "path" : "AdverseEvent.extension",
      "sliceName" : "severityLevel",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/severityLevel"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "AdverseEvent.extension:attribution",
      "path" : "AdverseEvent.extension",
      "sliceName" : "attribution",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/adverseEventAttribution"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "AdverseEvent.extension:management",
      "path" : "AdverseEvent.extension",
      "sliceName" : "management",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/adverseEventManagement"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "AdverseEvent.actuality",
      "path" : "AdverseEvent.actuality",
      "mustSupport" : true
    },
    {
      "id" : "AdverseEvent.event",
      "path" : "AdverseEvent.event",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-adverse-event-snomed"
      }
    },
    {
      "id" : "AdverseEvent.event.coding",
      "path" : "AdverseEvent.event.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "system"
        }],
        "rules" : "open"
      }
    },
    {
      "id" : "AdverseEvent.event.coding:snomed",
      "path" : "AdverseEvent.event.coding",
      "sliceName" : "snomed",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "AdverseEvent.event.coding:snomed.system",
      "path" : "AdverseEvent.event.coding.system",
      "min" : 1,
      "patternUri" : "http://snomed.info/sct"
    },
    {
      "id" : "AdverseEvent.event.coding:ipccc",
      "path" : "AdverseEvent.event.coding",
      "sliceName" : "ipccc",
      "min" : 0,
      "max" : "1",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-adverse-event-ipccc"
      }
    },
    {
      "id" : "AdverseEvent.event.coding:ipccc.system",
      "path" : "AdverseEvent.event.coding.system",
      "min" : 1,
      "patternUri" : "https://taussig/fhir/CodeSystem/ipccc"
    },
    {
      "id" : "AdverseEvent.event.coding:icd10",
      "path" : "AdverseEvent.event.coding",
      "sliceName" : "icd10",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "AdverseEvent.event.coding:icd10.system",
      "path" : "AdverseEvent.event.coding.system",
      "min" : 1,
      "patternUri" : "http://hl7.org/fhir/sid/icd-10"
    },
    {
      "id" : "AdverseEvent.event.coding:echsa",
      "path" : "AdverseEvent.event.coding",
      "sliceName" : "echsa",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "AdverseEvent.event.coding:echsa.system",
      "path" : "AdverseEvent.event.coding.system",
      "min" : 1,
      "patternUri" : "https://taussig/fhir/CodeSystem/echsa"
    },
    {
      "id" : "AdverseEvent.outcome",
      "path" : "AdverseEvent.outcome",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://hl7.org/fhir/ValueSet/adverse-event-outcome"
      }
    }]
  }
}

```
