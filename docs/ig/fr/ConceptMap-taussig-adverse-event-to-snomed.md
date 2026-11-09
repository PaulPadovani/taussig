# TAUSSIG — Complications vers SNOMED - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ConceptMap: TAUSSIG — Complications vers SNOMED (Expérimental) 



## Resource Content

```json
{
  "resourceType" : "ConceptMap",
  "id" : "taussig-adverse-event-to-snomed",
  "url" : "https://taussig/fhir/ConceptMap/taussig-adverse-event-to-snomed",
  "version" : "0.8.1",
  "name" : "TaussigAdverseEventToSnomed",
  "title" : "TAUSSIG — Complications vers SNOMED",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Correspondance des concepts TAUSSIG (complications) vers SNOMED. Équivalence vue depuis le concept TAUSSIG (source) : HARVEY ne déduit le code que si la correspondance est « equivalent » ou « wider » et unique (décision A3). « unmatched » : aucun code ne convient. Qualification : dictionnaire v6.1, onglet Correspondances Cliniques (décision A4).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "sourceCanonical" : "https://taussig/fhir/ValueSet/taussig-adverse-event",
  "group" : [{
    "source" : "https://taussig/fhir/CodeSystem/taussig-adverse-event",
    "target" : "http://snomed.info/sct",
    "element" : [{
      "code" : "TAUSSIG-AE-0001",
      "display" : "Absence de complication post-procédurale",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0002",
      "display" : "Complication liée à une intervention",
      "target" : [{
        "code" : "116224001",
        "display" : "complication liée à une intervention",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0003",
      "display" : "Arrêt cardiaque pendant l'intervention",
      "target" : [{
        "code" : "410429000",
        "display" : "arrêt cardiaque",
        "equivalence" : "wider",
        "comment" : "arrêt cardiaque sans précision du contexte"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0004",
      "display" : "Fibrillation atriale",
      "target" : [{
        "code" : "49436004",
        "display" : "fibrillation auriculaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0005",
      "display" : "Flutter atrial",
      "target" : [{
        "code" : "5370000",
        "display" : "flutter auriculaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0006",
      "display" : "Trouble du rythme post-procédural",
      "target" : [{
        "code" : "1230406008",
        "display" : "Postoperative cardiac arrhythmia",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0007",
      "display" : "Bloc atrioventriculaire complet acquis",
      "target" : [{
        "code" : "27885002",
        "display" : "bloc atrioventriculaire complet",
        "equivalence" : "wider",
        "comment" : "congénital ou acquis"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0008",
      "display" : "Tachycardie jonctionnelle ectopique post-procédurale",
      "target" : [{
        "code" : "251155001",
        "display" : "tachycardie ectopique jonctionnelle",
        "equivalence" : "wider",
        "comment" : "sans précision post-procédurale"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0009",
      "display" : "Tachycardie ventriculaire",
      "target" : [{
        "code" : "25569003",
        "display" : "tachycardie ventriculaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0010",
      "display" : "Arythmie nécessitant l'implantation d'un stimulateur",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0011",
      "display" : "Perforation d'une cavité cardiaque ou d'un vaisseau pendant le cathétérisme",
      "target" : [{
        "code" : "1162507002",
        "display" : "perforation d'une paroi du cœur due à une procédure",
        "equivalence" : "narrower",
        "comment" : "paroi du cœur seulement, pas les vaisseaux"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0012",
      "display" : "Tamponnade cardiaque post-procédurale",
      "target" : [{
        "code" : "1230407004",
        "display" : "Postoperative cardiac tamponade",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0013",
      "display" : "Décès peropératoire",
      "target" : [{
        "code" : "52136000",
        "display" : "décès intra-opératoire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0014",
      "display" : "Communication interatriale résiduelle ou récidivante post-procédurale",
      "target" : [{
        "code" : "735579001",
        "display" : "communication interatriale résiduelle survenant après une intervention",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0015",
      "display" : "Embolisation d'un dispositif cardiovasculaire pendant le cathétérisme",
      "target" : [{
        "code" : "473163005",
        "display" : "embolisation d'un fragment de dispositif vasculaire lors d'un cathétérisme cardiaque",
        "equivalence" : "narrower",
        "comment" : "fragment de dispositif seulement"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0016",
      "display" : "Dysfonction de dispositif (complication de cathétérisme)",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0017",
      "display" : "Corps étranger intracardiaque post-procédural",
      "target" : [{
        "code" : "282729004",
        "display" : "corps étranger au niveau du cœur",
        "equivalence" : "wider",
        "comment" : "sans précision post-procédurale"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0018",
      "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)",
      "target" : [{
        "code" : "125670008",
        "display" : "corps étranger",
        "equivalence" : "wider",
        "comment" : "corps étranger"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0019",
      "display" : "Perméabilité résiduelle du canal artériel post-procédurale",
      "target" : [{
        "code" : "871596002",
        "display" : "perméabilité résiduelle du canal artériel survenant après une intervention pour canal artériel perméable persistant",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0020",
      "display" : "Communication interventriculaire résiduelle ou récidivante post-procédurale",
      "target" : [{
        "code" : "447941008",
        "display" : "communication interventriculaire résiduelle",
        "equivalence" : "wider",
        "comment" : "résiduelle, sans la récidive"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0021",
      "display" : "Communication interatriale résiduelle",
      "target" : [{
        "code" : "449351005",
        "display" : "communication interatriale résiduelle",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0022",
      "display" : "Régurgitation aortique après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "60234000",
        "display" : "régurgitation de la valve aortique",
        "equivalence" : "wider",
        "comment" : "régurgitation sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0023",
      "display" : "Régurgitation mitrale après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "48724000",
        "display" : "régurgitation de la valve mitrale",
        "equivalence" : "wider",
        "comment" : "régurgitation sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0024",
      "display" : "Dysfonction de prothèse valvulaire après lésion pendant le cathétérisme",
      "target" : [{
        "code" : "271984008",
        "display" : "dysfonction de la prothèse valvulaire cardiaque",
        "equivalence" : "wider",
        "comment" : "sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0025",
      "display" : "Régurgitation pulmonaire après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "91434003",
        "display" : "régurgitation de la valve pulmonaire",
        "equivalence" : "wider",
        "comment" : "régurgitation sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0026",
      "display" : "Régurgitation tricuspide après lésion valvulaire pendant le cathétérisme",
      "target" : [{
        "code" : "111287006",
        "display" : "régurgitation de la valvule tricuspide",
        "equivalence" : "wider",
        "comment" : "régurgitation sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0027",
      "display" : "Perte du pouls après cathétérisme",
      "target" : [{
        "code" : "414617007",
        "display" : "perte du pouls distal",
        "equivalence" : "wider",
        "comment" : "perte du pouls distal sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0028",
      "display" : "Pseudoanévrisme au site d'abord",
      "target" : [{
        "code" : "1162761001",
        "display" : "pseudoanévrisme au niveau du site d'accès vasculaire",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0029",
      "display" : "Dissection artérielle au site d'abord",
      "target" : [{
        "code" : "710864009",
        "display" : "dissection artérielle",
        "equivalence" : "wider",
        "comment" : "sans précision du site ni de la cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0030",
      "display" : "Extravasation de produit de contraste",
      "target" : [{
        "code" : "427924001",
        "display" : "extravasation de produit de contraste intraveineux",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0031",
      "display" : "Fistule artérioveineuse au site d'abord",
      "target" : [{
        "code" : "439470001",
        "display" : "fistule artérioveineuse",
        "equivalence" : "wider",
        "comment" : "sans précision du site ni de la cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0032",
      "display" : "Perforation artérielle au site d'abord",
      "target" : [{
        "code" : "307312008",
        "display" : "perforation d'une artère",
        "equivalence" : "wider",
        "comment" : "sans précision du site ni de la cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0033",
      "display" : "Problème d'équipement pendant le cathétérisme",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0034",
      "display" : "Embolisation d'un stent",
      "target" : [{
        "code" : "473125002",
        "display" : "migration d'endoprothèse vasculaire",
        "equivalence" : "wider",
        "comment" : "migration, dont l'embolisation"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0035",
      "display" : "Rupture d'un conduit ou d'un vaisseau après implantation de stent",
      "target" : [{
        "code" : "248707009",
        "display" : "vaisseau sanguin déchiré",
        "equivalence" : "wider",
        "comment" : "sans précision de cause"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0036",
      "display" : "Compression coronaire après implantation de dispositif transluminal",
      "target" : [{
        "equivalence" : "unmatched"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0037",
      "display" : "Stent laissé déployé en position non prévue après migration ou embolisation",
      "target" : [{
        "code" : "473125002",
        "display" : "migration d'endoprothèse vasculaire",
        "equivalence" : "wider",
        "comment" : "migration"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0039",
      "display" : "Embolisation (délogement) d'un coil introduit par cathéter",
      "target" : [{
        "code" : "473163005",
        "display" : "embolisation d'un fragment de dispositif vasculaire lors d'un cathétérisme cardiaque",
        "equivalence" : "inexact",
        "comment" : "fragment de dispositif ; un coil entier n'est pas un fragment"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0040",
      "display" : "Thrombose vasculaire ou de conduit post-procédurale",
      "target" : [{
        "code" : "439127006",
        "display" : "thrombose",
        "equivalence" : "wider",
        "comment" : "thrombose"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0041",
      "display" : "Hémorragie post-procédurale",
      "target" : [{
        "code" : "131148009",
        "display" : "hémorragie",
        "equivalence" : "wider",
        "comment" : "hémorragie"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0042",
      "display" : "Anévrisme aortique post-procédural",
      "target" : [{
        "code" : "737158007",
        "display" : "anévrisme de l'aorte consécutif à une intervention",
        "equivalence" : "equivalent"
      }]
    },
    {
      "code" : "TAUSSIG-AE-0043",
      "display" : "Anévrisme de l'aorte au site de coarctation après intervention",
      "target" : [{
        "code" : "871661008",
        "display" : "anévrisme de l'aorte au site de coarctation survenant après une intervention",
        "equivalence" : "equivalent"
      }]
    }]
  }]
}

```
