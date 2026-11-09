# TAUSSIG — Gestes et actes de cathétérisme - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## CodeSystem: TAUSSIG — Gestes et actes de cathétérisme (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Liste des gestes et actes de cathétérisme](ValueSet-taussig-procedure.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "taussig-procedure",
  "language" : "fr",
  "url" : "https://taussig/fhir/CodeSystem/taussig-procedure",
  "version" : "0.8.0",
  "name" : "TaussigProcedure",
  "title" : "TAUSSIG — Gestes et actes de cathétérisme",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Terminologie d'interface TAUSSIG : 188 concepts de gestes et d'actes de cathétérisme cardiaque congénital (Short List IPCCC de la branche cathétérisme, Long List AEPC v5.0), à identifiant neutre jamais réutilisé. Le clinicien choisit le libellé ; les codes IPCCC, CCAM, ECHSA et SNOMED sont déduits par les ConceptMaps taussig-procedure-to-*. Libellés : traduction fidèle du libellé IPCCC.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 188,
  "property" : [{
    "code" : "ipccc-origin",
    "description" : "Code IPCCC (Short List) dont le concept est issu.",
    "type" : "Coding"
  }],
  "concept" : [{
    "code" : "TAUSSIG-PROC-0001",
    "display" : "Pose percutanée d'un stent sur un anévrisme de l'aorte thoracique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "endoprothèse aortique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TEVAR"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.18.70"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0002",
    "display" : "Stratégie hybride (chirurgie et cathétérisme combinés)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stratégie hybride"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "procédure hybride"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.41.30"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0003",
    "display" : "Cathétérisme par voie transseptale avec ponction transseptale",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ponction transseptale"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cathétérisme transseptal"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0004",
    "display" : "Test d'occlusion diagnostique par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "test d'occlusion"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "occlusion test au ballon"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0005",
    "display" : "Geste percutané avec traitement adjuvant",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "thérapie adjuvante"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.59"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0006",
    "display" : "Cathétérisme cardiaque diagnostique : angiographie",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angiographie"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angiocardiographie"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angio"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0007",
    "display" : "Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "hémodynamique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cathétérisme droit et gauche"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "mesures de pressions"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.06"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0008",
    "display" : "Cathétérisme cardiaque diagnostique avec épreuve de modification hémodynamique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "épreuve de vasoréactivité"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "test au NO"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "test au monoxyde d'azote"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "test de remplissage"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0009",
    "display" : "Cathétérisme d'évaluation d'une hypertension pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "bilan d'HTAP"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cathétérisme pour HTP"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0010",
    "display" : "Cathétérisme diagnostique à visée interventionnelle : anatomie inadaptée au geste",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "geste non réalisé, anatomie défavorable"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.36"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0011",
    "display" : "Geste percutané pour trouble du rythme",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.35.57"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0012",
    "display" : "Geste percutané pour trouble du rythme atrial",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.35.82"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0013",
    "display" : "Geste percutané pour trouble du rythme ventriculaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.35.83"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0014",
    "display" : "Cathétérisme cardiaque diagnostique avec épreuve électrophysiologique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.08"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0015",
    "display" : "Exploration électrophysiologique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "EEP"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "étude électrophysiologique"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.12"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0016",
    "display" : "Exploration électrophysiologique avec cartographie tridimensionnelle",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "EEP avec cartographie 3D"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cartographie 3D"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.17"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0017",
    "display" : "Geste fœtal",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "intervention fœtale"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.90"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0018",
    "display" : "Coagulation laser des anastomoses placentaires dans le syndrome transfuseur-transfusé",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "laser fœtoscopique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "STT"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.91"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0019",
    "display" : "Geste fœtal par cathéter",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cathétérisme fœtal"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.70"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0020",
    "display" : "Valvuloplastie pulmonaire fœtale au ballon",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valvuloplastie pulmonaire in utero"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.71"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0021",
    "display" : "Valvuloplastie aortique fœtale au ballon",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valvuloplastie aortique in utero"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.73"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0022",
    "display" : "Péricardiocentèse fœtale par cathéter",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.75"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0023",
    "display" : "Atrioseptostomie fœtale au ballon",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "septostomie fœtale"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.76"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0024",
    "display" : "Cathétérisme thérapeutique avec échec de largage d'un dispositif, d'un stent ou d'un coil",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "échec de largage"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "largage impossible"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.41.36"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0025",
    "display" : "Geste de cathétérisme cardiovasculaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cathétérisme"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0026",
    "display" : "Nouveau cathétérisme pour lésion résiduelle ou récidivante",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "reprise percutanée"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "réintervention percutanée"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.06"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0027",
    "display" : "Redilatation de stent",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation d'endoprothèse"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.10"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0028",
    "display" : "Pose de stent",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stenting"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "endoprothèse"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "implantation de stent"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.11"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0029",
    "display" : "Dilatation au ballon",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie au ballon"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ballonnet"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.12"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0030",
    "display" : "Implantation d'un dispositif par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "prothèse"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "occluder"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "dispositif"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0031",
    "display" : "Occlusion par coil au cours d'un cathétérisme",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "embolisation par coil"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "coil"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.14"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0032",
    "display" : "Implantation percutanée d'une valve",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valve percutanée"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valve transcathéter"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.15"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0033",
    "display" : "Fermeture percutanée d'une fuite de prothèse valvulaire par dispositif",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de fuite paraprothétique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fuite paravalvulaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0034",
    "display" : "Dilatation valvulaire au ballon",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valvuloplastie au ballon"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0035",
    "display" : "Cathétérisme cardiovasculaire thérapeutique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cathétérisme interventionnel"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "KT interventionnel"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.28"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0036",
    "display" : "Perforation thérapeutique percutanée pour créer une communication entre cavités ou vaisseaux",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "perforation thérapeutique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "recanalisation par perforation"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.58"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0037",
    "display" : "Cathétérisme cardiaque diagnostique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cathétérisme diagnostique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "KT diagnostique"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.01"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0038",
    "display" : "Agrandissement d'une communication interventriculaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "agrandissement de CIV"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.08.06"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0039",
    "display" : "Agrandissement ou création d'une communication interventriculaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "création de CIV"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.08.35"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0040",
    "display" : "Approche hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie) : stade 1",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "hybride stade 1"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "HLHS hybride"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.20.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0041",
    "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s) et retrait des cerclages pulmonaires",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "hybride stade 2"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Norwood-Glenn compréhensif"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.20.22"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0042",
    "display" : "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s), retrait des cerclages pulmonaires et réparation de l'arche",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "hybride stade 2 avec reconstruction de l'arche"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.20.23"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0043",
    "display" : "Échographie endocoronaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "IVUS"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "échographie intravasculaire coronaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.23.41"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0044",
    "display" : "Échocardiographie",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "écho"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ETT"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.01.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0045",
    "display" : "Échocardiographie transœsophagienne",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ETO"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.01.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0046",
    "display" : "Geste percutané guidé par échographie intracardiaque",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ICE"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "échographie intracardiaque"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.01.23"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0047",
    "display" : "Geste percutané sous guidage radiologique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "sous scopie"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "sous fluoroscopie"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.14"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0048",
    "display" : "Geste percutané sous guidage par IRM",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cathétérisme sous IRM"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.15"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0049",
    "display" : "Geste percutané sous guidage radiologique et IRM",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "XMR"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.16"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0050",
    "display" : "Geste percutané sous guidage échographique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "guidage écho"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.24"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0051",
    "display" : "Imagerie endocoronaire par tomographie par cohérence optique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "OCT coronaire"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "OCT"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "13.05.39"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0052",
    "display" : "Retrait peropératoire complet ou partiel d'un stent de l'artère pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ablation chirurgicale de stent pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.14.38"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0053",
    "display" : "Geste sur l'artère pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.11"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0054",
    "display" : "Occlusion d'une collatérale veino-veineuse par dispositif",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "embolisation de collatérale veino-veineuse"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.70.08"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0055",
    "display" : "Occlusion percutanée d'une veine systémique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "occlusion de veine cave supérieure gauche"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "embolisation veineuse"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.70.31"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0056",
    "display" : "Pose de stent dans l'artère pulmonaire droite",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de l'APD"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0057",
    "display" : "Pose de stent dans l'artère pulmonaire gauche",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de l'APG"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.14"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0058",
    "display" : "Pose de stent dans l'arbre artériel pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.50"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0059",
    "display" : "Pose de stent dans l'artère pulmonaire droite, en amont de la bifurcation hilaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent proximal de l'APD"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.56"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0060",
    "display" : "Pose de stent dans l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent distal de l'APD"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent lobaire droit"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.57"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0061",
    "display" : "Pose de stent dans l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent proximal de l'APG"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.58"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0062",
    "display" : "Pose de stent dans l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent distal de l'APG"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent lobaire gauche"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.59"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0063",
    "display" : "Redilatation d'un stent de l'artère pulmonaire droite, en amont de la bifurcation hilaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent de l'APD"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.64"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0064",
    "display" : "Redilatation d'un stent de l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent distal de l'APD"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.65"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0065",
    "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent de l'APG"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.66"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0066",
    "display" : "Redilatation d'un stent de l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent distal de l'APG"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.67"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0067",
    "display" : "Pose de stent entre l'artère pulmonaire gauche et l'aorte descendante (Potts inverse)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Potts inverse"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Potts percutané"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.70"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0068",
    "display" : "Pose de stent sur une coarctation de l'aorte",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de coarctation"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent CP"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.18.17"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0069",
    "display" : "Pose de stent sur une recoarctation de l'aorte",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de recoarctation"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.18.22"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0070",
    "display" : "Pose de stent sur une coarctation (ou hypoplasie) native de l'aorte",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de coarctation native"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.18.48"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0071",
    "display" : "Redilatation d'un stent de l'aorte thoracique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent aortique"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.18.54"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0072",
    "display" : "Pose de stent dans une veine pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de veine pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.22"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0073",
    "display" : "Pose de stent dans une veine pulmonaire ou un chenal veineux pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0074",
    "display" : "Pose de stent dans la veine cave supérieure",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de VCS"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.36"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0075",
    "display" : "Pose de stent dans une veine systémique ou un chenal veineux systémique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent veineux"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de chenal"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de baffle"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.44"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0076",
    "display" : "Redilatation d'un stent d'une veine systémique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent veineux"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.88"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0077",
    "display" : "Redilatation d'un stent d'une veine pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.89"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0078",
    "display" : "Cryoablation percutanée d'un trouble du rythme",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cryoablation"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.35.46"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0079",
    "display" : "Ablation percutanée d'un trouble du rythme par radiofréquence",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ablation par radiofréquence"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "RF"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.35.48"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0080",
    "display" : "Ablation percutanée avec isolation des veines pulmonaires",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "isolation des veines pulmonaires"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "PVI"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.35.84"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0081",
    "display" : "Ablation percutanée d'un trouble du rythme",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ablation"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.38.40"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0082",
    "display" : "Geste sur une artère coronaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.23.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0083",
    "display" : "Occlusion percutanée d'une fistule coronaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de fistule coronaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.23.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0084",
    "display" : "Injection intracoronaire percutanée d'un agent thrombolytique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "thrombolyse intracoronaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.23.30"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0085",
    "display" : "Angioplastie coronaire percutanée au ballon",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ATL coronaire"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie coronaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.23.31"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0086",
    "display" : "Pose percutanée d'un stent coronaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent coronaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.23.38"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0087",
    "display" : "Occlusion chimique percutanée d'une artère coronaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "alcoolisation coronaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.23.42"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0088",
    "display" : "Redilatation d'un stent coronaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.23.45"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0089",
    "display" : "Fermeture percutanée d'une fenêtre aorto-pulmonaire par prothèse",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de fenêtre aortopulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.12.08"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0090",
    "display" : "Dilatation au ballon d'une coarctation (ou hypoplasie) native de l'aorte",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie de coarctation native"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.18.04"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0091",
    "display" : "Dilatation au ballon d'une recoarctation de l'aorte",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie de recoarctation"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.18.08"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0092",
    "display" : "Levée d'obstacle percutanée d'une coarctation de l'aorte",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "traitement percutané de coarctation"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.18.27"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0093",
    "display" : "Geste sur une artère systémique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.22.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0094",
    "display" : "Occlusion d'une fistule artério-veineuse",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de fistule AV"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "embolisation de fistule"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.25.02"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0095",
    "display" : "Fermeture d'une fistule artério-veineuse pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de MAV pulmonaire"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "embolisation de FAV pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.25.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0096",
    "display" : "Fermeture partielle d'une communication interatriale",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture partielle de CIA"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "restriction de CIA"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.08"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0097",
    "display" : "Atrioseptostomie au ballon par retrait (Rashkind)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Rashkind"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "septostomie de Rashkind"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "atrioseptostomie"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.41"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0098",
    "display" : "Atrioseptostomie à la lame",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "septostomie de Park"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "lame de Park"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.44"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0099",
    "display" : "Création ou agrandissement d'une communication interatriale",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "création de CIA"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "élargissement de CIA"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.90"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0100",
    "display" : "Atrioseptostomie au ballon",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "septostomie au ballon"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "BAS"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.95"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0101",
    "display" : "Création percutanée d'une communication interatriale",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "création de CIA percutanée"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.30.74"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0102",
    "display" : "Retrait d'un thrombus intracardiaque",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "thrombectomie intracardiaque"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.32.22"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0103",
    "display" : "Fermeture percutanée de l'auricule gauche par prothèse",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "occlusion de l'auricule gauche"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Watchman"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Amulet"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.38.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0104",
    "display" : "Geste sur la valve tricuspide",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.02.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0105",
    "display" : "Dilatation au ballon d'une prothèse valvulaire tricuspide",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.02.12"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0106",
    "display" : "Remplacement valvulaire tricuspide par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valve tricuspide percutanée"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TTVR"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.02.98"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0107",
    "display" : "Valve-in-valve tricuspide par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ViV tricuspide"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.02.99"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0108",
    "display" : "Dilatation au ballon de la valve mitrale",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valvuloplastie mitrale"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "commissurotomie mitrale percutanée"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.03.10"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0109",
    "display" : "Dilatation au ballon d'une prothèse valvulaire mitrale",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.03.12"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0110",
    "display" : "Réparation valvulaire mitrale par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "MitraClip"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "réparation bord à bord"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TEER mitral"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.03.97"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0111",
    "display" : "Remplacement valvulaire mitral par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valve mitrale percutanée"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TMVR"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.03.98"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0112",
    "display" : "Valve-in-valve mitrale par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ViV mitral"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.04.90"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0113",
    "display" : "Valve-in-valve mitrale transcathéter par voie transapicale",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ViV mitral transapical"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.04.91"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0114",
    "display" : "Dilatation au ballon d'une anastomose systémico-pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "dilatation de Blalock"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "dilatation de shunt"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.31.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0115",
    "display" : "Pose de stent dans une anastomose systémico-pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de Blalock"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de shunt"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.31.27"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0116",
    "display" : "Occlusion percutanée d'une anastomose systémico-pulmonaire par dispositif ou embolisation",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de Blalock"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "occlusion de shunt"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.31.34"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0117",
    "display" : "Dilatation au ballon d'un conduit",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "dilatation de conduit VD-AP"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "dilatation de tube"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.36.14"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0118",
    "display" : "Pose de stent dans un conduit",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de conduit VD-AP"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de tube"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.36.23"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0119",
    "display" : "Redilatation d'un stent dans un conduit",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent de conduit"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.36.32"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0120",
    "display" : "Redilatation d'un stent dans une anastomose systémico-pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent de shunt"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.36.34"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0121",
    "display" : "Perforation et dilatation percutanées d'un conduit",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "recanalisation de conduit"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.36.36"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0122",
    "display" : "Perforation et dilatation percutanées d'une anastomose systémico-pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "recanalisation de Blalock"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "recanalisation de shunt"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.36.37"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0123",
    "display" : "Dilatation au ballon d'une veine pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie de veine pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0124",
    "display" : "Dilatation d'une veine pulmonaire au ballon de découpe",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cutting balloon veineux pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.23"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0125",
    "display" : "Dilatation au ballon d'une veine pulmonaire ou d'un chenal veineux pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.24"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0126",
    "display" : "Dilatation au ballon d'une veine systémique ou d'un chenal veineux systémique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie veineuse"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "dilatation de chenal"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.43"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0127",
    "display" : "Dilatation au ballon du tronc de l'artère pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie du tronc pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.14.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0128",
    "display" : "Dilatation au ballon de l'artère pulmonaire droite",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie de l'APD"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.03"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0129",
    "display" : "Dilatation au ballon de l'artère pulmonaire gauche",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie de l'APG"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.04"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0130",
    "display" : "Restriction du débit du tronc pulmonaire par dispositif implanté par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "restricteur de débit pulmonaire"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cerclage percutané"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0131",
    "display" : "Restriction du débit des artères pulmonaires droite et gauche par dispositifs implantés par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "restricteurs de débit bilatéraux"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cerclage pulmonaire percutané"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.42"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0132",
    "display" : "Dilatation de l'arbre artériel pulmonaire au ballon de découpe",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cutting balloon pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.53"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0133",
    "display" : "Geste percutané sur une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "MAPCA"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.25.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0134",
    "display" : "Pose de stent dans une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de MAPCA"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.25.62"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0135",
    "display" : "Occlusion percutanée d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA) par coil ou dispositif",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "embolisation de MAPCA"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "embolisation de collatérale aorto-pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.25.65"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0136",
    "display" : "Dilatation au ballon d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "angioplastie de MAPCA"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.25.72"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0137",
    "display" : "Pose de stent dans le canal artériel",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent du canal"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de PCA"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ductal stenting"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.10.14"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0138",
    "display" : "Redilatation d'un stent du canal artériel",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent du canal"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.10.26"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0139",
    "display" : "Geste sur le canal artériel ou le ligament artériel",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.24.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0140",
    "display" : "Fermeture percutanée du canal artériel par prothèse",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture du canal artériel"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de PCA"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Piccolo"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ADO"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.24.04"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0141",
    "display" : "Fermeture percutanée du canal artériel par coil",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de PCA par coil"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.24.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0142",
    "display" : "Fermeture percutanée du canal artériel par plug",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de PCA par plug"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "AVP"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.24.22"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0143",
    "display" : "Geste sur la valve pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.00"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0144",
    "display" : "Dilatation au ballon de la valve pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valvuloplastie pulmonaire"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "VPP"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0145",
    "display" : "Dilatation au ballon d'une prothèse valvulaire pulmonaire",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.06"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0146",
    "display" : "Perforation et dilatation percutanées de la valve pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "perforation de valve pulmonaire"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "perforation par radiofréquence"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "atrésie pulmonaire à septum intact"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0147",
    "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valve pulmonaire percutanée"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TPVI"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Melody"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Sapien"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Harmony"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.51"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0148",
    "display" : "Valve-in-valve pulmonaire par voie percutanée (réimplantation)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ViV pulmonaire"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "réimplantation de valve pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.52"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0149",
    "display" : "Implantation percutanée d'une valve aortique montée sur stent",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TAVI"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TAVR"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "RVAP"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.81"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0150",
    "display" : "Valve-in-valve aortique par voie percutanée (réimplantation)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ViV aortique"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.82"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0151",
    "display" : "Implantation d'une valve aortique par voie transapicale (approche hybride)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TAVI transapical"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.84"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0152",
    "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec pré-stenting",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TPVI avec prestenting"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.85"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0153",
    "display" : "Pré-stenting de la voie pulmonaire en préparation d'un remplacement valvulaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "prestenting"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent préparatoire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.86"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0154",
    "display" : "Implantation percutanée d'une valve pulmonaire montée sur stent avec rupture volontaire de la prothèse antérieure",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "rupture de bioprothèse"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "bioprosthetic valve fracture"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.13.87"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0155",
    "display" : "Dilatation au ballon de la valve aortique",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "valvuloplastie aortique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "VPA"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.16.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0156",
    "display" : "Dilatation au ballon d'une prothèse valvulaire aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.16.09"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0157",
    "display" : "Perforation et dilatation percutanées de la valve aortique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.16.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0158",
    "display" : "Fenestration percutanée du septum interatrial ou d'un tunnel atrial",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fenestration atriale"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fenestration de tunnel"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.47"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0159",
    "display" : "Approche hybride stade 1 : cerclage bilatéral des artères pulmonaires et stent du canal artériel par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "hybride de Giessen"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "cerclages bilatéraux + stent du canal"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.10.04"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0160",
    "display" : "Stratégie hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stratégie hybride HLHS"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.20.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0161",
    "display" : "Fermeture percutanée de la fenestration d'un tunnel atrial (Fontan) par prothèse",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de fenestration de Fontan"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de fenestration"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.30.21"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0162",
    "display" : "Complétion percutanée de la dérivation cavo-pulmonaire totale par stent couvert de la veine cave inférieure à la veine cave supérieure",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Fontan percutané"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "complétion transcathéter du Fontan"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "TCPC percutanée"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.30.60"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0163",
    "display" : "Fermeture percutanée d'une communication interventriculaire par prothèse",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de CIV"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "CIV"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.08.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0164",
    "display" : "Fenestration percutanée d'un patch de communication interventriculaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fenestration de patch de CIV"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.08.20"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0165",
    "display" : "Fermeture peropératoire d'une communication interventriculaire par dispositif (approche hybride)",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture périventriculaire de CIV"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture hybride de CIV"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.08.28"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0166",
    "display" : "Création percutanée d'une communication interventriculaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "création de CIV percutanée"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.08.65"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0167",
    "display" : "Fermeture percutanée d'une communication interatriale de type ostium secundum par prothèse",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de CIA"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "CIA OS"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "Amplatzer"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.06"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0168",
    "display" : "Fermeture percutanée d'un foramen ovale perméable par prothèse",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de FOP"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "FOP"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0169",
    "display" : "Fermeture percutanée d'une communication interatriale de type sinus venosus par stent couvert",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "CIA sinus venosus"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent couvert de la VCS"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.88"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0170",
    "display" : "Fermeture percutanée d'une communication interatriale par prothèse",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fermeture de CIA par prothèse"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.01.98"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0171",
    "display" : "Dilatation au ballon de la voie d'éjection du ventricule gauche",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "dilatation sous-aortique"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.07.07"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0172",
    "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.07.13"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0173",
    "display" : "Levée d'obstacle de la voie d'éjection du ventricule gauche par alcoolisation coronaire percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "alcoolisation septale"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ablation septale à l'alcool"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.07.19"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0174",
    "display" : "Geste sur le ventricule gauche",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.07.26"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0175",
    "display" : "Dilatation au ballon de la voie d'éjection du ventricule droit",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "dilatation de la VCVD"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "dilatation infundibulaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.06.05"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0176",
    "display" : "Pose de stent dans la voie d'éjection du ventricule droit",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de la voie d'éjection"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent de VCVD"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "stent infundibulaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.06.18"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0177",
    "display" : "Biopsie ventriculaire droite par voie percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "biopsie endomyocardique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "BEM"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.06.25"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0178",
    "display" : "Geste sur le ventricule droit",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.06.26"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0179",
    "display" : "Levée d'obstacle de la voie d'éjection du ventricule droit",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "désobstruction de la voie d'éjection droite"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.06.41"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0180",
    "display" : "Redilatation d'un stent de la voie d'éjection native du ventricule droit",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "redilatation de stent de VCVD"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.06.95"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0181",
    "display" : "Péricardiocentèse percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ponction péricardique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "drainage péricardique"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.32.43"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0182",
    "display" : "Embolectomie percutanée de l'arbre artériel pulmonaire",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "thrombectomie pulmonaire"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "embolie pulmonaire"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.15.49"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0183",
    "display" : "Embolisation lymphatique percutanée",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "embolisation du canal thoracique"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "intervention lymphatique"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.49.50"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0184",
    "display" : "Redilatation de stent avec fracture volontaire du stent",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "fracture intentionnelle de stent"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "unzipping"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.46"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0185",
    "display" : "Extraction percutanée d'un dispositif ou d'un corps étranger",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "retrait de corps étranger"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "récupération de prothèse embolisée"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "lasso"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.04"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0186",
    "display" : "Geste percutané pour complication du cathétérisme",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "traitement d'une complication du KT"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.30"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0187",
    "display" : "Retrait chirurgical d'un dispositif",
    "designation" : [{
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "ablation chirurgicale de dispositif"
    },
    {
      "language" : "fr",
      "use" : {
        "system" : "http://snomed.info/sct",
        "code" : "900000000000013009",
        "display" : "synonyme"
      },
      "value" : "explantation"
    }],
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.45.45"
      }
    }]
  },
  {
    "code" : "TAUSSIG-PROC-0188",
    "display" : "Geste sur une veine systémique",
    "property" : [{
      "code" : "ipccc-origin",
      "valueCoding" : {
        "system" : "https://taussig/fhir/CodeSystem/ipccc",
        "code" : "12.00.30"
      }
    }]
  }]
}

```
