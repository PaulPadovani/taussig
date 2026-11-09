# Période en salle de cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Extension: Période en salle de cathétérisme (Expérimental) 

**Context of Use**

**Usage info**

**Utilisations:**

* Utilise ce/t/te Extension: [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md)
* Exemples pour ce/t/te Extension: [Procedure/ex-taussig-catheterization](Procedure-ex-taussig-catheterization.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/procedureRoomPeriod)

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

 

Autres représentations du profil : [CSV](../StructureDefinition-procedureRoomPeriod.csv), [Excel](../StructureDefinition-procedureRoomPeriod.xlsx), [Schematron](../StructureDefinition-procedureRoomPeriod.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "procedureRoomPeriod",
  "url" : "https://taussig/fhir/StructureDefinition/procedureRoomPeriod",
  "version" : "0.8.0",
  "name" : "ProcedureRoomPeriod",
  "title" : "Période en salle de cathétérisme",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Entrée et sortie de salle ; la période peau-à-peau est dans Procedure.performedPeriod (décision I2).",
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
    "expression" : "Procedure"
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
      "fixedUri" : "https://taussig/fhir/StructureDefinition/procedureRoomPeriod"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "short" : "Entrée et sortie de salle",
      "type" : [{
        "code" : "Period"
      }]
    }]
  }
}

```
