# TAUSSIG — Abord vasculaire - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Profil de ressource: TAUSSIG — Abord vasculaire ( Expérimental ) 

**Utilisations:**

* Exemples pour ce/t/te Profil: [Procedure/ex-taussig-vascular-access](Procedure-ex-taussig-vascular-access.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-vascular-access)

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

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-vascular-access.csv), [Excel](../StructureDefinition-taussig-vascular-access.xlsx), [Schematron](../StructureDefinition-taussig-vascular-access.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-vascular-access",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-vascular-access",
  "version" : "0.6.1",
  "name" : "TaussigVascularAccess",
  "title" : "TAUSSIG — Abord vasculaire",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Abord vasculaire du cathétérisme. Voie d'abord (enum TAUSSIG) en code ; calibre d'introducteur, écho-guidage et latéralité en extensions/bodySite.",
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
      "id" : "Procedure.extension:introducerSize",
      "path" : "Procedure.extension",
      "sliceName" : "introducerSize",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/introducerSize"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.extension:echoGuided",
      "path" : "Procedure.extension",
      "sliceName" : "echoGuided",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/echoGuided"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Procedure.code",
      "path" : "Procedure.code",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/access-type-vs"
      }
    },
    {
      "id" : "Procedure.bodySite",
      "path" : "Procedure.bodySite",
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/laterality-vs"
      }
    },
    {
      "id" : "Procedure.outcome",
      "path" : "Procedure.outcome",
      "mustSupport" : true
    }]
  }
}

```
