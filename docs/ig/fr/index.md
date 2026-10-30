# TAUSSIG — Accueil - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## TAUSSIG — Accueil

### TAUSSIG — Guide d'implémentation FHIR (POC v4)

Guide d'implémentation (IG) FHIR **R4 (4.0.1)** du POC « jumeau numérique du cathétérisme cardiaque congénital ». Il transforme le dictionnaire de **data elements** (ISO/IEC 11179) en contraintes FHIR exécutables : profils de ressources, extensions, terminologies et bindings.

Canonique : `https://taussig/fhir` — version `0.6.0`.

Cette canonique est un **identifiant stable, non résoluble par choix** : en FHIR une URL canonique nomme une ressource, elle n'a pas à être déréférençable. Aucun nom de domaine n'est réservé pour ce POC, et en faire pointer un vers une adresse institutionnelle aurait lié l'identité des artefacts à une organisation avant que la gouvernance du socle soit tranchée. Les consommateurs résolvent les canoniques par le paquet (`package.tgz`), jamais par le réseau.

#### Le modèle en un coup d'œil

TAUSSIG structure un cathétérisme congénital autour de trois substrats et d'un cœur de mesure :

* **Substrat figé** — le diagnostic congénital (`TaussigCardiacDiagnosis`), double codage CIM-11 (classification) + IPCCC (précision clinique), CIM-10 et ECHSA dérivés.
* **Substrat évolutif** — la condition cardiaque (`TaussigCardiacCondition`) : état d'étape chirurgicale ou lésion résiduelle/acquise.
* **Substrat longitudinal** — l'implant (`TaussigCardiacImplant`), chaîné dans le temps (valve-in-valve, stent-in-stent).
* **Cœur du POC** — la mesure hémodynamique (`TaussigClinicalMeasurement`) portée par une `Observation`, avec **phase procédurale** (pre/post) : c'est le delta mesuré geste par geste qui fait la valeur du jumeau numérique.

#### Alignement national

Les profils administratifs (Patient, Praticien, Organisation, Épisode de soins) dérivent de **FR Core `hl7.fhir.fr.core` 2.2.0** : les identifiants nationaux (INS, RPPS/idNatPs, FINESS/idNatSt) sont hérités de FR Core.

#### Terminologies

Codage multi-axes : **IPCCC** (pivot clinique), **CIM-11 / SNOMED CT** (échange), **CCAM** (administratif FR), **ECHSA** (registre chirurgical, 920 codes), **Orphanet** (génétique), **LOINC / UCUM** (mesures).

Les axes de saisie sont publiés **énumérés**, et non par liaison à un système entier : diagnostics CIM-11 (103 entités), diagnostics IPCCC (103), gestes IPCCC (79), complications IPCCC (30 codes pour 39 libellés cliniques), conditions évolutives (61 IPCCC + 13 états d'étape chirurgicale ECHSA). Un consommateur qui importe le paquet reçoit ainsi des listes garnies, exploitables telles quelles pour l'autocomplétion.

> Version de recherche pour usage pilote. Les codes terminologiques restent des **candidats** tant qu'ils ne sont pas validés cliniquement et sur le SMT (Serveur Multi-Terminologies).

#### Présence des données

TAUSSIG n’ajoute aucune obligation de présence de données métier. La date, la valeur, la modalité, la phase et la dérivation d’une mesure peuvent être absentes. Les cardinalités minimales héritées de FHIR R4 et de FR Core restent applicables pour produire une ressource conforme. Les contraintes de type et de codage s’appliquent aux éléments renseignés ; un binding `required` ne rend pas le champ obligatoire. `MustSupport` exprime une capacité de traitement, pas une obligation de saisie.

