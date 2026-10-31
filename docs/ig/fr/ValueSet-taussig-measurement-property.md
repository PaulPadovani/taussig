# TAUSSIG — Propriétés de mesure (binding ClinicalMeasurement.concept) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## ValueSet: TAUSSIG — Propriétés de mesure (binding ClinicalMeasurement.concept) (Expérimental) 

 **References** 

* [TAUSSIG — Mesure clinique (delta pre/post)](StructureDefinition-taussig-clinical-measurement.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-measurement-property",
  "url" : "https://taussig/fhir/ValueSet/taussig-measurement-property",
  "version" : "0.1.0",
  "name" : "TaussigMeasurementProperty",
  "title" : "TAUSSIG — Propriétés de mesure (binding ClinicalMeasurement.concept)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Working set POC des propriétés de mesure hémodynamique de cathétérisme.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/measurement-property",
      "concept" : [{
        "code" : "pressure_systolic",
        "display" : "Pression systolique"
      },
      {
        "code" : "pressure_diastolic",
        "display" : "Pression diastolique"
      },
      {
        "code" : "pressure_mean",
        "display" : "Pression moyenne"
      },
      {
        "code" : "pressure_end_diastolic",
        "display" : "Pression télédiastolique (ventricule)"
      },
      {
        "code" : "pressure_wedge",
        "display" : "Pression capillaire pulmonaire bloquée (wedge)"
      },
      {
        "code" : "oxygen_saturation",
        "display" : "Saturation en oxygène"
      },
      {
        "code" : "flow_pulmonary",
        "display" : "Débit pulmonaire (Qp)"
      },
      {
        "code" : "flow_systemic",
        "display" : "Débit systémique (Qs)"
      },
      {
        "code" : "flow_ratio_qp_qs",
        "display" : "Rapport Qp/Qs"
      },
      {
        "code" : "cardiac_output",
        "display" : "Débit cardiaque"
      },
      {
        "code" : "cardiac_index",
        "display" : "Index cardiaque"
      },
      {
        "code" : "resistance_pulmonary",
        "display" : "Résistance vasculaire pulmonaire (RVP)"
      },
      {
        "code" : "resistance_pulmonary_indexed",
        "display" : "RVP indexée (RVPi)"
      },
      {
        "code" : "resistance_systemic",
        "display" : "Résistance vasculaire systémique (RVS)"
      },
      {
        "code" : "resistance_ratio_pvr_svr",
        "display" : "Rapport RVP/RVS"
      },
      {
        "code" : "gradient_peak_to_peak",
        "display" : "Gradient pic-à-pic"
      },
      {
        "code" : "gradient_mean",
        "display" : "Gradient moyen"
      },
      {
        "code" : "oxygen_consumption",
        "display" : "Consommation d'oxygène (VO2)"
      },
      {
        "code" : "regurgitation_grade",
        "display" : "Grade de régurgitation"
      }]
    }]
  }
}

```
