/* Généré par 07-site/build/parse_dict.py — NE PAS ÉDITER À LA MAIN. */
window.TAUSSIG_DICT = {
 "elements": {
  "Patient.birth_weight_g": {
   "def": "Masse corporelle du patient mesurée à la naissance.",
   "res": "Observation",
   "path": "Observation.valueQuantity",
   "dt": "Quantity",
   "cs": "http://loinc.org",
   "vs": "",
   "bind": "",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Patient.birth_date": {
   "def": "Date de naissance du patient.",
   "res": "Patient",
   "path": "Patient.birthDate",
   "dt": "date",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "date",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Patient.ins_qualified_identifier": {
   "def": "Matricule d'identité nationale de santé du patient, qualifié après vérification des traits d'identité auprès du téléservice national INSi.",
   "res": "Patient",
   "path": "Patient.identifier:INS",
   "dt": "Identifier",
   "cs": "urn:oid:1.2.250.1.213.1.4.10",
   "vs": "",
   "bind": "",
   "type": "identifier",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Patient.sex": {
   "def": "Sexe du patient au sens administratif, tel qu'inscrit à l'état civil.",
   "res": "Patient",
   "path": "Patient.gender",
   "dt": "code",
   "cs": "http://hl7.org/fhir/administrative-gender",
   "vs": "administrative-gender",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Practitioner.display_name": {
   "def": "Nom d'affichage du praticien.",
   "res": "Practitioner",
   "path": "Practitioner.name.text",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Practitioner.rpps": {
   "def": "Numéro d'inscription du praticien au Répertoire partagé des professionnels de santé (RPPS).",
   "res": "Practitioner",
   "path": "Practitioner.identifier:RPPS",
   "dt": "Identifier",
   "cs": "urn:oid:1.2.250.1.71.4.2.1",
   "vs": "",
   "bind": "",
   "type": "identifier",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Organization.name": {
   "def": "Raison sociale de l'établissement de santé.",
   "res": "Organization",
   "path": "Organization.name",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Organization.finess": {
   "def": "Numéro d'inscription de l'établissement de santé au Fichier national des établissements sanitaires et sociaux (FINESS).",
   "res": "Organization",
   "path": "Organization.identifier:FINESS",
   "dt": "Identifier",
   "cs": "urn:oid:1.2.250.1.71.4.2.2",
   "vs": "",
   "bind": "",
   "type": "identifier",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CareEpisode.episode_class": {
   "def": "Nature administrative de l'épisode de soins au cours duquel le cathétérisme est réalisé.",
   "res": "Encounter",
   "path": "Encounter.class",
   "dt": "Coding",
   "cs": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
   "vs": "fr-core-vs-encounter-class",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CareEpisode.end_date": {
   "def": "Date et heure de fin de l'épisode de soins.",
   "res": "Encounter",
   "path": "Encounter.period.end",
   "dt": "dateTime",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "dateTime",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CareEpisode.start_date": {
   "def": "Date et heure de début de l'épisode de soins.",
   "res": "Encounter",
   "path": "Encounter.period.start",
   "dt": "dateTime",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "dateTime",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacDiagnosis.diagnosis_label": {
   "def": "Libellé en clair de la cardiopathie congénitale diagnostiquée.",
   "res": "Condition",
   "path": "Condition.code.text",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacDiagnosis.ipccc_code": {
   "def": "Code de l'International Paediatric and Congenital Cardiac Code (IPCCC) de la cardiopathie congénitale diagnostiquée, apportant la granularité descriptive de référence en cardiologie congénitale.",
   "res": "Condition",
   "path": "Condition.code.coding:ipccc",
   "dt": "Coding",
   "cs": "https://taussig/fhir/CodeSystem/ipccc (IPCCC Long List v5.0)",
   "vs": "taussig-diagnosis-ipccc",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "diagnostics",
   "termCol": 2
  },
  "CardiacDiagnosis.icd11_code": {
   "def": "Code de la Classification internationale des maladies, 11ᵉ révision (CIM-11 / ICD-11), correspondant à la cardiopathie congénitale diagnostiquée, classification internationale de référence sous licence ouverte de l'OMS.",
   "res": "Condition",
   "path": "Condition.code.coding:icd11",
   "dt": "Coding",
   "cs": "http://id.who.int/icd/release/11/mms",
   "vs": "taussig-diagnosis-icd11",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "diagnostics",
   "termCol": 1
  },
  "CardiacDiagnosis.cim10_code": {
   "def": "Code de la Classification internationale des maladies, 10ᵉ révision (CIM-10), correspondant à la cardiopathie congénitale diagnostiquée, à visée administrative (PMSI).",
   "res": "Condition",
   "path": "Condition.code.coding:cim10",
   "dt": "Coding",
   "cs": "(NOS ANS CIM-10)",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "diagnostics",
   "termCol": 3
  },
  "CardiacDiagnosis.echsa_code": {
   "def": "Code diagnostic de la nomenclature ECHSA-CD correspondant à la cardiopathie congénitale diagnostiquée.",
   "res": "Condition",
   "path": "Condition.code.coding:echsa",
   "dt": "Coding",
   "cs": "(CodeSystem propre TAUSSIG / ECHSA)",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "diagnostics",
   "termCol": 4
  },
  "CardiacDiagnosis.locked_date": {
   "def": "Date de verrouillage du diagnostic congénital.",
   "res": "Provenance",
   "path": "Provenance.recorded",
   "dt": "dateTime",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "date",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacDiagnosis.is_locked": {
   "def": "Indicateur précisant si le diagnostic congénital du patient, une fois validé, est verrouillé et figé contre toute modification ultérieure.",
   "res": "Condition",
   "path": "Condition.verificationStatus",
   "dt": "CodeableConcept",
   "cs": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
   "vs": "condition-ver-status",
   "bind": "required",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacDiagnosis.locked_by": {
   "def": "Professionnel ayant procédé au verrouillage du diagnostic congénital.",
   "res": "Provenance",
   "path": "Provenance.agent.who",
   "dt": "Reference(Practitioner)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CatheterizationDiagnosis.diagnosis_role": {
   "def": "Rôle tenu par une cardiopathie congénitale dans le contexte d'un cathétérisme donné, selon qu'elle en constitue l'indication principale, une lésion associée ou une découverte fortuite.",
   "res": "Procedure",
   "path": "Procedure.reasonReference + extension:diagnosisRole",
   "dt": "Coding (extension)",
   "cs": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
   "vs": "diagnosis-role-vs",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacCondition.label": {
   "def": "Libellé en clair de la condition cardiaque évolutive.",
   "res": "Condition",
   "path": "Condition.code.text",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacCondition.condition_type": {
   "def": "Nature de la condition cardiaque évolutive du patient, selon qu'il s'agit d'une lésion résiduelle, d'une lésion acquise ou d'un état consécutif à une étape chirurgicale.",
   "res": "Condition",
   "path": "Condition.category",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "condition-type-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacCondition.ipccc_code": {
   "def": "Code IPCCC de la condition cardiaque évolutive.",
   "res": "Condition",
   "path": "Condition.code.coding:ipccc",
   "dt": "Coding",
   "cs": "https://taussig/fhir/CodeSystem/ipccc (IPCCC Long List v5.0)",
   "vs": "taussig-cardiac-condition",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "conditions",
   "termCol": 1
  },
  "CardiacCondition.cim10_code": {
   "def": "Code CIM-10 de la condition cardiaque évolutive, lorsqu'un équivalent administratif existe.",
   "res": "Condition",
   "path": "Condition.code.coding:cim10",
   "dt": "Coding",
   "cs": "(NOS ANS CIM-10)",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "conditions",
   "termCol": 2
  },
  "CardiacCondition.snomed_code": {
   "def": "Code SNOMED CT de la condition ou lésion cardiaque évolutive.",
   "res": "Condition",
   "path": "Condition.code.coding:snomed",
   "dt": "Coding",
   "cs": "http://snomed.info/sct",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "conditions",
   "termCol": 1
  },
  "CardiacCondition.echsa_code": {
   "def": "Code de la nomenclature ECHSA-CD correspondant à la condition cardiaque évolutive (état post-chirurgical ou lésion résiduelle).",
   "res": "Condition",
   "path": "Condition.code.coding:echsa",
   "dt": "Coding",
   "cs": "(CodeSystem propre TAUSSIG / ECHSA)",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "conditions",
   "termCol": 3
  },
  "CardiacCondition.onset_date": {
   "def": "Date d'apparition de la condition cardiaque évolutive.",
   "res": "Condition",
   "path": "Condition.onset[x]",
   "dt": "dateTime",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "date",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CatheterizationCondition.indication_role": {
   "def": "Rôle tenu par une condition cardiaque évolutive (résiduelle, acquise ou post-chirurgicale) en tant qu'indication ou contexte d'un cathétérisme donné.",
   "res": "Procedure",
   "path": "Procedure.reasonReference + extension:indicationRole",
   "dt": "Coding (extension)",
   "cs": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
   "vs": "diagnosis-role-vs",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.device_type": {
   "def": "Catégorie du dispositif ou substrat implanté à demeure lors du cathétérisme.",
   "res": "Device",
   "path": "Device.type",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "implant-device-type-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.status": {
   "def": "État fonctionnel courant du dispositif implanté.",
   "res": "Device",
   "path": "Device.status (+ extension état clinique)",
   "dt": "code",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "implant-status-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.anatomical_site_snomed": {
   "def": "Site anatomique d'implantation du dispositif, codé en SNOMED CT.",
   "res": "BodyStructure",
   "path": "BodyStructure.location (ou DeviceUseStatement.bodySite)",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "sites",
   "termCol": 1
  },
  "CardiacImplant.brand_model": {
   "def": "Marque et modèle commercial du dispositif implanté.",
   "res": "Device",
   "path": "Device.deviceName",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.status_source_catheterization_id": {
   "def": "Cathétérisme au cours duquel l'état courant du dispositif implanté a été constaté.",
   "res": "Provenance",
   "path": "Provenance.entity / Observation.derivedFrom",
   "dt": "Reference(Procedure)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.implanted_on": {
   "def": "Date d'implantation du dispositif.",
   "res": "Procedure",
   "path": "Procedure.performed[x] (implantation)",
   "dt": "dateTime",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "date",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.status_date": {
   "def": "Date à laquelle l'état courant du dispositif implanté a été constaté.",
   "res": "Device",
   "path": "Device (état daté)",
   "dt": "dateTime",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "date",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.implanted_externally": {
   "def": "Indicateur précisant si le dispositif a été implanté hors des cathétérismes tracés dans TAUSSIG (chirurgie ou autre centre).",
   "res": "Device",
   "path": "Device.extension(implantedExternally)",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.udi": {
   "def": "Identifiant unique du dispositif implanté (Unique Device Identification, UDI).",
   "res": "Device",
   "path": "Device.udiCarrier",
   "dt": "Identifier",
   "cs": "(GS1 / HIBCC)",
   "vs": "",
   "bind": "",
   "type": "identifier",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.intent": {
   "def": "Finalité du cathétérisme, selon qu'il est à visée diagnostique, interventionnelle ou hybride.",
   "res": "Procedure",
   "path": "Procedure.category",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "cath-intent-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.snomed_code": {
   "def": "Code SNOMED CT de la procédure de cathétérisme, assurant son interopérabilité sémantique internationale.",
   "res": "Procedure",
   "path": "Procedure.code.coding:snomed",
   "dt": "Coding",
   "cs": "http://snomed.info/sct",
   "vs": "taussig-procedure-snomed",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.ccam_code": {
   "def": "Code de la Classification commune des actes médicaux (CCAM) décrivant l'acte de cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.code.coding:ccam",
   "dt": "Coding",
   "cs": "(NOS ANS TRE_R310-CCAM)",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.echsa_procedure_code": {
   "def": "Code procédure de la nomenclature ECHSA-CD (European Congenital Heart Surgeons Association — Congenital Database) décrivant le cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.code.coding:echsa",
   "dt": "Coding",
   "cs": "(CodeSystem TAUSSIG ECHSA)",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.bsa_m2": {
   "def": "Surface corporelle du patient au moment du cathétérisme.",
   "res": "Observation",
   "path": "Observation.valueQuantity",
   "dt": "Quantity",
   "cs": "http://loinc.org",
   "vs": "",
   "bind": "",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.bsa_method": {
   "def": "Formule de calcul retenue pour estimer la surface corporelle du patient.",
   "res": "Observation",
   "path": "Observation.method",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "bsa-method-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.contrast_volume_ml": {
   "def": "Volume total de produit de contraste iodé injecté au cours du cathétérisme.",
   "res": "Observation",
   "path": "Observation.valueQuantity",
   "dt": "Quantity",
   "cs": "http://loinc.org",
   "vs": "",
   "bind": "example",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.dose_area_product": {
   "def": "Produit dose-surface cumulé délivré au cours du cathétérisme.",
   "res": "Observation",
   "path": "Observation.valueQuantity",
   "dt": "Quantity",
   "cs": "http://loinc.org",
   "vs": "",
   "bind": "example",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.fluoroscopy_time_min": {
   "def": "Durée cumulée d'exposition à la fluoroscopie au cours du cathétérisme.",
   "res": "Observation",
   "path": "Observation.valueQuantity",
   "dt": "Quantity",
   "cs": "http://loinc.org",
   "vs": "",
   "bind": "example",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.height_cm": {
   "def": "Taille du patient au moment du cathétérisme.",
   "res": "Observation",
   "path": "Observation.valueQuantity",
   "dt": "Quantity",
   "cs": "http://loinc.org",
   "vs": "",
   "bind": "",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.weight_kg": {
   "def": "Masse corporelle du patient au moment du cathétérisme.",
   "res": "Observation",
   "path": "Observation.valueQuantity",
   "dt": "Quantity",
   "cs": "http://loinc.org",
   "vs": "",
   "bind": "",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.procedure_datetime": {
   "def": "Date et heure de réalisation du cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.performed[x]",
   "dt": "dateTime",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "dateTime",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.contrast_used": {
   "def": "Indicateur d'utilisation d'un produit de contraste iodé au cours du cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.extension(contrastUsed)",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.anesthesia_type": {
   "def": "Type d'anesthésie mis en œuvre pour le cathétérisme (générale, sédation, locale ou absence d'anesthésie).",
   "res": "Procedure",
   "path": "Procedure.code",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct ; https://taussig/fhir/CodeSystem/anesthesia-type",
   "vs": "anesthesia-type-vs",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.ventilation_type": {
   "def": "Mode de ventilation du patient pendant le cathétérisme (invasif, non invasif ou ventilation spontanée).",
   "res": "Procedure",
   "path": "Procedure.extension:ventilationType",
   "dt": "Coding",
   "cs": "(CodeSystem TAUSSIG cs-taussig-ventilation)",
   "vs": "ventilation-type-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.antibioprophylaxis_detail": {
   "def": "Molécule d'antibioprophylaxie administrée.",
   "res": "MedicationAdministration",
   "path": "MedicationAdministration.medication[x]",
   "dt": "CodeableConcept",
   "cs": "http://www.whocc.no/atc",
   "vs": "",
   "bind": "example",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.anticoagulant_dose_numeric": {
   "def": "Dose d'anticoagulant administrée.",
   "res": "MedicationAdministration",
   "path": "MedicationAdministration.dosage.dose",
   "dt": "Quantity",
   "cs": "http://unitsofmeasure.org",
   "vs": "",
   "bind": "required",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.anticoagulant_type": {
   "def": "Type d'anticoagulant administré.",
   "res": "MedicationAdministration",
   "path": "MedicationAdministration.medication[x]",
   "dt": "CodeableConcept",
   "cs": "http://www.whocc.no/atc",
   "vs": "",
   "bind": "example",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.antibioprophylaxis_given": {
   "def": "Indicateur d'administration d'une antibioprophylaxie lors du cathétérisme.",
   "res": "MedicationAdministration",
   "path": "MedicationAdministration (catégorie prophylaxie)",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.anticoagulant_given": {
   "def": "Indicateur d'administration d'un anticoagulant pendant le cathétérisme.",
   "res": "MedicationAdministration",
   "path": "MedicationAdministration",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.ecmo_support": {
   "def": "Indicateur de recours à une assistance par oxygénation par membrane extracorporelle (ECMO) pendant le cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.extension:ecmoSupport",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "VascularAccess.access_type": {
   "def": "Type de voie d'abord vasculaire empruntée pour le cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.code",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "access-type-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "VascularAccess.introducer_size_fr": {
   "def": "Calibre de l'introducteur vasculaire mis en place au niveau de l'abord.",
   "res": "Procedure",
   "path": "Procedure.extension:introducerSize",
   "dt": "Quantity (extension)",
   "cs": "http://unitsofmeasure.org",
   "vs": "",
   "bind": "required",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "VascularAccess.echo_guided": {
   "def": "Indicateur précisant si la ponction vasculaire a été réalisée sous guidage échographique.",
   "res": "Procedure",
   "path": "Procedure.extension:echoGuided",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "VascularAccess.puncture_success": {
   "def": "Indicateur précisant si la ponction vasculaire de l'abord a été réussie.",
   "res": "Procedure",
   "path": "Procedure.outcome",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "VascularAccess.side": {
   "def": "Latéralité anatomique, droite ou gauche, de la voie d'abord vasculaire.",
   "res": "Procedure",
   "path": "Procedure.bodySite (laterality)",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "laterality-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "InterventionalGesture.target_structure_label": {
   "def": "Libellé en clair de la structure anatomique cible du geste.",
   "res": "Procedure",
   "path": "Procedure.bodySite.text",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "InterventionalGesture.gesture_type": {
   "def": "Nature du geste interventionnel réalisé au cours du cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.code",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "InterventionalGesture.ipccc_code": {
   "def": "Code IPCCC décrivant le geste interventionnel réalisé.",
   "res": "Procedure",
   "path": "Procedure.code.coding:ipccc",
   "dt": "Coding",
   "cs": "https://taussig/fhir/CodeSystem/ipccc (IPCCC Long List v5.0)",
   "vs": "taussig-procedure-ipccc",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "procedures",
   "termCol": 1
  },
  "InterventionalGesture.snomed_code": {
   "def": "Code SNOMED CT du geste interventionnel, assurant son interopérabilité sémantique internationale.",
   "res": "Procedure",
   "path": "Procedure.code.coding:snomed",
   "dt": "Coding",
   "cs": "http://snomed.info/sct",
   "vs": "taussig-procedure-snomed",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "procedures",
   "termCol": 4
  },
  "InterventionalGesture.target_structure_snomed": {
   "def": "Structure anatomique cible du geste interventionnel, codée en SNOMED CT.",
   "res": "Procedure",
   "path": "Procedure.bodySite",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "taussig-sites-mesure",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "InterventionalGesture.ccam_code": {
   "def": "Code de la Classification commune des actes médicaux (CCAM) décrivant le geste interventionnel.",
   "res": "Procedure",
   "path": "Procedure.code.coding:ccam",
   "dt": "Coding",
   "cs": "https://mos.esante.gouv.fr/NOS/TRE_R310-CCAM/FHIR/TRE-R310-CCAM",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "procedures",
   "termCol": 2
  },
  "InterventionalGesture.echsa_code": {
   "def": "Code procédure de la nomenclature ECHSA-CD correspondant au geste interventionnel.",
   "res": "Procedure",
   "path": "Procedure.code.coding:echsa",
   "dt": "Coding",
   "cs": "(CodeSystem propre TAUSSIG / ECHSA)",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "procedures",
   "termCol": 3
  },
  "InterventionalGesture.result": {
   "def": "Résultat technique immédiat propre au geste interventionnel considéré.",
   "res": "Procedure",
   "path": "Procedure.outcome",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "gesture-result-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "InterventionalGesture.failure_reason": {
   "def": "Motif d'échec du geste interventionnel, le cas échéant.",
   "res": "Procedure",
   "path": "Procedure.statusReason",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialUsed.name": {
   "def": "Désignation du matériel utilisé.",
   "res": "Device",
   "path": "Device.deviceName.name",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialUsed.material_type": {
   "def": "Catégorie du matériel utilisé au cours du geste.",
   "res": "Device",
   "path": "Device.type",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG cs-taussig-material-type)",
   "vs": "material-type-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "materiel",
   "termCol": 1
  },
  "MaterialUsed.attempt_number": {
   "def": "Numéro de la tentative réalisée avec le matériel.",
   "res": "Procedure",
   "path": "Procedure.usedReference.extension:attemptNumber",
   "dt": "integer",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "integer",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialUsed.attempt_result": {
   "def": "Résultat de la tentative réalisée avec le matériel considéré.",
   "res": "Observation",
   "path": "Observation.valueCodeableConcept",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG cs-taussig-gesture-result)",
   "vs": "gesture-result-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialUsed.brand_model": {
   "def": "Marque et modèle commercial du matériel utilisé.",
   "res": "Device",
   "path": "Device.modelNumber",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialUsed.usage_sequence": {
   "def": "Rang d'utilisation du matériel dans la séquence du geste.",
   "res": "Procedure",
   "path": "Procedure.usedReference (ordre) / extension:usageSequence",
   "dt": "integer",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "integer",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialUsed.udi": {
   "def": "Identifiant unique du matériel (UDI-DI et UDI-PI).",
   "res": "Device",
   "path": "Device.udiCarrier",
   "dt": "UDI",
   "cs": "https://www.gs1.org",
   "vs": "",
   "bind": "",
   "type": "identifier",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialParameter.concept": {
   "def": "Nature du paramètre technique caractérisant le matériel utilisé (par exemple diamètre de ballon, longueur de stent).",
   "res": "Device",
   "path": "Device.property.type",
   "dt": "CodeableConcept",
   "cs": "http://loinc.org",
   "vs": "",
   "bind": "example",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialParameter.loinc_code": {
   "def": "Code LOINC du paramètre technique du matériel.",
   "res": "Device",
   "path": "Device.property.type.coding:loinc",
   "dt": "Coding",
   "cs": "http://loinc.org",
   "vs": "",
   "bind": "example",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialParameter.unit_ucum": {
   "def": "Unité du paramètre technique du matériel, exprimée dans le référentiel UCUM.",
   "res": "Device",
   "path": "Device.property.valueQuantity.code",
   "dt": "code",
   "cs": "http://unitsofmeasure.org",
   "vs": "",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialParameter.value_numeric": {
   "def": "Valeur numérique du paramètre technique du matériel.",
   "res": "Device",
   "path": "Device.property.valueQuantity.value",
   "dt": "decimal",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.concept_label": {
   "def": "Libellé en clair de la grandeur physiologique mesurée.",
   "res": "Observation",
   "path": "Observation.code.text",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.derivation": {
   "def": "Indicateur précisant si la valeur a été directement mesurée ou calculée à partir d'autres mesures.",
   "res": "Observation",
   "path": "Observation.extension:derivationMethod",
   "dt": "Coding (extension)",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "derivation-method-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.measurement_property": {
   "def": "Nature de la grandeur physiologique mesurée — le « quoi » de la mesure.",
   "res": "Observation",
   "path": "Observation.code.coding",
   "dt": "Coding",
   "cs": "(CodeSystem propre TAUSSIG / measurement-property)",
   "vs": "taussig-measurement-property",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "mesures-prop",
   "termCol": 1
  },
  "ClinicalMeasurement.modality": {
   "def": "Modalité technique d'obtention de la mesure (cathétérisme, échocardiographie, IRM, scanner, électrocardiogramme) — le « comment » de la mesure.",
   "res": "Observation",
   "path": "Observation.method",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "measurement-modality-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "mesures-methode",
   "termCol": 1
  },
  "ClinicalMeasurement.body_site_snomed": {
   "def": "Site anatomique où la mesure est réalisée, codé en SNOMED CT — le « où » de la mesure.",
   "res": "Observation",
   "path": "Observation.bodySite",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "taussig-sites-mesure",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "sites",
   "termCol": 1
  },
  "ClinicalMeasurement.measurement_condition": {
   "def": "Condition physiologique ou pharmacologique du patient pendant la mesure (repos, effort, épreuve pharmacologique, oxygène, monoxyde d'azote, air ambiant).",
   "res": "Observation",
   "path": "Observation.extension:measurementCondition",
   "dt": "Coding",
   "cs": "(CodeSystem TAUSSIG cs-taussig-measurement-condition)",
   "vs": "measurement-condition-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.procedure_phase": {
   "def": "Phase procédurale à laquelle se rattache la mesure, servant de référentiel au calcul de la variation pré/post-geste.",
   "res": "Observation",
   "path": "Observation.extension:procedurePhase",
   "dt": "Coding",
   "cs": "(CodeSystem TAUSSIG cs-taussig-procedure-phase)",
   "vs": "procedure-phase-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "mesures-phase",
   "termCol": 1
  },
  "ClinicalMeasurement.related_gesture_id": {
   "def": "Geste interventionnel auquel la mesure est rattachée.",
   "res": "Observation",
   "path": "Observation.partOf",
   "dt": "Reference(Procedure)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.unit_ucum": {
   "def": "Unité de mesure de la valeur, exprimée dans le référentiel UCUM.",
   "res": "Observation",
   "path": "Observation.valueQuantity.code",
   "dt": "code",
   "cs": "http://unitsofmeasure.org",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.value_coded": {
   "def": "Résultat qualitatif de la mesure exprimé sous forme de valeur codée.",
   "res": "Observation",
   "path": "Observation.valueCodeableConcept",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "",
   "bind": "example",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.value_numeric": {
   "def": "Valeur numérique de la mesure — le « combien » de la mesure.",
   "res": "Observation",
   "path": "Observation.valueQuantity.value",
   "dt": "decimal",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "decimal",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.value_text": {
   "def": "Résultat de la mesure exprimé en texte libre, lorsqu'il n'est ni numérique ni codable.",
   "res": "Observation",
   "path": "Observation.valueString",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.measured_at": {
   "def": "Date et heure cliniques de l'acquisition effective de la mesure.",
   "res": "Observation",
   "path": "Observation.effective[x]",
   "dt": "dateTime",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "dateTime",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ProcedureOutcome.death": {
   "def": "Indicateur de survenue du décès du patient en lien avec l'épisode de cathétérisme.",
   "res": "Patient",
   "path": "Patient.deceasedBoolean",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ProcedureOutcome.death_attribution": {
   "def": "Degré d'imputabilité du décès à la procédure de cathétérisme.",
   "res": "Observation",
   "path": "Observation.component",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "death-attribution-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ProcedureOutcome.hemodynamic_success": {
   "def": "Indicateur du succès hémodynamique de la procédure.",
   "res": "Observation",
   "path": "Observation.valueBoolean",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ProcedureOutcome.residual_lesion_present": {
   "def": "Indicateur de synthèse signalant la persistance d'une lésion résiduelle en fin de procédure.",
   "res": "Observation",
   "path": "Observation.valueBoolean",
   "dt": "boolean",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ProcedureOutcome.technical_success": {
   "def": "Indicateur composite synthétisant, au niveau de la procédure, le succès technique de l'ensemble des gestes réalisés.",
   "res": "Procedure",
   "path": "Procedure.outcome",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "technical-success-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ProcedureOutcome.death_datetime": {
   "def": "Date et heure du décès du patient.",
   "res": "Patient",
   "path": "Patient.deceasedDateTime",
   "dt": "dateTime",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "dateTime",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AdverseEvent.label": {
   "def": "Libellé de l'événement indésirable (complication).",
   "res": "AdverseEvent",
   "path": "AdverseEvent.event.text",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "",
   "bind": "",
   "type": "label",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AdverseEvent.ipccc_code": {
   "def": "Code IPCCC/EPCC de l'événement indésirable (complication).",
   "res": "AdverseEvent",
   "path": "AdverseEvent.event.coding:ipccc",
   "dt": "Coding",
   "cs": "(CodeSystem propre TAUSSIG / IPCCC)",
   "vs": "taussig-adverse-event-ipccc",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "complications",
   "termCol": 1
  },
  "AdverseEvent.icd10_code": {
   "def": "Code CIM-10 de l'événement indésirable, lorsqu'un équivalent existe.",
   "res": "AdverseEvent",
   "path": "AdverseEvent.event.coding:icd10",
   "dt": "Coding",
   "cs": "(NOS ANS via SMT)",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "complications",
   "termCol": 2
  },
  "AdverseEvent.snomed_code": {
   "def": "Nature de l'événement indésirable survenu, codée en SNOMED CT.",
   "res": "AdverseEvent",
   "path": "AdverseEvent.event",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "taussig-adverse-event-snomed",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "complications",
   "termCol": 3
  },
  "AdverseEvent.echsa_code": {
   "def": "Code complication de la nomenclature ECHSA-CD correspondant à l'événement indésirable.",
   "res": "AdverseEvent",
   "path": "AdverseEvent.event.coding:echsa",
   "dt": "Coding",
   "cs": "(CodeSystem propre TAUSSIG / ECHSA)",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "complications",
   "termCol": 4
  },
  "AdverseEvent.attribution": {
   "def": "Origine attribuée à l'événement indésirable (dispositif, abord vasculaire, anesthésie, technique procédurale, état du patient, produit de contraste ou indéterminée).",
   "res": "AdverseEvent",
   "path": "AdverseEvent.extension:adverseEventAttribution",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/ae-attribution",
   "vs": "ae-attribution-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AdverseEvent.management": {
   "def": "Niveau de prise en charge mis en œuvre en réponse à l'événement indésirable, selon une échelle d'escalade thérapeutique allant de l'absence de traitement au sauvetage chirurgical.",
   "res": "AdverseEvent",
   "path": "AdverseEvent.extension:adverseEventManagement",
   "dt": "CodeableConcept",
   "cs": "(CodeSystem propre TAUSSIG)",
   "vs": "taussig-ae-management",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AdverseEvent.outcome": {
   "def": "Évolution de l'événement indésirable.",
   "res": "AdverseEvent",
   "path": "AdverseEvent.outcome",
   "dt": "CodeableConcept",
   "cs": "http://terminology.hl7.org/CodeSystem/adverse-event-outcome",
   "vs": "adverse-event-outcome",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AdverseEvent.severity_level": {
   "def": "Niveau de gravité de l'événement indésirable au sein de l'échelle de cotation employée.",
   "res": "AdverseEvent",
   "path": "AdverseEvent.extension:severityLevel",
   "dt": "integer",
   "cs": "",
   "vs": "",
   "bind": "n/a",
   "type": "integer",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AdverseEvent.severity_scale": {
   "def": "Échelle de cotation employée pour graduer la gravité de l'événement indésirable (Bergersen C3PO, NCDR-IMPACT, CTCAE v5, Clavien-Dindo…).",
   "res": "AdverseEvent",
   "path": "AdverseEvent.extension:severityScale",
   "dt": "Coding (extension)",
   "cs": "(CodeSystem TAUSSIG)",
   "vs": "severity-scale-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "GeneticSyndrome.label": {
   "def": "Libellé de la maladie rare génétique ou syndromique associée.",
   "res": "Condition",
   "path": "Condition.code.text",
   "dt": "string",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "GeneticSyndrome.icd11_code": {
   "def": "Code de la Classification internationale des maladies, 11ᵉ révision (CIM-11 / ICD-11), de la maladie rare génétique ou syndromique.",
   "res": "Condition",
   "path": "Condition.code.coding:icd11",
   "dt": "Coding",
   "cs": "http://id.who.int/icd/release/11/mms",
   "vs": "taussig-genetic-syndrome",
   "bind": "example",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "genetique",
   "termCol": 2
  },
  "GeneticSyndrome.orpha_code": {
   "def": "Code Orphanet identifiant la maladie rare génétique ou syndromique associée.",
   "res": "Condition",
   "path": "Condition.code.coding:orpha",
   "dt": "Coding",
   "cs": "http://www.orpha.net",
   "vs": "taussig-genetic-syndrome",
   "bind": "preferred",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": "genetique",
   "termCol": 1
  }
 },
 "entities": [
  {
   "name": "Patient",
   "fr": "Patient",
   "desc": "Identité et données démographiques du patient.",
   "zone": "contexte",
   "zoneTitre": "Contexte & acteurs",
   "n": 4
  },
  {
   "name": "Practitioner",
   "fr": "Praticien",
   "desc": "Opérateur ou intervenant identifié (RPPS).",
   "zone": "contexte",
   "zoneTitre": "Contexte & acteurs",
   "n": 2
  },
  {
   "name": "Organization",
   "fr": "Établissement",
   "desc": "Structure de soins où l’acte est réalisé (FINESS).",
   "zone": "contexte",
   "zoneTitre": "Contexte & acteurs",
   "n": 2
  },
  {
   "name": "CareEpisode",
   "fr": "Épisode de soins",
   "desc": "Séjour ou parcours qui regroupe l’acte de cathétérisme.",
   "zone": "contexte",
   "zoneTitre": "Contexte & acteurs",
   "n": 3
  },
  {
   "name": "GeneticSyndrome",
   "fr": "Syndrome génétique",
   "desc": "Contexte génétique du patient (covariable, ancrage Orphanet).",
   "zone": "contexte",
   "zoneTitre": "Contexte & acteurs",
   "n": 3
  },
  {
   "name": "CardiacDiagnosis",
   "fr": "Diagnostic cardiaque",
   "desc": "Cardiopathie congénitale : diagnostic figé et verrouillable, multi-codé.",
   "zone": "substrats",
   "zoneTitre": "Les trois substrats",
   "n": 8
  },
  {
   "name": "CardiacCondition",
   "fr": "Condition cardiaque",
   "desc": "État hémodynamique évolutif que le patient traverse (shunt, HTAP…).",
   "zone": "substrats",
   "zoneTitre": "Les trois substrats",
   "n": 7
  },
  {
   "name": "CardiacImplant",
   "fr": "Implant cardiaque",
   "desc": "Matériel implanté doté d’un cycle de vie propre (stent, valve, occluder…).",
   "zone": "substrats",
   "zoneTitre": "Les trois substrats",
   "n": 9
  },
  {
   "name": "Catheterization",
   "fr": "Cathétérisme",
   "desc": "L’acte-contenant : abord, anesthésie, gestes et mesures d’une même procédure.",
   "zone": "acte",
   "zoneTitre": "L’acte de cathétérisme",
   "n": 13
  },
  {
   "name": "CatheterizationDiagnosis",
   "fr": "Diagnostic ↔ cathétérisme",
   "desc": "Table de liaison : diagnostic retenu comme pertinent pour cet acte.",
   "zone": "acte",
   "zoneTitre": "L’acte de cathétérisme",
   "n": 1
  },
  {
   "name": "CatheterizationCondition",
   "fr": "Condition ↔ cathétérisme",
   "desc": "Table de liaison : rôle joué par une condition dans cet acte.",
   "zone": "acte",
   "zoneTitre": "L’acte de cathétérisme",
   "n": 1
  },
  {
   "name": "AnesthesiaManagement",
   "fr": "Anesthésie",
   "desc": "Prise en charge anesthésique de la procédure.",
   "zone": "acte",
   "zoneTitre": "L’acte de cathétérisme",
   "n": 8
  },
  {
   "name": "VascularAccess",
   "fr": "Abord vasculaire",
   "desc": "Voie(s) d’abord utilisée(s) pour le cathétérisme.",
   "zone": "acte",
   "zoneTitre": "L’acte de cathétérisme",
   "n": 5
  },
  {
   "name": "InterventionalGesture",
   "fr": "Geste interventionnel",
   "desc": "Geste thérapeutique décrit sur trois axes : cible, action, technique.",
   "zone": "gestes",
   "zoneTitre": "Gestes & matériel",
   "n": 9
  },
  {
   "name": "MaterialUsed",
   "fr": "Matériel utilisé",
   "desc": "Dispositif employé pour un geste, avec trois niveaux de succès.",
   "zone": "gestes",
   "zoneTitre": "Gestes & matériel",
   "n": 7
  },
  {
   "name": "MaterialParameter",
   "fr": "Paramètre de matériel",
   "desc": "Caractéristique dimensionnelle d’un matériel (diamètre, longueur…).",
   "zone": "gestes",
   "zoneTitre": "Gestes & matériel",
   "n": 4
  },
  {
   "name": "ClinicalMeasurement",
   "fr": "Mesure clinique",
   "desc": "Mesure hémodynamique ou d’imagerie phasée (référence / pré / post).",
   "zone": "resultats",
   "zoneTitre": "Mesures & résultats",
   "n": 13
  },
  {
   "name": "ProcedureOutcome",
   "fr": "Résultat de procédure",
   "desc": "Synthèse de fin d’acte — une vue, pas une source de vérité.",
   "zone": "resultats",
   "zoneTitre": "Mesures & résultats",
   "n": 6
  },
  {
   "name": "AdverseEvent",
   "fr": "Événement indésirable",
   "desc": "Complication cotée, avec gestion et origine consignées séparément.",
   "zone": "resultats",
   "zoneTitre": "Mesures & résultats",
   "n": 10
  }
 ],
 "zones": [
  {
   "id": "contexte",
   "titre": "Contexte & acteurs"
  },
  {
   "id": "substrats",
   "titre": "Les trois substrats"
  },
  {
   "id": "acte",
   "titre": "L’acte de cathétérisme"
  },
  {
   "id": "gestes",
   "titre": "Gestes & matériel"
  },
  {
   "id": "resultats",
   "titre": "Mesures & résultats"
  }
 ],
 "valuesets": {
  "diagnostics": {
   "titre": "Diagnostics cardiaques congénitaux",
   "canon": "taussig-diagnosis-icd11",
   "colonnes": [
    "Libellé",
    "ICD-11",
    "IPCCC",
    "CIM-10",
    "ECHSA"
   ],
   "lignes": [
    [
     "Anomalie de position-orientation du cœur",
     "LA80",
     "02.01.09",
     "Q24.8",
     ""
    ],
    [
     "Lévocardie",
     "LA80.0",
     "02.01.03",
     "Q24.1",
     "DIAG-2010-2100"
    ],
    [
     "Dextrocardie",
     "LA80.1",
     "02.01.02",
     "Q24.0",
     "DIAG-2010-2090"
    ],
    [
     "Mésocardie",
     "LA80.2",
     "02.01.04",
     "Q24.8",
     "DIAG-2010-2110"
    ],
    [
     "Image en miroir complète",
     "LA82",
     "03.01.03",
     "Q89.3",
     "DIAG-2010-2120"
    ],
    [
     "Isomérisme droit",
     "LA83",
     "03.01.04",
     "Q20.6",
     "DIAG115"
    ],
    [
     "Isomérisme gauche",
     "LA84",
     "03.01.05",
     "Q20.6",
     "DIAG114"
    ],
    [
     "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle",
     "LA85",
     "01.03.09",
     "Q20.9",
     ""
    ],
    [
     "Connexions atrioventriculaires discordantes",
     "LA85.0",
     "01.04.01",
     "Q20.5",
     ""
    ],
    [
     "Transposition congénitalement corrigée des grandes artères",
     "LA85.00",
     "01.01.03",
     "Q20.5",
     "DIAG082"
    ],
    [
     "Transposition des gros vaisseaux",
     "LA85.1",
     "01.05.01",
     "Q20.3",
     "DIAG083"
    ],
    [
     "Ventricule droit à double issue",
     "LA85.2",
     "01.01.04",
     "Q20.1",
     "DIAG088"
    ],
    [
     "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition",
     "LA85.20",
     "01.01.18",
     "Q20.1",
     "DIAG090"
    ],
    [
     "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux",
     "LA85.21",
     "01.01.19",
     "Q20.1",
     "DIAG091"
    ],
    [
     "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire",
     "LA85.22",
     "01.01.40",
     "Q20.1",
     "DIAG088"
    ],
    [
     "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot",
     "LA85.23",
     "01.01.17",
     "Q20.1",
     "DIAG089"
    ],
    [
     "Ventricule gauche à double issue",
     "LA85.3",
     "01.05.03",
     "Q20.2",
     "DIAG093"
    ],
    [
     "Tronc artériel commun",
     "LA85.4",
     "09.01.01",
     "Q20.0",
     "DIAG016"
    ],
    [
     "Tronc artériel commun à dominance aortique",
     "LA85.40",
     "09.01.15",
     "Q20.0",
     "DIAG016"
    ],
    [
     "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue",
     "LA85.41",
     "09.01.18",
     "Q20.0",
     "DIAG-2010-2010"
    ],
    [
     "Anomalie congénitale de la veine médiastinale",
     "LA86",
     "04.00.07",
     "Q26.8",
     ""
    ],
    [
     "Veine cave supérieure gauche",
     "LA86.0",
     "04.01.25",
     "Q26.8",
     "DIAG026"
    ],
    [
     "Absence de toit du sinus coronaire",
     "LA86.1",
     "04.04.13",
     "Q24.5",
     "DIAG004"
    ],
    [
     "Anomalie du retour veineux pulmonaire",
     "LA86.2",
     "04.08.07",
     "Q26.4",
     ""
    ],
    [
     "Connexion veineuse pulmonaire totale anormale",
     "LA86.20",
     "04.08.05",
     "Q26.2",
     "DIAG019"
    ],
    [
     "Connexion veineuse pulmonaire partielle anormale",
     "LA86.21",
     "04.07.01",
     "Q26.3",
     "DIAG017"
    ],
    [
     "Syndrome du cimeterre",
     "LA86.22",
     "03.02.23",
     "Q26.8",
     "DIAG018"
    ],
    [
     "Sténose ou hypoplasie veineuse pulmonaire congénitale",
     "LA86.3",
     "04.08.31",
     "Q26.8",
     "DIAG025"
    ],
    [
     "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire",
     "LA87",
     "06.00.15",
     "Q23.8",
     ""
    ],
    [
     "Anomalie congénitale de la valve tricuspide",
     "LA87.0",
     "06.01.11",
     "Q22.9",
     "DIAG040"
    ],
    [
     "Insuffisance tricuspide congénitale",
     "LA87.00",
     "06.01.25",
     "Q22.8",
     "DIAG037"
    ],
    [
     "Sténose congénitale de la valve tricuspide",
     "LA87.01",
     "06.01.07",
     "Q22.4",
     "DIAG038"
    ],
    [
     "Dysplasie de la valve tricuspide",
     "LA87.02",
     "06.01.03",
     "Q22.8",
     "DIAG040"
    ],
    [
     "Malformation d'Ebstein de la valve tricuspide",
     "LA87.03",
     "06.01.34",
     "Q22.5",
     "DIAG036"
    ],
    [
     "Anomalie congénitale de la valve mitrale",
     "LA87.1",
     "06.02.11",
     "Q23.9",
     "DIAG068"
    ],
    [
     "Insuffisance mitrale congénitale",
     "LA87.10",
     "06.02.25",
     "Q23.3",
     "DIAG067"
    ],
    [
     "Sténose valvulaire mitrale congénitale",
     "LA87.11",
     "06.02.07",
     "Q23.2",
     "DIAG062"
    ],
    [
     "Dysplasie de la valve mitrale",
     "LA87.12",
     "06.02.03",
     "Q23.8",
     "DIAG068"
    ],
    [
     "Anomalie congénitale de l'appareil mitral sousvalvaire",
     "LA87.13",
     "06.02.21",
     "Q23.8",
     "DIAG063"
    ],
    [
     "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire",
     "LA87.3",
     "06.07.28",
     "Q21.2",
     ""
    ],
    [
     "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire",
     "LA87.4",
     "06.06.00",
     "Q21.2",
     "DIAG010"
    ],
    [
     "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement",
     "LA87.40",
     "06.06.01",
     "Q21.2",
     "DIAG012"
    ],
    [
     "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement",
     "LA87.41",
     "06.06.08",
     "Q21.2",
     "DIAG011"
    ],
    [
     "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire",
     "LA87.42",
     "06.06.10",
     "Q21.2",
     "DIAG010"
    ],
    [
     "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire",
     "LA87.43",
     "06.06.09",
     "Q21.2",
     "DIAG010"
    ],
    [
     "Communication septale auriculoventriculaire avec déséquilibre ventriculaire",
     "LA87.44",
     "06.07.26",
     "Q21.2",
     "DIAG078"
    ],
    [
     "Anomalie septal auriculoventriculaire et tétralogie de Fallot",
     "LA87.45",
     "01.01.20",
     "Q21.2",
     "DIAG029"
    ],
    [
     "Anomalie congénitale du ventricule ou du septum ventriculaire",
     "LA88",
     "07.00.00",
     "Q20.9",
     ""
    ],
    [
     "Obstruction congénitale de la voie de sortie du ventricule droit",
     "LA88.0",
     "07.05.20",
     "Q24.8",
     ""
    ],
    [
     "Ventricule droit à double chambre",
     "LA88.1",
     "07.03.01",
     "Q24.8",
     "DIAG046"
    ],
    [
     "Tétralogie de Fallot",
     "LA88.2",
     "01.01.01",
     "Q21.3",
     "DIAG028"
    ],
    [
     "Tétralogie de Fallot avec syndrome de valve pulmonaire absente",
     "LA88.20",
     "09.05.25",
     "Q24.8",
     "DIAG030"
    ],
    [
     "Tétralogie de Fallot avec atrésie pulmonaire",
     "LA88.21",
     "01.01.26",
     "Q21.3",
     "DIAG033"
    ],
    [
     "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire",
     "LA88.22",
     "01.01.57",
     "Q21.3",
     "DIAG034"
    ],
    [
     "Obstruction congénitale de la voie de sortie du ventricule gauche",
     "LA88.3",
     "07.09.28",
     "Q24.8",
     "DIAG051"
    ],
    [
     "Communication interventriculaire",
     "LA88.4",
     "07.10.00",
     "Q21.0",
     ""
    ],
    [
     "Communication interventriculaire musculaire trabéculaire",
     "LA88.40",
     "07.11.01",
     "Q21.0",
     "DIAG173"
    ],
    [
     "Communication interventriculaire centrale périmembraneuse",
     "LA88.41",
     "07.10.01",
     "Q21.0",
     "DIAG171"
    ],
    [
     "Communication interventriculaire non significatif sur le plan hémodynamique",
     "LA88.42",
     "07.15.01",
     "Q21.0",
     ""
    ],
    [
     "Cœur fonctionnellement univentriculaire",
     "LA89",
     "01.01.22",
     "Q20.9",
     "DIAG080"
    ],
    [
     "Connexion auriculoventriculaire à double entrée",
     "LA89.0",
     "01.01.14",
     "Q20.4",
     "DIAG074"
    ],
    [
     "Atrésie de la valve tricuspide",
     "LA89.1",
     "06.01.01",
     "Q22.4",
     "DIAG077"
    ],
    [
     "Atrésie mitrale",
     "LA89.2",
     "06.02.01",
     "Q23.2",
     "DIAG076"
    ],
    [
     "Syndrome d'hypoplasie du cœur gauche",
     "LA89.3",
     "01.01.09",
     "Q23.4",
     "DIAG069"
    ],
    [
     "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes",
     "LA8A",
     "09.04.29",
     "Q24.8",
     ""
    ],
    [
     "Anomalie congénitale de la valve pulmonaire",
     "LA8A.0",
     "09.05.29",
     "Q22.3",
     "DIAG047"
    ],
    [
     "Sténose congénitale de la valve pulmonaire",
     "LA8A.00",
     "09.05.04",
     "Q22.1",
     "DIAG041"
    ],
    [
     "Insuffisance congénitale de la valve pulmonaire",
     "LA8A.01",
     "09.05.22",
     "Q22.2",
     "DIAG049"
    ],
    [
     "Atrésie pulmonaire congénitale",
     "LA8A.1",
     "09.05.16",
     "Q22.0",
     "DIAG031"
    ],
    [
     "Atrésie pulmonaire avec septum ventriculaire intact",
     "LA8A.10",
     "01.01.07",
     "Q22.0",
     "DIAG032"
    ],
    [
     "Anomalie congénitale de la valve aortique",
     "LA8A.2",
     "09.15.19",
     "Q23.9",
     "DIAG058"
    ],
    [
     "Sténose congénitale de la valve aortique",
     "LA8A.20",
     "09.15.01",
     "Q23.0",
     "DIAG052"
    ],
    [
     "Insuffisance aortique congénitale",
     "LA8A.21",
     "09.15.07",
     "Q23.1",
     "DIAG056"
    ],
    [
     "Valve aortique bicuspide",
     "LA8A.22",
     "09.15.22",
     "Q23.1",
     "DIAG058"
    ],
    [
     "Atrésie de la valve aortique",
     "LA8A.23",
     "09.15.06",
     "Q23.0",
     "DIAG055"
    ],
    [
     "Valve aortique unicuspide",
     "LA8A.24",
     "09.15.21",
     "Q23.0",
     "DIAG058"
    ],
    [
     "Sténose supravalvulaire aortique congénitale",
     "LA8A.3",
     "09.16.18",
     "Q25.3",
     "DIAG053"
    ],
    [
     "Anévrisme du sinus aortique de Valsalva",
     "LA8A.4",
     "09.18.01",
     "Q25.4",
     "DIAG059"
    ],
    [
     "Sténose sous-aortique congénitale",
     "LA8A.5",
     "07.09.50",
     "Q24.4",
     "DIAG051"
    ],
    [
     "Sténose sous-pulmonaire congénitale",
     "LA8A.6",
     "07.05.32",
     "Q24.3",
     "DIAG166"
    ],
    [
     "Anomalie congénitale des grandes artères, y compris le canal artériel",
     "LA8B",
     "09.04.28",
     "Q24.8",
     ""
    ],
    [
     "Fenêtre aortopulmonaire congénitale",
     "LA8B.0",
     "09.04.07",
     "Q21.4",
     "DIAG014"
    ],
    [
     "Anomalie congénitale de l'arbre artériel pulmonaire",
     "LA8B.1",
     "09.07.16",
     "Q25.7",
     "DIAG042"
    ],
    [
     "Anomalie congénitale de l'aorte ou de ses branches",
     "LA8B.2",
     "07.09.34",
     "Q25.4",
     ""
    ],
    [
     "Coarctation de l'aorte",
     "LA8B.21",
     "09.29.01",
     "Q25.1",
     "DIAG095"
    ],
    [
     "Interruption de la crosse aortique",
     "LA8B.22",
     "09.29.31",
     "Q25.4",
     "DIAG098"
    ],
    [
     "Anomalie congénitale de l'aorte thoracique descendante ou abdominale",
     "LA8B.23",
     "09.28.47",
     "Q25.4",
     ""
    ],
    [
     "Anomalie congénitale de la branche de l'arc aortique",
     "LA8B.24",
     "09.30.17",
     "Q27.8",
     ""
    ],
    [
     "Syndrome de compression trachéo-œsophagienne",
     "LA8B.3",
     "09.31.40",
     "Q25.4",
     "DIAG100"
    ],
    [
     "Persistance du canal artériel",
     "LA8B.4",
     "09.27.21",
     "Q25.0",
     "DIAG099"
    ],
    [
     "Anomalie congénitale des artères coronaires",
     "LA8C",
     "09.46.03",
     "Q24.5",
     "DIAG161"
    ],
    [
     "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire",
     "LA8C.0",
     "09.41.01",
     "Q24.5",
     "DIAG159"
    ],
    [
     "Origine aortique anormale ou trajet anormal de l'artère coronaire",
     "LA8C.1",
     "09.42.00",
     "Q24.5",
     "DIAG158"
    ],
    [
     "Fistule artérielle coronaire congénitale",
     "LA8C.2",
     "09.45.16",
     "Q24.5",
     "DIAG160"
    ],
    [
     "Malformation congénitale du péricarde",
     "LA8D",
     "10.01.05",
     "Q24.8",
     "DIAG073"
    ],
    [
     "Anomalie congénitale du septum auriculaire",
     "LA8E",
     "05.07.01",
     "Q21.8",
     ""
    ],
    [
     "Foramen ovale perméable",
     "LA8E.0",
     "05.03.01",
     "Q21.1",
     "DIAG001"
    ],
    [
     "Communication interauriculaire dans la fosse ovale",
     "LA8E.1",
     "05.04.02",
     "Q21.1",
     "DIAG002"
    ],
    [
     "Anomalie du sinus veineux",
     "LA8E.2",
     "05.05.00",
     "Q21.1",
     "DIAG003"
    ],
    [
     "Communication interauriculaire par l'orifice du sinus coronaire",
     "LA8E.3",
     "05.05.03",
     "Q21.1",
     "DIAG004"
    ],
    [
     "Anomalie congénitale de l'oreillette droite",
     "LA8F",
     "05.01.13",
     "Q20.8",
     ""
    ],
    [
     "Anomalie congénitale de l'oreillette gauche",
     "LA8G",
     "05.02.11",
     "Q20.8",
     ""
    ],
    [
     "Oreillette gauche divisée",
     "LA8G.0",
     "05.02.01",
     "Q24.2",
     "DIAG024"
    ]
   ]
  },
  "conditions": {
   "titre": "Conditions cardiaques évolutives",
   "canon": "taussig-cardiac-condition",
   "colonnes": [
    "Libellé",
    "IPCCC",
    "CIM-10",
    "ECHSA"
   ],
   "lignes": [
    [
     "Création/agrandissement de communication interatriale",
     "",
     "",
     "SP-2010-4060"
    ],
    [
     "Cerclage de l'artère pulmonaire",
     "",
     "",
     "SP-2010-5640"
    ],
    [
     "Anastomose systémico-pulmonaire de Blalock-Taussig modifiée (MBTS)",
     "",
     "",
     "SP-2010-5590"
    ],
    [
     "Intervention de Norwood",
     "",
     "",
     "SP-2010-4870"
    ],
    [
     "Anastomose cavopulmonaire unidirectionnelle (Glenn unidirectionnel)",
     "",
     "",
     "SP-2010-5680"
    ],
    [
     "Anastomose cavopulmonaire bidirectionnelle (Glenn bidirectionnel)",
     "",
     "",
     "SP-2010-5670"
    ],
    [
     "Anastomose cavopulmonaire bidirectionnelle bilatérale",
     "",
     "",
     "SP-2010-5690"
    ],
    [
     "Fontan (TCPC), conduit extracardiaque, fenestré",
     "",
     "",
     "SP-2010-5000"
    ],
    [
     "Fontan (TCPC), conduit extracardiaque, non fenestré",
     "",
     "",
     "SP-2010-5010"
    ],
    [
     "Fontan (TCPC), tunnel latéral, fenestré",
     "",
     "",
     "SP-2010-4970"
    ],
    [
     "Fontan (TCPC), tunnel latéral, non fenestré",
     "",
     "",
     "SP-2010-4980"
    ],
    [
     "Réparation à un ventricule et demi",
     "",
     "",
     "SP-2010-4520"
    ],
    [
     "Palliation, autre",
     "",
     "",
     "SP-2010-5710"
    ],
    [
     "Endocardite infectieuse",
     "10.06.01",
     "I33.0",
     "DIAG123"
    ],
    [
     "Anomalie acquise de la veine cave supérieure",
     "10.31.01",
     "I87.9",
     "DIAG026"
    ],
    [
     "Anomalie acquise de la veine cave inférieure",
     "10.31.21",
     "I87.9",
     "DIAG026"
    ],
    [
     "Anomalie acquise du sinus coronaire",
     "10.30.16",
     "I87.1",
     ""
    ],
    [
     "Anomalie acquise des veines pulmonaires",
     "10.24.00",
     "I28.9",
     ""
    ],
    [
     "Anomalie acquise de l'oreillette droite",
     "15.10.10",
     "I51.8",
     ""
    ],
    [
     "Anomalie acquise de l'oreillette gauche",
     "15.10.20",
     "I51.8",
     ""
    ],
    [
     "Communication interatriale résiduelle (CIA)",
     "15.10.63",
     "Q21.1",
     ""
    ],
    [
     "Régurgitation tricuspide résiduelle",
     "15.11.03",
     "Q22.8",
     "DIAG037"
    ],
    [
     "Sténose mitrale résiduelle",
     "15.12.01",
     "Q23.2",
     "DIAG164"
    ],
    [
     "Régurgitation mitrale résiduelle",
     "15.12.03",
     "Q23.3",
     "DIAG067"
    ],
    [
     "Régurgitation troncale résiduelle",
     "15.25.03",
     "Q24.8",
     "DIAG-2010-170"
    ],
    [
     "Sténose valvulaire pulmonaire résiduelle",
     "15.30.01",
     "Q22.1",
     "DIAG041"
    ],
    [
     "Régurgitation pulmonaire résiduelle",
     "15.30.03",
     "Q22.2",
     "DIAG049"
    ],
    [
     "Sténose de la néovalve pulmonaire",
     "15.30.09",
     "I37.0",
     "DIAG041"
    ],
    [
     "Régurgitation de la néovalve pulmonaire",
     "15.30.10",
     "I37.1",
     "DIAG049"
    ],
    [
     "Sténose valvulaire aortique résiduelle",
     "15.35.01",
     "Q23.0",
     "DIAG052"
    ],
    [
     "Régurgitation aortique résiduelle",
     "15.35.03",
     "Q23.1",
     "DIAG056"
    ],
    [
     "Sténose de la néovalve aortique d'origine pulmonaire",
     "15.35.09",
     "I35.0",
     "DIAG052"
    ],
    [
     "Régurgitation de la néovalve aortique d'origine pulmonaire",
     "15.35.10",
     "I35.1",
     "DIAG056"
    ],
    [
     "Sténose acquise de la néovalve aortique d'origine troncale",
     "15.25.12",
     "Q24.8",
     "DIAG052"
    ],
    [
     "Régurgitation acquise de la néovalve aortique d'origine troncale",
     "15.25.13",
     "I38",
     "DIAG056"
    ],
    [
     "Composante ventriculaire résiduelle de canal atrioventriculaire",
     "15.16.02",
     "Q21.2",
     ""
    ],
    [
     "Régurgitation résiduelle de la valve atrioventriculaire commune",
     "15.13.02",
     "Q24.8",
     ""
    ],
    [
     "Sténose acquise de la valve atrioventriculaire commune (connexions biventriculaires)",
     "10.34.56",
     "I38",
     ""
    ],
    [
     "Dilatation ventriculaire droite acquise",
     "10.16.22",
     "I51.7",
     ""
    ],
    [
     "Hypertrophie ventriculaire droite acquise",
     "10.16.23",
     "I51.7",
     ""
    ],
    [
     "Anévrisme ventriculaire droit acquis",
     "10.16.02",
     "I25.3",
     "DIAG116"
    ],
    [
     "Dysfonction ventriculaire droite",
     "07.01.11",
     "I51.8",
     ""
    ],
    [
     "Obstruction résiduelle de la voie d'éjection du ventricule droit",
     "15.20.23",
     "Q24.8",
     ""
    ],
    [
     "Dilatation ventriculaire gauche acquise",
     "10.16.76",
     "I51.7",
     ""
    ],
    [
     "Hypertrophie ventriculaire gauche acquise",
     "10.16.77",
     "I51.7",
     ""
    ],
    [
     "Anévrisme ventriculaire gauche acquis",
     "10.16.42",
     "I25.3",
     "DIAG117"
    ],
    [
     "Défaillance ventriculaire gauche",
     "10.16.47",
     "I50.1",
     ""
    ],
    [
     "Complication post-procédurale de la voie d'éjection du ventricule gauche",
     "15.21.21",
     "I51.8",
     ""
    ],
    [
     "Sténose sous-aortique acquise",
     "10.16.86",
     "I51.8",
     "DIAG051"
    ],
    [
     "Sténose sous-pulmonaire acquise",
     "10.16.88",
     "I51.8",
     "DIAG166"
    ],
    [
     "Communication interventriculaire résiduelle (CIV)",
     "15.22.02",
     "Q21.0",
     ""
    ],
    [
     "Cardiomyopathie restrictive",
     "10.10.10",
     "I42.5",
     "DIAG070"
    ],
    [
     "Anomalie acquise de l'arbre artériel pulmonaire",
     "10.13.59",
     "I28.8",
     ""
    ],
    [
     "Sténose post-procédurale du tronc de l'artère pulmonaire",
     "15.32.02",
     "I28.8",
     "DIAG042"
    ],
    [
     "Sténose résiduelle de l'artère pulmonaire droite",
     "15.32.23",
     "Q25.6",
     "DIAG043"
    ],
    [
     "Sténose résiduelle de l'artère pulmonaire gauche",
     "15.32.43",
     "Q25.6",
     "DIAG043"
    ],
    [
     "Hypertension artérielle pulmonaire",
     "10.13.01",
     "I27.0",
     "DIAG131"
    ],
    [
     "Embolie pulmonaire",
     "10.13.51",
     "I26.9",
     "DIAG128"
    ],
    [
     "Sténose aortique supravalvulaire acquise",
     "10.14.77",
     "I77.1",
     "DIAG053"
    ],
    [
     "Dilatation acquise de l'aorte ascendante et/ou de la racine aortique",
     "10.14.82",
     "I71.9",
     "DIAG102"
    ],
    [
     "Dilatation de la racine aortique",
     "09.16.13",
     "Q25.4",
     "DIAG102"
    ],
    [
     "Dissection aortique",
     "10.14.51",
     "I71.0",
     "DIAG103"
    ],
    [
     "Anévrisme aortique",
     "10.14.50",
     "I71.2",
     "DIAG102"
    ],
    [
     "Coarctation aortique résiduelle",
     "15.37.05",
     "Q25.1",
     "DIAG095"
    ],
    [
     "Complication coronaire post-procédurale",
     "15.41.00",
     "I77.8",
     "DIAG161"
    ],
    [
     "Persistance résiduelle du canal artériel (PDA)",
     "15.39.02",
     "Q25.0",
     "DIAG099"
    ],
    [
     "Complication liée à un conduit cardiaque",
     "15.55.00",
     "T82.9",
     "DIAG048"
    ],
    [
     "Obstruction d'anastomose systémico-pulmonaire",
     "15.56.27",
     "T82.5",
     "DIAG-2010-2130"
    ],
    [
     "Obstruction partielle d'anastomose systémico-pulmonaire",
     "15.56.01",
     "T82.5",
     "DIAG-2010-2130"
    ],
    [
     "Obstruction complète d'anastomose systémico-pulmonaire",
     "15.56.02",
     "T82.5",
     "DIAG-2010-2130"
    ],
    [
     "Défaillance d'autogreffe pulmonaire",
     "15.55.24",
     "T82.8",
     "DIAG124"
    ],
    [
     "Circulation de Fontan défaillante",
     "15.90.60",
     "T81.8",
     ""
    ],
    [
     "Épanchement péricardique",
     "10.08.31",
     "I31.3",
     "DIAG071"
    ],
    [
     "Complication après transplantation cardiaque ou pulmonaire",
     "15.95.00",
     "I97.9",
     ""
    ]
   ]
  },
  "procedures": {
   "titre": "Gestes de cathétérisme",
   "canon": "taussig-procedure",
   "colonnes": [
    "Libellé",
    "IPCCC",
    "CCAM",
    "ECHSA",
    "SNOMED"
   ],
   "lignes": [
    [
     "angiocardiographie",
     "13.05.05",
     "DFQH001",
     "PROC-2010-2520",
     "34945008"
    ],
    [
     "cathétérisme cardiaque",
     "13.05.07",
     "EQQF003",
     "PROC-2010-2540",
     "41976001"
    ],
    [
     "cathétérisme cardiaque",
     "13.05.06",
     "EQQF001",
     "PROC-2010-2510",
     "41976001"
    ],
    [
     "électrophysiologie cardiaque",
     "13.05.12",
     "DEQF003",
     "PROC-2010-2680",
     "252425004"
    ],
    [
     "Extraction endovasculaire de corps étranger de l'aorte",
     "12.45.04",
     "DAGF001",
     "",
     "708810002"
    ],
    [
     "angioplastie percutanée par ballonnet d'une veine pulmonaire",
     "12.00.21",
     "",
     "PROC150",
     "276892002"
    ],
    [
     "insertion d'endoprothèse dans une veine pulmonaire",
     "12.00.22",
     "",
     "PROC151",
     "232978003"
    ],
    [
     "angioplastie percutanée par ballonnet d'une voie veineuse systémique",
     "12.00.43",
     "",
     "PROC150",
     "276896004"
    ],
    [
     "insertion d'endoprothèse dans une voie veineuse systémique",
     "12.00.44",
     "",
     "PROC151",
     "233003002"
    ],
    [
     "Pose de stent dans la veine cave supérieure",
     "12.00.36",
     "",
     "PROC151",
     ""
    ],
    [
     "septostomie auriculaire par ballonnet par retrait",
     "12.01.41",
     "DAMF001",
     "PROC148",
     "233044001"
    ],
    [
     "septostomie atriale",
     "12.01.47",
     "DAAF003",
     "PROC-2010-2640",
     "233043007"
    ],
    [
     "fermeture d'une communication interatriale",
     "12.01.06",
     "DASF004",
     "PROC152",
     "112811009"
    ],
    [
     "fermeture d'un foramen ovale perméable",
     "12.01.07",
     "DASF005",
     "PROC152",
     "41817002"
    ],
    [
     "Occlusion de l'auricule gauche",
     "12.38.25",
     "DASF074",
     "PROC152",
     "1344914001"
    ],
    [
     "Fermeture percutanée d'une CIA sinus venosus par stent couvert",
     "12.01.88",
     "",
     "PROC151",
     ""
    ],
    [
     "Remplacement valvulaire tricuspide par voie transluminale",
     "12.02.98",
     "",
     "PROC-2010-2660",
     ""
    ],
    [
     "Valve-in-valve tricuspide transluminale (dans une prothèse)",
     "12.02.99",
     "",
     "PROC-2010-2660",
     ""
    ],
    [
     "dilatation par ballonnet d'une prothèse de valve tricuspidienne",
     "12.02.12",
     "DBAF003",
     "PROC-2010-2590",
     "232810003"
    ],
    [
     "valvuloplastie de la valve mitrale",
     "12.03.10",
     "DBAF004",
     "PROC-2010-2590",
     "384642005"
    ],
    [
     "dilatation par ballonnet d'une prothèse de valve mitrale",
     "12.03.12",
     "DBAF004",
     "PROC-2010-2590",
     "232770003"
    ],
    [
     "Fermeture percutanée d'une fuite paravalvulaire de prothèse cardiaque par dispositif",
     "12.45.19",
     "DBSF001",
     "PROC152",
     "1231783006"
    ],
    [
     "réparation de la valve mitrale guidée par radioscopie",
     "12.03.97",
     "",
     "",
     "432394003"
    ],
    [
     "Remplacement valvulaire mitral par voie transluminale",
     "12.03.98",
     "",
     "PROC-2010-2660",
     ""
    ],
    [
     "Valve-in-valve mitrale transluminale (dans une prothèse)",
     "12.04.90",
     "",
     "PROC-2010-2660",
     ""
    ],
    [
     "Valve-in-valve mitrale transcathéter par voie transapicale",
     "12.04.91",
     "",
     "PROC-2010-2660",
     ""
    ],
    [
     "biopsie transluminale ventriculaire droite après transplantation cardiaque",
     "12.06.25",
     "",
     "",
     "308683001"
    ],
    [
     "dilatation par ballonnet de la chambre de chasse du ventricule droit",
     "12.06.05",
     "DAAF001",
     "PROC150",
     "233067004"
    ],
    [
     "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée",
     "12.06.18",
     "DAAF001",
     "PROC151",
     ""
    ],
    [
     "Dilatation intraluminale de la voie d'éjection du ventricule droit et du tronc de l'artère pulmonaire, par voie veineuse transcutanée",
     "12.06.95",
     "DAAF001",
     "PROC-2010-2630",
     ""
    ],
    [
     "fermeture transluminale percutanée de communication interventriculaire avec prothèse",
     "12.08.07",
     "DASF003",
     "PROC152",
     "233100002"
    ],
    [
     "valvuloplastie percutanée par ballonnet de la valve pulmonaire",
     "12.13.05",
     "DBAF002",
     "PROC-2010-2590",
     "46897002"
    ],
    [
     "valvulotomie transluminale percutanée de valve pulmonaire avec valvuloplastie",
     "12.13.09",
     "DBAF005",
     "PROC-2010-2590",
     "442188002"
    ],
    [
     "dilatation par ballonnet d'une prothèse de valve pulmonaire",
     "12.13.06",
     "DBAF002",
     "PROC-2010-2590",
     "232869005"
    ],
    [
     "valvuloplastie aortique percutanée par ballonnet",
     "12.16.05",
     "DBAF001",
     "PROC-2010-2590",
     "77166000"
    ],
    [
     "implantation d'une prothèse de valve pulmonaire, par voie percutanée",
     "12.13.51",
     "DBLF009",
     "PROC-2010-2660",
     "787162002"
    ],
    [
     "implantation d'une prothèse de valve pulmonaire, par voie percutanée",
     "12.13.87",
     "DBLF009",
     "PROC-2010-2660",
     "787162002"
    ],
    [
     "implantation d'une prothèse de valve pulmonaire, par voie percutanée",
     "12.13.52",
     "DBLF009",
     "PROC-2010-2660",
     "787162002"
    ],
    [
     "implantation d'une valve aortique transcathéter",
     "12.13.81",
     "DBLF001",
     "PROC-2010-2660",
     "773996000"
    ],
    [
     "implantation d'une valve aortique transcathéter",
     "12.13.82",
     "DBLF001",
     "PROC-2010-2660",
     "773996000"
    ],
    [
     "angioplastie de l'artère pulmonaire",
     "12.14.05",
     "DFAF002",
     "PROC150",
     "233214006"
    ],
    [
     "angioplastie de l'artère pulmonaire",
     "12.15.03",
     "DFAF002",
     "PROC150",
     "233214006"
    ],
    [
     "angioplastie de l'artère pulmonaire",
     "12.15.04",
     "DFAF002",
     "PROC150",
     "233214006"
    ],
    [
     "mise en place d'endoprothèse dans l'artère pulmonaire",
     "12.15.13",
     "DFAF003",
     "PROC151",
     "233215007"
    ],
    [
     "mise en place d'endoprothèse dans l'artère pulmonaire",
     "12.15.14",
     "DFAF003",
     "PROC151",
     "233215007"
    ],
    [
     "Pose de stent entre artère pulmonaire gauche et aorte descendante (Potts inversé)",
     "12.15.70",
     "",
     "PROC151",
     ""
    ],
    [
     "Restriction de flux des artères pulmonaires droite et gauche par dispositifs transcathéter",
     "12.15.42",
     "",
     "PROC152",
     ""
    ],
    [
     "embolectomie percutanée de l'artère pulmonaire",
     "12.15.49",
     "DFNF002",
     "",
     "175268008"
    ],
    [
     "fermeture d'une fistule ou fenestration aorticopulmonaire",
     "12.12.08",
     "",
     "PROC152",
     "61192001"
    ],
    [
     "angioplastie de coarctation",
     "12.18.04",
     "DGAF006",
     "PROC150",
     "308696000"
    ],
    [
     "angioplastie de coarctation",
     "12.18.08",
     "DGAF006",
     "PROC150",
     "308696000"
    ],
    [
     "mise en place d'endoprothèse au site de coarctation aortique",
     "12.18.17",
     "DGAF004",
     "PROC151",
     "448785002"
    ],
    [
     "mise en place d'endoprothèse au site de coarctation aortique",
     "12.18.22",
     "DGAF004",
     "PROC151",
     "448785002"
    ],
    [
     "insertion d'une endoprothèse dans le canal artériel",
     "12.10.14",
     "",
     "PROC151",
     "428280004"
    ],
    [
     "dilatation par ballonnet du canal artériel",
     "12.10.26",
     "",
     "PROC-2010-2630",
     "233202003"
    ],
    [
     "fermeture par voie percutanée du ligament artériel persistant",
     "12.24.04",
     "",
     "PROC152",
     "698642008"
    ],
    [
     "Embolisation percutanée transluminale d'une collatérale systémico-pulmonaire majeure (MAPCA)",
     "12.25.65",
     "ECSF004",
     "PROC154",
     "707823006"
    ],
    [
     "réparation d'une fistule artérioveineuse par occlusion",
     "12.25.02",
     "",
     "PROC152",
     "71330003"
    ],
    [
     "Embolisation percutanée d'un vaisseau lymphatique guidée par fluoroscopie",
     "12.49.50",
     "",
     "PROC154",
     "1357782001"
    ],
    [
     "Occlusion de collatérale véino-veineuse par dispositif",
     "12.70.08",
     "",
     "PROC152",
     ""
    ],
    [
     "dilatation par ballonnet d'une dérivation de la circulation systémique vers l'artère pulmonaire",
     "12.31.19",
     "",
     "PROC150",
     "449227002"
    ],
    [
     "angioplastie au niveau d'une dérivation de la circulation systémique vers l'artère pulmonaire",
     "12.36.37",
     "",
     "PROC-2010-2640",
     "261562001"
    ],
    [
     "mise en place d'endoprothèse dans une dérivation de la circulation systémique vers l'artère pulmonaire",
     "12.31.27",
     "",
     "PROC151",
     "448949007"
    ],
    [
     "dilatation par ballonnet d'une dérivation de la circulation systémique vers l'artère pulmonaire",
     "12.36.34",
     "",
     "PROC-2010-2630",
     "449227002"
    ],
    [
     "Occlusion d'anastomose systémico-pulmonaire par dispositif d'embolisation transluminal",
     "12.31.34",
     "",
     "PROC152",
     "448779009"
    ],
    [
     "dilatation par ballonnet d'un conduit cardiaque",
     "12.36.14",
     "",
     "PROC150",
     "449033003"
    ],
    [
     "dilatation transluminale percutanée par ballonnet d'un conduit cardiaque",
     "12.36.36",
     "",
     "PROC-2010-2640",
     "707813002"
    ],
    [
     "pose d'une endoprothèse dans un conduit cardiaque",
     "12.36.23",
     "",
     "PROC151",
     "449389000"
    ],
    [
     "pose d'une endoprothèse dans un conduit cardiaque",
     "12.36.32",
     "",
     "PROC-2010-2630",
     "449389000"
    ],
    [
     "péricardiocentèse transluminale percutanée",
     "12.32.43",
     "",
     "",
     "428394001"
    ],
    [
     "Implantation de dispositif par voie transluminale",
     "12.45.13",
     "",
     "PROC152",
     ""
    ],
    [
     "Stratégie hybride (chirurgicale et transluminale combinées)",
     "12.41.30",
     "",
     "",
     ""
    ],
    [
     "Implantation de valve aortique par voie transapicale (approche hybride)",
     "12.13.84",
     "",
     "PROC-2010-2660",
     ""
    ],
    [
     "Fermeture peropératoire de CIV par dispositif transluminal (approche hybride)",
     "12.08.28",
     "",
     "PROC152",
     ""
    ],
    [
     "Stratégie hybride pour hypoplasie du cœur gauche (cathéter et chirurgie)",
     "12.20.21",
     "",
     "",
     ""
    ],
    [
     "Approche hybride du cœur gauche hypoplasique (cathéter et chirurgie) : stade 1",
     "12.20.20",
     "",
     "",
     ""
    ],
    [
     "Cerclage bilatéral des artères pulmonaires + pose transcathéter de stent dans le canal artériel",
     "12.10.04",
     "",
     "PROC151",
     ""
    ],
    [
     "Approche hybride HLHS stade 2 : amalgame aortopulmonaire + anastomose(s) cavopulmonaire(s) supérieure(s) + décerclage des AP + réparation de l'arc",
     "12.20.23",
     "",
     "",
     ""
    ],
    [
     "Approche hybride HLHS stade 2 : amalgame aortopulmonaire + anastomose(s) cavopulmonaire(s) supérieure(s) + décerclage des AP",
     "12.20.22",
     "",
     "",
     ""
    ]
   ]
  },
  "complications": {
   "titre": "Événements indésirables (complications)",
   "canon": "taussig-adverse-event",
   "colonnes": [
    "Libellé",
    "IPCCC / EPCC",
    "CIM-10",
    "SNOMED",
    "ECHSA"
   ],
   "lignes": [
    [
     "Absence de complication post-procédurale",
     "15.90.03",
     "",
     "",
     ""
    ],
    [
     "complication liée à une intervention",
     "15.90.14",
     "T81.8",
     "116224001",
     "CP-2010-900"
    ],
    [
     "arrêt cardiaque",
     "15.00.01",
     "T81.8",
     "410429000",
     "CP2"
    ],
    [
     "fibrillation atriale chronique",
     "11.03.08",
     "I48",
     "426749004",
     "CP6"
    ],
    [
     "flutter auriculaire",
     "11.03.07",
     "I48",
     "5370000",
     "CP6"
    ],
    [
     "Postoperative cardiac arrhythmia",
     "11.00.00",
     "I49.9",
     "1230406008",
     "CP6"
    ],
    [
     "bloc atrioventriculaire complet",
     "11.06.10",
     "I44.2",
     "27885002",
     "CP6"
    ],
    [
     "tachycardie ectopique jonctionnelle",
     "11.04.12",
     "I97.1",
     "251155001",
     "CP6"
    ],
    [
     "tachycardie ventriculaire",
     "11.05.06",
     "I47.2",
     "25569003",
     "CP6"
    ],
    [
     "Arythmie nécessitant l'implantation d'un stimulateur",
     "15.60.06",
     "I97.1",
     "",
     "CP5"
    ],
    [
     "perforation d'une paroi du cœur due à une procédure",
     "15.50.03",
     "T81.2 / Y60.5",
     "1162507002",
     ""
    ],
    [
     "Postoperative cardiac tamponade",
     "15.83.14",
     "I31.9",
     "1230407004",
     "CP10"
    ],
    [
     "décès intra-opératoire",
     "12.33.31",
     "",
     "52136000",
     "CP-2010-350"
    ],
    [
     "communication interatriale résiduelle survenant après une intervention",
     "15.10.72",
     "Q21.1",
     "735579001",
     ""
    ],
    [
     "embolisation d'un fragment de dispositif vasculaire lors d'un cathétérisme cardiaque",
     "15.51.47",
     "T82.8",
     "473163005",
     ""
    ],
    [
     "Dysfonction de dispositif (complication de cathétérisme)",
     "15.51.50",
     "T82.5",
     "",
     ""
    ],
    [
     "corps étranger au niveau du cœur",
     "15.80.17",
     "T81.8",
     "282729004",
     ""
    ],
    [
     "corps étranger",
     "15.50.37",
     "T82.8",
     "125670008",
     ""
    ],
    [
     "perméabilité résiduelle du canal artériel survenant après une intervention pour canal artériel perméable persistant",
     "15.39.05",
     "I77.8",
     "871596002",
     ""
    ],
    [
     "communication interventriculaire résiduelle",
     "15.22.13",
     "Q21.0",
     "447941008",
     ""
    ],
    [
     "communication interatriale résiduelle",
     "15.10.63",
     "Q21.1",
     "449351005",
     ""
    ],
    [
     "régurgitation de la valve aortique",
     "15.50.20",
     "T81.2 / Y60.5",
     "60234000",
     ""
    ],
    [
     "régurgitation de la valve mitrale",
     "15.50.20",
     "T81.2 / Y60.5",
     "48724000",
     ""
    ],
    [
     "dysfonction de la prothèse valvulaire cardiaque",
     "15.50.20",
     "T81.2 / Y60.5",
     "271984008",
     ""
    ],
    [
     "régurgitation de la valve pulmonaire",
     "15.50.20",
     "T81.2 / Y60.5",
     "91434003",
     ""
    ],
    [
     "régurgitation de la valvule tricuspide",
     "15.50.20",
     "T81.2 / Y60.5",
     "111287006",
     ""
    ],
    [
     "perte du pouls distal",
     "15.50.11",
     "T81.7 / Y84.0",
     "414617007",
     ""
    ],
    [
     "faux anévrisme fémoral",
     "15.50.19",
     "T81.7 / Y84.0",
     "312373008",
     ""
    ],
    [
     "dissection artérielle",
     "15.50.19",
     "T81.7 / Y84.0",
     "710864009",
     ""
    ],
    [
     "extravasation de produit de contraste intraveineux",
     "15.50.19",
     "T81.7 / Y84.0",
     "427924001",
     ""
    ],
    [
     "fistule artérioveineuse",
     "15.50.19",
     "T81.7 / Y84.0",
     "439470001",
     ""
    ],
    [
     "perforation d'une artère",
     "15.50.19",
     "T81.7 / Y84.0",
     "307312008",
     ""
    ],
    [
     "Problème d'équipement pendant le cathétérisme",
     "15.50.30",
     "T82.5",
     "",
     ""
    ],
    [
     "migration d'endoprothèse vasculaire",
     "15.50.71",
     "T82.8",
     "473125002",
     ""
    ],
    [
     "vaisseau sanguin déchiré",
     "15.50.78",
     "T82.8",
     "248707009",
     ""
    ],
    [
     "Compression coronaire après implantation de dispositif transluminal",
     "15.50.61",
     "T82.5",
     "",
     ""
    ],
    [
     "migration d'endoprothèse vasculaire",
     "15.50.91",
     "T82.5",
     "473125002",
     ""
    ],
    [
     "Dysfonction de dispositif pendant le cathétérisme",
     "15.51.50",
     "T82.5",
     "",
     ""
    ],
    [
     "embolisation d'un fragment de dispositif vasculaire lors d'un cathétérisme cardiaque",
     "15.50.65",
     "T82.8",
     "473163005",
     ""
    ]
   ]
  },
  "genetique": {
   "titre": "Syndromes génétiques (covariable de contexte)",
   "canon": "taussig-genetic-syndrome",
   "colonnes": [
    "Libellé",
    "OrphaCode",
    "ICD-11",
    "CIM-10",
    "ECHSA"
   ],
   "lignes": [
    [
     "Trisomie 21",
     "870",
     "LD40.0",
     "Q90.0 / Q90.1 / Q90.2 / Q90.9",
     "NCA9"
    ],
    [
     "Syndrome de Turner",
     "881",
     "LD50.0",
     "Q96.0 / Q96.1 / Q96.8 / Q96.9 / Q96.2 / Q96.3 / Q96.4",
     "NCA29"
    ],
    [
     "Syndrome de délétion 22q11.2",
     "567",
     "LD44.N0",
     "D82.1",
     "NCA8"
    ],
    [
     "Syndrome de trisomie 18",
     "3380",
     "LD40.2",
     "Q91.0 / Q91.1 / Q91.2 / Q91.3",
     "NCA-2010-S-150"
    ],
    [
     "Syndrome de trisomie 13",
     "3378",
     "LD40.1",
     "Q91.4 / Q91.5 / Q91.6 / Q91.7",
     "NCA-2010-S-360"
    ],
    [
     "Glycogénose par déficit en maltase acide",
     "365",
     "5C51.3",
     "E74.0",
     ""
    ],
    [
     "Ataxie de Friedreich",
     "95",
     "8A03.10",
     "G11.1",
     ""
    ],
    [
     "Dystrophie musculaire de Duchenne",
     "98896",
     "8C70.1",
     "G71.0",
     ""
    ],
    [
     "Syndrome de Marfan",
     "558",
     "LD28.01",
     "Q87.4",
     "NCA17"
    ],
    [
     "Syndrome d'Ehlers-Danlos",
     "98249",
     "LD28.1",
     "Q79.6",
     ""
    ],
    [
     "Syndrome de Loeys-Dietz",
     "60030",
     "BD50.Z",
     "Q87.4",
     "NCA-2010-S-270"
    ],
    [
     "Syndrome de Noonan",
     "648",
     "LD2F.15",
     "Q87.1",
     "NCA-2010-S-350"
    ],
    [
     "Sclérose tubéreuse de Bourneville",
     "805",
     "LD2D.2",
     "Q85.1",
     ""
    ],
    [
     "Syndrome de Williams",
     "904",
     "LD44.70",
     "Q93.8",
     "NCA10"
    ],
    [
     "Syndrome d'Alagille",
     "52",
     "LB20.0Y",
     "Q44.7",
     "NCA4"
    ],
    [
     "Syndrome de rubéole congénitale",
     "290",
     "KA62.8",
     "P35.0",
     "NCA7"
    ],
    [
     "Anomalies congénitales multiples/syndrome dysmorphique",
     "68341",
     "LD2F",
     "Q89.7",
     "NCA-2010-S-510"
    ]
   ]
  },
  "sites": {
   "titre": "Sites anatomiques cibles",
   "canon": "taussig-sites-mesure",
   "colonnes": [
    "Libellé",
    "SNOMED",
    "Région"
   ],
   "lignes": [
    [
     "oreillette droite",
     "73829009",
     "Cavité"
    ],
    [
     "oreillette gauche",
     "82471001",
     "Cavité"
    ],
    [
     "ventricule droit",
     "53085002",
     "Cavité"
    ],
    [
     "ventricule gauche",
     "87878005",
     "Cavité"
    ],
    [
     "valve tricuspide",
     "46030003",
     "Valve"
    ],
    [
     "valve mitrale",
     "91134007",
     "Valve"
    ],
    [
     "valve pulmonaire",
     "39057004",
     "Valve"
    ],
    [
     "valve aortique",
     "34202007",
     "Valve"
    ],
    [
     "septum interauriculaire",
     "58095006",
     "Septum"
    ],
    [
     "septum interventriculaire",
     "589001",
     "Septum"
    ],
    [
     "aorte ascendante",
     "54247002",
     "Gros vaisseau"
    ],
    [
     "arc aortique",
     "57034009",
     "Gros vaisseau"
    ],
    [
     "aorte thoracique descendante",
     "32672002",
     "Gros vaisseau"
    ],
    [
     "isthme aortique",
     "88593004",
     "Gros vaisseau"
    ],
    [
     "tronc de l'artère pulmonaire",
     "45341000",
     "Gros vaisseau"
    ],
    [
     "artère pulmonaire droite",
     "78480002",
     "Gros vaisseau"
    ],
    [
     "artère pulmonaire gauche",
     "50408007",
     "Gros vaisseau"
    ],
    [
     "veine pulmonaire",
     "122972007",
     "Gros vaisseau"
    ],
    [
     "veine cave supérieure",
     "48345005",
     "Gros vaisseau"
    ],
    [
     "veine cave supérieure gauche",
     "9642004",
     "Gros vaisseau"
    ],
    [
     "veine cave inférieure",
     "64131007",
     "Gros vaisseau"
    ],
    [
     "canal artériel",
     "4432005",
     "Gros vaisseau"
    ],
    [
     "artère coronaire gauche",
     "50018008",
     "Gros vaisseau"
    ],
    [
     "artère coronaire droite",
     "13647002",
     "Gros vaisseau"
    ],
    [
     "tronc artériel brachiocéphalique",
     "12691009",
     "Gros vaisseau"
    ],
    [
     "artère fémorale",
     "7657000",
     "Abord"
    ],
    [
     "veine fémorale",
     "83419000",
     "Abord"
    ],
    [
     "veine jugulaire interne",
     "12123001",
     "Abord"
    ],
    [
     "veine sous-clavière",
     "9454009",
     "Abord"
    ],
    [
     "artère radiale",
     "45631007",
     "Abord"
    ],
    [
     "veine ombilicale",
     "367567000",
     "Abord"
    ],
    [
     "conduit cardiaque",
     "264824009",
     "Site post-chir."
    ],
    [
     "Hemi-Fontan pathway",
     "443327008",
     "Site post-chir."
    ],
    [
     "dérivation cavopulmonaire inférieure (VCI→AP)",
     "TAUSSIG-CAVOPULM-INF",
     "Site post-chir."
    ],
    [
     "Fontan pathway",
     "443298009",
     "Site post-chir."
    ],
    [
     "Fontan fenestration",
     "443724003",
     "Site post-chir."
    ],
    [
     "artère collatérale aortopulmonaire majeure",
     "253689007",
     "Site post-chir."
    ],
    [
     "artère collatérale systémicopulmonaire",
     "253690003",
     "Site post-chir."
    ],
    [
     "artère brachiale",
     "17137000",
     "Abord"
    ],
    [
     "veine brachiale",
     "20115005",
     "Abord"
    ],
    [
     "artère carotide commune",
     "32062004",
     "Abord"
    ],
    [
     "veine hépatique",
     "8993003",
     "Abord"
    ]
   ]
  },
  "mesures-prop": {
   "titre": "Propriétés / grandeurs mesurées",
   "canon": "taussig-measurement-property",
   "colonnes": [
    "Libellé",
    "Code TAUSSIG",
    "Unité UCUM",
    "SNOMED secondaire",
    "Famille"
   ],
   "lignes": [
    [
     "Pression systolique",
     "pressure_systolic",
     "mm[Hg]",
     "251067001 Cardiovascular pressure",
     "Pression"
    ],
    [
     "Pression diastolique",
     "pressure_diastolic",
     "mm[Hg]",
     "251067001 Cardiovascular pressure",
     "Pression"
    ],
    [
     "Pression moyenne",
     "pressure_mean",
     "mm[Hg]",
     "251067001 Cardiovascular pressure",
     "Pression"
    ],
    [
     "Pression télédiastolique (ventricule)",
     "pressure_end_diastolic",
     "mm[Hg]",
     "251067001 Cardiovascular pressure",
     "Pression"
    ],
    [
     "Pression capillaire pulmonaire bloquée (wedge)",
     "pressure_wedge",
     "mm[Hg]",
     "251067001 Cardiovascular pressure",
     "Pression"
    ],
    [
     "Saturation en oxygène",
     "oxygen_saturation",
     "%",
     "103228002 Oxygen saturation of hemoglobin",
     "Oxymétrie"
    ],
    [
     "Débit pulmonaire (Qp)",
     "flow_pulmonary",
     "L/min",
     "",
     "Débit"
    ],
    [
     "Débit systémique (Qs)",
     "flow_systemic",
     "L/min",
     "",
     "Débit"
    ],
    [
     "Rapport Qp/Qs",
     "flow_ratio_qp_qs",
     "{ratio}",
     "",
     "Débit"
    ],
    [
     "Débit cardiaque",
     "cardiac_output",
     "L/min",
     "82799009 Cardiac output",
     "Débit"
    ],
    [
     "Index cardiaque",
     "cardiac_index",
     "L/min/m2",
     "54993008 Cardiac index",
     "Débit"
    ],
    [
     "Résistance vasculaire pulmonaire (RVP)",
     "resistance_pulmonary",
     "mm[Hg].min/L",
     "88619007 Vascular resistance",
     "Résistance"
    ],
    [
     "RVP indexée (RVPi)",
     "resistance_pulmonary_indexed",
     "mm[Hg].min/L/m2",
     "88619007 Vascular resistance",
     "Résistance"
    ],
    [
     "Résistance vasculaire systémique (RVS)",
     "resistance_systemic",
     "mm[Hg].min/L",
     "88619007 Vascular resistance",
     "Résistance"
    ],
    [
     "Rapport RVP/RVS",
     "resistance_ratio_pvr_svr",
     "{ratio}",
     "",
     "Résistance"
    ],
    [
     "Gradient pic-à-pic",
     "gradient_peak_to_peak",
     "mm[Hg]",
     "251081004 Cardiovascular pressure gradient",
     "Gradient"
    ],
    [
     "Gradient moyen",
     "gradient_mean",
     "mm[Hg]",
     "251081004 Cardiovascular pressure gradient",
     "Gradient"
    ],
    [
     "Consommation d'oxygène (VO2)",
     "oxygen_consumption",
     "mL/min/m2",
     "",
     "Autre"
    ],
    [
     "Grade de régurgitation",
     "regurgitation_grade",
     "",
     "",
     "Qualitatif"
    ]
   ]
  },
  "mesures-methode": {
   "titre": "Modalité & condition de mesure",
   "canon": "taussig-measurement-modality",
   "colonnes": [
    "Libellé",
    "Code TAUSSIG",
    "SNOMED",
    "Axe"
   ],
   "lignes": [
    [
     "cathétérisme cardiaque",
     "catheterization",
     "41976001",
     "modalité (method)"
    ],
    [
     "échocardiographie",
     "echocardiography",
     "40701008",
     "modalité (method)"
    ],
    [
     "IRM du cœur",
     "cardiac_mri",
     "241620005",
     "modalité (method)"
    ],
    [
     "tomodensitométrie du cœur",
     "ct",
     "241547009",
     "modalité (method)"
    ],
    [
     "ECG",
     "ecg",
     "29303009",
     "modalité (method)"
    ],
    [
     "au repos",
     "resting",
     "263678003",
     "condition"
    ],
    [
     "état à l'effort",
     "exercise",
     "128976003",
     "condition"
    ],
    [
     "épreuve de stress pharmacologique",
     "pharmacologic_stress",
     "428813002",
     "condition"
    ],
    [
     "oxygénothérapie",
     "supplemental_o2",
     "57485005",
     "condition"
    ],
    [
     "monoxyde d'azote",
     "nitric_oxide",
     "6710000",
     "condition"
    ],
    [
     "room_air",
     "room_air",
     "",
     "condition"
    ],
    [
     "other",
     "other",
     "",
     "condition"
    ]
   ]
  },
  "mesures-phase": {
   "titre": "Phase procédurale de la mesure",
   "canon": "vs-taussig-procedure-phase",
   "colonnes": [
    "Libellé",
    "Code TAUSSIG",
    "SNOMED"
   ],
   "lignes": [
    [
     "état basal",
     "baseline",
     "128974000"
    ],
    [
     "état préopératoire",
     "pre_intervention",
     "72077002"
    ],
    [
     "période postopératoire",
     "post_intervention",
     "303110006"
    ],
    [
     "not_applicable",
     "not_applicable",
     ""
    ]
   ]
  },
  "materiel": {
   "titre": "Types de matériel",
   "canon": "taussig-materiel-types",
   "colonnes": [
    "Libellé",
    "SNOMED / TAUSSIG",
    "Catégorie (centre)"
   ],
   "lignes": [
    [
     "Cathéter à ballonnet cardiaque",
     "705924003",
     "Ballons"
    ],
    [
     "Endoprothèse (stent)",
     "65818007",
     "Stents"
    ],
    [
     "Cathéter",
     "19923001",
     "Sondes"
    ],
    [
     "Cathéter-guide",
     "102317008",
     "KT Guide"
    ],
    [
     "Guide de cathéter cardiaque",
     "1137638009",
     "Guides"
    ],
    [
     "Introducteur de cathéter",
     "467764008",
     "Introducteurs"
    ],
    [
     "Anse (lasso)",
     "25005004",
     "Extraction"
    ],
    [
     "Bioprothèse valvulaire pulmonaire transcathéter",
     "860585001",
     "Valve pulmonaire percutanée (Melody/Sapien)"
    ],
    [
     "Bioprothèse valvulaire aortique transcathéter",
     "1362137001",
     "Valve aortique transcathéter (TAVI)"
    ],
    [
     "Bioprothèse valvulaire tricuspide transcathéter",
     "1141607002",
     "Valve tricuspide transcathéter"
    ],
    [
     "Dispositif de fermeture de CIA",
     "TAUSSIG-OCCLUDER-CIA",
     "Dispositif de fermeture de CIA"
    ],
    [
     "Dispositif de fermeture de CIV",
     "TAUSSIG-OCCLUDER-CIV",
     "Dispositif de fermeture de CIV"
    ],
    [
     "Dispositif de fermeture de canal artériel",
     "TAUSSIG-OCCLUDER-CANAL",
     "Dispositif de fermeture de canal artériel"
    ],
    [
     "Dispositif de fermeture d’un autre vaisseau",
     "TAUSSIG-OCCLUDER-VASCULAR",
     "Dispositif de fermeture d’un autre vaisseau"
    ],
    [
     "Dispositif de fermeture de FOP",
     "TAUSSIG-OCCLUDER-FOP",
     "Dispositif de fermeture de FOP"
    ]
   ]
  }
 },
 "examples": {},
 "meta": {
  "nbElements": 115,
  "nbEntities": 19,
  "nbValuesets": 10,
  "nbExamples": 0
 }
};
