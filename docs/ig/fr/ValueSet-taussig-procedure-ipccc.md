# TAUSSIG — Gestes de cathétérisme (IPCCC) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

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
  "version" : "0.1.0",
  "name" : "TaussigProcedureIpccc",
  "title" : "TAUSSIG — Gestes de cathétérisme (IPCCC)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
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
      },
      {
        "code" : "12.18.70",
        "display" : "Pose percutanée d'un stent sur un anévrisme de l'aorte thoracique"
      },
      {
        "code" : "12.45.01",
        "display" : "Cathétérisme par voie transseptale avec ponction transseptale"
      },
      {
        "code" : "12.45.07",
        "display" : "Test d'occlusion diagnostique par voie percutanée"
      },
      {
        "code" : "12.45.59",
        "display" : "Geste percutané avec traitement adjuvant"
      },
      {
        "code" : "13.05.13",
        "display" : "Cathétérisme d'évaluation d'une hypertension pulmonaire"
      },
      {
        "code" : "13.05.36",
        "display" : "Cathétérisme diagnostique à visée interventionnelle : anatomie inadaptée au geste"
      },
      {
        "code" : "12.35.57",
        "display" : "Geste percutané pour trouble du rythme"
      },
      {
        "code" : "12.35.82",
        "display" : "Geste percutané pour trouble du rythme atrial"
      },
      {
        "code" : "12.35.83",
        "display" : "Geste percutané pour trouble du rythme ventriculaire"
      },
      {
        "code" : "13.05.08",
        "display" : "Cathétérisme cardiaque diagnostique avec épreuve électrophysiologique"
      },
      {
        "code" : "13.05.17",
        "display" : "Exploration électrophysiologique avec cartographie tridimensionnelle"
      },
      {
        "code" : "12.45.90",
        "display" : "Geste fœtal"
      },
      {
        "code" : "12.45.91",
        "display" : "Coagulation laser des anastomoses placentaires dans le syndrome transfuseur-transfusé"
      },
      {
        "code" : "12.45.70",
        "display" : "Geste fœtal par cathéter"
      },
      {
        "code" : "12.45.71",
        "display" : "Valvuloplastie pulmonaire fœtale au ballon"
      },
      {
        "code" : "12.45.73",
        "display" : "Valvuloplastie aortique fœtale au ballon"
      },
      {
        "code" : "12.45.75",
        "display" : "Péricardiocentèse fœtale par cathéter"
      },
      {
        "code" : "12.45.76",
        "display" : "Atrioseptostomie fœtale au ballon"
      },
      {
        "code" : "12.41.36",
        "display" : "Cathétérisme thérapeutique avec échec de largage d'un dispositif, d'un stent ou d'un coil"
      },
      {
        "code" : "12.45.00",
        "display" : "Geste de cathétérisme cardiovasculaire"
      },
      {
        "code" : "12.45.06",
        "display" : "Nouveau cathétérisme pour lésion résiduelle ou récidivante"
      },
      {
        "code" : "12.45.10",
        "display" : "Redilatation de stent"
      },
      {
        "code" : "12.45.11",
        "display" : "Pose de stent"
      },
      {
        "code" : "12.45.12",
        "display" : "Dilatation au ballon"
      },
      {
        "code" : "12.45.14",
        "display" : "Occlusion par coil au cours d'un cathétérisme"
      },
      {
        "code" : "12.45.15",
        "display" : "Implantation percutanée d'une valve"
      },
      {
        "code" : "12.45.21",
        "display" : "Dilatation valvulaire au ballon"
      },
      {
        "code" : "12.45.28",
        "display" : "Cathétérisme cardiovasculaire thérapeutique"
      },
      {
        "code" : "12.45.58",
        "display" : "Perforation thérapeutique percutanée pour créer une communication entre cavités ou vaisseaux"
      },
      {
        "code" : "13.05.01",
        "display" : "Cathétérisme cardiaque diagnostique"
      },
      {
        "code" : "12.08.06",
        "display" : "Agrandissement d'une communication interventriculaire"
      },
      {
        "code" : "12.08.35",
        "display" : "Agrandissement ou création d'une communication interventriculaire"
      },
      {
        "code" : "12.23.41",
        "display" : "Échographie endocoronaire"
      },
      {
        "code" : "13.01.00",
        "display" : "Échocardiographie"
      },
      {
        "code" : "13.01.03",
        "display" : "Échocardiographie transœsophagienne"
      },
      {
        "code" : "13.01.23",
        "display" : "Geste percutané guidé par échographie intracardiaque"
      },
      {
        "code" : "13.05.14",
        "display" : "Geste percutané sous guidage radiologique"
      },
      {
        "code" : "13.05.15",
        "display" : "Geste percutané sous guidage par IRM"
      },
      {
        "code" : "13.05.16",
        "display" : "Geste percutané sous guidage radiologique et IRM"
      },
      {
        "code" : "13.05.24",
        "display" : "Geste percutané sous guidage échographique"
      },
      {
        "code" : "13.05.39",
        "display" : "Imagerie endocoronaire par tomographie par cohérence optique"
      },
      {
        "code" : "12.14.38",
        "display" : "Retrait peropératoire complet ou partiel d'un stent de l'artère pulmonaire"
      },
      {
        "code" : "12.15.11",
        "display" : "Geste sur l'artère pulmonaire"
      },
      {
        "code" : "12.70.31",
        "display" : "Occlusion percutanée d'une veine systémique"
      },
      {
        "code" : "12.15.50",
        "display" : "Pose de stent dans l'arbre artériel pulmonaire"
      },
      {
        "code" : "12.15.56",
        "display" : "Pose de stent dans l'artère pulmonaire droite, en amont de la bifurcation hilaire"
      },
      {
        "code" : "12.15.57",
        "display" : "Pose de stent dans l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)"
      },
      {
        "code" : "12.15.58",
        "display" : "Pose de stent dans l'artère pulmonaire gauche, en amont de la bifurcation hilaire"
      },
      {
        "code" : "12.15.59",
        "display" : "Pose de stent dans l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)"
      },
      {
        "code" : "12.15.64",
        "display" : "Redilatation d'un stent de l'artère pulmonaire droite, en amont de la bifurcation hilaire"
      },
      {
        "code" : "12.15.65",
        "display" : "Redilatation d'un stent de l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)"
      },
      {
        "code" : "12.15.66",
        "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, en amont de la bifurcation hilaire"
      },
      {
        "code" : "12.15.67",
        "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)"
      },
      {
        "code" : "12.18.48",
        "display" : "Pose de stent sur une coarctation (ou hypoplasie) native de l'aorte"
      },
      {
        "code" : "12.18.54",
        "display" : "Redilatation d'un stent de l'aorte thoracique"
      },
      {
        "code" : "12.00.25",
        "display" : "Pose de stent dans une veine pulmonaire ou un chenal veineux pulmonaire"
      },
      {
        "code" : "12.00.88",
        "display" : "Redilatation d'un stent d'une veine systémique"
      },
      {
        "code" : "12.00.89",
        "display" : "Redilatation d'un stent d'une veine pulmonaire"
      },
      {
        "code" : "12.35.46",
        "display" : "Cryoablation percutanée d'un trouble du rythme"
      },
      {
        "code" : "12.35.48",
        "display" : "Ablation percutanée d'un trouble du rythme par radiofréquence"
      },
      {
        "code" : "12.35.84",
        "display" : "Ablation percutanée avec isolation des veines pulmonaires"
      },
      {
        "code" : "12.38.40",
        "display" : "Ablation percutanée d'un trouble du rythme"
      },
      {
        "code" : "12.23.09",
        "display" : "Geste sur une artère coronaire"
      },
      {
        "code" : "12.23.13",
        "display" : "Occlusion percutanée d'une fistule coronaire"
      },
      {
        "code" : "12.23.30",
        "display" : "Injection intracoronaire percutanée d'un agent thrombolytique"
      },
      {
        "code" : "12.23.31",
        "display" : "Angioplastie coronaire percutanée au ballon"
      },
      {
        "code" : "12.23.38",
        "display" : "Pose percutanée d'un stent coronaire"
      },
      {
        "code" : "12.23.42",
        "display" : "Occlusion chimique percutanée d'une artère coronaire"
      },
      {
        "code" : "12.23.45",
        "display" : "Redilatation d'un stent coronaire"
      },
      {
        "code" : "12.18.27",
        "display" : "Levée d'obstacle percutanée d'une coarctation de l'aorte"
      },
      {
        "code" : "12.22.00",
        "display" : "Geste sur une artère systémique"
      },
      {
        "code" : "12.25.07",
        "display" : "Fermeture d'une fistule artério-veineuse pulmonaire"
      },
      {
        "code" : "12.01.08",
        "display" : "Fermeture partielle d'une communication interatriale"
      },
      {
        "code" : "12.01.44",
        "display" : "Atrioseptostomie à la lame"
      },
      {
        "code" : "12.01.90",
        "display" : "Création ou agrandissement d'une communication interatriale"
      },
      {
        "code" : "12.01.95",
        "display" : "Atrioseptostomie au ballon"
      },
      {
        "code" : "12.30.74",
        "display" : "Création percutanée d'une communication interatriale"
      },
      {
        "code" : "12.32.22",
        "display" : "Retrait d'un thrombus intracardiaque"
      },
      {
        "code" : "12.02.00",
        "display" : "Geste sur la valve tricuspide"
      },
      {
        "code" : "12.00.23",
        "display" : "Dilatation d'une veine pulmonaire au ballon de découpe"
      },
      {
        "code" : "12.00.24",
        "display" : "Dilatation au ballon d'une veine pulmonaire ou d'un chenal veineux pulmonaire"
      },
      {
        "code" : "12.15.25",
        "display" : "Restriction du débit du tronc pulmonaire par dispositif implanté par voie percutanée"
      },
      {
        "code" : "12.15.53",
        "display" : "Dilatation de l'arbre artériel pulmonaire au ballon de découpe"
      },
      {
        "code" : "12.25.19",
        "display" : "Geste percutané sur une ou plusieurs collatérales systémico-pulmonaires (MAPCA)"
      },
      {
        "code" : "12.25.62",
        "display" : "Pose de stent dans une ou plusieurs collatérales systémico-pulmonaires (MAPCA)"
      },
      {
        "code" : "12.25.72",
        "display" : "Dilatation au ballon d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA)"
      },
      {
        "code" : "12.24.00",
        "display" : "Geste sur le canal artériel ou le ligament artériel"
      },
      {
        "code" : "12.24.21",
        "display" : "Fermeture percutanée du canal artériel par coil"
      },
      {
        "code" : "12.24.22",
        "display" : "Fermeture percutanée du canal artériel par plug"
      },
      {
        "code" : "12.13.00",
        "display" : "Geste sur la valve pulmonaire"
      },
      {
        "code" : "12.13.85",
        "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec pré-stenting"
      },
      {
        "code" : "12.13.86",
        "display" : "Pré-stenting de la voie pulmonaire en préparation d'un remplacement valvulaire"
      },
      {
        "code" : "12.16.09",
        "display" : "Dilatation au ballon d'une prothèse valvulaire aortique"
      },
      {
        "code" : "12.16.25",
        "display" : "Perforation et dilatation percutanées de la valve aortique"
      },
      {
        "code" : "12.30.21",
        "display" : "Fermeture percutanée de la fenestration d'un tunnel atrial (Fontan) par prothèse"
      },
      {
        "code" : "12.30.60",
        "display" : "Complétion percutanée de la dérivation cavo-pulmonaire totale par stent couvert de la veine cave inférieure à la veine cave supérieure"
      },
      {
        "code" : "12.08.20",
        "display" : "Fenestration percutanée d'un patch de communication interventriculaire"
      },
      {
        "code" : "12.08.65",
        "display" : "Création percutanée d'une communication interventriculaire"
      },
      {
        "code" : "12.01.98",
        "display" : "Fermeture percutanée d'une communication interatriale par prothèse"
      },
      {
        "code" : "12.07.07",
        "display" : "Dilatation au ballon de la voie d'éjection du ventricule gauche"
      },
      {
        "code" : "12.07.13",
        "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche"
      },
      {
        "code" : "12.07.19",
        "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche par alcoolisation coronaire percutanée"
      },
      {
        "code" : "12.07.26",
        "display" : "Geste sur le ventricule gauche"
      },
      {
        "code" : "12.06.26",
        "display" : "Geste sur le ventricule droit"
      },
      {
        "code" : "12.06.41",
        "display" : "Levée d'obstacle de la voie d'éjection du ventricule droit"
      },
      {
        "code" : "12.45.46",
        "display" : "Redilatation de stent avec fracture volontaire du stent"
      },
      {
        "code" : "12.45.30",
        "display" : "Geste percutané pour complication du cathétérisme"
      },
      {
        "code" : "12.45.45",
        "display" : "Retrait chirurgical d'un dispositif"
      },
      {
        "code" : "12.00.30",
        "display" : "Geste sur une veine systémique"
      }]
    }]
  }
}

```
