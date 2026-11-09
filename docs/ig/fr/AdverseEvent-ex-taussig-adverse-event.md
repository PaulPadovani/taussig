# Exemple technique — TAUSSIG — Événement indésirable - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Exemple AdverseEvent: Exemple technique — TAUSSIG — Événement indésirable

Profil: [TAUSSIG — Événement indésirable](StructureDefinition-taussig-adverse-event.md)

Balise: 

**Échelle de gravité**: [TAUSSIG — Échelle de gravité d'un EI: bergersen_c3po](CodeSystem-severity-scale.md#severity-scale-bergersen_c3po) (Bergersen / C3PO)

**Niveau de gravité (1-5)**: 1

**Attribution de l'EI**: [TAUSSIG — Attribution d'un EI: device](CodeSystem-ae-attribution.md#ae-attribution-device) (Dispositif)

**Prise en charge de l'EI**: Geste de rattrapage transcathéter

**Acte de survenue de l'EI**: [Procedure Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques](Procedure-ex-taussig-catheterization.md)

**actuality**: Potential Adverse Event

**event**: Pseudoanévrisme au site d'abord

**subject**: [Patient fictif — exemple technique Unknown, Date de Naissance :2020-01-01](Patient-ex-taussig-patient.md)



## Resource Content

```json
{
  "resourceType" : "AdverseEvent",
  "id" : "ex-taussig-adverse-event",
  "meta" : {
    "profile" : ["https://taussig/fhir/StructureDefinition/taussig-adverse-event"],
    "tag" : [{
      "system" : "https://taussig/fhir/tags",
      "code" : "synthetic-technical-example"
    }]
  },
  "extension" : [{
    "url" : "https://taussig/fhir/StructureDefinition/severityScale",
    "valueCoding" : {
      "system" : "https://taussig/fhir/CodeSystem/severity-scale",
      "code" : "bergersen_c3po"
    }
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/severityLevel",
    "valueInteger" : 1
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/adverseEventAttribution",
    "valueCoding" : {
      "system" : "https://taussig/fhir/CodeSystem/ae-attribution",
      "code" : "device"
    }
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/adverseEventManagement",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "https://taussig/fhir/CodeSystem/ae-management",
        "code" : "transcatheter_bailout"
      }]
    }
  },
  {
    "url" : "https://taussig/fhir/StructureDefinition/adverseEventProcedure",
    "valueReference" : {
      "reference" : "Procedure/ex-taussig-catheterization"
    }
  }],
  "actuality" : "potential",
  "event" : {
    "coding" : [{
      "system" : "https://taussig/fhir/CodeSystem/taussig-adverse-event",
      "code" : "TAUSSIG-AE-0028"
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/ipccc",
      "code" : "15.60.23"
    },
    {
      "system" : "http://hl7.org/fhir/sid/icd-10",
      "code" : "T81.7"
    },
    {
      "system" : "http://snomed.info/sct",
      "code" : "1162761001"
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/echsa",
      "code" : "CP-2019-IC-25"
    }]
  },
  "subject" : {
    "reference" : "Patient/ex-taussig-patient"
  }
}

```
