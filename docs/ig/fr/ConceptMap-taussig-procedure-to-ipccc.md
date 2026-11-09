# TAUSSIG — Gestes TAUSSIG vers IPCCC - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ConceptMap: TAUSSIG — Gestes TAUSSIG vers IPCCC (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-procedure-to-ipccc",
  "url" : "https://taussig/fhir/ConceptMap/taussig-procedure-to-ipccc",
  "version" : "0.8.0",
  "name" : "TaussigProcedureToIpccc",
  "title" : "TAUSSIG — Gestes TAUSSIG vers IPCCC",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des 188 concepts TAUSSIG de gestes vers IPCCC. Équivalence vue depuis le concept TAUSSIG (source). « unmatched » : aucun code ne convient. Les correspondances « proposé v6 » restent à vérifier.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-procedure",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-procedure",
    "target" : "https://taussig/fhir/CodeSystem/ipccc",
    "element" : [{
      "code" : "TAUSSIG-PROC-0001",
      "display" : "Pose percutanée d'un stent sur un anévrisme de l'aorte thoracique",
      "target" : [{
        "code" : "12.18.70",
        "display" : "Thoracic aorta aneurysm transcatheter stent implantation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0002",
      "display" : "Stratégie hybride (chirurgie et cathétérisme combinés)",
      "target" : [{
        "code" : "12.41.30",
        "display" : "Hybrid strategy (combined surgical & transluminal)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0003",
      "display" : "Cathétérisme par voie transseptale avec ponction transseptale",
      "target" : [{
        "code" : "12.45.01",
        "display" : "Catheterisation transeptal approach with transeptal puncture",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0004",
      "display" : "Test d'occlusion diagnostique par voie percutanée",
      "target" : [{
        "code" : "12.45.07",
        "display" : "Transluminal diagnostic test occlusion",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0005",
      "display" : "Geste percutané avec traitement adjuvant",
      "target" : [{
        "code" : "12.45.59",
        "display" : "Transluminal procedure using adjunctive therapy",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0006",
      "display" : "Cathétérisme cardiaque diagnostique : angiographie",
      "target" : [{
        "code" : "13.05.05",
        "display" : "Diagnostic cardiovascular catheterisation procedure: angiographic data obtained",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0007",
      "display" : "Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques",
      "target" : [{
        "code" : "13.05.06",
        "display" : "Diagnostic cardiovascular catheterisation procedure: haemodynamic data obtained",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0008",
      "display" : "Cathétérisme cardiaque diagnostique avec épreuve de modification hémodynamique",
      "target" : [{
        "code" : "13.05.07",
        "display" : "Diagnostic cardiovascular catheterisation procedure with haemodynamic alteration (challenge)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0009",
      "display" : "Cathétérisme d'évaluation d'une hypertension pulmonaire",
      "target" : [{
        "code" : "13.05.13",
        "display" : "Catheterisation study for pulmonary hypertension evaluation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0010",
      "display" : "Cathétérisme diagnostique à visée interventionnelle : anatomie inadaptée au geste",
      "target" : [{
        "code" : "13.05.36",
        "display" : "Diagnostic cardiovascular catheterisation procedure with intention to treat: anatomy unsuitable",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0011",
      "display" : "Geste percutané pour trouble du rythme",
      "target" : [{
        "code" : "12.35.57",
        "display" : "Transluminal procedure for arrhythmia",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0012",
      "display" : "Geste percutané pour trouble du rythme atrial",
      "target" : [{
        "code" : "12.35.82",
        "display" : "Transluminal procedure for atrial arrhythmia",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0013",
      "display" : "Geste percutané pour trouble du rythme ventriculaire",
      "target" : [{
        "code" : "12.35.83",
        "display" : "Transluminal procedure for ventricular arrhythmia",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0014",
      "display" : "Cathétérisme cardiaque diagnostique avec épreuve électrophysiologique",
      "target" : [{
        "code" : "13.05.08",
        "display" : "Diagnostic cardiovascular catheterisation procedure with electrophysiological alteration (challenge)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0015",
      "display" : "Exploration électrophysiologique",
      "target" : [{
        "code" : "13.05.12",
        "display" : "Electrophysiological study (EPS)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0016",
      "display" : "Exploration électrophysiologique avec cartographie tridimensionnelle",
      "target" : [{
        "code" : "13.05.17",
        "display" : "Electrophysiological study (EPS) with three dimensional mapping",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0017",
      "display" : "Geste fœtal",
      "target" : [{
        "code" : "12.45.90",
        "display" : "Fetal procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0018",
      "display" : "Coagulation laser des anastomoses placentaires dans le syndrome transfuseur-transfusé",
      "target" : [{
        "code" : "12.45.91",
        "display" : "Division of placental communicating vessels in twin-to-twin transfusion syndrome by laser coagulation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0019",
      "display" : "Geste fœtal par cathéter",
      "target" : [{
        "code" : "12.45.70",
        "display" : "Fetal transluminal catheter procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0020",
      "display" : "Valvuloplastie pulmonaire fœtale au ballon",
      "target" : [{
        "code" : "12.45.71",
        "display" : "Fetal balloon pulmonary valvotomy",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0021",
      "display" : "Valvuloplastie aortique fœtale au ballon",
      "target" : [{
        "code" : "12.45.73",
        "display" : "Fetal balloon aortic valvotomy",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0022",
      "display" : "Péricardiocentèse fœtale par cathéter",
      "target" : [{
        "code" : "12.45.75",
        "display" : "Fetal pericardiocentesis: transcatheter",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0023",
      "display" : "Atrioseptostomie fœtale au ballon",
      "target" : [{
        "code" : "12.45.76",
        "display" : "Fetal balloon atrial septostomy",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0024",
      "display" : "Cathétérisme thérapeutique avec échec de largage d'un dispositif, d'un stent ou d'un coil",
      "target" : [{
        "code" : "12.41.36",
        "display" : "Therapeutic cardiovascular catheter procedure with failed attempt to deploy device-stent-coil",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0025",
      "display" : "Geste de cathétérisme cardiovasculaire",
      "target" : [{
        "code" : "12.45.00",
        "display" : "Cardiovascular catheter procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0026",
      "display" : "Nouveau cathétérisme pour lésion résiduelle ou récidivante",
      "target" : [{
        "code" : "12.45.06",
        "display" : "Repeat cardiovascular catheter procedure for residual or recurrent lesion",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0027",
      "display" : "Redilatation de stent",
      "target" : [{
        "code" : "12.45.10",
        "display" : "Stent redilation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0028",
      "display" : "Pose de stent",
      "target" : [{
        "code" : "12.45.11",
        "display" : "Stent placement",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0029",
      "display" : "Dilatation au ballon",
      "target" : [{
        "code" : "12.45.12",
        "display" : "Balloon dilation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0030",
      "display" : "Implantation d'un dispositif par voie percutanée",
      "target" : [{
        "code" : "12.45.13",
        "display" : "Transluminal device implantation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0031",
      "display" : "Occlusion par coil au cours d'un cathétérisme",
      "target" : [{
        "code" : "12.45.14",
        "display" : "Cardiovascular catheterisation occlusion procedure with coil",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0032",
      "display" : "Implantation percutanée d'une valve",
      "target" : [{
        "code" : "12.45.15",
        "display" : "Transluminal implantation of valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0033",
      "display" : "Fermeture percutanée d'une fuite de prothèse valvulaire par dispositif",
      "target" : [{
        "code" : "12.45.19",
        "display" : "Transluminal prosthetic valve leak closure using device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0034",
      "display" : "Dilatation valvulaire au ballon",
      "target" : [{
        "code" : "12.45.21",
        "display" : "Balloon dilation of valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0035",
      "display" : "Cathétérisme cardiovasculaire thérapeutique",
      "target" : [{
        "code" : "12.45.28",
        "display" : "Therapeutic cardiovascular catheter procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0036",
      "display" : "Perforation thérapeutique percutanée pour créer une communication entre cavités ou vaisseaux",
      "target" : [{
        "code" : "12.45.58",
        "display" : "Transluminal therapeutic perforation to establish interchamber and-or intervessel communication",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0037",
      "display" : "Cathétérisme cardiaque diagnostique",
      "target" : [{
        "code" : "13.05.01",
        "display" : "Diagnostic cardiovascular catheterisation procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0038",
      "display" : "Agrandissement d'une communication interventriculaire",
      "target" : [{
        "code" : "12.08.06",
        "display" : "Ventricular septal defect (VSD) enlargement",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0039",
      "display" : "Agrandissement ou création d'une communication interventriculaire",
      "target" : [{
        "code" : "12.08.35",
        "display" : "Ventricular septal defect (VSD) enlargement/ creation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0040",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie) : stade 1",
      "target" : [{
        "code" : "12.20.20",
        "display" : "Hypoplastic left heart syndrome hybrid approach (transcatheter & surgery): stage 1",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0041",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s) et retrait des cerclages pulmonaires",
      "target" : [{
        "code" : "12.20.22",
        "display" : "Hypoplastic left heart syndrome hybrid approach (transcatheter & surgery) 'stage 2': aortopulmonary amalgamation + superior cavopulmonary anastomosis(es) + debanding of pulmonary arteries",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0042",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s), retrait des cerclages pulmonaires et réparation de l'arche",
      "target" : [{
        "code" : "12.20.23",
        "display" : "Hypoplastic left heart syndrome hybrid approach (transcatheter & surgery) 'stage 2': aortopulmonary amalgamation + superior cavopulmonary anastomosis(es) + debanding of pulmonary arteries + arch repair",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0043",
      "display" : "Échographie endocoronaire",
      "target" : [{
        "code" : "12.23.41",
        "display" : "Transluminal intracoronary echocardiography (IVUS)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0044",
      "display" : "Échocardiographie",
      "target" : [{
        "code" : "13.01.00",
        "display" : "Echocardiographic examination",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0045",
      "display" : "Échocardiographie transœsophagienne",
      "target" : [{
        "code" : "13.01.03",
        "display" : "Transoesophageal echocardiographic examination",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0046",
      "display" : "Geste percutané guidé par échographie intracardiaque",
      "target" : [{
        "code" : "13.01.23",
        "display" : "Transcatheter intervention with intracardiac echo guidance (ICE)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0047",
      "display" : "Geste percutané sous guidage radiologique",
      "target" : [{
        "code" : "13.05.14",
        "display" : "Transcatheter procedure undertaken with x-ray guidance",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0048",
      "display" : "Geste percutané sous guidage par IRM",
      "target" : [{
        "code" : "13.05.15",
        "display" : "Transcatheter procedure undertaken with magnetic resonance imaging guidance",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0049",
      "display" : "Geste percutané sous guidage radiologique et IRM",
      "target" : [{
        "code" : "13.05.16",
        "display" : "Transcatheter procedure undertaken with x-ray & magnetic resonance imaging guidance",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0050",
      "display" : "Geste percutané sous guidage échographique",
      "target" : [{
        "code" : "13.05.24",
        "display" : "Transcatheter procedure undertaken with ultrasound guidance",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0051",
      "display" : "Imagerie endocoronaire par tomographie par cohérence optique",
      "target" : [{
        "code" : "13.05.39",
        "display" : "Transluminal intravascular imaging of coronary vessel by optical coherence tomography (OCT)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0052",
      "display" : "Retrait peropératoire complet ou partiel d'un stent de l'artère pulmonaire",
      "target" : [{
        "code" : "12.14.38",
        "display" : "Intraoperative removal or partial removal of pulmonary arterial stent",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0053",
      "display" : "Geste sur l'artère pulmonaire",
      "target" : [{
        "code" : "12.15.11",
        "display" : "Procedure involving pulmonary artery",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0054",
      "display" : "Occlusion d'une collatérale veino-veineuse par dispositif",
      "target" : [{
        "code" : "12.70.08",
        "display" : "Venovenous collateral occlusion with device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0055",
      "display" : "Occlusion percutanée d'une veine systémique",
      "target" : [{
        "code" : "12.70.31",
        "display" : "Transluminal occlusion of systemic vein",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0056",
      "display" : "Pose de stent dans l'artère pulmonaire droite",
      "target" : [{
        "code" : "12.15.13",
        "display" : "Stent placement in right pulmonary artery",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0057",
      "display" : "Pose de stent dans l'artère pulmonaire gauche",
      "target" : [{
        "code" : "12.15.14",
        "display" : "Stent placement in left pulmonary artery",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0058",
      "display" : "Pose de stent dans l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "12.15.50",
        "display" : "Stent placement in pulmonary tree",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0059",
      "display" : "Pose de stent dans l'artère pulmonaire droite, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "12.15.56",
        "display" : "Stent placement in right pulmonary artery proximal to hilar bifurcation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0060",
      "display" : "Pose de stent dans l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "12.15.57",
        "display" : "Stent placement in right pulmonary artery at or distal to hilar bifurcation (lobar & segmental)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0061",
      "display" : "Pose de stent dans l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "12.15.58",
        "display" : "Stent placement in left pulmonary artery proximal to hilar bifurcation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0062",
      "display" : "Pose de stent dans l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "12.15.59",
        "display" : "Stent placement in left pulmonary artery at or distal to hilar bifurcation (lobar & segmental)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0063",
      "display" : "Redilatation d'un stent de l'artère pulmonaire droite, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "12.15.64",
        "display" : "Stent redilation in right pulmonary artery proximal to hilar bifurcation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0064",
      "display" : "Redilatation d'un stent de l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "12.15.65",
        "display" : "Stent redilation in right pulmonary artery at or distal to hilar bifurcation (lobar & segmental)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0065",
      "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "12.15.66",
        "display" : "Stent redilation in left pulmonary artery proximal to hilar bifurcation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0066",
      "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "12.15.67",
        "display" : "Stent redilation in left pulmonary artery at or distal to hilar bifurcation (lobar & segmental)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0067",
      "display" : "Pose de stent entre l'artère pulmonaire gauche et l'aorte descendante (Potts inverse)",
      "target" : [{
        "code" : "12.15.70",
        "display" : "Stent placement between left pulmonary artery and descending aorta (reverse Potts)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0068",
      "display" : "Pose de stent sur une coarctation de l'aorte",
      "target" : [{
        "code" : "12.18.17",
        "display" : "Stent placement at site of aortic coarctation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0069",
      "display" : "Pose de stent sur une recoarctation de l'aorte",
      "target" : [{
        "code" : "12.18.22",
        "display" : "Stent placement at site of aortic recoarctation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0070",
      "display" : "Pose de stent sur une coarctation (ou hypoplasie) native de l'aorte",
      "target" : [{
        "code" : "12.18.48",
        "display" : "Stent placement at site of native aortic coarctation-hypoplasia",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0071",
      "display" : "Redilatation d'un stent de l'aorte thoracique",
      "target" : [{
        "code" : "12.18.54",
        "display" : "Stent redilation in thoracic aorta",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0072",
      "display" : "Pose de stent dans une veine pulmonaire",
      "target" : [{
        "code" : "12.00.22",
        "display" : "Stent placement in pulmonary vein",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0073",
      "display" : "Pose de stent dans une veine pulmonaire ou un chenal veineux pulmonaire",
      "target" : [{
        "code" : "12.00.25",
        "display" : "Stent placement in pulmonary vein or pathway",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0074",
      "display" : "Pose de stent dans la veine cave supérieure",
      "target" : [{
        "code" : "12.00.36",
        "display" : "Stent placement in superior caval vein (SVC)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0075",
      "display" : "Pose de stent dans une veine systémique ou un chenal veineux systémique",
      "target" : [{
        "code" : "12.00.44",
        "display" : "Stent placement in systemic vein or pathway",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0076",
      "display" : "Redilatation d'un stent d'une veine systémique",
      "target" : [{
        "code" : "12.00.88",
        "display" : "Redilation of stent in systemic vein",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0077",
      "display" : "Redilatation d'un stent d'une veine pulmonaire",
      "target" : [{
        "code" : "12.00.89",
        "display" : "Redilation of stent in pulmonary vein",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0078",
      "display" : "Cryoablation percutanée d'un trouble du rythme",
      "target" : [{
        "code" : "12.35.46",
        "display" : "Transluminal cryoablation procedure for arrhythmia",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0079",
      "display" : "Ablation percutanée d'un trouble du rythme par radiofréquence",
      "target" : [{
        "code" : "12.35.48",
        "display" : "Transluminal radiofrequency ablation procedure for arrhythmia",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0080",
      "display" : "Ablation percutanée avec isolation des veines pulmonaires",
      "target" : [{
        "code" : "12.35.84",
        "display" : "Transluminal ablation procedure with pulmonary vein exclusion",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0081",
      "display" : "Ablation percutanée d'un trouble du rythme",
      "target" : [{
        "code" : "12.38.40",
        "display" : "Transluminal ablation procedure for arrhythmia",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0082",
      "display" : "Geste sur une artère coronaire",
      "target" : [{
        "code" : "12.23.09",
        "display" : "Coronary arterial procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0083",
      "display" : "Occlusion percutanée d'une fistule coronaire",
      "target" : [{
        "code" : "12.23.13",
        "display" : "Coronary arterial fistula transluminal occlusion",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0084",
      "display" : "Injection intracoronaire percutanée d'un agent thrombolytique",
      "target" : [{
        "code" : "12.23.30",
        "display" : "Transluminal intracoronary injection of thrombolytic agent",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0085",
      "display" : "Angioplastie coronaire percutanée au ballon",
      "target" : [{
        "code" : "12.23.31",
        "display" : "Percutaneous transluminal balloon coronary angioplasty (PTCA)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0086",
      "display" : "Pose percutanée d'un stent coronaire",
      "target" : [{
        "code" : "12.23.38",
        "display" : "Transluminal coronary stent implantation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0087",
      "display" : "Occlusion chimique percutanée d'une artère coronaire",
      "target" : [{
        "code" : "12.23.42",
        "display" : "Transluminal chemical occlusion of coronary artery",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0088",
      "display" : "Redilatation d'un stent coronaire",
      "target" : [{
        "code" : "12.23.45",
        "display" : "Stent redilation in coronary artery",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0089",
      "display" : "Fermeture percutanée d'une fenêtre aorto-pulmonaire par prothèse",
      "target" : [{
        "code" : "12.12.08",
        "display" : "Aortopulmonary window closure with transcatheter device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0090",
      "display" : "Dilatation au ballon d'une coarctation (ou hypoplasie) native de l'aorte",
      "target" : [{
        "code" : "12.18.04",
        "display" : "Balloon dilation of native aortic coarctation-hypoplasia",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0091",
      "display" : "Dilatation au ballon d'une recoarctation de l'aorte",
      "target" : [{
        "code" : "12.18.08",
        "display" : "Balloon dilation of aortic recoarctation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0092",
      "display" : "Levée d'obstacle percutanée d'une coarctation de l'aorte",
      "target" : [{
        "code" : "12.18.27",
        "display" : "Aortic coarctation transluminal obstruction relief",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0093",
      "display" : "Geste sur une artère systémique",
      "target" : [{
        "code" : "12.22.00",
        "display" : "Systemic arterial procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0094",
      "display" : "Occlusion d'une fistule artério-veineuse",
      "target" : [{
        "code" : "12.25.02",
        "display" : "Arteriovenous fistula occlusion",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0095",
      "display" : "Fermeture d'une fistule artério-veineuse pulmonaire",
      "target" : [{
        "code" : "12.25.07",
        "display" : "Pulmonary arteriovenous fistula closure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0096",
      "display" : "Fermeture partielle d'une communication interatriale",
      "target" : [{
        "code" : "12.01.08",
        "display" : "Interatrial communication closure: partial",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0097",
      "display" : "Atrioseptostomie au ballon par retrait (Rashkind)",
      "target" : [{
        "code" : "12.01.41",
        "display" : "Balloon atrial septostomy by pull back (Rashkind)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0098",
      "display" : "Atrioseptostomie à la lame",
      "target" : [{
        "code" : "12.01.44",
        "display" : "Blade atrial septostomy",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0099",
      "display" : "Création ou agrandissement d'une communication interatriale",
      "target" : [{
        "code" : "12.01.90",
        "display" : "Interatrial communication creation-enlargement",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0100",
      "display" : "Atrioseptostomie au ballon",
      "target" : [{
        "code" : "12.01.95",
        "display" : "Balloon atrial septostomy",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0101",
      "display" : "Création percutanée d'une communication interatriale",
      "target" : [{
        "code" : "12.30.74",
        "display" : "Transluminal interatrial communication creation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0102",
      "display" : "Retrait d'un thrombus intracardiaque",
      "target" : [{
        "code" : "12.32.22",
        "display" : "Removal of cardiac thrombus",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0103",
      "display" : "Fermeture percutanée de l'auricule gauche par prothèse",
      "target" : [{
        "code" : "12.38.25",
        "display" : "Transluminal left atrial appendage occlusion with device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0104",
      "display" : "Geste sur la valve tricuspide",
      "target" : [{
        "code" : "12.02.00",
        "display" : "Tricuspid valvar procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0105",
      "display" : "Dilatation au ballon d'une prothèse valvulaire tricuspide",
      "target" : [{
        "code" : "12.02.12",
        "display" : "Balloon dilation of prosthetic tricuspid valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0106",
      "display" : "Remplacement valvulaire tricuspide par voie percutanée",
      "target" : [{
        "code" : "12.02.98",
        "display" : "Transluminal tricuspid valvar replacement",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0107",
      "display" : "Valve-in-valve tricuspide par voie percutanée",
      "target" : [{
        "code" : "12.02.99",
        "display" : "Transluminal tricuspid valve in prosthetic valve replacement",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0108",
      "display" : "Dilatation au ballon de la valve mitrale",
      "target" : [{
        "code" : "12.03.10",
        "display" : "Balloon dilation of mitral valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0109",
      "display" : "Dilatation au ballon d'une prothèse valvulaire mitrale",
      "target" : [{
        "code" : "12.03.12",
        "display" : "Balloon dilation of prosthetic mitral valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0110",
      "display" : "Réparation valvulaire mitrale par voie percutanée",
      "target" : [{
        "code" : "12.03.97",
        "display" : "Transluminal mitral valve repair",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0111",
      "display" : "Remplacement valvulaire mitral par voie percutanée",
      "target" : [{
        "code" : "12.03.98",
        "display" : "Transluminal mitral valvar replacement",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0112",
      "display" : "Valve-in-valve mitrale par voie percutanée",
      "target" : [{
        "code" : "12.04.90",
        "display" : "Transluminal mitral valve in prosthetic valve replacement",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0113",
      "display" : "Valve-in-valve mitrale transcathéter par voie transapicale",
      "target" : [{
        "code" : "12.04.91",
        "display" : "Transapical transcatheter mitral valve in prosthetic valve replacement",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0114",
      "display" : "Dilatation au ballon d'une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "12.31.19",
        "display" : "Balloon dilation of systemic-to-pulmonary arterial shunt",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0115",
      "display" : "Pose de stent dans une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "12.31.27",
        "display" : "Stent placement in systemic-to-pulmonary arterial shunt",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0116",
      "display" : "Occlusion percutanée d'une anastomose systémico-pulmonaire par dispositif ou embolisation",
      "target" : [{
        "code" : "12.31.34",
        "display" : "Occlusion of systemic-to-pulmonary arterial shunt by transluminal device-embolus",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0117",
      "display" : "Dilatation au ballon d'un conduit",
      "target" : [{
        "code" : "12.36.14",
        "display" : "Balloon dilation of cardiac conduit",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0118",
      "display" : "Pose de stent dans un conduit",
      "target" : [{
        "code" : "12.36.23",
        "display" : "Stent placement in cardiac conduit",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0119",
      "display" : "Redilatation d'un stent dans un conduit",
      "target" : [{
        "code" : "12.36.32",
        "display" : "Stent redilation in cardiac conduit",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0120",
      "display" : "Redilatation d'un stent dans une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "12.36.34",
        "display" : "Stent redilation in systemic-to-pulmonary arterial shunt",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0121",
      "display" : "Perforation et dilatation percutanées d'un conduit",
      "target" : [{
        "code" : "12.36.36",
        "display" : "Transluminal perforation and dilation of cardiac conduit",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0122",
      "display" : "Perforation et dilatation percutanées d'une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "12.36.37",
        "display" : "Transluminal perforation and dilation of systemic-to-pulmonary arterial shunt",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0123",
      "display" : "Dilatation au ballon d'une veine pulmonaire",
      "target" : [{
        "code" : "12.00.21",
        "display" : "Balloon dilation of pulmonary vein",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0124",
      "display" : "Dilatation d'une veine pulmonaire au ballon de découpe",
      "target" : [{
        "code" : "12.00.23",
        "display" : "Balloon dilation of pulmonary vein using cutting balloon",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0125",
      "display" : "Dilatation au ballon d'une veine pulmonaire ou d'un chenal veineux pulmonaire",
      "target" : [{
        "code" : "12.00.24",
        "display" : "Balloon dilation of pulmonary vein or pathway",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0126",
      "display" : "Dilatation au ballon d'une veine systémique ou d'un chenal veineux systémique",
      "target" : [{
        "code" : "12.00.43",
        "display" : "Balloon dilation of systemic vein or pathway",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0127",
      "display" : "Dilatation au ballon du tronc de l'artère pulmonaire",
      "target" : [{
        "code" : "12.14.05",
        "display" : "Balloon dilation of pulmonary trunk",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0128",
      "display" : "Dilatation au ballon de l'artère pulmonaire droite",
      "target" : [{
        "code" : "12.15.03",
        "display" : "Balloon dilation of right pulmonary artery",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0129",
      "display" : "Dilatation au ballon de l'artère pulmonaire gauche",
      "target" : [{
        "code" : "12.15.04",
        "display" : "Balloon dilation of left pulmonary artery",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0130",
      "display" : "Restriction du débit du tronc pulmonaire par dispositif implanté par voie percutanée",
      "target" : [{
        "code" : "12.15.25",
        "display" : "Pulmonary trunk flow restriction using transcatheter implanted device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0131",
      "display" : "Restriction du débit des artères pulmonaires droite et gauche par dispositifs implantés par voie percutanée",
      "target" : [{
        "code" : "12.15.42",
        "display" : "Right + left pulmonary artery flow restriction using transcatheter implanted devices",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0132",
      "display" : "Dilatation de l'arbre artériel pulmonaire au ballon de découpe",
      "target" : [{
        "code" : "12.15.53",
        "display" : "Balloon dilation of pulmonary tree with cutting balloon",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0133",
      "display" : "Geste percutané sur une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "code" : "12.25.19",
        "display" : "Transluminal procedure to systemic-to-pulmonary collateral artery(ies) (MAPCA(s))",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0134",
      "display" : "Pose de stent dans une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "code" : "12.25.62",
        "display" : "Stent placement in systemic-to-pulmonary collateral artery(ies) (MAPCA(s))",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0135",
      "display" : "Occlusion percutanée d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA) par coil ou dispositif",
      "target" : [{
        "code" : "12.25.65",
        "display" : "Transluminal occlusion of systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) with coil-device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0136",
      "display" : "Dilatation au ballon d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "code" : "12.25.72",
        "display" : "Balloon dilation of systemic-to-pulmonary collateral artery(ies) (MAPCA(s))",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0137",
      "display" : "Pose de stent dans le canal artériel",
      "target" : [{
        "code" : "12.10.14",
        "display" : "Stent placement in arterial duct (PDA)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0138",
      "display" : "Redilatation d'un stent du canal artériel",
      "target" : [{
        "code" : "12.10.26",
        "display" : "Stent redilation in arterial duct (PDA)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0139",
      "display" : "Geste sur le canal artériel ou le ligament artériel",
      "target" : [{
        "code" : "12.24.00",
        "display" : "Arterial duct-ligament procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0140",
      "display" : "Fermeture percutanée du canal artériel par prothèse",
      "target" : [{
        "code" : "12.24.04",
        "display" : "Arterial duct (PDA) closure with transluminal device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0141",
      "display" : "Fermeture percutanée du canal artériel par coil",
      "target" : [{
        "code" : "12.24.21",
        "display" : "Arterial duct (PDA) closure with transluminal coil",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0142",
      "display" : "Fermeture percutanée du canal artériel par plug",
      "target" : [{
        "code" : "12.24.22",
        "display" : "Arterial duct (PDA) closure with transluminal plug device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0143",
      "display" : "Geste sur la valve pulmonaire",
      "target" : [{
        "code" : "12.13.00",
        "display" : "Pulmonary valvar procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0144",
      "display" : "Dilatation au ballon de la valve pulmonaire",
      "target" : [{
        "code" : "12.13.05",
        "display" : "Balloon dilation of pulmonary valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0145",
      "display" : "Dilatation au ballon d'une prothèse valvulaire pulmonaire",
      "target" : [{
        "code" : "12.13.06",
        "display" : "Balloon dilation of prosthetic pulmonary valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0146",
      "display" : "Perforation et dilatation percutanées de la valve pulmonaire",
      "target" : [{
        "code" : "12.13.09",
        "display" : "Pulmonary valvar transluminal perforation and dilation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0147",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent",
      "target" : [{
        "code" : "12.13.51",
        "display" : "Transluminal pulmonary valvar insertion with stent mounted valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0148",
      "display" : "Valve-in-valve pulmonaire par voie percutanée (réimplantation)",
      "target" : [{
        "code" : "12.13.52",
        "display" : "Transluminal pulmonary valvar insertion with stent mounted valve: reimplant (valve in valve)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0149",
      "display" : "Implantation percutanée d'une valve aortique montée sur stent",
      "target" : [{
        "code" : "12.13.81",
        "display" : "Transluminal aortic valvar insertion (TAVI) with stent mounted valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0150",
      "display" : "Valve-in-valve aortique par voie percutanée (réimplantation)",
      "target" : [{
        "code" : "12.13.82",
        "display" : "Transluminal aortic valvar insertion with stent mounted valve: reimplant (valve in valve)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0151",
      "display" : "Implantation d'une valve aortique par voie transapicale (approche hybride)",
      "target" : [{
        "code" : "12.13.84",
        "display" : "Transapical aortic valve implantation (hybrid approach)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0152",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec pré-stenting",
      "target" : [{
        "code" : "12.13.85",
        "display" : "Transluminal pulmonary valvar insertion with stent mounted valve including prestenting",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0153",
      "display" : "Pré-stenting de la voie pulmonaire en préparation d'un remplacement valvulaire",
      "target" : [{
        "code" : "12.13.86",
        "display" : "Transluminal pulmonary valvar prestenting procedure in preparation for valve replacement",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0154",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec rupture volontaire de la prothèse antérieure",
      "target" : [{
        "code" : "12.13.87",
        "display" : "Transluminal pulmonary valvar insertion with stent mounted valve with intentional rupture of previous conduit",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0155",
      "display" : "Dilatation au ballon de la valve aortique",
      "target" : [{
        "code" : "12.16.05",
        "display" : "Balloon dilation of aortic valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0156",
      "display" : "Dilatation au ballon d'une prothèse valvulaire aortique",
      "target" : [{
        "code" : "12.16.09",
        "display" : "Balloon dilation of prosthetic aortic valve",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0157",
      "display" : "Perforation et dilatation percutanées de la valve aortique",
      "target" : [{
        "code" : "12.16.25",
        "display" : "Aortic valvar transluminal perforation and dilation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0158",
      "display" : "Fenestration percutanée du septum interatrial ou d'un tunnel atrial",
      "target" : [{
        "code" : "12.01.47",
        "display" : "Transluminal fenestration of atrial septum-tunnel",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0159",
      "display" : "Approche hybride stade 1 : cerclage bilatéral des artères pulmonaires et stent du canal artériel par voie percutanée",
      "target" : [{
        "code" : "12.10.04",
        "display" : "Hybrid approach 'Stage 1': application of bilateral pulmonary arterial bands & transcatheter placement of stent in arterial duct",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0160",
      "display" : "Stratégie hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie)",
      "target" : [{
        "code" : "12.20.21",
        "display" : "Hypoplastic left heart syndrome hybrid strategy (transcatheter & surgery)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0161",
      "display" : "Fermeture percutanée de la fenestration d'un tunnel atrial (Fontan) par prothèse",
      "target" : [{
        "code" : "12.30.21",
        "display" : "Right atrial septum-tunnel fenestration closure with transluminal device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0162",
      "display" : "Complétion percutanée de la dérivation cavo-pulmonaire totale par stent couvert de la veine cave inférieure à la veine cave supérieure",
      "target" : [{
        "code" : "12.30.60",
        "display" : "Completion of total cavopulmonary connection (TCPC) using transcatheter inferior to superior caval vein covered stent",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0163",
      "display" : "Fermeture percutanée d'une communication interventriculaire par prothèse",
      "target" : [{
        "code" : "12.08.07",
        "display" : "Ventricular septal defect (VSD) closure with transluminal device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0164",
      "display" : "Fenestration percutanée d'un patch de communication interventriculaire",
      "target" : [{
        "code" : "12.08.20",
        "display" : "Transluminal fenestration of ventricular septal defect (VSD) patch",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0165",
      "display" : "Fermeture peropératoire d'une communication interventriculaire par dispositif (approche hybride)",
      "target" : [{
        "code" : "12.08.28",
        "display" : "Intraoperative ventricular septal defect (VSD) closure with transluminal device (hybrid approach)",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0166",
      "display" : "Création percutanée d'une communication interventriculaire",
      "target" : [{
        "code" : "12.08.65",
        "display" : "Transluminal interventricular communication creation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0167",
      "display" : "Fermeture percutanée d'une communication interatriale de type ostium secundum par prothèse",
      "target" : [{
        "code" : "12.01.06",
        "display" : "Atrial septal defect (ASD) secundum closure with transluminal device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0168",
      "display" : "Fermeture percutanée d'un foramen ovale perméable par prothèse",
      "target" : [{
        "code" : "12.01.07",
        "display" : "Patent foramen ovale (PFO) closure with transluminal device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0169",
      "display" : "Fermeture percutanée d'une communication interatriale de type sinus venosus par stent couvert",
      "target" : [{
        "code" : "12.01.88",
        "display" : "Sinus venosus defect closure using transluminal covered stent",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0170",
      "display" : "Fermeture percutanée d'une communication interatriale par prothèse",
      "target" : [{
        "code" : "12.01.98",
        "display" : "Interatrial communication closure with transluminal device",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0171",
      "display" : "Dilatation au ballon de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "12.07.07",
        "display" : "Balloon dilation of left ventricular outflow tract",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0172",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "12.07.13",
        "display" : "Left ventricular outflow tract obstruction relief",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0173",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche par alcoolisation coronaire percutanée",
      "target" : [{
        "code" : "12.07.19",
        "display" : "Left ventricular outflow tract obstruction relief by transcatheter coronary chemical ablation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0174",
      "display" : "Geste sur le ventricule gauche",
      "target" : [{
        "code" : "12.07.26",
        "display" : "Left ventricular procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0175",
      "display" : "Dilatation au ballon de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "12.06.05",
        "display" : "Balloon dilation of right ventricular outflow tract",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0176",
      "display" : "Pose de stent dans la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "12.06.18",
        "display" : "Stent placement in right ventricular outflow tract",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0177",
      "display" : "Biopsie ventriculaire droite par voie percutanée",
      "target" : [{
        "code" : "12.06.25",
        "display" : "Transluminal right ventricular biopsy",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0178",
      "display" : "Geste sur le ventricule droit",
      "target" : [{
        "code" : "12.06.26",
        "display" : "Right ventricular procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0179",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "12.06.41",
        "display" : "Right ventricular outflow tract obstruction relief",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0180",
      "display" : "Redilatation d'un stent de la voie d'éjection native du ventricule droit",
      "target" : [{
        "code" : "12.06.95",
        "display" : "Stent redilation in native right ventricular outflow tract",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0181",
      "display" : "Péricardiocentèse percutanée",
      "target" : [{
        "code" : "12.32.43",
        "display" : "Pericardiocentesis: percutaneous transcatheter",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0182",
      "display" : "Embolectomie percutanée de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "12.15.49",
        "display" : "Transluminal embolectomy from pulmonary tree",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0183",
      "display" : "Embolisation lymphatique percutanée",
      "target" : [{
        "code" : "12.49.50",
        "display" : "Percutaneous lymphatic embolisation",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0184",
      "display" : "Redilatation de stent avec fracture volontaire du stent",
      "target" : [{
        "code" : "12.45.46",
        "display" : "Stent redilation with intentional stent fracture",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0185",
      "display" : "Extraction percutanée d'un dispositif ou d'un corps étranger",
      "target" : [{
        "code" : "12.45.04",
        "display" : "Transluminal retrieval of device or foreign body",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0186",
      "display" : "Geste percutané pour complication du cathétérisme",
      "target" : [{
        "code" : "12.45.30",
        "display" : "Transluminal procedure for catheterisation complication",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0187",
      "display" : "Retrait chirurgical d'un dispositif",
      "target" : [{
        "code" : "12.45.45",
        "display" : "Removal of device from body: surgical",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0188",
      "display" : "Geste sur une veine systémique",
      "target" : [{
        "code" : "12.00.30",
        "display" : "Systemic vein procedure",
        "equivalence" : "equivalent",
        "comment" : "origine du concept"
      }]
    }]
  }]
}

```
