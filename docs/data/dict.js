/* Généré par 07-site/build/parse_dict.py — NE PAS ÉDITER À LA MAIN. */
window.TAUSSIG_DICT = {
 "elements": {
  "Patient.birth_weight_g": {
   "def": "Masse corporelle du patient mesurée à la naissance.",
   "res": "Observation",
   "path": "Observation.value[x]",
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
   "path": "Patient.identifier",
   "dt": "Identifier",
   "cs": "urn:oid:1.2.250.1.213.1.4.8",
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
   "def": "Pseudonyme de l'opérateur tel qu'il apparaît dans le texte pseudonymisé (ex. [OPERATEUR_1]). Jamais de nom réel.",
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
   "path": "Practitioner.identifier:rpps",
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
   "path": "Organization.identifier:finess",
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
   "path": "Procedure.reasonReference.extension:diagnosisRole",
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
   "vs": "taussig-condition-ipccc",
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
   "path": "Procedure.reasonReference.extension:indicationRole",
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
   "path": "Device.extension:implantClinicalStatus",
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
   "res": "DeviceUseStatement",
   "path": "DeviceUseStatement.bodySite",
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
   "path": "Device.deviceName.name",
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
   "path": "Provenance.entity",
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
   "res": "DeviceUseStatement",
   "path": "DeviceUseStatement.timing[x]",
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
   "path": "Device.extension:implantStatusDate",
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
   "path": "Device.extension:implantedExternally",
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
   "path": "Device.udiCarrier.carrierHRF",
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
   "path": "Observation.value[x]",
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
   "path": "Observation.value[x]",
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
   "path": "Observation.value[x]",
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
   "path": "Observation.value[x]",
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
   "path": "Observation.value[x]",
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
   "path": "Observation.value[x]",
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
   "def": "Date et heure d'entrée peau, c'est-à-dire du début de la procédure ; la date seule si l'heure n'est pas documentée.",
   "res": "Procedure",
   "path": "Procedure.performedPeriod.start",
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
   "path": "Procedure.extension:contrastUsed",
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
   "vs": "periprocedural-medication-atc-vs",
   "bind": "extensible",
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
   "vs": "periprocedural-medication-atc-vs",
   "bind": "extensible",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.antibioprophylaxis_given": {
   "def": "Indicateur d'administration d'une antibioprophylaxie lors du cathétérisme.",
   "res": "MedicationAdministration",
   "path": "MedicationAdministration.category",
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
   "path": "MedicationAdministration.category",
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
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "puncture-success-vs",
   "bind": "required",
   "type": "boolean",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "VascularAccess.side": {
   "def": "Latéralité anatomique, droite ou gauche, de la voie d'abord vasculaire.",
   "res": "Procedure",
   "path": "Procedure.bodySite",
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
   "def": "Concept TAUSSIG du geste interventionnel, choisi par son libellé dans la liste des 188 concepts (Short List IPCCC du cathétérisme) ; les codes IPCCC, CCAM, ECHSA et SNOMED en sont déduits.",
   "res": "Procedure",
   "path": "Procedure.code",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/taussig-procedure",
   "vs": "taussig-procedure",
   "bind": "required",
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
   "termCol": 3
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
   "termCol": 6
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
   "termCol": 4
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
   "termCol": 5
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
   "path": "Procedure.statusReason.text",
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
   "res": "Procedure",
   "path": "Procedure.usedReference.extension:attemptResult",
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
   "path": "Procedure.usedReference.extension:usageSequence",
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
   "path": "Device.udiCarrier.carrierHRF",
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
   "path": "Device.property.type",
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
   "path": "Device.property.valueQuantity",
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
   "path": "Device.property.valueQuantity",
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
   "path": "Observation.code",
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
   "path": "Observation.value[x]",
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
   "path": "Observation.value[x]",
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
   "path": "Observation.value[x]",
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
   "path": "Observation.value[x]",
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
   "path": "Patient.deceased[x]",
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
   "path": "Observation.value[x]",
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
   "path": "Observation.value[x]",
   "dt": "boolean",
   "cs": "",
   "vs": "procedure-outcome-type-vs (code hemodynamic_success)",
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
   "path": "Observation.value[x]",
   "dt": "boolean",
   "cs": "",
   "vs": "procedure-outcome-type-vs (code residual_lesion_present)",
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
   "path": "Patient.deceased[x]",
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
   "path": "AdverseEvent.event.coding:snomed",
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
   "path": "AdverseEvent.extension:attribution",
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
   "path": "AdverseEvent.extension:management",
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
  },
  "InterventionalGesture.catheterization_id": {
   "def": "Cathétérisme dont le geste fait partie.",
   "res": "Procedure",
   "path": "Procedure.partOf",
   "dt": "Reference(TaussigCatheterization)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "InterventionalGesture.target_diagnosis_id / target_condition_id": {
   "def": "Lésion ciblée par le geste : diagnostic congénital natif ou condition évolutive.",
   "res": "Procedure",
   "path": "Procedure.reasonReference",
   "dt": "Reference(TaussigCardiacDiagnosis | TaussigCardiacCondition)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "InterventionalGesture.target_substrate_id": {
   "def": "Implant posé par le geste, ou substrat préexistant repris (redilatation, valve-in-valve).",
   "res": "Procedure",
   "path": "Procedure.focalDevice.manipulated",
   "dt": "Reference(TaussigCardiacImplant)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialUsed.gesture_id": {
   "def": "Geste au cours duquel le matériel a été utilisé.",
   "res": "Procedure",
   "path": "Procedure.usedReference",
   "dt": "Reference(TaussigMaterialUsed)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "VascularAccess.catheterization_id": {
   "def": "Cathétérisme auquel appartient l'abord.",
   "res": "Procedure",
   "path": "Procedure.partOf",
   "dt": "Reference(TaussigCatheterization)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AnesthesiaManagement.catheterization_id": {
   "def": "Cathétérisme pris en charge par l'anesthésie.",
   "res": "Procedure",
   "path": "Procedure.partOf",
   "dt": "Reference(TaussigCatheterization)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.catheterization_id": {
   "def": "Cathétérisme pendant lequel la mesure est faite (mesure de contexte, hors geste précis).",
   "res": "Observation",
   "path": "Observation.partOf",
   "dt": "Reference(TaussigCatheterization | TaussigInterventionalGesture)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.implant mesuré (v5)": {
   "def": "Implant sur lequel porte la mesure (lumière intrastent, gradient trans-valve). Demande HARVEY calibres 2026-11-04.",
   "res": "Observation",
   "path": "Observation.focus",
   "dt": "Reference(TaussigCardiacImplant)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ClinicalMeasurement.qualificatif de site (v5)": {
   "def": "Précision du site telle qu'écrite (proximal, distal, aval, intrastent). Demande HARVEY calibres 2026-11-04.",
   "res": "Observation",
   "path": "Observation.bodySite.text",
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
  "ProcedureOutcome.catheterization_id": {
   "def": "Cathétérisme dont le résultat est synthétisé.",
   "res": "Observation",
   "path": "Observation.partOf",
   "dt": "Reference(TaussigCatheterization)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AdverseEvent.catheterization_id / gesture_id": {
   "def": "Acte au cours duquel l'EI est survenu (contexte de survenue, sans jugement d'imputabilité).",
   "res": "AdverseEvent",
   "path": "AdverseEvent.extension:procedure",
   "dt": "Reference(TaussigCatheterization | TaussigInterventionalGesture)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.previous_implant_id": {
   "def": "Implant précédent (chaînage valve-in-valve, stent-in-stent).",
   "res": "Device",
   "path": "Device.extension:previousImplant",
   "dt": "Reference(TaussigCardiacImplant)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.geste de pose": {
   "def": "Geste TAUSSIG qui a posé l'implant, quand il est tracé (décision D1).",
   "res": "DeviceUseStatement",
   "path": "DeviceUseStatement.derivedFrom",
   "dt": "Reference(TaussigInterventionalGesture)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacCondition.cardiac_diagnosis_id": {
   "def": "Diagnostic congénital d'origine de la condition évolutive.",
   "res": "Condition",
   "path": "Condition.extension:relatedDiagnosis",
   "dt": "Reference(TaussigCardiacDiagnosis)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "PeriproceduralMedication.catheterization_id": {
   "def": "Acte pendant lequel le médicament est administré.",
   "res": "MedicationAdministration",
   "path": "MedicationAdministration.partOf",
   "dt": "Reference(TaussigCatheterization | TaussigAnesthesiaManagement)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.procedure_concept": {
   "def": "Concept TAUSSIG de l'acte de cathétérisme (même liste que les gestes : cathétérisme diagnostique, thérapeutique…).",
   "res": "Procedure",
   "path": "Procedure.code",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/taussig-procedure",
   "vs": "taussig-procedure",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.skin_out_datetime": {
   "def": "Date et heure de sortie peau (fin de la procédure).",
   "res": "Procedure",
   "path": "Procedure.performedPeriod.end",
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
  "Catheterization.room_in_datetime": {
   "def": "Date et heure d'entrée en salle de cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.extension:roomPeriod.value[x].start",
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
  "Catheterization.room_out_datetime": {
   "def": "Date et heure de sortie de salle de cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.extension:roomPeriod.value[x].end",
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
  "Catheterization.procedure_duration_min": {
   "def": "Durée de la procédure, de l'entrée à la sortie peau, en minutes.",
   "res": "Procedure",
   "path": "Procedure.performedPeriod",
   "dt": "Period",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "integer",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.urgency": {
   "def": "Caractère urgent du cathétérisme : programmé, urgent, en urgence, de sauvetage (définitions du registre IMPACT).",
   "res": "Procedure",
   "path": "Procedure.extension:procedureUrgency",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/procedure-urgency",
   "vs": "procedure-urgency-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.operator_id": {
   "def": "Praticien ayant réalisé le cathétérisme.",
   "res": "Procedure",
   "path": "Procedure.performer.actor",
   "dt": "Reference(TaussigPractitioner)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..*",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.operator_role": {
   "def": "Rôle du praticien : 1er opérateur, 2e opérateur, opérateur en formation (interne, fellow).",
   "res": "Procedure",
   "path": "Procedure.performer.function",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/operator-role",
   "vs": "operator-role-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "InterventionalGesture.gesture_sequence": {
   "def": "Rang du geste dans le cathétérisme (1, 2, 3…), dans l'ordre où les gestes ont été réalisés.",
   "res": "Procedure",
   "path": "Procedure.extension:gestureSequence",
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
  "MaterialUsed.manufacturer": {
   "def": "Fabricant du matériel, en texte, normalisé selon la liste de référence (onglet VS Fabricants).",
   "res": "Device",
   "path": "Device.manufacturer",
   "dt": "string",
   "cs": "",
   "vs": "liste de référence (onglet VS Fabricants)",
   "bind": "",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialUsed.serial_number": {
   "def": "Numéro de série du matériel.",
   "res": "Device",
   "path": "Device.serialNumber",
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
  "MaterialUsed.lot_number": {
   "def": "Numéro de lot du matériel.",
   "res": "Device",
   "path": "Device.lotNumber",
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
  "CardiacImplant.manufacturer": {
   "def": "Fabricant de l'implant, en texte, normalisé selon la liste de référence (onglet VS Fabricants).",
   "res": "Device",
   "path": "Device.manufacturer",
   "dt": "string",
   "cs": "",
   "vs": "liste de référence (onglet VS Fabricants)",
   "bind": "",
   "type": "string",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.serial_number": {
   "def": "Numéro de série de l'implant.",
   "res": "Device",
   "path": "Device.serialNumber",
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
  "CardiacImplant.lot_number": {
   "def": "Numéro de lot de l'implant.",
   "res": "Device",
   "path": "Device.lotNumber",
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
  "MaterialParameter.stent_covering": {
   "def": "Couverture du stent : nu ou couvert.",
   "res": "Device",
   "path": "Device.property:covering.valueCode",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/stent-covering",
   "vs": "stent-covering-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialParameter.stent_expansion": {
   "def": "Mode d'expansion du stent : expansible au ballon ou auto-expansible.",
   "res": "Device",
   "path": "Device.property:expansionMode.valueCode",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/stent-expansion",
   "vs": "stent-expansion-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "MaterialParameter.stent_coating": {
   "def": "Revêtement du stent : actif (pharmacologique) ou non.",
   "res": "Device",
   "path": "Device.property:coating.valueCode",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/stent-coating",
   "vs": "stent-coating-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacDiagnosis.diagnosis_concept": {
   "def": "Concept TAUSSIG du diagnostic congénital, choisi par son libellé ; CIM-11, IPCCC, CIM-10 et ECHSA en sont déduits.",
   "res": "Condition",
   "path": "Condition.code",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/taussig-diagnosis",
   "vs": "taussig-diagnosis",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacCondition.condition_concept": {
   "def": "Concept TAUSSIG de la condition cardiaque évolutive, choisi par son libellé ; IPCCC, CIM-10 et ECHSA en sont déduits.",
   "res": "Condition",
   "path": "Condition.code",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/taussig-condition",
   "vs": "taussig-condition",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacCondition.clinical_status": {
   "def": "Statut clinique de la condition au moment du cathétérisme : active ou résolue (distinct de « explicitement absent », qui signifie que la condition n'existe pas).",
   "res": "Condition",
   "path": "Condition.clinicalStatus",
   "dt": "CodeableConcept",
   "cs": "http://terminology.hl7.org/CodeSystem/condition-clinical",
   "vs": "taussig-condition-clinical-status-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "AdverseEvent.adverse_event_concept": {
   "def": "Concept TAUSSIG de la complication, choisi par son libellé ; IPCCC, CIM-10, SNOMED et ECHSA en sont déduits.",
   "res": "AdverseEvent",
   "path": "AdverseEvent.event",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/taussig-adverse-event",
   "vs": "taussig-adverse-event",
   "bind": "extensible",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "GeneticSyndrome.syndrome_icd10": {
   "def": "Code CIM-10 du syndrome, déduit de l'OrphaCode.",
   "res": "Condition",
   "path": "Condition.code.coding:cim10",
   "dt": "Coding",
   "cs": "http://hl7.org/fhir/sid/icd-10",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "GeneticSyndrome.syndrome_echsa": {
   "def": "Code ECHSA du syndrome, déduit de l'OrphaCode.",
   "res": "Condition",
   "path": "Condition.code.coding:echsa",
   "dt": "Coding",
   "cs": "https://taussig/fhir/CodeSystem/echsa",
   "vs": "",
   "bind": "",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.stent_covering": {
   "def": "Couverture du stent posé : nu ou couvert.",
   "res": "Device",
   "path": "Device.property:covering.valueCode",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/stent-covering",
   "vs": "stent-covering-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.stent_expansion": {
   "def": "Mode d'expansion du stent posé : expansible au ballon ou auto-expansible.",
   "res": "Device",
   "path": "Device.property:expansionMode.valueCode",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/stent-expansion",
   "vs": "stent-expansion-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "CardiacImplant.stent_coating": {
   "def": "Revêtement du stent posé : actif (pharmacologique) ou non.",
   "res": "Device",
   "path": "Device.property:coating.valueCode",
   "dt": "CodeableConcept",
   "cs": "https://taussig/fhir/CodeSystem/stent-coating",
   "vs": "stent-coating-vs",
   "bind": "required",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "InterventionalGesture.device_action": {
   "def": "Action du geste sur l'implant : pose, reprise (redilatation, repositionnement), retrait.",
   "res": "Procedure",
   "path": "Procedure.focalDevice.action",
   "dt": "CodeableConcept",
   "cs": "http://snomed.info/sct",
   "vs": "device-action (FHIR R4, preferred)",
   "bind": "preferred",
   "type": "code",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "ImplantUse.implant_link": {
   "def": "Implant décrit par la fiche de pose.",
   "res": "DeviceUseStatement",
   "path": "DeviceUseStatement.device",
   "dt": "Reference(TaussigCardiacImplant)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
  },
  "Catheterization.indication_link": {
   "def": "Diagnostic ou condition qui motive le cathétérisme (le rôle est porté par l'extension du lien).",
   "res": "Procedure",
   "path": "Procedure.reasonReference",
   "dt": "Reference(TaussigCardiacDiagnosis | TaussigCardiacCondition)",
   "cs": "",
   "vs": "",
   "bind": "",
   "type": "reference",
   "card": "0..1",
   "req": "non",
   "axis": null,
   "termCol": null
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
   "n": 5
  },
  {
   "name": "CardiacDiagnosis",
   "fr": "Diagnostic cardiaque",
   "desc": "Cardiopathie congénitale : diagnostic figé et verrouillable, multi-codé.",
   "zone": "substrats",
   "zoneTitre": "Les trois substrats",
   "n": 9
  },
  {
   "name": "CardiacCondition",
   "fr": "Condition cardiaque",
   "desc": "État hémodynamique évolutif que le patient traverse (shunt, HTAP…).",
   "zone": "substrats",
   "zoneTitre": "Les trois substrats",
   "n": 10
  },
  {
   "name": "CardiacImplant",
   "fr": "Implant cardiaque",
   "desc": "Matériel implanté doté d’un cycle de vie propre (stent, valve, occluder…).",
   "zone": "substrats",
   "zoneTitre": "Les trois substrats",
   "n": 17
  },
  {
   "name": "Catheterization",
   "fr": "Cathétérisme",
   "desc": "L’acte-contenant : abord, anesthésie, gestes et mesures d’une même procédure.",
   "zone": "acte",
   "zoneTitre": "L’acte de cathétérisme",
   "n": 22
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
   "n": 9
  },
  {
   "name": "VascularAccess",
   "fr": "Abord vasculaire",
   "desc": "Voie(s) d’abord utilisée(s) pour le cathétérisme.",
   "zone": "acte",
   "zoneTitre": "L’acte de cathétérisme",
   "n": 6
  },
  {
   "name": "InterventionalGesture",
   "fr": "Geste interventionnel",
   "desc": "Geste thérapeutique décrit sur trois axes : cible, action, technique.",
   "zone": "gestes",
   "zoneTitre": "Gestes & matériel",
   "n": 14
  },
  {
   "name": "MaterialUsed",
   "fr": "Matériel utilisé",
   "desc": "Dispositif employé pour un geste, avec trois niveaux de succès.",
   "zone": "gestes",
   "zoneTitre": "Gestes & matériel",
   "n": 11
  },
  {
   "name": "MaterialParameter",
   "fr": "Paramètre de matériel",
   "desc": "Caractéristique dimensionnelle d’un matériel (diamètre, longueur…).",
   "zone": "gestes",
   "zoneTitre": "Gestes & matériel",
   "n": 7
  },
  {
   "name": "ClinicalMeasurement",
   "fr": "Mesure clinique",
   "desc": "Mesure hémodynamique ou d’imagerie phasée (référence / pré / post).",
   "zone": "resultats",
   "zoneTitre": "Mesures & résultats",
   "n": 16
  },
  {
   "name": "ProcedureOutcome",
   "fr": "Résultat de procédure",
   "desc": "Synthèse de fin d’acte — une vue, pas une source de vérité.",
   "zone": "resultats",
   "zoneTitre": "Mesures & résultats",
   "n": 7
  },
  {
   "name": "AdverseEvent",
   "fr": "Événement indésirable",
   "desc": "Complication cotée, avec gestion et origine consignées séparément.",
   "zone": "resultats",
   "zoneTitre": "Mesures & résultats",
   "n": 12
  },
  {
   "name": "PeriproceduralMedication",
   "fr": "PeriproceduralMedication",
   "desc": "",
   "zone": "resultats",
   "zoneTitre": "Mesures & résultats",
   "n": 1
  },
  {
   "name": "ImplantUse",
   "fr": "ImplantUse",
   "desc": "",
   "zone": "resultats",
   "zoneTitre": "Mesures & résultats",
   "n": 1
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
    "ECHSA",
    "Code TAUSSIG"
   ],
   "lignes": [
    [
     "Anomalie de position-orientation du cœur",
     "LA80",
     "02.01.09",
     "Q24.8",
     "",
     "TAUSSIG-DIAG-0001"
    ],
    [
     "Lévocardie",
     "LA80.0",
     "02.01.03",
     "Q24.1",
     "DIAG-2010-2100",
     "TAUSSIG-DIAG-0002"
    ],
    [
     "Dextrocardie",
     "LA80.1",
     "02.01.02",
     "Q24.0",
     "DIAG-2010-2090",
     "TAUSSIG-DIAG-0003"
    ],
    [
     "Mésocardie",
     "LA80.2",
     "02.01.04",
     "Q24.8",
     "DIAG-2010-2110",
     "TAUSSIG-DIAG-0004"
    ],
    [
     "Image en miroir complète",
     "LA82",
     "03.01.03",
     "Q89.3",
     "DIAG-2010-2120",
     "TAUSSIG-DIAG-0005"
    ],
    [
     "Isomérisme droit",
     "LA83",
     "03.01.04",
     "Q20.6",
     "DIAG115",
     "TAUSSIG-DIAG-0006"
    ],
    [
     "Isomérisme gauche",
     "LA84",
     "03.01.05",
     "Q20.6",
     "DIAG114",
     "TAUSSIG-DIAG-0007"
    ],
    [
     "Anomalie congénitale d'une connexion auriculoventriculaire ou ventriculoartérielle",
     "LA85",
     "01.03.09",
     "Q20.9",
     "",
     "TAUSSIG-DIAG-0008"
    ],
    [
     "Connexions atrioventriculaires discordantes",
     "LA85.0",
     "01.04.01",
     "Q20.5",
     "",
     "TAUSSIG-DIAG-0009"
    ],
    [
     "Transposition congénitalement corrigée des grandes artères",
     "LA85.00",
     "01.01.03",
     "Q20.5",
     "DIAG082 ; DIAG155",
     "TAUSSIG-DIAG-0010"
    ],
    [
     "Transposition des gros vaisseaux",
     "LA85.1",
     "01.05.01",
     "Q20.3",
     "DIAG083 ; DIAG084 ; DIAG085 ; DIAG086",
     "TAUSSIG-DIAG-0011"
    ],
    [
     "Ventricule droit à double issue",
     "LA85.2",
     "01.01.04",
     "Q20.1",
     "DIAG088 ; DIAG-2024-3",
     "TAUSSIG-DIAG-0012"
    ],
    [
     "Ventricule droit à double sortie avec communication interventriculaire sous-pulmonaire de type transposition",
     "LA85.20",
     "01.01.18",
     "Q20.1",
     "DIAG090",
     "TAUSSIG-DIAG-0013"
    ],
    [
     "Ventricule droit à double sortie avec communication interventriculaire sans relation avec les deux gros vaisseaux",
     "LA85.21",
     "01.01.19",
     "Q20.1",
     "DIAG091",
     "TAUSSIG-DIAG-0014"
    ],
    [
     "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux sans sténose pulmonaire, type communication interventriculaire",
     "LA85.22",
     "01.01.40",
     "Q20.1",
     "DIAG088",
     "TAUSSIG-DIAG-0015"
    ],
    [
     "Ventricule droit à double sortie avec communication interventriculaire sous-aortique ou en relation avec les deux gros vaisseaux et sténose pulmonaire de type Fallot",
     "LA85.23",
     "01.01.17",
     "Q20.1",
     "DIAG089 ; DIAG-2024-4",
     "TAUSSIG-DIAG-0016"
    ],
    [
     "Ventricule gauche à double issue",
     "LA85.3",
     "01.05.03",
     "Q20.2",
     "DIAG093",
     "TAUSSIG-DIAG-0017"
    ],
    [
     "Tronc artériel commun",
     "LA85.4",
     "09.01.01",
     "Q20.0",
     "DIAG016",
     "TAUSSIG-DIAG-0018"
    ],
    [
     "Tronc artériel commun à dominance aortique",
     "LA85.40",
     "09.01.15",
     "Q20.0",
     "DIAG016",
     "TAUSSIG-DIAG-0019"
    ],
    [
     "Tronc artériel commun à dominance pulmonaire et arc aortique interrompue",
     "LA85.41",
     "09.01.18",
     "Q20.0",
     "DIAG-2010-2010",
     "TAUSSIG-DIAG-0020"
    ],
    [
     "Anomalie congénitale de la veine médiastinale",
     "LA86",
     "04.00.07",
     "Q26.8",
     "",
     "TAUSSIG-DIAG-0021"
    ],
    [
     "Veine cave supérieure gauche",
     "LA86.0",
     "04.01.25",
     "Q26.1",
     "DIAG026",
     "TAUSSIG-DIAG-0022"
    ],
    [
     "Absence de toit du sinus coronaire",
     "LA86.1",
     "04.04.13",
     "Q21.1",
     "DIAG004",
     "TAUSSIG-DIAG-0023"
    ],
    [
     "Anomalie du retour veineux pulmonaire",
     "LA86.2",
     "04.08.07",
     "Q26.4",
     "",
     "TAUSSIG-DIAG-0024"
    ],
    [
     "Connexion veineuse pulmonaire totale anormale",
     "LA86.20",
     "04.08.05",
     "Q26.2",
     "DIAG019 ; DIAG020 ; DIAG021 ; DIAG022",
     "TAUSSIG-DIAG-0025"
    ],
    [
     "Connexion veineuse pulmonaire partielle anormale",
     "LA86.21",
     "04.07.01",
     "Q26.3",
     "DIAG017",
     "TAUSSIG-DIAG-0026"
    ],
    [
     "Syndrome du cimeterre",
     "LA86.22",
     "03.02.23",
     "Q26.8",
     "DIAG018",
     "TAUSSIG-DIAG-0027"
    ],
    [
     "Sténose ou hypoplasie veineuse pulmonaire congénitale",
     "LA86.3",
     "04.08.31",
     "Q26.8",
     "DIAG025 ; DIAG-2019-11",
     "TAUSSIG-DIAG-0028"
    ],
    [
     "Anomalie congénitale d'une valve auriculoventriculaire ou d'un septum auriculoventriculaire",
     "LA87",
     "06.00.15",
     "Q23.8",
     "",
     "TAUSSIG-DIAG-0029"
    ],
    [
     "Anomalie congénitale de la valve tricuspide",
     "LA87.0",
     "06.01.11",
     "Q22.9",
     "DIAG040 ; DIAG039",
     "TAUSSIG-DIAG-0030"
    ],
    [
     "Insuffisance tricuspide congénitale",
     "LA87.00",
     "06.01.25",
     "Q22.8",
     "DIAG037",
     "TAUSSIG-DIAG-0031"
    ],
    [
     "Sténose congénitale de la valve tricuspide",
     "LA87.01",
     "06.01.07",
     "Q22.4",
     "DIAG038",
     "TAUSSIG-DIAG-0032"
    ],
    [
     "Dysplasie de la valve tricuspide",
     "LA87.02",
     "06.01.03",
     "Q22.8",
     "DIAG040",
     "TAUSSIG-DIAG-0033"
    ],
    [
     "Malformation d'Ebstein de la valve tricuspide",
     "LA87.03",
     "06.01.34",
     "Q22.5",
     "DIAG036",
     "TAUSSIG-DIAG-0034"
    ],
    [
     "Anomalie congénitale de la valve mitrale",
     "LA87.1",
     "06.02.11",
     "Q23.9",
     "DIAG068 ; DIAG066",
     "TAUSSIG-DIAG-0035"
    ],
    [
     "Insuffisance mitrale congénitale",
     "LA87.10",
     "06.02.25",
     "Q23.3",
     "DIAG067",
     "TAUSSIG-DIAG-0036"
    ],
    [
     "Sténose valvulaire mitrale congénitale",
     "LA87.11",
     "06.02.07",
     "Q23.2",
     "DIAG062",
     "TAUSSIG-DIAG-0037"
    ],
    [
     "Dysplasie de la valve mitrale",
     "LA87.12",
     "06.02.03",
     "Q23.8",
     "DIAG068",
     "TAUSSIG-DIAG-0038"
    ],
    [
     "Anomalie congénitale de l'appareil mitral sousvalvaire",
     "LA87.13",
     "06.02.21",
     "Q23.8",
     "DIAG063",
     "TAUSSIG-DIAG-0039"
    ],
    [
     "Jonction auriculoventriculaire commune sans communication septale auriculoventriculaire",
     "LA87.3",
     "06.07.28",
     "Q21.2",
     "",
     "TAUSSIG-DIAG-0040"
    ],
    [
     "Jonction auriculoventriculaire commune avec communication septale auriculoventriculaire",
     "LA87.4",
     "06.06.00",
     "Q21.2",
     "DIAG010",
     "TAUSSIG-DIAG-0041"
    ],
    [
     "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire uniquement",
     "LA87.40",
     "06.06.01",
     "Q21.2",
     "DIAG012",
     "TAUSSIG-DIAG-0042"
    ],
    [
     "Anomalie septale auriculoventriculaire avec communication au niveau ventriculaire uniquement",
     "LA87.41",
     "06.06.08",
     "Q21.2",
     "DIAG011",
     "TAUSSIG-DIAG-0043"
    ],
    [
     "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication restrictive au niveau ventriculaire",
     "LA87.42",
     "06.06.10",
     "Q21.2",
     "DIAG010 ; DIAG011",
     "TAUSSIG-DIAG-0044"
    ],
    [
     "Anomalie septale auriculoventriculaire avec communication au niveau auriculaire et communication non-restrictive au niveau ventriculaire",
     "LA87.43",
     "06.06.09",
     "Q21.2",
     "DIAG010",
     "TAUSSIG-DIAG-0045"
    ],
    [
     "Communication septale auriculoventriculaire avec déséquilibre ventriculaire",
     "LA87.44",
     "06.07.26",
     "Q21.2",
     "DIAG078",
     "TAUSSIG-DIAG-0046"
    ],
    [
     "Anomalie septal auriculoventriculaire et tétralogie de Fallot",
     "LA87.45",
     "01.01.20",
     "Q21.2",
     "DIAG029",
     "TAUSSIG-DIAG-0047"
    ],
    [
     "Anomalie congénitale du ventricule ou du septum ventriculaire",
     "LA88",
     "07.00.00",
     "Q20.9",
     "DIAG121 ; DIAG120 ; DIAG-2019-27 ; DIAG-2019-28",
     "TAUSSIG-DIAG-0048"
    ],
    [
     "Obstruction congénitale de la voie de sortie du ventricule droit",
     "LA88.0",
     "07.05.20",
     "Q24.8",
     "",
     "TAUSSIG-DIAG-0049"
    ],
    [
     "Ventricule droit à double chambre",
     "LA88.1",
     "07.03.01",
     "Q24.8",
     "DIAG046",
     "TAUSSIG-DIAG-0050"
    ],
    [
     "Tétralogie de Fallot",
     "LA88.2",
     "01.01.01",
     "Q21.3",
     "DIAG028 ; DIAG-2010-2140",
     "TAUSSIG-DIAG-0051"
    ],
    [
     "Tétralogie de Fallot avec syndrome de valve pulmonaire absente",
     "LA88.20",
     "09.05.25",
     "Q21.3",
     "DIAG030",
     "TAUSSIG-DIAG-0052"
    ],
    [
     "Tétralogie de Fallot avec atrésie pulmonaire",
     "LA88.21",
     "01.01.26",
     "Q21.3",
     "DIAG033",
     "TAUSSIG-DIAG-0053"
    ],
    [
     "Tétralogie de Fallot avec atrésie pulmonaire et artère collatérale systémique à pulmonaire",
     "LA88.22",
     "01.01.57",
     "Q21.3",
     "DIAG034",
     "TAUSSIG-DIAG-0054"
    ],
    [
     "Obstruction congénitale de la voie de sortie du ventricule gauche",
     "LA88.3",
     "07.09.28",
     "Q24.8",
     "DIAG051",
     "TAUSSIG-DIAG-0055"
    ],
    [
     "Communication interventriculaire",
     "LA88.4",
     "07.10.00",
     "Q21.0",
     "DIAG168 ; DIAG169 ; DIAG008 ; DIAG170 ; DIAG172 ; DIAG174",
     "TAUSSIG-DIAG-0056"
    ],
    [
     "Communication interventriculaire musculaire trabéculaire",
     "LA88.40",
     "07.11.01",
     "Q21.0",
     "DIAG173",
     "TAUSSIG-DIAG-0057"
    ],
    [
     "Communication interventriculaire centrale périmembraneuse",
     "LA88.41",
     "07.10.01",
     "Q21.0",
     "DIAG171",
     "TAUSSIG-DIAG-0058"
    ],
    [
     "Communication interventriculaire non significatif sur le plan hémodynamique",
     "LA88.42",
     "07.15.01",
     "Q21.0",
     "",
     "TAUSSIG-DIAG-0059"
    ],
    [
     "Cœur fonctionnellement univentriculaire",
     "LA89",
     "01.01.22",
     "Q20.9",
     "DIAG080 ; DIAG-2010-851 ; DIAG079",
     "TAUSSIG-DIAG-0060"
    ],
    [
     "Connexion auriculoventriculaire à double entrée",
     "LA89.0",
     "01.01.14",
     "Q20.4",
     "DIAG074",
     "TAUSSIG-DIAG-0061"
    ],
    [
     "Atrésie de la valve tricuspide",
     "LA89.1",
     "06.01.01",
     "Q22.4",
     "DIAG077",
     "TAUSSIG-DIAG-0062"
    ],
    [
     "Atrésie mitrale",
     "LA89.2",
     "06.02.01",
     "Q23.2",
     "DIAG076",
     "TAUSSIG-DIAG-0063"
    ],
    [
     "Syndrome d'hypoplasie du cœur gauche",
     "LA89.3",
     "01.01.09",
     "Q23.4",
     "DIAG069",
     "TAUSSIG-DIAG-0064"
    ],
    [
     "Anomalie congénitale d'une valve ventriculoartérielle ou des régions adjacentes",
     "LA8A",
     "09.04.29",
     "Q24.8",
     "DIAG060",
     "TAUSSIG-DIAG-0065"
    ],
    [
     "Anomalie congénitale de la valve pulmonaire",
     "LA8A.0",
     "09.05.29",
     "Q22.3",
     "DIAG047 ; DIAG050",
     "TAUSSIG-DIAG-0066"
    ],
    [
     "Sténose congénitale de la valve pulmonaire",
     "LA8A.00",
     "09.05.04",
     "Q22.1",
     "DIAG041",
     "TAUSSIG-DIAG-0067"
    ],
    [
     "Insuffisance congénitale de la valve pulmonaire",
     "LA8A.01",
     "09.05.22",
     "Q22.2",
     "DIAG049",
     "TAUSSIG-DIAG-0068"
    ],
    [
     "Atrésie pulmonaire congénitale",
     "LA8A.1",
     "09.05.16",
     "Q22.0",
     "DIAG031",
     "TAUSSIG-DIAG-0069"
    ],
    [
     "Atrésie pulmonaire avec septum ventriculaire intact",
     "LA8A.10",
     "01.01.07",
     "Q22.0",
     "DIAG032",
     "TAUSSIG-DIAG-0070"
    ],
    [
     "Anomalie congénitale de la valve aortique",
     "LA8A.2",
     "09.15.19",
     "Q23.9",
     "DIAG058 ; DIAG057",
     "TAUSSIG-DIAG-0071"
    ],
    [
     "Sténose congénitale de la valve aortique",
     "LA8A.20",
     "09.15.01",
     "Q23.0",
     "DIAG052",
     "TAUSSIG-DIAG-0072"
    ],
    [
     "Insuffisance aortique congénitale",
     "LA8A.21",
     "09.15.07",
     "Q23.1",
     "DIAG056",
     "TAUSSIG-DIAG-0073"
    ],
    [
     "Valve aortique bicuspide",
     "LA8A.22",
     "09.15.22",
     "Q23.1",
     "DIAG058",
     "TAUSSIG-DIAG-0074"
    ],
    [
     "Atrésie de la valve aortique",
     "LA8A.23",
     "09.15.06",
     "Q23.0",
     "DIAG055",
     "TAUSSIG-DIAG-0075"
    ],
    [
     "Valve aortique unicuspide",
     "LA8A.24",
     "09.15.21",
     "Q23.0",
     "DIAG058",
     "TAUSSIG-DIAG-0076"
    ],
    [
     "Sténose supravalvulaire aortique congénitale",
     "LA8A.3",
     "09.16.18",
     "Q25.3",
     "DIAG053",
     "TAUSSIG-DIAG-0077"
    ],
    [
     "Anévrisme du sinus aortique de Valsalva",
     "LA8A.4",
     "09.18.01",
     "Q25.4",
     "DIAG059",
     "TAUSSIG-DIAG-0078"
    ],
    [
     "Sténose sous-aortique congénitale",
     "LA8A.5",
     "07.09.50",
     "Q24.4",
     "DIAG051",
     "TAUSSIG-DIAG-0079"
    ],
    [
     "Sténose sous-pulmonaire congénitale",
     "LA8A.6",
     "07.05.32",
     "Q24.3",
     "DIAG166",
     "TAUSSIG-DIAG-0080"
    ],
    [
     "Anomalie congénitale des grandes artères, y compris le canal artériel",
     "LA8B",
     "09.04.28",
     "Q24.8",
     "",
     "TAUSSIG-DIAG-0081"
    ],
    [
     "Fenêtre aortopulmonaire congénitale",
     "LA8B.0",
     "09.04.07",
     "Q21.4",
     "DIAG014",
     "TAUSSIG-DIAG-0082"
    ],
    [
     "Anomalie congénitale de l'arbre artériel pulmonaire",
     "LA8B.1",
     "09.07.16",
     "Q25.7",
     "DIAG042",
     "TAUSSIG-DIAG-0083"
    ],
    [
     "Anomalie congénitale de l'aorte ou de ses branches",
     "LA8B.2",
     "07.09.34",
     "Q25.4",
     "DIAG096",
     "TAUSSIG-DIAG-0084"
    ],
    [
     "Coarctation de l'aorte",
     "LA8B.21",
     "09.29.01",
     "Q25.1",
     "DIAG095",
     "TAUSSIG-DIAG-0085"
    ],
    [
     "Interruption de la crosse aortique",
     "LA8B.22",
     "09.29.31",
     "Q25.4",
     "DIAG098 ; DIAG-2010-2000 ; DIAG-2010-2020",
     "TAUSSIG-DIAG-0086"
    ],
    [
     "Anomalie congénitale de l'aorte thoracique descendante ou abdominale",
     "LA8B.23",
     "09.28.47",
     "Q25.4",
     "",
     "TAUSSIG-DIAG-0087"
    ],
    [
     "Anomalie congénitale de la branche de l'arc aortique",
     "LA8B.24",
     "09.30.17",
     "Q27.8",
     "",
     "TAUSSIG-DIAG-0088"
    ],
    [
     "Syndrome de compression trachéo-œsophagienne",
     "LA8B.3",
     "09.31.40",
     "Q25.4",
     "DIAG100",
     "TAUSSIG-DIAG-0089"
    ],
    [
     "Persistance du canal artériel",
     "LA8B.4",
     "09.27.21",
     "Q25.0",
     "DIAG099",
     "TAUSSIG-DIAG-0090"
    ],
    [
     "Anomalie congénitale des artères coronaires",
     "LA8C",
     "09.46.03",
     "Q24.5",
     "DIAG161 ; DIAG157 ; DIAG-2019-35 ; DIAG-2019-36 ; DIAG-2019-37 ; DIAG-2019-38 ; DIAG-2019-43 ; DIAG-2019-44 ; DIAG-2019-45 ; DIAG-2019-46",
     "TAUSSIG-DIAG-0091"
    ],
    [
     "Origine anormale de l'artère coronaire à partir de l'arbre artériel pulmonaire",
     "LA8C.0",
     "09.41.01",
     "Q24.5",
     "DIAG159 ; DIAG-2019-33 ; DIAG-2019-34",
     "TAUSSIG-DIAG-0092"
    ],
    [
     "Origine aortique anormale ou trajet anormal de l'artère coronaire",
     "LA8C.1",
     "09.42.00",
     "Q24.5",
     "DIAG158 ; DIAG-2019-32",
     "TAUSSIG-DIAG-0093"
    ],
    [
     "Fistule artérielle coronaire congénitale",
     "LA8C.2",
     "09.45.16",
     "Q24.5",
     "DIAG160 ; DIAG-2019-39 ; DIAG-2019-40 ; DIAG-2019-41 ; DIAG-2019-42",
     "TAUSSIG-DIAG-0094"
    ],
    [
     "Malformation congénitale du péricarde",
     "LA8D",
     "10.01.05",
     "Q24.8",
     "DIAG073",
     "TAUSSIG-DIAG-0095"
    ],
    [
     "Anomalie congénitale du septum auriculaire",
     "LA8E",
     "05.07.01",
     "Q21.8",
     "",
     "TAUSSIG-DIAG-0096"
    ],
    [
     "Foramen ovale perméable",
     "LA8E.0",
     "05.03.01",
     "Q21.1",
     "DIAG001",
     "TAUSSIG-DIAG-0097"
    ],
    [
     "Communication interauriculaire dans la fosse ovale",
     "LA8E.1",
     "05.04.02",
     "Q21.1",
     "DIAG002",
     "TAUSSIG-DIAG-0098"
    ],
    [
     "Anomalie du sinus veineux",
     "LA8E.2",
     "05.05.00",
     "Q21.1",
     "DIAG003",
     "TAUSSIG-DIAG-0099"
    ],
    [
     "Communication interauriculaire par l'orifice du sinus coronaire",
     "LA8E.3",
     "05.05.03",
     "Q21.1",
     "DIAG004",
     "TAUSSIG-DIAG-0100"
    ],
    [
     "Anomalie congénitale de l'oreillette droite",
     "LA8F",
     "05.01.13",
     "Q20.8",
     "DIAG-2019-30",
     "TAUSSIG-DIAG-0101"
    ],
    [
     "Anomalie congénitale de l'oreillette gauche",
     "LA8G",
     "05.02.11",
     "Q20.8",
     "DIAG-2019-29",
     "TAUSSIG-DIAG-0102"
    ],
    [
     "Oreillette gauche divisée",
     "LA8G.0",
     "05.02.01",
     "Q24.2",
     "DIAG024",
     "TAUSSIG-DIAG-0103"
    ],
    [
     "Sténose ou hypoplasie congénitale centrale des artères pulmonaires (en amont de la bifurcation hilaire)",
     "LA8B.1",
     "09.10.37",
     "Q25.6",
     "DIAG043",
     "TAUSSIG-DIAG-0104"
    ],
    [
     "Sténose ou hypoplasie congénitale périphérique des artères pulmonaires (au niveau ou en aval de la bifurcation hilaire)",
     "LA8B.1",
     "09.10.38",
     "Q25.6",
     "DIAG044",
     "TAUSSIG-DIAG-0105"
    ],
    [
     "Artères pulmonaires droite et gauche congénitalement discontinues, non confluentes",
     "LA8B.1",
     "09.10.30",
     "Q25.7",
     "DIAG165",
     "TAUSSIG-DIAG-0106"
    ],
    [
     "Artère(s) collatérale(s) systémico-pulmonaire(s) majeure(s) (MAPCA)",
     "LA8B.1",
     "09.08.01",
     "Q27.8",
     "DIAG035",
     "TAUSSIG-DIAG-0107"
    ],
    [
     "Fistule (malformation) artérioveineuse pulmonaire",
     "LA90.5",
     "09.19.05",
     "Q25.7",
     "DIAG127",
     "TAUSSIG-DIAG-0108"
    ],
    [
     "Bloc atrioventriculaire complet congénital idiopathique",
     "BC63.20",
     "11.06.08",
     "Q24.6",
     "DIAG111",
     "TAUSSIG-DIAG-0109"
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
    "ECHSA",
    "Code TAUSSIG"
   ],
   "lignes": [
    [
     "Création/agrandissement de communication interatriale",
     "",
     "",
     "SP-2010-4060",
     "TAUSSIG-COND-0001"
    ],
    [
     "Cerclage de l'artère pulmonaire",
     "",
     "",
     "SP-2010-5640",
     "TAUSSIG-COND-0002"
    ],
    [
     "Anastomose systémico-pulmonaire de Blalock-Taussig modifiée (MBTS)",
     "",
     "",
     "SP-2010-5590",
     "TAUSSIG-COND-0003"
    ],
    [
     "Intervention de Norwood",
     "",
     "",
     "SP-2010-4870",
     "TAUSSIG-COND-0004"
    ],
    [
     "Anastomose cavopulmonaire unidirectionnelle (Glenn unidirectionnel)",
     "",
     "",
     "SP-2010-5680",
     "TAUSSIG-COND-0005"
    ],
    [
     "Anastomose cavopulmonaire bidirectionnelle (Glenn bidirectionnel)",
     "",
     "",
     "SP-2010-5670 ; DIAG-2024-1",
     "TAUSSIG-COND-0006"
    ],
    [
     "Anastomose cavopulmonaire bidirectionnelle bilatérale",
     "",
     "",
     "SP-2010-5690 ; DIAG-2024-2",
     "TAUSSIG-COND-0007"
    ],
    [
     "Fontan (TCPC), conduit extracardiaque, fenestré",
     "",
     "",
     "SP-2010-5000",
     "TAUSSIG-COND-0008"
    ],
    [
     "Fontan (TCPC), conduit extracardiaque, non fenestré",
     "",
     "",
     "SP-2010-5010",
     "TAUSSIG-COND-0009"
    ],
    [
     "Fontan (TCPC), tunnel latéral, fenestré",
     "",
     "",
     "SP-2010-4970",
     "TAUSSIG-COND-0010"
    ],
    [
     "Fontan (TCPC), tunnel latéral, non fenestré",
     "",
     "",
     "SP-2010-4980",
     "TAUSSIG-COND-0011"
    ],
    [
     "Réparation à un ventricule et demi",
     "",
     "",
     "SP-2010-4520",
     "TAUSSIG-COND-0012"
    ],
    [
     "Palliation, autre",
     "",
     "",
     "SP-2010-5710",
     "TAUSSIG-COND-0013"
    ],
    [
     "Endocardite infectieuse",
     "10.06.01",
     "I33.0",
     "DIAG123",
     "TAUSSIG-COND-0014"
    ],
    [
     "Anomalie acquise de la veine cave supérieure",
     "10.31.01",
     "I87.9",
     "DIAG026",
     "TAUSSIG-COND-0015"
    ],
    [
     "Anomalie acquise de la veine cave inférieure",
     "10.31.21",
     "I87.9",
     "DIAG026",
     "TAUSSIG-COND-0016"
    ],
    [
     "Anomalie acquise du sinus coronaire",
     "10.30.16",
     "I87.1",
     "",
     "TAUSSIG-COND-0017"
    ],
    [
     "Anomalie acquise des veines pulmonaires",
     "10.24.00",
     "I28.9",
     "",
     "TAUSSIG-COND-0018"
    ],
    [
     "Anomalie acquise de l'oreillette droite",
     "15.10.10",
     "I51.8",
     "",
     "TAUSSIG-COND-0019"
    ],
    [
     "Anomalie acquise de l'oreillette gauche",
     "15.10.20",
     "I51.8",
     "",
     "TAUSSIG-COND-0020"
    ],
    [
     "Communication interatriale résiduelle (CIA)",
     "15.10.63",
     "Q21.1",
     "DIAG-2019-17",
     "TAUSSIG-COND-0021"
    ],
    [
     "Régurgitation tricuspide résiduelle",
     "15.11.03",
     "Q22.8",
     "DIAG037",
     "TAUSSIG-COND-0022"
    ],
    [
     "Sténose mitrale résiduelle",
     "15.12.01",
     "Q23.2",
     "DIAG164",
     "TAUSSIG-COND-0023"
    ],
    [
     "Régurgitation mitrale résiduelle",
     "15.12.03",
     "Q23.3",
     "DIAG067",
     "TAUSSIG-COND-0024"
    ],
    [
     "Régurgitation troncale résiduelle",
     "15.25.03",
     "Q24.8",
     "DIAG-2010-170",
     "TAUSSIG-COND-0025"
    ],
    [
     "Sténose valvulaire pulmonaire résiduelle",
     "15.30.01",
     "Q22.1",
     "DIAG041",
     "TAUSSIG-COND-0026"
    ],
    [
     "Régurgitation pulmonaire résiduelle",
     "15.30.03",
     "Q22.2",
     "DIAG049",
     "TAUSSIG-COND-0027"
    ],
    [
     "Sténose de la néovalve pulmonaire",
     "15.30.09",
     "I37.0",
     "DIAG041",
     "TAUSSIG-COND-0028"
    ],
    [
     "Régurgitation de la néovalve pulmonaire",
     "15.30.10",
     "I37.1",
     "DIAG049",
     "TAUSSIG-COND-0029"
    ],
    [
     "Sténose valvulaire aortique résiduelle",
     "15.35.01",
     "Q23.0",
     "DIAG052",
     "TAUSSIG-COND-0030"
    ],
    [
     "Régurgitation aortique résiduelle",
     "15.35.03",
     "Q23.1",
     "DIAG056",
     "TAUSSIG-COND-0031"
    ],
    [
     "Sténose de la néovalve aortique d'origine pulmonaire",
     "15.35.09",
     "I35.0",
     "DIAG052",
     "TAUSSIG-COND-0032"
    ],
    [
     "Régurgitation de la néovalve aortique d'origine pulmonaire",
     "15.35.10",
     "I35.1",
     "DIAG056",
     "TAUSSIG-COND-0033"
    ],
    [
     "Sténose acquise de la néovalve aortique d'origine troncale",
     "15.25.12",
     "I35.0",
     "DIAG052",
     "TAUSSIG-COND-0034"
    ],
    [
     "Régurgitation acquise de la néovalve aortique d'origine troncale",
     "15.25.13",
     "I35.1",
     "DIAG056",
     "TAUSSIG-COND-0035"
    ],
    [
     "Composante ventriculaire résiduelle de canal atrioventriculaire",
     "15.16.02",
     "Q21.2",
     "",
     "TAUSSIG-COND-0036"
    ],
    [
     "Régurgitation résiduelle de la valve atrioventriculaire commune",
     "15.13.02",
     "Q24.8",
     "",
     "TAUSSIG-COND-0037"
    ],
    [
     "Sténose acquise de la valve atrioventriculaire commune (connexions biventriculaires)",
     "10.34.56",
     "I38",
     "",
     "TAUSSIG-COND-0038"
    ],
    [
     "Dilatation ventriculaire droite acquise",
     "10.16.22",
     "I51.7",
     "",
     "TAUSSIG-COND-0039"
    ],
    [
     "Hypertrophie ventriculaire droite acquise",
     "10.16.23",
     "I51.7",
     "",
     "TAUSSIG-COND-0040"
    ],
    [
     "Anévrisme ventriculaire droit acquis",
     "10.16.02",
     "I25.3",
     "DIAG116",
     "TAUSSIG-COND-0041"
    ],
    [
     "Dysfonction ventriculaire droite",
     "07.01.11",
     "I51.8",
     "",
     "TAUSSIG-COND-0042"
    ],
    [
     "Obstruction résiduelle de la voie d'éjection du ventricule droit",
     "15.20.23",
     "Q24.8",
     "",
     "TAUSSIG-COND-0043"
    ],
    [
     "Dilatation ventriculaire gauche acquise",
     "10.16.76",
     "I51.7",
     "",
     "TAUSSIG-COND-0044"
    ],
    [
     "Hypertrophie ventriculaire gauche acquise",
     "10.16.77",
     "I51.7",
     "",
     "TAUSSIG-COND-0045"
    ],
    [
     "Anévrisme ventriculaire gauche acquis",
     "10.16.42",
     "I25.3",
     "DIAG117",
     "TAUSSIG-COND-0046"
    ],
    [
     "Défaillance ventriculaire gauche",
     "10.16.47",
     "I50.1",
     "",
     "TAUSSIG-COND-0047"
    ],
    [
     "Complication post-procédurale de la voie d'éjection du ventricule gauche",
     "15.21.21",
     "I51.8",
     "",
     "TAUSSIG-COND-0048"
    ],
    [
     "Sténose sous-aortique acquise",
     "10.16.86",
     "I51.8",
     "DIAG051",
     "TAUSSIG-COND-0049"
    ],
    [
     "Sténose sous-pulmonaire acquise",
     "10.16.88",
     "I51.8",
     "DIAG166",
     "TAUSSIG-COND-0050"
    ],
    [
     "Communication interventriculaire résiduelle (CIV)",
     "15.22.02",
     "Q21.0",
     "",
     "TAUSSIG-COND-0051"
    ],
    [
     "Cardiomyopathie restrictive",
     "10.10.10",
     "I42.5",
     "DIAG070 ; DIAG-2023-3",
     "TAUSSIG-COND-0052"
    ],
    [
     "Anomalie acquise de l'arbre artériel pulmonaire",
     "10.13.59",
     "I28.8",
     "DIAG118",
     "TAUSSIG-COND-0053"
    ],
    [
     "Sténose post-procédurale du tronc de l'artère pulmonaire",
     "15.32.02",
     "I28.8",
     "DIAG042",
     "TAUSSIG-COND-0054"
    ],
    [
     "Sténose résiduelle de l'artère pulmonaire droite",
     "15.32.23",
     "Q25.6",
     "DIAG043",
     "TAUSSIG-COND-0055"
    ],
    [
     "Sténose résiduelle de l'artère pulmonaire gauche",
     "15.32.43",
     "Q25.6",
     "DIAG043",
     "TAUSSIG-COND-0056"
    ],
    [
     "Hypertension artérielle pulmonaire",
     "10.13.01",
     "I27.0",
     "DIAG131",
     "TAUSSIG-COND-0057"
    ],
    [
     "Embolie pulmonaire",
     "10.13.51",
     "I26.9",
     "DIAG128",
     "TAUSSIG-COND-0058"
    ],
    [
     "Sténose aortique supravalvulaire acquise",
     "10.14.77",
     "I77.1",
     "DIAG053",
     "TAUSSIG-COND-0059"
    ],
    [
     "Dilatation acquise de l'aorte ascendante et/ou de la racine aortique",
     "10.14.82",
     "I71.9",
     "DIAG102",
     "TAUSSIG-COND-0060"
    ],
    [
     "Dilatation de la racine aortique",
     "09.16.13",
     "Q25.4",
     "DIAG102",
     "TAUSSIG-COND-0061"
    ],
    [
     "Dissection aortique",
     "10.14.51",
     "I71.0",
     "DIAG103",
     "TAUSSIG-COND-0062"
    ],
    [
     "Anévrisme aortique",
     "10.14.50",
     "I71.2",
     "DIAG102",
     "TAUSSIG-COND-0063"
    ],
    [
     "Coarctation aortique résiduelle",
     "15.37.05",
     "Q25.1",
     "DIAG095 ; DIAG-2024-7",
     "TAUSSIG-COND-0064"
    ],
    [
     "Complication coronaire post-procédurale",
     "15.41.00",
     "I77.8",
     "DIAG161",
     "TAUSSIG-COND-0065"
    ],
    [
     "Persistance résiduelle du canal artériel (PDA)",
     "15.39.02",
     "Q25.0",
     "DIAG099",
     "TAUSSIG-COND-0066"
    ],
    [
     "Complication liée à un conduit cardiaque",
     "15.55.00",
     "T82.9",
     "DIAG048",
     "TAUSSIG-COND-0067"
    ],
    [
     "Obstruction d'anastomose systémico-pulmonaire",
     "15.56.27",
     "T82.5",
     "DIAG-2010-2130",
     "TAUSSIG-COND-0068"
    ],
    [
     "Obstruction partielle d'anastomose systémico-pulmonaire",
     "15.56.01",
     "T82.5",
     "DIAG-2010-2130",
     "TAUSSIG-COND-0069"
    ],
    [
     "Obstruction complète d'anastomose systémico-pulmonaire",
     "15.56.02",
     "T82.5",
     "DIAG-2010-2130",
     "TAUSSIG-COND-0070"
    ],
    [
     "Défaillance d'autogreffe pulmonaire",
     "15.55.24",
     "T82.8",
     "DIAG124",
     "TAUSSIG-COND-0071"
    ],
    [
     "Circulation de Fontan défaillante",
     "15.90.60",
     "T81.8",
     "",
     "TAUSSIG-COND-0072"
    ],
    [
     "Épanchement péricardique",
     "10.08.31",
     "I31.3",
     "DIAG071 ; DIAG-2019-31",
     "TAUSSIG-COND-0073"
    ],
    [
     "Complication après transplantation cardiaque ou pulmonaire",
     "15.95.00",
     "I97.9",
     "",
     "TAUSSIG-COND-0074"
    ],
    [
     "Sténose acquise des veines pulmonaires",
     "10.24.02",
     "I28.8",
     "DIAG-2019-10",
     "TAUSSIG-COND-0075"
    ],
    [
     "Obstruction d'une veine systémique",
     "10.30.09",
     "I87.1",
     "DIAG027",
     "TAUSSIG-COND-0076"
    ],
    [
     "Collatérale(s) veino-veineuse(s) systémique(s)",
     "04.00.06",
     "Q26.8",
     "DIAG-2024-5",
     "TAUSSIG-COND-0077"
    ],
    [
     "Artère(s) collatérale(s) systémico-pulmonaire(s) acquise(s)",
     "10.13.74",
     "I77.8",
     "DIAG-2024-6",
     "TAUSSIG-COND-0078"
    ],
    [
     "Fistules (malformations) artérioveineuses pulmonaires acquises",
     "10.13.57",
     "I28.0",
     "DIAG127",
     "TAUSSIG-COND-0079"
    ],
    [
     "Cardiomyopathie dilatée",
     "10.10.25",
     "I42.0",
     "DIAG-2023-1",
     "TAUSSIG-COND-0080"
    ],
    [
     "Cardiomyopathie hypertrophique",
     "10.10.20",
     "I42.2",
     "DIAG-2023-2",
     "TAUSSIG-COND-0081"
    ],
    [
     "Cardiomyopathie hypertrophique obstructive du ventricule gauche",
     "10.10.05",
     "I42.1",
     "DIAG-2023-4",
     "TAUSSIG-COND-0082"
    ],
    [
     "Myocardite (cardiomyopathie inflammatoire)",
     "10.07.90",
     "I51.4",
     "DIAG-2019-07",
     "TAUSSIG-COND-0083"
    ],
    [
     "Maladie de Kawasaki",
     "10.09.01",
     "M30.3",
     "DIAG-2019-26",
     "TAUSSIG-COND-0084"
    ],
    [
     "Infarctus du myocarde",
     "10.18.00",
     "I21.9",
     "DIAG125",
     "TAUSSIG-COND-0085"
    ],
    [
     "État après transplantation cardiaque",
     "10.21.63",
     "Z94.1",
     "DIAG175",
     "TAUSSIG-COND-0086"
    ],
    [
     "Maladie vasculaire pulmonaire irréversible",
     "10.13.00",
     "I27.8",
     "DIAG167 ; DIAG130",
     "TAUSSIG-COND-0087"
    ],
    [
     "Maladie vasculaire pulmonaire irréversible due à une cardiopathie congénitale (syndrome d'Eisenmenger)",
     "10.13.08",
     "I27.8",
     "DIAG130",
     "TAUSSIG-COND-0088"
    ],
    [
     "Trouble du rythme cardiaque",
     "11.00.00",
     "I49.9",
     "DIAG109",
     "TAUSSIG-COND-0089"
    ],
    [
     "Fibrillation atriale",
     "11.03.08",
     "I48",
     "DIAG-2019-14",
     "TAUSSIG-COND-0090"
    ],
    [
     "Flutter atrial",
     "11.03.07",
     "I48",
     "DIAG-2019-15",
     "TAUSSIG-COND-0091"
    ],
    [
     "Trouble du rythme atrial",
     "11.03.09",
     "I49.8",
     "DIAG-2019-16",
     "TAUSSIG-COND-0092"
    ],
    [
     "Trouble du rythme de la jonction atrioventriculaire",
     "11.04.00",
     "I49.8",
     "DIAG-2010-2050",
     "TAUSSIG-COND-0093"
    ],
    [
     "Trouble du rythme ventriculaire",
     "11.05.00",
     "I49.8",
     "DIAG-2010-2060",
     "TAUSSIG-COND-0094"
    ],
    [
     "Tachycardie par réentrée atrioventriculaire avec préexcitation manifeste (Wolff-Parkinson-White)",
     "11.07.01",
     "I45.6",
     "DIAG-2019-13",
     "TAUSSIG-COND-0095"
    ],
    [
     "Bloc atrioventriculaire",
     "11.06.38",
     "I44.3",
     "DIAG151",
     "TAUSSIG-COND-0096"
    ],
    [
     "Bloc atrioventriculaire complet acquis",
     "11.06.10",
     "I44.2",
     "DIAG110",
     "TAUSSIG-COND-0097"
    ],
    [
     "Indication de remplacement programmé d'un stimulateur cardiaque",
     "11.12.61",
     "Z45.0",
     "DIAG113",
     "TAUSSIG-COND-0098"
    ],
    [
     "Entéropathie exsudative post-procédurale",
     "15.82.33",
     "K90.4 / Y83.8",
     "DIAG-2019-09",
     "TAUSSIG-COND-0099"
    ],
    [
     "Bronchite plastique post-procédurale",
     "15.81.01",
     "J98.0 / J95.8",
     "DIAG-2019-08",
     "TAUSSIG-COND-0100"
    ],
    [
     "Chylothorax",
     "10.08.16",
     "J94.0",
     "DIAG138",
     "TAUSSIG-COND-0101"
    ],
    [
     "Embolisation d'un dispositif lors d'un cathétérisme cardiaque antérieur",
     "15.51.47",
     "T82.8",
     "DIAG-2019-18 ; DIAG-2019-21",
     "TAUSSIG-COND-0102"
    ],
    [
     "Dysfonction d'un dispositif lors d'un cathétérisme cardiaque antérieur",
     "15.51.50",
     "T82.5",
     "DIAG-2019-19 ; DIAG-2019-22",
     "TAUSSIG-COND-0103"
    ],
    [
     "Perforation d'une cavité ou d'un vaisseau lors d'un cathétérisme cardiaque antérieur",
     "15.50.03",
     "T81.2 / Y60.5",
     "DIAG-2019-20 ; DIAG-2019-23",
     "TAUSSIG-COND-0104"
    ],
    [
     "Corps étranger intracardiaque post-procédural",
     "15.80.17",
     "T81.5",
     "DIAG-2019-24",
     "TAUSSIG-COND-0105"
    ],
    [
     "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
     "15.50.37",
     "T82.8",
     "DIAG-2019-25",
     "TAUSSIG-COND-0106"
    ],
    [
     "Hémorragie post-procédurale",
     "15.02.00",
     "T81.0",
     "DIAG-2010-2070",
     "TAUSSIG-COND-0107"
    ]
   ]
  },
  "procedures": {
   "titre": "Gestes et actes de cathétérisme (concepts TAUSSIG)",
   "canon": "",
   "colonnes": [
    "Libellé",
    "Synonymes",
    "Code TAUSSIG",
    "IPCCC",
    "CCAM",
    "ECHSA",
    "SNOMED"
   ],
   "lignes": [
    [
     "Pose percutanée d'un stent sur un anévrisme de l'aorte thoracique",
     "endoprothèse aortique | TEVAR",
     "TAUSSIG-PROC-0001",
     "12.18.70",
     "DGLF003",
     "PROC151",
     "1259910000"
    ],
    [
     "Stratégie hybride (chirurgie et cathétérisme combinés)",
     "stratégie hybride | procédure hybride",
     "TAUSSIG-PROC-0002",
     "12.41.30",
     "",
     "",
     ""
    ],
    [
     "Cathétérisme par voie transseptale avec ponction transseptale",
     "ponction transseptale | cathétérisme transseptal",
     "TAUSSIG-PROC-0003",
     "12.45.01",
     "",
     "",
     "429267006"
    ],
    [
     "Test d'occlusion diagnostique par voie percutanée",
     "test d'occlusion | occlusion test au ballon",
     "TAUSSIG-PROC-0004",
     "12.45.07",
     "",
     "PROC-2010-2530",
     "699803004"
    ],
    [
     "Geste percutané avec traitement adjuvant",
     "thérapie adjuvante",
     "TAUSSIG-PROC-0005",
     "12.45.59",
     "",
     "PROC-2010-2670",
     ""
    ],
    [
     "Cathétérisme cardiaque diagnostique : angiographie",
     "angiographie | angiocardiographie | angio",
     "TAUSSIG-PROC-0006",
     "13.05.05",
     "DFQH001",
     "PROC-2010-2520",
     "34945008"
    ],
    [
     "Cathétérisme cardiaque diagnostique : recueil des données hémodynamiques",
     "hémodynamique | cathétérisme droit et gauche | mesures de pressions",
     "TAUSSIG-PROC-0007",
     "13.05.06",
     "EQQF001",
     "PROC-2010-2510",
     "41976001"
    ],
    [
     "Cathétérisme cardiaque diagnostique avec épreuve de modification hémodynamique",
     "épreuve de vasoréactivité | test au NO | test au monoxyde d'azote | test de remplissage",
     "TAUSSIG-PROC-0008",
     "13.05.07",
     "EQQF003",
     "PROC-2010-2540",
     "41976001"
    ],
    [
     "Cathétérisme d'évaluation d'une hypertension pulmonaire",
     "bilan d'HTAP | cathétérisme pour HTP",
     "TAUSSIG-PROC-0009",
     "13.05.13",
     "EQQF003",
     "PROC-2010-2510",
     "40403005"
    ],
    [
     "Cathétérisme diagnostique à visée interventionnelle : anatomie inadaptée au geste",
     "geste non réalisé, anatomie défavorable",
     "TAUSSIG-PROC-0010",
     "13.05.36",
     "",
     "PROC-2010-2500",
     "41976001"
    ],
    [
     "Geste percutané pour trouble du rythme",
     "",
     "TAUSSIG-PROC-0011",
     "12.35.57",
     "",
     "PROC-2010-2680",
     "233154000"
    ],
    [
     "Geste percutané pour trouble du rythme atrial",
     "",
     "TAUSSIG-PROC-0012",
     "12.35.82",
     "",
     "PROC-2010-2680",
     "233154000"
    ],
    [
     "Geste percutané pour trouble du rythme ventriculaire",
     "",
     "TAUSSIG-PROC-0013",
     "12.35.83",
     "",
     "PROC-2010-2680",
     "870252007"
    ],
    [
     "Cathétérisme cardiaque diagnostique avec épreuve électrophysiologique",
     "",
     "TAUSSIG-PROC-0014",
     "13.05.08",
     "DEQF001 ; DEQF002 ; DEQF004 ; DEQF005",
     "PROC-2010-2550",
     "82982002"
    ],
    [
     "Exploration électrophysiologique",
     "EEP | étude électrophysiologique",
     "TAUSSIG-PROC-0015",
     "13.05.12",
     "DEQF003",
     "PROC-2010-2680",
     "252425004"
    ],
    [
     "Exploration électrophysiologique avec cartographie tridimensionnelle",
     "EEP avec cartographie 3D | cartographie 3D",
     "TAUSSIG-PROC-0016",
     "13.05.17",
     "DEQF003 ; DEQF005",
     "PROC-2010-2680",
     "707833003"
    ],
    [
     "Geste fœtal",
     "intervention fœtale",
     "TAUSSIG-PROC-0017",
     "12.45.90",
     "",
     "",
     ""
    ],
    [
     "Coagulation laser des anastomoses placentaires dans le syndrome transfuseur-transfusé",
     "laser fœtoscopique | STT",
     "TAUSSIG-PROC-0018",
     "12.45.91",
     "",
     "",
     "709117007"
    ],
    [
     "Geste fœtal par cathéter",
     "cathétérisme fœtal",
     "TAUSSIG-PROC-0019",
     "12.45.70",
     "",
     "",
     ""
    ],
    [
     "Valvuloplastie pulmonaire fœtale au ballon",
     "valvuloplastie pulmonaire in utero",
     "TAUSSIG-PROC-0020",
     "12.45.71",
     "",
     "",
     ""
    ],
    [
     "Valvuloplastie aortique fœtale au ballon",
     "valvuloplastie aortique in utero",
     "TAUSSIG-PROC-0021",
     "12.45.73",
     "",
     "",
     ""
    ],
    [
     "Péricardiocentèse fœtale par cathéter",
     "",
     "TAUSSIG-PROC-0022",
     "12.45.75",
     "JQHB002",
     "",
     ""
    ],
    [
     "Atrioseptostomie fœtale au ballon",
     "septostomie fœtale",
     "TAUSSIG-PROC-0023",
     "12.45.76",
     "",
     "",
     ""
    ],
    [
     "Cathétérisme thérapeutique avec échec de largage d'un dispositif, d'un stent ou d'un coil",
     "échec de largage | largage impossible",
     "TAUSSIG-PROC-0024",
     "12.41.36",
     "",
     "PROC-2010-2410",
     ""
    ],
    [
     "Geste de cathétérisme cardiovasculaire",
     "cathétérisme",
     "TAUSSIG-PROC-0025",
     "12.45.00",
     "",
     "PROC-2010-2410",
     "41976001"
    ],
    [
     "Nouveau cathétérisme pour lésion résiduelle ou récidivante",
     "reprise percutanée | réintervention percutanée",
     "TAUSSIG-PROC-0026",
     "12.45.06",
     "",
     "PROC-2010-2410",
     "41976001"
    ],
    [
     "Redilatation de stent",
     "redilatation d'endoprothèse",
     "TAUSSIG-PROC-0027",
     "12.45.10",
     "",
     "PROC-2010-2630",
     ""
    ],
    [
     "Pose de stent",
     "stenting | endoprothèse | implantation de stent",
     "TAUSSIG-PROC-0028",
     "12.45.11",
     "",
     "PROC151",
     "429381005"
    ],
    [
     "Dilatation au ballon",
     "angioplastie au ballon | ballonnet",
     "TAUSSIG-PROC-0029",
     "12.45.12",
     "",
     "PROC150",
     "68457009"
    ],
    [
     "Implantation d'un dispositif par voie percutanée",
     "prothèse | occluder | dispositif",
     "TAUSSIG-PROC-0030",
     "12.45.13",
     "",
     "PROC152",
     ""
    ],
    [
     "Occlusion par coil au cours d'un cathétérisme",
     "embolisation par coil | coil",
     "TAUSSIG-PROC-0031",
     "12.45.14",
     "",
     "PROC154",
     ""
    ],
    [
     "Implantation percutanée d'une valve",
     "valve percutanée | valve transcathéter",
     "TAUSSIG-PROC-0032",
     "12.45.15",
     "DBLF001 ; DBLF009",
     "PROC-2010-2660",
     "112815000"
    ],
    [
     "Fermeture percutanée d'une fuite de prothèse valvulaire par dispositif",
     "fermeture de fuite paraprothétique | fuite paravalvulaire",
     "TAUSSIG-PROC-0033",
     "12.45.19",
     "DBSF001",
     "PROC152",
     "1231783006"
    ],
    [
     "Dilatation valvulaire au ballon",
     "valvuloplastie au ballon",
     "TAUSSIG-PROC-0034",
     "12.45.21",
     "DBAF001 ; DBAF002 ; DBAF003 ; DBAF004",
     "PROC-2010-2590",
     "24394009"
    ],
    [
     "Cathétérisme cardiovasculaire thérapeutique",
     "cathétérisme interventionnel | KT interventionnel",
     "TAUSSIG-PROC-0035",
     "12.45.28",
     "",
     "PROC-2010-2410",
     "41976001"
    ],
    [
     "Perforation thérapeutique percutanée pour créer une communication entre cavités ou vaisseaux",
     "perforation thérapeutique | recanalisation par perforation",
     "TAUSSIG-PROC-0036",
     "12.45.58",
     "DBAF005",
     "PROC-2010-2640",
     ""
    ],
    [
     "Cathétérisme cardiaque diagnostique",
     "cathétérisme diagnostique | KT diagnostique",
     "TAUSSIG-PROC-0037",
     "13.05.01",
     "EQQF001 ; EQQF006 ; EQQH001 ; EQQH005 ; EQQH006",
     "PROC-2010-2500",
     "41976001"
    ],
    [
     "Agrandissement d'une communication interventriculaire",
     "agrandissement de CIV",
     "TAUSSIG-PROC-0038",
     "12.08.06",
     "",
     "PROC-2010-2640",
     "233104006"
    ],
    [
     "Agrandissement ou création d'une communication interventriculaire",
     "création de CIV",
     "TAUSSIG-PROC-0039",
     "12.08.35",
     "",
     "PROC-2010-2640",
     "233104006"
    ],
    [
     "Approche hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie) : stade 1",
     "hybride stade 1 | HLHS hybride",
     "TAUSSIG-PROC-0040",
     "12.20.20",
     "",
     "PROC-2010-2180 ; PROC-2010-2160 ; PROC-2010-2170",
     "233141007"
    ],
    [
     "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s) et retrait des cerclages pulmonaires",
     "hybride stade 2 | Norwood-Glenn compréhensif",
     "TAUSSIG-PROC-0041",
     "12.20.22",
     "",
     "PROC-2010-2150",
     ""
    ],
    [
     "Approche hybride de l'hypoplasie du cœur gauche, stade 2 : amalgame aorto-pulmonaire, anastomose(s) cavo-pulmonaire(s) supérieure(s), retrait des cerclages pulmonaires et réparation de l'arche",
     "hybride stade 2 avec reconstruction de l'arche",
     "TAUSSIG-PROC-0042",
     "12.20.23",
     "",
     "PROC-2010-2140",
     ""
    ],
    [
     "Échographie endocoronaire",
     "IVUS | échographie intravasculaire coronaire",
     "TAUSSIG-PROC-0043",
     "12.23.41",
     "DDQJ001",
     "",
     "310658009"
    ],
    [
     "Échocardiographie",
     "écho | ETT",
     "TAUSSIG-PROC-0044",
     "13.01.00",
     "DZQM006 ; DZQM003",
     "",
     "40701008"
    ],
    [
     "Échocardiographie transœsophagienne",
     "ETO",
     "TAUSSIG-PROC-0045",
     "13.01.03",
     "DZQJ001 ; DZQJ012",
     "",
     "105376000"
    ],
    [
     "Geste percutané guidé par échographie intracardiaque",
     "ICE | échographie intracardiaque",
     "TAUSSIG-PROC-0046",
     "13.01.23",
     "",
     "",
     "425789000"
    ],
    [
     "Geste percutané sous guidage radiologique",
     "sous scopie | sous fluoroscopie",
     "TAUSSIG-PROC-0047",
     "13.05.14",
     "",
     "",
     ""
    ],
    [
     "Geste percutané sous guidage par IRM",
     "cathétérisme sous IRM",
     "TAUSSIG-PROC-0048",
     "13.05.15",
     "",
     "",
     ""
    ],
    [
     "Geste percutané sous guidage radiologique et IRM",
     "XMR",
     "TAUSSIG-PROC-0049",
     "13.05.16",
     "",
     "",
     ""
    ],
    [
     "Geste percutané sous guidage échographique",
     "guidage écho",
     "TAUSSIG-PROC-0050",
     "13.05.24",
     "DZQM003 ; DZQJ012",
     "",
     ""
    ],
    [
     "Imagerie endocoronaire par tomographie par cohérence optique",
     "OCT coronaire | OCT",
     "TAUSSIG-PROC-0051",
     "13.05.39",
     "",
     "",
     "698254001"
    ],
    [
     "Retrait peropératoire complet ou partiel d'un stent de l'artère pulmonaire",
     "ablation chirurgicale de stent pulmonaire",
     "TAUSSIG-PROC-0052",
     "12.14.38",
     "",
     "",
     ""
    ],
    [
     "Geste sur l'artère pulmonaire",
     "",
     "TAUSSIG-PROC-0053",
     "12.15.11",
     "",
     "",
     "175266007"
    ],
    [
     "Occlusion d'une collatérale veino-veineuse par dispositif",
     "embolisation de collatérale veino-veineuse",
     "TAUSSIG-PROC-0054",
     "12.70.08",
     "",
     "PROC152",
     "1389030008"
    ],
    [
     "Occlusion percutanée d'une veine systémique",
     "occlusion de veine cave supérieure gauche | embolisation veineuse",
     "TAUSSIG-PROC-0055",
     "12.70.31",
     "",
     "PROC152",
     "175871007"
    ],
    [
     "Pose de stent dans l'artère pulmonaire droite",
     "stent de l'APD",
     "TAUSSIG-PROC-0056",
     "12.15.13",
     "DFAF003",
     "PROC151",
     "233215007"
    ],
    [
     "Pose de stent dans l'artère pulmonaire gauche",
     "stent de l'APG",
     "TAUSSIG-PROC-0057",
     "12.15.14",
     "DFAF003",
     "PROC151",
     "233215007"
    ],
    [
     "Pose de stent dans l'arbre artériel pulmonaire",
     "stent pulmonaire",
     "TAUSSIG-PROC-0058",
     "12.15.50",
     "DFAF003 ; DFAF001",
     "PROC151",
     "233215007"
    ],
    [
     "Pose de stent dans l'artère pulmonaire droite, en amont de la bifurcation hilaire",
     "stent proximal de l'APD",
     "TAUSSIG-PROC-0059",
     "12.15.56",
     "DFAF003",
     "PROC151",
     "233215007"
    ],
    [
     "Pose de stent dans l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
     "stent distal de l'APD | stent lobaire droit",
     "TAUSSIG-PROC-0060",
     "12.15.57",
     "DFAF003",
     "PROC151",
     "233215007"
    ],
    [
     "Pose de stent dans l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
     "stent proximal de l'APG",
     "TAUSSIG-PROC-0061",
     "12.15.58",
     "DFAF003",
     "PROC151",
     "233215007"
    ],
    [
     "Pose de stent dans l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
     "stent distal de l'APG | stent lobaire gauche",
     "TAUSSIG-PROC-0062",
     "12.15.59",
     "DFAF003",
     "PROC151",
     "233215007"
    ],
    [
     "Redilatation d'un stent de l'artère pulmonaire droite, en amont de la bifurcation hilaire",
     "redilatation de stent de l'APD",
     "TAUSSIG-PROC-0063",
     "12.15.64",
     "DFAF002",
     "PROC-2010-2630",
     ""
    ],
    [
     "Redilatation d'un stent de l'artère pulmonaire droite, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
     "redilatation de stent distal de l'APD",
     "TAUSSIG-PROC-0064",
     "12.15.65",
     "DFAF002",
     "PROC-2010-2630",
     ""
    ],
    [
     "Redilatation d'un stent de l'artère pulmonaire gauche, en amont de la bifurcation hilaire",
     "redilatation de stent de l'APG",
     "TAUSSIG-PROC-0065",
     "12.15.66",
     "DFAF002",
     "PROC-2010-2630",
     ""
    ],
    [
     "Redilatation d'un stent de l'artère pulmonaire gauche, au niveau ou en aval de la bifurcation hilaire (lobaire et segmentaire)",
     "redilatation de stent distal de l'APG",
     "TAUSSIG-PROC-0066",
     "12.15.67",
     "DFAF002",
     "PROC-2010-2630",
     ""
    ],
    [
     "Pose de stent entre l'artère pulmonaire gauche et l'aorte descendante (Potts inverse)",
     "Potts inverse | Potts percutané",
     "TAUSSIG-PROC-0067",
     "12.15.70",
     "",
     "PROC151",
     "86642005"
    ],
    [
     "Pose de stent sur une coarctation de l'aorte",
     "stent de coarctation | stent CP",
     "TAUSSIG-PROC-0068",
     "12.18.17",
     "DGAF004",
     "PROC151",
     "448785002"
    ],
    [
     "Pose de stent sur une recoarctation de l'aorte",
     "stent de recoarctation",
     "TAUSSIG-PROC-0069",
     "12.18.22",
     "DGAF004",
     "PROC151",
     "448785002"
    ],
    [
     "Pose de stent sur une coarctation (ou hypoplasie) native de l'aorte",
     "stent de coarctation native",
     "TAUSSIG-PROC-0070",
     "12.18.48",
     "DGAF004",
     "PROC151",
     "448785002"
    ],
    [
     "Redilatation d'un stent de l'aorte thoracique",
     "redilatation de stent aortique",
     "TAUSSIG-PROC-0071",
     "12.18.54",
     "DGAF001",
     "PROC-2010-2630",
     ""
    ],
    [
     "Pose de stent dans une veine pulmonaire",
     "stent de veine pulmonaire",
     "TAUSSIG-PROC-0072",
     "12.00.22",
     "",
     "PROC151",
     "232978003"
    ],
    [
     "Pose de stent dans une veine pulmonaire ou un chenal veineux pulmonaire",
     "",
     "TAUSSIG-PROC-0073",
     "12.00.25",
     "",
     "PROC151",
     "232981008"
    ],
    [
     "Pose de stent dans la veine cave supérieure",
     "stent de VCS",
     "TAUSSIG-PROC-0074",
     "12.00.36",
     "DHAF001",
     "PROC151",
     "232989005"
    ],
    [
     "Pose de stent dans une veine systémique ou un chenal veineux systémique",
     "stent veineux | stent de chenal | stent de baffle",
     "TAUSSIG-PROC-0075",
     "12.00.44",
     "DHAF001 ; DHAF004 ; EFAF001 ; EGAF002",
     "PROC151",
     "233003002"
    ],
    [
     "Redilatation d'un stent d'une veine systémique",
     "redilatation de stent veineux",
     "TAUSSIG-PROC-0076",
     "12.00.88",
     "DHAF003 ; DHAF002 ; EFAF002",
     "PROC-2010-2630",
     "233441004"
    ],
    [
     "Redilatation d'un stent d'une veine pulmonaire",
     "",
     "TAUSSIG-PROC-0077",
     "12.00.89",
     "",
     "PROC-2010-2630",
     ""
    ],
    [
     "Cryoablation percutanée d'un trouble du rythme",
     "cryoablation",
     "TAUSSIG-PROC-0078",
     "12.35.46",
     "DEPF010 ; DEPF012 ; DEPF033",
     "PROC-2010-2690",
     "233161001"
    ],
    [
     "Ablation percutanée d'un trouble du rythme par radiofréquence",
     "ablation par radiofréquence | RF",
     "TAUSSIG-PROC-0079",
     "12.35.48",
     "DENF014 ; DENF015 ; DENF017 ; DENF018 ; DENF021 ; DENF035 ; DEPF004 ; DEPF005 ; DEPF006 ; DEPF010 ; DEPF012 ; DEPF014 ; DEPF025 ; DEPF033",
     "PROC153",
     "233163003"
    ],
    [
     "Ablation percutanée avec isolation des veines pulmonaires",
     "isolation des veines pulmonaires | PVI",
     "TAUSSIG-PROC-0080",
     "12.35.84",
     "DEPF033",
     "PROC-2010-2690",
     "707831001"
    ],
    [
     "Ablation percutanée d'un trouble du rythme",
     "ablation",
     "TAUSSIG-PROC-0081",
     "12.38.40",
     "DENF014 ; DENF015 ; DENF017 ; DENF018 ; DENF021 ; DENF035 ; DEPF004 ; DEPF005 ; DEPF006 ; DEPF010 ; DEPF012 ; DEPF014 ; DEPF025 ; DEPF033",
     "PROC-2010-2690",
     "233159005"
    ],
    [
     "Geste sur une artère coronaire",
     "",
     "TAUSSIG-PROC-0082",
     "12.23.09",
     "",
     "",
     "31413008"
    ],
    [
     "Occlusion percutanée d'une fistule coronaire",
     "fermeture de fistule coronaire",
     "TAUSSIG-PROC-0083",
     "12.23.13",
     "DDSF001",
     "PROC152",
     "232737008"
    ],
    [
     "Injection intracoronaire percutanée d'un agent thrombolytique",
     "thrombolyse intracoronaire",
     "TAUSSIG-PROC-0084",
     "12.23.30",
     "",
     "PROC-2010-2410",
     "384694007"
    ],
    [
     "Angioplastie coronaire percutanée au ballon",
     "ATL coronaire | angioplastie coronaire",
     "TAUSSIG-PROC-0085",
     "12.23.31",
     "DDAF001 ; DDAF010",
     "PROC150",
     "1343583001"
    ],
    [
     "Pose percutanée d'un stent coronaire",
     "stent coronaire",
     "TAUSSIG-PROC-0086",
     "12.23.38",
     "DDAF006 ; DDAF008 ; DDAF004 ; DDAF007 ; DDAF003 ; DDAF009",
     "PROC151",
     "36969009"
    ],
    [
     "Occlusion chimique percutanée d'une artère coronaire",
     "alcoolisation coronaire",
     "TAUSSIG-PROC-0087",
     "12.23.42",
     "DDLF001",
     "PROC-2010-2410",
     ""
    ],
    [
     "Redilatation d'un stent coronaire",
     "",
     "TAUSSIG-PROC-0088",
     "12.23.45",
     "DDAF001",
     "PROC-2010-2630",
     ""
    ],
    [
     "Fermeture percutanée d'une fenêtre aorto-pulmonaire par prothèse",
     "fermeture de fenêtre aortopulmonaire",
     "TAUSSIG-PROC-0089",
     "12.12.08",
     "",
     "PROC152",
     "61192001"
    ],
    [
     "Dilatation au ballon d'une coarctation (ou hypoplasie) native de l'aorte",
     "angioplastie de coarctation native",
     "TAUSSIG-PROC-0090",
     "12.18.04",
     "DGAF006",
     "PROC150",
     "308696000"
    ],
    [
     "Dilatation au ballon d'une recoarctation de l'aorte",
     "angioplastie de recoarctation",
     "TAUSSIG-PROC-0091",
     "12.18.08",
     "DGAF006",
     "PROC150",
     "308696000"
    ],
    [
     "Levée d'obstacle percutanée d'une coarctation de l'aorte",
     "traitement percutané de coarctation",
     "TAUSSIG-PROC-0092",
     "12.18.27",
     "DGAF004 ; DGAF006",
     "PROC-2010-2410",
     "443829004"
    ],
    [
     "Geste sur une artère systémique",
     "",
     "TAUSSIG-PROC-0093",
     "12.22.00",
     "",
     "",
     ""
    ],
    [
     "Occlusion d'une fistule artério-veineuse",
     "fermeture de fistule AV | embolisation de fistule",
     "TAUSSIG-PROC-0094",
     "12.25.02",
     "DFSF002",
     "PROC152",
     "71330003"
    ],
    [
     "Fermeture d'une fistule artério-veineuse pulmonaire",
     "fermeture de MAV pulmonaire | embolisation de FAV pulmonaire",
     "TAUSSIG-PROC-0095",
     "12.25.07",
     "DFSF002",
     "PROC152",
     "233220007"
    ],
    [
     "Fermeture partielle d'une communication interatriale",
     "fermeture partielle de CIA | restriction de CIA",
     "TAUSSIG-PROC-0096",
     "12.01.08",
     "DASF004",
     "PROC152",
     ""
    ],
    [
     "Atrioseptostomie au ballon par retrait (Rashkind)",
     "Rashkind | septostomie de Rashkind | atrioseptostomie",
     "TAUSSIG-PROC-0097",
     "12.01.41",
     "DAMF001",
     "PROC148",
     "233044001"
    ],
    [
     "Atrioseptostomie à la lame",
     "septostomie de Park | lame de Park",
     "TAUSSIG-PROC-0098",
     "12.01.44",
     "DAAF003 ; DAMF001",
     "PROC149",
     "31415001"
    ],
    [
     "Création ou agrandissement d'une communication interatriale",
     "création de CIA | élargissement de CIA",
     "TAUSSIG-PROC-0099",
     "12.01.90",
     "DAMF001 ; DAAF003",
     "PROC-2010-2580",
     "7824000"
    ],
    [
     "Atrioseptostomie au ballon",
     "septostomie au ballon | BAS",
     "TAUSSIG-PROC-0100",
     "12.01.95",
     "DAAF003 ; DAMF001",
     "PROC148",
     "271411002"
    ],
    [
     "Création percutanée d'une communication interatriale",
     "création de CIA percutanée",
     "TAUSSIG-PROC-0101",
     "12.30.74",
     "DAMF001",
     "PROC-2010-2580",
     "233038000"
    ],
    [
     "Retrait d'un thrombus intracardiaque",
     "thrombectomie intracardiaque",
     "TAUSSIG-PROC-0102",
     "12.32.22",
     "",
     "PROC-2010-2410",
     ""
    ],
    [
     "Fermeture percutanée de l'auricule gauche par prothèse",
     "occlusion de l'auricule gauche | Watchman | Amulet",
     "TAUSSIG-PROC-0103",
     "12.38.25",
     "DASF074",
     "PROC152",
     "1344914001"
    ],
    [
     "Geste sur la valve tricuspide",
     "",
     "TAUSSIG-PROC-0104",
     "12.02.00",
     "",
     "",
     "232778005"
    ],
    [
     "Dilatation au ballon d'une prothèse valvulaire tricuspide",
     "",
     "TAUSSIG-PROC-0105",
     "12.02.12",
     "DBAF003",
     "PROC-2010-2590",
     "232810003"
    ],
    [
     "Remplacement valvulaire tricuspide par voie percutanée",
     "valve tricuspide percutanée | TTVR",
     "TAUSSIG-PROC-0106",
     "12.02.98",
     "",
     "PROC-2010-2660",
     "25236004"
    ],
    [
     "Valve-in-valve tricuspide par voie percutanée",
     "ViV tricuspide",
     "TAUSSIG-PROC-0107",
     "12.02.99",
     "",
     "PROC-2010-2660",
     "25236004"
    ],
    [
     "Dilatation au ballon de la valve mitrale",
     "valvuloplastie mitrale | commissurotomie mitrale percutanée",
     "TAUSSIG-PROC-0108",
     "12.03.10",
     "DBAF004",
     "PROC-2010-2590",
     "384642005"
    ],
    [
     "Dilatation au ballon d'une prothèse valvulaire mitrale",
     "",
     "TAUSSIG-PROC-0109",
     "12.03.12",
     "DBAF004",
     "PROC-2010-2590",
     "232770003"
    ],
    [
     "Réparation valvulaire mitrale par voie percutanée",
     "MitraClip | réparation bord à bord | TEER mitral",
     "TAUSSIG-PROC-0110",
     "12.03.97",
     "DBBF198",
     "PROC-2010-2410",
     "432394003"
    ],
    [
     "Remplacement valvulaire mitral par voie percutanée",
     "valve mitrale percutanée | TMVR",
     "TAUSSIG-PROC-0111",
     "12.03.98",
     "",
     "PROC-2010-2660",
     "720583008"
    ],
    [
     "Valve-in-valve mitrale par voie percutanée",
     "ViV mitral",
     "TAUSSIG-PROC-0112",
     "12.04.90",
     "",
     "PROC-2010-2660",
     "1395984000"
    ],
    [
     "Valve-in-valve mitrale transcathéter par voie transapicale",
     "ViV mitral transapical",
     "TAUSSIG-PROC-0113",
     "12.04.91",
     "",
     "PROC-2010-2660",
     "1395984000"
    ],
    [
     "Dilatation au ballon d'une anastomose systémico-pulmonaire",
     "dilatation de Blalock | dilatation de shunt",
     "TAUSSIG-PROC-0114",
     "12.31.19",
     "",
     "PROC150",
     "449227002"
    ],
    [
     "Pose de stent dans une anastomose systémico-pulmonaire",
     "stent de Blalock | stent de shunt",
     "TAUSSIG-PROC-0115",
     "12.31.27",
     "",
     "PROC151",
     "448949007"
    ],
    [
     "Occlusion percutanée d'une anastomose systémico-pulmonaire par dispositif ou embolisation",
     "fermeture de Blalock | occlusion de shunt",
     "TAUSSIG-PROC-0116",
     "12.31.34",
     "",
     "PROC152",
     "448779009"
    ],
    [
     "Dilatation au ballon d'un conduit",
     "dilatation de conduit VD-AP | dilatation de tube",
     "TAUSSIG-PROC-0117",
     "12.36.14",
     "",
     "PROC150",
     "449033003"
    ],
    [
     "Pose de stent dans un conduit",
     "stent de conduit VD-AP | stent de tube",
     "TAUSSIG-PROC-0118",
     "12.36.23",
     "",
     "PROC151",
     "449389000"
    ],
    [
     "Redilatation d'un stent dans un conduit",
     "redilatation de stent de conduit",
     "TAUSSIG-PROC-0119",
     "12.36.32",
     "",
     "PROC-2010-2630",
     "449389000"
    ],
    [
     "Redilatation d'un stent dans une anastomose systémico-pulmonaire",
     "redilatation de stent de shunt",
     "TAUSSIG-PROC-0120",
     "12.36.34",
     "",
     "PROC-2010-2630",
     "449227002"
    ],
    [
     "Perforation et dilatation percutanées d'un conduit",
     "recanalisation de conduit",
     "TAUSSIG-PROC-0121",
     "12.36.36",
     "",
     "PROC-2010-2640",
     "707813002"
    ],
    [
     "Perforation et dilatation percutanées d'une anastomose systémico-pulmonaire",
     "recanalisation de Blalock | recanalisation de shunt",
     "TAUSSIG-PROC-0122",
     "12.36.37",
     "",
     "PROC-2010-2640",
     "261562001"
    ],
    [
     "Dilatation au ballon d'une veine pulmonaire",
     "angioplastie de veine pulmonaire",
     "TAUSSIG-PROC-0123",
     "12.00.21",
     "",
     "PROC150",
     "276892002"
    ],
    [
     "Dilatation d'une veine pulmonaire au ballon de découpe",
     "cutting balloon veineux pulmonaire",
     "TAUSSIG-PROC-0124",
     "12.00.23",
     "",
     "PROC150",
     "712817003"
    ],
    [
     "Dilatation au ballon d'une veine pulmonaire ou d'un chenal veineux pulmonaire",
     "",
     "TAUSSIG-PROC-0125",
     "12.00.24",
     "",
     "PROC150",
     "276895000"
    ],
    [
     "Dilatation au ballon d'une veine systémique ou d'un chenal veineux systémique",
     "angioplastie veineuse | dilatation de chenal",
     "TAUSSIG-PROC-0126",
     "12.00.43",
     "DHAF003 ; DHAF002 ; EFAF002 ; EGAF003",
     "PROC150",
     "276896004"
    ],
    [
     "Dilatation au ballon du tronc de l'artère pulmonaire",
     "angioplastie du tronc pulmonaire",
     "TAUSSIG-PROC-0127",
     "12.14.05",
     "DFAF002",
     "PROC150",
     "233214006"
    ],
    [
     "Dilatation au ballon de l'artère pulmonaire droite",
     "angioplastie de l'APD",
     "TAUSSIG-PROC-0128",
     "12.15.03",
     "DFAF002",
     "PROC150",
     "233214006"
    ],
    [
     "Dilatation au ballon de l'artère pulmonaire gauche",
     "angioplastie de l'APG",
     "TAUSSIG-PROC-0129",
     "12.15.04",
     "DFAF002",
     "PROC150",
     "233214006"
    ],
    [
     "Restriction du débit du tronc pulmonaire par dispositif implanté par voie percutanée",
     "restricteur de débit pulmonaire | cerclage percutané",
     "TAUSSIG-PROC-0130",
     "12.15.25",
     "",
     "PROC152",
     ""
    ],
    [
     "Restriction du débit des artères pulmonaires droite et gauche par dispositifs implantés par voie percutanée",
     "restricteurs de débit bilatéraux | cerclage pulmonaire percutané",
     "TAUSSIG-PROC-0131",
     "12.15.42",
     "",
     "PROC152",
     ""
    ],
    [
     "Dilatation de l'arbre artériel pulmonaire au ballon de découpe",
     "cutting balloon pulmonaire",
     "TAUSSIG-PROC-0132",
     "12.15.53",
     "DFAF002 ; DFAF004",
     "PROC150",
     "433256008"
    ],
    [
     "Geste percutané sur une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
     "MAPCA",
     "TAUSSIG-PROC-0133",
     "12.25.19",
     "",
     "PROC-2010-2410",
     "233114002"
    ],
    [
     "Pose de stent dans une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
     "stent de MAPCA",
     "TAUSSIG-PROC-0134",
     "12.25.62",
     "",
     "PROC151",
     "707824000"
    ],
    [
     "Occlusion percutanée d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA) par coil ou dispositif",
     "embolisation de MAPCA | embolisation de collatérale aorto-pulmonaire",
     "TAUSSIG-PROC-0135",
     "12.25.65",
     "ECSF004",
     "PROC154",
     "707823006"
    ],
    [
     "Dilatation au ballon d'une ou plusieurs collatérales systémico-pulmonaires (MAPCA)",
     "angioplastie de MAPCA",
     "TAUSSIG-PROC-0136",
     "12.25.72",
     "",
     "PROC150",
     "707822001"
    ],
    [
     "Pose de stent dans le canal artériel",
     "stent du canal | stent de PCA | ductal stenting",
     "TAUSSIG-PROC-0137",
     "12.10.14",
     "",
     "PROC151",
     "428280004"
    ],
    [
     "Redilatation d'un stent du canal artériel",
     "redilatation de stent du canal",
     "TAUSSIG-PROC-0138",
     "12.10.26",
     "",
     "PROC-2010-2630",
     "233202003"
    ],
    [
     "Geste sur le canal artériel ou le ligament artériel",
     "",
     "TAUSSIG-PROC-0139",
     "12.24.00",
     "",
     "",
     "265859004"
    ],
    [
     "Fermeture percutanée du canal artériel par prothèse",
     "fermeture du canal artériel | fermeture de PCA | Piccolo | ADO",
     "TAUSSIG-PROC-0140",
     "12.24.04",
     "DASF001",
     "PROC152",
     "698642008"
    ],
    [
     "Fermeture percutanée du canal artériel par coil",
     "fermeture de PCA par coil",
     "TAUSSIG-PROC-0141",
     "12.24.21",
     "DASF001",
     "PROC154",
     "441676000"
    ],
    [
     "Fermeture percutanée du canal artériel par plug",
     "fermeture de PCA par plug | AVP",
     "TAUSSIG-PROC-0142",
     "12.24.22",
     "DASF001",
     "PROC152",
     "175218000"
    ],
    [
     "Geste sur la valve pulmonaire",
     "",
     "TAUSSIG-PROC-0143",
     "12.13.00",
     "",
     "",
     ""
    ],
    [
     "Dilatation au ballon de la valve pulmonaire",
     "valvuloplastie pulmonaire | VPP",
     "TAUSSIG-PROC-0144",
     "12.13.05",
     "DBAF002",
     "PROC-2010-2590",
     "46897002"
    ],
    [
     "Dilatation au ballon d'une prothèse valvulaire pulmonaire",
     "",
     "TAUSSIG-PROC-0145",
     "12.13.06",
     "DBAF002",
     "PROC-2010-2590",
     "232869005"
    ],
    [
     "Perforation et dilatation percutanées de la valve pulmonaire",
     "perforation de valve pulmonaire | perforation par radiofréquence | atrésie pulmonaire à septum intact",
     "TAUSSIG-PROC-0146",
     "12.13.09",
     "DBAF005",
     "PROC-2010-2590",
     "442188002"
    ],
    [
     "Implantation percutanée d'une valve pulmonaire montée sur stent",
     "valve pulmonaire percutanée | TPVI | Melody | Sapien | Harmony",
     "TAUSSIG-PROC-0147",
     "12.13.51",
     "DBLF009",
     "PROC-2010-2660",
     "787162002"
    ],
    [
     "Valve-in-valve pulmonaire par voie percutanée (réimplantation)",
     "ViV pulmonaire | réimplantation de valve pulmonaire",
     "TAUSSIG-PROC-0148",
     "12.13.52",
     "DBLF009",
     "PROC-2010-2660",
     "787162002"
    ],
    [
     "Implantation percutanée d'une valve aortique montée sur stent",
     "TAVI | TAVR | RVAP",
     "TAUSSIG-PROC-0149",
     "12.13.81",
     "DBLF001",
     "PROC-2010-2660",
     "773996000"
    ],
    [
     "Valve-in-valve aortique par voie percutanée (réimplantation)",
     "ViV aortique",
     "TAUSSIG-PROC-0150",
     "12.13.82",
     "DBLF001",
     "PROC-2010-2660",
     "773996000"
    ],
    [
     "Implantation d'une valve aortique par voie transapicale (approche hybride)",
     "TAVI transapical",
     "TAUSSIG-PROC-0151",
     "12.13.84",
     "DBLA004",
     "PROC-2010-2660",
     "443887000"
    ],
    [
     "Implantation percutanée d'une valve pulmonaire montée sur stent avec pré-stenting",
     "TPVI avec prestenting",
     "TAUSSIG-PROC-0152",
     "12.13.85",
     "DBLF009",
     "PROC-2010-2660",
     "787162002"
    ],
    [
     "Pré-stenting de la voie pulmonaire en préparation d'un remplacement valvulaire",
     "prestenting | stent préparatoire",
     "TAUSSIG-PROC-0153",
     "12.13.86",
     "DAAF001",
     "PROC151",
     "443532008"
    ],
    [
     "Implantation percutanée d'une valve pulmonaire montée sur stent avec rupture volontaire de la prothèse antérieure",
     "rupture de bioprothèse | bioprosthetic valve fracture",
     "TAUSSIG-PROC-0154",
     "12.13.87",
     "DBLF009",
     "PROC-2010-2660",
     "787162002"
    ],
    [
     "Dilatation au ballon de la valve aortique",
     "valvuloplastie aortique | VPA",
     "TAUSSIG-PROC-0155",
     "12.16.05",
     "DBAF001",
     "PROC-2010-2590",
     "77166000"
    ],
    [
     "Dilatation au ballon d'une prothèse valvulaire aortique",
     "",
     "TAUSSIG-PROC-0156",
     "12.16.09",
     "DBAF001",
     "PROC-2010-2590",
     "232835009"
    ],
    [
     "Perforation et dilatation percutanées de la valve aortique",
     "",
     "TAUSSIG-PROC-0157",
     "12.16.25",
     "DBAF001",
     "PROC-2010-2640",
     "77166000"
    ],
    [
     "Fenestration percutanée du septum interatrial ou d'un tunnel atrial",
     "fenestration atriale | fenestration de tunnel",
     "TAUSSIG-PROC-0158",
     "12.01.47",
     "DAAF003",
     "PROC-2010-2640",
     "233043007"
    ],
    [
     "Approche hybride stade 1 : cerclage bilatéral des artères pulmonaires et stent du canal artériel par voie percutanée",
     "hybride de Giessen | cerclages bilatéraux + stent du canal",
     "TAUSSIG-PROC-0159",
     "12.10.04",
     "",
     "PROC-2010-2180",
     "233141007"
    ],
    [
     "Stratégie hybride de l'hypoplasie du cœur gauche (cathétérisme et chirurgie)",
     "stratégie hybride HLHS",
     "TAUSSIG-PROC-0160",
     "12.20.21",
     "",
     "",
     "14257002"
    ],
    [
     "Fermeture percutanée de la fenestration d'un tunnel atrial (Fontan) par prothèse",
     "fermeture de fenestration de Fontan | fermeture de fenestration",
     "TAUSSIG-PROC-0161",
     "12.30.21",
     "DASF002",
     "PROC152",
     "53941002"
    ],
    [
     "Complétion percutanée de la dérivation cavo-pulmonaire totale par stent couvert de la veine cave inférieure à la veine cave supérieure",
     "Fontan percutané | complétion transcathéter du Fontan | TCPC percutanée",
     "TAUSSIG-PROC-0162",
     "12.30.60",
     "",
     "PROC-2010-2650",
     ""
    ],
    [
     "Fermeture percutanée d'une communication interventriculaire par prothèse",
     "fermeture de CIV | CIV",
     "TAUSSIG-PROC-0163",
     "12.08.07",
     "DASF003",
     "PROC152",
     "233100002"
    ],
    [
     "Fenestration percutanée d'un patch de communication interventriculaire",
     "fenestration de patch de CIV",
     "TAUSSIG-PROC-0164",
     "12.08.20",
     "",
     "PROC-2010-2640",
     "233101003"
    ],
    [
     "Fermeture peropératoire d'une communication interventriculaire par dispositif (approche hybride)",
     "fermeture périventriculaire de CIV | fermeture hybride de CIV",
     "TAUSSIG-PROC-0165",
     "12.08.28",
     "",
     "PROC152",
     "233100002"
    ],
    [
     "Création percutanée d'une communication interventriculaire",
     "création de CIV percutanée",
     "TAUSSIG-PROC-0166",
     "12.08.65",
     "",
     "PROC-2010-2640",
     ""
    ],
    [
     "Fermeture percutanée d'une communication interatriale de type ostium secundum par prothèse",
     "fermeture de CIA | CIA OS | Amplatzer",
     "TAUSSIG-PROC-0167",
     "12.01.06",
     "DASF004",
     "PROC152",
     "112811009"
    ],
    [
     "Fermeture percutanée d'un foramen ovale perméable par prothèse",
     "fermeture de FOP | FOP",
     "TAUSSIG-PROC-0168",
     "12.01.07",
     "DASF005",
     "PROC152",
     "41817002"
    ],
    [
     "Fermeture percutanée d'une communication interatriale de type sinus venosus par stent couvert",
     "CIA sinus venosus | stent couvert de la VCS",
     "TAUSSIG-PROC-0169",
     "12.01.88",
     "",
     "PROC151",
     "174899009"
    ],
    [
     "Fermeture percutanée d'une communication interatriale par prothèse",
     "fermeture de CIA par prothèse",
     "TAUSSIG-PROC-0170",
     "12.01.98",
     "DASF004",
     "PROC152",
     "30123000"
    ],
    [
     "Dilatation au ballon de la voie d'éjection du ventricule gauche",
     "dilatation sous-aortique",
     "TAUSSIG-PROC-0171",
     "12.07.07",
     "DAAF002",
     "PROC150",
     "233092001"
    ],
    [
     "Levée d'obstacle de la voie d'éjection du ventricule gauche",
     "",
     "TAUSSIG-PROC-0172",
     "12.07.13",
     "DAAF002",
     "PROC-2010-2410",
     "428589002"
    ],
    [
     "Levée d'obstacle de la voie d'éjection du ventricule gauche par alcoolisation coronaire percutanée",
     "alcoolisation septale | ablation septale à l'alcool",
     "TAUSSIG-PROC-0173",
     "12.07.19",
     "DDLF001",
     "PROC-2010-2410",
     "1354588005"
    ],
    [
     "Geste sur le ventricule gauche",
     "",
     "TAUSSIG-PROC-0174",
     "12.07.26",
     "",
     "",
     "233076006"
    ],
    [
     "Dilatation au ballon de la voie d'éjection du ventricule droit",
     "dilatation de la VCVD | dilatation infundibulaire",
     "TAUSSIG-PROC-0175",
     "12.06.05",
     "DAAF001",
     "PROC150",
     "233067004"
    ],
    [
     "Pose de stent dans la voie d'éjection du ventricule droit",
     "stent de la voie d'éjection | stent de VCVD | stent infundibulaire",
     "TAUSSIG-PROC-0176",
     "12.06.18",
     "DAAF001",
     "PROC151",
     "443532008"
    ],
    [
     "Biopsie ventriculaire droite par voie percutanée",
     "biopsie endomyocardique | BEM",
     "TAUSSIG-PROC-0177",
     "12.06.25",
     "DAHF001",
     "PROC-2010-2410",
     "308683001"
    ],
    [
     "Geste sur le ventricule droit",
     "",
     "TAUSSIG-PROC-0178",
     "12.06.26",
     "",
     "",
     "233051005"
    ],
    [
     "Levée d'obstacle de la voie d'éjection du ventricule droit",
     "désobstruction de la voie d'éjection droite",
     "TAUSSIG-PROC-0179",
     "12.06.41",
     "DAAF001",
     "PROC-2010-2410",
     "429312007"
    ],
    [
     "Redilatation d'un stent de la voie d'éjection native du ventricule droit",
     "redilatation de stent de VCVD",
     "TAUSSIG-PROC-0180",
     "12.06.95",
     "DAAF001",
     "PROC-2010-2630",
     "233067004"
    ],
    [
     "Péricardiocentèse percutanée",
     "ponction péricardique | drainage péricardique",
     "TAUSSIG-PROC-0181",
     "12.32.43",
     "DCJB002 ; DCJB001",
     "PROC88",
     "428394001"
    ],
    [
     "Embolectomie percutanée de l'arbre artériel pulmonaire",
     "thrombectomie pulmonaire | embolie pulmonaire",
     "TAUSSIG-PROC-0182",
     "12.15.49",
     "DFNF002",
     "PROC-2010-2410",
     "175268008"
    ],
    [
     "Embolisation lymphatique percutanée",
     "embolisation du canal thoracique | intervention lymphatique",
     "TAUSSIG-PROC-0183",
     "12.49.50",
     "",
     "PROC154",
     "1357782001"
    ],
    [
     "Redilatation de stent avec fracture volontaire du stent",
     "fracture intentionnelle de stent | unzipping",
     "TAUSSIG-PROC-0184",
     "12.45.46",
     "",
     "PROC-2010-2630",
     ""
    ],
    [
     "Extraction percutanée d'un dispositif ou d'un corps étranger",
     "retrait de corps étranger | récupération de prothèse embolisée | lasso",
     "TAUSSIG-PROC-0185",
     "12.45.04",
     "DAGF001",
     "PROC-2010-2410",
     "708810002"
    ],
    [
     "Geste percutané pour complication du cathétérisme",
     "traitement d'une complication du KT",
     "TAUSSIG-PROC-0186",
     "12.45.30",
     "",
     "PROC-2010-2410",
     ""
    ],
    [
     "Retrait chirurgical d'un dispositif",
     "ablation chirurgicale de dispositif | explantation",
     "TAUSSIG-PROC-0187",
     "12.45.45",
     "",
     "",
     "128538000"
    ],
    [
     "Geste sur une veine systémique",
     "",
     "TAUSSIG-PROC-0188",
     "12.00.30",
     "",
     "",
     "232985004"
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
    "ECHSA",
    "Code TAUSSIG",
    "Statut"
   ],
   "lignes": [
    [
     "Absence de complication post-procédurale",
     "15.90.03",
     "",
     "",
     "",
     "TAUSSIG-AE-0001",
     "actif"
    ],
    [
     "Complication liée à une intervention",
     "15.90.14",
     "T81.8",
     "116224001",
     "CP-2010-900 ; CP-2019-IC-10",
     "TAUSSIG-AE-0002",
     "actif"
    ],
    [
     "Arrêt cardiaque pendant l'intervention",
     "15.00.01",
     "T81.8",
     "410429000",
     "CP2",
     "TAUSSIG-AE-0003",
     "actif"
    ],
    [
     "Fibrillation atriale",
     "11.03.08",
     "I48",
     "49436004",
     "CP6 ; CP-2019-IC-01",
     "TAUSSIG-AE-0004",
     "actif"
    ],
    [
     "Flutter atrial",
     "11.03.07",
     "I48",
     "5370000",
     "CP6 ; CP-2019-IC-02",
     "TAUSSIG-AE-0005",
     "actif"
    ],
    [
     "Trouble du rythme post-procédural",
     "11.00.00",
     "I49.9",
     "1230406008",
     "CP6 ; CP-2019-IC-03",
     "TAUSSIG-AE-0006",
     "actif"
    ],
    [
     "Bloc atrioventriculaire complet acquis",
     "11.06.10",
     "I44.2",
     "27885002",
     "CP6 ; CP-2019-IC-04 ; CP-2019-IC-05",
     "TAUSSIG-AE-0007",
     "actif"
    ],
    [
     "Tachycardie jonctionnelle ectopique post-procédurale",
     "11.04.12",
     "I97.1",
     "251155001",
     "CP6 ; CP-2019-IC-06",
     "TAUSSIG-AE-0008",
     "actif"
    ],
    [
     "Tachycardie ventriculaire",
     "11.05.06",
     "I47.2",
     "25569003",
     "CP6 ; CP-2019-IC-08",
     "TAUSSIG-AE-0009",
     "actif"
    ],
    [
     "Arythmie nécessitant l'implantation d'un stimulateur",
     "15.60.06",
     "I97.1",
     "",
     "CP5 ; CP-2019-IC-07",
     "TAUSSIG-AE-0010",
     "actif"
    ],
    [
     "Perforation d'une cavité cardiaque ou d'un vaisseau pendant le cathétérisme",
     "15.50.03",
     "T81.2 / Y60.5",
     "1162507002",
     "CP-2019-IC-13 ; CP-2019-IC-32",
     "TAUSSIG-AE-0011",
     "actif"
    ],
    [
     "Tamponnade cardiaque post-procédurale",
     "15.83.14",
     "I31.9",
     "1230407004",
     "CP10 ; CP-2019-IC-33",
     "TAUSSIG-AE-0012",
     "actif"
    ],
    [
     "Décès peropératoire",
     "12.33.31",
     "",
     "52136000",
     "CP-2010-350 ; CP-2019-IC-34",
     "TAUSSIG-AE-0013",
     "actif"
    ],
    [
     "Communication interatriale résiduelle ou récidivante post-procédurale",
     "15.10.72",
     "Q21.1",
     "735579001",
     "CP-2019-IC-16",
     "TAUSSIG-AE-0014",
     "actif"
    ],
    [
     "Embolisation d'un dispositif cardiovasculaire pendant le cathétérisme",
     "15.51.47",
     "T82.8",
     "473163005",
     "CP-2019-IC-11",
     "TAUSSIG-AE-0015",
     "actif"
    ],
    [
     "Dysfonction de dispositif (complication de cathétérisme)",
     "15.51.50",
     "T82.5",
     "",
     "CP-2019-IC-12",
     "TAUSSIG-AE-0016",
     "actif"
    ],
    [
     "Corps étranger intracardiaque post-procédural",
     "15.80.17",
     "T81.5",
     "282729004",
     "CP-2019-IC-14",
     "TAUSSIG-AE-0017",
     "actif"
    ],
    [
     "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
     "15.50.37",
     "T82.8",
     "125670008",
     "CP-2019-IC-15",
     "TAUSSIG-AE-0018",
     "actif"
    ],
    [
     "Perméabilité résiduelle du canal artériel post-procédurale",
     "15.39.05",
     "Q25.0",
     "871596002",
     "CP-2019-IC-18",
     "TAUSSIG-AE-0019",
     "actif"
    ],
    [
     "Communication interventriculaire résiduelle ou récidivante post-procédurale",
     "15.22.13",
     "Q21.0",
     "447941008",
     "CP-2019-IC-17",
     "TAUSSIG-AE-0020",
     "actif"
    ],
    [
     "Communication interatriale résiduelle",
     "15.10.63",
     "Q21.1",
     "449351005",
     "",
     "TAUSSIG-AE-0021",
     "actif"
    ],
    [
     "Régurgitation aortique après lésion valvulaire pendant le cathétérisme",
     "15.50.20",
     "T81.2 / Y60.5",
     "60234000",
     "CP-2019-IC-20",
     "TAUSSIG-AE-0022",
     "actif"
    ],
    [
     "Régurgitation mitrale après lésion valvulaire pendant le cathétérisme",
     "15.50.20",
     "T81.2 / Y60.5",
     "48724000",
     "CP-2019-IC-22",
     "TAUSSIG-AE-0023",
     "actif"
    ],
    [
     "Dysfonction de prothèse valvulaire après lésion pendant le cathétérisme",
     "15.50.20",
     "T81.2 / Y60.5",
     "271984008",
     "CP-2019-IC-19",
     "TAUSSIG-AE-0024",
     "actif"
    ],
    [
     "Régurgitation pulmonaire après lésion valvulaire pendant le cathétérisme",
     "15.50.20",
     "T81.2 / Y60.5",
     "91434003",
     "CP-2019-IC-21",
     "TAUSSIG-AE-0025",
     "actif"
    ],
    [
     "Régurgitation tricuspide après lésion valvulaire pendant le cathétérisme",
     "15.50.20",
     "T81.2 / Y60.5",
     "111287006",
     "CP-2019-IC-23",
     "TAUSSIG-AE-0026",
     "actif"
    ],
    [
     "Perte du pouls après cathétérisme",
     "15.50.11",
     "T81.7 / Y84.0",
     "414617007",
     "",
     "TAUSSIG-AE-0027",
     "actif"
    ],
    [
     "Pseudoanévrisme au site d'abord",
     "15.60.23",
     "T81.7",
     "1162761001",
     "CP-2019-IC-25",
     "TAUSSIG-AE-0028",
     "actif"
    ],
    [
     "Dissection artérielle au site d'abord",
     "15.50.19",
     "T81.7 / Y84.0",
     "710864009",
     "CP-2019-IC-30",
     "TAUSSIG-AE-0029",
     "actif"
    ],
    [
     "Extravasation de produit de contraste",
     "15.50.19",
     "T81.7 / Y84.0",
     "427924001",
     "CP-2019-IC-29",
     "TAUSSIG-AE-0030",
     "actif"
    ],
    [
     "Fistule artérioveineuse au site d'abord",
     "15.50.19",
     "T81.7 / Y84.0",
     "439470001",
     "CP-2019-IC-31",
     "TAUSSIG-AE-0031",
     "actif"
    ],
    [
     "Perforation artérielle au site d'abord",
     "15.50.19",
     "T81.7 / Y84.0",
     "307312008",
     "CP-2019-IC-27",
     "TAUSSIG-AE-0032",
     "actif"
    ],
    [
     "Problème d'équipement pendant le cathétérisme",
     "15.50.30",
     "T82.5",
     "",
     "",
     "TAUSSIG-AE-0033",
     "actif"
    ],
    [
     "Embolisation d'un stent",
     "15.50.71",
     "T82.8",
     "473125002",
     "",
     "TAUSSIG-AE-0034",
     "actif"
    ],
    [
     "Rupture d'un conduit ou d'un vaisseau après implantation de stent",
     "15.50.78",
     "T82.8",
     "248707009",
     "",
     "TAUSSIG-AE-0035",
     "actif"
    ],
    [
     "Compression coronaire après implantation de dispositif transluminal",
     "15.50.61",
     "T82.5",
     "",
     "",
     "TAUSSIG-AE-0036",
     "actif"
    ],
    [
     "Stent laissé déployé en position non prévue après migration ou embolisation",
     "15.50.91",
     "T82.5",
     "473125002",
     "",
     "TAUSSIG-AE-0037",
     "actif"
    ],
    [
     "Dysfonction de dispositif pendant le cathétérisme",
     "15.51.50",
     "T82.5",
     "",
     "",
     "TAUSSIG-AE-0038",
     "retiré, remplacé par TAUSSIG-AE-0016 — doublon : même code IPCCC 15.51.50 (décision A6)"
    ],
    [
     "Embolisation (délogement) d'un coil introduit par cathéter",
     "15.50.65",
     "T82.8",
     "473163005",
     "CP-2019-IC-11",
     "TAUSSIG-AE-0039",
     "actif"
    ],
    [
     "Thrombose vasculaire ou de conduit post-procédurale",
     "15.00.21",
     "T81.7",
     "439127006",
     "CP-2019-IC-24",
     "TAUSSIG-AE-0040",
     "actif"
    ],
    [
     "Hémorragie post-procédurale",
     "15.02.00",
     "T81.0",
     "131148009",
     "CP-2019-IC-26",
     "TAUSSIG-AE-0041",
     "actif"
    ],
    [
     "Anévrisme aortique post-procédural",
     "15.37.80",
     "I71.2 / Y83.8",
     "737158007",
     "CP-2019-IC-28",
     "TAUSSIG-AE-0042",
     "actif"
    ],
    [
     "Anévrisme de l'aorte au site de coarctation après intervention",
     "15.37.07",
     "I71.2 / Y83.8",
     "871661008",
     "CP-2019-IC-28",
     "TAUSSIG-AE-0043",
     "actif"
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
    ],
    [
     "Coil d'embolisation (non neurovasculaire)",
     "704865009",
     "Dispositifs d'occlusion"
    ],
    [
     "Prothèse de fermeture de fuite paravalvulaire",
     "TAUSSIG-OCCLUDER-PARAVALVULAR",
     "Dispositifs d'occlusion"
    ]
   ]
  }
 },
 "examples": {},
 "meta": {
  "nbElements": 160,
  "nbEntities": 21,
  "nbValuesets": 10,
  "nbExamples": 0
 }
};
