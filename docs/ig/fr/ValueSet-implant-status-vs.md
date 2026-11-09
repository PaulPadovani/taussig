# TAUSSIG — États d'implant - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — États d'implant (Expérimental) 

 **References** 

* [État clinique de l'implant](StructureDefinition-implantClinicalStatus.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "implant-status-vs",
  "url" : "https://taussig/fhir/ValueSet/implant-status-vs",
  "version" : "0.8.0",
  "name" : "ImplantStatusVS",
  "title" : "TAUSSIG — États d'implant",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — États d'implant » utilisé par les profils TAUSSIG.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/implant-status"
    }]
  }
}

```
