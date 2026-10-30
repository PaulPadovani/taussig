# TAUSSIG — Gestes de cathétérisme (IPCCC) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — Gestes de cathétérisme (IPCCC) (Expérimental) 

 **References** 

* [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-procedure-ipccc",
  "url" : "https://taussig/fhir/ValueSet/taussig-procedure-ipccc",
  "version" : "0.6.0",
  "name" : "TaussigProcedureIpccc",
  "title" : "TAUSSIG — Gestes de cathétérisme (IPCCC)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Axe IPCCC des gestes de cathétérisme congénital retenus pour la POC (gestes diagnostiques, interventionnels et hybrides). Remplace, pour l'autocomplétion, la liaison à la short list IPCCC de 1 822 codes, inexploitable comme menu.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/ipccc",
      "concept" : [{
        "code" : "13.05.05",
        "display" : "angiocardiographie"
      },
      {
        "code" : "13.05.07",
        "display" : "cathétérisme cardiaque"
      },
      {
        "code" : "13.05.06",
        "display" : "cathétérisme cardiaque"
      },
      {
        "code" : "13.05.12",
        "display" : "électrophysiologie cardiaque"
      },
      {
        "code" : "12.45.04",
        "display" : "Extraction endovasculaire de corps étranger de l'aorte"
      },
      {
        "code" : "12.00.21",
        "display" : "angioplastie percutanée par ballonnet d'une veine pulmonaire"
      },
      {
        "code" : "12.00.22",
        "display" : "insertion d'endoprothèse dans une veine pulmonaire"
      },
      {
        "code" : "12.00.43",
        "display" : "angioplastie percutanée par ballonnet d'une voie veineuse systémique"
      },
      {
        "code" : "12.00.44",
        "display" : "insertion d'endoprothèse dans une voie veineuse systémique"
      },
      {
        "code" : "12.00.36",
        "display" : "Pose de stent dans la veine cave supérieure"
      },
      {
        "code" : "12.01.41",
        "display" : "septostomie auriculaire par ballonnet par retrait"
      },
      {
        "code" : "12.01.47",
        "display" : "septostomie atriale"
      },
      {
        "code" : "12.01.06",
        "display" : "fermeture d'une communication interatriale"
      },
      {
        "code" : "12.01.07",
        "display" : "fermeture d'un foramen ovale perméable"
      },
      {
        "code" : "12.38.25",
        "display" : "Occlusion de l'auricule gauche"
      },
      {
        "code" : "12.01.88",
        "display" : "Fermeture percutanée d'une CIA sinus venosus par stent couvert"
      },
      {
        "code" : "12.02.98",
        "display" : "Remplacement valvulaire tricuspide par voie transluminale"
      },
      {
        "code" : "12.02.99",
        "display" : "Valve-in-valve tricuspide transluminale (dans une prothèse)"
      },
      {
        "code" : "12.02.12",
        "display" : "dilatation par ballonnet d'une prothèse de valve tricuspidienne"
      },
      {
        "code" : "12.03.10",
        "display" : "valvuloplastie de la valve mitrale"
      },
      {
        "code" : "12.03.12",
        "display" : "dilatation par ballonnet d'une prothèse de valve mitrale"
      },
      {
        "code" : "12.45.19",
        "display" : "Fermeture percutanée d'une fuite paravalvulaire de prothèse cardiaque par dispositif"
      },
      {
        "code" : "12.03.97",
        "display" : "réparation de la valve mitrale guidée par radioscopie"
      },
      {
        "code" : "12.03.98",
        "display" : "Remplacement valvulaire mitral par voie transluminale"
      },
      {
        "code" : "12.04.90",
        "display" : "Valve-in-valve mitrale transluminale (dans une prothèse)"
      },
      {
        "code" : "12.04.91",
        "display" : "Valve-in-valve mitrale transcathéter par voie transapicale"
      },
      {
        "code" : "12.06.25",
        "display" : "biopsie transluminale ventriculaire droite après transplantation cardiaque"
      },
      {
        "code" : "12.06.05",
        "display" : "dilatation par ballonnet de la chambre de chasse du ventricule droit"
      },
      {
        "code" : "12.06.18",
        "display" : "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée"
      },
      {
        "code" : "12.06.95",
        "display" : "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée"
      },
      {
        "code" : "12.08.07",
        "display" : "fermeture transluminale percutanée de communication interventriculaire avec prothèse"
      },
      {
        "code" : "12.13.05",
        "display" : "valvuloplastie percutanée par ballonnet de la valve pulmonaire"
      },
      {
        "code" : "12.13.09",
        "display" : "valvulotomie transluminale percutanée de valve pulmonaire avec valvuloplastie"
      },
      {
        "code" : "12.13.06",
        "display" : "dilatation par ballonnet d'une prothèse de valve pulmonaire"
      },
      {
        "code" : "12.16.05",
        "display" : "valvuloplastie aortique percutanée par ballonnet"
      },
      {
        "code" : "12.13.51",
        "display" : "implantation d'une prothèse de valve pulmonaire, par voie percutanée"
      },
      {
        "code" : "12.13.87",
        "display" : "implantation d'une prothèse de valve pulmonaire, par voie percutanée"
      },
      {
        "code" : "12.13.52",
        "display" : "implantation d'une prothèse de valve pulmonaire, par voie percutanée"
      },
      {
        "code" : "12.13.81",
        "display" : "implantation d'une valve aortique transcathéter"
      },
      {
        "code" : "12.13.82",
        "display" : "implantation d'une valve aortique transcathéter"
      },
      {
        "code" : "12.14.05",
        "display" : "angioplastie de l'artère pulmonaire"
      },
      {
        "code" : "12.15.03",
        "display" : "angioplastie de l'artère pulmonaire"
      },
      {
        "code" : "12.15.04",
        "display" : "angioplastie de l'artère pulmonaire"
      },
      {
        "code" : "12.15.13",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire"
      },
      {
        "code" : "12.15.14",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire"
      },
      {
        "code" : "12.15.70",
        "display" : "Pose de stent entre artère pulmonaire gauche et aorte descendante (Potts inversé)"
      },
      {
        "code" : "12.15.42",
        "display" : "Restriction de flux des artères pulmonaires droite et gauche par dispositifs transcathéter"
      },
      {
        "code" : "12.15.49",
        "display" : "embolectomie percutanée de l'artère pulmonaire"
      },
      {
        "code" : "12.12.08",
        "display" : "fermeture d'une fistule ou fenestration aorticopulmonaire"
      },
      {
        "code" : "12.18.04",
        "display" : "angioplastie de coarctation"
      },
      {
        "code" : "12.18.08",
        "display" : "angioplastie de coarctation"
      },
      {
        "code" : "12.18.17",
        "display" : "mise en place d'endoprothèse au site de coarctation aortique"
      },
      {
        "code" : "12.18.22",
        "display" : "mise en place d'endoprothèse au site de coarctation aortique"
      },
      {
        "code" : "12.10.14",
        "display" : "insertion d'une endoprothèse dans le canal artériel"
      },
      {
        "code" : "12.10.26",
        "display" : "dilatation par ballonnet du canal artériel"
      },
      {
        "code" : "12.24.04",
        "display" : "fermeture par voie percutanée du ligament artériel persistant"
      },
      {
        "code" : "12.25.65",
        "display" : "Embolisation percutanée transluminale d'une collatérale systémico-pulmonaire majeure (MAPCA)"
      },
      {
        "code" : "12.25.02",
        "display" : "réparation d'une fistule artérioveineuse par occlusion"
      },
      {
        "code" : "12.49.50",
        "display" : "Embolisation percutanée d'un vaisseau lymphatique guidée par fluoroscopie"
      },
      {
        "code" : "12.70.08",
        "display" : "Occlusion de collatérale véino-veineuse par dispositif"
      },
      {
        "code" : "12.31.19",
        "display" : "dilatation par ballonnet d'une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "12.36.37",
        "display" : "angioplastie au niveau d'une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "12.31.27",
        "display" : "mise en place d'endoprothèse dans une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "12.36.34",
        "display" : "dilatation par ballonnet d'une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "12.31.34",
        "display" : "Occlusion d'anastomose systémico-pulmonaire par dispositif d'embolisation transluminal"
      },
      {
        "code" : "12.36.14",
        "display" : "dilatation par ballonnet d'un conduit cardiaque"
      },
      {
        "code" : "12.36.36",
        "display" : "dilatation transluminale percutanée par ballonnet d'un conduit cardiaque"
      },
      {
        "code" : "12.36.23",
        "display" : "pose d'une endoprothèse dans un conduit cardiaque"
      },
      {
        "code" : "12.36.32",
        "display" : "pose d'une endoprothèse dans un conduit cardiaque"
      },
      {
        "code" : "12.32.43",
        "display" : "péricardiocentèse transluminale percutanée"
      },
      {
        "code" : "12.45.13",
        "display" : "Implantation de dispositif par voie transluminale"
      },
      {
        "code" : "12.41.30",
        "display" : "Stratégie hybride (chirurgicale et transluminale combinées)"
      },
      {
        "code" : "12.13.84",
        "display" : "Implantation de valve aortique par voie transapicale (approche hybride)"
      },
      {
        "code" : "12.08.28",
        "display" : "Fermeture peropératoire de CIV par dispositif transluminal (approche hybride)"
      },
      {
        "code" : "12.20.21",
        "display" : "Stratégie hybride pour hypoplasie du cœur gauche (cathéter et chirurgie)"
      },
      {
        "code" : "12.20.20",
        "display" : "Approche hybride du cœur gauche hypoplasique (cathéter et chirurgie) : stade 1"
      },
      {
        "code" : "12.10.04",
        "display" : "Cerclage bilatéral des artères pulmonaires + pose transcathéter de stent dans le canal artériel"
      },
      {
        "code" : "12.20.23",
        "display" : "Approche hybride HLHS stade 2 : amalgame aortopulmonaire + anastomose(s) cavopulmonaire(s) supérieure(s) + décerclage des AP + réparation de l'arc"
      },
      {
        "code" : "12.20.22",
        "display" : "Approche hybride HLHS stade 2 : amalgame aortopulmonaire + anastomose(s) cavopulmonaire(s) supérieure(s) + décerclage des AP"
      }]
    }]
  }
}

```
