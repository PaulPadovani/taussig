# TAUSSIG — Classes d'annotation - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Classes d'annotation (Expérimental) 

 **References** 

* [Classe d'annotation](StructureDefinition-annotationClass.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "annotation-class-vs",
  "url" : "https://taussig/fhir/ValueSet/annotation-class-vs",
  "version" : "0.8.0",
  "name" : "AnnotationClassVS",
  "title" : "TAUSSIG — Classes d'annotation",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Les 5 classes d'annotation des éléments de profil.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/annotation-class"
    }]
  }
}

```
