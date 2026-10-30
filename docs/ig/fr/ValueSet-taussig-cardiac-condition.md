# TAUSSIG — CardiacCondition (lésions résiduelles/acquises/post-chir) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: TAUSSIG — CardiacCondition (lésions résiduelles/acquises/post-chir) (Expérimental) 

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
  "id" : "taussig-cardiac-condition",
  "url" : "https://taussig/fhir/ValueSet/taussig-cardiac-condition",
  "version" : "0.6.0",
  "name" : "taussig_cardiac_condition",
  "title" : "TAUSSIG — CardiacCondition (lésions résiduelles/acquises/post-chir)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Working set des conditions cardiaques évolutives de la POC (distinct du diagnostic congénital figé) : 61 lésions résiduelles/acquises codées en IPCCC, plus 13 états d'étape chirurgicale codés en ECHSA — l'IPCCC ne code pas l'état « status post » d'un montage (Fontan, Glenn, MBTS…), d'où un ValueSet multi-systèmes. ICD-10 = donnée dérivée (crossmap IPCCC). Le typage residual/acquired/post-chir est un choix clinicien à la saisie (CardiacCondition.condition_type), pas une propriété du code.",
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
        "code" : "10.06.01",
        "display" : "Infective endocarditis"
      },
      {
        "code" : "10.31.01",
        "display" : "Acquired superior caval vein (SVC) abnormality"
      },
      {
        "code" : "10.31.21",
        "display" : "Acquired inferior caval vein (IVC) abnormality"
      },
      {
        "code" : "10.30.16",
        "display" : "Acquired coronary sinus abnormality"
      },
      {
        "code" : "10.24.00",
        "display" : "Acquired pulmonary venous abnormality"
      },
      {
        "code" : "15.10.10",
        "display" : "Acquired right atrial abnormality"
      },
      {
        "code" : "15.10.20",
        "display" : "Acquired left atrial abnormality"
      },
      {
        "code" : "15.10.63",
        "display" : "Residual interatrial communication ('ASD')"
      },
      {
        "code" : "15.11.03",
        "display" : "Residual tricuspid regurgitation"
      },
      {
        "code" : "15.12.01",
        "display" : "Residual mitral stenosis"
      },
      {
        "code" : "15.12.03",
        "display" : "Residual mitral regurgitation"
      },
      {
        "code" : "15.25.03",
        "display" : "Residual truncal regurgitation"
      },
      {
        "code" : "15.30.01",
        "display" : "Residual pulmonary valvar stenosis"
      },
      {
        "code" : "15.30.03",
        "display" : "Residual pulmonary regurgitation"
      },
      {
        "code" : "15.30.09",
        "display" : "Neopulmonary valvar stenosis"
      },
      {
        "code" : "15.30.10",
        "display" : "Neopulmonary valvar regurgitation"
      },
      {
        "code" : "15.35.01",
        "display" : "Residual aortic valvar stenosis"
      },
      {
        "code" : "15.35.03",
        "display" : "Residual aortic regurgitation"
      },
      {
        "code" : "15.35.09",
        "display" : "Stenosis of the neo-aortic valve of pulmonary origin"
      },
      {
        "code" : "15.35.10",
        "display" : "Regurgitation of the neo-aortic valve of pulmonary origin"
      },
      {
        "code" : "15.25.12",
        "display" : "Acquired stenosis of the neo-aortic valve of truncal origin"
      },
      {
        "code" : "15.25.13",
        "display" : "Acquired regurgitation of the neo-aortic valve of truncal origin"
      },
      {
        "code" : "15.16.02",
        "display" : "Residual ventricular component of atrioventricular septal defect"
      },
      {
        "code" : "15.13.02",
        "display" : "Residual common atrioventricular valvar regurgitation"
      },
      {
        "code" : "10.34.56",
        "display" : "Acquired stenosis of the common atrioventricular valve in biventricular connections"
      },
      {
        "code" : "10.16.22",
        "display" : "Acquired right ventricular dilation"
      },
      {
        "code" : "10.16.23",
        "display" : "Acquired right ventricular hypertrophy"
      },
      {
        "code" : "10.16.02",
        "display" : "Acquired right ventricular aneurysm"
      },
      {
        "code" : "07.01.11",
        "display" : "Right ventricular dysfunction"
      },
      {
        "code" : "15.20.23",
        "display" : "Residual right ventricular outflow tract obstruction"
      },
      {
        "code" : "10.16.76",
        "display" : "Acquired left ventricular dilation"
      },
      {
        "code" : "10.16.77",
        "display" : "Acquired left ventricular hypertrophy"
      },
      {
        "code" : "10.16.42",
        "display" : "Acquired left ventricular aneurysm"
      },
      {
        "code" : "10.16.47",
        "display" : "Left ventricular failure"
      },
      {
        "code" : "15.21.21",
        "display" : "Postprocedural left ventricular outflow tract complication"
      },
      {
        "code" : "10.16.86",
        "display" : "Acquired subaortic stenosis"
      },
      {
        "code" : "10.16.88",
        "display" : "Acquired subpulmonary stenosis"
      },
      {
        "code" : "15.22.02",
        "display" : "Residual ventricular septal defect (VSD)"
      },
      {
        "code" : "10.10.10",
        "display" : "Restrictive cardiomyopathy"
      },
      {
        "code" : "10.13.59",
        "display" : "Acquired pulmonary arterial tree abnormality"
      },
      {
        "code" : "15.32.02",
        "display" : "Postprocedural pulmonary trunk stenosis"
      },
      {
        "code" : "15.32.23",
        "display" : "Residual right pulmonary artery stenosis"
      },
      {
        "code" : "15.32.43",
        "display" : "Residual left pulmonary artery stenosis"
      },
      {
        "code" : "10.13.01",
        "display" : "Pulmonary arterial hypertension"
      },
      {
        "code" : "10.13.51",
        "display" : "Pulmonary embolism"
      },
      {
        "code" : "10.14.77",
        "display" : "Acquired supravalvar aortic stenosis"
      },
      {
        "code" : "10.14.82",
        "display" : "Acquired dilation of ascending aorta and/or aortic root"
      },
      {
        "code" : "09.16.13",
        "display" : "Aortic root dilation"
      },
      {
        "code" : "10.14.51",
        "display" : "Aortic dissection"
      },
      {
        "code" : "10.14.50",
        "display" : "Aortic aneurysm"
      },
      {
        "code" : "15.37.05",
        "display" : "Residual aortic coarctation"
      },
      {
        "code" : "15.41.00",
        "display" : "Postprocedural coronary arterial complication"
      },
      {
        "code" : "15.39.02",
        "display" : "Residual arterial duct (PDA) patency"
      },
      {
        "code" : "15.55.00",
        "display" : "Cardiac conduit related complication"
      },
      {
        "code" : "15.56.27",
        "display" : "Systemic-to-pulmonary arterial shunt obstruction"
      },
      {
        "code" : "15.56.01",
        "display" : "Systemic-to-pulmonary arterial shunt partial obstruction"
      },
      {
        "code" : "15.56.02",
        "display" : "Systemic-to-pulmonary arterial shunt complete obstruction"
      },
      {
        "code" : "15.55.24",
        "display" : "Pulmonary autograft failure"
      },
      {
        "code" : "15.90.60",
        "display" : "'Failed' Fontan type circulation"
      },
      {
        "code" : "10.08.31",
        "display" : "Pericardial effusion"
      },
      {
        "code" : "15.95.00",
        "display" : "Complication after heart or lung transplant"
      }]
    },
    {
      "system" : "https://taussig/fhir/CodeSystem/echsa",
      "concept" : [{
        "code" : "SP-2010-4060",
        "display" : "Création/agrandissement de communication interatriale"
      },
      {
        "code" : "SP-2010-5640",
        "display" : "Cerclage de l'artère pulmonaire"
      },
      {
        "code" : "SP-2010-5590",
        "display" : "Anastomose systémico-pulmonaire de Blalock-Taussig modifiée (MBTS)"
      },
      {
        "code" : "SP-2010-4870",
        "display" : "Intervention de Norwood"
      },
      {
        "code" : "SP-2010-5680",
        "display" : "Anastomose cavopulmonaire unidirectionnelle (Glenn unidirectionnel)"
      },
      {
        "code" : "SP-2010-5670",
        "display" : "Anastomose cavopulmonaire bidirectionnelle (Glenn bidirectionnel)"
      },
      {
        "code" : "SP-2010-5690",
        "display" : "Anastomose cavopulmonaire bidirectionnelle bilatérale"
      },
      {
        "code" : "SP-2010-5000",
        "display" : "Fontan (TCPC), conduit extracardiaque, fenestré"
      },
      {
        "code" : "SP-2010-5010",
        "display" : "Fontan (TCPC), conduit extracardiaque, non fenestré"
      },
      {
        "code" : "SP-2010-4970",
        "display" : "Fontan (TCPC), tunnel latéral, fenestré"
      },
      {
        "code" : "SP-2010-4980",
        "display" : "Fontan (TCPC), tunnel latéral, non fenestré"
      },
      {
        "code" : "SP-2010-4520",
        "display" : "Réparation à un ventricule et demi"
      },
      {
        "code" : "SP-2010-5710",
        "display" : "Palliation, autre"
      }]
    }]
  }
}

```
