# Acte de survenue de l'EI - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Extension: Acte de survenue de l'EI (Expérimental) 

**Context of Use**

**Usage info**

**Utilisations:**

* Utilise ce/t/te Extension: [TAUSSIG — Événement indésirable](StructureDefinition-taussig-adverse-event.md)
* Exemples pour ce/t/te Extension: [AdverseEvent/ex-taussig-adverse-event](AdverseEvent-ex-taussig-adverse-event.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/adverseEventProcedure)

### Vues formelles du contenu de l'extension

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

#### Contraintes

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 **Vue différentielle** 

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 **Vue d'ensemble** 

#### Contraintes

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 

Autres représentations du profil : [CSV](../StructureDefinition-adverseEventProcedure.csv), [Excel](../StructureDefinition-adverseEventProcedure.xlsx), [Schematron](../StructureDefinition-adverseEventProcedure.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "adverseEventProcedure",
  "url" : "https://taussig/fhir/StructureDefinition/adverseEventProcedure",
  "version" : "0.8.0",
  "name" : "AdverseEventProcedure",
  "title" : "Acte de survenue de l'EI",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Cathétérisme ou geste interventionnel pendant lequel l'événement indésirable est survenu. Contexte de survenue, sans jugement d'imputabilité (porté par l'extension adverseEventAttribution).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "AdverseEvent"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension"
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://taussig/fhir/StructureDefinition/adverseEventProcedure"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "short" : "Acte de survenue de l'EI",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-catheterization",
        "https://taussig/fhir/StructureDefinition/taussig-interventional-gesture"]
      }]
    }]
  }
}

```
