# TAUSSIG — ECHSA (nomenclature EACTS-ECHSA, représentation POC) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## CodeSystem: TAUSSIG — ECHSA (nomenclature EACTS-ECHSA, représentation POC) (Expérimental) 

Ce système de codes est référencé dans la définition des ensembles de valeurs suivants :

* [TAUSSIG — CardiacCondition (lésions résiduelles/acquises/post-chir)](ValueSet-taussig-cardiac-condition.md)

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "echsa",
  "url" : "https://taussig/fhir/CodeSystem/echsa",
  "version" : "0.8.0",
  "name" : "TaussigEchsa",
  "title" : "TAUSSIG — ECHSA (nomenclature EACTS-ECHSA, représentation POC)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-07-04",
  "publisher" : "Projet TAUSSIG",
  "description" : "Représentation FHIR, pour le POC TAUSSIG, de la nomenclature de la base ECHSA (European Congenital Heart Surgeons Association, dérivée EACTS-STS/IPCCC). Codes extraits du dictionnaire maître `fields-dicts.xls` (onglet factors). Classes : diagnosis, procedure, status post, complication, aae, nca, gprf. Usage recherche ; codes candidats à valider cliniquement.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "copyright" : "Nomenclature ECHSA © European Congenital Heart Surgeons Association / EACTS. Réutilisation des codes et libellés à usage de recherche (POC TAUSSIG). Codes du module interventionnel ECHSA-AEPC (logiciel ecdbc-ic 7.9.0), © ECHSA / AEPC, intégrés avec attribution pour la recherche (décision TAUSSIG E1).",
  "caseSensitive" : true,
  "content" : "complete",
  "count" : 1003,
  "property" : [{
    "code" : "class",
    "description" : "Classe ECHSA (diagnosis, procedure, status post, complication, aae, nca, gprf).",
    "type" : "string"
  },
  {
    "code" : "group",
    "description" : "Regroupement clinique ECHSA (ex. DORV, Electrophysiological).",
    "type" : "string"
  },
  {
    "code" : "context",
    "description" : "Contexte de saisie ECHSA (patient / operation).",
    "type" : "string"
  },
  {
    "code" : "ver2010",
    "description" : "Présent dans la version 2010 de la nomenclature ECHSA.",
    "type" : "boolean"
  },
  {
    "code" : "module",
    "description" : "Module ECHSA d'origine du code (interventional-cardiology : module AEPC).",
    "type" : "string"
  }],
  "concept" : [{
    "code" : "AAE100",
    "display" : "Myocardial Injury - Central Venous Line Placement",
    "definition" : "Indicate whether the patient experienced a myocardial perforation or injury with central venous line placement.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE110",
    "display" : "Vascular Compromise - Central Venous Line Placement",
    "definition" : "Indicate whether the patient experienced a vascular compromise (e.g., ischemic leg, venous obstruction) secondary to central venous line placement.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE120",
    "display" : "Pneumothorax - Central Venous Line Placement",
    "definition" : "Indicate whether the patient experienced a pneumothorax during central venous line placement.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE130",
    "display" : "Vascular Access",
    "definition" : "Indicate whether the patient experienced difficult vascular access requiring more than one hour of attempted access.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE140",
    "display" : "Hematoma",
    "definition" : "Indicate whether the patient experienced a hematoma requiring cancellation of the procedure or an additional surgical exploration.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE150",
    "display" : "Arterial Puncture",
    "definition" : "Indicate whether the patient experienced an arterial puncture with hematoma formation, hemodynamic consequence or neurologic injury",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE160",
    "display" : "Intravenous/Intra-arterial Air Embolism",
    "definition" : "Intravenous or Intra-arterial air embolism causing hemodynamic, local or systemic injury",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE170",
    "display" : "Bleeding - Regional Anesthetic Site",
    "definition" : "Indicate whether the patient experienced bleeding at the regional anesthetic site or with aspiration.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE180",
    "display" : "Intrathecal Puncture - Regional",
    "definition" : "Indicate whether an intrathecal puncture occurred during placement of a regional anesthetic that was not part of the anesthetic plan.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE190",
    "display" : "Local Anesthetic Toxicity - Regional",
    "definition" : "Indicate whether the patient experienced local anesthetic toxicity during administration of regional anesthesia.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE20",
    "display" : "Dental Injury",
    "definition" : "Indicate whether the patient experienced a dental injury such as lip or gum laceration or tooth injury.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE200",
    "display" : "Neurologic Injury - Regional",
    "definition" : "Indicate if a neurologic injury occurred potentially associated with a regional anesthetic.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE210",
    "display" : "Anaphylaxis/Anaphylactoid Reaction",
    "definition" : "Indicate whether the patient experienced an anaphylaxis/anaphylactoid reaction.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE220",
    "display" : "Non-allergic Drug Reaction",
    "definition" : "Indicate whether the patient experienced a non-allergic drug reaction (e.g., \"Red Man\" syndrome with vancomycin).",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE230",
    "display" : "Medication Administration",
    "definition" : "Indicate if a medication was administered that was not part of the anesthetic plan at the time of administration.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE240",
    "display" : "Medication Dosage",
    "definition" : "Indicate if a medication that was part of the anesthetic plan was given at a dosage or time different than planned.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE250",
    "display" : "Intraoperative Recall",
    "definition" : "Indicate whether the patient experienced any intraoperative recall.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE260",
    "display" : "Malignant Hyperthermia",
    "definition" : "Indicate whether the patient experienced either a suspected or confirmed episode of Malignant Hyperthermia requiring therapy with dantrolene.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE270",
    "display" : "Protamine Reaction",
    "definition" : "Indicate whether the patient experienced a significant protamine reaction requiring additional intervention (e.g., hypotension, brochospasm, elevated pulmonary artery pressure) other than slowing the rate of administration.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE280",
    "display" : "Cardiac Arrest - Unrelated To Surgery",
    "definition" : "Indicate whether the patient experienced a cardiac arrest not related to the procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE290",
    "display" : "Esophageal Bleeding / Rupture",
    "definition" : "Indicate whether the patient experienced esophageal bleeding or rupture during transesophageal echocardiogram (TEE) placement or manipulation.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE30",
    "display" : "Respiratory Arrest",
    "definition" : "Indicate whether the patient experienced preoperative, intraoperative, or postoperative respiratory arrest requiring unanticipated airway support such as placement of an LMA or endotracheal tube where not part of the original anesthetic plan.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE300",
    "display" : "Esophageal Chemical Burn",
    "definition" : "Indicate whether the patient experienced esophageal chemical burn related to transesophageal echocardiogram (TEE) probe.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE310",
    "display" : "Airway Compromise",
    "definition" : "Indicate whether the patient experienced an airway compromise during transesophageal echocardiogram (TEE) placement / manipulation requiring removal of TEE.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE320",
    "display" : "TEE-Related Extubation",
    "definition" : "Indicate if the endotracheal tube was removed from the trachea during TEE manipulation.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE330",
    "display" : "Patient Transfer Event",
    "definition" : "Indicate whether the patient experienced any trauma related to transfers from stretcher to bed or bed to stretcher or similar transfers.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE340",
    "display" : "Neurologic Injury",
    "definition" : "Indicate whether the patient experienced a neurologic injury as a result of patient positioning during anesthetic care.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE40",
    "display" : "Difficult Intubation/Reintubation",
    "definition" : "Indicate whether the patient experienced an unanticipated difficult intubation and/or reintubation.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE50",
    "display" : "Stridor / Sub-glottic Stenosis",
    "definition" : "Indicate whether the patient experienced post-extubation stridor or sub-glottic stenosis requiring therapy such as racemic epinephrine or intravenous dexamethasone or HeliOx",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE60",
    "display" : "Extubation",
    "definition" : "Indicate whether the patient experienced an extubation in the OR (or any procedure location) or during patient transfer to or from procedure location that was not part of anesthetic plan",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE70",
    "display" : "Endotracheal Tube Migration",
    "definition" : "Indicate whether the patient experienced endotracheal tube migration requiring repositioning after initial intubation and securing. Endotracheal tube was either too deep or too high.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE80",
    "display" : "Airway Injury",
    "definition" : "Indicate whether the patient experienced an airway injury related to ventilation such as barotrauma or pneumothorax.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "AAE90",
    "display" : "Arrythmia - Central Venous Line Placement",
    "definition" : "Indicate whether the patient experienced arrythmia during central venous line placement requiring therapy other than withdrawing the wire.",
    "property" : [{
      "code" : "class",
      "valueString" : "aae"
    },
    {
      "code" : "group",
      "valueString" : "aae"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-102",
    "display" : "Sternum left open, Planned",
    "definition" : "Sternum was left open postoperatively with preoperative plans to leave the sternum open postoperatively (i.e. planned).  The goal is for delayed sternotomy closure.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Operative/Procedural"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-104",
    "display" : "Sternum left open, Unplanned",
    "definition" : "Sternum was left open postoperatively without preoperative plans to leave the sternum open postoperatively (i.e. unplanned).  The goal is for delayed sternotomy closure.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Operative/Procedural"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-160",
    "display" : "Postoperative/Postprocedural respiratory insufficiency requiring reintubation",
    "definition" : "Reintubation required after initial extubation.  In other words, the need to reinstitute postoperative or postprocedural mechanical ventilation after a planned extubation and prior to discharge, or after a planned extubation and after discharge but within 30 days of surgery.  The intent of this field is to capture Postoperative/Postprocedural respiratory insufficiency requiring reintubation.  It is not intended to capture situations where a patient may undergo elective intubations for other additional operations or procedures (including percutaneous endoscopic gastrostomy [PEG], tube insertions, catheter placement, cardiac catheterizations, etc.).  However, these elective intubations and extubations are included and counted when determining \"Final Extubation Date and Time\".",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-22",
    "display" : "Unplanned cardiac reoperation during the postoperative or postprocedural time period, exclusive of reoperation for bleeding",
    "definition" : "Any additional unplanned cardiac operation occurring  (1) within 30 days after surgery or intervention in or out of the hospital, or (2) after 30 days during the same hospitalization subsequent to the operation or intervention.  A cardiac operation is defined as any operation that is of the operation type of \"CPB\" or \"No CPB Cardiovascular\".  The following operations will always be coded as \"Planned Reoperation\":  (1) Delayed Sternal Closure, (2) ECMO Decannulation, (3) VAD Decannulation, (4) Removal of Broviac catheter.  The following operations will always be coded as \"Unplanned Reoperation\":  (1) Reoperation for bleeding, (2) Reoperation for infection, (3) Reoperation for hemodynamic instability, (4) Reoperation for initiation of ECMO or VAD, (5) Reoperation for residual or recurrent lesion.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Operative/Procedural"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-224",
    "display" : "Renal failure - acute renal failure, Acute renal failure requiring temporary hemofiltration with the need for dialysis not present at hospital discharge",
    "definition" : "Renal failure - acute renal failure (ROOT Definition) + With new postoperative/postprocedural requirement for temporary hemofiltration.  Code this complication if the patient does not require dialysis at the time of hospital discharge or death in the hospital.  (This complication should be chosen only if the hemofiltration was associated with acute renal failure.) {\"Renal failure - acute renal failure\" ROOT Definition = Acute renal failure is defined as new onset oliguria with sustained urine output < 0.5 cc/kg/hr for 24 hours and/or a rise in creatinine > 1.5 times upper limits of normal for age (or twice the most recent preoperative/preprocedural values if these are available), with eventual need for dialysis (including peritoneal dialysis and/or hemodialysis) or hemofiltration.  Acute renal failure that will be counted as an operative or procedural complication must occur prior to hospital discharge or after hospital discharge but within 30 days of the procedure.  (An operative or procedural complication is any complication, regardless of cause, occurring (1) within 30 days after surgery or intervention in or out of the hospital, or (2) after 30 days during the same hospitalization subsequent to the operation or intervention.  Operative and procedural complications include both intraoperative/intraprocedural complications and postoperative/postprocedural complications in this time interval.)  The complication is to be coded even if the patient required dialysis, but the treatment was not instituted due to patient or family refusal.}",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Renal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-24",
    "display" : "Unplanned interventional cardiovascular catheterization procedure during the postoperative or postprocedural time period",
    "definition" : "Any unplanned interventional cardiovascular catheterization procedure occurring (1) within 30 days after surgery or intervention in or out of the hospital, or (2) after 30 days during the same hospitalization subsequent to the operation or intervention.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Operative/Procedural"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-250",
    "display" : "Wound dehiscence (sterile)",
    "definition" : "\"Wound dehiscence (sterile)\" ROOT Definition = \"Wound dehiscence (sterile)\" is defined as separation of the layers of a surgical wound.  This separation can either be superficial or deep and can include the sternum in the case of a median sternotomy incision.  When the sterile separation includes the skin and sternum, in the case of a median sternotomy incision, use this code (\"Wound dehiscence (sterile)\").  The code \"Sternal instability (sterile)\" should be used to record the complication when the superficial and deep layers of the incision remain intact but non-union of the sternal edges is present.  Causes of wound dehiscence can include tissue ischemia, nutritional deficiencies, use of corticosteroids, vitamin C deficiency, and others.  Wound dehiscence due to wound infection should be recorded as a wound infection.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Wound"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-255",
    "display" : "Wound dehiscence (sterile), Median sternotomy",
    "definition" : "Wound dehiscence (sterile) (ROOT Definition) + Location = Median sternotomy",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Wound"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-26",
    "display" : "Unplanned non-cardiac reoperation during the postoperative or postprocedural time period",
    "definition" : "Any additional unplanned non-cardiac operation occurring (1) within 30 days after surgery or intervention in or out of the hospital, or (2) after 30 days during the same hospitalization subsequent to the operation or intervention.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Operative/Procedural"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-262",
    "display" : "Wound infection-Deep wound infection",
    "definition" : "\"Wound infection-Deep wound infection\" ROOT Definition = A deep wound infection involves the deep soft tissues (e.g., fascial and muscle layers) of the incision AND the patient has at least ONE of the following numbered features: 1) Purulent drainage from the deep portion of the incision (but not from the organ / space component of the surgical site and no evidence of sternal osteomyelitis), 2) The deep incision spontaneously dehisces or is deliberately opened by a surgeon when the patient has ONE of the following lettered signs or symptoms (unless the incision is culture negative): A) fever, B) localized pain, or C) tenderness, 3) An abscess or other evidence of infection involving the deep incision is found on direct examination, during reoperation, or by histopathologic or radiologic examination, or 4) A diagnosis of a deep wound infection by a surgeon or by an attending physician.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Wound"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-263",
    "display" : "Wound infection-Superficial wound infection",
    "definition" : "\"Wound infection-Superficial wound infection\" ROOT Definition = A superficial wound infection must meet the following numbered criteria:  1) The infection involves only the skin and the subcutaneous tissue of the incision and 2) The patient has at least ONE of the following lettered features: A) purulent drainage from the superficial portion of the incision, B) organisms isolated from an aseptically obtained culture of fluid or tissue from the superficial portion of the incision, C) at least ONE of the following numbered signs or symptoms: [1] pain or tenderness, [2] localized swelling, redness, or heat, and [3] the superficial portion of the incision is deliberately opened by a surgeon, unless the incision is culture negative, or D) a diagnosis of superficial wound infection by the surgeon or by the attending physician.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Wound"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-325",
    "display" : "Neurological deficit, Transient neurological deficit not present at discharge",
    "definition" : "Newly recognized and/or newly acquired deficit of neurologic function leading to inpatient referral, therapy, or intervention not otherwise practiced for a similar unaffected inpatient, With no persisting neurologic deficit present at hospital discharge.  In other words, new (onset intraoperatively or postoperatively - or intraprocedurally or postprocedurally) neurological deficit completely resolving prior to discharge from hospital.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Neurologic"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-350",
    "display" : "Intraoperative death or intraprocedural death",
    "definition" : "Patient died in the operating room or procedure room (such as catheterization laboratory or hybrid suite) during the operation or procedure that is being analyzed.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Death"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-360",
    "display" : "Unplanned readmission to the hospital within 30 days of surgery or intervention",
    "definition" : "Any unplanned readmission to the hospital within 30 days of surgery or intervention",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Readmission"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-370",
    "display" : "Multi-System Organ Failure (MSOF) = Multi-Organ Dysfunction Syndrome (MODS)",
    "definition" : "Multi-System Organ Failure (MSOF) is a condition where more than one organ system has failed (for example, respiratory failure requiring mechanical ventilation combined with renal failure requiring dialysis).  Please code the individual organ system failures as well.  If MSOF is associated with sepsis as well, please also code: \"Sepsis, Multi-system Organ Failure\".  Multi-System Organ Failure (MSOF) is synonymous with Multi-Organ Dysfunction Syndrome (MODS).",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Multiple"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-384",
    "display" : "Cardiac failure (severe cardiac dysfunction)",
    "definition" : "Low cardiac output state characterized by some of the following: tachycardia, oliguria, decreased skin perfusion, need for increased inotropic support (10% above baseline at admission), metabolic acidosis, widened Arterial - Venous oxygen saturation, need to open the chest, or need for mechanical support. This complication should be selected if the cardiac dysfunction is of a severity that results in inotrope dependence, mechanical circulatory support, or listing for cardiac transplantation.  A patient will be considered to have \"inotrope dependence\" if they cannot be weaned from inotropic support (10% above baseline at admission) after any period of 48 consecutive hours that occurs after the time of OR Exit Date and Time and either (1) within 30 days after surgery in or out of the hospital, and (2) after 30 days during the same hospitalization subsequent to the operation.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-390",
    "display" : "Pulmonary hypertension",
    "definition" : "Clinically significant elevation of pulmonary arterial pressure, requiring intervention such as nitric oxide, or other therapies.  Typically the mean pulmonary arterial pressure is greater than 25mmHg in the presence of a normal pulmonary arterial occlusion pressure (wedge pressure).  A \"clinically significant\" event or condition is an event or condition that necessitates a change in treatment",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-400",
    "display" : "Peripheral nerve injury, Neurological deficit persisting at discharge",
    "definition" : "Peripheral nerve injury (ROOT Definition) + With a persisting neurologic deficit present at hospital discharge. {\"Peripheral nerve injury\" ROOT Definition = Newly acquired or newly recognized deficit of unilateral or bilateral peripheral nerve function indicated by physical exam findings, imaging studies, or both.}",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Neurologic"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-410",
    "display" : "Spinal cord injury, Neurological deficit persisting at discharge",
    "definition" : "Spinal cord injury (ROOT Definition) + With a persisting neurologic deficit present at hospital discharge. {\"Spinal cord injury\" ROOT Definition = Newly acquired or newly recognized deficit of spinal cord function indicated by physical exam findings, imaging studies, or both.}",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Neurologic"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-420",
    "display" : "Stroke",
    "definition" : "\"Stroke\" ROOT Definition = A stroke is any confirmed neurological deficit of abrupt onset caused by a disturbance in blood flow to the brain, when the neurologic deficit does not resolve within 24 hours.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Neurologic"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-72",
    "display" : "Arrhythmia requiring drug therapy",
    "definition" : "Arrhythmia (ROOT Definition) + An arrhythmia requiring drug therapy",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmia"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-73",
    "display" : "Arrhythmia requiring electrical cardioversion or defibrillation",
    "definition" : "Arrhythmia (ROOT Definition) + An arrhythmia requiring electrical cardioversion or defibrillation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmia"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-900",
    "display" : "Other complication",
    "definition" : "Any complication not otherwise specified in this list.  An operative or procedural complication is any complication, regardless of cause, occurring (1) within 30 days after surgery or intervention in or out of the hospital, or (2) after 30 days during the same hospitalization subsequent to the operation or intervention.  Operative and procedural complications include both intraoperative/intraprocedural complications and postoperative/postprocedural complications in this time interval.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Other"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2010-901",
    "display" : "Other operative/procedural complication",
    "definition" : "Any complication not otherwise specified in this list that occurs prior to discharge, or after discharge but within 30 days of surgery or intervention.  (An operative or procedural complication is any complication, regardless of cause, occurring (1) within 30 days after surgery or intervention in or out of the hospital, or (2) after 30 days during the same hospitalization subsequent to the operation or intervention.  Operative and procedural complications include both intraoperative/intraprocedural complications and postoperative/postprocedural complications in this time interval.)",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Other"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP1",
    "display" : "Reoperation during this admission (unplanned reoperation)",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "complication"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "CP10",
    "display" : "Pericardial effusion, Requiring drainage",
    "definition" : "Abnormal accumulation of fluid in the pericardial space, Requiring drainage, By any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP11",
    "display" : "Systemic vein obstruction",
    "definition" : "Clinically significant stenosis or obstruction of any major systemic vein (e.g., superior vena cava, inferior vena cava, femoral veins, internal jugular veins, etc.).  A \"clinically significant\" event or condition is an event or condition that necessitates a change in treatment",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP12",
    "display" : "Pulmonary vein obstruction",
    "definition" : "Clinically significant stenosis or obstruction of pulmonary veins.  Typically diagnosed by echocardiography or cardiac catheterization, this may present with or without symptoms.  A \"clinically significant\" event or condition is an event or condition that necessitates a change in treatment",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP13",
    "display" : "Pulmonary hypertensive crisis (PA pressure > systemic pressure)",
    "definition" : "An acute state of inadequate systemic perfusion associated with pulmonary hypertension, when the pulmonary arterial pressure is greater than the systemic arterial pressure.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP14",
    "display" : "Postoperative/Postprocedural respiratory insufficiency requiring mechanical ventilatory support > 7 days",
    "definition" : "Respiratory Insufficiency requiring mechanical ventilatory support from surgery or procedure to greater than 7 days postoperatively/postprocedurally.  In other words, the inability of the patient to exchange oxygen and carbon dioxide in sufficient quantities to avoid unacceptable hypercarbia, hypoxemia, or both, without mechanical ventilatory support for greater than 7 days during the postoperative or postprocedural period.  The patient therefore does utilize mechanical ventilatory support for greater than 7 days during the postoperative or postprocedural period.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP15",
    "display" : "Respiratory failure, Requiring tracheostomy",
    "definition" : "Failure to wean from mechanical ventilation necessitating the creation of a surgical airway",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP16",
    "display" : "Pneumonia",
    "definition" : "\"Pneumonia\" ROOT Definition = Pneumonia is defined as a \"respiratory disease characterized by inflammation of the lung parenchyma (including alveolar spaces and interstitial tissue), most commonly caused by infection\".  Pneumonia is diagnosed by appropriate clinical findings (such as fever, leukopenia or leukocytosis, and new onset of purulent sputum) and one or more of the following:  positive cultures (of sputum or pulmonary secretions) and / or pulmonary infiltrate on chest x-ray.  An endotracheal tube culture may or may not be positive.  Patients commonly demonstrate an evolving area of focal lung consolidation accompanied by fever (>38.5).  Pneumonia (pneumonitis) may affect an entire lobe (lobar pneumonia), a segment of a lobe (segmental or lobular pneumonia), alveoli contiguous to bronchi (bronchopneumonia), or interstitial tissue (interstitial pneumonia). These distinctions are generally based on x-ray observations.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP17",
    "display" : "Pneumothorax, Requiring intervention",
    "definition" : "A collection of gas in the pleural space resulting in collapse of some or all of the lung on the affected side, requiring intervention.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP18",
    "display" : "Pleural effusion, Requiring drainage",
    "definition" : "Abnormal accumulation of fluid in the pleural space, Requiring drainage, By any technique.  If the pleural effusion is known to be a chylothorax, please only code \"Chylothorax \".",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP19",
    "display" : "Chylothorax",
    "definition" : "Presence of lymphatic fluid in the pleural space, commonly secondary to leakage from the thoracic duct or one of its main tributaries.  Thoracocentesis is the gold standard for diagnosis and generally reveals a predominance of lymphocytes and/or a triglyceride level greater than 110 mg/dL",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP2",
    "display" : "Cardiac arrest, Timing = Cardiac arrest (MI) during or following procedure (Perioperative/Periprocedural = Intraoperative/Intraprocedural and/or Postoperative/Postprocedural)",
    "definition" : "A cardiac arrest is the cessation of effective cardiac mechanical function.  This complication should be selected if the cardiac arrest developed after OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP20",
    "display" : "Renal failure - acute renal failure, Acute renal failure requiring temporary dialysis with the need for dialysis not present at hospital discharge",
    "definition" : "Renal failure - acute renal failure (ROOT Definition) + With new postoperative/postprocedural requirement for temporary dialysis, including peritoneal dialysis and/or hemodialysis.  Code this complication if the patient does not require dialysis at the time of hospital discharge or death in the hospital.  (This complication should be chosen only if the dialysis was associated with acute renal failure.) {\"Renal failure - acute renal failure\" ROOT Definition = Acute renal failure is defined as new onset oliguria with sustained urine output < 0.5 cc/kg/hr for 24 hours and/or a rise in creatinine > 1.5 times upper limits of normal for age (or twice the most recent preoperative/preprocedural values if these are available), with eventual need for dialysis (including peritoneal dialysis and/or hemodialysis) or hemofiltration.  Acute renal failure that will be counted as an operative or procedural complication must occur prior to hospital discharge or after hospital discharge but within 30 days of the procedure.  (An operative or procedural complication is any complication, regardless of cause, occurring (1) within 30 days after surgery or intervention in or out of the hospital, or (2) after 30 days during the same hospitalization subsequent to the operation or intervention.  Operative and procedural complications include both intraoperative/intraprocedural complications and postoperative/postprocedural complications in this time interval.)  The complication is to be coded even if the patient required dialysis, but the treatment was not instituted due to patient or family refusal.}",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Renal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP21",
    "display" : "Renal failure - acute renal failure, Acute renal failure requiring dialysis at the time of hospital discharge",
    "definition" : "Renal failure - acute renal failure (ROOT Definition) + With new postoperative/postprocedural requirement for dialysis, including peritoneal dialysis and/or hemodialysis.  Code this complication if the patient requires dialysis at the time of hospital discharge or death in the hospital.  (This complication should be chosen only if the dialysis was associated with acute renal failure.) {\"Renal failure - acute renal failure\" ROOT Definition = Acute renal failure is defined as new onset oliguria with sustained urine output < 0.5 cc/kg/hr for 24 hours and/or a rise in creatinine > 1.5 times upper limits of normal for age (or twice the most recent preoperative/preprocedural values if these are available), with eventual need for dialysis (including peritoneal dialysis and/or hemodialysis) or hemofiltration.  Acute renal failure that will be counted as an operative or procedural complication must occur prior to hospital discharge or after hospital discharge but within 30 days of the procedure.  (An operative or procedural complication is any complication, regardless of cause, occurring (1) within 30 days after surgery or intervention in or out of the hospital, or (2) after 30 days during the same hospitalization subsequent to the operation or intervention.  Operative and procedural complications include both intraoperative/intraprocedural complications and postoperative/postprocedural complications in this time interval.)  The complication is to be coded even if the patient required dialysis, but the treatment was not instituted due to patient or family refusal.}",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Renal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP22",
    "display" : "Bleeding, Requiring reoperation",
    "definition" : "Postoperative/postprocedural bleeding requiring reoperation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Operative/Procedural"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP23",
    "display" : "Wound dehiscence",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "complication"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "CP24",
    "display" : "Wound infection",
    "definition" : "\"Wound infection\" ROOT Definition = Erythema, possible induration and possible fluctuance of a surgical wound (surgical site) with possible drainage and possible tissue separation.  Though wound cultures may be positive, this is not an absolute requirement for establishing this clinical diagnosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Wound"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP25",
    "display" : "Wound infection-Mediastinitis",
    "definition" : "The diagnosis of mediastinitis must meet one of the following criteria:  Criterion 1: Patient has organisms cultured from mediastinal tissue or fluid that is obtained during a surgical operation or by needle aspiration.  Criterion 2: Patient has evidence of mediastinitis by histopathologic examination or visual evidence of mediastinitis seen during a surgical operation.  Criterion 3:  Patient has at least ONE of the following numbered signs or symptoms with no other recognized cause: 1) fever, 2) chest pain, or 3) sternal instability AND at least one of the following numbered features: 1) purulent mediastinal drainage, 2) organisms cultured from mediastinal blood, drainage or tissue, or 3) widening of the cardio-mediastinal silhouette.  Criterion 4:  Patient <= 1 year of age has at least one of the following numbered signs or symptoms with no other recognized cause:  1) fever, 2) hypothermia, 3) apnea, 4) bradycardia, or 5) sternal instability AND at least one of the following numbered features: 1) purulent mediastinal discharge, 2) organisms cultured from mediastinal blood, drainage or tissue, or 3) widening of the cardio-mediastinal silhouette.  Infections of the sternum (sternal osteomyelitis) should be classified as mediastinitis.  Sternal instability that is not associated with a wound infection or mediastinitis is documented as \"Sternal instability\".",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Wound"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP26",
    "display" : "Endocarditis-postprocedural infective endocarditis",
    "definition" : "Infective endocarditis in the setting of a heart which has been altered by surgery or intervention.  Duke Criteria for the Diagnosis of Infective Endocarditis (IE):  The definitive diagnosis of infective endocarditis requires one of the following four situations:  1) Histologic and/or microbiologic evidence of infection at surgery or autopsy such as positive valve culture or histology;  2) Two major criteria;  3) One major criterion and three minor criteria;  4) Five minor criteria.  The two major criteria are:  1) Blood cultures positive for IE 2) Evidence of endocardial involvement.  Blood cultures positive for IE requires:  1) Typical microorganism consistent with IE isolated from 2 separate blood cultures, as noted in number two below (viridans streptococci, Streptococcus bovis, Staphylococcus aureus, or HACEK group [HACEK, Haemophilus species {H. aprophilus and H. paraaphrophilus}, Actinobacillus actinoinycetemcomitans, Cardiobacterium hominis, Eikenella corrodens, and Kingella kingae.]) or (Community-acquired enterococci in the absence of a primary focus);  2) Microorganisms consistent with IE isolated from persistently positive blood cultures defined as:  (At least 2 positive cultures of blood samples obtained > 12 hours apart) or (All of 3 or a majority of 4 or more separate cultures of blood, the first and the last sample obtained > 1 hr apart);  3) Single blood culture positive for Coxiella burnetii or an antiphase I IgG antibody titer of >1 :800.  Evidence of endocardial involvement requires 1) Positive results of echocardiography for IE defined as:  (Oscillating intracardiac mass on the valve or supporting structures in the path of regurgitant jets or on implanted material in the absence of an alternative anatomic explanation) or (Abscess) or (New partial dehiscence of a valvular prosthesis) or 2) New valvular regurgitation (worsening or changing or preexisting murmur not sufficient).  The six minor criteria are:  1) Predisposing heart disease or injection drug use (IVDA);  2) Temperature of > 38C;  3) Vascular phenomenon (major arterial emboli, septic pulmonary infarcts, mycotic aneurysm, intracranial or conjunctival hemorrhage, Janeway's lesions);  4) Immunologic phenomenon (glomerulonephritis, Osler's nodes, Roth's spots, rheumatoid factor);  5) Microbiologic evidence (a positive blood culture that does not meet a major criterion as noted above) or serologic evidence of active infection with an organism consistent with IE;  6) Echocardiographic findings that are consistent with IE but do not meet a major criterion as noted above.  References:  1) Dhawan VK Infectious Endocarditis in Elderly Patients. Clin. Infect. Dis. 2002;34:806-812.  2) Durack DT, Lukes AS, Bright DK. New criteria for diagnosis of infective endocarditis: utilization of specific echocardiographic findings. Duke Endocarditis Service. Am. J. Med. 1994;96:200-209.  3) Li IS, Sexton DJ, Mick N, et al. Proposed modifications to the Duke criteria for the diagnosis of infective endocarditis. Clin. Infect. Dis. 2000;30:633-638. 4) http://gold.aecom.yu.edu/id/almanac/dukeendocarditis.htm, accessed July 5, 2006.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP27",
    "display" : "Sepsis",
    "definition" : "\"Sepsis\" ROOT Definition = Sepsis is defined as \"evidence of serious infection accompanied by a deleterious systemic response\".  In the time period of the first 48 postoperative or postprocedural hours, the diagnosis of sepsis requires the presence of a Systemic Inflammatory Response Syndrome (SIRS) resulting from a proven infection (such as bacteremia, fungemia or urinary tract infection). In the time period after the first 48 postoperative or postprocedural hours, sepsis may be diagnosed by the presence of a SIRS resulting from suspected or proven infection. During the first 48 hours, a SIRS may result from the stress associated with surgery and/or cardiopulmonary bypass.  Thus, the clinical criteria for sepsis during this time period should be more stringent. A systemic inflammatory response syndrome (SIRS) is present when at least two of the following criteria are present: hypo- or hyperthermia (>38.5 or <36.0), tachycardia or bradycardia, tachypnea, leukocytosis or leukopenia, and thrombocytopenia.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Infectious"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP28",
    "display" : "Paralyzed diaphragm (possible phrenic nerve injury)",
    "definition" : "Presence of elevated hemi-diaphragm(s) on chest radiograph in conjunction with evidence of weak, immobile, or paradoxical movement assessed by ultrasound or fluoroscopy.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Neurologic"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP29",
    "display" : "Vocal cord dysfunction (possible recurrent laryngeal nerve injury)",
    "definition" : "Presence of poor or no vocal cord movement assessed by endoscopy.  Patient may or may not have stridor, hoarse voice or poor cry, in conjunction with endoscopic findings.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Neurologic"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP3",
    "display" : "Postoperative/Postprocedural mechanical circulatory support (IABP, VAD, ECMO, or CPS)",
    "definition" : "Utilization of postoperative/postprocedural mechanical support, of any type (IABP, VAD, ECMO, or CPS), for resuscitation/CPR or support, during the postoperative/postprocedural time period.  Code this complication if it occurs (1) within 30 days after surgery or intervention regardless of the date of hospital discharge, or (2) after 30 days during the same hospitalization subsequent to the operation or intervention.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Mechanical support utilization"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP30",
    "display" : "Neurological deficit, Neurological deficit persisting at discharge",
    "definition" : "Newly recognized and/or newly acquired deficit of neurologic function leading to inpatient referral, therapy, or intervention not otherwise practiced for a similar unaffected inpatient, With a persisting neurologic deficit present at hospital discharge.  In other words, new (onset intraoperatively or postoperatively - or intraprocedurally or postprocedurally) neurological deficit persisting and present at discharge from hospital.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Neurologic"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP31",
    "display" : "Seizure",
    "definition" : "\"Seizure\" ROOT Definition = A seizure is defined as the clinical and/or electroencephalographic recognition of epileptiform activity.",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Neurologic"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP32",
    "display" : "Other postoperative complication",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "complication"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "CP4",
    "display" : "Arrhythmia necessitating pacemaker, Temporary pacemaker",
    "definition" : "Implantation and utilization of a temporary pacemaker for treatment of any arrhythmia including heart block (atrioventricular [AV] heart block).",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmia - Arrhythmia necessitating pacemaker"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP5",
    "display" : "Arrhythmia necessitating pacemaker, Permanent pacemaker",
    "definition" : "Implantation and utilization of a permanent pacemaker for treatment of any arrhythmia including heart block (atrioventricular [AV] heart block).",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmia - Arrhythmia necessitating pacemaker"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP6",
    "display" : "Arrhythmia",
    "definition" : "\"Arrhythmia\" ROOT Definition = Any cardiac rhythm other than Normal Sinus Rhythm (non-NSR).  If pacemaker is required, also code \"Arrhythmia necessitating pacemaker\".  The definition of arrhythmia from The World Health Organization and The International Society of Cardiology Task Force is as follows:  An arrhythmia is defined as \"any cardiac rhythm other than the normal sinus rhythm. Such a rhythm may be either of sinus or ectopic origin, and either regular or irregular. An arrhythmia may be due to a disturbance in impulse formation or conduction, or both\".",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmia"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP7",
    "display" : "Cardiac dysfunction resulting in low cardiac output",
    "definition" : "Low cardiac output state characterized by some of the following: tachycardia, oliguria, decreased skin perfusion, need for increased inotropic support (10% above baseline at admission), metabolic acidosis, widened Arterial - Venous oxygen saturation, need to open the chest, or need for mechanical support.  If the cardiac dysfunction is of a severity that results in inotrope dependence, mechanical circulatory support, or listing for cardiac transplantation, please also code as \"Cardiac failure (severe cardiac dysfunction)\".  )\".  A patient will be considered to have \"inotrope dependence\" if they cannot be weaned from inotropic support (10% above baseline at admission) after any period of 48 consecutive hours that occurs after the time of OR Exit Date and Time and either (1) within 30 days after surgery in or out of the hospital, and (2) after 30 days during the same hospitalization subsequent to the operation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP8",
    "display" : "Postoperative acidosis",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "complication"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "CP9",
    "display" : "Sternum left opened",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "complication"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "DIAG-2010-1170",
    "display" : "Airway disease",
    "definition" : "Included in this diagnostic category would be airway pathology not included under the definition of tracheal stenosis such as tracheomalacia, bronchotracheomalacia, tracheal right upper lobe, bronchomalacia, subglottic stenosis, bronchial stenosis, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-1325",
    "display" : "Rheumatic heart disease",
    "definition" : "Heart disease, usually valvular (e.g., mitral or aortic), following an infection with group A streptococci.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-170",
    "display" : "Truncal valve insufficiency",
    "definition" : "Functional abnormality - insufficiency - of the truncal valve. May be further subdivided into grade of insufficiency (I, II, III, IV or mild, moderate, severe).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2000",
    "display" : "Interrupted aortic arch + AP window (aortopulmonary window)",
    "definition" : "Indicate if the patient has the diagnosis of \"Interrupted aortic arch + AP window (aortopulmonary window)\". In the event of interrupted aortic arch occurring in association with AP window, code \"Interrupted aortic arch + AP window (aortopulmonary window)\", and then use additional (secondary) diagnostic codes to describe the interrupted aortic arch and the AP window separately to provide further documentation about the individual interrupted aortic arch and AP window types. {Interrupted aortic arch is defined as the loss of luminal continuity between the ascending and descending aorta. In most cases blood flow to the descending thoracic aorta is through a PDA, and there is a large VSD. Arch interruption is further defined by site of interruption. In type A, interruption is distal to the left subclavian artery; in type B interruption is between the left carotid and left subclavian arteries; and in type C interruption occurs between the innominate and left carotid arteries.} {An \"AP window (aortopulmonary window)\" is defined as a defect with side-to-side continuity of the lumens of the aorta and pulmonary arterial tree, which is distinguished from common arterial trunk (truncus arteriosus) by the presence of two arterial valves or their atretic remnants. (In other words, an aortopulmonary window is a communication between the main pulmonary artery and ascending aorta in the presence of two separate semilunar [pulmonary and aortic] valves. The presence of two separate semilunar valves distinguishes AP window from truncus arteriosus. Type 1 proximal defect: AP window located just above the sinus of Valsalva, a few millimeters above the semilunar valves, with a superior rim but little inferior rim separating the AP window from the semilunar valves. Type 2 distal defect: AP window located in the uppermost portion of the ascending aorta, with a well-formed inferior rim but little superior rim. Type 3 total defect: AP window involving the majority of the ascending aorta, with little superior and inferior rims. The intermediate type of AP window is similar to the total defect but with adequate superior and inferior rims. In the event of AP window occurring in association with interrupted aortic arch, code \"Interrupted aortic arch + AP window (aortopulmonary window)\", and then use additional (secondary) diagnostic codes to describe the interrupted aortic arch and AP window separately to provide further documentation about the individual interrupted arch and AP window types.)}",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2010",
    "display" : "Truncus arteriosus + Interrupted aortic arch",
    "definition" : "Indicate if the patient has the diagnosis of \"Truncus arteriosus + Interrupted aortic arch\". {A truncus arteriosus is also known as a common arterial trunk and is defined as a heart in which a single arterial trunk arises from the heart, giving origin to the coronary arteries, the pulmonary arteries, and the systemic arterial circulation. In the majority of instances there is a ventricular septal defect and a single semilunar valve which may contain two, three, four, or more leaflets and is occasionally dysplastic. The infundibular septum is virtually absent superiorly. In most instances the truncal valve overrides the true interventricular septum (and thus both ventricles), but very rarely the truncal valve may override the right ventricle entirely. If in such case there is no ventricular septal defect, then the left ventricle and mitral valve may be extremely hypoplastic.} {Interrupted aortic arch is defined as the loss of luminal continuity between the ascending and descending aorta. In most cases blood flow to the descending thoracic aorta is through a PDA, and there is a large VSD. Arch interruption is further defined by site of interruption. In type A, interruption is distal to the left subclavian artery; in type B interruption is between the left carotid and left subclavian arteries; and in type C interruption occurs between the innominate and left carotid arteries.}",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2020",
    "display" : "Interrupted aortic arch + VSD",
    "definition" : "Indicate if the patient has the diagnosis of \"Interrupted aortic arch + VSD\". In the event of interrupted aortic arch occurring in association with VSD, code \"Interrupted aortic arch + VSD\", and then use additional (secondary) diagnostic codes to describe the interrupted aortic arch and the VSD separately to provide further documentation about the individual interrupted aortic arch and VSD types. {Interrupted aortic arch is defined as the loss of luminal continuity between the ascending and descending aorta. In most cases blood flow to the descending thoracic aorta is through a PDA, and there is a large VSD. Arch interruption is further defined by site of interruption. In type A, interruption is distal to the left subclavian artery; in type B interruption is between the left carotid and left subclavian arteries; and in type C interruption occurs between the innominate and left carotid arteries.} {A \"VSD\" is a \"Ventricular Septal Defect\" and is also known as an \"Interventricular communication\". A VSD is defined as \"a hole between the ventricular chambers or their remnants\". (The VSD is defined on the basis of its margins as seen from the aspect of the morphologically right ventricle. In the setting of double outlet right ventricle, the defect provides the outflow from the morphologically left ventricle. In univentricular atrioventricular connections with functionally single left ventricle with an outflow chamber, the communication is referred to by some as a bulboventricular foramen.)}",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2030",
    "display" : "DORV + AVSD (AV Canal)",
    "definition" : "Indicate if the patient has the diagnosis of \"DORV + AVSD (AV Canal)\". In the event of DORV occurring in association with AVSD (AV Canal), code \"DORV + AVSD (AV Canal)\", and then use additional (secondary) diagnostic codes to describe the DORV and the AVSD (AV Canal) separately to provide further documentation about the DORV and AVSD (AV Canal) types. {\"DORV\" is \"Double outlet right ventricle\" and is defined as a type of ventriculoarterial connection in which both great vessels arise entirely or predominantly from the right ventricle.} In this case, the DORV exists in combination with an atrioventricular septal defect and common atrioventricular junction guarded by a common atrioventricular valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "DORV"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2040",
    "display" : "Arrhythmia, Atrial",
    "definition" : "Indicate if the patient has the diagnosis of \"Arrhythmia, Atrial\". \"Arrhythmia, Atrial\" ROOT Definition = Nonsinus atrial rhythm with or without atrioventricular conduction. [1]. [1]. Jacobs JP. (Editor). 2008 Supplement to Cardiology in the Young: Databases and The Assessment of Complications associated with The Treatment of Patients with Congenital Cardiac Disease, Prepared by: The Multi-Societal Database Committee for Pediatric and Congenital Heart Disease, Cardiology in the Young, Volume 18, Supplement S2, pages 1 -530, December 9, 2008, page 373.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2050",
    "display" : "Arrhythmia, Junctional",
    "definition" : "Indicate if the patient has the diagnosis of \"Arrhythmia, Junctional\". \"Arrhythmias arising from the atrioventricular junction; may be bradycardia, tachycardia, premature beats, or escape rhythm [1]. [1]. Jacobs JP. (Editor). 2008 Supplement to Cardiology in the Young: Databases and The Assessment of Complications associated with The Treatment of Patients with Congenital Cardiac Disease, Prepared by: The Multi-Societal Database Committee for Pediatric and Congenital Heart Disease, Cardiology in the Young, Volume 18, Supplement S2, pages 1 -530, December 9, 2008, page 379.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2060",
    "display" : "Arrhythmia, Ventricular",
    "definition" : "Indicate if the patient has the diagnosis of \"Arrhythmia, Ventricular\". \"Arrhythmia, Ventricular\" ROOT Definition = Abnormal rhythm originating from the ventricles [1]. [1]. Jacobs JP. (Editor). 2008 Supplement to Cardiology in the Young: Databases and The Assessment of Complications associated with The Treatment of Patients with Congenital Cardiac Disease, Prepared by: The Multi-Societal Database Committee for Pediatric and Congenital Heart Disease, Cardiology in the Young, Volume 18, Supplement S2, pages 1 -530, December 9, 2008, page 393.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2070",
    "display" : "Postoperative bleeding",
    "definition" : "Indicate if the patient has the diagnosis of \" Postoperative bleeding\".",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2080",
    "display" : "Shone's syndrome",
    "definition" : "Shone's syndrome is a syndrome of multilevel hypoplasia and obstruction of left sided cardiovascular structures including more than one of the following lesions: (1) supravalvar ring of the left atrium, (2) a parachute deformity of the mitral valve, (3) subaortic stenosis, and (4) aortic coarctation. The syndrome is based on the original report from Shone [1] that was based on analysis of 8 autopsied cases and described the tendency of these four obstructive, or potentially obstructive, conditions to coexist. Only 2 of the 8 cases exhibited all four conditions, with the other cases exhibiting only two or three of the anomalies [2]. [1] Shone JD, Sellers RD, Anderson RG, Adams P, Lillehei CW, Edwards JE. The developmental complex of \"parachute mitral valve\", supravalvar ring of left atrium, subaortic stenosis, and coarctation of the aorta. Am J Cardiol 1963; 11: 714-725. [2]. Tchervenkov CI, Jacobs JP, Weinberg PM, Aiello VD, Beland MJ, Colan SD, Elliott MJ, Franklin RC, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G. The nomenclature, definition and classification of hypoplastic left heart syndrome. Cardiology in the Young, 2006; 16(4): 339-368, August 2006. Please note that the term \"2080 Shone's syndrome\" may be the \"Fundamental Diagnosis\" of a patient; however, the term \"2080 Shone's syndrome\" may not be the \"Primary Diagnosis\" of an operation. The term \"2080 Shone's syndrome\" may be a \"Secondary Diagnosis\" of an operation.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2090",
    "display" : "Dextrocardia",
    "definition" : "Indicate if the patient has the diagnosis of \"Dextrocardia\". \"Dextrocardia\" is most usually considered synonymous with a right-sided ventricular mass, whilst \"dextroversion\" is frequently defined as a configuration where the ventricular apex points to the right. In a patient with the usual atrial arrangement, or situs solitus, dextroversion, therefore, implies a turning to the right of the heart [1]. [1]. Jacobs JP, Anderson RH, Weinberg P, Walters III HL, Tchervenkov CI, Del Duca D, Franklin RCG, Aiello VD, Béland MJ, Colan SD, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G, Elliott MJ. The nomenclature, definition and classification of cardiac structures in the setting of heterotaxy. In 2007 Supplement to Cardiology in the Young: Controversies and Challenges Facing Paediatric Cardiovascular Practitioners and their Patients, Anderson RH, Jacobs JP, and Wernovsky G, editors. Cardiology in the Young, Volume 17, Supplement 2, pages 1-28, doi: 10.1017/S1047951107001138, September 2007.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2100",
    "display" : "Levocardia",
    "definition" : "Indicate if the patient has the diagnosis of \"Levocardia\" . \"Levocardia\" usually considered synonymous with a left-sided ventricular mass, whilst \"levoversion\" is frequently defined as a configuration where the ventricular apex points to the left [1]. [1]. Jacobs JP, Anderson RH, Weinberg P, Walters III HL, Tchervenkov CI, Del Duca D, Franklin RCG, Aiello VD, Béland MJ, Colan SD, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G, Elliott MJ. The nomenclature, definition and classification of cardiac structures in the setting of heterotaxy. In 2007 Supplement to Cardiology in the Young: Controversies and Challenges Facing Paediatric Cardiovascular Practitioners and their Patients, Anderson RH, Jacobs JP, and Wernovsky G, editors. Cardiology in the Young, Volume 17, Supplement 2, pages 1-28, doi: 10.1017/S1047951107001138, September 2007.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2110",
    "display" : "Mesocardia",
    "definition" : "Indicate if the patient has the diagnosis of \"Mesocardia\" . \"Mesocardia\" is most usually considered synonymous with the ventricular mass occupying the midline [1]. [1]. Jacobs JP, Anderson RH, Weinberg P, Walters III HL, Tchervenkov CI, Del Duca D, Franklin RCG, Aiello VD, Béland MJ, Colan SD, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G, Elliott MJ. The nomenclature, definition and classification of cardiac structures in the setting of heterotaxy. In 2007 Supplement to Cardiology in the Young: Controversies and Challenges Facing Paediatric Cardiovascular Practitioners and their Patients, Anderson RH, Jacobs JP, and Wernovsky G, editors. Cardiology in the Young, Volume 17, Supplement 2, pages 1-28, doi: 10.1017/S1047951107001138, September 2007.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2120",
    "display" : "Situs inversus",
    "definition" : "Indicate if the patient has the diagnosis of \"Situs inversus \" of the atrial chambers. The development of morphologically right-sided structures on one side of the body, and morphologically left-sided structures on the other side, is termed lateralization. Normal lateralization, the usual arrangement, is also known as \"situs solitus\". The mirror-imaged arrangement is also known as \"situs inversus\". The term \"visceroatrial situs\" is often used to refer to the situs of the viscera and atria when their situs is in agreement. The arrangement of the organs themselves, and the arrangement of the atrial chambers, is not always the same. Should such disharmony be encountered, the sidedness of the organs and atrial chambers must be separately specified [1]. [1]. Jacobs JP, Anderson RH, Weinberg P, Walters III HL, Tchervenkov CI, Del Duca D, Franklin RCG, Aiello VD, Béland MJ, Colan SD, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G, Elliott MJ. The nomenclature, definition and classification of cardiac structures in the setting of heterotaxy. In 2007 Supplement to Cardiology in the Young: Controversies and Challenges Facing Paediatric Cardiovascular Practitioners and their Patients, Anderson RH, Jacobs JP, and Wernovsky G, editors. Cardiology in the Young, Volume 17, Supplement 2, pages 1-28, doi: 10.1017/S1047951107001138, September 2007.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2130",
    "display" : "Shunt failure",
    "definition" : "Indicate if the patient has the diagnosis of \"Shunt failure\" . This diagnostic subgroup includes failure of any of a variety of shunts (\"Shunt, Systemic to pulmonary, Modified Blalock-Taussig Shunt (MBTS)\", \"Shunt, Systemic to pulmonary, Central (from aorta or to main pulmonary artery)\", \"Shunt, Systemic to pulmonary, Other\", and \"Sano Shunt\"), secondary to any of the following etiologies: shunt thrombosis, shunt occlusion, shunt stenosis, shunt obstruction, and shunt outgrowth. This diagnosis (\"Shunt failure\") would be the primary diagnosis in a patient with, for example, \"Hypoplastic left heart syndrome (HLHS)\" who underwent a \" Norwood procedure\" with a \"Modified Blalock-Taussig Shunt\" and now requires reoperation for thrombosis of the \"Modified Blalock-Taussig Shunt\". The underlying or fundamental diagnosis in this patient is \"Hypoplastic left heart syndrome (HLHS)\", but the primary diagnosis for the operation to be performed to treat the thrombosis of the \"Modified Blalock-Taussig Shunt\" would be \" Shunt failure\". Please note that the choice \"2130 Shunt failure\" does not include \"520 Conduit failure\".",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Shunt failure"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-2140",
    "display" : "TOF, Pulmonary stenosis",
    "definition" : "Indicate if the patient has the diagnosis of \"TOF, Pulmonary stenosis\". Use this diagnosis if the patient has tetralogy of Fallot and pulmonary stenosis. Do not use this diagnosis if the patient has tetralogy of Fallot and pulmonary atresia. Do not use this diagnosis if the patient has tetralogy of Fallot and absent pulmonary valve. Do not use this diagnosis if the patient has tetralogy of Fallot and atrioventricular canal. {Tetralogy of Fallot is defined as a group of malformations with biventricular atrioventricular alignments or connections characterized by anterosuperior deviation of the conal or outlet septum or its fibrous remnant, narrowing or atresia of the pulmonary outflow, a ventricular septal defect of the malalignment type, and biventricular origin of the aorta. Hearts with tetralogy of Fallot will always have a ventricular septal defect, narrowing or atresia of the pulmonary outflow, and aortic override; hearts with tetralogy of Fallot will most often have right ventricular hypertrophy. (An additional, often muscular [Type 4] VSD may be seen with TOF and should be coded separately as a secondary diagnosis as \"VSD, Type 4 (Muscular)\". Pulmonary arteries may be diminutive or there may be an absent left or right pulmonary artery; additional coding for pulmonary artery and/or branch pulmonary artery stenoses may be found under RVOT obstruction. Abnormal coronary artery distribution may also be associated with tetralogy of Fallot and may be coded separately under coronary artery anomalies. The presence of associated anomalies such as additional VSD, atrial septal defect, right aortic arch, left superior vena cava, and coronary artery anomalies must be subspecified as an additional or secondary diagnosis under the primary TOF diagnosis. TOF with absent pulmonary valve or TOF with associated complete atrioventricular canal are NOT to be secondary diagnoses under TOF - they are separate entities and should be coded as such. Controversy surrounds the differentiation between TOF and double outlet right ventricle [DORV]; in the nomenclature used here, DORV is defined as a type of ventriculoarterial connection in which both great vessels arise predominantly from the right ventricle. TOF with pulmonary atresia is to be coded under \"Pulmonary atresia-VSD.\")}",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG-2010-851",
    "display" : "Single Ventricle + Total anomalous pulmonary venous connection (TAPVC)",
    "definition" : "Indicate if the patient has the diagnosis of \"Single Ventricle + Total anomalous pulmonary venous connection (TAPVC)\". In the event of Single Ventricle occurring in association with Total anomalous pulmonary venous connection (TAPVC), code \"Single Ventricle + Total anomalous pulmonary venous connection (TAPVC)\", and then use additional (secondary) diagnostic codes to describe the Single Ventricle and the Total anomalous pulmonary venous connection (TAPVC) separately to provide further documentation about the Single Ventricle and Total anomalous pulmonary venous connection (TAPVC) types. {\"Total anomalous pulmonary venous connection (TAPVC)\" is defined as a heart where all of the pulmonary veins connect anomalously with the right atrium or to one or more of its venous tributaries. None of the pulmonary veins connect normally to the left atrium.} {The version of the IPCCC derived from the International Congenital Heart Surgery Nomenclature and Database Project of the EACTS and STS uses the term \"single ventricle\" as synonymous for the \"functionally univentricular heart\". (The functionally univentricular heart is defined as a spectrum of cardiac malformations in which entire ventricular mass is functionally univentricular; in other words, whenever only one ventricle is capable, for whatever reason, of supporting either the systemic or the pulmonary circulation.) The consensus of the EACTS and STS Congenital Heart Surgery Database Committees is that the nomenclature proposal for single ventricle hearts would encompass hearts with double inlet atrioventricular connection (both double inlet left ventricle [DILV] and double inlet right ventricle [DIRV]), hearts with absence of one atrioventricular connection (mitral atresia and tricuspid atresia), hearts with a common atrioventricular valve and only one completely well-developed ventricle (unbalanced common atrioventricular canal defect), hearts with only one fully well-developed ventricle and heterotaxia syndrome (single ventricle heterotaxia syndrome), and finally other rare forms of univentricular hearts that do not fit in one of the specified major categories. In the version of the IPCCC derived from the nomenclature of the International Congenital Heart Surgery Nomenclature and Database Project of the EACTS and the STS, patients classified in this section of the nomenclature, therefore, include all those who would be coded using the Short List for \"Single Ventricle\", specifically: (1) Single ventricle; (2) Single ventricle, DILV; (3) Single ventricle, DIRV; (4) Single ventricle, Heterotaxia syndrome; (5) Single ventricle, Mitral atresia; (6) Single ventricle, Tricuspid atresia; (7) Single ventricle, Unbalanced AV canal. (Despite the recognition that hypoplastic left heart syndrome is a common form of functionally univentricular heart, with a single or dominant ventricle of right ventricular morphology, the EACTS-STS version of the IPCCC includes an entirely separate section for consideration of hypoplastic left heart syndrome. Also, it is recognized that a considerable variety of other structural cardiac malformations, such as pulmonary atresia with intact ventricular septum, biventricular hearts with straddling atrioventricular valves, and some complex forms of double outlet right ventricle (DORV), may at times be best managed in a fashion similar to that which is used to treat other functionally univentricular hearts. Nomenclature for description of those entities, however, is not included in this Single Ventricle section of the EACTS-STS version of the IPCCC.)} [1] [1]. Jacobs JP, Franklin RCG, Jacobs ML, Colan SD, Tchervenkov CI, Maruszewski B, Gaynor JW, Spray TL, Stellin G, Aiello VD, Béland MJ, Krogmann ON, Kurosawa H, Weinberg PM, Elliott MJ, Mavroudis C, Anderson R. Classification of the Functionally Univentricular Heart: Unity from mapped codes. In 2006 Supplement to Cardiology in the Young: Controversies and Challenges in the Management of the Functionally Univentricular Heart, Jacobs JP, Wernovsky G, Gaynor JW, and Anderson RH (editors). Cardiology in the Young, Volume 16, Supplement 1: 9 - 21, February 2006.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG001",
    "display" : "PFO",
    "definition" : "Small interatrial communication in the region of the foramen ovale characterized by no deficiency of the septum primum and a normal limbus with no deficiency of the septum secundum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG002",
    "display" : "ASD, Secundum",
    "definition" : "An ASD confined to the region of the fossa ovalis; its most common etiology is a deficiency of the septum primum, but deficieny of the limbus or septum secundum may also contribute.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG003",
    "display" : "ASD, Sinus venosus",
    "definition" : "Indicate if the patient has the diagnosis of \"ASD, Sinus venosus\". An \"ASD, Sinus venosus\" is defined as a defect with a vena cava or pulmonary vein (or veins) that overrides the atrial septum or the superior interatrial fold (septum secundum) producing an interatrial or anomalous venoatrial communication. Although the term sinus venosus atrial septal defect is commonly used, the lesion is more properly termed a sinus venosus communication because, while it functions as an interatrial communication, this lesion is not a defect of the true atrial septum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG004",
    "display" : "ASD, Coronary sinus",
    "definition" : "Deficiency of the wall (sinus septum) separating the left atrium from the coronary sinus, often allowing blood to shunt from the left atrium to the right atrium via the coronary sinus ostium. May or may not be associated with a persistent left superior vena cava.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG005",
    "display" : "ASD, Common atrium (single atrium)",
    "definition" : "Complete absence of the interatrial septum. \"Single atrium\" is applied to defects with no associated malformation of the atrioventricular valves. \"Common atrium\" is applied to defects with associated malformation of the atrioventricular valves.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG008",
    "display" : "VSD, Multiple",
    "definition" : "More than one VSD exists. Each individual VSD may be coded separately to specify the individual VSD types.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG010",
    "display" : "AVC (AVSD), Complete (CAVSD)",
    "definition" : "Indicate if the patient has the diagnosis of \"AVC (AVSD), Complete (CAVSD)\". An \"AVC (AVSD), Complete (CAVSD)\" is a \"complete atrioventricular canal\" or a \"complete atrioventricular septal defect\" and occurs in a heart with the phenotypic feature of a common atrioventricular junction. An \"AVC (AVSD), Complete (CAVSD)\" is defined as an AVC with a common AV valve and both a defect in the atrial septum just above the AV valve (ostium primum ASD [a usually crescent-shaped ASD in the inferior (posterior) portion of the atrial septum just above the AV valve]) and a defect in the ventricular septum just below the AV valve. The AV valve is one valve that bridges both the right and left sides of the heart. Balanced AVC is an AVC with two essentially appropriately sized ventricles. Unbalanced AVC is an AVC defect with two ventricles in which one ventricle is inappropriately small. Such a patient may be thought to be a candidate for biventricular repair, or, alternatively, may be managed as having a functionally univentricular heart. AVC lesions with unbalanced ventricles so severe as to preclude biventricular repair should be classified as single ventricles. Rastelli type A: The common superior (anterior) bridging leaflet is effectively split in two at the septum. The left superior (anterior) leaflet is entirely over the left ventricle and the right superior (anterior) leaflet is similarly entirely over the right ventricle. The division of the common superior (anterior) bridging leaflet into left and right components is caused by extensive attachment of the superior (anterior) bridging leaflet to the crest of the ventricular septum by chordae tendineae. Rastelli type B: Rare, involves anomalous papillary muscle attachment from the right side of the ventricular septum to the left side of the common superior (anterior) bridging leaflet. Rastelli type C: Marked bridging of the ventricular septum by the superior (anterior) bridging leaflet, which floats freely (often termed a \"free-floater\") over the ventricular septum without chordal attachment to the crest of the ventricular septum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG011",
    "display" : "AVC (AVSD), Intermediate (transitional)",
    "definition" : "An AVC with two distinct left and right AV valve orifices but also with both an ASD just above and a VSD just below the AV valves. While these AV valves in the intermediate form do form two separate orifices they remain abnormal valves. The VSD is often restrictive.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG012",
    "display" : "AVC (AVSD), Partial (incomplete) (PAVSD) (ASD, primum)",
    "definition" : "An AVC with an ostium primum ASD (a usually crescent-shaped ASD in the inferior (posterior) portion of the atrial septum just above the AV valve) and varying degrees of malformation of the left AV valve leading to varying degrees of left AV valve regurgitation. No VSD is present.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG014",
    "display" : "AP window (aortopulmonary window)",
    "definition" : "Indicate if the patient has the diagnosis of \"AP window (aortopulmonary window)\". An \"AP window (aortopulmonary window)\" is defined as a defect with side-to-side continuity of the lumens of the aorta and pulmonary arterial tree, which is distinguished from common arterial trunk (truncus arteriosus) by the presence of two arterial valves or their atretic remnants. (In other words, an aortopulmonary window is a communication between the main pulmonary artery and ascending aorta in the presence of two separate semilunar [pulmonary and aortic] valves. The presence of two separate semilunar valves distinguishes AP window from truncus arteriosus. Type 1 proximal defect: AP window located just above the sinus of Valsalva, a few millimeters above the semilunar valves, with a superior rim but little inferior rim separating the AP window from the semilunar valves. Type 2 distal defect: AP window located in the uppermost portion of the ascending aorta, with a well-formed inferior rim but little superior rim. Type 3 total defect: AP window involving the majority of the ascending aorta, with little superior and inferior rims. The intermediate type of AP window is similar to the total defect but with adequate superior and inferior rims. In the event of AP window occurring in association with interrupted aortic arch, code \"Interrupted aortic arch + AP window (aortopulmonary window)\", and then use additional (secondary) diagnostic codes to describe the interrupted aortic arch and AP window separately to provide further documentation about the individual interrupted arch and AP window types.)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG015",
    "display" : "Pulmonary artery origin from ascending aorta (hemitruncus)",
    "definition" : "One pulmonary artery arises from the ascending aorta and the other pulmonary artery arises from the right ventricle. DOES NOT include origin of the right or left pulmonary artery from the innominate artery or the aortic arch via a patent ductus arteriosus or collateral artery.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG016",
    "display" : "Truncus arteriosus",
    "definition" : "Indicate if the patient has the diagnosis of \"Truncus arteriosus\". A truncus arteriosus is also known as a common arterial trunk and is defined as a heart in which a single arterial trunk arises from the heart, giving origin to the coronary arteries, the pulmonary arteries, and the systemic arterial circulation. In the majority of instances there is a ventricular septal defect and a single semilunar valve which may contain two, three, four, or more leaflets and is occasionally dysplastic. Often, the infundibular septum is virtually absent superiorly. In most instances the truncal valve overrides the true interventricular septum (and thus both ventricles), but very rarely the truncal valve may override the right ventricle entirely. In such instances, there may be no ventricular septal defect or a very small ventricular septal defect, in which case the left ventricle and mitral valve may be extremely hypoplastic.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG017",
    "display" : "Partial anomalous pulmonary venous connection (PAPVC)",
    "definition" : "Some, but not all of the pulmonary veins connect to the right atrium or to one or more of its venous tributaries. This definition excludes sinus venosus defects with normally connected but abnormally draining pulmonary veins (the pulmonary veins may drain abnormally into the right atrium via the atrial septal defect).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG018",
    "display" : "Partial anomalous pulmonary venous connection (PAPVC), scimitar",
    "definition" : "The right pulmonary vein(s) connect anomalously to the inferior vena cava or to the right atrium at the insertion of the inferior vena cava. The descending vertical vein resembles a scimitar (Turkish sword) on frontal chest xray. Frequently associated with: hypoplasia of the right lung with bronchial anomalies; dextroposition and/or dextrorotation of the heart; hypoplasia of the right pulmonary artery; and anomalous subdiaphragmatic systemic arterial supply to the lower lobe of the right lung directly from the aorta or its main branches.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG019",
    "display" : "Total anomalous pulmonary venous connection (TAPVC), Type 1 (supracardiac)",
    "definition" : "All of the pulmonary veins connect anomalously with the right atrium or to one or more of its venous tributaries. None of the pulmonary veins connect normally to the left atrium. In Type 1 (supracardiac) TAPVC, the anomalous connection is at the supracardiac level and can be obstructed or nonobstructed.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG020",
    "display" : "Total anomalous pulmonary venous connection (TAPVC), Type 2 (cardiac)",
    "definition" : "All of the pulmonary veins connect anomalously with the right atrium or to one or more of its venous tributaries. None of the pulmonary veins connect normally to the left atrium. In Type 2 (cardiac) TAPVC, the anomalous connection is to the heart, either to the right atrium directly or to the coronary sinus. Most patients with type 2 TAPVC are nonobstructed.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG021",
    "display" : "Total anomalous pulmonary venous connection (TAPVC), Type 3 (infracardiac)",
    "definition" : "All of the pulmonary veins connect anomalously with the right atrium or to one or more of its venous tributaries. None of the pulmonary veins connect normally to the left atrium. In Type 3 (infracardiac) TAPVC, the anomalous connection is at the infracardiac level (below the diaphragm), with the pulmonary venous return entering the right atrium ultimately via the inferior vena cava. In the vast majority of patients infracardiac TAPVC is obstructed.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG022",
    "display" : "Total anomalous pulmonary venous connection (TAPVC), Type 4 (mixed)",
    "definition" : "All of the pulmonary veins connect anomalously with the right atrium or to one or more of its venous tributaries. None of the pulmonary veins connect normally to the left atrium. In Type 4 (mixed) TAPVC, the anomalous connection is at two or more of the above levels (supracardiac, cardiac, infracardiac) and can be obstructed or nonobstructed.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG024",
    "display" : "Cor triatriatum",
    "definition" : "In the classic form of cor triatriatum a membrane divides the left atrium (LA) into a posterior accessory chamber that receives the pulmonary veins and an anterior chamber (LA) that communicates with the mitral valve. In differentiating cor triatriatum from supravalvar mitral ring, in cor triatriatum the posterior compartment contains the pulmonary veins while the anterior contains the left atrial appendage and the mitral valve orifice; in supravalvar mitral ring, the anterior compartment contains only the mitral valve orifice. Cor triatriatum dexter (prominent venous valve producing obstruction of the IVC and tricuspid valve) is to be coded as a systemic venous obstruction, not as a form of cor triatriatum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Cor Triatriatum"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG025",
    "display" : "Pulmonary venous stenosis",
    "definition" : "Any pathologic narrowing of one or more pulmonary veins. Can be further subdivided by etiology (congenital, acquired-postoperative, acquirednonpostoperative) and extent of stenosis (diffusely hypoplastic, long segment focal/tubular stenosis, discrete stenosis).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Stenosis"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG026",
    "display" : "Systemic venous anomaly",
    "definition" : "Anomalies of the systemic venous system (superior vena cava (SVC), inferior vena cava (IVC), brachiocephalic veins (often the innominate vein), azygos vein, coronary sinus, levo-atrial cardinal vein) arising from one or more anomalies of origin, duplication, course, or connection. Examples include abnormal or absent right SVC with LSVC, bilateral SVC, interrupted right or left IVC, azygos continuation of IVC, and anomalies of hepatic drainage. Bilateral SVC may have, among other configurations: 1) RSVC draining to the RA and the LSVC to the LA with completely unroofed coronary sinus, 2) RSVC draining to the RA and LSVC to the coronary sinus which drains (normally) into the RA, or 3) RSVC to the coronary sinus which drains (abnormally) into the LA and LSVC to LA. Anomalies of the inferior vena caval system include, among others: 1) left IVC to LA, 2) biatrial drainage, or 3) interrupted IVC (left or right) with azygos continuation to an LSVC or RSVC.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Systemic Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG027",
    "display" : "Systemic venous obstruction",
    "definition" : "Obstruction of the systemic venous system (superior vena cava (SVC), inferior vena cava (IVC), brachiocephalic veins (often the innominate vein), azygos vein, coronary sinus, levo-atrial cardinal vein) arising from congenital or acquired stenosis or occlusion. Cor triatriatum dexter (prominent venous valve producing obstruction of the IVC and tricuspid valve) is to be coded as a systemic venous obstruction, not as a form of cor triatriatum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Systemic Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG028",
    "display" : "TOF",
    "definition" : "Indicate if the patient has the diagnosis of \"TOF\". Only use this diagnosis if it is NOT known if the patient has one of the following four more specific diagnoses: (1). \" TOF, Pulmonary stenosis\", (2). \"TOF, AVC (AVSD)\", (3). \"TOF, Absent pulmonary valve\", (4). \"Pulmonary atresia, VSD (Including TOF, PA)\", or (5). \"Pulmonary atresia, VSD-MAPCA (pseudotruncus)\".{\"TOF\" is \" Tetralogy of Fallot\" and is defined as a group of malformations with biventricular atrioventricular alignments or connections characterized by anterosuperior deviation of the conal or outlet septum or its fibrous remnant, narrowing or atresia of the pulmonary outflow, a ventricular septal defect of the malalignment type, and biventricular origin of the aorta. Hearts with tetralogy of Fallot will always have a ventricular septal defect, narrowing or atresia of the pulmonary outflow, and aortic override; hearts with tetralogy of Fallot will most often have right ventricular hypertrophy.} (An additional, often muscular [Type 4] VSD may be seen with TOF and should be coded separately as a secondary diagnosis as \"VSD, Type 4 (Muscular)\". Pulmonary arteries may be diminutive or there may be an absent left or right pulmonary artery; additional coding for pulmonary artery and/or branch pulmonary artery stenoses may be found under RVOT obstruction. Abnormal coronary artery distribution may also be associated with tetralogy of Fallot and may be coded separately under coronary artery anomalies. The presence of associated anomalies such as additional VSD, atrial septal defect, right aortic arch, left superior vena cava, and coronary artery anomalies must be subspecified as an additional or secondary diagnosis under the primary TOF diagnosis. TOF with absent pulmonary valve or TOF with associated complete atrioventricular canal are NOT to be secondary diagnoses under TOF - they are separate entities and should be coded as such. Controversy surrounds the differentiation between TOF and double outlet right ventricle [DORV]; in the nomenclature used here, DORV is defined as a type of ventriculoarterial connection in which both great vessels arise predominantly from the right ventricle. TOF with pulmonary atresia is to be coded under \"Pulmonary atresia-VSD.\")",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG029",
    "display" : "TOF, AVC (AVSD)",
    "definition" : "TOF with complete common atrioventricular canal defect is a rare variant of common atrioventricular canal defect with the associated conotruncal abnormality of TOF. The anatomy of the endocardial cushion defect is that of Rastelli type C in almost all cases.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG030",
    "display" : "TOF, Absent pulmonary valve",
    "definition" : "Indicate if the patient has the diagnosis of \"TOF, Absent pulmonary valve\". \"TOF, Absent pulmonary valve\" is \" Tetralogy of Fallot with Absent pulmonary valve\" and is defined as a malformation with all of the morphologic characteristics of tetralogy of Fallot (anterosuperior deviation of the conal or outlet septum or its fibrous remnant, narrowing of the pulmonary outflow, a ventricular septal defect of the malalignment type, and biventricular origin of the aorta), in which the ventriculo-arterial junction of the right ventricle with the main pulmonary artery features an atypical valve with rudimentary cusps that lack the anatomical semi-lunar features of normal valve cusps and which functionally do not achieve central coaptation. The physiologic consequence is usually a combination of variable degrees of both stenosis and regurgitation of the pulmonary valve. A developmental accompaniment of this anatomy and physiology is dilatation of the main pulmonary artery and central right and left pulmonary arteries, which when extreme, is associated with abnormal arborization of lobar and segmental pulmonary artery branches and with compression of the trachea and mainstem bronchi. One theory holds that absence of the arterial duct or ductal ligament (which is a nearly constant finding in cases of tetralogy of Fallot with absent pulmonary valve) in combination with pulmonary `valve stenosis and regurgitation, comprise the physiologic conditions which predispose to central pulmonary artery dilatation during fetal development. (Tetralogy of Fallot with Absent Pulmonary Valve Syndrome is a term frequently used to describe the clinical presentation when it features both circulatory alterations and respiratory distress secondary to airway compression.)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG031",
    "display" : "Pulmonary atresia",
    "definition" : "Pulmonary atresia defects which do not readily fall into pulmonary atresia-intact ventricular septum or pulmonary atresia-VSD (with or without MAPCAs) categories. These may include complex lesions in which pulmonary atresia is a secondary diagnosis, for example, complex single ventricle malformations with associated pulmonary atresia.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG032",
    "display" : "Pulmonary atresia, IVS",
    "definition" : "Pulmonary atresia (PA) and intact ventricular septum (IVS) is a duct-dependent congenital malformation that forms a spectrum of lesions including atresia of the pulmonary valve, a varying degree of right ventricle and tricuspid valve hypoplasia, and anomalies of the coronary circulation. An RV dependent coronary artery circulation is present when coronary artery fistulas (coronary sinusoids) are associated with a proximal coronary artery stenosis. Associated Ebstein's anomaly of the tricuspid valve can be present; the tricuspid diameter is enlarged and the prognosis is poor.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG033",
    "display" : "Pulmonary atresia, VSD (Including TOF, PA)",
    "definition" : "Pulmonary atresia (PA) and ventricular septal defect (VSD) is a heterogeneous group of congenital cardiac malformations in which there is lack of luminal continuity and absence of blood flow from either ventricle (in cases with ventriculo-arterial discordance) and the pulmonary artery, in a biventricular heart that has an opening or a hole in the interventricular septum (VSD). The malformation forms a spectrum of lesions including tetralogy of Fallot with pulmonary atresia. Tetralogy of Fallot with PA is a specific type of PAVSD where the intracardiac malformation is more accurately defined (extreme underdevelopment of the RV infundibulum with marked anterior and leftward displacement of the infundibular septum often fused with the anterior wall of the RV resulting in complete obstruction of blood flow into the pulmonary artery and associated with a large outlet, subaortic ventricular septal defect). In the vast majority of cases of PA-VSD the intracardiac anatomy is that of TOF. The pulmonary circulation in PA-VSD is variable in terms of origin of blood flow, presence or absence of native pulmonary arteries, presence or absence of major aortopulmonary collateral arteries (MAPCA(s)), and distal distribution (pulmonary parenchymal segment arborization) abnormalities. Native pulmonary arteries may be present or absent. If MAPCAs are present this code should not be used; instead, Pulmonary atresia, VSDMAPCA (pseudotruncus) should be used.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG034",
    "display" : "Pulmonary atresia, VSD-MAPCA (pseudotruncus)",
    "definition" : "MAPCA(s) are large and distinct arteries, highly variable in number, that usually arise from the descending thoracic aorta, but uncommonly may originate from the aortic arch or the subclavian, carotid or even the coronary arteries. MAPCA(s) may be associated with present or absent native pulmonary arteries. If present, the native pulmonary arteries may be hypoplastic, and either confluent or nonconfluent. Systemic pulmonary collateral arteries have been categorized into 3 types based on their site of origin and the way they connect to the pulmonary circulation: direct aortopulmonary collaterals, indirect aortopulmonary collaterals, and true bronchial arteries. Only the first two should be considered MAPCA(s). If MAPCA(s) are associated with PA-VSD or TOF, PA this code should be used.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG035",
    "display" : "MAPCA(s) (major aortopulmonary collateral[s]) (without PA-VSD)",
    "definition" : "Rarely MAPCA(s) may occur in patents who do not have PA-VSD, but have severe pulmonary stenosis. The intracardiac anatomy in patients who have MAPCA(s) without PA should be specifically coded in each case as well.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG036",
    "display" : "Ebstein's anomaly",
    "definition" : "Indicate if the patient has the diagnosis of \"Ebstein's anomaly\". Ebstein's anomaly is a malformation of the tricuspid valve and right ventricle that is characterized by a spectrum of several features: (1) incomplete delamination of tricuspid valve leaflets from the myocardium of the right ventricle; (2) downward (apical) displacement of the functional annulus; (3) dilation of the \"atrialized\" portion of the right ventricle with variable degrees of hypertrophy and thinning of the wall; (4) redundancy, fenestrations, and tethering of the anterior leaflets; and (5) dilation of the right atrioventricular junction (the true tricuspid annulus). These anatomical and functional abnormalities cause tricuspid regurgitation (and rarely tricuspid stenosis) that results in right atrial and right ventricular dilatation and atrial and ventricular arrhythmias. With increasing degrees of anatomic severity of malformation, the fibrous transformation of leaflets from their muscular precursors remains incomplete, with the septal leaflet being most severely involved, the posterior leaflet less severely involved, and the anterior leaflet usually the least severely involved. Associated cardiac anomalies include an interatrial communication, the presence of accessory conduction pathways often associated with Wolff-Parkinson-White syndrome, and dilation of the right atrium and right ventricle in patients with severe Ebstein's anomaly. (Varying degrees of right ventricular outflow tract obstruction may be present, including pulmonary atresia in some cases. Such cases of Ebstein's anomaly with pulmonary atresia should be coded with a Primary Diagnosis of \"Ebstein's anomaly\", and a Secondary Diagnosis of \"Pulmonary atresia\".) (Some patients with atrioventricular discordance and ventriculoarterial discordance in situs solitus [congenitally corrected transposition] have an Ebsteinlike deformity of the left-sided morphologically tricuspid valve. The nature of the displacement of the septal and posterior leaflets is similar to that in rightsided Ebstein's anomaly in patients with atrioventricular concordance and ventriculoarterial concordance in situs solitus. These patients with \"Congenitally corrected TGA\" and an Ebstein-like deformity of the left-sided morphologically tricuspid valve should be coded with a Primary Diagnosis of \"Congenitally corrected TGA\", and a Secondary Diagnosis of \"Ebstein's anomaly\".)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG037",
    "display" : "Tricuspid regurgitation, non-Ebstein's related",
    "definition" : "Non-Ebstein's tricuspid regurgitation may be due to congenital factors (primary annular dilation, prolapse, leaflet underdevelopment, absent papillary muscle/chordae) or acquired (post cardiac surgery or secondary to rheumatic fever, endocarditis, trauma, tumor, cardiomyopathy, iatrogenic or other causes).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG038",
    "display" : "Tricuspid stenosis",
    "definition" : "Tricuspid stenosis may be due to congenital factors (valvular hypoplasia, abnormal subvalvar apparatus, double-orifice valve, parachute deformity) or acquired (post cardiac surgery or secondary to carcinoid, rheumatic fever, tumor, systemic disease, iatrogenic, or other causes).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG039",
    "display" : "Tricuspid regurgitation and tricuspid stenosis",
    "definition" : "Tricuspid regurgitation present with tricuspid stenosis may be due to congenital factors or acquired.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG040",
    "display" : "Tricuspid valve, Other",
    "definition" : "Tricuspid valve pathology not otherwise specified in diagnosis definitions 370, 380, 390 and 400.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG041",
    "display" : "Pulmonary stenosis, Valvar",
    "definition" : "Pulmonary stenosis, Valvar ranges from critical neonatal pulmonic valve stenosis with hypoplasia of the right ventricle to valvar pulmonary stenosis in the infant, child, or adult, usually better tolerated but potentially associated with infundibular stenosis. Pulmonary branch hypoplasia can be associated. Only 10% of neonates with Pulmonary stenosis, Valvar with intact ventricular septum have RV-to-coronary artery fistula(s). An RV dependent coronary artery circulation is present when coronary artery fistulas (coronary sinusoids) are associated with a proximal coronary artery stenosis; this occurs in only 2% of neonates with Pulmonary stenosis, Valvar with IVS.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG042",
    "display" : "Pulmonary artery stenosis (hypoplasia), Main (trunk)",
    "definition" : "Indicate if the patient has the diagnosis of \"Pulmonary artery stenosis (hypoplasia), Main (trunk)\". \"Pulmonary artery stenosis (hypoplasia), Main (trunk)\" is defined as a congenital or acquired anomaly with pulmonary trunk (main pulmonary artery) narrowing or hypoplasia. The stenosis or hypoplasia may be isolated or associated with other cardiac lesions. Since the narrowing is distal to the pulmonic valve, it may also be known as supravalvar pulmonary stenosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG043",
    "display" : "Pulmonary artery stenosis, Branch, Central (within the hilar bifurcation)",
    "definition" : "Indicate if the patient has the diagnosis of \"Pulmonary artery stenosis, Branch, Central (within the hilar bifurcation)\". \"Pulmonary artery stenosis, Branch, Central (within the hilar bifurcation)\" is defined as a congenital or acquired anomaly with central pulmonary artery branch (within the hilar bifurcation involving the right or left pulmonary artery, or both) narrowing or hypoplasia. The stenosis or hypoplasia may be isolated or associated with other cardiac lesions. Coarctation of the pulmonary artery is related to abnormal extension of the ductus arteriosus into a pulmonary branch, more frequently the left branch.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG044",
    "display" : "Pulmonary artery stenosis, Branch, Peripheral (at or beyond the hilar bifurcation)",
    "definition" : "Indicate if the patient has the diagnosis of \"Pulmonary artery stenosis, Branch, Peripheral (at or beyond the hilar bifurcation)\". \"Pulmonary artery stenosis, Branch, Peripheral (at or beyond the hilar bifurcation)\" is defined as a congenital or acquired anomaly with peripheral pulmonary artery narrowing or hypoplasia (at or beyond the hilar bifurcation). The stenosis or hypoplasia may be isolated or associated with other cardiac lesions.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG046",
    "display" : "DCRV",
    "definition" : "The double chambered right ventricle is characterized by a low infundibular (subvalvar) stenosis rather than the rare isolated infundibular stenosis that develops more superiorly in the infundibulum, and is often associated with one or several closing VSDs. In some cases, the VSD is already closed. The stenosis creates two chambers in the RV, one inferior including the inlet and trabecular portions of the RV and one superior including the infundibulum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG047",
    "display" : "Pulmonary valve, Other",
    "definition" : "Other anomalies of the pulmonary valve may be listed here including but not restricted to absent pulmonary valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG048",
    "display" : "Conduit failure",
    "definition" : "Indicate if the patient has the diagnosis of \"Conduit failure\". This diagnostic subgroup includes failure of any of a variety of conduits (ventricular [right or left]-to- PA conduits, as well as a variety of other types of conduits [ventricular {right or left}-to-aorta, RA-to-RV, etc.]), secondary to any of the following etiologies: conduit outgrowth, obstruction, stenosis, insufficiency, or insufficiency and stenosis. This diagnosis (\"Conduit failure\") would be the primary diagnosis in a patient with, for example, \"Truncus arteriosus\" repaired in infancy who years later is hospitalized because of conduit stenosis/insufficiency. The underlying or fundamental diagnosis in this patient is \"Truncus arteriosus\", but the primary diagnosis for the operation to be performed during the hospitalization (in this case, \" Conduit reoperation\") would be \"Conduit failure\". Please note that the choice \"520 Conduit failure\" does not include \"2130 Shunt failure\".",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Conduit failure"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG049",
    "display" : "Pulmonary insufficiency",
    "definition" : "Pulmonary valve insufficiency or regurgitation may be due to congenital factors (primary annular dilation, prolapse, leaflet underdevelopment, etc.) or acquired (for example, post cardiac surgery for repair of tetralogy of Fallot, etc.).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG050",
    "display" : "Pulmonary insufficiency and pulmonary stenosis",
    "definition" : "Pulmonary valve insufficiency and pulmonary stenosis beyond the neonatal period, in infancy and childhood, may be secondary to leaflet tissue that has become thickened and myxomatous. Retraction of the commissure attachment frequently creates an associated supravalvar stenosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG051",
    "display" : "Aortic stenosis, Subvalvar",
    "definition" : "Subaortic obstruction can be caused by different lesions: subaortic membrane or tunnel, accessory mitral valve tissue, abnormal insertion of the mitral anterior leaflet to the ventricular septum, deviation of the outlet septum (seen in coarctation of the aorta and interrupted aortic arch), or a restrictive bulboventricular foramen in single ventricle complexes. The Shone complex consists of subvalvar aortic stenosis in association with supravalvar mitral ring, parachute mitral valve, and coarctation of aorta. Subvalvar aortic stenosis may be categorized into two types: localized subvalvar aortic stenosis, which consists of a fibrous or fibromuscular ridge, and diffuse tunnel subvalvar aortic stenosis, in which circumferential narrowing commences at the annular level and extends downward for 1-3 cm. Idiopathic hypertrophic subaortic stenosis (IHSS) is also know as hypertrophic obstructive cardiomyopathy (HOCM), and is characterized by a primary hypertrophy of the myocardium. The obstructive forms involve different degrees of dynamic subvalvar aortic obstruction from a thickened ventricular wall and anterior motion of the mitral valve. Definitive nomenclature and therapeutic options for IHSS are listed under cardiomyopathy.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG052",
    "display" : "Aortic stenosis, Valvar",
    "definition" : "Valvar aortic stenosis may be congenital or acquired. In its congenital form there are two types: critical (infantile), seen in the newborn in whom systemic perfusion depends on a patent ductus arteriosus, and noncritical, seen in infancy or later. Acquired valvar stenosis may be seen after as a result of rheumatic valvar disease, or from stenotic changes of an aortic valve prosthesis. Congenital valvar stenosis may result: (1) from complete fusion of commissures (acommissural) that results in a dome-shaped valve with a pinpoint opening (seen most commonly in infants with critical aortic valve stenosis); (2) from a unicommissural valve with one defined commissure and eccentric orifice (often with two raphes radiating from the ostium indicating underdeveloped commissures of a tricuspid aortic valve); (3) from a bicuspid aortic valve, with leaflets that can be equal in size or discrepant, and in left-right or anterior-posterior position; and finally (4) from a dysplastic tricuspid valve, which may have a gelatinous appearance with thick rarely equal in size leaflets, often obscuring the commissures. The dysplastic, tricuspid or bicuspid form of aortic valve deformity may not be initially obstructive but may become stenotic later in life due to leaflet thickening and calcification.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG053",
    "display" : "Aortic stenosis, Supravalvar",
    "definition" : "Congenital supravalvar aortic stenosis is described as three forms: an hourglass deformity, a fibrous membrane, and a diffuse narrowing of the ascending aorta. The disease can be inherited as an autosomal dominant trait or part of Williams-Beuren syndrome in association with mental retardation, elfin facies, failure to thrive, and occasionally infantile hypercalcemia. Supravalvar aortic stenosis may involve the coronary artery ostia, and the aortic leaflets may be tethered. The coronary arteries can become tortuous and dilated due to elevated pressures and early atherosclerosis may ensue. Supravalvar aortic stenosis may also be acquired: (1) after a neoaortic reconstruction such as arterial switch, Ross operation, or Norwood procedure; (2) at a suture line from a previous aortotomy or cannulation; and (3) from a narrowed conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG055",
    "display" : "Aortic valve atresia",
    "definition" : "Aortic valve atresia will most often be coded under the Hypoplastic left heart syndrome/complex diagnostic codes since it most often occurs as part of a spectrum of cardiac malformations. However, there is a small subset of patients with aortic valve atresia who have a welldeveloped left ventricle and mitral valve and a large VSD (nonrestrictive or restrictive). The diagnostic code \"Aortic valve atresia\" enables users to report those patients with aortic valve atresia and a well-developed systemic ventricle without recourse to either a hypoplastic left heart syndrome/complex diagnosis or a single ventricle diagnosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG056",
    "display" : "Aortic insufficiency",
    "definition" : "Congenital aortic regurgitation/insufficiency is rare as an isolated entity. There are rare reports of congenital malformation of the aortic valve that result in aortic insufficiency shortly after birth from an absent or underdeveloped aortic valve cusp. Aortic insufficiency is more commonly seen with other associated cardiac anomalies: (1) in stenotic aortic valves (commonly stenotic congenital bicuspid aortic valves) with some degree of aortic regurgitation due to aortic leaflet abnormality; (2) in association with a VSD (especially in supracristal or conal type I VSD, more commonly seen in Asian populations); (3) secondary to aortic-left ventricular tunnel; (4) secondary to tethering or retraction of aortic valve leaflets in cases of supravalvar aortic stenosis that may involve the aortic valve; and similarly (5) secondary to encroachment on an aortic cusp by a subaortic membrane; or (6) turbulence caused by a stenotic jet can create progressive aortic regurgitation. Aortic insufficiency may also result from: (1) post-procedure such as closed or open valvotomy or aortic valve repair, VSD closure, balloon valvotomy, or diagnostic catheterization; (2) in the neo-aorta post arterial switch, pulmonary autograft (Ross) procedure, homograft placement, Norwood procedure, or Damus-Kaye-Stansel procedure; (3) as a result of endocarditis secondary to perforated or prolapsed leaflets or annular dehiscence; (4) secondary to annulo-aortic ectasia with prolapsed or noncoapting leaflets; (5) secondary to trauma, blunt or penetrating; or (6) as a result of aortitis, bacterial, viral or autoimmune. Aortic regurgitation secondary to prosthetic failure should be coded first as either conduit failure or prosthetic valve failure, as applicable, and secondarily as aortic regurgitation secondary to prosthetic failure (perivalvar or due to structural failure). The underlying fundamental diagnosis that led to the initial conduit or valve prosthesis placement should also be described.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG057",
    "display" : "Aortic insufficiency and aortic stenosis",
    "definition" : "Aortic insufficiency is often seen in association with stenotic aortic valve, commonly the stenotic congenital bicuspid aortic valve. The degree of aortic regurgitation is due to the severity of the aortic leaflet abnormality.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG058",
    "display" : "Aortic valve, Other",
    "definition" : "This diagnostic subgroup may be used to delineate aortic valve cusp number (unicuspid, bicuspid, tricuspid, more than three cusps), commissural fusion (nromal, partially fused, completely fused), and valve leaflet (normal, thickened, dysplastic, calcified, gelatinous), annulus (normal, hypoplastic, calcified), or sinus description (normal, dilated). Note that any extensive descriptors chosen within those made available by a vendor will be converted, at harvest, to Aortic valve, Other.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG059",
    "display" : "Sinus of Valsalva aneurysm",
    "definition" : "The sinus of Valsalva is defined as that portion of the aortic root between the aortic root annulus and the sinotubular ridge. A congenital sinus of Valsalva aneurysm is a dilation usually of a single sinus of Valsalva. These most commonly originate from the right sinus (65%-85%), less commonly from the noncoronary sinus (10%-30%), and rarely from the left sinus (<5%). A true sinus of Valsalva aneurysm presents above the aortic annulus. The hierarchical coding system distinguishes between congenital versus acquired, ruptured versus nonruptured, sinus of origin, and chamber/site of penetration (right atrium, right ventricle, left atrium, left ventricle, pulmonary artery, pericardium). A nonruptured congenital sinus of Valsalva aneurysm may vary from a mild dilation of a single aortic sinus to an extensive windsock deformity. Rupture of a congenital sinus of Valsalva aneurysm into an adjacent chamber occurs most commonly between the ages of 15-30 years. Rupture may occur spontaneously, after trauma, after strenuous physical exertion, or from acute bacterial endocarditis. Congenital etiology is supported by the frequent association of sinus of Valsalva aneurysms with VSDs. Other disease processes are also associated with sinus of Valsalva aneurysm and include: syphilis, endocarditis, cystic medial necrosis, atherosclerosis, and trauma. Acquired sinus of Valsalva aneurysms more frequently involve multiple sinuses of Valsalva; when present in multiple form they are more appropriately classified as aneurysms of the aortic root.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG060",
    "display" : "LV to aorta tunnel",
    "definition" : "The aortico-left ventricular tunnel (LV-to-aorta tunnel) is an abnormal paravalvular (alongside or in the vicinity of a valve) communication between the aorta and left ventricle, commonly divided into 4 types: (1) type I, a simple tunnel with a slit-like opening at the aortic end and no aortic valve distortion; (2) type II, a large extracardiac aortic wall aneurysm of the tunnel with an oval opening at the aortic end, with or without ventricular distortion; (3) type III, intracardiac aneurysm of the septal portion of the tunnel, with or without right ventricular outflow obstruction; and (4) type IV, a combination of types II and III. Further differentiation within these types may be notation of right coronary artery arising from the wall of the tunnel. If a LV-toaorta tunnel communicates with the right ventricle, many feel that the defect is really a ruptured sinus of Valsalva aneurysm.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG061",
    "display" : "Mitral stenosis, Supravalvar mitral ring",
    "definition" : "Supravalvar mitral ring is formed by a circumferential ridge of tissue that is attached to the anterior mitral valve leaflet (also known as the aortic leaflet) slightly below its insertion on the annulus and to the atrium slightly above the attachment of the posterior mitral valve leaflet (also known as the mural leaflet). Depending on the diameter of the ring orifice, varying degrees of obstruction exist. The underlying valve is usually abnormal and frequently stenotic or hypoplastic. Supravalvar mitral ring is commonly associated with other stenotic lesions such as parachute or hammock valve (subvalvar stenosis), papillary muscle fusion (subvalvar stenosis), and double orifice mitral valve (valvar stenosis). Differentiation from cor triatriatum focuses on the compartments created by the supravalvar ring. In cor triatriatum the posterior compartment contains the pulmonary veins; the anterior contains the left atrial appendage and the mitral valve orifice. In supravalvar mitral ring, the posterior compartment contains the pulmonary veins and the left atrial appendage; the anterior compartment contains only the mitral valve orifice. When coding multiple mitral valvar lesions the predominant defect causing the functional effect (regurgitation, stenosis, or regurgitation and stenosis) should be listed as the primary defect.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG062",
    "display" : "Mitral stenosis, Valvar",
    "definition" : "Valvar mitral stenosis may arise from congenital (annular and / or leaflet) or acquired causes, both surgical (after mitral valve repair or replacement or other cardiac surgery) and non-surgical (post rheumatic heart disease, infective endocarditis, ischemia, myxomatomous degeneration, trauma, or cardiomyopathy). Mitral valve annular hypoplasia is distinguished from severe mitral valve hypoplasia and mitral valve atresia, which are typically components of hypoplastic left heart syndrome. When coding multiple mitral valvar lesions the predominant defect causing the functional effect (regurgitation, stenosis, or regurgitation and stenosis) should be listed as the primary defect.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG063",
    "display" : "Mitral stenosis, Subvalvar",
    "definition" : "Congenital subvalvar mitral stenosis may be due to obstructive pathology of either the chordae tendineae and / or papillary muscles which support the valve leaflets. When coding multiple mitral valvar lesions the predominant defect causing the functional effect (regurgitation, stenosis, or regurgitation and stenosis) should be listed as the primary defect.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG064",
    "display" : "Mitral stenosis, Subvalvar, Parachute",
    "definition" : "In parachute mitral valve, all chordae are attached to a single papillary muscle originating from the posterior ventricular wall. When the interchordal spaces are partially obliterated valvar stenosis results. This defect also causes valvar insufficiency, most commonly due to a cleft leaflet, a poorly developed anterior leaflet, short chordae, or annular dilatation. This lesion is also part of Shone's anomaly, which consists of the parachute mitral valve, supravalvar mitral ring, subaortic stenosis, and coarctation of the aorta. When coding multiple mitral valvar lesions the predominant defect causing the functional effect (regurgitation, stenosis, or regurgitation and stenosis) should be listed as the primary defect.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG066",
    "display" : "Mitral regurgitation and mitral stenosis",
    "definition" : "Mitral regurgitation and mitral stenosis may arise from congenital or acquired causes or after cardiac surgery. Additional details to aid in coding specific components of the diagnosis are available in the individual mitral stenosis or mitral regurgitation field definitions. When coding multiple mitral valve lesions the predominant defect causing the functional effect (regurgitation, stenosis, or regurgitation and stenosis) should be listed as the primary defect.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG067",
    "display" : "Mitral regurgitation",
    "definition" : "Mitral regurgitation may arise from congenital (at the annular, leaflet or subvalvar level) or acquired causes both surgical (after mitral valve repair or replacement, subaortic stenosis repair, atrioventricular canal repair, cardiac transplantation, or other cardiac surgery) and non-surgical (post rheumatic heart disease, infective endocarditis, ischemia (with chordal rupture or papillary muscle infarct), myxomatomous degeneration including Barlow's syndrome, trauma, or cardiomyopathy). Congenital lesions at the annular level include annular dilatation or deformation (usually deformation is consequent to associated lesions). At the valve leaflet level, mitral regurgitation may be due to a cleft, hypoplasia or agenesis of leaflet(s), excessive leaflet tissue, or a double orifice valve. At the subvalvar level, mitral regurgitation may be secondary to chordae tendineae anomalies (agenesis, rupture, elongation, or shortening as in funnel valve), or to papillary muscle anomalies (hypoplasia or agenesis, shortening, elongation, single-parachute, or multiple-hammock valve). When coding multiple mitral valvar lesions the predominant defect causing the functional effect (regurgitation, stenosis, or regurgitation and stenosis) should be listed as the primary defect.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG068",
    "display" : "Mitral valve, Other",
    "definition" : "Mitral valve pathology not otherwise coded in diagnosis definitions 650 through 710.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG069",
    "display" : "Hypoplastic left heart syndrome (HLHS)",
    "definition" : "Hypoplastic left heart syndrome (HLHS) is a spectrum of cardiac malformations characterized by a severe underdevelopment of the left heart-aorta complex, consisting of aortic and/or mitral valve atresia, stenosis, or hypoplasia with marked hypoplasia or absence of the left ventricle, and hypoplasia of the ascending aorta and of the aortic arch with coarctation of the aorta. Hypoplastic left heart complex is a subset of patients at the favorable end of the spectrum of HLHS characterized by hypoplasia of the structures of the left heart-aorta complex, consisting of aortic and mitral valve hypoplasia without valve stenosis or atresia, hypoplasia of the left ventricle, hypoplasia of the left ventricular outflow tract, hypoplasia of the ascending aorta and of the aortic arch, with or without coarctation of the aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG070",
    "display" : "Cardiomyopathy (including dilated, restrictive, and hypertrophic)",
    "definition" : "Cardiomyopathy is a term applied to a wide spectrum of cardiac diseases in which the predominant feature is poor myocardial function in the absence of any anatomic abnormalities. Cardiomyopathies can be dividied into three relatively easily distinguishable entities: (1) dilated, characterized by ventricular dilatation and systolic dysfunction; (2) hypertrophic, characterized by physiologically inappropriate hypertrophy of the left ventricle; and (3) restrictive, characterized by diastolic dysfunction, with a presentation often identical to constrictive pericarditis. Also included in this diagnostic category are patients with a cardiomyopathy or syndrome confined to the right ventricle, for example: (1) arrhythmogenic right ventricular dysplasia; (2) Uhl's syndrome (hypoplasia of right ventricular myocardium, parchment heart); or (3) spongiform cardiomyopathy.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Cardiomyopathy"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG071",
    "display" : "Pericardial effusion",
    "definition" : "Inflammatory stimulation of the pericardium that results in the accumulation of appreciable amounts of pericardial fluid (also known as effusive pericarditis). The effusion may be idiopathic or acquired (e.g., postoperative, infectious, uremic, neoplastic, traumatic, drug-induced).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pericardial Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG072",
    "display" : "Pericarditis",
    "definition" : "Inflammatory process of the pericardium that leads to either (1) effusive pericarditis with accumulation of appreciable amounts of pericardial fluid or (2) constrictive pericarditis that leads to pericardial thickening and compression of the cardiac chambers, ultimately with an associated significant reduction in cardiac function. Etiologies are varied and include idiopathic or acquired (e.g., postoperative, infectious, uremic, neoplastic, traumatic, drug-induced) pericarditis.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pericardial Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG073",
    "display" : "Pericardial disease, Other",
    "definition" : "A structural or functional abnormality of the visceral or parietal pericardium that may, or may not, have a significant impact on cardiac function. Included are absence or partial defects of the pericardium.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pericardial Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG074",
    "display" : "Single ventricle, DILV",
    "definition" : "Single morphologically left ventricle (smooth internal walls, lack chordal attachments of AV valves to the rudimentary septal surface) that receives both atrioventricular valves.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG075",
    "display" : "Single ventricle, DIRV",
    "definition" : "Single morphologically right ventricle (more heavily trabeculated, generally have chordal attachments of AV valve to the septal surfaces) that receives both atrioventricular valves.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG076",
    "display" : "Single ventricle, Mitral atresia",
    "definition" : "Single ventricle anomalies with mitral atresia. May also be associated with double outlet right ventricle, congenitally corrected transposition, pulmonary atresia, or pulmonary stenosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG077",
    "display" : "Single ventricle, Tricuspid atresia",
    "definition" : "Single ventricle anomalies with tricuspid atresia. May also be associated with complete transposition of the great arteries, congenitally corrected transposition of the great arteries, pulmonary atresia, pulmonary stenosis, subaortic stenosis, or ventricular septal defect (small or large).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG078",
    "display" : "Single ventricle, Unbalanced AV canal",
    "definition" : "Single ventricle anomalies with a common atrioventricular (AV) valve and only one completely well developed ventricle. If the common AV valve opens predominantly into the morphologic left ventricle, the defect is termed a left ventricular (LV)-type or LVdominant AV septal defect. If the common AV valve opens predominantly into the morphologic right ventricle, the defect is termed a right ventricular (RV)- type or RV-dominant AV septal defect.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG079",
    "display" : "Single ventricle, Heterotaxia syndrome",
    "definition" : "Visceral heterotaxy syndrome is literally defined as a pattern of anatomic organization of the thoracic and abdominal organs that is neither the expected usual or normal arrangement (so-called situs solitus) nor complete situs inversus (the unusual or mirror-image arrangement of normal). If asymmetry of the thoracic and abdominal viscera is the usual or normal situation, visceral heterotaxy syndrome includes patients with an unusual degree of thoracic and abdominal visceral symmetry. This broad term includes patients with a wide variety of complex cardiac lesions. One way to impose order on this diverse group of cardiac lesions is to stratify them according to the morphology of the atrial appendages. In atrial appendage isomerism, both atrial appendages are similar rather than displaying their usual distinctive morphology. Right or left atrial appendage isomerism exists when both atria have right or left atrial appendage morphologic characteristics, respectively. Right atrial appendage isomerism is frequently associated with bilaterally trilobed lungs (each with short bronchi) and asplenia. Left atrial appendage isomerism frequently is associated with bilaterally bilobed lungs (each with long bronchi) and polysplenia. Many types of anomalies of systemic venous connection are frequently associated with heterotaxy syndrome.Visceral heterotaxy syndrome is literally defined as a pattern of anatomic organization of the thoracic and abdominal organs that is neither the expected usual or normal arrangement (so-called situs solitus) nor complete situs inversus (the unusual or mirror-image arrangement of normal). If asymmetry of the thoracic and abdominal viscera is the usual or normal situation, visceral heterotaxy syndrome includes patients with an unusual degree of thoracic and abdominal visceral symmetry. This broad term includes patients with a wide variety of complex cardiac lesions. One way to impose order on this diverse group of cardiac lesions is to stratify them according to the morphology of the atrial appendages. In atrial appendage isomerism, both atrial appendages are similar rather than displaying their usual distinctive morphology. Right or left atrial appendage isomerism exists when both atria have right or left atrial appendage morphologic characteristics, respectively. Right atrial appendage isomerism is frequently associated with bilaterally trilobed lungs (each with short bronchi) and asplenia. Left atrial appendage isomerism frequently is associated with bilaterally bilobed lungs (each with long bronchi) and polysplenia. Many types of anomalies of systemic venous connection are frequently associated with heterotaxy syndrome.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG080",
    "display" : "Single ventricle, Other",
    "definition" : "If the single ventricle is of primitive or indeterminate type, other is chosen in coding. It is recognized that a considerable variety of other structural cardiac malformations (e.g., biventricular hearts with straddling atrioventricular valves, pulmonary atresia with intact ventricular septum, some complex forms of double outlet right ventricle) may at times be best managed in a fashion similar to that which is used to treat univentricular hearts. They are not to be coded in this section of the nomenclature, but according to the underlying lesions.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG082",
    "display" : "Congenitally corrected TGA",
    "definition" : "Indicate if the patient has the diagnosis of \"Congenitally corrected TGA\". Congenitally corrected transposition is synonymous with the terms \"corrected transposition\" and \"discordant atrioventricular connections with discordant ventriculo-arterial connections\", and is defined as a spectrum of cardiac malformations where the atrial chambers are joined to morphologically inappropriate ventricles, and the ventricles then support morphologically inappropriate arterial trunks [1]. [1] Jacobs JP, Franklin RCG, Wilkinson JL, Cochrane AD, Karl TR, Aiello VD, Béland MJ, Colan SD, Elliott, MJ, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G, Tchervenkov CI, Weinberg PM. The nomenclature, definition and classification of discordant atrioventricular connections. In 2006 Supplement to Cardiology in the Young: Controversies and Challenges of the Atrioventricular Junctions and Other Challenges Facing Paediatric Cardiovascular Practitioners and their Patients, Jacobs JP, Wernovsky G, Gaynor JW, and Anderson RH (editors). Cardiology in the Young, Volume 16 (Supplement 3): 72-84, September 2006.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG083",
    "display" : "TGA, IVS",
    "definition" : "A malformation of the heart in which there is atrioventricular concordance and ventriculoarterial discordance with an intact ventricular septum. There may be d, l, or ambiguous transposition (segmental diagnoses include S,D,D, S,D,L, S,D,A). Also to be included in this diagnostic grouping are those defects with situs inversus, L-loop ventricles and either d or l transposition (segmental diagnosis of I,L,L and I,L,D) and occasionally those defects with ambiguous situs of the atria which behave as physiologically uncorrected transposition and are treated with arterial switch (segmental diagnoses include A,L,L and A,D,D).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG084",
    "display" : "TGA, IVS-LVOTO",
    "definition" : "A malformation of the heart in which there is atrioventricular concordance and ventriculoarterial discordance with an intact ventricular septum and associated left ventricular obstruction. There may be d, l, or ambiguous transposition (segmental diagnoses include S,D,D, S,D,L, S,D,A). Also to be included in this diagnostic grouping are those defects with situs inversus, L-loop ventricles and either d or l transposition (segmental diagnosis of I,L,L and I,L,D) and occasionally those defects with ambiguous situs of the atria which behave as physiologically uncorrected transposition and are treated with arterial switch (segmental diagnoses include A,L,L and A,D,D).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG085",
    "display" : "TGA, VSD",
    "definition" : "A malformation of the heart in which there is atrioventricular concordance and ventriculoarterial discordance with one or more ventricular septal defects. There may be d, l, or ambiguous transposition (segmental diagnoses include S,D,D, S,D,L, S,D,A). Also to be included in this diagnostic grouping are those defects with situs inversus, L-loop ventricles and either d or l transposition (segmental diagnosis of I,L,L and I,L,D) and occasionally those defects with ambiguous situs of the atria which behave as physiologically uncorrected transposition and are treated with arterial switch (segmental diagnoses include A,L,L and A,D,D).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG086",
    "display" : "TGA, VSD-LVOTO",
    "definition" : "A malformation of the heart in which there is atrioventricular concordance and ventriculoarterial discordance with one or more ventricular septal defects and left ventricular outflow tract obstruction. There may be d, l, or ambiguous transposition (segmental diagnoses include S,D,D, S,D,L, S,D,A). Also to be included in this diagnostic grouping are those defects with situs inversus, L-loop ventricles and either d or l transposition (segmental diagnosis of I,L,L and I,L,D) and occasionally those defects with ambiguous situs of the atria which behave as physiologically uncorrected transposition and are treated with arterial switch (segmental diagnoses include A,L,L and A,D,D).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG088",
    "display" : "DORV, VSD type",
    "definition" : "Double outlet right ventricle is a type of ventriculoarterial connection in which both great vessels arise entirely or predominantly from the right ventricle. In double outlet right ventricle, VSD type, there is an associated subaortic or doubly-committed VSD and no pulmonary outflow tract obstruction. Subaortic VSD's are located beneath the aortic valve. Doubly-committed VSD's lie beneath the leaflets of the aortic and pulmonary valves (juxtaarterial). In the nomenclature developed for DORV, there must be usual atrial arrangements and concordant atrioventricular connections, and normal or near-normal sized ventricles. Discordant atrioventricular connection with DORV is to be coded under congenitally corrected TGA. DORV associated with univentricular atrioventricular connections, atrioventricular valve atresia, or atrial isomerism is to be coded under the appropriate sngle ventricle listing.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "DORV"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG089",
    "display" : "DORV, TOF type",
    "definition" : "Double outlet right ventricle is a type of ventriculoarterial connection in which both great vessels arise entirely or predominantly from the right ventricle. In double outlet right ventricle, TOF type, there is an associated subaortic or doubly-committed VSD and pulmonary outflow tract obstruction. Subaortic VSD's are located beneath the aortic valve. Doubly-committed VSD's lie beneath the leaflets of the aortic and pulmonary valves (juxtaarterial). DORV can occur in association with pulmonary atresia, keeping in mind in coding that in the nomenclature developed for DORV, there must be usual atrial arrangements and concordant atrioventricular connections, and normal or near-normal sized ventricles (in this situation DORV is coded as a primary diagnosis). Discordant atrioventricular connection with DORV is to be coded under congenitally corrected TGA. DORV associated with univentricular atrioventricular connections, atrioventricular valve atresia, or atrial isomerism is to be coded under the appropriate Single ventricle listing.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "DORV"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG090",
    "display" : "DORV, TGA type",
    "definition" : "Double outlet right ventricle is a type of ventriculoarterial connection in which both great vessels arise entirely or predominantly from the right ventricle. In double outlet right ventricle, TGA type, there is an associated subpulmonary VSD. Most frequently, there is no pulmonary outflow tract obstruction (Taussig-Bing heart). The aorta is usually to the right and slightly anterior to or side-by-side with the pulmonary artery. Associated aortic outflow tract stenosis (subaortic, aortic arch obstruction) is commonly associated with the Taussig-Bing heart and if present should be coded as a secondary diagnosis. Rarely, there is associated pulmonary outflow tract obstruction. In the nomenclature developed for DORV, there must be usual atrial arrangements and concordant atrioventricular connections, and normal or near-normal sized ventricles. Discordant atrioventricular connection with DORV is to be coded under congenitally corrected TGA. DORV associated with univentricular atrioventricular connections, atrioventricular valve atresia, or atrial isomerism is to be coded under the appropriate single ventricle listing.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "DORV"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG091",
    "display" : "DORV, Remote VSD (uncommitted VSD)",
    "definition" : "Double outlet right ventricle is a type of ventriculoarterial connection in which both great vessels arise entirely or predominantly from the right ventricle. In double outlet right ventricle, Remote VSD type, there is a remote or noncommitted VSD. The VSD is far removed from both the aortic and pulmonary valves, usually within the inlet septum. Many of these VSD's are in hearts with DORV and common atrioventricular canal/septal defect. In the nomenclature developed for DORV, there must be usual atrial arrangements and concordant atrioventricular connections, and normal or near-normal sized ventricles. Discordant atrioventricular connection with DORV is to be coded under congenitally corrected TGA. DORV associated with univentricular atrioventricular connections, atrioventricular valve atresia, or atrial isomerism is to be coded under the appropriate single ventricle listing.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "DORV"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG093",
    "display" : "DOLV",
    "definition" : "Double outlet left ventricle is a type of ventriculoarterial connection in which both great vessels arise entirely or predominantly from the left ventricle. In the nomenclature developed for DOLV, there must be usual atrial arrangements and concordant atrioventricular connections, and normal or near-normal sized ventricles. Discordant atrioventricular connection with DOLV is to be coded under congenitally corrected TGA. DOLV associated with univentricular atrioventricular connections, atrioventricular valve atresia, or atrial isomerism is to be coded under the appropriate single ventricle listing.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "DOLV"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG095",
    "display" : "Coarctation of aorta",
    "definition" : "Indicate if the patient has the diagnosis of \"Coarctation of aorta\". A \"Coarctation of the aorta\" generally indicates a narrowing of the descending thoracic aorta just distal to the left subclavian artery. However, the term may also be accurately used to refer to a region of narrowing anywhere in the thoracic or abdominal aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG096",
    "display" : "Aortic arch hypoplasia",
    "definition" : "Hypoplasia of the aortic arch is hypoplasia of the proximal or distal transverse arch or the aortic isthmus. The isthmus (arch between the left subclavian and insertion of the patent ductus arteriosus / ligamentum arteriosum) is hypoplastic if its diameter is less than 40% of the diameter of the ascending aorta. The proximal transverse arch (arch between the innominate and left carotid arteries) and distal transverse arch (arch between the left carotid and left subclavian arteries) are hypoplastic if their diameters are less than 60% and 50%, respectively, of the diameter of the ascending aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG098",
    "display" : "Interrupted aortic arch",
    "definition" : "Indicate if the patient has the diagnosis of \"Interrupted aortic arch\". Interrupted aortic arch is defined as the loss of luminal continuity between the ascending and descending aorta. In most cases blood flow to the descending thoracic aorta is through a PDA, and there is a large VSD. Arch interruption is further defined by site of interruption. In type A, interruption is distal to the left subclavian artery; in type B interruption is between the left carotid and left subclavian arteries; and in type C interruption occurs between the innominate and left carotid arteries.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG099",
    "display" : "Patent ductus arteriosus",
    "definition" : "Indicate if the patient has the diagnosis of \"Patent ductus arteriosus\". The ductus arteriosus (arterial duct) is an essential feature of fetal circulation, connecting the main pulmonary trunk with the descending aorta, distal to the origin of the left subclavian artery. In most patients it is on the left side. If a right aortic arch is present, it may be on the right or the left; very rarely it is bilateral. When luminal patency of the duct persists post-natally, it is referred to as patent ductus arteriosus (patent arterial duct). The length and diameter may vary considerably from case to case. The media of the ductus consists mainly of smooth muscle that is arranged spirally, and the intima is much thicker than that of the aorta. (A patent ductus arteriosus is a vascular arterial connection between the thoracic aorta and the pulmonary artery. Most commonly a PDA has its origin from the descending thoracic aorta, just distal and opposite the origin of the left subclavian artery. The insertion of the ductus is most commonly into the very proximal left pulmonary artery at its junction with the main pulmonary artery. Origination and insertion sites can be variable, however.)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG100",
    "display" : "Vascular ring",
    "definition" : "The term vascular ring refers to a group of congenital vascular anomalies that encircle and comperss the esophagus and trachea. The compression may be from a complete anatomic ring (double aortic arch or right aortic arch with a left ligamentum) or from a compressive effect of an aberrant vessel (innominate artery compression syndrome).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG101",
    "display" : "Pulmonary artery sling",
    "definition" : "In pulmonary artery sling, the left pulmonary artery originates from the right pulmonary artery and courses posteriorly between the trachea and esophagus in its route to the left lung hilum, causing a sling-like compression of the trachea.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG102",
    "display" : "Aortic aneurysm (including pseudoaneurysm)",
    "definition" : "An aneurysm of the aorta is defined as a localized dilation or enlargement of the aorta at any site along its length (from aortic annulus to aortoiliac bifurcation). A true aortic aneurysm involves all layers of the aortic wall. A false aortic aneurysm (pseudoaneurysm) is defined as a dilated segment of the aorta not containing all layers of the aortic wall and may include postoperative or post-procedure false aneurysms at anastomotic sites, traumatic aortic injuries or transections, and infectious processes leading to a contained rupture.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG103",
    "display" : "Aortic dissection",
    "definition" : "Aortic dissection is a separation of the layers of the aortic wall. Extension of the plane of the dissection may progress to free rupture into the pericardium, mediastinum, or pleural space if not contained by the outer layers of the media and adventitia. Dissections may be classified as acute or chronic (if they have been present for more than 14 days).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG104",
    "display" : "Lung disease, Benign",
    "definition" : "Lung disease arising from any etiology (congenital or acquired) which does not result in death or lung or heartlung transplant; examples might be non-life threatening asthma or emphysema, benign cysts.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG105",
    "display" : "Lung disease, Malignant",
    "definition" : "Lung disease arising from any etiology (congenital or acquired, including pulmonary parenchymal disease, pulmonary vascular disease, congenital heart disease, neoplastm, etc.) which may result in death or lung or heart-lung transplant.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG106",
    "display" : "Pectus",
    "definition" : "Pectus excavatum is a chest wall deformity in which the sternum is depressed. Pectus carinatum is a protrusion of the sternum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG107",
    "display" : "Tracheal stenosis",
    "definition" : "Tracheal stenosis is a reduction in the anatomic luminal diameter of the trachea by more than 50% of the remaining trachea. This stenosis may be congenital or acquired (as in post-intubation or traumatic tracheal stenosis).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG108",
    "display" : "Tracheal disease, Other",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Lung Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "DIAG109",
    "display" : "Arrhythmia",
    "definition" : "Any cardiac rhythm other than normal sinus rhythm.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG110",
    "display" : "Arrhythmia, Heart block, Acquired",
    "definition" : "Atrioventricular block, when acquired, may be postsurgical, or secondary to myocarditis or other etiologies; the block may be first, second or third degree.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG111",
    "display" : "Arrhythmia, Heart block, Congenital",
    "definition" : "Atrioventricular block, when congenital, may be first, second or third degree block.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG113",
    "display" : "Arrhythmia, Pacemaker, Indication for replacement",
    "definition" : "Indications for pacemaker replacement may include end of generator life, malfunction, or infection.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG114",
    "display" : "Atrial Isomerism, Left",
    "definition" : "In isomerism, both appendages are of like morphology or structure; in left atrial isomerism both the right atrium and left atrium appear to be a left atrium structurally.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG115",
    "display" : "Atrial Isomerism, Right",
    "definition" : "In isomerism, both appendages are of like morphology or structure; in right atrial isomerism both the right atrium and left atrium appear to be a right atrium structurally.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG116",
    "display" : "Aneurysm, Ventricular, Right (including pseudoaneurysm)",
    "definition" : "An aneurysm of the right ventricle is defined as a localized dilation or enlargement of the right ventricular wall.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG117",
    "display" : "Aneurysm, Ventricular, Left (including pseudoaneurysm)",
    "definition" : "An aneurysm of the left ventricle is defined as a localized dilation or enlargement of the left ventricular wall.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG118",
    "display" : "Aneurysm, Pulmonary artery",
    "definition" : "An aneurysm of the pulmonary artery is defined as a localized dilation or enlargement of the pulmonary artery trunk and its central branches (right and left pulmonary artery).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG119",
    "display" : "Aneurysm, Other",
    "definition" : "A localized dilation or enlargement of a cardiac vessel or chamber not coded in specific fields available for aortic aneurysm, sinus of Valsalva aneurysm, coronary artery aneurysm, right ventricular aneurysm, left ventricular aneurysm, or pulmonary artery aneurysm.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG120",
    "display" : "Hypoplastic RV",
    "definition" : "Small size of the right ventricle. This morphological abnormality usually is an integral part of other congenital cardiac anomalies and, therefore, frequently does not need to be coded separately. It should, however, be coded as secondary to an accompanying congenital cardiac anomaly if the right ventricular hypoplasia is not considered an integral and understood part of the primary congenital cardiac diagnosis. It would rarely be coded as a primary and/or isolated diagnosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG121",
    "display" : "Hypoplastic LV",
    "definition" : "Small size of the left ventricle. This morphological abnormality usually is an integral part of other congenital cardiac anomalies and, therefore, frequently does not need to be coded separately. It should, however, be coded as secondary to an accompanying congenital cardiac anomaly if the left ventricular hypoplasia is not considered an integral and understood part of the primary congenital cardiac diagnosis. It would rarely be coded as a primary and/or isolated diagnosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG122",
    "display" : "Mediastinitis",
    "definition" : "Inflammation/infection of the mediastinum, the cavity between the lungs which holds the heart, great vessels, trachea, esophagus, thymus, and connective tissues. In the United States mediastinits occurs most commonly following chest surgery.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG123",
    "display" : "Endocarditis",
    "definition" : "An infection of the endocardial surface of the heart, which may involve one or more heart valves (native or prosthetic) or septal defects or prosthetic patch material placed at previous surgery.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG124",
    "display" : "Prosthetic valve failure",
    "definition" : "Indicate if the patient has the diagnosis of \"Prosthetic valve failure\". This diagnosis is the primary diagnosis to be entered for patients undergoing replacement of a previously placed valve (not conduit) prosthesis, whatever type (e.g., bioprosthetic, mechanical, etc.). Failure may be due to, among others, patient somatic growth, malfunction of the prosthesis, or calcification or overgrowth of the prosthesis (e.g., pannus formation). Secondary or fundamental diagnosis would relate to the underlying valve disease entity. As an example, a patient undergoing removal or replacement of a prosthetic pulmonary valve previously placed for pulmonary insufficiency after repair of tetralogy of Fallot would have as a primary diagnosis \"Prosthetic valve failure\", as a secondary diagnosis \"Pulmonary insufficiency\", and as a fundamental diagnosis \" Tetralogy of Fallot\".",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG125",
    "display" : "Myocardial infarction",
    "definition" : "A myocardial infarction is the development of myocardial necrosis caused by a critical imbalance between the oxygen supply and demand of the myocardium. While a myocardial infarction may be caused by any process that causes this imbalance it most commonly results from plaque rupture with thrombus formation in a coronary vessel, resulting in an acute reduction of blood supply to a portion of the myocardium. Myocardial infarction is a usual accompaniment of anomalous left coronary artery from the pulmonary artery (ALCAPA).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG126",
    "display" : "Cardiac tumor",
    "definition" : "An abnormal growth of tissue in or on the heart, demonstrating partial or complete lack of structural organization, and no functional coordination with normal cardiac tissue. Commonly, a mass is recognized which is distinct from the normal structural components of the heart. A primary cardiac tumor is one that arises directly from tissues of the heart, (e.g., myxoma, fibroelastoma, rhabdomyoma, fibroma, lipoma, pheochromocytoma, teratoma, hemangioma, mesothesioloma, sarcoma). A secondary cardiac tumor is one that arises from tissues distant from the heart, with subsequent spread to the otherwise normal tissues of the heart, (e.g., renal cell tumor with caval extension from the kidney to the level of the heart or tumor with extension from other organs or areas of the body (hepatic, adrenal, uterine, infradiaphragmatic)). N.B., in the nomenclature system developed, cardiac thrombus and cardiac vegetation are categorized as primary cardiac tumors.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG127",
    "display" : "Pulmonary AV fistula",
    "definition" : "An abnormal intrapulmonary connection (fistula) between an artery and vein that occurs in the blood vessels of the lungs. Pulmonary AV fistulas may be seen in association with congenital heart defects; the associated cardiac defect should be coded as well.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG128",
    "display" : "Pulmonary embolism",
    "definition" : "A pulmonary embolus is a blockage of an artery in the lungs by fat, air, clumped tumor cells, or a blood clot.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG130",
    "display" : "Pulmonary vascular obstructive disease (Eisenmenger's)",
    "definition" : "\"Eisenmenger syndrome\" could briefly be described as \"Acquired severe pulmonary vascular disease associated with congenital heart disease (Eisenmenger)\". Eisenmenger syndrome is an acquired condition. In Eisenmenger-type pulmonary vascular obstructive disease, long-term left-to-right shunting (e.g., through a ventricular or atrial septal defect, patent ductus arteriosus, aortopulmonary window) can lead to chronic pulmonary hypertension with resultant pathological changes in the pulmonary vessels. The vessels become thick-walled, stiff, noncompliant, and may be obstructed. In Eisenmenger syndrome, the long-term leftto- right shunting will reverse and become right to left. Please note that the specific heart defect should be coded as a secondary diagnosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG131",
    "display" : "Primary pulmonary hypertension",
    "definition" : "Primary pulmonary hypertension is a rare disease characterized by elevated pulmonary artery hypertension with no apparent cause. Two forms are included in the nomenclature, a sporadic form and a familial form which can be linked to the BMPR-II gene.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG132",
    "display" : "Persistent fetal circulation",
    "definition" : "Persistence of the blood flow pattern seen in fetal life, in which high pulmonary vascular resistance in the lungs results in decreased blood flow to the lungs. Normally, after birth pulmonary pressure falls with a fall in pulmonary vascular resistance and there is increased perfusion of the lungs. Persistent fetal circulation, also known as persistent pulmonary hypertension of the newborn, can be related to lung or diaphragm malformations or lung immaturity.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG133",
    "display" : "Meconium aspiration",
    "definition" : "Aspiration of amniotic fluid stained with meconium before, during, or after birth can lead to pulmonary sequelae including (1) pneumothorax, (2) pneumomediastinum, (3) pneumopericardium, (4) lung infection, and (5) meconium aspiration syndrome (MAS) with persistent pulmonary hypertension.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG134",
    "display" : "Pleural disease, Benign",
    "definition" : "Benign diseases of the mediastinal or visceral pleura.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG135",
    "display" : "Pleural disease, Malignant",
    "definition" : "Malignant diseases of the mediastinal or visceral pleura.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG136",
    "display" : "Pneumothorax",
    "definition" : "A collection of air or gas in the pleural space.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG137",
    "display" : "Pleural effusion",
    "definition" : "Abnormal accumulation of fluid in the pleural space.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG138",
    "display" : "Chylothorax",
    "definition" : "The presence of lymphatic fluid in the pleural space secondary to a leak from the thoracic duct or its branches. Chylothorax is a specific type of pleural effusion.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG139",
    "display" : "Empyema",
    "definition" : "A collection of purulent material in the pleural space, usually secondary to an infection.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG140",
    "display" : "Esophageal disease, Benign",
    "definition" : "Any benign disease of the esophagus.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG141",
    "display" : "Esophageal disease, Malignant",
    "definition" : "Any malignant disease of the esophagus.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG142",
    "display" : "Mediastinal disease, Benign",
    "definition" : "Any benign disease of the mediastinum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG143",
    "display" : "Mediastinal disease, Malignant",
    "definition" : "Any malignant disease of the mediastinum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG144",
    "display" : "Diaphragm paralysis",
    "definition" : "Paralysis of diaphragm, unilateral or bilateral.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG145",
    "display" : "Diaphragm disease, Other",
    "definition" : "Any disease of the diaphragm other than paralysis.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG146",
    "display" : "Cardiac, Other",
    "definition" : "Any cardiac diagnosis not specifically delineated in other diagnostic codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG147",
    "display" : "Thoracic and/or mediastinal, Other",
    "definition" : "Any thoracic and/or mediastinal disease not specifically delineated in other diagnostic codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG148",
    "display" : "Peripheral vascular, Other",
    "definition" : "Any peripheral vascular disease (congenital or acquired) or injury (from trauma or iatrogenic); vessels involved may include, but are not limited to femoral artery, femorial vein, iliac artery, brachial artery, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG149",
    "display" : "Miscellaneous, Other",
    "definition" : "Any disease (congenital or acquired) not specifically delineated in other diagnostic codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG150",
    "display" : "Normal heart",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG151",
    "display" : "Arrhythmia, Heart block",
    "definition" : "Atrioventricular block may be congenital or acquired, and may be of varying degree (first, second, or third degree).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG152",
    "display" : "Cardiomyopathy, End-stage congenital heart disease",
    "definition" : "Myocardial abnormality in which there is systolic and/or diastolic dysfunction in the presence of structural congenital heart disease without any (or any further) surgically correctable lesions.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Cardiomyopathy"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG153",
    "display" : "Congenitally corrected TGA, IVS",
    "definition" : "Indicate if the patient has the diagnosis of \"Congenitally corrected TGA, IVS\". \"Congenitally corrected TGA, IVS\" is \"Congenitally corrected transposition with an intact ventricular septum\", in other words, \"Congenitally corrected transposition with no VSD\". (Congenitally corrected transposition is synonymous with the terms \" corrected transposition\" and \"discordant atrioventricular connections with discordant ventriculo-arterial connections\", and is defined as a spectrum of cardiac malformations where the atrial chambers are joined to morphologically inappropriate ventricles, and the ventricles then support morphologically inappropriate arterial trunks [1]. [1] Jacobs JP, Franklin RCG, Wilkinson JL, Cochrane AD, Karl TR, Aiello VD, Béland MJ, Colan SD, Elliott, MJ, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G, Tchervenkov CI, Weinberg PM. The nomenclature, definition and classification of discordant atrioventricular connections. In 2006 Supplement to Cardiology in the Young: Controversies and Challenges of the Atrioventricular Junctions and Other Challenges Facing Paediatric Cardiovascular Practitioners and their Patients, Jacobs JP, Wernovsky G, Gaynor JW, and Anderson RH (editors). Cardiology in the Young, Volume 16 (Supplement 3): 72-84, September 2006.)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG154",
    "display" : "Congenitally corrected TGA, IVS-LVOTO",
    "definition" : "Indicate if the patient has the diagnosis of \"Congenitally corrected TGA, IVS-LVOTO\". \"Congenitally corrected TGA, IVS-LVOTO\" is \"Congenitally corrected transposition with an intact ventricular septum and left ventricular outflow tract obstruction\", in other words, \" Congenitally corrected transposition with left ventricular outflow tract obstruction and no VSD\". (Congenitally corrected transposition is synonymous with the terms \" corrected transposition\" and \"discordant atrioventricular connections with discordant ventriculo-arterial connections\", and is defined as a spectrum of cardiac malformations where the atrial chambers are joined to morphologically inappropriate ventricles, and the ventricles then support morphologically inappropriate arterial trunks [1]. [1] Jacobs JP, Franklin RCG, Wilkinson JL, Cochrane AD, Karl TR, Aiello VD, Béland MJ, Colan SD, Elliott, MJ, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G, Tchervenkov CI, Weinberg PM. The nomenclature, definition and classification of discordant atrioventricular connections. In 2006 Supplement to Cardiology in the Young: Controversies and Challenges of the Atrioventricular Junctions and Other Challenges Facing Paediatric Cardiovascular Practitioners and their Patients, Jacobs JP, Wernovsky G, Gaynor JW, and Anderson RH (editors). Cardiology in the Young, Volume 16 (Supplement 3): 72-84, September 2006.)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG155",
    "display" : "Congenitally corrected TGA, VSD",
    "definition" : "Indicate if the patient has the diagnosis of \"Congenitally corrected TGA, VSD\". \"Congenitally corrected TGA, VSD\" is \"Congenitally corrected transposition with a VSD\". (Congenitally corrected transposition is synonymous with the terms \"corrected transposition\" and \"discordant atrioventricular connections with discordant ventriculo-arterial connections\", and is defined as a spectrum of cardiac malformations where the atrial chambers are joined to morphologically inappropriate ventricles, and the ventricles then support morphologically inappropriate arterial trunks [1]. [1] Jacobs JP, Franklin RCG, Wilkinson JL, Cochrane AD, Karl TR, Aiello VD, Béland MJ, Colan SD, Elliott, MJ, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G, Tchervenkov CI, Weinberg PM. The nomenclature, definition and classification of discordant atrioventricular connections. In 2006 Supplement to Cardiology in the Young: Controversies and Challenges of the Atrioventricular Junctions and Other Challenges Facing Paediatric Cardiovascular Practitioners and their Patients, Jacobs JP, Wernovsky G, Gaynor JW, and Anderson RH (editors). Cardiology in the Young, Volume 16 (Supplement 3): 72-84, September 2006.)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG156",
    "display" : "Congenitally corrected TGA, VSD-LVOTO",
    "definition" : "Indicate if the patient has the diagnosis of \"Congenitally corrected TGA, VSD-LVOTO\". \"Congenitally corrected TGA, VSD-LVOTO\" is \"Congenitally corrected transposition with a VSD and left ventricular outflow tract obstruction\". (Congenitally corrected transposition is synonymous with the terms \"corrected transposition\" and \"discordant atrioventricular connections with discordant ventriculo-arterial connections\", and is defined as a spectrum of cardiac malformations where the atrial chambers are joined to morphologically inappropriate ventricles, and the ventricles then support morphologically inappropriate arterial trunks [1]. [1] Jacobs JP, Franklin RCG, Wilkinson JL, Cochrane AD, Karl TR, Aiello VD, Béland MJ, Colan SD, Elliott, MJ, Gaynor JW, Krogmann ON, Kurosawa H, Maruszewski B, Stellin G, Tchervenkov CI, Weinberg PM. The nomenclature, definition and classification of discordant atrioventricular connections. In 2006 Supplement to Cardiology in the Young: Controversies and Challenges of the Atrioventricular Junctions and Other Challenges Facing Paediatric Cardiovascular Practitioners and their Patients, Jacobs JP, Wernovsky G, Gaynor JW, and Anderson RH (editors). Cardiology in the Young, Volume 16 (Supplement 3): 72-84, September 2006.)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG157",
    "display" : "Coronary artery anomaly, Aneurysm",
    "definition" : "Coronary artery aneurysms are defined as dilations of a coronary vessel 1.5 times the adjacent normal coronaries. There are two forms, saccular and fusiform (most common), and both may be single or multiple. These aneurysms may be congenital or acquired (atherosclerotic, Kawasaki, systemic diseases other than Kawasaki, iatrogenic, infectious, or traumatic) in origin.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG158",
    "display" : "Coronary artery anomaly, Anomalous aortic origin of coronary artery from aorta (AAOCA)",
    "definition" : "Anomalous aortic origins of the coronary arteries include a spectrum of anatomic variations of the normal coronary artery origins. Coronary artery anomalies of aortic origin to be coded under this diagnostic field include: anomalies of take-off (high take-off), origin (sinus), branching, and number. An anomalous course of the coronary artery vessels is also significant, particularly those coronary arteries that arise or course between the great vessels.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG159",
    "display" : "Coronary artery anomaly, Anomalous pulmonary origin (includes ALCAPA)",
    "definition" : "In patients with anomalous pulmonary origin of the coronary artery, the coronary artery (most commonly the left coronary artery) arises from the pulmonary artery rather than from the aorta. Rarely, the right coronary artery, the circumflex, or both coronary arteries may arise from the pulmonary artery.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG160",
    "display" : "Coronary artery anomaly, Fistula",
    "definition" : "The most common of coronary artery anomalies, a coronary arteriovenous fistula is a communication between a coronary artery and either a chamber of the heart (coronary-cameral fistula) or any segment of the systemic or pulmonary circulation (coronary arteriovenous fistula). They may be congenital or acquired (traumatic, infectious, iatrogenic) in origin, and are mostly commonly seen singly, but occasionally multiple fistulas are present. Nomenclature schemes have been developed that further categorize the fistulas by vessel of origin and chamber of termination, and one angiographic classification scheme by Sakakibara has surgical implications. Coronary artery fistulas can be associated with other congenital heart anomalies such as tetralogy of Fallot, atrial septal defect, ventricular septal defect, and pulmonary atresia with intact ventricular septum, among others. The major cardiac defect should be listed as the primary diagnosis and the coronary artery fistula should be as an additional secondary diagnoses.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG161",
    "display" : "Coronary artery anomaly, Other",
    "definition" : "Coronary artery anomalies which may fall within this category include coronary artery bridging and coronary artery stenosis, as well as secondary coronary artery variations seen in congenital heart defects such as tetralogy of Fallot, transposition of the great arteries, and truncus arteriosus (with the exception of variations that can be addressed by a more specific coronary artery anomaly code).",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG162",
    "display" : "DORV, IVS",
    "definition" : "Double outlet right ventricle is a type of ventriculoarterial connection in which both great vessels arise entirely or predominantly from the right ventricle. In the rare case of double outlet right ventricle with IVS the ventricular septum is intact. In the nomenclature developed for DORV, there must be usual atrial arrangements and concordant atrioventricular connections, and normal or near-normal sized ventricles. Discordant atrioventricular connections with DORV are to be coded under congenitally corrected TGA. DORV associated with univentricular atrioventricular connections, atrioventricular valve atresia, or atrial isomerism is to be coded under the appropriate single ventricle listing.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "DORV"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG163",
    "display" : "Mediastinal disease",
    "definition" : "Any disease of the mediastinum awaiting final benign/malignant pathology determination.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG164",
    "display" : "Mitral stenosis",
    "definition" : "Stenotic lesions of the mitral valve not otherwise specified in the diagnosis definitions 650, 660, 670, and 680.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG165",
    "display" : "Pulmonary artery, Discontinuous",
    "definition" : "Indicate if the patient has the diagnosis of \"Pulmonary artery, Discontinuous\". Pulmonary artery, Discontinuous \" is defined as a congenital or acquired anomaly with discontinuity between the branch pulmonary arteries or between a branch pulmonary artery and the main pulmonary artery trunk.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG166",
    "display" : "Pulmonary stenosis, Subvalvar",
    "definition" : "Subvalvar (infundibular) pulmonary stenosis is a narrowing of the outflow tract of the right ventricle below the pulmonic valve. It may be due to a localized fibrous diaphragm just below the valve, an obstructing muscle bundle or to a long narrow fibromuscular channel.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG167",
    "display" : "Pulmonary vascular obstructive disease",
    "definition" : "Pulmonary vascular obstructive disease (PVOD) other than those specifically defined elsewhere (Eisenmenger's pulmonary vascular obstructive disease, primary pulmonary hypertension, persistent fetal circulation). The spectrum includes PVOD arising from (1) pulmonary arterial hypertension or (2) pulmonary venous hypertension or (3) portal hypertension, or (4) collage vascular disease, or (5) drug or toxin induced, or (6) diseases of the respiratory system, or (7) chronic thromboembolic disease, among others.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG168",
    "display" : "VSD + Aortic arch hypoplasia",
    "definition" : "A ventricular septal defect, any type, associated with hypoplasia of the aortic arch. (See diagnosis definition 1000 for a definition of hypoplasia of the aortic arch.)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG169",
    "display" : "VSD + Coarctation of aorta",
    "definition" : "Indicate if the patient has the diagnosis of \"VSD + Coarctation of aorta\". In the event of a VSD occurring in association with Coarctation of aorta, code \"VSD + Coarctation of aorta\", and then use additional (secondary) diagnostic codes to describe the VSD and the Coarctation of aorta separately to provide further documentation about the individual VSD and Coarctation of aorta types. {A \"VSD\" is a \"Ventricular Septal Defect\" and is also known as an \"Interventricular communication\". A VSD is defined as \"a hole between the ventricular chambers or their remnants\". (The VSD is defined on the basis of its margins as seen from the aspect of the morphologically right ventricle. In the setting of double outlet right ventricle, the defect provides the outflow from the morphologically left ventricle. In univentricular atrioventricular connections with functionally single left ventricle with an outflow chamber, the communication is referred to by some as a bulboventricular foramen.)} {A \"Coarctation of the aorta\" generally indicates a narrowing of the descending thoracic aorta just distal to the left subclavian artery. However, the term may also be accurately used to refer to a region of narrowing anywhere in the thoracic or abdominal aorta.}",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG170",
    "display" : "VSD, Type 1 (Subarterial) (Supracristal) (Conal septal defect) (Infundibular)",
    "definition" : "A VSD that lies beneath the semilunar valve(s) in the conal or outlet septum.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG171",
    "display" : "VSD, Type 2 (Perimembranous) (Paramembranous) (Conoventricular)",
    "definition" : "A VSD that is confluent with and involves the membranous septum and is bordered by an atrioventricular valve, not including type 3 VSDs.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG172",
    "display" : "VSD, Type 3 (Inlet) (AV canal type)",
    "definition" : "A VSD that involves the inlet of the right ventricular septum immediately inferior to the AV valve apparatus.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG173",
    "display" : "VSD, Type 4 (Muscular)",
    "definition" : "A VSD completely surrounded by muscle.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG174",
    "display" : "VSD, Type: Gerbode type (LV-RA communication)",
    "definition" : "A rare form of VSD in which the defect is at the membranous septum; the communication is between the left ventricle and right atrium.",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG175",
    "display" : "Status post - Transplant, Heart",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG176",
    "display" : "Status post - Transplant, Heart and lung",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "DIAG177",
    "display" : "Status post - Transplant, lung(s)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-200",
    "display" : "Cardio-pulmonary resuscitation",
    "definition" : "Chest compression with medications within 48 hours prior to surgery.  Select this factor if chest compression took place during the 48 hours prior to OR Entry Date and Time, or at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-240",
    "display" : "Shock, Resolved at time of surgery",
    "definition" : "Shock ROOT Definition = Shock is defined as \"a state of inadequate tissue perfusion\".  A modern definition according to Simeone states that shock is a \"clinical condition characterized by signs and symptoms which arise when the cardiac output is insufficient to fill the arterial tree with blood under sufficient pressure to provide organs and tissues with adequate blood flow.\"  A historic definition according to Blalock in 1940 is that \"Shock is a peripheral circulatory failure, resulting from a discrepancy in the size of the vascular bed and the volume of the intravascular fluid\".  Code this factor if the patient had a metabolic acidosis with pH < 7.2 and/or Lactate > 4 mmol / liter at any time after the date and time of admission to the hospital but not at the time of OR Entry Date and Time.  This factor should be coded if shock was present at any time after the date and time of admission to the hospital but not at the time of OR Entry Date and Time, including situations where shock was present after admission to the hospital where this operation was performed, and situations where shock was present while the patient was hospitalized at another \"transferring facility\" that subsequently transferred the patient who ultimately arrived at this hospital in this same hospitalization.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-250",
    "display" : "Diabetes mellitus, Insulin dependent",
    "definition" : "Code this factor if the patient has evidence of insulin dependent diabetes mellitus at the time OR Entry Date and Time as manifested by the fact that the patient has the diagnosis of diabetes mellitus that is controlled with insulin.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Endocrinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-260",
    "display" : "Diabetes mellitus, Non-insulin dependent",
    "definition" : "Code this factor if the patient has evidence of non-insulin dependent diabetes mellitus at the time OR Entry Date and Time as manifested by the fact that the patient has the diagnosis of diabetes mellitus that is controlled with dietary modification with or without oral medications (oral antihyperglycemic agents).",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Endocrinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-270",
    "display" : "Hypothyroidism",
    "definition" : "Hypothyroidism refers to decreased levels of triiodothyronine (T3) and thyroxine (T4), and reverse triiodothyronine (reverse T3), with high levels of thyroid-stimulating hormone (TSH).  Symptoms of hypothyroidism include bradycardia, pericardial effusions, hypertension and a narrowed pulse pressure and myxedema.  Studies have also shown decreases in cardiac output and cardiac contractility, decreased diastolic relaxation and diastolic filling.  In those with congestive heart failure (CHF), decreased levels of T3 have been shown to be proportional to New York Heart Association class, poor outcomes, mortality, poor hemodynamics, and hyponatremia.  This factor may be coded (1) if the TSH > 20 mU / liter, or (2) if the patient has pituitary failure with hypothyroidism, or (3) if the patient is receiving medication to treat hypothyroidism.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Endocrinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-280",
    "display" : "Currently taking steroids as treatment for adrenal insufficiency",
    "definition" : "Code this factor if the patient is taking steroids (as treatment for adrenal insufficiency) at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Endocrine"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-290",
    "display" : "Currently taking steroids for any reason other than treatment of adrenal insufficiency",
    "definition" : "Code this factor if the patient is taking steroids (for any reason other than treatment of adrenal insufficiency) at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Endocrine"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-295",
    "display" : "Colostomy present",
    "definition" : "Code this factor if the patient has a colostomy (involving the large intestine) present at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Gastrointestinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-300",
    "display" : "Enterostomy of small intestine present",
    "definition" : "Code this factor if the patient has an enterostomy (involving the small intestine) present at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Gastrointestinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-305",
    "display" : "Esophagostomy present",
    "definition" : "Code this factor if the patient has an esophagostomy present at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Gastrointestinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-307",
    "display" : "Gastrostomy present",
    "definition" : "Code this factor if the patient has a gastrostomy present at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Gastrointestinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-310",
    "display" : "Hepatic dysfunction",
    "definition" : "Hepatic dysfunction is defined as dysfunction of the liver that results in hypoalbuminemia (<2 grams/dL), coagulopathy (PT > 1.5 x upper limits of normal), and hyperbilirubinemia (> 3.0 x upper limits of normal).  Select this factor if the patient develops 2 out of these 3 laboratory abnormalities.  Code this factor if the patient has evidence of hepatic dysfunction at the time OR Entry Date and Time",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Gastrointestinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-320",
    "display" : "Necrotizing entero-colitis, Treated medically",
    "definition" : "Necrotizing enterocolitis (NEC) ROOT Definition = Necrotizing enterocolitis is defined as an acute reduction in the supply of oxygenated blood to the small intestine or large intestine, typically resulting in acidosis, abdominal distention, pneumatosis, and/or intestinal perforation, that prompts initiation of antibiotics or exploratory laparotomy.  Select this factor if NEC is present during the same hospitalization as this operation and was managed without surgery to treat the NEC.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Gastrointestinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-330",
    "display" : "Necrotizing entero-colitis, Treated surgically",
    "definition" : "Necrotizing enterocolitis (NEC) ROOT Definition = Necrotizing enterocolitis is defined as an acute reduction in the supply of oxygenated blood to the small intestine or large intestine, typically resulting in acidosis, abdominal distention, pneumatosis, and/or intestinal perforation, that prompts initiation of antibiotics or exploratory laparotomy.  Select this factor if NEC is present during the same hospitalization as this operation and was managed with surgery to treat the NEC.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Gastrointestinal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-340",
    "display" : "Coagulation disorder, Hypercoagulable state",
    "definition" : "Code this factor if the patient has evidence of a hypercoagulable state at the time OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Hematological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-350",
    "display" : "Coagulation disorder, Hypocoagulable state not secondary to medication (intrinsic hypocoagulable state)",
    "definition" : "Code this factor if the patient has evidence of a coagulopathy at the time OR Entry Date and Time as manifest by PT/PTT above normal, Thrombocytopenia <100,000,ot Fibrinogen split products positive (>10%) and the coagulopathy is NOT secondary to medications such as Heparin or Warfarin.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Hematological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-360",
    "display" : "Coagulation disorder, Hypocoagulable state secondary to medication",
    "definition" : "Code this factor if the patient has evidence of a coagulopathy at the time OR Entry Date and Time as manifest by PT/PTT above normal, Thrombocytopenia <100,000,ot Fibrinogen split products positive (>10%) and the coagulopathy is secondary to medications such as Heparin or Warfarin.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Hematological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-390",
    "display" : "Sepsis with positive blood culture",
    "definition" : "Code this factor if the patient has a positive blood culture within 48 hours of OR Entry Date and Time, combined with the diagnosis of sepsis.  Sepsis ROOT Definition = Sepsis is defined as \"evidence of serious infection accompanied by a deleterious systemic response\".  Sepsis may be diagnosed by the presence of a Systemic Inflammatory Response Syndrome (SIRS) resulting from suspected or proven infection.  A systemic inflammatory response syndrome (SIRS) is present when at least two of the following criteria are present: hypo- or hyperthermia (>38.5 or <36.0), tachycardia or bradycardia, tachypnea, leukocytosis or leukopenia, and thrombocytopenia.  Code this factor if the patient has signs of sepsis and a positive blood culture within 48 hours of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Infectious"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-410",
    "display" : "Seizure during lifetime",
    "definition" : "\"Seizure\" ROOT Definition = A seizure is defined as the clinical and/or electroencephalographic recognition of epileptiform activity.  Select this preoperative factor for any prior seizure during the lifetime of the patient.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Neurological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-430",
    "display" : "Stroke, CVA, or Intracranial hemorrhage > Grade 2 during lifetime",
    "definition" : "Indicate whether the patient had a stroke, CVA, or intracranial hemorrhage > Grade 2 at any time during the patient's lifetime.  Stroke ROOT Definition = A stroke is any confirmed neurological deficit of abrupt onset caused by a disturbance in blood flow to the brain, when the neurologic deficit does not resolve within 24 hours.  An IVH (Intraventricular hemorrhage) is diagnosed by the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage that may extend to include an intraparenchymal component.  A Grade 1 IVH requires the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage with a limited germinal matrix involvement.  A Grade 2 IVH requires the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage that involves an area of up to, but not more than 50% of the ventricular cross-sectional area in sagittal view.  A Grade 3 IVH requires the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage that involves at least 50% of the ventricular cross-sectional area in sagittal view but not an intraparenchymal component.  A Grade 4 IVH requires the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage that includes an intraparenchymal component extending beyond the germinal matrix.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Neurological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-440",
    "display" : "Stroke, CVA, or Intracranial hemorrhage > Grade 2 within 48 hours prior to surgery",
    "definition" : "Indicate whether the patient had a stroke, CVA, or intracranial hemorrhage > Grade 2 occurring within the 48 hours prior to surgery.  Stroke ROOT Definition = A stroke is any confirmed neurological deficit of abrupt onset caused by a disturbance in blood flow to the brain, when the neurologic deficit does not resolve within 24 hours.  An IVH (Intraventricular hemorrhage) is diagnosed by the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage that may extend to include an intraparenchymal component.  A Grade 1 IVH requires the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage with a limited germinal matrix involvement.  A Grade 2 IVH requires the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage that involves an area of up to, but not more than 50% of the ventricular cross-sectional area in sagittal view.  A Grade 3 IVH requires the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage that involves at least 50% of the ventricular cross-sectional area in sagittal view but not an intraparenchymal component.  A Grade 4 IVH requires the existence of a neurologic imaging study indicating a new or previously unsuspected collection of intraventricular hemorrhage that includes an intraparenchymal component extending beyond the germinal matrix.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Neurological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-480",
    "display" : "Respiratory Syncytial Virus",
    "definition" : "Code this factor if the patient is diagnosed with Respiratory Syncytial Virus (RSV) during the hospitalization of this operation prior to the time of OR Entry Date and time and was present at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Respiratory"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF-2010-490",
    "display" : "Single lung",
    "definition" : "Code this factor if the patient has only one lung present at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Respiratory"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF1",
    "display" : "Preoperative/Preprocedural mechanical circulatory support (IABP, VAD, ECMO, or CPS)",
    "definition" : "Code this factor if the patient is supported with mechanical support, of any type (IABP, VAD, ECMO, or CPS), for resuscitation/CPR or support, at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF10",
    "display" : "Renal failure requiring dialysis",
    "definition" : "Renal failure is defined as oliguria with sustained urine output < 0.5 cc/kg/hr for 24 hours and/or a rise in creatinine > 1.5 times upper limits of normal for age, with need for dialysis (including peritoneal dialysis and/or hemodialysis) or hemofiltration.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Renal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF11",
    "display" : "Preoperative bleeding disorder",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "gprf"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "GPRF12",
    "display" : "Endocarditis",
    "definition" : "This factor should be coded if endocarditis present at any time after the date and time of admission to the hospital and prior to OR Entry Date and Time, including situations where endocarditis was present after admission to the hospital where this operation was performed, and situations where endocarditis was present while the patient was hospitalized at another \"transferring facility\" that subsequently transferred the patient who ultimately arrived at this hospital in this same hospitalization.  Code this factor if endocarditis is diagnosed prior to OR Entry Date and Time, using the Duke Criteria for the Diagnosis of Infective Endocarditis (IE):  The definitive diagnosis of infective endocarditis requires one of the following four situations:  1) Histologic and/or microbiologic evidence of infection at surgery or autopsy such as positive valve culture or histology;  2) Two major criteria;  3) One major criterion and three minor criteria;  4) Five minor criteria.  The two major criteria are:  1) Blood cultures positive for IE 2) Evidence of endocardial involvement.  Blood cultures positive for IE requires:  1) Typical microorganism consistent with IE isolated from 2 separate blood cultures, as noted in number two below (viridans streptococci, Streptococcus bovis, Staphylococcus aureus, or HACEK group [HACEK, Haemophilus species {H. aprophilus and H. paraaphrophilus}, Actinobacillus actinoinycetemcomitans, Cardiobacterium hominis, Eikenella corrodens, and Kingella kingae.]) or (Community-acquired enterococci in the absence of a primary focus);  2) Microorganisms consistent with IE isolated from persistently positive blood cultures defined as:  (At least 2 positive cultures of blood samples obtained > 12 hours apart) or (All of 3 or a majority of 4 or more separate cultures of blood, the first and the last sample obtained > 1 hr apart);  3) Single blood culture positive for Coxiella burnetii or an antiphase I IgG antibody titer of >1 :800.  Evidence of endocardial involvement requires 1) Positive results of echocardiography for IE defined as:  (Oscillating intracardiac mass on the valve or supporting structures in the path of regurgitant jets or on implanted material in the absence of an alternative anatomic explanation) or (Abscess) or (New partial dehiscence of a valvar prosthesis) or 2) New valvar regurgitation (worsening or changing or preexisting murmur not sufficient).  The six minor criteria are:  1) Predisposing heart disease or injection drug use (IVDA);  2) Temperature of > 38C;  3) Vascular phenomenon (major arterial emboli, septic pulmonary infarcts, mycotic aneurysm, intracranial or conjunctival hemorrhage, Janeway's lesions);  4) Immunologic phenomenon (glomerulonephritis, Osler's nodes, Roth's spots, rheumatoid factor);  5) Microbiologic evidence (a positive blood culture that does not meet a major criterion as noted above) or serologic evidence of active infection with an organism consistent with IE;  6) Echocardiographic findings that are consistent with IE but do not meet a major criterion as noted above.  References:  1) Dhawan VK Infectious Endocarditis in Elderly Patients. Clin. Infect. Dis. 2002;34:806-812.  2) Durack DT, Lukes AS, Bright DK. New criteria for diagnosis of infective endocarditis: utilization of specific echocardiographic findings. Duke Endocarditis Service. Am. J. Med. 1994;96:200-209.  3) Li IS, Sexton DJ, Mick N, et al. Proposed modifications to the Duke criteria for the diagnosis of infective endocarditis. Clin. Infect. Dis. 2000;30:633-638. 4) http://gold.aecom.yu.edu/id/almanac/dukeendocarditis.htm, accessed July 5, 2006.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Infectious"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF13",
    "display" : "Sepsis",
    "definition" : "Sepsis ROOT Definition = Sepsis is defined as \"evidence of serious infection accompanied by a deleterious systemic response\".  Sepsis may be diagnosed by the presence of a Systemic Inflammatory Response Syndrome (SIRS) resulting from suspected or proven infection.  A systemic inflammatory response syndrome (SIRS) is present when at least two of the following criteria are present: hypo- or hyperthermia (>38.5 or <36.0), tachycardia or bradycardia, tachypnea, leukocytosis or leukopenia, and thrombocytopenia.  Code this factor if the patient has signs of sepsis within 48 hours of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Infectious"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF14",
    "display" : "Preoperative neurological deficit",
    "definition" : "Code this factor if the patient has any deficit of neurologic function identified by the care team (during the hospitalization of this operation prior to the time of OR Entry Date and Time).",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Neurological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF15",
    "display" : "Seizure within 48 hours prior to surgery",
    "definition" : "\"Seizure\" ROOT Definition = A seizure is defined as the clinical and/or electroencephalographic recognition of epileptiform activity.  Select this preoperative factor for any prior seizure during the 48 hours prior to surgery.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Neurological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF16",
    "display" : "Other preoperative noncardiac abnormality",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "gprf"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "GPRF17",
    "display" : "Other preoperative factors(s)",
    "definition" : "This patient has other preoperative factor(s) that are not on this list.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Other preoperative factors(s)"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF2",
    "display" : "Preoperative complete AV block",
    "definition" : "Arrhythmia-Atrioventricular conduction disorder, AV block, Third degree ROOT Definition = Third degree AV block is defined as the absence of AV node conduction.  This factor should be selected if it developed before OR Entry Date and Time and was present at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF3",
    "display" : "Preoperative arrhythmia",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "gprf"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "GPRF4",
    "display" : "Shock, Persistent at time of surgery",
    "definition" : "Shock ROOT Definition = Shock is defined as \"a state of inadequate tissue perfusion\".  A modern definition according to Simeone states that shock is a \"clinical condition characterized by signs and symptoms which arise when the cardiac output is insufficient to fill the arterial tree with blood under sufficient pressure to provide organs and tissues with adequate blood flow.\"  A historic definition according to Blalock in 1940 is that \"Shock is a peripheral circulatory failure, resulting from a discrepancy in the size of the vascular bed and the volume of the intravascular fluid\".  Code this factor if the patient had a metabolic acidosis with pH < 7.2 and/or Lactate > 4 mmol / liter at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF5",
    "display" : "Preoperative acidosis",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "gprf"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "GPRF6",
    "display" : "Preoperative pulmonary hypertension crises (PA pressure > systemic pressure)",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "gprf"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "GPRF7",
    "display" : "Mechanical ventilation to treat cardiorespiratory failure",
    "definition" : "This patient was supported with mechanical ventilation to treat cardiorespiratory failure during the hospitalization of this operation and prior to OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Respiratory"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF8",
    "display" : "Tracheostomy present",
    "definition" : "Code this factor if the patient has a tracheostomy present at the time of OR Entry Date and Time.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Respiratory"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "GPRF9",
    "display" : "Renal dysfunction",
    "definition" : "Renal dysfunction is defined as the oliguria with sustained urine output < 0.5 cc/kg/hr for 24 hours and/or a rise in creatinine > 1.5 times upper limits of normal for age, without needing dialysis (including peritoneal dialysis and/or hemodialysis) or hemofiltration.",
    "property" : [{
      "code" : "class",
      "valueString" : "gprf"
    },
    {
      "code" : "group",
      "valueString" : "Renal"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-AA-10",
    "display" : "Anal Atresia (imperforate anus)",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Anatomic Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-AA-20",
    "display" : "Congenital diaphragmatic hernia (CDH)",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Anatomic Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-AA-30",
    "display" : "Gastroschisis",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Anatomic Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-AA-40",
    "display" : "Hirschsprung's disease (Congenital aganglionic megacolon)",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Anatomic Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-AA-50",
    "display" : "Intestinal malrotation",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Anatomic Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-AA-60",
    "display" : "Omphalocele",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Anatomic Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-AA-70",
    "display" : "Tracheoesophageal fistula (TEF)",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Anatomic Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-10",
    "display" : "11p15.5",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-100",
    "display" : "2p21",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-110",
    "display" : "3p22",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-120",
    "display" : "45X0",
    "definition" : "Turner syndrome (45XO) is a chromosomal deletion abnormality, which occurs in 1:5000 live female births.  Although common in first trimester, most 45XO conceptuses are spontaneously aborted.  Affected individuals are missing one X chromosome.  The major features include short stature, primary amenorrhea due to ovarian dysgenesis, webbed neck, congenital lymphedema, and cubitus valgus.  Cardiovascular abnormalities occur in 20-40% of cases, the most common of which is coarctation of the aorta (70%).  Additional defects include bicommissural aortic valve, aortic stenosis, a spectrum of left-sided obstructive defects and/or hypoplastic defects, hypoplastic left heart syndrome; aortic dilation, dissection, and rupture.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-130",
    "display" : "47,XXY",
    "definition" : "Klinefelter, or 47XXY syndrome, is a sporadic chromosomal abnormality in which males have at least two X chromosomes and at least one Y chromosome.  Incidence is 1:500 males or 1:1000 births.  Klinefelter syndrome occurs usually in association with advanced maternal age at conception.  It is the most common sex chromosome disorder and the most common cause of hypogonadism and infertility.  Cardiovascular abnormalities in more than 50% of cases include mitral valve prolapse, varicose veins and deep venous thrombosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-140",
    "display" : "4p",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-150",
    "display" : "4p16",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-160",
    "display" : "5p",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-170",
    "display" : "6p12",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-180",
    "display" : "7q11",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-190",
    "display" : "7q11.23",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-20",
    "display" : "11q",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-200",
    "display" : "7q32",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-210",
    "display" : "7q34",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-220",
    "display" : "8q12",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-230",
    "display" : "Monosomy X",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-240",
    "display" : "TGFBR1 or 2",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-250",
    "display" : "Trisomy 08",
    "definition" : "Trisomy 8, or Warkany syndrome, is a chromosomal abnormality, which is a frequent cause of first trimester spontaneous abortions.  Complete Trisomy 8 is usually an early lethal disorder.  Incidence is 1:25,000-50,000 births.  Affected individuals have an extra (or third) copy of chromosome 8.  Cardiovascular abnormalities include septal defects and great vessel anomalies.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-260",
    "display" : "Trisomy 09",
    "definition" : "Trisomy 9, or Rethore syndrome, is a rare chromosomal abnormality, which is a frequent cause of first trimester spontaneous abortions.  Incidence is 1:100,000 births.  Affected individuals have an extra (or third) copy of chromosome 9.  Most affected individuals die during infancy or early childhood.  Cardiovascular abnormalities occur in 75% of cases and include VSD, ASD, PDA, valve defects, DORV, persistent left SVC, and endocardial fibroelastosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-270",
    "display" : "Trisomy 13",
    "definition" : "Patau or Bartholin-Patau syndrome, or Trisomy 13, is a chromosomal abnormality.  Incidence is 1:5000-10,000 births.  Sporadic cases occur usually in association with advanced maternal age at conception.  Affected individuals have an extra (or third) copy of chromosome 13.  More than 90% of individuals with Trisomy 13 die within their first days or weeks of life.  Only 5-10% survive beyond 1 year of age.  Cardiovascular abnormalities in 80% of cases include VSD, PDA, ASD; dextrocardia in more than 50% of cases; and anomalous pulmonary venous connection, overriding aorta, pulmonary stenosis, hypoplastic aorta, mitral valve atresia, aortic valve atresia, and bicuspid aortic valve in fewer than 50% of cases.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-280",
    "display" : "Trisomy 18",
    "definition" : "Edwards syndrome, or Trisomy 18, is a chromosomal abnormality.  Incidence is 1:3000-5000 births.  Sporadic cases of Edwards syndrome occur usually in association with advanced maternal age at conception.  Affected individuals have an extra (or third) copy of chromosome 18.  Approximately 50% of infants with Trisomy 18 die within the first week of life, approximately 40% die within the first month of life, only 5-10% survive beyond the first year.  Cardiovascular abnormalities in more than 50% of cases include VSD, ASD and PDA; bicuspid aortic and/or pulmonary valves, nodularity of valve leaflets, pulmonic stenosis, coarctation of the aorta in 10-50% of cases; and anomalous coronary artery, TGA, TOF, dextrocardia and aberrant subclavian artery in less than 10% of cases.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-290",
    "display" : "Trisomy 21",
    "definition" : "Down syndrome, or Trisomy 21, is the most frequent chromosomal abnormality.  Incidence is 1:600-1000 live births.  Sporadic cases of Down syndrome occur in strong association with advanced maternal age at conception.  Affected individuals have an extra (or third) copy of chromosome 21.  Cardiovascular abnormalities in 40-50% of cases, in decreasing order of frequency, include AVSD, VSD, TOF and PDA.  Left-sided obstructive defects, such as coarctation and aortic valve stenosis, are rare.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-30",
    "display" : "12p1.21",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-40",
    "display" : "12p12.1",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-50",
    "display" : "12q24",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-60",
    "display" : "15q21.1",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-70",
    "display" : "1q42.1",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-CA-80",
    "display" : "20p12",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-100",
    "display" : "Cri-du-chat syndrome",
    "definition" : "Cri-du-chat (cat cry), or LeJeune syndrome, is a chromosome deletion syndrome [mapped to 5p15.2].  Incidence is 1:20,000-50,000 births.  Cri-du-chat refers to the distinctive cry of children with this disorder, caused by abnormal larynx development.  Cardiovascular abnormalities in 30% of cases most commonly include VSD and ASD.  Rare defects include TOF and AVSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-110",
    "display" : "Deletion 10p syndrome",
    "definition" : "Deletions on the short arm of chromosome 10 are associated with septal defects, particularly ASDs, and DiGeorge/velocardiofacial 2 syndrome.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-120",
    "display" : "Deletion 8p syndrome",
    "definition" : "Deletions on the short arm of chromosome 8 are associated with ASD, AVSC, conotruncal abnormalities, pulmonic valve stenosis and Tetralogy of Fallot.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-150",
    "display" : "Edwards syndrome (Trisomy 18)",
    "definition" : "Edwards syndrome, or Trisomy 18, is a chromosomal abnormality.  Incidence is 1:3000-5000 births.  Sporadic cases of Edwards syndrome occur usually in association with advanced maternal age at conception.  Affected individuals have an extra (or third) copy of chromosome 18.  Approximately 50% of infants with Trisomy 18 die within the first week of life, approximately 40% die within the first month of life, only 5-10% survive beyond the first year.  Cardiovascular abnormalities in more than 50% of cases include VSD, ASD and PDA; bicuspid aortic and/or pulmonary valves, nodularity of valve leaflets, pulmonic stenosis, coarctation of the aorta in 10-50% of cases; and anomalous coronary artery, TGA, TOF, dextrocardia and aberrant subclavian artery in less than 10% of cases.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-160",
    "display" : "Ellis-van Creveld syndrome",
    "definition" : "Ellis-van Creveld syndrome, or chondroectodermal dysplasia, is an autosomal recessive condition [mapped to 4p16] of skeletal dysplasia.  Incidence is 1:60,000-200,000 births.  Major features include short stature of prenatal onset (short limbs), hypoplastic nails and dental anomalies, postaxial polydactyly, narrow thorax, and cardiac defects.  Cardiovascular abnormalities in more than 50% of cases most commonly include ASD or common atrium.  Additional defects include PDA, persistent left superior vena cava, hypoplastic left heart defects, coarctation of the aorta, TAPVC, and TGA.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-165",
    "display" : "Fetal alcohol syndrome (FAS)",
    "definition" : "Indicate whether the patient has a history of Fetal alcohol syndrome (FAS).  Fetal alcohol syndrome (FAS) is a condition that results from prenatal alcohol exposure.  FAS is a group of problems that can include mental retardation, birth defects, abnormal facial features, growth problems, problems with the central nervous system, trouble remembering and/or learning, vision or hearing problems, and behavior problems.  Mothers who consume large quantities of alcohol during pregnancy may have babies who are born with Fetal Alcohol Syndrome (or FAS).  A diagnosis of FAS is based on three factors: 1) prenatal and postnatal growth retardation; 2) central nervous system abnormalities, and, 3) abnormalities of the face.  Many of these children display significant disabilities, learning disorders, and emotional problems as they mature.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-166",
    "display" : "Fetal drug exposure",
    "definition" : "Indicate whether the patient has a history of Fetal drug exposure.  Fetal drug exposure is can lead to numerous problems including low birth weight, prematurity, small for Gestational Age (SGA), failure to Thrive (FTT), neurobehavioral symptoms, infectious diseases, and sudden Infant Death Syndrome (SIDS).",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-170",
    "display" : "Goldenhar syndrome",
    "definition" : "Goldenhar syndrome, also known as hemifacial microsomia, oculoauriculovertebral dysplasia or spectrum, and facioauriculovertebral sequence, is an autosomal dominant condition [mapped to 14q32].  Incidence is 1:3000-5000 births.  Cardiovascular abnormalities include VSD, PDA, TOF and coarctation",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-180",
    "display" : "Heterotaxy syndrome",
    "definition" : "Heterotaxy is synonymous with 'visceral heterotaxy' and 'heterotaxy syndrome'.  Heterotaxy is defined as an abnormality where the internal thoraco-abdominal organs demonstrate abnormal arrangement across the left-right axis of the body.  By convention, heterotaxy does not include patients with either the expected usual or normal arrangement of the internal organs along the left-right axis, also known as \"situs solitus\", nor patients with complete mirror-imaged arrangement of the internal organs along the left-right axis also known as \"situs inversus\".",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-20",
    "display" : "Apert syndrome",
    "definition" : "Apert syndrome, also known as Apert-Crouzon disease or Vogt cephalodactyly, is an autosomal dominant condition [mapped to 10q26] of acrocephalosyndactyly.  Incidence is 1:65,000-88,000 births; it occurs in strong association with advanced paternal age at conception.  Apert syndrome is similar to Crouzon and Pfeiffer syndromes.  Cardiovascular abnormalities include pulmonic stenosis, VSD, overriding aorta, and endocardial fibroelastosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-210",
    "display" : "Holt-Oram syndrome",
    "definition" : "Holt-Oram, or heart hand, syndrome is an autosomal dominant condition [mapped to 12q24.1].  Incidence is 1:100,000 births.  Holt-Oram syndrome was first described in 1960 by Holt and Oram who noted the association of radial anomalies with atrial septal defects.  Cardiovascular abnormalities in 75% of cases most commonly include ASD.  Additional defects include first degree AV block, bradycardia, fibrillation, AVSD, VSD, HLHS and PDA.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-220",
    "display" : "Jacobsen syndrome",
    "definition" : "Jacobsen syndrome is a chromosome deletion syndrome [mapped to 11q23].  Incidence is 1:100,000 births.  Associated cardiovascular abnormalities include VSD and ASD.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-230",
    "display" : "Kabuki syndrome",
    "definition" : "Kabuki, or Niikawa-Kuroki, syndrome is an autosomal dominant condition.  Incidence is 1:32,000 births.  Affected individuals have a facial appearance similar to Japanese Kabuki theatre actors.  Cardiovascular abnormalities in 50% of cases include ASD, VSD, coarctation of the aorta, bicuspid aortic valve, mitral valve prolapse, TOF, single ventricle with common atrium, DORV, TGA, and pulmonic, aortic and mitral valve stenoses.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-240",
    "display" : "Kartagener syndrome (Siewert syndrome) (Primary ciliary dyskinesia)",
    "definition" : "Kartagener syndrome, also known as Siewert syndrome or primary ciliary dyskinesia, is an autosomal recessive condition [mapped to 9p21-p13].  Incidence is 1:30,000 births.  Features include situs inversus and asplenia.  Cardiovascular abnormalities include dextrocardia.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-250",
    "display" : "Klinefelter syndrome (XXY Syndrome)",
    "definition" : "Klinefelter, or 47XXY syndrome, is a sporadic chromosomal abnormality in which males have at least two X chromosomes and at least one Y chromosome.  Incidence is 1:500 males or 1:1000 births.  Klinefelter syndrome occurs usually in association with advanced maternal age at conception.  It is the most common sex chromosome disorder and the most common cause of hypogonadism and infertility.  Cardiovascular abnormalities in more than 50% of cases include mitral valve prolapse, varicose veins and deep venous thrombosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-260",
    "display" : "LEOPARD syndrome",
    "definition" : "LEOPARD is an acronym for multiple Lentigines, Electrocardiographic conduction abnormalities, Ocular hypertelorism, Pulmonic stenosis, Abnormal genitalia, Retardation of growth, and sensorineural Deafness.  LEOPARD syndrome is an autosomal dominant condition [mapped to 12q24.1 & 3p25].  Cardiovascular abnormalities include pulmonic stenosis in 40% of cases, and hypertrophic cardiomyopathy in 20% of cases.  Additional defects include subaortic stenosis, complete heart block, bundle branch block, prolonged P-R and QRS, and abnormal P waves.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-270",
    "display" : "Loeys-Dietz syndrome",
    "definition" : "Loeys-Dietz syndrome is an autosomal dominant condition [mapped to 3p22 & 9q22].  Cardiovascular abnormalities include aortic and arterial aneurysms/dissections with tortuosity of the arteries, PDA, ASD, bicuspid aortic and pulmonic valves, and mitral valve prolapse.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-280",
    "display" : "Long QT syndrome (Ward Romano syndrome)",
    "definition" : "Long QT syndrome (LQTS), or Ward Romano syndrome, is an autosomal dominant condition [LQTS1 mapped to 11p15.5].  There are at least 11 known mutations for LQTS which have been mapped to at least 7 chromosomes.  Long QT syndrome is characterized by a prolonged QT interval on EKG and is associated with the risk of sudden cardiac death.  Incidence is 1:2000 births.  Symptoms include ventricular arrhythmias, recurrent syncope, ventricular fibrillation, torsade de pointes, and cardiac arrest.  Long QT syndrome (Ward Romano syndrome) is a ventricular tachycardia occurring in the setting of prolonged Q-T interval.  Long QT syndrome is a type of \"Channelopathy\".  A ventricular tachycardia due to a genetic ion-channel defect is also known as a \"Channelopathy\" or \"Ion channelopathy\".  This diagnosis is most commonly Long QT syndrome, but also includes Brugada syndrome, Jervell and Lange-Nielsen syndrome, Romano-Ward syndrome, Andersen syndrome, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-30",
    "display" : "Brugada syndrome (Sudden unexplained nocturnal death syndrome) (SUNDS)",
    "definition" : "Brugada syndrome, also known as sudden unexplained nocturnal death syndrome (SUNDS), is an autosomal dominant condition [mapped to 3p21, 3p22.3, 12p13.3 & 10p12], occurring in 1:2000 births.  Brugada syndrome is associated with the risk of sudden cardiac death.  Mean age of sudden death is approximately 40 years.  Symptoms include right bundle branch block and ST segment elevation on ECG, idiopathic ventricular fibrillation, and cardiac arrest.  Brugada syndrome, in its typical form is sinus rhythm with anterior raised ST segment in V1 and V2 due to a genetic ion-channel defect involving a sodium-channel defect isolated to SCN5A gene.  Brugada syndrome is a type of \"Channelopathy\".  A ventricular tachycardia due to a genetic ion-channel defect is also known as a \"Channelopathy\" or \"Ion channelopathy\".  This diagnosis is most commonly Long QT syndrome, but also includes Brugada syndrome, Jervell and Lange-Nielsen syndrome, Romano-Ward syndrome, Andersen syndrome, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-300",
    "display" : "Marfan-like syndrome",
    "definition" : "Marfan-like syndrome is a connective tissue disorder, resembling Marfan syndrome.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-310",
    "display" : "Mucopolysaccharidosis type IH (Hurler syndrome)",
    "definition" : "Hurler syndrome, also known as mucopolysaccharidosis type IH (MPS IH), is an autosomal recessive condition [mapped to 4p16.3].  Incidence is 1:100,000 births.  MPS is a lysosomal storage disease.  Affected individuals appear normal at birth; subtle changes may be evident during the first 6 months.  Survival beyond 10 years of age is unusual.  Cardiovascular abnormalities include valve anomalies, coronary artery narrowing, and mitral and atrial regurgitation.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-320",
    "display" : "Mucopolysaccharidosis type IH/S (Hurler-Scheie syndrome)",
    "definition" : "Hurler-Scheie syndrome, also known as mucopolysaccharidosis type IH/S (MPS IH/S), is an autosomal recessive disorder [mapped to 4p16.3].  Incidence is 1:500,000 births.  MPS is a lysosomal storage disease.  Onset of symptoms occurs between ages 3 and 8 years.  Survival to adulthood is typical.  Cardiovascular abnormalities include mitral valve anomalies.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-330",
    "display" : "Mucopolysaccharidosis type II (Hunter syndrome)",
    "definition" : "Hunter syndrome, also known as mucopolysaccharidosis type II (MPS 2), is an X-linked recessive disorder [mapped to Xq28].  Incidence is 1:100,000-170,000 births.  MPS is a lysosomal storage disease.  Individuals with Hunter syndrome appear normal at birth.  Symptoms emerge between ages 2 and 4.  Life expectancy is 10-20 years.  Cardiovascular abnormalities include valve anomalies, ischemic heart disease, ventricular hypertrophy and CHF.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-340",
    "display" : "Mucopolysaccharidosis type IS (Scheie syndrome)",
    "definition" : "Scheie syndrome, also known as mucopolysaccharidosis type IS (MPS IS), is an autosomal recessive disorder [mapped to 4p16.3], which occurs in 1:500,000 births.  Scheie syndrome is a lysosomal storage disease.  Survival to a late age is typical.  Cardiovascular abnormalities include aortic regurgitation, aortic and mitral valve abnormalities.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-350",
    "display" : "Noonan syndrome",
    "definition" : "Noonan syndrome is an autosomal dominant condition [mapped to 12q24.1].  Incidence is 1:1000-2500 births.  Major features include short stature, seen in about half, mental retardation (usually mild), characteristic facial features, a shield chest deformity, cubitus valgus, and a short webbed neck.  Cardiovascular abnormalities occur in at least 50% of cases and include pulmonary valve stenosis (75%) secondary to a dysplastic pulmonary valve with thickened valve leaflets, ASD (30%) usually associated with pulmonary stenosis, PDA (10%), VSD (10%), and hypertrophic cardiomyopathy (10-20%) that can involve both ventricles.  Rare lesions include TOF, coarctation of the aorta, subaortic stenosis, and Ebstein malformation.  Hypertrophic cardiomyopathy is observed in 10% to 20% and can involve both ventricles.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-360",
    "display" : "Patau syndrome (Trisomy 13)",
    "definition" : "Patau or Bartholin-Patau syndrome, or Trisomy 13, is a chromosomal abnormality.  Incidence is 1:5000-10,000 births.  Sporadic cases occur usually in association with advanced maternal age at conception.  Affected individuals have an extra (or third) copy of chromosome 13.  More than 90% of individuals with Trisomy 13 die within their first days or weeks of life.  Only 5-10% survive beyond 1 year of age.  Cardiovascular abnormalities in 80% of cases include VSD, PDA, ASD; dextrocardia in more than 50% of cases; and anomalous pulmonary venous connection, overriding aorta, pulmonary stenosis, hypoplastic aorta, mitral valve atresia, aortic valve atresia, and bicuspid aortic valve in fewer than 50% of cases.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-370",
    "display" : "Rethore syndrome (Trisomy 9)",
    "definition" : "Trisomy 9, or Rethore syndrome, is a rare chromosomal abnormality, which is a frequent cause of first trimester spontaneous abortions.  Incidence is 1:100,000 births.  Affected individuals have an extra (or third) copy of chromosome 9.  Most affected individuals die during infancy or early childhood.  Cardiovascular abnormalities occur in 75% of cases and include VSD, ASD, PDA, valve defects, DORV, persistent left SVC, and endocardial fibroelastosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-390",
    "display" : "Rubinstein-Taybi syndrome",
    "definition" : "Rubinstein-Taybi or Rubinstein syndrome is an autosomal dominant condition [mapped to 16p13.3 & 22q13].  Incidence is 1:100,000-125,000 births.  Cardiovascular abnormalities occur in 30% of cases and include ASD, VSD and PDA.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-40",
    "display" : "Cardiofaciocutaneous syndrome",
    "definition" : "Cardiofaciocutaneous syndrome (CFC) is a sporadic condition [mapped to 7q34] affecting the heart, face, skin and hair.  Incidence is 1:333,000-500,000 births.  CFC is similar to Noonan and Costello syndromes.  Cardiovascular abnormalities include pulmonary valve stenosis, ASD and hypertrophic cardiomyopathy.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-400",
    "display" : "Short QT syndrome",
    "definition" : "Short QT syndrome appears to be an autosomal dominant condition [mapped to 7q35-q36, 11p15.5, 17q23.1-q24.2].  Short QT syndrome is characterized by a shortened QT interval on EKG and is associated with the risk of sudden cardiac death.  Symptoms include episodes of syncope, palpitations, paroxysmal atrial fibrillation, ventricular fibrillation, and cardiac arrest.  Short QT syndrome is a ventricular tachycardia occurring in the setting of short Q-T interval.  Short QT syndrome is a type of \"Channelopathy\".  A ventricular tachycardia due to a genetic ion-channel defect is also known as a \"Channelopathy\" or \"Ion channelopathy\".  This diagnosis is most commonly Long QT syndrome, but also includes Brugada syndrome, Jervell and Lange-Nielsen syndrome, Romano-Ward syndrome, Andersen syndrome, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-410",
    "display" : "Situs inversus",
    "definition" : "Situs inversus is defined as an abnormality where the internal thoraco-abdominal organs demonstrate mirror-imaged atrial arrangement across the left-right axis of the body.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-420",
    "display" : "Smith-Lemli-Opitz syndrome",
    "definition" : "Smith-Lemli-Opitz syndrome is an autosomal recessive condition [mapped to 11q12-q13].  Incidence is 1:20,000-40,000 births.  Cardiovascular abnormalities include VSD, ASD, coarctation of the aorta, and PDA.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-440",
    "display" : "VACTERL syndrome (VACTER/VATER/VATERR syndrome)",
    "definition" : "VACTERL syndrome is a nonrandom association of defects, including Vertebral anomalies, Anal atresia, Cardiovascular anomalies, Tracheoesophageal fistula, Esophageal atresia, Renal and/or Radial anomalies, and Limb anomalies.  Diagnosis is made if 3/7 defects are present.  Incidence is 1:6000 births.  Cardiovascular malformations include VSD, TOF, TGA and PDA.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-450",
    "display" : "VACTERL-H syndrome (VATER association with hydrocephalus) (Briard-Evans syndrome)",
    "definition" : "VACTERL-H association is also known as VATER association with hydrocephalus, Briard-Evans syndrome, David-O'Callaghan syndrome (autosomal recessive type), and Hunter-MacMurray syndrome (X-linked type) [mapped to 10q23.31 & Xp22.31].  VACTERL-H is an autosomal recessive condition; some X-linked cases have been reported.  VACTERL-H is a nonrandom association of defects, including Vertebral anomalies, Anal atresia, Cardiac malformations, TracheoEsophageal fistula, Renal anomalies, Limb anomalies and Hydrocephalus.  Diagnosis is made if 3/7 defects are present with hydrocephalus.  Cardiovascular abnormalities include VSD, TOF, TGA and PDA.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-460",
    "display" : "Warkany syndrome (Trisomy 8)",
    "definition" : "Trisomy 8, or Warkany syndrome, is a chromosomal abnormality, which is a frequent cause of first trimester spontaneous abortions.  Complete Trisomy 8 is usually an early lethal disorder.  Incidence is 1:25,000-50,000 births.  Affected individuals have an extra (or third) copy of chromosome 8.  Cardiovascular abnormalities include septal defects and great vessel anomalies.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-480",
    "display" : "Wolff-Parkinson-White syndrome (WPW syndrome)",
    "definition" : "Wolff-Parkinson-White (WPW) syndrome is a condition in which there is an extra electrical pathway or circuit in the heart.  Incidence is 1:500.  WPW is one of the most common causes of tachycardia in infants and children.  Symptoms may include chest pain, syncope, palpitations, shortness of breath, and can lead to episodes of tachycardia with heart rate >230 bpm.  The \"Wolff-Parkinson-White Syndrome (WPW syndrome)\" is an accessory connection-mediated tachycardia\".  An \"accessory connection-mediated tachycardia\" is a tachycardia secondary to accessory connection(s) or pathway(s).  Typical accessory pathways are extra nodal pathways that connect the myocardium of the atrium and the ventricle across the AV groove and are classified by location, type of conduction (decremental versus nondecremental), and whether they are capable of anterograde (manifest, demonstrating pre-excitation on standard ECG) or retrograde (concealed) conduction, or both.  The \"Wolff-Parkinson-White Syndrome (WPW syndrome)\" diagnosis is reserved for patients who have both pre-excitation on ECG (manifest conduction) and tachyarrhythmias.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-490",
    "display" : "Wolf-Hirschhorn syndrome",
    "definition" : "Wolf-Hirschhorn syndrome is a chromosome deletion syndrome [mapped to 4p16.3].  Incidence is 1:96,000 births.  Affected individuals have a 35% risk of mortality prior to age 2.  Cardiovascular abnormalities include ASD and VSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-50",
    "display" : "Carpenter syndrome",
    "definition" : "Carpenter syndrome is an autosomal recessive condition [mapped to 6p11] of acrocephalopolysyndactyly, type II.  Incidence is 1:1,000,000 births.  Cardiovascular abnormalities in 50% of cases include ASD, VSD, pulmonic stenosis, TOF, TGA and PDA.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-510",
    "display" : "Other syndromic abnormality(ies)",
    "definition" : "This patient has other syndromic abnormality(ies) that are not on this list.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-60",
    "display" : "Cat-eye syndrome",
    "definition" : "The cat-eye syndrome, or Schmid-Fraccaro syndrome, is an autosomal dominant condition [mapped to 22q11], associated with coloboma of the iris.  Incidence is 1:50,000-150,000 births.  The classic pattern of malformations includes mild mental deficiency, hypertelorism, down-slanting palpebral fissures, iris coloboma, pre-auricular pits or tags, and anal and renal malformations.  Cardiovascular abnormalities in 40% of cases include TAPVC, ASD, VSD, persistent left superior vena cava, TOF, interruption of the inferior vena cava, and tricuspid atresia.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-70",
    "display" : "CHARGE Association",
    "definition" : "CHARGE syndrome, or Hall-Hittner syndrome, is an autosomal dominant condition [mapped to 8q12.1 & 7q21.11]; some sporadic cases have been reported.  Incidence is 1:8500-10,000 births.  CHARGE syndrome is a nonrandom association of congenital anomalies which may include Coloboma, Heart defects, Atresia choanae, Retarded growth and development and/or central nervous system anomalies, Genital anomalies and/or hypogonadism and Ear anomalies and/or deafness.  Diagnosis is made if 4/6 major (or 3 major & 3 minor) defects are present.  Heart defects are present in 75% to 80% of cases.  Of those with heart defects, most have conotruncal anomalies (TOF, DORV, truncus arteriosus) and aortic arch anomalies (vascular ring, aberrant subclavian artery, IAA, coarctation of the aorta, right aortic arch, aortic valve stenosis).  Other cardiovascular abnormalities include PDA, AVSD, VSD, and ASD.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-80",
    "display" : "Cornelia de Lange syndrome",
    "definition" : "Cornelia de Lange syndrome (CDLS), also known as de Lange or Brachmann-de Lange syndrome, is an autosomal dominant condition [mapped to 5p13.1, Xp11.22-11.21 & 10q25]; some X-linked and sporadic cases have been reported.  Incidence is 1:10,000-30,000 births.  Cardiovascular abnormalities in 25% of cases most commonly include VSD and ASD.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA-2010-S-90",
    "display" : "Costello syndrome",
    "definition" : "Costello syndrome is an autosomal dominant condition [mapped to 12p12.1 & 11p15.5]; some sporadic cases have been reported.  Incidence is 1:1,000,000 births.  Cardiovascular abnormalities include ASD, VSD, pulmonic stenosis, mitral valve prolapse, hypertrophic cardiomyopathy and arrhythmias.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA1",
    "display" : "Heterotaxy syndrome, Asplenia syndrome",
    "definition" : "\"Asplenia syndrome\" can be defined as a subset of heterotaxy with components of bilateral right-sidedness, usually associated with absence of the spleen.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA10",
    "display" : "Williams syndrome (Williams-Beuren syndrome)",
    "definition" : "Williams syndrome, or Williams-Beuren syndrome, is an autosomal dominant condition [mapped to 7q11.23].  Incidence is 1:7500 births.  Williams syndrome was initially described by Williams and colleagues in four unrelated children with mental retardation, an unusual facial appearance, and supravalvar stenosis.  Cardiovascular abnormalities occur in at least 50% of cases and include supravalvar aortic stenosis, bicuspid aortic valve, mitral valve prolapse, mitral regurgitation, coronary artery stenosis, pulmonary valve stenosis, ASD, VSD and peripheral pulmonary artery stenosis.  Supravalvar aortic stenosis is the most frequent single defect, but any of the systemic or pulmonary arteries can be affected.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA17",
    "display" : "Marfan syndrome",
    "definition" : "Marfan syndrome is an autosomal dominant condition [mapped to 15q21.1].  Incidence is 1:5000 births.  Marfan syndrome is the most common connective tissue disorder, and is associated with the risk of sudden cardiac death.  Cardiovascular abnormalities include aortic root dilation, aortic dissection and rupture, aortic regurgitation, ascending aortic aneurysm, mitral valve prolapse, mitral regurgitation, tricuspid valve prolapse, premature calcification of the mitral annulus, pulmonary artery dilatation and CHF.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA2",
    "display" : "Heterotaxy syndrome, Polysplenia syndrome",
    "definition" : "\"Polysplenia syndrome\" can be defined as a subset of heterotaxy with components of bilateral left-sidedness, usually associated with multiple spleens.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA29",
    "display" : "Turner syndrome (45XO)",
    "definition" : "Turner syndrome (45XO) is a chromosomal deletion abnormality, which occurs in 1:5000 live female births.  Although common in first trimester, most 45XO conceptuses are spontaneously aborted.  Affected individuals are missing one X chromosome.  The major features include short stature, primary amenorrhea due to ovarian dysgenesis, webbed neck, congenital lymphedema, and cubitus valgus.  Cardiovascular abnormalities occur in 20-40% of cases, the most common of which is coarctation of the aorta (70%).  Additional defects include bicommissural aortic valve, aortic stenosis, a spectrum of left-sided obstructive defects and/or hypoplastic defects, hypoplastic left heart syndrome; aortic dilation, dissection, and rupture.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA4",
    "display" : "Alagille syndrome (intrahepatic biliary duct agenesis)",
    "definition" : "Alagille syndrome, or Alagille-Watson syndrome, is an autosomal dominant condition [mapped to 20p12 & 1p13-p11] of intrahepatic biliary duct agenesis or arteriohepatic dysplasia.  Incidence is 1:70,000 births.  The 20-year predicted life expectancy is 75% for all patients, 80% for those not requiring a liver transplant, and 60% for those requiring a liver transplant.  Typical manifestations include intrahepatic cholestasis, distinctive facies, anterior chamber abnormalities of the eye, and butterfly hemiverterbrae.  The most common cardiovascular abnormality is peripheral pulmonary artery stenosis.  Additional defects include ASD, VSD, coarctation of the aorta and TOF. .",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA5",
    "display" : "22q11 deletion",
    "definition" : "Deletions or mutations  involving the long arm of chromosome 22 (critical region 22q11.2) are associated with the DiGeorge sequence, velocardiofacial syndrome, conotruncal face anomaly syndrome, CATCH 22, and some isolated conotruncal malformations.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA6",
    "display" : "Other chromosomal abnormality",
    "definition" : "This patient has other chromosomal abnormality(ies) that are not on this list.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Chromosomal Abnormality"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA7",
    "display" : "Fetal rubella syndrome (Congenital rubella syndrome)",
    "definition" : "Indicate whether the patient has a history of maternal rubella virus infection during first trimester of pregnancy.  Fetal rubella syndrome is associated with PDA, peripheral pulmonary stenosis, fibromuscular and intimal proliferation of medium and large arteries, VSD and ASD.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA8",
    "display" : "DiGeorge syndrome (velocardiofacial syndrome) (conotruncal anomaly face syndrome) (22q11 deletion)",
    "definition" : "DiGeorge syndrome, also known as Shprintzen, Takao, velocardiofacial, or conotruncal anomaly face syndrome, is an autosomal dominant condition [mapped to 22q11.2].  Incidence is 1:4000 births.  Cardiovascular anomalies are seen in association with hypoplasia or aplasia of the thymus and parathyroid gland, which are derivatives of pharyngeal pouches III and IV, and which can result in abnormalities of the immune system and calcium metabolism respectively.   Cardiovascular abnormalities include conotruncal or outflow tract defects of the heart, such as tetralogy of Fallot, truncus arteriosus, and interrupted aortic arch, particularly type B IAA.  Additional defects include VSD, right aortic arch, aberrant right subclavian artery, and PDA.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "NCA9",
    "display" : "Down syndrome (Trisomy 21)",
    "definition" : "Down syndrome, or Trisomy 21, is the most frequent chromosomal abnormality.  Incidence is 1:600-1000 live births.  Sporadic cases of Down syndrome occur in strong association with advanced maternal age at conception.  Affected individuals have an extra (or third) copy of chromosome 21.  Cardiovascular abnormalities in 40-50% of cases, in decreasing order of frequency, include AVSD, VSD, TOF and PDA.  Left-sided obstructive defects, such as coarctation and aortic valve stenosis, are rare.",
    "property" : [{
      "code" : "class",
      "valueString" : "nca"
    },
    {
      "code" : "group",
      "valueString" : "Syndrome"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-1010",
    "display" : "Fontan, TCPC, External conduit, Nonfenestrated",
    "definition" : "Total cavopulmonary connection using an external conduit to connect the infradiaphragmatic systemic venous return to the pulmonary artery, with no fenestration.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-1035",
    "display" : "Ventricular septation",
    "definition" : "Creation of a prosthetic ventricular septum. Surgical procedure used to septate univentricular hearts with two atrioventricular valves. Additional procedures, such as resection of subpulmonic stenosis, should be listed separately.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-1123",
    "display" : "Arterial switch procedure + Aortic arch repair",
    "definition" : "Concomitant arterial switch operation and repair of the aortic arch in patients with transposition of the great arteries with intact ventricular septum and associated coarctation of the aorta or interrupted aortic arch.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-1125",
    "display" : "Arterial switch procedure and VSD repair + Aortic arch repair",
    "definition" : "Concomitant arterial switch operation with VSD closure and repair of aortic arch in patients with transposition of the great arteries with VSD and associated coarctation of the aorta or interrupted aortic arch.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-1305",
    "display" : "Anomalous aortic origin of coronary artery from aorta (AAOCA) repair",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-1365",
    "display" : "Aortopexy",
    "definition" : "Surgical fixation of the aorta to another structure (usually the posterior aspect of the sternum) to relieve compression on another vessel or structure (e.g., trachea).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2095",
    "display" : "Shunt, Reoperation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2100",
    "display" : "Aortic stenosis, Subvalvar, Repair, With myectomy for IHSS",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2110",
    "display" : "ASD repair, Patch + PAPVC repair",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2120",
    "display" : "PAPVC repair, Baffle redirection to left atrium with systemic vein translocation (Warden) (SVC sewn to right atrial appendage)",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2130",
    "display" : "Superior Cavopulmonary anastomosis(es) + PA reconstruction",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2140",
    "display" : "Hybrid approach \"Stage 2\", Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding + Aortic arch repair (Norwood [Stage 1] + Superior Cavopulmonary anastomosis(es) + PA Debanding)",
    "definition" : "A \"Hybrid Procedure\" is defined as a procedure that combines surgical and transcatheter interventional approaches. The term \"Hybrid approach\" is used somewhat differently than the term \"Hybrid Procedure\". A \"Hybrid approach\" is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as \"Hybrid approach\" are truly \" Hybrid Procedures\". It should be acknowledged that a Hybrid approach \"Stage 2\" (Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding, with or without Aortic arch repair) gets its name not because it has any actual hybrid elements, but because it is part of a planned staged approach that is typically commenced with a hybrid procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2150",
    "display" : "Hybrid approach \"Stage 2\", Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding + Without aortic arch repair",
    "definition" : "A \"Hybrid Procedure\" is defined as a procedure that combines surgical and transcatheter interventional approaches. The term \"Hybrid approach\" is used somewhat differently than the term \"Hybrid Procedure\". A \"Hybrid approach\" is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as \"Hybrid approach\" are truly \" Hybrid Procedures\". It should be acknowledged that a Hybrid approach \"Stage 2\" (Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding, with or without Aortic arch repair) gets its name not because it has any actual hybrid elements, but because it is part of a planned staged approach that is typically commenced with a hybrid procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2160",
    "display" : "Hybrid Approach \"Stage 1\", Application of RPA & LPA bands",
    "definition" : "A \"Hybrid Procedure\" is defined as a procedure that combines surgical and transcatheter interventional approaches. The term \"Hybrid approach\" is used somewhat differently than the term \"Hybrid Procedure\". A \"Hybrid approach\" is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as \"Hybrid approach\" are truly \" Hybrid Procedures\".",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2170",
    "display" : "Hybrid Approach \"Stage 1\", Stent placement in arterial duct (PDA)",
    "definition" : "A \"Hybrid Procedure\" is defined as a procedure that combines surgical and transcatheter interventional approaches. The term \"Hybrid approach\" is used somewhat differently than the term \"Hybrid Procedure\". A \"Hybrid approach\" is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as \"Hybrid approach\" are truly \"Hybrid Procedures\".",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2180",
    "display" : "Hybrid Approach \"Stage 1\", Stent placement in arterial duct (PDA) + application of RPA & LPA bands",
    "definition" : "A \"Hybrid Procedure\" is defined as a procedure that combines surgical and transcatheter interventional approaches. The term \"Hybrid approach\" is used somewhat differently than the term \"Hybrid Procedure\". A \"Hybrid approach\" is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as \"Hybrid approach\" are truly \" Hybrid Procedures\".",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2190",
    "display" : "Aortic root translocation over left ventricle (Including Nikaidoh procedure)",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2200",
    "display" : "TAPVC repair + Shunt - systemic-to-pulmonary",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2210",
    "display" : "TGA, Other procedures (Kawashima, LV-PA conduit, other)",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2220",
    "display" : "Truncus + Interrupted aortic arch repair (IAA) repair",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2230",
    "display" : "Valve replacement, Common atrioventricular valve",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2240",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Aortic",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2250",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Common atrioventricular valve",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2260",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Mitral",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2270",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Pulmonic",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2280",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Tricuspid",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2290",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Truncal valve",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2300",
    "display" : "Valvuloplasty, Common atrioventricular valve",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2310",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Aortic - with Ross procedure",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2320",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Aortic - with Ross-Konno procedure",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2330",
    "display" : "Superior cavopulmonary anastomosis(es) (Glenn or HemiFontan) + Atrioventricular valvuloplasty",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2340",
    "display" : "Fontan + Atrioventricular valvuloplasty",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2350",
    "display" : "Explantation of pacing system",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2360",
    "display" : "ECMO cannulation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Mechanical Support"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2370",
    "display" : "ECMO decannulation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Mechanical Support"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2380",
    "display" : "VAD implantation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Mechanical Support"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2390",
    "display" : "VAD explantation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Mechanical Support"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2410",
    "display" : "Cardiovascular catheterization procedure, Therapeutic",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2420",
    "display" : "Echocardiography procedure, Sedated transesophageal echocardiogram",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Anesthetic procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2430",
    "display" : "Echocardiography procedure, Sedated transthoracic echocardiogram",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Anesthetic procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2435",
    "display" : "Non-cardiovascular, Non-thoracic procedure on cardiac patient with cardiac anesthesia",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Anesthetic procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2440",
    "display" : "Radiology procedure on cardiac patient, Cardiac Computerized Axial Tomography (CT Scan)",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Anesthetic procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2450",
    "display" : "Radiology procedure on cardiac patient, Cardiac Magnetic Resonance Imaging (MRI)",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Anesthetic procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2460",
    "display" : "Radiology procedure on cardiac patient, Diagnostic radiology",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Anesthetic procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2470",
    "display" : "Radiology procedure on cardiac patient, Non-Cardiac Computerized Tomography (CT) on cardiac patient",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Anesthetic procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2480",
    "display" : "Radiology procedure on cardiac patient, Non-cardiac Magnetic Resonance Imaging (MRI) on cardiac patient",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Anesthetic procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2490",
    "display" : "Radiology procedure on cardiac patient, Therapeutic radiology",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Anesthetic procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2500",
    "display" : "Cardiovascular catheterization procedure, Diagnostic",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2510",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Hemodynamic data obtained",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2520",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Angiographic data obtained",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2530",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Transluminal test occlusion",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2540",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Hemodynamic alteration",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2550",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Electrophysiology alteration",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2580",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Septostomy",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2590",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2630",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2640",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2650",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter Fontan completion",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2660",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2670",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Adjunctive therapy",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2680",
    "display" : "Cardiovascular electrophysiological catheterization procedure",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC-2010-2690",
    "display" : "Cardiovascular electrophysiological catheterization procedure, Therapeutic ablation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC1",
    "display" : "PFO, Primary closure",
    "definition" : "Suture closure of patent foramen ovale (PFO).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC10",
    "display" : "ASD repair, Primary closure",
    "definition" : "Suture closure of secundum (most frequently), coronary sinus, sinus venosus or common atrium ASD.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC101",
    "display" : "Congenitally corrected TGA repair, Atrial switch and ASO (double switch)",
    "definition" : "Repair of congenitally corrected TGA by concomitant atrial switch (Mustard or Senning) and arterial switch operation. VSD closure is usually performed as well; this should be coded separately.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC102",
    "display" : "Congenitally corrected TGA repair, Atrial switch and Rastelli",
    "definition" : "Repair of congenitally corrected TGA by concomitant atrial switch (Mustard or Senning) and VSD closure to the aortic valve with placement of an RV-to-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC103",
    "display" : "Congenitally corrected TGA repair, VSD closure",
    "definition" : "Repair of congenitally corrected TGA by VSD closure only.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC104",
    "display" : "Congenitally corrected TGA repair, VSD closure and LV to PA conduit",
    "definition" : "Repair of congenitally corrected TGA by VSD closure and placement of an LV-to-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC105",
    "display" : "Congenitally corrected TGA repair, Other",
    "definition" : "Any procedures for correction of CCTGA not otherwised specified in other listed procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC107",
    "display" : "Arterial switch operation (ASO)",
    "definition" : "Arterial switch operation is used for repair of transposition of the great arteries (TGA). The pulmonary artery and aorta are transected and translocated so that the pulmonary artery arises from the right ventricle and the aorta from the left ventricle. Coronary artery transfer is also accomplished.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC108",
    "display" : "Arterial switch operation (ASO) and VSD repair",
    "definition" : "Arterial switch operation is used for repair of transposition of the great arteries (TGA). The pulmonary artery and aorta are transected and translocated so that the pulmonary artery arises from the right ventricle and the aorta from the left ventricle. Coronary artery transfer is also accomplished. The VSD is closed, usually with a patch.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC109",
    "display" : "Senning",
    "definition" : "Atrial baffle procedure for rerouting of venous flow in TGA effecting a \"physiological repair\". The caval flow is directed behind the baffle to the mitral valve, left ventricle and pulmonary artery while the pulmonary venous flow is directed in front of the baffle to the tricuspid valve, right ventricle, and aorta. The Senning procedure uses atrial wall to construct the baffle.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC11",
    "display" : "ASD repair, Patch",
    "definition" : "Patch closure (using any type of patch material) of secundum, coronary sinus, or sinus venosus ASD.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC111",
    "display" : "Rastelli",
    "definition" : "Most often used for patients with TGA-VSD and significant LVOTO, the Rastelli operation consists of an LV-to-aorta intraventricular baffle closure of the VSD and placement of an RV-to-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC112",
    "display" : "REV",
    "definition" : "The Lecompte (REV) intraventricular repair is designed for patients with abnormalities of ventriculoarterial connection in whom a standard intraventricular tunnel repair cannot be performed. It is also suitable for patients in whom an arterial switch procedure with tunneling of the VSD to the pulmonary artery cannot be performed because of pulmonary (left ventricular outflow tract) stenosis. A right ventriculotomy incision is made. The infundibular (conal) septum, located between the two semilunar valves, is aggressively resected if its presence interferes with the construction of a tunnel from the VSD to the aorta. The VSD is then tunneled to the aorta. The decision to perform or not to perform the Lecompte maneuver should be made at the beginning of the operation. If the Lecompte maneuver is not performed the pulmonary artery is translocated to the right ventricular outflow tract on the side of the aorta that provides the shortest route. (When the decision to perform the Lecompte maneuver has been made, the great vessels are transected and this maneuver is performed at the beginning of the operation.) The pulmonary artery orifice is then closed. The aorta, if it had been transected during the performance of the Lecompte maneuver, is then reconstructed. A vertical incision is made on the anterior aspect of the main pulmonary artery. The posterior margin of the pulmonary artery is sutured to the superior aspect of the vertical right ventriculotomy incision. A generous patch of autologous pericardium is used to close the inferior portion of the right ventriculotomy and the anterior portion of the pulmonary artery. A monocusp pericardial valve is inserted extemporaneously.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC113",
    "display" : "TGA, Other procedures (Nikaido, Kawashima, LV-PA conduit, other)",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "PROC114",
    "display" : "DORV, Intraventricular tunnel repair",
    "definition" : "Repair of DORV using a tunnel closure of the VSD to the aortic valve. This also includes the posterior straight tunnel repair of Kawashima",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "DORV"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC116",
    "display" : "DOLV repair",
    "definition" : "Because of the morphologic variability of DOLV, there are many approaches to repair, including: intraventricular tunnel repair directing the VSD to the pulmonary valve, the REV procedure, or the Rastelli procedure. In the case of DOLV use this code for tunnel closure to the pulmonary valve. If the REV or Rastelli procedures are performed then use those respective codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "DOLV"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC117",
    "display" : "Anomalous origin of coronary artery from pulmonary artery repair",
    "definition" : "Repair of anomalous origin of the coronary artery (any) from the pulmonary artery, by any technique (ligation, translocation with aortic implantation, Takeuchi operation, bypass graft). If additional technique information may be supplied by another procedure code, please list separately (for example, bypass graft).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC118",
    "display" : "Coarctation repair, End to end",
    "definition" : "Repair of coarctation of aorta by excision of the coarctation segment and end-to-end circumferential anastomosis of the aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC119",
    "display" : "Coarctation repair, End to end, Extended",
    "definition" : "Repair of coarctation of the aorta by excision of the coarctation segment and end-to-end anastomosis of the oblique ends of the aorta, creating an extended anastomosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC12",
    "display" : "ASD repair, Device",
    "definition" : "Closure of any type ASD (including PFO) using a device.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC120",
    "display" : "Coarctation repair, Subclavian flap",
    "definition" : "Repair of coarctation of the aorta by ligating, dividing, and opening the subclavian artery, incising the coarctation site, and folding down the subclavian artery onto the incision in the aorta, suturing the subclavian \"flap\" in place, creating a roof over the area of the previous coarctation.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC121",
    "display" : "Coarctation repair, Patch aortoplasty",
    "definition" : "Repair of coarctation of the aorta by incising the coarctation site with placement of a patch sutured in place longitudinally along the aortotomy edge.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC122",
    "display" : "Coarctation repair, Interposition graft",
    "definition" : "Repair of coarctation of the aorta by resection of the coarctation segment and placement of a prosthetic tubular interposition graft anastomosed circumferentially to the cut ends of the aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC123",
    "display" : "Coarctation repair, Other",
    "definition" : "Any repair of coarctation not specified in procedure codes. This may include, for example, a combination of two approaches for coarctation repair or extra-anatomic bypass graft, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC125",
    "display" : "Aortic arch repair",
    "definition" : "Aortic arch repair, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC126",
    "display" : "Coronary artery fistula ligation",
    "definition" : "Coronary artery fistula repair using any technique. If additional technique information may be supplied by another procedure code, please list separately (e.g., bypass graft).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC127",
    "display" : "Coronary artery bypass",
    "definition" : "Coronary artery bypass graft procedure, any technique (with or without CPB, venous or arterial graft, one or more grafts, etc.), for any coronary artery pathology (coronary arterial fistula, aneurysm, coronary bridging, atresia of left main, acquired coronary artery disease, etc.).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC128",
    "display" : "Coronary artery procedure, Other",
    "definition" : "Any coronary artery procedure not specifically listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC129",
    "display" : "Interrupted aortic arch repair",
    "definition" : "Repair of interrupted aortic arch (any type) by any technique (direct anastomosis, prosthetic graft, etc). Does not include repair of IAA-VSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC13",
    "display" : "ASD, Common atrium (single atrium), Septation",
    "definition" : "Septation of common (single) atrium using any type patch material.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC130",
    "display" : "PDA closure, Surgical",
    "definition" : "Closure of a PDA by any surgical technique (ligation, division, clip) using any approach (i.e., thoracotomy, thoracoscopic, etc).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC131",
    "display" : "PDA closure, Device",
    "definition" : "Closure of a PDA by device using transcatheter techniques.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC133",
    "display" : "Vascular ring repair",
    "definition" : "Repair of vascular ring (any type, except pulmonary artery sling) by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC134",
    "display" : "Pulmonary artery sling repair",
    "definition" : "Pulmonary artery sling repair by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC135",
    "display" : "Aortic aneurysm repair",
    "definition" : "Aortic aneurysm repair by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC136",
    "display" : "Aortic dissection repair",
    "definition" : "Aortic dissection repair by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC137",
    "display" : "Lung biopsy",
    "definition" : "Lung biopsy, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC138",
    "display" : "Transplant, lung(s)",
    "definition" : "Lung or lobe transplantation of any type.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC139",
    "display" : "Lung procedure, Other",
    "definition" : "Included in this procedure code would be any lung procedure other than transplant, such as, but not limited to: pneumonectomy (left or right), lobectomy (any lobe), bilobectomy (two lobes), segmental lung resection (any segment), or wedge resection.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC14",
    "display" : "ASD creation/enlargement",
    "definition" : "Creation of an atrial septal defect or enlargement of an existing atrial septal defect using a variety of modalities including balloon septostomy, blade septostomy, or surgical septectomy. Creation may be accomplished with or without use of cardiopulmonary bypass.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC140",
    "display" : "Pectus repair",
    "definition" : "Repair of pectus excavatum or carinatum by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC141",
    "display" : "Tracheal procedure",
    "definition" : "Any tracheal procedure, including but not limited to relief of tracheal stenosis (any means including pericardial graft, autograft insertion, homograft insertion, resection with reanastomosis, rib cartilage insertion, or slide tracheoplasty). Tracheal stent placement or balloon dilation should be coded separately.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic and Mediastinal Disease"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC142",
    "display" : "Pacemaker implantation, Permanent",
    "definition" : "Implantation of a permanent pacemaker of any type (e.g., single-chamber, dual-chamber, atrial antitachycardia), with any lead configuration or type (atrial, ventricular, atrial and ventricular, transvenous, epicardial, transmural), by any technique (sternotomy, thoracotomy etc).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC143",
    "display" : "Pacemaker procedure",
    "definition" : "Any revision to a previously placed pacemaker system including revisions to leads, generators, pacemaker pockets. This may include explantation of pacemakers or leads as well.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC144",
    "display" : "ICD (AICD) implantation",
    "definition" : "Implantation of an (automatic) implantable cardioverter defibrillator system.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC145",
    "display" : "ICD (AICD) ([automatic] implantable cardioverter defibrillator) procedure",
    "definition" : "Any revision to a previously placed AICD including revisions to leads, pads, generators, pockets. This may include explantation procedures as well.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC146",
    "display" : "Arrhythmia surgery - atrial, Surgical Ablation",
    "definition" : "Surgical ablation (any type) of any atrial arrhythmia.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC147",
    "display" : "Arrhythmia surgery - ventricular, Surgical Ablation",
    "definition" : "Surgical ablation (any type) of any ventricular arrhythmia.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC148",
    "display" : "ASD creation, Balloon septostomy (BAS) (Rashkind)",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "PROC149",
    "display" : "ASD creation, Blade septostomy",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "PROC15",
    "display" : "ASD partial closure",
    "definition" : "Intentional partial closure of any type ASD (partial suture or fenestrated patch closure).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC150",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC151",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC152",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC153",
    "display" : "RF ablation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "PROC154",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Coil implantation",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Interventional Cardiology Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC155",
    "display" : "Shunt, Systemic to pulmonary, Modified Blalock-Taussig Shunt (MBTS)",
    "definition" : "Placement of a tube graft from a branch of the aortic arch to the pulmonary artery with or without bypass, from any approach (thoracotomy, sternotomy).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC156",
    "display" : "Shunt, Systemic to pulmonary, Central (from aorta or to main pulmonary artery)",
    "definition" : "A direct anastomosis or placement of a tube graft from the aorta to the pulmonary artery with or without bypass, from any approach (thoracotomy, sternotomy).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC157",
    "display" : "Shunt, Systemic to pulmonary, Other",
    "definition" : "Placement of any other systemic-to-pulmonary artery shunt, with or without bypass, from any approach (thoracotomy, sternotomy) that is not otherwise coded. Includes classic Blalock-Taussig systemic-to-pulmonary artery shunt.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC159",
    "display" : "Shunt, Ligation and takedown",
    "definition" : "Takedown of any shunt.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC16",
    "display" : "Atrial septal fenestration",
    "definition" : "Creation of a fenestration (window) in the septum between the atrial chambers. Usually performed using a hole punch, creating a specifically sized communication in patch material placed on the atrial septum.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC160",
    "display" : "PA banding (PAB)",
    "definition" : "Placement of a pulmonary artery band, any type.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC161",
    "display" : "PA debanding",
    "definition" : "Debanding of pulmonary artery. Please list separately any pulmonary artery reconstruction required.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC162",
    "display" : "Damus-Kaye-Stansel procedure (DKS) (creation of AP anastomosis without arch reconstruction)",
    "definition" : "In the Damus-Kaye-Stansel procedure the proximal transected main pulmonary artery is connected by varying techniques to the aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC163",
    "display" : "Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn)",
    "definition" : "Superior vena cava to pulmonary artery anastomosis allowing flow to both pulmonary arteries with an end-toside superior vena-to-pulmonary artery anastomosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC164",
    "display" : "Glenn (unidirectional cavopulmonary anastomosis) (unidirectional Glenn)",
    "definition" : "Superior vena cava to ipsilateral pulmonary artery anastomosis (i.e., LSVC to LPA, RSVC to RPA).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC165",
    "display" : "Bilateral bidirectional cavopulmonary anastomosis (BBDCPA) (bilateral bidirectional Glenn)",
    "definition" : "Bilateral superior vena cava-to-pulmonary artery anastomoses (requires bilateral SVCs).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC166",
    "display" : "HemiFontan",
    "definition" : "A HemiFontan is an operation that includes a bidirectional superior vena cava (SVC)-to-pulmonary artery anastomosis and the connection of this \"SVCpulmonary artery amalgamation\" to the atrium, with a \"dam\" between this \"SVC-pulmonary artery amalgamation\" and the atrium. This operation can be accomplished with a variety of operative strategies including the following two techniques and other techniques that combine elements of both of these approaches: (1) Augmenting both branch pulmonary arteries with a patch and suturing the augmented branch pulmonary arteries to an incision in the medial aspect of the superior vena cava. (With this approach, the pulmonary artery patch forms a roof over the SVC-topulmonary artery anastomosis and also forms a \"dam\" between the SVC-pulmonary artery amalgamation and the right atrium.) (2) Anastomosing both ends of the divided SVC to incisions in the top and bottom of the right pulmonary artery, and using a separate patch to close junction of the SVC and the right atrium.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC167",
    "display" : "Palliation, Other",
    "definition" : "Any other palliative procedure not specifically listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Palliative Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC168",
    "display" : "Aneurysm, Ventricular, Right, Repair",
    "definition" : "Repair of right ventricular aneurysm, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC169",
    "display" : "Aneurysm, Ventricular, Left, Repair",
    "definition" : "Repair of left ventricular aneurysm, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC170",
    "display" : "Aneurysm, Pulmonary artery, Repair",
    "definition" : "Repair of pulmonary artery aneurysm, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC171",
    "display" : "Cardiac tumor resection",
    "definition" : "Resection of cardiac tumor, any type.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC172",
    "display" : "Pulmonary AV fistula repair/occlusion",
    "definition" : "Repair or occlusion of a pulmonary arteriovenous fistula.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC173",
    "display" : "Pulmonary embolectomy",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "PROC174",
    "display" : "Pleural drainage procedure",
    "definition" : "Pleural drainage procedure via thoracocentesis, tube thoracostomy, or open surgical drainage.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC175",
    "display" : "Pleural procedure, Other",
    "definition" : "Other pleural procedures not specifically listed; may include pleurodesis (mechanical, talc, antibiotic or other), among others.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC176",
    "display" : "Decortication",
    "definition" : "Decortication of the lung by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC177",
    "display" : "Esophageal procedure",
    "definition" : "Any procedure performed on the esophagus.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC178",
    "display" : "Mediastinal procedure",
    "definition" : "Any non-cardiovascular mediastinal procedure not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC179",
    "display" : "Intraaortic balloon pump (IABP) insertion",
    "definition" : "Insertion of intraaortic balloon pump by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Mechanical Support"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC18",
    "display" : "VSD repair, Primary closure",
    "definition" : "Suture closure of any type VSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC180",
    "display" : "ECMO procedure",
    "definition" : "Any ECMO procedure (cannulation, decannulation, etc.).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Mechanical Support"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC181",
    "display" : "Right/left heart assist device procedure",
    "definition" : "Any right, left, or biventricular assist device procedure (placement, removal etc.).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Mechanical Support"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC182",
    "display" : "Mediastinal exploration",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "PROC183",
    "display" : "Bronchoscopy",
    "definition" : "Bronchoscopy, rigid or flexible, for diagnostic, biopsy, or treatment purposes (laser, stent, dilation, lavage).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC184",
    "display" : "Diaphragm plication",
    "definition" : "Plication of the diaphragm; most often for diaphragm paralysis due to phrenic nerve injury.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC185",
    "display" : "Diaphragm procedure, Other",
    "definition" : "Any diaphragm procedure not specifically listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC186",
    "display" : "VATS (video-assisted thoracoscopic surgery)",
    "definition" : "Video-assisted thoracoscopic surgery utilized; this code should be used in addition to the specific procedure code (e.g., if PDA ligated using VATS technique, PDA ligation should be primary procedure, VATS should be secondary procedure).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC187",
    "display" : "Minimally invasive procedure",
    "definition" : "Any procedure using minimally invasive technique; this code should be used in addition to the specific procedure code (e.g., if ASD closed using minimally invasive technique, ASD repair should be primary procedure, minimally invasive procedure should be listed additionally).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC188",
    "display" : "Bypass for noncardiac lesion",
    "definition" : "Use of cardiopulmonary bypass for noncardiac lesion; this code may be used in addition to the specific procedure code if one is available (e.g., tracheal procedures may be done using CPB - the tracheal procedure should be the primary procedure and use of cardiopulmonary bypass for noncardiac lesion should be listed additionally).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC189",
    "display" : "Delayed sternal closure",
    "definition" : "Sternal closure effected after patient has left operating room with sternum open, either because of swelling or electively after complex heart procedures. This procedure should be operative type No CPB Cardiovascular.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC19",
    "display" : "VSD repair, Patch",
    "definition" : "Patch closure (using any type of patch material) of any type VSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC190",
    "display" : "Mediastinal exploration",
    "definition" : "Mediastinal exploration, most often for postoperative control of bleeding or tamponade, but may be exploration to assess mediastinal mass, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC191",
    "display" : "Sternotomy wound drainage",
    "definition" : "Drainage of the sternotomy wound.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC192",
    "display" : "Thoracotomy, Other",
    "definition" : "Any procedure performed through a thoracotomy incision not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC193",
    "display" : "Cardiotomy, Other",
    "definition" : "Any procedure involving an incision in the heart that is not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC194",
    "display" : "Cardiac procedure, Other",
    "definition" : "Any cardiac procedure, bypass or non-bypass, that is not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC195",
    "display" : "Thoracic and/or mediastinal procedure, Other",
    "definition" : "Any thoracic and/or mediastinal procedure not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC196",
    "display" : "Peripheral vascular procedure, Other",
    "definition" : "Any peripheral vascular procedure; may include procedures such as femoral artery repair, iliac artery repair, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC197",
    "display" : "Miscellaneous procedure, Other",
    "definition" : "Any miscellaneous procedure not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC198",
    "display" : "Mustard",
    "definition" : "Atrial baffle procedure for rerouting of venous flow in TGA effecting a \"physiological repair\". The caval flow is directed behind the baffle to the mitral valve, left ventricle and pulmonary artery while pulmonary venous flow is directed in front of the baffle to the tricuspid valve, right ventricle, and aorta. The Mustard procedure uses patch material to construct the baffle.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC199",
    "display" : "Aortic arch repair + VSD repair",
    "definition" : "Aortic arch repair, any technique, and simultaneous VSD repair, any type VSD, any type repair. This includes repair of IAA with VSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC2",
    "display" : "VSD repair, Device",
    "definition" : "Closure of any type VSD using a device.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC20",
    "display" : "VSD, Multiple, Repair",
    "definition" : "Closure of more than one VSD using any method or combination of methods. Further information regarding each type of VSD closed and method of closure can be provided by additionally listing specifics for each VSD closed. In the case of multiple VSDs in which only one is closed the procedure should be coded as closure of a single VSD. The fundamental diagnosis, in this case, would be \"VSD, Multiple\" and a secondary diagnosis can be the morphological type of VSD that was closed at the time of surgery.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC200",
    "display" : "Aortic root replacement, Bioprosthetic",
    "definition" : "Replacement of the aortic root (that portion of the aorta attached to the heart; it gives rise to the coronary arteries) with a bioprosthesis (e.g., porcine) in a conduit, often composite.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC201",
    "display" : "Aortic root replacement, Valve sparing",
    "definition" : "Replacement of the aortic root (that portion of the aorta attached to the heart; it gives rise to the coronary arteries) without replacing the aortic valve (using a tube graft).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC202",
    "display" : "Atrial baffle procedure, Mustard or Senning revision",
    "definition" : "Revision of a previous atrial baffle procedure (either Mustard or Senning), for any reason (e.g., obstruction, baffle leak).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Transposition of the Great Arteries"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC203",
    "display" : "Atrial fenestration closure",
    "definition" : "Closure of previously created atrial fenestration using any method including device, primary suture, or patch.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC204",
    "display" : "Coarctation repair + VSD repair",
    "definition" : "Coarctation of aorta repair, any technique, and simultaneous VSD repair, any type VSD, any type repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC205",
    "display" : "Conduit placement, Other",
    "definition" : "Placement of a conduit from any chamber or vessel to any vessel, valved or valveless, not listed elsewhere.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Conduit operations"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC206",
    "display" : "Conduit placement, Ventricle to aorta",
    "definition" : "Placement of a conduit from the right or left ventricle to the aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Conduit operations"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC207",
    "display" : "Other procedure",
    "definition" : "Any procedure on any organ system not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC208",
    "display" : "Fontan revision or conversion (Re-do Fontan)",
    "definition" : "Revision of a previous Fontan procedure to a total cavopulmonary connection.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC209",
    "display" : "Pulmonary embolectomy, Acute pulmonary embolus",
    "definition" : "Acute pulmonary embolism (clot) removal, through catheter or surgery.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC21",
    "display" : "VSD creation/enlargement",
    "definition" : "Creation of a ventricular septal defect or enlargement of an existing ventricular septal defect.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC210",
    "display" : "Pulmonary embolectomy, Chronic pulmonary embolus",
    "definition" : "Chronic pulmonary embolism (clot) removal, through catheter or surgery.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC211",
    "display" : "Valve closure, Semilunar",
    "definition" : "Closure of a semilunar valve (pulmonic or aortic) by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC212",
    "display" : "Valve excision, Pulmonary (without replacement)",
    "definition" : "Excision of the pulmonary valve without placement of a valve prosthesis.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC213",
    "display" : "Valve replacement, Truncal valve",
    "definition" : "Replacement of the truncal valve with a prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC214",
    "display" : "Valvuloplasty, Truncal valve",
    "definition" : "Truncal valve repair, any type.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC215",
    "display" : "Ebstein's repair",
    "definition" : "To assure an accurate count of repairs of Ebstein's anomaly of the tricuspid valve, this procedure code was included. Repair of Ebstein's anomaly may include, among other techniques, repositioning of the tricuspid valve, plication of the atrialized right ventricle, or right reduction atrioplasty. Often associated ASD's may be closed and arrhythmias addressed with surgical ablation procedures. These procedures should be entered as separate procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC216",
    "display" : "Ligation, Pulmonary artery",
    "definition" : "Ligation or division of the pulmonary artery. Most often performed as a secondary procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC217",
    "display" : "Ligation, Thoracic duct",
    "definition" : "Ligation of the thoracic duct; most commonly for persistent chylothorax.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC218",
    "display" : "Organ procurement",
    "definition" : "Procurement of an organ for transplant (most likely, heart, lungs, or heart and lungs).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous Procedures"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC22",
    "display" : "Ventricular septal fenestration",
    "definition" : "Creation of a fenestration (window) in the septum between the ventricular chambers. Usually performed using a hole punch, creating a specifically sized communication in patch material placed on the ventricular septum.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC24",
    "display" : "AVC (AVSD) repair, Complete (CAVSD)",
    "definition" : "Repair of complete AV canal (AVSD) using one- or twopatch or other technique, with or without mitral valve cleft repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC25",
    "display" : "AVC (AVSD) repair, Intermediate (Transitional)",
    "definition" : "Repair of intermediate AV canal (AVSD) using ASD and VSD patch, or ASD patch and VSD suture, or other technique, with or without mitral valve cleft repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC26",
    "display" : "AVC (AVSD) repair, Partial (Incomplete) (PAVSD)",
    "definition" : "Repair of partial AV canal defect (primum ASD), any technique, with or without repair of cleft mitral valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC28",
    "display" : "AP window repair",
    "definition" : "Repair of AP window using one- or two-patch technique with cardiopulmonary bypass; or, without cardiopulmonary bypass, using transcatheter device or surgical closure.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC29",
    "display" : "Pulmonary artery origin from ascending aorta (hemitruncus) repair",
    "definition" : "Repair of pulmonary artery origin from the ascending aorta by direct reimplantation, autogenous flap, or conduit, with or without use of cardiopulmonary bypass.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC3",
    "display" : "Truncus arteriosus repair",
    "definition" : "Truncus arteriosus repair that most frequently includes patch VSD closure and placement of a conduit from RV to PA. In some cases, a conduit is not placed but an RV to PA connection is made by direct association. Very rarely, there is no VSD to be closed. Truncal valve repair or replacement should be coded separately (Valvuloplasty, Truncal valve; Valve replacement, Truncal valve), as would be the case as well with associated arch anomalies requiring repair (e.g., Interrupted aortic arch repair).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC30",
    "display" : "PAPVC repair",
    "definition" : "PAPVC repair revolves around whether an intracardiac baffle is created to redirect pulmonary venous return to the left atrium or if the anomalous pulmonary vein is translocated and connected to the left atrium directly. If there is an associated ASD and it is closed, that procedure should also be listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC31",
    "display" : "PAPVC, Scimitar, Repair",
    "definition" : "In scimitar syndrome, PAPVC repair also revolves around whether an intracardiac baffle is created to redirect pulmonary venous return to the left atrium or if the anomalous pulmonary vein is translocated and connected to the left atrium directly. If there is an associated ASD and it is closed, that procedure should also be listed. Occasionally an ASD is created; this procedure also must be listed separately. Concomitant thoracic procedures (e.g., lobectomy, pneumonectomy) should also be included in the procedures listing.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC32",
    "display" : "TAPVC repair",
    "definition" : "Repair of TAPVC, any type. Issues surrounding TAPVC repair involve how the main pulmonary venous confluence anastomosis is fashioned, whether an associated ASD is closed or left open or enlarged (ASD closure and enlargement may be listed separately), and whether, particularly in mixed type TAPVC repair, an additional anomalous pulmonary vein is repaired surgically.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC33",
    "display" : "TOF repair, Ventriculotomy, Nontransanular patch",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), with use of a ventriculotomy incision, but without placement of a trans-pulmonary annulus patch. If the main pulmonary artery incision is extended proximally through the pulmonary annulus, this must be considered \"transannular\" and thus a ventricular incision, though the length of the incision onto the ventricle itself may be minimal.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC34",
    "display" : "TOF repair, Ventriculotomy, Transanular patch",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), with use of a ventriculotomy incision and placement of a trans-pulmonary annulus patch. If the main pulmonary artery incision is extended proximally through the pulmonary annulus, this must be considered \"transannular\" and thus a ventricular incision, though the length of the incision onto the ventricle itself may be minimal.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC35",
    "display" : "TOF repair, RV-PA conduit",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), with placement of a right ventricle-to-pulmonary artery conduit. In this procedure the major components of pulmonary stenosis are relieved with placement of the RV-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC36",
    "display" : "TOF - AVC (AVSD) repair",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), with repair of associated AV canal defect. Repair of associated atrial septal defect or atrioventricular valve repair(s) should be listed as additional or secondary procedures under the primary TOF-AVC procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC37",
    "display" : "TOF - Absent pulmonary valve repair",
    "definition" : "Repair of tetralogy of Fallot with absent pulmonary valve complex. In most cases this repair will involve pulmonary valve replacement (pulmonary or aortic homograft, porcine, other) and reduction pulmonary artery arterioplasty.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC39",
    "display" : "Pulmonary atresia - VSD (including TOF, PA) repair",
    "definition" : "For patients with pulmonary atresia with ventricular septal defect without MAPCAs, including those with tetralogy of Fallot with pulmonary atresia, repair may entail either a tetralogy-like repair with transannular patch placement, a VSD closure with placement of an RV-PA conduit, or an intraventricular tunnel VSD closure with transannular patch or RV-PA conduit placement. To assure an accurate count of repairs of pulmonary atresia-VSD without MAPCAs, even if a tetralogy-type repair or Rastelli-type repair is used, the pulmonary atresia-VSD code should be the code used, not Rastelli procedure or tetralogy of Fallot repair with transannular patch.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC4",
    "display" : "Cor triatriatum repair",
    "definition" : "Repair of cor triatriatum. Surgical decision making revolves around the approach to the membrane creating the cor triatriatum defect, how any associated ASD is closed, and how any associated anomalous pulmonary vein connection is addressed. Both ASD closure and anomalous pulmonary venous connection may be listed as separate procedures.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Cor Triatriatum"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC40",
    "display" : "Pulmonary atresia - VSD - MAPCA (pseudotruncus) repair",
    "definition" : "In the presence of MAPCAs, this code implies implies pulmonary unifocalization (multi- or single-stage), repair of VSD (may be intraventricular tunnel or flat patch VSD closure), and placement of an RV-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC41",
    "display" : "Unifocalization MAPCA(s)",
    "definition" : "Anastomosis of aortopulmonary collateral arteries into the left, right, or main pulmonary artery or into a tube graft or other type of confluence. The unifocalization procedure may be done on or off bypass.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC42",
    "display" : "Occlusion MAPCA(s)",
    "definition" : "Occlusion, or closing off, of MAPCAs. This may be done with a transcatheter occluding device, usually a coil, or by surgical techniques.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC43",
    "display" : "Valvuloplasty, Tricuspid",
    "definition" : "Reconstruction of the tricuspid valve may include but not be limited to a wide range of techniques including: leaflet patch extension, artificial chordae placement, papillary muscle transplocation with or without detachment. Annuloplasty techniques that may be done solely or in combination with leaflet, chordae or muscle repair to achieve a competent valve include: eccentric annuloplasty, Kay annular plication, purse-string annuloplasty (including semicircular annuloplasty), sliding annuloplasty, and annuloplasty with ring placement. Do not use this code if tricuspid valve malfunction is secondary to Ebstein's anomaly; instead use the Ebstein's repair procedure code.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC44",
    "display" : "Valve replacement, Tricuspid (TVR)",
    "definition" : "Replacement of the tricuspid valve with a prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC45",
    "display" : "Valve closure, Tricuspid (exclusion, univentricular approach)",
    "definition" : "In a functional single ventricle heart, the tricuspid valve may be closed using a patch, thereby excluding the RV. Tricuspid valve closure may be used for infants with Ebstein's anomaly and severe tricuspid regurgitation or in patients with pulmonary atresia-intact ventricular septum with sinusoids.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC46",
    "display" : "Valve excision, Tricuspid (without replacement)",
    "definition" : "Excision of the tricuspid valve without placement of a valve prosthesis.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC47",
    "display" : "Valve surgery, Other, Tricuspid",
    "definition" : "Other tricuspid valve surgery not specified in procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC48",
    "display" : "RVOT procedure",
    "definition" : "Included in this procedural code would be all RVOT procedures not elsewhere specified in the nomenclature system. These might be, among others: resection of subvalvar pulmonary stenosis (not DCRV type; may be localized fibrous diaphragm or high infundibular stenosis), right ventricular patch augmentation, or reduction pulmonary artery arterioplasty.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC49",
    "display" : "1 1/2 ventricular repair",
    "definition" : "Partial biventricular repair; includes intracardiac repair with bidirectional cavopulmonary anastomosis to volume unload a small ventricle or poorly functioning ventricle.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC5",
    "display" : "Pulmonary venous stenosis repair",
    "definition" : "Repair of pulmonary venous stenosis, whether congenital or acquired. Repair can be accomplished with a variety of approaches: sutureless, patch venoplasty, stent placement, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Stenosis"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC50",
    "display" : "PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "definition" : "Reconstruction of the right or left branch (or both right and left) pulmonary arteries (within the hilar bifurcation) commonly using patch material. If balloon angioplasty is performed or a stent is placed in the right or left (or both) pulmonary artery intraoperatively, this code may be used in addition to the balloon dilation or stent placement code. If, rarely, branch PA banding (single or bilateral) was performed in the past and reconstruction is performed associated with debanding, both codes should be listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC51",
    "display" : "PA, reconstruction (plasty), Main (trunk)",
    "definition" : "Reconstruction of the main pulmonary artery trunk commonly using patch material. If balloon angioplasty is performed or a stent is placed in the main pulmonary artery intraoperatively, this code may be used in addition to the balloon dilation or stent placement code. If MPA reconstruction is performed with PA debanding, both codes should be listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC53",
    "display" : "PA, reconstruction (plasty), Branch, Peripheral (at or beyond the hilar bifurcation)",
    "definition" : "Reconstruction of the peripheral right or left branch (or both right and left) pulmonary arteries (at or beyond the hilar bifurcation) commonly using patch material. If balloon angioplasty is performed or a stent is placed in the right or left (or both) peripheral pulmonary artery intraoperatively, this code may be used in addition to the balloon dilation or stent placement code.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC54",
    "display" : "DCRV repair",
    "definition" : "Surgical repair of DCRV combines relief of the low infundibular stenosis (via muscle resection) and closure of a VSD when present. A ventriculotomy may be required and is repaired by patch enlargement of the infundibulum. VSD closure and patch enlargement of the infundibulum, if done, should be listed as separate procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC55",
    "display" : "Conduit reoperation",
    "definition" : "Conduit reoperation is the code to be used in the event of conduit failure, in whatever position (LV to aorta, LV to PA, RA to RV, RV to aorta, RV to PA, etc.), and from whatever cause (somatic growth, stenosis, insufficiency, infection, etc).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Conduit operations"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC56",
    "display" : "Valvuloplasty, Pulmonic",
    "definition" : "Valvuloplasty of the pulmonic valve may include a range of techniques including but not limited to: valvotomy with or without bypass, commissurotomy, and valvuloplasty.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC57",
    "display" : "Valve replacement, Pulmonic (PVR)",
    "definition" : "Replacement of the pulmonic valve with a prosthetic valve. Care must be taken to differentiate between homograft pulmonic valve replacement and placement of a homograft RV-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC58",
    "display" : "Conduit placement, RV to PA",
    "definition" : "Placement of a conduit, any type, from RV to PA.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Conduit operations"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC59",
    "display" : "Conduit placement, LV to PA",
    "definition" : "Placement of a conduit, any type, from LV to PA.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Conduit operations"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC6",
    "display" : "Atrial baffle procedure (non-Mustard, non-Senning)",
    "definition" : "The atrial baffle procedure code is used primarily for repair of systemic venous anomalies, as in redirection of left superior vena cava drainage to the right atrium.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Systemic Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC60",
    "display" : "Valve surgery, Other, Pulmonic",
    "definition" : "Other pulmonic valve surgery not specified in procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC61",
    "display" : "Valvuloplasty, Aortic",
    "definition" : "Valvuloplasty of the aortic valve for stenosis and/or insufficiency including, but not limited to the following techniques: valvotomy (open or closed), commissurotomy, aortic valve suspension, leaflet (left, right or noncoronary) partial resection, reduction, or leaflet shaving, extended valvuloplasty (freeing of leaflets, commissurotomy, and extension of leaflets using autologous or bovine pericardium), or annuloplasty (partial - interrupted or noncircumferential sutures, or complete - circumferential sutures).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC62",
    "display" : "Valve replacement, Aortic (AVR)",
    "definition" : "Replacement of the aortic valve with a prosthetic valve (mechanical, bioprosthetic, or homograft). Use this code only if type of valve prosthesis is unknown or does not fit into the specific valve replacement codes available. Autograft valve replacement should be coded as a Ross procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC63",
    "display" : "Valve replacement, Aortic (AVR), Mechanical",
    "definition" : "Replacement of the aortic valve with a mechanical prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC64",
    "display" : "Valve replacement, Aortic (AVR), Bioprosthetic",
    "definition" : "Replacement of the aortic valve with a bioprosthetic prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC65",
    "display" : "Valve replacement, Aortic (AVR), Homograft",
    "definition" : "Replacement of the aortic valve with a homograft prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC67",
    "display" : "Aortic root replacement, Mechanical",
    "definition" : "Replacement of the aortic root (that portion of the aorta attached to the heart; it gives rise to the coronary arteries) with a mechnical prosthesis in a composite conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC68",
    "display" : "Aortic root replacement, Homograft",
    "definition" : "Replacement of the aortic root (that portion of the aorta attached to the heart; it gives rise to the coronary arteries) with a homograft.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC69",
    "display" : "Ross procedure",
    "definition" : "Replacement of the aortic valve with a pulmonary autograft and replacement of the pulmonary valve with a homograft conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC7",
    "display" : "Anomalous systemic venous connection repair",
    "definition" : "With the exception of atrial baffle procedures (harvest code 310), anomalous systemic venous connection repair includes a range of surgical approaches, including, among others: ligation of anomalous vessels, reimplantation of anomalous vessels (with or without use of a conduit), or redirection of anomalous systemic venous flow through directly to the pulmonary circulation (bidirectional Glenn to redirect LSVC or RSVC to left or right pulmonary artery, respectively).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Systemic Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC70",
    "display" : "Konno procedure",
    "definition" : "Relief of left ventricular outflow tract obstruction associated with aortic annular hypoplasia, aortic valvar stenosis and/or aortic valvar insufficiency via Konno aortoventriculoplasty. Components of the surgery include a longitudinal incision in the aortic septum, a vertical incision in the outflow tract of the right ventricle to join the septal incision, aortic valve replacement, and patch reconstruction of the outflow tracts of both ventricles.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC71",
    "display" : "Ross-Konno procedure",
    "definition" : "Relief of left ventricular outflow tract obstruction associated with aortic annular hypoplasia, aortic valvar stenosis and/or aortic valvar insufficiency via Konno aortoventriculoplasty using a pulmonary autograft root for the aortic root replacement.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC72",
    "display" : "Other annular enlargement procedure",
    "definition" : "Techniques included under this procedure code include those designed to effect aortic annular enlargement that are not included in other procedure codes. These include the Manougian and Nicks aortic annular enlargement procedures.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC73",
    "display" : "Aortic stenosis, Subvalvar, Repair",
    "definition" : "Subvalvar aortic stenosis repair by a range of techniques including excision, excision and myotomy, excision and myomectomy, myotomy, myomectomy, initial placement of apical-aortic conduit (LV to aorta conduit replacement would be coded as conduit reoperation) , Vouhé aortoventriculoplasty (aortic annular incision at commissure of left and right coronary cusps is carried down to the septum and RV infundibulum; septal muscle is resected, incisions are closed, and the aortic annulus is reconstituted), or other aortoventriculoplasty techniques.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC74",
    "display" : "Aortic stenosis, Supravalvar, Repair",
    "definition" : "Repair of supravalvar aortic stenosis involving all techniques of patch aortoplasty and aortoplasty involving the use of all autologous tissue. In simple patch aortoplasty a diamond-shaped patch may be used, in the Doty technique an extended patch is placed (Yshaped patch, incision carried into two sinuses), and in the Brom repair the ascending aorta is transected, any fibrous ridge is resected, and the three sinuses are patched separately.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC75",
    "display" : "Valve surgery, Other, Aortic",
    "definition" : "Other aortic valve surgery not specified in other procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC76",
    "display" : "Sinus of Valsalva, Aneurysm repair",
    "definition" : "Sinus of Valsalva aneurysm repair can be organized by site of aneurysm (left, right or noncoronary sinus), type of repair (suture, patch graft, or root repair by tube graft or valved conduit), and approach used (from chamber of origin (aorta) or from chamber of penetration (LV, RV, PA, left or right atrium, etc.). Aortic root replacement procedures in association with sinus of Valsalva aneurysm repairs are usually for associated uncorrectable aortic insufficiency or multiple sinus involvement and the aortic root replacement procedure should also be listed. Additional procedures also performed at the time of sinus of Valsalva aneurysm repair include but are not limited to VSD closure, repair or replacement of aortic valve, and coronary reconstruction; these procedures should also be coded separately from the sinus of Valsalva aneurysm repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC77",
    "display" : "LV to aorta tunnel repair",
    "definition" : "LV to aorta tunnel repair can be accomplished by suture, patch, or both, and may require reimplantation of the right coronary artery. Associated coronary artery procedures should be coded separately from the LV to aorta tunnel repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC78",
    "display" : "Valvuloplasty, Mitral",
    "definition" : "Repair of mitral valve including, but not limited to: valvotomy (closed or open heart), cleft repair, annuloplasty with or without ring, chordal reconstruction, commissuorotomy, leaflet repair, or papillary muscle repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC79",
    "display" : "Mitral stenosis, Supravalvar mitral ring repair",
    "definition" : "Supravalvar mitral ring repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC8",
    "display" : "Systemic venous stenosis repair",
    "definition" : "Stenosis or obstruction of a systemic vein (most commonly SVC or IVC) may be relieved with patch or conduit placement, excision of the stenotic area with primary reanastomosis or direct reimplantation.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Systemic Venous Anomalies"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC80",
    "display" : "Valve replacement, Mitral (MVR)",
    "definition" : "Replacement of mitral valve with prosthetic valve, any kind, in suprannular or annular position.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC81",
    "display" : "Valve surgery, Other, Mitral",
    "definition" : "Other mitral valve surgery not specified in procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC82",
    "display" : "Norwood procedure",
    "definition" : "The Norwood operation is synonymous with the term 'Norwood (Stage 1)' and is defined as an aortopulmonary connection and neoaortic arch construction resulting in univentricular physiology and pulmonary blood flow controlled with a calibrated systemic-to-pulmonary artery shunt, or a right ventricle to pulmonary artery conduit, or rarely, a cavopulmonary connection. When coding the procedure \"Norwood procedure\", the primary procedure of the operation should be \"Norwood procedure\". The second procedure (Procedure 2 after the Norwood procedure) must then document the source of pulmonary blood flow and be chosen from the following eight choices: 1. Shunt, Systemic to pulmonary, Modified Blalock-Taussig Shunt (MBTS) 2. Shunt, Systemic to pulmonary, Central (from aorta or to main pulmonary artery) 3. Shunt, Systemic to pulmonary, Other 4. Conduit placement, RV to PA 5. Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn) 6. Glenn (unidirectional cavopulmonary anastomosis) (unidirectional Glenn) 7. Bilateral bidirectional cavopulmonary anastomosis (BBDCPA) (bilateral bidirectional Glenn) 8. HemiFontan",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC83",
    "display" : "HLHS biventricular repair",
    "definition" : "Performed in patients who have small but adequately sized ventricles to support systemic circulation. These patients usually have small, but not stenotic, aortic and/or mitral valves. Primary biventricular repair has consisted of extensive aortic arch and ascending aorta enlargement with a patch, closure of interventricular and interatrial communications, and conservative approach for left ventricular outflow tract obstruction (which may include mitral stenosis at any level, subaortic stenosis, aortic stenosis, aortic arch hypoplasia, coarctation, or interrupted aortic arch). Concurrent operations (e.g., coarctation repair, aortic valve repair or replacement, etc.) can be coded separately within the database.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC84",
    "display" : "Transplant, Heart",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : false
    }]
  },
  {
    "code" : "PROC85",
    "display" : "Transplant, Heart",
    "definition" : "Heart transplantation, any technique, allograft or xenograft.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Cardiomyopathy"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC86",
    "display" : "Transplant, Heart and lung",
    "definition" : "Heart and lung (single or double) transplantation.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Cardiomyopathy"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC87",
    "display" : "Partial left ventriculectomy (LV volume reduction surgery) (Batista)",
    "definition" : "Wedge resection of LV muscle, with suturing of cut edges together, to reduce LV volume.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Cardiomyopathy"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC88",
    "display" : "Pericardial drainage procedure",
    "definition" : "Pericardial drainage can include a range of therapies including, but not limited to: pericardiocentesis, pericardiostomy tube placement, pericardial window creation, and open pericardial drainage (pericardiotomy).",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Pericardial Disease"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC89",
    "display" : "Pericardiectomy",
    "definition" : "Surgical removal of the pericardium.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Pericardial Disease"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC9",
    "display" : "TOF repair, No ventriculotomy",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), without use of an incision in the infundibulum of the right ventricle for exposure. In most cases this would be a transatrial and transpulmonary artery approach to repair the VSD and relieve the pulmonary stenosis. If the main pulmonary artery incision is extended proximally through the pulmonary annulus, this must be considered \"transannular\" and thus a ventricular incision, though the length of the incision onto the ventricle itself may be minimal.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC90",
    "display" : "Pericardial procedure, Other",
    "definition" : "Other pericardial procedures that include, but are not limited to: pericardial reconstruction for congenital absence of the pericardium, pericardial biopsy, pericardial mass or cyst excision.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Pericardial Disease"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC91",
    "display" : "Fontan, Atrio-pulmonary connection",
    "definition" : "Fontan-type procedure with atrio-pulmonary connection.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC92",
    "display" : "Fontan, Atrio-ventricular connection",
    "definition" : "Fontan-type procedure with atrio-ventricular connection, either direct or with RA-RV conduit, valved or nonvalved.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC93",
    "display" : "Fontan, TCPC, Lateral tunnel, Fenestrated",
    "definition" : "Total cavopulmonary connection using an intraatrial lateral tunnel construction, with fenestration.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC94",
    "display" : "Fontan, TCPC, Lateral tunnel, Nonfenestrated",
    "definition" : "Total cavopulmonary connection using an intraatrial lateral tunnel construction, with no fenestration.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC96",
    "display" : "Fontan, TCPC, External conduit, Fenestrated",
    "definition" : "Total cavopulmonary connection using an external conduit to connect the infradiaphragmatic systemic venous return to the pulmonary artery, with fenestration.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "PROC99",
    "display" : "Fontan, Other",
    "definition" : "Other Fontan procedure not specified in procedure codes. May include takedown of a Fontan procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "procedure"
    },
    {
      "code" : "group",
      "valueString" : "Single Ventricle"
    },
    {
      "code" : "context",
      "valueString" : "operation"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-11777",
    "display" : "Other procedure",
    "definition" : "Any procedure on any organ system not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-1590",
    "display" : "Transplant, Heart",
    "definition" : "Heart transplantation, any technique, allograft or xenograft.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-1600",
    "display" : "Transplant, Lung(s)",
    "definition" : "Lung or lobe transplantation of any type.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-1610",
    "display" : "Transplant, Heart and lung",
    "definition" : "Heart and lung (single or double) transplantation.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4010",
    "display" : "PFO, Primary closure",
    "definition" : "Suture closure of patent foramen ovale (PFO).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4020",
    "display" : "ASD repair, Primary closure",
    "definition" : "Suture closure of secundum (most frequently), coronary sinus, sinus venosus or common atrium ASD.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4030",
    "display" : "ASD repair, Patch",
    "definition" : "Patch closure (using any type of patch material) of secundum, coronary sinus, or sinus venosus ASD.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4040",
    "display" : "ASD repair, Device",
    "definition" : "Closure of any type ASD (including PFO) using a device.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4050",
    "display" : "ASD, Common atrium (single atrium), Septation",
    "definition" : "Septation of common (single) atrium using any type patch material.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4060",
    "display" : "ASD creation/enlargement",
    "definition" : "Creation of an atrial septal defect or enlargement of an existing atrial septal defect using a variety of modalities including balloon septostomy, blade septostomy, or surgical septectomy. Creation may be accomplished with or without use of cardiopulmonary bypass.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4070",
    "display" : "ASD partial closure",
    "definition" : "Intentional partial closure of any type ASD (partial suture or fenestrated patch closure).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4080",
    "display" : "Atrial septal fenestration",
    "definition" : "Creation of a fenestration (window) in the septum between the atrial chambers. Usually performed using a hole punch, creating a specifically sized communication in patch material placed on the atrial septum.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4085",
    "display" : "Atrial fenestration closure",
    "definition" : "Closure of previously created atrial fenestration using any method including device, primary suture, or patch.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4100",
    "display" : "VSD repair, Primary closure",
    "definition" : "Suture closure of any type VSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4110",
    "display" : "VSD repair, Patch",
    "definition" : "Patch closure (using any type of patch material) of any type VSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4120",
    "display" : "VSD repair, Device",
    "definition" : "Closure of any type VSD using a device.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4130",
    "display" : "VSD, Multiple, Repair",
    "definition" : "Closure of more than one VSD using any method or combination of methods. Further information regarding each type of VSD closed and method of closure can be provided by additionally listing specifics for each VSD closed. In the case of multiple VSDs in which only one is closed the procedure should be coded as closure of a single VSD. The fundamental diagnosis, in this case, would be \"VSD, Multiple\" and a secondary diagnosis can be the morphological type of VSD that was closed at the time of surgery.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4140",
    "display" : "VSD creation/enlargement",
    "definition" : "Creation of a ventricular septal defect or enlargement of an existing ventricular septal defect.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4150",
    "display" : "Ventricular septal fenestration",
    "definition" : "Creation of a fenestration (window) in the septum between the ventricular chambers. Usually performed using a hole punch, creating a specifically sized communication in patch material placed on the ventricular septum.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4170",
    "display" : "AVC (AVSD) repair, Complete (CAVSD)",
    "definition" : "Repair of complete AV canal (AVSD) using one- or two-patch or other technique, with or without mitral valve cleft repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4180",
    "display" : "AVC (AVSD) repair, Intermediate (Transitional)",
    "definition" : "Repair of intermediate AV canal (AVSD) using ASD and VSD patch, or ASD patch and VSD suture, or other technique, with or without mitral valve cleft repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4190",
    "display" : "AVC (AVSD) repair, Partial (Incomplete) (PAVSD)",
    "definition" : "Repair of partial AV canal defect (primum ASD), any technique, with or without repair of cleft mitral valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4210",
    "display" : "AP window repair",
    "definition" : "Repair of AP window using one- or twopatch technique with cardiopulmonary bypass; or, without cardiopulmonary bypass, using transcatheter device or surgical closure.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4220",
    "display" : "Pulmonary artery origin from ascending aorta (hemitruncus) repair",
    "definition" : "Repair of pulmonary artery origin from the ascending aorta by direct reimplantation, autogenous flap, or conduit, with or without use of cardiopulmonary bypass.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4230",
    "display" : "Truncus arteriosus repair",
    "definition" : "Truncus arteriosus repair that most frequently includes patch VSD closure and placement of a conduit from RV to PA. In some cases, a conduit is not placed but an RV to PA connection is made by direct association. Very rarely, there is no VSD to be closed. Truncal valve repair or replacement should be coded separately (Valvuloplasty, Truncal valve; Valve replacement, Truncal valve), as would be the case as well with associated arch anomalies requiring repair (e.g., Interrupted aortic arch repair).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4240",
    "display" : "Valvuloplasty, Truncal valve",
    "definition" : "Truncal valve repair, any type.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4250",
    "display" : "Valve replacement, Truncal valve",
    "definition" : "Replacement of the truncal valve with a prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4260",
    "display" : "PAPVC repair",
    "definition" : "PAPVC repair revolves around whether an intracardiac baffle is created to redirect pulmonary venous return to the left atrium or if the anomalous pulmonary vein is translocated and connected to the left atrium directly. If there is an associated ASD and it is closed, that procedure should also be listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4270",
    "display" : "PAPVC, Scimitar, Repair",
    "definition" : "In scimitar syndrome, PAPVC repair also revolves around whether an intracardiac baffle is created to redirect pulmonary venous return to the left atrium or if the anomalous pulmonary vein is translocated and connected to the left atrium directly. If there is an associated ASD and it is closed, that procedure should also be listed. Occasionally an ASD is created; this procedure also must be listed separately. Concomitant thoracic procedures (e.g., lobectomy, pneumonectomy) should also be included in the procedures listing.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4280",
    "display" : "TAPVC repair",
    "definition" : "Repair of TAPVC, any type. Issues surrounding TAPVC repair involve how the main pulmonary venous confluence anastomosis is fashioned, whether an associated ASD is closed or left open or enlarged (ASD closure and enlargement may be listed separately), and whether, particularly in mixed type TAPVC repair, an additional anomalous pulmonary vein is repaired surgically.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4290",
    "display" : "Cor triatriatum repair",
    "definition" : "Repair of cor triatriatum. Surgical decision making revolves around the approach to the membrane creating the cor triatriatum defect, how any associated ASD is closed, and how any associated anomalous pulmonary vein connection is addressed. Both ASD closure and anomalous pulmonary venous connection may be listed as separate procedures.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4300",
    "display" : "Pulmonary venous stenosis repair",
    "definition" : "Repair of pulmonary venous stenosis, whether congenital or acquired. Repair can be accomplished with a variety of approaches: sutureless, patch venoplasty, stent placement, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4310",
    "display" : "Atrial baffle procedure (non-Mustard, non- Senning)",
    "definition" : "The atrial baffle procedure code is used primarily for repair of systemic venous anomalies, as in redirection of left superior vena cava drainage to the right atrium.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4330",
    "display" : "Anomalous systemic venous connection repair",
    "definition" : "With the exception of atrial baffle procedures (harvest code 310), anomalous systemic venous connection repair includes a range of surgical approaches, including, among others: ligation of anomalous vessels, reimplantation of anomalous vessels (with or without use of a conduit), or redirection of anomalous systemic venous flow through directly to the pulmonary circulation (bidirectional Glenn to redirect LSVC or RSVC to left or right pulmonary artery, respectively).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4340",
    "display" : "Systemic venous stenosis repair",
    "definition" : "Stenosis or obstruction of a systemic vein (most commonly SVC or IVC) may be relieved with patch or conduit placement, excision of the stenotic area with primary reanastomosis or direct reimplantation.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4350",
    "display" : "TOF repair, No ventriculotomy",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), without use of an incision in the infundibulum of the right ventricle for exposure. In most cases this would be a transatrial and transpulmonary artery approach to repair the VSD and relieve the pulmonary stenosis. If the main pulmonary artery incision is extended proximally through the pulmonary annulus, this must be considered \"transannular\" and thus a ventricular incision, though the length of the incision onto the ventricle itself may be minimal.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4360",
    "display" : "TOF repair, Ventriculotomy, Nontransanular patch",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), with use of a ventriculotomy incision, but without placement of a trans-pulmonary annulus patch.  If the main pulmonary artery incision is extended proximally through the pulmonary annulus, this must be considered \"transannular\" and thus a ventricular incision, though the length of the incision onto the ventricle itself may be minimal.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4370",
    "display" : "TOF repair, Ventriculotomy, Transanular patch",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), with use of a ventriculotomy incision and placement of a trans-pulmonary annulus patch. If the main pulmonary artery incision is extended proximally through the pulmonary annulus, this must be considered \"transannular\" and thus a ventricular incision, though the length of the incision onto the ventricle itself may be minimal.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4380",
    "display" : "TOF repair, RVPA conduit",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), with placement of a right ventricle-to-pulmonary artery conduit. In this procedure the major components of pulmonary stenosis are relieved with placement of the RV-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4390",
    "display" : "TOF - AVC (AVSD) repair",
    "definition" : "Tetralogy of Fallot repair (assumes VSD closure and relief of pulmonary stenosis at one or more levels), with repair of associated AV canal defect.  Repair of associated atrial septal defect or atrioventricular valve repair(s) should be listed as additional or secondary procedures under the primary TOF-AVC procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4400",
    "display" : "TOF - Absent pulmonary valve repair",
    "definition" : "Repair of tetralogy of Fallot with absent pulmonary valve complex. In most cases this repair will involve pulmonary valve replacement (pulmonary or aortic homograft, porcine, other) and reduction pulmonary artery arterioplasty.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4420",
    "display" : "Pulmonary atresia - VSD (including TOF, PA) repair",
    "definition" : "For patients with pulmonary atresia with ventricular septal defect without MAPCAs, including those with tetralogy of Fallot with pulmonary atresia, repair may entail either a tetralogy-like repair with transannular patch placement, a VSD closure with placement of an RV-PA conduit, or an intraventricular tunnel VSD closure with transannular patch or RV-PA conduit placement. To assure an accurate count of repairs of pulmonary atresia-VSD without MAPCAs, even if a tetralogy-type repair or Rastelli-type repair is used, the pulmonary atresia-VSD code should be the code used, not Rastelli procedure or tetralogy of Fallot repair with transannular patch.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4430",
    "display" : "Pulmonary atresia - VSD - MAPCA (pseudotruncus) repair",
    "definition" : "In the presence of MAPCAs, this code implies implies pulmonary unifocalization (multi- or single-stage), repair of VSD (may be intraventricular tunnel or flat patch VSD closure), and placement of an RV-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4440",
    "display" : "Unifocalization MAPCA(s)",
    "definition" : "Anastomosis of aortopulmonary collateral arteries into the left, right, or main pulmonary artery or into a tube graft or other type of confluence. The unifocalization procedure may be done on or off bypass.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4450",
    "display" : "Occlusion MAPCA(s)",
    "definition" : "Occlusion, or closing off, of MAPCAs.  This may be done with a transcatheter occluding device, usually a coil, or by surgical techniques.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4460",
    "display" : "Valvuloplasty, Tricuspid",
    "definition" : "Reconstruction of the tricuspid valve may include but not be limited to a wide range of techniques including: leaflet patch extension, artificial chordae placement, papillary muscle transplocation with or without detachment. Annuloplasty techniques that may be done solely or in combination with leaflet, chordae or muscle repair to achieve a competent valve include: eccentric annuloplasty, Kay annular plication, pursestring annuloplasty (including semicircular annuloplasty), sliding annuloplasty, and annuloplasty with ring placement. Do not use this code if tricuspid valve malfunction is secondary to Ebstein's anomaly; instead use the Ebstein's repair procedure code.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4465",
    "display" : "Ebstein's repair",
    "definition" : "To assure an accurate count of repairs of Ebstein's anomaly of the tricuspid valve, this procedure code was included. Repair of Ebstein's anomaly may include, among other techniques, repositioning of the tricuspid valve, plication of the atrialized right ventricle, or right reduction atrioplasty. Often associated ASD's may be closed and arrhythmias addressed with surgical ablation procedures. These procedures should be entered as separate procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4470",
    "display" : "Valve replacement, Tricuspid (TVR)",
    "definition" : "Replacement of the tricuspid valve with a prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4480",
    "display" : "Valve closure, Tricuspid (exclusion, univentricular approach)",
    "definition" : "In a functional single ventricle heart, the tricuspid valve may be closed using a patch, thereby excluding the RV. Tricuspid valve closure may be used for infants with Ebstein's anomaly and severe tricuspid regurgitation or in patients with pulmonary atresia-intact ventricular septum with sinusoids.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4490",
    "display" : "Valve excision, Tricuspid (without replacement)",
    "definition" : "Excision of the tricuspid valve without Tricuspid (without replacement) placement of a valve prosthesis.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4500",
    "display" : "Valve surgery, Other, Tricuspid",
    "definition" : "Other tricuspid valve surgery not specified in procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4510",
    "display" : "RVOT procedure",
    "definition" : "Included in this procedural code would be all RVOT procedures not elsewhere specified in the data_version system. These might be, among others: resection of subvalvar pulmonary stenosis (not DCRV type; may be localized fibrous diaphragm or high infundibular stenosis), right ventricular patch augmentation, or reduction pulmonary artery arterioplasty.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4520",
    "display" : "1 1/2 ventricular repair",
    "definition" : "Partial biventricular repair; includes intracardiac repair with bidirectional cavopulmonary anastomosis to volume unload a small ventricle or poorly functioning ventricle.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4530",
    "display" : "PA, reconstruction (plasty), Main (trunk)",
    "definition" : "Reconstruction of the main pulmonary artery trunk commonly using patch material. If balloon angioplasty is performed or a stent is placed in the main pulmonary artery intraoperatively, this code may be used in addition to the balloon dilation or stent placement code. If MPA reconstruction is performed with PA debanding, both codes should be listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4540",
    "display" : "PA, reconstruction (plasty), Branch, Central (within the hilar bifurcation)",
    "definition" : "Reconstruction of the right or left branch (or both right and left) pulmonary arteries (within the hilar bifurcation) commonly using patch material. If balloon angioplasty is performed or a stent is placed in the right or left (or both) pulmonary artery intraoperatively, this code may be used in addition to the balloon dilation or stent placement code. If, rarely, branch PA banding (single or bilateral) was performed in the past and reconstruction is performed associated with debanding, both codes should be listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4550",
    "display" : "PA, reconstruction (plasty), Branch, Peripheral (at or beyond the hilar bifurcation)",
    "definition" : "Reconstruction of the peripheral right or left branch (or both right and left) pulmonary arteries (at or beyond the hilar bifurcation) commonly using patch material. If balloon angioplasty is performed or a stent is placed in the right or left (or both) peripheral pulmonary artery intraoperatively, this code may be used in addition to the balloon dilation or stent placement code.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4570",
    "display" : "DCRV repair",
    "definition" : "Surgical repair of DCRV combines relief of the low infundibular stenosis (via muscle resection) and closure of a VSD when present. A ventriculotomy may be required and is repaired by patch enlargement of the infundibulum. VSD closure and patch enlargement of the infundibulum, if done, should be listed as separate procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4580",
    "display" : "Conduit reoperation",
    "definition" : "Conduit reoperation is the code to be used in the event of conduit failure, in whatever position (LV to aorta, LV to PA, RA to RV, RV to aorta, RV to PA, etc.), and from whatever cause (somatic growth, stenosis, insufficiency, infection, etc).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4590",
    "display" : "Valvuloplasty, Pulmonic",
    "definition" : "Valvuloplasty of the pulmonic valve may include a range of techniques including but not limited to: valvotomy with or without bypass, commissurotomy, and valvuloplasty.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4600",
    "display" : "Valve replacement, Pulmonic (PVR)",
    "definition" : "Replacement of the pulmonic valve with a prosthetic valve. Care must be taken to differentiate between homograft pulmonic valve replacement and placement of a homograft RV-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4610",
    "display" : "Conduit placement, RV to PA",
    "definition" : "Placement of a conduit, any type, from RV to PA.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4620",
    "display" : "Conduit placement, LV to PA",
    "definition" : "Placement of a conduit, any type, from LV to PA.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4630",
    "display" : "Valve excision, Pulmonary (without replacement)",
    "definition" : "Excision of the pulmonary valve without placement of a valve prosthesis.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4640",
    "display" : "Valve closure, Semilunar",
    "definition" : "Closure of a semilunar valve (pulmonic or aortic) by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4650",
    "display" : "Valve surgery, Other, Pulmonic",
    "definition" : "Other pulmonic valve surgery not specified in procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4660",
    "display" : "Valvuloplasty, Aortic",
    "definition" : "Valvuloplasty of the aortic valve for stenosis and/or insufficiency including, but not limited to the following techniques: valvotomy (open or closed), commissurotomy, aortic valve suspension, leaflet (left, right or noncoronary) partial resection, reduction, or leaflet shaving, extended valvuloplasty (freeing of leaflets, commissurotomy, and extension of leaflets using autologous or bovine pericardium), or annuloplasty (partial - interrupted or noncircumferential sutures, or complete - circumferential sutures).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4670",
    "display" : "Valve replacement, Aortic (AVR)",
    "definition" : "Replacement of the aortic valve with a prosthetic valve (mechanical, bioprosthetic, or homograft). Use this code only if type of valve prosthesis is unknown or does not fit into the specific valve replacement codes available. Autograft valve replacement should be coded as a Ross procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4680",
    "display" : "Valve replacement, Aortic (AVR), Mechanical",
    "definition" : "Replacement of the aortic valve with a mechanical prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4690",
    "display" : "Valve replacement, Aortic (AVR), Bioprosthetic",
    "definition" : "Replacement of the aortic valve with a bioprosthetic prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4700",
    "display" : "Valve replacement, Aortic (AVR), Homograft",
    "definition" : "Replacement of the aortic valve with a homograft prosthetic valve.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4715",
    "display" : "Aortic root replacement, Bioprosthetic",
    "definition" : "Replacement of the aortic root (that portion of the aorta attached to the heart; it gives rise to the coronary arteries) with a bioprosthesis (e.g., porcine) in a conduit, often composite.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4720",
    "display" : "Aortic root replacement, Mechanical",
    "definition" : "Replacement of the aortic root (that portion of the aorta attached to the heart; it gives rise to the coronary arteries) with a mechnical prosthesis in a composite conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4730",
    "display" : "Aortic root replacement, Homograft",
    "definition" : "Replacement of the aortic root (that portion of the aorta attached to the heart; it gives rise to the coronary arteries) with a homograft.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4735",
    "display" : "Aortic root replacement, Valve sparing",
    "definition" : "Replacement of the aortic root (that portion of the aorta attached to the heart; it gives rise to the coronary arteries) without replacing the aortic valve (using a tube graft).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4740",
    "display" : "Ross procedure",
    "definition" : "Replacement of the aortic valve with a pulmonary autograft and replacement of the pulmonary valve with a homograft conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4750",
    "display" : "Konno procedure",
    "definition" : "Relief of left ventricular outflow tract obstruction associated with aortic annular hypoplasia, aortic valvar stenosis and/or aortic valvar insufficiency via Konno aortoventriculoplasty. Components of the surgery include a longitudinal incision in the aortic septum, a vertical incision in the outflow tract of the right ventricle to join the septal incision, aortic valve replacement, and patch reconstruction of the outflow tracts of both ventricles.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4760",
    "display" : "Ross-Konno procedure",
    "definition" : "Relief of left ventricular outflow tract obstruction associated with aortic annular hypoplasia, aortic valvar stenosis and/or aortic valvar insufficiency via Konno aortoventriculoplasty using a pulmonary autograft root for the aortic root replacement.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4770",
    "display" : "Other annular enlargement procedure",
    "definition" : "Techniques included under this procedure code include those designed to effect aortic annular enlargement that are not included in other procedure codes. These include the Manougian and Nicks aortic annular enlargement procedures.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4780",
    "display" : "Aortic stenosis, Subvalvar, Repair",
    "definition" : "Subvalvar aortic stenosis repair by a range of techniques including excision, excision and myotomy, excision and myomectomy, myotomy, myomectomy, initial placement of apical-aortic conduit (LV to aorta conduit replacement would be coded as conduit reoperation) , Vouhé aortoventriculoplasty (aortic annular incision at commissure of left and right coronary cusps is carried down to the septum and RV infundibulum; septal muscle is resected, incisions are closed, and the aortic annulus is reconstituted), or other aortoventriculoplasty techniques.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4790",
    "display" : "Aortic stenosis, Supravalvar, Repair",
    "definition" : "Repair of supravalvar aortic stenosis involving all techniques of patch aortoplasty and aortoplasty involving the use of all autologous tissue. In simple patch aortoplasty a diamond-shaped patch may be used, in the Doty technique an extended patch is placed (Y-shaped patch, incision carried into two sinuses), and in the Brom repair the ascending aorta is transected, any fibrous ridge is resected, and the three sinuses are patched separately.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4800",
    "display" : "Valve surgery, Other, Aortic",
    "definition" : "Other aortic valve surgery not specified in other procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4810",
    "display" : "Sinus of Valsalva, Aneurysm repair",
    "definition" : "Sinus of Valsalva aneurysm repair can be organized by site of aneurysm (left, right or noncoronary sinus), type of repair (suture, patch graft, or root repair by tube graft or valved conduit), and approach used (from chamber of origin (aorta) or from chamber of penetration (LV, RV, PA, left or right atrium, etc.). Aortic root replacement procedures in association with sinus of Valsalva aneurysm repairs are usually for associated uncorrectable aortic insufficiency or multiple sinus involvement and the aortic root replacement procedure should also be listed. Additional procedures also performed at the time of sinus of Valsalva aneurysm repair include but are not limited to VSD closure, repair or replacement of aortic valve, and coronary reconstruction; these procedures should also be coded separately from the sinus of Valsalva aneurysm repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4820",
    "display" : "LV to aorta tunnel repair",
    "definition" : "LV to aorta tunnel repair can be accomplished by suture, patch, or both, and may require reimplantation of the right coronary artery. Associated coronary artery procedures should be coded separately from the LV to aorta tunnel repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4830",
    "display" : "Valvuloplasty, Mitral",
    "definition" : "Repair of mitral valve including, but not limited to: valvotomy (closed or open heart), cleft repair, annuloplasty with or without ring, chordal reconstruction, commissuorotomy, leaflet repair, or papillary muscle repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4840",
    "display" : "Mitral stenosis, Supravalvar mitral ring repair",
    "definition" : "Supravalvar mitral ring repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4850",
    "display" : "Valve replacement, Mitral (MVR)",
    "definition" : "Replacement of mitral valve with prosthetic valve, any kind, in suprannular or annular position.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4860",
    "display" : "Valve surgery, Other, Mitral",
    "definition" : "Other mitral valve surgery not specified in procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4870",
    "display" : "Norwood procedure",
    "definition" : "The Norwood operation is synonymous with the term 'Norwood (Stage 1)' and is defined as an aortopulmonary connection and neoaortic arch construction resulting in univentricular physiology and pulmonary blood flow controlled with a calibrated systemic-to-pulmonary artery shunt, or a right ventricle to pulmonary artery conduit, or rarely, a cavopulmonary connection.  When coding the procedure 'Norwood procedure', the primary procedure of the operation should be 'Norwood procedure'. The second procedure (Procedure 2 after the Norwood procedure) must then document the source of pulmonary blood flow and be chosen from the following eight choices: 1. Shunt, Systemic to pulmonary, Modified Blalock- Taussig Shunt (MBTS) 2. Shunt, Systemic to pulmonary, Central (from aorta or to main pulmonary artery) 3. Shunt, Systemic to pulmonary, Other 4. Conduit placement, RV to PA 5. Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn) 6. Glenn (unidirectional cavopulmonary anastomosis) (unidirectional Glenn) 7. Bilateral bidirectional cavopulmonary anastomosis (BBDCPA) (bilateral bidirectional Glenn) 8. HemiFontan",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4880",
    "display" : "HLHS biventricular repair",
    "definition" : "Performed in patients who have small but adequately sized ventricles to support systemic circulation. These patients usually have small, but not stenotic, aortic and/or mitral valves. Primary biventricular repair has consisted of extensive aortic arch and ascending aorta enlargement with a patch, closure of interventricular and interatrial communications, and conservative approach for left ventricular outflow tract obstruction (which may include mitral stenosis at any level, subaortic stenosis, aortic stenosis, aortic arch hypoplasia, coarctation, or interrupted aortic arch). Concurrent operations (e.g., coarctation repair, aortic valve repair or replacement, etc.) can be coded separately within the database.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4910",
    "display" : "Partial left ventriculectomy (LV volume reduction surgery) (Batista)",
    "definition" : "Wedge resection of LV muscle, with suturing of cut edges together, to reduce LV volume.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4920",
    "display" : "Pericardial drainage procedure",
    "definition" : "Pericardial drainage can include a range of therapies including, but not limited to: pericardiocentesis, pericardiostomy tube placement, pericardial window creation, and open pericardial drainage (pericardiotomy).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4930",
    "display" : "Pericardiectomy",
    "definition" : "Surgical removal of the pericardium.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4940",
    "display" : "Pericardial procedure, Other",
    "definition" : "Other pericardial procedures that include, but are not limited to: pericardial reconstruction for congenital absence of the pericardium, pericardial biopsy, pericardial mass or cyst excision.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4950",
    "display" : "Fontan, Atriopulmonary connection",
    "definition" : "Fontan-type procedure with atriopulmonary connection.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4960",
    "display" : "Fontan, Atrioventricular connection",
    "definition" : "Fontan-type procedure with atrioventricular connection, either direct or with RA-RV conduit, valved or nonvalved.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4970",
    "display" : "Fontan, TCPC, Lateral tunnel, Fenestrated",
    "definition" : "Total cavopulmonary connection using an intraatrial lateral tunnel construction, with fenestration.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-4980",
    "display" : "Fontan, TCPC, Lateral tunnel, Nonfenestrated",
    "definition" : "Total cavopulmonary connection using an intraatrial lateral tunnel construction, with no fenestration.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5000",
    "display" : "Fontan, TCPC, External conduit, Fenestrated",
    "definition" : "Total cavopulmonary connection using an external conduit to connect the infradiaphragmatic systemic venous return to the pulmonary artery, with fenestration.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5010",
    "display" : "Fontan, TCPC, External conduit, Nonfenestrated",
    "definition" : "Total cavopulmonary connection using an external conduit to connect the infradiaphragmatic systemic venous return to the pulmonary artery, with no fenestration.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5025",
    "display" : "Fontan revision or conversion (Re-do Fontan)",
    "definition" : "Revision of a previous Fontan procedure to a total cavopulmonary connection.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5030",
    "display" : "Fontan, Other",
    "definition" : "Other Fontan procedure not specified in procedure codes. May include takedown of a Fontan procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5035",
    "display" : "Ventricular septation",
    "definition" : "Creation of a prosthetic ventricular septum. Surgical procedure used to septate univentricular hearts with two atrioventricular valves. Additional procedures, such as resection of subpulmonic stenosis, should be listed separately.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5050",
    "display" : "Congenitally corrected TGA repair, Atrial switch and ASO (double switch)",
    "definition" : "Repair of congenitally corrected TGA by concomitant atrial switch (Mustard or Senning) and arterial switch operation. VSD closure is usually performed as well; this should be coded separately.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5060",
    "display" : "Congenitally corrected TGA repair, Atrial switch and Rastelli",
    "definition" : "Repair of congenitally corrected TGA by concomitant atrial switch (Mustard or Senning) and VSD closure to the aortic valve with placement of an RV-to-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5070",
    "display" : "Congenitally corrected TGA repair, VSD closure",
    "definition" : "Repair of congenitally corrected TGA by VSD closure only.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5080",
    "display" : "Congenitally corrected TGA repair, VSD closure and LV to PA conduit",
    "definition" : "Repair of congenitally corrected TGA by VSD closure and placement of an LV-to-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5090",
    "display" : "Congenitally corrected TGA repair, Other",
    "definition" : "Any procedures for correction of CCTGA not otherwised specified in other listed procedure codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5110",
    "display" : "Arterial switch operation (ASO)",
    "definition" : "Arterial switch operation is used for repair of transposition of the great arteries (TGA). The pulmonary artery and aorta are transected and translocated so that the pulmonary artery arises from the right ventricle and the aorta from the left ventricle.  Coronary artery transfer is also accomplished.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5120",
    "display" : "Arterial switch operation (ASO) and VSD repair",
    "definition" : "Arterial switch operation is used for repair of transposition of the great arteries (TGA). The pulmonary artery and aorta are transected and translocated so that the pulmonary artery arises from the right ventricle and the aorta from the left ventricle.  Coronary artery transfer is also accomplished. The VSD is closed, usually with a patch.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5123",
    "display" : "Arterial switch procedure + Aortic arch repair",
    "definition" : "Concomitant arterial switch operation and repair of the aortic arch in patients with transposition of the great arteries with intact ventricular septum and associated coarctation of the aorta or interrupted aortic arch.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5125",
    "display" : "Arterial switch procedure and VSD repair + Aortic arch repair",
    "definition" : "Concomitant arterial switch operation with VSD closure and repair of aortic arch in patients with transposition of the great arteries with VSD and associated coarctation of the aorta or interrupted aortic arch.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5130",
    "display" : "Senning",
    "definition" : "Atrial baffle procedure for rerouting of venous flow in TGA effecting a \"physiological repair\".  The caval flow is directed behind the baffle to the mitral valve, left ventricle and pulmonary artery while the pulmonary venous flow is directed in front of the baffle to the tricuspid valve, right ventricle, and aorta. The Senning procedure uses atrial wall to construct the baffle.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5140",
    "display" : "Mustard",
    "definition" : "Atrial baffle procedure for rerouting of venous flow in TGA effecting a \"physiological repair\".  The caval flow is directed behind the baffle to the mitral valve, left ventricle and pulmonary artery while pulmonary venous flow is directed in front of the baffle to the tricuspid valve, right ventricle, and aorta. The Mustard procedure uses patch material to construct the baffle.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5145",
    "display" : "Atrial baffle procedure, Mustard or Senning revision",
    "definition" : "Revision of a previous atrial baffle procedure (either Mustard or Senning), for any reason (e.g., obstruction, baffle leak).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5150",
    "display" : "Rastelli",
    "definition" : "Most often used for patients with TGAVSD and significant LVOTO, the Rastelli operation consists of an LV-to-aorta intraventricular baffle closure of the VSD and placement of an RV-to-PA conduit.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5160",
    "display" : "REV",
    "definition" : "The Lecompte (REV) intraventricular repair is designed for patients with abnormalities of ventriculoarterial connection in whom a standard intraventricular tunnel repair cannot be performed. It is also suitable for patients in whom an arterial switch procedure with tunneling of the VSD to the pulmonary artery cannot be performed because of pulmonary (left ventricular outflow tract) stenosis. A right ventriculotomy incision is made. The infundibular (conal) septum, located between the two semilunar valves, is aggressively resected if its presence interferes with the construction of a tunnel from the VSD to the aorta. The VSD is then tunneled to the aorta. The decision to perform or not to perform the Lecompte maneuver should be made at the beginning of the operation. If the Lecompte maneuver is not performed the pulmonary artery is translocated to the right ventricular outflow tract on the side of the aorta that provides the shortest route. (When the decision to perform the Lecompte maneuver has been made, the great vessels are transected and this maneuver is performed at the beginning of the operation.) The pulmonary artery orifice is then closed. The aorta, if it had been transected during the performance of the Lecompte maneuver, is then reconstructed. A vertical incision is made on the anterior aspect of the main pulmonary artery. The posterior margin of the pulmonary artery is sutured to the superior aspect of the vertical right ventriculotomy incision. A generous patch of autologous pericardium is used to close the inferior portion of the right ventriculotomy and the anterior portion of the pulmonary artery. A monocusp pericardial valve is inserted extemporaneously.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5180",
    "display" : "DORV, Intraventricular tunnel repair",
    "definition" : "Repair of DORV using a tunnel closure of the VSD to the aortic valve. This also includes the posterior straight tunnel repair of Kawashima",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5200",
    "display" : "DOLV repair",
    "definition" : "Because of the morphologic variability of DOLV, there are many approaches to repair, including: intraventricular tunnel repair directing the VSD to the pulmonary valve, the REV procedure, or the Rastelli procedure. In the case of DOLV use this code for tunnel closure to the pulmonary valve. If the REV or Rastelli procedures are performed then use those respective codes.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5210",
    "display" : "Coarctation repair, End to end",
    "definition" : "Repair of coarctation of aorta by excision of the coarctation segment and end-to-end circumferential anastomosis of the aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5220",
    "display" : "Coarctation repair, End to end, Extended",
    "definition" : "Repair of coarctation of the aorta by excision of the coarctation segment and end-to-end anastomosis of the oblique ends of the aorta, creating an extended anastomosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5230",
    "display" : "Coarctation repair, Subclavian flap",
    "definition" : "Repair of coarctation of the aorta by ligating, dividing, and opening the subclavian artery, incising the coarctation site, and folding down the subclavian artery onto the incision in the aorta, suturing the subclavian \"flap\" in place, creating a roof over the area of the previous coarctation.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5240",
    "display" : "Coarctation repair, Patch aortoplasty",
    "definition" : "Repair of coarctation of the aorta by incising the coarctation site with placement of a patch sutured in place longitudinally along the aortotomy edge.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5250",
    "display" : "Coarctation repair, Interposition graft",
    "definition" : "Repair of coarctation of the aorta by resection of the coarctation segment and placement of a prosthetic tubular interposition graft anastomosed circumferentially to the cut ends of the aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5260",
    "display" : "Coarctation repair, Other",
    "definition" : "Any repair of coarctation not specified in procedure codes. This may include, for example, a combination of two approaches for coarctation repair or extra-anatomic bypass graft, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5275",
    "display" : "Coarctation repair + VSD repair",
    "definition" : "Coarctation of aorta repair, any technique, and simultaneous VSD repair, any type VSD, any type repair.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5280",
    "display" : "Aortic arch repair",
    "definition" : "Aortic arch repair, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5285",
    "display" : "Aortic arch repair + VSD repair",
    "definition" : "Aortic arch repair, any technique, and simultaneous VSD repair, any type VSD, any type repair. This includes repair of IAA with VSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5290",
    "display" : "Coronary artery fistula ligation",
    "definition" : "Coronary artery fistula repair using any technique. If additional technique information may be supplied by another procedure code, please list separately (e.g., bypass graft).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5291",
    "display" : "Anomalous origin of coronary artery from pulmonary artery repair",
    "definition" : "Repair of anomalous origin of the coronary artery (any) from the pulmonary artery, by any technique (ligation, translocation with aortic implantation, Takeuchi operation, bypass graft). If additional technique information may be supplied by another procedure code, please list separately (for example, bypass graft).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5300",
    "display" : "Coronary artery bypass",
    "definition" : "Coronary artery bypass graft procedure, any technique (with or without CPB, venous or arterial graft, one or more grafts, etc.), for any coronary artery pathology (coronary arterial fistula, aneurysm, coronary bridging, atresia of left main, acquired coronary artery disease, etc.).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5305",
    "display" : "Anomalous aortic origin of coronary artery from aorta (AAOCA) repair",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5310",
    "display" : "Coronary artery procedure, Other",
    "definition" : "Any coronary artery procedure not specifically listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5320",
    "display" : "Interrupted aortic arch repair",
    "definition" : "Repair of interrupted aortic arch (any type) by any technique (direct anastomosis, prosthetic graft, etc). Does not include repair of IAA-VSD.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5330",
    "display" : "PDA closure, Surgical",
    "definition" : "Closure of a PDA by any surgical technique (ligation, division, clip) using any approach (i.e., thoracotomy, thoracoscopic, etc).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5340",
    "display" : "PDA closure, Device",
    "definition" : "Closure of a PDA by device using transcatheter techniques.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5360",
    "display" : "Vascular ring repair",
    "definition" : "Repair of vascular ring (any type, except pulmonary artery sling) by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5365",
    "display" : "Aortopexy",
    "definition" : "Surgical fixation of the aorta to another structure (usually the posterior aspect of the sternum) to relieve compression on another vessel or structure (e.g., trachea).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5370",
    "display" : "Pulmonary artery sling repair",
    "definition" : "Pulmonary artery sling repair by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5380",
    "display" : "Aortic aneurysm repair",
    "definition" : "Aortic aneurysm repair by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5390",
    "display" : "Aortic dissection repair",
    "definition" : "Aortic dissection repair by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5400",
    "display" : "Lung biopsy",
    "definition" : "Lung biopsy, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5420",
    "display" : "Lung procedure, Other",
    "definition" : "Included in this procedure code would be any lung procedure other than transplant, such as, but not limited to: pneumonectomy (left or right), lobectomy (any lobe), bilobectomy (two lobes), segmental lung resection (any segment), or wedge resection.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5430",
    "display" : "Pectus repair",
    "definition" : "Repair of pectus excavatum or carinatum by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5440",
    "display" : "Tracheal procedure",
    "definition" : "Any tracheal procedure, including but not limited to relief of tracheal stenosis (any means including pericardial graft, autograft insertion, homograft insertion, resection with reanastomosis, rib cartilage insertion, or slide tracheoplasty). Tracheal stent placement or balloon dilation should be coded separately.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5450",
    "display" : "Pacemaker implantation, Permanent",
    "definition" : "Implantation of a permanent pacemaker of any type (e.g., single-chamber, dual-chamber, atrial antitachycardia), with any lead configuration or type (atrial, ventricular, atrial and ventricular, transvenous, epicardial, transmural), by any technique (sternotomy, thoracotomy etc).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5460",
    "display" : "Pacemaker procedure",
    "definition" : "Any revision to a previously placed pacemaker system including revisions to leads, generators, pacemaker pockets. This may include explantation of pacemakers or leads as well.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5470",
    "display" : "ICD (AICD) implantation",
    "definition" : "Implantation of an (automatic) implantable cardioverter defibrillator system.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5480",
    "display" : "ICD (AICD) ([automatic] implantable cardioverter defibrillator) procedure",
    "definition" : "Any revision to a previously placed AICD including revisions to leads, pads, generators, pockets.  This may include explantation procedures as well.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5490",
    "display" : "Arrhythmia surgery - atrial, Surgical Ablation",
    "definition" : "Surgical ablation (any type) of any atrial arrhythmia.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5500",
    "display" : "Arrhythmia",
    "definition" : "Surgical ablation (any type) of any surgery - ventricular, Surgical Ablation ventricular arrhythmia.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5590",
    "display" : "Shunt, Systemic to pulmonary, Modified Blalock-Taussig Shunt (MBTS)",
    "definition" : "Placement of a tube graft from a branch of the aortic arch to the pulmonary artery with or without bypass, from any approach (thoracotomy, sternotomy).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5600",
    "display" : "Shunt, Systemic to pulmonary, Central (from aorta or to main pulmonary artery)",
    "definition" : "A direct anastomosis or placement of a tube graft from the aorta to the pulmonary artery with or without bypass, from any approach (thoracotomy, sternotomy).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5610",
    "display" : "Shunt, Systemic to pulmonary, Other",
    "definition" : "Placement of any other systemic-topulmonary artery shunt, with or without bypass, from any approach (thoracotomy, sternotomy) that is not otherwise coded. Includes classic Blalock-Taussig systemic-to-pulmonary artery shunt.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5630",
    "display" : "Shunt, Ligation and takedown",
    "definition" : "Takedown of any shunt.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5640",
    "display" : "PA banding (PAB)",
    "definition" : "Placement of a pulmonary artery band, any type.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5650",
    "display" : "PA debanding",
    "definition" : "Debanding of pulmonary artery. Please list separately any pulmonary artery reconstruction required.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5660",
    "display" : "Damus-Kaye- Stansel procedure (DKS) (creation of AP anastomosis without arch reconstruction)",
    "definition" : "In the Damus-Kaye-Stansel procedure the proximal transected main pulmonary artery is connected by varying techniques to the aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5670",
    "display" : "Bidirectional cavopulmonary anastomosis (BDCPA) (bidirectional Glenn)",
    "definition" : "Superior vena cava to pulmonary artery anastomosis allowing flow to both pulmonary arteries with an end-to-side superior vena-to-pulmonary artery anastomosis.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5680",
    "display" : "Glenn (unidirectional cavopulmonary anastomosis) (unidirectional Glenn)",
    "definition" : "Superior vena cava to ipsilateral pulmonary artery anastomosis (i.e., LSVC to LPA, RSVC to RPA).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5690",
    "display" : "Bilateral bidirectional cavopulmonary anastomosis (BBDCPA) (bilateral bidirectional Glenn)",
    "definition" : "Bilateral superior vena cava-to-pulmonary artery anastomoses (requires bilateral SVCs).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5700",
    "display" : "HemiFontan",
    "definition" : "A HemiFontan is an operation that includes a bidirectional superior vena cava (SVC)-to-pulmonary artery anastomosis and the connection of this \"SVC-pulmonary artery amalgamation\" to the atrium, with a \"dam\" between this \"SVC-pulmonary artery amalgamation\" and the atrium. This operation can be accomplished with a variety of operative strategies including the following two techniques and other techniques that combine elements of both of these approaches: (1) Augmenting both branch pulmonary arteries with a patch and suturing the augmented branch pulmonary arteries to an incision in the medial aspect of the superior vena cava. (With this approach, the pulmonary artery patch forms a roof over the SVC-topulmonary artery anastomosis and also forms a \"dam\" between the SVC-pulmonary artery amalgamation and the right atrium.) (2) Anastomosing both ends of the divided SVC to incisions in the top and bottom of the right pulmonary artery, and using a separate patch to close junction of the SVC and the right atrium.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5710",
    "display" : "Palliation, Other",
    "definition" : "Any other palliative procedure not specifically listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5720",
    "display" : "Aneurysm, Ventricular, Right, Repair",
    "definition" : "Repair of right ventricular aneurysm, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5730",
    "display" : "Aneurysm, Ventricular, Left, Repair",
    "definition" : "Repair of left ventricular aneurysm, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5740",
    "display" : "Aneurysm, Pulmonary artery, Repair",
    "definition" : "Repair of pulmonary artery aneurysm, any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5760",
    "display" : "Cardiac tumor resection",
    "definition" : "Resection of cardiac tumor, any type.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5772",
    "display" : "Conduit placement, Other",
    "definition" : "Placement of a conduit from any chamber or vessel to any vessel, valved or valveless, not listed elsewhere.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5774",
    "display" : "Conduit placement, Ventricle to aorta",
    "definition" : "Placement of a conduit from the right or left ventricle to the aorta.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5780",
    "display" : "Pulmonary AV fistula repair/occlusion",
    "definition" : "Repair or occlusion of a pulmonary arteriovenous fistula.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5790",
    "display" : "Ligation, Pulmonary artery",
    "definition" : "Ligation or division of the pulmonary artery. Most often performed as a secondary procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5802",
    "display" : "Pulmonary embolectomy, Acute pulmonary embolus",
    "definition" : "Acute pulmonary embolism (clot) removal, through catheter or surgery.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5804",
    "display" : "Pulmonary embolectomy, Chronic pulmonary embolus",
    "definition" : "Chronic pulmonary embolism (clot) removal, through catheter or surgery.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5810",
    "display" : "Pleural drainage procedure",
    "definition" : "Pleural drainage procedure via thoracocentesis, tube thoracostomy, or open surgical drainage.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5820",
    "display" : "Pleural procedure, Other",
    "definition" : "Other pleural procedures not specifically listed; may include pleurodesis (mechanical, talc, antibiotic or other), among others.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5830",
    "display" : "Ligation, Thoracic duct",
    "definition" : "Ligation of the thoracic duct; most commonly for persistent chylothorax.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5840",
    "display" : "Decortication",
    "definition" : "Decortication of the lung by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5850",
    "display" : "Esophageal procedure",
    "definition" : "Any procedure performed on the esophagus.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5860",
    "display" : "Mediastinal procedure",
    "definition" : "Any non-cardiovascular mediastinal procedure not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5870",
    "display" : "Bronchoscopy",
    "definition" : "Bronchoscopy, rigid or flexible, for diagnostic, biopsy, or treatment purposes (laser, stent, dilation, lavage).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5880",
    "display" : "Diaphragm plication",
    "definition" : "Plication of the diaphragm; most often for diaphragm paralysis due to phrenic nerve injury.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5890",
    "display" : "Diaphragm procedure, Other",
    "definition" : "Any diaphragm procedure not specifically listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5900",
    "display" : "Intraaortic balloon pump (IABP) insertion",
    "definition" : "Insertion of intraaortic balloon pump by any technique.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5910",
    "display" : "ECMO procedure",
    "definition" : "Any ECMO procedure (cannulation, decannulation, etc.).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5920",
    "display" : "Right/left heart assist device procedure",
    "definition" : "Any right, left, or biventricular assist device procedure (placement, removal etc.).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5930",
    "display" : "VATS (videoassisted thoracoscopic surgery)",
    "definition" : "Video-assisted thoracoscopic surgery utilized; this code should be used in addition to the specific procedure code (e.g., if PDA ligated using VATS technique, PDA ligation should be primary procedure, VATS should be secondary procedure).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5940",
    "display" : "Minimally invasive procedure",
    "definition" : "Any procedure using minimally invasive technique; this code should be used in addition to the specific procedure code (e.g., if ASD closed using minimally invasive technique, ASD repair should be primary procedure, minimally invasive procedure should be listed additionally).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5950",
    "display" : "Bypass for noncardiac lesion",
    "definition" : "Use of cardiopulmonary bypass for noncardiac lesion; this code may be used in addition to the specific procedure code if one is available (e.g., tracheal procedures may be done using CPB - the tracheal procedure should be the primary procedure and use of cardiopulmonary bypass for noncardiac lesion should be listed additionally).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5960",
    "display" : "Delayed sternal closure",
    "definition" : "Sternal closure effected after patient has left operating room with sternum open, either because of swelling or electively after complex heart procedures. This procedure should be operative type No CPB Cardiovascular.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5970",
    "display" : "Mediastinal exploration",
    "definition" : "Mediastinal exploration, most often for postoperative control of bleeding or tamponade, but may be exploration to assess mediastinal mass, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5980",
    "display" : "Sternotomy wound drainage",
    "definition" : "Drainage of the sternotomy wound.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-5990",
    "display" : "Thoracotomy, Other",
    "definition" : "Any procedure performed through a thoracotomy incision not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6000",
    "display" : "Cardiotomy, Other",
    "definition" : "Any procedure involving an incision in the heart that is not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6010",
    "display" : "Cardiac procedure, Other",
    "definition" : "Any cardiac procedure, bypass or nonbypass, that is not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6020",
    "display" : "Thoracic and/or mediastinal procedure, Other",
    "definition" : "Any thoracic and/or mediastinal procedure not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6030",
    "display" : "Peripheral vascular procedure, Other",
    "definition" : "Any peripheral vascular procedure; may include procedures such as femoral artery repair, iliac artery repair, etc.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6040",
    "display" : "Miscellaneous procedure, Other",
    "definition" : "Any miscellaneous procedure not otherwise listed.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6050",
    "display" : "Organ procurement",
    "definition" : "Procurement of an organ for transplant (most likely, heart, lungs, or heart and lungs).",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6095",
    "display" : "Shunt, Reoperation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6100",
    "display" : "Aortic stenosis, Subvalvar, Repair, With myectomy for IHSS",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6110",
    "display" : "ASD repair, Patch + PAPVC repair",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6120",
    "display" : "PAPVC repair, Baffle redirection to left atrium with systemic vein translocation (Warden) (SVC sewn to right atrial appendage)",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6130",
    "display" : "Superior Cavopulmonary anastomosis(es) + PA reconstruction",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6140",
    "display" : "Hybrid approach \"Stage 2\", Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding + Aortic arch repair (Norwood [Stage 1] + Superior Cavopulmonary anastomosis(es) + PA Debanding)",
    "definition" : "A \"Hybrid Procedure\" is defined as a procedure that combines surgical and transcatheter interventional approaches. The term \"Hybrid approach\" is used somewhat differently than the term \"Hybrid Procedure\". A \"Hybrid approach\" is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as \"Hybrid approach\" are truly \"Hybrid Procedures\". It should be acknowledged that a Hybrid approach \"Stage 2\" (Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding, with or without Aortic arch repair) gets its name not because it has any actual hybrid elements, but because it is part of a planned staged approach that is typically commenced with a hybrid procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6150",
    "display" : "Hybrid approach \"Stage 2\", Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding + Without aortic arch repair",
    "definition" : "A \"Hybrid Procedure\" is defined as a procedure that combines surgical and transcatheter interventional approaches. The term \"Hybrid approach\" is used somewhat differently than the term \"Hybrid Procedure\". A \"Hybrid approach\" is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as \"Hybrid approach\" are truly \"Hybrid Procedures\". It should be acknowledged that a Hybrid approach \"Stage 2\" (Aortopulmonary amalgamation + Superior Cavopulmonary anastomosis(es) + PA Debanding, with or without Aortic arch repair) gets its name not because it has any actual hybrid elements, but because it is part of a planned staged approach that is typically commenced with a hybrid procedure.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6160",
    "display" : "Hybrid Approach \"Stage 1\", Application of RPA & LPA bands",
    "definition" : "A 'Hybrid Procedure' is defined as a procedure that combines surgical and transcatheter interventional approaches. The term 'Hybrid approach' is used somewhat differently than the term 'Hybrid Procedure'. A 'Hybrid approach' is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as 'Hybrid approach' are truly 'Hybrid Procedures'.",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6170",
    "display" : "Hybrid Approach \"Stage 1\", Stent placement in arterial duct (PDA)",
    "definition" : "A \"Hybrid Procedure\" is defined as a procedure that combines surgical and transcatheter interventional approaches. The term \"Hybrid approach\" is used somewhat differently than the term \"Hybrid Procedure\". A \"Hybrid approach\" is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as \"Hybrid approach\" are truly \"Hybrid Procedures\".",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6180",
    "display" : "Hybrid Approach \"Stage 1\", Stent placement in arterial duct (PDA) + application of RPA & LPA bands",
    "definition" : "A \"Hybrid Procedure\" is defined as a procedure that combines surgical and transcatheter interventional approaches. The term \"Hybrid approach\" is used somewhat differently than the term \"Hybrid Procedure\". A \"Hybrid approach\" is defined as any of a group of procedures that fit into the general silo of procedures developed from the combined use of surgical and transcatheter interventional techniques. Therefore, not all procedures classified as \"Hybrid approach\" are truly \"Hybrid Procedures\".",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6190",
    "display" : "Aortic root translocation over left ventricle (Including Nikaidoh procedure)",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6200",
    "display" : "TAPVC repair + Shunt - systemic-to-pulmonary",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6210",
    "display" : "TGA, Other procedures (Kawashima, LVPA conduit, other)",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6220",
    "display" : "Truncus + Interrupted aortic arch repair (IAA) repair",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6230",
    "display" : "Valve replacement, Common atrioventricular valve",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6240",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Aortic",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6250",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Common atrioventricular valve",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6260",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Mitral",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6270",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Pulmonic",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6280",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Tricuspid",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6290",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Truncal valve",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6300",
    "display" : "Valvuloplasty, Common atrioventricular valve",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6310",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Aortic with Ross procedure",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6320",
    "display" : "Valvuloplasty converted to valve replacement in the same operation, Aortic with Ross-Konno procedure",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6330",
    "display" : "Superior cavopulmonary anastomosis(es) (Glenn or HemiFontan) + Atrioventricular valvuloplasty",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6340",
    "display" : "Fontan + Atrioventricular valvuloplasty",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6350",
    "display" : "Explantation of pacing system",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6360",
    "display" : "ECMO cannulation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6370",
    "display" : "ECMO decannulation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6380",
    "display" : "VAD implantation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6390",
    "display" : "VAD explantation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6410",
    "display" : "Cardiovascular catheterization procedure, Therapeutic",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6420",
    "display" : "Echocardiography procedure, Sedated transesophageal echocardiogram",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6430",
    "display" : "Echocardiography procedure, Sedated transthoracic echocardiogram",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6435",
    "display" : "Noncardiovascular, Non-thoracic procedure on cardiac patient with cardiac anesthesia",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6440",
    "display" : "Radiology procedure on cardiac patient, Cardiac Computerized Axial Tomography (CT Scan)",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6450",
    "display" : "Radiology procedure on cardiac patient, Cardiac Magnetic Resonance Imaging (MRI)",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6460",
    "display" : "Radiology procedure on cardiac patient, Diagnostic radiology",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6470",
    "display" : "Radiology procedure on cardiac patient, Non-Cardiac Computerized Tomography (CT) on cardiac patient",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6480",
    "display" : "Radiology procedure on cardiac patient, Non-cardiac Magnetic Resonance Imaging (MRI) on cardiac patient",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6490",
    "display" : "Interventional radiology procedure on cardiac patient",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6500",
    "display" : "Cardiovascular catheterization procedure, Diagnostic",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6510",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Hemodynamic data obtained",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6520",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Angiographic data obtained",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6530",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Transluminal test occlusion",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6540",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Hemodynamic alteration",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6550",
    "display" : "Cardiovascular catheterization procedure, Diagnostic, Electrophysiology alteration",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6570",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon dilation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6580",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Septostomy",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6590",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Balloon valvotomy",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6600",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Coil implantation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6610",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Device implantation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6620",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent insertion",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6630",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Stent re-dilation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6640",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Perforation (establishing interchamber and/or intervessel communication)",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6650",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter Fontan completion",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6660",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Transcatheter implantation of valve",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6670",
    "display" : "Cardiovascular catheterization procedure, Therapeutic, Adjunctive therapy",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6680",
    "display" : "Cardiovascular electrophysiological catheterization procedure",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "SP-2010-6690",
    "display" : "Cardiovascular electrophysiological catheterization procedure, Therapeutic ablation",
    "property" : [{
      "code" : "class",
      "valueString" : "status post"
    },
    {
      "code" : "group",
      "valueString" : "status post"
    },
    {
      "code" : "context",
      "valueString" : "patient"
    },
    {
      "code" : "ver2010",
      "valueBoolean" : true
    }]
  },
  {
    "code" : "CP-2019-IC-01",
    "display" : "Arrhythmia, Atrial, Atrial fibrillation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmias"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-02",
    "display" : "Arrhythmia, Atrial, Atrial flutter",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmias"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-03",
    "display" : "Arrhythmia, Atrial, Other",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmias"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-04",
    "display" : "Arrhythmia, Heart block",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmias"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-05",
    "display" : "Arrhythmia, Heart block, Acquired",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmias"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-06",
    "display" : "Arrhythmia, Junctional",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmias"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-07",
    "display" : "Arrhythmia, Pacemaker implantation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmias"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-08",
    "display" : "Arrhythmia, Ventricular",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Arrhythmias"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-10",
    "display" : "Complication of cardiovascular catheterization procedure",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Device related"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-11",
    "display" : "Complication of cardiovascular catheterization procedure, Device embolization",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Device related"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-12",
    "display" : "Complication of cardiovascular catheterization procedure, Device malfunction",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Device related"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-13",
    "display" : "Complication of cardiovascular catheterization procedure, Perforation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Device related"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-14",
    "display" : "Foreign body, Intracardiac foreign body",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Device related"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-15",
    "display" : "Foreign body, Intravascular foreign body",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Device related"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-16",
    "display" : "ASD, Postoperative interatrial communication",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Device related"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-17",
    "display" : "VSD, Postoperative interventricular communication",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Device related"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-18",
    "display" : "PDA, Residual leak",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Device related"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-19",
    "display" : "Prosthetic valve failure",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Valvar complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-20",
    "display" : "Aortic regurgitation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Valvar complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-21",
    "display" : "Pulmonary regurgitation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Valvar complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-22",
    "display" : "Mitral regurgitation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Valvar complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-23",
    "display" : "Tricuspid regurgitation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Valvar complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-24",
    "display" : "Thrombosis",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Vascular access"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-25",
    "display" : "Pseudoaneurysm",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Vascular access"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-26",
    "display" : "Bleeding (clinically relevant)",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Vascular access"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-27",
    "display" : "Vessel perforation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Vascular complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-28",
    "display" : "Aneurysm",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Vascular complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-29",
    "display" : "Extravasation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Vascular complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-30",
    "display" : "Dissection",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Vascular complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-31",
    "display" : "Fistula",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Vascular complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-32",
    "display" : "Perforation",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-33",
    "display" : "Tamponade",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Cardiac complications"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "CP-2019-IC-34",
    "display" : "Death",
    "property" : [{
      "code" : "class",
      "valueString" : "complication"
    },
    {
      "code" : "group",
      "valueString" : "Death"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-07",
    "display" : "Myocarditis",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-08",
    "display" : "Plastic bronchitis",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-09",
    "display" : "Protein-losing enteropathy",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-10",
    "display" : "Pulmonary venous stenosis, Acquired",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Stenosis"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-11",
    "display" : "Pulmonary venous stenosis, Spontaneous",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pulmonary Venous Stenosis"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-13",
    "display" : "Wolff-Parkinson-White syndrome (WPW syndrome)",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-14",
    "display" : "Arrhythmia, Atrial, Atrial fibrillation",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-15",
    "display" : "Arrhythmia, Atrial, Atrial flutter",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-16",
    "display" : "Arrhythmia, Atrial, Other",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Electrophysiological"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-17",
    "display" : "ASD, Postoperative interatrial communication",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Septal Defects"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-18",
    "display" : "Complication of cardiovascular catheterization procedure, Device embolization",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Complications of previous procedures"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-19",
    "display" : "Complication of cardiovascular catheterization procedure, Device malfunction",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Complications of previous procedures"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-20",
    "display" : "Complication of cardiovascular catheterization procedure, Perforation",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Complications of previous procedures"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-21",
    "display" : "Complication of interventional radiology procedure, Device embolization",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Complications of previous procedures"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-22",
    "display" : "Complication of interventional radiology procedure, Device malfunction",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Complications of previous procedures"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-23",
    "display" : "Complication of interventional radiology procedure, Perforation",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Complications of previous procedures"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-24",
    "display" : "Foreign body, Intracardiac foreign body",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Foreign body"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-25",
    "display" : "Foreign body, Intravascular foreign body",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Foreign body"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-26",
    "display" : "Kawasaki disease",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-27",
    "display" : "Diverticulum, Ventricular, Left",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-28",
    "display" : "Diverticulum, Ventricular, Right",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-29",
    "display" : "Diverticulum, Atrium, Left",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Left Heart Lesions"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-30",
    "display" : "Diverticulum, Atrium, Right",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-31",
    "display" : "Tamponade",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Pericardial Disease"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-32",
    "display" : "Coronary artery anomaly, Abnormal origin other",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-33",
    "display" : "Coronary artery anomaly, ALCAPA",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-34",
    "display" : "Coronary artery anomaly, ARCAPA",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-35",
    "display" : "Coronary artery anomaly, Aneurysm from LAD",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-36",
    "display" : "Coronary artery anomaly, Aneurysm from LCA main",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-37",
    "display" : "Coronary artery anomaly, Aneurysm from LCX",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-38",
    "display" : "Coronary artery anomaly, Aneurysm from RCA",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-39",
    "display" : "Coronary artery anomaly, Fistula from LAD",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-40",
    "display" : "Coronary artery anomaly, Fistula from LCA main",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-41",
    "display" : "Coronary artery anomaly, Fistula from LCX",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-42",
    "display" : "Coronary artery anomaly, Fistula from RCA",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-43",
    "display" : "Coronary artery anomaly, Occlusion from LAD",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-44",
    "display" : "Coronary artery anomaly, Occlusion from LCA main",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-45",
    "display" : "Coronary artery anomaly, Occlusion from LCX",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2019-46",
    "display" : "Coronary artery anomaly, Occlusion from RCA",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Coronary"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2023-1",
    "display" : "Dilated cardiomyopathy",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Cardiomyopathy"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2023-2",
    "display" : "Hypertrophic cardiomyopathy",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Cardiomyopathy"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2023-3",
    "display" : "Restrictive cardiomyopathy",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Cardiomyopathy"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2023-4",
    "display" : "Hypertrophic obstructive cardiomyopathy",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Cardiomyopathy"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2024-1",
    "display" : "Status post - bidirectional Glenn",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2024-2",
    "display" : "Status post - bilateral bidirectional Glenn",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2024-3",
    "display" : "DORV",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2024-4",
    "display" : "DORV, Fallot type",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Right Heart Lesions"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2024-5",
    "display" : "Venovenous collaterals",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2024-6",
    "display" : "Arterioarterial collaterals",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Miscellaneous, Other"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  },
  {
    "code" : "DIAG-2024-7",
    "display" : "Coarctation - status post stent placement",
    "property" : [{
      "code" : "class",
      "valueString" : "diagnosis"
    },
    {
      "code" : "group",
      "valueString" : "Thoracic Arteries and Veins"
    },
    {
      "code" : "module",
      "valueString" : "interventional-cardiology"
    }]
  }]
}

```
