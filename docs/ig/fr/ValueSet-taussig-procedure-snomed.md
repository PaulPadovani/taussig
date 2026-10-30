# TAUSSIG — Procédures (SNOMED CT, interopérabilité) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Procédures (SNOMED CT, interopérabilité) (Expérimental) 

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
  "id" : "taussig-procedure-snomed",
  "url" : "https://taussig/fhir/ValueSet/taussig-procedure-snomed",
  "version" : "0.6.0",
  "name" : "taussig_procedure_snomed",
  "title" : "TAUSSIG — Procédures (SNOMED CT, interopérabilité)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Working set SNOMED CT des gestes de cathétérisme congénital (couche d'interopérabilité FHIR Procedure.code). Résolu sur le SMT depuis les gestes IPCCC retenus. À valider cliniquement.",
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
        "code" : "112811009",
        "display" : "fermeture d'une communication interatriale"
      },
      {
        "code" : "1231783006",
        "display" : "Percutaneous closure of prosthetic cardiac paravalvular leak using device"
      },
      {
        "code" : "1344914001",
        "display" : "Open occlusion of left atrial appendage"
      },
      {
        "code" : "1357782001",
        "display" : "Fluoroscopy guided percutaneous embolization of lymphatic vessel with contrast"
      },
      {
        "code" : "175268008",
        "display" : "embolectomie percutanée de l'artère pulmonaire"
      },
      {
        "code" : "232770003",
        "display" : "dilatation par ballonnet d'une prothèse de valve mitrale"
      },
      {
        "code" : "232810003",
        "display" : "dilatation par ballonnet d'une prothèse de valve tricuspidienne"
      },
      {
        "code" : "232869005",
        "display" : "dilatation par ballonnet d'une prothèse de valve pulmonaire"
      },
      {
        "code" : "232978003",
        "display" : "insertion d'endoprothèse dans une veine pulmonaire"
      },
      {
        "code" : "233003002",
        "display" : "insertion d'endoprothèse dans une voie veineuse systémique"
      },
      {
        "code" : "233043007",
        "display" : "septostomie atriale"
      },
      {
        "code" : "233044001",
        "display" : "septostomie auriculaire par ballonnet par retrait"
      },
      {
        "code" : "233067004",
        "display" : "dilatation par ballonnet de la chambre de chasse du ventricule droit"
      },
      {
        "code" : "233100002",
        "display" : "fermeture transluminale percutanée de communication interventriculaire avec prothèse"
      },
      {
        "code" : "233202003",
        "display" : "dilatation par ballonnet du canal artériel"
      },
      {
        "code" : "233214006",
        "display" : "angioplastie de l'artère pulmonaire"
      },
      {
        "code" : "233215007",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire"
      },
      {
        "code" : "252425004",
        "display" : "électrophysiologie cardiaque"
      },
      {
        "code" : "261562001",
        "display" : "angioplastie au niveau d'une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "276892002",
        "display" : "angioplastie percutanée par ballonnet d'une veine pulmonaire"
      },
      {
        "code" : "276896004",
        "display" : "angioplastie transluminale percutanée par ballonnet de la voie veineuse systémique guidée par radioscopie avec produit de contraste"
      },
      {
        "code" : "308683001",
        "display" : "biopsie transluminale ventriculaire droite après transplantation cardiaque"
      },
      {
        "code" : "308696000",
        "display" : "angioplastie de coarctation"
      },
      {
        "code" : "34945008",
        "display" : "angiocardiographie"
      },
      {
        "code" : "384642005",
        "display" : "valvuloplastie de la valve mitrale"
      },
      {
        "code" : "41817002",
        "display" : "fermeture d'un foramen ovale perméable"
      },
      {
        "code" : "41976001",
        "display" : "cathétérisme cardiaque"
      },
      {
        "code" : "428280004",
        "display" : "insertion d'une endoprothèse dans le canal artériel"
      },
      {
        "code" : "428394001",
        "display" : "péricardiocentèse transluminale percutanée"
      },
      {
        "code" : "432394003",
        "display" : "réparation de la valve mitrale guidée par radioscopie"
      },
      {
        "code" : "442188002",
        "display" : "valvulotomie transluminale percutanée de valve pulmonaire avec valvuloplastie"
      },
      {
        "code" : "448779009",
        "display" : "Occlusion of systemic to pulmonary artery shunt using transluminal embolic device"
      },
      {
        "code" : "448785002",
        "display" : "mise en place d'endoprothèse au site de coarctation aortique"
      },
      {
        "code" : "448949007",
        "display" : "mise en place d'endoprothèse dans une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "449033003",
        "display" : "dilatation par ballonnet d'un conduit cardiaque"
      },
      {
        "code" : "449227002",
        "display" : "dilatation par ballonnet d'une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "449389000",
        "display" : "pose d'une endoprothèse dans un conduit cardiaque"
      },
      {
        "code" : "46897002",
        "display" : "valvuloplastie percutanée par ballonnet de la valve pulmonaire"
      },
      {
        "code" : "61192001",
        "display" : "fermeture d'une fistule ou fenestration aorticopulmonaire"
      },
      {
        "code" : "698642008",
        "display" : "fermeture par voie percutanée du ligament artériel persistant"
      },
      {
        "code" : "707813002",
        "display" : "dilatation transluminale percutanée par ballonnet d'un conduit cardiaque"
      },
      {
        "code" : "707823006",
        "display" : "Percutaneous transluminal embolization for major systemic to pulmonary collateral artery"
      },
      {
        "code" : "708810002",
        "display" : "Endovascular retrieval of foreign body from aorta"
      },
      {
        "code" : "71330003",
        "display" : "réparation d'une fistule artérioveineuse par occlusion"
      },
      {
        "code" : "77166000",
        "display" : "valvuloplastie aortique percutanée par ballonnet"
      },
      {
        "code" : "773996000",
        "display" : "implantation d'une valve aortique transcathéter"
      },
      {
        "code" : "787162002",
        "display" : "implantation d'une prothèse de valve pulmonaire, par voie percutanée"
      }]
    }]
  }
}

```
