# TAUSSIG — Organisation - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## Profil de ressource: TAUSSIG — Organisation ( Expérimental ) 

**Utilisations:**

* Exemples pour ce/t/te Profil: [Établissement fictif — exemple technique](Organization-ex-taussig-organization.md)

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-organization)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCoreOrganizationEtablissementProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-organization-etablissement.html) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCoreOrganizationEtablissementProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-organization-etablissement.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [FRCoreOrganizationEtablissementProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-organization-etablissement.html) 

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCoreOrganizationEtablissementProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-organization-etablissement.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-organization.csv), [Excel](../StructureDefinition-taussig-organization.xlsx), [Schematron](../StructureDefinition-taussig-organization.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-organization",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-organization",
  "version" : "0.8.0",
  "name" : "TaussigOrganization",
  "title" : "TAUSSIG — Organisation",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Établissement de santé, dérivé de FR Core Organization (établissement). FINESS porté par les slices FR Core idNatSt (urn:oid:1.2.250.1.71.4.2.2) et finess (https://finess.esante.gouv.fr).",
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
  "type" : "Organization",
  "baseDefinition" : "https://hl7.fr/ig/fhir/core/StructureDefinition/fr-core-organization-etablissement",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Organization",
      "path" : "Organization"
    },
    {
      "id" : "Organization.identifier",
      "path" : "Organization.identifier",
      "label" : "Identifiant FINESS (jamais annoté depuis un texte pseudonymisé)",
      "short" : "Identifiant FINESS (jamais annoté depuis un texte pseudonymisé)"
    },
    {
      "id" : "Organization.identifier:finess",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "never_annotated"
      }],
      "path" : "Organization.identifier",
      "sliceName" : "finess"
    },
    {
      "id" : "Organization.name",
      "extension" : [{
        "url" : "https://taussig/fhir/StructureDefinition/annotationClass",
        "valueCode" : "annotatable"
      }],
      "path" : "Organization.name",
      "label" : "Nom de l'établissement",
      "short" : "Nom de l'établissement"
    }]
  }
}

```
