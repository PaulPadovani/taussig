# TAUSSIG — Conditions cardiaques évolutives vers ECHSA - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Conditions cardiaques évolutives vers ECHSA (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-condition-to-echsa",
  "url" : "https://taussig/fhir/ConceptMap/taussig-condition-to-echsa",
  "version" : "0.8.1",
  "name" : "TaussigConditionToEchsa",
  "title" : "TAUSSIG — Conditions cardiaques évolutives vers ECHSA",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (conditions cardiaques évolutives) vers ECHSA. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-condition",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-condition",
    "target" : "https://taussig/fhir/CodeSystem/echsa",
    "element" : [{
      "code" : "TAUSSIG-COND-0001",
      "display" : "Création/agrandissement de communication interatriale",
      "target" : [{
        "code" : "SP-2010-4060",
        "display" : "ASD creation/enlargement",
        "equivalence" : "equivalent",
        "comment" : "antécédent d'intervention ; pas de code d'état après dédié"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0002",
      "display" : "Cerclage de l'artère pulmonaire",
      "target" : [{
        "code" : "SP-2010-5640",
        "display" : "PA banding (PAB)",
        "equivalence" : "equivalent",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0003",
      "display" : "Anastomose systémico-pulmonaire de Blalock-Taussig modifiée (MBTS)",
      "target" : [{
        "code" : "SP-2010-5590",
        "display" : "Shunt, Systemic to pulmonary, Modified Blalock-Taussig Shunt (MBTS)",
        "equivalence" : "equivalent",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0004",
      "display" : "Intervention de Norwood",
      "target" : [{
        "code" : "SP-2010-4870",
        "display" : "Norwood procedure",
        "equivalence" : "equivalent",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0005",
      "display" : "Anastomose cavopulmonaire unidirectionnelle (Glenn unidirectionnel)",
      "target" : [{
        "code" : "SP-2010-5680",
        "display" : "Glenn (unidirectional cavopulmonary anastomosis) (unidirectional Glenn)",
        "equivalence" : "equivalent",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0006",
      "display" : "Anastomose cavopulmonaire bidirectionnelle (Glenn bidirectionnel)",
      "target" : [{
        "code" : "SP-2010-5670",
        "display" : "Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn)",
        "equivalence" : "inexact",
        "comment" : "code d'intervention ; le code d'état après dédié est DIAG-2024-1"
      },
      {
        "code" : "DIAG-2024-1",
        "display" : "Status post - bidirectional Glenn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0007",
      "display" : "Anastomose cavopulmonaire bidirectionnelle bilatérale",
      "target" : [{
        "code" : "SP-2010-5690",
        "display" : "Bilateral bidirectional cavopulmonary anastomosis (BBDCPA) (bilateral bidirectional Glenn)",
        "equivalence" : "inexact",
        "comment" : "code d'intervention ; le code d'état après dédié est DIAG-2024-2"
      },
      {
        "code" : "DIAG-2024-2",
        "display" : "Status post - bilateral bidirectional Glenn",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0008",
      "display" : "Fontan (TCPC), conduit extracardiaque, fenestré",
      "target" : [{
        "code" : "SP-2010-5000",
        "display" : "Fontan, TCPC, External conduit, Fenestrated",
        "equivalence" : "equivalent",
        "comment" : "antécédent d'intervention"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0009",
      "display" : "Fontan (TCPC), conduit extracardiaque, non fenestré",
      "target" : [{
        "code" : "SP-2010-5010",
        "display" : "Fontan, TCPC, External conduit, Nonfenestrated",
        "equivalence" : "equivalent",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0010",
      "display" : "Fontan (TCPC), tunnel latéral, fenestré",
      "target" : [{
        "code" : "SP-2010-4970",
        "display" : "Fontan, TCPC, Lateral tunnel, Fenestrated",
        "equivalence" : "equivalent",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0011",
      "display" : "Fontan (TCPC), tunnel latéral, non fenestré",
      "target" : [{
        "code" : "SP-2010-4980",
        "display" : "Fontan, TCPC, Lateral tunnel, Nonfenestrated",
        "equivalence" : "equivalent",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0012",
      "display" : "Réparation à un ventricule et demi",
      "target" : [{
        "code" : "SP-2010-4520",
        "display" : "1 1/2 ventricular repair",
        "equivalence" : "equivalent",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0013",
      "display" : "Palliation, autre",
      "target" : [{
        "code" : "SP-2010-5710",
        "display" : "Palliation, Other",
        "equivalence" : "equivalent",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0014",
      "display" : "Endocardite infectieuse",
      "target" : [{
        "code" : "DIAG123",
        "display" : "Endocarditis",
        "equivalence" : "wider",
        "comment" : "endocardite sans précision infectieuse"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0015",
      "display" : "Anomalie acquise de la veine cave supérieure",
      "target" : [{
        "code" : "DIAG026",
        "display" : "Systemic venous anomaly",
        "equivalence" : "inexact",
        "comment" : "anomalie veineuse systémique au sens congénital"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0016",
      "display" : "Anomalie acquise de la veine cave inférieure",
      "target" : [{
        "code" : "DIAG026",
        "display" : "Systemic venous anomaly",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0017",
      "display" : "Anomalie acquise du sinus coronaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0018",
      "display" : "Anomalie acquise des veines pulmonaires",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0019",
      "display" : "Anomalie acquise de l'oreillette droite",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0020",
      "display" : "Anomalie acquise de l'oreillette gauche",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0021",
      "display" : "Communication interatriale résiduelle (CIA)",
      "target" : [{
        "code" : "DIAG-2019-17",
        "display" : "ASD, Postoperative interatrial communication",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0022",
      "display" : "Régurgitation tricuspide résiduelle",
      "target" : [{
        "code" : "DIAG037",
        "display" : "Tricuspid regurgitation, non-Ebstein's related",
        "equivalence" : "wider",
        "comment" : "ECHSA ne distingue pas le caractère résiduel"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0023",
      "display" : "Sténose mitrale résiduelle",
      "target" : [{
        "code" : "DIAG164",
        "display" : "Mitral stenosis",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0024",
      "display" : "Régurgitation mitrale résiduelle",
      "target" : [{
        "code" : "DIAG067",
        "display" : "Mitral regurgitation",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0025",
      "display" : "Régurgitation troncale résiduelle",
      "target" : [{
        "code" : "DIAG-2010-170",
        "display" : "Truncal valve insufficiency",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0026",
      "display" : "Sténose valvulaire pulmonaire résiduelle",
      "target" : [{
        "code" : "DIAG041",
        "display" : "Pulmonary stenosis, Valvar",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0027",
      "display" : "Régurgitation pulmonaire résiduelle",
      "target" : [{
        "code" : "DIAG049",
        "display" : "Pulmonary insufficiency",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0028",
      "display" : "Sténose de la néovalve pulmonaire",
      "target" : [{
        "code" : "DIAG041",
        "display" : "Pulmonary stenosis, Valvar",
        "equivalence" : "wider",
        "comment" : "ne distingue pas la néovalve"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0029",
      "display" : "Régurgitation de la néovalve pulmonaire",
      "target" : [{
        "code" : "DIAG049",
        "display" : "Pulmonary insufficiency",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0030",
      "display" : "Sténose valvulaire aortique résiduelle",
      "target" : [{
        "code" : "DIAG052",
        "display" : "Aortic stenosis, Valvar",
        "equivalence" : "wider",
        "comment" : "ne distingue pas le caractère résiduel"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0031",
      "display" : "Régurgitation aortique résiduelle",
      "target" : [{
        "code" : "DIAG056",
        "display" : "Aortic insufficiency",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0032",
      "display" : "Sténose de la néovalve aortique d'origine pulmonaire",
      "target" : [{
        "code" : "DIAG052",
        "display" : "Aortic stenosis, Valvar",
        "equivalence" : "wider",
        "comment" : "ne distingue pas la néovalve"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0033",
      "display" : "Régurgitation de la néovalve aortique d'origine pulmonaire",
      "target" : [{
        "code" : "DIAG056",
        "display" : "Aortic insufficiency",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0034",
      "display" : "Sténose acquise de la néovalve aortique d'origine troncale",
      "target" : [{
        "code" : "DIAG052",
        "display" : "Aortic stenosis, Valvar",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0035",
      "display" : "Régurgitation acquise de la néovalve aortique d'origine troncale",
      "target" : [{
        "code" : "DIAG056",
        "display" : "Aortic insufficiency",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0036",
      "display" : "Composante ventriculaire résiduelle de canal atrioventriculaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0037",
      "display" : "Régurgitation résiduelle de la valve atrioventriculaire commune",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0038",
      "display" : "Sténose acquise de la valve atrioventriculaire commune (connexions biventriculaires)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0039",
      "display" : "Dilatation ventriculaire droite acquise",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0040",
      "display" : "Hypertrophie ventriculaire droite acquise",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0041",
      "display" : "Anévrisme ventriculaire droit acquis",
      "target" : [{
        "code" : "DIAG116",
        "display" : "Aneurysm, Ventricular, Right (including pseudoaneurysm)",
        "equivalence" : "wider",
        "comment" : "inclut le pseudoanévrisme"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0042",
      "display" : "Dysfonction ventriculaire droite",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0043",
      "display" : "Obstruction résiduelle de la voie d'éjection du ventricule droit",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0044",
      "display" : "Dilatation ventriculaire gauche acquise",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0045",
      "display" : "Hypertrophie ventriculaire gauche acquise",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0046",
      "display" : "Anévrisme ventriculaire gauche acquis",
      "target" : [{
        "code" : "DIAG117",
        "display" : "Aneurysm, Ventricular, Left (including pseudoaneurysm)",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0047",
      "display" : "Défaillance ventriculaire gauche",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0048",
      "display" : "Complication post-procédurale de la voie d'éjection du ventricule gauche",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0049",
      "display" : "Sténose sous-aortique acquise",
      "target" : [{
        "code" : "DIAG051",
        "display" : "Aortic stenosis, Subvalvar",
        "equivalence" : "wider",
        "comment" : "ne distingue pas congénital et acquis"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0050",
      "display" : "Sténose sous-pulmonaire acquise",
      "target" : [{
        "code" : "DIAG166",
        "display" : "Pulmonary stenosis, Subvalvar",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0051",
      "display" : "Communication interventriculaire résiduelle (CIV)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0052",
      "display" : "Cardiomyopathie restrictive",
      "target" : [{
        "code" : "DIAG070",
        "display" : "Cardiomyopathy (including dilated, restrictive, and hypertrophic)",
        "equivalence" : "wider",
        "comment" : "toutes cardiomyopathies"
      },
      {
        "code" : "DIAG-2023-3",
        "display" : "Restrictive cardiomyopathy",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0053",
      "display" : "Anomalie acquise de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "DIAG118",
        "display" : "Aneurysm, Pulmonary artery",
        "equivalence" : "narrower",
        "comment" : "anévrisme seulement"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0054",
      "display" : "Sténose post-procédurale du tronc de l'artère pulmonaire",
      "target" : [{
        "code" : "DIAG042",
        "display" : "Pulmonary artery stenosis (hypoplasia), Main (trunk)",
        "equivalence" : "wider",
        "comment" : "ne distingue pas congénital et post-procédural"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0055",
      "display" : "Sténose résiduelle de l'artère pulmonaire droite",
      "target" : [{
        "code" : "DIAG043",
        "display" : "Pulmonary artery stenosis, Branch, Central (within the hilar bifurcation)",
        "equivalence" : "inexact",
        "comment" : "sténose centrale seulement ; la sténose résiduelle peut être périphérique"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0056",
      "display" : "Sténose résiduelle de l'artère pulmonaire gauche",
      "target" : [{
        "code" : "DIAG043",
        "display" : "Pulmonary artery stenosis, Branch, Central (within the hilar bifurcation)",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0057",
      "display" : "Hypertension artérielle pulmonaire",
      "target" : [{
        "code" : "DIAG131",
        "display" : "Primary pulmonary hypertension",
        "equivalence" : "narrower",
        "comment" : "HTAP primitive seulement"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0058",
      "display" : "Embolie pulmonaire",
      "target" : [{
        "code" : "DIAG128",
        "display" : "Pulmonary embolism",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0059",
      "display" : "Sténose aortique supravalvulaire acquise",
      "target" : [{
        "code" : "DIAG053",
        "display" : "Aortic stenosis, Supravalvar",
        "equivalence" : "wider",
        "comment" : "ne distingue pas congénital et acquis"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0060",
      "display" : "Dilatation acquise de l'aorte ascendante et/ou de la racine aortique",
      "target" : [{
        "code" : "DIAG102",
        "display" : "Aortic aneurysm (including pseudoaneurysm)",
        "equivalence" : "inexact",
        "comment" : "une dilatation n'est pas un anévrisme"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0061",
      "display" : "Dilatation de la racine aortique",
      "target" : [{
        "code" : "DIAG102",
        "display" : "Aortic aneurysm (including pseudoaneurysm)",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0062",
      "display" : "Dissection aortique",
      "target" : [{
        "code" : "DIAG103",
        "display" : "Aortic dissection",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0063",
      "display" : "Anévrisme aortique",
      "target" : [{
        "code" : "DIAG102",
        "display" : "Aortic aneurysm (including pseudoaneurysm)",
        "equivalence" : "wider",
        "comment" : "inclut le pseudoanévrisme"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0064",
      "display" : "Coarctation aortique résiduelle",
      "target" : [{
        "code" : "DIAG095",
        "display" : "Coarctation of aorta",
        "equivalence" : "wider",
        "comment" : "ne distingue pas le caractère résiduel"
      },
      {
        "code" : "DIAG-2024-7",
        "display" : "Coarctation - status post stent placement",
        "equivalence" : "inexact",
        "comment" : "coarctation après pose de stent seulement"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0065",
      "display" : "Complication coronaire post-procédurale",
      "target" : [{
        "code" : "DIAG161",
        "display" : "Coronary artery anomaly, Other",
        "equivalence" : "inexact",
        "comment" : "anomalie coronaire « autre », au sens congénital"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0066",
      "display" : "Persistance résiduelle du canal artériel (PDA)",
      "target" : [{
        "code" : "DIAG099",
        "display" : "Patent ductus arteriosus",
        "equivalence" : "wider",
        "comment" : "ne distingue pas le caractère résiduel"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0067",
      "display" : "Complication liée à un conduit cardiaque",
      "target" : [{
        "code" : "DIAG048",
        "display" : "Conduit failure",
        "equivalence" : "narrower",
        "comment" : "défaillance seulement"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0068",
      "display" : "Obstruction d'anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "DIAG-2010-2130",
        "display" : "Shunt failure",
        "equivalence" : "wider",
        "comment" : "toute défaillance d'anastomose"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0069",
      "display" : "Obstruction partielle d'anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "DIAG-2010-2130",
        "display" : "Shunt failure",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0070",
      "display" : "Obstruction complète d'anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "DIAG-2010-2130",
        "display" : "Shunt failure",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0071",
      "display" : "Défaillance d'autogreffe pulmonaire",
      "target" : [{
        "code" : "DIAG124",
        "display" : "Prosthetic valve failure",
        "equivalence" : "inexact",
        "comment" : "une autogreffe n'est pas une prothèse"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0072",
      "display" : "Circulation de Fontan défaillante",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0073",
      "display" : "Épanchement péricardique",
      "target" : [{
        "code" : "DIAG071",
        "display" : "Pericardial effusion",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG-2019-31",
        "display" : "Tamponade",
        "equivalence" : "narrower",
        "comment" : "tamponnade"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0074",
      "display" : "Complication après transplantation cardiaque ou pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0075",
      "display" : "Sténose acquise des veines pulmonaires",
      "target" : [{
        "code" : "DIAG-2019-10",
        "display" : "Pulmonary venous stenosis, Acquired",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0076",
      "display" : "Obstruction d'une veine systémique",
      "target" : [{
        "code" : "DIAG027",
        "display" : "Systemic venous obstruction",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0077",
      "display" : "Collatérale(s) veino-veineuse(s) systémique(s)",
      "target" : [{
        "code" : "DIAG-2024-5",
        "display" : "Venovenous collaterals",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0078",
      "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) acquise(s)",
      "target" : [{
        "code" : "DIAG-2024-6",
        "display" : "Arterioarterial collaterals",
        "equivalence" : "wider",
        "comment" : "collatérales artérioartérielles, sans précision systémico-pulmonaire"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0079",
      "display" : "Fistules (malformations) artérioveineuses pulmonaires acquises",
      "target" : [{
        "code" : "DIAG127",
        "display" : "Pulmonary AV fistula",
        "equivalence" : "wider",
        "comment" : "ne distingue pas congénital et acquis"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0080",
      "display" : "Cardiomyopathie dilatée",
      "target" : [{
        "code" : "DIAG-2023-1",
        "display" : "Dilated cardiomyopathy",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0081",
      "display" : "Cardiomyopathie hypertrophique",
      "target" : [{
        "code" : "DIAG-2023-2",
        "display" : "Hypertrophic cardiomyopathy",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0082",
      "display" : "Cardiomyopathie hypertrophique obstructive du ventricule gauche",
      "target" : [{
        "code" : "DIAG-2023-4",
        "display" : "Hypertrophic obstructive cardiomyopathy",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0083",
      "display" : "Myocardite (cardiomyopathie inflammatoire)",
      "target" : [{
        "code" : "DIAG-2019-07",
        "display" : "Myocarditis",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0084",
      "display" : "Maladie de Kawasaki",
      "target" : [{
        "code" : "DIAG-2019-26",
        "display" : "Kawasaki disease",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0085",
      "display" : "Infarctus du myocarde",
      "target" : [{
        "code" : "DIAG125",
        "display" : "Myocardial infarction",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0086",
      "display" : "État après transplantation cardiaque",
      "target" : [{
        "code" : "DIAG175",
        "display" : "Status post - Transplant, Heart",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0087",
      "display" : "Maladie vasculaire pulmonaire irréversible",
      "target" : [{
        "code" : "DIAG167",
        "display" : "Pulmonary vascular obstructive disease",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG130",
        "display" : "Pulmonary vascular obstructive disease (Eisenmenger's)",
        "equivalence" : "narrower",
        "comment" : "forme d'Eisenmenger"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0088",
      "display" : "Maladie vasculaire pulmonaire irréversible due à une cardiopathie congénitale (syndrome d'Eisenmenger)",
      "target" : [{
        "code" : "DIAG130",
        "display" : "Pulmonary vascular obstructive disease (Eisenmenger's)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0089",
      "display" : "Trouble du rythme cardiaque",
      "target" : [{
        "code" : "DIAG109",
        "display" : "Arrhythmia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0090",
      "display" : "Fibrillation atriale",
      "target" : [{
        "code" : "DIAG-2019-14",
        "display" : "Arrhythmia, Atrial, Atrial fibrillation",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0091",
      "display" : "Flutter atrial",
      "target" : [{
        "code" : "DIAG-2019-15",
        "display" : "Arrhythmia, Atrial, Atrial flutter",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0092",
      "display" : "Trouble du rythme atrial",
      "target" : [{
        "code" : "DIAG-2019-16",
        "display" : "Arrhythmia, Atrial, Other",
        "equivalence" : "inexact",
        "comment" : "catégorie « autre » du rythme atrial"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0093",
      "display" : "Trouble du rythme de la jonction atrioventriculaire",
      "target" : [{
        "code" : "DIAG-2010-2050",
        "display" : "Arrhythmia, Junctional",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0094",
      "display" : "Trouble du rythme ventriculaire",
      "target" : [{
        "code" : "DIAG-2010-2060",
        "display" : "Arrhythmia, Ventricular",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0095",
      "display" : "Tachycardie par réentrée atrioventriculaire avec préexcitation manifeste (Wolff-Parkinson-White)",
      "target" : [{
        "code" : "DIAG-2019-13",
        "display" : "Wolff-Parkinson-White syndrome (WPW syndrome)",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0096",
      "display" : "Bloc atrioventriculaire",
      "target" : [{
        "code" : "DIAG151",
        "display" : "Arrhythmia, Heart block",
        "equivalence" : "wider",
        "comment" : "bloc cardiaque sans précision du niveau"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0097",
      "display" : "Bloc atrioventriculaire complet acquis",
      "target" : [{
        "code" : "DIAG110",
        "display" : "Arrhythmia, Heart block, Acquired",
        "equivalence" : "wider",
        "comment" : "ne précise pas le degré"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0098",
      "display" : "Indication de remplacement programmé d'un stimulateur cardiaque",
      "target" : [{
        "code" : "DIAG113",
        "display" : "Arrhythmia, Pacemaker, Indication for replacement",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0099",
      "display" : "Entéropathie exsudative post-procédurale",
      "target" : [{
        "code" : "DIAG-2019-09",
        "display" : "Protein-losing enteropathy",
        "equivalence" : "wider",
        "comment" : "ne précise pas l'origine post-procédurale"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0100",
      "display" : "Bronchite plastique post-procédurale",
      "target" : [{
        "code" : "DIAG-2019-08",
        "display" : "Plastic bronchitis",
        "equivalence" : "wider",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0101",
      "display" : "Chylothorax",
      "target" : [{
        "code" : "DIAG138",
        "display" : "Chylothorax",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0102",
      "display" : "Embolisation d'un dispositif lors d'un cathétérisme cardiaque antérieur",
      "target" : [{
        "code" : "DIAG-2019-18",
        "display" : "Complication of cardiovascular catheterization procedure, Device embolization",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG-2019-21",
        "display" : "Complication of interventional radiology procedure, Device embolization",
        "equivalence" : "inexact",
        "comment" : "radiologie interventionnelle, non cathétérisme cardiaque"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0103",
      "display" : "Dysfonction d'un dispositif lors d'un cathétérisme cardiaque antérieur",
      "target" : [{
        "code" : "DIAG-2019-19",
        "display" : "Complication of cardiovascular catheterization procedure, Device malfunction",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG-2019-22",
        "display" : "Complication of interventional radiology procedure, Device malfunction",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0104",
      "display" : "Perforation d'une cavité ou d'un vaisseau lors d'un cathétérisme cardiaque antérieur",
      "target" : [{
        "code" : "DIAG-2019-20",
        "display" : "Complication of cardiovascular catheterization procedure, Perforation",
        "equivalence" : "equivalent"
      },
      {
        "code" : "DIAG-2019-23",
        "display" : "Complication of interventional radiology procedure, Perforation",
        "equivalence" : "inexact",
        "comment" : "idem"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0105",
      "display" : "Corps étranger intracardiaque post-procédural",
      "target" : [{
        "code" : "DIAG-2019-24",
        "display" : "Foreign body, Intracardiac foreign body",
        "equivalence" : "wider",
        "comment" : "ne précise pas l'origine post-procédurale"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0106",
      "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
      "target" : [{
        "code" : "DIAG-2019-25",
        "display" : "Foreign body, Intravascular foreign body",
        "equivalence" : "wider",
        "comment" : "corps étranger intravasculaire, sans précision du dispositif"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0107",
      "display" : "Hémorragie post-procédurale",
      "target" : [{
        "code" : "DIAG-2010-2070",
        "display" : "Postoperative bleeding",
        "equivalence" : "inexact",
        "comment" : "saignement post-opératoire (chirurgical), non post-procédural en général"
      }]
    }]
  }]
}

```
