# TAUSSIG — Conditions cardiaques évolutives - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — Conditions cardiaques évolutives (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Liste des conditions cardiaques évolutives](ValueSet-taussig-condition.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "taussig-condition",
  "language" : "fr",
  "url" : "https://taussig/fhir/CodeSystem/taussig-condition",
  "version" : "0.8.1",
  "name" : "TaussigCondition",
  "title" : "TAUSSIG — Conditions cardiaques évolutives",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Terminologie d'interface TAUSSIG : 107 concepts (conditions cardiaques évolutives) à identifiant neutre jamais réutilisé (dictionnaire v6.1, décision A1). L'annotateur choisit le libellé ; les codes IPCCC, CIM-10, ECHSA sont déduits par les ConceptMaps taussig-condition-to-*, seulement quand la correspondance est « equivalent » ou « wider » et unique (décision A3).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 107,
  "property" : [{
    "code" : "ipccc-origin",
    "description" : "Code IPCCC dont le concept est issu.",
    "type" : "Coding"
  }],
  "concept" : [{
    "code" : "TAUSSIG-COND-0001",
    "display" : "Création/agrandissement de communication interatriale"
  },
  {
    "code" : "TAUSSIG-COND-0002",
    "display" : "Cerclage de l'artère pulmonaire"
  },
  {
    "code" : "TAUSSIG-COND-0003",
    "display" : "Anastomose systémico-pulmonaire de Blalock-Taussig modifiée (MBTS)"
  },
  {
    "code" : "TAUSSIG-COND-0004",
    "display" : "Intervention de Norwood"
  },
  {
    "code" : "TAUSSIG-COND-0005",
    "display" : "Anastomose cavopulmonaire unidirectionnelle (Glenn unidirectionnel)"
  },
  {
    "code" : "TAUSSIG-COND-0006",
    "display" : "Anastomose cavopulmonaire bidirectionnelle (Glenn bidirectionnel)"
  },
  {
    "code" : "TAUSSIG-COND-0007",
    "display" : "Anastomose cavopulmonaire bidirectionnelle bilatérale"
  },
  {
    "code" : "TAUSSIG-COND-0008",
    "display" : "Fontan (TCPC), conduit extracardiaque, fenestré"
  },
  {
    "code" : "TAUSSIG-COND-0009",
    "display" : "Fontan (TCPC), conduit extracardiaque, non fenestré"
  },
  {
    "code" : "TAUSSIG-COND-0010",
    "display" : "Fontan (TCPC), tunnel latéral, fenestré"
  },
  {
    "code" : "TAUSSIG-COND-0011",
    "display" : "Fontan (TCPC), tunnel latéral, non fenestré"
  },
  {
    "code" : "TAUSSIG-COND-0012",
    "display" : "Réparation à un ventricule et demi"
  },
  {
    "code" : "TAUSSIG-COND-0013",
    "display" : "Palliation, autre"
  },
  {
    "code" : "TAUSSIG-COND-0014",
    "display" : "Endocardite infectieuse",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.06.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0015",
    "display" : "Anomalie acquise de la veine cave supérieure",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.31.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0016",
    "display" : "Anomalie acquise de la veine cave inférieure",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.31.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0017",
    "display" : "Anomalie acquise du sinus coronaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.30.16"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0018",
    "display" : "Anomalie acquise des veines pulmonaires",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.24.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0019",
    "display" : "Anomalie acquise de l'oreillette droite",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.10.10"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0020",
    "display" : "Anomalie acquise de l'oreillette gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.10.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0021",
    "display" : "Communication interatriale résiduelle (CIA)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.10.63"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0022",
    "display" : "Régurgitation tricuspide résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.11.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0023",
    "display" : "Sténose mitrale résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.12.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0024",
    "display" : "Régurgitation mitrale résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.12.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0025",
    "display" : "Régurgitation troncale résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.25.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0026",
    "display" : "Sténose valvulaire pulmonaire résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.30.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0027",
    "display" : "Régurgitation pulmonaire résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.30.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0028",
    "display" : "Sténose de la néovalve pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.30.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0029",
    "display" : "Régurgitation de la néovalve pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.30.10"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0030",
    "display" : "Sténose valvulaire aortique résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.35.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0031",
    "display" : "Régurgitation aortique résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.35.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0032",
    "display" : "Sténose de la néovalve aortique d'origine pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.35.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0033",
    "display" : "Régurgitation de la néovalve aortique d'origine pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.35.10"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0034",
    "display" : "Sténose acquise de la néovalve aortique d'origine troncale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.25.12"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0035",
    "display" : "Régurgitation acquise de la néovalve aortique d'origine troncale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.25.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0036",
    "display" : "Composante ventriculaire résiduelle de canal atrioventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.16.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0037",
    "display" : "Régurgitation résiduelle de la valve atrioventriculaire commune",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.13.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0038",
    "display" : "Sténose acquise de la valve atrioventriculaire commune (connexions biventriculaires)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.34.56"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0039",
    "display" : "Dilatation ventriculaire droite acquise",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.16.22"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0040",
    "display" : "Hypertrophie ventriculaire droite acquise",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.16.23"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0041",
    "display" : "Anévrisme ventriculaire droit acquis",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.16.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0042",
    "display" : "Dysfonction ventriculaire droite",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "07.01.11"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0043",
    "display" : "Obstruction résiduelle de la voie d'éjection du ventricule droit",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.20.23"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0044",
    "display" : "Dilatation ventriculaire gauche acquise",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.16.76"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0045",
    "display" : "Hypertrophie ventriculaire gauche acquise",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.16.77"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0046",
    "display" : "Anévrisme ventriculaire gauche acquis",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.16.42"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0047",
    "display" : "Défaillance ventriculaire gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.16.47"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0048",
    "display" : "Complication post-procédurale de la voie d'éjection du ventricule gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.21.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0049",
    "display" : "Sténose sous-aortique acquise",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.16.86"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0050",
    "display" : "Sténose sous-pulmonaire acquise",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.16.88"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0051",
    "display" : "Communication interventriculaire résiduelle (CIV)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.22.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0052",
    "display" : "Cardiomyopathie restrictive",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.10.10"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0053",
    "display" : "Anomalie acquise de l'arbre artériel pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.13.59"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0054",
    "display" : "Sténose post-procédurale du tronc de l'artère pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.32.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0055",
    "display" : "Sténose résiduelle de l'artère pulmonaire droite",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.32.23"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0056",
    "display" : "Sténose résiduelle de l'artère pulmonaire gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.32.43"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0057",
    "display" : "Hypertension artérielle pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.13.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0058",
    "display" : "Embolie pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.13.51"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0059",
    "display" : "Sténose aortique supravalvulaire acquise",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.14.77"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0060",
    "display" : "Dilatation acquise de l'aorte ascendante et/ou de la racine aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.14.82"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0061",
    "display" : "Dilatation de la racine aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "09.16.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0062",
    "display" : "Dissection aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.14.51"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0063",
    "display" : "Anévrisme aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.14.50"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0064",
    "display" : "Coarctation aortique résiduelle",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.37.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0065",
    "display" : "Complication coronaire post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.41.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0066",
    "display" : "Persistance résiduelle du canal artériel (PDA)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.39.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0067",
    "display" : "Complication liée à un conduit cardiaque",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.55.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0068",
    "display" : "Obstruction d'anastomose systémico-pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.56.27"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0069",
    "display" : "Obstruction partielle d'anastomose systémico-pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.56.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0070",
    "display" : "Obstruction complète d'anastomose systémico-pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.56.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0071",
    "display" : "Défaillance d'autogreffe pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.55.24"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0072",
    "display" : "Circulation de Fontan défaillante",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.90.60"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0073",
    "display" : "Épanchement péricardique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.08.31"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0074",
    "display" : "Complication après transplantation cardiaque ou pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.95.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0075",
    "display" : "Sténose acquise des veines pulmonaires",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.24.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0076",
    "display" : "Obstruction d'une veine systémique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.30.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0077",
    "display" : "Collatérale(s) veino-veineuse(s) systémique(s)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "04.00.06"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0078",
    "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) acquise(s)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.13.74"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0079",
    "display" : "Fistules (malformations) artérioveineuses pulmonaires acquises",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.13.57"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0080",
    "display" : "Cardiomyopathie dilatée",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.10.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0081",
    "display" : "Cardiomyopathie hypertrophique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.10.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0082",
    "display" : "Cardiomyopathie hypertrophique obstructive du ventricule gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.10.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0083",
    "display" : "Myocardite (cardiomyopathie inflammatoire)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.07.90"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0084",
    "display" : "Maladie de Kawasaki",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.09.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0085",
    "display" : "Infarctus du myocarde",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.18.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0086",
    "display" : "État après transplantation cardiaque",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.21.63"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0087",
    "display" : "Maladie vasculaire pulmonaire irréversible",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.13.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0088",
    "display" : "Maladie vasculaire pulmonaire irréversible due à une cardiopathie congénitale (syndrome d'Eisenmenger)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.13.08"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0089",
    "display" : "Trouble du rythme cardiaque",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.00.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0090",
    "display" : "Fibrillation atriale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.03.08"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0091",
    "display" : "Flutter atrial",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.03.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0092",
    "display" : "Trouble du rythme atrial",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.03.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0093",
    "display" : "Trouble du rythme de la jonction atrioventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.04.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0094",
    "display" : "Trouble du rythme ventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.05.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0095",
    "display" : "Tachycardie par réentrée atrioventriculaire avec préexcitation manifeste (Wolff-Parkinson-White)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.07.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0096",
    "display" : "Bloc atrioventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.06.38"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0097",
    "display" : "Bloc atrioventriculaire complet acquis",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.06.10"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0098",
    "display" : "Indication de remplacement programmé d'un stimulateur cardiaque",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "11.12.61"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0099",
    "display" : "Entéropathie exsudative post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.82.33"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0100",
    "display" : "Bronchite plastique post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.81.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0101",
    "display" : "Chylothorax",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "10.08.16"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0102",
    "display" : "Embolisation d'un dispositif lors d'un cathétérisme cardiaque antérieur",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.51.47"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0103",
    "display" : "Dysfonction d'un dispositif lors d'un cathétérisme cardiaque antérieur",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.51.50"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0104",
    "display" : "Perforation d'une cavité ou d'un vaisseau lors d'un cathétérisme cardiaque antérieur",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0105",
    "display" : "Corps étranger intracardiaque post-procédural",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.80.17"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0106",
    "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.50.37"
      }
    }]
  },
  {
    "code" : "TAUSSIG-COND-0107",
    "display" : "Hémorragie post-procédurale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "15.02.00"
      }
    }]
  }]
}

```
