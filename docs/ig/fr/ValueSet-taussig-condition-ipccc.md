# TAUSSIG — Liste des conditions évolutives (IPCCC) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.8.1

## ValueSet: TAUSSIG — Liste des conditions évolutives (IPCCC) (Expérimental) 

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
  "id" : "taussig-condition-ipccc",
  "url" : "https://taussig/fhir/ValueSet/taussig-condition-ipccc",
  "version" : "0.8.1",
  "name" : "TaussigConditionIpcccVS",
  "title" : "TAUSSIG — Liste des conditions évolutives (IPCCC)",
  "status" : "draft",
  "experimental" : true,
  "date" : "2026-11-09T15:30:29+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Les 94 codes IPCCC de la liste TAUSSIG des conditions cardiaques évolutives (décision B7).",
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
        "code" : "04.00.06",
        "display" : "Systemic venovenous collateral(s)"
      },
      {
        "code" : "07.01.11",
        "display" : "Right ventricular dysfunction"
      },
      {
        "code" : "09.16.13",
        "display" : "Aortic root dilation"
      },
      {
        "code" : "10.06.01",
        "display" : "Infective endocarditis"
      },
      {
        "code" : "10.07.90",
        "display" : "Myocarditis (inflammatory cardiomyopathy)"
      },
      {
        "code" : "10.08.16",
        "display" : "Chylothorax"
      },
      {
        "code" : "10.08.31",
        "display" : "Pericardial effusion"
      },
      {
        "code" : "10.09.01",
        "display" : "Kawasaki disease"
      },
      {
        "code" : "10.10.05",
        "display" : "Obstructive hypertrophic cardiomyopathy of left ventricle"
      },
      {
        "code" : "10.10.10",
        "display" : "Restrictive cardiomyopathy"
      },
      {
        "code" : "10.10.20",
        "display" : "Hypertrophic cardiomyopathy"
      },
      {
        "code" : "10.10.25",
        "display" : "Dilated cardiomyopathy"
      },
      {
        "code" : "10.13.00",
        "display" : "Irreversible pulmonary vascular disease"
      },
      {
        "code" : "10.13.01",
        "display" : "Pulmonary arterial hypertension"
      },
      {
        "code" : "10.13.08",
        "display" : "Irreversible pulmonary vascular disease due to congenital heart disease (Eisenmenger Syndrome)"
      },
      {
        "code" : "10.13.51",
        "display" : "Pulmonary embolism"
      },
      {
        "code" : "10.13.57",
        "display" : "Acquired pulmonary arteriovenous fistulas (malformations)"
      },
      {
        "code" : "10.13.59",
        "display" : "Acquired pulmonary arterial tree abnormality"
      },
      {
        "code" : "10.13.74",
        "display" : "Systemic-to-pulmonary collateral artery(ies) (MAPCA): acquired"
      },
      {
        "code" : "10.14.50",
        "display" : "Aortic aneurysm"
      },
      {
        "code" : "10.14.51",
        "display" : "Aortic dissection"
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
        "code" : "10.16.02",
        "display" : "Acquired right ventricular aneurysm"
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
        "code" : "10.16.42",
        "display" : "Acquired left ventricular aneurysm"
      },
      {
        "code" : "10.16.47",
        "display" : "Left ventricular failure"
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
        "code" : "10.16.86",
        "display" : "Acquired subaortic stenosis"
      },
      {
        "code" : "10.16.88",
        "display" : "Acquired subpulmonary stenosis"
      },
      {
        "code" : "10.18.00",
        "display" : "Myocardial infarction"
      },
      {
        "code" : "10.21.63",
        "display" : "Patient status post heart transplant"
      },
      {
        "code" : "10.24.00",
        "display" : "Acquired pulmonary venous abnormality"
      },
      {
        "code" : "10.24.02",
        "display" : "Pulmonary venous stenosis: acquired"
      },
      {
        "code" : "10.30.09",
        "display" : "Systemic vein obstruction"
      },
      {
        "code" : "10.30.16",
        "display" : "Acquired coronary sinus abnormality"
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
        "code" : "10.34.56",
        "display" : "Acquired stenosis of the common atrioventricular valve in biventricular connections"
      },
      {
        "code" : "11.00.00",
        "display" : "Arrhythmia"
      },
      {
        "code" : "11.03.07",
        "display" : "Atrial flutter"
      },
      {
        "code" : "11.03.08",
        "display" : "Atrial fibrillation"
      },
      {
        "code" : "11.03.09",
        "display" : "Atrial rhythm disturbance"
      },
      {
        "code" : "11.04.00",
        "display" : "Rhythm disturbance at level of atrioventricular junction"
      },
      {
        "code" : "11.05.00",
        "display" : "Ventricular rhythm disturbance"
      },
      {
        "code" : "11.06.10",
        "display" : "Acquired complete atrioventricular block"
      },
      {
        "code" : "11.06.38",
        "display" : "Atrioventricular block"
      },
      {
        "code" : "11.07.01",
        "display" : "Atrioventricular reentry (reciprocating) tachycardia: manifest preexcitation in sinus rhythm (Wolff Parkinson White)"
      },
      {
        "code" : "11.12.61",
        "display" : "Indication for elective replacement of pacemaker system"
      },
      {
        "code" : "15.02.00",
        "display" : "Postprocedural haemorrhage"
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
        "code" : "15.13.02",
        "display" : "Residual common atrioventricular valvar regurgitation"
      },
      {
        "code" : "15.16.02",
        "display" : "Residual ventricular component of atrioventricular septal defect"
      },
      {
        "code" : "15.20.23",
        "display" : "Residual right ventricular outflow tract obstruction"
      },
      {
        "code" : "15.21.21",
        "display" : "Postprocedural left ventricular outflow tract complication"
      },
      {
        "code" : "15.22.02",
        "display" : "Residual ventricular septal defect (VSD)"
      },
      {
        "code" : "15.25.03",
        "display" : "Residual truncal regurgitation"
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
        "code" : "15.37.05",
        "display" : "Residual aortic coarctation"
      },
      {
        "code" : "15.39.02",
        "display" : "Residual arterial duct (PDA) patency"
      },
      {
        "code" : "15.41.00",
        "display" : "Postprocedural coronary arterial complication"
      },
      {
        "code" : "15.50.03",
        "display" : "Inadvertent perforation of cardiac chamber or vessel during cardiac catheterisation"
      },
      {
        "code" : "15.50.37",
        "display" : "Embolisation of catheter introduced device"
      },
      {
        "code" : "15.51.47",
        "display" : "Embolisation of cardiovascular device during cardiac catheterisation"
      },
      {
        "code" : "15.51.50",
        "display" : "Device malfunction during cardiac catheterisation procedure"
      },
      {
        "code" : "15.55.00",
        "display" : "Cardiac conduit related complication"
      },
      {
        "code" : "15.55.24",
        "display" : "Pulmonary autograft failure"
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
        "code" : "15.56.27",
        "display" : "Systemic-to-pulmonary arterial shunt obstruction"
      },
      {
        "code" : "15.80.17",
        "display" : "Postprocedural retained foreign body"
      },
      {
        "code" : "15.81.01",
        "display" : "Cardiac postprocedural plastic bronchitis"
      },
      {
        "code" : "15.82.33",
        "display" : "Cardiac postprocedural protein losing enteropathy"
      },
      {
        "code" : "15.90.60",
        "display" : "'Failed' Fontan type circulation"
      },
      {
        "code" : "15.95.00",
        "display" : "Complication after heart or lung transplant"
      }]
    }]
  }
}

```
