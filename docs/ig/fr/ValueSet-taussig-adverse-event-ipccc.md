# TAUSSIG — Complications péri-procédurales (IPCCC) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Complications péri-procédurales (IPCCC) (Expérimental) 

 **References** 

* [TAUSSIG — Événement indésirable](StructureDefinition-taussig-adverse-event.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-adverse-event-ipccc",
  "url" : "https://taussig/fhir/ValueSet/taussig-adverse-event-ipccc",
  "version" : "0.1.0",
  "name" : "TaussigAdverseEventIpccc",
  "title" : "TAUSSIG — Complications péri-procédurales (IPCCC)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Axe IPCCC des événements indésirables du cathétérisme congénital retenus pour la POC. La granularité IPCCC est plus grossière que la curation française : plusieurs libellés cliniques peuvent partager un même code (regroupés ici sous le libellé IPCCC officiel).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/ipccc",
      "concept" : [{
        "code" : "15.90.03",
        "display" : "Absence de complication post-procédurale"
      },
      {
        "code" : "15.90.14",
        "display" : "complication liée à une intervention"
      },
      {
        "code" : "15.00.01",
        "display" : "arrêt cardiaque"
      },
      {
        "code" : "11.03.08",
        "display" : "fibrillation atriale chronique"
      },
      {
        "code" : "11.03.07",
        "display" : "flutter auriculaire"
      },
      {
        "code" : "11.00.00",
        "display" : "Postoperative cardiac arrhythmia"
      },
      {
        "code" : "11.06.10",
        "display" : "bloc atrioventriculaire complet"
      },
      {
        "code" : "11.04.12",
        "display" : "tachycardie ectopique jonctionnelle"
      },
      {
        "code" : "11.05.06",
        "display" : "tachycardie ventriculaire"
      },
      {
        "code" : "15.60.06",
        "display" : "Arythmie nécessitant l'implantation d'un stimulateur"
      },
      {
        "code" : "15.50.03",
        "display" : "perforation d'une paroi du cœur due à une procédure"
      },
      {
        "code" : "15.83.14",
        "display" : "Postoperative cardiac tamponade"
      },
      {
        "code" : "12.33.31",
        "display" : "décès intra-opératoire"
      },
      {
        "code" : "15.10.72",
        "display" : "communication interatriale résiduelle survenant après une intervention"
      },
      {
        "code" : "15.51.47",
        "display" : "embolisation d'un fragment de dispositif vasculaire lors d'un cathétérisme cardiaque"
      },
      {
        "code" : "15.51.50",
        "display" : "Device malfunction during cardiac catheterisation procedure"
      },
      {
        "code" : "15.80.17",
        "display" : "corps étranger au niveau du cœur"
      },
      {
        "code" : "15.50.37",
        "display" : "corps étranger"
      },
      {
        "code" : "15.39.05",
        "display" : "perméabilité résiduelle du canal artériel survenant après une intervention pour canal artériel perméable persistant"
      },
      {
        "code" : "15.22.13",
        "display" : "communication interventriculaire résiduelle"
      },
      {
        "code" : "15.10.63",
        "display" : "communication interatriale résiduelle"
      },
      {
        "code" : "15.50.20",
        "display" : "Traumatic damage to heart valve during cardiovascular catheterisation procedure"
      },
      {
        "code" : "15.50.11",
        "display" : "perte du pouls distal"
      },
      {
        "code" : "15.50.19",
        "display" : "Local complication at access site of cardiac catheterisation"
      },
      {
        "code" : "15.50.30",
        "display" : "Problème d'équipement pendant le cathétérisme"
      },
      {
        "code" : "15.50.71",
        "display" : "migration d'endoprothèse vasculaire"
      },
      {
        "code" : "15.50.78",
        "display" : "vaisseau sanguin déchiré"
      },
      {
        "code" : "15.50.61",
        "display" : "Compression coronaire après implantation de dispositif transluminal"
      },
      {
        "code" : "15.50.91",
        "display" : "migration d'endoprothèse vasculaire"
      },
      {
        "code" : "15.50.65",
        "display" : "embolisation d'un fragment de dispositif vasculaire lors d'un cathétérisme cardiaque"
      },
      {
        "code" : "15.60.23",
        "display" : "pseudoanévrisme au site d'abord"
      },
      {
        "code" : "15.00.21",
        "display" : "Thrombose vasculaire ou de conduit post-procédurale"
      },
      {
        "code" : "15.02.00",
        "display" : "Hémorragie post-procédurale"
      },
      {
        "code" : "15.37.80",
        "display" : "Anévrisme aortique post-procédural"
      },
      {
        "code" : "15.37.07",
        "display" : "Anévrisme de l'aorte au site de coarctation après intervention"
      }]
    }]
  }
}

```
