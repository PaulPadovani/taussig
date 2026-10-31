# TAUSSIG — Grade de régurgitation (valeurs codées) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## ValueSet: TAUSSIG — Grade de régurgitation (valeurs codées) (Expérimental) 

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
  "id" : "taussig-regurgitation-grade",
  "url" : "https://taussig/fhir/ValueSet/taussig-regurgitation-grade",
  "version" : "0.1.0",
  "name" : "TaussigRegurgitationGrade",
  "title" : "TAUSSIG — Grade de régurgitation (valeurs codées)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Échelle qualitative de la régurgitation valvulaire, valeur de la propriété de mesure regurgitation_grade (Observation.valueCodeableConcept). Qualifier values SNOMED CT dont l'existence et le libellé FR ont été vérifiés sur le SMT ; le choix de l'échelle reste à valider cliniquement.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "concept" : [{
        "code" : "260405006",
        "display" : "trace"
      },
      {
        "code" : "255604002",
        "display" : "gravité légère"
      },
      {
        "code" : "6736007",
        "display" : "gravité modérée"
      },
      {
        "code" : "24484000",
        "display" : "gravité sévère"
      }]
    }]
  }
}

```
