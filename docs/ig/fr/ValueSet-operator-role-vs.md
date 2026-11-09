# TAUSSIG — Liste — Rôles de l'opérateur - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Liste — Rôles de l'opérateur (Expérimental) 

 **References** 

* [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "operator-role-vs",
  "url" : "https://taussig/fhir/ValueSet/operator-role-vs",
  "version" : "0.8.0",
  "name" : "OperatorRoleVS",
  "title" : "TAUSSIG — Liste — Rôles de l'opérateur",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Rôles d'un praticien dans la réalisation du cathétérisme.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/operator-role"
    }]
  }
}

```
