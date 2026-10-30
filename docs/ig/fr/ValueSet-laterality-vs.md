# TAUSSIG — Latéralité (gauche/droite) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Latéralité (gauche/droite) 

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
  "id" : "laterality-vs",
  "url" : "https://taussig/fhir/ValueSet/laterality-vs",
  "version" : "0.6.0",
  "name" : "LateralityVS",
  "title" : "TAUSSIG — Latéralité (gauche/droite)",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Côté anatomique de l'abord vasculaire (SNOMED CT).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "concept" : [{
        "code" : "7771000",
        "display" : "côté gauche"
      },
      {
        "code" : "24028007",
        "display" : "côté droit"
      }]
    }]
  }
}

```
