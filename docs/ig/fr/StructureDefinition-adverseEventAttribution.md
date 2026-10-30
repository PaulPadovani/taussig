# Attribution de l'EI - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## Extension: Attribution de l'EI 

**Context of Use**

**Usage info**

**Utilisations:**

* Utilise ce/t/te Extension: [TAUSSIG — Événement indésirable](StructureDefinition-taussig-adverse-event.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/adverseEventAttribution)

### Vues formelles du contenu de l'extension

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

#### Bindings terminologiques (différentiel)

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 **Vue différentielle** 

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensemble** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 

Autres représentations du profil : [CSV](../StructureDefinition-adverseEventAttribution.csv), [Excel](../StructureDefinition-adverseEventAttribution.xlsx), [Schematron](../StructureDefinition-adverseEventAttribution.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "adverseEventAttribution",
  "url" : "https://taussig/fhir/StructureDefinition/adverseEventAttribution",
  "version" : "0.6.0",
  "name" : "AdverseEventAttribution",
  "title" : "Attribution de l'EI",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Cause suspectée d'un événement indésirable (dispositif, abord, anesthésie…).",
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
      "fixedUri" : "https://taussig/fhir/StructureDefinition/adverseEventAttribution"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "type" : [{
        "code" : "Coding"
      }],
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/ae-attribution-vs"
      }
    }]
  }
}

```
