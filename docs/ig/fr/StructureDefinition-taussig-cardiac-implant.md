# TAUSSIG — Implant cardiaque (substrat longitudinal) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profil de ressource: TAUSSIG — Implant cardiaque (substrat longitudinal) ( Expérimental ) 

**Utilisations:**

* Référence ce Profil: [Implant précédent](StructureDefinition-previousImplant.md), [TAUSSIG — Mesure clinique (delta pre/post)](StructureDefinition-taussig-clinical-measurement.md), [TAUSSIG — Pose et port d'un implant](StructureDefinition-taussig-implant-use.md) and [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md)
* Exemples pour ce/t/te Profil: [Device/ex-prior-implant](Device-ex-prior-implant.md) and [Device/ex-taussig-cardiac-implant](Device-ex-taussig-cardiac-implant.md)

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
  "version" : "0.8.1",
  "name" : "TaussigCardiacImplant",
  "title" : "TAUSSIG — Implant cardiaque (substrat longitudinal)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
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
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.extension",
      "sliceName" : "implantClinicalStatus",
      "label" : "État clinique de l'implant",
      "short" : "État clinique de l'implant",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/implantClinicalStatus"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Device.extension:implantStatusDate",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.extension",
      "sliceName" : "implantStatusDate",
      "label" : "Date de l'état de l'implant",
      "short" : "Date de l'état de l'implant",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/implantStatusDate"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Device.extension:previousImplant",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Device.extension",
      "sliceName" : "previousImplant",
      "label" : "Implant précédent (valve-in-valve, stent-in-stent)",
      "short" : "Implant précédent (valve-in-valve, stent-in-stent)",
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
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.extension",
      "sliceName" : "implantedExternally",
      "label" : "Posé ailleurs (chirurgie, autre centre)",
      "short" : "Posé ailleurs (chirurgie, autre centre)",
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
      "label" : "UDI",
      "short" : "UDI",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.udiCarrier.carrierHRF",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.udiCarrier.carrierHRF",
      "label" : "UDI (forme lisible)",
      "short" : "UDI (forme lisible)",
      "mustSupport" : true
    },
    {
      "id" : "Device.status",
      "path" : "Device.status",
      "label" : "Statut de la fiche dispositif (actif, inactif)",
      "short" : "Statut de la fiche dispositif (actif, inactif)",
      "mustSupport" : true
    },
    {
      "id" : "Device.manufacturer",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.manufacturer",
      "label" : "Fabricant",
      "short" : "Fabricant",
      "mustSupport" : true
    },
    {
      "id" : "Device.lotNumber",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.lotNumber",
      "label" : "Numéro de lot",
      "short" : "Numéro de lot",
      "mustSupport" : true
    },
    {
      "id" : "Device.serialNumber",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.serialNumber",
      "label" : "Numéro de série",
      "short" : "Numéro de série",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName",
      "path" : "Device.deviceName",
      "label" : "Nom du dispositif",
      "short" : "Nom du dispositif",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName.name",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.deviceName.name",
      "label" : "Marque / modèle",
      "short" : "Marque / modèle",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName.type",
      "path" : "Device.deviceName.type",
      "label" : "Type de nom (model-name recommandé pour marque / modèle)",
      "short" : "Type de nom (model-name recommandé pour marque / modèle)",
      "mustSupport" : true
    },
    {
      "id" : "Device.type",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.type",
      "label" : "Type d'implant",
      "short" : "Type d'implant",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/implant-device-type-vs"
      }
    },
    {
      "id" : "Device.property",
      "path" : "Device.property",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "type"
        }],
        "rules" : "open"
      },
      "mustSupport" : true
    },
    {
      "id" : "Device.property:covering",
      "path" : "Device.property",
      "sliceName" : "covering",
      "label" : "Couverture du stent",
      "short" : "Couverture du stent",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.property:covering.type",
      "path" : "Device.property.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://taussig/fhir/CodeSystem/device-property",
          "code" : "covering"
        }]
      }
    },
    {
      "id" : "Device.property:covering.valueCode",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.property.valueCode",
      "label" : "Couverture du stent (nu ou couvert)",
      "short" : "Couverture du stent (nu ou couvert)",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/stent-covering-vs"
      }
    },
    {
      "id" : "Device.property:expansionMode",
      "path" : "Device.property",
      "sliceName" : "expansionMode",
      "label" : "Mode d'expansion du stent",
      "short" : "Mode d'expansion du stent",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.property:expansionMode.type",
      "path" : "Device.property.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://taussig/fhir/CodeSystem/device-property",
          "code" : "expansion_mode"
        }]
      }
    },
    {
      "id" : "Device.property:expansionMode.valueCode",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.property.valueCode",
      "label" : "Mode d'expansion (ballon ou auto-expansible)",
      "short" : "Mode d'expansion (ballon ou auto-expansible)",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/stent-expansion-vs"
      }
    },
    {
      "id" : "Device.property:coating",
      "path" : "Device.property",
      "sliceName" : "coating",
      "label" : "Revêtement actif du stent",
      "short" : "Revêtement actif du stent",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.property:coating.type",
      "path" : "Device.property.type",
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://taussig/fhir/CodeSystem/device-property",
          "code" : "coating"
        }]
      }
    },
    {
      "id" : "Device.property:coating.valueCode",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.property.valueCode",
      "label" : "Revêtement (actif ou non)",
      "short" : "Revêtement (actif ou non)",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/stent-coating-vs"
      }
    }]
  }
}

```
