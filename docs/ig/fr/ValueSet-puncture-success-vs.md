# TAUSSIG — Succès de la ponction vasculaire - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Succès de la ponction vasculaire (Expérimental) 

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
  "id" : "puncture-success-vs",
  "url" : "https://taussig/fhir/ValueSet/puncture-success-vs",
  "version" : "0.8.1",
  "name" : "PunctureSuccessVS",
  "title" : "TAUSSIG — Succès de la ponction vasculaire",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Ponction réussie ou non réussie (SNOMED CT, qualificatifs de résultat).",
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
        "code" : "385669000",
        "display" : "réussi(e)"
      },
      {
        "code" : "385671000",
        "display" : "non réussi"
      }]
    }]
  }
}

```
