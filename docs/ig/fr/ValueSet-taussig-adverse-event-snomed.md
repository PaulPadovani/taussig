# TAUSSIG — Complications / événements indésirables (SNOMED CT, interopérabilité) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## ValueSet: TAUSSIG — Complications / événements indésirables (SNOMED CT, interopérabilité) (Expérimental) 

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
  "id" : "taussig-adverse-event-snomed",
  "url" : "https://taussig/fhir/ValueSet/taussig-adverse-event-snomed",
  "version" : "0.1.0",
  "name" : "TaussigAdverseEventSnomed",
  "title" : "TAUSSIG — Complications / événements indésirables (SNOMED CT, interopérabilité)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Working set SNOMED CT des complications péri-procédurales du cathétérisme congénital (couche d'interopérabilité FHIR AdverseEvent.event / Condition.code). Résolu sur le SMT depuis les complications IPCCC/EPCC retenues. À valider cliniquement.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "concept" : [{
        "code" : "111287006",
        "display" : "régurgitation de la valvule tricuspide"
      },
      {
        "code" : "116224001",
        "display" : "complication liée à une intervention"
      },
      {
        "code" : "1162507002",
        "display" : "perforation d'une paroi du cœur due à une procédure"
      },
      {
        "code" : "1230406008",
        "display" : "Postoperative cardiac arrhythmia"
      },
      {
        "code" : "1230407004",
        "display" : "Postoperative cardiac tamponade"
      },
      {
        "code" : "125670008",
        "display" : "corps étranger"
      },
      {
        "code" : "248707009",
        "display" : "vaisseau sanguin déchiré"
      },
      {
        "code" : "251155001",
        "display" : "tachycardie ectopique jonctionnelle"
      },
      {
        "code" : "25569003",
        "display" : "tachycardie ventriculaire"
      },
      {
        "code" : "271984008",
        "display" : "dysfonction de la prothèse valvulaire cardiaque"
      },
      {
        "code" : "27885002",
        "display" : "bloc atrioventriculaire complet"
      },
      {
        "code" : "282729004",
        "display" : "corps étranger au niveau du cœur"
      },
      {
        "code" : "307312008",
        "display" : "perforation d'une artère"
      },
      {
        "code" : "312373008",
        "display" : "faux anévrisme fémoral"
      },
      {
        "code" : "410429000",
        "display" : "arrêt cardiaque"
      },
      {
        "code" : "414617007",
        "display" : "perte du pouls distal"
      },
      {
        "code" : "426749004",
        "display" : "fibrillation atriale chronique"
      },
      {
        "code" : "427924001",
        "display" : "extravasation de produit de contraste intraveineux"
      },
      {
        "code" : "439470001",
        "display" : "fistule artérioveineuse"
      },
      {
        "code" : "447941008",
        "display" : "communication interventriculaire résiduelle"
      },
      {
        "code" : "449351005",
        "display" : "communication interatriale résiduelle"
      },
      {
        "code" : "473125002",
        "display" : "migration d'endoprothèse vasculaire"
      },
      {
        "code" : "473163005",
        "display" : "embolisation d'un fragment de dispositif vasculaire lors d'un cathétérisme cardiaque"
      },
      {
        "code" : "48724000",
        "display" : "régurgitation de la valve mitrale"
      },
      {
        "code" : "52136000",
        "display" : "décès intra-opératoire"
      },
      {
        "code" : "5370000",
        "display" : "flutter auriculaire"
      },
      {
        "code" : "60234000",
        "display" : "régurgitation de la valve aortique"
      },
      {
        "code" : "710864009",
        "display" : "dissection artérielle"
      },
      {
        "code" : "735579001",
        "display" : "communication interatriale résiduelle survenant après une intervention"
      },
      {
        "code" : "871596002",
        "display" : "perméabilité résiduelle du canal artériel survenant après une intervention pour canal artériel perméable persistant"
      },
      {
        "code" : "91434003",
        "display" : "régurgitation de la valve pulmonaire"
      }]
    }]
  }
}

```
