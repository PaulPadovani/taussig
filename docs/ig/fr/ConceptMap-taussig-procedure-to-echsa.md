# TAUSSIG — Gestes TAUSSIG vers ECHSA - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Gestes TAUSSIG vers ECHSA (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-procedure-to-echsa",
  "url" : "https://taussig/fhir/ConceptMap/taussig-procedure-to-echsa",
  "version" : "0.8.0",
  "name" : "TaussigProcedureToEchsa",
  "title" : "TAUSSIG — Gestes TAUSSIG vers ECHSA",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des 188 concepts TAUSSIG de gestes vers ECHSA. Équivalence vue depuis le concept TAUSSIG (source). « unmatched » : aucun code ne convient. Les correspondances « proposé v6 » restent à vérifier.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-procedure",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-procedure",
    "target" : "https://taussig/fhir/CodeSystem/echsa",
    "element" : [{
      "code" : "TAUSSIG-PROC-0001",
      "display" : "Pose percutanée d'un stent sur un anévrisme de l'aorte thoracique",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0002",
      "display" : "Stratégie hybride (chirurgie et cathétérisme combinés)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0003",
      "display" : "Cathétérisme par voie transseptale avec ponction transseptale",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — technique d'abord"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0004",
      "display" : "Test d'occlusion diagnostique par voie percutanée",
      "target" : [{
        "code" : "PROC-2010-2530",
        "display" : "Cardiovascular catheterization procedure, Diagnostic, Transluminal test occlusion",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0005",
      "display" : "Geste percutané avec traitement adjuvant",
      "target" : [{
        "code" : "PROC-2010-2670",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Adjunctive therapy",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0006",
      "display" : "Cathétérisme cardiaque diagnostique : angiographie",
      "target" : [{
        "code" : "PROC-2010-2520",
        "display" : "Cardiovascular catheterization procedure, Diagnostic, Angiographic data obtained",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0007",
      "display" : "Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques",
      "target" : [{
        "code" : "PROC-2010-2510",
        "display" : "Cardiovascular catheterization procedure, Diagnostic, Hemodynamic data obtained",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0008",
      "display" : "Cathétérisme cardiaque diagnostique avec épreuve de modification hémodynamique",
      "target" : [{
        "code" : "PROC-2010-2540",
        "display" : "Cardiovascular catheterization procedure, Diagnostic, Hemodynamic alteration",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0009",
      "display" : "Cathétérisme d'évaluation d'une hypertension pulmonaire",
      "target" : [{
        "code" : "PROC-2010-2510",
        "display" : "Cardiovascular catheterization procedure, Diagnostic, Hemodynamic data obtained",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0010",
      "display" : "Cathétérisme diagnostique à visée interventionnelle : anatomie inadaptée au geste",
      "target" : [{
        "code" : "PROC-2010-2500",
        "display" : "Cardiovascular catheterization procedure, Diagnostic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0011",
      "display" : "Geste percutané pour trouble du rythme",
      "target" : [{
        "code" : "PROC-2010-2680",
        "display" : "Cardiovascular electrophysiological catheterization procedure",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0012",
      "display" : "Geste percutané pour trouble du rythme atrial",
      "target" : [{
        "code" : "PROC-2010-2680",
        "display" : "Cardiovascular electrophysiological catheterization procedure",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0013",
      "display" : "Geste percutané pour trouble du rythme ventriculaire",
      "target" : [{
        "code" : "PROC-2010-2680",
        "display" : "Cardiovascular electrophysiological catheterization procedure",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0014",
      "display" : "Cathétérisme cardiaque diagnostique avec épreuve électrophysiologique",
      "target" : [{
        "code" : "PROC-2010-2550",
        "display" : "Cardiovascular catheterization procedure, Diagnostic, Electrophysiology alteration",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0015",
      "display" : "Exploration électrophysiologique",
      "target" : [{
        "code" : "PROC-2010-2680",
        "display" : "Cardiovascular electrophysiological catheterization procedure",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0016",
      "display" : "Exploration électrophysiologique avec cartographie tridimensionnelle",
      "target" : [{
        "code" : "PROC-2010-2680",
        "display" : "Cardiovascular electrophysiological catheterization procedure",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0017",
      "display" : "Geste fœtal",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0018",
      "display" : "Coagulation laser des anastomoses placentaires dans le syndrome transfuseur-transfusé",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0019",
      "display" : "Geste fœtal par cathéter",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0020",
      "display" : "Valvuloplastie pulmonaire fœtale au ballon",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0021",
      "display" : "Valvuloplastie aortique fœtale au ballon",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0022",
      "display" : "Péricardiocentèse fœtale par cathéter",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0023",
      "display" : "Atrioseptostomie fœtale au ballon",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0024",
      "display" : "Cathétérisme thérapeutique avec échec de largage d'un dispositif, d'un stent ou d'un coil",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6 — ECHSA-AEPC : « Device implantation attempted » (P04)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0025",
      "display" : "Geste de cathétérisme cardiovasculaire",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — générique thérapeutique ; le diagnostique est PROC-2010-2500"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0026",
      "display" : "Nouveau cathétérisme pour lésion résiduelle ou récidivante",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0027",
      "display" : "Redilatation de stent",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0028",
      "display" : "Pose de stent",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0029",
      "display" : "Dilatation au ballon",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0030",
      "display" : "Implantation d'un dispositif par voie percutanée",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0031",
      "display" : "Occlusion par coil au cours d'un cathétérisme",
      "target" : [{
        "code" : "PROC154",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Coil implantation",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0032",
      "display" : "Implantation percutanée d'une valve",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0033",
      "display" : "Fermeture percutanée d'une fuite de prothèse valvulaire par dispositif",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0034",
      "display" : "Dilatation valvulaire au ballon",
      "target" : [{
        "code" : "PROC-2010-2590",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0035",
      "display" : "Cathétérisme cardiovasculaire thérapeutique",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0036",
      "display" : "Perforation thérapeutique percutanée pour créer une communication entre cavités ou vaisseaux",
      "target" : [{
        "code" : "PROC-2010-2640",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0037",
      "display" : "Cathétérisme cardiaque diagnostique",
      "target" : [{
        "code" : "PROC-2010-2500",
        "display" : "Cardiovascular catheterization procedure, Diagnostic",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0038",
      "display" : "Agrandissement d'une communication interventriculaire",
      "target" : [{
        "code" : "PROC-2010-2640",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
        "equivalence" : "inexact",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0039",
      "display" : "Agrandissement ou création d'une communication interventriculaire",
      "target" : [{
        "code" : "PROC-2010-2640",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
        "equivalence" : "inexact",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0040",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie) : stade 1",
      "target" : [{
        "code" : "PROC-2010-2180",
        "display" : "Hybrid Approach \"Stage 1\", Stent placement in arterial duct (PDA) + application of RPA & LPA bands",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon les composantes réalisées"
      },
      {
        "code" : "PROC-2010-2160",
        "display" : "Hybrid Approach \"Stage 1\", Application of RPA & LPA bands",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon les composantes réalisées"
      },
      {
        "code" : "PROC-2010-2170",
        "display" : "Hybrid Approach \"Stage 1\", Stent placement in arterial duct (PDA)",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon les composantes réalisées"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0041",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s) et retrait des cerclages pulmonaires",
      "target" : [{
        "code" : "PROC-2010-2150",
        "display" : "Hybrid approach \"Stage 2\", Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding + Without aortic arch repair",
        "equivalence" : "equivalent",
        "comment" : "modifié v6 — Hybrid « Stage 2 » sans réparation de l'arche"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0042",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s), retrait des cerclages pulmonaires et réparation de l'arche",
      "target" : [{
        "code" : "PROC-2010-2140",
        "display" : "Hybrid approach \"Stage 2\", Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding + Aortic arch repair (Norwood [Stage 1] + Superior Cavopulmonary anastomosis(es) + PA Debanding)",
        "equivalence" : "equivalent",
        "comment" : "modifié v6 — Hybrid « Stage 2 » avec réparation de l'arche"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0043",
      "display" : "Échographie endocoronaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0044",
      "display" : "Échocardiographie",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0045",
      "display" : "Échocardiographie transœsophagienne",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0046",
      "display" : "Geste percutané guidé par échographie intracardiaque",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0047",
      "display" : "Geste percutané sous guidage radiologique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0048",
      "display" : "Geste percutané sous guidage par IRM",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0049",
      "display" : "Geste percutané sous guidage radiologique et IRM",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0050",
      "display" : "Geste percutané sous guidage échographique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0051",
      "display" : "Imagerie endocoronaire par tomographie par cohérence optique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0052",
      "display" : "Retrait peropératoire complet ou partiel d'un stent de l'artère pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — geste chirurgical"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0053",
      "display" : "Geste sur l'artère pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0054",
      "display" : "Occlusion d'une collatérale veino-veineuse par dispositif",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0055",
      "display" : "Occlusion percutanée d'une veine systémique",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0056",
      "display" : "Pose de stent dans l'artère pulmonaire droite",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0057",
      "display" : "Pose de stent dans l'artère pulmonaire gauche",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0058",
      "display" : "Pose de stent dans l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0059",
      "display" : "Pose de stent dans l'artère pulmonaire droite, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0060",
      "display" : "Pose de stent dans l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0061",
      "display" : "Pose de stent dans l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0062",
      "display" : "Pose de stent dans l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0063",
      "display" : "Redilatation d'un stent de l'artère pulmonaire droite, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0064",
      "display" : "Redilatation d'un stent de l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0065",
      "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0066",
      "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0067",
      "display" : "Pose de stent entre l'artère pulmonaire gauche et l'aorte descendante (Potts inverse)",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0068",
      "display" : "Pose de stent sur une coarctation de l'aorte",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0069",
      "display" : "Pose de stent sur une recoarctation de l'aorte",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0070",
      "display" : "Pose de stent sur une coarctation (ou hypoplasie) native de l'aorte",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0071",
      "display" : "Redilatation d'un stent de l'aorte thoracique",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0072",
      "display" : "Pose de stent dans une veine pulmonaire",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0073",
      "display" : "Pose de stent dans une veine pulmonaire ou un chenal veineux pulmonaire",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0074",
      "display" : "Pose de stent dans la veine cave supérieure",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0075",
      "display" : "Pose de stent dans une veine systémique ou un chenal veineux systémique",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0076",
      "display" : "Redilatation d'un stent d'une veine systémique",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0077",
      "display" : "Redilatation d'un stent d'une veine pulmonaire",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0078",
      "display" : "Cryoablation percutanée d'un trouble du rythme",
      "target" : [{
        "code" : "PROC-2010-2690",
        "display" : "Cardiovascular electrophysiological catheterization procedure, Therapeutic ablation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0079",
      "display" : "Ablation percutanée d'un trouble du rythme par radiofréquence",
      "target" : [{
        "code" : "PROC153",
        "display" : "RF ablation",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0080",
      "display" : "Ablation percutanée avec isolation des veines pulmonaires",
      "target" : [{
        "code" : "PROC-2010-2690",
        "display" : "Cardiovascular electrophysiological catheterization procedure, Therapeutic ablation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0081",
      "display" : "Ablation percutanée d'un trouble du rythme",
      "target" : [{
        "code" : "PROC-2010-2690",
        "display" : "Cardiovascular electrophysiological catheterization procedure, Therapeutic ablation",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0082",
      "display" : "Geste sur une artère coronaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0083",
      "display" : "Occlusion percutanée d'une fistule coronaire",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0084",
      "display" : "Injection intracoronaire percutanée d'un agent thrombolytique",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0085",
      "display" : "Angioplastie coronaire percutanée au ballon",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6 — ECHSA-AEPC : « Coronary intervention » (PP27)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0086",
      "display" : "Pose percutanée d'un stent coronaire",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6 — ECHSA-AEPC : « Coronary intervention » (PP27)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0087",
      "display" : "Occlusion chimique percutanée d'une artère coronaire",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0088",
      "display" : "Redilatation d'un stent coronaire",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0089",
      "display" : "Fermeture percutanée d'une fenêtre aorto-pulmonaire par prothèse",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0090",
      "display" : "Dilatation au ballon d'une coarctation (ou hypoplasie) native de l'aorte",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0091",
      "display" : "Dilatation au ballon d'une recoarctation de l'aorte",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0092",
      "display" : "Levée d'obstacle percutanée d'une coarctation de l'aorte",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0093",
      "display" : "Geste sur une artère systémique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0094",
      "display" : "Occlusion d'une fistule artério-veineuse",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0095",
      "display" : "Fermeture d'une fistule artério-veineuse pulmonaire",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider",
        "comment" : "proposé v6 — ECHSA-AEPC : « Embolisation » (PP08)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0096",
      "display" : "Fermeture partielle d'une communication interatriale",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0097",
      "display" : "Atrioseptostomie au ballon par retrait (Rashkind)",
      "target" : [{
        "code" : "PROC148",
        "display" : "ASD creation, Balloon septostomy (BAS) (Rashkind)",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0098",
      "display" : "Atrioseptostomie à la lame",
      "target" : [{
        "code" : "PROC149",
        "display" : "ASD creation, Blade septostomy",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0099",
      "display" : "Création ou agrandissement d'une communication interatriale",
      "target" : [{
        "code" : "PROC-2010-2580",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Septostomy",
        "equivalence" : "wider",
        "comment" : "proposé v6 — ECHSA-AEPC : « ASD - creation or enlargement » (PP01)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0100",
      "display" : "Atrioseptostomie au ballon",
      "target" : [{
        "code" : "PROC148",
        "display" : "ASD creation, Balloon septostomy (BAS) (Rashkind)",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0101",
      "display" : "Création percutanée d'une communication interatriale",
      "target" : [{
        "code" : "PROC-2010-2580",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Septostomy",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0102",
      "display" : "Retrait d'un thrombus intracardiaque",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6 — ECHSA-AEPC : « Thrombectomy percutaneous » (PP18)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0103",
      "display" : "Fermeture percutanée de l'auricule gauche par prothèse",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0104",
      "display" : "Geste sur la valve tricuspide",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0105",
      "display" : "Dilatation au ballon d'une prothèse valvulaire tricuspide",
      "target" : [{
        "code" : "PROC-2010-2590",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0106",
      "display" : "Remplacement valvulaire tricuspide par voie percutanée",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0107",
      "display" : "Valve-in-valve tricuspide par voie percutanée",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0108",
      "display" : "Dilatation au ballon de la valve mitrale",
      "target" : [{
        "code" : "PROC-2010-2590",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0109",
      "display" : "Dilatation au ballon d'une prothèse valvulaire mitrale",
      "target" : [{
        "code" : "PROC-2010-2590",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0110",
      "display" : "Réparation valvulaire mitrale par voie percutanée",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "modifié v6 — ECHSA-AEPC : « Mitraclip » (PP11)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0111",
      "display" : "Remplacement valvulaire mitral par voie percutanée",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0112",
      "display" : "Valve-in-valve mitrale par voie percutanée",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0113",
      "display" : "Valve-in-valve mitrale transcathéter par voie transapicale",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0114",
      "display" : "Dilatation au ballon d'une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0115",
      "display" : "Pose de stent dans une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0116",
      "display" : "Occlusion percutanée d'une anastomose systémico-pulmonaire par dispositif ou embolisation",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0117",
      "display" : "Dilatation au ballon d'un conduit",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0118",
      "display" : "Pose de stent dans un conduit",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0119",
      "display" : "Redilatation d'un stent dans un conduit",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0120",
      "display" : "Redilatation d'un stent dans une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0121",
      "display" : "Perforation et dilatation percutanées d'un conduit",
      "target" : [{
        "code" : "PROC-2010-2640",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0122",
      "display" : "Perforation et dilatation percutanées d'une anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "PROC-2010-2640",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0123",
      "display" : "Dilatation au ballon d'une veine pulmonaire",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0124",
      "display" : "Dilatation d'une veine pulmonaire au ballon de découpe",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0125",
      "display" : "Dilatation au ballon d'une veine pulmonaire ou d'un chenal veineux pulmonaire",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0126",
      "display" : "Dilatation au ballon d'une veine systémique ou d'un chenal veineux systémique",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0127",
      "display" : "Dilatation au ballon du tronc de l'artère pulmonaire",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0128",
      "display" : "Dilatation au ballon de l'artère pulmonaire droite",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0129",
      "display" : "Dilatation au ballon de l'artère pulmonaire gauche",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0130",
      "display" : "Restriction du débit du tronc pulmonaire par dispositif implanté par voie percutanée",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0131",
      "display" : "Restriction du débit des artères pulmonaires droite et gauche par dispositifs implantés par voie percutanée",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0132",
      "display" : "Dilatation de l'arbre artériel pulmonaire au ballon de découpe",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0133",
      "display" : "Geste percutané sur une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0134",
      "display" : "Pose de stent dans une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0135",
      "display" : "Occlusion percutanée d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA) par coil ou dispositif",
      "target" : [{
        "code" : "PROC154",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Coil implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0136",
      "display" : "Dilatation au ballon d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0137",
      "display" : "Pose de stent dans le canal artériel",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0138",
      "display" : "Redilatation d'un stent du canal artériel",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0139",
      "display" : "Geste sur le canal artériel ou le ligament artériel",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0140",
      "display" : "Fermeture percutanée du canal artériel par prothèse",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0141",
      "display" : "Fermeture percutanée du canal artériel par coil",
      "target" : [{
        "code" : "PROC154",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Coil implantation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0142",
      "display" : "Fermeture percutanée du canal artériel par plug",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0143",
      "display" : "Geste sur la valve pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0144",
      "display" : "Dilatation au ballon de la valve pulmonaire",
      "target" : [{
        "code" : "PROC-2010-2590",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0145",
      "display" : "Dilatation au ballon d'une prothèse valvulaire pulmonaire",
      "target" : [{
        "code" : "PROC-2010-2590",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0146",
      "display" : "Perforation et dilatation percutanées de la valve pulmonaire",
      "target" : [{
        "code" : "PROC-2010-2590",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0147",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0148",
      "display" : "Valve-in-valve pulmonaire par voie percutanée (réimplantation)",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0149",
      "display" : "Implantation percutanée d'une valve aortique montée sur stent",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0150",
      "display" : "Valve-in-valve aortique par voie percutanée (réimplantation)",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0151",
      "display" : "Implantation d'une valve aortique par voie transapicale (approche hybride)",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0152",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec pré-stenting",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0153",
      "display" : "Pré-stenting de la voie pulmonaire en préparation d'un remplacement valvulaire",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider",
        "comment" : "proposé v6 — ECHSA-AEPC : détail « with prestenting » (PD19)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0154",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec rupture volontaire de la prothèse antérieure",
      "target" : [{
        "code" : "PROC-2010-2660",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0155",
      "display" : "Dilatation au ballon de la valve aortique",
      "target" : [{
        "code" : "PROC-2010-2590",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0156",
      "display" : "Dilatation au ballon d'une prothèse valvulaire aortique",
      "target" : [{
        "code" : "PROC-2010-2590",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0157",
      "display" : "Perforation et dilatation percutanées de la valve aortique",
      "target" : [{
        "code" : "PROC-2010-2640",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
        "equivalence" : "inexact",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0158",
      "display" : "Fenestration percutanée du septum interatrial ou d'un tunnel atrial",
      "target" : [{
        "code" : "PROC-2010-2640",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0159",
      "display" : "Approche hybride stade 1 : cerclage bilatéral des artères pulmonaires et stent du canal artériel par voie percutanée",
      "target" : [{
        "code" : "PROC-2010-2180",
        "display" : "Hybrid Approach \"Stage 1\", Stent placement in arterial duct (PDA) + application of RPA & LPA bands",
        "equivalence" : "equivalent",
        "comment" : "modifié v6 — Hybrid Approach « Stage 1 », stent du canal + cerclages AP droite et gauche"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0160",
      "display" : "Stratégie hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0161",
      "display" : "Fermeture percutanée de la fenestration d'un tunnel atrial (Fontan) par prothèse",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider",
        "comment" : "proposé v6 — ECHSA chirurgical : PROC203 « Atrial fenestration closure »"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0162",
      "display" : "Complétion percutanée de la dérivation cavo-pulmonaire totale par stent couvert de la veine cave inférieure à la veine cave supérieure",
      "target" : [{
        "code" : "PROC-2010-2650",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter Fontan completion",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0163",
      "display" : "Fermeture percutanée d'une communication interventriculaire par prothèse",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0164",
      "display" : "Fenestration percutanée d'un patch de communication interventriculaire",
      "target" : [{
        "code" : "PROC-2010-2640",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
        "equivalence" : "inexact",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0165",
      "display" : "Fermeture peropératoire d'une communication interventriculaire par dispositif (approche hybride)",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0166",
      "display" : "Création percutanée d'une communication interventriculaire",
      "target" : [{
        "code" : "PROC-2010-2640",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0167",
      "display" : "Fermeture percutanée d'une communication interatriale de type ostium secundum par prothèse",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0168",
      "display" : "Fermeture percutanée d'un foramen ovale perméable par prothèse",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0169",
      "display" : "Fermeture percutanée d'une communication interatriale de type sinus venosus par stent couvert",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0170",
      "display" : "Fermeture percutanée d'une communication interatriale par prothèse",
      "target" : [{
        "code" : "PROC152",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0171",
      "display" : "Dilatation au ballon de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0172",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0173",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche par alcoolisation coronaire percutanée",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0174",
      "display" : "Geste sur le ventricule gauche",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0175",
      "display" : "Dilatation au ballon de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "PROC150",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0176",
      "display" : "Pose de stent dans la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "PROC151",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0177",
      "display" : "Biopsie ventriculaire droite par voie percutanée",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "modifié v6 — ECHSA-AEPC : « Biopsy » (PP34)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0178",
      "display" : "Geste sur le ventricule droit",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0179",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0180",
      "display" : "Redilatation d'un stent de la voie d'éjection native du ventricule droit",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0181",
      "display" : "Péricardiocentèse percutanée",
      "target" : [{
        "code" : "PROC88",
        "display" : "Pericardial drainage procedure",
        "equivalence" : "wider",
        "comment" : "modifié v6 — Pericardial drainage procedure ; ECHSA-AEPC : « Drain insertion » (PP07)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0182",
      "display" : "Embolectomie percutanée de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "modifié v6 — ECHSA-AEPC : « Thrombectomy percutaneous » (PP18)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0183",
      "display" : "Embolisation lymphatique percutanée",
      "target" : [{
        "code" : "PROC154",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Coil implantation",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0184",
      "display" : "Redilatation de stent avec fracture volontaire du stent",
      "target" : [{
        "code" : "PROC-2010-2630",
        "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0185",
      "display" : "Extraction percutanée d'un dispositif ou d'un corps étranger",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "modifié v6 — ECHSA-AEPC : « Percutaneous retrieval » (PP12) / « Device retrieval » (PP06)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0186",
      "display" : "Geste percutané pour complication du cathétérisme",
      "target" : [{
        "code" : "PROC-2010-2410",
        "display" : "Cardiovascular catheterization procedure, Therapeutic",
        "equivalence" : "wider",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0187",
      "display" : "Retrait chirurgical d'un dispositif",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — geste chirurgical"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0188",
      "display" : "Geste sur une veine systémique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    }]
  }]
}

```
