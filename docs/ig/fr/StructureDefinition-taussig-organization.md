# TAUSSIG — Organisation - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## Profil de ressource: TAUSSIG — Organisation 

**Utilisations:**

* Ce/t/te Profil n'est utilisé/e par aucun autre profil dans ce guide d'implémentation

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
  "version" : "0.6.0",
  "name" : "TaussigOrganization",
  "title" : "TAUSSIG — Organisation",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
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
    }]
  }
}

```
