# TAUSSIG — Mesure clinique (delta pre/post) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

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

#### Contraintes

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [Observation](http://hl7.org/fhir/R4/observation.html) 

#### Bindings terminologiques (différentiel)

#### Contraintes

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
  "version" : "0.8.1",
  "name" : "TaussigClinicalMeasurement",
  "title" : "TAUSSIG — Mesure clinique (delta pre/post)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
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
      "path" : "Observation",
      "constraint" : [{
        "key" : "taussig-meas-1",
        "severity" : "error",
        "human" : "Une valeur codée n'est admise que pour une propriété qualitative (aujourd'hui : regurgitation_grade, cf. propriété value_type du CodeSystem measurement-property).",
        "expression" : "value.ofType(CodeableConcept).exists() implies code.coding.where(system = 'https://taussig/fhir/CodeSystem/measurement-property' and code = 'regurgitation_grade').exists()",
        "source" : "https://taussig/fhir/StructureDefinition/taussig-clinical-measurement"
      },
      {
        "key" : "taussig-meas-2",
        "severity" : "error",
        "human" : "Le grade de régurgitation se renseigne par une valeur codée de la liste taussig-regurgitation-grade.",
        "expression" : "code.coding.where(system = 'https://taussig/fhir/CodeSystem/measurement-property' and code = 'regurgitation_grade').exists() implies (value.empty() or value.ofType(CodeableConcept).memberOf('https://taussig/fhir/ValueSet/taussig-regurgitation-grade'))",
        "source" : "https://taussig/fhir/StructureDefinition/taussig-clinical-measurement"
      }]
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
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.extension",
      "sliceName" : "procedurePhase",
      "label" : "Phase (référence, avant geste, après geste)",
      "short" : "Phase (référence, avant geste, après geste)",
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
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.extension",
      "sliceName" : "measurementCondition",
      "label" : "Condition de mesure (repos, O2, NO…)",
      "short" : "Condition de mesure (repos, O2, NO…)",
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
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.extension",
      "sliceName" : "derivationMethod",
      "label" : "Mesurée ou calculée",
      "short" : "Mesurée ou calculée",
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
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Observation.partOf",
      "label" : "Acte de rattachement (cathétérisme ou geste)",
      "short" : "Acte de rattachement (cathétérisme ou geste)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-catheterization",
        "https://taussig/fhir/StructureDefinition/taussig-interventional-gesture"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.code",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.code",
      "label" : "Grandeur mesurée",
      "short" : "Grandeur mesurée",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-measurement-property"
      }
    },
    {
      "id" : "Observation.code.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
        "valueBoolean" : true
      },
      {
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.code.text",
      "label" : "Libellé de la mesure (tel qu'écrit)",
      "short" : "Libellé de la mesure (tel qu'écrit)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.subject",
      "path" : "Observation.subject",
      "label" : "Patient",
      "short" : "Patient",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.focus",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "Observation.focus",
      "label" : "Implant mesuré (mesure intrastent, trans-valve…)",
      "short" : "Implant mesuré (mesure intrastent, trans-valve…)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-cardiac-implant"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.effective[x]",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.effective[x]",
      "label" : "Moment de la mesure",
      "short" : "Moment de la mesure",
      "type" : [{
        "code" : "dateTime"
      }],
      "mustSupport" : true
    },
    {
      "id" : "Observation.value[x]",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.value[x]",
      "label" : "Résultat (nombre, grade ou texte)",
      "short" : "Résultat (nombre, grade ou texte)",
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
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.bodySite",
      "label" : "Site de mesure",
      "short" : "Site de mesure",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/taussig-sites-mesure"
      }
    },
    {
      "id" : "Observation.bodySite.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
        "valueBoolean" : true
      },
      {
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.bodySite.text",
      "label" : "Précision du site (proximal, distal, intrastent…)",
      "short" : "Précision du site (proximal, distal, intrastent…)",
      "mustSupport" : true
    },
    {
      "id" : "Observation.method",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Observation.method",
      "label" : "Modalité (cathétérisme, échographie…)",
      "short" : "Modalité (cathétérisme, échographie…)",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/measurement-modality-vs"
      }
    }]
  }
}

```
