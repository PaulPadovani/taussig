# TAUSSIG — Propriétés de mesure hémodynamique - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## CodeSystem: TAUSSIG — Propriétés de mesure hémodynamique (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — Propriétés de mesure (binding ClinicalMeasurement.concept)](ValueSet-taussig-measurement-property.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "measurement-property",
  "url" : "https://taussig/fhir/CodeSystem/measurement-property",
  "version" : "0.1.0",
  "name" : "TaussigMeasurementProperty",
  "title" : "TAUSSIG — Propriétés de mesure hémodynamique",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Le QUOI d'une mesure de cathétérisme (modèle décomposé : propriété × site SNOMED). Codes TAUSSIG-local car aucune terminologie standard n'a de propriété intravasculaire générique sans site ; codage SNOMED secondaire générique fourni quand il existe.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 19,
  "property" : [{
    "code" : "unit_ucum",
    "description" : "Unité UCUM canonique",
    "type" : "string"
  },
  {
    "code" : "derivation",
    "description" : "mesuré ou calculé",
    "type" : "string"
  },
  {
    "code" : "site_dependent",
    "description" : "Requiert un body_site SNOMED",
    "type" : "boolean"
  },
  {
    "code" : "snomed_secondary",
    "description" : "Codage SNOMED secondaire générique",
    "type" : "Coding"
  },
  {
    "code" : "family",
    "description" : "Famille physiologique",
    "type" : "string"
  },
  {
    "code" : "value_type",
    "description" : "Type FHIR de la valeur attendue (Quantity | CodeableConcept)",
    "type" : "string"
  },
  {
    "code" : "value_set",
    "description" : "ValueSet canonique des valeurs admises (propriétés qualitatives)",
    "type" : "string"
  }],
  "concept" : [{
    "code" : "pressure_systolic",
    "display" : "Pression systolique",
    "property" : [{
      "code" : "family",
      "valueString" : "Pression"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg]"
    },
    {
      "code" : "derivation",
      "valueString" : "mesuré"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : true
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "251067001",
        "display" : "Cardiovascular pressure"
      }
    }]
  },
  {
    "code" : "pressure_diastolic",
    "display" : "Pression diastolique",
    "property" : [{
      "code" : "family",
      "valueString" : "Pression"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg]"
    },
    {
      "code" : "derivation",
      "valueString" : "mesuré"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : true
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "251067001",
        "display" : "Cardiovascular pressure"
      }
    }]
  },
  {
    "code" : "pressure_mean",
    "display" : "Pression moyenne",
    "property" : [{
      "code" : "family",
      "valueString" : "Pression"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg]"
    },
    {
      "code" : "derivation",
      "valueString" : "mesuré"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : true
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "251067001",
        "display" : "Cardiovascular pressure"
      }
    }]
  },
  {
    "code" : "pressure_end_diastolic",
    "display" : "Pression télédiastolique (ventricule)",
    "property" : [{
      "code" : "family",
      "valueString" : "Pression"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg]"
    },
    {
      "code" : "derivation",
      "valueString" : "mesuré"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : true
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "251067001",
        "display" : "Cardiovascular pressure"
      }
    }]
  },
  {
    "code" : "pressure_wedge",
    "display" : "Pression capillaire pulmonaire bloquée (wedge)",
    "property" : [{
      "code" : "family",
      "valueString" : "Pression"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg]"
    },
    {
      "code" : "derivation",
      "valueString" : "mesuré"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : true
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "251067001",
        "display" : "Cardiovascular pressure"
      }
    }]
  },
  {
    "code" : "oxygen_saturation",
    "display" : "Saturation en oxygène",
    "property" : [{
      "code" : "family",
      "valueString" : "Oxymétrie"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "%"
    },
    {
      "code" : "derivation",
      "valueString" : "mesuré"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : true
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "103228002",
        "display" : "saturation de l'hémoglobine en oxygène"
      }
    }]
  },
  {
    "code" : "flow_pulmonary",
    "display" : "Débit pulmonaire (Qp)",
    "property" : [{
      "code" : "family",
      "valueString" : "Débit"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "L/min"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    }]
  },
  {
    "code" : "flow_systemic",
    "display" : "Débit systémique (Qs)",
    "property" : [{
      "code" : "family",
      "valueString" : "Débit"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "L/min"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    }]
  },
  {
    "code" : "flow_ratio_qp_qs",
    "display" : "Rapport Qp/Qs",
    "property" : [{
      "code" : "family",
      "valueString" : "Débit"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "{ratio}"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    }]
  },
  {
    "code" : "cardiac_output",
    "display" : "Débit cardiaque",
    "property" : [{
      "code" : "family",
      "valueString" : "Débit"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "L/min"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "82799009",
        "display" : "DC - débit cardiaque"
      }
    }]
  },
  {
    "code" : "cardiac_index",
    "display" : "Index cardiaque",
    "property" : [{
      "code" : "family",
      "valueString" : "Débit"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "L/min/m2"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "54993008",
        "display" : "IC - index cardiaque"
      }
    }]
  },
  {
    "code" : "resistance_pulmonary",
    "display" : "Résistance vasculaire pulmonaire (RVP)",
    "property" : [{
      "code" : "family",
      "valueString" : "Résistance"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg].min/L"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "88619007",
        "display" : "résistance vasculaire"
      }
    }]
  },
  {
    "code" : "resistance_pulmonary_indexed",
    "display" : "RVP indexée (RVPi)",
    "property" : [{
      "code" : "family",
      "valueString" : "Résistance"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg].min/L/m2"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "88619007",
        "display" : "résistance vasculaire"
      }
    }]
  },
  {
    "code" : "resistance_systemic",
    "display" : "Résistance vasculaire systémique (RVS)",
    "property" : [{
      "code" : "family",
      "valueString" : "Résistance"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg].min/L"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "88619007",
        "display" : "résistance vasculaire"
      }
    }]
  },
  {
    "code" : "resistance_ratio_pvr_svr",
    "display" : "Rapport RVP/RVS",
    "property" : [{
      "code" : "family",
      "valueString" : "Résistance"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "{ratio}"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    }]
  },
  {
    "code" : "gradient_peak_to_peak",
    "display" : "Gradient pic-à-pic",
    "property" : [{
      "code" : "family",
      "valueString" : "Gradient"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg]"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : true
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "251081004",
        "display" : "Cardiovascular pressure gradient"
      }
    }]
  },
  {
    "code" : "gradient_mean",
    "display" : "Gradient moyen",
    "property" : [{
      "code" : "family",
      "valueString" : "Gradient"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mm[Hg]"
    },
    {
      "code" : "derivation",
      "valueString" : "calculé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : true
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    },
    {
      "code" : "snomed_secondary",
      "valueCoding" : {
        "system" : "http://snomed.info/sct",
        "code" : "251081004",
        "display" : "Cardiovascular pressure gradient"
      }
    }]
  },
  {
    "code" : "oxygen_consumption",
    "display" : "Consommation d'oxygène (VO2)",
    "property" : [{
      "code" : "family",
      "valueString" : "Autre"
    },
    {
      "code" : "unit_ucum",
      "valueString" : "mL/min/m2"
    },
    {
      "code" : "derivation",
      "valueString" : "mesuré/estimé"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : false
    },
    {
      "code" : "value_type",
      "valueString" : "Quantity"
    }]
  },
  {
    "code" : "regurgitation_grade",
    "display" : "Grade de régurgitation",
    "property" : [{
      "code" : "family",
      "valueString" : "Qualitatif"
    },
    {
      "code" : "derivation",
      "valueString" : "mesuré"
    },
    {
      "code" : "site_dependent",
      "valueBoolean" : true
    },
    {
      "code" : "value_type",
      "valueString" : "CodeableConcept"
    },
    {
      "code" : "value_set",
      "valueString" : "https://taussig/fhir/ValueSet/taussig-regurgitation-grade"
    }]
  }]
}

```
