# TAUSSIG — Liste des gestes et actes de cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Liste des gestes et actes de cathétérisme (Expérimental) 

 **References** 

* [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md)
* [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-procedure",
  "url" : "https://taussig/fhir/ValueSet/taussig-procedure",
  "version" : "0.8.0",
  "name" : "TaussigProcedureVS",
  "title" : "TAUSSIG — Liste des gestes et actes de cathétérisme",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Les 188 concepts TAUSSIG de gestes et d'actes de cathétérisme.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/taussig-procedure"
    }]
  }
}

```
