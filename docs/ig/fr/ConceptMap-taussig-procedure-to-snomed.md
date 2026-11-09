# TAUSSIG — Gestes TAUSSIG vers SNOMED - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ConceptMap: TAUSSIG — Gestes TAUSSIG vers SNOMED (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-procedure-to-snomed",
  "url" : "https://taussig/fhir/ConceptMap/taussig-procedure-to-snomed",
  "version" : "0.8.0",
  "name" : "TaussigProcedureToSnomed",
  "title" : "TAUSSIG — Gestes TAUSSIG vers SNOMED",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des 188 concepts TAUSSIG de gestes vers SNOMED. Équivalence vue depuis le concept TAUSSIG (source). « unmatched » : aucun code ne convient. Les correspondances « proposé v6 » restent à vérifier.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-procedure",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-procedure",
    "target" : "http://snomed.info/sct",
    "element" : [{
      "code" : "TAUSSIG-PROC-0001",
      "display" : "Pose percutanée d'un stent sur un anévrisme de l'aorte thoracique",
      "target" : [{
        "code" : "1259910000",
        "display" : "Endovascular repair of thoracic aortic aneurysm using endovascular stent graft and stent graft anchoring system",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Endovascular repair of thoracic aortic aneurysm using stent graft"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0002",
      "display" : "Stratégie hybride (chirurgie et cathétérisme combinés)",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — stratégie, pas un acte"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0003",
      "display" : "Cathétérisme par voie transseptale avec ponction transseptale",
      "target" : [{
        "code" : "429267006",
        "display" : "cathétérisme transseptal du coeur gauche par ponction atriale",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Transseptal catheterization of left side of heart by atrial puncture"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0004",
      "display" : "Test d'occlusion diagnostique par voie percutanée",
      "target" : [{
        "code" : "699803004",
        "display" : "Balloon test occlusion",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Balloon test occlusion"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0005",
      "display" : "Geste percutané avec traitement adjuvant",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0006",
      "display" : "Cathétérisme cardiaque diagnostique : angiographie",
      "target" : [{
        "code" : "34945008",
        "display" : "angiocardiographie",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0007",
      "display" : "Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques",
      "target" : [{
        "code" : "41976001",
        "display" : "cathétérisme cardiaque",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0008",
      "display" : "Cathétérisme cardiaque diagnostique avec épreuve de modification hémodynamique",
      "target" : [{
        "code" : "41976001",
        "display" : "cathétérisme cardiaque",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0009",
      "display" : "Cathétérisme d'évaluation d'une hypertension pulmonaire",
      "target" : [{
        "code" : "40403005",
        "display" : "cathétérisme du côté droit du cœur",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Right heart catheterization"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0010",
      "display" : "Cathétérisme diagnostique à visée interventionnelle : anatomie inadaptée au geste",
      "target" : [{
        "code" : "41976001",
        "display" : "cathétérisme cardiaque",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0011",
      "display" : "Geste percutané pour trouble du rythme",
      "target" : [{
        "code" : "233154000",
        "display" : "procédure pour arythmie",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Procedure for arrhythmia (voie non précisée)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0012",
      "display" : "Geste percutané pour trouble du rythme atrial",
      "target" : [{
        "code" : "233154000",
        "display" : "procédure pour arythmie",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0013",
      "display" : "Geste percutané pour trouble du rythme ventriculaire",
      "target" : [{
        "code" : "870252007",
        "display" : "ablation d'une tachycardie ventriculaire",
        "equivalence" : "narrower",
        "comment" : "proposé v6, à vérifier — Ventricular tachycardia ablation"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0014",
      "display" : "Cathétérisme cardiaque diagnostique avec épreuve électrophysiologique",
      "target" : [{
        "code" : "82982002",
        "display" : "stimulation électrophysiologique cardiaque et étude d'enregistrement",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — Cardiac electrophysiologic stimulation and recording study"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0015",
      "display" : "Exploration électrophysiologique",
      "target" : [{
        "code" : "252425004",
        "display" : "électrophysiologie cardiaque",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0016",
      "display" : "Exploration électrophysiologique avec cartographie tridimensionnelle",
      "target" : [{
        "code" : "707833003",
        "display" : "Percutaneous transluminal three dimensional electroanatomic mapping of conducting system of heart",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous transluminal 3D electroanatomic mapping"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0017",
      "display" : "Geste fœtal",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0018",
      "display" : "Coagulation laser des anastomoses placentaires dans le syndrome transfuseur-transfusé",
      "target" : [{
        "code" : "709117007",
        "display" : "photocoagulation fœtoscopique au laser d'un vaisseau placentaire pour un syndrome transfuseur-transfusé",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Fetoscopic laser photocoagulation of placental vessel for TTTS"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0019",
      "display" : "Geste fœtal par cathéter",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0020",
      "display" : "Valvuloplastie pulmonaire fœtale au ballon",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — pas de concept fœtal ; valvuloplastie postnatale seulement"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0021",
      "display" : "Valvuloplastie aortique fœtale au ballon",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — pas de concept fœtal ; valvuloplastie postnatale seulement"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0022",
      "display" : "Péricardiocentèse fœtale par cathéter",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0023",
      "display" : "Atrioseptostomie fœtale au ballon",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0024",
      "display" : "Cathétérisme thérapeutique avec échec de largage d'un dispositif, d'un stent ou d'un coil",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0025",
      "display" : "Geste de cathétérisme cardiovasculaire",
      "target" : [{
        "code" : "41976001",
        "display" : "cathétérisme cardiaque",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0026",
      "display" : "Nouveau cathétérisme pour lésion résiduelle ou récidivante",
      "target" : [{
        "code" : "41976001",
        "display" : "cathétérisme cardiaque",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — la notion de reprise n'est pas codée"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0027",
      "display" : "Redilatation de stent",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — pas de concept de redilatation de stent vasculaire"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0028",
      "display" : "Pose de stent",
      "target" : [{
        "code" : "429381005",
        "display" : "traitement endovasculaire par prothèse",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Endovascular insertion of stent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0029",
      "display" : "Dilatation au ballon",
      "target" : [{
        "code" : "68457009",
        "display" : "angioplastie transluminale percutanée par ballonnet guidée par imagerie avec produit de contraste",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous balloon angioplasty"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0030",
      "display" : "Implantation d'un dispositif par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0031",
      "display" : "Occlusion par coil au cours d'un cathétérisme",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — seuls des concepts d'embolisation par coil site-spécifiques existent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0032",
      "display" : "Implantation percutanée d'une valve",
      "target" : [{
        "code" : "112815000",
        "display" : "implantation d'une valve cardiaque",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Implantation of heart valve (voie non précisée)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0033",
      "display" : "Fermeture percutanée d'une fuite de prothèse valvulaire par dispositif",
      "target" : [{
        "code" : "1231783006",
        "display" : "Percutaneous closure of prosthetic cardiac paravalvular leak using device",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0034",
      "display" : "Dilatation valvulaire au ballon",
      "target" : [{
        "code" : "24394009",
        "display" : "valvuloplastie cardiaque percutanée par ballonnet",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous balloon valvuloplasty of heart"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0035",
      "display" : "Cathétérisme cardiovasculaire thérapeutique",
      "target" : [{
        "code" : "41976001",
        "display" : "cathétérisme cardiaque",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — pas de concept « cathétérisme thérapeutique »"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0036",
      "display" : "Perforation thérapeutique percutanée pour créer une communication entre cavités ou vaisseaux",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0037",
      "display" : "Cathétérisme cardiaque diagnostique",
      "target" : [{
        "code" : "41976001",
        "display" : "cathétérisme cardiaque",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Insertion of catheter into heart chamber (cathétérisme cardiaque)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0038",
      "display" : "Agrandissement d'une communication interventriculaire",
      "target" : [{
        "code" : "233104006",
        "display" : "élargissement de communication interventriculaire restrictive",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Enlargement of restrictive ventricular septal defect"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0039",
      "display" : "Agrandissement ou création d'une communication interventriculaire",
      "target" : [{
        "code" : "233104006",
        "display" : "élargissement de communication interventriculaire restrictive",
        "equivalence" : "narrower",
        "comment" : "proposé v6, à vérifier — agrandissement seulement"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0040",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie) : stade 1",
      "target" : [{
        "code" : "233141007",
        "display" : "mise en place d'endoprothèse dans le canal artériel avec cerclage des deux artères pulmonaires",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — Placement of stent in ductus arteriosus and banding of both pulmonary arteries"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0041",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s) et retrait des cerclages pulmonaires",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0042",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s), retrait des cerclages pulmonaires et réparation de l'arche",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0043",
      "display" : "Échographie endocoronaire",
      "target" : [{
        "code" : "310658009",
        "display" : "échographie intravasculaire d'artère coronaire",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Intravascular ultrasound of coronary artery"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0044",
      "display" : "Échocardiographie",
      "target" : [{
        "code" : "40701008",
        "display" : "échocardiographie",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Echocardiography"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0045",
      "display" : "Échocardiographie transœsophagienne",
      "target" : [{
        "code" : "105376000",
        "display" : "échocardiographie transœsophagienne",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — TEE procedure"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0046",
      "display" : "Geste percutané guidé par échographie intracardiaque",
      "target" : [{
        "code" : "425789000",
        "display" : "Transluminal intracardiac echocardiography",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Transluminal intracardiac echocardiography"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0047",
      "display" : "Geste percutané sous guidage radiologique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — modalité de guidage"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0048",
      "display" : "Geste percutané sous guidage par IRM",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — modalité de guidage"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0049",
      "display" : "Geste percutané sous guidage radiologique et IRM",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — modalité de guidage"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0050",
      "display" : "Geste percutané sous guidage échographique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — modalité de guidage"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0051",
      "display" : "Imagerie endocoronaire par tomographie par cohérence optique",
      "target" : [{
        "code" : "698254001",
        "display" : "Intravascular optical coherence tomography of coronary vessel",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Intravascular OCT of coronary vessel"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0052",
      "display" : "Retrait peropératoire complet ou partiel d'un stent de l'artère pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0053",
      "display" : "Geste sur l'artère pulmonaire",
      "target" : [{
        "code" : "175266007",
        "display" : "intervention chirurgicale transluminale du tronc pulmonaire",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — Transluminal operations on pulmonary artery"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0054",
      "display" : "Occlusion d'une collatérale veino-veineuse par dispositif",
      "target" : [{
        "code" : "1389030008",
        "display" : "Percutaneous transluminal embolization of intrathoracic venovenous collateral circulation using imaging guidance",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous transluminal embolisation of intrathoracic venovenous collateral"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0055",
      "display" : "Occlusion percutanée d'une veine systémique",
      "target" : [{
        "code" : "175871007",
        "display" : "Percutaneous transluminal embolization of vein",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous transluminal embolisation of vein"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0056",
      "display" : "Pose de stent dans l'artère pulmonaire droite",
      "target" : [{
        "code" : "233215007",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0057",
      "display" : "Pose de stent dans l'artère pulmonaire gauche",
      "target" : [{
        "code" : "233215007",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0058",
      "display" : "Pose de stent dans l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "233215007",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Stenting of pulmonary artery"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0059",
      "display" : "Pose de stent dans l'artère pulmonaire droite, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "233215007",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0060",
      "display" : "Pose de stent dans l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "233215007",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0061",
      "display" : "Pose de stent dans l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "233215007",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0062",
      "display" : "Pose de stent dans l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "233215007",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0063",
      "display" : "Redilatation d'un stent de l'artère pulmonaire droite, en amont de la bifurcation hilaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — pas de redilatation de stent pulmonaire en SNOMED"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0064",
      "display" : "Redilatation d'un stent de l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — pas de redilatation de stent pulmonaire en SNOMED"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0065",
      "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — pas de redilatation de stent pulmonaire en SNOMED"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0066",
      "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — pas de redilatation de stent pulmonaire en SNOMED"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0067",
      "display" : "Pose de stent entre l'artère pulmonaire gauche et l'aorte descendante (Potts inverse)",
      "target" : [{
        "code" : "86642005",
        "display" : "pontage entre l'aorte descendante et l'artère pulmonaire",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — Creation of shunt of descending aorta to pulmonary artery (Potts chirurgical)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0068",
      "display" : "Pose de stent sur une coarctation de l'aorte",
      "target" : [{
        "code" : "448785002",
        "display" : "mise en place d'endoprothèse au site de coarctation aortique",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0069",
      "display" : "Pose de stent sur une recoarctation de l'aorte",
      "target" : [{
        "code" : "448785002",
        "display" : "mise en place d'endoprothèse au site de coarctation aortique",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0070",
      "display" : "Pose de stent sur une coarctation (ou hypoplasie) native de l'aorte",
      "target" : [{
        "code" : "448785002",
        "display" : "mise en place d'endoprothèse au site de coarctation aortique",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Placement of stent at site of coarctation of aorta"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0071",
      "display" : "Redilatation d'un stent de l'aorte thoracique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0072",
      "display" : "Pose de stent dans une veine pulmonaire",
      "target" : [{
        "code" : "232978003",
        "display" : "insertion d'endoprothèse dans une veine pulmonaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0073",
      "display" : "Pose de stent dans une veine pulmonaire ou un chenal veineux pulmonaire",
      "target" : [{
        "code" : "232981008",
        "display" : "insertion d'endoprothèse dans une voie veineuse pulmonaire",
        "equivalence" : "narrower",
        "comment" : "proposé v6, à vérifier — Insertion of stent in pulmonary venous pathway"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0074",
      "display" : "Pose de stent dans la veine cave supérieure",
      "target" : [{
        "code" : "232989005",
        "display" : "mise en place de prothèse dans veine cave supérieure",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Stenting of superior vena cava"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0075",
      "display" : "Pose de stent dans une veine systémique ou un chenal veineux systémique",
      "target" : [{
        "code" : "233003002",
        "display" : "insertion d'endoprothèse dans une voie veineuse systémique",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0076",
      "display" : "Redilatation d'un stent d'une veine systémique",
      "target" : [{
        "code" : "233441004",
        "display" : "Adjustment of venous stent",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — Adjustment of venous stent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0077",
      "display" : "Redilatation d'un stent d'une veine pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0078",
      "display" : "Cryoablation percutanée d'un trouble du rythme",
      "target" : [{
        "code" : "233161001",
        "display" : "cryoablation pour arythmie",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Cryoablation operation for arrhythmia"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0079",
      "display" : "Ablation percutanée d'un trouble du rythme par radiofréquence",
      "target" : [{
        "code" : "233163003",
        "display" : "ablation par radiofréquence pour arythmie",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Radiofrequency ablation operation for arrhythmia"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0080",
      "display" : "Ablation percutanée avec isolation des veines pulmonaires",
      "target" : [{
        "code" : "707831001",
        "display" : "ablation transluminale percutanée d'une veine pulmonaire au système conducteur de l'atrium gauche",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous transluminal ablation of pulmonary vein to left atrium conduction"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0081",
      "display" : "Ablation percutanée d'un trouble du rythme",
      "target" : [{
        "code" : "233159005",
        "display" : "ablation pour arythmie",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Ablation operation for arrhythmia"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0082",
      "display" : "Geste sur une artère coronaire",
      "target" : [{
        "code" : "31413008",
        "display" : "intervention chirurgicale d'une artère coronaire",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Operative procedure on coronary arteries"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0083",
      "display" : "Occlusion percutanée d'une fistule coronaire",
      "target" : [{
        "code" : "232737008",
        "display" : "embolisation d'une fistule d'une artère coronaire",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Embolization of coronary artery fistula"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0084",
      "display" : "Injection intracoronaire percutanée d'un agent thrombolytique",
      "target" : [{
        "code" : "384694007",
        "display" : "injection d'un agent thrombolytique directement dans l'artère coronaire",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Injection of thrombolytic agent direct into coronary artery"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0085",
      "display" : "Angioplastie coronaire percutanée au ballon",
      "target" : [{
        "code" : "1343583001",
        "display" : "Fluoroscopy guided percutaneous transluminal balloon angioplasty of coronary artery with contrast",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous transluminal balloon angioplasty of coronary artery"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0086",
      "display" : "Pose percutanée d'un stent coronaire",
      "target" : [{
        "code" : "36969009",
        "display" : "pose de l'endoprothèse dans l'artère coronaire",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Placement of stent in coronary artery"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0087",
      "display" : "Occlusion chimique percutanée d'une artère coronaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0088",
      "display" : "Redilatation d'un stent coronaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0089",
      "display" : "Fermeture percutanée d'une fenêtre aorto-pulmonaire par prothèse",
      "target" : [{
        "code" : "61192001",
        "display" : "fermeture d'une fistule ou fenestration aorticopulmonaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0090",
      "display" : "Dilatation au ballon d'une coarctation (ou hypoplasie) native de l'aorte",
      "target" : [{
        "code" : "308696000",
        "display" : "angioplastie de coarctation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0091",
      "display" : "Dilatation au ballon d'une recoarctation de l'aorte",
      "target" : [{
        "code" : "308696000",
        "display" : "angioplastie de coarctation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0092",
      "display" : "Levée d'obstacle percutanée d'une coarctation de l'aorte",
      "target" : [{
        "code" : "443829004",
        "display" : "angioplastie transluminale percutanée par ballonnet d'une coarctation de l'aorte avec insertion d'une endoprothèse guidée par radioscopie avec produit de contraste",
        "equivalence" : "narrower",
        "comment" : "proposé v6, à vérifier — Repair of coarctation of aorta using percutaneous balloon angioplasty"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0093",
      "display" : "Geste sur une artère systémique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0094",
      "display" : "Occlusion d'une fistule artério-veineuse",
      "target" : [{
        "code" : "71330003",
        "display" : "réparation d'une fistule artérioveineuse par occlusion",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0095",
      "display" : "Fermeture d'une fistule artério-veineuse pulmonaire",
      "target" : [{
        "code" : "233220007",
        "display" : "embolisation d'une malformation artérioveineuse pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Embolisation of pulmonary arteriovenous malformation"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0096",
      "display" : "Fermeture partielle d'une communication interatriale",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0097",
      "display" : "Atrioseptostomie au ballon par retrait (Rashkind)",
      "target" : [{
        "code" : "233044001",
        "display" : "septostomie auriculaire par ballonnet par retrait",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0098",
      "display" : "Atrioseptostomie à la lame",
      "target" : [{
        "code" : "31415001",
        "display" : "septostomie atriale à l'aide d'un bistouri",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Blade atrial septostomy"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0099",
      "display" : "Création ou agrandissement d'une communication interatriale",
      "target" : [{
        "code" : "7824000",
        "display" : "élargissement de communication septale auriculaire pré-existante",
        "equivalence" : "narrower",
        "comment" : "proposé v6, à vérifier — Enlargement of pre-existing atrial septal defect"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0100",
      "display" : "Atrioseptostomie au ballon",
      "target" : [{
        "code" : "271411002",
        "display" : "septostomie atriale transluminale à ballonnet",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — BAS - Balloon atrial septostomy"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0101",
      "display" : "Création percutanée d'une communication interatriale",
      "target" : [{
        "code" : "233038000",
        "display" : "intervention chirurgicale pour ouverture d'une CIA (communication interatriale)",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — Operation to open an interatrial communication"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0102",
      "display" : "Retrait d'un thrombus intracardiaque",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — seule l'extraction chirurgicale est codée (426067000)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0103",
      "display" : "Fermeture percutanée de l'auricule gauche par prothèse",
      "target" : [{
        "code" : "1344914001",
        "display" : "Open occlusion of left atrial appendage",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0104",
      "display" : "Geste sur la valve tricuspide",
      "target" : [{
        "code" : "232778005",
        "display" : "intervention chirurgicale sur la valve tricuspide",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — TV - Tricuspid valve operation"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0105",
      "display" : "Dilatation au ballon d'une prothèse valvulaire tricuspide",
      "target" : [{
        "code" : "232810003",
        "display" : "dilatation par ballonnet d'une prothèse de valve tricuspidienne",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0106",
      "display" : "Remplacement valvulaire tricuspide par voie percutanée",
      "target" : [{
        "code" : "25236004",
        "display" : "remplacement de la valve tricuspide",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Tricuspid valve replacement (voie non précisée)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0107",
      "display" : "Valve-in-valve tricuspide par voie percutanée",
      "target" : [{
        "code" : "25236004",
        "display" : "remplacement de la valve tricuspide",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — pas de valve-in-valve tricuspide en SNOMED"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0108",
      "display" : "Dilatation au ballon de la valve mitrale",
      "target" : [{
        "code" : "384642005",
        "display" : "valvuloplastie de la valve mitrale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0109",
      "display" : "Dilatation au ballon d'une prothèse valvulaire mitrale",
      "target" : [{
        "code" : "232770003",
        "display" : "dilatation par ballonnet d'une prothèse de valve mitrale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0110",
      "display" : "Réparation valvulaire mitrale par voie percutanée",
      "target" : [{
        "code" : "432394003",
        "display" : "réparation de la valve mitrale guidée par radioscopie",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0111",
      "display" : "Remplacement valvulaire mitral par voie percutanée",
      "target" : [{
        "code" : "720583008",
        "display" : "implantation transcathéter de valve mitrale guidée par radioscopie",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Transcatheter implantation of mitral valve using fluoroscopic guidance"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0112",
      "display" : "Valve-in-valve mitrale par voie percutanée",
      "target" : [{
        "code" : "1395984000",
        "display" : "Imaging guided percutaneous transcatheter mitral valve-in-valve replacement of bioprosthetic valve",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Imaging guided percutaneous transcatheter mitral valve-in-valve replacement"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0113",
      "display" : "Valve-in-valve mitrale transcathéter par voie transapicale",
      "target" : [{
        "code" : "1395984000",
        "display" : "Imaging guided percutaneous transcatheter mitral valve-in-valve replacement of bioprosthetic valve",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — valve-in-valve mitrale percutanée (pas transapicale)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0114",
      "display" : "Dilatation au ballon d'une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "449227002",
        "display" : "dilatation par ballonnet d'une dérivation de la circulation systémique vers l'artère pulmonaire",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0115",
      "display" : "Pose de stent dans une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "448949007",
        "display" : "mise en place d'endoprothèse dans une dérivation de la circulation systémique vers l'artère pulmonaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0116",
      "display" : "Occlusion percutanée d'une anastomose systémico-pulmonaire par dispositif ou embolisation",
      "target" : [{
        "code" : "448779009",
        "display" : "Occlusion of systemic to pulmonary artery shunt using transluminal embolic device",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0117",
      "display" : "Dilatation au ballon d'un conduit",
      "target" : [{
        "code" : "449033003",
        "display" : "dilatation par ballonnet d'un conduit cardiaque",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0118",
      "display" : "Pose de stent dans un conduit",
      "target" : [{
        "code" : "449389000",
        "display" : "pose d'une endoprothèse dans un conduit cardiaque",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0119",
      "display" : "Redilatation d'un stent dans un conduit",
      "target" : [{
        "code" : "449389000",
        "display" : "pose d'une endoprothèse dans un conduit cardiaque",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0120",
      "display" : "Redilatation d'un stent dans une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "449227002",
        "display" : "dilatation par ballonnet d'une dérivation de la circulation systémique vers l'artère pulmonaire",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0121",
      "display" : "Perforation et dilatation percutanées d'un conduit",
      "target" : [{
        "code" : "707813002",
        "display" : "dilatation transluminale percutanée par ballonnet d'un conduit cardiaque",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0122",
      "display" : "Perforation et dilatation percutanées d'une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "261562001",
        "display" : "angioplastie au niveau d'une dérivation de la circulation systémique vers l'artère pulmonaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0123",
      "display" : "Dilatation au ballon d'une veine pulmonaire",
      "target" : [{
        "code" : "276892002",
        "display" : "angioplastie percutanée par ballonnet d'une veine pulmonaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0124",
      "display" : "Dilatation d'une veine pulmonaire au ballon de découpe",
      "target" : [{
        "code" : "712817003",
        "display" : "angioplastie transluminale percutanée par ballonnet coupant d'une veine pulmonaire guidée par radioscopie avec produit de contraste",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous transluminal cutting balloon angioplasty (veine pulmonaire)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0125",
      "display" : "Dilatation au ballon d'une veine pulmonaire ou d'un chenal veineux pulmonaire",
      "target" : [{
        "code" : "276895000",
        "display" : "angioplastie transluminale percutanée par ballonnet d'une voie veineuse pulmonaire guidée par radioscopie avec produit de contraste",
        "equivalence" : "narrower",
        "comment" : "proposé v6, à vérifier — Percutaneous balloon angioplasty of pulmonary venous pathway"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0126",
      "display" : "Dilatation au ballon d'une veine systémique ou d'un chenal veineux systémique",
      "target" : [{
        "code" : "276896004",
        "display" : "angioplastie percutanée par ballonnet d'une voie veineuse systémique",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0127",
      "display" : "Dilatation au ballon du tronc de l'artère pulmonaire",
      "target" : [{
        "code" : "233214006",
        "display" : "angioplastie de l'artère pulmonaire",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0128",
      "display" : "Dilatation au ballon de l'artère pulmonaire droite",
      "target" : [{
        "code" : "233214006",
        "display" : "angioplastie de l'artère pulmonaire",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0129",
      "display" : "Dilatation au ballon de l'artère pulmonaire gauche",
      "target" : [{
        "code" : "233214006",
        "display" : "angioplastie de l'artère pulmonaire",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0130",
      "display" : "Restriction du débit du tronc pulmonaire par dispositif implanté par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0131",
      "display" : "Restriction du débit des artères pulmonaires droite et gauche par dispositifs implantés par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — pas de restricteur de débit percutané en SNOMED"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0132",
      "display" : "Dilatation de l'arbre artériel pulmonaire au ballon de découpe",
      "target" : [{
        "code" : "433256008",
        "display" : "angioplastie transluminale percutanée par ballonnet coupant de l'artère pulmonaire guidée par radioscopie avec produit de contraste",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous transluminal cutting balloon angioplasty of pulmonary artery"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0133",
      "display" : "Geste percutané sur une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "code" : "233114002",
        "display" : "intervention chirurgicale pour grandes artères collatérales aortopulmonaires",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Operation for major aortopulmonary collateral arteries"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0134",
      "display" : "Pose de stent dans une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "code" : "707824000",
        "display" : "insertion transluminale percutanée d'endoprothèse dans une artère collatérale majeure de la circulation systémique à pulmonaire",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Endovascular insertion of stent into MAPCA"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0135",
      "display" : "Occlusion percutanée d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA) par coil ou dispositif",
      "target" : [{
        "code" : "707823006",
        "display" : "Percutaneous transluminal embolization for major systemic to pulmonary collateral artery",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0136",
      "display" : "Dilatation au ballon d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "code" : "707822001",
        "display" : "angioplastie transluminale percutanée par ballonnet pour réparation d'une artère collatérale majeure de la circulation systémique à pulmonaire guidée par radioscopie avec produit de contraste",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous transluminal balloon angioplasty for MAPCA"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0137",
      "display" : "Pose de stent dans le canal artériel",
      "target" : [{
        "code" : "428280004",
        "display" : "insertion d'une endoprothèse dans le canal artériel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0138",
      "display" : "Redilatation d'un stent du canal artériel",
      "target" : [{
        "code" : "233202003",
        "display" : "dilatation par ballonnet du canal artériel",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0139",
      "display" : "Geste sur le canal artériel ou le ligament artériel",
      "target" : [{
        "code" : "265859004",
        "display" : "réparation d'un canal artériel persistant",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Operation on the ductus arteriosus"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0140",
      "display" : "Fermeture percutanée du canal artériel par prothèse",
      "target" : [{
        "code" : "698642008",
        "display" : "fermeture par voie percutanée du ligament artériel persistant",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0141",
      "display" : "Fermeture percutanée du canal artériel par coil",
      "target" : [{
        "code" : "441676000",
        "display" : "fermeture d'une persistance du canal artériel par microspires",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Occlusion of PDA using embolization coil"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0142",
      "display" : "Fermeture percutanée du canal artériel par plug",
      "target" : [{
        "code" : "175218000",
        "display" : "fermeture par voie transluminale du canal artériel avec prothèse",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Transluminal closure of ductus arteriosus with prosthesis"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0143",
      "display" : "Geste sur la valve pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0144",
      "display" : "Dilatation au ballon de la valve pulmonaire",
      "target" : [{
        "code" : "46897002",
        "display" : "valvuloplastie percutanée par ballonnet de la valve pulmonaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0145",
      "display" : "Dilatation au ballon d'une prothèse valvulaire pulmonaire",
      "target" : [{
        "code" : "232869005",
        "display" : "dilatation par ballonnet d'une prothèse de valve pulmonaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0146",
      "display" : "Perforation et dilatation percutanées de la valve pulmonaire",
      "target" : [{
        "code" : "442188002",
        "display" : "valvulotomie transluminale percutanée de valve pulmonaire avec valvuloplastie",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0147",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent",
      "target" : [{
        "code" : "787162002",
        "display" : "implantation d'une prothèse de valve pulmonaire, par voie percutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0148",
      "display" : "Valve-in-valve pulmonaire par voie percutanée (réimplantation)",
      "target" : [{
        "code" : "787162002",
        "display" : "implantation d'une prothèse de valve pulmonaire, par voie percutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0149",
      "display" : "Implantation percutanée d'une valve aortique montée sur stent",
      "target" : [{
        "code" : "773996000",
        "display" : "implantation d'une valve aortique transcathéter",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0150",
      "display" : "Valve-in-valve aortique par voie percutanée (réimplantation)",
      "target" : [{
        "code" : "773996000",
        "display" : "implantation d'une valve aortique transcathéter",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0151",
      "display" : "Implantation d'une valve aortique par voie transapicale (approche hybride)",
      "target" : [{
        "code" : "443887000",
        "display" : "implantation transapicale d'une valve aortique prothétique",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Transapical implantation of aortic valve"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0152",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec pré-stenting",
      "target" : [{
        "code" : "787162002",
        "display" : "implantation d'une prothèse de valve pulmonaire, par voie percutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Percutaneous pulmonary valve implantation"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0153",
      "display" : "Pré-stenting de la voie pulmonaire en préparation d'un remplacement valvulaire",
      "target" : [{
        "code" : "443532008",
        "display" : "mise en place percutanée de prothèse dans la chambre de chasse ventriculaire droite, sous fluoroscopie",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — Percutaneous insertion of stent into RVOT"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0154",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec rupture volontaire de la prothèse antérieure",
      "target" : [{
        "code" : "787162002",
        "display" : "implantation d'une prothèse de valve pulmonaire, par voie percutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0155",
      "display" : "Dilatation au ballon de la valve aortique",
      "target" : [{
        "code" : "77166000",
        "display" : "valvuloplastie aortique percutanée par ballonnet",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0156",
      "display" : "Dilatation au ballon d'une prothèse valvulaire aortique",
      "target" : [{
        "code" : "232835009",
        "display" : "dilatation par ballonnet de la valve aortique implantée",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Balloon dilatation of implanted aortic valve"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0157",
      "display" : "Perforation et dilatation percutanées de la valve aortique",
      "target" : [{
        "code" : "77166000",
        "display" : "valvuloplastie aortique percutanée par ballonnet",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Percutaneous balloon valvuloplasty of aortic valve"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0158",
      "display" : "Fenestration percutanée du septum interatrial ou d'un tunnel atrial",
      "target" : [{
        "code" : "233043007",
        "display" : "septostomie atriale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0159",
      "display" : "Approche hybride stade 1 : cerclage bilatéral des artères pulmonaires et stent du canal artériel par voie percutanée",
      "target" : [{
        "code" : "233141007",
        "display" : "mise en place d'endoprothèse dans le canal artériel avec cerclage des deux artères pulmonaires",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Placement of stent in ductus arteriosus and banding of both pulmonary arteries"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0160",
      "display" : "Stratégie hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie)",
      "target" : [{
        "code" : "14257002",
        "display" : "traitement d'hypoplasie ventriculaire gauche",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Repair of hypoplastic left heart syndrome"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0161",
      "display" : "Fermeture percutanée de la fenestration d'un tunnel atrial (Fontan) par prothèse",
      "target" : [{
        "code" : "53941002",
        "display" : "fermeture de fenestration septale du coeur",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Closure of septal fenestration of heart"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0162",
      "display" : "Complétion percutanée de la dérivation cavo-pulmonaire totale par stent couvert de la veine cave inférieure à la veine cave supérieure",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0163",
      "display" : "Fermeture percutanée d'une communication interventriculaire par prothèse",
      "target" : [{
        "code" : "233100002",
        "display" : "fermeture transluminale percutanée de communication interventriculaire avec prothèse",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0164",
      "display" : "Fenestration percutanée d'un patch de communication interventriculaire",
      "target" : [{
        "code" : "233101003",
        "display" : "intervention chirurgicale au niveau d'un patch du septum interventriculaire",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — Operation on ventricular septal patch"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0165",
      "display" : "Fermeture peropératoire d'une communication interventriculaire par dispositif (approche hybride)",
      "target" : [{
        "code" : "233100002",
        "display" : "fermeture transluminale percutanée de communication interventriculaire avec prothèse",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Transluminal closure of VSD using device (le temps peropératoire n'est pas codé)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0166",
      "display" : "Création percutanée d'une communication interventriculaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0167",
      "display" : "Fermeture percutanée d'une communication interatriale de type ostium secundum par prothèse",
      "target" : [{
        "code" : "112811009",
        "display" : "fermeture d'une communication interatriale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0168",
      "display" : "Fermeture percutanée d'un foramen ovale perméable par prothèse",
      "target" : [{
        "code" : "41817002",
        "display" : "fermeture d'un foramen ovale perméable",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0169",
      "display" : "Fermeture percutanée d'une communication interatriale de type sinus venosus par stent couvert",
      "target" : [{
        "code" : "174899009",
        "display" : "fermeture d'une communication interatriale de type sinus venosus",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Repair of sinus venosus"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0170",
      "display" : "Fermeture percutanée d'une communication interatriale par prothèse",
      "target" : [{
        "code" : "30123000",
        "display" : "fermeture transluminale d'une communication interatriale avec prothèse",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Repair of ASD with prosthesis by closed heart technique (FR : fermeture transluminale)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0171",
      "display" : "Dilatation au ballon de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "233092001",
        "display" : "dilatation par ballonnet de la chambre de chasse du ventricule gauche",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Balloon dilation of left ventricular outflow tract"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0172",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "428589002",
        "display" : "retrait d'une obstruction de la chambre de chasse du ventricule gauche",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Removal of obstruction of left ventricular outflow tract"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0173",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche par alcoolisation coronaire percutanée",
      "target" : [{
        "code" : "1354588005",
        "display" : "Percutaneous transluminal ablation of hypertrophy of myocardium of septal region of left ventricle using alcohol",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous transluminal ablation of septal hypertrophy (alcoolisation)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0174",
      "display" : "Geste sur le ventricule gauche",
      "target" : [{
        "code" : "233076006",
        "display" : "intervention chirurgicale du ventricule cardiaque gauche",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — LV - Left ventricular operation"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0175",
      "display" : "Dilatation au ballon de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "233067004",
        "display" : "dilatation par ballonnet de la chambre de chasse du ventricule droit",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0176",
      "display" : "Pose de stent dans la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "443532008",
        "display" : "mise en place percutanée de prothèse dans la chambre de chasse ventriculaire droite, sous fluoroscopie",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Percutaneous insertion of stent into RVOT using fluoroscopic guidance"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0177",
      "display" : "Biopsie ventriculaire droite par voie percutanée",
      "target" : [{
        "code" : "308683001",
        "display" : "biopsie transluminale ventriculaire droite après transplantation cardiaque",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0178",
      "display" : "Geste sur le ventricule droit",
      "target" : [{
        "code" : "233051005",
        "display" : "intervention chirurgicale sur le ventricule cardiaque droit",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — RV - Right ventricular operation"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0179",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "429312007",
        "display" : "retrait d'une obstruction de la chambre de chasse du ventricule droit",
        "equivalence" : "equivalent",
        "comment" : "proposé v6, à vérifier — Removal of obstruction of right ventricular outflow tract"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0180",
      "display" : "Redilatation d'un stent de la voie d'éjection native du ventricule droit",
      "target" : [{
        "code" : "233067004",
        "display" : "dilatation par ballonnet de la chambre de chasse du ventricule droit",
        "equivalence" : "inexact",
        "comment" : "proposé v6, à vérifier — Balloon dilation of RVOT (redilatation de stent non distinguée)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0181",
      "display" : "Péricardiocentèse percutanée",
      "target" : [{
        "code" : "428394001",
        "display" : "péricardiocentèse transluminale percutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0182",
      "display" : "Embolectomie percutanée de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "175268008",
        "display" : "embolectomie percutanée de l'artère pulmonaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0183",
      "display" : "Embolisation lymphatique percutanée",
      "target" : [{
        "code" : "1357782001",
        "display" : "Fluoroscopy guided percutaneous embolization of lymphatic vessel with contrast",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0184",
      "display" : "Redilatation de stent avec fracture volontaire du stent",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0185",
      "display" : "Extraction percutanée d'un dispositif ou d'un corps étranger",
      "target" : [{
        "code" : "708810002",
        "display" : "Endovascular retrieval of foreign body from aorta",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0186",
      "display" : "Geste percutané pour complication du cathétérisme",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6, à vérifier"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0187",
      "display" : "Retrait chirurgical d'un dispositif",
      "target" : [{
        "code" : "128538000",
        "display" : "retrait d'un dispositif",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Removal of device"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0188",
      "display" : "Geste sur une veine systémique",
      "target" : [{
        "code" : "232985004",
        "display" : "intervention chirurgicale sur une veine systémique de gros calibre",
        "equivalence" : "wider",
        "comment" : "proposé v6, à vérifier — Operation on systemic great vein"
      }]
    }]
  }]
}

```
