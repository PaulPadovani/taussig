# TAUSSIG — Liste des conditions cardiaques évolutives - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Liste des conditions cardiaques évolutives (Expérimental) 

 **References** 

* [TAUSSIG — Condition cardiaque évolutive](StructureDefinition-taussig-cardiac-condition-profile.md)

### Définition logique (CLD)

 

### Expansion

-------

 [Description du (des) tableau(x) ci-dessus](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "taussig-condition",
  "url" : "https://taussig/fhir/ValueSet/taussig-condition",
  "version" : "0.8.1",
  "name" : "TaussigConditionVS",
  "title" : "TAUSSIG — Liste des conditions cardiaques évolutives",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Les 107 concepts TAUSSIG actifs (conditions cardiaques évolutives).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/taussig-condition",
      "concept" : [{
        "code" : "TAUSSIG-COND-0001",
        "display" : "Création/agrandissement de communication interatriale"
      },
      {
        "code" : "TAUSSIG-COND-0002",
        "display" : "Cerclage de l'artère pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0003",
        "display" : "Anastomose systémico-pulmonaire de Blalock-Taussig modifiée (MBTS)"
      },
      {
        "code" : "TAUSSIG-COND-0004",
        "display" : "Intervention de Norwood"
      },
      {
        "code" : "TAUSSIG-COND-0005",
        "display" : "Anastomose cavopulmonaire unidirectionnelle (Glenn unidirectionnel)"
      },
      {
        "code" : "TAUSSIG-COND-0006",
        "display" : "Anastomose cavopulmonaire bidirectionnelle (Glenn bidirectionnel)"
      },
      {
        "code" : "TAUSSIG-COND-0007",
        "display" : "Anastomose cavopulmonaire bidirectionnelle bilatérale"
      },
      {
        "code" : "TAUSSIG-COND-0008",
        "display" : "Fontan (TCPC), conduit extracardiaque, fenestré"
      },
      {
        "code" : "TAUSSIG-COND-0009",
        "display" : "Fontan (TCPC), conduit extracardiaque, non fenestré"
      },
      {
        "code" : "TAUSSIG-COND-0010",
        "display" : "Fontan (TCPC), tunnel latéral, fenestré"
      },
      {
        "code" : "TAUSSIG-COND-0011",
        "display" : "Fontan (TCPC), tunnel latéral, non fenestré"
      },
      {
        "code" : "TAUSSIG-COND-0012",
        "display" : "Réparation à un ventricule et demi"
      },
      {
        "code" : "TAUSSIG-COND-0013",
        "display" : "Palliation, autre"
      },
      {
        "code" : "TAUSSIG-COND-0014",
        "display" : "Endocardite infectieuse"
      },
      {
        "code" : "TAUSSIG-COND-0015",
        "display" : "Anomalie acquise de la veine cave supérieure"
      },
      {
        "code" : "TAUSSIG-COND-0016",
        "display" : "Anomalie acquise de la veine cave inférieure"
      },
      {
        "code" : "TAUSSIG-COND-0017",
        "display" : "Anomalie acquise du sinus coronaire"
      },
      {
        "code" : "TAUSSIG-COND-0018",
        "display" : "Anomalie acquise des veines pulmonaires"
      },
      {
        "code" : "TAUSSIG-COND-0019",
        "display" : "Anomalie acquise de l'oreillette droite"
      },
      {
        "code" : "TAUSSIG-COND-0020",
        "display" : "Anomalie acquise de l'oreillette gauche"
      },
      {
        "code" : "TAUSSIG-COND-0021",
        "display" : "Communication interatriale résiduelle (CIA)"
      },
      {
        "code" : "TAUSSIG-COND-0022",
        "display" : "Régurgitation tricuspide résiduelle"
      },
      {
        "code" : "TAUSSIG-COND-0023",
        "display" : "Sténose mitrale résiduelle"
      },
      {
        "code" : "TAUSSIG-COND-0024",
        "display" : "Régurgitation mitrale résiduelle"
      },
      {
        "code" : "TAUSSIG-COND-0025",
        "display" : "Régurgitation troncale résiduelle"
      },
      {
        "code" : "TAUSSIG-COND-0026",
        "display" : "Sténose valvulaire pulmonaire résiduelle"
      },
      {
        "code" : "TAUSSIG-COND-0027",
        "display" : "Régurgitation pulmonaire résiduelle"
      },
      {
        "code" : "TAUSSIG-COND-0028",
        "display" : "Sténose de la néovalve pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0029",
        "display" : "Régurgitation de la néovalve pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0030",
        "display" : "Sténose valvulaire aortique résiduelle"
      },
      {
        "code" : "TAUSSIG-COND-0031",
        "display" : "Régurgitation aortique résiduelle"
      },
      {
        "code" : "TAUSSIG-COND-0032",
        "display" : "Sténose de la néovalve aortique d'origine pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0033",
        "display" : "Régurgitation de la néovalve aortique d'origine pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0034",
        "display" : "Sténose acquise de la néovalve aortique d'origine troncale"
      },
      {
        "code" : "TAUSSIG-COND-0035",
        "display" : "Régurgitation acquise de la néovalve aortique d'origine troncale"
      },
      {
        "code" : "TAUSSIG-COND-0036",
        "display" : "Composante ventriculaire résiduelle de canal atrioventriculaire"
      },
      {
        "code" : "TAUSSIG-COND-0037",
        "display" : "Régurgitation résiduelle de la valve atrioventriculaire commune"
      },
      {
        "code" : "TAUSSIG-COND-0038",
        "display" : "Sténose acquise de la valve atrioventriculaire commune (connexions biventriculaires)"
      },
      {
        "code" : "TAUSSIG-COND-0039",
        "display" : "Dilatation ventriculaire droite acquise"
      },
      {
        "code" : "TAUSSIG-COND-0040",
        "display" : "Hypertrophie ventriculaire droite acquise"
      },
      {
        "code" : "TAUSSIG-COND-0041",
        "display" : "Anévrisme ventriculaire droit acquis"
      },
      {
        "code" : "TAUSSIG-COND-0042",
        "display" : "Dysfonction ventriculaire droite"
      },
      {
        "code" : "TAUSSIG-COND-0043",
        "display" : "Obstruction résiduelle de la voie d'éjection du ventricule droit"
      },
      {
        "code" : "TAUSSIG-COND-0044",
        "display" : "Dilatation ventriculaire gauche acquise"
      },
      {
        "code" : "TAUSSIG-COND-0045",
        "display" : "Hypertrophie ventriculaire gauche acquise"
      },
      {
        "code" : "TAUSSIG-COND-0046",
        "display" : "Anévrisme ventriculaire gauche acquis"
      },
      {
        "code" : "TAUSSIG-COND-0047",
        "display" : "Défaillance ventriculaire gauche"
      },
      {
        "code" : "TAUSSIG-COND-0048",
        "display" : "Complication post-procédurale de la voie d'éjection du ventricule gauche"
      },
      {
        "code" : "TAUSSIG-COND-0049",
        "display" : "Sténose sous-aortique acquise"
      },
      {
        "code" : "TAUSSIG-COND-0050",
        "display" : "Sténose sous-pulmonaire acquise"
      },
      {
        "code" : "TAUSSIG-COND-0051",
        "display" : "Communication interventriculaire résiduelle (CIV)"
      },
      {
        "code" : "TAUSSIG-COND-0052",
        "display" : "Cardiomyopathie restrictive"
      },
      {
        "code" : "TAUSSIG-COND-0053",
        "display" : "Anomalie acquise de l'arbre artériel pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0054",
        "display" : "Sténose post-procédurale du tronc de l'artère pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0055",
        "display" : "Sténose résiduelle de l'artère pulmonaire droite"
      },
      {
        "code" : "TAUSSIG-COND-0056",
        "display" : "Sténose résiduelle de l'artère pulmonaire gauche"
      },
      {
        "code" : "TAUSSIG-COND-0057",
        "display" : "Hypertension artérielle pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0058",
        "display" : "Embolie pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0059",
        "display" : "Sténose aortique supravalvulaire acquise"
      },
      {
        "code" : "TAUSSIG-COND-0060",
        "display" : "Dilatation acquise de l'aorte ascendante et/ou de la racine aortique"
      },
      {
        "code" : "TAUSSIG-COND-0061",
        "display" : "Dilatation de la racine aortique"
      },
      {
        "code" : "TAUSSIG-COND-0062",
        "display" : "Dissection aortique"
      },
      {
        "code" : "TAUSSIG-COND-0063",
        "display" : "Anévrisme aortique"
      },
      {
        "code" : "TAUSSIG-COND-0064",
        "display" : "Coarctation aortique résiduelle"
      },
      {
        "code" : "TAUSSIG-COND-0065",
        "display" : "Complication coronaire post-procédurale"
      },
      {
        "code" : "TAUSSIG-COND-0066",
        "display" : "Persistance résiduelle du canal artériel (PDA)"
      },
      {
        "code" : "TAUSSIG-COND-0067",
        "display" : "Complication liée à un conduit cardiaque"
      },
      {
        "code" : "TAUSSIG-COND-0068",
        "display" : "Obstruction d'anastomose systémico-pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0069",
        "display" : "Obstruction partielle d'anastomose systémico-pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0070",
        "display" : "Obstruction complète d'anastomose systémico-pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0071",
        "display" : "Défaillance d'autogreffe pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0072",
        "display" : "Circulation de Fontan défaillante"
      },
      {
        "code" : "TAUSSIG-COND-0073",
        "display" : "Épanchement péricardique"
      },
      {
        "code" : "TAUSSIG-COND-0074",
        "display" : "Complication après transplantation cardiaque ou pulmonaire"
      },
      {
        "code" : "TAUSSIG-COND-0075",
        "display" : "Sténose acquise des veines pulmonaires"
      },
      {
        "code" : "TAUSSIG-COND-0076",
        "display" : "Obstruction d'une veine systémique"
      },
      {
        "code" : "TAUSSIG-COND-0077",
        "display" : "Collatérale(s) veino-veineuse(s) systémique(s)"
      },
      {
        "code" : "TAUSSIG-COND-0078",
        "display" : "Artère(s) collatérale(s) systémico-pulmonaire(s) acquise(s)"
      },
      {
        "code" : "TAUSSIG-COND-0079",
        "display" : "Fistules (malformations) artérioveineuses pulmonaires acquises"
      },
      {
        "code" : "TAUSSIG-COND-0080",
        "display" : "Cardiomyopathie dilatée"
      },
      {
        "code" : "TAUSSIG-COND-0081",
        "display" : "Cardiomyopathie hypertrophique"
      },
      {
        "code" : "TAUSSIG-COND-0082",
        "display" : "Cardiomyopathie hypertrophique obstructive du ventricule gauche"
      },
      {
        "code" : "TAUSSIG-COND-0083",
        "display" : "Myocardite (cardiomyopathie inflammatoire)"
      },
      {
        "code" : "TAUSSIG-COND-0084",
        "display" : "Maladie de Kawasaki"
      },
      {
        "code" : "TAUSSIG-COND-0085",
        "display" : "Infarctus du myocarde"
      },
      {
        "code" : "TAUSSIG-COND-0086",
        "display" : "État après transplantation cardiaque"
      },
      {
        "code" : "TAUSSIG-COND-0087",
        "display" : "Maladie vasculaire pulmonaire irréversible"
      },
      {
        "code" : "TAUSSIG-COND-0088",
        "display" : "Maladie vasculaire pulmonaire irréversible due à une cardiopathie congénitale (syndrome d'Eisenmenger)"
      },
      {
        "code" : "TAUSSIG-COND-0089",
        "display" : "Trouble du rythme cardiaque"
      },
      {
        "code" : "TAUSSIG-COND-0090",
        "display" : "Fibrillation atriale"
      },
      {
        "code" : "TAUSSIG-COND-0091",
        "display" : "Flutter atrial"
      },
      {
        "code" : "TAUSSIG-COND-0092",
        "display" : "Trouble du rythme atrial"
      },
      {
        "code" : "TAUSSIG-COND-0093",
        "display" : "Trouble du rythme de la jonction atrioventriculaire"
      },
      {
        "code" : "TAUSSIG-COND-0094",
        "display" : "Trouble du rythme ventriculaire"
      },
      {
        "code" : "TAUSSIG-COND-0095",
        "display" : "Tachycardie par réentrée atrioventriculaire avec préexcitation manifeste (Wolff-Parkinson-White)"
      },
      {
        "code" : "TAUSSIG-COND-0096",
        "display" : "Bloc atrioventriculaire"
      },
      {
        "code" : "TAUSSIG-COND-0097",
        "display" : "Bloc atrioventriculaire complet acquis"
      },
      {
        "code" : "TAUSSIG-COND-0098",
        "display" : "Indication de remplacement programmé d'un stimulateur cardiaque"
      },
      {
        "code" : "TAUSSIG-COND-0099",
        "display" : "Entéropathie exsudative post-procédurale"
      },
      {
        "code" : "TAUSSIG-COND-0100",
        "display" : "Bronchite plastique post-procédurale"
      },
      {
        "code" : "TAUSSIG-COND-0101",
        "display" : "Chylothorax"
      },
      {
        "code" : "TAUSSIG-COND-0102",
        "display" : "Embolisation d'un dispositif lors d'un cathétérisme cardiaque antérieur"
      },
      {
        "code" : "TAUSSIG-COND-0103",
        "display" : "Dysfonction d'un dispositif lors d'un cathétérisme cardiaque antérieur"
      },
      {
        "code" : "TAUSSIG-COND-0104",
        "display" : "Perforation d'une cavité ou d'un vaisseau lors d'un cathétérisme cardiaque antérieur"
      },
      {
        "code" : "TAUSSIG-COND-0105",
        "display" : "Corps étranger intracardiaque post-procédural"
      },
      {
        "code" : "TAUSSIG-COND-0106",
        "display" : "Embolisation d'un dispositif introduit par cathéter (corps étranger intravasculaire)"
      },
      {
        "code" : "TAUSSIG-COND-0107",
        "display" : "Hémorragie post-procédurale"
      }]
    }]
  }
}

```
