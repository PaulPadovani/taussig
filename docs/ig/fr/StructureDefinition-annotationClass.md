# Classe d'annotation - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Extension: Classe d'annotation (Expérimental) 

**Context of Use**

**Usage info**

**Utilisations:**

* Exemples pour ce/t/te Extension: [TaussigAdverseEvent](StructureDefinition-taussig-adverse-event.md), [TaussigAnesthesiaManagement](StructureDefinition-taussig-anesthesia-management.md), [TaussigBirthWeightObservation](StructureDefinition-taussig-birth-weight-observation.md), [TaussigCardiacCondition](StructureDefinition-taussig-cardiac-condition-profile.md)... Show 17 more, [TaussigCardiacDiagnosis](StructureDefinition-taussig-cardiac-diagnosis.md), [TaussigCardiacImplant](StructureDefinition-taussig-cardiac-implant.md), [TaussigCareEpisode](StructureDefinition-taussig-care-episode.md), [TaussigCathAnthropometryObservation](StructureDefinition-taussig-cath-anthropometry-observation.md), [TaussigCatheterization](StructureDefinition-taussig-catheterization.md), [TaussigClinicalMeasurement](StructureDefinition-taussig-clinical-measurement.md), [TaussigGeneticSyndrome](StructureDefinition-taussig-genetic-syndrome-profile.md), [TaussigImplantUse](StructureDefinition-taussig-implant-use.md), [TaussigInterventionalGesture](StructureDefinition-taussig-interventional-gesture.md), [TaussigMaterialUsed](StructureDefinition-taussig-material-used.md), [TaussigOrganization](StructureDefinition-taussig-organization.md), [TaussigPatient](StructureDefinition-taussig-patient.md), [TaussigPeriproceduralMedicationAdministration](StructureDefinition-taussig-periprocedural-medication-administration.md), [TaussigPractitioner](StructureDefinition-taussig-practitioner.md), [TaussigProcedureExposureObservation](StructureDefinition-taussig-procedure-exposure-observation.md), [TaussigProcedureOutcome](StructureDefinition-taussig-procedure-outcome.md) and [TaussigVascularAccess](StructureDefinition-taussig-vascular-access.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/annotationClass)

### Vues formelles du contenu de l'extension

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

#### Bindings terminologiques (différentiel)

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 **Vue différentielle** 

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensemble** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [Extension](http://hl7.org/fhir/R4/extensibility.html#Extension) 

 

Autres représentations du profil : [CSV](../StructureDefinition-annotationClass.csv), [Excel](../StructureDefinition-annotationClass.xlsx), [Schematron](../StructureDefinition-annotationClass.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "annotationClass",
  "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
  "version" : "0.8.0",
  "name" : "AnnotationClass",
  "title" : "Classe d'annotation",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Rôle de l'élément dans l'annotation de comptes rendus. Posée sur les ElementDefinition des profils TAUSSIG ; générée depuis le dictionnaire (03-ig/build_annotation_classes.py).",
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
    "expression" : "ElementDefinition"
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
      "fixedUri" : "https://taussig/fhir/StructureDefinition/annotationClass"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "short" : "Classe d'annotation",
      "type" : [{
        "code" : "code"
      }],
      "binding" : {
        "strength" : "required",
        "valueSet" : "https://taussig/fhir/ValueSet/annotation-class-vs"
      }
    }]
  }
}

```
