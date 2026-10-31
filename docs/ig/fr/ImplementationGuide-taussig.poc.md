#  - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## : 



## Resource Content

```json
{
  "resourceType" : "ImplementationGuide",
  "id" : "taussig.poc",
  "language" : "fr",
  "url" : "https://taussig/fhir/ImplementationGuide/taussig.poc",
  "version" : "0.6.1",
  "name" : "TAUSSIGPOC",
  "title" : "TAUSSIG — Implementation Guide (POC Cathétérisme)",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Profils, extensions et terminologies FHIR R4 de recherche pour représenter le cathétérisme cardiaque congénital selon le modèle TAUSSIG.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "packageId" : "taussig.poc",
  "license" : "CC-BY-4.0",
  "fhirVersion" : ["4.0.1"],
  "dependsOn" : [{
    "id" : "hl7tx",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on HL7 Terminology"
    }],
    "uri" : "http://terminology.hl7.org/ImplementationGuide/hl7.terminology",
    "packageId" : "hl7.terminology.r4",
    "version" : "7.5.0"
  },
  {
    "id" : "hl7ext",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on the HL7 Extension Pack"
    }],
    "uri" : "http://hl7.org/fhir/extensions/ImplementationGuide/hl7.fhir.uv.extensions",
    "packageId" : "hl7.fhir.uv.extensions.r4",
    "version" : "5.4.0"
  },
  {
    "id" : "hl7_fhir_fr_core",
    "uri" : "https://hl7.fr/ig/fhir/core/ImplementationGuide/hl7.fhir.fr.core",
    "packageId" : "hl7.fhir.fr.core",
    "version" : "2.2.0"
  }],
  "definition" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-internal-dependency",
      "valueCode" : "hl7.fhir.uv.tools.r4#1.3.0"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "copyrightyear"
      },
      {
        "url" : "value",
        "valueString" : "2026+"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "releaselabel"
      },
      {
        "url" : "value",
        "valueString" : "trial-use"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "i18n-default-lang"
      },
      {
        "url" : "value",
        "valueString" : "fr"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-version"
      },
      {
        "url" : "value",
        "valueString" : "false"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "default-version"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://mos.esante.gouv.fr/NOS/TRE_R310-CCAM/FHIR/TRE-R310-CCAM"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "autoload-resources"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid-template"
      },
      {
        "url" : "value",
        "valueString" : "template/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid-template"
      },
      {
        "url" : "value",
        "valueString" : "input/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-qa"
      },
      {
        "url" : "value",
        "valueString" : "temp/qa"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-temp"
      },
      {
        "url" : "value",
        "valueString" : "temp/pages"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-output"
      },
      {
        "url" : "value",
        "valueString" : "output"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-suppressed-warnings"
      },
      {
        "url" : "value",
        "valueString" : "input/ignoreWarnings.txt"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-history"
      },
      {
        "url" : "value",
        "valueString" : "https://taussig/fhir/history.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-html"
      },
      {
        "url" : "value",
        "valueString" : "template-page.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-md"
      },
      {
        "url" : "value",
        "valueString" : "template-page-md.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-contact"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-context"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-copyright"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-jurisdiction"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-license"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-publisher"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-wg"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "active-tables"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "fmm-definition"
      },
      {
        "url" : "value",
        "valueString" : "http://hl7.org/fhir/versions.html#maturity"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "propagate-status"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "excludelogbinaryformat"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "tabbed-snapshots"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    }],
    "resource" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ecmoSupport.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ecmoSupport"
      },
      "name" : "Assistance ECMO",
      "description" : "Assistance ECMO pendant la procédure.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-adverseEventAttribution.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/adverseEventAttribution"
      },
      "name" : "Attribution de l'EI",
      "description" : "Cause suspectée d'un événement indésirable (dispositif, abord, anesthésie…).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-measurementCondition.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/measurementCondition"
      },
      "name" : "Condition de mesure",
      "description" : "Condition physiologique/pharmacologique pendant la mesure.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-relatedDiagnosis.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/relatedDiagnosis"
      },
      "name" : "Diagnostic congénital d'origine",
      "description" : "Rattachement d'une condition évolutive à son diagnostic congénital.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Device"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Device-ex-prior-implant.html"
      }],
      "reference" : {
        "reference" : "Device/ex-prior-implant"
      },
      "name" : "Dispositif antérieur fictif — exemple technique",
      "description" : "Cible distincte du lien previousImplant ; illustre uniquement le chaînage de deux identités de dispositif.",
      "exampleBoolean" : true
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-derivationMethod.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/derivationMethod"
      },
      "name" : "Dérivation de la mesure",
      "description" : "Mesure directe ou valeur calculée.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Procedure"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Procedure-ex-taussig-vascular-access.html"
      }],
      "reference" : {
        "reference" : "Procedure/ex-taussig-vascular-access"
      },
      "name" : "Exemple technique — TAUSSIG — Abord vasculaire",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-vascular-access"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "MedicationAdministration"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "MedicationAdministration-ex-taussig-periprocedural-medication-administration.html"
      }],
      "reference" : {
        "reference" : "MedicationAdministration/ex-taussig-periprocedural-medication-administration"
      },
      "name" : "Exemple technique — TAUSSIG — Administration médicamenteuse péri-procédurale",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-periprocedural-medication-administration"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ex-taussig-cath-anthropometry-observation.html"
      }],
      "reference" : {
        "reference" : "Observation/ex-taussig-cath-anthropometry-observation"
      },
      "name" : "Exemple technique — TAUSSIG — Anthropométrie au cathétérisme",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-cath-anthropometry-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Procedure"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Procedure-ex-taussig-catheterization.html"
      }],
      "reference" : {
        "reference" : "Procedure/ex-taussig-catheterization"
      },
      "name" : "Exemple technique — TAUSSIG — Cathétérisme cardiaque (acte pivot)",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-catheterization"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Condition"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Condition-ex-taussig-cardiac-condition-profile.html"
      }],
      "reference" : {
        "reference" : "Condition/ex-taussig-cardiac-condition-profile"
      },
      "name" : "Exemple technique — TAUSSIG — Condition cardiaque évolutive",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-cardiac-condition-profile"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Condition"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Condition-ex-taussig-cardiac-diagnosis.html"
      }],
      "reference" : {
        "reference" : "Condition/ex-taussig-cardiac-diagnosis"
      },
      "name" : "Exemple technique — TAUSSIG — Diagnostic cardiaque congénital",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-cardiac-diagnosis"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ex-taussig-procedure-exposure-observation.html"
      }],
      "reference" : {
        "reference" : "Observation/ex-taussig-procedure-exposure-observation"
      },
      "name" : "Exemple technique — TAUSSIG — Exposition et contraste de procédure",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-procedure-exposure-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Procedure"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Procedure-ex-taussig-interventional-gesture.html"
      }],
      "reference" : {
        "reference" : "Procedure/ex-taussig-interventional-gesture"
      },
      "name" : "Exemple technique — TAUSSIG — Geste interventionnel",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-interventional-gesture"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Procedure"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Procedure-ex-taussig-anesthesia-management.html"
      }],
      "reference" : {
        "reference" : "Procedure/ex-taussig-anesthesia-management"
      },
      "name" : "Exemple technique — TAUSSIG — Gestion anesthésique",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-anesthesia-management"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Device"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Device-ex-taussig-cardiac-implant.html"
      }],
      "reference" : {
        "reference" : "Device/ex-taussig-cardiac-implant"
      },
      "name" : "Exemple technique — TAUSSIG — Implant cardiaque (substrat longitudinal)",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-cardiac-implant"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Device"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Device-ex-taussig-material-used.html"
      }],
      "reference" : {
        "reference" : "Device/ex-taussig-material-used"
      },
      "name" : "Exemple technique — TAUSSIG — Matériel utilisé (consommable de geste)",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-material-used"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ex-taussig-clinical-measurement.html"
      }],
      "reference" : {
        "reference" : "Observation/ex-taussig-clinical-measurement"
      },
      "name" : "Exemple technique — TAUSSIG — Mesure clinique (delta pre/post)",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-clinical-measurement"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Organization"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Organization-ex-taussig-organization.html"
      }],
      "reference" : {
        "reference" : "Organization/ex-taussig-organization"
      },
      "name" : "Exemple technique — TAUSSIG — Organisation",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-organization"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Patient"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Patient-ex-taussig-patient.html"
      }],
      "reference" : {
        "reference" : "Patient/ex-taussig-patient"
      },
      "name" : "Exemple technique — TAUSSIG — Patient",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-patient"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ex-taussig-birth-weight-observation.html"
      }],
      "reference" : {
        "reference" : "Observation/ex-taussig-birth-weight-observation"
      },
      "name" : "Exemple technique — TAUSSIG — Poids de naissance",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-birth-weight-observation"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Practitioner"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Practitioner-ex-taussig-practitioner.html"
      }],
      "reference" : {
        "reference" : "Practitioner/ex-taussig-practitioner"
      },
      "name" : "Exemple technique — TAUSSIG — Praticien",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-practitioner"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Observation-ex-taussig-procedure-outcome.html"
      }],
      "reference" : {
        "reference" : "Observation/ex-taussig-procedure-outcome"
      },
      "name" : "Exemple technique — TAUSSIG — Résultat global de procédure",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-procedure-outcome"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Condition"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Condition-ex-taussig-genetic-syndrome-profile.html"
      }],
      "reference" : {
        "reference" : "Condition/ex-taussig-genetic-syndrome-profile"
      },
      "name" : "Exemple technique — TAUSSIG — Syndrome génétique (covariable de contexte)",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-genetic-syndrome-profile"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Encounter"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "Encounter-ex-taussig-care-episode.html"
      }],
      "reference" : {
        "reference" : "Encounter/ex-taussig-care-episode"
      },
      "name" : "Exemple technique — TAUSSIG — Épisode de soins",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-care-episode"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "AdverseEvent"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "AdverseEvent-ex-taussig-adverse-event.html"
      }],
      "reference" : {
        "reference" : "AdverseEvent/ex-taussig-adverse-event"
      },
      "name" : "Exemple technique — TAUSSIG — Événement indésirable",
      "description" : "Exemple entièrement fictif de sérialisation du profil. Les valeurs servent au contrôle technique ; cet exemple ne décrit aucun patient du corpus et ne constitue pas une validation clinique.",
      "exampleCanonical" : "https://taussig/fhir/StructureDefinition/taussig-adverse-event"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-previousImplant.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/previousImplant"
      },
      "name" : "Implant précédent",
      "description" : "Chaînage valve-in-valve / stent-in-stent vers l'implant précédent.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-ipccc-short-list.html"
      }],
      "reference" : {
        "reference" : "ValueSet/ipccc-short-list"
      },
      "name" : "IPCCC Short List v5.0 (sous-ensemble de saisie)",
      "description" : "Représentation FHIR « IPCCC Short List v5.0 (sous-ensemble de saisie) » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-ipccc.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/ipccc"
      },
      "name" : "IPCCC — International Paediatric and Congenital Cardiac Code (Long List v5.0, AEPC-derived)",
      "description" : "Représentation FHIR des codes, libellés et définitions IPCCC importés dans TAUSSIG ; contenu source conservé.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-ventilationType.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/ventilationType"
      },
      "name" : "Mode ventilatoire",
      "description" : "Mode de ventilation pendant l'anesthésie.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-severityLevel.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/severityLevel"
      },
      "name" : "Niveau de gravité (1-5)",
      "description" : "Grade numérique de gravité selon l'échelle (1 à 5).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-attemptNumber.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/attemptNumber"
      },
      "name" : "Numéro de tentative",
      "description" : "Numéro de tentative avec ce matériel.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-usageSequence.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/usageSequence"
      },
      "name" : "Ordre d'usage",
      "description" : "Ordre d'utilisation du matériel dans le geste.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-procedurePhase.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/procedurePhase"
      },
      "name" : "Phase procédurale (mesure)",
      "description" : "Phase de la procédure à laquelle la mesure est faite (baseline/pre/post).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-implantedExternally.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/implantedExternally"
      },
      "name" : "Posé en externe",
      "description" : "Dispositif posé en chirurgie ou dans un autre centre (hors cathé TAUSSIG).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-adverseEventManagement.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/adverseEventManagement"
      },
      "name" : "Prise en charge de l'EI",
      "description" : "Action de prise en charge de l'événement indésirable pendant le cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-contrastUsed.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/contrastUsed"
      },
      "name" : "Produit de contraste utilisé",
      "description" : "Indique si un produit de contraste iodé a été injecté pendant le cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-indicationRole.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/indicationRole"
      },
      "name" : "Rôle de l'indication",
      "description" : "Rôle d'une condition évolutive comme indication d'un cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-diagnosisRole.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/diagnosisRole"
      },
      "name" : "Rôle du diagnostic",
      "description" : "Rôle d'un diagnostic congénital comme indication d'un cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-introducerSize.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/introducerSize"
      },
      "name" : "Taille d'introducteur",
      "description" : "Calibre de l'introducteur (French/Charrière).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-vascular-access.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-vascular-access"
      },
      "name" : "TAUSSIG — Abord vasculaire",
      "description" : "Abord vasculaire du cathétérisme. Voie d'abord (enum TAUSSIG) en code ; calibre d'introducteur, écho-guidage et latéralité en extensions/bodySite.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ConceptMap"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ConceptMap-access-type-to-snomed.html"
      }],
      "reference" : {
        "reference" : "ConceptMap/access-type-to-snomed"
      },
      "name" : "TAUSSIG — AccessTypeToSnomed",
      "description" : "Correspondance du CodeSystem TAUSSIG access-type vers les vaisseaux SNOMED CT.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-periprocedural-medication-administration.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-periprocedural-medication-administration"
      },
      "name" : "TAUSSIG — Administration médicamenteuse péri-procédurale",
      "description" : "Antibioprophylaxie et anticoagulation administrées pendant le cathétérisme, codables en ATC quand disponible.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-cath-anthropometry-observation.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-cath-anthropometry-observation"
      },
      "name" : "TAUSSIG — Anthropométrie au cathétérisme",
      "description" : "Poids, taille et surface corporelle au moment du cathétérisme, portés par des Observations liées à la Procedure.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-ae-attribution.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/ae-attribution"
      },
      "name" : "TAUSSIG — Attribution d'un EI",
      "description" : "Cause suspectée d'un événement indésirable.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-death-attribution.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/death-attribution"
      },
      "name" : "TAUSSIG — Attribution du décès péri-procédural",
      "description" : "Imputabilité d'un décès survenu en péri-procédure (ProcedureOutcome).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-ae-attribution-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/ae-attribution-vs"
      },
      "name" : "TAUSSIG — Attributions d'EI",
      "description" : "Jeu de valeurs « TAUSSIG — Attributions d'EI » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-death-attribution-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/death-attribution-vs"
      },
      "name" : "TAUSSIG — Attributions du décès",
      "description" : "Jeu de valeurs « TAUSSIG — Attributions du décès » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-condition-axis.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/condition-axis"
      },
      "name" : "TAUSSIG — Axe d'une condition cardiaque",
      "description" : "Distingue le diagnostic congénital des conditions évolutives.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-cardiac-condition.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-cardiac-condition"
      },
      "name" : "TAUSSIG — CardiacCondition (lésions résiduelles/acquises/post-chir)",
      "description" : "Working set des conditions cardiaques évolutives de la POC (distinct du diagnostic congénital figé) : 61 lésions résiduelles/acquises codées en IPCCC, plus 13 états d'étape chirurgicale codés en ECHSA — l'IPCCC ne code pas l'état « status post » d'un montage (Fontan, Glenn, MBTS…), d'où un ValueSet multi-systèmes. ICD-10 = donnée dérivée (crossmap IPCCC). Le typage residual/acquired/post-chir est un choix clinicien à la saisie (CardiacCondition.condition_type), pas une propriété du code.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-catheterization.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-catheterization"
      },
      "name" : "TAUSSIG — Cathétérisme cardiaque (acte pivot)",
      "description" : "Acte de cathétérisme. Intention (diagnostique/interventionnel/hybride) en category ; codage SNOMED (interop) + CCAM (administratif FR) + ECHSA (registre). Dosimétrie/anthropométrie portées par Observations liées.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-genetic-syndrome-category.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/genetic-syndrome-category"
      },
      "name" : "TAUSSIG — Catégorie de syndrome génétique",
      "description" : "Catégorie étiologique d'un syndrome génétique.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-ccam.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/ccam"
      },
      "name" : "TAUSSIG — CCAM (sous-ensemble cath congénital)",
      "description" : "Sous-ensemble candidat de la CCAM v82 (ATIH) pour le cathétérisme congénital. Fragment : extrait des actes percutanés cœur/gros vaisseaux. CCAM = primaire administratif ; SNOMED procédure = précision (axe séparé).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-ipccc-icd10-targets.html"
      }],
      "reference" : {
        "reference" : "ValueSet/ipccc-icd10-targets"
      },
      "name" : "TAUSSIG — Cibles CIM-10 de la correspondance IPCCC",
      "description" : "Codes principaux et produits complémentaires de la table de correspondance normalisée. Leur existence est contrôlée contre le service terminologique ; cela ne prouve pas une équivalence clinique exacte.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-anthropometry-observation-code-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-anthropometry-observation-code-vs"
      },
      "name" : "TAUSSIG — Codes d'anthropométrie per-cathétérisme",
      "description" : "Codes LOINC utilisés pour poids, taille et surface corporelle au moment du cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-procedure-exposure-observation-code-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-procedure-exposure-observation-code-vs"
      },
      "name" : "TAUSSIG — Codes d'exposition et contraste",
      "description" : "Codes des observations quantitatives liées à l'exposition radiologique et au contraste.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-adverse-event-snomed.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-adverse-event-snomed"
      },
      "name" : "TAUSSIG — Complications / événements indésirables (SNOMED CT, interopérabilité)",
      "description" : "Working set SNOMED CT des complications péri-procédurales du cathétérisme congénital (couche d'interopérabilité FHIR AdverseEvent.event / Condition.code). Résolu sur le SMT depuis les complications IPCCC/EPCC retenues. À valider cliniquement.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-adverse-event-ipccc.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-adverse-event-ipccc"
      },
      "name" : "TAUSSIG — Complications péri-procédurales (IPCCC)",
      "description" : "Axe IPCCC des événements indésirables du cathétérisme congénital retenus pour la POC. La granularité IPCCC est plus grossière que la curation française : plusieurs libellés cliniques peuvent partager un même code (regroupés ici sous le libellé IPCCC officiel).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-anesthesia-type.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/anesthesia-type"
      },
      "name" : "TAUSSIG — Complément pour le type d’anesthésie",
      "description" : "Code local pour l’absence explicite d’anesthésie. Une donnée manquante ne signifie pas aucune anesthésie. Aucune absence d’équivalent SNOMED n’est affirmée.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-taussig-local.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/taussig-local"
      },
      "name" : "TAUSSIG — Concepts locaux (sans équivalent de référence)",
      "description" : "Concepts nécessaires au modèle et vérifiés absents des terminologies de référence. Chaque code documente l'absence constatée.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-cardiac-condition-profile.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-cardiac-condition-profile"
      },
      "name" : "TAUSSIG — Condition cardiaque évolutive",
      "description" : "Statut actuel de la cardiopathie : état d'étape chirurgicale (status post ECHSA) OU lésion résiduelle/acquise. Codage IPCCC primaire + CIM-10 + SNOMED + ECHSA. Type (residual/acquired/post_surgical) = choix clinicien d'instance.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-measurement-condition.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/measurement-condition"
      },
      "name" : "TAUSSIG — Condition de mesure",
      "description" : "Condition physiologique/pharmacologique pendant la mesure.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ConceptMap"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ConceptMap-measurement-condition-to-snomed.html"
      }],
      "reference" : {
        "reference" : "ConceptMap/measurement-condition-to-snomed"
      },
      "name" : "TAUSSIG — Condition de mesure -> SNOMED",
      "description" : "Représentation FHIR « TAUSSIG — Condition de mesure -> SNOMED » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-measurement-condition-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/measurement-condition-vs"
      },
      "name" : "TAUSSIG — Conditions de mesure",
      "description" : "Jeu de valeurs « TAUSSIG — Conditions de mesure » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-cardiac-diagnosis.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-cardiac-diagnosis"
      },
      "name" : "TAUSSIG — Diagnostic cardiaque congénital",
      "description" : "Diagnostic congénital (substrat figé). Double codage CIM-11 (classification, primaire) + IPCCC (précision clinique) ; CIM-10 dérivé, ECHSA optionnel. Le verrouillage (is_locked) est porté par verificationStatus=confirmed + Provenance.recorded.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-diagnosis-icd11.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-diagnosis-icd11"
      },
      "name" : "TAUSSIG — Diagnostics congénitaux (CIM-11 MMS)",
      "description" : "Axe de classification diagnostique de la POC : énumération des entités CIM-11 MMS retenues pour les cardiopathies congénitales, avec le libellé français officiel de l'OMS. Liaison extensible : un code CIM-11 hors liste reste admis, mais l'autocomplétion et les statistiques se font sur ce working set curé.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-diagnosis-ipccc.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-diagnosis-ipccc"
      },
      "name" : "TAUSSIG — Diagnostics congénitaux (IPCCC)",
      "description" : "Équivalents IPCCC des diagnostics congénitaux du working set CIM-11 (codage parallèle de précision clinique). Un même code IPCCC peut répondre à plusieurs entités CIM-11.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-closure-device-type.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/closure-device-type"
      },
      "name" : "TAUSSIG — Dispositifs de fermeture par cible",
      "description" : "Catégories de dispositifs de fermeture distinguées par cible. Codes locaux TAUSSIG ; aucune équivalence SNOMED spécifique n'est affirmée.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-derivation-method-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/derivation-method-vs"
      },
      "name" : "TAUSSIG — Dérivation",
      "description" : "Jeu de valeurs « TAUSSIG — Dérivation » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-derivation-method.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/derivation-method"
      },
      "name" : "TAUSSIG — Dérivation d'une mesure",
      "description" : "Mesure directe ou valeur calculée.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-echsa.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/echsa"
      },
      "name" : "TAUSSIG — ECHSA (nomenclature EACTS-ECHSA, représentation POC)",
      "description" : "Représentation FHIR, pour le POC TAUSSIG, de la nomenclature de la base ECHSA (European Congenital Heart Surgeons Association, dérivée EACTS-STS/IPCCC). Codes extraits du dictionnaire maître `fields-dicts.xls` (onglet factors). Classes : diagnosis, procedure, status post, complication, aae, nca, gprf. Usage recherche ; codes candidats à valider cliniquement.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-procedure-exposure-observation.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-procedure-exposure-observation"
      },
      "name" : "TAUSSIG — Exposition et contraste de procédure",
      "description" : "Temps de fluoroscopie, produit dose-surface et volume de contraste portés par des Observations quantitatives liées au cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ConceptMap"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ConceptMap-genetic-syndrome-to-icd11.html"
      }],
      "reference" : {
        "reference" : "ConceptMap/genetic-syndrome-to-icd11"
      },
      "name" : "TAUSSIG — GeneticSyndromeToIcd11",
      "description" : "Crossmap Orphanet -> ICD-11 des syndromes génétiques TAUSSIG (références officielles Orphanet product1).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-interventional-gesture.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-interventional-gesture"
      },
      "name" : "TAUSSIG — Geste interventionnel",
      "description" : "Geste interventionnel ciblé (unité de l'effet pre/post). Quadruple codage IPCCC (pivot) + SNOMED (interop) + CCAM + ECHSA ; structure cible en bodySite (SNOMED sites de mesure) ; résultat en outcome.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-procedure-ipccc.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-procedure-ipccc"
      },
      "name" : "TAUSSIG — Gestes de cathétérisme (IPCCC)",
      "description" : "Axe IPCCC des gestes de cathétérisme congénital retenus pour la POC (gestes diagnostiques, interventionnels et hybrides). Remplace, pour l'autocomplétion, la liaison à la short list IPCCC de 1 822 codes, inexploitable comme menu.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-anesthesia-management.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-anesthesia-management"
      },
      "name" : "TAUSSIG — Gestion anesthésique",
      "description" : "Prise en charge anesthésique du cathétérisme. Type d'anesthésie en code (générale, sédation, locale : SNOMED CT ; aucune anesthésie explicite : complément TAUSSIG) ; ventilation & ECMO en extensions ; antibioprophylaxie/anticoagulant portés par MedicationAdministration (ATC).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-ae-management.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/ae-management"
      },
      "name" : "TAUSSIG — Gestion de la complication (prise en charge péri-procédurale)",
      "description" : "Variable de prise en charge d'un événement indésirable de cathétérisme congénital (échelle d'escalade). Ancrage IPCCC/EPCC chap. 15 + SNOMED procédure. À valider cliniquement.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-regurgitation-grade.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-regurgitation-grade"
      },
      "name" : "TAUSSIG — Grade de régurgitation (valeurs codées)",
      "description" : "Échelle qualitative de la régurgitation valvulaire, valeur de la propriété de mesure regurgitation_grade (Observation.valueCodeableConcept). Qualifier values SNOMED CT dont l'existence et le libellé FR ont été vérifiés sur le SMT ; le choix de l'échelle reste à valider cliniquement.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-cardiac-implant.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-cardiac-implant"
      },
      "name" : "TAUSSIG — Implant cardiaque (substrat longitudinal)",
      "description" : "Dispositif implanté persistant (conduit, valve, stent, occluder…). État clinique courant en extension (Device.status ne couvre pas functional/degenerated/…) ; chaînage valve-in-valve ; site anatomique SNOMED ; UDI.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-cath-intent.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/cath-intent"
      },
      "name" : "TAUSSIG — Intention du cathétérisme",
      "description" : "Intention globale de la procédure de cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-cath-intent-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/cath-intent-vs"
      },
      "name" : "TAUSSIG — Intentions de cathétérisme",
      "description" : "Jeu de valeurs « TAUSSIG — Intentions de cathétérisme » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ConceptMap"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ConceptMap-ipccc-to-icd10.html"
      }],
      "reference" : {
        "reference" : "ConceptMap/ipccc-to-icd10"
      },
      "name" : "TAUSSIG — IPCCC vers CIM-10, normalisation de la source AEPC 5.0",
      "description" : "Correspondances de classification issues de la Long List AEPC 5.0 du 1er mai 2025, normalisées pour l’édition OMS 2019-covid-expanded. Les notations source et les colonnes additionnelles sont conservées dans les commentaires. Les signes dagger/asterisk ne sont pas incorporés au code exporté. Les rapprochements restent relatedto, sans équivalence exacte présumée. Les produits additional-code doivent être conservés comme codes complémentaires distincts, et non comme synonymes interchangeables. La dépendance documented-kidney-disease désigne une condition rénale déjà documentée avant conversion ; elle ne crée aucune obligation de saisie ni aucun stade rénal par défaut. Les colonnes additionnelles historiques non structurées ne déclenchent pas de conversion automatique.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-laterality-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/laterality-vs"
      },
      "name" : "TAUSSIG — Latéralité (gauche/droite)",
      "description" : "Côté anatomique de l'abord vasculaire (SNOMED CT).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-material-used.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-material-used"
      },
      "name" : "TAUSSIG — Matériel utilisé (consommable de geste)",
      "description" : "Matériel consommé pendant un geste (ballon, stent, dispositif, consommable). Catégorie en type ; caractéristiques techniques (diamètre, longueur…) en Device.property (LOINC/UCUM) ; UDI ; séquence/tentative d'usage en extensions sur Procedure.usedReference.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-clinical-measurement.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-clinical-measurement"
      },
      "name" : "TAUSSIG — Mesure clinique (delta pre/post)",
      "description" : "Mesure hémodynamique/fonctionnelle. Modèle post-coordonné : propriété (CodeSystem TAUSSIG) = la grandeur, site SNOMED = le lieu. Phase procédurale + geste lié = mécanisme du gradient pre/post (cœur du POC). Modalité en method ; condition & dérivation en extensions.\n\nVALEUR ATTENDUE : elle dépend de la propriété, pas du profil. Chaque concept du CodeSystem measurement-property porte une propriété `value_type` (Quantity | CodeableConcept) et, pour les grandeurs qualitatives, une propriété `value_set` donnant le ValueSet canonique des valeurs admises — p. ex. `regurgitation_grade` -> https://taussig/fhir/ValueSet/taussig-regurgitation-grade (grades SNOMED trace / légère / modérée / sévère). Ce contrat est déclaré au niveau de la propriété et non par un binding FHIR sur `value[x]` : en R4, un binding sur ce choix s'appliquerait aussi aux Quantity et imposerait à toutes les propriétés le jeu de valeurs d'une seule d'entre elles.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-measurement-modality.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/measurement-modality"
      },
      "name" : "TAUSSIG — Modalité de mesure",
      "description" : "Modalité d'acquisition d'une mesure.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ConceptMap"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ConceptMap-measurement-modality-to-snomed.html"
      }],
      "reference" : {
        "reference" : "ConceptMap/measurement-modality-to-snomed"
      },
      "name" : "TAUSSIG — Modalité de mesure -> SNOMED (Observation.method)",
      "description" : "Représentation FHIR « TAUSSIG — Modalité de mesure -> SNOMED (Observation.method) » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-measurement-modality-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/measurement-modality-vs"
      },
      "name" : "TAUSSIG — Modalités de mesure",
      "description" : "Jeu de valeurs « TAUSSIG — Modalités de mesure » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-ventilation-type.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/ventilation-type"
      },
      "name" : "TAUSSIG — Mode ventilatoire",
      "description" : "Mode de ventilation pendant l'anesthésie.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-ventilation-type-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/ventilation-type-vs"
      },
      "name" : "TAUSSIG — Modes ventilatoires",
      "description" : "Jeu de valeurs « TAUSSIG — Modes ventilatoires » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-bsa-method.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/bsa-method"
      },
      "name" : "TAUSSIG — Méthode de calcul de surface corporelle",
      "description" : "Formule utilisée pour calculer la surface corporelle (BSA).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-genetic-method.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/genetic-method"
      },
      "name" : "TAUSSIG — Méthode de confirmation génétique",
      "description" : "Méthode ayant confirmé/écarté le syndrome (Observation.method).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-bsa-method-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/bsa-method-vs"
      },
      "name" : "TAUSSIG — Méthodes de calcul BSA",
      "description" : "Jeu de valeurs « TAUSSIG — Méthodes de calcul BSA » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-procedure-observation-code.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/procedure-observation-code"
      },
      "name" : "TAUSSIG — Observations liées au cathétérisme",
      "description" : "Codes locaux transitoires pour les observations de procédure dont le code LOINC reste à vérifier.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-organization.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-organization"
      },
      "name" : "TAUSSIG — Organisation",
      "description" : "Établissement de santé, dérivé de FR Core Organization (établissement). FINESS porté par les slices FR Core idNatSt (urn:oid:1.2.250.1.71.4.2.2) et finess (https://finess.esante.gouv.fr).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-patient.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-patient"
      },
      "name" : "TAUSSIG — Patient",
      "description" : "Patient de cardiopathie congénitale, dérivé de FR Core Patient (identifiants/extensions FR hérités). Les slices d'identité nationale (INS-NIR/NIA) sont portées par FR Core ; pour une identité INS *qualifiée*, utiliser le profil strict fr-core-patient-ins. Poids de naissance porté par une Observation dédiée (LOINC 8339-4).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ConceptMap"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ConceptMap-measurement-phase-to-snomed.html"
      }],
      "reference" : {
        "reference" : "ConceptMap/measurement-phase-to-snomed"
      },
      "name" : "TAUSSIG — Phase de mesure -> SNOMED (codage grossier ; sémantique fine = extension procedurePhase + related_gesture_id)",
      "description" : "Représentation FHIR « TAUSSIG — Phase de mesure -> SNOMED (codage grossier ; sémantique fine = extension procedurePhase + related_gesture_id) » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-procedure-phase.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/procedure-phase"
      },
      "name" : "TAUSSIG — Phase procédurale d'une mesure",
      "description" : "Référentiel temporel pour le delta pre/post (cœur de la POC).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-procedure-phase-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/procedure-phase-vs"
      },
      "name" : "TAUSSIG — Phases procédurales",
      "description" : "Jeu de valeurs « TAUSSIG — Phases procédurales » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-birth-weight-observation.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-birth-weight-observation"
      },
      "name" : "TAUSSIG — Poids de naissance",
      "description" : "Poids de naissance porté par une Observation dédiée (LOINC 8339-4), liée au patient.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-practitioner.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-practitioner"
      },
      "name" : "TAUSSIG — Praticien",
      "description" : "Praticien (opérateur, valideur), dérivé de FR Core Practitioner. L'identifiant RPPS est porté par la slice FR Core idNatPs (urn:oid:1.2.250.1.71.4.2.1) — plus besoin de la redéclarer.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-ae-management.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-ae-management"
      },
      "name" : "TAUSSIG — Prise en charge d'un événement indésirable",
      "description" : "Modes de prise en charge d'un EI pendant le cathétérisme (CodeSystem TAUSSIG ae-management).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-procedure-snomed.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-procedure-snomed"
      },
      "name" : "TAUSSIG — Procédures (SNOMED CT, interopérabilité)",
      "description" : "Working set SNOMED CT des gestes de cathétérisme congénital (couche d'interopérabilité FHIR Procedure.code). Résolu sur le SMT depuis les gestes IPCCC retenus. À valider cliniquement.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-measurement-property.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-measurement-property"
      },
      "name" : "TAUSSIG — Propriétés de mesure (binding ClinicalMeasurement.concept)",
      "description" : "Working set POC des propriétés de mesure hémodynamique de cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-measurement-property.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/measurement-property"
      },
      "name" : "TAUSSIG — Propriétés de mesure hémodynamique",
      "description" : "Le QUOI d'une mesure de cathétérisme (modèle décomposé : propriété × site SNOMED). Codes TAUSSIG-local car aucune terminologie standard n'a de propriété intravasculaire générique sans site ; codage SNOMED secondaire générique fourni quand il existe.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-gesture-result.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/gesture-result"
      },
      "name" : "TAUSSIG — Résultat d'un geste / d'un matériel",
      "description" : "Résultat au niveau geste et tentative matériel.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-procedure-outcome.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-procedure-outcome"
      },
      "name" : "TAUSSIG — Résultat global de procédure",
      "description" : "Synthèse du résultat procédural : succès hémodynamique, lésion résiduelle, imputabilité d'un décès péri-procédural (component). NB : succès TECHNIQUE porté par Procedure.outcome (geste/cathétérisme) ; décès porté par Patient.deceased[x].",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-gesture-result-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/gesture-result-vs"
      },
      "name" : "TAUSSIG — Résultats de geste",
      "description" : "Jeu de valeurs « TAUSSIG — Résultats de geste » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-diagnosis-role.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/diagnosis-role"
      },
      "name" : "TAUSSIG — Rôle d'une indication/diagnostic",
      "description" : "Rôle de l'indication d'un cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-periprocedural-medication-purpose.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/periprocedural-medication-purpose"
      },
      "name" : "TAUSSIG — Rôle du médicament péri-procédural",
      "description" : "Rôle clinique d'une administration médicamenteuse pendant le cathétérisme.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-diagnosis-role-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/diagnosis-role-vs"
      },
      "name" : "TAUSSIG — Rôles d'indication",
      "description" : "Jeu de valeurs « TAUSSIG — Rôles d'indication » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-periprocedural-medication-purpose-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/periprocedural-medication-purpose-vs"
      },
      "name" : "TAUSSIG — Rôles des médicaments péri-procéduraux",
      "description" : "Jeu de valeurs « TAUSSIG — Rôles des médicaments péri-procéduraux » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-sites-mesure.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-sites-mesure"
      },
      "name" : "TAUSSIG — Sites anatomiques de mesure/geste (validé)",
      "description" : "Working set des sites de cathétérisme validé cliniquement (cavités, valves, septa, gros vaisseaux, abords, sites post-chirurgicaux). Codes SNOMED CT + 1 code TAUSSIG-local (connexion cavopulmonaire inférieure, absente de SNOMED).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-technical-success-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/technical-success-vs"
      },
      "name" : "TAUSSIG — Succès technique",
      "description" : "Jeu de valeurs « TAUSSIG — Succès technique » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-technical-success.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/technical-success"
      },
      "name" : "TAUSSIG — Succès technique de la procédure",
      "description" : "Niveau de succès technique au niveau procédure.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-genetic-syndrome-profile.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-genetic-syndrome-profile"
      },
      "name" : "TAUSSIG — Syndrome génétique (covariable de contexte)",
      "description" : "Syndrome génétique comme covariable de contexte (POC KT, pas de cardiogénétique moléculaire). Codage Orphanet primaire + CIM-11 dérivé.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-genetic-syndrome.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-genetic-syndrome"
      },
      "name" : "TAUSSIG — Syndromes génétiques (Orphanet)",
      "description" : "Working set Orphanet des syndromes congénitaux pertinents en cathétérisme (covariable de contexte de la POC). Code primaire Orphanet ; ICD-11 = classification (ConceptMap) ; ICD-10 = dérivé.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-access-type.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/access-type"
      },
      "name" : "TAUSSIG — Type d'abord vasculaire",
      "description" : "Voie d'abord vasculaire.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-implant-device-type.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/implant-device-type"
      },
      "name" : "TAUSSIG — Type d'implant",
      "description" : "Type de dispositif/substrat longitudinal.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-condition-type.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/condition-type"
      },
      "name" : "TAUSSIG — Type de condition évolutive",
      "description" : "Catégorie d'une lésion évolutive.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-material-type.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/material-type"
      },
      "name" : "TAUSSIG — Type de matériel",
      "description" : "Catégorie de matériel utilisé pendant un geste.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-access-type-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/access-type-vs"
      },
      "name" : "TAUSSIG — Types d'abord vasculaire",
      "description" : "Jeu de valeurs « TAUSSIG — Types d'abord vasculaire » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-implant-device-type-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/implant-device-type-vs"
      },
      "name" : "TAUSSIG — Types d'implant",
      "description" : "Jeu de valeurs « TAUSSIG — Types d'implant » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-condition-type-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/condition-type-vs"
      },
      "name" : "TAUSSIG — Types de condition évolutive",
      "description" : "Jeu de valeurs « TAUSSIG — Types de condition évolutive » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-taussig-materiel-types.html"
      }],
      "reference" : {
        "reference" : "ValueSet/taussig-materiel-types"
      },
      "name" : "TAUSSIG — Types de dispositifs interventionnels",
      "description" : "Working set de matériel ; catégories de fermeture distinguées par cible selon la décision clinique du 30 octobre 2026. Les catégories fines de fermeture utilisent des codes TAUSSIG locaux.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-material-type-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/material-type-vs"
      },
      "name" : "TAUSSIG — Types de matériel (catégories)",
      "description" : "Jeu de valeurs « TAUSSIG — Types de matériel (catégories) » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-anesthesia-type-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/anesthesia-type-vs"
      },
      "name" : "TAUSSIG — Types d’anesthésie",
      "description" : "Quatre catégories du modèle : anesthésie générale, sédation et anesthésie locale en SNOMED CT, et aucune anesthésie explicite en code TAUSSIG. Sans distinction du niveau de sédation ni des techniques locorégionales.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-severity-scale.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/severity-scale"
      },
      "name" : "TAUSSIG — Échelle de gravité d'un EI",
      "description" : "Échelle de gradation validée par la littérature.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-severity-scale-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/severity-scale-vs"
      },
      "name" : "TAUSSIG — Échelles de gravité",
      "description" : "Jeu de valeurs « TAUSSIG — Échelles de gravité » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-care-episode.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-care-episode"
      },
      "name" : "TAUSSIG — Épisode de soins",
      "description" : "Épisode de soins (hospitalisation ou ambulatoire) englobant le cathétérisme, dérivé de FR Core Encounter.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "CodeSystem-implant-status.html"
      }],
      "reference" : {
        "reference" : "CodeSystem/implant-status"
      },
      "name" : "TAUSSIG — État clinique d'un implant",
      "description" : "État clinique courant d'un implant (porté en extension de Device).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "ValueSet-implant-status-vs.html"
      }],
      "reference" : {
        "reference" : "ValueSet/implant-status-vs"
      },
      "name" : "TAUSSIG — États d'implant",
      "description" : "Jeu de valeurs « TAUSSIG — États d'implant » utilisé par les profils TAUSSIG.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-taussig-adverse-event.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/taussig-adverse-event"
      },
      "name" : "TAUSSIG — Événement indésirable",
      "description" : "Complication péri-procédurale. Codage SNOMED (event) + IPCCC/CIM-10/ECHSA en codings parallèles ; gravité 1-5 selon échelle validée (extensions) ; attribution & prise en charge en extensions (réalisation R4).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-severityScale.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/severityScale"
      },
      "name" : "Échelle de gravité",
      "description" : "Échelle de gradation utilisée (Bergersen/C3PO, NCDR-IMPACT…).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-echoGuided.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/echoGuided"
      },
      "name" : "Écho-guidage",
      "description" : "Ponction vasculaire écho-guidée.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/implementationguide-page",
        "valueUri" : "StructureDefinition-implantClinicalStatus.html"
      }],
      "reference" : {
        "reference" : "StructureDefinition/implantClinicalStatus"
      },
      "name" : "État clinique de l'implant",
      "description" : "État clinique courant (Device.status ne couvre pas functional/degenerated/…).",
      "exampleBoolean" : false
    }],
    "page" : {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
        "valueUrl" : "toc.html"
      }],
      "nameUrl" : "toc.html",
      "title" : "Table of Contents",
      "generation" : "html",
      "page" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "index.html"
        }],
        "nameUrl" : "index.html",
        "title" : "TAUSSIG — Accueil",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "profils.html"
        }],
        "nameUrl" : "profils.html",
        "title" : "Profils et extensions",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "terminologies.html"
        }],
        "nameUrl" : "terminologies.html",
        "title" : "Terminologies",
        "generation" : "markdown"
      }]
    },
    "parameter" : [{
      "code" : "path-resource",
      "value" : "input/capabilities"
    },
    {
      "code" : "path-resource",
      "value" : "input/examples"
    },
    {
      "code" : "path-resource",
      "value" : "input/extensions"
    },
    {
      "code" : "path-resource",
      "value" : "input/models"
    },
    {
      "code" : "path-resource",
      "value" : "input/operations"
    },
    {
      "code" : "path-resource",
      "value" : "input/profiles"
    },
    {
      "code" : "path-resource",
      "value" : "input/resources"
    },
    {
      "code" : "path-resource",
      "value" : "input/vocabulary"
    },
    {
      "code" : "path-resource",
      "value" : "input/maps"
    },
    {
      "code" : "path-resource",
      "value" : "input/testing"
    },
    {
      "code" : "path-resource",
      "value" : "input/history"
    },
    {
      "code" : "path-resource",
      "value" : "fsh-generated/resources"
    },
    {
      "code" : "path-pages",
      "value" : "template/config"
    },
    {
      "code" : "path-pages",
      "value" : "input/assets"
    },
    {
      "code" : "path-pages",
      "value" : "input/images"
    },
    {
      "code" : "path-tx-cache",
      "value" : "input-cache/txcache"
    }]
  }
}

```
