# Crossmap IPCCC -> ICD-10 (v5.0) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ConceptMap: Crossmap IPCCC -> ICD-10 (v5.0) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "ipccc-to-icd10",
  "url" : "https://taussig/fhir/ConceptMap/ipccc-to-icd10",
  "version" : "0.6.0",
  "name" : "IPCCCtoICD10",
  "title" : "Crossmap IPCCC -> ICD-10 (v5.0)",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/ipccc",
    "target" : "http://hl7.org/fhir/sid/icd-10",
    "element" : [{
      "code" : "01.01.01",
      "target" : [{
        "code" : "Q21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.02",
      "target" : [{
        "code" : "Q20.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.03",
      "target" : [{
        "code" : "Q20.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.04",
      "target" : [{
        "code" : "Q20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.06",
      "target" : [{
        "code" : "Q21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.07",
      "target" : [{
        "code" : "Q22.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.09",
      "target" : [{
        "code" : "Q23.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.10",
      "target" : [{
        "code" : "Q20.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.14",
      "target" : [{
        "code" : "Q20.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.16",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.17",
      "target" : [{
        "code" : "Q20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.18",
      "target" : [{
        "code" : "Q20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.19",
      "target" : [{
        "code" : "Q20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.20",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.21",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.22",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.23",
      "target" : [{
        "code" : "Q20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.24",
      "target" : [{
        "code" : "Q20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.25",
      "target" : [{
        "code" : "Q21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.26",
      "target" : [{
        "code" : "Q21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.27",
      "target" : [{
        "code" : "Q21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.28",
      "target" : [{
        "code" : "Q21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.29",
      "target" : [{
        "code" : "Q22.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.30",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.31",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.32",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.33",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.34",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.35",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.38",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.39",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.40",
      "target" : [{
        "code" : "Q20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.41",
      "target" : [{
        "code" : "Q20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.49",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.50",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.51",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.52",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.55",
      "target" : [{
        "code" : "Q21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.56",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.57",
      "target" : [{
        "code" : "Q21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.59",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.60",
      "target" : [{
        "code" : "I99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.61",
      "target" : [{
        "code" : "I72.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.62",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.63",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.64",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.65",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.71",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.72",
      "target" : [{
        "code" : "Q89.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.75",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.01.77",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.03.01",
      "target" : [{
        "code" : "Q89.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.03.02",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.03.03",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.03.04",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.03.06",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.03.08",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.03.09",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.03.13",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.01",
      "target" : [{
        "code" : "Q20.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.02",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.03",
      "target" : [{
        "code" : "Q20.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.04",
      "target" : [{
        "code" : "Q20.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.05",
      "target" : [{
        "code" : "Q20.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.07",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.08",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.10",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.11",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.12",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.13",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.15",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.16",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.17",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.18",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.19",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.20",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.04.21",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.05.01",
      "target" : [{
        "code" : "Q20.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.05.02",
      "target" : [{
        "code" : "Q20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.05.03",
      "target" : [{
        "code" : "Q20.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.05.04",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.05.10",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.05.32",
      "target" : [{
        "code" : "Q21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.05.33",
      "target" : [{
        "code" : "Q23.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "01.06.02",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.01.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.01.02",
      "target" : [{
        "code" : "Q24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.01.03",
      "target" : [{
        "code" : "Q24.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.01.04",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.01.05",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.01.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.01.09",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.01.51",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.02.00",
      "target" : [{
        "code" : "Q24.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.02.01",
      "target" : [{
        "code" : "Q24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.02.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.02.04",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.02.18",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.02.19",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.02.20",
      "target" : [{
        "code" : "Q24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.02.21",
      "target" : [{
        "code" : "Q24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.03.03",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.03.05",
      "target" : [{
        "code" : "Q20.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.03.07",
      "target" : [{
        "code" : "Q20.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.03.08",
      "target" : [{
        "code" : "Q20.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.03.09",
      "target" : [{
        "code" : "Q20.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.03.11",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.03.12",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.03.13",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.04.00",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.04.02",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.04.04",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.04.06",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.04.07",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.04.08",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.04.09",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.04.11",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.04.12",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.01",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.02",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.03",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.04",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.05",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.06",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.07",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.09",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.10",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.06.12",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.07.01",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.07.03",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "02.07.04",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.01",
      "target" : [{
        "code" : "Q89.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.02",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.03",
      "target" : [{
        "code" : "Q89.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.04",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.05",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.06",
      "target" : [{
        "code" : "Q89.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.09",
      "target" : [{
        "code" : "Q89.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.10",
      "target" : [{
        "code" : "Q06.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.11",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.12",
      "target" : [{
        "code" : "Q89.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.01.13",
      "target" : [{
        "code" : "Q89.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.02",
      "target" : [{
        "code" : "Q89.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.03",
      "target" : [{
        "code" : "Q33.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.04",
      "target" : [{
        "code" : "Q33.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.05",
      "target" : [{
        "code" : "Q33.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.07",
      "target" : [{
        "code" : "Q33.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.08",
      "target" : [{
        "code" : "Q33.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.09",
      "target" : [{
        "code" : "Q33.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.11",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.12",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.13",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.14",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.15",
      "target" : [{
        "code" : "Q33.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.16",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.17",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.18",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.19",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.20",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.21",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.22",
      "target" : [{
        "code" : "Q33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.02.23",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.00",
      "target" : [{
        "code" : "Q32.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.02",
      "target" : [{
        "code" : "Q89.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.03",
      "target" : [{
        "code" : "Q32.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.04",
      "target" : [{
        "code" : "Q32.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.05",
      "target" : [{
        "code" : "Q32.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.07",
      "target" : [{
        "code" : "Q32.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.08",
      "target" : [{
        "code" : "Q32.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.09",
      "target" : [{
        "code" : "Q32.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.10",
      "target" : [{
        "code" : "Q32.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.11",
      "target" : [{
        "code" : "Q33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.03.12",
      "target" : [{
        "code" : "Q43.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.04.00",
      "target" : [{
        "code" : "Q44.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.04.02",
      "target" : [{
        "code" : "Q44.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.04.03",
      "target" : [{
        "code" : "Q44.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.04.05",
      "target" : [{
        "code" : "Q44.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.05.00",
      "target" : [{
        "code" : "Q40.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.05.02",
      "target" : [{
        "code" : "Q40.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.05.03",
      "target" : [{
        "code" : "Q40.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.05.04",
      "target" : [{
        "code" : "Q40.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.06.00",
      "target" : [{
        "code" : "Q43.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.06.02",
      "target" : [{
        "code" : "Q43.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.06.03",
      "target" : [{
        "code" : "Q43.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.06.04",
      "target" : [{
        "code" : "Q43.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.06.05",
      "target" : [{
        "code" : "Q43.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.06.06",
      "target" : [{
        "code" : "Q43.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.06.07",
      "target" : [{
        "code" : "Q43.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.00",
      "target" : [{
        "code" : "Q89.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.02",
      "target" : [{
        "code" : "Q89.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.03",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.04",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.05",
      "target" : [{
        "code" : "Q89.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.21",
      "target" : [{
        "code" : "Q79.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.22",
      "target" : [{
        "code" : "Q79.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.23",
      "target" : [{
        "code" : "Q79.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.24",
      "target" : [{
        "code" : "Q79.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.25",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.26",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.27",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.28",
      "target" : [{
        "code" : "Q79.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.29",
      "target" : [{
        "code" : "Q79.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.30",
      "target" : [{
        "code" : "Q40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.31",
      "target" : [{
        "code" : "Q40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.32",
      "target" : [{
        "code" : "Q40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.33",
      "target" : [{
        "code" : "Q40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.07.34",
      "target" : [{
        "code" : "Q79.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.08.01",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.08.02",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "03.08.03",
      "target" : [{
        "code" : "Q25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.00.04",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.00.05",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.00.06",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.00.07",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.00.08",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.00.09",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.00",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.01",
      "target" : [{
        "code" : "Q26.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.02",
      "target" : [{
        "code" : "Q26.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.03",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.04",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.05",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.06",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.07",
      "target" : [{
        "code" : "Q26.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.08",
      "target" : [{
        "code" : "I82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.09",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.10",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.11",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.12",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.13",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.14",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.15",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.16",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.17",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.19",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.20",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.21",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.22",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.23",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.24",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.25",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.26",
      "target" : [{
        "code" : "Q26.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.27",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.28",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.30",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.31",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.01.32",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.00",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.01",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.02",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.03",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.04",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.05",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.06",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.07",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.08",
      "target" : [{
        "code" : "Q26.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.09",
      "target" : [{
        "code" : "Q26.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.10",
      "target" : [{
        "code" : "Q26.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.11",
      "target" : [{
        "code" : "Q26.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.12",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.02.13",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.00",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.01",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.02",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.03",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.04",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.05",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.06",
      "target" : [{
        "code" : "Q26.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.07",
      "target" : [{
        "code" : "I82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.08",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.10",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.12",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.13",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.14",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.15",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.16",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.17",
      "target" : [{
        "code" : "Q26.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.18",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.19",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.20",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.21",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.22",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.23",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.24",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.25",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.26",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.27",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.28",
      "target" : [{
        "code" : "Q26.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.31",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.03.32",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.00",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.01",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.02",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.03",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.04",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.05",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.06",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.07",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.08",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.09",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.10",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.11",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.12",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.13",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.14",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.15",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.17",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.18",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.19",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.20",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.21",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.04.22",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.00",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.01",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.02",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.03",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.04",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.05",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.06",
      "target" : [{
        "code" : "Q26.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.09",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.10",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.11",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.12",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.13",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.14",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.15",
      "target" : [{
        "code" : "Q27.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.16",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.05.17",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.06.00",
      "target" : [{
        "code" : "Q26.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.06.31",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.06.32",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.06.33",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.06.35",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.06.36",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.06.37",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.06.38",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.07.01",
      "target" : [{
        "code" : "Q26.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.07.02",
      "target" : [{
        "code" : "Q26.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.07.03",
      "target" : [{
        "code" : "Q26.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.07.04",
      "target" : [{
        "code" : "Q26.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.07.05",
      "target" : [{
        "code" : "Q26.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.07.06",
      "target" : [{
        "code" : "Q26.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.07.07",
      "target" : [{
        "code" : "Q26.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.00",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.01",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.02",
      "target" : [{
        "code" : "Q26.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.04",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.05",
      "target" : [{
        "code" : "Q26.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.06",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.07",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.08",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.10",
      "target" : [{
        "code" : "Q26.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.11",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.12",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.13",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.14",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.15",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.16",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.17",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.18",
      "target" : [{
        "code" : "Q26.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.19",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.20",
      "target" : [{
        "code" : "Q26.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.21",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.22",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.23",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.24",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.25",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.26",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.27",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.28",
      "target" : [{
        "code" : "Q26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.30",
      "target" : [{
        "code" : "Q26.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.31",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.91",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "04.08.92",
      "target" : [{
        "code" : "Q26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.00.00",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.00.01",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.00.02",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.00",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.02",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.03",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.04",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.05",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.06",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.08",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.09",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.10",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.11",
      "target" : [{
        "code" : "I42.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.12",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.13",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.21",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.22",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.23",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.24",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.25",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.01.26",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.00",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.01",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.02",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.03",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.04",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.05",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.06",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.07",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.08",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.09",
      "target" : [{
        "code" : "I42.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.10",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.11",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.21",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.22",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.23",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.24",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.25",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.26",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.27",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.28",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.29",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.30",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.31",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.32",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.33",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.34",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.35",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.36",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.02.37",
      "target" : [{
        "code" : "Q24.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.03.00",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.03.01",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.03.02",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.03.03",
      "target" : [{
        "code" : "Q21.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.03.04",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.03.05",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.03.11",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.01",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.02",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.03",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.04",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.05",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.06",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.07",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.08",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.09",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.10",
      "target" : [{
        "code" : "Q21.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.11",
      "target" : [{
        "code" : "Q21.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.12",
      "target" : [{
        "code" : "Q21.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.13",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.14",
      "target" : [{
        "code" : "Q21.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.04.15",
      "target" : [{
        "code" : "Q21.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.05.00",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.05.01",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.05.02",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.05.03",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.05.04",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.06.01",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.06.02",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.06.03",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.06.04",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "05.07.01",
      "target" : [{
        "code" : "Q21.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.01",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.02",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.03",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.04",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.05",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.06",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.07",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.08",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.09",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.10",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.11",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.12",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.13",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.14",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.15",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.16",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.17",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.31",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.32",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.00.33",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.00",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.01",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.02",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.03",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.04",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.05",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.06",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.07",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.09",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.11",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.12",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.13",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.14",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.25",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.26",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.31",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.32",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.33",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.34",
      "target" : [{
        "code" : "Q22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.35",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.36",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.37",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.38",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.39",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.41",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.42",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.43",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.44",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.45",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.46",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.47",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.48",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.49",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.50",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.51",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.52",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.53",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.54",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.55",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.56",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.57",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.61",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.62",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.63",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.64",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.65",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.66",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.67",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.68",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.75",
      "target" : [{
        "code" : "Q22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.76",
      "target" : [{
        "code" : "Q22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.77",
      "target" : [{
        "code" : "Q22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.78",
      "target" : [{
        "code" : "Q22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.79",
      "target" : [{
        "code" : "Q22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.80",
      "target" : [{
        "code" : "Q22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.91",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.92",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.01.93",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.00",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.01",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.02",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.03",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.04",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.05",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.06",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.07",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.09",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.11",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.12",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.13",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.14",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.15",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.16",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.17",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.18",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.19",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.21",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.22",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.23",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.25",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.26",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.31",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.32",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.33",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.34",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.35",
      "target" : [{
        "code" : "I34.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.36",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.37",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.38",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.39",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.40",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.41",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.42",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.43",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.44",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.45",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.46",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.47",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.48",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.51",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.52",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.53",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.54",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.55",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.56",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.57",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.58",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.59",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.60",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.61",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.62",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.63",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.64",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.65",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.66",
      "target" : [{
        "code" : "I34.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.67",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.68",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.69",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.70",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.71",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.72",
      "target" : [{
        "code" : "I34.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.73",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.74",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.75",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.91",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.92",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.93",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.02.94",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.00",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.02",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.03",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.04",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.05",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.06",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.07",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.09",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.11",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.25",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.31",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.32",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.33",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.34",
      "target" : [{
        "code" : "Q22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.35",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.36",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.37",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.38",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.39",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.40",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.41",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.42",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.43",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.44",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.45",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.46",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.47",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.51",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.52",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.53",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.54",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.55",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.56",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.60",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.61",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.62",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.63",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.03.64",
      "target" : [{
        "code" : "Q22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.00",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.02",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.03",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.04",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.05",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.06",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.07",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.09",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.11",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.25",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.31",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.32",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.33",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.34",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.35",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.36",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.37",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.38",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.39",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.40",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.41",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.42",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.43",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.44",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.45",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.46",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.47",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.51",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.52",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.53",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.54",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.55",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.56",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.60",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.61",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.62",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.63",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.04.64",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.09",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.10",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.14",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.20",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.21",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.22",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.23",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.24",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.25",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.26",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.27",
      "target" : [{
        "code" : "Q22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.28",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.29",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.31",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.32",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.33",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.34",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.35",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.36",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.37",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.39",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.40",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.41",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.42",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.43",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.44",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.45",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.46",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.47",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.48",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.49",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.50",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.51",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.52",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.53",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.54",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.55",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.56",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.57",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.58",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.59",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.60",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.61",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.62",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.63",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.64",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.65",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.66",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.67",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.68",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.69",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.70",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.71",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.72",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.91",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.92",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.93",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.94",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.95",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.96",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.97",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.98",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.05.99",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.06.00",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.06.01",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.06.02",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.06.03",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.06.04",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.06.08",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.06.09",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.06.10",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.06.11",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.02",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.03",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.04",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.05",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.06",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.07",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.08",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.09",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.10",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.11",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.12",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.15",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.16",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.17",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.19",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.23",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.24",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.25",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.26",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.27",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.28",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.29",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.31",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.32",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.33",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.34",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.35",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.36",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.37",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "06.07.38",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.00.00",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.00.01",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.00.02",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.00.03",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.00.04",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.00.05",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.00.06",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.00.07",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.00",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.02",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.04",
      "target" : [{
        "code" : "I42.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.05",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.08",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.09",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.10",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.11",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.12",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.13",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.14",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.15",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.01.16",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.00",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.01",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.02",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.03",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.04",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.05",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.06",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.07",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.08",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.09",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.10",
      "target" : [{
        "code" : "Q22.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.02.11",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.03.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.03.02",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.03.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.03.04",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.03.05",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.03.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.03.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.04.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.04.02",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.04.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.02",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.03",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.04",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.05",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.08",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.09",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.11",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.12",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.14",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.15",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.16",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.17",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.18",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.19",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.20",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.30",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.31",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.05.32",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.00",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.02",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.04",
      "target" : [{
        "code" : "I42.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.05",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.08",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.09",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.10",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.11",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.12",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.13",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.14",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.15",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.16",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.17",
      "target" : [{
        "code" : "Q23.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.18",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.19",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.06.74",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.07.00",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.07.01",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.07.02",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.07.03",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.07.04",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.07.05",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.07.06",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.07.07",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.07.08",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.02",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.04",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.05",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.20",
      "target" : [{
        "code" : "Q24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.29",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.40",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.41",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.42",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.43",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.48",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.49",
      "target" : [{
        "code" : "Q20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.08.50",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.00",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.02",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.03",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.04",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.05",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.08",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.09",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.10",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.11",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.13",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.15",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.16",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.17",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.18",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.19",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.20",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.21",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.22",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.27",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.28",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.29",
      "target" : [{
        "code" : "Q24.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.30",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.31",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.32",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.33",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.34",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.35",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.36",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.09.50",
      "target" : [{
        "code" : "Q24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.00",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.01",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.02",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.03",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.04",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.05",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.06",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.07",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.08",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.09",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.10",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.11",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.12",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.13",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.14",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.15",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.16",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.17",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.18",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.19",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.10.21",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.01",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.02",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.03",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.04",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.05",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.06",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.07",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.08",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.09",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.10",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.12",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.13",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.15",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.11.16",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.00",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.01",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.02",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.03",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.04",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.05",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.06",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.07",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.08",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.09",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.12",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.12.13",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.13.01",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.13.02",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.13.03",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.13.04",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.13.05",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.13.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.14.01",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.14.02",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.14.03",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.14.04",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.14.05",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.14.06",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.14.07",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.14.09",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.01",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.02",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.03",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.04",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.05",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.21",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.22",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.23",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.24",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.25",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.26",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.15.27",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.16.01",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.16.02",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.16.03",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.16.04",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.16.06",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.17.05",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.17.06",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.20.00",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.20.01",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.20.02",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.20.03",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.20.04",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.20.05",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.20.06",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.20.07",
      "target" : [{
        "code" : "Q21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "07.21.01",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.01",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.02",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.03",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.04",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.05",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.06",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.07",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.08",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.09",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.10",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.11",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.12",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.14",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.15",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.16",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.17",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.18",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.01.19",
      "target" : [{
        "code" : "Q20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.00",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.02",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.04",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.05",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.10",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.12",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.13",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.14",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.15",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.16",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.17",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.18",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.19",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.02.20",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.01",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.02",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.03",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.04",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.05",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.06",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.07",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.09",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.10",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.21",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.22",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.23",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.24",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.25",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.26",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.27",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.28",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.04.29",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.00",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.01",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.04",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.05",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.06",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.10",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.11",
      "target" : [{
        "code" : "Q22.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.12",
      "target" : [{
        "code" : "Q22.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.13",
      "target" : [{
        "code" : "Q22.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.14",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.15",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.16",
      "target" : [{
        "code" : "Q22.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.17",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.21",
      "target" : [{
        "code" : "Q22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.22",
      "target" : [{
        "code" : "Q22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.23",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.24",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.25",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.26",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.27",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.28",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.29",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.31",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.32",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.34",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.35",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.36",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.37",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.38",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.39",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.40",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.41",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.42",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.43",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.44",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.45",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.46",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.47",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.49",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.50",
      "target" : [{
        "code" : "Q22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.51",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.52",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.53",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.54",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.55",
      "target" : [{
        "code" : "Q22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.91",
      "target" : [{
        "code" : "Q22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.92",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.05.93",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.00",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.01",
      "target" : [{
        "code" : "Q25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.02",
      "target" : [{
        "code" : "Q25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.03",
      "target" : [{
        "code" : "Q25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.04",
      "target" : [{
        "code" : "Q25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.05",
      "target" : [{
        "code" : "Q25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.06",
      "target" : [{
        "code" : "Q25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.11",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.12",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.13",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.15",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.16",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.19",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.20",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.21",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.22",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.23",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.24",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.25",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.26",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.07.28",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.01",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.02",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.03",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.04",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.05",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.06",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.07",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.08",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.09",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.10",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.11",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.12",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.13",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.14",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.15",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.16",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.17",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.18",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.19",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.21",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.22",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.23",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.24",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.25",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.26",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.27",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.28",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.29",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.30",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.31",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.32",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.33",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.34",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.35",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.08.36",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.01",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.02",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.03",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.04",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.05",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.06",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.08",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.09",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.10",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.11",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.09.12",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.00",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.01",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.02",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.03",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.04",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.05",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.06",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.07",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.08",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.09",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.10",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.11",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.12",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.13",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.14",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.16",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.17",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.18",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.19",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.21",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.22",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.23",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.24",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.25",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.26",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.27",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.28",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.29",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.30",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.31",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.32",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.33",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.34",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.35",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.36",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.37",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.38",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.39",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.41",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.42",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.43",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.44",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.46",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.47",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.48",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.49",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.50",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.51",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.71",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.72",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.73",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.75",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.76",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.77",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.10.78",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.12.01",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.12.02",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.12.03",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.12.04",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.12.05",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.00",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.01",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.02",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.03",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.04",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.05",
      "target" : [{
        "code" : "Q23.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.06",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.07",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.08",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.09",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.10",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.11",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.12",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.13",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.14",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.17",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.18",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.19",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.20",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.21",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.22",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.24",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.25",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.26",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.27",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.28",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.29",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.30",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.31",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.32",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.33",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.34",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.35",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.36",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.37",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.38",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.39",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.41",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.42",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.45",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.46",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.47",
      "target" : [{
        "code" : "Q23.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.48",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.49",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.50",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.51",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.52",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.53",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.54",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.55",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.56",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.58",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.59",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.60",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.91",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.92",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.15.93",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.00",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.01",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.02",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.03",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.04",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.05",
      "target" : [{
        "code" : "Q87.4†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.06",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.07",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.08",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.09",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.10",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.11",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.12",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.13",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.14",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.15",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.16",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.17",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.18",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.16.19",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.01",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.02",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.04",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.07",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.08",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.09",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.10",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.11",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.17.12",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.00",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.01",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.02",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.03",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.04",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.05",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.06",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.08",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.09",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.10",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.11",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.12",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.13",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.14",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.15",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.16",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.17",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.18",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.20",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.21",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.18.22",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.19.01",
      "target" : [{
        "code" : "Q27.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.19.02",
      "target" : [{
        "code" : "Q28.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.19.03",
      "target" : [{
        "code" : "Q26.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.19.04",
      "target" : [{
        "code" : "Q27.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.19.05",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.19.06",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.19.07",
      "target" : [{
        "code" : "Q28.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.19.08",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.20",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.21",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.22",
      "target" : [{
        "code" : "I70.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.23",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.24",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.25",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.26",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.27",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.28",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.29",
      "target" : [{
        "code" : "I70.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.30",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.31",
      "target" : [{
        "code" : "I70.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.32",
      "target" : [{
        "code" : "I70.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.33",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.34",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.20.40",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.00",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.01",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.02",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.03",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.04",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.05",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.09",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.10",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.11",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.12",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.13",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.14",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.15",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.16",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.18",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.19",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.21",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.22",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.23",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.25",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.26",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.27",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.29",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.41",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.42",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.43",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.44",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.45",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.46",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.47",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.48",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.49",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.50",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.51",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.52",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.53",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.54",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.62",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.63",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.64",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.65",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.69",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.71",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.73",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.74",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.75",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.82",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.83",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.84",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.85",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.86",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.87",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.88",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.89",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.90",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.91",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.92",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.93",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.94",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.95",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.96",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.97",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.27.98",
      "target" : [{
        "code" : "Q25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.00",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.02",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.03",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.04",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.05",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.06",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.08",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.09",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.10",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.11",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.12",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.13",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.14",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.15",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.16",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.17",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.18",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.19",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.20",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.23",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.31",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.32",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.33",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.34",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.35",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.36",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.37",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.38",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.39",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.40",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.41",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.42",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.43",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.44",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.45",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.46",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.47",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.28.48",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.01",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.02",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.03",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.04",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.05",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.06",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.08",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.09",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.10",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.11",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.12",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.13",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.14",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.16",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.17",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.18",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.19",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.20",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.21",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.22",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.23",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.24",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.26",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.27",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.28",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.31",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.32",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.33",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.34",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.35",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.40",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.41",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.42",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.43",
      "target" : [{
        "code" : "Q25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.29.44",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.00",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.01",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.02",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.04",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.11",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.12",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.13",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.14",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.15",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.16",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.17",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.18",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.21",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.22",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.23",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.24",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.26",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.27",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.28",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.29",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.30",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.31",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.32",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.33",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.30.34",
      "target" : [{
        "code" : "Q27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.00",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.01",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.02",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.03",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.04",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.05",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.07",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.08",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.09",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.10",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.11",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.12",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.13",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.14",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.15",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.17",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.18",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.19",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.20",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.21",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.22",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.23",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.24",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.25",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.26",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.27",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.28",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.29",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.30",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.31",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.32",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.33",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.34",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.35",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.31.40",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.41.01",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.41.02",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.41.03",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.41.04",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.41.05",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.41.06",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.41.07",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.41.08",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.00",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.01",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.02",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.04",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.05",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.06",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.07",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.08",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.09",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.10",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.11",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.12",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.13",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.14",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.15",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.16",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.17",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.18",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.19",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.20",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.21",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.42.22",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.01",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.02",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.04",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.05",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.06",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.07",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.08",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.09",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.10",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.11",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.12",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.13",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.14",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.16",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.17",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.18",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.19",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.20",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.21",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.22",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.23",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.24",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.25",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.26",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.27",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.28",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.29",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.30",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.31",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.32",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.33",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.34",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.37",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.43.38",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.01",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.02",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.03",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.04",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.05",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.06",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.08",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.09",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.10",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.11",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.12",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.13",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.14",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.15",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.16",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.17",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.44.19",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.00",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.01",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.02",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.03",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.04",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.05",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.06",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.07",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.08",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.09",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.10",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.11",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.12",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.13",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.14",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.16",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.17",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.18",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.19",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.20",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.21",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.22",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.45.23",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.00",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.01",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.02",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.03",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.04",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.05",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.06",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.10",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.12",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.13",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.14",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.15",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.16",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.17",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.18",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.19",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.21",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.22",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.23",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.24",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.25",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.26",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.27",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.28",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.29",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.30",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.31",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.32",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.33",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.34",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.37",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.38",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.39",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.40",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.41",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.42",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.43",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.44",
      "target" : [{
        "code" : "Q24.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.46.90",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.50.00",
      "target" : [{
        "code" : "Q27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.50.01",
      "target" : [{
        "code" : "Q27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.50.02",
      "target" : [{
        "code" : "Q27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "09.50.03",
      "target" : [{
        "code" : "Q27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.00",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.02",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.04",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.05",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.08",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.09",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.10",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.11",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.12",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.13",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.14",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.15",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.16",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.01.17",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.02.00",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.02.01",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.02.02",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.00",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.01",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.02",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.03",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.04",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.05",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.06",
      "target" : [{
        "code" : "D18.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.07",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.08",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.09",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.10",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.11",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.12",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.13",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.14",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.15",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.16",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.17",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.18",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.19",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.21",
      "target" : [{
        "code" : "C79.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.22",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.23",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.25",
      "target" : [{
        "code" : "C79.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.27",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.28",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.29",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.30",
      "target" : [{
        "code" : "E34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.31",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.32",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.33",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.34",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.35",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.36",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.37",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.38",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.39",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.40",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.41",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.42",
      "target" : [{
        "code" : "C38.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.43",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.44",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.45",
      "target" : [{
        "code" : "C79.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.46",
      "target" : [{
        "code" : "C79.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.47",
      "target" : [{
        "code" : "C79.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.48",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.49",
      "target" : [{
        "code" : "C79.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.50",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.51",
      "target" : [{
        "code" : "C79.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.52",
      "target" : [{
        "code" : "D15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.53",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.93",
      "target" : [{
        "code" : "M33.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.94",
      "target" : [{
        "code" : "M35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.03.95",
      "target" : [{
        "code" : "M35.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.00",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.01",
      "target" : [{
        "code" : "I00",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.02",
      "target" : [{
        "code" : "I01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.03",
      "target" : [{
        "code" : "I01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.04",
      "target" : [{
        "code" : "I01.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.06",
      "target" : [{
        "code" : "I01.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.07",
      "target" : [{
        "code" : "I05.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.08",
      "target" : [{
        "code" : "I05.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.09",
      "target" : [{
        "code" : "I07.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.10",
      "target" : [{
        "code" : "I07.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.11",
      "target" : [{
        "code" : "I06.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.12",
      "target" : [{
        "code" : "I06.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.13",
      "target" : [{
        "code" : "I09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.14",
      "target" : [{
        "code" : "I09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.15",
      "target" : [{
        "code" : "I09.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.17",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.20",
      "target" : [{
        "code" : "I00",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.21",
      "target" : [{
        "code" : "I01",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.22",
      "target" : [{
        "code" : "I02",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.23",
      "target" : [{
        "code" : "I00",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.24",
      "target" : [{
        "code" : "I09.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.25",
      "target" : [{
        "code" : "I09.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.26",
      "target" : [{
        "code" : "I00.X",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.27",
      "target" : [{
        "code" : "I01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.28",
      "target" : [{
        "code" : "I09.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.29",
      "target" : [{
        "code" : "I01.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.30",
      "target" : [{
        "code" : "I09.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.31",
      "target" : [{
        "code" : "I05.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.32",
      "target" : [{
        "code" : "I07.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.33",
      "target" : [{
        "code" : "I06.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.34",
      "target" : [{
        "code" : "I09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.35",
      "target" : [{
        "code" : "I09.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.36",
      "target" : [{
        "code" : "I09.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.37",
      "target" : [{
        "code" : "I09.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.38",
      "target" : [{
        "code" : "I09.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.05.39",
      "target" : [{
        "code" : "I09.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.00",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.01",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.02",
      "target" : [{
        "code" : "I33.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.03",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.05",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.06",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.07",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.08",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.09",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.10",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.11",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.12",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.13",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.14",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.15",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.16",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.18",
      "target" : [{
        "code" : "I77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.19",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.20",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.21",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.22",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.23",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.24",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.25",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.26",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.27",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.28",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.29",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.30",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.31",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.32",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.33",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.34",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.35",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.36",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.37",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.38",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.39",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.40",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.41",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.42",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.43",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.44",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.45",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.46",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.47",
      "target" : [{
        "code" : "I77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.48",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.49",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.50",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.51",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.52",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.53",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.54",
      "target" : [{
        "code" : "I33.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.55",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.56",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.57",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.58",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.59",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.61",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.62",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.63",
      "target" : [{
        "code" : "B76.6†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.64",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.65",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.66",
      "target" : [{
        "code" : "I77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.70",
      "target" : [{
        "code" : "L02.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.71",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.72",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.73",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.80",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.81",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.82",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.83",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.84",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.85",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.86",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.87",
      "target" : [{
        "code" : "T82.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.88",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.89",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.06.90",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.00",
      "target" : [{
        "code" : "I40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.01",
      "target" : [{
        "code" : "I40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.02",
      "target" : [{
        "code" : "I40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.03",
      "target" : [{
        "code" : "I40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.04",
      "target" : [{
        "code" : "I40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.05",
      "target" : [{
        "code" : "I42.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.07",
      "target" : [{
        "code" : "I41.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.08",
      "target" : [{
        "code" : "B57.2†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.09",
      "target" : [{
        "code" : "I40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.10",
      "target" : [{
        "code" : "I40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.13",
      "target" : [{
        "code" : "I40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.14",
      "target" : [{
        "code" : "B58.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.15",
      "target" : [{
        "code" : "B33.2†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.16",
      "target" : [{
        "code" : "J10.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.17",
      "target" : [{
        "code" : "A39.5†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.18",
      "target" : [{
        "code" : "A36.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.19",
      "target" : [{
        "code" : "I41.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.20",
      "target" : [{
        "code" : "I41.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.21",
      "target" : [{
        "code" : "I41.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.22",
      "target" : [{
        "code" : "I41.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.23",
      "target" : [{
        "code" : "I41.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.24",
      "target" : [{
        "code" : "I41.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.25",
      "target" : [{
        "code" : "I41.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.26",
      "target" : [{
        "code" : "A52.0†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.27",
      "target" : [{
        "code" : "I41.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.28",
      "target" : [{
        "code" : "I41.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.29",
      "target" : [{
        "code" : "A18.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.40",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.41",
      "target" : [{
        "code" : "I43.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.42",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.43",
      "target" : [{
        "code" : "I43.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.44",
      "target" : [{
        "code" : "I25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.45",
      "target" : [{
        "code" : "I42.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.46",
      "target" : [{
        "code" : "I11.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.47",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.48",
      "target" : [{
        "code" : "I25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.51",
      "target" : [{
        "code" : "I42.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.52",
      "target" : [{
        "code" : "I42.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.53",
      "target" : [{
        "code" : "I42.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.54",
      "target" : [{
        "code" : "I42.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.55",
      "target" : [{
        "code" : "I40.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.56",
      "target" : [{
        "code" : "I40.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.57",
      "target" : [{
        "code" : "I40.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.58",
      "target" : [{
        "code" : "I40.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.61",
      "target" : [{
        "code" : "E63.9†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.62",
      "target" : [{
        "code" : "E51.1†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.63",
      "target" : [{
        "code" : "E64.0†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.64",
      "target" : [{
        "code" : "E64.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.65",
      "target" : [{
        "code" : "E64.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.69",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.70",
      "target" : [{
        "code" : "E88.91†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.71",
      "target" : [{
        "code" : "P70.1†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.72",
      "target" : [{
        "code" : "E05.9†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.73",
      "target" : [{
        "code" : "E03.9†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.74",
      "target" : [{
        "code" : "E27.5†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.79",
      "target" : [{
        "code" : "E34.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.81",
      "target" : [{
        "code" : "M35.9†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.82",
      "target" : [{
        "code" : "M32.1†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.83",
      "target" : [{
        "code" : "M08.9†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.84",
      "target" : [{
        "code" : "M35.2†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.85",
      "target" : [{
        "code" : "M35.9†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.90",
      "target" : [{
        "code" : "I51.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.91",
      "target" : [{
        "code" : "I40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.92",
      "target" : [{
        "code" : "I40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.95",
      "target" : [{
        "code" : "I42.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.96",
      "target" : [{
        "code" : "I51.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.98",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.07.99",
      "target" : [{
        "code" : "I40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.00",
      "target" : [{
        "code" : "I30.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.01",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.02",
      "target" : [{
        "code" : "I30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.03",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.04",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.05",
      "target" : [{
        "code" : "A18.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.06",
      "target" : [{
        "code" : "N18.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.07",
      "target" : [{
        "code" : "M32.1†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.08",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.09",
      "target" : [{
        "code" : "I31.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.10",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.11",
      "target" : [{
        "code" : "I97.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.12",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.13",
      "target" : [{
        "code" : "I31.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.14",
      "target" : [{
        "code" : "I30.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.15",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.16",
      "target" : [{
        "code" : "J94.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.17",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.18",
      "target" : [{
        "code" : "I32.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.19",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.20",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.21",
      "target" : [{
        "code" : "I30.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.22",
      "target" : [{
        "code" : "I31.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.23",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.24",
      "target" : [{
        "code" : "I32.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.25",
      "target" : [{
        "code" : "I24.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.26",
      "target" : [{
        "code" : "I31.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.27",
      "target" : [{
        "code" : "I31.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.28",
      "target" : [{
        "code" : "I31.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.29",
      "target" : [{
        "code" : "I31.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.30",
      "target" : [{
        "code" : "I31.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.31",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.32",
      "target" : [{
        "code" : "I23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.33",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.34",
      "target" : [{
        "code" : "I31.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.35",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.36",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.37",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.38",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.39",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.41",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.42",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.43",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.44",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.45",
      "target" : [{
        "code" : "A39.5†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.46",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.47",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.48",
      "target" : [{
        "code" : "A18.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.49",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.50",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.51",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.52",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.53",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.54",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.55",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.56",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.57",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.58",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.59",
      "target" : [{
        "code" : "I32.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.60",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.61",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.62",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.63",
      "target" : [{
        "code" : "N18.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.64",
      "target" : [{
        "code" : "I30.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.66",
      "target" : [{
        "code" : "I31.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.67",
      "target" : [{
        "code" : "I31.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.68",
      "target" : [{
        "code" : "A18.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.69",
      "target" : [{
        "code" : "I30.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.70",
      "target" : [{
        "code" : "I30.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.71",
      "target" : [{
        "code" : "I30.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.72",
      "target" : [{
        "code" : "I31.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.73",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.74",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.75",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.76",
      "target" : [{
        "code" : "I30.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.77",
      "target" : [{
        "code" : "I30.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.78",
      "target" : [{
        "code" : "I30.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.79",
      "target" : [{
        "code" : "I30.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.80",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.81",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.82",
      "target" : [{
        "code" : "I24.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.83",
      "target" : [{
        "code" : "I24.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.08.84",
      "target" : [{
        "code" : "I24.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.00",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.01",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.02",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.03",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.04",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.05",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.07",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.08",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.09",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.10",
      "target" : [{
        "code" : "I25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.11",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.12",
      "target" : [{
        "code" : "I24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.13",
      "target" : [{
        "code" : "I24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.14",
      "target" : [{
        "code" : "I24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.15",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.16",
      "target" : [{
        "code" : "E34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.17",
      "target" : [{
        "code" : "I70.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.18",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.19",
      "target" : [{
        "code" : "M30.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.20",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.21",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.22",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.23",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.24",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.25",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.26",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.27",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.28",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.29",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.30",
      "target" : [{
        "code" : "I25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.31",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.32",
      "target" : [{
        "code" : "I20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.33",
      "target" : [{
        "code" : "I20.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.34",
      "target" : [{
        "code" : "I25.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.35",
      "target" : [{
        "code" : "I25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.36",
      "target" : [{
        "code" : "I24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.37",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.38",
      "target" : [{
        "code" : "I23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.39",
      "target" : [{
        "code" : "R57.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.40",
      "target" : [{
        "code" : "I23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.41",
      "target" : [{
        "code" : "I24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.42",
      "target" : [{
        "code" : "I24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.43",
      "target" : [{
        "code" : "I24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.44",
      "target" : [{
        "code" : "I24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.45",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.46",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.47",
      "target" : [{
        "code" : "M30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.48",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.49",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.50",
      "target" : [{
        "code" : "I20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.51",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.52",
      "target" : [{
        "code" : "I25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.53",
      "target" : [{
        "code" : "I24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.71",
      "target" : [{
        "code" : "I40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.72",
      "target" : [{
        "code" : "I40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.73",
      "target" : [{
        "code" : "I40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.74",
      "target" : [{
        "code" : "I40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.09.76",
      "target" : [{
        "code" : "I40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.01",
      "target" : [{
        "code" : "I42.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.02",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.03",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.05",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.06",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.08",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.09",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.10",
      "target" : [{
        "code" : "I42.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.11",
      "target" : [{
        "code" : "I42.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.12",
      "target" : [{
        "code" : "I42.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.13",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.14",
      "target" : [{
        "code" : "D86.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.15",
      "target" : [{
        "code" : "E85.9†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.16",
      "target" : [{
        "code" : "E83.1†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.17",
      "target" : [{
        "code" : "E74.0†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.18",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.19",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.20",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.21",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.22",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.23",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.24",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.25",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.30",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.31",
      "target" : [{
        "code" : "I42.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.32",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.33",
      "target" : [{
        "code" : "O90.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.34",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.35",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.36",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.37",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.38",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.39",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.40",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.41",
      "target" : [{
        "code" : "I42.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.42",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.43",
      "target" : [{
        "code" : "I42.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.44",
      "target" : [{
        "code" : "E88.9†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.45",
      "target" : [{
        "code" : "E76.3†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.46",
      "target" : [{
        "code" : "E74.0†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.47",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.48",
      "target" : [{
        "code" : "I42.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.49",
      "target" : [{
        "code" : "I42.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.51",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.60",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.61",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.62",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.63",
      "target" : [{
        "code" : "I25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.65",
      "target" : [{
        "code" : "I43.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.70",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.71",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.72",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.73",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.74",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.75",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.76",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.77",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.78",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.79",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.80",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.81",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.82",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.83",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.84",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.85",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.86",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.87",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.88",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.89",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.90",
      "target" : [{
        "code" : "I42.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.91",
      "target" : [{
        "code" : "I42.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.92",
      "target" : [{
        "code" : "I42.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.93",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.94",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.95",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.96",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.97",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.98",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.10.99",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.01",
      "target" : [{
        "code" : "Q28.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.03",
      "target" : [{
        "code" : "I78.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.04",
      "target" : [{
        "code" : "Q87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.05",
      "target" : [{
        "code" : "Q82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.07",
      "target" : [{
        "code" : "Q28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.08",
      "target" : [{
        "code" : "Q28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.30",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.31",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.32",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.33",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.40",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.41",
      "target" : [{
        "code" : "I40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.42",
      "target" : [{
        "code" : "I40.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.43",
      "target" : [{
        "code" : "I25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.44",
      "target" : [{
        "code" : "I42.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.45",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.46",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.47",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.48",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.49",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.51",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.52",
      "target" : [{
        "code" : "I40.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.53",
      "target" : [{
        "code" : "I42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.54",
      "target" : [{
        "code" : "I42.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.55",
      "target" : [{
        "code" : "E85.9†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.56",
      "target" : [{
        "code" : "I42.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.57",
      "target" : [{
        "code" : "I40.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.60",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.61",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.62",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.63",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.64",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.65",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.66",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.67",
      "target" : [{
        "code" : "I40.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.70",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.11.71",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.00",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.01",
      "target" : [{
        "code" : "R01.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.02",
      "target" : [{
        "code" : "R01.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.03",
      "target" : [{
        "code" : "R01.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.04",
      "target" : [{
        "code" : "R01.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.05",
      "target" : [{
        "code" : "R01.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.07",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.08",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.09",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.10",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.11",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.12",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.13",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.14",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.15",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.16",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.17",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.18",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.19",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.20",
      "target" : [{
        "code" : "R01.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.21",
      "target" : [{
        "code" : "I73.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.31",
      "target" : [{
        "code" : "R57.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.32",
      "target" : [{
        "code" : "R06.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.33",
      "target" : [{
        "code" : "R06.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.34",
      "target" : [{
        "code" : "R06.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.35",
      "target" : [{
        "code" : "R05",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.36",
      "target" : [{
        "code" : "R04.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.37",
      "target" : [{
        "code" : "J98.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.38",
      "target" : [{
        "code" : "R63.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.39",
      "target" : [{
        "code" : "R62.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.40",
      "target" : [{
        "code" : "R68.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.41",
      "target" : [{
        "code" : "R00.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.42",
      "target" : [{
        "code" : "R07.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.43",
      "target" : [{
        "code" : "R60.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.44",
      "target" : [{
        "code" : "R18",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.45",
      "target" : [{
        "code" : "R61.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.46",
      "target" : [{
        "code" : "R53",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.47",
      "target" : [{
        "code" : "R62.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.48",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.49",
      "target" : [{
        "code" : "R46.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.50",
      "target" : [{
        "code" : "I46.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.51",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.52",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.53",
      "target" : [{
        "code" : "I20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.54",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.55",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.56",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.57",
      "target" : [{
        "code" : "R04.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.58",
      "target" : [{
        "code" : "R23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.59",
      "target" : [{
        "code" : "R16.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.60",
      "target" : [{
        "code" : "F45.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.61",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.62",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.63",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.64",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.65",
      "target" : [{
        "code" : "I20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.66",
      "target" : [{
        "code" : "R16.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.67",
      "target" : [{
        "code" : "R69",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.68",
      "target" : [{
        "code" : "R51",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.70",
      "target" : [{
        "code" : "R42",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.71",
      "target" : [{
        "code" : "G40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.72",
      "target" : [{
        "code" : "R68.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.73",
      "target" : [{
        "code" : "R23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.74",
      "target" : [{
        "code" : "R50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.75",
      "target" : [{
        "code" : "M13.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.76",
      "target" : [{
        "code" : "R21",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.77",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.78",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.83",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.84",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.85",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.86",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.87",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.88",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.89",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.90",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.91",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.92",
      "target" : [{
        "code" : "R00.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.93",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.94",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.95",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.96",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.97",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.98",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.12.99",
      "target" : [{
        "code" : "R01.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.00",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.01",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.02",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.03",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.04",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.06",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.07",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.08",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.09",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.10",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.11",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.12",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.13",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.14",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.15",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.16",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.17",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.18",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.19",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.20",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.21",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.22",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.23",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.24",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.25",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.26",
      "target" : [{
        "code" : "I27.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.27",
      "target" : [{
        "code" : "I27.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.28",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.29",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.30",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.31",
      "target" : [{
        "code" : "I27.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.32",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.33",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.37",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.38",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.39",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.40",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.41",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.42",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.43",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.44",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.45",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.46",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.50",
      "target" : [{
        "code" : "I28.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.51",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.52",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.53",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.54",
      "target" : [{
        "code" : "D18.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.55",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.56",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.57",
      "target" : [{
        "code" : "I28.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.58",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.59",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.60",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.61",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.62",
      "target" : [{
        "code" : "I28.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.63",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.64",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.65",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.66",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.67",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.68",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.69",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.70",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.71",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.72",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.73",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.74",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.75",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.76",
      "target" : [{
        "code" : "I28.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.77",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.78",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.79",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.81",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.82",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.83",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.85",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.86",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.87",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.88",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.89",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.90",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.91",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.92",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.93",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.94",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.95",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.96",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.97",
      "target" : [{
        "code" : "I27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.98",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.13.99",
      "target" : [{
        "code" : "I27.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.00",
      "target" : [{
        "code" : "I15.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.01",
      "target" : [{
        "code" : "I10",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.02",
      "target" : [{
        "code" : "I10",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.03",
      "target" : [{
        "code" : "I15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.04",
      "target" : [{
        "code" : "I15.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.05",
      "target" : [{
        "code" : "I15.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.07",
      "target" : [{
        "code" : "I10",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.08",
      "target" : [{
        "code" : "I11.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.09",
      "target" : [{
        "code" : "I10",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.10",
      "target" : [{
        "code" : "I10",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.11",
      "target" : [{
        "code" : "I15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.12",
      "target" : [{
        "code" : "I15.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.13",
      "target" : [{
        "code" : "I15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.14",
      "target" : [{
        "code" : "I15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.15",
      "target" : [{
        "code" : "I15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.16",
      "target" : [{
        "code" : "I15.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.17",
      "target" : [{
        "code" : "I15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.18",
      "target" : [{
        "code" : "I15.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.19",
      "target" : [{
        "code" : "I15.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.20",
      "target" : [{
        "code" : "I15.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.21",
      "target" : [{
        "code" : "G90.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.22",
      "target" : [{
        "code" : "O13",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.23",
      "target" : [{
        "code" : "I15.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.24",
      "target" : [{
        "code" : "I11.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.25",
      "target" : [{
        "code" : "I15.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.26",
      "target" : [{
        "code" : "I15.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.27",
      "target" : [{
        "code" : "I10",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.28",
      "target" : [{
        "code" : "I15.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.38",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.39",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.40",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.41",
      "target" : [{
        "code" : "I70.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.42",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.43",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.44",
      "target" : [{
        "code" : "I71.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.45",
      "target" : [{
        "code" : "I71.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.46",
      "target" : [{
        "code" : "I71.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.47",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.50",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.51",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.52",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.53",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.54",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.55",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.56",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.57",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.58",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.59",
      "target" : [{
        "code" : "I99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.60",
      "target" : [{
        "code" : "I77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.61",
      "target" : [{
        "code" : "M31.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.62",
      "target" : [{
        "code" : "M31.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.63",
      "target" : [{
        "code" : "M30.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.64",
      "target" : [{
        "code" : "I77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.65",
      "target" : [{
        "code" : "I77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.66",
      "target" : [{
        "code" : "A52.0†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.67",
      "target" : [{
        "code" : "I77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.68",
      "target" : [{
        "code" : "I77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.69",
      "target" : [{
        "code" : "I70.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.70",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.71",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.72",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.73",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.74",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.75",
      "target" : [{
        "code" : "I71.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.76",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.77",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.78",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.79",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.80",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.81",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.82",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.83",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.84",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.85",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.86",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.87",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.88",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.90",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.91",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.92",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.93",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.94",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.95",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.14.96",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.00",
      "target" : [{
        "code" : "P96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.01",
      "target" : [{
        "code" : "P29.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.02",
      "target" : [{
        "code" : "P27.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.03",
      "target" : [{
        "code" : "P22.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.04",
      "target" : [{
        "code" : "P61.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.05",
      "target" : [{
        "code" : "P77",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.06",
      "target" : [{
        "code" : "P52.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.07",
      "target" : [{
        "code" : "G91",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.08",
      "target" : [{
        "code" : "P74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.09",
      "target" : [{
        "code" : "P59.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.10",
      "target" : [{
        "code" : "P29.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.11",
      "target" : [{
        "code" : "P92.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.12",
      "target" : [{
        "code" : "P24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.13",
      "target" : [{
        "code" : "P21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.14",
      "target" : [{
        "code" : "P28.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.15",
      "target" : [{
        "code" : "P22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.16",
      "target" : [{
        "code" : "P29.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.17",
      "target" : [{
        "code" : "P29.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.15.18",
      "target" : [{
        "code" : "P29.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.00",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.01",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.02",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.03",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.04",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.05",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.06",
      "target" : [{
        "code" : "I27.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.07",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.08",
      "target" : [{
        "code" : "I50.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.11",
      "target" : [{
        "code" : "I27.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.12",
      "target" : [{
        "code" : "I26.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.13",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.14",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.15",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.16",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.17",
      "target" : [{
        "code" : "I27.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.18",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.19",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.20",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.21",
      "target" : [{
        "code" : "I27.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.22",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.23",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.40",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.41",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.42",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.43",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.44",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.45",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.46",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.47",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.48",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.50",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.51",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.52",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.53",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.54",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.55",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.56",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.57",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.58",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.59",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.60",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.61",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.62",
      "target" : [{
        "code" : "I23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.63",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.64",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.65",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.69",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.70",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.71",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.72",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.73",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.75",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.76",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.77",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.78",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.79",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.80",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.81",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.82",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.83",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.84",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.85",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.86",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.87",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.88",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.89",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.90",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.91",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.95",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.96",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.16.97",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.00",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.01",
      "target" : [{
        "code" : "R07.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.02",
      "target" : [{
        "code" : "F45.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.03",
      "target" : [{
        "code" : "R23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.05",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.09",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.12",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.13",
      "target" : [{
        "code" : "R00.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.14",
      "target" : [{
        "code" : "R51",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.15",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.17",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.18",
      "target" : [{
        "code" : "I51.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.19",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.20",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.21",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.22",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.23",
      "target" : [{
        "code" : "R57.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.24",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.25",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.26",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.27",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.28",
      "target" : [{
        "code" : "I50.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.30",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.31",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.32",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.33",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.40",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.41",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.42",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.43",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.44",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.45",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.46",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.47",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.48",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.50",
      "target" : [{
        "code" : "Q21.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.51",
      "target" : [{
        "code" : "I71.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.52",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.53",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.54",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.55",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.56",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.57",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.58",
      "target" : [{
        "code" : "I79.0*",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.59",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.60",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.61",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.62",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.63",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.64",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.65",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.66",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.69",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.71",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.72",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.73",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.77",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.78",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.79",
      "target" : [{
        "code" : "R09.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.80",
      "target" : [{
        "code" : "T78.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.81",
      "target" : [{
        "code" : "R57.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.82",
      "target" : [{
        "code" : "R57.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.83",
      "target" : [{
        "code" : "R57.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.84",
      "target" : [{
        "code" : "A41.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.85",
      "target" : [{
        "code" : "R57.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.86",
      "target" : [{
        "code" : "F43.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.17.87",
      "target" : [{
        "code" : "T79.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.00",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.01",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.02",
      "target" : [{
        "code" : "I21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.03",
      "target" : [{
        "code" : "I21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.04",
      "target" : [{
        "code" : "I21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.05",
      "target" : [{
        "code" : "I21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.06",
      "target" : [{
        "code" : "I21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.07",
      "target" : [{
        "code" : "I21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.11",
      "target" : [{
        "code" : "I21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.12",
      "target" : [{
        "code" : "I21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.13",
      "target" : [{
        "code" : "I21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.14",
      "target" : [{
        "code" : "I21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.15",
      "target" : [{
        "code" : "I21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.16",
      "target" : [{
        "code" : "I21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.17",
      "target" : [{
        "code" : "I21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.18",
      "target" : [{
        "code" : "I21.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.20",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.21",
      "target" : [{
        "code" : "I23.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.22",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.23",
      "target" : [{
        "code" : "I23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.24",
      "target" : [{
        "code" : "I23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.25",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.26",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.27",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.28",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.29",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.31",
      "target" : [{
        "code" : "I25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.32",
      "target" : [{
        "code" : "I25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.33",
      "target" : [{
        "code" : "I25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.34",
      "target" : [{
        "code" : "I25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.35",
      "target" : [{
        "code" : "I25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.36",
      "target" : [{
        "code" : "I25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.37",
      "target" : [{
        "code" : "I25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.38",
      "target" : [{
        "code" : "I25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.39",
      "target" : [{
        "code" : "I25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.40",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.41",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.42",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.43",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.44",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.45",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.46",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.47",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.48",
      "target" : [{
        "code" : "Z86.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.49",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.50",
      "target" : [{
        "code" : "R07.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.51",
      "target" : [{
        "code" : "R07.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.52",
      "target" : [{
        "code" : "M62.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.53",
      "target" : [{
        "code" : "M94.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.54",
      "target" : [{
        "code" : "M93.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.55",
      "target" : [{
        "code" : "S20.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.56",
      "target" : [{
        "code" : "S20.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.57",
      "target" : [{
        "code" : "S20.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.58",
      "target" : [{
        "code" : "S20.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.59",
      "target" : [{
        "code" : "M60.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.60",
      "target" : [{
        "code" : "B33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.61",
      "target" : [{
        "code" : "F45.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.62",
      "target" : [{
        "code" : "F45.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.63",
      "target" : [{
        "code" : "R07.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.64",
      "target" : [{
        "code" : "R07.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.65",
      "target" : [{
        "code" : "R07.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.18.80",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.01",
      "target" : [{
        "code" : "E78.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.02",
      "target" : [{
        "code" : "E78.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.03",
      "target" : [{
        "code" : "E78.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.04",
      "target" : [{
        "code" : "E78.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.06",
      "target" : [{
        "code" : "E78.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.07",
      "target" : [{
        "code" : "E78.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.08",
      "target" : [{
        "code" : "E78.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.09",
      "target" : [{
        "code" : "E78.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.10",
      "target" : [{
        "code" : "E78.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.11",
      "target" : [{
        "code" : "E78.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.12",
      "target" : [{
        "code" : "E78.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.13",
      "target" : [{
        "code" : "E78.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.14",
      "target" : [{
        "code" : "E78.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.50",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.51",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.52",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.53",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.54",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.55",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.19.56",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.01",
      "target" : [{
        "code" : "I50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.02",
      "target" : [{
        "code" : "R57.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.03",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.04",
      "target" : [{
        "code" : "E88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.05",
      "target" : [{
        "code" : "E87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.06",
      "target" : [{
        "code" : "D68.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.07",
      "target" : [{
        "code" : "N17.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.08",
      "target" : [{
        "code" : "Z99.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.09",
      "target" : [{
        "code" : "A41.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.10",
      "target" : [{
        "code" : "J98.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.11",
      "target" : [{
        "code" : "R50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.12",
      "target" : [{
        "code" : "G93.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.13",
      "target" : [{
        "code" : "R90.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.14",
      "target" : [{
        "code" : "Z99.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.15",
      "target" : [{
        "code" : "Z99.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.16",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.17",
      "target" : [{
        "code" : "Z93.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.18",
      "target" : [{
        "code" : "R56.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.31",
      "target" : [{
        "code" : "R57.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.32",
      "target" : [{
        "code" : "R57.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.33",
      "target" : [{
        "code" : "I46.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.34",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.35",
      "target" : [{
        "code" : "D68.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.36",
      "target" : [{
        "code" : "K72.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.37",
      "target" : [{
        "code" : "J12.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.38",
      "target" : [{
        "code" : "P77",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.39",
      "target" : [{
        "code" : "P77",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.40",
      "target" : [{
        "code" : "Z93.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.41",
      "target" : [{
        "code" : "I64",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.42",
      "target" : [{
        "code" : "I64",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.43",
      "target" : [{
        "code" : "Z92.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.44",
      "target" : [{
        "code" : "Z86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.45",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.46",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.47",
      "target" : [{
        "code" : "I21",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.48",
      "target" : [{
        "code" : "Z93.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.49",
      "target" : [{
        "code" : "Z93.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.70",
      "target" : [{
        "code" : "Z93.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.71",
      "target" : [{
        "code" : "D68.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.72",
      "target" : [{
        "code" : "D68.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.73",
      "target" : [{
        "code" : "D68.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.74",
      "target" : [{
        "code" : "D68.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.75",
      "target" : [{
        "code" : "Z92.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.76",
      "target" : [{
        "code" : "Z92.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.77",
      "target" : [{
        "code" : "A41.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.78",
      "target" : [{
        "code" : "Z99.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.79",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.80",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.81",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.82",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.83",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.84",
      "target" : [{
        "code" : "S26.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.85",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.86",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.87",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.88",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.89",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.90",
      "target" : [{
        "code" : "R56.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.20.91",
      "target" : [{
        "code" : "R56.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.00",
      "target" : [{
        "code" : "Z37.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.01",
      "target" : [{
        "code" : "Z37.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.02",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.08",
      "target" : [{
        "code" : "Z37.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.10",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.11",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.12",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.13",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.14",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.15",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.16",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.17",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.18",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.19",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.20",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.21",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.22",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.23",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.21.24",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.22.01",
      "target" : [{
        "code" : "P05.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.22.02",
      "target" : [{
        "code" : "P07.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.22.03",
      "target" : [{
        "code" : "P70.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.22.04",
      "target" : [{
        "code" : "P21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.22.05",
      "target" : [{
        "code" : "P07.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.22.06",
      "target" : [{
        "code" : "P07.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.22.07",
      "target" : [{
        "code" : "P07.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.01",
      "target" : [{
        "code" : "Z82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.02",
      "target" : [{
        "code" : "O99.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.03",
      "target" : [{
        "code" : "Z82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.04",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.05",
      "target" : [{
        "code" : "Z82.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.06",
      "target" : [{
        "code" : "Z82.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.07",
      "target" : [{
        "code" : "Z84.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.10",
      "target" : [{
        "code" : "Z82.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.11",
      "target" : [{
        "code" : "Z84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.12",
      "target" : [{
        "code" : "Z52.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.13",
      "target" : [{
        "code" : "Z82.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.14",
      "target" : [{
        "code" : "Z82.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.26",
      "target" : [{
        "code" : "C74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.27",
      "target" : [{
        "code" : "D44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.28",
      "target" : [{
        "code" : "D48.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.29",
      "target" : [{
        "code" : "C74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.30",
      "target" : [{
        "code" : "E34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.31",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.32",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.23.33",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.00",
      "target" : [{
        "code" : "I28.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.01",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.02",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.03",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.05",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.06",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.07",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.08",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.10",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.11",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.12",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.24.13",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.00",
      "target" : [{
        "code" : "I70.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.01",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.02",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.03",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.04",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.05",
      "target" : [{
        "code" : "I70.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.06",
      "target" : [{
        "code" : "I70.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.07",
      "target" : [{
        "code" : "I70.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.08",
      "target" : [{
        "code" : "I70.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.09",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.10",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.11",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.12",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.13",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.14",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.15",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.16",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.25.21",
      "target" : [{
        "code" : "I70.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.01",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.02",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.03",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.04",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.06",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.07",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.08",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.09",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.10",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.11",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.26.12",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.00",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.02",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.03",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.04",
      "target" : [{
        "code" : "I99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.05",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.06",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.07",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.08",
      "target" : [{
        "code" : "I82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.09",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.10",
      "target" : [{
        "code" : "I99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.11",
      "target" : [{
        "code" : "I99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.12",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.13",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.15",
      "target" : [{
        "code" : "I80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.16",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.30",
      "target" : [{
        "code" : "J81",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.31",
      "target" : [{
        "code" : "J81",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.32",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.33",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.34",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.35",
      "target" : [{
        "code" : "I50.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.36",
      "target" : [{
        "code" : "J81",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.37",
      "target" : [{
        "code" : "J81",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.38",
      "target" : [{
        "code" : "J81",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.39",
      "target" : [{
        "code" : "J81",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.40",
      "target" : [{
        "code" : "J81",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.51",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.52",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.53",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.54",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.55",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.56",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.30.59",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.01",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.02",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.03",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.04",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.05",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.06",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.21",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.22",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.23",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.24",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.25",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.31.26",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.00",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.01",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.02",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.03",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.04",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.06",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.07",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.08",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.09",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.10",
      "target" : [{
        "code" : "I51.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.11",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.12",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.13",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.14",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.15",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.16",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.17",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.90",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.91",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.92",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.93",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.32.94",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.00",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.01",
      "target" : [{
        "code" : "I34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.02",
      "target" : [{
        "code" : "I34.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.03",
      "target" : [{
        "code" : "I34.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.04",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.06",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.07",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.08",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.09",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.10",
      "target" : [{
        "code" : "I51.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.11",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.12",
      "target" : [{
        "code" : "Q20.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.13",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.14",
      "target" : [{
        "code" : "I34.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.15",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.16",
      "target" : [{
        "code" : "I34.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.17",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.18",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.20",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.21",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.22",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.23",
      "target" : [{
        "code" : "I34.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.24",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.25",
      "target" : [{
        "code" : "I51.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.33.26",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.01",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.02",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.03",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.04",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.06",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.07",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.08",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.09",
      "target" : [{
        "code" : "I51.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.10",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.11",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.12",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.13",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.41",
      "target" : [{
        "code" : "I34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.42",
      "target" : [{
        "code" : "I34.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.43",
      "target" : [{
        "code" : "I34.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.44",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.46",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.47",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.48",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.49",
      "target" : [{
        "code" : "I51.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.50",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.51",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.52",
      "target" : [{
        "code" : "I34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.53",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.54",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.55",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.56",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.57",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.58",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.59",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.60",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.61",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.62",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.63",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.64",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.66",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.67",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.68",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.34.69",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.01",
      "target" : [{
        "code" : "I37.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.02",
      "target" : [{
        "code" : "I37.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.03",
      "target" : [{
        "code" : "I37.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.04",
      "target" : [{
        "code" : "I37.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.06",
      "target" : [{
        "code" : "I37.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.07",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.08",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.09",
      "target" : [{
        "code" : "I37.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.10",
      "target" : [{
        "code" : "I37.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.35.11",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.01",
      "target" : [{
        "code" : "I35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.02",
      "target" : [{
        "code" : "I35.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.03",
      "target" : [{
        "code" : "I35.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.04",
      "target" : [{
        "code" : "I35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.06",
      "target" : [{
        "code" : "I35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.07",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.08",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.09",
      "target" : [{
        "code" : "I35.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.10",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.11",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.12",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.13",
      "target" : [{
        "code" : "I35.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.14",
      "target" : [{
        "code" : "D48.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.15",
      "target" : [{
        "code" : "I35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.16",
      "target" : [{
        "code" : "I35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.36.17",
      "target" : [{
        "code" : "I35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.37.01",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.37.02",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.37.03",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.37.04",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.37.06",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.37.07",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.37.08",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.01",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.02",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.03",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.04",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.05",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.06",
      "target" : [{
        "code" : "G43.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.07",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.08",
      "target" : [{
        "code" : "F48.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.10",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.11",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.12",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.13",
      "target" : [{
        "code" : "G90.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.14",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.30",
      "target" : [{
        "code" : "I95.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.31",
      "target" : [{
        "code" : "I95.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.32",
      "target" : [{
        "code" : "I95.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.33",
      "target" : [{
        "code" : "I95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.34",
      "target" : [{
        "code" : "G23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.35",
      "target" : [{
        "code" : "I95.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.36",
      "target" : [{
        "code" : "I95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.40.37",
      "target" : [{
        "code" : "R55",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.51.01",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.51.02",
      "target" : [{
        "code" : "I72.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.51.03",
      "target" : [{
        "code" : "I72.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.51.04",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.51.05",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.51.06",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.00",
      "target" : [{
        "code" : "I77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.01",
      "target" : [{
        "code" : "I74.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.02",
      "target" : [{
        "code" : "I74.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.03",
      "target" : [{
        "code" : "I74.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.04",
      "target" : [{
        "code" : "I74.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.10",
      "target" : [{
        "code" : "I73.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.11",
      "target" : [{
        "code" : "I70.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.12",
      "target" : [{
        "code" : "I73.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.13",
      "target" : [{
        "code" : "I73.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.14",
      "target" : [{
        "code" : "I73.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.15",
      "target" : [{
        "code" : "I73.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.16",
      "target" : [{
        "code" : "I73.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.17",
      "target" : [{
        "code" : "I73.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.18",
      "target" : [{
        "code" : "I73.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.19",
      "target" : [{
        "code" : "I73.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.20",
      "target" : [{
        "code" : "I73.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.40",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.41",
      "target" : [{
        "code" : "I65.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.42",
      "target" : [{
        "code" : "I65.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.43",
      "target" : [{
        "code" : "I65.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.44",
      "target" : [{
        "code" : "I72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.45",
      "target" : [{
        "code" : "I72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.46",
      "target" : [{
        "code" : "I72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.47",
      "target" : [{
        "code" : "I65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.48",
      "target" : [{
        "code" : "I72.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.49",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.50",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.51",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.52",
      "target" : [{
        "code" : "I72.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.53",
      "target" : [{
        "code" : "I72.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.54",
      "target" : [{
        "code" : "I72.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.77.55",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.01",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.02",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.03",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.04",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.05",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.11",
      "target" : [{
        "code" : "S25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.15",
      "target" : [{
        "code" : "S25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.20",
      "target" : [{
        "code" : "S25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.21",
      "target" : [{
        "code" : "S25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.24",
      "target" : [{
        "code" : "S27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.25",
      "target" : [{
        "code" : "S27.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.26",
      "target" : [{
        "code" : "S27.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.27",
      "target" : [{
        "code" : "S27.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.29",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.31",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.32",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.33",
      "target" : [{
        "code" : "S26",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.34",
      "target" : [{
        "code" : "S25.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.40",
      "target" : [{
        "code" : "T14.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.41",
      "target" : [{
        "code" : "T14.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "10.90.42",
      "target" : [{
        "code" : "T14.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.00",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.02",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.03",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.10",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.11",
      "target" : [{
        "code" : "I46.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.12",
      "target" : [{
        "code" : "I46.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.13",
      "target" : [{
        "code" : "I46.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.14",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.15",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.16",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.17",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.18",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.19",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.20",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.21",
      "target" : [{
        "code" : "I46.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.22",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.23",
      "target" : [{
        "code" : "I46.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.24",
      "target" : [{
        "code" : "I46.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.25",
      "target" : [{
        "code" : "I46.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.26",
      "target" : [{
        "code" : "I46.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.30",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.31",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.32",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.33",
      "target" : [{
        "code" : "I49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.00.34",
      "target" : [{
        "code" : "I46.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.01.00",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.01.01",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.01.02",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.01.03",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.01.04",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.01.05",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.01.06",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.01.07",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.01.08",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.02",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.03",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.04",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.05",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.06",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.07",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.10",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.11",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.12",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.13",
      "target" : [{
        "code" : "I45.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.14",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.15",
      "target" : [{
        "code" : "P29.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.16",
      "target" : [{
        "code" : "T88.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.17",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.18",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.19",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.20",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.21",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.22",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.31",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.32",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.33",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.34",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.36",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.37",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.38",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.39",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.40",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.02.41",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.05",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.06",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.07",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.08",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.09",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.11",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.12",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.13",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.15",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.16",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.17",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.18",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.19",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.20",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.21",
      "target" : [{
        "code" : "I49.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.22",
      "target" : [{
        "code" : "I49.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.23",
      "target" : [{
        "code" : "I49.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.24",
      "target" : [{
        "code" : "I49.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.25",
      "target" : [{
        "code" : "I49.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.26",
      "target" : [{
        "code" : "I49.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.30",
      "target" : [{
        "code" : "I49.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.43",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.44",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.45",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.46",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.48",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.50",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.51",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.52",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.55",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.56",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.57",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.58",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.60",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.61",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.62",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.63",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.66",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.67",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.68",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.69",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.70",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.71",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.72",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.73",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.03.80",
      "target" : [{
        "code" : "I48",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.00",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.03",
      "target" : [{
        "code" : "I49.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.07",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.11",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.12",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.13",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.21",
      "target" : [{
        "code" : "I49.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.25",
      "target" : [{
        "code" : "I49.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.40",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.41",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.42",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.43",
      "target" : [{
        "code" : "I49.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.44",
      "target" : [{
        "code" : "I49.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.45",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.04.46",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.00",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.03",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.05",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.06",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.07",
      "target" : [{
        "code" : "I47.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.08",
      "target" : [{
        "code" : "P291",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.09",
      "target" : [{
        "code" : "I49.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.10",
      "target" : [{
        "code" : "I49.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.12",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.13",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.14",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.15",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.16",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.17",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.19",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.21",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.24",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.25",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.26",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.27",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.28",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.29",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.30",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.31",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.32",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.33",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.34",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.35",
      "target" : [{
        "code" : "I49.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.36",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.37",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.38",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.39",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.41",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.42",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.43",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.44",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.45",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.46",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.47",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.48",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.49",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.50",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.51",
      "target" : [{
        "code" : "I47.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.52",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.53",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.54",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.55",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.56",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.57",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.58",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.59",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.60",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.61",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.62",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.63",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.64",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.65",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.66",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.67",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.68",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.69",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.70",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.71",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.72",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.73",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.74",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.75",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.76",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.77",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.78",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.79",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.80",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.81",
      "target" : [{
        "code" : "I47.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.82",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.83",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.84",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.85",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.86",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.87",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.88",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.05.89",
      "target" : [{
        "code" : "I47.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.00",
      "target" : [{
        "code" : "I45.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.01",
      "target" : [{
        "code" : "I45.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.02",
      "target" : [{
        "code" : "I44.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.03",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.04",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.05",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.06",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.07",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.08",
      "target" : [{
        "code" : "Q24.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.09",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.10",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.11",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.13",
      "target" : [{
        "code" : "Q24.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.14",
      "target" : [{
        "code" : "Q24.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.15",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.16",
      "target" : [{
        "code" : "Q24.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.17",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.18",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.19",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.20",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.23",
      "target" : [{
        "code" : "I45.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.24",
      "target" : [{
        "code" : "I44.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.27",
      "target" : [{
        "code" : "I44.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.28",
      "target" : [{
        "code" : "I44.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.29",
      "target" : [{
        "code" : "I45.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.30",
      "target" : [{
        "code" : "I45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.31",
      "target" : [{
        "code" : "I45.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.32",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.33",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.34",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.35",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.36",
      "target" : [{
        "code" : "I45.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.37",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.38",
      "target" : [{
        "code" : "I44.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.39",
      "target" : [{
        "code" : "I45.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.40",
      "target" : [{
        "code" : "I45.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.41",
      "target" : [{
        "code" : "I45.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.42",
      "target" : [{
        "code" : "I45.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.43",
      "target" : [{
        "code" : "I45.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.44",
      "target" : [{
        "code" : "I45.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.45",
      "target" : [{
        "code" : "I45.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.46",
      "target" : [{
        "code" : "I44.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.47",
      "target" : [{
        "code" : "I44.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.48",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.49",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.50",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.51",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.52",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.53",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.54",
      "target" : [{
        "code" : "I45.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.55",
      "target" : [{
        "code" : "I45.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.56",
      "target" : [{
        "code" : "I44.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.57",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.58",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.59",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.06.60",
      "target" : [{
        "code" : "I44.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.01",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.06",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.11",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.12",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.14",
      "target" : [{
        "code" : "I47.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.17",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.18",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.19",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.20",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.21",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.22",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.23",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.24",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.25",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.26",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.27",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.28",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.29",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.30",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.31",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.32",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.33",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.34",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.35",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.36",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.37",
      "target" : [{
        "code" : "I45.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.38",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.07.40",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.09.01",
      "target" : [{
        "code" : "Y52.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.09.03",
      "target" : [{
        "code" : "T88.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.10.01",
      "target" : [{
        "code" : "E87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.00",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.01",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.03",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.04",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.05",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.06",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.08",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.09",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.11",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.12",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.13",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.14",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.15",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.16",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.17",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.18",
      "target" : [{
        "code" : "T88.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.19",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.20",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.21",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.22",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.23",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.24",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.25",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.26",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.27",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.28",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.29",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.30",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.31",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.32",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.33",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.35",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.36",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.37",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.38",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.39",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.40",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.41",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.42",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.43",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.44",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.45",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.46",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.47",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.48",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.49",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.51",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.52",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.53",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.54",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.55",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.56",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.57",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.58",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.59",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.60",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.61",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.62",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.63",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.64",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.65",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.66",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.67",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.68",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.70",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.71",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.72",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.73",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.74",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.75",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.80",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.81",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.82",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.83",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.84",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.85",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.86",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.87",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.88",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.89",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.90",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.91",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.92",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.93",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.94",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.95",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.96",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.97",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.98",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.11.99",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.00",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.01",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.02",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.03",
      "target" : [{
        "code" : "I49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.05",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.21",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.22",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.23",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.24",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.25",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.26",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.27",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.28",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.29",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.30",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.31",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.32",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.33",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.34",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.35",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.36",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.37",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.40",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.41",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.42",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.43",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.44",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.45",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.46",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.47",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.48",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.49",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.50",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.51",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.52",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.53",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.54",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.55",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.56",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.57",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.58",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.59",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.60",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.61",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.62",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.63",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.64",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.66",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.67",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.68",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.90",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.12.91",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.20.00",
      "target" : [{
        "code" : "R94.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.00",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.02",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.04",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.05",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.06",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.07",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.20",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.21",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.22",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.23",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.24",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.25",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.26",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.27",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.28",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.29",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.40",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.41",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.42",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.43",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.44",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.45",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.46",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.47",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.48",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "11.23.49",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.35.11",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.35.13",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.35.14",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.35.15",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.35.16",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.35.18",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.70",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.71",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.72",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.73",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.74",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.75",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.76",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.77",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.81",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.87",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "12.44.88",
      "target" : [{
        "code" : "Z45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.51",
      "target" : [{
        "code" : "Z13.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.52",
      "target" : [{
        "code" : "Z13.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.53",
      "target" : [{
        "code" : "Z13.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.54",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.55",
      "target" : [{
        "code" : "Z13.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.56",
      "target" : [{
        "code" : "Z13.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.57",
      "target" : [{
        "code" : "Z13.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.58",
      "target" : [{
        "code" : "Z13.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.61",
      "target" : [{
        "code" : "R93.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.70",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.72",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.73",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.74",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.75",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.76",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.77",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.78",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.79",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.80",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.81",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.01.82",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.00",
      "target" : [{
        "code" : "R68.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.03",
      "target" : [{
        "code" : "E88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.04",
      "target" : [{
        "code" : "A41.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.05",
      "target" : [{
        "code" : "R10.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.06",
      "target" : [{
        "code" : "G93.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.07",
      "target" : [{
        "code" : "R06.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.08",
      "target" : [{
        "code" : "A41.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.09",
      "target" : [{
        "code" : "R06.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.10",
      "target" : [{
        "code" : "R06.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.11",
      "target" : [{
        "code" : "D89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.50",
      "target" : [{
        "code" : "R96.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.51",
      "target" : [{
        "code" : "R96.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.52",
      "target" : [{
        "code" : "R96.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.53",
      "target" : [{
        "code" : "R96.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.54",
      "target" : [{
        "code" : "R95",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.55",
      "target" : [{
        "code" : "R95",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.56",
      "target" : [{
        "code" : "R95",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "13.50.57",
      "target" : [{
        "code" : "R95",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.01",
      "target" : [{
        "code" : "Q99.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.02",
      "target" : [{
        "code" : "Q90.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.03",
      "target" : [{
        "code" : "Q91.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.04",
      "target" : [{
        "code" : "Q91.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.05",
      "target" : [{
        "code" : "Q96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.06",
      "target" : [{
        "code" : "Q98.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.07",
      "target" : [{
        "code" : "Q99.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.09",
      "target" : [{
        "code" : "Q93.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.10",
      "target" : [{
        "code" : "Q93.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.11",
      "target" : [{
        "code" : "Q99.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.12",
      "target" : [{
        "code" : "Q90.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.13",
      "target" : [{
        "code" : "Q91.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.20",
      "target" : [{
        "code" : "Q93.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.21",
      "target" : [{
        "code" : "Q93.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.22",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.23",
      "target" : [{
        "code" : "I45.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.24",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.25",
      "target" : [{
        "code" : "Q87.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.26",
      "target" : [{
        "code" : "Q928",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.27",
      "target" : [{
        "code" : "Q928",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.28",
      "target" : [{
        "code" : "Q928",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.29",
      "target" : [{
        "code" : "Q928",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.01.30",
      "target" : [{
        "code" : "Q93.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.00",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.01",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.02",
      "target" : [{
        "code" : "Q87.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.03",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.04",
      "target" : [{
        "code" : "Q87.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.05",
      "target" : [{
        "code" : "Q87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.06",
      "target" : [{
        "code" : "D82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.07",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.08",
      "target" : [{
        "code" : "Q77.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.09",
      "target" : [{
        "code" : "Q86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.10",
      "target" : [{
        "code" : "G11.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.11",
      "target" : [{
        "code" : "Q87.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.12",
      "target" : [{
        "code" : "Q87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.13",
      "target" : [{
        "code" : "E76.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.14",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.15",
      "target" : [{
        "code" : "Q33.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.16",
      "target" : [{
        "code" : "L81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.17",
      "target" : [{
        "code" : "Q87.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.18",
      "target" : [{
        "code" : "E76.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.19",
      "target" : [{
        "code" : "Q87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.21",
      "target" : [{
        "code" : "E74.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.22",
      "target" : [{
        "code" : "Q82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.23",
      "target" : [{
        "code" : "I45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.24",
      "target" : [{
        "code" : "E76.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.25",
      "target" : [{
        "code" : "Q87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.27",
      "target" : [{
        "code" : "Q87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.28",
      "target" : [{
        "code" : "Q85.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.29",
      "target" : [{
        "code" : "Q93.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.30",
      "target" : [{
        "code" : "Q93.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.32",
      "target" : [{
        "code" : "P35.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.34",
      "target" : [{
        "code" : "G71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.35",
      "target" : [{
        "code" : "E88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.36",
      "target" : [{
        "code" : "E76.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.37",
      "target" : [{
        "code" : "E76.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.38",
      "target" : [{
        "code" : "E76.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.39",
      "target" : [{
        "code" : "E77.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.40",
      "target" : [{
        "code" : "E74.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.41",
      "target" : [{
        "code" : "E75.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.42",
      "target" : [{
        "code" : "E75.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.43",
      "target" : [{
        "code" : "G60.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.44",
      "target" : [{
        "code" : "E83.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.45",
      "target" : [{
        "code" : "E72.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.46",
      "target" : [{
        "code" : "E74.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.47",
      "target" : [{
        "code" : "E74.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.48",
      "target" : [{
        "code" : "E77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.50",
      "target" : [{
        "code" : "G71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.51",
      "target" : [{
        "code" : "G71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.52",
      "target" : [{
        "code" : "G71.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.53",
      "target" : [{
        "code" : "G71.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.54",
      "target" : [{
        "code" : "H49.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.55",
      "target" : [{
        "code" : "G71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.56",
      "target" : [{
        "code" : "G12.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.57",
      "target" : [{
        "code" : "E77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.58",
      "target" : [{
        "code" : "G71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.60",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.61",
      "target" : [{
        "code" : "Q82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.62",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.63",
      "target" : [{
        "code" : "G71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.64",
      "target" : [{
        "code" : "G71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.66",
      "target" : [{
        "code" : "Q44.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.67",
      "target" : [{
        "code" : "Q87.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.68",
      "target" : [{
        "code" : "Q85.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.69",
      "target" : [{
        "code" : "Q87.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.70",
      "target" : [{
        "code" : "E88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.71",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.72",
      "target" : [{
        "code" : "E72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.73",
      "target" : [{
        "code" : "Q87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.74",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.75",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.76",
      "target" : [{
        "code" : "Q04.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.77",
      "target" : [{
        "code" : "E34.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.78",
      "target" : [{
        "code" : "Q87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.79",
      "target" : [{
        "code" : "M08.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.80",
      "target" : [{
        "code" : "M32.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.81",
      "target" : [{
        "code" : "Q76.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.83",
      "target" : [{
        "code" : "Q87.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.84",
      "target" : [{
        "code" : "E34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.85",
      "target" : [{
        "code" : "Q87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.86",
      "target" : [{
        "code" : "Q87.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.87",
      "target" : [{
        "code" : "Q87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.88",
      "target" : [{
        "code" : "Q87.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.89",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.90",
      "target" : [{
        "code" : "E77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.91",
      "target" : [{
        "code" : "Q81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.92",
      "target" : [{
        "code" : "Q79.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.93",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.94",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.95",
      "target" : [{
        "code" : "Q20.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.96",
      "target" : [{
        "code" : "G71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.97",
      "target" : [{
        "code" : "G71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.98",
      "target" : [{
        "code" : "Z82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.02.99",
      "target" : [{
        "code" : "G71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.00",
      "target" : [{
        "code" : "Q89.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.01",
      "target" : [{
        "code" : "Q87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.02",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.03",
      "target" : [{
        "code" : "Q60",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.04",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.05",
      "target" : [{
        "code" : "F79",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.06",
      "target" : [{
        "code" : "E84.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.07",
      "target" : [{
        "code" : "Q79.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.08",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.09",
      "target" : [{
        "code" : "K21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.10",
      "target" : [{
        "code" : "Q79.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.11",
      "target" : [{
        "code" : "Q41.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.12",
      "target" : [{
        "code" : "Q44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.13",
      "target" : [{
        "code" : "Q43.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.14",
      "target" : [{
        "code" : "Q42.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.15",
      "target" : [{
        "code" : "Q63.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.16",
      "target" : [{
        "code" : "Q62.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.17",
      "target" : [{
        "code" : "Q27.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.18",
      "target" : [{
        "code" : "Q61.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.19",
      "target" : [{
        "code" : "Q61.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.20",
      "target" : [{
        "code" : "D56.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.21",
      "target" : [{
        "code" : "D57",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.22",
      "target" : [{
        "code" : "D74.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.23",
      "target" : [{
        "code" : "Q64.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.24",
      "target" : [{
        "code" : "D68.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.25",
      "target" : [{
        "code" : "E10.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.26",
      "target" : [{
        "code" : "Q79.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.27",
      "target" : [{
        "code" : "D18.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.28",
      "target" : [{
        "code" : "D68.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.29",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.30",
      "target" : [{
        "code" : "Q28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.31",
      "target" : [{
        "code" : "Q00.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.32",
      "target" : [{
        "code" : "Q04.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.33",
      "target" : [{
        "code" : "Q02",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.34",
      "target" : [{
        "code" : "G40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.35",
      "target" : [{
        "code" : "H91.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.36",
      "target" : [{
        "code" : "H54.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.37",
      "target" : [{
        "code" : "Q40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.38",
      "target" : [{
        "code" : "Q04.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.39",
      "target" : [{
        "code" : "Q05.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.40",
      "target" : [{
        "code" : "G06.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.41",
      "target" : [{
        "code" : "Q33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.42",
      "target" : [{
        "code" : "I64",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.43",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.44",
      "target" : [{
        "code" : "G45.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.45",
      "target" : [{
        "code" : "Q32.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.46",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.47",
      "target" : [{
        "code" : "Q30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.48",
      "target" : [{
        "code" : "Q31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.49",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.50",
      "target" : [{
        "code" : "J84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.51",
      "target" : [{
        "code" : "E11.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.52",
      "target" : [{
        "code" : "E03.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.53",
      "target" : [{
        "code" : "Q42.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.54",
      "target" : [{
        "code" : "K52.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.55",
      "target" : [{
        "code" : "N13.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.56",
      "target" : [{
        "code" : "I52.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.57",
      "target" : [{
        "code" : "E83.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.58",
      "target" : [{
        "code" : "F500",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.59",
      "target" : [{
        "code" : "E66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.60",
      "target" : [{
        "code" : "Q32.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.61",
      "target" : [{
        "code" : "Q32.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.62",
      "target" : [{
        "code" : "Q32.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.63",
      "target" : [{
        "code" : "Q32.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.64",
      "target" : [{
        "code" : "Q32.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.65",
      "target" : [{
        "code" : "Q32.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.66",
      "target" : [{
        "code" : "Q32.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.67",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.68",
      "target" : [{
        "code" : "Q32.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.69",
      "target" : [{
        "code" : "E88.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.70",
      "target" : [{
        "code" : "T75.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.72",
      "target" : [{
        "code" : "G93.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.73",
      "target" : [{
        "code" : "D86.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.74",
      "target" : [{
        "code" : "E66.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.75",
      "target" : [{
        "code" : "E05.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.76",
      "target" : [{
        "code" : "Z21",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.77",
      "target" : [{
        "code" : "B24",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.78",
      "target" : [{
        "code" : "D582",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.80",
      "target" : [{
        "code" : "M35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.81",
      "target" : [{
        "code" : "M35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.82",
      "target" : [{
        "code" : "M34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.83",
      "target" : [{
        "code" : "M30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.84",
      "target" : [{
        "code" : "M33.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.85",
      "target" : [{
        "code" : "M35.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.87",
      "target" : [{
        "code" : "M45",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.88",
      "target" : [{
        "code" : "M02.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.89",
      "target" : [{
        "code" : "G70.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.90",
      "target" : [{
        "code" : "E14",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.91",
      "target" : [{
        "code" : "Q04.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.92",
      "target" : [{
        "code" : "M35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.93",
      "target" : [{
        "code" : "I63.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.94",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.95",
      "target" : [{
        "code" : "I61.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.96",
      "target" : [{
        "code" : "I67.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.97",
      "target" : [{
        "code" : "G45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.98",
      "target" : [{
        "code" : "I67.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.03.99",
      "target" : [{
        "code" : "I67.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.01",
      "target" : [{
        "code" : "Q79",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.02",
      "target" : [{
        "code" : "Q71.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.03",
      "target" : [{
        "code" : "Q66.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.04",
      "target" : [{
        "code" : "Q67.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.05",
      "target" : [{
        "code" : "Q67.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.06",
      "target" : [{
        "code" : "Q69.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.07",
      "target" : [{
        "code" : "Q78.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.08",
      "target" : [{
        "code" : "Q76.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.09",
      "target" : [{
        "code" : "Q67.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.10",
      "target" : [{
        "code" : "Q70.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.11",
      "target" : [{
        "code" : "Q79",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.12",
      "target" : [{
        "code" : "Q37",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.13",
      "target" : [{
        "code" : "Q76.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.14",
      "target" : [{
        "code" : "Q67.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.15",
      "target" : [{
        "code" : "Q67.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.16",
      "target" : [{
        "code" : "Q76.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.17",
      "target" : [{
        "code" : "Q76.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.18",
      "target" : [{
        "code" : "Q76.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.19",
      "target" : [{
        "code" : "Q67.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.20",
      "target" : [{
        "code" : "G56.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.21",
      "target" : [{
        "code" : "Q36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.22",
      "target" : [{
        "code" : "Q35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.23",
      "target" : [{
        "code" : "M62.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.24",
      "target" : [{
        "code" : "Q75.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.30",
      "target" : [{
        "code" : "N19",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.31",
      "target" : [{
        "code" : "E61.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.32",
      "target" : [{
        "code" : "N19",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.34",
      "target" : [{
        "code" : "Q60.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.35",
      "target" : [{
        "code" : "Q54",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.36",
      "target" : [{
        "code" : "Q52.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.38",
      "target" : [{
        "code" : "G47.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.39",
      "target" : [{
        "code" : "G47.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.40",
      "target" : [{
        "code" : "I67.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.41",
      "target" : [{
        "code" : "I67.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.42",
      "target" : [{
        "code" : "I67.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.43",
      "target" : [{
        "code" : "I60.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.44",
      "target" : [{
        "code" : "I61.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.45",
      "target" : [{
        "code" : "I60.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.46",
      "target" : [{
        "code" : "G43.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.47",
      "target" : [{
        "code" : "T70.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.48",
      "target" : [{
        "code" : "P11.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.50",
      "target" : [{
        "code" : "U07.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.51",
      "target" : [{
        "code" : "U07.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.52",
      "target" : [{
        "code" : "U07.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.53",
      "target" : [{
        "code" : "Q75.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.54",
      "target" : [{
        "code" : "K07.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.55",
      "target" : [{
        "code" : "I67.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.60",
      "target" : [{
        "code" : "F99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.61",
      "target" : [{
        "code" : "F32.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.62",
      "target" : [{
        "code" : "F20.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.63",
      "target" : [{
        "code" : "F39",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.64",
      "target" : [{
        "code" : "F84.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.65",
      "target" : [{
        "code" : "F90.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.66",
      "target" : [{
        "code" : "F40.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.67",
      "target" : [{
        "code" : "Z91.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.68",
      "target" : [{
        "code" : "Z91.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.69",
      "target" : [{
        "code" : "Z91.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.70",
      "target" : [{
        "code" : "Z72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.71",
      "target" : [{
        "code" : "F41.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.72",
      "target" : [{
        "code" : "Z72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.73",
      "target" : [{
        "code" : "Z72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.74",
      "target" : [{
        "code" : "Z72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.77",
      "target" : [{
        "code" : "F10.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.81",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.82",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.83",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.84",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.85",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.86",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.87",
      "target" : [{
        "code" : "Q87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.88",
      "target" : [{
        "code" : "Q870",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.89",
      "target" : [{
        "code" : "D573",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.90",
      "target" : [{
        "code" : "D68.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.91",
      "target" : [{
        "code" : "H271",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.92",
      "target" : [{
        "code" : "E889",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.93",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.94",
      "target" : [{
        "code" : "E14",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.95",
      "target" : [{
        "code" : "E14",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.96",
      "target" : [{
        "code" : "E14",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.04.97",
      "target" : [{
        "code" : "Q79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.00",
      "target" : [{
        "code" : "Q86.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.01",
      "target" : [{
        "code" : "Q86.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.02",
      "target" : [{
        "code" : "P35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.03",
      "target" : [{
        "code" : "P37.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.04",
      "target" : [{
        "code" : "Q86.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.05",
      "target" : [{
        "code" : "Q86.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.06",
      "target" : [{
        "code" : "Q86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.07",
      "target" : [{
        "code" : "O35.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.08",
      "target" : [{
        "code" : "O24.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.09",
      "target" : [{
        "code" : "O99.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.10",
      "target" : [{
        "code" : "P37.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.11",
      "target" : [{
        "code" : "O35.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.12",
      "target" : [{
        "code" : "P37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.13",
      "target" : [{
        "code" : "P37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.14",
      "target" : [{
        "code" : "O99.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.15",
      "target" : [{
        "code" : "O99.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.16",
      "target" : [{
        "code" : "O24.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.17",
      "target" : [{
        "code" : "O24.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.18",
      "target" : [{
        "code" : "O24.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.19",
      "target" : [{
        "code" : "Q86.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.20",
      "target" : [{
        "code" : "Q86.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.21",
      "target" : [{
        "code" : "Q86.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.22",
      "target" : [{
        "code" : "O14",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.40",
      "target" : [{
        "code" : "P96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.41",
      "target" : [{
        "code" : "P39.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.50",
      "target" : [{
        "code" : "Q43.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.51",
      "target" : [{
        "code" : "Q41.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.52",
      "target" : [{
        "code" : "Q41.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.53",
      "target" : [{
        "code" : "Q41.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.54",
      "target" : [{
        "code" : "Q41.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.55",
      "target" : [{
        "code" : "Q41.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.56",
      "target" : [{
        "code" : "Q41.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.57",
      "target" : [{
        "code" : "Q42.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.58",
      "target" : [{
        "code" : "Q42.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.59",
      "target" : [{
        "code" : "Q42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.60",
      "target" : [{
        "code" : "Q04.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.61",
      "target" : [{
        "code" : "Q75.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.62",
      "target" : [{
        "code" : "Q06.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.63",
      "target" : [{
        "code" : "Q05.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.64",
      "target" : [{
        "code" : "G40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.65",
      "target" : [{
        "code" : "G03.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.66",
      "target" : [{
        "code" : "Q42.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.70",
      "target" : [{
        "code" : "Q79.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.80",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.05.81",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.06.01",
      "target" : [{
        "code" : "Q89.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.01",
      "target" : [{
        "code" : "I42.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.02",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.03",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.04",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.05",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.06",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.07",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.08",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.09",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.10",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.11",
      "target" : [{
        "code" : "G71.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.07.30",
      "target" : [{
        "code" : "G71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.01",
      "target" : [{
        "code" : "O35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.02",
      "target" : [{
        "code" : "P83.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.03",
      "target" : [{
        "code" : "P83.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.04",
      "target" : [{
        "code" : "P56.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.05",
      "target" : [{
        "code" : "O40",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.06",
      "target" : [{
        "code" : "O35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.07",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.08",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.09",
      "target" : [{
        "code" : "P29.8†",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.10",
      "target" : [{
        "code" : "O41.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.11",
      "target" : [{
        "code" : "P02.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.12",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.13",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.14",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.15",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.16",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.17",
      "target" : [{
        "code" : "P61.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.18",
      "target" : [{
        "code" : "O36.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.20",
      "target" : [{
        "code" : "Z36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.21",
      "target" : [{
        "code" : "Z36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.22",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.23",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.24",
      "target" : [{
        "code" : "Z36.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.25",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.26",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.27",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.28",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.31",
      "target" : [{
        "code" : "O30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.32",
      "target" : [{
        "code" : "O30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.33",
      "target" : [{
        "code" : "O30.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.34",
      "target" : [{
        "code" : "P05.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.35",
      "target" : [{
        "code" : "P01.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.36",
      "target" : [{
        "code" : "P95",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.37",
      "target" : [{
        "code" : "O04",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.38",
      "target" : [{
        "code" : "P96.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.39",
      "target" : [{
        "code" : "O30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.40",
      "target" : [{
        "code" : "Q89.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.41",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.42",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.43",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.44",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.45",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.46",
      "target" : [{
        "code" : "Q89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.47",
      "target" : [{
        "code" : "O35.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.48",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.49",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.50",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.51",
      "target" : [{
        "code" : "O35.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.52",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.53",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.55",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.56",
      "target" : [{
        "code" : "O35.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.57",
      "target" : [{
        "code" : "O35.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.58",
      "target" : [{
        "code" : "O35.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.59",
      "target" : [{
        "code" : "O35.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.60",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.63",
      "target" : [{
        "code" : "O30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.64",
      "target" : [{
        "code" : "O30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.65",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.66",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.67",
      "target" : [{
        "code" : "P02.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.68",
      "target" : [{
        "code" : "O35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.71",
      "target" : [{
        "code" : "O30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.73",
      "target" : [{
        "code" : "P96.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.75",
      "target" : [{
        "code" : "O30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.76",
      "target" : [{
        "code" : "O30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.78",
      "target" : [{
        "code" : "O30.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.79",
      "target" : [{
        "code" : "Z33",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.90",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.91",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.92",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.93",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.94",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.95",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.96",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.97",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.98",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.10.99",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.00",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.01",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.02",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.03",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.40",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.41",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.42",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.43",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.44",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.45",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.46",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.47",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.48",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.49",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.70",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.71",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.72",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.73",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.74",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.75",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.76",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.77",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.78",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.80",
      "target" : [{
        "code" : "I42.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.81",
      "target" : [{
        "code" : "I42.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.82",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.83",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.84",
      "target" : [{
        "code" : "I42.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.85",
      "target" : [{
        "code" : "I42.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.86",
      "target" : [{
        "code" : "I40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.87",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.88",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.89",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.11.90",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.12.20",
      "target" : [{
        "code" : "P83.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.12.21",
      "target" : [{
        "code" : "P83.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.12.22",
      "target" : [{
        "code" : "P83.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.12.23",
      "target" : [{
        "code" : "P83.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.12.24",
      "target" : [{
        "code" : "P83.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.12.25",
      "target" : [{
        "code" : "P83.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.01",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.02",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.03",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.04",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.05",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.06",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.07",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.08",
      "target" : [{
        "code" : "Q23.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.09",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.10",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.11",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.12",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.13",
      "target" : [{
        "code" : "Q22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.14",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.15",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.16",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.51",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.52",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.53",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.54",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.55",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.56",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.57",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.58",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.59",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.60",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.61",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.13.62",
      "target" : [{
        "code" : "O28.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "14.15.20",
      "target" : [{
        "code" : "O99.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.00",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.01",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.02",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.03",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.04",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.05",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.06",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.07",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.08",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.09",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.10",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.11",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.12",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.13",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.14",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.15",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.16",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.17",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.18",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.19",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.20",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.21",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.22",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.23",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.24",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.25",
      "target" : [{
        "code" : "T80.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.30",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.31",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.32",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.33",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.34",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.35",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.36",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.37",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.38",
      "target" : [{
        "code" : "T88.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.39",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.40",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.51",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.52",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.53",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.00.54",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.00",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.01",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.02",
      "target" : [{
        "code" : "D68.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.03",
      "target" : [{
        "code" : "D68.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.04",
      "target" : [{
        "code" : "D59.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.05",
      "target" : [{
        "code" : "D59.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.06",
      "target" : [{
        "code" : "D59.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.07",
      "target" : [{
        "code" : "D59.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.08",
      "target" : [{
        "code" : "D64.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.09",
      "target" : [{
        "code" : "D72.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.10",
      "target" : [{
        "code" : "D69.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.11",
      "target" : [{
        "code" : "D65",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.12",
      "target" : [{
        "code" : "D59.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.13",
      "target" : [{
        "code" : "D59.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.14",
      "target" : [{
        "code" : "D68.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.15",
      "target" : [{
        "code" : "D68.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.16",
      "target" : [{
        "code" : "D68.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.17",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.18",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.19",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.21",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.22",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.23",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.24",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.25",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.26",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.27",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.28",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.29",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.30",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.31",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.32",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.33",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.34",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.35",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.36",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.37",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.38",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.40",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.41",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.42",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.43",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.44",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.45",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.46",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.47",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.50",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.51",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.52",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.53",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.54",
      "target" : [{
        "code" : "M54.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.60",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.61",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.62",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.63",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.64",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.65",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.66",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.70",
      "target" : [{
        "code" : "D75.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.71",
      "target" : [{
        "code" : "D68.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.72",
      "target" : [{
        "code" : "D68.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.73",
      "target" : [{
        "code" : "D68.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.74",
      "target" : [{
        "code" : "D68.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.75",
      "target" : [{
        "code" : "D69.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.76",
      "target" : [{
        "code" : "D57.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.79",
      "target" : [{
        "code" : "X84",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.80",
      "target" : [{
        "code" : "S05.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.81",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.82",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.83",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.84",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.85",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.86",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.87",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.88",
      "target" : [{
        "code" : "Y62.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.89",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.90",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.91",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.92",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.93",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.94",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.95",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.96",
      "target" : [{
        "code" : "Y62.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.97",
      "target" : [{
        "code" : "F99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.98",
      "target" : [{
        "code" : "T78.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.02.99",
      "target" : [{
        "code" : "X84",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.00",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.02",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.03",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.04",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.05",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.06",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.07",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.08",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.09",
      "target" : [{
        "code" : "M84.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.10",
      "target" : [{
        "code" : "M84.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.11",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.12",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.13",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.14",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.15",
      "target" : [{
        "code" : "L91.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.16",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.17",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.18",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.20",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.21",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.30",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.31",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.32",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.33",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.34",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.35",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.36",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.37",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.38",
      "target" : [{
        "code" : "M79.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.39",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.40",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.41",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.42",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.43",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.44",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.46",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.47",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.48",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.49",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.50",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.51",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.52",
      "target" : [{
        "code" : "J98.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.54",
      "target" : [{
        "code" : "K43.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.55",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.56",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.60",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.61",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.62",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.63",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.64",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.65",
      "target" : [{
        "code" : "M79.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.66",
      "target" : [{
        "code" : "M79.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.67",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.70",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.71",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.72",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.73",
      "target" : [{
        "code" : "K43.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.80",
      "target" : [{
        "code" : "Y44.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.81",
      "target" : [{
        "code" : "Y44.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.82",
      "target" : [{
        "code" : "Y44.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.83",
      "target" : [{
        "code" : "Y44.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.84",
      "target" : [{
        "code" : "Y44.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.85",
      "target" : [{
        "code" : "Y44.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.86",
      "target" : [{
        "code" : "Y44.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.87",
      "target" : [{
        "code" : "Y44.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.88",
      "target" : [{
        "code" : "Y44.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.03.89",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.01",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.02",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.03",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.04",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.05",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.06",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.07",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.08",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.10",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.11",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.12",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.15",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.20",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.25",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.30",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.34",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.35",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.36",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.37",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.38",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.39",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.40",
      "target" : [{
        "code" : "Y83.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.41",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.42",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.51",
      "target" : [{
        "code" : "I87.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.04.52",
      "target" : [{
        "code" : "I80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.01",
      "target" : [{
        "code" : "I28.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.02",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.03",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.04",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.05",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.21",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.22",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.23",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.24",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.25",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.26",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.27",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.28",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.29",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.30",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.31",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.32",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.41",
      "target" : [{
        "code" : "I87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.42",
      "target" : [{
        "code" : "I87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.43",
      "target" : [{
        "code" : "I87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.44",
      "target" : [{
        "code" : "I87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.05.45",
      "target" : [{
        "code" : "I87.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.01",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.02",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.10",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.11",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.12",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.13",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.14",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.15",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.16",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.17",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.18",
      "target" : [{
        "code" : "I51.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.19",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.20",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.21",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.25",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.26",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.27",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.28",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.61",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.62",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.63",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.64",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.65",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.66",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.67",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.68",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.70",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.71",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.72",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.73",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.74",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.75",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.76",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.77",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.78",
      "target" : [{
        "code" : "Q21.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.10.79",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.00",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.01",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.02",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.03",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.04",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.05",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.06",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.07",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.08",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.10",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.11",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.12",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.13",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.14",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.15",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.16",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.20",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.21",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.22",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.11.23",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.00",
      "target" : [{
        "code" : "I34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.01",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.02",
      "target" : [{
        "code" : "I34.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.03",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.04",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.05",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.06",
      "target" : [{
        "code" : "I34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.07",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.08",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.09",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.10",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.11",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.12",
      "target" : [{
        "code" : "Q23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.13",
      "target" : [{
        "code" : "Q23.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.14",
      "target" : [{
        "code" : "I34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.15",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.12.16",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.13.00",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.13.01",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.13.02",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.13.03",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.13.04",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.13.05",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.13.06",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.13.07",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.13.08",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.00",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.01",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.02",
      "target" : [{
        "code" : "I36.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.03",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.04",
      "target" : [{
        "code" : "I36.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.05",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.06",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.07",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.08",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.09",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.10",
      "target" : [{
        "code" : "I36.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.14.11",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.00",
      "target" : [{
        "code" : "I34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.01",
      "target" : [{
        "code" : "Q22.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.02",
      "target" : [{
        "code" : "I34.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.03",
      "target" : [{
        "code" : "Q22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.04",
      "target" : [{
        "code" : "I34.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.05",
      "target" : [{
        "code" : "I34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.06",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.07",
      "target" : [{
        "code" : "I51.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.08",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.09",
      "target" : [{
        "code" : "I34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.10",
      "target" : [{
        "code" : "I34.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.15.11",
      "target" : [{
        "code" : "I36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.16.00",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.16.01",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.16.02",
      "target" : [{
        "code" : "Q21.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.16.03",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.16.04",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.17.12",
      "target" : [{
        "code" : "D59.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.01",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.21",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.23",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.24",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.25",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.26",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.27",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.28",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.29",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.30",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.31",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.32",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.33",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.34",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.71",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.72",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.73",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.74",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.75",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.76",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.77",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.78",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.79",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.80",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.81",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.82",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.83",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.20.84",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.00",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.01",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.21",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.22",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.23",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.24",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.25",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.26",
      "target" : [{
        "code" : "I51.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.27",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.28",
      "target" : [{
        "code" : "I25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.29",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.30",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.31",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.32",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.21.33",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.00",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.01",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.02",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.03",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.04",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.05",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.06",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.07",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.08",
      "target" : [{
        "code" : "Z87.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.10",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.11",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.12",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.13",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.31",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.32",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.33",
      "target" : [{
        "code" : "D59.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.34",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.35",
      "target" : [{
        "code" : "Q21.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.22.36",
      "target" : [{
        "code" : "I51.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.00",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.05",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.06",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.07",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.08",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.09",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.10",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.11",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.15",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.20",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.25",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.26",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.27",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.28",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.29",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.30",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.31",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.32",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.33",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.34",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.24.35",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.00",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.01",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.02",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.03",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.04",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.05",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.06",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.07",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.08",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.09",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.10",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.11",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.12",
      "target" : [{
        "code" : "Q24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.13",
      "target" : [{
        "code" : "I38",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.31",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.32",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.33",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.34",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.25.35",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.00",
      "target" : [{
        "code" : "I37.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.01",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.02",
      "target" : [{
        "code" : "I37.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.03",
      "target" : [{
        "code" : "Q22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.04",
      "target" : [{
        "code" : "I37.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.05",
      "target" : [{
        "code" : "I37.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.06",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.07",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.08",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.09",
      "target" : [{
        "code" : "I37.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.10",
      "target" : [{
        "code" : "I37.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.11",
      "target" : [{
        "code" : "I37.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.12",
      "target" : [{
        "code" : "I37.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.13",
      "target" : [{
        "code" : "I37.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.14",
      "target" : [{
        "code" : "Q22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.15",
      "target" : [{
        "code" : "Q22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.16",
      "target" : [{
        "code" : "I37.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.17",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.30.18",
      "target" : [{
        "code" : "I37.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.01",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.02",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.03",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.04",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.05",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.06",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.07",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.08",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.09",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.21",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.22",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.23",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.24",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.25",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.26",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.41",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.42",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.43",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.44",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.45",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.46",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.47",
      "target" : [{
        "code" : "I28.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.48",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.49",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.50",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.51",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.52",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.53",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.54",
      "target" : [{
        "code" : "Q25.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.55",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.32.56",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.00",
      "target" : [{
        "code" : "I35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.01",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.02",
      "target" : [{
        "code" : "I35.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.03",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.04",
      "target" : [{
        "code" : "I35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.05",
      "target" : [{
        "code" : "I35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.06",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.07",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.08",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.09",
      "target" : [{
        "code" : "I35.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.10",
      "target" : [{
        "code" : "I35.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.11",
      "target" : [{
        "code" : "I35.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.12",
      "target" : [{
        "code" : "I35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.13",
      "target" : [{
        "code" : "Q23.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.14",
      "target" : [{
        "code" : "Q23.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.15",
      "target" : [{
        "code" : "I35.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.16",
      "target" : [{
        "code" : "T82.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.35.17",
      "target" : [{
        "code" : "I35.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.01",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.02",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.03",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.04",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.05",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.06",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.07",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.08",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.09",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.10",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.11",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.12",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.13",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.14",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.15",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.16",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.17",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.18",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.19",
      "target" : [{
        "code" : "Q25.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.20",
      "target" : [{
        "code" : "Q21.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.21",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.22",
      "target" : [{
        "code" : "Q25.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.23",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.24",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.25",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.26",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.27",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.28",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.36.29",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.01",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.02",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.03",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.04",
      "target" : [{
        "code" : "I71.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.05",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.06",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.07",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.08",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.09",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.10",
      "target" : [{
        "code" : "I71.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.11",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.12",
      "target" : [{
        "code" : "I15.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.13",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.14",
      "target" : [{
        "code" : "Q25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.15",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.27",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.70",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.71",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.72",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.73",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.74",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.75",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.76",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.77",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.78",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.79",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.80",
      "target" : [{
        "code" : "I71.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.81",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.82",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.83",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.37.84",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.01",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.02",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.03",
      "target" : [{
        "code" : "I72.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.04",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.05",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.06",
      "target" : [{
        "code" : "Q25.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.07",
      "target" : [{
        "code" : "T82.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.50",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.51",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.52",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.53",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.54",
      "target" : [{
        "code" : "I77.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.55",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.56",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.57",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.58",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.39.59",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.00",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.01",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.02",
      "target" : [{
        "code" : "I24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.03",
      "target" : [{
        "code" : "I24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.04",
      "target" : [{
        "code" : "I24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.05",
      "target" : [{
        "code" : "I20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.06",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.07",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.08",
      "target" : [{
        "code" : "I24.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.09",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.10",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.11",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.12",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.13",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.14",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.15",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.16",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.17",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.18",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.21",
      "target" : [{
        "code" : "T82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.22",
      "target" : [{
        "code" : "Y83.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.23",
      "target" : [{
        "code" : "Y83.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.24",
      "target" : [{
        "code" : "T82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.25",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.26",
      "target" : [{
        "code" : "T82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.27",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.28",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.29",
      "target" : [{
        "code" : "T82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.30",
      "target" : [{
        "code" : "T82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.31",
      "target" : [{
        "code" : "T82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.32",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.33",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.34",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.35",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.36",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.39",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.41",
      "target" : [{
        "code" : "T82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.42",
      "target" : [{
        "code" : "T82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.43",
      "target" : [{
        "code" : "T82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.50",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.51",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.52",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.53",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.54",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.55",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.56",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.57",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.58",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.59",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.60",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.61",
      "target" : [{
        "code" : "I20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.62",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.63",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.64",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.65",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.66",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.67",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.68",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.69",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.70",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.71",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.72",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.73",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.74",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.75",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.76",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.77",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.78",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.79",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.80",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.81",
      "target" : [{
        "code" : "I20.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.82",
      "target" : [{
        "code" : "I77.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.83",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.84",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.41.85",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.00",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.01",
      "target" : [{
        "code" : "Y60.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.02",
      "target" : [{
        "code" : "Y57.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.03",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.04",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.05",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.06",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.07",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.08",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.09",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.11",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.12",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.15",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.16",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.17",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.19",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.20",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.21",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.30",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.31",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.32",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.33",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.34",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.35",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.36",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.37",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.38",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.40",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.41",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.42",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.43",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.44",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.45",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.46",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.47",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.48",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.49",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.50",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.51",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.52",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.53",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.54",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.55",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.56",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.57",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.58",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.59",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.60",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.61",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.62",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.63",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.64",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.65",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.66",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.67",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.68",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.69",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.70",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.71",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.72",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.73",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.74",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.75",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.76",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.77",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.78",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.79",
      "target" : [{
        "code" : "I33.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.91",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.92",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.93",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.95",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.96",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.50.97",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.00",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.01",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.02",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.03",
      "target" : [{
        "code" : "I49.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.04",
      "target" : [{
        "code" : "I44.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.05",
      "target" : [{
        "code" : "I44.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.20",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.21",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.22",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.23",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.24",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.25",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.26",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.27",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.28",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.29",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.30",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.31",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.32",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.33",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.34",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.35",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.36",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.37",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.38",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.39",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.40",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.41",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.42",
      "target" : [{
        "code" : "T82.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.43",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.44",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.45",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.46",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.47",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.48",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.49",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.50",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.51",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.52",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.53",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.54",
      "target" : [{
        "code" : "D59.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.51.55",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.01",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.02",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.10",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.11",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.12",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.13",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.14",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.15",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.16",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.17",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.18",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.19",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.20",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.52.21",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.00",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.01",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.02",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.03",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.04",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.05",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.06",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.07",
      "target" : [{
        "code" : "Y83.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.08",
      "target" : [{
        "code" : "Y83.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.09",
      "target" : [{
        "code" : "Y83.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.10",
      "target" : [{
        "code" : "Y83.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.11",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.12",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.13",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.14",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.15",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.16",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.17",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.18",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.20",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.21",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.22",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.23",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.24",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.55.26",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.00",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.01",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.02",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.03",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.04",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.05",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.06",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.07",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.08",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.09",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.10",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.11",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.12",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.13",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.14",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.15",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.16",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.17",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.18",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.19",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.21",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.22",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.23",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.24",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.25",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.26",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.56.27",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.01",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.02",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.03",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.04",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.05",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.06",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.07",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.08",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.09",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.10",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.11",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.12",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.13",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.14",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.15",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.16",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.17",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.18",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.19",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.20",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.21",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.22",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.23",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.24",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.25",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.26",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.27",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.28",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.30",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.31",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.32",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.33",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.34",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.35",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.36",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.37",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.38",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.39",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.40",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.41",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.42",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.43",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.44",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.51",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.52",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.53",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.54",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.55",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.56",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.57",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.58",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.59",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.60",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.61",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.62",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.63",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.64",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.65",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.66",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.67",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.68",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.69",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.70",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.71",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.72",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.73",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.74",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.75",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.76",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.77",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.78",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.79",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.80",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.81",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.82",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.83",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.84",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.85",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.86",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.87",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.88",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.89",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.90",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.91",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.92",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.93",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.94",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.95",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.96",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.97",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.98",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.57.99",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.01",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.02",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.03",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.04",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.05",
      "target" : [{
        "code" : "T28.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.06",
      "target" : [{
        "code" : "S09.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.07",
      "target" : [{
        "code" : "K22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.08",
      "target" : [{
        "code" : "R13",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.09",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.10",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.11",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.12",
      "target" : [{
        "code" : "K22.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.13",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.14",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.15",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.16",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.17",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.18",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.19",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.20",
      "target" : [{
        "code" : "T88.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.58.21",
      "target" : [{
        "code" : "T56.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.00",
      "target" : [{
        "code" : "Y63.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.01",
      "target" : [{
        "code" : "Y63.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.02",
      "target" : [{
        "code" : "Y63.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.03",
      "target" : [{
        "code" : "T50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.04",
      "target" : [{
        "code" : "T50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.05",
      "target" : [{
        "code" : "Y63.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.06",
      "target" : [{
        "code" : "Y63.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.07",
      "target" : [{
        "code" : "T50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.08",
      "target" : [{
        "code" : "Y65.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.09",
      "target" : [{
        "code" : "T88.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.10",
      "target" : [{
        "code" : "T88.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.11",
      "target" : [{
        "code" : "T88.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.59.12",
      "target" : [{
        "code" : "T88.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.01",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.02",
      "target" : [{
        "code" : "I97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.03",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.04",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.05",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.06",
      "target" : [{
        "code" : "I97.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.20",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.21",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.22",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.60.23",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.01",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.02",
      "target" : [{
        "code" : "T78.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.03",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.04",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.05",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.06",
      "target" : [{
        "code" : "T88.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.07",
      "target" : [{
        "code" : "F43.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.21",
      "target" : [{
        "code" : "T30.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.22",
      "target" : [{
        "code" : "T30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.23",
      "target" : [{
        "code" : "T30.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.24",
      "target" : [{
        "code" : "T30.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.25",
      "target" : [{
        "code" : "T30.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.26",
      "target" : [{
        "code" : "T14.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.27",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.28",
      "target" : [{
        "code" : "Y84.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.29",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.30",
      "target" : [{
        "code" : "L89",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.31",
      "target" : [{
        "code" : "L65.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.32",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.33",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.34",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.35",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.36",
      "target" : [{
        "code" : "T81.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.37",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.38",
      "target" : [{
        "code" : "T81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.39",
      "target" : [{
        "code" : "T81.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.41",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.50",
      "target" : [{
        "code" : "I99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.51",
      "target" : [{
        "code" : "I99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.52",
      "target" : [{
        "code" : "I82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.53",
      "target" : [{
        "code" : "I82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.54",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.55",
      "target" : [{
        "code" : "I82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.56",
      "target" : [{
        "code" : "I80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.57",
      "target" : [{
        "code" : "I82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.58",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.59",
      "target" : [{
        "code" : "I82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.60",
      "target" : [{
        "code" : "I21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.61",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.62",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.63",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.64",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.67.65",
      "target" : [{
        "code" : "I74.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.00",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.01",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.02",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.03",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.04",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.05",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.06",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.07",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.08",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.09",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.10",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.11",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.12",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.13",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.14",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.15",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.16",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.17",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.18",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.19",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.21",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.22",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.23",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.24",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.25",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.26",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.27",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.28",
      "target" : [{
        "code" : "T82.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.50",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.51",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.52",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.53",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.54",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.55",
      "target" : [{
        "code" : "T82.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.56",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.57",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.77.58",
      "target" : [{
        "code" : "T82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.79.01",
      "target" : [{
        "code" : "E88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.79.02",
      "target" : [{
        "code" : "R50.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.79.03",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.00",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.01",
      "target" : [{
        "code" : "E88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.02",
      "target" : [{
        "code" : "T88.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.03",
      "target" : [{
        "code" : "T88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.04",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.05",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.06",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.07",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.08",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.09",
      "target" : [{
        "code" : "T88.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.10",
      "target" : [{
        "code" : "T86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.11",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.12",
      "target" : [{
        "code" : "T80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.13",
      "target" : [{
        "code" : "L65.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.14",
      "target" : [{
        "code" : "T79.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.15",
      "target" : [{
        "code" : "E87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.16",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.17",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.19",
      "target" : [{
        "code" : "T81.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.20",
      "target" : [{
        "code" : "J95.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.21",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.22",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.23",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.24",
      "target" : [{
        "code" : "I26.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.25",
      "target" : [{
        "code" : "R04.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.26",
      "target" : [{
        "code" : "J80",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.27",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.28",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.29",
      "target" : [{
        "code" : "J80",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.30",
      "target" : [{
        "code" : "M62.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.31",
      "target" : [{
        "code" : "J98.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.32",
      "target" : [{
        "code" : "J95.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.33",
      "target" : [{
        "code" : "J95.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.34",
      "target" : [{
        "code" : "J95.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.35",
      "target" : [{
        "code" : "J95.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.36",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.37",
      "target" : [{
        "code" : "I27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.38",
      "target" : [{
        "code" : "I28.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.40",
      "target" : [{
        "code" : "J95.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.41",
      "target" : [{
        "code" : "J95.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.42",
      "target" : [{
        "code" : "Y60.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.44",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.45",
      "target" : [{
        "code" : "J95.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.46",
      "target" : [{
        "code" : "J95.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.47",
      "target" : [{
        "code" : "J81",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.48",
      "target" : [{
        "code" : "J95.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.50",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.51",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.52",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.53",
      "target" : [{
        "code" : "J93.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.54",
      "target" : [{
        "code" : "J93.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.55",
      "target" : [{
        "code" : "J94.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.56",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.57",
      "target" : [{
        "code" : "R09.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.58",
      "target" : [{
        "code" : "J86",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.59",
      "target" : [{
        "code" : "J86",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.61",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.62",
      "target" : [{
        "code" : "J93.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.63",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.64",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.65",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.67",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.68",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.69",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.70",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.71",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.72",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.73",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.74",
      "target" : [{
        "code" : "J95.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.75",
      "target" : [{
        "code" : "J95.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.76",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.77",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.78",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.79",
      "target" : [{
        "code" : "J95.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.80",
      "target" : [{
        "code" : "J95.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.81",
      "target" : [{
        "code" : "J95.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.82",
      "target" : [{
        "code" : "J95.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.83",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.84",
      "target" : [{
        "code" : "J95.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.85",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.86",
      "target" : [{
        "code" : "J95.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.87",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.88",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.90",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.91",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.92",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.93",
      "target" : [{
        "code" : "G52.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.94",
      "target" : [{
        "code" : "G90.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.95",
      "target" : [{
        "code" : "G54.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.96",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.97",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.98",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.80.99",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.01",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.02",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.10",
      "target" : [{
        "code" : "Y65.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.11",
      "target" : [{
        "code" : "Y65.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.12",
      "target" : [{
        "code" : "Y65.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.13",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.14",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.15",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.16",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.17",
      "target" : [{
        "code" : "Y60.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.18",
      "target" : [{
        "code" : "R04.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.19",
      "target" : [{
        "code" : "Y60.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.20",
      "target" : [{
        "code" : "Y65.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.21",
      "target" : [{
        "code" : "Y65.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.22",
      "target" : [{
        "code" : "Y65.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.23",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.24",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.25",
      "target" : [{
        "code" : "T88.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.26",
      "target" : [{
        "code" : "T88.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.27",
      "target" : [{
        "code" : "Y65.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.28",
      "target" : [{
        "code" : "Y60.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.29",
      "target" : [{
        "code" : "R06.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.30",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.31",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.32",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.33",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.34",
      "target" : [{
        "code" : "J95.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.35",
      "target" : [{
        "code" : "J95.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.36",
      "target" : [{
        "code" : "J95.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.41",
      "target" : [{
        "code" : "R68.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.43",
      "target" : [{
        "code" : "R68.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.44",
      "target" : [{
        "code" : "R68.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.45",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.46",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.50",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.51",
      "target" : [{
        "code" : "E87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.52",
      "target" : [{
        "code" : "E87.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.70",
      "target" : [{
        "code" : "G52.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.71",
      "target" : [{
        "code" : "G52.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.72",
      "target" : [{
        "code" : "G52.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.73",
      "target" : [{
        "code" : "G52.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.80",
      "target" : [{
        "code" : "G52.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.81",
      "target" : [{
        "code" : "G52.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.82",
      "target" : [{
        "code" : "G52.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.83",
      "target" : [{
        "code" : "J38.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.81.90",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.00",
      "target" : [{
        "code" : "N99.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.01",
      "target" : [{
        "code" : "N99.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.02",
      "target" : [{
        "code" : "N99.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.03",
      "target" : [{
        "code" : "T88.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.04",
      "target" : [{
        "code" : "N39.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.05",
      "target" : [{
        "code" : "T83.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.06",
      "target" : [{
        "code" : "N99.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.07",
      "target" : [{
        "code" : "N99.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.08",
      "target" : [{
        "code" : "N99.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.09",
      "target" : [{
        "code" : "N99.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.10",
      "target" : [{
        "code" : "N19",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.11",
      "target" : [{
        "code" : "N17",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.12",
      "target" : [{
        "code" : "N17",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.13",
      "target" : [{
        "code" : "N17",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.14",
      "target" : [{
        "code" : "N17",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.15",
      "target" : [{
        "code" : "N17",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.16",
      "target" : [{
        "code" : "N18",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.17",
      "target" : [{
        "code" : "N18",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.18",
      "target" : [{
        "code" : "N18",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.19",
      "target" : [{
        "code" : "N99.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.20",
      "target" : [{
        "code" : "K91.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.21",
      "target" : [{
        "code" : "K92.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.22",
      "target" : [{
        "code" : "K91.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.23",
      "target" : [{
        "code" : "K91.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.24",
      "target" : [{
        "code" : "E46",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.25",
      "target" : [{
        "code" : "R13",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.26",
      "target" : [{
        "code" : "R14",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.27",
      "target" : [{
        "code" : "K56.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.28",
      "target" : [{
        "code" : "K91.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.29",
      "target" : [{
        "code" : "K65.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.30",
      "target" : [{
        "code" : "K55.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.31",
      "target" : [{
        "code" : "K52.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.32",
      "target" : [{
        "code" : "A04.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.33",
      "target" : [{
        "code" : "K90.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.34",
      "target" : [{
        "code" : "K55.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.35",
      "target" : [{
        "code" : "K55.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.36",
      "target" : [{
        "code" : "R18",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.37",
      "target" : [{
        "code" : "I89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.38",
      "target" : [{
        "code" : "K91.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.40",
      "target" : [{
        "code" : "R18",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.41",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.42",
      "target" : [{
        "code" : "K45.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.43",
      "target" : [{
        "code" : "K72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.44",
      "target" : [{
        "code" : "K91.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.45",
      "target" : [{
        "code" : "K72.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.46",
      "target" : [{
        "code" : "K81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.47",
      "target" : [{
        "code" : "K85",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.48",
      "target" : [{
        "code" : "K72.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.49",
      "target" : [{
        "code" : "K74.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.50",
      "target" : [{
        "code" : "G97.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.51",
      "target" : [{
        "code" : "G40.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.52",
      "target" : [{
        "code" : "G40.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.53",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.54",
      "target" : [{
        "code" : "H54.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.55",
      "target" : [{
        "code" : "G93.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.56",
      "target" : [{
        "code" : "G45.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.57",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.58",
      "target" : [{
        "code" : "G82.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.59",
      "target" : [{
        "code" : "G93.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.60",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.61",
      "target" : [{
        "code" : "T81.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.62",
      "target" : [{
        "code" : "I60.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.63",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.64",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.65",
      "target" : [{
        "code" : "G03.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.66",
      "target" : [{
        "code" : "G06.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.67",
      "target" : [{
        "code" : "G40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.68",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.70",
      "target" : [{
        "code" : "G95.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.71",
      "target" : [{
        "code" : "G93.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.72",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.73",
      "target" : [{
        "code" : "N19",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.74",
      "target" : [{
        "code" : "K72.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.75",
      "target" : [{
        "code" : "E16.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.76",
      "target" : [{
        "code" : "I67.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.77",
      "target" : [{
        "code" : "G93.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.78",
      "target" : [{
        "code" : "G04.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.79",
      "target" : [{
        "code" : "G93.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.80",
      "target" : [{
        "code" : "I61.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.81",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.82",
      "target" : [{
        "code" : "G93.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.84",
      "target" : [{
        "code" : "G93.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.85",
      "target" : [{
        "code" : "G45.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.86",
      "target" : [{
        "code" : "I61.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.87",
      "target" : [{
        "code" : "I61.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.88",
      "target" : [{
        "code" : "I63.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.89",
      "target" : [{
        "code" : "G40.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.90",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.91",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.92",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.93",
      "target" : [{
        "code" : "G40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.94",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.95",
      "target" : [{
        "code" : "H54.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.96",
      "target" : [{
        "code" : "H91.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.97",
      "target" : [{
        "code" : "R62.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.98",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.82.99",
      "target" : [{
        "code" : "I61.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.00",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.01",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.02",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.03",
      "target" : [{
        "code" : "I31.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.04",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.05",
      "target" : [{
        "code" : "I31.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.06",
      "target" : [{
        "code" : "I31.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.07",
      "target" : [{
        "code" : "I30.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.08",
      "target" : [{
        "code" : "I30.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.09",
      "target" : [{
        "code" : "I31.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.10",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.11",
      "target" : [{
        "code" : "I31.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.12",
      "target" : [{
        "code" : "I31.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.13",
      "target" : [{
        "code" : "I31.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.14",
      "target" : [{
        "code" : "I31.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.15",
      "target" : [{
        "code" : "I31.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.16",
      "target" : [{
        "code" : "I31.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.17",
      "target" : [{
        "code" : "I31.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.19",
      "target" : [{
        "code" : "I31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.40",
      "target" : [{
        "code" : "G25.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.41",
      "target" : [{
        "code" : "R40.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.42",
      "target" : [{
        "code" : "R40.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.43",
      "target" : [{
        "code" : "R40.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.44",
      "target" : [{
        "code" : "F05.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.45",
      "target" : [{
        "code" : "G97.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.50",
      "target" : [{
        "code" : "K55.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.51",
      "target" : [{
        "code" : "K55.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.52",
      "target" : [{
        "code" : "K91.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.53",
      "target" : [{
        "code" : "K92.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.54",
      "target" : [{
        "code" : "K29.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.55",
      "target" : [{
        "code" : "K52.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.56",
      "target" : [{
        "code" : "K91.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.57",
      "target" : [{
        "code" : "K56.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.58",
      "target" : [{
        "code" : "K56.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.59",
      "target" : [{
        "code" : "K52.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.60",
      "target" : [{
        "code" : "R13",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.61",
      "target" : [{
        "code" : "R13",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.62",
      "target" : [{
        "code" : "K20",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.63",
      "target" : [{
        "code" : "K91.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.64",
      "target" : [{
        "code" : "R13",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.65",
      "target" : [{
        "code" : "R13",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.66",
      "target" : [{
        "code" : "K21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.67",
      "target" : [{
        "code" : "K21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.68",
      "target" : [{
        "code" : "K21.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.69",
      "target" : [{
        "code" : "S36.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.70",
      "target" : [{
        "code" : "K55.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.71",
      "target" : [{
        "code" : "K55.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.72",
      "target" : [{
        "code" : "K52.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.73",
      "target" : [{
        "code" : "I89.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.74",
      "target" : [{
        "code" : "R11",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.75",
      "target" : [{
        "code" : "K55.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.80",
      "target" : [{
        "code" : "T09.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.81",
      "target" : [{
        "code" : "G83.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.82",
      "target" : [{
        "code" : "G81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.83",
      "target" : [{
        "code" : "G82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.84",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.85",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.86",
      "target" : [{
        "code" : "G83.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.87",
      "target" : [{
        "code" : "G81.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.88",
      "target" : [{
        "code" : "G82.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.89",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.90",
      "target" : [{
        "code" : "G40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.91",
      "target" : [{
        "code" : "G40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.92",
      "target" : [{
        "code" : "G40.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.93",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.95",
      "target" : [{
        "code" : "I66.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.96",
      "target" : [{
        "code" : "G62.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.97",
      "target" : [{
        "code" : "F99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.83.99",
      "target" : [{
        "code" : "G97.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.01",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.02",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.03",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.04",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.05",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.06",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.07",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.08",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.09",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.10",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.11",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.12",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.20",
      "target" : [{
        "code" : "E89.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.21",
      "target" : [{
        "code" : "E27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.22",
      "target" : [{
        "code" : "E89.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.23",
      "target" : [{
        "code" : "E27.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.24",
      "target" : [{
        "code" : "E89.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.25",
      "target" : [{
        "code" : "E89.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.26",
      "target" : [{
        "code" : "E23.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.27",
      "target" : [{
        "code" : "E22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.28",
      "target" : [{
        "code" : "E89.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.29",
      "target" : [{
        "code" : "E07.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.30",
      "target" : [{
        "code" : "E89.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.50",
      "target" : [{
        "code" : "K76.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.51",
      "target" : [{
        "code" : "K74.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.84.52",
      "target" : [{
        "code" : "K76.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.00",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.01",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.02",
      "target" : [{
        "code" : "Y65.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.03",
      "target" : [{
        "code" : "Y65.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.04",
      "target" : [{
        "code" : "Y65.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.05",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.06",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.07",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.08",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.09",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.10",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.11",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.12",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.13",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.14",
      "target" : [{
        "code" : "T80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.15",
      "target" : [{
        "code" : "T80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.16",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.17",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.18",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.19",
      "target" : [{
        "code" : "Y65.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.20",
      "target" : [{
        "code" : "Y65.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.21",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.22",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.23",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.24",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.25",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.30",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.31",
      "target" : [{
        "code" : "T80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.32",
      "target" : [{
        "code" : "T80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.33",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.34",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.35",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.36",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.37",
      "target" : [{
        "code" : "Y65.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.38",
      "target" : [{
        "code" : "Y60.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.39",
      "target" : [{
        "code" : "Y60.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.40",
      "target" : [{
        "code" : "Y60.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.41",
      "target" : [{
        "code" : "Y60.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.42",
      "target" : [{
        "code" : "Y60.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.43",
      "target" : [{
        "code" : "Y60.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.44",
      "target" : [{
        "code" : "Y60.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.45",
      "target" : [{
        "code" : "Y60.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.46",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.47",
      "target" : [{
        "code" : "T80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.48",
      "target" : [{
        "code" : "T80.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.88.49",
      "target" : [{
        "code" : "Y65.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.00",
      "target" : [{
        "code" : "T88.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.01",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.02",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.04",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.05",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.06",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.07",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.08",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.09",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.10",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.12",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.13",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.14",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.15",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.16",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.17",
      "target" : [{
        "code" : "T88.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.18",
      "target" : [{
        "code" : "T88.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.19",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.20",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.21",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.22",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.23",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.24",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.25",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.26",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.27",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.28",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.29",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.30",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.31",
      "target" : [{
        "code" : "T88.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.40",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.41",
      "target" : [{
        "code" : "I46.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.42",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.43",
      "target" : [{
        "code" : "Y65.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.44",
      "target" : [{
        "code" : "I31.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.46",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.47",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.48",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.49",
      "target" : [{
        "code" : "T81.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.50",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.51",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.52",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.53",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.54",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.55",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.56",
      "target" : [{
        "code" : "A41.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.57",
      "target" : [{
        "code" : "T81.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.60",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.61",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.62",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.63",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.64",
      "target" : [{
        "code" : "I87.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.65",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.66",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.67",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.68",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.69",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.70",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.71",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.72",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.73",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.74",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.75",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.76",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.77",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.78",
      "target" : [{
        "code" : "I28.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.79",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.90",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.91",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.92",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.93",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.94",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.90.95",
      "target" : [{
        "code" : "T81.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.00",
      "target" : [{
        "code" : "T86.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.01",
      "target" : [{
        "code" : "N18.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.02",
      "target" : [{
        "code" : "R56.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.03",
      "target" : [{
        "code" : "C88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.04",
      "target" : [{
        "code" : "C88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.05",
      "target" : [{
        "code" : "C88.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.06",
      "target" : [{
        "code" : "C80",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.07",
      "target" : [{
        "code" : "T86.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.08",
      "target" : [{
        "code" : "D70",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.09",
      "target" : [{
        "code" : "Y83.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.10",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.11",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.12",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.13",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.14",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.15",
      "target" : [{
        "code" : "R56.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.21",
      "target" : [{
        "code" : "I97.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.22",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.23",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.24",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.25",
      "target" : [{
        "code" : "R94.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.26",
      "target" : [{
        "code" : "R93.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.27",
      "target" : [{
        "code" : "I25.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.28",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.30",
      "target" : [{
        "code" : "T86.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.31",
      "target" : [{
        "code" : "B99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.32",
      "target" : [{
        "code" : "A49.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.33",
      "target" : [{
        "code" : "B34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.34",
      "target" : [{
        "code" : "B25.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.35",
      "target" : [{
        "code" : "B27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.36",
      "target" : [{
        "code" : "B49",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.37",
      "target" : [{
        "code" : "B44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.38",
      "target" : [{
        "code" : "B58.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.39",
      "target" : [{
        "code" : "B59",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.40",
      "target" : [{
        "code" : "B99",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.61",
      "target" : [{
        "code" : "T86.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.62",
      "target" : [{
        "code" : "T86.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.63",
      "target" : [{
        "code" : "T86.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.64",
      "target" : [{
        "code" : "J44.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.65",
      "target" : [{
        "code" : "R94.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.66",
      "target" : [{
        "code" : "T86.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.67",
      "target" : [{
        "code" : "J44.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.68",
      "target" : [{
        "code" : "J44.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.70",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.71",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.72",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.73",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.74",
      "target" : [{
        "code" : "T86.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.75",
      "target" : [{
        "code" : "T86.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.76",
      "target" : [{
        "code" : "T86.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "15.95.77",
      "target" : [{
        "code" : "T86.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.00",
      "target" : [{
        "code" : "J94.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.01",
      "target" : [{
        "code" : "J93.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.02",
      "target" : [{
        "code" : "J93.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.03",
      "target" : [{
        "code" : "J93.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.04",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.05",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.06",
      "target" : [{
        "code" : "J90",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.08",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.09",
      "target" : [{
        "code" : "R09.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.11",
      "target" : [{
        "code" : "J86",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.12",
      "target" : [{
        "code" : "J93.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.21",
      "target" : [{
        "code" : "D15.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.01.22",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.00",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.01",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.02",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.03",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.04",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.05",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.06",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.07",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.08",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.09",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.10",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.11",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.12",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.13",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.14",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.15",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.16",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.17",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.02.18",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.00",
      "target" : [{
        "code" : "D38.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.01",
      "target" : [{
        "code" : "D14.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.02",
      "target" : [{
        "code" : "J22",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.03",
      "target" : [{
        "code" : "J18.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.04",
      "target" : [{
        "code" : "J69.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.05",
      "target" : [{
        "code" : "J98.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.10",
      "target" : [{
        "code" : "J45.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.21",
      "target" : [{
        "code" : "C34.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.22",
      "target" : [{
        "code" : "J98.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.30",
      "target" : [{
        "code" : "J98.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.31",
      "target" : [{
        "code" : "J98.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.32",
      "target" : [{
        "code" : "J98.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.33",
      "target" : [{
        "code" : "J84.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.34",
      "target" : [{
        "code" : "J43",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.35",
      "target" : [{
        "code" : "J15.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.03.36",
      "target" : [{
        "code" : "J12.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.05.11",
      "target" : [{
        "code" : "D15.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.05.12",
      "target" : [{
        "code" : "C38.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.05.13",
      "target" : [{
        "code" : "J98.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.05.14",
      "target" : [{
        "code" : "J98.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.01",
      "target" : [{
        "code" : "T17.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.02",
      "target" : [{
        "code" : "S27.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.03",
      "target" : [{
        "code" : "S27.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.04",
      "target" : [{
        "code" : "S27.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.05",
      "target" : [{
        "code" : "S27.4",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.06",
      "target" : [{
        "code" : "T27.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.07",
      "target" : [{
        "code" : "S27.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.08",
      "target" : [{
        "code" : "T27.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.09",
      "target" : [{
        "code" : "T27.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.12",
      "target" : [{
        "code" : "D38.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.13",
      "target" : [{
        "code" : "D38.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.14",
      "target" : [{
        "code" : "D38.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.15",
      "target" : [{
        "code" : "R04.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.16",
      "target" : [{
        "code" : "R04.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.08.17",
      "target" : [{
        "code" : "R04.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.09.00",
      "target" : [{
        "code" : "J98.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.09.01",
      "target" : [{
        "code" : "J38.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.09.21",
      "target" : [{
        "code" : "Q31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.09.22",
      "target" : [{
        "code" : "Q31.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.01",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.02",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.03",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.04",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.05",
      "target" : [{
        "code" : "J42",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.09",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.10",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.11",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.12",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.13",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.14",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.15",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.16",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.17",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.18",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.19",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.20",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.21",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.22",
      "target" : [{
        "code" : "J98.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.23",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.24",
      "target" : [{
        "code" : "J39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.30",
      "target" : [{
        "code" : "Q32.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.31",
      "target" : [{
        "code" : "D38.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.32",
      "target" : [{
        "code" : "C33",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.33",
      "target" : [{
        "code" : "C78.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.70",
      "target" : [{
        "code" : "Q39.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.71",
      "target" : [{
        "code" : "Q39.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.72",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.73",
      "target" : [{
        "code" : "Q39.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.74",
      "target" : [{
        "code" : "Q39.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.75",
      "target" : [{
        "code" : "Q39.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.76",
      "target" : [{
        "code" : "Q39.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.77",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.78",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.79",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.80",
      "target" : [{
        "code" : "Q32.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.81",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.82",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.83",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.84",
      "target" : [{
        "code" : "Q25.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.85",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.86",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.87",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.88",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.89",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.90",
      "target" : [{
        "code" : "I77.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.91",
      "target" : [{
        "code" : "Q32.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.10.92",
      "target" : [{
        "code" : "Q39.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.12.01",
      "target" : [{
        "code" : "L02.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.12.02",
      "target" : [{
        "code" : "R22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.12.03",
      "target" : [{
        "code" : "J98.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.12.04",
      "target" : [{
        "code" : "L02.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.12.05",
      "target" : [{
        "code" : "E07.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.12.06",
      "target" : [{
        "code" : "L02.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.12.08",
      "target" : [{
        "code" : "G54.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.00",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.01",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.02",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.03",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.04",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.05",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.06",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.07",
      "target" : [{
        "code" : "K44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.20",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.21",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.22",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.23",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.24",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.25",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.26",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.27",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.28",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.13.29",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.15.09",
      "target" : [{
        "code" : "J98.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.00",
      "target" : [{
        "code" : "D37.7",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.01",
      "target" : [{
        "code" : "D13.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.02",
      "target" : [{
        "code" : "C15.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.03",
      "target" : [{
        "code" : "K22.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.04",
      "target" : [{
        "code" : "K22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.05",
      "target" : [{
        "code" : "Q39.6",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.06",
      "target" : [{
        "code" : "K22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.07",
      "target" : [{
        "code" : "K22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.08",
      "target" : [{
        "code" : "K22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.09",
      "target" : [{
        "code" : "K22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.10",
      "target" : [{
        "code" : "K22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.11",
      "target" : [{
        "code" : "K22.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.12",
      "target" : [{
        "code" : "K22.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.13",
      "target" : [{
        "code" : "Q39.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.14",
      "target" : [{
        "code" : "K22.3",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.15",
      "target" : [{
        "code" : "K22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.16",
      "target" : [{
        "code" : "K22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.17",
      "target" : [{
        "code" : "K22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.18",
      "target" : [{
        "code" : "K20",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.20.19",
      "target" : [{
        "code" : "K22.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.29.01",
      "target" : [{
        "code" : "R09.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.29.02",
      "target" : [{
        "code" : "R09.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.29.03",
      "target" : [{
        "code" : "R09.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.29.04",
      "target" : [{
        "code" : "R09.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.01",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.02",
      "target" : [{
        "code" : "J96.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.03",
      "target" : [{
        "code" : "J96.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.04",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.05",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.06",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.07",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.08",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.10",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.11",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.12",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.13",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.14",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.15",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.16",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.17",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.18",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.19",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.20",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.21",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.22",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.23",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.24",
      "target" : [{
        "code" : "J96.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.25",
      "target" : [{
        "code" : "J44.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.30.26",
      "target" : [{
        "code" : "J96.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.01",
      "target" : [{
        "code" : "M89.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.02",
      "target" : [{
        "code" : "M89.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.03",
      "target" : [{
        "code" : "M89.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.04",
      "target" : [{
        "code" : "J86.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.05",
      "target" : [{
        "code" : "D48.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.06",
      "target" : [{
        "code" : "D48.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.07",
      "target" : [{
        "code" : "C79.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.08",
      "target" : [{
        "code" : "C79.5",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.09",
      "target" : [{
        "code" : "S22.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.10",
      "target" : [{
        "code" : "M86.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.11",
      "target" : [{
        "code" : "L02.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.12",
      "target" : [{
        "code" : "M86.9",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.13",
      "target" : [{
        "code" : "M84.1",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.30",
      "target" : [{
        "code" : "S43.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.31",
      "target" : [{
        "code" : "S43.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.32",
      "target" : [{
        "code" : "S43.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.33",
      "target" : [{
        "code" : "D167",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.34",
      "target" : [{
        "code" : "C413",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.35",
      "target" : [{
        "code" : "C795",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.50",
      "target" : [{
        "code" : "D48.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.51",
      "target" : [{
        "code" : "D167",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.52",
      "target" : [{
        "code" : "C413",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.53",
      "target" : [{
        "code" : "C795",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.54",
      "target" : [{
        "code" : "C795",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.55",
      "target" : [{
        "code" : "D48.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.56",
      "target" : [{
        "code" : "D167",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.40.57",
      "target" : [{
        "code" : "C413",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.49.01",
      "target" : [{
        "code" : "T81.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.00",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.01",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.02",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.03",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.04",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.05",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.06",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.07",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.10",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.11",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.12",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.13",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.14",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.15",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.16",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.17",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.18",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "16.50.20",
      "target" : [{
        "code" : "J95.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "Q1.95.07",
      "target" : [{
        "code" : "C78.0",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "Q1.95.08",
      "target" : [{
        "code" : "C79.8",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "Q1.95.11",
      "target" : [{
        "code" : "C45.2",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "Q1.95.16",
      "target" : [{
        "code" : "C73",
        "equivalence" : "relatedto"
      }]
    },
    {
      "code" : "Q5.81.08",
      "target" : [{
        "code" : "P07.1",
        "equivalence" : "relatedto"
      }]
    }]
  }]
}

```
