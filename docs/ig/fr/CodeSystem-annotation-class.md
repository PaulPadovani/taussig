# TAUSSIG — Classe d'annotation - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Classe d'annotation (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Classes d'annotation](ValueSet-annotation-class-vs.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "annotation-class",
  "url" : "https://taussig/fhir/CodeSystem/annotation-class",
  "version" : "0.8.1",
  "name" : "AnnotationClassCS",
  "title" : "TAUSSIG — Classe d'annotation",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Rôle d'un élément de profil dans l'annotation de comptes rendus (outil HARVEY), repris de la colonne classe_annotation du dictionnaire.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 5,
  "concept" : [{
    "code" : "annotatable",
    "display" : "Saisissable",
    "definition" : "La valeur peut être lue dans un compte rendu ; l'annotateur la renseigne avec sa preuve ou un état explicite."
  },
  {
    "code" : "relation",
    "display" : "Relation",
    "definition" : "Lien vers une autre fiche, ou attribut porté par ce lien."
  },
  {
    "code" : "derived",
    "display" : "Dérivé",
    "definition" : "Calculé ou déduit d'autres éléments (ConceptMap, période) ; jamais saisi."
  },
  {
    "code" : "never_annotated",
    "display" : "Jamais annoté",
    "definition" : "Identifiant direct ou donnée nominative, absent d'un texte pseudonymisé."
  },
  {
    "code" : "out_of_scope",
    "display" : "Hors annotation",
    "definition" : "Métadonnée de traçabilité ou de gouvernance, jamais écrite dans un compte rendu."
  }]
}

```
