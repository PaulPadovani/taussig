# TAUSSIG — Gestes TAUSSIG vers CCAM - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Gestes TAUSSIG vers CCAM (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-procedure-to-ccam",
  "url" : "https://taussig/fhir/ConceptMap/taussig-procedure-to-ccam",
  "version" : "0.8.0",
  "name" : "TaussigProcedureToCcam",
  "title" : "TAUSSIG — Gestes TAUSSIG vers CCAM",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des 188 concepts TAUSSIG de gestes vers CCAM. Équivalence vue depuis le concept TAUSSIG (source). « unmatched » : aucun code ne convient. Les correspondances « proposé v6 » restent à vérifier.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-procedure",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-procedure",
    "target" : "https://mos.esante.gouv.fr/NOS/TRE_R310-CCAM/FHIR/TRE-R310-CCAM",
    "element" : [{
      "code" : "TAUSSIG-PROC-0001",
      "display" : "Pose percutanée d'un stent sur un anévrisme de l'aorte thoracique",
      "target" : [{
        "code" : "DGLF003",
        "display" : "Pose d'endoprothèse couverte dans l'aorte thoracique, par voie artérielle transcutanée",
        "equivalence" : "equivalent",
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
        "comment" : "proposé v6 — la voie transseptale est incluse dans le libellé de certains actes (ex. DENF014, DASF074)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0004",
      "display" : "Test d'occlusion diagnostique par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0005",
      "display" : "Geste percutané avec traitement adjuvant",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0006",
      "display" : "Cathétérisme cardiaque diagnostique : angiographie",
      "target" : [{
        "code" : "DFQH001",
        "display" : "Artériographie sélective du tronc et/ou des branches de l'artère pulmonaire, par voie veineuse transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0007",
      "display" : "Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques",
      "target" : [{
        "code" : "EQQF001",
        "display" : "Mesure et enregistrement des pressions du cœur droit, de l'artère pulmonaire et du cœur gauche, sans injection de produit de contraste, par voie veineuse transcutanée et par voie artérielle transcutanée ou cathétérisme du foramen ovale",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0008",
      "display" : "Cathétérisme cardiaque diagnostique avec épreuve de modification hémodynamique",
      "target" : [{
        "code" : "EQQF003",
        "display" : "Mesure et enregistrement des pressions intravasculaires pulmonaires et systémiques et des différences artérioveineuses des contenus artériels en oxygène, à l'état basal et après administration d'agent pharmacologique vasodilatateur, par voie vasculaire transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0009",
      "display" : "Cathétérisme d'évaluation d'une hypertension pulmonaire",
      "target" : [{
        "code" : "EQQF003",
        "display" : "Mesure et enregistrement des pressions intravasculaires pulmonaires et systémiques et des différences artérioveineuses des contenus artériels en oxygène, à l'état basal et après administration d'agent pharmacologique vasodilatateur, par voie vasculaire transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — mesures à l'état basal et après vasodilatateur"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0010",
      "display" : "Cathétérisme diagnostique à visée interventionnelle : anatomie inadaptée au geste",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — notion d'intention de traiter non codée en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0011",
      "display" : "Geste percutané pour trouble du rythme",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0012",
      "display" : "Geste percutané pour trouble du rythme atrial",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0013",
      "display" : "Geste percutané pour trouble du rythme ventriculaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0014",
      "display" : "Cathétérisme cardiaque diagnostique avec épreuve électrophysiologique",
      "target" : [{
        "code" : "DEQF001",
        "display" : "Exploration électrophysiologique cardiaque par sonde intracavitaire droite par voie veineuse transcutanée, avec manœuvres provocatrices d'une tachycardie à l'étage ventriculaire",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — exploration électrophysiologique avec manœuvres provocatrices"
      },
      {
        "code" : "DEQF002",
        "display" : "Exploration électrophysiologique cardiaque par sonde intracavitaire droite par voie veineuse transcutanée, avec manœuvres provocatrices d'une tachycardie à l'étage atrial et à l'étage ventriculaire",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — exploration électrophysiologique avec manœuvres provocatrices"
      },
      {
        "code" : "DEQF004",
        "display" : "Exploration électrophysiologique cardiaque par sonde intracavitaire droite par voie veineuse transcutanée, avec manœuvres provocatrices d'une tachycardie à l'étage atrial",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — exploration électrophysiologique avec manœuvres provocatrices"
      },
      {
        "code" : "DEQF005",
        "display" : "Exploration électrophysiologique cardiaque par sondes intracavitaires droite et gauche par voie vasculaire transcutanée, avec manœuvres provocatrices d'une tachycardie",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — exploration électrophysiologique avec manœuvres provocatrices"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0015",
      "display" : "Exploration électrophysiologique",
      "target" : [{
        "code" : "DEQF003",
        "display" : "Exploration électrophysiologique cardiaque par sonde intracavitaire droite, par voie veineuse transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0016",
      "display" : "Exploration électrophysiologique avec cartographie tridimensionnelle",
      "target" : [{
        "code" : "DEQF003",
        "display" : "Exploration électrophysiologique cardiaque par sonde intracavitaire droite, par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — la CCAM ne distingue pas la cartographie 3D"
      },
      {
        "code" : "DEQF005",
        "display" : "Exploration électrophysiologique cardiaque par sondes intracavitaires droite et gauche par voie vasculaire transcutanée, avec manœuvres provocatrices d'une tachycardie",
        "equivalence" : "wider",
        "comment" : "proposé v6 — la CCAM ne distingue pas la cartographie 3D"
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
        "comment" : "proposé v6 — absent de la CCAM v82 sous ce libellé"
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
        "code" : "JQHB002",
        "display" : "Ponction ou biopsie d'un organe fœtal",
        "equivalence" : "wider",
        "comment" : "proposé v6 — ponction ou biopsie d'un organe fœtal"
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
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — échec de largage non codé en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0025",
      "display" : "Geste de cathétérisme cardiovasculaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0026",
      "display" : "Nouveau cathétérisme pour lésion résiduelle ou récidivante",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — notion de reprise non codée en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0027",
      "display" : "Redilatation de stent",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — redilatation de stent non distinguée en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0028",
      "display" : "Pose de stent",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique : la CCAM code la pose d'endoprothèse par site"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0029",
      "display" : "Dilatation au ballon",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique : la CCAM code la dilatation par site"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0030",
      "display" : "Implantation d'un dispositif par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0031",
      "display" : "Occlusion par coil au cours d'un cathétérisme",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique : la CCAM code l'embolisation par site"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0032",
      "display" : "Implantation percutanée d'une valve",
      "target" : [{
        "code" : "DBLF001",
        "display" : "Pose d'une bioprothèse de la valve aortique, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — aortique ou pulmonaire ; pas de code percutané tricuspide ou mitral"
      },
      {
        "code" : "DBLF009",
        "display" : "Pose d'une bioprothèse de la valve pulmonaire par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — aortique ou pulmonaire ; pas de code percutané tricuspide ou mitral"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0033",
      "display" : "Fermeture percutanée d'une fuite de prothèse valvulaire par dispositif",
      "target" : [{
        "code" : "DBSF001",
        "display" : "Fermeture d'une déhiscence par désinsertion de prothèse orificielle cardiaque, par voie vasculaire transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0034",
      "display" : "Dilatation valvulaire au ballon",
      "target" : [{
        "code" : "DBAF001",
        "display" : "Dilatation intraluminale de l'orifice aortique, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon la valve"
      },
      {
        "code" : "DBAF002",
        "display" : "Dilatation intraluminale de l'orifice pulmonaire sans perforation de la valve atrésique, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon la valve"
      },
      {
        "code" : "DBAF003",
        "display" : "Dilatation intraluminale de l'orifice atrioventriculaire droit, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon la valve"
      },
      {
        "code" : "DBAF004",
        "display" : "Dilatation intraluminale de l'orifice atrioventriculaire gauche, par voie veineuse transcutanée avec perforation du septum interatrial",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon la valve"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0035",
      "display" : "Cathétérisme cardiovasculaire thérapeutique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0036",
      "display" : "Perforation thérapeutique percutanée pour créer une communication entre cavités ou vaisseaux",
      "target" : [{
        "code" : "DBAF005",
        "display" : "Dilatation intraluminale de l'orifice pulmonaire avec perforation de la valve atrésique, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — seule la perforation de valve pulmonaire atrésique est codée"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0037",
      "display" : "Cathétérisme cardiaque diagnostique",
      "target" : [{
        "code" : "EQQF001",
        "display" : "Mesure et enregistrement des pressions du cœur droit, de l'artère pulmonaire et du cœur gauche, sans injection de produit de contraste, par voie veineuse transcutanée et par voie artérielle transcutanée ou cathétérisme du foramen ovale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — choisir selon cavités explorées, injection et âge (EQQH005 < 24 mois, EQQH006 ≥ 24 mois)"
      },
      {
        "code" : "EQQF006",
        "display" : "Mesure et enregistrement des pressions du cœur droit et de l'artère pulmonaire, sans injection de produit de contraste, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — choisir selon cavités explorées, injection et âge (EQQH005 < 24 mois, EQQH006 ≥ 24 mois)"
      },
      {
        "code" : "EQQH001",
        "display" : "Mesure et enregistrement des pressions du cœur droit et de l'artère pulmonaire, avec injection de produit de contraste, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — choisir selon cavités explorées, injection et âge (EQQH005 < 24 mois, EQQH006 ≥ 24 mois)"
      },
      {
        "code" : "EQQH005",
        "display" : "Mesure et enregistrement des pressions du cœur droit, de l'artère pulmonaire et du cœur gauche, avec injection de produit de contraste, par voie veineuse transcutanée et par voie artérielle transcutanée ou cathétérisme du foramen ovale, avant l'âge de 24 mois",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — choisir selon cavités explorées, injection et âge (EQQH005 < 24 mois, EQQH006 ≥ 24 mois)"
      },
      {
        "code" : "EQQH006",
        "display" : "Mesure et enregistrement des pressions du cœur droit, de l'artère pulmonaire et du cœur gauche, avec injection de produit de contraste, par voie veineuse transcutanée et par voie artérielle transcutanée ou cathétérisme du foramen ovale, à l'âge de 24 mois ou plus",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — choisir selon cavités explorées, injection et âge (EQQH005 < 24 mois, EQQH006 ≥ 24 mois)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0038",
      "display" : "Agrandissement d'une communication interventriculaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0039",
      "display" : "Agrandissement ou création d'une communication interventriculaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0040",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie) : stade 1",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0041",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s) et retrait des cerclages pulmonaires",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0042",
      "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s), retrait des cerclages pulmonaires et réparation de l'arche",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0043",
      "display" : "Échographie endocoronaire",
      "target" : [{
        "code" : "DDQJ001",
        "display" : "Échographie et/ou échographie-doppler intraartérielle coronaire, au cours d'un acte par voie vasculaire transcutanée",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0044",
      "display" : "Échocardiographie",
      "target" : [{
        "code" : "DZQM006",
        "display" : "Échographie-doppler transthoracique du cœur et des vaisseaux intrathoraciques",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — DZQM003 au cours d'un acte thérapeutique intracavitaire"
      },
      {
        "code" : "DZQM003",
        "display" : "Échographie-doppler transthoracique du cœur et des vaisseaux intrathoraciques, au cours d'un acte thérapeutique intracavitaire cardiaque par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — DZQM003 au cours d'un acte thérapeutique intracavitaire"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0045",
      "display" : "Échocardiographie transœsophagienne",
      "target" : [{
        "code" : "DZQJ001",
        "display" : "Échographie-doppler du cœur et des vaisseaux intrathoraciques, par voie œsophagienne [Échocardiographie-doppler transœsophagienne]",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — DZQJ012 au cours d'un acte thérapeutique intracavitaire"
      },
      {
        "code" : "DZQJ012",
        "display" : "Échographie-doppler du cœur et des vaisseaux intrathoraciques par voie œsophagienne, au cours d'un acte thérapeutique intracavitaire cardiaque par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — DZQJ012 au cours d'un acte thérapeutique intracavitaire"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0046",
      "display" : "Geste percutané guidé par échographie intracardiaque",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — échographie intracardiaque non codée en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0047",
      "display" : "Geste percutané sous guidage radiologique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — modalité de guidage"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0048",
      "display" : "Geste percutané sous guidage par IRM",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — modalité de guidage"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0049",
      "display" : "Geste percutané sous guidage radiologique et IRM",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — modalité de guidage"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0050",
      "display" : "Geste percutané sous guidage échographique",
      "target" : [{
        "code" : "DZQM003",
        "display" : "Échographie-doppler transthoracique du cœur et des vaisseaux intrathoraciques, au cours d'un acte thérapeutique intracavitaire cardiaque par voie vasculaire transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — échographie au cours d'un acte thérapeutique intracavitaire"
      },
      {
        "code" : "DZQJ012",
        "display" : "Échographie-doppler du cœur et des vaisseaux intrathoraciques par voie œsophagienne, au cours d'un acte thérapeutique intracavitaire cardiaque par voie vasculaire transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — échographie au cours d'un acte thérapeutique intracavitaire"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0051",
      "display" : "Imagerie endocoronaire par tomographie par cohérence optique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — OCT coronaire absente de la CCAM v82"
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
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0054",
      "display" : "Occlusion d'une collatérale veino-veineuse par dispositif",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0055",
      "display" : "Occlusion percutanée d'une veine systémique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0056",
      "display" : "Pose de stent dans l'artère pulmonaire droite",
      "target" : [{
        "code" : "DFAF003",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0057",
      "display" : "Pose de stent dans l'artère pulmonaire gauche",
      "target" : [{
        "code" : "DFAF003",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0058",
      "display" : "Pose de stent dans l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "DFAF003",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — une ou plusieurs branches"
      },
      {
        "code" : "DFAF001",
        "display" : "Dilatation intraluminale de plusieurs branches de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — une ou plusieurs branches"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0059",
      "display" : "Pose de stent dans l'artère pulmonaire droite, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "DFAF003",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — proximal / distal non distingués"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0060",
      "display" : "Pose de stent dans l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "DFAF003",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — proximal / distal non distingués"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0061",
      "display" : "Pose de stent dans l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "DFAF003",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — proximal / distal non distingués"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0062",
      "display" : "Pose de stent dans l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "DFAF003",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — proximal / distal non distingués"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0063",
      "display" : "Redilatation d'un stent de l'artère pulmonaire droite, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "DFAF002",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — redilatation de stent codée comme dilatation sans pose d'endoprothèse"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0064",
      "display" : "Redilatation d'un stent de l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "DFAF002",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — redilatation de stent codée comme dilatation sans pose d'endoprothèse"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0065",
      "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
      "target" : [{
        "code" : "DFAF002",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — redilatation de stent codée comme dilatation sans pose d'endoprothèse"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0066",
      "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
      "target" : [{
        "code" : "DFAF002",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — redilatation de stent codée comme dilatation sans pose d'endoprothèse"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0067",
      "display" : "Pose de stent entre l'artère pulmonaire gauche et l'aorte descendante (Potts inverse)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0068",
      "display" : "Pose de stent sur une coarctation de l'aorte",
      "target" : [{
        "code" : "DGAF004",
        "display" : "Dilatation intraluminale d'une coarctation de l'aorte thoracique avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0069",
      "display" : "Pose de stent sur une recoarctation de l'aorte",
      "target" : [{
        "code" : "DGAF004",
        "display" : "Dilatation intraluminale d'une coarctation de l'aorte thoracique avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0070",
      "display" : "Pose de stent sur une coarctation (ou hypoplasie) native de l'aorte",
      "target" : [{
        "code" : "DGAF004",
        "display" : "Dilatation intraluminale d'une coarctation de l'aorte thoracique avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — native et recoarctation non distinguées"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0071",
      "display" : "Redilatation d'un stent de l'aorte thoracique",
      "target" : [{
        "code" : "DGAF001",
        "display" : "Dilatation intraluminale de l'aorte thoracique sans pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — redilatation codée comme dilatation de l'aorte thoracique sans endoprothèse"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0072",
      "display" : "Pose de stent dans une veine pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0073",
      "display" : "Pose de stent dans une veine pulmonaire ou un chenal veineux pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — pas de code veine pulmonaire percutané en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0074",
      "display" : "Pose de stent dans la veine cave supérieure",
      "target" : [{
        "code" : "DHAF001",
        "display" : "Dilatation intraluminale de la veine cave supérieure avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "equivalent",
        "comment" : "modifié v6 — dilatation de la VCS avec pose d'endoprothèse"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0075",
      "display" : "Pose de stent dans une veine systémique ou un chenal veineux systémique",
      "target" : [{
        "code" : "DHAF001",
        "display" : "Dilatation intraluminale de la veine cave supérieure avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon la veine"
      },
      {
        "code" : "DHAF004",
        "display" : "Dilatation intraluminale de la veine cave inférieure avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon la veine"
      },
      {
        "code" : "EFAF001",
        "display" : "Dilatation intraluminale d'une veine du membre supérieur avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon la veine"
      },
      {
        "code" : "EGAF002",
        "display" : "Dilatation intraluminale de la veine iliaque externe et/ou de la veine iliaque commune avec pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon la veine"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0076",
      "display" : "Redilatation d'un stent d'une veine systémique",
      "target" : [{
        "code" : "DHAF003",
        "display" : "Dilatation intraluminale de la veine cave supérieure sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — redilatation codée comme dilatation sans endoprothèse, selon la veine"
      },
      {
        "code" : "DHAF002",
        "display" : "Dilatation intraluminale de la veine cave inférieure sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — redilatation codée comme dilatation sans endoprothèse, selon la veine"
      },
      {
        "code" : "EFAF002",
        "display" : "Dilatation intraluminale d'une veine du membre supérieur sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — redilatation codée comme dilatation sans endoprothèse, selon la veine"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0077",
      "display" : "Redilatation d'un stent d'une veine pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — pas de code veine pulmonaire percutané en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0078",
      "display" : "Cryoablation percutanée d'un trouble du rythme",
      "target" : [{
        "code" : "DEPF010",
        "display" : "Interruption de la voie lente ou de la voie rapide de la jonction atrioventriculaire avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — seuls ces actes mentionnent la cryothérapie"
      },
      {
        "code" : "DEPF012",
        "display" : "Interruption complète de circuit arythmogène au niveau de l'isthme cavotricuspidien avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — seuls ces actes mentionnent la cryothérapie"
      },
      {
        "code" : "DEPF033",
        "display" : "Interruption complète de circuit arythmogène au niveau de l'ostium des veines pulmonaires avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — seuls ces actes mentionnent la cryothérapie"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0079",
      "display" : "Ablation percutanée d'un trouble du rythme par radiofréquence",
      "target" : [{
        "code" : "DENF014",
        "display" : "Destruction d'un foyer arythmogène atrial avec courant de radiofréquence, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF015",
        "display" : "Destruction d'un foyer ou interruption d'un circuit arythmogène ventriculaire avec courant de radiofréquence, par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF017",
        "display" : "Destruction d'un foyer arythmogène atrial avec courant de radiofréquence, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF018",
        "display" : "Destruction de plusieurs foyers arythmogènes atriaux avec courant de radiofréquence, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF021",
        "display" : "Destruction de plusieurs foyers arythmogènes atriaux avec courant de radiofréquence, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF035",
        "display" : "Destruction de plusieurs foyers et/ou interruption de plusieurs circuits arythmogènes ventriculaires avec courant de radiofréquence, par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF004",
        "display" : "Interruption complète de plusieurs voies accessoires de conduction cardiaque avec courant de radiofréquence, par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF005",
        "display" : "Interruption complète d'une voie accessoire de conduction cardiaque avec courant de radiofréquence, par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF006",
        "display" : "Interruption complète du tissu nodal de la jonction atrioventriculaire avec courant de radiofréquence, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF010",
        "display" : "Interruption de la voie lente ou de la voie rapide de la jonction atrioventriculaire avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF012",
        "display" : "Interruption complète de circuit arythmogène au niveau de l'isthme cavotricuspidien avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF014",
        "display" : "Interruption complète de circuit arythmogène en dehors de l'isthme cavotricuspidien avec courant de radiofréquence, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF025",
        "display" : "Interruption complète de circuit arythmogène en dehors de l'isthme cavotricuspidien avec courant de radiofréquence, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF033",
        "display" : "Interruption complète de circuit arythmogène au niveau de l'ostium des veines pulmonaires avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0080",
      "display" : "Ablation percutanée avec isolation des veines pulmonaires",
      "target" : [{
        "code" : "DEPF033",
        "display" : "Interruption complète de circuit arythmogène au niveau de l'ostium des veines pulmonaires avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0081",
      "display" : "Ablation percutanée d'un trouble du rythme",
      "target" : [{
        "code" : "DENF014",
        "display" : "Destruction d'un foyer arythmogène atrial avec courant de radiofréquence, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF015",
        "display" : "Destruction d'un foyer ou interruption d'un circuit arythmogène ventriculaire avec courant de radiofréquence, par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF017",
        "display" : "Destruction d'un foyer arythmogène atrial avec courant de radiofréquence, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF018",
        "display" : "Destruction de plusieurs foyers arythmogènes atriaux avec courant de radiofréquence, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF021",
        "display" : "Destruction de plusieurs foyers arythmogènes atriaux avec courant de radiofréquence, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DENF035",
        "display" : "Destruction de plusieurs foyers et/ou interruption de plusieurs circuits arythmogènes ventriculaires avec courant de radiofréquence, par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF004",
        "display" : "Interruption complète de plusieurs voies accessoires de conduction cardiaque avec courant de radiofréquence, par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF005",
        "display" : "Interruption complète d'une voie accessoire de conduction cardiaque avec courant de radiofréquence, par voie vasculaire transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF006",
        "display" : "Interruption complète du tissu nodal de la jonction atrioventriculaire avec courant de radiofréquence, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF010",
        "display" : "Interruption de la voie lente ou de la voie rapide de la jonction atrioventriculaire avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF012",
        "display" : "Interruption complète de circuit arythmogène au niveau de l'isthme cavotricuspidien avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF014",
        "display" : "Interruption complète de circuit arythmogène en dehors de l'isthme cavotricuspidien avec courant de radiofréquence, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF025",
        "display" : "Interruption complète de circuit arythmogène en dehors de l'isthme cavotricuspidien avec courant de radiofréquence, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      },
      {
        "code" : "DEPF033",
        "display" : "Interruption complète de circuit arythmogène au niveau de l'ostium des veines pulmonaires avec courant de radiofréquence ou cryothérapie, par voie veineuse transcutanée et voie transseptale",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le substrat"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0082",
      "display" : "Geste sur une artère coronaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0083",
      "display" : "Occlusion percutanée d'une fistule coronaire",
      "target" : [{
        "code" : "DDSF001",
        "display" : "Embolisation ou fermeture d'une fistule ou d'un anévrisme coronaire, par voie vasculaire transcutanée",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0084",
      "display" : "Injection intracoronaire percutanée d'un agent thrombolytique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0085",
      "display" : "Angioplastie coronaire percutanée au ballon",
      "target" : [{
        "code" : "DDAF001",
        "display" : "Dilatation intraluminale d'un vaisseau coronaire sans pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — avec ou sans coronarographie dans le même temps"
      },
      {
        "code" : "DDAF010",
        "display" : "Dilatation intraluminale d'un vaisseau coronaire avec artériographie coronaire, sans pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — avec ou sans coronarographie dans le même temps"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0086",
      "display" : "Pose percutanée d'un stent coronaire",
      "target" : [{
        "code" : "DDAF006",
        "display" : "Dilatation intraluminale d'un vaisseau coronaire avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le nombre de vaisseaux et la coronarographie"
      },
      {
        "code" : "DDAF008",
        "display" : "Dilatation intraluminale d'un vaisseau coronaire avec artériographie coronaire, avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le nombre de vaisseaux et la coronarographie"
      },
      {
        "code" : "DDAF004",
        "display" : "Dilatation intraluminale de 2 vaisseaux coronaires avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le nombre de vaisseaux et la coronarographie"
      },
      {
        "code" : "DDAF007",
        "display" : "Dilatation intraluminale de 2 vaisseaux coronaires avec artériographie coronaire, avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le nombre de vaisseaux et la coronarographie"
      },
      {
        "code" : "DDAF003",
        "display" : "Dilatation intraluminale de 3 vaisseaux coronaires ou plus avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le nombre de vaisseaux et la coronarographie"
      },
      {
        "code" : "DDAF009",
        "display" : "Dilatation intraluminale de 3 vaisseaux coronaires ou plus avec artériographie coronaire, avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — selon le nombre de vaisseaux et la coronarographie"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0087",
      "display" : "Occlusion chimique percutanée d'une artère coronaire",
      "target" : [{
        "code" : "DDLF001",
        "display" : "Injection in situ d'agent pharmacologique dans une branche d'artère coronaire pour réduction de l'épaisseur du septum interventriculaire, par voie artérielle transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — l'alcoolisation septale est le seul usage codé"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0088",
      "display" : "Redilatation d'un stent coronaire",
      "target" : [{
        "code" : "DDAF001",
        "display" : "Dilatation intraluminale d'un vaisseau coronaire sans pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0089",
      "display" : "Fermeture percutanée d'une fenêtre aorto-pulmonaire par prothèse",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0090",
      "display" : "Dilatation au ballon d'une coarctation (ou hypoplasie) native de l'aorte",
      "target" : [{
        "code" : "DGAF006",
        "display" : "Dilatation intraluminale d'une coarctation de l'aorte thoracique sans pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0091",
      "display" : "Dilatation au ballon d'une recoarctation de l'aorte",
      "target" : [{
        "code" : "DGAF006",
        "display" : "Dilatation intraluminale d'une coarctation de l'aorte thoracique sans pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0092",
      "display" : "Levée d'obstacle percutanée d'une coarctation de l'aorte",
      "target" : [{
        "code" : "DGAF004",
        "display" : "Dilatation intraluminale d'une coarctation de l'aorte thoracique avec pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — avec ou sans endoprothèse"
      },
      {
        "code" : "DGAF006",
        "display" : "Dilatation intraluminale d'une coarctation de l'aorte thoracique sans pose d'endoprothèse, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — avec ou sans endoprothèse"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0093",
      "display" : "Geste sur une artère systémique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0094",
      "display" : "Occlusion d'une fistule artério-veineuse",
      "target" : [{
        "code" : "DFSF002",
        "display" : "Embolisation de fistule artérioveineuse intrathoracique, par voie artérielle transcutanée",
        "equivalence" : "wider",
        "comment" : "modifié v6 — fistule artérioveineuse intrathoracique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0095",
      "display" : "Fermeture d'une fistule artério-veineuse pulmonaire",
      "target" : [{
        "code" : "DFSF002",
        "display" : "Embolisation de fistule artérioveineuse intrathoracique, par voie artérielle transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — embolisation de fistule artérioveineuse intrathoracique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0096",
      "display" : "Fermeture partielle d'une communication interatriale",
      "target" : [{
        "code" : "DASF004",
        "display" : "Fermeture d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — la CCAM ne distingue pas la fermeture partielle"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0097",
      "display" : "Atrioseptostomie au ballon par retrait (Rashkind)",
      "target" : [{
        "code" : "DAMF001",
        "display" : "Création d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "modifié v6 — la CCAM code la création de CIA sans préciser la technique de Rashkind"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0098",
      "display" : "Atrioseptostomie à la lame",
      "target" : [{
        "code" : "DAAF003",
        "display" : "Agrandissement d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6"
      },
      {
        "code" : "DAMF001",
        "display" : "Création d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0099",
      "display" : "Création ou agrandissement d'une communication interatriale",
      "target" : [{
        "code" : "DAMF001",
        "display" : "Création d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — création (DAMF001) ou agrandissement (DAAF003)"
      },
      {
        "code" : "DAAF003",
        "display" : "Agrandissement d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — création (DAMF001) ou agrandissement (DAAF003)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0100",
      "display" : "Atrioseptostomie au ballon",
      "target" : [{
        "code" : "DAAF003",
        "display" : "Agrandissement d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — agrandissement (DAAF003) ou création (DAMF001) de la communication"
      },
      {
        "code" : "DAMF001",
        "display" : "Création d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — agrandissement (DAAF003) ou création (DAMF001) de la communication"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0101",
      "display" : "Création percutanée d'une communication interatriale",
      "target" : [{
        "code" : "DAMF001",
        "display" : "Création d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0102",
      "display" : "Retrait d'un thrombus intracardiaque",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0103",
      "display" : "Fermeture percutanée de l'auricule gauche par prothèse",
      "target" : [{
        "code" : "DASF074",
        "display" : "Fermeture de l’appendice atrial [auricule] gauche par dispositif par voie veineuse transcutanée et voie transseptale avec guidage échographie-doppler par voie transoesophagienne",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0104",
      "display" : "Geste sur la valve tricuspide",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0105",
      "display" : "Dilatation au ballon d'une prothèse valvulaire tricuspide",
      "target" : [{
        "code" : "DBAF003",
        "display" : "Dilatation intraluminale de l'orifice atrioventriculaire droit, par voie veineuse transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0106",
      "display" : "Remplacement valvulaire tricuspide par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0107",
      "display" : "Valve-in-valve tricuspide par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0108",
      "display" : "Dilatation au ballon de la valve mitrale",
      "target" : [{
        "code" : "DBAF004",
        "display" : "Dilatation intraluminale de l'orifice atrioventriculaire gauche, par voie veineuse transcutanée avec perforation du septum interatrial",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0109",
      "display" : "Dilatation au ballon d'une prothèse valvulaire mitrale",
      "target" : [{
        "code" : "DBAF004",
        "display" : "Dilatation intraluminale de l'orifice atrioventriculaire gauche, par voie veineuse transcutanée avec perforation du septum interatrial",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0110",
      "display" : "Réparation valvulaire mitrale par voie percutanée",
      "target" : [{
        "code" : "DBBF198",
        "display" : "Rétrécissement de l’orifice atrioventriculaire gauche par dispositif par voie veineuse transcutanée et voie transseptale avec guidage par échographie-doppler par voie transœsophagienne",
        "equivalence" : "inexact",
        "comment" : "modifié v6 — rétrécissement de l'orifice atrioventriculaire gauche par dispositif (type bord à bord)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0111",
      "display" : "Remplacement valvulaire mitral par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0112",
      "display" : "Valve-in-valve mitrale par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0113",
      "display" : "Valve-in-valve mitrale transcathéter par voie transapicale",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0114",
      "display" : "Dilatation au ballon d'une anastomose systémico-pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0115",
      "display" : "Pose de stent dans une anastomose systémico-pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0116",
      "display" : "Occlusion percutanée d'une anastomose systémico-pulmonaire par dispositif ou embolisation",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0117",
      "display" : "Dilatation au ballon d'un conduit",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0118",
      "display" : "Pose de stent dans un conduit",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0119",
      "display" : "Redilatation d'un stent dans un conduit",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0120",
      "display" : "Redilatation d'un stent dans une anastomose systémico-pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0121",
      "display" : "Perforation et dilatation percutanées d'un conduit",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0122",
      "display" : "Perforation et dilatation percutanées d'une anastomose systémico-pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0123",
      "display" : "Dilatation au ballon d'une veine pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0124",
      "display" : "Dilatation d'une veine pulmonaire au ballon de découpe",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — pas de code veine pulmonaire percutané en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0125",
      "display" : "Dilatation au ballon d'une veine pulmonaire ou d'un chenal veineux pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — pas de code veine pulmonaire percutané en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0126",
      "display" : "Dilatation au ballon d'une veine systémique ou d'un chenal veineux systémique",
      "target" : [{
        "code" : "DHAF003",
        "display" : "Dilatation intraluminale de la veine cave supérieure sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon la veine"
      },
      {
        "code" : "DHAF002",
        "display" : "Dilatation intraluminale de la veine cave inférieure sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon la veine"
      },
      {
        "code" : "EFAF002",
        "display" : "Dilatation intraluminale d'une veine du membre supérieur sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon la veine"
      },
      {
        "code" : "EGAF003",
        "display" : "Dilatation intraluminale de la veine iliaque externe et/ou de la veine iliaque commune sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — selon la veine"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0127",
      "display" : "Dilatation au ballon du tronc de l'artère pulmonaire",
      "target" : [{
        "code" : "DFAF002",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0128",
      "display" : "Dilatation au ballon de l'artère pulmonaire droite",
      "target" : [{
        "code" : "DFAF002",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0129",
      "display" : "Dilatation au ballon de l'artère pulmonaire gauche",
      "target" : [{
        "code" : "DFAF002",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0130",
      "display" : "Restriction du débit du tronc pulmonaire par dispositif implanté par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0131",
      "display" : "Restriction du débit des artères pulmonaires droite et gauche par dispositifs implantés par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0132",
      "display" : "Dilatation de l'arbre artériel pulmonaire au ballon de découpe",
      "target" : [{
        "code" : "DFAF002",
        "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — le ballon de découpe n'est pas distingué"
      },
      {
        "code" : "DFAF004",
        "display" : "Dilatation intraluminale de plusieurs branches de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — le ballon de découpe n'est pas distingué"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0133",
      "display" : "Geste percutané sur une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — pas de code MAPCA en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0134",
      "display" : "Pose de stent dans une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — pas de code MAPCA en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0135",
      "display" : "Occlusion percutanée d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA) par coil ou dispositif",
      "target" : [{
        "code" : "ECSF004",
        "display" : "Embolisation sélective ou hypersélective d'artère à destination bronchique ou pleuropulmonaire, par voie artérielle transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0136",
      "display" : "Dilatation au ballon d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — pas de code MAPCA en CCAM"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0137",
      "display" : "Pose de stent dans le canal artériel",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0138",
      "display" : "Redilatation d'un stent du canal artériel",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0139",
      "display" : "Geste sur le canal artériel ou le ligament artériel",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0140",
      "display" : "Fermeture percutanée du canal artériel par prothèse",
      "target" : [{
        "code" : "DASF001",
        "display" : "Fermeture du conduit artériel, par voie vasculaire transcutanée",
        "equivalence" : "equivalent",
        "comment" : "modifié v6 — la CCAM v82 code la fermeture percutanée du conduit artériel (DASF001)"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0141",
      "display" : "Fermeture percutanée du canal artériel par coil",
      "target" : [{
        "code" : "DASF001",
        "display" : "Fermeture du conduit artériel, par voie vasculaire transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — le coil n'est pas distingué"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0142",
      "display" : "Fermeture percutanée du canal artériel par plug",
      "target" : [{
        "code" : "DASF001",
        "display" : "Fermeture du conduit artériel, par voie vasculaire transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — le plug n'est pas distingué"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0143",
      "display" : "Geste sur la valve pulmonaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0144",
      "display" : "Dilatation au ballon de la valve pulmonaire",
      "target" : [{
        "code" : "DBAF002",
        "display" : "Dilatation intraluminale de l'orifice pulmonaire sans perforation de la valve atrésique, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0145",
      "display" : "Dilatation au ballon d'une prothèse valvulaire pulmonaire",
      "target" : [{
        "code" : "DBAF002",
        "display" : "Dilatation intraluminale de l'orifice pulmonaire sans perforation de la valve atrésique, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0146",
      "display" : "Perforation et dilatation percutanées de la valve pulmonaire",
      "target" : [{
        "code" : "DBAF005",
        "display" : "Dilatation intraluminale de l'orifice pulmonaire avec perforation de la valve atrésique, par voie veineuse transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0147",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent",
      "target" : [{
        "code" : "DBLF009",
        "display" : "Pose d'une bioprothèse de la valve pulmonaire par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0148",
      "display" : "Valve-in-valve pulmonaire par voie percutanée (réimplantation)",
      "target" : [{
        "code" : "DBLF009",
        "display" : "Pose d'une bioprothèse de la valve pulmonaire par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0149",
      "display" : "Implantation percutanée d'une valve aortique montée sur stent",
      "target" : [{
        "code" : "DBLF001",
        "display" : "Pose d'une bioprothèse de la valve aortique, par voie artérielle transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0150",
      "display" : "Valve-in-valve aortique par voie percutanée (réimplantation)",
      "target" : [{
        "code" : "DBLF001",
        "display" : "Pose d'une bioprothèse de la valve aortique, par voie artérielle transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0151",
      "display" : "Implantation d'une valve aortique par voie transapicale (approche hybride)",
      "target" : [{
        "code" : "DBLA004",
        "display" : "Pose d'une bioprothèse de la valve aortique, par abord de l'apex du cœur par thoracotomie sans CEC",
        "equivalence" : "equivalent",
        "comment" : "modifié v6 — pose de bioprothèse aortique par abord de l'apex du cœur"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0152",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec pré-stenting",
      "target" : [{
        "code" : "DBLF009",
        "display" : "Pose d'une bioprothèse de la valve pulmonaire par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "proposé v6 — le pré-stenting n'est pas distingué"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0153",
      "display" : "Pré-stenting de la voie pulmonaire en préparation d'un remplacement valvulaire",
      "target" : [{
        "code" : "DAAF001",
        "display" : "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — pré-stenting de la voie d'éjection droite"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0154",
      "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec rupture volontaire de la prothèse antérieure",
      "target" : [{
        "code" : "DBLF009",
        "display" : "Pose d'une bioprothèse de la valve pulmonaire par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0155",
      "display" : "Dilatation au ballon de la valve aortique",
      "target" : [{
        "code" : "DBAF001",
        "display" : "Dilatation intraluminale de l'orifice aortique, par voie artérielle transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0156",
      "display" : "Dilatation au ballon d'une prothèse valvulaire aortique",
      "target" : [{
        "code" : "DBAF001",
        "display" : "Dilatation intraluminale de l'orifice aortique, par voie artérielle transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — la CCAM ne distingue pas la prothèse"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0157",
      "display" : "Perforation et dilatation percutanées de la valve aortique",
      "target" : [{
        "code" : "DBAF001",
        "display" : "Dilatation intraluminale de l'orifice aortique, par voie artérielle transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — la perforation n'est pas codée pour la valve aortique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0158",
      "display" : "Fenestration percutanée du septum interatrial ou d'un tunnel atrial",
      "target" : [{
        "code" : "DAAF003",
        "display" : "Agrandissement d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0159",
      "display" : "Approche hybride stade 1 : cerclage bilatéral des artères pulmonaires et stent du canal artériel par voie percutanée",
      "target" : [{
        "equivalence" : "unmatched"
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
        "code" : "DASF002",
        "display" : "Fermeture d'une déhiscence d'une prothèse de cloisonnement intraatrial, par voie vasculaire transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6 — fermeture d'une déhiscence d'une prothèse de cloisonnement intraatrial"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0162",
      "display" : "Complétion percutanée de la dérivation cavo-pulmonaire totale par stent couvert de la veine cave inférieure à la veine cave supérieure",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0163",
      "display" : "Fermeture percutanée d'une communication interventriculaire par prothèse",
      "target" : [{
        "code" : "DASF003",
        "display" : "Fermeture de communication interventriculaire, par voie veineuse transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0164",
      "display" : "Fenestration percutanée d'un patch de communication interventriculaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0165",
      "display" : "Fermeture peropératoire d'une communication interventriculaire par dispositif (approche hybride)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0166",
      "display" : "Création percutanée d'une communication interventriculaire",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0167",
      "display" : "Fermeture percutanée d'une communication interatriale de type ostium secundum par prothèse",
      "target" : [{
        "code" : "DASF004",
        "display" : "Fermeture d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "wider",
        "comment" : "modifié v6 — la CCAM ne précise pas le type ostium secundum"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0168",
      "display" : "Fermeture percutanée d'un foramen ovale perméable par prothèse",
      "target" : [{
        "code" : "DASF005",
        "display" : "Fermeture d'un foramen ovale perméable, par voie veineuse transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0169",
      "display" : "Fermeture percutanée d'une communication interatriale de type sinus venosus par stent couvert",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0170",
      "display" : "Fermeture percutanée d'une communication interatriale par prothèse",
      "target" : [{
        "code" : "DASF004",
        "display" : "Fermeture d'une communication interatriale, par voie veineuse transcutanée",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0171",
      "display" : "Dilatation au ballon de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "DAAF002",
        "display" : "Dilatation intraluminale de la voie d'éjection infraaortique, par voie artérielle transcutanée",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0172",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "DAAF002",
        "display" : "Dilatation intraluminale de la voie d'éjection infraaortique, par voie artérielle transcutanée",
        "equivalence" : "narrower",
        "comment" : "proposé v6 — dilatation de la voie d'éjection infraaortique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0173",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche par alcoolisation coronaire percutanée",
      "target" : [{
        "code" : "DDLF001",
        "display" : "Injection in situ d'agent pharmacologique dans une branche d'artère coronaire pour réduction de l'épaisseur du septum interventriculaire, par voie artérielle transcutanée",
        "equivalence" : "equivalent",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0174",
      "display" : "Geste sur le ventricule gauche",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0175",
      "display" : "Dilatation au ballon de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "DAAF001",
        "display" : "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0176",
      "display" : "Pose de stent dans la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "DAAF001",
        "display" : "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0177",
      "display" : "Biopsie ventriculaire droite par voie percutanée",
      "target" : [{
        "code" : "DAHF001",
        "display" : "Biopsie de l'endocarde et du myocarde, par voie vasculaire transcutanée",
        "equivalence" : "wider",
        "comment" : "modifié v6 — biopsie de l'endocarde et du myocarde par voie vasculaire"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0178",
      "display" : "Geste sur le ventricule droit",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0179",
      "display" : "Levée d'obstacle de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "DAAF001",
        "display" : "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée",
        "equivalence" : "inexact",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0180",
      "display" : "Redilatation d'un stent de la voie d'éjection native du ventricule droit",
      "target" : [{
        "code" : "DAAF001",
        "display" : "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée",
        "equivalence" : "wider"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0181",
      "display" : "Péricardiocentèse percutanée",
      "target" : [{
        "code" : "DCJB002",
        "display" : "Évacuation d'une collection du péricarde, par voie transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — évacuation (DCJB002) ou drainage (DCJB001) péricardique"
      },
      {
        "code" : "DCJB001",
        "display" : "Drainage d'une collection du péricarde, par voie transcutanée",
        "equivalence" : "narrower",
        "comment" : "modifié v6 — évacuation (DCJB002) ou drainage (DCJB001) péricardique"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0182",
      "display" : "Embolectomie percutanée de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "DFNF002",
        "display" : "Thrombolyse mécanique ou thromboaspiration de l'artère pulmonaire, par voie veineuse transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0183",
      "display" : "Embolisation lymphatique percutanée",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0184",
      "display" : "Redilatation de stent avec fracture volontaire du stent",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0185",
      "display" : "Extraction percutanée d'un dispositif ou d'un corps étranger",
      "target" : [{
        "code" : "DAGF001",
        "display" : "Ablation de corps étranger intracardiaque ou intravasculaire, par voie vasculaire transcutanée",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0186",
      "display" : "Geste percutané pour complication du cathétérisme",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — coder l'acte de rattrapage réalisé"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0187",
      "display" : "Retrait chirurgical d'un dispositif",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — geste chirurgical : codage selon l'acte opératoire"
      }]
    },
    {
      "code" : "TAUSSIG-PROC-0188",
      "display" : "Geste sur une veine systémique",
      "target" : [{
        "equivalence" : "unmatched",
        "comment" : "proposé v6 — concept générique"
      }]
    }]
  }]
}

```
