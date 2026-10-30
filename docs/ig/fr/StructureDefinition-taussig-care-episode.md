# TAUSSIG — Épisode de soins - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## Profil de ressource: TAUSSIG — Épisode de soins 

**Utilisations:**

* Ce/t/te Profil n'est utilisé/e par aucun autre profil dans ce guide d'implémentation

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-care-episode)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCoreEncounterProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-encounter.html) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCoreEncounterProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-encounter.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [FRCoreEncounterProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-encounter.html) 

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCoreEncounterProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-encounter.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-care-episode.csv), [Excel](../StructureDefinition-taussig-care-episode.xlsx), [Schematron](../StructureDefinition-taussig-care-episode.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-care-episode",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-care-episode",
  "version" : "0.6.0",
  "name" : "TaussigCareEpisode",
  "title" : "TAUSSIG — Épisode de soins",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Épisode de soins (hospitalisation ou ambulatoire) englobant le cathétérisme, dérivé de FR Core Encounter.",
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
  "type" : "Encounter",
  "baseDefinition" : "https://hl7.fr/ig/fhir/core/StructureDefinition/fr-core-encounter",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Encounter",
      "path" : "Encounter"
    },
    {
      "id" : "Encounter.class",
      "path" : "Encounter.class",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.period",
      "path" : "Encounter.period",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.period.start",
      "path" : "Encounter.period.start",
      "mustSupport" : true
    },
    {
      "id" : "Encounter.period.end",
      "path" : "Encounter.period.end",
      "mustSupport" : true
    }]
  }
}

```
