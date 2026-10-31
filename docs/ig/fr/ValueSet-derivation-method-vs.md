# TAUSSIG — Dérivation - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## ValueSet: TAUSSIG — Dérivation (Expérimental) 

 **References** 

* [Dérivation de la mesure](StructureDefinition-derivationMethod.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "derivation-method-vs",
  "url" : "https://taussig/fhir/ValueSet/derivation-method-vs",
  "version" : "0.6.1",
  "name" : "DerivationMethodVS",
  "title" : "TAUSSIG — Dérivation",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Jeu de valeurs « TAUSSIG — Dérivation » utilisé par les profils TAUSSIG.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/derivation-method"
    }]
  }
}

```
