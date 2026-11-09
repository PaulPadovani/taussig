# TAUSSIG — Liste — Caractère urgent du cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Liste — Caractère urgent du cathétérisme (Expérimental) 

 **References** 

* [Caractère urgent du cathétérisme](StructureDefinition-procedureUrgency.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "procedure-urgency-vs",
  "url" : "https://taussig/fhir/ValueSet/procedure-urgency-vs",
  "version" : "0.8.1",
  "name" : "ProcedureUrgencyVS",
  "title" : "TAUSSIG — Liste — Caractère urgent du cathétérisme",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Les 4 niveaux d'urgence du cathétérisme.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/procedure-urgency"
    }]
  }
}

```
