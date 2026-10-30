# IPCCC Short List v5.0 (sous-ensemble de saisie) - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.0

## ValueSet: IPCCC Short List v5.0 (sous-ensemble de saisie) 

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
  "id" : "ipccc-short-list",
  "url" : "https://taussig/fhir/ValueSet/ipccc-short-list",
  "version" : "0.6.0",
  "name" : "IPCCCShortList",
  "title" : "IPCCC Short List v5.0 (sous-ensemble de saisie)",
  "status" : "active",
  "date" : "2026-10-30T22:35:46+01:00",
  "publisher" : "Projet TAUSSIG",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "copyright" : "IPCCC (c) ISNPCHD.",
  "compose" : {
    "include" : [{
      "system" : "https://taussig/fhir/CodeSystem/ipccc",
      "concept" : [{
        "code" : "01.01.00",
        "display" : "Normal heart"
      },
      {
        "code" : "01.01.01",
        "display" : "Tetralogy of Fallot"
      },
      {
        "code" : "01.01.02",
        "display" : "Transposition of the great arteries with concordant atrioventricular connections and intact ventricular septum"
      },
      {
        "code" : "01.01.03",
        "display" : "Congenitally corrected transposition of great arteries (discordant atrioventricular & ventriculo-arterial connections)"
      },
      {
        "code" : "01.01.04",
        "display" : "Double outlet right ventricle"
      },
      {
        "code" : "01.01.06",
        "display" : "Pulmonary atresia + ventricular septal defect (VSD) (including Fallot type)"
      },
      {
        "code" : "01.01.07",
        "display" : "Pulmonary atresia with intact ventricular septum"
      },
      {
        "code" : "01.01.09",
        "display" : "Hypoplastic left heart syndrome"
      },
      {
        "code" : "01.01.10",
        "display" : "Transposition of the great arteries with concordant atrioventricular connections and ventricular septal defect"
      },
      {
        "code" : "01.01.14",
        "display" : "Double inlet atrioventricular connection (double inlet ventricle)"
      },
      {
        "code" : "01.01.16",
        "display" : "Partial anomalous pulmonary venous connection of Scimitar type"
      },
      {
        "code" : "01.01.17",
        "display" : "Double outlet right ventricle with subaortic or doubly committed ventricular septal defect and pulmonary stenosis, Fallot type"
      },
      {
        "code" : "01.01.18",
        "display" : "Double outlet right ventricle with subpulmonary ventricular septal defect, transposition type"
      },
      {
        "code" : "01.01.19",
        "display" : "Double outlet right ventricle with non-committed ventricular septal defect"
      },
      {
        "code" : "01.01.20",
        "display" : "Atrioventricular septal defect and Tetralogy of Fallot"
      },
      {
        "code" : "01.01.22",
        "display" : "Functionally univentricular heart"
      },
      {
        "code" : "01.01.24",
        "display" : "Double outlet right ventricle with intact ventricular septum"
      },
      {
        "code" : "01.01.25",
        "display" : "Pulmonary atresia + ventricular septal defect (VSD) + systemic-to-pulmonary collateral artery(ies) (MAPCA(s))"
      },
      {
        "code" : "01.01.26",
        "display" : "Tetralogy of Fallot with pulmonary atresia"
      },
      {
        "code" : "01.01.33",
        "display" : "Left heart obstruction at multiple sites (including Shone syndrome)"
      },
      {
        "code" : "01.01.39",
        "display" : "Cardiac abnormality"
      },
      {
        "code" : "01.01.40",
        "display" : "Double outlet right ventricle with subaortic or doubly committed ventricular septal defect without pulmonary stenosis, ventricular septal defect type"
      },
      {
        "code" : "01.01.57",
        "display" : "Tetralogy of Fallot with pulmonary atresia and systemic-to-pulmonary collateral artery(ies) (MAPCA(s))"
      },
      {
        "code" : "01.01.59",
        "display" : "Structural developmental anomaly of heart and-or great vessels"
      },
      {
        "code" : "01.01.60",
        "display" : "Vascular abnormality"
      },
      {
        "code" : "01.01.61",
        "display" : "Aneurysm"
      },
      {
        "code" : "01.03.00",
        "display" : "Usual atrial arrangement (atrial situs solitus)"
      },
      {
        "code" : "01.03.06",
        "display" : "Abnormal atrial arrangement"
      },
      {
        "code" : "01.03.09",
        "display" : "Congenital anomaly of an atrioventricular and-or ventriculo-arterial connection(s)"
      },
      {
        "code" : "01.03.10",
        "display" : "Normal atrial arrangement (situs), atrioventricular & ventriculo-arterial connections"
      },
      {
        "code" : "01.04.00",
        "display" : "Concordant atrioventricular connections"
      },
      {
        "code" : "01.04.01",
        "display" : "Discordant atrioventricular connections"
      },
      {
        "code" : "01.04.03",
        "display" : "Double inlet right ventricle"
      },
      {
        "code" : "01.04.04",
        "display" : "Double inlet left ventricle"
      },
      {
        "code" : "01.04.05",
        "display" : "Double inlet to solitary ventricle of indeterminate morphology"
      },
      {
        "code" : "01.05.00",
        "display" : "Concordant ventriculo-arterial connections"
      },
      {
        "code" : "01.05.01",
        "display" : "Transposition of great arteries (discordant ventriculo-arterial connections) (TGA)"
      },
      {
        "code" : "01.05.03",
        "display" : "Double outlet left ventricle"
      },
      {
        "code" : "01.05.10",
        "display" : "Concordant ventriculo-arterial connections with parallel great arteries (anatomically corrected malposition)"
      },
      {
        "code" : "02.01.01",
        "display" : "Extrathoracic heart (ectopia cordis)"
      },
      {
        "code" : "02.01.02",
        "display" : "Dextrocardia: heart predominantly in right hemithorax"
      },
      {
        "code" : "02.01.03",
        "display" : "Laevocardia: heart predominantly in left hemithorax"
      },
      {
        "code" : "02.01.04",
        "display" : "Midline heart (mesocardia)"
      },
      {
        "code" : "02.01.09",
        "display" : "Anomalous position-orientation of heart"
      },
      {
        "code" : "02.03.01",
        "display" : "Right hand pattern ventricular topology (D loop)"
      },
      {
        "code" : "02.03.02",
        "display" : "Left hand pattern ventricular topology (L loop)"
      },
      {
        "code" : "02.03.03",
        "display" : "Crisscross heart (twisted atrioventricular connections)"
      },
      {
        "code" : "02.03.05",
        "display" : "Solitary ventricle of indeterminate morphology"
      },
      {
        "code" : "02.04.00",
        "display" : "Superior-inferior ('upstairs-downstairs') ventricular relationship"
      },
      {
        "code" : "02.04.12",
        "display" : "Abnormal ventricular relationships"
      },
      {
        "code" : "02.06.12",
        "display" : "Abnormal relationship of great arterial roots"
      },
      {
        "code" : "02.07.04",
        "display" : "Abnormal position or relationship of great vessels"
      },
      {
        "code" : "03.01.02",
        "display" : "Visceral heterotaxy (abnormal arrangement thoraco-abdominal organs)"
      },
      {
        "code" : "03.01.03",
        "display" : "Total mirror imagery (situs inversus totalis)"
      },
      {
        "code" : "03.01.04",
        "display" : "Right isomerism"
      },
      {
        "code" : "03.01.05",
        "display" : "Left isomerism"
      },
      {
        "code" : "03.01.09",
        "display" : "Position or morphology of thoraco-abdominal organs abnormal"
      },
      {
        "code" : "03.01.13",
        "display" : "Congenital anomaly of position and-or spatial relationships of thoraco-abdominal organs"
      },
      {
        "code" : "03.02.09",
        "display" : "Lung anomaly"
      },
      {
        "code" : "03.02.14",
        "display" : "Functionally congenital single lung"
      },
      {
        "code" : "03.02.23",
        "display" : "Scimitar syndrome"
      },
      {
        "code" : "03.03.05",
        "display" : "Tracheobronchial anomaly"
      },
      {
        "code" : "03.06.03",
        "display" : "Intestines malrotated"
      },
      {
        "code" : "03.07.03",
        "display" : "Spleen absent (asplenia)"
      },
      {
        "code" : "03.07.04",
        "display" : "Multiple spleens (polysplenia)"
      },
      {
        "code" : "04.00.06",
        "display" : "Systemic venovenous collateral(s)"
      },
      {
        "code" : "04.00.07",
        "display" : "Congenital anomaly of mediastinal vein(s)"
      },
      {
        "code" : "04.01.00",
        "display" : "Superior caval vein (SVC) abnormality"
      },
      {
        "code" : "04.01.01",
        "display" : "Left superior caval vein (SVC) to coronary sinus"
      },
      {
        "code" : "04.01.02",
        "display" : "Left superior caval vein (SVC) to left-sided atrium"
      },
      {
        "code" : "04.01.05",
        "display" : "Absent right superior caval vein (SVC)"
      },
      {
        "code" : "04.01.09",
        "display" : "Congenital anomaly of superior caval vein (SVC)"
      },
      {
        "code" : "04.01.25",
        "display" : "Left superior caval vein (SVC)"
      },
      {
        "code" : "04.02.00",
        "display" : "Hepatic vein abnormality"
      },
      {
        "code" : "04.02.13",
        "display" : "Anomalous hepatic venous connection to heart"
      },
      {
        "code" : "04.03.00",
        "display" : "Inferior caval vein (IVC) abnormality"
      },
      {
        "code" : "04.03.08",
        "display" : "Congenital anomaly of inferior caval vein (IVC)"
      },
      {
        "code" : "04.03.10",
        "display" : "Interrupted inferior caval vein (IVC) with absent suprarenal segment and azygos continuation"
      },
      {
        "code" : "04.04.00",
        "display" : "Coronary sinus abnormality"
      },
      {
        "code" : "04.04.05",
        "display" : "Congenital anomaly of coronary sinus"
      },
      {
        "code" : "04.04.13",
        "display" : "Unroofed coronary sinus"
      },
      {
        "code" : "04.04.14",
        "display" : "Coronary sinus orifice atresia or stenosis"
      },
      {
        "code" : "04.05.00",
        "display" : "Congenital anomaly of systemic vein(s)"
      },
      {
        "code" : "04.06.00",
        "display" : "Total anomalous pulmonary venous connection of the supracardiac type"
      },
      {
        "code" : "04.07.01",
        "display" : "Partial anomalous pulmonary venous connection(s)"
      },
      {
        "code" : "04.08.00",
        "display" : "Pulmonary vein abnormality"
      },
      {
        "code" : "04.08.02",
        "display" : "Congenital atresia of pulmonary vein(s)"
      },
      {
        "code" : "04.08.04",
        "display" : "Congenital anomaly of pulmonary vein(s)"
      },
      {
        "code" : "04.08.05",
        "display" : "Total anomalous pulmonary venous connection"
      },
      {
        "code" : "04.08.06",
        "display" : "Obstructed anomalous pulmonary venous pathway or connection"
      },
      {
        "code" : "04.08.07",
        "display" : "Anomalous pulmonary venous connection"
      },
      {
        "code" : "04.08.10",
        "display" : "Total anomalous pulmonary venous connection of the cardiac type"
      },
      {
        "code" : "04.08.20",
        "display" : "Total anomalous pulmonary venous connection of the infracardiac type"
      },
      {
        "code" : "04.08.30",
        "display" : "Total anomalous pulmonary venous connection of the mixed type"
      },
      {
        "code" : "04.08.31",
        "display" : "Congenital pulmonary venous stenosis and-or hypoplasia"
      },
      {
        "code" : "04.08.91",
        "display" : "Pulmonary vein stenosis"
      },
      {
        "code" : "05.01.00",
        "display" : "Right atrial abnormality"
      },
      {
        "code" : "05.01.06",
        "display" : "Left-sided juxtaposition of the atrial appendages"
      },
      {
        "code" : "05.01.12",
        "display" : "Congenital giant right atrium"
      },
      {
        "code" : "05.01.13",
        "display" : "Congenital anomaly of right atrium"
      },
      {
        "code" : "05.01.21",
        "display" : "Divided right atrium (obstructive Eustachian valve) (cor triatriatum dexter)"
      },
      {
        "code" : "05.02.00",
        "display" : "Left atrial abnormality"
      },
      {
        "code" : "05.02.01",
        "display" : "Divided left atrium (cor triatriatum)"
      },
      {
        "code" : "05.02.02",
        "display" : "Supravalvar or intravalvar mitral ring"
      },
      {
        "code" : "05.02.04",
        "display" : "Right-sided juxtaposition of the atrial appendages"
      },
      {
        "code" : "05.02.11",
        "display" : "Congenital anomaly of left atrium"
      },
      {
        "code" : "05.03.00",
        "display" : "Atrial septum abnormality"
      },
      {
        "code" : "05.03.01",
        "display" : "Patent foramen ovale (PFO)"
      },
      {
        "code" : "05.03.03",
        "display" : "Aneurysm of the atrial septum"
      },
      {
        "code" : "05.03.10",
        "display" : "Intact atrial septum (no interatrial communication)"
      },
      {
        "code" : "05.04.01",
        "display" : "Interatrial communication ('ASD')"
      },
      {
        "code" : "05.04.02",
        "display" : "Atrial septal defect (ASD) within oval fossa (secundum)"
      },
      {
        "code" : "05.04.03",
        "display" : "Spontaneous closure of atrial septal defect (ASD) within oval fossa (secundum)"
      },
      {
        "code" : "05.05.00",
        "display" : "Sinus venosus defect (ASD)"
      },
      {
        "code" : "05.05.03",
        "display" : "Interatrial communication (ASD) through coronary sinus orifice"
      },
      {
        "code" : "05.05.04",
        "display" : "Multiple interatrial communications"
      },
      {
        "code" : "05.06.01",
        "display" : "Common atrium (virtual absence of atrial septum)"
      },
      {
        "code" : "05.06.02",
        "display" : "Common atrium with separate atrioventricular junctions"
      },
      {
        "code" : "05.06.03",
        "display" : "Common atrium with common atrioventricular junction"
      },
      {
        "code" : "05.06.04",
        "display" : "Restrictive interatrial communication or intact atrial septum when an interatrial shunt is physiologically necessary"
      },
      {
        "code" : "05.07.01",
        "display" : "Congenital anomaly of atrial septum"
      },
      {
        "code" : "06.01.00",
        "display" : "Tricuspid valvar abnormality"
      },
      {
        "code" : "06.01.01",
        "display" : "Tricuspid atresia"
      },
      {
        "code" : "06.01.02",
        "display" : "Tricuspid atresia with imperforate tricuspid valve"
      },
      {
        "code" : "06.01.03",
        "display" : "Dysplasia of tricuspid valve"
      },
      {
        "code" : "06.01.04",
        "display" : "Tricuspid annular hypoplasia"
      },
      {
        "code" : "06.01.05",
        "display" : "Overriding tricuspid valve"
      },
      {
        "code" : "06.01.07",
        "display" : "Congenital tricuspid valvar stenosis"
      },
      {
        "code" : "06.01.09",
        "display" : "Straddling tricuspid valve"
      },
      {
        "code" : "06.01.11",
        "display" : "Congenital anomaly of tricuspid valve"
      },
      {
        "code" : "06.01.25",
        "display" : "Congenital tricuspid regurgitation"
      },
      {
        "code" : "06.01.26",
        "display" : "Tricuspid atresia with absent valvar annulus (connection-junction)"
      },
      {
        "code" : "06.01.34",
        "display" : "Ebstein malformation of tricuspid valve"
      },
      {
        "code" : "06.01.91",
        "display" : "Tricuspid regurgitation"
      },
      {
        "code" : "06.01.92",
        "display" : "Tricuspid stenosis"
      },
      {
        "code" : "06.02.00",
        "display" : "Mitral valvar abnormality"
      },
      {
        "code" : "06.02.01",
        "display" : "Mitral atresia"
      },
      {
        "code" : "06.02.02",
        "display" : "Mitral atresia with imperforate mitral valve"
      },
      {
        "code" : "06.02.03",
        "display" : "Dysplasia of mitral valve"
      },
      {
        "code" : "06.02.04",
        "display" : "Mitral annular hypoplasia"
      },
      {
        "code" : "06.02.05",
        "display" : "Overriding mitral valve"
      },
      {
        "code" : "06.02.07",
        "display" : "Congenital mitral valvar stenosis"
      },
      {
        "code" : "06.02.09",
        "display" : "Straddling mitral valve"
      },
      {
        "code" : "06.02.11",
        "display" : "Congenital anomaly of mitral valve"
      },
      {
        "code" : "06.02.12",
        "display" : "Mitral subvalvar apparatus abnormality"
      },
      {
        "code" : "06.02.13",
        "display" : "Mitral subvalvar stenosis"
      },
      {
        "code" : "06.02.21",
        "display" : "Congenital anomaly of mitral subvalvar apparatus"
      },
      {
        "code" : "06.02.22",
        "display" : "Congenital mitral subvalvar stenosis"
      },
      {
        "code" : "06.02.25",
        "display" : "Congenital mitral regurgitation"
      },
      {
        "code" : "06.02.26",
        "display" : "Mitral atresia with absent valvar annulus (connection-junction)"
      },
      {
        "code" : "06.02.35",
        "display" : "Mitral valvar prolapse"
      },
      {
        "code" : "06.02.36",
        "display" : "True cleft of mitral leaflet (without common atrioventricular junction)"
      },
      {
        "code" : "06.02.56",
        "display" : "Parachute malformation of mitral valve"
      },
      {
        "code" : "06.02.72",
        "display" : "Congenital mitral valvar prolapse"
      },
      {
        "code" : "06.02.91",
        "display" : "Mitral regurgitation"
      },
      {
        "code" : "06.02.92",
        "display" : "Mitral stenosis"
      },
      {
        "code" : "06.02.93",
        "display" : "Mitral valvar stenosis"
      },
      {
        "code" : "06.03.11",
        "display" : "Congenital anomaly of right-sided atrioventricular valve in double inlet ventricle"
      },
      {
        "code" : "06.04.11",
        "display" : "Congenital anomaly of left-sided atrioventricular valve in double inlet ventricle"
      },
      {
        "code" : "06.05.01",
        "display" : "Atypical atrioventricular valve in atrioventricular septal defect (AVSD)"
      },
      {
        "code" : "06.05.06",
        "display" : "Atrioventricular septal defect (AVSD) atrioventricular valvar regurgitation"
      },
      {
        "code" : "06.05.14",
        "display" : "Atypical common atrioventricular valve"
      },
      {
        "code" : "06.05.25",
        "display" : "Double orifice of left ventricular component of common atrioventricular valve (left atrioventricular valve)"
      },
      {
        "code" : "06.05.60",
        "display" : "Common atrioventricular valvar regurgitation"
      },
      {
        "code" : "06.05.71",
        "display" : "Atypical right ventricular component of common atrioventricular valve (right atrioventricular valve)"
      },
      {
        "code" : "06.05.72",
        "display" : "Atypical left ventricular component of common atrioventricular valve (left atrioventricular valve)"
      },
      {
        "code" : "06.05.98",
        "display" : "Deficient mural leaflet of left ventricular component of common atrioventricular valve (left atrioventricular valve)"
      },
      {
        "code" : "06.06.00",
        "display" : "Common atrioventricular junction with atrioventricular septal defect (AVSD)"
      },
      {
        "code" : "06.06.01",
        "display" : "Atrioventricular septal defect with communication at the atrial level only (primum atrial septal defect) (partial atrioventricular canal defect)"
      },
      {
        "code" : "06.06.08",
        "display" : "Atrioventricular septal defect with communication at the ventricular level only (atrioventricular canal defect with isolated ventricular communication)"
      },
      {
        "code" : "06.06.09",
        "display" : "Atrioventricular septal defect (atrioventricular canal defect) with communication at atrial level and unrestrictive communication at ventricular level (Complete atrioventricular septal defect)"
      },
      {
        "code" : "06.06.10",
        "display" : "Atrioventricular septal defect (atrioventricular canal defect) with communication at atrial level and restrictive communication at ventricular level (intermediate atrioventricular septal defect)"
      },
      {
        "code" : "06.07.05",
        "display" : "Atrioventricular septal defect (AVSD) with ventricular imbalance with dominant right ventricle and hypoplastic left ventricle"
      },
      {
        "code" : "06.07.06",
        "display" : "Atrioventricular septal defect (AVSD) with ventricular imbalance with dominant left ventricle and hypoplastic right ventricle"
      },
      {
        "code" : "06.07.26",
        "display" : "Atrioventricular septal defect (AVSD) with ventricular imbalance"
      },
      {
        "code" : "06.07.27",
        "display" : "Atrioventricular septal defect (AVSD) with balanced ventricles"
      },
      {
        "code" : "06.07.28",
        "display" : "Common atrioventricular junction without an atrioventricular septal defect"
      },
      {
        "code" : "06.07.36",
        "display" : "Common atrioventricular valve with unbalanced commitment of valve to ventricles"
      },
      {
        "code" : "06.07.37",
        "display" : "Common atrioventricular valve with unbalanced commitment of valve to right ventricle"
      },
      {
        "code" : "06.07.38",
        "display" : "Common atrioventricular valve with unbalanced commitment of valve to left ventricle"
      },
      {
        "code" : "07.00.01",
        "display" : "Interventricular dyssynchrony"
      },
      {
        "code" : "07.00.03",
        "display" : "Acquired ventricular abnormality"
      },
      {
        "code" : "07.01.00",
        "display" : "Right ventricular abnormality"
      },
      {
        "code" : "07.01.06",
        "display" : "Parchment right ventricle (including Uhl anomaly)"
      },
      {
        "code" : "07.01.07",
        "display" : "Congenital right ventricular anomaly"
      },
      {
        "code" : "07.01.10",
        "display" : "Arrhythmogenic ventricular cardiomyopathy with right ventricular dominance"
      },
      {
        "code" : "07.01.11",
        "display" : "Right ventricular dysfunction"
      },
      {
        "code" : "07.01.13",
        "display" : "Right ventricular myocardial sinusoids"
      },
      {
        "code" : "07.01.14",
        "display" : "Right ventricular aneurysm"
      },
      {
        "code" : "07.02.00",
        "display" : "Right ventricular hypoplasia"
      },
      {
        "code" : "07.03.01",
        "display" : "Double chambered right ventricle"
      },
      {
        "code" : "07.05.01",
        "display" : "Right ventricular outflow tract obstruction"
      },
      {
        "code" : "07.05.20",
        "display" : "Congenital right ventricular outflow tract obstruction"
      },
      {
        "code" : "07.05.30",
        "display" : "Subpulmonary stenosis"
      },
      {
        "code" : "07.05.32",
        "display" : "Congenital subpulmonary stenosis"
      },
      {
        "code" : "07.06.00",
        "display" : "Left ventricular abnormality"
      },
      {
        "code" : "07.06.07",
        "display" : "Congenital left ventricular anomaly"
      },
      {
        "code" : "07.06.10",
        "display" : "Left ventricular dysfunction"
      },
      {
        "code" : "07.06.12",
        "display" : "Left ventricular myocardial sinusoids"
      },
      {
        "code" : "07.06.13",
        "display" : "Left ventricular aneurysm"
      },
      {
        "code" : "07.06.19",
        "display" : "Congenital left ventricular aneurysm or diverticulum"
      },
      {
        "code" : "07.07.00",
        "display" : "Left ventricular hypoplasia"
      },
      {
        "code" : "07.08.41",
        "display" : "Ventricular imbalance: dominant left ventricle + hypoplastic right ventricle"
      },
      {
        "code" : "07.08.42",
        "display" : "Ventricular imbalance: dominant right ventricle + hypoplastic left ventricle"
      },
      {
        "code" : "07.08.50",
        "display" : "Ventricular myocardial hypertrabeculation"
      },
      {
        "code" : "07.09.00",
        "display" : "Subaortic stenosis"
      },
      {
        "code" : "07.09.01",
        "display" : "Left ventricular outflow tract obstruction"
      },
      {
        "code" : "07.09.03",
        "display" : "Subaortic stenosis due to fibromuscular shelf"
      },
      {
        "code" : "07.09.08",
        "display" : "Left ventricular outflow tract obstruction due to atrioventricular valve"
      },
      {
        "code" : "07.09.16",
        "display" : "Subaortic stenosis due to fibromuscular tunnel"
      },
      {
        "code" : "07.09.28",
        "display" : "Congenital left ventricular outflow tract obstruction"
      },
      {
        "code" : "07.09.31",
        "display" : "Aortic abnormality"
      },
      {
        "code" : "07.09.34",
        "display" : "Congenital anomaly of aorta and-or its branches"
      },
      {
        "code" : "07.09.50",
        "display" : "Congenital subaortic stenosis"
      },
      {
        "code" : "07.10.00",
        "display" : "Ventricular septal defect (VSD)"
      },
      {
        "code" : "07.10.01",
        "display" : "Perimembranous central ventricular septal defect (VSD)"
      },
      {
        "code" : "07.10.02",
        "display" : "Inlet perimembranous ventricular septal defect (VSD) without atrioventricular malalignment without a common atrioventricular junction"
      },
      {
        "code" : "07.10.04",
        "display" : "Outlet perimembranous ventricular septal defect (VSD) with anteriorly malaligned of outlet septum"
      },
      {
        "code" : "07.10.05",
        "display" : "Perimembranous ventricular septal defect (VSD) with extension to all right ventricular septal components (confluent)"
      },
      {
        "code" : "07.10.12",
        "display" : "Ventricular septal defect (VSD) with malaligned outlet septum"
      },
      {
        "code" : "07.10.17",
        "display" : "Outlet ventricular septal defect (VSD) with anteriorly malaligned outlet septum"
      },
      {
        "code" : "07.10.18",
        "display" : "Outlet ventricular septal defect (VSD) with posteriorly malaligned outlet septum"
      },
      {
        "code" : "07.10.19",
        "display" : "Outlet perimembranous ventricular septal defect (VSD) with posteriorly malaligned outlet septum"
      },
      {
        "code" : "07.11.01",
        "display" : "Trabecular muscular ventricular septal defect (VSD)"
      },
      {
        "code" : "07.11.02",
        "display" : "Inlet muscular ventricular septal defect (VSD)"
      },
      {
        "code" : "07.11.03",
        "display" : "Trabecular muscular ventricular septal defect (VSD) apical"
      },
      {
        "code" : "07.11.04",
        "display" : "Trabecular muscular ventricular septal defect (VSD) midseptal"
      },
      {
        "code" : "07.11.05",
        "display" : "Trabecular muscular ventricular septal defect (VSD)s multiple (Swiss cheese septum)"
      },
      {
        "code" : "07.11.06",
        "display" : "Outlet muscular ventricular septal defect (VSD) without malalignment"
      },
      {
        "code" : "07.11.07",
        "display" : "Trabecular muscular ventricular septal defect (VSD) anterosuperior"
      },
      {
        "code" : "07.11.12",
        "display" : "Trabecular muscular ventricular septal defect (VSD) postero-inferior"
      },
      {
        "code" : "07.11.15",
        "display" : "Outlet muscular ventricular septal defect (VSD) with anteriorly malaligned outlet septum"
      },
      {
        "code" : "07.11.16",
        "display" : "Outlet muscular ventricular septal defect (VSD) with posteriorly malaligned outlet septum"
      },
      {
        "code" : "07.12.00",
        "display" : "Outlet ventricular septal defect (VSD)"
      },
      {
        "code" : "07.12.01",
        "display" : "Doubly committed juxta-arterial ventricular septal defect (VSD) without malalignment"
      },
      {
        "code" : "07.12.02",
        "display" : "Doubly committed juxta-arterial ventricular septal defect (VSD) without malalignment and with muscular postero-inferior rim"
      },
      {
        "code" : "07.12.03",
        "display" : "Doubly committed juxta-arterial ventricular septal defect (VSD) without malalignment and with perimembranous extension"
      },
      {
        "code" : "07.12.05",
        "display" : "Doubly committed juxta-arterial ventricular septal defect (VSD) with anteriorly malaligned fibrous outlet septum and perimembranous extension"
      },
      {
        "code" : "07.12.06",
        "display" : "Doubly committed juxta-arterial ventricular septal defect (VSD) with posteriorly malaligned fibrous outlet septum and perimembranous extension"
      },
      {
        "code" : "07.12.07",
        "display" : "Doubly committed juxta-arterial ventricular septal defect (VSD) with anteriorly malaligned fibrous outlet septum and muscular postero-inferior rim"
      },
      {
        "code" : "07.12.08",
        "display" : "Doubly committed juxta-arterial ventricular septal defect (VSD) with posteriorly malaligned outlet septum and muscular postero-inferior rim"
      },
      {
        "code" : "07.12.09",
        "display" : "Outlet ventricular septal defect (VSD) without malalignment"
      },
      {
        "code" : "07.12.12",
        "display" : "Doubly committed juxta-arterial ventricular septal defect (VSD) with anteriorly malaligned fibrous outlet septum"
      },
      {
        "code" : "07.12.13",
        "display" : "Doubly committed juxta-arterial ventricular septal defect (VSD) with posteriorly malaligned fibrous outlet septum"
      },
      {
        "code" : "07.14.02",
        "display" : "Communication between left ventricle and right atrium (Gerbode defect)"
      },
      {
        "code" : "07.14.05",
        "display" : "Inlet ventricular septal defect (VSD) without a common atrioventricular junction"
      },
      {
        "code" : "07.14.06",
        "display" : "Inlet perimembranous ventricular septal defect (VSD) with atrioventricular septal malalignment and without common atrioventricular junction"
      },
      {
        "code" : "07.14.07",
        "display" : "Restrictive interventricular communication when an interventricular shunt is physiologically necessary"
      },
      {
        "code" : "07.15.01",
        "display" : "Ventricular septal defect(s) haemodynamically insignificant"
      },
      {
        "code" : "07.15.04",
        "display" : "Multiple ventricular septal defect (VSD)s"
      },
      {
        "code" : "07.15.05",
        "display" : "Single ventricular septal defect (VSD)"
      },
      {
        "code" : "07.16.01",
        "display" : "Spontaneous closure of ventricular septal defect (VSD)"
      },
      {
        "code" : "07.20.00",
        "display" : "Ventricular septal abnormality"
      },
      {
        "code" : "07.20.01",
        "display" : "Aneurysm of membranous septum"
      },
      {
        "code" : "07.20.04",
        "display" : "Congenital anomaly of ventricular septum"
      },
      {
        "code" : "07.21.00",
        "display" : "Intact ventricular septum"
      },
      {
        "code" : "09.01.01",
        "display" : "Common arterial trunk (truncus arteriosus)"
      },
      {
        "code" : "09.01.11",
        "display" : "Common arterial trunk (truncus arteriosus) with aortic dominance and one pulmonary artery absent from trunk, isolated pulmonary artery"
      },
      {
        "code" : "09.01.12",
        "display" : "Common arterial trunk (truncus arteriosus) with pulmonary dominance and aortic arch obstruction"
      },
      {
        "code" : "09.01.14",
        "display" : "Common arterial trunk (truncus arteriosus) with aortic dominance and both pulmonary arteries arising from trunk"
      },
      {
        "code" : "09.01.15",
        "display" : "Common arterial trunk (truncus arteriosus) with aortic dominance (no aortic arch obstruction)"
      },
      {
        "code" : "09.01.18",
        "display" : "Common arterial trunk (truncus arteriosus) with pulmonary dominance and interrupted aortic arch"
      },
      {
        "code" : "09.01.19",
        "display" : "Common arterial trunk (truncus arteriosus) with pulmonary dominance and aortic coarctation"
      },
      {
        "code" : "09.02.00",
        "display" : "Truncal valvar abnormality"
      },
      {
        "code" : "09.02.01",
        "display" : "Dysplasia of truncal valve"
      },
      {
        "code" : "09.02.03",
        "display" : "Truncal valvar regurgitation"
      },
      {
        "code" : "09.02.18",
        "display" : "Congenital truncal valvar stenosis"
      },
      {
        "code" : "09.02.19",
        "display" : "Congenital truncal valvar regurgitation"
      },
      {
        "code" : "09.04.01",
        "display" : "Aortopulmonary window"
      },
      {
        "code" : "09.04.07",
        "display" : "Congenital aortopulmonary window"
      },
      {
        "code" : "09.04.28",
        "display" : "Congenital anomaly of great arteries including arterial duct"
      },
      {
        "code" : "09.04.29",
        "display" : "Congenital anomaly of ventriculo-arterial valve(s) and-or adjacent regions"
      },
      {
        "code" : "09.05.00",
        "display" : "Pulmonary valvar abnormality"
      },
      {
        "code" : "09.05.01",
        "display" : "Pulmonary valvar stenosis"
      },
      {
        "code" : "09.05.04",
        "display" : "Congenital pulmonary valvar stenosis"
      },
      {
        "code" : "09.05.05",
        "display" : "Pulmonary 'annular' hypoplasia"
      },
      {
        "code" : "09.05.11",
        "display" : "Pulmonary atresia"
      },
      {
        "code" : "09.05.12",
        "display" : "Pulmonary atresia: imperforate valve"
      },
      {
        "code" : "09.05.15",
        "display" : "Pulmonary atresia: acquired"
      },
      {
        "code" : "09.05.16",
        "display" : "Congenital pulmonary atresia"
      },
      {
        "code" : "09.05.22",
        "display" : "Congenital pulmonary regurgitation"
      },
      {
        "code" : "09.05.24",
        "display" : "Dysplasia of pulmonary valve"
      },
      {
        "code" : "09.05.25",
        "display" : "Tetralogy of Fallot with absent pulmonary valve syndrome"
      },
      {
        "code" : "09.05.29",
        "display" : "Congenital anomaly of pulmonary valve"
      },
      {
        "code" : "09.05.32",
        "display" : "Bicuspid pulmonary valve"
      },
      {
        "code" : "09.05.91",
        "display" : "Pulmonary regurgitation"
      },
      {
        "code" : "09.05.92",
        "display" : "Pulmonary stenosis"
      },
      {
        "code" : "09.07.00",
        "display" : "Pulmonary trunk (MPA) abnormality"
      },
      {
        "code" : "09.07.05",
        "display" : "Absent or atretic pulmonary trunk (main pulmonary artery)"
      },
      {
        "code" : "09.07.11",
        "display" : "Pulmonary trunk hypoplasia"
      },
      {
        "code" : "09.07.13",
        "display" : "Supravalvar pulmonary trunk stenosis"
      },
      {
        "code" : "09.07.15",
        "display" : "Congenital supravalvar pulmonary stenosis"
      },
      {
        "code" : "09.07.16",
        "display" : "Congenital anomaly of pulmonary arterial tree"
      },
      {
        "code" : "09.07.19",
        "display" : "Congenital pulmonary trunk (main pulmonary artery) anomaly"
      },
      {
        "code" : "09.07.20",
        "display" : "Congenital pulmonary trunk hypoplasia"
      },
      {
        "code" : "09.07.26",
        "display" : "Solitary arterial trunk (absent intrapericardial pulmonary arteries)"
      },
      {
        "code" : "09.08.01",
        "display" : "Major systemic-to-pulmonary collateral artery(ies) (MAPCA(s))"
      },
      {
        "code" : "09.08.18",
        "display" : "Systemic-to-pulmonary collateral artery(ies)"
      },
      {
        "code" : "09.09.02",
        "display" : "Right pulmonary artery from arterial duct"
      },
      {
        "code" : "09.09.03",
        "display" : "Right pulmonary artery from ascending aorta"
      },
      {
        "code" : "09.09.04",
        "display" : "Left pulmonary artery from arterial duct"
      },
      {
        "code" : "09.09.05",
        "display" : "Left pulmonary artery from ascending aorta"
      },
      {
        "code" : "09.09.06",
        "display" : "Anomalous origin of left pulmonary artery from right pulmonary artery (pulmonary arterial sling)"
      },
      {
        "code" : "09.09.08",
        "display" : "Pulmonary artery origin from ascending aorta (hemitruncus)"
      },
      {
        "code" : "09.09.11",
        "display" : "Pulmonary artery from arterial duct"
      },
      {
        "code" : "09.10.00",
        "display" : "Pulmonary arterial abnormality"
      },
      {
        "code" : "09.10.01",
        "display" : "Pulmonary arterial stenosis"
      },
      {
        "code" : "09.10.06",
        "display" : "Peripheral pulmonary arterial stenoses or hypoplasia: at-beyond hilar bifurcation"
      },
      {
        "code" : "09.10.07",
        "display" : "Central pulmonary arterial stenosis or hypoplasia: proximal to hilar bifurcation"
      },
      {
        "code" : "09.10.10",
        "display" : "Discontinuous (non-confluent) right and left pulmonary arteries"
      },
      {
        "code" : "09.10.11",
        "display" : "Pulmonary arterial hypoplasia"
      },
      {
        "code" : "09.10.25",
        "display" : "Right pulmonary arterial stenosis"
      },
      {
        "code" : "09.10.26",
        "display" : "Left pulmonary arterial stenosis"
      },
      {
        "code" : "09.10.27",
        "display" : "Congenital pulmonary arterial branch stenosis"
      },
      {
        "code" : "09.10.28",
        "display" : "Congenital right pulmonary arterial stenosis"
      },
      {
        "code" : "09.10.29",
        "display" : "Congenital left pulmonary arterial stenosis"
      },
      {
        "code" : "09.10.30",
        "display" : "Congenitally discontinuous, non-confluent right and left pulmonary arteries"
      },
      {
        "code" : "09.10.36",
        "display" : "Congenital dilation of pulmonary arterial tree"
      },
      {
        "code" : "09.10.37",
        "display" : "Congenital central pulmonary arterial stenosis or hypoplasia proximal to hilar bifurcation"
      },
      {
        "code" : "09.10.38",
        "display" : "Congenital peripheral pulmonary arterial stenoses or hypoplasia at or beyond hilar bifurcation"
      },
      {
        "code" : "09.10.41",
        "display" : "Congenital pulmonary arterial branch anomaly"
      },
      {
        "code" : "09.10.44",
        "display" : "Pulmonary arterial aneurysm"
      },
      {
        "code" : "09.10.71",
        "display" : "Congenital pulmonary arterial branch hypoplasia"
      },
      {
        "code" : "09.10.72",
        "display" : "Congenital right pulmonary arterial hypoplasia"
      },
      {
        "code" : "09.10.73",
        "display" : "Congenital left pulmonary arterial hypoplasia"
      },
      {
        "code" : "09.10.75",
        "display" : "Absent or atretic right pulmonary artery"
      },
      {
        "code" : "09.10.77",
        "display" : "Absent or atretic left pulmonary artery"
      },
      {
        "code" : "09.15.00",
        "display" : "Aortic valvar abnormality"
      },
      {
        "code" : "09.15.01",
        "display" : "Congenital aortic valvar stenosis"
      },
      {
        "code" : "09.15.03",
        "display" : "Aortic atresia"
      },
      {
        "code" : "09.15.06",
        "display" : "Aortic valvar atresia"
      },
      {
        "code" : "09.15.07",
        "display" : "Congenital aortic regurgitation"
      },
      {
        "code" : "09.15.09",
        "display" : "Dysplasia of aortic valve"
      },
      {
        "code" : "09.15.12",
        "display" : "Eccentric opening of trileaflet aortic valve"
      },
      {
        "code" : "09.15.13",
        "display" : "Aortic valvar stenosis"
      },
      {
        "code" : "09.15.17",
        "display" : "Aortic 'annular' hypoplasia"
      },
      {
        "code" : "09.15.19",
        "display" : "Congenital anomaly of aortic valve"
      },
      {
        "code" : "09.15.21",
        "display" : "Unicuspid aortic valve"
      },
      {
        "code" : "09.15.22",
        "display" : "Bicuspid aortic valve"
      },
      {
        "code" : "09.15.30",
        "display" : "Aortic valvar prolapse"
      },
      {
        "code" : "09.15.91",
        "display" : "Aortic regurgitation"
      },
      {
        "code" : "09.15.92",
        "display" : "Aortic stenosis"
      },
      {
        "code" : "09.16.00",
        "display" : "Supravalvar aortic stenosis"
      },
      {
        "code" : "09.16.02",
        "display" : "Hypoplasia of ascending aorta"
      },
      {
        "code" : "09.16.05",
        "display" : "Ascending aorta dilation associated with Marfan syndrome"
      },
      {
        "code" : "09.16.06",
        "display" : "Congenital anomaly of ascending aorta"
      },
      {
        "code" : "09.16.09",
        "display" : "Ascending aorta dilation"
      },
      {
        "code" : "09.16.10",
        "display" : "Ascending aorta abnormality"
      },
      {
        "code" : "09.16.13",
        "display" : "Aortic root dilation"
      },
      {
        "code" : "09.16.18",
        "display" : "Congenital supravalvar aortic stenosis"
      },
      {
        "code" : "09.16.19",
        "display" : "Congenital ascending aorta dilation or aneurysm"
      },
      {
        "code" : "09.17.01",
        "display" : "Aortoventricular tunnel"
      },
      {
        "code" : "09.17.02",
        "display" : "Aorto - left ventricular tunnel"
      },
      {
        "code" : "09.18.01",
        "display" : "Aneurysm of aortic sinus of Valsalva"
      },
      {
        "code" : "09.18.03",
        "display" : "Ruptured aneurysm of aortic sinus of Valsalva"
      },
      {
        "code" : "09.19.01",
        "display" : "Arteriovenous fistula (malformation)"
      },
      {
        "code" : "09.19.05",
        "display" : "Pulmonary arteriovenous fistula (malformation)"
      },
      {
        "code" : "09.20.20",
        "display" : "Distal systemic arterial abnormality"
      },
      {
        "code" : "09.20.25",
        "display" : "Systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) stenosis(es)"
      },
      {
        "code" : "09.27.00",
        "display" : "Arterial duct (ductus arteriosus) abnormality"
      },
      {
        "code" : "09.27.05",
        "display" : "Congenital arterial duct (ductus arteriosus) anomaly"
      },
      {
        "code" : "09.27.21",
        "display" : "Patent arterial duct (PDA)"
      },
      {
        "code" : "09.28.00",
        "display" : "Aortic arch abnormality"
      },
      {
        "code" : "09.28.06",
        "display" : "Cervical aortic arch"
      },
      {
        "code" : "09.28.09",
        "display" : "Double aortic arch"
      },
      {
        "code" : "09.28.10",
        "display" : "Congenital anomaly of aortic arch"
      },
      {
        "code" : "09.28.15",
        "display" : "Right aortic arch"
      },
      {
        "code" : "09.28.16",
        "display" : "Descending aorta dilation"
      },
      {
        "code" : "09.28.22",
        "display" : "Left aortic arch"
      },
      {
        "code" : "09.28.47",
        "display" : "Congenital anomaly of descending thoracic and-or abdominal aorta"
      },
      {
        "code" : "09.29.01",
        "display" : "Coarctation of aorta"
      },
      {
        "code" : "09.29.02",
        "display" : "Preductal aortic coarctation"
      },
      {
        "code" : "09.29.03",
        "display" : "Juxtaductal aortic coarctation (paraductal)"
      },
      {
        "code" : "09.29.04",
        "display" : "Postductal aortic coarctation"
      },
      {
        "code" : "09.29.11",
        "display" : "Aortic arch hypoplasia"
      },
      {
        "code" : "09.29.16",
        "display" : "Descending-abdominal aorta hypoplasia (middle aortic syndrome)"
      },
      {
        "code" : "09.29.31",
        "display" : "Interrupted aortic arch"
      },
      {
        "code" : "09.29.32",
        "display" : "Interrupted aortic arch distal to subclavian artery, type A"
      },
      {
        "code" : "09.29.33",
        "display" : "Interrupted aortic arch between subclavian & common carotid arteries, type B"
      },
      {
        "code" : "09.29.34",
        "display" : "Interrupted aortic arch between carotid arteries, type C"
      },
      {
        "code" : "09.29.44",
        "display" : "Descending thoracic or abdominal aortic coarctation"
      },
      {
        "code" : "09.30.00",
        "display" : "Aortic arch branch abnormality"
      },
      {
        "code" : "09.30.02",
        "display" : "Aberrant origin right subclavian artery"
      },
      {
        "code" : "09.30.04",
        "display" : "Aberrant origin left subclavian artery"
      },
      {
        "code" : "09.30.16",
        "display" : "Isolation of an aortic arch branch"
      },
      {
        "code" : "09.30.17",
        "display" : "Congenital anomaly of aortic arch branch"
      },
      {
        "code" : "09.30.23",
        "display" : "Distal origin of brachiocephalic trunk (innominate artery) with tracheal compression (brachiocephalic trunk compression syndrome)"
      },
      {
        "code" : "09.31.00",
        "display" : "Vascular ring"
      },
      {
        "code" : "09.31.34",
        "display" : "Vascular ring of left aortic arch and right arterial duct or ligament"
      },
      {
        "code" : "09.31.35",
        "display" : "Vascular ring of right aortic arch and left arterial duct or ligament"
      },
      {
        "code" : "09.31.40",
        "display" : "Tracheo-esophageal compressive syndrome"
      },
      {
        "code" : "09.41.01",
        "display" : "Anomalous origin of coronary artery from pulmonary arterial tree"
      },
      {
        "code" : "09.41.03",
        "display" : "Anomalous origin of left coronary artery from pulmonary artery (ALCAPA)"
      },
      {
        "code" : "09.42.00",
        "display" : "Anomalous aortic origin or course of coronary artery"
      },
      {
        "code" : "09.42.20",
        "display" : "Anomalous aortic origin of coronary artery (AAOCA)"
      },
      {
        "code" : "09.42.21",
        "display" : "Anomalous aortic origin of coronary artery with ventriculo-arterial concordance"
      },
      {
        "code" : "09.43.04",
        "display" : "Anterior interventricular (left anterior descending) from right coronary artery across right ventricular outflow tract"
      },
      {
        "code" : "09.43.05",
        "display" : "Intramural proximal coronary arterial course"
      },
      {
        "code" : "09.43.12",
        "display" : "Myocardial bridging of coronary artery (intramyocardial coronary arterial course)"
      },
      {
        "code" : "09.43.13",
        "display" : "Single coronary artery supplying all of heart"
      },
      {
        "code" : "09.43.18",
        "display" : "Aberrant course of coronary artery: across right ventricular outflow tract"
      },
      {
        "code" : "09.44.05",
        "display" : "Congenital coronary arterial orifice stenosis"
      },
      {
        "code" : "09.44.19",
        "display" : "Congenital coronary arterial orifice atresia"
      },
      {
        "code" : "09.45.01",
        "display" : "Coronary fistula"
      },
      {
        "code" : "09.45.10",
        "display" : "Congenital coronary arterial fistula to right ventricle"
      },
      {
        "code" : "09.45.11",
        "display" : "Coronary fistulas within right ventricle ('sinusoidal')"
      },
      {
        "code" : "09.45.16",
        "display" : "Congenital coronary arterial fistula(s)"
      },
      {
        "code" : "09.45.22",
        "display" : "Congenital coronary arterial fistula to left ventricle"
      },
      {
        "code" : "09.46.00",
        "display" : "Coronary arterial abnormality"
      },
      {
        "code" : "09.46.01",
        "display" : "Coronary arterial aneurysm(s)"
      },
      {
        "code" : "09.46.03",
        "display" : "Congenital anomaly of coronary artery(ies)"
      },
      {
        "code" : "09.46.06",
        "display" : "Right ventricle dependent coronary circulation"
      },
      {
        "code" : "09.46.14",
        "display" : "Congenital coronary arterial aneurysm(s)"
      },
      {
        "code" : "09.46.21",
        "display" : "Left coronary artery from right aortic sinus with ventriculo-arterial concordance"
      },
      {
        "code" : "09.46.26",
        "display" : "Right coronary artery from left aortic sinus with ventriculo-arterial concordance"
      },
      {
        "code" : "10.01.00",
        "display" : "Pericardial abnormality"
      },
      {
        "code" : "10.01.01",
        "display" : "Partial agenesis of pericardium"
      },
      {
        "code" : "10.01.02",
        "display" : "Complete agenesis of pericardium"
      },
      {
        "code" : "10.01.03",
        "display" : "Pleuropericardial cyst"
      },
      {
        "code" : "10.01.05",
        "display" : "Congenital pericardial anomaly"
      },
      {
        "code" : "10.03.01",
        "display" : "Heart tumour"
      },
      {
        "code" : "10.03.53",
        "display" : "Congenital heart tumour"
      },
      {
        "code" : "10.05.01",
        "display" : "Acute rheumatic fever"
      },
      {
        "code" : "10.05.21",
        "display" : "Rheumatic fever with cardiac involvement"
      },
      {
        "code" : "10.05.30",
        "display" : "Rheumatic valvar disease"
      },
      {
        "code" : "10.05.31",
        "display" : "Rheumatic mitral valvar disease"
      },
      {
        "code" : "10.05.33",
        "display" : "Rheumatic aortic valvar disease"
      },
      {
        "code" : "10.06.00",
        "display" : "Endocarditis"
      },
      {
        "code" : "10.06.01",
        "display" : "Infective endocarditis"
      },
      {
        "code" : "10.06.08",
        "display" : "Infective endocarditis of tricuspid valve"
      },
      {
        "code" : "10.06.09",
        "display" : "Infective endocarditis of pulmonary valve"
      },
      {
        "code" : "10.06.10",
        "display" : "Infective endocarditis of mitral valve"
      },
      {
        "code" : "10.06.11",
        "display" : "Infective endocarditis of aortic valve"
      },
      {
        "code" : "10.06.12",
        "display" : "Endocarditis of right atrioventricular valve"
      },
      {
        "code" : "10.06.13",
        "display" : "Endocarditis of left atrioventricular valve"
      },
      {
        "code" : "10.06.14",
        "display" : "Endocarditis of common atrioventricular valve"
      },
      {
        "code" : "10.06.18",
        "display" : "Endarteritis at site of arterial duct"
      },
      {
        "code" : "10.06.20",
        "display" : "Heart abscess"
      },
      {
        "code" : "10.06.27",
        "display" : "Aortic perivalvar (root) abscess"
      },
      {
        "code" : "10.06.41",
        "display" : "Bacterial endocarditis"
      },
      {
        "code" : "10.06.64",
        "display" : "Postprocedural endocarditis"
      },
      {
        "code" : "10.06.65",
        "display" : "Preprocedural endocarditis"
      },
      {
        "code" : "10.06.66",
        "display" : "Endarteritis at site of aortic coarctation intervention"
      },
      {
        "code" : "10.06.88",
        "display" : "Endocarditis of truncal valve or neo-aortic valve of truncal origin"
      },
      {
        "code" : "10.06.89",
        "display" : "Endocarditis of neopulmonary valve"
      },
      {
        "code" : "10.06.90",
        "display" : "Endocarditis of the neo-aortic valve of pulmonary origin"
      },
      {
        "code" : "10.07.01",
        "display" : "Infectious myocarditis"
      },
      {
        "code" : "10.07.03",
        "display" : "Viral myocarditis"
      },
      {
        "code" : "10.07.04",
        "display" : "Bacterial myocarditis"
      },
      {
        "code" : "10.07.05",
        "display" : "Drug induced heart muscle disease"
      },
      {
        "code" : "10.07.07",
        "display" : "Fungal myocarditis"
      },
      {
        "code" : "10.07.08",
        "display" : "Trypanosomal myocarditis (Chagas' disease)"
      },
      {
        "code" : "10.07.09",
        "display" : "Protozoal myocarditis"
      },
      {
        "code" : "10.07.10",
        "display" : "Rickettsial myocarditis"
      },
      {
        "code" : "10.07.28",
        "display" : "Parasitic myocarditis"
      },
      {
        "code" : "10.07.40",
        "display" : "Dilated cardiomyopathy due to congenital heart disease"
      },
      {
        "code" : "10.07.42",
        "display" : "Heart muscle disease in cardiac rejection"
      },
      {
        "code" : "10.07.45",
        "display" : "Pacemaker mediated dilated cardiomyopathy"
      },
      {
        "code" : "10.07.51",
        "display" : "Dilated cardiomyopathy due to anthracycline toxicity"
      },
      {
        "code" : "10.07.55",
        "display" : "Dilated cardiomyopathy due to toxin exposure (toxic myocarditis)"
      },
      {
        "code" : "10.07.61",
        "display" : "Nutritional heart muscle disease"
      },
      {
        "code" : "10.07.71",
        "display" : "Heart muscle disease in infant of diabetic mother"
      },
      {
        "code" : "10.07.79",
        "display" : "Dilated cardiomyopathy due to endocrinopathy"
      },
      {
        "code" : "10.07.81",
        "display" : "Heart muscle disease in collagen vascular/ connective tissue disorder"
      },
      {
        "code" : "10.07.90",
        "display" : "Myocarditis (inflammatory cardiomyopathy)"
      },
      {
        "code" : "10.08.00",
        "display" : "Pericarditis"
      },
      {
        "code" : "10.08.01",
        "display" : "Infectious pericarditis"
      },
      {
        "code" : "10.08.03",
        "display" : "Viral pericarditis"
      },
      {
        "code" : "10.08.04",
        "display" : "Bacterial pericarditis"
      },
      {
        "code" : "10.08.09",
        "display" : "Constrictive pericarditis"
      },
      {
        "code" : "10.08.11",
        "display" : "Postpericardiotomy syndrome"
      },
      {
        "code" : "10.08.13",
        "display" : "Cardiac tamponade"
      },
      {
        "code" : "10.08.15",
        "display" : "Chylopericardium"
      },
      {
        "code" : "10.08.29",
        "display" : "Pericardial abnormality: acquired"
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
        "code" : "10.09.02",
        "display" : "Kawasaki disease with aneurysm(s) or dilated coronary vessels"
      },
      {
        "code" : "10.09.08",
        "display" : "Kawasaki disease without cardiac involvement"
      },
      {
        "code" : "10.09.10",
        "display" : "Acquired coronary arterial disease"
      },
      {
        "code" : "10.09.30",
        "display" : "Ischaemic heart disease"
      },
      {
        "code" : "10.09.53",
        "display" : "Chronic total occlusion of coronary artery"
      },
      {
        "code" : "10.09.76",
        "display" : "Dilated cardiomyopathy due to systemic autoimmune disorder"
      },
      {
        "code" : "10.10.01",
        "display" : "Cardiomyopathy"
      },
      {
        "code" : "10.10.10",
        "display" : "Restrictive cardiomyopathy"
      },
      {
        "code" : "10.10.11",
        "display" : "Idiopathic restrictive cardiomyopathy"
      },
      {
        "code" : "10.10.12",
        "display" : "Endocardial fibroelastosis"
      },
      {
        "code" : "10.10.13",
        "display" : "Infiltrative cardiomyopathy"
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
        "code" : "10.10.30",
        "display" : "Familial-genetic hypertrophic cardiomyopathy"
      },
      {
        "code" : "10.10.31",
        "display" : "Tachycardia induced dilated cardiomyopathy"
      },
      {
        "code" : "10.10.32",
        "display" : "Familial-genetic dilated cardiomyopathy"
      },
      {
        "code" : "10.10.34",
        "display" : "Hypertrophic cardiomyopathy associated with mitochondrial disease"
      },
      {
        "code" : "10.10.35",
        "display" : "Idiopathic isolated dilated cardiomyopathy"
      },
      {
        "code" : "10.10.46",
        "display" : "Restrictive cardiomyopathy due to glycogen storage disease"
      },
      {
        "code" : "10.10.48",
        "display" : "Restrictive cardiomyopathy due to endomyocardial abnormality"
      },
      {
        "code" : "10.10.49",
        "display" : "Endomyocardial fibrosis"
      },
      {
        "code" : "10.10.70",
        "display" : "Nonobstructive hypertrophic cardiomyopathy"
      },
      {
        "code" : "10.10.71",
        "display" : "Obstructive hypertrophic cardiomyopathy"
      },
      {
        "code" : "10.10.72",
        "display" : "Idiopathic isolated hypertrophic cardiomyopathy"
      },
      {
        "code" : "10.10.74",
        "display" : "Sarcomeric hypertrophic cardiomyopathy"
      },
      {
        "code" : "10.10.83",
        "display" : "Sarcomeric dilated cardiomyopathy"
      },
      {
        "code" : "10.10.88",
        "display" : "Dilated cardiomyopathy due to mitochondrial myopathy"
      },
      {
        "code" : "10.10.89",
        "display" : "X-linked infantile dilated cardiomyopathy"
      },
      {
        "code" : "10.10.93",
        "display" : "Dilated cardiomyopathy due to neuromuscular disease"
      },
      {
        "code" : "10.10.94",
        "display" : "Dilated cardiomyopathy due to dystrophinopathy"
      },
      {
        "code" : "10.10.95",
        "display" : "Arrhythmogenic ventricular cardiomyopathy with left ventricular dominance"
      },
      {
        "code" : "10.10.99",
        "display" : "Arrhythmogenic ventricular cardiomyopathy"
      },
      {
        "code" : "10.11.30",
        "display" : "Dilated cardiomyopathy due to laminopathy (LMNA)"
      },
      {
        "code" : "10.11.31",
        "display" : "Dilated cardiomyopathy due to fatty acid oxidation disorder"
      },
      {
        "code" : "10.11.32",
        "display" : "Dilated cardiomyopathy due to primary carnitine deficiency"
      },
      {
        "code" : "10.11.33",
        "display" : "Dilated cardiomyopathy due to lysosomal storage disorder"
      },
      {
        "code" : "10.11.40",
        "display" : "Nonfamilial dilated cardiomyopathy"
      },
      {
        "code" : "10.11.41",
        "display" : "Non-infectious inflammatory dilated cardiomyopathy (myocarditis)"
      },
      {
        "code" : "10.11.42",
        "display" : "Myocarditis due to Kawasaki disease"
      },
      {
        "code" : "10.11.43",
        "display" : "Dilated cardiomyopathy due to congenital anomaly of coronary artery"
      },
      {
        "code" : "10.11.44",
        "display" : "Premature ventricular complex mediated dilated cardiomyopathy"
      },
      {
        "code" : "10.11.45",
        "display" : "Syndromic hypertrophic cardiomyopathy"
      },
      {
        "code" : "10.11.46",
        "display" : "Hypertrophic cardiomyopathy due to lysosomal storage disease"
      },
      {
        "code" : "10.11.47",
        "display" : "Hypertrophic cardiomyopathy due to glycogen storage disease"
      },
      {
        "code" : "10.11.48",
        "display" : "Hypertrophic cardiomyopathy due to disorder of fatty acid metabolism"
      },
      {
        "code" : "10.11.49",
        "display" : "Nonfamilial hypertrophic cardiomyopathy"
      },
      {
        "code" : "10.11.51",
        "display" : "Dilated cardiomyopathy due to nutritional disorder"
      },
      {
        "code" : "10.11.53",
        "display" : "Hypertrophic cardiomyopathy due to hyperinsulinemia"
      },
      {
        "code" : "10.11.54",
        "display" : "Restrictive cardiomyopathy due to storage disease"
      },
      {
        "code" : "10.11.56",
        "display" : "Non-familial restrictive cardiomyopathy"
      },
      {
        "code" : "10.11.60",
        "display" : "Familial-genetic ventricular myocardial hypertrabeculation"
      },
      {
        "code" : "10.11.65",
        "display" : "Ventricular myocardial hypertrabeculation associated with congenital heart disease"
      },
      {
        "code" : "10.11.67",
        "display" : "Myocarditis and-or pericarditis after mRNA COVID-19 vaccination"
      },
      {
        "code" : "10.12.01",
        "display" : "Innocent functional murmur"
      },
      {
        "code" : "10.12.39",
        "display" : "Failure to thrive"
      },
      {
        "code" : "10.12.42",
        "display" : "Chest pain"
      },
      {
        "code" : "10.12.47",
        "display" : "Delayed developmental milestones"
      },
      {
        "code" : "10.12.51",
        "display" : "Angina pectoris"
      },
      {
        "code" : "10.12.72",
        "display" : "Symptom-sign of non-cardiac disease"
      },
      {
        "code" : "10.13.01",
        "display" : "Pulmonary arterial hypertension"
      },
      {
        "code" : "10.13.02",
        "display" : "Idiopathic (primary) pulmonary hypertension"
      },
      {
        "code" : "10.13.06",
        "display" : "Pulmonary vascular disease"
      },
      {
        "code" : "10.13.08",
        "display" : "Irreversible pulmonary vascular disease due to congenital heart disease (Eisenmenger Syndrome)"
      },
      {
        "code" : "10.13.20",
        "display" : "Secondary pulmonary hypertension"
      },
      {
        "code" : "10.13.21",
        "display" : "Pulmonary hypertension due to congenital systemic-to-pulmonary shunt"
      },
      {
        "code" : "10.13.50",
        "display" : "Pulmonary arterial disease: acquired"
      },
      {
        "code" : "10.13.51",
        "display" : "Pulmonary embolism"
      },
      {
        "code" : "10.13.59",
        "display" : "Acquired pulmonary arterial tree abnormality"
      },
      {
        "code" : "10.13.62",
        "display" : "Acquired pulmonary arterial aneurysm"
      },
      {
        "code" : "10.13.63",
        "display" : "Elevated lung resistance for biventricular repair (over 6 Wood units)"
      },
      {
        "code" : "10.13.64",
        "display" : "Elevated lung resistance for heart transplant (over 4 Wood units)"
      },
      {
        "code" : "10.13.65",
        "display" : "Elevated lung resistance for univentricular repair (over 2 Wood units)"
      },
      {
        "code" : "10.13.68",
        "display" : "Acquired right pulmonary arterial stenosis"
      },
      {
        "code" : "10.13.69",
        "display" : "Acquired left pulmonary arterial stenosis"
      },
      {
        "code" : "10.13.75",
        "display" : "Acquired pulmonary trunk stenosis"
      },
      {
        "code" : "10.13.77",
        "display" : "Acquired discontinuity of pulmonary arteries"
      },
      {
        "code" : "10.13.78",
        "display" : "Acquired pulmonary arterial dissection"
      },
      {
        "code" : "10.14.00",
        "display" : "Secondary systemic hypertension"
      },
      {
        "code" : "10.14.01",
        "display" : "Systemic hypertension"
      },
      {
        "code" : "10.14.02",
        "display" : "Primary (essential) systemic hypertension"
      },
      {
        "code" : "10.14.04",
        "display" : "Systemic hypertension due to aortic arch obstruction"
      },
      {
        "code" : "10.14.38",
        "display" : "Aortopathy associated with bicuspid (bileaflet) aortic valve"
      },
      {
        "code" : "10.14.40",
        "display" : "Ascending aorta dilation: acquired"
      },
      {
        "code" : "10.14.42",
        "display" : "Ascending aorta aneurysm"
      },
      {
        "code" : "10.14.43",
        "display" : "Descending aorta aneurysm"
      },
      {
        "code" : "10.14.44",
        "display" : "Abdominal aorta aneurysm"
      },
      {
        "code" : "10.14.45",
        "display" : "Rupture of thoracic aortic aneurysm"
      },
      {
        "code" : "10.14.46",
        "display" : "Rupture of abdominal aortic aneurysm"
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
        "code" : "10.14.52",
        "display" : "Ascending aorta dissection & propagation beyond arch (DeBakey type I)"
      },
      {
        "code" : "10.14.53",
        "display" : "Ascending aorta dissection not beyond arch (DeBakey type II-Stanford type A)"
      },
      {
        "code" : "10.14.54",
        "display" : "Descending aorta dissection & distal propagation (DeBakey type III-Stanford type B)"
      },
      {
        "code" : "10.14.60",
        "display" : "Systemic arteritis"
      },
      {
        "code" : "10.14.70",
        "display" : "Acquired abnormality of aorta"
      },
      {
        "code" : "10.14.72",
        "display" : "Recoarctation of aorta"
      },
      {
        "code" : "10.14.74",
        "display" : "Paradoxical arterial embolus"
      },
      {
        "code" : "10.14.77",
        "display" : "Acquired supravalvar aortic stenosis"
      },
      {
        "code" : "10.14.80",
        "display" : "Acquired abnormality of arterial duct (ductus arteriosus)"
      },
      {
        "code" : "10.14.82",
        "display" : "Acquired dilation of ascending aorta and/or aortic root"
      },
      {
        "code" : "10.14.95",
        "display" : "Ascending aortopathy associated with conotruncal malformations"
      },
      {
        "code" : "10.15.00",
        "display" : "Neonatal disorder"
      },
      {
        "code" : "10.15.01",
        "display" : "Persistent pulmonary hypertension of the newborn (PFC)"
      },
      {
        "code" : "10.15.05",
        "display" : "Necrotising enterocolitis"
      },
      {
        "code" : "10.15.10",
        "display" : "Transient myocardial ischaemia"
      },
      {
        "code" : "10.15.12",
        "display" : "Meconium aspiration"
      },
      {
        "code" : "10.16.00",
        "display" : "Acquired right ventricular abnormality"
      },
      {
        "code" : "10.16.02",
        "display" : "Acquired right ventricular aneurysm"
      },
      {
        "code" : "10.16.08",
        "display" : "Right ventricular heart failure"
      },
      {
        "code" : "10.16.16",
        "display" : "Acquired right ventricular outflow tract obstruction"
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
        "code" : "10.16.40",
        "display" : "Acquired left ventricular abnormality"
      },
      {
        "code" : "10.16.42",
        "display" : "Acquired left ventricular aneurysm"
      },
      {
        "code" : "10.16.46",
        "display" : "Recurrent left ventricular outflow tract obstruction"
      },
      {
        "code" : "10.16.47",
        "display" : "Left ventricular failure"
      },
      {
        "code" : "10.16.53",
        "display" : "Acquired left ventricular outflow tract obstruction"
      },
      {
        "code" : "10.16.59",
        "display" : "Left ventricular failure with reduced ejection fraction (40% or less)"
      },
      {
        "code" : "10.16.60",
        "display" : "Abnormality associated with ventricular septum: acquired"
      },
      {
        "code" : "10.16.62",
        "display" : "Postmyocardial infarct ventricular septal defect (VSD)"
      },
      {
        "code" : "10.16.63",
        "display" : "Acquired interventricular communication (VSD)"
      },
      {
        "code" : "10.16.75",
        "display" : "Left ventricular failure with preserved ejection fraction (50% or more)"
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
        "code" : "10.16.78",
        "display" : "Left ventricular failure with mildly reduced ejection fraction (41-49%)"
      },
      {
        "code" : "10.16.81",
        "display" : "Acquired narrowing of constructed cardiac intraventricular tunnel"
      },
      {
        "code" : "10.16.82",
        "display" : "Subaortic stenosis in functionally univentricular heart: acquired"
      },
      {
        "code" : "10.16.83",
        "display" : "Subpulmonary stenosis in functionally univentricular heart: acquired"
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
        "code" : "10.17.00",
        "display" : "Symptom-sign of heart disease"
      },
      {
        "code" : "10.17.03",
        "display" : "Cyanosis"
      },
      {
        "code" : "10.17.05",
        "display" : "Heart failure"
      },
      {
        "code" : "10.17.09",
        "display" : "Cardiac symptom without pathology"
      },
      {
        "code" : "10.17.12",
        "display" : "Cyanotic spells"
      },
      {
        "code" : "10.17.13",
        "display" : "Palpitations"
      },
      {
        "code" : "10.17.23",
        "display" : "Shock"
      },
      {
        "code" : "10.17.33",
        "display" : "Acquired atrial abnormality"
      },
      {
        "code" : "10.17.40",
        "display" : "Atrial septum abnormality: acquired"
      },
      {
        "code" : "10.17.46",
        "display" : "Acquired interatrial communication ('ASD')"
      },
      {
        "code" : "10.17.50",
        "display" : "Platypnoea-orthodeoxia syndrome"
      },
      {
        "code" : "10.18.00",
        "display" : "Myocardial infarction"
      },
      {
        "code" : "10.18.01",
        "display" : "Acute myocardial infarction"
      },
      {
        "code" : "10.18.24",
        "display" : "Postmyocardial infarction complication"
      },
      {
        "code" : "10.18.26",
        "display" : "Acute coronary syndrome: myocardial infarct with ST elevation (STEMI)"
      },
      {
        "code" : "10.18.27",
        "display" : "Acute coronary syndrome: myocardial infarct without ST elevation (NSTEMI)"
      },
      {
        "code" : "10.18.48",
        "display" : "Personal history of ischaemic heart disease"
      },
      {
        "code" : "10.18.52",
        "display" : "Musculoskeletal chest pain"
      },
      {
        "code" : "10.19.01",
        "display" : "Dyslipidaemia"
      },
      {
        "code" : "10.19.02",
        "display" : "Familial hypercholesterolaemia"
      },
      {
        "code" : "10.19.11",
        "display" : "Hypercholesterolaemia"
      },
      {
        "code" : "10.20.00",
        "display" : "No preprocedural risk factors"
      },
      {
        "code" : "10.20.02",
        "display" : "Preprocedural shock"
      },
      {
        "code" : "10.20.03",
        "display" : "Preprocedural arrhythmia"
      },
      {
        "code" : "10.20.05",
        "display" : "Preprocedural acidosis"
      },
      {
        "code" : "10.20.06",
        "display" : "Preprocedural coagulation disorder"
      },
      {
        "code" : "10.20.07",
        "display" : "Preprocedural renal failure (creatinine over 1.5 times upper limit of normal for age)"
      },
      {
        "code" : "10.20.08",
        "display" : "Preprocedural renal failure requiring dialysis"
      },
      {
        "code" : "10.20.09",
        "display" : "Preprocedural septicaemia"
      },
      {
        "code" : "10.20.12",
        "display" : "Preprocedural neurological impairment"
      },
      {
        "code" : "10.20.13",
        "display" : "Preprocedural cerebral abnormality on imaging"
      },
      {
        "code" : "10.20.14",
        "display" : "Preprocedural mechanical ventilatory support"
      },
      {
        "code" : "10.20.15",
        "display" : "Preprocedural mechanical circulatory support"
      },
      {
        "code" : "10.20.16",
        "display" : "Preprocedural pulmonary hypertension"
      },
      {
        "code" : "10.20.17",
        "display" : "Preprocedural tracheostomy"
      },
      {
        "code" : "10.20.18",
        "display" : "Preprocedural seizures"
      },
      {
        "code" : "10.20.19",
        "display" : "Preprocedural risk factor"
      },
      {
        "code" : "10.20.31",
        "display" : "Preprocedural shock at time of surgery (persistent)"
      },
      {
        "code" : "10.20.32",
        "display" : "Preprocedural shock resolved by time of surgery"
      },
      {
        "code" : "10.20.33",
        "display" : "Preprocedural cardiopulmonary resuscitation (less than 48 hours)"
      },
      {
        "code" : "10.20.34",
        "display" : "Preprocedural myocardial dysfunction"
      },
      {
        "code" : "10.20.36",
        "display" : "Preprocedural hepatic dysfunction"
      },
      {
        "code" : "10.20.37",
        "display" : "Preprocedural respiratory syncytial virus (RSV) infection"
      },
      {
        "code" : "10.20.38",
        "display" : "Preprocedural necrotising enterocolitis: treated medically"
      },
      {
        "code" : "10.20.39",
        "display" : "Preprocedural necrotising enterocolitis: treated surgically"
      },
      {
        "code" : "10.20.45",
        "display" : "Preprocedural pulmonary hypertension (pulmonary pressure more than or equal to systemic pressure): echo data"
      },
      {
        "code" : "10.20.46",
        "display" : "Preprocedural pulmonary hypertension (pulmonary pressure more than or equal to systemic pressure): catheter data"
      },
      {
        "code" : "10.20.49",
        "display" : "Preprocedural gastrostomy present"
      },
      {
        "code" : "10.20.50",
        "display" : "Preprocedural inotropic support therapy"
      },
      {
        "code" : "10.22.02",
        "display" : "Premature birth"
      },
      {
        "code" : "10.22.03",
        "display" : "Infant of diabetic mother"
      },
      {
        "code" : "10.22.05",
        "display" : "Premature birth 32-35 weeks"
      },
      {
        "code" : "10.22.06",
        "display" : "Premature birth less than 32 weeks"
      },
      {
        "code" : "10.22.07",
        "display" : "Weight less than 2.5 kg"
      },
      {
        "code" : "10.23.00",
        "display" : "Hereditary-noncardiac abnormality not apparent"
      },
      {
        "code" : "10.23.01",
        "display" : "Family history of congenital heart lesion"
      },
      {
        "code" : "10.23.02",
        "display" : "Maternal systemic lupus erythematosus (SLE)"
      },
      {
        "code" : "10.23.03",
        "display" : "Family history of disorder with cardiac involvement"
      },
      {
        "code" : "10.23.04",
        "display" : "Hereditary disorder potentially with associated heart disease"
      },
      {
        "code" : "10.23.05",
        "display" : "Family history of cardiomyopathy"
      },
      {
        "code" : "10.23.11",
        "display" : "Family history of sudden death"
      },
      {
        "code" : "10.23.13",
        "display" : "Family history of arrhythmia"
      },
      {
        "code" : "10.23.14",
        "display" : "Family history of hyperlipidaemia"
      },
      {
        "code" : "10.24.00",
        "display" : "Acquired pulmonary venous abnormality"
      },
      {
        "code" : "10.24.12",
        "display" : "Acquired pulmonary venous obstruction"
      },
      {
        "code" : "10.30.00",
        "display" : "Acquired systemic vein abnormality"
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
        "code" : "10.30.30",
        "display" : "Pulmonary oedema"
      },
      {
        "code" : "10.31.01",
        "display" : "Acquired superior caval vein (SVC) abnormality"
      },
      {
        "code" : "10.31.03",
        "display" : "Superior caval vein (SVC) obstruction due to tumour infiltration"
      },
      {
        "code" : "10.31.04",
        "display" : "Superior caval vein (SVC) syndrome"
      },
      {
        "code" : "10.31.05",
        "display" : "Superior caval vein (SVC) obstruction"
      },
      {
        "code" : "10.31.21",
        "display" : "Acquired inferior caval vein (IVC) abnormality"
      },
      {
        "code" : "10.31.23",
        "display" : "Inferior caval vein (IVC) obstruction due to tumour infiltration"
      },
      {
        "code" : "10.31.24",
        "display" : "Inferior caval vein (IVC) syndrome"
      },
      {
        "code" : "10.31.25",
        "display" : "Inferior caval vein (IVC) obstruction"
      },
      {
        "code" : "10.32.00",
        "display" : "Heart valvar abnormality: acquired"
      },
      {
        "code" : "10.32.01",
        "display" : "Tricuspid valvar abnormality: acquired"
      },
      {
        "code" : "10.33.00",
        "display" : "Prosthetic valve failure"
      },
      {
        "code" : "10.33.01",
        "display" : "Mitral valvar abnormality: acquired"
      },
      {
        "code" : "10.33.02",
        "display" : "Mitral valvar stenosis: acquired"
      },
      {
        "code" : "10.33.03",
        "display" : "Mitral valvar stenosis: recurrent"
      },
      {
        "code" : "10.33.04",
        "display" : "Mitral regurgitation: acquired"
      },
      {
        "code" : "10.33.06",
        "display" : "Mitral regurgitation: recurrent"
      },
      {
        "code" : "10.34.12",
        "display" : "Acquired abnormality of the right-sided atrioventricular valve in double inlet ventricle"
      },
      {
        "code" : "10.34.13",
        "display" : "Acquired stenosis of the right ventricular component of the common atrioventricular valve in biventricular connections"
      },
      {
        "code" : "10.34.44",
        "display" : "Left atrioventricular valvar regurgitation: acquired"
      },
      {
        "code" : "10.34.52",
        "display" : "Acquired abnormality of the left-sided atrioventricular valve in double inlet ventricle"
      },
      {
        "code" : "10.34.53",
        "display" : "Acquired abnormality of an atrioventricular valve in double inlet ventricle"
      },
      {
        "code" : "10.34.54",
        "display" : "Acquired common atrioventricular valvar abnormality in double inlet ventricle"
      },
      {
        "code" : "10.34.55",
        "display" : "Acquired common atrioventricular valvar abnormality in biventricular connections"
      },
      {
        "code" : "10.34.56",
        "display" : "Acquired stenosis of the common atrioventricular valve in biventricular connections"
      },
      {
        "code" : "10.34.57",
        "display" : "Acquired regurgitation of the common atrioventricular valve in biventricular connections"
      },
      {
        "code" : "10.34.58",
        "display" : "Acquired regurgitation of the left ventricular component of the common atrioventricular valve in biventricular connections"
      },
      {
        "code" : "10.34.59",
        "display" : "Acquired stenosis of the left ventricular component of the common atrioventricular valve in biventricular connections"
      },
      {
        "code" : "10.34.60",
        "display" : "Atrioventricular valvar abnormality in atrioventricular septal defect (AVSD): acquired"
      },
      {
        "code" : "10.35.01",
        "display" : "Pulmonary valvar abnormality: acquired"
      },
      {
        "code" : "10.35.02",
        "display" : "Pulmonary valvar stenosis: acquired"
      },
      {
        "code" : "10.35.03",
        "display" : "Pulmonary valvar stenosis: recurrent"
      },
      {
        "code" : "10.35.04",
        "display" : "Pulmonary regurgitation: acquired"
      },
      {
        "code" : "10.36.01",
        "display" : "Aortic valvar abnormality: acquired"
      },
      {
        "code" : "10.36.02",
        "display" : "Aortic valvar stenosis: acquired"
      },
      {
        "code" : "10.36.03",
        "display" : "Aortic valvar stenosis: recurrent"
      },
      {
        "code" : "10.36.04",
        "display" : "Aortic regurgitation: acquired"
      },
      {
        "code" : "10.36.06",
        "display" : "Aortic regurgitation: recurrent"
      },
      {
        "code" : "10.37.01",
        "display" : "Acquired truncal valvar abnormality"
      },
      {
        "code" : "10.37.02",
        "display" : "Acquired truncal valvar stenosis"
      },
      {
        "code" : "10.37.04",
        "display" : "Acquired truncal valvar regurgitation"
      },
      {
        "code" : "10.40.01",
        "display" : "Syncope"
      },
      {
        "code" : "10.40.10",
        "display" : "Reflex neurally-mediated neurocardiogenic (vasovagal) syncope"
      },
      {
        "code" : "10.40.30",
        "display" : "Hypotension"
      },
      {
        "code" : "10.40.37",
        "display" : "Postural orthostatic tachycardia syndrome (POTS)"
      },
      {
        "code" : "10.51.01",
        "display" : "Acquired common arterial trunk (truncus) abnormality"
      },
      {
        "code" : "10.77.40",
        "display" : "Acquired abnormality of aortic arch branch"
      },
      {
        "code" : "10.90.01",
        "display" : "Traumatic injury of heart"
      },
      {
        "code" : "10.90.24",
        "display" : "Traumatic injury of tracheobronchial tree or lungs"
      },
      {
        "code" : "10.90.41",
        "display" : "Trauma: blunt"
      },
      {
        "code" : "10.90.42",
        "display" : "Trauma: penetrating"
      },
      {
        "code" : "11.00.00",
        "display" : "Arrhythmia"
      },
      {
        "code" : "11.00.11",
        "display" : "Sudden Arrhythmic Death Syndrome (SADS)"
      },
      {
        "code" : "11.00.21",
        "display" : "Cardiac arrest"
      },
      {
        "code" : "11.01.00",
        "display" : "Supraventricular tachycardia (SVT)"
      },
      {
        "code" : "11.01.01",
        "display" : "Supraventricular rhythm disturbance"
      },
      {
        "code" : "11.02.03",
        "display" : "Sinus node dysfunction (including sick sinus)"
      },
      {
        "code" : "11.02.04",
        "display" : "Sinus bradycardia"
      },
      {
        "code" : "11.02.07",
        "display" : "Sinus tachycardia"
      },
      {
        "code" : "11.02.15",
        "display" : "Vagal sinus bradycardia: bradycardia(s) of prematurity"
      },
      {
        "code" : "11.03.05",
        "display" : "Paroxysmal atrial tachycardia"
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
        "code" : "11.03.12",
        "display" : "Ectopic atrial tachycardia"
      },
      {
        "code" : "11.03.13",
        "display" : "Macroreentrant atrial tachycardia (including atrial flutter)"
      },
      {
        "code" : "11.03.15",
        "display" : "Multifocal atrial tachycardia (chaotic)"
      },
      {
        "code" : "11.03.21",
        "display" : "Premature atrial depolarisation(s) (complexes-contractions)"
      },
      {
        "code" : "11.03.66",
        "display" : "Cavotricuspid isthmus dependent macro-reentrant atrial tachycardia (atrial flutter)"
      },
      {
        "code" : "11.03.67",
        "display" : "Non-cavotricuspid isthmus dependent macro-reentrant atrial tachycardia"
      },
      {
        "code" : "11.04.00",
        "display" : "Rhythm disturbance at level of atrioventricular junction"
      },
      {
        "code" : "11.04.07",
        "display" : "Atrioventricular junctional (nodal) tachycardia"
      },
      {
        "code" : "11.04.11",
        "display" : "Atrioventricular nodal reentry tachycardia (AVNRT)"
      },
      {
        "code" : "11.04.12",
        "display" : "Junctional ectopic tachycardia (His bundle): post-op"
      },
      {
        "code" : "11.04.42",
        "display" : "Junctional ectopic tachycardia (His bundle)"
      },
      {
        "code" : "11.05.00",
        "display" : "Ventricular rhythm disturbance"
      },
      {
        "code" : "11.05.06",
        "display" : "Ventricular tachycardia"
      },
      {
        "code" : "11.05.09",
        "display" : "Ventricular flutter"
      },
      {
        "code" : "11.05.10",
        "display" : "Ventricular fibrillation"
      },
      {
        "code" : "11.05.17",
        "display" : "Catecholaminergic polymorphic ventricular tachycardia"
      },
      {
        "code" : "11.05.21",
        "display" : "Premature ventricular depolarisation(s) (complexes-contractions)"
      },
      {
        "code" : "11.05.44",
        "display" : "Brugada syndrome"
      },
      {
        "code" : "11.05.50",
        "display" : "Non-sustained ventricular tachycardia"
      },
      {
        "code" : "11.05.56",
        "display" : "Focal ventricular tachycardia"
      },
      {
        "code" : "11.05.57",
        "display" : "Macroreentrant ventricular tachycardia"
      },
      {
        "code" : "11.05.84",
        "display" : "Idiopathic fascicular ventricular tachycardia"
      },
      {
        "code" : "11.06.00",
        "display" : "Conduction disturbance"
      },
      {
        "code" : "11.06.01",
        "display" : "Sinoatrial block"
      },
      {
        "code" : "11.06.02",
        "display" : "1st degree atrioventricular block"
      },
      {
        "code" : "11.06.03",
        "display" : "2nd degree atrioventricular block"
      },
      {
        "code" : "11.06.07",
        "display" : "Complete atrioventricular block (3rd degree)"
      },
      {
        "code" : "11.06.10",
        "display" : "Acquired complete atrioventricular block"
      },
      {
        "code" : "11.06.16",
        "display" : "Congenital complete heart block"
      },
      {
        "code" : "11.06.17",
        "display" : "Postprocedural complete atrioventricular block"
      },
      {
        "code" : "11.06.23",
        "display" : "Complete right bundle branch block"
      },
      {
        "code" : "11.06.24",
        "display" : "Complete left bundle branch block"
      },
      {
        "code" : "11.06.32",
        "display" : "Procedure related complete atrioventricular block requiring temporary pacing"
      },
      {
        "code" : "11.06.33",
        "display" : "Procedure related complete atrioventricular block requiring permanent pacemaker system"
      },
      {
        "code" : "11.06.35",
        "display" : "Preprocedural complete atrioventricular block"
      },
      {
        "code" : "11.07.01",
        "display" : "Atrioventricular reentry (reciprocating) tachycardia: manifest preexcitation in sinus rhythm (Wolff Parkinson White)"
      },
      {
        "code" : "11.07.06",
        "display" : "Accessory pathway: retrograde conduction only (concealed: no preexcitation sinus rhythm)"
      },
      {
        "code" : "11.07.11",
        "display" : "Manifest accessory pathway"
      },
      {
        "code" : "11.07.14",
        "display" : "Permanent junctional reciprocating tachycardia (PJRT)"
      },
      {
        "code" : "11.07.22",
        "display" : "Atrioventricular reentry (reciprocating) tachycardia: orthodromic (typically narrow QRS)"
      },
      {
        "code" : "11.07.23",
        "display" : "Atrioventricular reentry (reciprocating) tachycardia: antidromic (typically wide QRS)"
      },
      {
        "code" : "11.07.26",
        "display" : "Multiple accessory pathways"
      },
      {
        "code" : "11.07.28",
        "display" : "Atrioventricular reentry (reciprocating) tachycardia: orthodromic & antidromic"
      },
      {
        "code" : "11.07.29",
        "display" : "Atrioventricular reentry (reciprocating) tachycardia (accessory pathway mediated)"
      },
      {
        "code" : "11.11.00",
        "display" : "Pacemaker dysfunction-complication necessitating replacement"
      },
      {
        "code" : "11.11.01",
        "display" : "Pacemaker dysfunction-complication"
      },
      {
        "code" : "11.11.03",
        "display" : "Pacemaker-implantable cardioverter defibrillator (ICD) battery exhaustion - end of life (EOL)"
      },
      {
        "code" : "11.11.17",
        "display" : "Pacemaker-implantable cardioverter defibrillator (ICD) loss of capture"
      },
      {
        "code" : "11.11.21",
        "display" : "Pacemaker (atrioventricular dyssynchrony) syndrome"
      },
      {
        "code" : "11.11.40",
        "display" : "Pacemaker-implantable cardioverter defibrillator (ICD) lead dysfunction-complication"
      },
      {
        "code" : "11.11.59",
        "display" : "Pacemaker-implantable cardioverter defibrillator (ICD) generator site (pocket) local complication"
      },
      {
        "code" : "11.11.60",
        "display" : "Implantable cardioverter defibrillator (ICD) dysfunction-complication"
      },
      {
        "code" : "11.11.80",
        "display" : "Insertable electrocardiographic (ECG) loop recorder complication"
      },
      {
        "code" : "11.12.00",
        "display" : "Ion channelopathy"
      },
      {
        "code" : "11.12.01",
        "display" : "Prolonged QT interval"
      },
      {
        "code" : "11.12.29",
        "display" : "Long QT syndrome"
      },
      {
        "code" : "11.12.60",
        "display" : "Indication for elective removal of pacemaker system"
      },
      {
        "code" : "11.12.68",
        "display" : "Incomplete removal of pacemaker-implantable cardioverter defibrillator (ICD) lead"
      },
      {
        "code" : "11.20.00",
        "display" : "Electrocardiographic (ECG) abnormality"
      },
      {
        "code" : "11.23.00",
        "display" : "Morphological variant of conduction system"
      },
      {
        "code" : "12.00.00",
        "display" : "Totally anomalous pulmonary venous connection repair"
      },
      {
        "code" : "12.00.02",
        "display" : "Partially anomalous pulmonary venous connection repair"
      },
      {
        "code" : "12.00.03",
        "display" : "Pulmonary venous stenosis repair"
      },
      {
        "code" : "12.00.17",
        "display" : "Scimitar syndrome (partially anomalous pulmonary venous connection) repair"
      },
      {
        "code" : "12.00.20",
        "display" : "Pulmonary vein procedure"
      },
      {
        "code" : "12.00.21",
        "display" : "Balloon dilation of pulmonary vein"
      },
      {
        "code" : "12.00.22",
        "display" : "Stent placement in pulmonary vein"
      },
      {
        "code" : "12.00.23",
        "display" : "Balloon dilation of pulmonary vein using cutting balloon"
      },
      {
        "code" : "12.00.24",
        "display" : "Balloon dilation of pulmonary vein or pathway"
      },
      {
        "code" : "12.00.25",
        "display" : "Stent placement in pulmonary vein or pathway"
      },
      {
        "code" : "12.00.29",
        "display" : "Systemic venous pathway procedure (post Senning-Mustard)"
      },
      {
        "code" : "12.00.30",
        "display" : "Systemic vein procedure"
      },
      {
        "code" : "12.00.36",
        "display" : "Stent placement in superior caval vein (SVC)"
      },
      {
        "code" : "12.00.39",
        "display" : "Superior caval vein (SVC) procedure"
      },
      {
        "code" : "12.00.42",
        "display" : "Inferior caval vein (IVC) procedure"
      },
      {
        "code" : "12.00.43",
        "display" : "Balloon dilation of systemic vein or pathway"
      },
      {
        "code" : "12.00.44",
        "display" : "Stent placement in systemic vein or pathway"
      },
      {
        "code" : "12.00.50",
        "display" : "Coronary sinus procedure"
      },
      {
        "code" : "12.00.55",
        "display" : "Coronary sinus interatrial communication (ASD) repair"
      },
      {
        "code" : "12.00.78",
        "display" : "Partially anomalous pulmonary venous connection repair: baffle redirection to left atrium & systemic vein translocated to right atrial appendage (Warden)"
      },
      {
        "code" : "12.00.81",
        "display" : "Anomalous systemic venous connection repair"
      },
      {
        "code" : "12.00.83",
        "display" : "Systemic venous stenosis repair"
      },
      {
        "code" : "12.00.88",
        "display" : "Redilation of stent in systemic vein"
      },
      {
        "code" : "12.00.89",
        "display" : "Redilation of stent in pulmonary vein"
      },
      {
        "code" : "12.00.90",
        "display" : "Cardiopulmonary bypass used during procedure"
      },
      {
        "code" : "12.00.91",
        "display" : "Cardiopulmonary bypass not used during procedure"
      },
      {
        "code" : "12.00.92",
        "display" : "Cardiopulmonary bypass for noncardiac lesion"
      },
      {
        "code" : "12.01.00",
        "display" : "Interatrial communication closure"
      },
      {
        "code" : "12.01.01",
        "display" : "Atrial septal defect (ASD) secundum closure"
      },
      {
        "code" : "12.01.02",
        "display" : "Atrial septal defect (ASD) secundum closure with direct suture"
      },
      {
        "code" : "12.01.03",
        "display" : "Atrial septal defect (ASD) secundum closure with patch"
      },
      {
        "code" : "12.01.06",
        "display" : "Atrial septal defect (ASD) secundum closure with transluminal device"
      },
      {
        "code" : "12.01.07",
        "display" : "Patent foramen ovale (PFO) closure with transluminal device"
      },
      {
        "code" : "12.01.08",
        "display" : "Interatrial communication closure: partial"
      },
      {
        "code" : "12.01.10",
        "display" : "Sinus venosus defect (ASD) closure"
      },
      {
        "code" : "12.01.22",
        "display" : "Atrial septation procedure"
      },
      {
        "code" : "12.01.30",
        "display" : "Left atrial procedure"
      },
      {
        "code" : "12.01.31",
        "display" : "Cor triatriatum (divided left atrium) repair"
      },
      {
        "code" : "12.01.32",
        "display" : "Supra-mitral valvar left atrial ring excision"
      },
      {
        "code" : "12.01.41",
        "display" : "Balloon atrial septostomy by pull back (Rashkind)"
      },
      {
        "code" : "12.01.42",
        "display" : "Atrial septectomy: closed (Blalock Hanlon)"
      },
      {
        "code" : "12.01.43",
        "display" : "Atrial septectomy"
      },
      {
        "code" : "12.01.44",
        "display" : "Blade atrial septostomy"
      },
      {
        "code" : "12.01.47",
        "display" : "Transluminal fenestration of atrial septum-tunnel"
      },
      {
        "code" : "12.01.53",
        "display" : "Patent foramen ovale (PFO) direct closure"
      },
      {
        "code" : "12.01.57",
        "display" : "Atrial baffle procedure"
      },
      {
        "code" : "12.01.60",
        "display" : "Right atrial procedure"
      },
      {
        "code" : "12.01.74",
        "display" : "Left atrial appendage procedure"
      },
      {
        "code" : "12.01.80",
        "display" : "Interatrial communication left open"
      },
      {
        "code" : "12.01.88",
        "display" : "Sinus venosus defect closure using transluminal covered stent"
      },
      {
        "code" : "12.01.90",
        "display" : "Interatrial communication creation-enlargement"
      },
      {
        "code" : "12.01.95",
        "display" : "Balloon atrial septostomy"
      },
      {
        "code" : "12.01.98",
        "display" : "Interatrial communication closure with transluminal device"
      },
      {
        "code" : "12.02.00",
        "display" : "Tricuspid valvar procedure"
      },
      {
        "code" : "12.02.02",
        "display" : "Tricuspid leaflet (valvoplasty) procedure"
      },
      {
        "code" : "12.02.04",
        "display" : "Tricuspid valvar annuloplasty"
      },
      {
        "code" : "12.02.09",
        "display" : "Ebstein malformation of tricuspid valve repair"
      },
      {
        "code" : "12.02.11",
        "display" : "Tricuspid valvar replacement"
      },
      {
        "code" : "12.02.12",
        "display" : "Balloon dilation of prosthetic tricuspid valve"
      },
      {
        "code" : "12.02.22",
        "display" : "Tricuspid valvectomy"
      },
      {
        "code" : "12.02.70",
        "display" : "Tricuspid valvar closure"
      },
      {
        "code" : "12.02.77",
        "display" : "Ebstein malformation of tricuspid valve repair: tricuspid valve closure & shunt (Starnes)"
      },
      {
        "code" : "12.02.83",
        "display" : "Tricuspid valve repair converted to tricuspid valvar replacement"
      },
      {
        "code" : "12.02.86",
        "display" : "Ebstein malformation or dysplasia of tricuspid valve repair: cone procedure"
      },
      {
        "code" : "12.02.98",
        "display" : "Transluminal tricuspid valvar replacement"
      },
      {
        "code" : "12.02.99",
        "display" : "Transluminal tricuspid valve in prosthetic valve replacement"
      },
      {
        "code" : "12.03.00",
        "display" : "Mitral valvar procedure"
      },
      {
        "code" : "12.03.01",
        "display" : "Mitral valvotomy"
      },
      {
        "code" : "12.03.03",
        "display" : "Mitral leaflet (valvoplasty) procedure"
      },
      {
        "code" : "12.03.04",
        "display" : "Mitral valvar annuloplasty"
      },
      {
        "code" : "12.03.10",
        "display" : "Balloon dilation of mitral valve"
      },
      {
        "code" : "12.03.11",
        "display" : "Mitral valvar replacement"
      },
      {
        "code" : "12.03.12",
        "display" : "Balloon dilation of prosthetic mitral valve"
      },
      {
        "code" : "12.03.19",
        "display" : "Mitral subvalvar apparatus procedure"
      },
      {
        "code" : "12.03.84",
        "display" : "Mitral valve repair converted to mitral valvar replacement"
      },
      {
        "code" : "12.03.97",
        "display" : "Transluminal mitral valve repair"
      },
      {
        "code" : "12.03.98",
        "display" : "Transluminal mitral valvar replacement"
      },
      {
        "code" : "12.04.00",
        "display" : "Atrioventricular septal defect procedure"
      },
      {
        "code" : "12.04.01",
        "display" : "Atrioventricular septal defect (AVSD): partial (primum ASD) repair"
      },
      {
        "code" : "12.04.09",
        "display" : "Atrioventricular septal defect (AVSD): partial with isolated ventricular component (VSD) repair"
      },
      {
        "code" : "12.04.18",
        "display" : "Common atrioventricular valve replacement"
      },
      {
        "code" : "12.04.20",
        "display" : "Atrioventricular septal defect (AVSD): right atrioventricular valvar procedure"
      },
      {
        "code" : "12.04.33",
        "display" : "Common atrioventricular valve repair converted to atrioventricular valvar replacement"
      },
      {
        "code" : "12.04.40",
        "display" : "Atrioventricular septal defect (AVSD): left atrioventricular valvar procedure"
      },
      {
        "code" : "12.04.45",
        "display" : "Atrioventricular septal defect (AVSD): left atrioventricular valvar replacement"
      },
      {
        "code" : "12.04.89",
        "display" : "Mitral valve replacement with stented bovine jugular vein conduit"
      },
      {
        "code" : "12.04.90",
        "display" : "Transluminal mitral valve in prosthetic valve replacement"
      },
      {
        "code" : "12.04.91",
        "display" : "Transapical transcatheter mitral valve in prosthetic valve replacement"
      },
      {
        "code" : "12.05.01",
        "display" : "Atrioventricular septal defect (AVSD): complete (common valve orifice) repair"
      },
      {
        "code" : "12.05.10",
        "display" : "Atrioventricular septal defect (AVSD): 'intermediate' repair"
      },
      {
        "code" : "12.05.11",
        "display" : "Atrioventricular septal defect (AVSD) & Tetralogy of Fallot repair"
      },
      {
        "code" : "12.05.71",
        "display" : "Atrioventricular septal defect (AVSD) repair with direct ventricular component closure & patch to atrial component (Nunn/Wilson)"
      },
      {
        "code" : "12.06.00",
        "display" : "Right ventricular outflow tract procedure"
      },
      {
        "code" : "12.06.05",
        "display" : "Balloon dilation of right ventricular outflow tract"
      },
      {
        "code" : "12.06.12",
        "display" : "Right ventricle to pulmonary artery valveless conduit construction"
      },
      {
        "code" : "12.06.18",
        "display" : "Stent placement in right ventricular outflow tract"
      },
      {
        "code" : "12.06.19",
        "display" : "1.5 ventricle repair: superior cavopulmonary (Glenn) anastomosis + right ventricular outflow tract reconstruction"
      },
      {
        "code" : "12.06.25",
        "display" : "Transluminal right ventricular biopsy"
      },
      {
        "code" : "12.06.26",
        "display" : "Right ventricular procedure"
      },
      {
        "code" : "12.06.35",
        "display" : "Double chambered right ventricle repair"
      },
      {
        "code" : "12.06.38",
        "display" : "Right ventricular aneurysm repair"
      },
      {
        "code" : "12.06.41",
        "display" : "Right ventricular outflow tract obstruction relief"
      },
      {
        "code" : "12.06.43",
        "display" : "Right ventricle to pulmonary artery valveless conduit construction (Japanese modification: 'Sano') as part of Norwood procedure"
      },
      {
        "code" : "12.06.47",
        "display" : "Right ventricular outflow tract reconstruction: transannular patch & constructed monocuspid valve"
      },
      {
        "code" : "12.06.65",
        "display" : "Intraoperative removal of right ventricular outflow tract stent"
      },
      {
        "code" : "12.06.95",
        "display" : "Stent redilation in native right ventricular outflow tract"
      },
      {
        "code" : "12.07.00",
        "display" : "Left ventricular outflow tract procedure"
      },
      {
        "code" : "12.07.01",
        "display" : "Subaortic fibromuscular shelf resection"
      },
      {
        "code" : "12.07.07",
        "display" : "Balloon dilation of left ventricular outflow tract"
      },
      {
        "code" : "12.07.11",
        "display" : "Left ventricular outflow tract myectomy-myotomy"
      },
      {
        "code" : "12.07.12",
        "display" : "Left ventricular outflow tract obstruction relief: complex (Konno etc)"
      },
      {
        "code" : "12.07.13",
        "display" : "Left ventricular outflow tract obstruction relief"
      },
      {
        "code" : "12.07.19",
        "display" : "Left ventricular outflow tract obstruction relief by transcatheter coronary chemical ablation"
      },
      {
        "code" : "12.07.26",
        "display" : "Left ventricular procedure"
      },
      {
        "code" : "12.07.37",
        "display" : "Left ventricular aneurysm repair"
      },
      {
        "code" : "12.07.38",
        "display" : "Partial left ventriculectomy-volume reduction (Batista)"
      },
      {
        "code" : "12.08.01",
        "display" : "Ventricular septal defect (VSD) closure"
      },
      {
        "code" : "12.08.02",
        "display" : "Ventricular septal defect (VSD) closure by direct suture"
      },
      {
        "code" : "12.08.03",
        "display" : "Ventricular septal defect (VSD) closure using patch"
      },
      {
        "code" : "12.08.06",
        "display" : "Ventricular septal defect (VSD) enlargement"
      },
      {
        "code" : "12.08.07",
        "display" : "Ventricular septal defect (VSD) closure with transluminal device"
      },
      {
        "code" : "12.08.16",
        "display" : "Closure of multiple ventricular septal defect (VSD)s"
      },
      {
        "code" : "12.08.19",
        "display" : "Open fenestration of ventricular septal defect (VSD) patch"
      },
      {
        "code" : "12.08.20",
        "display" : "Transluminal fenestration of ventricular septal defect (VSD) patch"
      },
      {
        "code" : "12.08.21",
        "display" : "Subpulmonary obstruction relief"
      },
      {
        "code" : "12.08.22",
        "display" : "Subaortic obstruction relief"
      },
      {
        "code" : "12.08.28",
        "display" : "Intraoperative ventricular septal defect (VSD) closure with transluminal device (hybrid approach)"
      },
      {
        "code" : "12.08.35",
        "display" : "Ventricular septal defect (VSD) enlargement/ creation"
      },
      {
        "code" : "12.08.38",
        "display" : "Removal of ventricular septal defect (VSD) implanted device"
      },
      {
        "code" : "12.08.65",
        "display" : "Transluminal interventricular communication creation"
      },
      {
        "code" : "12.09.01",
        "display" : "Ventricular septation procedure"
      },
      {
        "code" : "12.09.03",
        "display" : "Damus-Kaye-Stansel type procedure: pulmonary trunk to aorta end/side anastomosis"
      },
      {
        "code" : "12.10.00",
        "display" : "Norwood type procedure"
      },
      {
        "code" : "12.10.04",
        "display" : "Hybrid approach 'Stage 1': application of bilateral pulmonary arterial bands & transcatheter placement of stent in arterial duct"
      },
      {
        "code" : "12.10.05",
        "display" : "Hypoplastic left heart biventricular repair"
      },
      {
        "code" : "12.10.14",
        "display" : "Stent placement in arterial duct (PDA)"
      },
      {
        "code" : "12.10.26",
        "display" : "Stent redilation in arterial duct (PDA)"
      },
      {
        "code" : "12.11.00",
        "display" : "Common arterial trunk (truncus) repair"
      },
      {
        "code" : "12.11.34",
        "display" : "Truncal valve cusp(s) repair (valvoplasty)"
      },
      {
        "code" : "12.11.41",
        "display" : "Truncal valve replacement"
      },
      {
        "code" : "12.11.43",
        "display" : "Truncal valve repair converted to truncal valvar replacement"
      },
      {
        "code" : "12.12.01",
        "display" : "Aortopulmonary window closure"
      },
      {
        "code" : "12.12.08",
        "display" : "Aortopulmonary window closure with transcatheter device"
      },
      {
        "code" : "12.13.00",
        "display" : "Pulmonary valvar procedure"
      },
      {
        "code" : "12.13.02",
        "display" : "Pulmonary valvotomy: open"
      },
      {
        "code" : "12.13.05",
        "display" : "Balloon dilation of pulmonary valve"
      },
      {
        "code" : "12.13.06",
        "display" : "Balloon dilation of prosthetic pulmonary valve"
      },
      {
        "code" : "12.13.09",
        "display" : "Pulmonary valvar transluminal perforation and dilation"
      },
      {
        "code" : "12.13.12",
        "display" : "Pulmonary valvectomy"
      },
      {
        "code" : "12.13.15",
        "display" : "Pulmonary valvar closure-oversewing"
      },
      {
        "code" : "12.13.21",
        "display" : "Pulmonary valvar replacement (not conduit)"
      },
      {
        "code" : "12.13.22",
        "display" : "Pulmonary valvar replacement using homograft"
      },
      {
        "code" : "12.13.51",
        "display" : "Transluminal pulmonary valvar insertion with stent mounted valve"
      },
      {
        "code" : "12.13.52",
        "display" : "Transluminal pulmonary valvar insertion with stent mounted valve: reimplant (valve in valve)"
      },
      {
        "code" : "12.13.55",
        "display" : "Pulmonary valve repair converted to pulmonary valvar replacement"
      },
      {
        "code" : "12.13.81",
        "display" : "Transluminal aortic valvar insertion (TAVI) with stent mounted valve"
      },
      {
        "code" : "12.13.82",
        "display" : "Transluminal aortic valvar insertion with stent mounted valve: reimplant (valve in valve)"
      },
      {
        "code" : "12.13.84",
        "display" : "Transapical aortic valve implantation (hybrid approach)"
      },
      {
        "code" : "12.13.85",
        "display" : "Transluminal pulmonary valvar insertion with stent mounted valve including prestenting"
      },
      {
        "code" : "12.13.86",
        "display" : "Transluminal pulmonary valvar prestenting procedure in preparation for valve replacement"
      },
      {
        "code" : "12.13.87",
        "display" : "Transluminal pulmonary valvar insertion with stent mounted valve with intentional rupture of previous conduit"
      },
      {
        "code" : "12.14.01",
        "display" : "Pulmonary trunk arterioplasty"
      },
      {
        "code" : "12.14.02",
        "display" : "Pulmonary trunk band (PA band)"
      },
      {
        "code" : "12.14.03",
        "display" : "Pulmonary trunk band removal (de-band)"
      },
      {
        "code" : "12.14.05",
        "display" : "Balloon dilation of pulmonary trunk"
      },
      {
        "code" : "12.14.08",
        "display" : "Open adjustment of pulmonary trunk band"
      },
      {
        "code" : "12.14.10",
        "display" : "Transection and oversewing of pulmonary trunk"
      },
      {
        "code" : "12.14.19",
        "display" : "Application of right & left pulmonary arterial bands"
      },
      {
        "code" : "12.14.20",
        "display" : "Pulmonary arterioplasty/ reconstruction"
      },
      {
        "code" : "12.14.21",
        "display" : "Pulmonary arterioplasty/ reconstruction: central (proximal to hilar bifurcation)"
      },
      {
        "code" : "12.14.22",
        "display" : "Pulmonary arterioplasty/ reconstruction: peripheral (at-beyond hilar bifurcation)"
      },
      {
        "code" : "12.14.30",
        "display" : "Pulmonary artery origin from ascending aorta (hemitruncus) repair"
      },
      {
        "code" : "12.14.31",
        "display" : "Pulmonary artery ligation"
      },
      {
        "code" : "12.14.38",
        "display" : "Intraoperative removal or partial removal of pulmonary arterial stent"
      },
      {
        "code" : "12.15.03",
        "display" : "Balloon dilation of right pulmonary artery"
      },
      {
        "code" : "12.15.04",
        "display" : "Balloon dilation of left pulmonary artery"
      },
      {
        "code" : "12.15.05",
        "display" : "Application of right pulmonary artery band"
      },
      {
        "code" : "12.15.06",
        "display" : "Application of left pulmonary artery band"
      },
      {
        "code" : "12.15.07",
        "display" : "Removal of band from right pulmonary artery"
      },
      {
        "code" : "12.15.08",
        "display" : "Removal of band from left pulmonary artery"
      },
      {
        "code" : "12.15.11",
        "display" : "Procedure involving pulmonary artery"
      },
      {
        "code" : "12.15.13",
        "display" : "Stent placement in right pulmonary artery"
      },
      {
        "code" : "12.15.14",
        "display" : "Stent placement in left pulmonary artery"
      },
      {
        "code" : "12.15.16",
        "display" : "Removal of bands from right & left pulmonary arteries"
      },
      {
        "code" : "12.15.24",
        "display" : "Pulmonary artery aneurysm repair"
      },
      {
        "code" : "12.15.25",
        "display" : "Pulmonary trunk flow restriction using transcatheter implanted device"
      },
      {
        "code" : "12.15.42",
        "display" : "Right + left pulmonary artery flow restriction using transcatheter implanted devices"
      },
      {
        "code" : "12.15.48",
        "display" : "Pulmonary thromboembolectomy"
      },
      {
        "code" : "12.15.49",
        "display" : "Transluminal embolectomy from pulmonary tree"
      },
      {
        "code" : "12.15.50",
        "display" : "Stent placement in pulmonary tree"
      },
      {
        "code" : "12.15.53",
        "display" : "Balloon dilation of pulmonary tree with cutting balloon"
      },
      {
        "code" : "12.15.56",
        "display" : "Stent placement in right pulmonary artery proximal to hilar bifurcation"
      },
      {
        "code" : "12.15.57",
        "display" : "Stent placement in right pulmonary artery at or distal to hilar bifurcation (lobar & segmental)"
      },
      {
        "code" : "12.15.58",
        "display" : "Stent placement in left pulmonary artery proximal to hilar bifurcation"
      },
      {
        "code" : "12.15.59",
        "display" : "Stent placement in left pulmonary artery at or distal to hilar bifurcation (lobar & segmental)"
      },
      {
        "code" : "12.15.64",
        "display" : "Stent redilation in right pulmonary artery proximal to hilar bifurcation"
      },
      {
        "code" : "12.15.65",
        "display" : "Stent redilation in right pulmonary artery at or distal to hilar bifurcation (lobar & segmental)"
      },
      {
        "code" : "12.15.66",
        "display" : "Stent redilation in left pulmonary artery proximal to hilar bifurcation"
      },
      {
        "code" : "12.15.67",
        "display" : "Stent redilation in left pulmonary artery at or distal to hilar bifurcation (lobar & segmental)"
      },
      {
        "code" : "12.15.70",
        "display" : "Stent placement between left pulmonary artery and descending aorta (reverse Potts)"
      },
      {
        "code" : "12.15.80",
        "display" : "Pulmonary thromboembolectomy for acute embolus"
      },
      {
        "code" : "12.15.81",
        "display" : "Pulmonary thromboembolectomy for chronic (longstanding) embolus"
      },
      {
        "code" : "12.16.00",
        "display" : "Aortic valvar procedure"
      },
      {
        "code" : "12.16.02",
        "display" : "Aortic valvotomy: open"
      },
      {
        "code" : "12.16.04",
        "display" : "Aortic valvotomy: closed"
      },
      {
        "code" : "12.16.05",
        "display" : "Balloon dilation of aortic valve"
      },
      {
        "code" : "12.16.09",
        "display" : "Balloon dilation of prosthetic aortic valve"
      },
      {
        "code" : "12.16.11",
        "display" : "Aortic cusp(s) repair (valvoplasty)"
      },
      {
        "code" : "12.16.14",
        "display" : "'Annuloplasty' of aortic valve"
      },
      {
        "code" : "12.16.21",
        "display" : "Aortic valvar replacement"
      },
      {
        "code" : "12.16.22",
        "display" : "Aortic valvar replacement using homograft"
      },
      {
        "code" : "12.16.25",
        "display" : "Aortic valvar transluminal perforation and dilation"
      },
      {
        "code" : "12.16.28",
        "display" : "Aortic valvar replacement using heterograft bioprosthesis"
      },
      {
        "code" : "12.16.29",
        "display" : "Aortic valvar replacement using mechanical prosthesis"
      },
      {
        "code" : "12.16.30",
        "display" : "Ross procedure: aortic valve or root replacement with pulmonary autograft & pulmonary valvar replacement"
      },
      {
        "code" : "12.16.33",
        "display" : "Aortic root replacement + coronary artery reimplantation (Bentall)"
      },
      {
        "code" : "12.16.35",
        "display" : "Ascending aorta replacement & aortic valvar resuspension"
      },
      {
        "code" : "12.16.40",
        "display" : "Supravalvar aortic stenosis repair"
      },
      {
        "code" : "12.16.42",
        "display" : "Aortic aneurysm repair"
      },
      {
        "code" : "12.16.50",
        "display" : "Aortic root replacement (not Ross)"
      },
      {
        "code" : "12.16.59",
        "display" : "Aortic dissection repair"
      },
      {
        "code" : "12.16.61",
        "display" : "Aortic valve closure-oversewing"
      },
      {
        "code" : "12.16.62",
        "display" : "Ross-Konno procedure"
      },
      {
        "code" : "12.16.63",
        "display" : "Aortic root replacement using homograft"
      },
      {
        "code" : "12.16.64",
        "display" : "Aortic root replacement using mechanical prosthesis"
      },
      {
        "code" : "12.16.65",
        "display" : "Ascending aorta replacement"
      },
      {
        "code" : "12.16.66",
        "display" : "Aortic arch aneurysm repair"
      },
      {
        "code" : "12.16.67",
        "display" : "Descending thoracic aorta aneurysm repair"
      },
      {
        "code" : "12.16.68",
        "display" : "Abdominal aorta aneurysm repair"
      },
      {
        "code" : "12.16.80",
        "display" : "Aortic sinus of Valsalva procedure"
      },
      {
        "code" : "12.16.81",
        "display" : "Aortic sinus of Valsalva distal fistula closure"
      },
      {
        "code" : "12.16.85",
        "display" : "Aortic sinus of Valsalva aneurysm repair"
      },
      {
        "code" : "12.16.90",
        "display" : "Aorto-left ventricular tunnel closure"
      },
      {
        "code" : "12.16.97",
        "display" : "Aortic valve repair converted to aortic valvar replacement"
      },
      {
        "code" : "12.17.11",
        "display" : "Vascular ring procedure"
      },
      {
        "code" : "12.17.31",
        "display" : "Aortopexy"
      },
      {
        "code" : "12.17.32",
        "display" : "Pulmonary arterial sling repair"
      },
      {
        "code" : "12.17.42",
        "display" : "Resection of diverticulum of Kommerell & reimplantation of subclavian artery"
      },
      {
        "code" : "12.17.57",
        "display" : "Procedure involving ascending aorta"
      },
      {
        "code" : "12.17.77",
        "display" : "Aortic valve replacement using autologous pericardium constructed valve leaflets (Ozaki)"
      },
      {
        "code" : "12.17.78",
        "display" : "Personalised external aortic root support (PEARS) procedure"
      },
      {
        "code" : "12.17.80",
        "display" : "Aortic root abscess repair"
      },
      {
        "code" : "12.17.90",
        "display" : "Aortic root replacement using bioprosthesis"
      },
      {
        "code" : "12.17.91",
        "display" : "Aortic root replacement: valve sparing technique"
      },
      {
        "code" : "12.17.99",
        "display" : "Aortic root replacement of implanted pulmonary autograft & pulmonary valve re-replacement"
      },
      {
        "code" : "12.18.00",
        "display" : "Coarctation-hypoplasia of aorta repair"
      },
      {
        "code" : "12.18.01",
        "display" : "Aortic coarctation-hypoplasia repair by resection & end to end anastomosis"
      },
      {
        "code" : "12.18.02",
        "display" : "Aortic coarctation-hypoplasia repair by patch aortoplasty"
      },
      {
        "code" : "12.18.03",
        "display" : "Aortic coarctation-hypoplasia repair by subclavian flap aortoplasty"
      },
      {
        "code" : "12.18.04",
        "display" : "Balloon dilation of native aortic coarctation-hypoplasia"
      },
      {
        "code" : "12.18.08",
        "display" : "Balloon dilation of aortic recoarctation"
      },
      {
        "code" : "12.18.10",
        "display" : "Aortic coarctation-hypoplasia repair by resection & extended end to end anastomosis"
      },
      {
        "code" : "12.18.15",
        "display" : "Aortic coarctation-hypoplasia repair by resection & insertion of interposition tube graft"
      },
      {
        "code" : "12.18.17",
        "display" : "Stent placement at site of aortic coarctation"
      },
      {
        "code" : "12.18.22",
        "display" : "Stent placement at site of aortic recoarctation"
      },
      {
        "code" : "12.18.27",
        "display" : "Aortic coarctation transluminal obstruction relief"
      },
      {
        "code" : "12.18.30",
        "display" : "Aortic arch repair"
      },
      {
        "code" : "12.18.48",
        "display" : "Stent placement at site of native aortic coarctation-hypoplasia"
      },
      {
        "code" : "12.18.54",
        "display" : "Stent redilation in thoracic aorta"
      },
      {
        "code" : "12.18.70",
        "display" : "Thoracic aorta aneurysm transcatheter stent implantation"
      },
      {
        "code" : "12.20.20",
        "display" : "Hypoplastic left heart syndrome hybrid approach (transcatheter & surgery): stage 1"
      },
      {
        "code" : "12.20.21",
        "display" : "Hypoplastic left heart syndrome hybrid strategy (transcatheter & surgery)"
      },
      {
        "code" : "12.20.22",
        "display" : "Hypoplastic left heart syndrome hybrid approach (transcatheter & surgery) 'stage 2': aortopulmonary amalgamation + superior cavopulmonary anastomosis(es) + debanding of pulmonary arteries"
      },
      {
        "code" : "12.20.23",
        "display" : "Hypoplastic left heart syndrome hybrid approach (transcatheter & surgery) 'stage 2': aortopulmonary amalgamation + superior cavopulmonary anastomosis(es) + debanding of pulmonary arteries + arch repair"
      },
      {
        "code" : "12.21.00",
        "display" : "Interrupted aortic arch repair"
      },
      {
        "code" : "12.22.00",
        "display" : "Systemic arterial procedure"
      },
      {
        "code" : "12.23.00",
        "display" : "Anomalous coronary artery (eg ALCAPA) repair"
      },
      {
        "code" : "12.23.07",
        "display" : "Coronary arterial fistula procedure"
      },
      {
        "code" : "12.23.08",
        "display" : "Coronary arterial bypass graft (CABG) procedure"
      },
      {
        "code" : "12.23.09",
        "display" : "Coronary arterial procedure"
      },
      {
        "code" : "12.23.11",
        "display" : "Ligation of coronary arterial fistula"
      },
      {
        "code" : "12.23.13",
        "display" : "Coronary arterial fistula transluminal occlusion"
      },
      {
        "code" : "12.23.23",
        "display" : "Myotomy of coronary arterial muscle bridge (unroofing-debridging)"
      },
      {
        "code" : "12.23.30",
        "display" : "Transluminal intracoronary injection of thrombolytic agent"
      },
      {
        "code" : "12.23.31",
        "display" : "Percutaneous transluminal balloon coronary angioplasty (PTCA)"
      },
      {
        "code" : "12.23.38",
        "display" : "Transluminal coronary stent implantation"
      },
      {
        "code" : "12.23.41",
        "display" : "Transluminal intracoronary echocardiography (IVUS)"
      },
      {
        "code" : "12.23.42",
        "display" : "Transluminal chemical occlusion of coronary artery"
      },
      {
        "code" : "12.23.45",
        "display" : "Stent redilation in coronary artery"
      },
      {
        "code" : "12.23.80",
        "display" : "Anomalous aortic origin of coronary artery repair"
      },
      {
        "code" : "12.24.00",
        "display" : "Arterial duct-ligament procedure"
      },
      {
        "code" : "12.24.04",
        "display" : "Arterial duct (PDA) closure with transluminal device"
      },
      {
        "code" : "12.24.10",
        "display" : "Arterial duct (PDA) closure"
      },
      {
        "code" : "12.24.20",
        "display" : "Patent arterial duct (PDA) closure: surgical"
      },
      {
        "code" : "12.24.21",
        "display" : "Arterial duct (PDA) closure with transluminal coil"
      },
      {
        "code" : "12.24.22",
        "display" : "Arterial duct (PDA) closure with transluminal plug device"
      },
      {
        "code" : "12.24.27",
        "display" : "Intraoperative complete or partial removal of arterial duct stent"
      },
      {
        "code" : "12.25.00",
        "display" : "Systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) unifocalisation procedure"
      },
      {
        "code" : "12.25.02",
        "display" : "Arteriovenous fistula occlusion"
      },
      {
        "code" : "12.25.07",
        "display" : "Pulmonary arteriovenous fistula closure"
      },
      {
        "code" : "12.25.18",
        "display" : "Systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) occlusion"
      },
      {
        "code" : "12.25.19",
        "display" : "Transluminal procedure to systemic-to-pulmonary collateral artery(ies) (MAPCA(s))"
      },
      {
        "code" : "12.25.62",
        "display" : "Stent placement in systemic-to-pulmonary collateral artery(ies) (MAPCA(s))"
      },
      {
        "code" : "12.25.65",
        "display" : "Transluminal occlusion of systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) with coil-device"
      },
      {
        "code" : "12.25.67",
        "display" : "Unilateral Systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) unifocalisation procedure"
      },
      {
        "code" : "12.25.72",
        "display" : "Balloon dilation of systemic-to-pulmonary collateral artery(ies) (MAPCA(s))"
      },
      {
        "code" : "12.25.87",
        "display" : "Bilateral systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) unifocalisation procedure: complete with all usable collaterals incorporated"
      },
      {
        "code" : "12.25.88",
        "display" : "Bilateral systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) unifocalisation procedure: incomplete with not all usable collaterals incorporated"
      },
      {
        "code" : "12.26.01",
        "display" : "Tetralogy of Fallot repair"
      },
      {
        "code" : "12.26.13",
        "display" : "Tetralogy of Fallot repair with transannular patch"
      },
      {
        "code" : "12.26.20",
        "display" : "Tetralogy of Fallot repair without transannular patch"
      },
      {
        "code" : "12.26.21",
        "display" : "Absent pulmonary valve syndrome (Fallot type) repair"
      },
      {
        "code" : "12.27.01",
        "display" : "Double outlet right ventricle with subaortic or doubly committed ventricular septal defect (VSD) & pulmonary stenosis (Fallot-type) repair"
      },
      {
        "code" : "12.27.02",
        "display" : "Double outlet right ventricle repair with intraventricular tunnel"
      },
      {
        "code" : "12.27.45",
        "display" : "REV procedure: intraventricular left ventricle to aorta tunnel with infundibular septum resection & direct right ventricle to pulmonary trunk anastomosis"
      },
      {
        "code" : "12.27.46",
        "display" : "Congenitally corrected transposition of great arteries repair"
      },
      {
        "code" : "12.27.50",
        "display" : "Double outlet left ventricle repair"
      },
      {
        "code" : "12.27.78",
        "display" : "Aortic root translocation to over left ventricle (including Nikaidoh)"
      },
      {
        "code" : "12.28.01",
        "display" : "Pulmonary atresia & ventricular septal defect (VSD) (including Fallot-type) repair"
      },
      {
        "code" : "12.28.11",
        "display" : "Pulmonary atresia, ventricular septal defect (VSD) & systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) repair"
      },
      {
        "code" : "12.28.21",
        "display" : "Pulmonary atresia, ventricular septal defect (VSD) & systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) repair (status post complete unifocalisation with all usable collaterals incorporated)"
      },
      {
        "code" : "12.28.22",
        "display" : "Pulmonary atresia, ventricular septal defect (VSD) & systemic-to-pulmonary collateral artery(ies) (MAPCA(s)) repair: status post incomplete unifocalisation with not all usable collaterals incorporated"
      },
      {
        "code" : "12.29.01",
        "display" : "Senning procedure (atrial switch)"
      },
      {
        "code" : "12.29.02",
        "display" : "Mustard procedure (atrial switch)"
      },
      {
        "code" : "12.29.11",
        "display" : "Rastelli procedure: intraventricular left ventricle to aorta tunnel & right ventricle to pulmonary artery conduit"
      },
      {
        "code" : "12.29.20",
        "display" : "Double outlet right ventricle repair"
      },
      {
        "code" : "12.29.21",
        "display" : "Arterial switch procedure"
      },
      {
        "code" : "12.29.25",
        "display" : "Arterial switch & atrial switch procedures ('double switch')"
      },
      {
        "code" : "12.29.26",
        "display" : "Atrial switch and Rastelli procedures"
      },
      {
        "code" : "12.29.40",
        "display" : "Complex transposition of great arteries repair"
      },
      {
        "code" : "12.29.52",
        "display" : "Pulmonary venous pathway procedure (post Senning-Mustard)"
      },
      {
        "code" : "12.29.79",
        "display" : "Atrial switch procedure (Mustard or Senning) revision"
      },
      {
        "code" : "12.29.99",
        "display" : "Removal of interatrial communication ('ASD') implanted device"
      },
      {
        "code" : "12.30.01",
        "display" : "Fontan type procedure"
      },
      {
        "code" : "12.30.04",
        "display" : "Bilateral bidirectional superior cavopulmonary anastomoses with interrupted inferior caval vein (IVC) (Kawashima)"
      },
      {
        "code" : "12.30.05",
        "display" : "Total cavopulmonary connection (TCPC) using extracardiac inferior caval vein (IVC)-pulmonary artery conduit with fenestration"
      },
      {
        "code" : "12.30.06",
        "display" : "Total cavopulmonary connection (TCPC) with fenestrated lateral atrial tunnel"
      },
      {
        "code" : "12.30.13",
        "display" : "Fontan procedure with atrioventricular connection"
      },
      {
        "code" : "12.30.20",
        "display" : "Fenestration of atrial septum"
      },
      {
        "code" : "12.30.21",
        "display" : "Right atrial septum-tunnel fenestration closure with transluminal device"
      },
      {
        "code" : "12.30.27",
        "display" : "Fenestration of Fontan type connection"
      },
      {
        "code" : "12.30.28",
        "display" : "Fontan type connection without fenestration"
      },
      {
        "code" : "12.30.31",
        "display" : "Takedown of Fontan type procedure"
      },
      {
        "code" : "12.30.32",
        "display" : "Fontan procedure with direct atriopulmonary anastomosis"
      },
      {
        "code" : "12.30.34",
        "display" : "Conversion of Fontan repair to total cavopulmonary connection"
      },
      {
        "code" : "12.30.37",
        "display" : "Fontan type procedure revision or conversion"
      },
      {
        "code" : "12.30.41",
        "display" : "Atrial fenestration closure"
      },
      {
        "code" : "12.30.50",
        "display" : "Total cavopulmonary connection (TCPC)"
      },
      {
        "code" : "12.30.51",
        "display" : "Total cavopulmonary connection (TCPC) with lateral atrial tunnel"
      },
      {
        "code" : "12.30.54",
        "display" : "Total cavopulmonary connection (TCPC) using extracardiac inferior caval vein (IVC)-pulmonary artery conduit"
      },
      {
        "code" : "12.30.56",
        "display" : "Takedown of total cavopulmonary connection (TCPC)"
      },
      {
        "code" : "12.30.59",
        "display" : "Bidirectional superior cavopulmonary anastomosis with interrupted inferior caval vein (IVC) (Kawashima)"
      },
      {
        "code" : "12.30.60",
        "display" : "Completion of total cavopulmonary connection (TCPC) using transcatheter inferior to superior caval vein covered stent"
      },
      {
        "code" : "12.30.74",
        "display" : "Transluminal interatrial communication creation"
      },
      {
        "code" : "12.30.92",
        "display" : "Total cavopulmonary connection (TCPC) using intra-extracardiac conduit: fenestrated"
      },
      {
        "code" : "12.30.93",
        "display" : "Total cavopulmonary connection (TCPC) using intra-extracardiac conduit: nonfenestrated"
      },
      {
        "code" : "12.31.03",
        "display" : "Modified right Blalock-Taussig-Thomas interposition shunt"
      },
      {
        "code" : "12.31.04",
        "display" : "Modified left Blalock-Taussig-Thomas interposition shunt"
      },
      {
        "code" : "12.31.05",
        "display" : "Waterston (ascending aorta-right pulmonary artery) anastomosis"
      },
      {
        "code" : "12.31.06",
        "display" : "Central systemic-to-pulmonary arterial interposition shunt"
      },
      {
        "code" : "12.31.11",
        "display" : "Bidirectional superior cavopulmonary (Glenn) anastomosis"
      },
      {
        "code" : "12.31.15",
        "display" : "Hemi-Fontan procedure"
      },
      {
        "code" : "12.31.17",
        "display" : "Removal of band-clip from systemic-to-pulmonary arterial shunt"
      },
      {
        "code" : "12.31.19",
        "display" : "Balloon dilation of systemic-to-pulmonary arterial shunt"
      },
      {
        "code" : "12.31.27",
        "display" : "Stent placement in systemic-to-pulmonary arterial shunt"
      },
      {
        "code" : "12.31.30",
        "display" : "Systemic-to-pulmonary arterial shunt procedure"
      },
      {
        "code" : "12.31.31",
        "display" : "Closure of systemic-to-pulmonary arterial shunt"
      },
      {
        "code" : "12.31.34",
        "display" : "Occlusion of systemic-to-pulmonary arterial shunt by transluminal device-embolus"
      },
      {
        "code" : "12.31.42",
        "display" : "Takedown of superior cavopulmonary (Glenn) anastomosis"
      },
      {
        "code" : "12.31.44",
        "display" : "Bilateral bidirectional superior cavopulmonary (Glenn) anastomoses"
      },
      {
        "code" : "12.31.45",
        "display" : "Unidirectional superior cavopulmonary (Glenn) anastomosis"
      },
      {
        "code" : "12.31.46",
        "display" : "Modified Blalock-Taussig-Thomas interposition shunt"
      },
      {
        "code" : "12.31.72",
        "display" : "Superior caval vein to pulmonary artery anastomosis"
      },
      {
        "code" : "12.32.00",
        "display" : "Postoperative procedure"
      },
      {
        "code" : "12.32.03",
        "display" : "Exploratory procedure to assess heart"
      },
      {
        "code" : "12.32.06",
        "display" : "Lung biopsy procedure"
      },
      {
        "code" : "12.32.09",
        "display" : "Pericardiectomy"
      },
      {
        "code" : "12.32.10",
        "display" : "Heart tumour resection"
      },
      {
        "code" : "12.32.13",
        "display" : "Transplantation of heart and lung(s)"
      },
      {
        "code" : "12.32.14",
        "display" : "DC cardioversion"
      },
      {
        "code" : "12.32.17",
        "display" : "Parietal pleurectomy"
      },
      {
        "code" : "12.32.18",
        "display" : "Postoperative procedure to control bleeding"
      },
      {
        "code" : "12.32.20",
        "display" : "Removal of cardiac vegetations"
      },
      {
        "code" : "12.32.21",
        "display" : "Cardiac procedure"
      },
      {
        "code" : "12.32.22",
        "display" : "Removal of cardiac thrombus"
      },
      {
        "code" : "12.32.24",
        "display" : "Removal of foreign body from heart"
      },
      {
        "code" : "12.32.28",
        "display" : "Thoracic duct occlusion"
      },
      {
        "code" : "12.32.29",
        "display" : "Diaphragm procedure"
      },
      {
        "code" : "12.32.40",
        "display" : "Pericardiocentesis"
      },
      {
        "code" : "12.32.41",
        "display" : "Pericardial drainage: open (pericardiotomy)"
      },
      {
        "code" : "12.32.43",
        "display" : "Pericardiocentesis: percutaneous transcatheter"
      },
      {
        "code" : "12.32.46",
        "display" : "Pericardial window creation"
      },
      {
        "code" : "12.32.53",
        "display" : "Pericardial biopsy"
      },
      {
        "code" : "12.32.59",
        "display" : "Procedure involving pericardium"
      },
      {
        "code" : "12.32.70",
        "display" : "Plication of hemidiaphragm"
      },
      {
        "code" : "12.32.80",
        "display" : "Insertion of pleural tube drain"
      },
      {
        "code" : "12.32.83",
        "display" : "Insertion of mediastinal tube drain"
      },
      {
        "code" : "12.32.90",
        "display" : "Instigation of renal dialysis"
      },
      {
        "code" : "12.33.10",
        "display" : "Traumatic injury of heart repair"
      },
      {
        "code" : "12.33.31",
        "display" : "Intraoperative death"
      },
      {
        "code" : "12.33.33",
        "display" : "Death within 30 days of procedure"
      },
      {
        "code" : "12.33.34",
        "display" : "Death unrelated to cardiac procedure"
      },
      {
        "code" : "12.33.51",
        "display" : "Peripheral vascular procedure"
      },
      {
        "code" : "12.33.52",
        "display" : "Non-cardiothoracic-vascular procedure"
      },
      {
        "code" : "12.33.53",
        "display" : "Non-cardiothoracic-vascular procedure on cardiac patient under cardiac anaesthesia"
      },
      {
        "code" : "12.33.60",
        "display" : "Operation related to transcatheter procedure"
      },
      {
        "code" : "12.33.70",
        "display" : "Medical management of pericardial disease"
      },
      {
        "code" : "12.34.50",
        "display" : "Pacemaker system placement: single chamber"
      },
      {
        "code" : "12.34.51",
        "display" : "Pacemaker system placement: dual chamber"
      },
      {
        "code" : "12.34.52",
        "display" : "Pacemaker system placement: biventricular"
      },
      {
        "code" : "12.34.60",
        "display" : "Pacemaker system placement: temporary"
      },
      {
        "code" : "12.34.63",
        "display" : "Implantation of permanent epicardial pacemaker system"
      },
      {
        "code" : "12.34.64",
        "display" : "Percutaneous transluminal implantation of permanent endocardial pacemaker system"
      },
      {
        "code" : "12.34.67",
        "display" : "Pacemaker system placement: permanent"
      },
      {
        "code" : "12.34.68",
        "display" : "Pacemaker procedure"
      },
      {
        "code" : "12.34.70",
        "display" : "Pacemaker lead procedure"
      },
      {
        "code" : "12.34.73",
        "display" : "Cardiac resynchronisation therapy (biventricular pacing)"
      },
      {
        "code" : "12.34.84",
        "display" : "Pacemaker lead revision procedure"
      },
      {
        "code" : "12.34.85",
        "display" : "Pulse generator box placement"
      },
      {
        "code" : "12.35.13",
        "display" : "Pulse generator box (battery) replacement"
      },
      {
        "code" : "12.35.14",
        "display" : "Removal of complete implanted cardiac pacemaker system"
      },
      {
        "code" : "12.35.40",
        "display" : "Arrhythmia surgical procedure"
      },
      {
        "code" : "12.35.46",
        "display" : "Transluminal cryoablation procedure for arrhythmia"
      },
      {
        "code" : "12.35.48",
        "display" : "Transluminal radiofrequency ablation procedure for arrhythmia"
      },
      {
        "code" : "12.35.53",
        "display" : "Maze operation"
      },
      {
        "code" : "12.35.57",
        "display" : "Transluminal procedure for arrhythmia"
      },
      {
        "code" : "12.35.60",
        "display" : "Pacing to abolish arrhythmia"
      },
      {
        "code" : "12.35.72",
        "display" : "Cox-Maze IV procedure"
      },
      {
        "code" : "12.35.80",
        "display" : "Surgical ablation procedure for atrial arrhythmia"
      },
      {
        "code" : "12.35.81",
        "display" : "Surgical ablation procedure for ventricular arrhythmia"
      },
      {
        "code" : "12.35.82",
        "display" : "Transluminal procedure for atrial arrhythmia"
      },
      {
        "code" : "12.35.83",
        "display" : "Transluminal procedure for ventricular arrhythmia"
      },
      {
        "code" : "12.35.84",
        "display" : "Transluminal ablation procedure with pulmonary vein exclusion"
      },
      {
        "code" : "12.36.00",
        "display" : "Conduit construction procedure"
      },
      {
        "code" : "12.36.01",
        "display" : "Right ventricle to pulmonary arterial tree conduit construction"
      },
      {
        "code" : "12.36.02",
        "display" : "Left ventricle to pulmonary artery conduit construction"
      },
      {
        "code" : "12.36.10",
        "display" : "Replacement of cardiac conduit"
      },
      {
        "code" : "12.36.14",
        "display" : "Balloon dilation of cardiac conduit"
      },
      {
        "code" : "12.36.23",
        "display" : "Stent placement in cardiac conduit"
      },
      {
        "code" : "12.36.32",
        "display" : "Stent redilation in cardiac conduit"
      },
      {
        "code" : "12.36.34",
        "display" : "Stent redilation in systemic-to-pulmonary arterial shunt"
      },
      {
        "code" : "12.36.35",
        "display" : "Ventricle to aorta conduit construction"
      },
      {
        "code" : "12.36.36",
        "display" : "Transluminal perforation and dilation of cardiac conduit"
      },
      {
        "code" : "12.36.37",
        "display" : "Transluminal perforation and dilation of systemic-to-pulmonary arterial shunt"
      },
      {
        "code" : "12.36.40",
        "display" : "Procedure involving constructed cardiac conduit-shunt"
      },
      {
        "code" : "12.36.45",
        "display" : "Clip applied to cardiac conduit or systemic-to-pulmonary arterial shunt"
      },
      {
        "code" : "12.36.46",
        "display" : "Replacement of right ventricle to pulmonary artery conduit"
      },
      {
        "code" : "12.37.01",
        "display" : "Heart transplant"
      },
      {
        "code" : "12.37.02",
        "display" : "Transplantation of heart: orthotopic allotransplant"
      },
      {
        "code" : "12.37.03",
        "display" : "Transplantation of heart: heterotopic (piggy back) allotransplant"
      },
      {
        "code" : "12.37.04",
        "display" : "Prosthetic heart (total artificial heart) implantation"
      },
      {
        "code" : "12.37.06",
        "display" : "Transplantation of heart: ABO incompatible donor"
      },
      {
        "code" : "12.37.13",
        "display" : "Single lung transplant"
      },
      {
        "code" : "12.37.20",
        "display" : "Double lung transplant"
      },
      {
        "code" : "12.37.60",
        "display" : "Lung(s) transplant"
      },
      {
        "code" : "12.37.70",
        "display" : "Organ procurement for transplantation"
      },
      {
        "code" : "12.38.25",
        "display" : "Transluminal left atrial appendage occlusion with device"
      },
      {
        "code" : "12.38.40",
        "display" : "Transluminal ablation procedure for arrhythmia"
      },
      {
        "code" : "12.38.50",
        "display" : "Surgical localisation and mapping procedure for arrhythmia"
      },
      {
        "code" : "12.38.69",
        "display" : "Percutaneous epicardial ablation procedure for arrhythmia"
      },
      {
        "code" : "12.40.00",
        "display" : "Thoracotomy"
      },
      {
        "code" : "12.40.06",
        "display" : "Video-assisted thoracoscopic approach (VATS)"
      },
      {
        "code" : "12.40.13",
        "display" : "Minimally invasive procedure"
      },
      {
        "code" : "12.40.15",
        "display" : "Robotic surgical approach"
      },
      {
        "code" : "12.40.16",
        "display" : "Thoracotomy - redo"
      },
      {
        "code" : "12.40.29",
        "display" : "Median sternotomy - redo x 1-3"
      },
      {
        "code" : "12.40.30",
        "display" : "Median sternotomy - redo x 4 or more"
      },
      {
        "code" : "12.40.99",
        "display" : "Cardiac incision"
      },
      {
        "code" : "12.41.30",
        "display" : "Hybrid strategy (combined surgical & transluminal)"
      },
      {
        "code" : "12.41.36",
        "display" : "Therapeutic cardiovascular catheter procedure with failed attempt to deploy device-stent-coil"
      },
      {
        "code" : "12.42.31",
        "display" : "Implantable cardioverter defibrillator (ICD) implantation"
      },
      {
        "code" : "12.42.32",
        "display" : "Implantable cardioverter defibrillator (ICD) implantation: epicardial"
      },
      {
        "code" : "12.42.33",
        "display" : "Implantable cardioverter defibrillator (ICD) implantation: endocardial"
      },
      {
        "code" : "12.42.34",
        "display" : "Implantable cardioverter defibrillator (ICD) system removal"
      },
      {
        "code" : "12.42.35",
        "display" : "Implantable cardioverter defibrillator (ICD) transluminal removal"
      },
      {
        "code" : "12.42.39",
        "display" : "Implantable cardioverter defibrillator (ICD) procedure"
      },
      {
        "code" : "12.42.61",
        "display" : "Implantable cardioverter defibrillator (ICD) implantation: single chamber"
      },
      {
        "code" : "12.42.64",
        "display" : "Implantable cardioverter defibrillator (ICD) implantation: dual chamber"
      },
      {
        "code" : "12.42.65",
        "display" : "Implantable cardioverter defibrillator (ICD) implantation: biventricular"
      },
      {
        "code" : "12.42.79",
        "display" : "Subcutaneous implantable cardioverter defibrillator (ICD) implantation"
      },
      {
        "code" : "12.43.00",
        "display" : "Reoperation"
      },
      {
        "code" : "12.43.06",
        "display" : "Unplanned reoperation during current admission"
      },
      {
        "code" : "12.43.07",
        "display" : "Unplanned reoperation or reintervention during current admission (excluding bleeding)"
      },
      {
        "code" : "12.43.25",
        "display" : "Palliative procedure"
      },
      {
        "code" : "12.43.70",
        "display" : "Pacemaker system placement: percutaneous endocardial leadless"
      },
      {
        "code" : "12.44.75",
        "display" : "Removal of implanted pacemaker lead"
      },
      {
        "code" : "12.44.87",
        "display" : "Renewal of endocardial leadless pacemaker"
      },
      {
        "code" : "12.44.88",
        "display" : "Removal of endocardial leadless pacemaker"
      },
      {
        "code" : "12.45.00",
        "display" : "Cardiovascular catheter procedure"
      },
      {
        "code" : "12.45.01",
        "display" : "Catheterisation transeptal approach with transeptal puncture"
      },
      {
        "code" : "12.45.04",
        "display" : "Transluminal retrieval of device or foreign body"
      },
      {
        "code" : "12.45.06",
        "display" : "Repeat cardiovascular catheter procedure for residual or recurrent lesion"
      },
      {
        "code" : "12.45.07",
        "display" : "Transluminal diagnostic test occlusion"
      },
      {
        "code" : "12.45.10",
        "display" : "Stent redilation"
      },
      {
        "code" : "12.45.11",
        "display" : "Stent placement"
      },
      {
        "code" : "12.45.12",
        "display" : "Balloon dilation"
      },
      {
        "code" : "12.45.13",
        "display" : "Transluminal device implantation"
      },
      {
        "code" : "12.45.14",
        "display" : "Cardiovascular catheterisation occlusion procedure with coil"
      },
      {
        "code" : "12.45.15",
        "display" : "Transluminal implantation of valve"
      },
      {
        "code" : "12.45.19",
        "display" : "Transluminal prosthetic valve leak closure using device"
      },
      {
        "code" : "12.45.21",
        "display" : "Balloon dilation of valve"
      },
      {
        "code" : "12.45.28",
        "display" : "Therapeutic cardiovascular catheter procedure"
      },
      {
        "code" : "12.45.30",
        "display" : "Transluminal procedure for catheterisation complication"
      },
      {
        "code" : "12.45.45",
        "display" : "Removal of device from body: surgical"
      },
      {
        "code" : "12.45.46",
        "display" : "Stent redilation with intentional stent fracture"
      },
      {
        "code" : "12.45.58",
        "display" : "Transluminal therapeutic perforation to establish interchamber and-or intervessel communication"
      },
      {
        "code" : "12.45.59",
        "display" : "Transluminal procedure using adjunctive therapy"
      },
      {
        "code" : "12.45.70",
        "display" : "Fetal transluminal catheter procedure"
      },
      {
        "code" : "12.45.71",
        "display" : "Fetal balloon pulmonary valvotomy"
      },
      {
        "code" : "12.45.73",
        "display" : "Fetal balloon aortic valvotomy"
      },
      {
        "code" : "12.45.75",
        "display" : "Fetal pericardiocentesis: transcatheter"
      },
      {
        "code" : "12.45.76",
        "display" : "Fetal balloon atrial septostomy"
      },
      {
        "code" : "12.45.90",
        "display" : "Fetal procedure"
      },
      {
        "code" : "12.45.91",
        "display" : "Division of placental communicating vessels in twin-to-twin transfusion syndrome by laser coagulation"
      },
      {
        "code" : "12.46.00",
        "display" : "Atrioventricular valvar procedure in double inlet ventricle"
      },
      {
        "code" : "12.48.01",
        "display" : "Common atrioventricular valvar leaflet (valvoplasty) procedure"
      },
      {
        "code" : "12.48.02",
        "display" : "Atrioventricular septal defect (AVSD): suturing together superior + inferior bridging leaflets to left ventricular side of septum ('cleft')"
      },
      {
        "code" : "12.49.50",
        "display" : "Percutaneous lymphatic embolisation"
      },
      {
        "code" : "12.64.00",
        "display" : "Bronchoscopy"
      },
      {
        "code" : "12.64.08",
        "display" : "Bronchoscopic removal of foreign body"
      },
      {
        "code" : "12.64.20",
        "display" : "Tracheal procedure"
      },
      {
        "code" : "12.64.21",
        "display" : "Tracheostomy creation"
      },
      {
        "code" : "12.64.40",
        "display" : "Tracheobronchial reconstruction procedure"
      },
      {
        "code" : "12.65.05",
        "display" : "Mediastinal exploration"
      },
      {
        "code" : "12.65.06",
        "display" : "Mediastinal procedure"
      },
      {
        "code" : "12.65.13",
        "display" : "Pectus carinatum repair"
      },
      {
        "code" : "12.65.14",
        "display" : "Pectus excavatum repair"
      },
      {
        "code" : "12.65.23",
        "display" : "Anterior chest wall (pectus) repair"
      },
      {
        "code" : "12.65.45",
        "display" : "Debridement of chest wall incision"
      },
      {
        "code" : "12.65.48",
        "display" : "Sternal wire removal from previous sternotomy"
      },
      {
        "code" : "12.65.56",
        "display" : "Sternotomy wound drainage"
      },
      {
        "code" : "12.65.60",
        "display" : "Delayed closure of sternum"
      },
      {
        "code" : "12.65.72",
        "display" : "Open excision of pleural lesion"
      },
      {
        "code" : "12.65.82",
        "display" : "Pleurodesis"
      },
      {
        "code" : "12.65.89",
        "display" : "Pleural procedure"
      },
      {
        "code" : "12.66.00",
        "display" : "Lung procedure"
      },
      {
        "code" : "12.66.01",
        "display" : "Lung decortication"
      },
      {
        "code" : "12.66.02",
        "display" : "Lung mass excision"
      },
      {
        "code" : "12.66.05",
        "display" : "Lung lobectomy"
      },
      {
        "code" : "12.66.06",
        "display" : "Pneumonectomy"
      },
      {
        "code" : "12.66.07",
        "display" : "Lung sequestration repair"
      },
      {
        "code" : "12.70.08",
        "display" : "Venovenous collateral occlusion with device"
      },
      {
        "code" : "12.70.31",
        "display" : "Transluminal occlusion of systemic vein"
      },
      {
        "code" : "12.70.44",
        "display" : "Completion of total cavopulmonary connection (TCPC): hepatic veins to pulmonary artery: fenestrated"
      },
      {
        "code" : "12.70.45",
        "display" : "Completion of total cavopulmonary connection (TCPC): hepatic veins to pulmonary artery: nonfenestrated"
      },
      {
        "code" : "12.80.00",
        "display" : "Thoracic-mediastinal procedure"
      },
      {
        "code" : "12.80.01",
        "display" : "Oesophageal procedure"
      },
      {
        "code" : "12.80.10",
        "display" : "Intestinal procedure"
      },
      {
        "code" : "12.80.37",
        "display" : "Percutaneous feeding gastrostomy tube placement (PEG)"
      },
      {
        "code" : "12.80.38",
        "display" : "Laparotomy"
      },
      {
        "code" : "12.80.74",
        "display" : "Endoscopic cervical sympathectomy: right sided"
      },
      {
        "code" : "12.80.75",
        "display" : "Endoscopic cervical sympathectomy: left sided"
      },
      {
        "code" : "12.87.01",
        "display" : "Cardiac support procedure"
      },
      {
        "code" : "12.87.02",
        "display" : "Intra-aortic balloon pump (IABP) insertion: transluminal"
      },
      {
        "code" : "12.87.04",
        "display" : "Intra-aortic balloon pump (IABP) insertion: open"
      },
      {
        "code" : "12.87.10",
        "display" : "Intra-aortic balloon pump (IABP) insertion"
      },
      {
        "code" : "12.87.11",
        "display" : "Intra-aortic balloon pump (IABP) removal"
      },
      {
        "code" : "12.87.21",
        "display" : "Ventricular assist device implantation"
      },
      {
        "code" : "12.87.22",
        "display" : "Right ventricular assist device implantation"
      },
      {
        "code" : "12.87.23",
        "display" : "Left ventricular assist device implantation"
      },
      {
        "code" : "12.87.24",
        "display" : "Biventricular assist device implantation"
      },
      {
        "code" : "12.87.25",
        "display" : "Cardiac support using Extracorporeal Membrane Oxygenation (ECMO) circuitry"
      },
      {
        "code" : "12.87.26",
        "display" : "Mechanical life support procedure as bridge to transplant"
      },
      {
        "code" : "12.87.27",
        "display" : "Mechanical life support procedure as bridge to recovery"
      },
      {
        "code" : "12.87.28",
        "display" : "Procedure involving Extracorporeal Membrane Oxygenation (ECMO) circuitry"
      },
      {
        "code" : "12.87.31",
        "display" : "Cardiomyoplasty procedure"
      },
      {
        "code" : "12.87.36",
        "display" : "Mechanical life support procedure for primary respiratory failure"
      },
      {
        "code" : "12.87.37",
        "display" : "Mechanical life support procedure following cardiac procedure"
      },
      {
        "code" : "12.87.41",
        "display" : "Ventricular assist device removal"
      },
      {
        "code" : "12.87.45",
        "display" : "Takedown (decannulation) of Extracorporeal Membrane Oxygenation (ECMO) circuitry"
      },
      {
        "code" : "12.87.53",
        "display" : "Mechanical life support procedure as destination therapy"
      },
      {
        "code" : "12.90.01",
        "display" : "Atrioventricular valvar repair"
      },
      {
        "code" : "13.00.01",
        "display" : "Clinical evaluation of patient"
      },
      {
        "code" : "13.00.02",
        "display" : "Diagnostic investigation"
      },
      {
        "code" : "13.00.10",
        "display" : "Electrocardiogram (ECG)"
      },
      {
        "code" : "13.00.11",
        "display" : "24 hour ambulatory electrocardiography (ECG) recording"
      },
      {
        "code" : "13.00.13",
        "display" : "Exercise stress test"
      },
      {
        "code" : "13.00.14",
        "display" : "Insertable electrocardiogram (ECG) loop recorder (e.g. Reveal) implantation"
      },
      {
        "code" : "13.00.15",
        "display" : "Insertable electrocardiogram (ECG) loop recorder (e.g. Reveal) removal"
      },
      {
        "code" : "13.00.16",
        "display" : "Cardiopulmonary exercise stress test"
      },
      {
        "code" : "13.00.17",
        "display" : "Ambulatory electrocardiography (ECG) recording"
      },
      {
        "code" : "13.00.21",
        "display" : "Chest x-ray"
      },
      {
        "code" : "13.00.23",
        "display" : "Computerised tomographic scan of chest"
      },
      {
        "code" : "13.00.24",
        "display" : "Cardiovascular Magnetic Resonance Imaging (CMRI)"
      },
      {
        "code" : "13.00.25",
        "display" : "Pulmonary Function Tests"
      },
      {
        "code" : "13.00.27",
        "display" : "Tilt table testing"
      },
      {
        "code" : "13.00.31",
        "display" : "Myocardial perfusion scan"
      },
      {
        "code" : "13.00.32",
        "display" : "Non-cardiac computed tomographic angiography on cardiac patient"
      },
      {
        "code" : "13.00.33",
        "display" : "Non-cardiovascular Magnetic Resonance Imaging on cardiac patient"
      },
      {
        "code" : "13.00.34",
        "display" : "Diagnostic radiographic procedure on cardiac patient"
      },
      {
        "code" : "13.00.35",
        "display" : "Therapeutic radiological procedure on cardiac patient"
      },
      {
        "code" : "13.00.36",
        "display" : "Ambulatory blood pressure monitoring"
      },
      {
        "code" : "13.00.50",
        "display" : "Arrhythmia provocation test"
      },
      {
        "code" : "13.00.71",
        "display" : "Post mortem examination of heart-lungs"
      },
      {
        "code" : "13.01.00",
        "display" : "Echocardiographic examination"
      },
      {
        "code" : "13.01.01",
        "display" : "Fetal echocardiographic examination"
      },
      {
        "code" : "13.01.02",
        "display" : "Transthoracic echocardiographic examination"
      },
      {
        "code" : "13.01.03",
        "display" : "Transoesophageal echocardiographic examination"
      },
      {
        "code" : "13.01.04",
        "display" : "Epicardial echocardiographic examination"
      },
      {
        "code" : "13.01.23",
        "display" : "Transcatheter intervention with intracardiac echo guidance (ICE)"
      },
      {
        "code" : "13.01.24",
        "display" : "Transluminal intracardiac echocardiographic examination"
      },
      {
        "code" : "13.01.25",
        "display" : "Transabdominal fetal echocardiographic examination"
      },
      {
        "code" : "13.01.26",
        "display" : "Transvaginal fetal echocardiographic examination"
      },
      {
        "code" : "13.01.27",
        "display" : "Intravascular ultrasound (IVUS) examination"
      },
      {
        "code" : "13.01.89",
        "display" : "Satisfactory fetal cardiac images"
      },
      {
        "code" : "13.01.90",
        "display" : "Inadequate fetal cardiac images"
      },
      {
        "code" : "13.04.30",
        "display" : "Abnormal cardiac related serology"
      },
      {
        "code" : "13.04.31",
        "display" : "Raised serum troponin"
      },
      {
        "code" : "13.04.35",
        "display" : "Raised serum brain natriuretic peptide (BNP)"
      },
      {
        "code" : "13.05.01",
        "display" : "Diagnostic cardiovascular catheterisation procedure"
      },
      {
        "code" : "13.05.05",
        "display" : "Diagnostic cardiovascular catheterisation procedure: angiographic data obtained"
      },
      {
        "code" : "13.05.06",
        "display" : "Diagnostic cardiovascular catheterisation procedure: haemodynamic data obtained"
      },
      {
        "code" : "13.05.07",
        "display" : "Diagnostic cardiovascular catheterisation procedure with haemodynamic alteration (challenge)"
      },
      {
        "code" : "13.05.08",
        "display" : "Diagnostic cardiovascular catheterisation procedure with electrophysiological alteration (challenge)"
      },
      {
        "code" : "13.05.12",
        "display" : "Electrophysiological study (EPS)"
      },
      {
        "code" : "13.05.13",
        "display" : "Catheterisation study for pulmonary hypertension evaluation"
      },
      {
        "code" : "13.05.14",
        "display" : "Transcatheter procedure undertaken with x-ray guidance"
      },
      {
        "code" : "13.05.15",
        "display" : "Transcatheter procedure undertaken with magnetic resonance imaging guidance"
      },
      {
        "code" : "13.05.16",
        "display" : "Transcatheter procedure undertaken with x-ray & magnetic resonance imaging guidance"
      },
      {
        "code" : "13.05.17",
        "display" : "Electrophysiological study (EPS) with three dimensional mapping"
      },
      {
        "code" : "13.05.24",
        "display" : "Transcatheter procedure undertaken with ultrasound guidance"
      },
      {
        "code" : "13.05.36",
        "display" : "Diagnostic cardiovascular catheterisation procedure with intention to treat: anatomy unsuitable"
      },
      {
        "code" : "13.05.39",
        "display" : "Transluminal intravascular imaging of coronary vessel by optical coherence tomography (OCT)"
      },
      {
        "code" : "14.01.01",
        "display" : "Chromosomal anomaly"
      },
      {
        "code" : "14.01.02",
        "display" : "Trisomy 21: Down's syndrome"
      },
      {
        "code" : "14.01.03",
        "display" : "Trisomy 18: Edwards' syndrome"
      },
      {
        "code" : "14.01.04",
        "display" : "Trisomy 13: Patau's syndrome"
      },
      {
        "code" : "14.01.05",
        "display" : "45X0: Turner's syndrome"
      },
      {
        "code" : "14.01.20",
        "display" : "Gene mutation or deletion"
      },
      {
        "code" : "14.01.21",
        "display" : "22q11 microdeletion"
      },
      {
        "code" : "14.02.00",
        "display" : "Syndrome-association potentially with cardiac involvement"
      },
      {
        "code" : "14.02.06",
        "display" : "22q11 microdeletion with full DiGeorge sequence (including immune dysfunction)"
      },
      {
        "code" : "14.02.10",
        "display" : "Friedreich's ataxia"
      },
      {
        "code" : "14.02.17",
        "display" : "Marfan syndrome"
      },
      {
        "code" : "14.02.19",
        "display" : "Noonan syndrome"
      },
      {
        "code" : "14.02.21",
        "display" : "Pompe's disease: glycogen storage disease type IIa"
      },
      {
        "code" : "14.02.28",
        "display" : "Tuberous sclerosis"
      },
      {
        "code" : "14.02.30",
        "display" : "Williams syndrome (infantile hypercalcaemia)"
      },
      {
        "code" : "14.02.32",
        "display" : "Fetal rubella syndrome"
      },
      {
        "code" : "14.02.34",
        "display" : "Duchenne's muscular dystrophy"
      },
      {
        "code" : "14.02.58",
        "display" : "Muscular dystrophy"
      },
      {
        "code" : "14.02.62",
        "display" : "Ehlers-Danlos syndrome"
      },
      {
        "code" : "14.02.66",
        "display" : "Alagille syndrome: arteriohepatic dysplasia"
      },
      {
        "code" : "14.03.00",
        "display" : "Noncardiac abnormality potentially with associated heart disease"
      },
      {
        "code" : "14.03.04",
        "display" : "Non-cardiothoracic-vascular abnormality"
      },
      {
        "code" : "14.03.05",
        "display" : "Psychomotor developmental delay"
      },
      {
        "code" : "14.03.06",
        "display" : "Cystic fibrosis"
      },
      {
        "code" : "14.03.07",
        "display" : "Congenital diaphragmatic hernia"
      },
      {
        "code" : "14.03.08",
        "display" : "Tracheo-oesophageal fistula"
      },
      {
        "code" : "14.03.09",
        "display" : "Gastro-oesophageal reflux disease (GORD)"
      },
      {
        "code" : "14.03.10",
        "display" : "Omphalocoele (exomphalos)"
      },
      {
        "code" : "14.03.11",
        "display" : "Congenital duodenal stenosis/atresia"
      },
      {
        "code" : "14.03.21",
        "display" : "Sickle cell disease"
      },
      {
        "code" : "14.03.23",
        "display" : "Renal abnormality"
      },
      {
        "code" : "14.03.28",
        "display" : "Congenital coagulation disorder"
      },
      {
        "code" : "14.03.29",
        "display" : "Thoracic-mediastinal abnormality"
      },
      {
        "code" : "14.03.33",
        "display" : "Microcephaly"
      },
      {
        "code" : "14.03.40",
        "display" : "Brain abscess"
      },
      {
        "code" : "14.03.42",
        "display" : "Cerebrovascular accident (stroke)"
      },
      {
        "code" : "14.03.44",
        "display" : "Transient ischaemic attack: less than 24 hours (TIA)"
      },
      {
        "code" : "14.03.47",
        "display" : "Choanal atresia"
      },
      {
        "code" : "14.03.49",
        "display" : "Tracheobronchial malacia"
      },
      {
        "code" : "14.03.52",
        "display" : "Hypothyroidism"
      },
      {
        "code" : "14.03.59",
        "display" : "Obesity (Body Mass Index over 30)"
      },
      {
        "code" : "14.03.72",
        "display" : "Anoxic-ischaemic encephalopathy"
      },
      {
        "code" : "14.03.75",
        "display" : "Hyperthyroidism"
      },
      {
        "code" : "14.03.90",
        "display" : "Diabetes mellitus"
      },
      {
        "code" : "14.03.91",
        "display" : "Cerebral anomaly"
      },
      {
        "code" : "14.03.92",
        "display" : "Connective tissue disease"
      },
      {
        "code" : "14.03.97",
        "display" : "Reversible ischaemic neurologic deficit: 24-72 hours (RIND)"
      },
      {
        "code" : "14.04.04",
        "display" : "Pectus carinatum"
      },
      {
        "code" : "14.04.05",
        "display" : "Pectus excavatum"
      },
      {
        "code" : "14.04.09",
        "display" : "Kyphoscoliosis"
      },
      {
        "code" : "14.04.12",
        "display" : "Cleft lip or palate"
      },
      {
        "code" : "14.04.14",
        "display" : "Anterior chest wall (pectus) deformity"
      },
      {
        "code" : "14.04.15",
        "display" : "Scoliosis"
      },
      {
        "code" : "14.04.38",
        "display" : "Sleep related breathing disorder"
      },
      {
        "code" : "14.04.46",
        "display" : "Migraine"
      },
      {
        "code" : "14.04.47",
        "display" : "Diver's decompression sickness"
      },
      {
        "code" : "14.04.50",
        "display" : "COVID-19: virus identified"
      },
      {
        "code" : "14.04.52",
        "display" : "Multisystem inflammatory syndrome in children and adolescents temporally related to COVID-19"
      },
      {
        "code" : "14.04.64",
        "display" : "Autistic spectrum disorder"
      },
      {
        "code" : "14.04.65",
        "display" : "Attention deficit hyperactivity disorder (ADHD)"
      },
      {
        "code" : "14.04.67",
        "display" : "Substance abuse"
      },
      {
        "code" : "14.04.70",
        "display" : "Smoking: tobacco use"
      },
      {
        "code" : "14.04.76",
        "display" : "Vaping or e-cigarettes"
      },
      {
        "code" : "14.04.77",
        "display" : "Alcohol use disorder"
      },
      {
        "code" : "14.04.85",
        "display" : "Loeys-Dietz Syndrome (transforming growth factor beta receptor (TGFBR) gene mutation)"
      },
      {
        "code" : "14.04.90",
        "display" : "Von Willebrand disease"
      },
      {
        "code" : "14.04.94",
        "display" : "Diabetes mellitus: requiring insulin"
      },
      {
        "code" : "14.04.95",
        "display" : "Diabetes mellitus: on oral therapy"
      },
      {
        "code" : "14.04.96",
        "display" : "Diabetes mellitus: managed with diet alone"
      },
      {
        "code" : "14.05.00",
        "display" : "Maternal teratogen or disease potentially associated with congenital heart disease"
      },
      {
        "code" : "14.05.01",
        "display" : "Maternal teratogen potentially associated with congenital heart disease"
      },
      {
        "code" : "14.05.40",
        "display" : "Maternally derived fetal disease or syndrome potentially with associated heart disease"
      },
      {
        "code" : "14.05.41",
        "display" : "Fetal infection"
      },
      {
        "code" : "14.05.50",
        "display" : "Major anomaly of gastrointestinal system"
      },
      {
        "code" : "14.05.65",
        "display" : "Meningitis"
      },
      {
        "code" : "14.06.01",
        "display" : "Multiple congenital malformations"
      },
      {
        "code" : "14.10.00",
        "display" : "Fetal cardiac abnormality not detected"
      },
      {
        "code" : "14.10.01",
        "display" : "Fetal abnormality"
      },
      {
        "code" : "14.10.02",
        "display" : "Fetal hydrops"
      },
      {
        "code" : "14.10.06",
        "display" : "Fetal arrhythmia"
      },
      {
        "code" : "14.10.07",
        "display" : "Fetal unexplained right heart dominance"
      },
      {
        "code" : "14.10.08",
        "display" : "Fetal echogenic focus"
      },
      {
        "code" : "14.10.11",
        "display" : "Twin-to-twin transfusion syndrome"
      },
      {
        "code" : "14.10.12",
        "display" : "Increased nuchal thickness"
      },
      {
        "code" : "14.10.18",
        "display" : "In utero death"
      },
      {
        "code" : "14.10.25",
        "display" : "Fetal echocardiographic abnormality"
      },
      {
        "code" : "14.10.26",
        "display" : "Fetal venous Doppler flow(s) abnormal for gestational age"
      },
      {
        "code" : "14.10.27",
        "display" : "Fetal progression of right ventricular outflow tract obstruction"
      },
      {
        "code" : "14.10.28",
        "display" : "Fetal progression of left ventricular outflow tract obstruction"
      },
      {
        "code" : "14.10.34",
        "display" : "Intrauterine growth restriction (retardation)"
      },
      {
        "code" : "14.10.35",
        "display" : "Spontaneous abortion-miscarriage (under 24 wks)"
      },
      {
        "code" : "14.10.36",
        "display" : "Stillbirth (over 24 wks)"
      },
      {
        "code" : "14.10.37",
        "display" : "Termination of pregnancy procedure"
      },
      {
        "code" : "14.10.38",
        "display" : "Terminated pregnancy (with respect to fetus)"
      },
      {
        "code" : "14.10.45",
        "display" : "Fetal unexplained left heart dominance"
      },
      {
        "code" : "14.10.52",
        "display" : "Fetal abnormal 4 chamber view"
      },
      {
        "code" : "14.10.53",
        "display" : "Fetal abnormal great arterial view"
      },
      {
        "code" : "14.10.60",
        "display" : "Fetal structural heart abnormality"
      },
      {
        "code" : "14.10.72",
        "display" : "Liveborn"
      },
      {
        "code" : "14.10.73",
        "display" : "Selective feticide in multiple pregnancy"
      },
      {
        "code" : "14.10.79",
        "display" : "Pregnant at time of procedure"
      },
      {
        "code" : "14.10.90",
        "display" : "Fetal failure of right ventricular growth"
      },
      {
        "code" : "14.10.91",
        "display" : "Fetal failure of left ventricular growth"
      },
      {
        "code" : "14.10.95",
        "display" : "Fetal cardiomegaly"
      },
      {
        "code" : "14.10.98",
        "display" : "Fetal heart failure"
      },
      {
        "code" : "14.10.99",
        "display" : "Fetal heart failure due to extracardiac disease"
      },
      {
        "code" : "14.11.40",
        "display" : "Fetal arterial Doppler flow(s) abnormal for gestational age"
      },
      {
        "code" : "14.11.41",
        "display" : "Fetal aortic arch flow abnormal for gestational age"
      },
      {
        "code" : "14.11.42",
        "display" : "Fetal reversal of aortic arch blood flow for gestational age"
      },
      {
        "code" : "14.11.43",
        "display" : "Fetal ductal arch flow abnormal for gestational age"
      },
      {
        "code" : "14.11.44",
        "display" : "Fetal reversal of ductal arch blood flow for gestational age"
      },
      {
        "code" : "14.11.80",
        "display" : "Fetal heart muscle abnormality"
      },
      {
        "code" : "14.11.81",
        "display" : "Fetal cardiomyopathy"
      },
      {
        "code" : "14.11.87",
        "display" : "Fetal ventricular dysfunction"
      },
      {
        "code" : "14.12.20",
        "display" : "Fetal fluid retention"
      },
      {
        "code" : "14.13.52",
        "display" : "Fetal Cardiovascular Profile Score (Huhta) = 10"
      },
      {
        "code" : "15.00.01",
        "display" : "Cardiac arrest during procedure"
      },
      {
        "code" : "15.00.02",
        "display" : "Cardiac arrest following procedure"
      },
      {
        "code" : "15.00.03",
        "display" : "Postprocedural low cardiac output"
      },
      {
        "code" : "15.00.05",
        "display" : "Myocardial infarction during procedure"
      },
      {
        "code" : "15.00.09",
        "display" : "Postprocedural requirement for mechanical circulatory support"
      },
      {
        "code" : "15.00.30",
        "display" : "Postprocedural hypovolaemia"
      },
      {
        "code" : "15.02.00",
        "display" : "Postprocedural haemorrhage"
      },
      {
        "code" : "15.02.03",
        "display" : "Postprocedural coagulopathy"
      },
      {
        "code" : "15.02.07",
        "display" : "Postprocedural haemolysis"
      },
      {
        "code" : "15.02.65",
        "display" : "Postprocedural haemorrhage requiring reoperation"
      },
      {
        "code" : "15.03.00",
        "display" : "Median sternotomy complication"
      },
      {
        "code" : "15.03.03",
        "display" : "Infection of median sternotomy wound"
      },
      {
        "code" : "15.03.08",
        "display" : "Dehiscence of median sternotomy wound"
      },
      {
        "code" : "15.03.15",
        "display" : "Keloid-hypertrophic scar of median sternotomy wound"
      },
      {
        "code" : "15.03.21",
        "display" : "Prominent wire in median sternotomy wound causing irritation"
      },
      {
        "code" : "15.03.30",
        "display" : "Lateral thoracotomy complication"
      },
      {
        "code" : "15.03.32",
        "display" : "Infection of lateral thoracotomy wound"
      },
      {
        "code" : "15.03.50",
        "display" : "Surgical site infection"
      },
      {
        "code" : "15.03.51",
        "display" : "Surgical site dehiscence"
      },
      {
        "code" : "15.03.52",
        "display" : "Mediastinitis"
      },
      {
        "code" : "15.04.01",
        "display" : "Postprocedural superior caval vein (SVC) complication"
      },
      {
        "code" : "15.04.05",
        "display" : "Postprocedural inferior caval vein (IVC) complication"
      },
      {
        "code" : "15.04.11",
        "display" : "Inferior caval vein (IVC) obstruction due to foreign body"
      },
      {
        "code" : "15.04.12",
        "display" : "Superior caval vein (SVC) obstruction due to foreign body"
      },
      {
        "code" : "15.04.15",
        "display" : "Postprocedural femoral vein complication"
      },
      {
        "code" : "15.04.34",
        "display" : "Postprocedural major vein complication"
      },
      {
        "code" : "15.05.01",
        "display" : "Postprocedural pulmonary venous complication"
      },
      {
        "code" : "15.05.03",
        "display" : "Pulmonary venous obstruction"
      },
      {
        "code" : "15.05.26",
        "display" : "Postprocedural obstructed pulmonary vein(s)"
      },
      {
        "code" : "15.10.01",
        "display" : "Postprocedural obstructed systemic venous pathway"
      },
      {
        "code" : "15.10.02",
        "display" : "Postprocedural obstructed pulmonary venous pathway"
      },
      {
        "code" : "15.10.10",
        "display" : "Acquired right atrial abnormality"
      },
      {
        "code" : "15.10.11",
        "display" : "Postprocedural right atrial complication"
      },
      {
        "code" : "15.10.13",
        "display" : "Obstruction of right atrial conduit (including total cavopulmonary connection)"
      },
      {
        "code" : "15.10.17",
        "display" : "Right atrial erosion due to implanted device"
      },
      {
        "code" : "15.10.19",
        "display" : "Left atrial erosion due to implanted device"
      },
      {
        "code" : "15.10.20",
        "display" : "Acquired left atrial abnormality"
      },
      {
        "code" : "15.10.21",
        "display" : "Postprocedural left atrial complication"
      },
      {
        "code" : "15.10.27",
        "display" : "Postprocedural right atrial perforation"
      },
      {
        "code" : "15.10.28",
        "display" : "Postprocedural left atrial perforation"
      },
      {
        "code" : "15.10.61",
        "display" : "Postprocedural atrial septum complication"
      },
      {
        "code" : "15.10.63",
        "display" : "Residual interatrial communication ('ASD')"
      },
      {
        "code" : "15.10.66",
        "display" : "Ineffective balloon atrial septostomy"
      },
      {
        "code" : "15.10.72",
        "display" : "Postprocedural residual or recurrent interatrial communication ('ASD')"
      },
      {
        "code" : "15.10.79",
        "display" : "Postoperative interatrial communication"
      },
      {
        "code" : "15.11.00",
        "display" : "Postprocedural tricuspid valvar complication"
      },
      {
        "code" : "15.11.03",
        "display" : "Residual tricuspid regurgitation"
      },
      {
        "code" : "15.11.08",
        "display" : "Tricuspid valvar prosthesis complication"
      },
      {
        "code" : "15.12.00",
        "display" : "Postprocedural mitral valvar complication"
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
        "code" : "15.12.09",
        "display" : "Mitral valvar prosthesis complication"
      },
      {
        "code" : "15.13.02",
        "display" : "Residual common atrioventricular valvar regurgitation"
      },
      {
        "code" : "15.13.08",
        "display" : "Postprocedural common atrioventricular valvar abnormality in double inlet ventricle"
      },
      {
        "code" : "15.14.00",
        "display" : "Postprocedural right atrioventricular valvar complication"
      },
      {
        "code" : "15.14.11",
        "display" : "Postprocedural right-sided atrioventricular valvar abnormality in double inlet ventricle"
      },
      {
        "code" : "15.15.00",
        "display" : "Postprocedural left atrioventricular valvar complication"
      },
      {
        "code" : "15.15.11",
        "display" : "Postprocedural left-sided atrioventricular valvar abnormality in double inlet ventricle"
      },
      {
        "code" : "15.16.00",
        "display" : "Postprocedural atrioventricular septal defect complication"
      },
      {
        "code" : "15.16.02",
        "display" : "Residual ventricular component of atrioventricular septal defect"
      },
      {
        "code" : "15.20.01",
        "display" : "Postprocedural right ventricular complication"
      },
      {
        "code" : "15.20.21",
        "display" : "Postprocedural right ventricular outflow tract complication"
      },
      {
        "code" : "15.20.23",
        "display" : "Residual right ventricular outflow tract obstruction"
      },
      {
        "code" : "15.20.24",
        "display" : "Postprocedural right ventricular outflow tract obstruction"
      },
      {
        "code" : "15.20.25",
        "display" : "Aneurysm of right ventricular outflow tract patch"
      },
      {
        "code" : "15.20.33",
        "display" : "Postprocedural right ventricular aneurysm"
      },
      {
        "code" : "15.20.34",
        "display" : "Postprocedural right ventricular perforation"
      },
      {
        "code" : "15.20.75",
        "display" : "Residual subaortic stenosis in functionally univentricular heart"
      },
      {
        "code" : "15.20.76",
        "display" : "Residual subpulmonary stenosis in functionally univentricular heart"
      },
      {
        "code" : "15.21.01",
        "display" : "Postprocedural left ventricular complication"
      },
      {
        "code" : "15.21.21",
        "display" : "Postprocedural left ventricular outflow tract complication"
      },
      {
        "code" : "15.21.22",
        "display" : "Residual left ventricular outflow tract obstruction"
      },
      {
        "code" : "15.21.23",
        "display" : "Postprocedural left ventricular outflow tract obstruction"
      },
      {
        "code" : "15.21.32",
        "display" : "Postprocedural left ventricular aneurysm"
      },
      {
        "code" : "15.21.33",
        "display" : "Postprocedural left ventricular perforation"
      },
      {
        "code" : "15.22.00",
        "display" : "Postprocedural ventricular septal defect (VSD) complication"
      },
      {
        "code" : "15.22.02",
        "display" : "Residual ventricular septal defect (VSD)"
      },
      {
        "code" : "15.22.13",
        "display" : "Postprocedural residual or recurrent ventricular septal defect (VSD)"
      },
      {
        "code" : "15.22.31",
        "display" : "Residual pulmonary hypertension after relief of systemic-to-pulmonary shunt"
      },
      {
        "code" : "15.22.35",
        "display" : "Postprocedural systemic ventricular-to-right atrial shunt"
      },
      {
        "code" : "15.24.00",
        "display" : "Postprocedural systemic arterial complication"
      },
      {
        "code" : "15.24.20",
        "display" : "Postprocedural femoral arterial complication"
      },
      {
        "code" : "15.25.03",
        "display" : "Residual truncal regurgitation"
      },
      {
        "code" : "15.25.11",
        "display" : "Acquired abnormality of the neo-aortic valve of truncal origin"
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
        "code" : "15.25.31",
        "display" : "Postprocedural common arterial trunk complication"
      },
      {
        "code" : "15.30.00",
        "display" : "Postprocedural pulmonary valvar complication"
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
        "code" : "15.30.08",
        "display" : "Pulmonary valvar prosthesis complication"
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
        "code" : "15.30.18",
        "display" : "Acquired abnormality of the neopulmonary valve"
      },
      {
        "code" : "15.32.01",
        "display" : "Postprocedural pulmonary trunk complication"
      },
      {
        "code" : "15.32.02",
        "display" : "Postprocedural pulmonary trunk stenosis"
      },
      {
        "code" : "15.32.21",
        "display" : "Postprocedural right pulmonary artery complication"
      },
      {
        "code" : "15.32.22",
        "display" : "Postprocedural stenosis of right pulmonary artery"
      },
      {
        "code" : "15.32.23",
        "display" : "Residual right pulmonary artery stenosis"
      },
      {
        "code" : "15.32.41",
        "display" : "Postprocedural left pulmonary artery complication"
      },
      {
        "code" : "15.32.42",
        "display" : "Postprocedural stenosis of left pulmonary artery"
      },
      {
        "code" : "15.32.43",
        "display" : "Residual left pulmonary artery stenosis"
      },
      {
        "code" : "15.32.56",
        "display" : "Postprocedural pulmonary arterial tree complication"
      },
      {
        "code" : "15.35.00",
        "display" : "Postprocedural aortic valvar complication"
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
        "code" : "15.35.08",
        "display" : "Aortic valvar prosthesis complication"
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
        "code" : "15.35.17",
        "display" : "Acquired abnormality of the neo-aortic valve of pulmonary origin"
      },
      {
        "code" : "15.36.01",
        "display" : "Postprocedural ascending aorta complication"
      },
      {
        "code" : "15.36.26",
        "display" : "Dissection of aorta related to an intervention at coarctation site"
      },
      {
        "code" : "15.37.01",
        "display" : "Postprocedural descending aorta complication"
      },
      {
        "code" : "15.37.05",
        "display" : "Residual aortic coarctation"
      },
      {
        "code" : "15.37.07",
        "display" : "Postprocedural aneurysm of aorta at coarctation site"
      },
      {
        "code" : "15.37.15",
        "display" : "Aneurysm or pseudo-aneurysm of aorta related to an intervention at coarctation site"
      },
      {
        "code" : "15.37.73",
        "display" : "Postprocedural aortic complication"
      },
      {
        "code" : "15.37.80",
        "display" : "Postprocedural aortic aneurysm"
      },
      {
        "code" : "15.37.83",
        "display" : "Postprocedural stenosis of thoracic aorta"
      },
      {
        "code" : "15.37.84",
        "display" : "Postprocedural aortic complication related to congenital heart anomaly"
      },
      {
        "code" : "15.39.01",
        "display" : "Postprocedural arterial duct complication"
      },
      {
        "code" : "15.39.02",
        "display" : "Residual arterial duct (PDA) patency"
      },
      {
        "code" : "15.39.05",
        "display" : "Postprocedural residual arterial duct (ductus arteriosus) patency"
      },
      {
        "code" : "15.39.07",
        "display" : "Postprocedural arterial duct (ductus arteriosus) perforation"
      },
      {
        "code" : "15.39.50",
        "display" : "Postprocedural systemic-to-pulmonary collateral artery complication"
      },
      {
        "code" : "15.41.00",
        "display" : "Postprocedural coronary arterial complication"
      },
      {
        "code" : "15.41.13",
        "display" : "Cardiac transplant associated coronary allograft vasculopathy"
      },
      {
        "code" : "15.41.39",
        "display" : "Postprocedural coronary artery bypass graft (CABG) complication"
      },
      {
        "code" : "15.50.00",
        "display" : "Cardiac catheterisation complication"
      },
      {
        "code" : "15.50.01",
        "display" : "Intramyocardial injection of contrast medium"
      },
      {
        "code" : "15.50.03",
        "display" : "Inadvertent perforation of cardiac chamber or vessel during cardiac catheterisation"
      },
      {
        "code" : "15.50.11",
        "display" : "Lost pulse after cardiac catheterisation"
      },
      {
        "code" : "15.50.19",
        "display" : "Local complication at access site of cardiac catheterisation"
      },
      {
        "code" : "15.50.20",
        "display" : "Traumatic damage to heart valve during cardiovascular catheterisation procedure"
      },
      {
        "code" : "15.50.30",
        "display" : "Equipment problem during cardiac catheterisation"
      },
      {
        "code" : "15.50.37",
        "display" : "Embolisation of catheter introduced device"
      },
      {
        "code" : "15.50.40",
        "display" : "Failed attempt to implant coil-device during transcatheter intervention"
      },
      {
        "code" : "15.50.52",
        "display" : "Erosion of or into cardiac structure by implanted transcatheter device"
      },
      {
        "code" : "15.50.60",
        "display" : "Complication involving device implantation"
      },
      {
        "code" : "15.50.61",
        "display" : "Coronary arterial compression following transluminal device implantation"
      },
      {
        "code" : "15.50.65",
        "display" : "Embolisation (dislodgement) of catheter introduced coil"
      },
      {
        "code" : "15.50.70",
        "display" : "Complication involving stent"
      },
      {
        "code" : "15.50.71",
        "display" : "Embolisation of stent"
      },
      {
        "code" : "15.50.78",
        "display" : "Rupture of conduit or vessel following stent implantation"
      },
      {
        "code" : "15.50.80",
        "display" : "Fetal intervention complication"
      },
      {
        "code" : "15.50.81",
        "display" : "Preterm delivery immediately following fetal intervention"
      },
      {
        "code" : "15.50.83",
        "display" : "Failed fetal procedure"
      },
      {
        "code" : "15.50.86",
        "display" : "Fetal death following fetal cardiac procedure"
      },
      {
        "code" : "15.50.91",
        "display" : "Stent left expanded in unplanned site after migration or embolisation"
      },
      {
        "code" : "15.51.00",
        "display" : "Complication following arrhythmia related procedure"
      },
      {
        "code" : "15.51.36",
        "display" : "Complication related to transcatheter cardiovascular intervention"
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
        "code" : "15.51.51",
        "display" : "Local complication at access site of cardiac catheterisation requiring transfusion"
      },
      {
        "code" : "15.51.52",
        "display" : "Local complication at access site of cardiac catheterisation requiring thrombolysis"
      },
      {
        "code" : "15.51.53",
        "display" : "Local complication at access site of cardiac catheterisation requiring surgical intervention"
      },
      {
        "code" : "15.51.54",
        "display" : "Mechanical haemolysis due to transcatheter implanted device requiring transfusion"
      },
      {
        "code" : "15.55.00",
        "display" : "Cardiac conduit related complication"
      },
      {
        "code" : "15.55.16",
        "display" : "Cardiac conduit failure"
      },
      {
        "code" : "15.55.24",
        "display" : "Pulmonary autograft failure"
      },
      {
        "code" : "15.56.00",
        "display" : "Systemic-to-pulmonary arterial shunt related complication"
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
        "code" : "15.56.21",
        "display" : "Systemic-to-pulmonary arterial shunt failure"
      },
      {
        "code" : "15.56.26",
        "display" : "Postprocedural systemic-to-pulmonary arterial shunt acquired obstruction"
      },
      {
        "code" : "15.56.27",
        "display" : "Systemic-to-pulmonary arterial shunt obstruction"
      },
      {
        "code" : "15.57.02",
        "display" : "Extracorporeal Membrane Oxygenation (ECMO) circuit complication"
      },
      {
        "code" : "15.57.03",
        "display" : "Ventricular assist device complication"
      },
      {
        "code" : "15.57.21",
        "display" : "Intraaortic balloon pump (IABP) complication"
      },
      {
        "code" : "15.58.01",
        "display" : "Complication related to echocardiographic procedure"
      },
      {
        "code" : "15.59.00",
        "display" : "Medication related complication or error"
      },
      {
        "code" : "15.60.02",
        "display" : "Arrhythmia following procedure"
      },
      {
        "code" : "15.60.20",
        "display" : "Failed attempt at cardiovascular transcatheter procedure"
      },
      {
        "code" : "15.67.38",
        "display" : "Surgical site related complication"
      },
      {
        "code" : "15.67.41",
        "display" : "Surgical site infection requiring surgical intervention"
      },
      {
        "code" : "15.77.00",
        "display" : "Cardiopulmonary bypass complication"
      },
      {
        "code" : "15.80.00",
        "display" : "General systemic complication after cardiac procedure"
      },
      {
        "code" : "15.80.01",
        "display" : "Postprocedural metabolic derangement"
      },
      {
        "code" : "15.80.05",
        "display" : "Postprocedural septicaemia"
      },
      {
        "code" : "15.80.06",
        "display" : "Capillary leak syndrome"
      },
      {
        "code" : "15.80.15",
        "display" : "Postprocedural acidosis"
      },
      {
        "code" : "15.80.16",
        "display" : "Multiple organ dysfunction syndrome (MODS) (multisystem organ failure-MSOF)"
      },
      {
        "code" : "15.80.19",
        "display" : "Systemic inflammatory response syndrome (SIRS)"
      },
      {
        "code" : "15.80.20",
        "display" : "Respiratory complication after cardiac procedure"
      },
      {
        "code" : "15.80.21",
        "display" : "Postprocedural pulmonary infection"
      },
      {
        "code" : "15.80.22",
        "display" : "Postprocedural pulmonary hypertensive crises"
      },
      {
        "code" : "15.80.29",
        "display" : "Postprocedural Acute Respiratory Distress Syndrome (ARDS)"
      },
      {
        "code" : "15.80.31",
        "display" : "Postprocedural lung collapse (atelectasis)"
      },
      {
        "code" : "15.80.32",
        "display" : "Postprocedural requirement for mechanical respiratory support more than 7 days"
      },
      {
        "code" : "15.80.33",
        "display" : "Postprocedural requirement for reintubation"
      },
      {
        "code" : "15.80.50",
        "display" : "Postprocedural pleural effusion"
      },
      {
        "code" : "15.80.51",
        "display" : "Postprocedural right pleural effusion"
      },
      {
        "code" : "15.80.52",
        "display" : "Postprocedural left pleural effusion"
      },
      {
        "code" : "15.80.55",
        "display" : "Postprocedural chylothorax"
      },
      {
        "code" : "15.80.56",
        "display" : "Postprocedural haemothorax"
      },
      {
        "code" : "15.80.61",
        "display" : "Pleural effusion requiring drainage"
      },
      {
        "code" : "15.80.62",
        "display" : "Postprocedural pneumothorax"
      },
      {
        "code" : "15.80.64",
        "display" : "Postprocedural prolonged pleural drainage (over 7 days)"
      },
      {
        "code" : "15.80.65",
        "display" : "Postprocedural prolonged pleural drainage (over 10 days)"
      },
      {
        "code" : "15.80.70",
        "display" : "Postprocedural complication involving tracheobronchial tree"
      },
      {
        "code" : "15.80.84",
        "display" : "Postprocedural subglottic stenosis"
      },
      {
        "code" : "15.80.86",
        "display" : "Postprocedural requirement for tracheostomy"
      },
      {
        "code" : "15.80.87",
        "display" : "Postprocedural bronchial compression"
      },
      {
        "code" : "15.80.90",
        "display" : "Intraprocedural phrenic nerve injury (paralysed diaphragm)"
      },
      {
        "code" : "15.80.93",
        "display" : "Intraprocedural recurrent laryngeal nerve injury (palsy)"
      },
      {
        "code" : "15.80.94",
        "display" : "Postprocedural Horner's syndrome"
      },
      {
        "code" : "15.81.01",
        "display" : "Cardiac postprocedural plastic bronchitis"
      },
      {
        "code" : "15.81.90",
        "display" : "Intraprocedural phrenic nerve injury (paralysed diaphragm) requiring plication of diaphragm"
      },
      {
        "code" : "15.82.00",
        "display" : "Postprocedural kidney injury"
      },
      {
        "code" : "15.82.06",
        "display" : "Kidney injury requiring temporary dialysis"
      },
      {
        "code" : "15.82.07",
        "display" : "Kidney injury requiring permanent dialysis"
      },
      {
        "code" : "15.82.10",
        "display" : "Kidney failure"
      },
      {
        "code" : "15.82.13",
        "display" : "Acute kidney injury requiring dialysis"
      },
      {
        "code" : "15.82.21",
        "display" : "Postprocedural gastrointestinal bleeding"
      },
      {
        "code" : "15.82.23",
        "display" : "Postprocedural inability to sustain gastric feeding"
      },
      {
        "code" : "15.82.28",
        "display" : "Postprocedural intestinal obstruction"
      },
      {
        "code" : "15.82.29",
        "display" : "Postprocedural peritonitis"
      },
      {
        "code" : "15.82.30",
        "display" : "Postprocedural necrotising enterocolitis"
      },
      {
        "code" : "15.82.32",
        "display" : "Pseudomembranous colitis"
      },
      {
        "code" : "15.82.33",
        "display" : "Cardiac postprocedural protein losing enteropathy"
      },
      {
        "code" : "15.82.38",
        "display" : "Postprocedural feeding difficulties"
      },
      {
        "code" : "15.82.43",
        "display" : "Postprocedural hepatic impairment"
      },
      {
        "code" : "15.82.47",
        "display" : "Postprocedural acute pancreatitis"
      },
      {
        "code" : "15.82.49",
        "display" : "Cardiac postprocedural cirrhosis of liver"
      },
      {
        "code" : "15.82.50",
        "display" : "Neurological complication after cardiac procedure"
      },
      {
        "code" : "15.82.51",
        "display" : "Postprocedural generalised seizures"
      },
      {
        "code" : "15.82.53",
        "display" : "Postprocedural temporary neurological impairment"
      },
      {
        "code" : "15.82.57",
        "display" : "New neurological impairment (global or focal) present at discharge"
      },
      {
        "code" : "15.82.64",
        "display" : "Postprocedural brain death"
      },
      {
        "code" : "15.82.66",
        "display" : "Postprocedural cerebral abscess"
      },
      {
        "code" : "15.82.67",
        "display" : "Postprocedural new onset seizures"
      },
      {
        "code" : "15.82.68",
        "display" : "Postprocedural neurological impairment persisting at discharge"
      },
      {
        "code" : "15.82.81",
        "display" : "Postprocedural cerebral abnormality on imaging"
      },
      {
        "code" : "15.83.00",
        "display" : "Pericardial effusion requiring drainage"
      },
      {
        "code" : "15.83.75",
        "display" : "Postprocedural necrotising enterocolitis: established requiring treatment"
      },
      {
        "code" : "15.83.99",
        "display" : "Acute neurological event within 30 days of cardiovascular procedure"
      },
      {
        "code" : "15.84.52",
        "display" : "Fontan-associated liver disease"
      },
      {
        "code" : "15.88.00",
        "display" : "Vascular line (access) related complication"
      },
      {
        "code" : "15.90.01",
        "display" : "Postprocedural complication"
      },
      {
        "code" : "15.90.03",
        "display" : "No postprocedural complications"
      },
      {
        "code" : "15.90.14",
        "display" : "Procedure related complication"
      },
      {
        "code" : "15.90.20",
        "display" : "Complication during period of anaesthetic care"
      },
      {
        "code" : "15.90.60",
        "display" : "'Failed' Fontan type circulation"
      },
      {
        "code" : "15.90.62",
        "display" : "Superior cavopulmonary anastomosis complication"
      },
      {
        "code" : "15.90.78",
        "display" : "Postprocedural formation of pulmonary arteriovenous fistulas (malformations) due to superior cavopulmonary anastomosis"
      },
      {
        "code" : "15.90.79",
        "display" : "Lymphatic system failure following Fontan-type operation"
      },
      {
        "code" : "15.90.85",
        "display" : "Death attributable to complication(s) following premature birth"
      },
      {
        "code" : "15.90.86",
        "display" : "Death attributable to complication(s) following congenital cardiac procedure"
      },
      {
        "code" : "15.90.94",
        "display" : "Requirement for bail out transcatheter procedure following procedural complication"
      },
      {
        "code" : "15.90.95",
        "display" : "Requirement for bail out surgical procedure following procedural complication"
      },
      {
        "code" : "15.95.00",
        "display" : "Complication after heart or lung transplant"
      },
      {
        "code" : "15.95.03",
        "display" : "Lymphoproliferative disease following transplantation"
      },
      {
        "code" : "15.95.64",
        "display" : "Post-lung transplant obliterative bronchiolitis"
      },
      {
        "code" : "15.95.66",
        "display" : "Post-lung transplant rejection"
      },
      {
        "code" : "16.01.01",
        "display" : "Pneumothorax"
      },
      {
        "code" : "16.01.04",
        "display" : "Pleural effusion"
      },
      {
        "code" : "16.01.11",
        "display" : "Empyema"
      },
      {
        "code" : "16.01.21",
        "display" : "Pleural disease - benign"
      },
      {
        "code" : "16.01.22",
        "display" : "Pleural disease - malignant"
      },
      {
        "code" : "16.02.00",
        "display" : "Bronchial fistula"
      },
      {
        "code" : "16.03.01",
        "display" : "Lung disease - benign"
      },
      {
        "code" : "16.03.02",
        "display" : "Lower respiratory tract infection"
      },
      {
        "code" : "16.03.05",
        "display" : "Lung disease"
      },
      {
        "code" : "16.03.10",
        "display" : "Asthma"
      },
      {
        "code" : "16.03.21",
        "display" : "Lung disease - malignant"
      },
      {
        "code" : "16.05.11",
        "display" : "Mediastinal disease - benign"
      },
      {
        "code" : "16.05.12",
        "display" : "Mediastinal disease - malignant"
      },
      {
        "code" : "16.05.13",
        "display" : "Mediastinal disease"
      },
      {
        "code" : "16.09.00",
        "display" : "Airway disease"
      },
      {
        "code" : "16.10.01",
        "display" : "Tracheal stenosis"
      },
      {
        "code" : "16.10.09",
        "display" : "Tracheal disease"
      },
      {
        "code" : "16.12.08",
        "display" : "Thoracic outlet syndrome"
      },
      {
        "code" : "16.13.00",
        "display" : "Diaphragm disorder: acquired"
      },
      {
        "code" : "16.13.20",
        "display" : "Diaphragm paralysis"
      },
      {
        "code" : "16.15.09",
        "display" : "Diaphragm disease"
      },
      {
        "code" : "16.20.01",
        "display" : "Oesophageal disease - benign"
      },
      {
        "code" : "16.20.02",
        "display" : "Oesophageal disease - malignant"
      },
      {
        "code" : "16.20.10",
        "display" : "Oesophageal disorder"
      },
      {
        "code" : "16.30.01",
        "display" : "Respiratory failure"
      },
      {
        "code" : "16.40.33",
        "display" : "Sternal tumour: benign"
      },
      {
        "code" : "16.40.34",
        "display" : "Sternal tumour: malignant"
      },
      {
        "code" : "16.40.35",
        "display" : "Sternal tumour: metastatic"
      },
      {
        "code" : "16.40.51",
        "display" : "Rib tumour: benign"
      },
      {
        "code" : "16.40.52",
        "display" : "Rib tumour: malignant"
      },
      {
        "code" : "16.40.53",
        "display" : "Rib tumour: metastatic"
      },
      {
        "code" : "16.50.20",
        "display" : "Complication following respiratory tract stent implantation"
      },
      {
        "code" : "17.00.01",
        "display" : "Medical therapy for cardiovascular disease"
      },
      {
        "code" : "17.10.02",
        "display" : "Medical therapy for endocarditis"
      },
      {
        "code" : "Q1.90.51",
        "display" : "- status: postprocedure"
      },
      {
        "code" : "Q1.90.67",
        "display" : "- status: postsurgical procedure"
      },
      {
        "code" : "Q1.91.80",
        "display" : "- status: post heart transplant"
      },
      {
        "code" : "Q1.91.81",
        "display" : "- status: post heart & lung(s) transplant"
      },
      {
        "code" : "Q1.91.82",
        "display" : "- status: post lung(s) transplant"
      },
      {
        "code" : "Q5.08.11",
        "display" : "- transatrial approach"
      },
      {
        "code" : "Q5.08.13",
        "display" : "- trans-right ventricular approach"
      },
      {
        "code" : "Q5.85.30",
        "display" : "- with sedation"
      }]
    }]
  }
}

```
