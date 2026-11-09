# TAUSSIG — Liste des complications - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Liste des complications (Expérimental) 

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
  "id" : "taussig-adverse-event",
  "url" : "https://taussig/fhir/ValueSet/taussig-adverse-event",
  "version" : "0.8.1",
  "name" : "TaussigAdverseEventVS",
  "title" : "TAUSSIG — Liste des complications",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Les 42 concepts TAUSSIG actifs (complications).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/taussig-adverse-event",
      "concept" : [{
        "code" : "TAUSSIG-AE-0001",
        "display" : "Absence de complication post-procédurale"
      },
      {
        "code" : "TAUSSIG-AE-0002",
        "display" : "Complication liée à une intervention"
      },
      {
        "code" : "TAUSSIG-AE-0003",
        "display" : "Arrêt cardiaque pendant l'intervention"
      },
      {
        "code" : "TAUSSIG-AE-0004",
        "display" : "Fibrillation atriale"
      },
      {
        "code" : "TAUSSIG-AE-0005",
        "display" : "Flutter atrial"
      },
      {
        "code" : "TAUSSIG-AE-0006",
        "display" : "Trouble du rythme post-procédural"
      },
      {
        "code" : "TAUSSIG-AE-0007",
        "display" : "Bloc atrioventriculaire complet acquis"
      },
      {
        "code" : "TAUSSIG-AE-0008",
        "display" : "Tachycardie jonctionnelle ectopique post-procédurale"
      },
      {
        "code" : "TAUSSIG-AE-0009",
        "display" : "Tachycardie ventriculaire"
      },
      {
        "code" : "TAUSSIG-AE-0010",
        "display" : "Arythmie nécessitant l'implantation d'un stimulateur"
      },
      {
        "code" : "TAUSSIG-AE-0011",
        "display" : "Perforation d'une cavité cardiaque ou d'un vaisseau pendant le cathétérisme"
      },
      {
        "code" : "TAUSSIG-AE-0012",
        "display" : "Tamponnade cardiaque post-procédurale"
      },
      {
        "code" : "TAUSSIG-AE-0013",
        "display" : "Décès peropératoire"
      },
      {
        "code" : "TAUSSIG-AE-0014",
        "display" : "Communication interatriale résiduelle ou récidivante post-procédurale"
      },
      {
        "code" : "TAUSSIG-AE-0015",
        "display" : "Embolisation d'un dispositif cardiovasculaire pendant le cathétérisme"
      },
      {
        "code" : "TAUSSIG-AE-0016",
        "display" : "Dysfonction de dispositif (complication de cathétérisme)"
      },
      {
        "code" : "TAUSSIG-AE-0017",
        "display" : "Corps étranger intracardiaque post-procédural"
      },
      {
        "code" : "TAUSSIG-AE-0018",
        "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)"
      },
      {
        "code" : "TAUSSIG-AE-0019",
        "display" : "Perméabilité résiduelle du canal artériel post-procédurale"
      },
      {
        "code" : "TAUSSIG-AE-0020",
        "display" : "Communication interventriculaire résiduelle ou récidivante post-procédurale"
      },
      {
        "code" : "TAUSSIG-AE-0021",
        "display" : "Communication interatriale résiduelle"
      },
      {
        "code" : "TAUSSIG-AE-0022",
        "display" : "Régurgitation aortique après lésion valvulaire pendant le cathétérisme"
      },
      {
        "code" : "TAUSSIG-AE-0023",
        "display" : "Régurgitation mitrale après lésion valvulaire pendant le cathétérisme"
      },
      {
        "code" : "TAUSSIG-AE-0024",
        "display" : "Dysfonction de prothèse valvulaire après lésion pendant le cathétérisme"
      },
      {
        "code" : "TAUSSIG-AE-0025",
        "display" : "Régurgitation pulmonaire après lésion valvulaire pendant le cathétérisme"
      },
      {
        "code" : "TAUSSIG-AE-0026",
        "display" : "Régurgitation tricuspide après lésion valvulaire pendant le cathétérisme"
      },
      {
        "code" : "TAUSSIG-AE-0027",
        "display" : "Perte du pouls après cathétérisme"
      },
      {
        "code" : "TAUSSIG-AE-0028",
        "display" : "Pseudoanévrisme au site d'abord"
      },
      {
        "code" : "TAUSSIG-AE-0029",
        "display" : "Dissection artérielle au site d'abord"
      },
      {
        "code" : "TAUSSIG-AE-0030",
        "display" : "Extravasation de produit de contraste"
      },
      {
        "code" : "TAUSSIG-AE-0031",
        "display" : "Fistule artérioveineuse au site d'abord"
      },
      {
        "code" : "TAUSSIG-AE-0032",
        "display" : "Perforation artérielle au site d'abord"
      },
      {
        "code" : "TAUSSIG-AE-0033",
        "display" : "Problème d'équipement pendant le cathétérisme"
      },
      {
        "code" : "TAUSSIG-AE-0034",
        "display" : "Embolisation d'un stent"
      },
      {
        "code" : "TAUSSIG-AE-0035",
        "display" : "Rupture d'un conduit ou d'un vaisseau après implantation de stent"
      },
      {
        "code" : "TAUSSIG-AE-0036",
        "display" : "Compression coronaire après implantation de dispositif transluminal"
      },
      {
        "code" : "TAUSSIG-AE-0037",
        "display" : "Stent laissé déployé en position non prévue après migration ou embolisation"
      },
      {
        "code" : "TAUSSIG-AE-0039",
        "display" : "Embolisation (délogement) d'un coil introduit par cathéter"
      },
      {
        "code" : "TAUSSIG-AE-0040",
        "display" : "Thrombose vasculaire ou de conduit post-procédurale"
      },
      {
        "code" : "TAUSSIG-AE-0041",
        "display" : "Hémorragie post-procédurale"
      },
      {
        "code" : "TAUSSIG-AE-0042",
        "display" : "Anévrisme aortique post-procédural"
      },
      {
        "code" : "TAUSSIG-AE-0043",
        "display" : "Anévrisme de l'aorte au site de coarctation après intervention"
      }]
    }]
  }
}

```
