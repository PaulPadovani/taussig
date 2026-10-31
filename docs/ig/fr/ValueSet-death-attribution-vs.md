# TAUSSIG — Attributions du décès - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## ValueSet: TAUSSIG — Attributions du décès (Expérimental) 

 **References** 

Ce jeu de valeurs n'est pas utilisé ici ; il peut être utilisé autre part (par exemple dans les spécifications et / ou implémentations qui utilisent ce contenu)

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
  "version" : "0.6.1",
  "name" : "DeathAttributionVS",
  "title" : "TAUSSIG — Attributions du décès",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
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
