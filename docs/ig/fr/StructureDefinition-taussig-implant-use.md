# TAUSSIG — Pose et port d'un implant - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profil de ressource: TAUSSIG — Pose et port d'un implant ( Expérimental ) 

**Utilisations:**

* Exemples pour ce/t/te Profil: [DeviceUseStatement/ex-taussig-implant-use](DeviceUseStatement-ex-taussig-implant-use.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-implant-use)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [DeviceUseStatement](http://hl7.org/fhir/R4/deviceusestatement.html) 

#### Bindings terminologiques (différentiel)

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [DeviceUseStatement](http://hl7.org/fhir/R4/deviceusestatement.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [DeviceUseStatement](http://hl7.org/fhir/R4/deviceusestatement.html) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [DeviceUseStatement](http://hl7.org/fhir/R4/deviceusestatement.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-implant-use.csv), [Excel](../StructureDefinition-taussig-implant-use.xlsx), [Schematron](../StructureDefinition-taussig-implant-use.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-implant-use",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-implant-use",
  "version" : "0.8.1",
  "name" : "TaussigImplantUse",
  "title" : "TAUSSIG — Pose et port d'un implant",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Implant porté par le patient : site anatomique d'implantation, date de pose (début de la période de port) et geste TAUSSIG qui l'a posé, quand il est tracé. Pour un implant posé ailleurs (implantedExternally), le geste source est absent.",
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
    "identity" : "quick",
    "uri" : "http://siframework.org/cqf",
    "name" : "Quality Improvement and Clinical Knowledge (QUICK)"
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
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DeviceUseStatement",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/DeviceUseStatement",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DeviceUseStatement",
      "path" : "DeviceUseStatement"
    },
    {
      "id" : "DeviceUseStatement.status",
      "path" : "DeviceUseStatement.status",
      "label" : "Statut (en place, retiré…)",
      "short" : "Statut (en place, retiré…)",
      "mustSupport" : true
    },
    {
      "id" : "DeviceUseStatement.subject",
      "path" : "DeviceUseStatement.subject",
      "label" : "Patient",
      "short" : "Patient",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DeviceUseStatement.derivedFrom",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "DeviceUseStatement.derivedFrom",
      "label" : "Geste de pose (TAUSSIG)",
      "short" : "Geste de pose (TAUSSIG)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-interventional-gesture"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DeviceUseStatement.timing[x]",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "DeviceUseStatement.timing[x]",
      "label" : "Période de port",
      "short" : "Période de port",
      "type" : [{
        "code" : "Period"
      }],
      "mustSupport" : true
    },
    {
      "id" : "DeviceUseStatement.timing[x].start",
      "path" : "DeviceUseStatement.timing[x].start",
      "label" : "Date d'implantation",
      "short" : "Date d'implantation",
      "mustSupport" : true
    },
    {
      "id" : "DeviceUseStatement.timing[x].end",
      "path" : "DeviceUseStatement.timing[x].end",
      "label" : "Date de retrait",
      "short" : "Date de retrait",
      "mustSupport" : true
    },
    {
      "id" : "DeviceUseStatement.device",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "DeviceUseStatement.device",
      "label" : "Implant",
      "short" : "Implant",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-cardiac-implant"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "DeviceUseStatement.bodySite",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "DeviceUseStatement.bodySite",
      "label" : "Site anatomique d'implantation",
      "short" : "Site anatomique d'implantation",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-sites-mesure"
      }
    },
    {
      "id" : "DeviceUseStatement.bodySite.text",
      "path" : "DeviceUseStatement.bodySite.text",
      "label" : "Libellé du site",
      "short" : "Libellé du site",
      "mustSupport" : true
    }]
  }
}

```
