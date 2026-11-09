# TAUSSIG — Conditions cardiaques évolutives vers IPCCC - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Conditions cardiaques évolutives vers IPCCC (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-condition-to-ipccc",
  "url" : "https://taussig/fhir/ConceptMap/taussig-condition-to-ipccc",
  "version" : "0.8.1",
  "name" : "TaussigConditionToIpccc",
  "title" : "TAUSSIG — Conditions cardiaques évolutives vers IPCCC",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (conditions cardiaques évolutives) vers IPCCC. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-condition",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-condition",
    "target" : "https://taussig/fhir/CodeSystem/ipccc",
    "element" : [{
      "code" : "TAUSSIG-COND-0001",
      "display" : "Création/agrandissement de communication interatriale",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0002",
      "display" : "Cerclage de l'artère pulmonaire",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0003",
      "display" : "Anastomose systémico-pulmonaire de Blalock-Taussig modifiée (MBTS)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0004",
      "display" : "Intervention de Norwood",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0005",
      "display" : "Anastomose cavopulmonaire unidirectionnelle (Glenn unidirectionnel)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0006",
      "display" : "Anastomose cavopulmonaire bidirectionnelle (Glenn bidirectionnel)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0007",
      "display" : "Anastomose cavopulmonaire bidirectionnelle bilatérale",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0008",
      "display" : "Fontan (TCPC), conduit extracardiaque, fenestré",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0009",
      "display" : "Fontan (TCPC), conduit extracardiaque, non fenestré",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0010",
      "display" : "Fontan (TCPC), tunnel latéral, fenestré",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0011",
      "display" : "Fontan (TCPC), tunnel latéral, non fenestré",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0012",
      "display" : "Réparation à un ventricule et demi",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0013",
      "display" : "Palliation, autre",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0014",
      "display" : "Endocardite infectieuse",
      "target" : [{
        "code" : "10.06.01",
        "display" : "Infective endocarditis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0015",
      "display" : "Anomalie acquise de la veine cave supérieure",
      "target" : [{
        "code" : "10.31.01",
        "display" : "Acquired superior caval vein (SVC) abnormality",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0016",
      "display" : "Anomalie acquise de la veine cave inférieure",
      "target" : [{
        "code" : "10.31.21",
        "display" : "Acquired inferior caval vein (IVC) abnormality",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0017",
      "display" : "Anomalie acquise du sinus coronaire",
      "target" : [{
        "code" : "10.30.16",
        "display" : "Acquired coronary sinus abnormality",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0018",
      "display" : "Anomalie acquise des veines pulmonaires",
      "target" : [{
        "code" : "10.24.00",
        "display" : "Acquired pulmonary venous abnormality",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0019",
      "display" : "Anomalie acquise de l'oreillette droite",
      "target" : [{
        "code" : "15.10.10",
        "display" : "Acquired right atrial abnormality",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0020",
      "display" : "Anomalie acquise de l'oreillette gauche",
      "target" : [{
        "code" : "15.10.20",
        "display" : "Acquired left atrial abnormality",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0021",
      "display" : "Communication interatriale résiduelle (CIA)",
      "target" : [{
        "code" : "15.10.63",
        "display" : "Residual interatrial communication ('ASD')",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0022",
      "display" : "Régurgitation tricuspide résiduelle",
      "target" : [{
        "code" : "15.11.03",
        "display" : "Residual tricuspid regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0023",
      "display" : "Sténose mitrale résiduelle",
      "target" : [{
        "code" : "15.12.01",
        "display" : "Residual mitral stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0024",
      "display" : "Régurgitation mitrale résiduelle",
      "target" : [{
        "code" : "15.12.03",
        "display" : "Residual mitral regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0025",
      "display" : "Régurgitation troncale résiduelle",
      "target" : [{
        "code" : "15.25.03",
        "display" : "Residual truncal regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0026",
      "display" : "Sténose valvulaire pulmonaire résiduelle",
      "target" : [{
        "code" : "15.30.01",
        "display" : "Residual pulmonary valvar stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0027",
      "display" : "Régurgitation pulmonaire résiduelle",
      "target" : [{
        "code" : "15.30.03",
        "display" : "Residual pulmonary regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0028",
      "display" : "Sténose de la néovalve pulmonaire",
      "target" : [{
        "code" : "15.30.09",
        "display" : "Neopulmonary valvar stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0029",
      "display" : "Régurgitation de la néovalve pulmonaire",
      "target" : [{
        "code" : "15.30.10",
        "display" : "Neopulmonary valvar regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0030",
      "display" : "Sténose valvulaire aortique résiduelle",
      "target" : [{
        "code" : "15.35.01",
        "display" : "Residual aortic valvar stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0031",
      "display" : "Régurgitation aortique résiduelle",
      "target" : [{
        "code" : "15.35.03",
        "display" : "Residual aortic regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0032",
      "display" : "Sténose de la néovalve aortique d'origine pulmonaire",
      "target" : [{
        "code" : "15.35.09",
        "display" : "Stenosis of the neo-aortic valve of pulmonary origin",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0033",
      "display" : "Régurgitation de la néovalve aortique d'origine pulmonaire",
      "target" : [{
        "code" : "15.35.10",
        "display" : "Regurgitation of the neo-aortic valve of pulmonary origin",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0034",
      "display" : "Sténose acquise de la néovalve aortique d'origine troncale",
      "target" : [{
        "code" : "15.25.12",
        "display" : "Acquired stenosis of the neo-aortic valve of truncal origin",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0035",
      "display" : "Régurgitation acquise de la néovalve aortique d'origine troncale",
      "target" : [{
        "code" : "15.25.13",
        "display" : "Acquired regurgitation of the neo-aortic valve of truncal origin",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0036",
      "display" : "Composante ventriculaire résiduelle de canal atrioventriculaire",
      "target" : [{
        "code" : "15.16.02",
        "display" : "Residual ventricular component of atrioventricular septal defect",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0037",
      "display" : "Régurgitation résiduelle de la valve atrioventriculaire commune",
      "target" : [{
        "code" : "15.13.02",
        "display" : "Residual common atrioventricular valvar regurgitation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0038",
      "display" : "Sténose acquise de la valve atrioventriculaire commune (connexions biventriculaires)",
      "target" : [{
        "code" : "10.34.56",
        "display" : "Acquired stenosis of the common atrioventricular valve in biventricular connections",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0039",
      "display" : "Dilatation ventriculaire droite acquise",
      "target" : [{
        "code" : "10.16.22",
        "display" : "Acquired right ventricular dilation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0040",
      "display" : "Hypertrophie ventriculaire droite acquise",
      "target" : [{
        "code" : "10.16.23",
        "display" : "Acquired right ventricular hypertrophy",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0041",
      "display" : "Anévrisme ventriculaire droit acquis",
      "target" : [{
        "code" : "10.16.02",
        "display" : "Acquired right ventricular aneurysm",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0042",
      "display" : "Dysfonction ventriculaire droite",
      "target" : [{
        "code" : "07.01.11",
        "display" : "Right ventricular dysfunction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0043",
      "display" : "Obstruction résiduelle de la voie d'éjection du ventricule droit",
      "target" : [{
        "code" : "15.20.23",
        "display" : "Residual right ventricular outflow tract obstruction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0044",
      "display" : "Dilatation ventriculaire gauche acquise",
      "target" : [{
        "code" : "10.16.76",
        "display" : "Acquired left ventricular dilation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0045",
      "display" : "Hypertrophie ventriculaire gauche acquise",
      "target" : [{
        "code" : "10.16.77",
        "display" : "Acquired left ventricular hypertrophy",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0046",
      "display" : "Anévrisme ventriculaire gauche acquis",
      "target" : [{
        "code" : "10.16.42",
        "display" : "Acquired left ventricular aneurysm",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0047",
      "display" : "Défaillance ventriculaire gauche",
      "target" : [{
        "code" : "10.16.47",
        "display" : "Left ventricular failure",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0048",
      "display" : "Complication post-procédurale de la voie d'éjection du ventricule gauche",
      "target" : [{
        "code" : "15.21.21",
        "display" : "Postprocedural left ventricular outflow tract complication",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0049",
      "display" : "Sténose sous-aortique acquise",
      "target" : [{
        "code" : "10.16.86",
        "display" : "Acquired subaortic stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0050",
      "display" : "Sténose sous-pulmonaire acquise",
      "target" : [{
        "code" : "10.16.88",
        "display" : "Acquired subpulmonary stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0051",
      "display" : "Communication interventriculaire résiduelle (CIV)",
      "target" : [{
        "code" : "15.22.02",
        "display" : "Residual ventricular septal defect (VSD)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0052",
      "display" : "Cardiomyopathie restrictive",
      "target" : [{
        "code" : "10.10.10",
        "display" : "Restrictive cardiomyopathy",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0053",
      "display" : "Anomalie acquise de l'arbre artériel pulmonaire",
      "target" : [{
        "code" : "10.13.59",
        "display" : "Acquired pulmonary arterial tree abnormality",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0054",
      "display" : "Sténose post-procédurale du tronc de l'artère pulmonaire",
      "target" : [{
        "code" : "15.32.02",
        "display" : "Postprocedural pulmonary trunk stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0055",
      "display" : "Sténose résiduelle de l'artère pulmonaire droite",
      "target" : [{
        "code" : "15.32.23",
        "display" : "Residual right pulmonary artery stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0056",
      "display" : "Sténose résiduelle de l'artère pulmonaire gauche",
      "target" : [{
        "code" : "15.32.43",
        "display" : "Residual left pulmonary artery stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0057",
      "display" : "Hypertension artérielle pulmonaire",
      "target" : [{
        "code" : "10.13.01",
        "display" : "Pulmonary arterial hypertension",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0058",
      "display" : "Embolie pulmonaire",
      "target" : [{
        "code" : "10.13.51",
        "display" : "Pulmonary embolism",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0059",
      "display" : "Sténose aortique supravalvulaire acquise",
      "target" : [{
        "code" : "10.14.77",
        "display" : "Acquired supravalvar aortic stenosis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0060",
      "display" : "Dilatation acquise de l'aorte ascendante et/ou de la racine aortique",
      "target" : [{
        "code" : "10.14.82",
        "display" : "Acquired dilation of ascending aorta and/or aortic root",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0061",
      "display" : "Dilatation de la racine aortique",
      "target" : [{
        "code" : "09.16.13",
        "display" : "Aortic root dilation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0062",
      "display" : "Dissection aortique",
      "target" : [{
        "code" : "10.14.51",
        "display" : "Aortic dissection",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0063",
      "display" : "Anévrisme aortique",
      "target" : [{
        "code" : "10.14.50",
        "display" : "Aortic aneurysm",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0064",
      "display" : "Coarctation aortique résiduelle",
      "target" : [{
        "code" : "15.37.05",
        "display" : "Residual aortic coarctation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0065",
      "display" : "Complication coronaire post-procédurale",
      "target" : [{
        "code" : "15.41.00",
        "display" : "Postprocedural coronary arterial complication",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0066",
      "display" : "Persistance résiduelle du canal artériel (PDA)",
      "target" : [{
        "code" : "15.39.02",
        "display" : "Residual arterial duct (PDA) patency",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0067",
      "display" : "Complication liée à un conduit cardiaque",
      "target" : [{
        "code" : "15.55.00",
        "display" : "Cardiac conduit related complication",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0068",
      "display" : "Obstruction d'anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "15.56.27",
        "display" : "Systemic-to-pulmonary arterial shunt obstruction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0069",
      "display" : "Obstruction partielle d'anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "15.56.01",
        "display" : "Systemic-to-pulmonary arterial shunt partial obstruction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0070",
      "display" : "Obstruction complète d'anastomose systémico-pulmonaire",
      "target" : [{
        "code" : "15.56.02",
        "display" : "Systemic-to-pulmonary arterial shunt complete obstruction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0071",
      "display" : "Défaillance d'autogreffe pulmonaire",
      "target" : [{
        "code" : "15.55.24",
        "display" : "Pulmonary autograft failure",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0072",
      "display" : "Circulation de Fontan défaillante",
      "target" : [{
        "code" : "15.90.60",
        "display" : "'Failed' Fontan type circulation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0073",
      "display" : "Épanchement péricardique",
      "target" : [{
        "code" : "10.08.31",
        "display" : "Pericardial effusion",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0074",
      "display" : "Complication après transplantation cardiaque ou pulmonaire",
      "target" : [{
        "code" : "15.95.00",
        "display" : "Complication after heart or lung transplant",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0075",
      "display" : "Sténose acquise des veines pulmonaires",
      "target" : [{
        "code" : "10.24.02",
        "display" : "Pulmonary venous stenosis: acquired",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0076",
      "display" : "Obstruction d'une veine systémique",
      "target" : [{
        "code" : "10.30.09",
        "display" : "Systemic vein obstruction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0077",
      "display" : "Collatérale(s) veino-veineuse(s) systémique(s)",
      "target" : [{
        "code" : "04.00.06",
        "display" : "Systemic venovenous collateral(s)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0078",
      "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) acquise(s)",
      "target" : [{
        "code" : "10.13.74",
        "display" : "Systemic-to-pulmonary collateral artery(ies) (MAPCA): acquired",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0079",
      "display" : "Fistules (malformations) artérioveineuses pulmonaires acquises",
      "target" : [{
        "code" : "10.13.57",
        "display" : "Acquired pulmonary arteriovenous fistulas (malformations)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0080",
      "display" : "Cardiomyopathie dilatée",
      "target" : [{
        "code" : "10.10.25",
        "display" : "Dilated cardiomyopathy",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0081",
      "display" : "Cardiomyopathie hypertrophique",
      "target" : [{
        "code" : "10.10.20",
        "display" : "Hypertrophic cardiomyopathy",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0082",
      "display" : "Cardiomyopathie hypertrophique obstructive du ventricule gauche",
      "target" : [{
        "code" : "10.10.05",
        "display" : "Obstructive hypertrophic cardiomyopathy of left ventricle",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0083",
      "display" : "Myocardite (cardiomyopathie inflammatoire)",
      "target" : [{
        "code" : "10.07.90",
        "display" : "Myocarditis (inflammatory cardiomyopathy)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0084",
      "display" : "Maladie de Kawasaki",
      "target" : [{
        "code" : "10.09.01",
        "display" : "Kawasaki disease",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0085",
      "display" : "Infarctus du myocarde",
      "target" : [{
        "code" : "10.18.00",
        "display" : "Myocardial infarction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0086",
      "display" : "État après transplantation cardiaque",
      "target" : [{
        "code" : "10.21.63",
        "display" : "Patient status post heart transplant",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0087",
      "display" : "Maladie vasculaire pulmonaire irréversible",
      "target" : [{
        "code" : "10.13.00",
        "display" : "Irreversible pulmonary vascular disease",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0088",
      "display" : "Maladie vasculaire pulmonaire irréversible due à une cardiopathie congénitale (syndrome d'Eisenmenger)",
      "target" : [{
        "code" : "10.13.08",
        "display" : "Irreversible pulmonary vascular disease due to congenital heart disease (Eisenmenger Syndrome)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0089",
      "display" : "Trouble du rythme cardiaque",
      "target" : [{
        "code" : "11.00.00",
        "display" : "Arrhythmia",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0090",
      "display" : "Fibrillation atriale",
      "target" : [{
        "code" : "11.03.08",
        "display" : "Atrial fibrillation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0091",
      "display" : "Flutter atrial",
      "target" : [{
        "code" : "11.03.07",
        "display" : "Atrial flutter",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0092",
      "display" : "Trouble du rythme atrial",
      "target" : [{
        "code" : "11.03.09",
        "display" : "Atrial rhythm disturbance",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0093",
      "display" : "Trouble du rythme de la jonction atrioventriculaire",
      "target" : [{
        "code" : "11.04.00",
        "display" : "Rhythm disturbance at level of atrioventricular junction",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0094",
      "display" : "Trouble du rythme ventriculaire",
      "target" : [{
        "code" : "11.05.00",
        "display" : "Ventricular rhythm disturbance",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0095",
      "display" : "Tachycardie par réentrée atrioventriculaire avec préexcitation manifeste (Wolff-Parkinson-White)",
      "target" : [{
        "code" : "11.07.01",
        "display" : "Atrioventricular reentry (reciprocating) tachycardia: manifest preexcitation in sinus rhythm (Wolff Parkinson White)",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0096",
      "display" : "Bloc atrioventriculaire",
      "target" : [{
        "code" : "11.06.38",
        "display" : "Atrioventricular block",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0097",
      "display" : "Bloc atrioventriculaire complet acquis",
      "target" : [{
        "code" : "11.06.10",
        "display" : "Acquired complete atrioventricular block",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0098",
      "display" : "Indication de remplacement programmé d'un stimulateur cardiaque",
      "target" : [{
        "code" : "11.12.61",
        "display" : "Indication for elective replacement of pacemaker system",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0099",
      "display" : "Entéropathie exsudative post-procédurale",
      "target" : [{
        "code" : "15.82.33",
        "display" : "Cardiac postprocedural protein losing enteropathy",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0100",
      "display" : "Bronchite plastique post-procédurale",
      "target" : [{
        "code" : "15.81.01",
        "display" : "Cardiac postprocedural plastic bronchitis",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0101",
      "display" : "Chylothorax",
      "target" : [{
        "code" : "10.08.16",
        "display" : "Chylothorax",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0102",
      "display" : "Embolisation d'un dispositif lors d'un cathétérisme cardiaque antérieur",
      "target" : [{
        "code" : "15.51.47",
        "display" : "Embolisation of cardiovascular device during cardiac catheterisation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0103",
      "display" : "Dysfonction d'un dispositif lors d'un cathétérisme cardiaque antérieur",
      "target" : [{
        "code" : "15.51.50",
        "display" : "Device malfunction during cardiac catheterisation procedure",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0104",
      "display" : "Perforation d'une cavité ou d'un vaisseau lors d'un cathétérisme cardiaque antérieur",
      "target" : [{
        "code" : "15.50.03",
        "display" : "Inadvertent perforation of cardiac chamber or vessel during cardiac catheterisation",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0105",
      "display" : "Corps étranger intracardiaque post-procédural",
      "target" : [{
        "code" : "15.80.17",
        "display" : "Postprocedural retained foreign body",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0106",
      "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
      "target" : [{
        "code" : "15.50.37",
        "display" : "Embolisation of catheter introduced device",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    },
    {
      "code" : "TAUSSIG-COND-0107",
      "display" : "Hémorragie post-procédurale",
      "target" : [{
        "code" : "15.02.00",
        "display" : "Postprocedural haemorrhage",
        "equivalence" : "equivalent",
        "comment" : "libellé TAUSSIG = traduction du terme IPCCC"
      }]
    }]
  }]
}

```
