# TAUSSIG — Administration médicamenteuse péri-procédurale - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profil de ressource: TAUSSIG — Administration médicamenteuse péri-procédurale ( Expérimental ) 

**Utilisations:**

* Exemples pour ce/t/te Profil: [MedicationAdministration/ex-taussig-periprocedural-medication-administration](MedicationAdministration-ex-taussig-periprocedural-medication-administration.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-periprocedural-medication-administration)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [MedicationAdministration](http://hl7.org/fhir/R4/medicationadministration.html) 

#### Bindings terminologiques (différentiel)

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [MedicationAdministration](http://hl7.org/fhir/R4/medicationadministration.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [MedicationAdministration](http://hl7.org/fhir/R4/medicationadministration.html) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [MedicationAdministration](http://hl7.org/fhir/R4/medicationadministration.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-periprocedural-medication-administration.csv), [Excel](../StructureDefinition-taussig-periprocedural-medication-administration.xlsx), [Schematron](../StructureDefinition-taussig-periprocedural-medication-administration.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-periprocedural-medication-administration",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-periprocedural-medication-administration",
  "version" : "0.8.1",
  "name" : "TaussigPeriproceduralMedicationAdministration",
  "title" : "TAUSSIG — Administration médicamenteuse péri-procédurale",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Antibioprophylaxie et anticoagulation administrées pendant le cathétérisme, codables en ATC quand disponible.",
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
  },
  {
    "identity" : "w3c.prov",
    "uri" : "http://www.w3.org/ns/prov",
    "name" : "W3C PROV"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "MedicationAdministration",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "MedicationAdministration",
      "path" : "MedicationAdministration"
    },
    {
      "id" : "MedicationAdministration.partOf",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "relation"
      }],
      "path" : "MedicationAdministration.partOf",
      "label" : "Acte concerné",
      "short" : "Acte concerné",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://taussig/fhir/StructureDefinition/taussig-catheterization",
        "https://taussig/fhir/StructureDefinition/taussig-anesthesia-management"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "MedicationAdministration.status",
      "path" : "MedicationAdministration.status",
      "label" : "Statut de l'administration",
      "short" : "Statut de l'administration",
      "mustSupport" : true
    },
    {
      "id" : "MedicationAdministration.category",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "derived"
      }],
      "path" : "MedicationAdministration.category",
      "label" : "Rôle (antibioprophylaxie, anticoagulation)",
      "short" : "Rôle (antibioprophylaxie, anticoagulation)",
      "mustSupport" : true,
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/periprocedural-medication-purpose-vs"
      }
    },
    {
      "id" : "MedicationAdministration.medication[x]",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "MedicationAdministration.medication[x]",
      "label" : "Médicament",
      "short" : "Médicament",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://taussig/fhir/ValueSet/periprocedural-medication-atc-vs"
      }
    },
    {
      "id" : "MedicationAdministration.subject",
      "path" : "MedicationAdministration.subject",
      "label" : "Patient",
      "short" : "Patient",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Patient"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "MedicationAdministration.context",
      "path" : "MedicationAdministration.context",
      "label" : "Séjour",
      "short" : "Séjour",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Encounter"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "MedicationAdministration.effective[x]",
      "path" : "MedicationAdministration.effective[x]",
      "label" : "Date et heure d'administration",
      "short" : "Date et heure d'administration",
      "type" : [{
        "code" : "dateTime"
      }],
      "mustSupport" : true
    },
    {
      "id" : "MedicationAdministration.dosage",
      "path" : "MedicationAdministration.dosage",
      "label" : "Posologie",
      "short" : "Posologie",
      "mustSupport" : true
    },
    {
      "id" : "MedicationAdministration.dosage.dose",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "MedicationAdministration.dosage.dose",
      "label" : "Dose administrée",
      "short" : "Dose administrée",
      "mustSupport" : true
    }]
  }
}

```
