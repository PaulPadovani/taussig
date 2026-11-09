# TAUSSIG — Rôles d'indication - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Rôles d'indication (Expérimental) 

 **References** 

* [Rôle du diagnostic](StructureDefinition-diagnosisRole.md)
* [Rôle de l'indication](StructureDefinition-indicationRole.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "diagnosis-role-vs",
  "url" : "https://taussig/fhir/ValueSet/diagnosis-role-vs",
  "version" : "0.8.1",
  "name" : "DiagnosisRoleVS",
  "title" : "TAUSSIG — Rôles d'indication",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — Rôles d'indication » utilisé par les profils TAUSSIG.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/diagnosis-role"
    }]
  }
}

```
