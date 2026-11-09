# TAUSSIG — Praticien - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profil de ressource: TAUSSIG — Praticien ( Expérimental ) 

**Utilisations:**

* Référence ce Profil: [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md)
* Exemples pour ce/t/te Profil: [Practitioner/ex-taussig-practitioner](Practitioner-ex-taussig-practitioner.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-practitioner)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCorePractitionerProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-practitioner.html) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCorePractitionerProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-practitioner.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [FRCorePractitionerProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-practitioner.html) 

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCorePractitionerProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-practitioner.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-practitioner.csv), [Excel](../StructureDefinition-taussig-practitioner.xlsx), [Schematron](../StructureDefinition-taussig-practitioner.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-practitioner",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-practitioner",
  "version" : "0.8.1",
  "name" : "TaussigPractitioner",
  "title" : "TAUSSIG — Praticien",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Praticien (opérateur, valideur), dérivé de FR Core Practitioner. L'identifiant RPPS est porté par la slice FR Core idNatPs (urn:oid:1.2.250.1.71.4.2.1) — plus besoin de la redéclarer.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
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
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Practitioner",
  "baseDefinition" : "https://hl7.fr/ig/fhir/core/StructureDefinition/fr-core-practitioner",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Practitioner",
      "path" : "Practitioner"
    },
    {
      "id" : "Practitioner.identifier",
      "path" : "Practitioner.identifier",
      "label" : "Identifiant RPPS (jamais annoté depuis un texte pseudonymisé)",
      "short" : "Identifiant RPPS (jamais annoté depuis un texte pseudonymisé)"
    },
    {
      "id" : "Practitioner.identifier:rpps",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "never_annotated"
      }],
      "path" : "Practitioner.identifier",
      "sliceName" : "rpps"
    },
    {
      "id" : "Practitioner.name",
      "path" : "Practitioner.name",
      "label" : "Pseudonyme de l'opérateur",
      "short" : "Pseudonyme de l'opérateur",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Practitioner.name.text",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Practitioner.name.text",
      "label" : "Pseudonyme de l'opérateur (ex. [OPERATEUR_1], jamais de nom réel)",
      "short" : "Pseudonyme de l'opérateur (ex. [OPERATEUR_1], jamais de nom réel)"
    }]
  }
}

```
