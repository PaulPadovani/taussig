# TAUSSIG — Procédures (SNOMED CT, interopérabilité) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.0

## ValueSet: TAUSSIG — Procédures (SNOMED CT, interopérabilité) (Expérimental) 

 **References** 

Ce jeu de valeurs n'est pas utilisé ici ; il peut être utilisé autre part (par exemple dans les spécifications et / ou implémentations qui utilisent ce contenu)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-procedure-snomed",
  "url" : "https://taussig/fhir/ValueSet/taussig-procedure-snomed",
  "version" : "0.1.0",
  "name" : "TaussigProcedureSnomed",
  "title" : "TAUSSIG — Procédures (SNOMED CT, interopérabilité)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T08:39:58+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Working set SNOMED CT des gestes de cathétérisme congénital (couche d'interopérabilité FHIR Procedure.code). Résolu sur le SMT depuis les gestes IPCCC retenus. À valider cliniquement.",
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
        "code" : "112811009",
        "display" : "fermeture d'une communication interatriale"
      },
      {
        "code" : "1231783006",
        "display" : "Percutaneous closure of prosthetic cardiac paravalvular leak using device"
      },
      {
        "code" : "1344914001",
        "display" : "Open occlusion of left atrial appendage"
      },
      {
        "code" : "1357782001",
        "display" : "Fluoroscopy guided percutaneous embolization of lymphatic vessel with contrast"
      },
      {
        "code" : "175268008",
        "display" : "embolectomie percutanée de l'artère pulmonaire"
      },
      {
        "code" : "232770003",
        "display" : "dilatation par ballonnet d'une prothèse de valve mitrale"
      },
      {
        "code" : "232810003",
        "display" : "dilatation par ballonnet d'une prothèse de valve tricuspidienne"
      },
      {
        "code" : "232869005",
        "display" : "dilatation par ballonnet d'une prothèse de valve pulmonaire"
      },
      {
        "code" : "232978003",
        "display" : "insertion d'endoprothèse dans une veine pulmonaire"
      },
      {
        "code" : "233003002",
        "display" : "insertion d'endoprothèse dans une voie veineuse systémique"
      },
      {
        "code" : "233043007",
        "display" : "septostomie atriale"
      },
      {
        "code" : "233044001",
        "display" : "septostomie auriculaire par ballonnet par retrait"
      },
      {
        "code" : "233067004",
        "display" : "dilatation par ballonnet de la chambre de chasse du ventricule droit"
      },
      {
        "code" : "233100002",
        "display" : "fermeture transluminale percutanée de communication interventriculaire avec prothèse"
      },
      {
        "code" : "233202003",
        "display" : "dilatation par ballonnet du canal artériel"
      },
      {
        "code" : "233214006",
        "display" : "angioplastie de l'artère pulmonaire"
      },
      {
        "code" : "233215007",
        "display" : "mise en place d'endoprothèse dans l'artère pulmonaire"
      },
      {
        "code" : "252425004",
        "display" : "électrophysiologie cardiaque"
      },
      {
        "code" : "261562001",
        "display" : "angioplastie au niveau d'une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "276892002",
        "display" : "angioplastie percutanée par ballonnet d'une veine pulmonaire"
      },
      {
        "code" : "276896004",
        "display" : "angioplastie transluminale percutanée par ballonnet de la voie veineuse systémique guidée par radioscopie avec produit de contraste"
      },
      {
        "code" : "308683001",
        "display" : "biopsie transluminale ventriculaire droite après transplantation cardiaque"
      },
      {
        "code" : "308696000",
        "display" : "angioplastie de coarctation"
      },
      {
        "code" : "34945008",
        "display" : "angiocardiographie"
      },
      {
        "code" : "384642005",
        "display" : "valvuloplastie de la valve mitrale"
      },
      {
        "code" : "41817002",
        "display" : "fermeture d'un foramen ovale perméable"
      },
      {
        "code" : "41976001",
        "display" : "cathétérisme cardiaque"
      },
      {
        "code" : "428280004",
        "display" : "insertion d'une endoprothèse dans le canal artériel"
      },
      {
        "code" : "428394001",
        "display" : "péricardiocentèse transluminale percutanée"
      },
      {
        "code" : "432394003",
        "display" : "réparation de la valve mitrale guidée par radioscopie"
      },
      {
        "code" : "442188002",
        "display" : "valvulotomie transluminale percutanée de valve pulmonaire avec valvuloplastie"
      },
      {
        "code" : "448779009",
        "display" : "Occlusion of systemic to pulmonary artery shunt using transluminal embolic device"
      },
      {
        "code" : "448785002",
        "display" : "mise en place d'endoprothèse au site de coarctation aortique"
      },
      {
        "code" : "448949007",
        "display" : "mise en place d'endoprothèse dans une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "449033003",
        "display" : "dilatation par ballonnet d'un conduit cardiaque"
      },
      {
        "code" : "449227002",
        "display" : "dilatation par ballonnet d'une dérivation de la circulation systémique vers l'artère pulmonaire"
      },
      {
        "code" : "449389000",
        "display" : "pose d'une endoprothèse dans un conduit cardiaque"
      },
      {
        "code" : "46897002",
        "display" : "valvuloplastie percutanée par ballonnet de la valve pulmonaire"
      },
      {
        "code" : "61192001",
        "display" : "fermeture d'une fistule ou fenestration aorticopulmonaire"
      },
      {
        "code" : "698642008",
        "display" : "fermeture par voie percutanée du ligament artériel persistant"
      },
      {
        "code" : "707813002",
        "display" : "dilatation transluminale percutanée par ballonnet d'un conduit cardiaque"
      },
      {
        "code" : "707823006",
        "display" : "Percutaneous transluminal embolization for major systemic to pulmonary collateral artery"
      },
      {
        "code" : "708810002",
        "display" : "Endovascular retrieval of foreign body from aorta"
      },
      {
        "code" : "71330003",
        "display" : "réparation d'une fistule artérioveineuse par occlusion"
      },
      {
        "code" : "77166000",
        "display" : "valvuloplastie aortique percutanée par ballonnet"
      },
      {
        "code" : "773996000",
        "display" : "implantation d'une valve aortique transcathéter"
      },
      {
        "code" : "787162002",
        "display" : "implantation d'une prothèse de valve pulmonaire, par voie percutanée"
      },
      {
        "code" : "1259910000",
        "display" : "Endovascular repair of thoracic aortic aneurysm using endovascular stent graft and stent graft anchoring system"
      },
      {
        "code" : "429267006",
        "display" : "cathétérisme transseptal du coeur gauche par ponction atriale"
      },
      {
        "code" : "699803004",
        "display" : "Balloon test occlusion"
      },
      {
        "code" : "40403005",
        "display" : "cathétérisme du côté droit du cœur"
      },
      {
        "code" : "233154000",
        "display" : "procédure pour arythmie"
      },
      {
        "code" : "870252007",
        "display" : "ablation d'une tachycardie ventriculaire"
      },
      {
        "code" : "82982002",
        "display" : "stimulation électrophysiologique cardiaque et étude d'enregistrement"
      },
      {
        "code" : "707833003",
        "display" : "Percutaneous transluminal three dimensional electroanatomic mapping of conducting system of heart"
      },
      {
        "code" : "709117007",
        "display" : "photocoagulation fœtoscopique au laser d'un vaisseau placentaire pour un syndrome transfuseur-transfusé"
      },
      {
        "code" : "429381005",
        "display" : "traitement endovasculaire par prothèse"
      },
      {
        "code" : "68457009",
        "display" : "angioplastie transluminale percutanée par ballonnet guidée par imagerie avec produit de contraste"
      },
      {
        "code" : "112815000",
        "display" : "implantation d'une valve cardiaque"
      },
      {
        "code" : "24394009",
        "display" : "valvuloplastie cardiaque percutanée par ballonnet"
      },
      {
        "code" : "233104006",
        "display" : "élargissement de communication interventriculaire restrictive"
      },
      {
        "code" : "233141007",
        "display" : "mise en place d'endoprothèse dans le canal artériel avec cerclage des deux artères pulmonaires"
      },
      {
        "code" : "310658009",
        "display" : "échographie intravasculaire d'artère coronaire"
      },
      {
        "code" : "40701008",
        "display" : "échocardiographie"
      },
      {
        "code" : "105376000",
        "display" : "échocardiographie transœsophagienne"
      },
      {
        "code" : "425789000",
        "display" : "Transluminal intracardiac echocardiography"
      },
      {
        "code" : "698254001",
        "display" : "Intravascular optical coherence tomography of coronary vessel"
      },
      {
        "code" : "175266007",
        "display" : "intervention chirurgicale transluminale du tronc pulmonaire"
      },
      {
        "code" : "1389030008",
        "display" : "Percutaneous transluminal embolization of intrathoracic venovenous collateral circulation using imaging guidance"
      },
      {
        "code" : "175871007",
        "display" : "Percutaneous transluminal embolization of vein"
      },
      {
        "code" : "86642005",
        "display" : "pontage entre l'aorte descendante et l'artère pulmonaire"
      },
      {
        "code" : "232981008",
        "display" : "insertion d'endoprothèse dans une voie veineuse pulmonaire"
      },
      {
        "code" : "232989005",
        "display" : "mise en place de prothèse dans veine cave supérieure"
      },
      {
        "code" : "233441004",
        "display" : "Adjustment of venous stent"
      },
      {
        "code" : "233161001",
        "display" : "cryoablation pour arythmie"
      },
      {
        "code" : "233163003",
        "display" : "ablation par radiofréquence pour arythmie"
      },
      {
        "code" : "707831001",
        "display" : "ablation transluminale percutanée d'une veine pulmonaire au système conducteur de l'atrium gauche"
      },
      {
        "code" : "233159005",
        "display" : "ablation pour arythmie"
      },
      {
        "code" : "31413008",
        "display" : "intervention chirurgicale d'une artère coronaire"
      },
      {
        "code" : "232737008",
        "display" : "embolisation d'une fistule d'une artère coronaire"
      },
      {
        "code" : "384694007",
        "display" : "injection d'un agent thrombolytique directement dans l'artère coronaire"
      },
      {
        "code" : "1343583001",
        "display" : "Fluoroscopy guided percutaneous transluminal balloon angioplasty of coronary artery with contrast"
      },
      {
        "code" : "36969009",
        "display" : "pose de l'endoprothèse dans l'artère coronaire"
      },
      {
        "code" : "443829004",
        "display" : "angioplastie transluminale percutanée par ballonnet d'une coarctation de l'aorte avec insertion d'une endoprothèse guidée par radioscopie avec produit de contraste"
      },
      {
        "code" : "233220007",
        "display" : "embolisation d'une malformation artérioveineuse pulmonaire"
      },
      {
        "code" : "31415001",
        "display" : "septostomie atriale à l'aide d'un bistouri"
      },
      {
        "code" : "7824000",
        "display" : "élargissement de communication septale auriculaire pré-existante"
      },
      {
        "code" : "271411002",
        "display" : "septostomie atriale transluminale à ballonnet"
      },
      {
        "code" : "233038000",
        "display" : "intervention chirurgicale pour ouverture d'une CIA (communication interatriale)"
      },
      {
        "code" : "232778005",
        "display" : "intervention chirurgicale sur la valve tricuspide"
      },
      {
        "code" : "25236004",
        "display" : "remplacement de la valve tricuspide"
      },
      {
        "code" : "720583008",
        "display" : "implantation transcathéter de valve mitrale guidée par radioscopie"
      },
      {
        "code" : "1395984000",
        "display" : "Imaging guided percutaneous transcatheter mitral valve-in-valve replacement of bioprosthetic valve"
      },
      {
        "code" : "712817003",
        "display" : "angioplastie transluminale percutanée par ballonnet coupant d'une veine pulmonaire guidée par radioscopie avec produit de contraste"
      },
      {
        "code" : "276895000",
        "display" : "angioplastie transluminale percutanée par ballonnet d'une voie veineuse pulmonaire guidée par radioscopie avec produit de contraste"
      },
      {
        "code" : "433256008",
        "display" : "angioplastie transluminale percutanée par ballonnet coupant de l'artère pulmonaire guidée par radioscopie avec produit de contraste"
      },
      {
        "code" : "233114002",
        "display" : "intervention chirurgicale pour grandes artères collatérales aortopulmonaires"
      },
      {
        "code" : "707824000",
        "display" : "insertion transluminale percutanée d'endoprothèse dans une artère collatérale majeure de la circulation systémique à pulmonaire"
      },
      {
        "code" : "707822001",
        "display" : "angioplastie transluminale percutanée par ballonnet pour réparation d'une artère collatérale majeure de la circulation systémique à pulmonaire guidée par radioscopie avec produit de contraste"
      },
      {
        "code" : "265859004",
        "display" : "réparation d'un canal artériel persistant"
      },
      {
        "code" : "441676000",
        "display" : "fermeture d'une persistance du canal artériel par microspires"
      },
      {
        "code" : "175218000",
        "display" : "fermeture par voie transluminale du canal artériel avec prothèse"
      },
      {
        "code" : "443887000",
        "display" : "implantation transapicale d'une valve aortique prothétique"
      },
      {
        "code" : "443532008",
        "display" : "mise en place percutanée de prothèse dans la chambre de chasse ventriculaire droite, sous fluoroscopie"
      },
      {
        "code" : "232835009",
        "display" : "dilatation par ballonnet de la valve aortique implantée"
      },
      {
        "code" : "14257002",
        "display" : "traitement d'hypoplasie ventriculaire gauche"
      },
      {
        "code" : "53941002",
        "display" : "fermeture de fenestration septale du coeur"
      },
      {
        "code" : "233101003",
        "display" : "intervention chirurgicale au niveau d'un patch du septum interventriculaire"
      },
      {
        "code" : "174899009",
        "display" : "fermeture d'une communication interatriale de type sinus venosus"
      },
      {
        "code" : "30123000",
        "display" : "fermeture transluminale d'une communication interatriale avec prothèse"
      },
      {
        "code" : "233092001",
        "display" : "dilatation par ballonnet de la chambre de chasse du ventricule gauche"
      },
      {
        "code" : "428589002",
        "display" : "retrait d'une obstruction de la chambre de chasse du ventricule gauche"
      },
      {
        "code" : "1354588005",
        "display" : "Percutaneous transluminal ablation of hypertrophy of myocardium of septal region of left ventricle using alcohol"
      },
      {
        "code" : "233076006",
        "display" : "intervention chirurgicale du ventricule cardiaque gauche"
      },
      {
        "code" : "233051005",
        "display" : "intervention chirurgicale sur le ventricule cardiaque droit"
      },
      {
        "code" : "429312007",
        "display" : "retrait d'une obstruction de la chambre de chasse du ventricule droit"
      },
      {
        "code" : "128538000",
        "display" : "retrait d'un dispositif"
      },
      {
        "code" : "232985004",
        "display" : "intervention chirurgicale sur une veine systémique de gros calibre"
      }]
    }]
  }
}

```
