# TAUSSIG — CCAM (sous-ensemble cath congénital) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## CodeSystem: TAUSSIG — CCAM (sous-ensemble cath congénital) (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* Cette terminologie de référence (CodeSystem) n'est pas utilisée ici; elle peut être utilisée ailleurs (par exemple spécifications et/ou implémentations qui utilisent ce contenu)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "ccam",
  "url" : "https://mos.esante.gouv.fr/NOS/TRE_R310-CCAM/FHIR/TRE-R310-CCAM",
  "version" : "0.1.0",
  "name" : "TaussigCcam",
  "title" : "TAUSSIG — CCAM (sous-ensemble cath congénital)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Sous-ensemble candidat de la CCAM v82 (ATIH) pour le cathétérisme congénital. Fragment : extrait des actes percutanés cœur/gros vaisseaux. CCAM = primaire administratif ; SNOMED procédure = précision (axe séparé).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "copyright" : "CCAM © CNAM. Réutilisation des libellés à usage de recherche.",
  "caseSensitive" : true,
  "content" : "fragment",
  "concept" : [{
    "code" : "DFQH001",
    "display" : "Artériographie sélective du tronc et/ou des branches de l'artère pulmonaire, par voie veineuse transcutanée"
  },
  {
    "code" : "DFQH002",
    "display" : "Artériographie hypersélective des artères pulmonaires, par voie veineuse transcutanée"
  },
  {
    "code" : "DGQH004",
    "display" : "Artériographie de l'aorte et de ses branches, par injection intraveineuse transcutanée"
  },
  {
    "code" : "DGQH006",
    "display" : "Artériographie globale de l'aorte thoracique, par voie artérielle transcutanée"
  },
  {
    "code" : "DAAF001",
    "display" : "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée"
  },
  {
    "code" : "DAAF002",
    "display" : "Dilatation intraluminale de la voie d'éjection infraaortique, par voie artérielle transcutanée"
  },
  {
    "code" : "DFAF001",
    "display" : "Dilatation intraluminale de plusieurs branches de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée"
  },
  {
    "code" : "DFAF002",
    "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée"
  },
  {
    "code" : "DFAF003",
    "display" : "Dilatation intraluminale d'une branche de l'artère pulmonaire avec pose d'endoprothèse, par voie veineuse transcutanée"
  },
  {
    "code" : "DFAF004",
    "display" : "Dilatation intraluminale de plusieurs branches de l'artère pulmonaire sans pose d'endoprothèse, par voie veineuse transcutanée"
  },
  {
    "code" : "DGAF001",
    "display" : "Dilatation intraluminale de l'aorte thoracique sans pose d'endoprothèse, par voie artérielle transcutanée"
  },
  {
    "code" : "DGAF004",
    "display" : "Dilatation intraluminale d'une coarctation de l'aorte thoracique avec pose d'endoprothèse, par voie artérielle transcutanée"
  },
  {
    "code" : "DGAF006",
    "display" : "Dilatation intraluminale d'une coarctation de l'aorte thoracique sans pose d'endoprothèse, par voie artérielle transcutanée"
  },
  {
    "code" : "DGAF007",
    "display" : "Dilatation intraluminale de l'aorte thoracique avec pose d'endoprothèse, par voie artérielle transcutanée"
  },
  {
    "code" : "DGLF003",
    "display" : "Pose d'endoprothèse couverte dans l'aorte thoracique, par voie artérielle transcutanée"
  },
  {
    "code" : "EZGF001",
    "display" : "Ablation d'une endoprothèse vasculaire ou d'un filtre cave ayant migré en position intracardiaque ou intravasculaire, par voie vasculaire transcutanée"
  },
  {
    "code" : "DASF002",
    "display" : "Fermeture d'une déhiscence d'une prothèse de cloisonnement intraatrial, par voie vasculaire transcutanée"
  },
  {
    "code" : "DASF003",
    "display" : "Fermeture de communication interventriculaire, par voie veineuse transcutanée"
  },
  {
    "code" : "DASF004",
    "display" : "Fermeture d'une communication interatriale, par voie veineuse transcutanée"
  },
  {
    "code" : "DASF005",
    "display" : "Fermeture d'un foramen ovale perméable, par voie veineuse transcutanée"
  },
  {
    "code" : "DBSF001",
    "display" : "Fermeture d'une déhiscence par désinsertion de prothèse orificielle cardiaque, par voie vasculaire transcutanée"
  },
  {
    "code" : "DFSF001",
    "display" : "Oblitération d'anévrisme sacculaire de l'artère pulmonaire, par voie veineuse transcutanée"
  },
  {
    "code" : "EQLF004",
    "display" : "Pose de dispositif de mesure des pressions du cœur droit et du débit cardiaque, par voie veineuse transcutanée"
  },
  {
    "code" : "EQQF001",
    "display" : "Mesure et enregistrement des pressions du cœur droit, de l'artère pulmonaire et du cœur gauche, sans injection de produit de contraste, par voie veineuse transcutanée et par voie artérielle transcutanée ou cathétérisme du foramen ovale"
  },
  {
    "code" : "EQQF002",
    "display" : "Mesure et enregistrement des pressions du cœur gauche et de l'aorte, sans injection de produit de contraste, par voie artérielle transcutanée"
  },
  {
    "code" : "EQQF003",
    "display" : "Mesure et enregistrement des pressions intravasculaires pulmonaires et systémiques et des différences artérioveineuses des contenus artériels en oxygène, à l'état basal et après administration d'agent pharmacologique vasodilatateur, par voie vasculaire transcutanée"
  },
  {
    "code" : "EQQF004",
    "display" : "Mesure et enregistrement des pressions du cœur droit, de l'artère pulmonaire et du cœur gauche, sans injection de produit de contraste, par voie veineuse transcutanée avec perforation du septum interatrial"
  },
  {
    "code" : "EQQF006",
    "display" : "Mesure et enregistrement des pressions du cœur droit et de l'artère pulmonaire, sans injection de produit de contraste, par voie veineuse transcutanée"
  },
  {
    "code" : "EQQH001",
    "display" : "Mesure et enregistrement des pressions du cœur droit et de l'artère pulmonaire, avec injection de produit de contraste, par voie veineuse transcutanée"
  },
  {
    "code" : "EQQH002",
    "display" : "Mesure et enregistrement des pressions du cœur gauche et de l'aorte, avec injection de produit de contraste, par voie artérielle transcutanée"
  },
  {
    "code" : "EQQH004",
    "display" : "Mesure et enregistrement des pressions du cœur droit, de l'artère pulmonaire et du cœur gauche, avec injection de produit de contraste, par voie veineuse transcutanée avec perforation du septum interatrial"
  },
  {
    "code" : "EQQH005",
    "display" : "Mesure et enregistrement des pressions du cœur droit, de l'artère pulmonaire et du cœur gauche, avec injection de produit de contraste, par voie veineuse transcutanée et par voie artérielle transcutanée ou cathétérisme du foramen ovale, avant l'âge de 24 mois"
  },
  {
    "code" : "EQQH006",
    "display" : "Mesure et enregistrement des pressions du cœur droit, de l'artère pulmonaire et du cœur gauche, avec injection de produit de contraste, par voie veineuse transcutanée et par voie artérielle transcutanée ou cathétérisme du foramen ovale, à l'âge de 24 mois ou plus"
  },
  {
    "code" : "DAGF001",
    "display" : "Ablation de corps étranger intracardiaque ou intravasculaire, par voie vasculaire transcutanée"
  },
  {
    "code" : "DAAF003",
    "display" : "Agrandissement d'une communication interatriale, par voie veineuse transcutanée"
  },
  {
    "code" : "DAMF001",
    "display" : "Création d'une communication interatriale, par voie veineuse transcutanée"
  },
  {
    "code" : "DFNF001",
    "display" : "Fibrinolyse in situ de l'artère pulmonaire, par voie veineuse transcutanée"
  },
  {
    "code" : "DFNF002",
    "display" : "Thrombolyse mécanique ou thromboaspiration de l'artère pulmonaire, par voie veineuse transcutanée"
  },
  {
    "code" : "DBLF001",
    "display" : "Pose d'une bioprothèse de la valve aortique, par voie artérielle transcutanée"
  },
  {
    "code" : "DBLF009",
    "display" : "Pose d'une bioprothèse de la valve pulmonaire par voie veineuse transcutanée"
  },
  {
    "code" : "DBAF001",
    "display" : "Dilatation intraluminale de l'orifice aortique, par voie artérielle transcutanée"
  },
  {
    "code" : "DBAF002",
    "display" : "Dilatation intraluminale de l'orifice pulmonaire sans perforation de la valve atrésique, par voie veineuse transcutanée"
  },
  {
    "code" : "DBAF003",
    "display" : "Dilatation intraluminale de l'orifice atrioventriculaire droit, par voie veineuse transcutanée"
  },
  {
    "code" : "DBAF004",
    "display" : "Dilatation intraluminale de l'orifice atrioventriculaire gauche, par voie veineuse transcutanée avec perforation du septum interatrial"
  },
  {
    "code" : "DBAF005",
    "display" : "Dilatation intraluminale de l'orifice pulmonaire avec perforation de la valve atrésique, par voie veineuse transcutanée"
  }]
}

```
