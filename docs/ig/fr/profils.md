# Profils et extensions - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## Profils et extensions

TAUSSIG n’ajoute aucune obligation de présence de données métier. Les contraintes héritées de FHIR R4 et FR Core restent applicables.

### Profils (20)

| | |
| :--- | :--- |
| [TAUSSIG — Abord vasculaire](StructureDefinition-taussig-vascular-access.md) | Abord vasculaire du cathétérisme. Voie d'abord (enum TAUSSIG) en code ; calibre d'introducteur, écho-guidage et latéralité en extensions/bodySite. |
| [TAUSSIG — Administration médicamenteuse péri-procédurale](StructureDefinition-taussig-periprocedural-medication-administration.md) | Antibioprophylaxie et anticoagulation administrées pendant le cathétérisme, codables en ATC quand disponible. |
| [TAUSSIG — Anthropométrie au cathétérisme](StructureDefinition-taussig-cath-anthropometry-observation.md) | Poids, taille et surface corporelle au moment du cathétérisme, portés par des Observations liées à la Procedure. |
| [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md) | Acte de cathétérisme. Intention (diagnostique/interventionnel/hybride) en category ; codage SNOMED (interop) + CCAM (administratif FR) + ECHSA (registre). Dosimétrie/anthropométrie portées par Observations liées. |
| [TAUSSIG — Condition cardiaque évolutive](StructureDefinition-taussig-cardiac-condition-profile.md) | Statut actuel de la cardiopathie : état d'étape chirurgicale (status post ECHSA) OU lésion résiduelle/acquise. Codage IPCCC primaire + CIM-10 + SNOMED + ECHSA. Type (residual/acquired/post_surgical) = choix clinicien d'instance. |
| [TAUSSIG — Diagnostic cardiaque congénital](StructureDefinition-taussig-cardiac-diagnosis.md) | Diagnostic congénital (substrat figé). Double codage CIM-11 (classification, primaire) + IPCCC (précision clinique) ; CIM-10 dérivé, ECHSA optionnel. Le verrouillage (is_locked) est porté par verificationStatus=confirmed + Provenance.recorded. |
| [TAUSSIG — Exposition et contraste de procédure](StructureDefinition-taussig-procedure-exposure-observation.md) | Temps de fluoroscopie, produit dose-surface et volume de contraste portés par des Observations quantitatives liées au cathétérisme. |
| [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md) | Geste interventionnel ciblé (unité de l'effet pre/post). Quadruple codage IPCCC (pivot) + SNOMED (interop) + CCAM + ECHSA ; structure cible en bodySite (SNOMED sites de mesure) ; résultat en outcome. |
| [TAUSSIG — Gestion anesthésique](StructureDefinition-taussig-anesthesia-management.md) | Prise en charge anesthésique du cathétérisme. Type d'anesthésie en code (générale, sédation, locale : SNOMED CT ; aucune anesthésie explicite : complément TAUSSIG) ; ventilation & ECMO en extensions ; antibioprophylaxie/anticoagulant portés par MedicationAdministration (ATC). |
| [TAUSSIG — Implant cardiaque (substrat longitudinal)](StructureDefinition-taussig-cardiac-implant.md) | Dispositif implanté persistant (conduit, valve, stent, occluder…). État clinique courant en extension (Device.status ne couvre pas functional/degenerated/…) ; chaînage valve-in-valve ; site anatomique SNOMED ; UDI. |
| [TAUSSIG — Matériel utilisé (consommable de geste)](StructureDefinition-taussig-material-used.md) | Matériel consommé pendant un geste (ballon, stent, dispositif, consommable). Catégorie en type ; caractéristiques techniques (diamètre, longueur…) en Device.property (LOINC/UCUM) ; UDI ; séquence/tentative d'usage en extensions sur Procedure.usedReference. |
| [TAUSSIG — Mesure clinique (delta pre/post)](StructureDefinition-taussig-clinical-measurement.md) | Mesure hémodynamique/fonctionnelle. Modèle post-coordonné : propriété (CodeSystem TAUSSIG) = la grandeur, site SNOMED = le lieu. Phase procédurale + geste lié = mécanisme du gradient pre/post (cœur du POC). Modalité en method ; condition & dérivation en extensions. VALEUR ATTENDUE : elle dépend de la propriété, pas du profil. Chaque concept du CodeSystem measurement-property porte une propriété`value_type`(Quantity | CodeableConcept) et, pour les grandeurs qualitatives, une propriété`value_set`donnant le ValueSet canonique des valeurs admises — p. ex.`regurgitation_grade`-> https://taussig/fhir/ValueSet/taussig-regurgitation-grade (grades SNOMED trace / légère / modérée / sévère). Ce contrat est déclaré au niveau de la propriété et non par un binding FHIR sur`value[x]`: en R4, un binding sur ce choix s'appliquerait aussi aux Quantity et imposerait à toutes les propriétés le jeu de valeurs d'une seule d'entre elles. |
| [TAUSSIG — Organisation](StructureDefinition-taussig-organization.md) | Établissement de santé, dérivé de FR Core Organization (établissement). FINESS porté par les slices FR Core idNatSt (urn:oid:1.2.250.1.71.4.2.2) et finess (https://finess.esante.gouv.fr). |
| [TAUSSIG — Patient](StructureDefinition-taussig-patient.md) | Patient de cardiopathie congénitale, dérivé de FR Core Patient (identifiants/extensions FR hérités). Les slices d'identité nationale (INS-NIR/NIA) sont portées par FR Core ; pour une identité INS**qualifiée**, utiliser le profil strict fr-core-patient-ins. Poids de naissance porté par une Observation dédiée (LOINC 8339-4). |
| [TAUSSIG — Poids de naissance](StructureDefinition-taussig-birth-weight-observation.md) | Poids de naissance porté par une Observation dédiée (LOINC 8339-4), liée au patient. |
| [TAUSSIG — Praticien](StructureDefinition-taussig-practitioner.md) | Praticien (opérateur, valideur), dérivé de FR Core Practitioner. L'identifiant RPPS est porté par la slice FR Core idNatPs (urn:oid:1.2.250.1.71.4.2.1) — plus besoin de la redéclarer. |
| [TAUSSIG — Résultat global de procédure](StructureDefinition-taussig-procedure-outcome.md) | Synthèse du résultat procédural : succès hémodynamique, lésion résiduelle, imputabilité d'un décès péri-procédural (component). NB : succès TECHNIQUE porté par Procedure.outcome (geste/cathétérisme) ; décès porté par Patient.deceased[x]. |
| [TAUSSIG — Syndrome génétique (covariable de contexte)](StructureDefinition-taussig-genetic-syndrome-profile.md) | Syndrome génétique comme covariable de contexte (POC KT, pas de cardiogénétique moléculaire). Codage Orphanet primaire + CIM-11 dérivé. |
| [TAUSSIG — Épisode de soins](StructureDefinition-taussig-care-episode.md) | Épisode de soins (hospitalisation ou ambulatoire) englobant le cathétérisme, dérivé de FR Core Encounter. |
| [TAUSSIG — Événement indésirable](StructureDefinition-taussig-adverse-event.md) | Complication péri-procédurale. Codage SNOMED (event) + IPCCC/CIM-10/ECHSA en codings parallèles ; gravité 1-5 selon échelle validée (extensions) ; attribution & prise en charge en extensions (réalisation R4). |

### Extensions (20)

| | |
| :--- | :--- |
| [Assistance ECMO](StructureDefinition-ecmoSupport.md) | Assistance ECMO pendant la procédure. |
| [Attribution de l'EI](StructureDefinition-adverseEventAttribution.md) | Cause suspectée d'un événement indésirable (dispositif, abord, anesthésie…). |
| [Condition de mesure](StructureDefinition-measurementCondition.md) | Condition physiologique/pharmacologique pendant la mesure. |
| [Diagnostic congénital d'origine](StructureDefinition-relatedDiagnosis.md) | Rattachement d'une condition évolutive à son diagnostic congénital. |
| [Dérivation de la mesure](StructureDefinition-derivationMethod.md) | Mesure directe ou valeur calculée. |
| [Implant précédent](StructureDefinition-previousImplant.md) | Chaînage valve-in-valve / stent-in-stent vers l'implant précédent. |
| [Mode ventilatoire](StructureDefinition-ventilationType.md) | Mode de ventilation pendant l'anesthésie. |
| [Niveau de gravité (1-5)](StructureDefinition-severityLevel.md) | Grade numérique de gravité selon l'échelle (1 à 5). |
| [Numéro de tentative](StructureDefinition-attemptNumber.md) | Numéro de tentative avec ce matériel. |
| [Ordre d'usage](StructureDefinition-usageSequence.md) | Ordre d'utilisation du matériel dans le geste. |
| [Phase procédurale (mesure)](StructureDefinition-procedurePhase.md) | Phase de la procédure à laquelle la mesure est faite (baseline/pre/post). |
| [Posé en externe](StructureDefinition-implantedExternally.md) | Dispositif posé en chirurgie ou dans un autre centre (hors cathé TAUSSIG). |
| [Prise en charge de l'EI](StructureDefinition-adverseEventManagement.md) | Action de prise en charge de l'événement indésirable pendant le cathétérisme. |
| [Produit de contraste utilisé](StructureDefinition-contrastUsed.md) | Indique si un produit de contraste iodé a été injecté pendant le cathétérisme. |
| [Rôle de l'indication](StructureDefinition-indicationRole.md) | Rôle d'une condition évolutive comme indication d'un cathétérisme. |
| [Rôle du diagnostic](StructureDefinition-diagnosisRole.md) | Rôle d'un diagnostic congénital comme indication d'un cathétérisme. |
| [Taille d'introducteur](StructureDefinition-introducerSize.md) | Calibre de l'introducteur (French/Charrière). |
| [Échelle de gravité](StructureDefinition-severityScale.md) | Échelle de gradation utilisée (Bergersen/C3PO, NCDR-IMPACT…). |
| [Écho-guidage](StructureDefinition-echoGuided.md) | Ponction vasculaire écho-guidée. |
| [État clinique de l'implant](StructureDefinition-implantClinicalStatus.md) | État clinique courant (Device.status ne couvre pas functional/degenerated/…). |

