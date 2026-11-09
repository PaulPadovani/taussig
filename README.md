# TAUSSIG — site public

Documentation du modèle de données du cathétérisme cardiaque congénital.

Ce paquet contient uniquement le site statique, dans `docs/`. La page Trajectoires embarque 121 patients entièrement fictifs du corpus TAUSSIG (152 actes, 16 parcours avec plusieurs actes), sous forme de projections partielles, dépourvue de comptes rendus, d’extraits et d’identifiants du corpus. Aucun dossier réel, document du corpus ou fichier d’authentification n’est inclus. Les corpus seront diffusés séparément sur Hugging Face.

## Publier sur GitHub Pages

1. Créer un dépôt dédié au site et y déposer **le contenu de ce dossier**, avec `docs/` et `.github/`. Ne pas importer le dossier de recherche complet.
2. Utiliser la branche `main`.
3. Dans Settings → Pages, sélectionner GitHub Actions comme source.
4. Le workflow joint publie `docs/`. L'adresse sera indiquée par GitHub une fois le déploiement terminé.

Alternative : sélectionner « Deploy from a branch », branche `main`, dossier `/docs`. Le site utilise des chemins relatifs compatibles avec une adresse de projet GitHub Pages.

## Consulter hors ligne

Ouvrir `docs/index.html` dans un navigateur. Le modèle, le dictionnaire, la matrice et la timeline utilisent des données embarquées, sans serveur applicatif. Les polices web peuvent être remplacées par les polices locales en l'absence de réseau.

## Mettre à jour

Dans le dossier de recherche : installer `openpyxl`, recompiler et valider le guide, puis exécuter `python3 07-site/build/build_site.py --with-ig 03-ig/output`. Cette option inclut le guide dans le paquet public et contrôle sa version ainsi que l’absence d’erreurs QA. La construction vérifie les liens et fichiers du site et la conformité de la démonstration publique à sa projection sans sources. `verification.json` contient les empreintes de la version générée.

Les cas réservés aux présentations restent dans `04-exemple/`, hors du paquet public. Les artefacts originaux TAUSSIG sont sous CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Les terminologies tierces conservent leurs conditions propres ; ce paquet ne leur applique pas une licence globale.

Le guide FHIR 0.8.0 (dictionnaire v6) est consultable dans `docs/ig/` ; son paquet `package.tgz` permet de résoudre les canoniques sans dépendre du nom de domaine. Le rapport `qa.html` expose les avertissements et limites de vérification. La publication reste destinée à la recherche et aux essais.

La table générale IPCCC → CIM-10 contient 5 973 rapprochements indicatifs (`relatedto`) issus de la source AEPC 5.0 et normalisés pour l’édition OMS `2019-covid-expanded`. Le contrôle des 942 codes cibles ne certifie pas l’équivalence clinique de tous les rapprochements hérités. Les deux correspondances urémiques exigent un stade rénal 5 déjà documenté ; les consommateurs doivent respecter cette dépendance et les codes complémentaires distincts.

La page Trajectoires lit aussi les Bundles importés dans le navigateur, sans envoi au serveur ni stockage persistant. Les projections publiques ne sont pas des annotations exhaustives. Douze actes restent sans date, conformément au choix de l’auteur, et dix patients sans date de naissance. Le cas détaillé initial conserve sa relecture clinique ciblée ; les autres projections ne constituent pas une validation clinique des comptes rendus.
