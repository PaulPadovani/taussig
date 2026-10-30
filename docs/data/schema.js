/* Généré par 07-site/build/parse_dbml.py — NE PAS ÉDITER À LA MAIN. */
window.TAUSSIG_SCHEMA = {
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
 "tables": [
  {
   "name": "Patient",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "ins_qualified_identifier",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": true,
     "comment": "INS qualifié -> identifiant national unique",
     "type": "texte",
     "fk": null
    },
    {
     "name": "sex",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "birth_date",
     "rawtype": "date",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date",
     "fk": null
    },
    {
     "name": "birth_weight_g",
     "rawtype": "int",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "entier",
     "fk": null
    }
   ],
   "zone": "contexte",
   "rationale": null
  },
  {
   "name": "Practitioner",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "rpps",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": true,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "display_name",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    }
   ],
   "zone": "contexte",
   "rationale": null
  },
  {
   "name": "Organization",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "finess",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": true,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "name",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    }
   ],
   "zone": "contexte",
   "rationale": null
  },
  {
   "name": "CareEpisode",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "patient_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Patient",
     "fk": "Patient"
    },
    {
     "name": "organization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Organization",
     "fk": "Organization"
    },
    {
     "name": "episode_class",
     "rawtype": "episode_class",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    },
    {
     "name": "start_date",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "end_date",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    }
   ],
   "zone": "contexte",
   "rationale": null
  },
  {
   "name": "CardiacDiagnosis",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "patient_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Patient",
     "fk": "Patient"
    },
    {
     "name": "icd11_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "PRIMAIRE : classification CIM-11 (chapitre CC dérivé IPCCC ; licence OMS ouverte)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "ipccc_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "granularité congénitale de référence (IPCCC)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "cim10_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "DÉRIVÉ : administratif PMSI (crossmap IPCCC->CIM-10)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "echsa_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "registre chirurgical congénital (ECHSA-CD, diagnosis)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "diagnosis_label",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "libellé lisible (= display du codage)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "is_locked",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "verrou du diagnostic congénital au niveau patient",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "locked_date",
     "rawtype": "date",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "date de verrouillage",
     "type": "date",
     "fk": null
    },
    {
     "name": "locked_by",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — qui a verrouillé (gouvernance)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "data_source",
     "rawtype": "data_source",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "recorded_at",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "validation_status",
     "rawtype": "validation_status",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    }
   ],
   "zone": "substrats",
   "rationale": {
    "titre": "Un diagnostic figé, verrouillable",
    "corps": "<p>Le diagnostic congénital ne change pas au fil des cathétérismes : une fois validé, il est <b>verrouillé</b> au niveau du patient (<code>is_locked</code>, <code>locked_by</code>). C’est le substrat morphologique stable — « ce avec quoi le patient est né ».</p><p>Il porte <b>quatre codages en parallèle</b> (ICD-11, IPCCC, CIM-10 dérivé, ECHSA) plutôt qu’un seul : aucune terminologie ne suffit à elle seule pour le congénital.</p>",
    "note": "Principe · triple substrat & multi-codage"
   }
  },
  {
   "name": "CatheterizationDiagnosis",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "catheterization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Catheterization",
     "fk": "Catheterization"
    },
    {
     "name": "cardiac_diagnosis_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ CardiacDiagnosis",
     "fk": "CardiacDiagnosis"
    },
    {
     "name": "diagnosis_role",
     "rawtype": "diagnosis_role",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    }
   ],
   "zone": "acte",
   "rationale": {
    "titre": "Pourquoi une table de liaison",
    "corps": "<p>Un cathétérisme peut adresser plusieurs diagnostics, et un diagnostic concerner plusieurs cathétérismes. La table de liaison porte le <b>rôle</b> (indication principale, lésion associée, découverte fortuite) sans dupliquer l’information.</p>",
    "note": "Principe · relation n–n qualifiée"
   }
  },
  {
   "name": "CardiacCondition",
   "note": "Lésion résiduelle/acquise/post-chirurgicale ou état consécutif à une étape chirurgicale. Distincte du diagnostic congénital. Statut clinique (active/resolved) porté par FHIR Condition.clinicalStatus, hors MDS ; historique complet en v5.",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "patient_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Patient",
     "fk": "Patient"
    },
    {
     "name": "condition_type",
     "rawtype": "condition_category",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "residual / acquired / post_surgical_state",
     "type": "énum (3)",
     "fk": null
    },
    {
     "name": "ipccc_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "codage de la lésion (IPCCC)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "cim10_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "administratif (si pertinent PMSI)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "echsa_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "ECHSA-CD : 'status post' (étape chir) OU 'diagnosis' (lésion résiduelle/acquise)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "snomed_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "codage SNOMED (secondaire)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "label",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "related_diagnosis_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "optionnel : rattachement au congénital d'origine",
     "type": "→ CardiacDiagnosis",
     "fk": "CardiacDiagnosis"
    },
    {
     "name": "onset_date",
     "rawtype": "date",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date",
     "fk": null
    },
    {
     "name": "data_source",
     "rawtype": "data_source",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "recorded_at",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "validation_status",
     "rawtype": "validation_status",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    }
   ],
   "zone": "substrats",
   "rationale": {
    "titre": "Ce que le patient traverse",
    "corps": "<p>Distincte du diagnostic congénital : lésions <b>résiduelles</b>, <b>acquises</b>, ou <b>états créés par la chirurgie</b> (palliation étagée). C’est le statut <i>actuel</i> de la cardiopathie — précisément ce que le cathétérisme vient réévaluer.</p><p>Les états d’étape chirurgicale sont codés en ECHSA « status post » (une granularité par palliation).</p>",
    "note": "Principe · triple substrat"
   }
  },
  {
   "name": "CatheterizationCondition",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "catheterization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Catheterization",
     "fk": "Catheterization"
    },
    {
     "name": "cardiac_condition_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ CardiacCondition",
     "fk": "CardiacCondition"
    },
    {
     "name": "indication_role",
     "rawtype": "diagnosis_role",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "réutilise l'enum de rôle",
     "type": "énum (3)",
     "fk": null
    }
   ],
   "zone": "acte",
   "rationale": {
    "titre": "Le rôle, au bon endroit",
    "corps": "<p>Comme pour les diagnostics : la liaison entre un cathétérisme et une condition évolutive porte le rôle d’indication. C’est la relation qui est qualifiée, pas la condition elle-même.</p>",
    "note": "Principe · relation n–n qualifiée"
   }
  },
  {
   "name": "CardiacImplant",
   "note": "Un MaterialUsed implanté au cathé N devient un substrat-cible au cathé N+k. status = dernier état connu (POC) ; ImplantStatusEvent en v5.",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "patient_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Patient",
     "fk": "Patient"
    },
    {
     "name": "device_type",
     "rawtype": "implant_device_type",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (14)",
     "fk": null
    },
    {
     "name": "anatomical_site_snomed",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "brand_model",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "udi",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "implanted_on",
     "rawtype": "date",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date",
     "fk": null
    },
    {
     "name": "implanted_externally",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "posé en chirurgie / autre centre (hors MaterialUsed)",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "source_material_used_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "pont : matériel posé lors d'un cathé TAUSSIG tracé",
     "type": "→ MaterialUsed",
     "fk": "MaterialUsed"
    },
    {
     "name": "previous_implant_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "chaînage valve-in-valve / stent-in-stent",
     "type": "→ CardiacImplant",
     "fk": "CardiacImplant"
    },
    {
     "name": "status",
     "rawtype": "implant_status",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "état COURANT (dernier connu) : functional/degenerated/...",
     "type": "énum (6)",
     "fk": null
    },
    {
     "name": "status_date",
     "rawtype": "date",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date",
     "fk": null
    },
    {
     "name": "status_source_catheterization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — QUEL KT a constaté cet état (amorce historique v5)",
     "type": "→ Catheterization",
     "fk": "Catheterization"
    },
    {
     "name": "data_source",
     "rawtype": "data_source",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "recorded_at",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "validation_status",
     "rawtype": "validation_status",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    }
   ],
   "zone": "substrats",
   "rationale": {
    "titre": "Un implant « vit »",
    "corps": "<p>Un dispositif n’est pas un événement mais un <b>objet longitudinal</b> : son état (fonctionnel → dégénéré → explanté) change au fil des cathétérismes. <code>status_source_catheterization_id</code> retient <i>quel</i> KT a constaté l’état courant.</p><p>C’est le pivot des <b>ré-interventions</b> : le chaînage <code>previous_implant_id</code> relie une valve-dans-valve à la précédente.</p>",
    "note": "Principe · substrat longitudinal (amorce du jumeau numérique)"
   }
  },
  {
   "name": "Catheterization",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "patient_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Patient",
     "fk": "Patient"
    },
    {
     "name": "care_episode_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ CareEpisode",
     "fk": "CareEpisode"
    },
    {
     "name": "primary_operator_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Practitioner",
     "fk": "Practitioner"
    },
    {
     "name": "intent",
     "rawtype": "cath_intent",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    },
    {
     "name": "procedure_datetime",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "weight_kg",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "décimal",
     "fk": null
    },
    {
     "name": "height_cm",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "décimal",
     "fk": null
    },
    {
     "name": "bsa_m2",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "décimal",
     "fk": null
    },
    {
     "name": "bsa_method",
     "rawtype": "bsa_method",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "fluoroscopy_time_min",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "décimal",
     "fk": null
    },
    {
     "name": "dose_area_product",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "décimal",
     "fk": null
    },
    {
     "name": "contrast_used",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "contrast_volume_ml",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "décimal",
     "fk": null
    },
    {
     "name": "snomed_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "ccam_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "echsa_procedure_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "data_source",
     "rawtype": "data_source",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "recorded_at",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "validation_status",
     "rawtype": "validation_status",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    }
   ],
   "zone": "acte",
   "rationale": {
    "titre": "L’acte, pas le code",
    "corps": "<p>Un cathétérisme n’est pas réductible à un code d’acte : c’est un <b>contenant</b> qui rassemble l’abord vasculaire, la séquence de gestes, les mesures, l’anesthésie et l’outcome. Morphométrie et dosimétrie sont saisies au moment de l’acte.</p>",
    "note": "Principe · l’acte comme agrégat"
   }
  },
  {
   "name": "AnesthesiaManagement",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "catheterization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": true,
     "comment": "1:1",
     "type": "→ Catheterization",
     "fk": "Catheterization"
    },
    {
     "name": "anesthesia_type",
     "rawtype": "anesthesia_type",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "ventilation_type",
     "rawtype": "ventilation_type",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    },
    {
     "name": "ecmo_support",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "antibioprophylaxis_given",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "antibioprophylaxis_detail",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "anticoagulant_given",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "anticoagulant_type",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "anticoagulant_dose_numeric",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "décimal",
     "fk": null
    }
   ],
   "zone": "acte",
   "rationale": null
  },
  {
   "name": "VascularAccess",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "catheterization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Catheterization",
     "fk": "Catheterization"
    },
    {
     "name": "access_type",
     "rawtype": "access_type",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (9)",
     "fk": null
    },
    {
     "name": "side",
     "rawtype": "laterality",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    },
    {
     "name": "puncture_success",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "introducer_size_fr",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "décimal",
     "fk": null
    },
    {
     "name": "echo_guided",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "booléen",
     "fk": null
    }
   ],
   "zone": "acte",
   "rationale": null
  },
  {
   "name": "InterventionalGesture",
   "note": "RÈGLE MÉTIER (CHECK à la conversion SQL) : au moins une des cibles target_diagnosis_id / target_condition_id / target_substrate_id doit être renseignée.",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "catheterization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Catheterization",
     "fk": "Catheterization"
    },
    {
     "name": "target_diagnosis_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "OÙ/POURQUOI : lésion congénitale native (ex CIA, coarctation native)",
     "type": "→ CardiacDiagnosis",
     "fk": "CardiacDiagnosis"
    },
    {
     "name": "target_condition_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "POURQUOI : lésion résiduelle/acquise/post-chir",
     "type": "→ CardiacCondition",
     "fk": "CardiacCondition"
    },
    {
     "name": "target_substrate_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "SUR QUOI : dispositif/substrat préexistant (ré-intervention)",
     "type": "→ CardiacImplant",
     "fk": "CardiacImplant"
    },
    {
     "name": "target_structure_label",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "OÙ : libellé structure anatomique",
     "type": "texte",
     "fk": null
    },
    {
     "name": "target_structure_snomed",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "OÙ : structure anatomique (SNOMED body structure)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "gesture_type",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "ipccc_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "codage du geste (IPCCC thérapeutique)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "snomed_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "interopérabilité (SNOMED Procedure.code)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "ccam_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "administratif PMSI français",
     "type": "texte",
     "fk": null
    },
    {
     "name": "echsa_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "registre EACTS-STS (section interventionnelle PROC)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "result",
     "rawtype": "gesture_result",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "failure_reason",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "data_source",
     "rawtype": "data_source",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "recorded_at",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "validation_status",
     "rawtype": "validation_status",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    }
   ],
   "zone": "gestes",
   "rationale": {
    "titre": "Le geste cible trois axes",
    "corps": "<p>Chaque geste vise <b>au moins un</b> des trois substrats : une lésion congénitale native (<code>target_diagnosis_id</code>), une condition évolutive (<code>target_condition_id</code>) ou un dispositif préexistant (<code>target_substrate_id</code>). C’est ce qui rend les ré-interventions traçables — et c’est au niveau du geste que se rattache le delta pré/post.</p>",
    "note": "Principe · geste ciblant 3 axes"
   }
  },
  {
   "name": "MaterialUsed",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "gesture_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ InterventionalGesture",
     "fk": "InterventionalGesture"
    },
    {
     "name": "material_type",
     "rawtype": "material_type",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (9)",
     "fk": null
    },
    {
     "name": "name",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "brand_model",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "usage_sequence",
     "rawtype": "int",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "entier",
     "fk": null
    },
    {
     "name": "attempt_number",
     "rawtype": "int",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "entier",
     "fk": null
    },
    {
     "name": "attempt_result",
     "rawtype": "gesture_result",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "udi",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    }
   ],
   "zone": "gestes",
   "rationale": {
    "titre": "Trois niveaux de succès",
    "corps": "<p>Le succès se lit à trois échelles emboîtées : le <b>matériel</b> (<code>attempt_result</code>) &lt; le <b>geste</b> (<code>InterventionalGesture.result</code>) &lt; la <b>procédure</b> (<code>ProcedureOutcome.technical_success</code>). Chaque tentative de matériel est tracée.</p>",
    "note": "Principe · hiérarchie du succès"
   }
  },
  {
   "name": "MaterialParameter",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "material_used_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ MaterialUsed",
     "fk": "MaterialUsed"
    },
    {
     "name": "concept",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "loinc_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "value_numeric",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "décimal",
     "fk": null
    },
    {
     "name": "unit_ucum",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    }
   ],
   "zone": "gestes",
   "rationale": null
  },
  {
   "name": "ClinicalMeasurement",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "patient_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Patient",
     "fk": "Patient"
    },
    {
     "name": "catheterization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "nullable : mesure hors KT (écho/IRM de contexte)",
     "type": "→ Catheterization",
     "fk": "Catheterization"
    },
    {
     "name": "related_gesture_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — mesure rattachée à un geste précis (delta par geste)",
     "type": "→ InterventionalGesture",
     "fk": "InterventionalGesture"
    },
    {
     "name": "procedure_phase",
     "rawtype": "measurement_phase",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — baseline / pre_intervention / post_intervention",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "measured_at",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — temps clinique (FHIR Observation.effective[x])",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "measurement_property",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — CodeSystem TAUSSIG (19 propriétés) ; ex concept_loinc (LOINC abandonné)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "concept_label",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "body_site_snomed",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "modality",
     "rawtype": "measurement_modality",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (5)",
     "fk": null
    },
    {
     "name": "value_numeric",
     "rawtype": "float",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "résultat quantitatif",
     "type": "décimal",
     "fk": null
    },
    {
     "name": "value_coded",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — résultat codé SNOMED (qualitatif, ex. shunt modéré)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "value_text",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — résultat texte libre",
     "type": "texte",
     "fk": null
    },
    {
     "name": "unit_ucum",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "measurement_condition",
     "rawtype": "measurement_condition",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — désormais enum (repos/effort/O2/NO...)",
     "type": "énum (7)",
     "fk": null
    },
    {
     "name": "derivation",
     "rawtype": "measurement_derivation",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (2)",
     "fk": null
    }
   ],
   "zone": "resultats",
   "rationale": {
    "titre": "Le cœur du POC : la mesure phasée",
    "corps": "<p>Chaque mesure porte sa <b>phase</b> (référence / pré / post) <i>et</i> son <b>geste de rattachement</b> : le bénéfice hémodynamique avant/après un geste devient une donnée <b>calculable et auditable</b>, pas une phrase dans un compte rendu.</p><p>Modèle post-coordonné : la propriété (le <i>quoi</i>) + le site SNOMED (le <i>où</i>) + la modalité (le <i>comment</i>) — pour éviter l’explosion combinatoire des codes pré-coordonnés.</p>",
    "note": "Principe · delta pré/post par geste"
   }
  },
  {
   "name": "ProcedureOutcome",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "catheterization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": true,
     "comment": "1:1",
     "type": "→ Catheterization",
     "fk": "Catheterization"
    },
    {
     "name": "technical_success",
     "rawtype": "technical_success",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "hemodynamic_success",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "residual_lesion_present",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "flag de synthèse (le détail vit dans CardiacCondition)",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "death",
     "rawtype": "boolean",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "décès PÉRI-procédural (POC). Statut vital patient -> v5.",
     "type": "booléen",
     "fk": null
    },
    {
     "name": "death_datetime",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "death_attribution",
     "rawtype": "death_attribution",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    }
   ],
   "zone": "resultats",
   "rationale": {
    "titre": "Une synthèse, pas une source",
    "corps": "<p>L’issue de la procédure (succès technique/hémodynamique, décès péri-procédural, lésion résiduelle) est un <b>indicateur de synthèse</b> : le détail vit dans les gestes, les mesures et les conditions. Le décès reste ici, au périmètre péri-procédural du POC.</p>",
    "note": "Principe · outcome de synthèse"
   }
  },
  {
   "name": "AdverseEvent",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "catheterization_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Catheterization",
     "fk": "Catheterization"
    },
    {
     "name": "gesture_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ InterventionalGesture",
     "fk": "InterventionalGesture"
    },
    {
     "name": "label",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "libellé lisible (= display du codage)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "ipccc_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "PRIMAIRE : IPCCC/EPCC (ch.15 complications, ch.11 arythmies)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "icd10_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "DÉRIVÉ : crossmap IPCCC (codes T/Y péri-procéduraux)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "snomed_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "interopérabilité (SNOMED AdverseEvent.event)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "echsa_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "ECHSA-CD : complication (CP) / adverse anesthetic event (AAE)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "attribution",
     "rawtype": "ae_attribution",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "origine imputée (dispositif/abord/anesthésie/technique...)",
     "type": "énum (7)",
     "fk": null
    },
    {
     "name": "management",
     "rawtype": "ae_management",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "v4 — prise en charge (escalade thérapeutique)",
     "type": "énum (7)",
     "fk": null
    },
    {
     "name": "outcome",
     "rawtype": "ae_outcome",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "severity_scale",
     "rawtype": "severity_scale",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (5)",
     "fk": null
    },
    {
     "name": "severity_level",
     "rawtype": "int",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "entier",
     "fk": null
    },
    {
     "name": "data_source",
     "rawtype": "data_source",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (4)",
     "fk": null
    },
    {
     "name": "recorded_at",
     "rawtype": "datetime",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "date-heure",
     "fk": null
    },
    {
     "name": "validation_status",
     "rawtype": "validation_status",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "énum (3)",
     "fk": null
    }
   ],
   "zone": "resultats",
   "rationale": {
    "titre": "Événement, gestion et origine séparés",
    "corps": "<p>La complication est <b>multi-codée</b> (IPCCC, SNOMED, CIM-10, ECHSA) et <b>graduée</b> sur une échelle validée. Sa <b>prise en charge</b> (<code>management</code>, échelle d’escalade) et son <b>origine imputée</b> (<code>attribution</code>) sont des dimensions distinctes — un même événement, trois questions.</p>",
    "note": "Principe · événement ≠ gestion ≠ imputation"
   }
  },
  {
   "name": "GeneticSyndrome",
   "note": "",
   "columns": [
    {
     "name": "id",
     "rawtype": "varchar",
     "pk": true,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "patient_id",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "→ Patient",
     "fk": "Patient"
    },
    {
     "name": "label",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "",
     "type": "texte",
     "fk": null
    },
    {
     "name": "orpha_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "PRIMAIRE : Orphanet (réf. maladies rares, CC-BY)",
     "type": "texte",
     "fk": null
    },
    {
     "name": "icd11_code",
     "rawtype": "varchar",
     "pk": false,
     "notnull": false,
     "unique": false,
     "comment": "classification ICD-11 (crossmap Orphanet) ; ICD-10 = dérivé",
     "type": "texte",
     "fk": null
    }
   ],
   "zone": "contexte",
   "rationale": {
    "titre": "Une covariable de contexte",
    "corps": "<p>Dans ce POC centré cathétérisme, la génétique est un <b>contexte</b>, pas de la cardiogénétique : ancrage <b>Orphanet</b> (maladies rares) + ICD-11. Le niveau moléculaire (gène, variant, zygotie) est hors périmètre — reporté au jumeau numérique patient.</p>",
    "note": "Principe · périmètre POC"
   }
  }
 ],
 "refs": [
  {
   "from": "CareEpisode",
   "fromCol": "patient_id",
   "kind": ">",
   "to": "Patient",
   "toCol": "id"
  },
  {
   "from": "CareEpisode",
   "fromCol": "organization_id",
   "kind": ">",
   "to": "Organization",
   "toCol": "id"
  },
  {
   "from": "CardiacDiagnosis",
   "fromCol": "patient_id",
   "kind": ">",
   "to": "Patient",
   "toCol": "id"
  },
  {
   "from": "CatheterizationDiagnosis",
   "fromCol": "catheterization_id",
   "kind": ">",
   "to": "Catheterization",
   "toCol": "id"
  },
  {
   "from": "CatheterizationDiagnosis",
   "fromCol": "cardiac_diagnosis_id",
   "kind": ">",
   "to": "CardiacDiagnosis",
   "toCol": "id"
  },
  {
   "from": "CardiacCondition",
   "fromCol": "patient_id",
   "kind": ">",
   "to": "Patient",
   "toCol": "id"
  },
  {
   "from": "CardiacCondition",
   "fromCol": "related_diagnosis_id",
   "kind": ">",
   "to": "CardiacDiagnosis",
   "toCol": "id"
  },
  {
   "from": "CatheterizationCondition",
   "fromCol": "catheterization_id",
   "kind": ">",
   "to": "Catheterization",
   "toCol": "id"
  },
  {
   "from": "CatheterizationCondition",
   "fromCol": "cardiac_condition_id",
   "kind": ">",
   "to": "CardiacCondition",
   "toCol": "id"
  },
  {
   "from": "CardiacImplant",
   "fromCol": "patient_id",
   "kind": ">",
   "to": "Patient",
   "toCol": "id"
  },
  {
   "from": "CardiacImplant",
   "fromCol": "source_material_used_id",
   "kind": ">",
   "to": "MaterialUsed",
   "toCol": "id"
  },
  {
   "from": "CardiacImplant",
   "fromCol": "previous_implant_id",
   "kind": ">",
   "to": "CardiacImplant",
   "toCol": "id"
  },
  {
   "from": "CardiacImplant",
   "fromCol": "status_source_catheterization_id",
   "kind": ">",
   "to": "Catheterization",
   "toCol": "id"
  },
  {
   "from": "Catheterization",
   "fromCol": "patient_id",
   "kind": ">",
   "to": "Patient",
   "toCol": "id"
  },
  {
   "from": "Catheterization",
   "fromCol": "care_episode_id",
   "kind": ">",
   "to": "CareEpisode",
   "toCol": "id"
  },
  {
   "from": "Catheterization",
   "fromCol": "primary_operator_id",
   "kind": ">",
   "to": "Practitioner",
   "toCol": "id"
  },
  {
   "from": "AnesthesiaManagement",
   "fromCol": "catheterization_id",
   "kind": "-",
   "to": "Catheterization",
   "toCol": "id"
  },
  {
   "from": "VascularAccess",
   "fromCol": "catheterization_id",
   "kind": ">",
   "to": "Catheterization",
   "toCol": "id"
  },
  {
   "from": "InterventionalGesture",
   "fromCol": "catheterization_id",
   "kind": ">",
   "to": "Catheterization",
   "toCol": "id"
  },
  {
   "from": "InterventionalGesture",
   "fromCol": "target_diagnosis_id",
   "kind": ">",
   "to": "CardiacDiagnosis",
   "toCol": "id"
  },
  {
   "from": "InterventionalGesture",
   "fromCol": "target_condition_id",
   "kind": ">",
   "to": "CardiacCondition",
   "toCol": "id"
  },
  {
   "from": "InterventionalGesture",
   "fromCol": "target_substrate_id",
   "kind": ">",
   "to": "CardiacImplant",
   "toCol": "id"
  },
  {
   "from": "MaterialUsed",
   "fromCol": "gesture_id",
   "kind": ">",
   "to": "InterventionalGesture",
   "toCol": "id"
  },
  {
   "from": "MaterialParameter",
   "fromCol": "material_used_id",
   "kind": ">",
   "to": "MaterialUsed",
   "toCol": "id"
  },
  {
   "from": "ClinicalMeasurement",
   "fromCol": "patient_id",
   "kind": ">",
   "to": "Patient",
   "toCol": "id"
  },
  {
   "from": "ClinicalMeasurement",
   "fromCol": "catheterization_id",
   "kind": ">",
   "to": "Catheterization",
   "toCol": "id"
  },
  {
   "from": "ClinicalMeasurement",
   "fromCol": "related_gesture_id",
   "kind": ">",
   "to": "InterventionalGesture",
   "toCol": "id"
  },
  {
   "from": "ProcedureOutcome",
   "fromCol": "catheterization_id",
   "kind": "-",
   "to": "Catheterization",
   "toCol": "id"
  },
  {
   "from": "AdverseEvent",
   "fromCol": "catheterization_id",
   "kind": ">",
   "to": "Catheterization",
   "toCol": "id"
  },
  {
   "from": "AdverseEvent",
   "fromCol": "gesture_id",
   "kind": ">",
   "to": "InterventionalGesture",
   "toCol": "id"
  },
  {
   "from": "GeneticSyndrome",
   "fromCol": "patient_id",
   "kind": ">",
   "to": "Patient",
   "toCol": "id"
  }
 ],
 "enums": {
  "cath_intent": [
   "diagnostic",
   "interventional",
   "hybrid"
  ],
  "access_type": [
   "arterial_femoral",
   "venous_femoral",
   "arterial_humeral",
   "venous_humeral",
   "arterial_carotid",
   "venous_jugular",
   "transhepatic",
   "umbilical",
   "surgical_hybrid"
  ],
  "laterality": [
   "left",
   "right",
   "not_applicable"
  ],
  "measurement_modality": [
   "catheterization",
   "echocardiography",
   "cardiac_mri",
   "ct",
   "ecg"
  ],
  "measurement_derivation": [
   "measured",
   "calculated"
  ],
  "gesture_result": [
   "success",
   "partial",
   "failure_repositioned",
   "failure_abandoned"
  ],
  "episode_class": [
   "hospitalisation",
   "consultation",
   "urgence"
  ],
  "material_type": [
   "balloon",
   "stent",
   "device_implant",
   "consumable",
   "TAUSSIG-OCCLUDER-CIA",
   "TAUSSIG-OCCLUDER-CIV",
   "TAUSSIG-OCCLUDER-CANAL",
   "TAUSSIG-OCCLUDER-VASCULAR",
   "TAUSSIG-OCCLUDER-FOP"
  ],
  "anesthesia_type": [
   "general",
   "sedation",
   "local",
   "none"
  ],
  "ventilation_type": [
   "invasive",
   "non_invasive",
   "spontaneous"
  ],
  "diagnosis_role": [
   "primary_indication",
   "associated_lesion",
   "incidental"
  ],
  "bsa_method": [
   "haycock",
   "dubois",
   "mosteller",
   "boyd"
  ],
  "technical_success": [
   "complete",
   "partial",
   "failed",
   "aborted"
  ],
  "death_attribution": [
   "procedure_related",
   "procedure_possibly_related",
   "unrelated",
   "unknown"
  ],
  "severity_scale": [
   "bergersen_c3po",
   "ncdr_impact",
   "ctcae_v5",
   "clavien_dindo",
   "other"
  ],
  "ae_attribution": [
   "device",
   "vascular_access",
   "anesthesia",
   "procedure_technique",
   "patient_condition",
   "contrast",
   "unknown"
  ],
  "ae_outcome": [
   "resolved_no_sequelae",
   "resolved_sequelae",
   "ongoing",
   "death"
  ],
  "ae_management": [
   "no_treatment",
   "medical_treatment",
   "transfusion",
   "thrombolysis",
   "surgical_intervention",
   "transcatheter_bailout",
   "surgical_bailout"
  ],
  "condition_category": [
   "residual_lesion",
   "acquired_lesion",
   "post_surgical_state"
  ],
  "implant_device_type": [
   "conduit",
   "shunt",
   "valve",
   "stent",
   "occluder",
   "baffle",
   "fenestration",
   "coil",
   "other",
   "TAUSSIG-OCCLUDER-CIA",
   "TAUSSIG-OCCLUDER-CIV",
   "TAUSSIG-OCCLUDER-CANAL",
   "TAUSSIG-OCCLUDER-VASCULAR",
   "TAUSSIG-OCCLUDER-FOP"
  ],
  "implant_status": [
   "functional",
   "degenerated",
   "stenotic",
   "occluded",
   "explanted",
   "embolized"
  ],
  "measurement_phase": [
   "baseline",
   "pre_intervention",
   "post_intervention",
   "not_applicable"
  ],
  "measurement_condition": [
   "resting",
   "exercise",
   "pharmacologic_stress",
   "supplemental_o2",
   "nitric_oxide",
   "room_air",
   "other"
  ],
  "data_source": [
   "ehr_extract",
   "manual_entry",
   "nlp_pipeline",
   "device_export"
  ],
  "validation_status": [
   "raw",
   "reviewed",
   "validated"
  ]
 },
 "meta": {
  "nbTables": 19,
  "nbRefs": 31,
  "nbEnums": 25,
  "source": "01-modele/schema_v4.dbml"
 }
};
