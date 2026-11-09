# TAUSSIG — Types d’anesthésie - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Types d’anesthésie (Expérimental) 

 **References** 

* [TAUSSIG — Gestion anesthésique](StructureDefinition-taussig-anesthesia-management.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "anesthesia-type-vs",
  "url" : "https://taussig/fhir/ValueSet/anesthesia-type-vs",
  "version" : "0.8.0",
  "name" : "TaussigAnesthesiaTypeVS",
  "title" : "TAUSSIG — Types d’anesthésie",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Quatre catégories du modèle : anesthésie générale, sédation et anesthésie locale en SNOMED CT, et aucune anesthésie explicite en code TAUSSIG. Sans distinction du niveau de sédation ni des techniques locorégionales.",
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
        "code" : "50697003",
        "display" : "administration d'un anesthésique général"
      },
      {
        "code" : "72641008",
        "display" : "sédation"
      },
      {
        "code" : "386761002",
        "display" : "anesthésie locale"
      }]
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/anesthesia-type",
      "concept" : [{
        "code" : "none",
        "display" : "Aucune anesthésie"
      }]
    }]
  }
}

```
