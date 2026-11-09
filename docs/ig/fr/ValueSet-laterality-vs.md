# TAUSSIG — Latéralité (gauche/droite) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Latéralité (gauche/droite) (Expérimental) 

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
  "version" : "0.8.0",
  "name" : "LateralityVS",
  "title" : "TAUSSIG — Latéralité (gauche/droite)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
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
