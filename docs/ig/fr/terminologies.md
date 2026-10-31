# Terminologies - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Terminologies

Les systèmes et classifications tiers conservent leurs conditions de réutilisation. Les cinq catégories fines de dispositifs de fermeture utilisent des codes locaux TAUSSIG. La validation technique ne remplace pas la validation clinique des correspondances.

### Systèmes de codes (31)

| | |
| :--- | :--- |
| [IPCCC — International Paediatric and Congenital Cardiac Code (Long List v5.0, AEPC-derived)](CodeSystem-ipccc.md) | Représentation FHIR des codes, libellés et définitions IPCCC importés dans TAUSSIG ; contenu source conservé. |
| [TAUSSIG — Attribution d'un EI](CodeSystem-ae-attribution.md) | Cause suspectée d'un événement indésirable. |
| [TAUSSIG — Attribution du décès péri-procédural](CodeSystem-death-attribution.md) | Imputabilité d'un décès survenu en péri-procédure (ProcedureOutcome). |
| [TAUSSIG — Axe d'une condition cardiaque](CodeSystem-condition-axis.md) | Distingue le diagnostic congénital des conditions évolutives. |
| [TAUSSIG — Catégorie de syndrome génétique](CodeSystem-genetic-syndrome-category.md) | Catégorie étiologique d'un syndrome génétique. |
| [TAUSSIG — CCAM (sous-ensemble cath congénital)](CodeSystem-ccam.md) | Sous-ensemble candidat de la CCAM v82 (ATIH) pour le cathétérisme congénital. Fragment : extrait des actes percutanés cœur/gros vaisseaux. CCAM = primaire administratif ; SNOMED procédure = précision (axe séparé). |
| [TAUSSIG — Complément pour le type d’anesthésie](CodeSystem-anesthesia-type.md) | Code local pour l’absence explicite d’anesthésie. Une donnée manquante ne signifie pas aucune anesthésie. Aucune absence d’équivalent SNOMED n’est affirmée. |
| [TAUSSIG — Concepts locaux (sans équivalent de référence)](CodeSystem-taussig-local.md) | Concepts nécessaires au modèle et vérifiés absents des terminologies de référence. Chaque code documente l'absence constatée. |
| [TAUSSIG — Condition de mesure](CodeSystem-measurement-condition.md) | Condition physiologique/pharmacologique pendant la mesure. |
| [TAUSSIG — Dispositifs de fermeture par cible](CodeSystem-closure-device-type.md) | Catégories de dispositifs de fermeture distinguées par cible. Codes locaux TAUSSIG ; aucune équivalence SNOMED spécifique n'est affirmée. |
| [TAUSSIG — Dérivation d'une mesure](CodeSystem-derivation-method.md) | Mesure directe ou valeur calculée. |
| [TAUSSIG — ECHSA (nomenclature EACTS-ECHSA, représentation POC)](CodeSystem-echsa.md) | Représentation FHIR, pour le POC TAUSSIG, de la nomenclature de la base ECHSA (European Congenital Heart Surgeons Association, dérivée EACTS-STS/IPCCC). Codes extraits du dictionnaire maître`fields-dicts.xls`(onglet factors). Classes : diagnosis, procedure, status post, complication, aae, nca, gprf. Usage recherche ; codes candidats à valider cliniquement. |
| [TAUSSIG — Gestion de la complication (prise en charge péri-procédurale)](CodeSystem-ae-management.md) | Variable de prise en charge d'un événement indésirable de cathétérisme congénital (échelle d'escalade). Ancrage IPCCC/EPCC chap. 15 + SNOMED procédure. À valider cliniquement. |
| [TAUSSIG — Intention du cathétérisme](CodeSystem-cath-intent.md) | Intention globale de la procédure de cathétérisme. |
| [TAUSSIG — Modalité de mesure](CodeSystem-measurement-modality.md) | Modalité d'acquisition d'une mesure. |
| [TAUSSIG — Mode ventilatoire](CodeSystem-ventilation-type.md) | Mode de ventilation pendant l'anesthésie. |
| [TAUSSIG — Méthode de calcul de surface corporelle](CodeSystem-bsa-method.md) | Formule utilisée pour calculer la surface corporelle (BSA). |
| [TAUSSIG — Méthode de confirmation génétique](CodeSystem-genetic-method.md) | Méthode ayant confirmé/écarté le syndrome (Observation.method). |
| [TAUSSIG — Observations liées au cathétérisme](CodeSystem-procedure-observation-code.md) | Codes locaux transitoires pour les observations de procédure dont le code LOINC reste à vérifier. |
| [TAUSSIG — Phase procédurale d'une mesure](CodeSystem-procedure-phase.md) | Référentiel temporel pour le delta pre/post (cœur de la POC). |
| [TAUSSIG — Propriétés de mesure hémodynamique](CodeSystem-measurement-property.md) | Le QUOI d'une mesure de cathétérisme (modèle décomposé : propriété × site SNOMED). Codes TAUSSIG-local car aucune terminologie standard n'a de propriété intravasculaire générique sans site ; codage SNOMED secondaire générique fourni quand il existe. |
| [TAUSSIG — Résultat d'un geste / d'un matériel](CodeSystem-gesture-result.md) | Résultat au niveau geste et tentative matériel. |
| [TAUSSIG — Rôle d'une indication/diagnostic](CodeSystem-diagnosis-role.md) | Rôle de l'indication d'un cathétérisme. |
| [TAUSSIG — Rôle du médicament péri-procédural](CodeSystem-periprocedural-medication-purpose.md) | Rôle clinique d'une administration médicamenteuse pendant le cathétérisme. |
| [TAUSSIG — Succès technique de la procédure](CodeSystem-technical-success.md) | Niveau de succès technique au niveau procédure. |
| [TAUSSIG — Type d'abord vasculaire](CodeSystem-access-type.md) | Voie d'abord vasculaire. |
| [TAUSSIG — Type d'implant](CodeSystem-implant-device-type.md) | Type de dispositif/substrat longitudinal. |
| [TAUSSIG — Type de condition évolutive](CodeSystem-condition-type.md) | Catégorie d'une lésion évolutive. |
| [TAUSSIG — Type de matériel](CodeSystem-material-type.md) | Catégorie de matériel utilisé pendant un geste. |
| [TAUSSIG — Échelle de gravité d'un EI](CodeSystem-severity-scale.md) | Échelle de gradation validée par la littérature. |
| [TAUSSIG — État clinique d'un implant](CodeSystem-implant-status.md) | État clinique courant d'un implant (porté en extension de Device). |

### Jeux de valeurs (38)

| | |
| :--- | :--- |
| [IPCCC Short List v5.0 (sous-ensemble de saisie)](ValueSet-ipccc-short-list.md) | Représentation FHIR « IPCCC Short List v5.0 (sous-ensemble de saisie) » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource. |
| [TAUSSIG — Attributions d'EI](ValueSet-ae-attribution-vs.md) | Jeu de valeurs « TAUSSIG — Attributions d'EI » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Attributions du décès](ValueSet-death-attribution-vs.md) | Jeu de valeurs « TAUSSIG — Attributions du décès » utilisé par les profils TAUSSIG. |
| [TAUSSIG — CardiacCondition (lésions résiduelles/acquises/post-chir)](ValueSet-taussig-cardiac-condition.md) | Working set des conditions cardiaques évolutives de la POC (distinct du diagnostic congénital figé) : 61 lésions résiduelles/acquises codées en IPCCC, plus 13 états d'étape chirurgicale codés en ECHSA — l'IPCCC ne code pas l'état « status post » d'un montage (Fontan, Glenn, MBTS…), d'où un ValueSet multi-systèmes. ICD-10 = donnée dérivée (crossmap IPCCC). Le typage residual/acquired/post-chir est un choix clinicien à la saisie (CardiacCondition.condition_type), pas une propriété du code. |
| [TAUSSIG — Cibles CIM-10 de la correspondance IPCCC](ValueSet-ipccc-icd10-targets.md) | Codes principaux et produits complémentaires de la table de correspondance normalisée. Leur existence est contrôlée contre le service terminologique ; cela ne prouve pas une équivalence clinique exacte. |
| [TAUSSIG — Codes d'anthropométrie per-cathétérisme](ValueSet-taussig-anthropometry-observation-code-vs.md) | Codes LOINC utilisés pour poids, taille et surface corporelle au moment du cathétérisme. |
| [TAUSSIG — Codes d'exposition et contraste](ValueSet-taussig-procedure-exposure-observation-code-vs.md) | Codes des observations quantitatives liées à l'exposition radiologique et au contraste. |
| [TAUSSIG — Complications / événements indésirables (SNOMED CT, interopérabilité)](ValueSet-taussig-adverse-event-snomed.md) | Working set SNOMED CT des complications péri-procédurales du cathétérisme congénital (couche d'interopérabilité FHIR AdverseEvent.event / Condition.code). Résolu sur le SMT depuis les complications IPCCC/EPCC retenues. À valider cliniquement. |
| [TAUSSIG — Complications péri-procédurales (IPCCC)](ValueSet-taussig-adverse-event-ipccc.md) | Axe IPCCC des événements indésirables du cathétérisme congénital retenus pour la POC. La granularité IPCCC est plus grossière que la curation française : plusieurs libellés cliniques peuvent partager un même code (regroupés ici sous le libellé IPCCC officiel). |
| [TAUSSIG — Conditions de mesure](ValueSet-measurement-condition-vs.md) | Jeu de valeurs « TAUSSIG — Conditions de mesure » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Diagnostics congénitaux (CIM-11 MMS)](ValueSet-taussig-diagnosis-icd11.md) | Axe de classification diagnostique de la POC : énumération des entités CIM-11 MMS retenues pour les cardiopathies congénitales, avec le libellé français officiel de l'OMS. Liaison extensible : un code CIM-11 hors liste reste admis, mais l'autocomplétion et les statistiques se font sur ce working set curé. |
| [TAUSSIG — Diagnostics congénitaux (IPCCC)](ValueSet-taussig-diagnosis-ipccc.md) | Équivalents IPCCC des diagnostics congénitaux du working set CIM-11 (codage parallèle de précision clinique). Un même code IPCCC peut répondre à plusieurs entités CIM-11. |
| [TAUSSIG — Dérivation](ValueSet-derivation-method-vs.md) | Jeu de valeurs « TAUSSIG — Dérivation » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Gestes de cathétérisme (IPCCC)](ValueSet-taussig-procedure-ipccc.md) | Axe IPCCC des gestes de cathétérisme congénital retenus pour la POC (gestes diagnostiques, interventionnels et hybrides). Remplace, pour l'autocomplétion, la liaison à la short list IPCCC de 1 822 codes, inexploitable comme menu. |
| [TAUSSIG — Grade de régurgitation (valeurs codées)](ValueSet-taussig-regurgitation-grade.md) | Échelle qualitative de la régurgitation valvulaire, valeur de la propriété de mesure regurgitation_grade (Observation.valueCodeableConcept). Qualifier values SNOMED CT dont l'existence et le libellé FR ont été vérifiés sur le SMT ; le choix de l'échelle reste à valider cliniquement. |
| [TAUSSIG — Intentions de cathétérisme](ValueSet-cath-intent-vs.md) | Jeu de valeurs « TAUSSIG — Intentions de cathétérisme » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Latéralité (gauche/droite)](ValueSet-laterality-vs.md) | Côté anatomique de l'abord vasculaire (SNOMED CT). |
| [TAUSSIG — Modalités de mesure](ValueSet-measurement-modality-vs.md) | Jeu de valeurs « TAUSSIG — Modalités de mesure » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Modes ventilatoires](ValueSet-ventilation-type-vs.md) | Jeu de valeurs « TAUSSIG — Modes ventilatoires » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Méthodes de calcul BSA](ValueSet-bsa-method-vs.md) | Jeu de valeurs « TAUSSIG — Méthodes de calcul BSA » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Phases procédurales](ValueSet-procedure-phase-vs.md) | Jeu de valeurs « TAUSSIG — Phases procédurales » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Prise en charge d'un événement indésirable](ValueSet-taussig-ae-management.md) | Modes de prise en charge d'un EI pendant le cathétérisme (CodeSystem TAUSSIG ae-management). |
| [TAUSSIG — Procédures (SNOMED CT, interopérabilité)](ValueSet-taussig-procedure-snomed.md) | Working set SNOMED CT des gestes de cathétérisme congénital (couche d'interopérabilité FHIR Procedure.code). Résolu sur le SMT depuis les gestes IPCCC retenus. À valider cliniquement. |
| [TAUSSIG — Propriétés de mesure (binding ClinicalMeasurement.concept)](ValueSet-taussig-measurement-property.md) | Working set POC des propriétés de mesure hémodynamique de cathétérisme. |
| [TAUSSIG — Résultats de geste](ValueSet-gesture-result-vs.md) | Jeu de valeurs « TAUSSIG — Résultats de geste » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Rôles d'indication](ValueSet-diagnosis-role-vs.md) | Jeu de valeurs « TAUSSIG — Rôles d'indication » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Rôles des médicaments péri-procéduraux](ValueSet-periprocedural-medication-purpose-vs.md) | Jeu de valeurs « TAUSSIG — Rôles des médicaments péri-procéduraux » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Sites anatomiques de mesure/geste (validé)](ValueSet-taussig-sites-mesure.md) | Working set des sites de cathétérisme validé cliniquement (cavités, valves, septa, gros vaisseaux, abords, sites post-chirurgicaux). Codes SNOMED CT + 1 code TAUSSIG-local (connexion cavopulmonaire inférieure, absente de SNOMED). |
| [TAUSSIG — Succès technique](ValueSet-technical-success-vs.md) | Jeu de valeurs « TAUSSIG — Succès technique » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Syndromes génétiques (Orphanet)](ValueSet-taussig-genetic-syndrome.md) | Working set Orphanet des syndromes congénitaux pertinents en cathétérisme (covariable de contexte de la POC). Code primaire Orphanet ; ICD-11 = classification (ConceptMap) ; ICD-10 = dérivé. |
| [TAUSSIG — Types d'abord vasculaire](ValueSet-access-type-vs.md) | Jeu de valeurs « TAUSSIG — Types d'abord vasculaire » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Types d'implant](ValueSet-implant-device-type-vs.md) | Jeu de valeurs « TAUSSIG — Types d'implant » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Types de condition évolutive](ValueSet-condition-type-vs.md) | Jeu de valeurs « TAUSSIG — Types de condition évolutive » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Types de dispositifs interventionnels](ValueSet-taussig-materiel-types.md) | Working set de matériel ; catégories de fermeture distinguées par cible selon la décision clinique du 30 octobre 2026. Les catégories fines de fermeture utilisent des codes TAUSSIG locaux. |
| [TAUSSIG — Types de matériel (catégories)](ValueSet-material-type-vs.md) | Jeu de valeurs « TAUSSIG — Types de matériel (catégories) » utilisé par les profils TAUSSIG. |
| [TAUSSIG — Types d’anesthésie](ValueSet-anesthesia-type-vs.md) | Quatre catégories du modèle : anesthésie générale, sédation et anesthésie locale en SNOMED CT, et aucune anesthésie explicite en code TAUSSIG. Sans distinction du niveau de sédation ni des techniques locorégionales. |
| [TAUSSIG — Échelles de gravité](ValueSet-severity-scale-vs.md) | Jeu de valeurs « TAUSSIG — Échelles de gravité » utilisé par les profils TAUSSIG. |
| [TAUSSIG — États d'implant](ValueSet-implant-status-vs.md) | Jeu de valeurs « TAUSSIG — États d'implant » utilisé par les profils TAUSSIG. |

### Tables de correspondance (6)

| | |
| :--- | :--- |
| [TAUSSIG — AccessTypeToSnomed](ConceptMap-access-type-to-snomed.md) | Correspondance du CodeSystem TAUSSIG access-type vers les vaisseaux SNOMED CT. |
| [TAUSSIG — Condition de mesure -> SNOMED](ConceptMap-measurement-condition-to-snomed.md) | Représentation FHIR « TAUSSIG — Condition de mesure -> SNOMED » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource. |
| [TAUSSIG — GeneticSyndromeToIcd11](ConceptMap-genetic-syndrome-to-icd11.md) | Crossmap Orphanet -> ICD-11 des syndromes génétiques TAUSSIG (références officielles Orphanet product1). |
| [TAUSSIG — IPCCC vers CIM-10, normalisation de la source AEPC 5.0](ConceptMap-ipccc-to-icd10.md) | Correspondances de classification issues de la Long List AEPC 5.0 du 1er mai 2025, normalisées pour l’édition OMS 2019-covid-expanded. Les notations source et les colonnes additionnelles sont conservées dans les commentaires. Les signes dagger/asterisk ne sont pas incorporés au code exporté. Les rapprochements restent relatedto, sans équivalence exacte présumée. Les produits additional-code doivent être conservés comme codes complémentaires distincts, et non comme synonymes interchangeables. La dépendance documented-kidney-disease désigne une condition rénale déjà documentée avant conversion ; elle ne crée aucune obligation de saisie ni aucun stade rénal par défaut. Les colonnes additionnelles historiques non structurées ne déclenchent pas de conversion automatique. |
| [TAUSSIG — Modalité de mesure -> SNOMED (Observation.method)](ConceptMap-measurement-modality-to-snomed.md) | Représentation FHIR « TAUSSIG — Modalité de mesure -> SNOMED (Observation.method) » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource. |
| [TAUSSIG — Phase de mesure -> SNOMED (codage grossier ; sémantique fine = extension procedurePhase + related_gesture_id)](ConceptMap-measurement-phase-to-snomed.md) | Représentation FHIR « TAUSSIG — Phase de mesure -> SNOMED (codage grossier ; sémantique fine = extension procedurePhase + related_gesture_id) » utilisée dans le guide TAUSSIG ; contenu et correspondances définis dans cette ressource. |

