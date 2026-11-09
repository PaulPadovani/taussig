# TAUSSIG — Liste — Mode d'expansion d'un stent - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Liste — Mode d'expansion d'un stent (Expérimental) 

 **References** 

* [TAUSSIG — Implant cardiaque (substrat longitudinal)](StructureDefinition-taussig-cardiac-implant.md)
* [TAUSSIG — Matériel utilisé (consommable de geste)](StructureDefinition-taussig-material-used.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "stent-expansion-vs",
  "url" : "https://taussig/fhir/ValueSet/stent-expansion-vs",
  "version" : "0.8.1",
  "name" : "StentExpansionVS",
  "title" : "TAUSSIG — Liste — Mode d'expansion d'un stent",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Stent expansible au ballon ou auto-expansible.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/stent-expansion"
    }]
  }
}

```
