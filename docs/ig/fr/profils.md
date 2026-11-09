# Profils et extensions - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## Profils et extensions

TAUSSIG n’ajoute aucune obligation de présence de données métier. Les contraintes héritées de FHIR R4 et FR Core restent applicables.

### Profils (21)

| | |
| :--- | :--- |
| [TAUSSIG — Abord vasculaire](StructureDefinition-taussig-vascular-access.md) | Abord vasculaire du cathétérisme. Voie d'abord (enum TAUSSIG) en code ; calibre d'introducteur, écho-guidage et latéralité en extensions/bodySite. |
| [TAUSSIG — Administration médicamenteuse péri-procédurale](StructureDefinition-taussig-periprocedural-medication-administration.md) | Antibioprophylaxie et anticoagulation administrées pendant le cathétérisme, codables en ATC quand disponible. |
| [TAUSSIG — Anthropométrie au cathétérisme](StructureDefinition-taussig-cath-anthropometry-observation.md) | Poids, taille et surface corporelle au moment du cathétérisme, portés par des Observations liées à la Procedure. |
| [TAUSSIG — Cathétérisme cardiaque (acte pivot)](StructureDefinition-taussig-catheterization.md) | Acte de cathétérisme. Intention (diagnostique/interventionnel/hybride) en category ; acte codé par un concept TAUSSIG (CodeSystem taussig-procedure), dont SNOMED (interop), CCAM (administratif FR), IPCCC et ECHSA (registre) sont déduits par ConceptMap ; opérateurs, horodatages salle et peau, caractère urgent. Dosimétrie/anthropométrie portées par Observations liées. |
| [TAUSSIG — Condition cardiaque évolutive](StructureDefinition-taussig-cardiac-condition-profile.md) | Statut actuel de la cardiopathie : état d'étape chirurgicale (status post ECHSA) OU lésion résiduelle/acquise. Concept TAUSSIG saisi (taussig-condition) ; IPCCC, CIM-10 et ECHSA en sont déduits (0.8.1). Type (residual/acquired/post_surgical) = choix clinicien d'instance. |
| [TAUSSIG — Diagnostic cardiaque congénital](StructureDefinition-taussig-cardiac-diagnosis.md) | Diagnostic congénital (substrat figé). Concept TAUSSIG saisi (taussig-diagnosis) ; CIM-11, IPCCC, CIM-10 et ECHSA en sont déduits par les ConceptMaps taussig-diagnosis-to-* (0.8.1). Le verrouillage (is_locked) est porté par verificationStatus=confirmed + Provenance.recorded. |
| [TAUSSIG — Exposition et contraste de procédure](StructureDefinition-taussig-procedure-exposure-observation.md) | Temps de fluoroscopie, produit dose-surface et volume de contraste portés par des Observations quantitatives liées au cathétérisme. |
| [TAUSSIG — Geste interventionnel](StructureDefinition-taussig-interventional-gesture.md) | Geste interventionnel ciblé (unité de l'effet pre/post). Codé par un concept TAUSSIG (188 concepts, Short List IPCCC du cathétérisme) ; IPCCC, SNOMED (interop), CCAM et ECHSA en sont déduits par ConceptMap ; structure cible en bodySite (SNOMED sites de mesure) ; résultat en outcome ; rang dans le cathétérisme. |
| [TAUSSIG — Gestion anesthésique](StructureDefinition-taussig-anesthesia-management.md) | Prise en charge anesthésique du cathétérisme. Type d'anesthésie en code (générale, sédation, locale : SNOMED CT ; aucune anesthésie explicite : complément TAUSSIG) ; ventilation & ECMO en extensions ; antibioprophylaxie/anticoagulant portés par MedicationAdministration (ATC). |
| [TAUSSIG — Implant cardiaque (substrat longitudinal)](StructureDefinition-taussig-cardiac-implant.md) | Dispositif implanté persistant (conduit, valve, stent, occluder…). État clinique courant en extension (Device.status ne couvre pas functional/degenerated/…) ; chaînage valve-in-valve ; site anatomique SNOMED ; UDI. |
| [TAUSSIG — Matériel utilisé (consommable de geste)](StructureDefinition-taussig-material-used.md) | Matériel consommé pendant un geste (ballon, stent, dispositif, consommable). Catégorie en type ; caractéristiques techniques (diamètre, longueur…) en Device.property (LOINC/UCUM) ; UDI ; séquence/tentative d'usage en extensions sur Procedure.usedReference. |
| [TAUSSIG — Mesure clinique (delta pre/post)](StructureDefinition-taussig-clinical-measurement.md) | Mesure hémodynamique/fonctionnelle. Modèle post-coordonné : propriété (CodeSystem TAUSSIG) = la grandeur, site SNOMED = le lieu. Phase procédurale + geste lié = mécanisme du gradient pre/post (cœur du POC). Modalité en method ; condition & dérivation en extensions. VALEUR ATTENDUE : elle dépend de la propriété, pas du profil. Chaque concept du CodeSystem measurement-property porte une propriété`value_type`(Quantity | CodeableConcept) et, pour les grandeurs qualitatives, une propriété`value_set`donnant le ValueSet canonique des valeurs admises — p. ex.`regurgitation_grade`-> https://taussig/fhir/ValueSet/taussig-regurgitation-grade (grades SNOMED trace / légère / modérée / sévère). Ce contrat est déclaré au niveau de la propriété et non par un binding FHIR sur`value[x]`: en R4, un binding sur ce choix s'appliquerait aussi aux Quantity et imposerait à toutes les propriétés le jeu de valeurs d'une seule d'entre elles. |
| [TAUSSIG — Organisation](StructureDefinition-taussig-organization.md) | Établissement de santé, dérivé de FR Core Organization (établissement). FINESS porté par les slices FR Core idNatSt (urn:oid:1.2.250.1.71.4.2.2) et finess (https://finess.esante.gouv.fr). |
| [TAUSSIG — Patient](StructureDefinition-taussig-patient.md) | Patient de cardiopathie congénitale, dérivé de FR Core Patient (identifiants/extensions FR hérités). Les slices d'identité nationale (INS-NIR/NIA) sont portées par FR Core ; pour une identité INS**qualifiée**, utiliser le profil strict fr-core-patient-ins. Poids de naissance porté par une Observation dédiée (LOINC 8339-4). |
| [TAUSSIG — Poids de naissance](StructureDefinition-taussig-birth-weight-observation.md) | Poids de naissance porté par une Observation dédiée (LOINC 8339-4), liée au patient. |
| [TAUSSIG — Pose et port d'un implant](StructureDefinition-taussig-implant-use.md) | Implant porté par le patient : site anatomique d'implantation, date de pose (début de la période de port) et geste TAUSSIG qui l'a posé, quand il est tracé. Pour un implant posé ailleurs (implantedExternally), le geste source est absent. |
| [TAUSSIG — Praticien](StructureDefinition-taussig-practitioner.md) | Praticien (opérateur, valideur), dérivé de FR Core Practitioner. L'identifiant RPPS est porté par la slice FR Core idNatPs (urn:oid:1.2.250.1.71.4.2.1) — plus besoin de la redéclarer. |
| [TAUSSIG — Résultat global de procédure](StructureDefinition-taussig-procedure-outcome.md) | Synthèse du résultat procédural : succès hémodynamique, lésion résiduelle, imputabilité d'un décès péri-procédural (component). NB : succès TECHNIQUE porté par Procedure.outcome (geste/cathétérisme) ; décès porté par Patient.deceased[x]. |
| [TAUSSIG — Syndrome génétique (covariable de contexte)](StructureDefinition-taussig-genetic-syndrome-profile.md) | Syndrome génétique comme covariable de contexte (POC KT, pas de cardiogénétique moléculaire). OrphaCode saisi ; CIM-11, CIM-10 et ECHSA déduits par les ConceptMaps genetic-syndrome-to-* (relations Orphanet validées). |
| [TAUSSIG — Épisode de soins](StructureDefinition-taussig-care-episode.md) | Épisode de soins (hospitalisation ou ambulatoire) englobant le cathétérisme, dérivé de FR Core Encounter. |
| [TAUSSIG — Événement indésirable](StructureDefinition-taussig-adverse-event.md) | Complication péri-procédurale. Concept TAUSSIG saisi (taussig-adverse-event) ; IPCCC, CIM-10, SNOMED et ECHSA en sont déduits (0.8.1) ; gravité 1-5 selon échelle validée (extensions) ; attribution & prise en charge en extensions (réalisation R4). |

### Extensions (27)

| | |
| :--- | :--- |
| [Acte de survenue de l'EI](StructureDefinition-adverseEventProcedure.md) | Cathétérisme ou geste interventionnel pendant lequel l'événement indésirable est survenu. Contexte de survenue, sans jugement d'imputabilité (porté par l'extension adverseEventAttribution). |
| [Assistance ECMO](StructureDefinition-ecmoSupport.md) | Assistance ECMO pendant la procédure. |
| [Attribution de l'EI](StructureDefinition-adverseEventAttribution.md) | Cause suspectée d'un événement indésirable (dispositif, abord, anesthésie…). |
| [Caractère urgent du cathétérisme](StructureDefinition-procedureUrgency.md) | Programmé, urgent, en urgence ou de sauvetage (décision I3). |
| [Classe d'annotation](StructureDefinition-annotationClass.md) | Rôle de l'élément dans l'annotation de comptes rendus. Posée sur les ElementDefinition des profils TAUSSIG ; générée depuis le dictionnaire (03-ig/build_annotation_classes.py). |
| [Condition de mesure](StructureDefinition-measurementCondition.md) | Condition physiologique/pharmacologique pendant la mesure. |
| [Date de l'état de l'implant](StructureDefinition-implantStatusDate.md) | Date à laquelle l'état clinique courant de l'implant (implantClinicalStatus) a été constaté. Un seul état courant par implant ; l'historique des états relève de v5 (ImplantStatusEvent). |
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
| [Période en salle de cathétérisme](StructureDefinition-procedureRoomPeriod.md) | Entrée et sortie de salle ; la période peau-à-peau est dans Procedure.performedPeriod (décision I2). |
| [Rang du geste dans le cathétérisme](StructureDefinition-gestureSequence.md) | Rang du geste (1, 2, 3…) dans l'ordre de réalisation au cours du cathétérisme (décision P7). |
| [Résultat de la tentative](StructureDefinition-attemptResult.md) | Résultat de la tentative avec ce matériel (réutilise l'énumération du résultat de geste). Porté côté geste, sur Procedure.usedReference (audit M1). |
| [Rôle de l'indication](StructureDefinition-indicationRole.md) | Rôle d'une condition évolutive comme indication d'un cathétérisme. |
| [Rôle du diagnostic](StructureDefinition-diagnosisRole.md) | Rôle d'un diagnostic congénital comme indication d'un cathétérisme. |
| [Taille d'introducteur](StructureDefinition-introducerSize.md) | Calibre de l'introducteur (French/Charrière). |
| [Échelle de gravité](StructureDefinition-severityScale.md) | Échelle de gradation utilisée (Bergersen/C3PO, NCDR-IMPACT…). |
| [Écho-guidage](StructureDefinition-echoGuided.md) | Ponction vasculaire écho-guidée. |
| [État clinique de l'implant](StructureDefinition-implantClinicalStatus.md) | État clinique courant (Device.status ne couvre pas functional/degenerated/…). |

