# TAUSSIG — Attributions du décès - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Attributions du décès (Expérimental) 

 **References** 

* [TAUSSIG — Résultat global de procédure](StructureDefinition-taussig-procedure-outcome.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "death-attribution-vs",
  "url" : "https://taussig/fhir/ValueSet/death-attribution-vs",
  "version" : "0.8.1",
  "name" : "DeathAttributionVS",
  "title" : "TAUSSIG — Attributions du décès",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — Attributions du décès » utilisé par les profils TAUSSIG.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/death-attribution"
    }]
  }
}

```
