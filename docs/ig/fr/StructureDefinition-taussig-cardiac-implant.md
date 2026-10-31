# TAUSSIG — Implant cardiaque (substrat longitudinal) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Profil de ressource: TAUSSIG — Implant cardiaque (substrat longitudinal) ( Expérimental ) 

**Utilisations:**

* Exemples pour ce/t/te Profil: [Device/ex-taussig-cardiac-implant](Device-ex-taussig-cardiac-implant.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-cardiac-implant)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Device](http://hl7.org/fhir/R4/device.html) 

#### Bindings terminologiques (différentiel)

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Device](http://hl7.org/fhir/R4/device.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [Device](http://hl7.org/fhir/R4/device.html) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Device](http://hl7.org/fhir/R4/device.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-cardiac-implant.csv), [Excel](../StructureDefinition-taussig-cardiac-implant.xlsx), [Schematron](../StructureDefinition-taussig-cardiac-implant.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-cardiac-implant",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-cardiac-implant",
  "version" : "0.6.1",
  "name" : "TaussigCardiacImplant",
  "title" : "TAUSSIG — Implant cardiaque (substrat longitudinal)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Dispositif implanté persistant (conduit, valve, stent, occluder…). État clinique courant en extension (Device.status ne couvre pas functional/degenerated/…) ; chaînage valve-in-valve ; site anatomique SNOMED ; UDI.",
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
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "udi",
    "uri" : "http://fda.gov/UDI",
    "name" : "UDI Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Device",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Device",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Device",
      "path" : "Device"
    },
    {
      "id" : "Device.extension",
      "path" : "Device.extension",
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
      "id" : "Device.extension:implantClinicalStatus",
      "path" : "Device.extension",
      "sliceName" : "implantClinicalStatus",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/implantClinicalStatus"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Device.extension:previousImplant",
      "path" : "Device.extension",
      "sliceName" : "previousImplant",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/previousImplant"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Device.extension:implantedExternally",
      "path" : "Device.extension",
      "sliceName" : "implantedExternally",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/implantedExternally"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Device.udiCarrier",
      "path" : "Device.udiCarrier",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.status",
      "path" : "Device.status",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName",
      "path" : "Device.deviceName",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.type",
      "path" : "Device.type",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/implant-device-type-vs"
      }
    }]
  }
}

```
