# TAUSSIG — Patient - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## Profil de ressource: TAUSSIG — Patient 

**Utilisations:**

* Ce/t/te Profil n'est utilisé/e par aucun autre profil dans ce guide d'implémentation

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/taussig.poc|current/StructureDefinition/taussig-patient)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau des éléments clés](#tabs-key) 
*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCorePatientProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-patient.html) 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCorePatientProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-patient.html) 

 **Vue des éléments clés** 

#### Bindings terminologiques

#### Contraintes

 **Vue différentielle** 

Cette structure est dérivée de [FRCorePatientProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-patient.html) 

 **Vue d'ensembleView** 

#### Bindings terminologiques

#### Contraintes

Cette structure est dérivée de [FRCorePatientProfile](https://hl7.fr/ig/fhir/core/2.2.0/StructureDefinition-fr-core-patient.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-taussig-patient.csv), [Excel](../StructureDefinition-taussig-patient.xlsx), [Schematron](../StructureDefinition-taussig-patient.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "taussig-patient",
  "url" : "https://taussig/fhir/StructureDefinition/taussig-patient",
  "version" : "0.6.0",
  "name" : "TaussigPatient",
  "title" : "TAUSSIG — Patient",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Patient de cardiopathie congénitale, dérivé de FR Core Patient (identifiants/extensions FR hérités). Les slices d'identité nationale (INS-NIR/NIA) sont portées par FR Core ; pour une identité INS *qualifiée*, utiliser le profil strict fr-core-patient-ins. Poids de naissance porté par une Observation dédiée (LOINC 8339-4).",
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
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
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
    "identity" : "loinc",
    "uri" : "http://loinc.org",
    "name" : "LOINC code for the element"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Patient",
  "baseDefinition" : "https://hl7.fr/ig/fhir/core/StructureDefinition/fr-core-patient",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Patient",
      "path" : "Patient"
    },
    {
      "id" : "Patient.gender",
      "path" : "Patient.gender",
      "mustSupport" : true
    },
    {
      "id" : "Patient.birthDate",
      "path" : "Patient.birthDate",
      "mustSupport" : true
    },
    {
      "id" : "Patient.deceased[x]",
      "path" : "Patient.deceased[x]",
      "mustSupport" : true
    }]
  }
}

```
