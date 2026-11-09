# TAUSSIG — Matériel utilisé (consommable de geste) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profil de ressource: TAUSSIG — Matériel utilisé (consommable de geste) ( Expérimental ) 

**Utilisations:**

* Référence ce Profil: [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md)
* Exemples pour ce/t/te Profil: [Device/ex-taussig-material-used](Device-ex-taussig-material-used.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-material-used)

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

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-material-used.csv), [Excel](../StructureDefinition-taussig-material-used.xlsx), [Schematron](../StructureDefinition-taussig-material-used.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-material-used",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-material-used",
  "version" : "0.8.1",
  "name" : "TaussigMaterialUsed",
  "title" : "TAUSSIG — Matériel utilisé (consommable de geste)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Matériel consommé pendant un geste (ballon, stent, dispositif, consommable). Catégorie en type ; caractéristiques techniques (diamètre, longueur…) en Device.property (LOINC/UCUM) ; UDI ; séquence/tentative d'usage en extensions sur Procedure.usedReference.",
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
      "label" : "Nom du matériel",
      "short" : "Nom du matériel",
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
      "label" : "Nom du matériel",
      "short" : "Nom du matériel",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName.type",
      "path" : "Device.deviceName.type",
      "patternCode" : "model-name"
    },
    {
      "id" : "Device.modelNumber",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.modelNumber",
      "label" : "Marque / modèle",
      "short" : "Marque / modèle",
      "mustSupport" : true
    },
    {
      "id" : "Device.type",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.type",
      "label" : "Type de matériel",
      "short" : "Type de matériel",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/material-type-vs"
      }
    },
    {
      "id" : "Device.property",
      "path" : "Device.property",
      "label" : "Caractéristique technique (diamètre, longueur…)",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "type"
        }],
        "rules" : "open"
      },
      "short" : "Caractéristique technique (diamètre, longueur…)",
      "mustSupport" : true
    },
    {
      "id" : "Device.property.type",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.property.type",
      "label" : "Nature de la caractéristique (diamètre, longueur…)",
      "short" : "Nature de la caractéristique (diamètre, longueur…)"
    },
    {
      "id" : "Device.property.valueQuantity",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Device.property.valueQuantity",
      "label" : "Valeur de la caractéristique (avec unité)",
      "short" : "Valeur de la caractéristique (avec unité)"
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
