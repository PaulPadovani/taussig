# TAUSSIG — Mesure clinique (delta pre/post) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Profil de ressource: TAUSSIG — Mesure clinique (delta pre/post) ( Expérimental ) 

**Utilisations:**

* Exemples pour ce/t/te Profil: [Observation/ex-taussig-clinical-measurement](Observation-ex-taussig-clinical-measurement.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-clinical-measurement)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

#### Bindings terminologiques (différentiel)

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-clinical-measurement.csv), [Excel](../StructureDefinition-taussig-clinical-measurement.xlsx), [Schematron](../StructureDefinition-taussig-clinical-measurement.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-clinical-measurement",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-clinical-measurement",
  "version" : "0.6.1",
  "name" : "TaussigClinicalMeasurement",
  "title" : "TAUSSIG — Mesure clinique (delta pre/post)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Mesure hémodynamique/fonctionnelle. Modèle post-coordonné : propriété (CodeSystem TAUSSIG) = la grandeur, site SNOMED = le lieu. Phase procédurale + geste lié = mécanisme du gradient pre/post (cœur du POC). Modalité en method ; condition & dérivation en extensions.\n\nVALEUR ATTENDUE : elle dépend de la propriété, pas du profil. Chaque concept du CodeSystem measurement-property porte une propriété `value_type` (Quantity | CodeableConcept) et, pour les grandeurs qualitatives, une propriété `value_set` donnant le ValueSet canonique des valeurs admises — p. ex. `regurgitation_grade` -> https://taussig/fhir/ValueSet/taussig-regurgitation-grade (grades SNOMED trace / légère / modérée / sévère). Ce contrat est déclaré au niveau de la propriété et non par un binding FHIR sur `value[x]` : en R4, un binding sur ce choix s'appliquerait aussi aux Quantity et imposerait à toutes les propriétés le jeu de valeurs d'une seule d'entre elles.",
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
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
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
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Observation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Observation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation"
    },
    {
      "id" : "Observation.extension",
      "path" : "Observation.extension",
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
      "id" : "Observation.extension:procedurePhase",
      "path" : "Observation.extension",
      "sliceName" : "procedurePhase",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/procedurePhase"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:measurementCondition",
      "path" : "Observation.extension",
      "sliceName" : "measurementCondition",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/measurementCondition"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.extension:derivationMethod",
      "path" : "Observation.extension",
      "sliceName" : "derivationMethod",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://taussig/fhir/StructureDefinition/derivationMethod"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.partOf",
      "path" : "Observation.partOf",
      "mustSupport" : true
    },
    {
      "id" : "Observation.code",
      "path" : "Observation.code",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-measurement-property"
      }
    },
    {
      "id" : "Observation.code.text",
      "path" : "Observation.code.text",
      "mustSupport" : true
    },
    {
      "id" : "Observation.effective[x]",
      "path" : "Observation.effective[x]",
      "type" : [{
        "code" : "dateTime"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]",
      "path" : "Observation.value[x]",
      "type" : [{
        "code" : "Quantity"
      },
      {
        "code" : "CodeableConcept"
      },
      {
        "code" : "string"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.bodySite",
      "path" : "Observation.bodySite",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-sites-mesure"
      }
    },
    {
      "id" : "Observation.method",
      "path" : "Observation.method",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/measurement-modality-vs"
      }
    }]
  }
}

```
