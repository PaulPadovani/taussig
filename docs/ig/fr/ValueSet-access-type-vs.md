# TAUSSIG — Types d'abord vasculaire - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Types d'abord vasculaire (Expérimental) 

 **References** 

* [TAUSSIG — Abord vasculaire](StructureDefinition-taussig-vascular-access.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "access-type-vs",
  "url" : "https://taussig/fhir/ValueSet/access-type-vs",
  "version" : "0.8.0",
  "name" : "AccessTypeVS",
  "title" : "TAUSSIG — Types d'abord vasculaire",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — Types d'abord vasculaire » utilisé par les profils TAUSSIG.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/access-type"
    }]
  }
}

```
