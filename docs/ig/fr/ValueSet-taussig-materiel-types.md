# TAUSSIG — Types de dispositifs interventionnels - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## ValueSet: TAUSSIG — Types de dispositifs interventionnels (Expérimental) 

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
  "id" : "taussig-materiel-types",
  "url" : "https://taussig/fhir/ValueSet/taussig-materiel-types",
  "version" : "0.1.0",
  "name" : "TaussigMaterielTypes",
  "title" : "TAUSSIG — Types de dispositifs interventionnels",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Working set de matériel ; catégories de fermeture distinguées par cible selon la décision clinique du 30 octobre 2026. Les catégories fines de fermeture utilisent des codes TAUSSIG locaux.",
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
        "code" : "705924003",
        "display" : "Cardiac balloon catheter"
      },
      {
        "code" : "65818007",
        "display" : "endoprothèse"
      },
      {
        "code" : "19923001",
        "display" : "cathéter"
      },
      {
        "code" : "102317008",
        "display" : "Guiding catheter"
      },
      {
        "code" : "1137638009",
        "display" : "Cardiac catheter guidewire"
      },
      {
        "code" : "467764008",
        "display" : "Catheter introducer"
      },
      {
        "code" : "25005004",
        "display" : "anse"
      },
      {
        "code" : "860585001",
        "display" : "Transcatheter pulmonary valve bioprosthesis"
      },
      {
        "code" : "1362137001",
        "display" : "Aortic transcatheter heart valve bioprosthesis, stent framework"
      },
      {
        "code" : "1141607002",
        "display" : "Transcatheter biologic tricuspid valve prosthesis"
      }]
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/closure-device-type",
      "concept" : [{
        "code" : "TAUSSIG-OCCLUDER-CIA",
        "display" : "Dispositif de fermeture de CIA"
      },
      {
        "code" : "TAUSSIG-OCCLUDER-CIV",
        "display" : "Dispositif de fermeture de CIV"
      },
      {
        "code" : "TAUSSIG-OCCLUDER-CANAL",
        "display" : "Dispositif de fermeture de canal artériel"
      },
      {
        "code" : "TAUSSIG-OCCLUDER-VASCULAR",
        "display" : "Dispositif de fermeture d’un autre vaisseau"
      },
      {
        "code" : "TAUSSIG-OCCLUDER-FOP",
        "display" : "Dispositif de fermeture de FOP"
      }]
    }]
  }
}

```
