# TAUSSIG — Cathétérisme cardiaque (acte pivot) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## Profil de ressource: TAUSSIG — Cathétérisme cardiaque (acte pivot) 

**Utilisations:**

* Ce/t/te Profil n'est utilisé/e par aucun autre profil dans ce guide d'implémentation

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-catheterization)

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

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-catheterization.csv), [Excel](../StructureDefinition-taussig-catheterization.xlsx), [Schematron](../StructureDefinition-taussig-catheterization.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-catheterization",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-catheterization",
  "version" : "0.6.0",
  "name" : "TaussigCatheterization",
  "title" : "TAUSSIG — Cathétérisme cardiaque (acte pivot)",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Acte de cathétérisme. Intention (diagnostique/interventionnel/hybride) en category ; codage SNOMED (interop) + CCAM (administratif FR) + ECHSA (registre). Dosimétrie/anthropométrie portées par Observations liées.",
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
      "id" : "Procedure.extension:contrastUsed",
      "path" : "Procedure.extension",
      "sliceName" : "contrastUsed",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/contrastUsed"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.status",
      "path" : "Procedure.status",
      "mustSupport" : true
    },
    {
      "id" : "Procedure.category",
      "path" : "Procedure.category",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/cath-intent-vs"
      }
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
      "id" : "Procedure.performed[x]",
      "path" : "Procedure.performed[x]",
      "type" : [{
        "code" : "dateTime"
      }],
      "mustSupport" : true
    }]
  }
}

```
