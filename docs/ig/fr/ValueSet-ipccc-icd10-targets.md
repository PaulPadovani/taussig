# TAUSSIG — Cibles CIM-10 de la correspondance IPCCC - TAUSSIG — Implementation Guide (POC Cathétérisme) v0.6.1

## ValueSet: TAUSSIG — Cibles CIM-10 de la correspondance IPCCC (Expérimental) 

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
  "id" : "ipccc-icd10-targets",
  "url" : "https://taussig/fhir/ValueSet/ipccc-icd10-targets",
  "version" : "0.6.1",
  "name" : "TaussigIpcccIcd10Targets",
  "title" : "TAUSSIG — Cibles CIM-10 de la correspondance IPCCC",
  "status" : "active",
  "experimental" : true,
  "date" : "2026-10-31T15:29:53+01:00",
  "publisher" : "Projet TAUSSIG",
  "description" : "Codes principaux et produits complémentaires de la table de correspondance normalisée. Leur existence est contrôlée contre le service terminologique ; cela ne prouve pas une équivalence clinique exacte.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR"
    }]
  }],
  "compose" : {
    "include" : [{
      "system" : "http://hl7.org/fhir/sid/icd-10",
      "version" : "2019-covid-expanded",
      "concept" : [{
        "code" : "A04.7",
        "display" : "Enterocolitis due to Clostridium difficile"
      },
      {
        "code" : "A18.8",
        "display" : "Tuberculosis of other specified organs"
      },
      {
        "code" : "A36.8",
        "display" : "Other diphtheria"
      },
      {
        "code" : "A39.5",
        "display" : "Meningococcal heart disease"
      },
      {
        "code" : "A41.9",
        "display" : "Sepsis, unspecified"
      },
      {
        "code" : "A49.9",
        "display" : "Bacterial infection, unspecified"
      },
      {
        "code" : "A52.0",
        "display" : "Cardiovascular syphilis"
      },
      {
        "code" : "B24",
        "display" : "Unspecified human immunodeficiency virus [HIV] disease"
      },
      {
        "code" : "B25.9",
        "display" : "Cytomegaloviral disease, unspecified"
      },
      {
        "code" : "B27.0",
        "display" : "Gammaherpesviral mononucleosis"
      },
      {
        "code" : "B33.0",
        "display" : "Epidemic myalgia"
      },
      {
        "code" : "B33.2",
        "display" : "Viral carditis"
      },
      {
        "code" : "B34.9",
        "display" : "Viral infection, unspecified"
      },
      {
        "code" : "B37.6",
        "display" : "Candidal endocarditis[I39.8]"
      },
      {
        "code" : "B44.9",
        "display" : "Aspergillosis, unspecified"
      },
      {
        "code" : "B48.5",
        "display" : "Pneumocystosis[J17.2]"
      },
      {
        "code" : "B49",
        "display" : "Unspecified mycosis"
      },
      {
        "code" : "B57.2",
        "display" : "Chagas disease (chronic) with heart involvement"
      },
      {
        "code" : "B58.8",
        "display" : "Toxoplasmosis with other organ involvement"
      },
      {
        "code" : "B58.9",
        "display" : "Toxoplasmosis, unspecified"
      },
      {
        "code" : "B99",
        "display" : "Other and unspecified infectious diseases"
      },
      {
        "code" : "C15.9",
        "display" : "Oesophagus, unspecified"
      },
      {
        "code" : "C33",
        "display" : "Malignant neoplasm of trachea"
      },
      {
        "code" : "C34.9",
        "display" : "Bronchus or lung, unspecified"
      },
      {
        "code" : "C38.0",
        "display" : "Heart"
      },
      {
        "code" : "C38.3",
        "display" : "Mediastinum, part unspecified"
      },
      {
        "code" : "C41.3",
        "display" : "Ribs, sternum and clavicle"
      },
      {
        "code" : "C45.2",
        "display" : "Mesothelioma of pericardium"
      },
      {
        "code" : "C73",
        "display" : "Malignant neoplasm of thyroid gland"
      },
      {
        "code" : "C74.9",
        "display" : "Adrenal gland, unspecified"
      },
      {
        "code" : "C78.0",
        "display" : "Secondary malignant neoplasm of lung"
      },
      {
        "code" : "C78.3",
        "display" : "Secondary malignant neoplasm of other and unspecified respiratory organs"
      },
      {
        "code" : "C79.5",
        "display" : "Secondary malignant neoplasm of bone and bone marrow"
      },
      {
        "code" : "C79.8",
        "display" : "Secondary malignant neoplasm of other specified sites"
      },
      {
        "code" : "C80",
        "display" : "Malignant neoplasm, without specification of site"
      },
      {
        "code" : "C88.9",
        "display" : "Malignant immunoproliferative disease, unspecified"
      },
      {
        "code" : "D13.0",
        "display" : "Oesophagus"
      },
      {
        "code" : "D14.3",
        "display" : "Bronchus and lung"
      },
      {
        "code" : "D15.1",
        "display" : "Heart"
      },
      {
        "code" : "D15.2",
        "display" : "Mediastinum"
      },
      {
        "code" : "D15.7",
        "display" : "Other specified intrathoracic organs"
      },
      {
        "code" : "D16.7",
        "display" : "Ribs, sternum and clavicle"
      },
      {
        "code" : "D18.0",
        "display" : "Haemangioma, any site"
      },
      {
        "code" : "D18.1",
        "display" : "Lymphangioma, any site"
      },
      {
        "code" : "D37.7",
        "display" : "Other digestive organs"
      },
      {
        "code" : "D38.1",
        "display" : "Trachea, bronchus and lung"
      },
      {
        "code" : "D44.1",
        "display" : "Adrenal gland"
      },
      {
        "code" : "D48.0",
        "display" : "Bone and articular cartilage"
      },
      {
        "code" : "D48.7",
        "display" : "Other specified sites"
      },
      {
        "code" : "D48.9",
        "display" : "Neoplasm of uncertain or unknown behaviour, unspecified"
      },
      {
        "code" : "D56.1",
        "display" : "Beta thalassaemia"
      },
      {
        "code" : "D57",
        "display" : "Sickle-cell disorders"
      },
      {
        "code" : "D57.0",
        "display" : "Sickle-cell anaemia with crisis"
      },
      {
        "code" : "D57.3",
        "display" : "Sickle-cell trait"
      },
      {
        "code" : "D58.2",
        "display" : "Other haemoglobinopathies"
      },
      {
        "code" : "D59.4",
        "display" : "Other nonautoimmune haemolytic anaemias"
      },
      {
        "code" : "D59.8",
        "display" : "Other acquired haemolytic anaemias"
      },
      {
        "code" : "D64.9",
        "display" : "Anaemia, unspecified"
      },
      {
        "code" : "D65",
        "display" : "Disseminated intravascular coagulation [defibrination syndrome]"
      },
      {
        "code" : "D68.0",
        "display" : "Von Willebrand disease"
      },
      {
        "code" : "D68.3",
        "display" : "Haemorrhagic disorder due to circulating anticoagulants"
      },
      {
        "code" : "D68.8",
        "display" : "Other specified coagulation defects"
      },
      {
        "code" : "D68.9",
        "display" : "Coagulation defect, unspecified"
      },
      {
        "code" : "D69.5",
        "display" : "Secondary thrombocytopenia"
      },
      {
        "code" : "D70",
        "display" : "Agranulocytosis"
      },
      {
        "code" : "D72.9",
        "display" : "Disorder of white blood cells, unspecified"
      },
      {
        "code" : "D74.0",
        "display" : "Congenital methaemoglobinaemia"
      },
      {
        "code" : "D75.9",
        "display" : "Disease of blood and blood-forming organs, unspecified"
      },
      {
        "code" : "D82.1",
        "display" : "Di George syndrome"
      },
      {
        "code" : "D86.8",
        "display" : "Sarcoidosis of other and combined sites"
      },
      {
        "code" : "D86.9",
        "display" : "Sarcoidosis, unspecified"
      },
      {
        "code" : "D89.8",
        "display" : "Other specified disorders involving the immune mechanism, not elsewhere classified"
      },
      {
        "code" : "E03.9",
        "display" : "Hypothyroidism, unspecified"
      },
      {
        "code" : "E05.9",
        "display" : "Thyrotoxicosis, unspecified"
      },
      {
        "code" : "E07.8",
        "display" : "Other specified disorders of thyroid"
      },
      {
        "code" : "E10.9",
        "display" : "Type 1 diabetes mellitus : Without complications"
      },
      {
        "code" : "E11.9",
        "display" : "Type 2 diabetes mellitus : Without complications"
      },
      {
        "code" : "E14",
        "display" : "Unspecified diabetes mellitus"
      },
      {
        "code" : "E16.1",
        "display" : "Other hypoglycaemia"
      },
      {
        "code" : "E22.2",
        "display" : "Syndrome of inappropriate secretion of antidiuretic hormone"
      },
      {
        "code" : "E23.2",
        "display" : "Diabetes insipidus"
      },
      {
        "code" : "E27.5",
        "display" : "Adrenomedullary hyperfunction"
      },
      {
        "code" : "E27.8",
        "display" : "Other specified disorders of adrenal gland"
      },
      {
        "code" : "E34.0",
        "display" : "Carcinoid syndrome"
      },
      {
        "code" : "E34.3",
        "display" : "Short stature, not elsewhere classified"
      },
      {
        "code" : "E34.8",
        "display" : "Other specified endocrine disorders"
      },
      {
        "code" : "E46",
        "display" : "Unspecified protein-energy malnutrition"
      },
      {
        "code" : "E51.1",
        "display" : "Beriberi"
      },
      {
        "code" : "E61.1",
        "display" : "Iron deficiency"
      },
      {
        "code" : "E63.9",
        "display" : "Nutritional deficiency, unspecified"
      },
      {
        "code" : "E64.0",
        "display" : "Sequelae of protein-energy malnutrition"
      },
      {
        "code" : "E64.8",
        "display" : "Sequelae of other nutritional deficiencies"
      },
      {
        "code" : "E66.8",
        "display" : "Other obesity"
      },
      {
        "code" : "E66.9",
        "display" : "Obesity, unspecified"
      },
      {
        "code" : "E72.0",
        "display" : "Disorders of amino-acid transport"
      },
      {
        "code" : "E72.1",
        "display" : "Disorders of sulfur-bearing amino-acid metabolism"
      },
      {
        "code" : "E74.0",
        "display" : "Glycogen storage disease"
      },
      {
        "code" : "E75.2",
        "display" : "Other sphingolipidosis"
      },
      {
        "code" : "E76.0",
        "display" : "Mucopolysaccharidosis, type I"
      },
      {
        "code" : "E76.1",
        "display" : "Mucopolysaccharidosis, type II"
      },
      {
        "code" : "E76.2",
        "display" : "Other mucopolysaccharidoses"
      },
      {
        "code" : "E76.3",
        "display" : "Mucopolysaccharidosis, unspecified"
      },
      {
        "code" : "E77.0",
        "display" : "Defects in post-translational modification of lysosomal enzymes"
      },
      {
        "code" : "E77.1",
        "display" : "Defects in glycoprotein degradation"
      },
      {
        "code" : "E77.8",
        "display" : "Other disorders of glycoprotein metabolism"
      },
      {
        "code" : "E78.0",
        "display" : "Pure hypercholesterolaemia"
      },
      {
        "code" : "E78.3",
        "display" : "Hyperchylomicronaemia"
      },
      {
        "code" : "E78.4",
        "display" : "Other hyperlipidaemia"
      },
      {
        "code" : "E78.8",
        "display" : "Other disorders of lipoprotein metabolism"
      },
      {
        "code" : "E78.9",
        "display" : "Disorder of lipoprotein metabolism, unspecified"
      },
      {
        "code" : "E83.1",
        "display" : "Disorders of iron metabolism"
      },
      {
        "code" : "E84.9",
        "display" : "Cystic fibrosis, unspecified"
      },
      {
        "code" : "E85.9",
        "display" : "Amyloidosis, unspecified"
      },
      {
        "code" : "E87.2",
        "display" : "Acidosis"
      },
      {
        "code" : "E87.8",
        "display" : "Other disorders of electrolyte and fluid balance, not elsewhere classified"
      },
      {
        "code" : "E88.0",
        "display" : "Disorders of plasma-protein metabolism, not elsewhere classified"
      },
      {
        "code" : "E88.9",
        "display" : "Metabolic disorder, unspecified"
      },
      {
        "code" : "E89.0",
        "display" : "Postprocedural hypothyroidism"
      },
      {
        "code" : "E89.1",
        "display" : "Postprocedural hypoinsulinaemia"
      },
      {
        "code" : "E89.6",
        "display" : "Postprocedural adrenocortical(-medullary) hypofunction"
      },
      {
        "code" : "E89.9",
        "display" : "Postprocedural endocrine and metabolic disorder, unspecified"
      },
      {
        "code" : "F05.9",
        "display" : "Delirium, unspecified"
      },
      {
        "code" : "F10.9",
        "display" : "Mental and behavioural disorders due to use of alcohol : Unspecified mental and behavioural disorder"
      },
      {
        "code" : "F20.9",
        "display" : "Schizophrenia, unspecified"
      },
      {
        "code" : "F32.9",
        "display" : "Depressive episode, unspecified"
      },
      {
        "code" : "F39",
        "display" : "Unspecified mood [affective] disorder"
      },
      {
        "code" : "F40.2",
        "display" : "Specific (isolated) phobias"
      },
      {
        "code" : "F41.9",
        "display" : "Anxiety disorder, unspecified"
      },
      {
        "code" : "F43.0",
        "display" : "Acute stress reaction"
      },
      {
        "code" : "F45.3",
        "display" : "Somatoform autonomic dysfunction"
      },
      {
        "code" : "F45.4",
        "display" : "Persistent somatoform pain disorder"
      },
      {
        "code" : "F48.8",
        "display" : "Other specified neurotic disorders"
      },
      {
        "code" : "F50.0",
        "display" : "Anorexia nervosa"
      },
      {
        "code" : "F79",
        "display" : "Unspecified mental retardation"
      },
      {
        "code" : "F84.0",
        "display" : "Childhood autism"
      },
      {
        "code" : "F90.0",
        "display" : "Disturbance of activity and attention"
      },
      {
        "code" : "F99",
        "display" : "Mental disorder, not otherwise specified"
      },
      {
        "code" : "G03.9",
        "display" : "Meningitis, unspecified"
      },
      {
        "code" : "G04.9",
        "display" : "Encephalitis, myelitis and encephalomyelitis, unspecified"
      },
      {
        "code" : "G06.0",
        "display" : "Intracranial abscess and granuloma"
      },
      {
        "code" : "G11.1",
        "display" : "Early-onset cerebellar ataxia"
      },
      {
        "code" : "G12.1",
        "display" : "Other inherited spinal muscular atrophy"
      },
      {
        "code" : "G23.8",
        "display" : "Other specified degenerative diseases of basal ganglia"
      },
      {
        "code" : "G25.5",
        "display" : "Other chorea"
      },
      {
        "code" : "G40.0",
        "display" : "Localization-related (focal)(partial) idiopathic epilepsy and epileptic syndromes with seizures of localized onset"
      },
      {
        "code" : "G40.3",
        "display" : "Generalized idiopathic epilepsy and epileptic syndromes"
      },
      {
        "code" : "G40.9",
        "display" : "Epilepsy, unspecified"
      },
      {
        "code" : "G43.3",
        "display" : "Complicated migraine"
      },
      {
        "code" : "G43.9",
        "display" : "Migraine, unspecified"
      },
      {
        "code" : "G45.0",
        "display" : "Vertebro-basilar artery syndrome"
      },
      {
        "code" : "G45.8",
        "display" : "Other transient cerebral ischaemic attacks and related syndromes"
      },
      {
        "code" : "G45.9",
        "display" : "Transient cerebral ischaemic attack, unspecified"
      },
      {
        "code" : "G47.3",
        "display" : "Sleep apnoea"
      },
      {
        "code" : "G52.2",
        "display" : "Disorders of vagus nerve"
      },
      {
        "code" : "G54.0",
        "display" : "Brachial plexus disorders"
      },
      {
        "code" : "G56.0",
        "display" : "Carpal tunnel syndrome"
      },
      {
        "code" : "G60.1",
        "display" : "Refsum disease"
      },
      {
        "code" : "G62.8",
        "display" : "Other specified polyneuropathies"
      },
      {
        "code" : "G70.0",
        "display" : "Myasthenia gravis"
      },
      {
        "code" : "G71.0",
        "display" : "Muscular dystrophy"
      },
      {
        "code" : "G71.1",
        "display" : "Myotonic disorders"
      },
      {
        "code" : "G71.2",
        "display" : "Congenital myopathies"
      },
      {
        "code" : "G71.3",
        "display" : "Mitochondrial myopathy, not elsewhere classified"
      },
      {
        "code" : "G81.9",
        "display" : "Hemiplegia, unspecified"
      },
      {
        "code" : "G82.2",
        "display" : "Paraplegia, unspecified"
      },
      {
        "code" : "G82.5",
        "display" : "Tetraplegia, unspecified"
      },
      {
        "code" : "G83.9",
        "display" : "Paralytic syndrome, unspecified"
      },
      {
        "code" : "G90.0",
        "display" : "Idiopathic peripheral autonomic neuropathy"
      },
      {
        "code" : "G90.1",
        "display" : "Familial dysautonomia [Riley-Day]"
      },
      {
        "code" : "G90.2",
        "display" : "Horner syndrome"
      },
      {
        "code" : "G91",
        "display" : "Hydrocephalus"
      },
      {
        "code" : "G93.1",
        "display" : "Anoxic brain damage, not elsewhere classified"
      },
      {
        "code" : "G93.3",
        "display" : "Postviral fatigue syndrome"
      },
      {
        "code" : "G93.4",
        "display" : "Encephalopathy, unspecified"
      },
      {
        "code" : "G93.6",
        "display" : "Cerebral oedema"
      },
      {
        "code" : "G93.8",
        "display" : "Other specified disorders of brain"
      },
      {
        "code" : "G93.9",
        "display" : "Disorder of brain, unspecified"
      },
      {
        "code" : "G95.1",
        "display" : "Vascular myelopathies"
      },
      {
        "code" : "G97.8",
        "display" : "Other postprocedural disorders of nervous system"
      },
      {
        "code" : "G97.9",
        "display" : "Postprocedural disorder of nervous system, unspecified"
      },
      {
        "code" : "H27.1",
        "display" : "Dislocation of lens"
      },
      {
        "code" : "H49.8",
        "display" : "Other paralytic strabismus"
      },
      {
        "code" : "H53.9",
        "display" : "Visual disturbance, unspecified"
      },
      {
        "code" : "H54.0",
        "display" : "Blindness, binocular"
      },
      {
        "code" : "H91.9",
        "display" : "Hearing loss, unspecified"
      },
      {
        "code" : "I00",
        "display" : "Rheumatic fever without mention of heart involvement"
      },
      {
        "code" : "I01",
        "display" : "Rheumatic fever with heart involvement"
      },
      {
        "code" : "I01.0",
        "display" : "Acute rheumatic pericarditis"
      },
      {
        "code" : "I01.1",
        "display" : "Acute rheumatic endocarditis"
      },
      {
        "code" : "I01.2",
        "display" : "Acute rheumatic myocarditis"
      },
      {
        "code" : "I01.8",
        "display" : "Other acute rheumatic heart disease"
      },
      {
        "code" : "I02",
        "display" : "Rheumatic chorea"
      },
      {
        "code" : "I05.0",
        "display" : "Mitral stenosis"
      },
      {
        "code" : "I05.1",
        "display" : "Rheumatic mitral insufficiency"
      },
      {
        "code" : "I05.9",
        "display" : "Mitral valve disease, unspecified"
      },
      {
        "code" : "I06.0",
        "display" : "Rheumatic aortic stenosis"
      },
      {
        "code" : "I06.1",
        "display" : "Rheumatic aortic insufficiency"
      },
      {
        "code" : "I06.9",
        "display" : "Rheumatic aortic valve disease, unspecified"
      },
      {
        "code" : "I07.0",
        "display" : "Tricuspid stenosis"
      },
      {
        "code" : "I07.1",
        "display" : "Tricuspid insufficiency"
      },
      {
        "code" : "I07.9",
        "display" : "Tricuspid valve disease, unspecified"
      },
      {
        "code" : "I09.0",
        "display" : "Rheumatic myocarditis"
      },
      {
        "code" : "I09.1",
        "display" : "Rheumatic diseases of endocardium, valve unspecified"
      },
      {
        "code" : "I09.2",
        "display" : "Chronic rheumatic pericarditis"
      },
      {
        "code" : "I09.8",
        "display" : "Other specified rheumatic heart diseases"
      },
      {
        "code" : "I09.9",
        "display" : "Rheumatic heart disease, unspecified"
      },
      {
        "code" : "I10",
        "display" : "Essential (primary) hypertension"
      },
      {
        "code" : "I11.0",
        "display" : "Hypertensive heart disease with (congestive) heart failure"
      },
      {
        "code" : "I11.9",
        "display" : "Hypertensive heart disease without (congestive) heart failure"
      },
      {
        "code" : "I15.0",
        "display" : "Renovascular hypertension"
      },
      {
        "code" : "I15.1",
        "display" : "Hypertension secondary to other renal disorders"
      },
      {
        "code" : "I15.2",
        "display" : "Hypertension secondary to endocrine disorders"
      },
      {
        "code" : "I15.8",
        "display" : "Other secondary hypertension"
      },
      {
        "code" : "I15.9",
        "display" : "Secondary hypertension, unspecified"
      },
      {
        "code" : "I20.0",
        "display" : "Unstable angina"
      },
      {
        "code" : "I20.1",
        "display" : "Angina pectoris with documented spasm"
      },
      {
        "code" : "I20.8",
        "display" : "Other forms of angina pectoris"
      },
      {
        "code" : "I20.9",
        "display" : "Angina pectoris, unspecified"
      },
      {
        "code" : "I21",
        "display" : "Acute myocardial infarction"
      },
      {
        "code" : "I21.0",
        "display" : "Acute transmural myocardial infarction of anterior wall"
      },
      {
        "code" : "I21.1",
        "display" : "Acute transmural myocardial infarction of inferior wall"
      },
      {
        "code" : "I21.2",
        "display" : "Acute transmural myocardial infarction of other sites"
      },
      {
        "code" : "I21.3",
        "display" : "Acute transmural myocardial infarction of unspecified site"
      },
      {
        "code" : "I21.9",
        "display" : "Acute myocardial infarction, unspecified"
      },
      {
        "code" : "I23.0",
        "display" : "Haemopericardium as current complication following acute myocardial infarction"
      },
      {
        "code" : "I23.2",
        "display" : "Ventricular septal defect as current complication following acute myocardial infarction"
      },
      {
        "code" : "I23.3",
        "display" : "Rupture of cardiac wall without haemopericardium as current complication following acute myocardial infarction"
      },
      {
        "code" : "I23.6",
        "display" : "Thrombosis of atrium, auricular appendage, and ventricle as current complications following acute myocardial infarction"
      },
      {
        "code" : "I23.8",
        "display" : "Other current complications following acute myocardial infarction"
      },
      {
        "code" : "I24.0",
        "display" : "Coronary thrombosis not resulting in myocardial infarction"
      },
      {
        "code" : "I24.1",
        "display" : "Dressler syndrome"
      },
      {
        "code" : "I24.8",
        "display" : "Other forms of acute ischaemic heart disease"
      },
      {
        "code" : "I25.1",
        "display" : "Atherosclerotic heart disease"
      },
      {
        "code" : "I25.2",
        "display" : "Old myocardial infarction"
      },
      {
        "code" : "I25.3",
        "display" : "Aneurysm of heart"
      },
      {
        "code" : "I25.4",
        "display" : "Coronary artery aneurysm and dissection"
      },
      {
        "code" : "I25.5",
        "display" : "Ischaemic cardiomyopathy"
      },
      {
        "code" : "I25.6",
        "display" : "Silent myocardial ischaemia"
      },
      {
        "code" : "I25.8",
        "display" : "Other forms of chronic ischaemic heart disease"
      },
      {
        "code" : "I25.9",
        "display" : "Chronic ischaemic heart disease, unspecified"
      },
      {
        "code" : "I26.0",
        "display" : "Pulmonary embolism with mention of acute cor pulmonale"
      },
      {
        "code" : "I26.9",
        "display" : "Pulmonary embolism without mention of acute cor pulmonale"
      },
      {
        "code" : "I27.0",
        "display" : "Primary pulmonary hypertension"
      },
      {
        "code" : "I27.1",
        "display" : "Kyphoscoliotic heart disease"
      },
      {
        "code" : "I27.8",
        "display" : "Other specified pulmonary heart diseases"
      },
      {
        "code" : "I27.9",
        "display" : "Pulmonary heart disease, unspecified"
      },
      {
        "code" : "I28.0",
        "display" : "Arteriovenous fistula of pulmonary vessels"
      },
      {
        "code" : "I28.1",
        "display" : "Aneurysm of pulmonary artery"
      },
      {
        "code" : "I28.8",
        "display" : "Other specified diseases of pulmonary vessels"
      },
      {
        "code" : "I28.9",
        "display" : "Disease of pulmonary vessels, unspecified"
      },
      {
        "code" : "I30.0",
        "display" : "Acute nonspecific idiopathic pericarditis"
      },
      {
        "code" : "I30.1",
        "display" : "Infective pericarditis"
      },
      {
        "code" : "I30.8",
        "display" : "Other forms of acute pericarditis"
      },
      {
        "code" : "I30.9",
        "display" : "Acute pericarditis, unspecified"
      },
      {
        "code" : "I31.0",
        "display" : "Chronic adhesive pericarditis"
      },
      {
        "code" : "I31.1",
        "display" : "Chronic constrictive pericarditis"
      },
      {
        "code" : "I31.2",
        "display" : "Haemopericardium, not elsewhere classified"
      },
      {
        "code" : "I31.3",
        "display" : "Pericardial effusion (noninflammatory)"
      },
      {
        "code" : "I31.8",
        "display" : "Other specified diseases of pericardium"
      },
      {
        "code" : "I31.9",
        "display" : "Disease of pericardium, unspecified"
      },
      {
        "code" : "I32.1",
        "display" : "Pericarditis in other infectious and parasitic diseases classified elsewhere"
      },
      {
        "code" : "I32.8",
        "display" : "Pericarditis in other diseases classified elsewhere"
      },
      {
        "code" : "I33.0",
        "display" : "Acute and subacute infective endocarditis"
      },
      {
        "code" : "I33.9",
        "display" : "Acute endocarditis, unspecified"
      },
      {
        "code" : "I34.0",
        "display" : "Mitral (valve) insufficiency"
      },
      {
        "code" : "I34.1",
        "display" : "Mitral (valve) prolapse"
      },
      {
        "code" : "I34.2",
        "display" : "Nonrheumatic mitral (valve) stenosis"
      },
      {
        "code" : "I34.8",
        "display" : "Other nonrheumatic mitral valve disorders"
      },
      {
        "code" : "I34.9",
        "display" : "Nonrheumatic mitral valve disorder, unspecified"
      },
      {
        "code" : "I35.0",
        "display" : "Aortic (valve) stenosis"
      },
      {
        "code" : "I35.1",
        "display" : "Aortic (valve) insufficiency"
      },
      {
        "code" : "I35.8",
        "display" : "Other aortic valve disorders"
      },
      {
        "code" : "I35.9",
        "display" : "Aortic valve disorder, unspecified"
      },
      {
        "code" : "I36.0",
        "display" : "Nonrheumatic tricuspid (valve) stenosis"
      },
      {
        "code" : "I36.1",
        "display" : "Nonrheumatic tricuspid (valve) insufficiency"
      },
      {
        "code" : "I36.8",
        "display" : "Other nonrheumatic tricuspid valve disorders"
      },
      {
        "code" : "I36.9",
        "display" : "Nonrheumatic tricuspid valve disorder, unspecified"
      },
      {
        "code" : "I37.0",
        "display" : "Pulmonary valve stenosis"
      },
      {
        "code" : "I37.1",
        "display" : "Pulmonary valve insufficiency"
      },
      {
        "code" : "I37.8",
        "display" : "Other pulmonary valve disorders"
      },
      {
        "code" : "I37.9",
        "display" : "Pulmonary valve disorder, unspecified"
      },
      {
        "code" : "I38",
        "display" : "Endocarditis, valve unspecified"
      },
      {
        "code" : "I39.8",
        "display" : "Endocarditis, valve unspecified, in diseases classified elsewhere"
      },
      {
        "code" : "I40.0",
        "display" : "Infective myocarditis"
      },
      {
        "code" : "I40.1",
        "display" : "Isolated myocarditis"
      },
      {
        "code" : "I40.8",
        "display" : "Other acute myocarditis"
      },
      {
        "code" : "I40.9",
        "display" : "Acute myocarditis, unspecified"
      },
      {
        "code" : "I41.0",
        "display" : "Myocarditis in bacterial diseases classified elsewhere"
      },
      {
        "code" : "I41.1",
        "display" : "Myocarditis in viral diseases classified elsewhere"
      },
      {
        "code" : "I41.2",
        "display" : "Myocarditis in other infectious and parasitic diseases classified elsewhere"
      },
      {
        "code" : "I42.0",
        "display" : "Dilated cardiomyopathy"
      },
      {
        "code" : "I42.1",
        "display" : "Obstructive hypertrophic cardiomyopathy"
      },
      {
        "code" : "I42.2",
        "display" : "Other hypertrophic cardiomyopathy"
      },
      {
        "code" : "I42.3",
        "display" : "Endomyocardial (eosinophilic) disease"
      },
      {
        "code" : "I42.4",
        "display" : "Endocardial fibroelastosis"
      },
      {
        "code" : "I42.5",
        "display" : "Other restrictive cardiomyopathy"
      },
      {
        "code" : "I42.6",
        "display" : "Alcoholic cardiomyopathy"
      },
      {
        "code" : "I42.7",
        "display" : "Cardiomyopathy due to drugs and other external agents"
      },
      {
        "code" : "I42.8",
        "display" : "Other cardiomyopathies"
      },
      {
        "code" : "I42.9",
        "display" : "Cardiomyopathy, unspecified"
      },
      {
        "code" : "I43.1",
        "display" : "Cardiomyopathy in metabolic diseases"
      },
      {
        "code" : "I43.8",
        "display" : "Cardiomyopathy in other diseases classified elsewhere"
      },
      {
        "code" : "I44.0",
        "display" : "Atrioventricular block, first degree"
      },
      {
        "code" : "I44.1",
        "display" : "Atrioventricular block, second degree"
      },
      {
        "code" : "I44.2",
        "display" : "Atrioventricular block, complete"
      },
      {
        "code" : "I44.3",
        "display" : "Other and unspecified atrioventricular block"
      },
      {
        "code" : "I44.4",
        "display" : "Left anterior fascicular block"
      },
      {
        "code" : "I44.5",
        "display" : "Left posterior fascicular block"
      },
      {
        "code" : "I44.6",
        "display" : "Other and unspecified fascicular block"
      },
      {
        "code" : "I44.7",
        "display" : "Left bundle-branch block, unspecified"
      },
      {
        "code" : "I45.0",
        "display" : "Right fascicular block"
      },
      {
        "code" : "I45.1",
        "display" : "Other and unspecified right bundle-branch block"
      },
      {
        "code" : "I45.3",
        "display" : "Trifascicular block"
      },
      {
        "code" : "I45.4",
        "display" : "Nonspecific intraventricular block"
      },
      {
        "code" : "I45.5",
        "display" : "Other specified heart block"
      },
      {
        "code" : "I45.6",
        "display" : "Pre-excitation syndrome"
      },
      {
        "code" : "I45.8",
        "display" : "Other specified conduction disorders"
      },
      {
        "code" : "I45.9",
        "display" : "Conduction disorder, unspecified"
      },
      {
        "code" : "I46.1",
        "display" : "Sudden cardiac death, so described"
      },
      {
        "code" : "I46.9",
        "display" : "Cardiac arrest, unspecified"
      },
      {
        "code" : "I47.1",
        "display" : "Supraventricular tachycardia"
      },
      {
        "code" : "I47.2",
        "display" : "Ventricular tachycardia"
      },
      {
        "code" : "I47.9",
        "display" : "Paroxysmal tachycardia, unspecified"
      },
      {
        "code" : "I48",
        "display" : "Atrial fibrillation and flutter"
      },
      {
        "code" : "I49.0",
        "display" : "Ventricular fibrillation and flutter"
      },
      {
        "code" : "I49.1",
        "display" : "Atrial premature depolarization"
      },
      {
        "code" : "I49.2",
        "display" : "Junctional premature depolarization"
      },
      {
        "code" : "I49.3",
        "display" : "Ventricular premature depolarization"
      },
      {
        "code" : "I49.5",
        "display" : "Sick sinus syndrome"
      },
      {
        "code" : "I49.8",
        "display" : "Other specified cardiac arrhythmias"
      },
      {
        "code" : "I49.9",
        "display" : "Cardiac arrhythmia, unspecified"
      },
      {
        "code" : "I50.0",
        "display" : "Congestive heart failure"
      },
      {
        "code" : "I50.1",
        "display" : "Left ventricular failure"
      },
      {
        "code" : "I50.9",
        "display" : "Heart failure, unspecified"
      },
      {
        "code" : "I51.0",
        "display" : "Cardiac septal defect, acquired"
      },
      {
        "code" : "I51.1",
        "display" : "Rupture of chordae tendineae, not elsewhere classified"
      },
      {
        "code" : "I51.2",
        "display" : "Rupture of papillary muscle, not elsewhere classified"
      },
      {
        "code" : "I51.3",
        "display" : "Intracardiac thrombosis, not elsewhere classified"
      },
      {
        "code" : "I51.4",
        "display" : "Myocarditis, unspecified"
      },
      {
        "code" : "I51.5",
        "display" : "Myocardial degeneration"
      },
      {
        "code" : "I51.7",
        "display" : "Cardiomegaly"
      },
      {
        "code" : "I51.8",
        "display" : "Other ill-defined heart diseases"
      },
      {
        "code" : "I52.8",
        "display" : "Other heart disorders in other diseases classified elsewhere"
      },
      {
        "code" : "I60.7",
        "display" : "Subarachnoid haemorrhage from intracranial artery, unspecified"
      },
      {
        "code" : "I60.9",
        "display" : "Subarachnoid haemorrhage, unspecified"
      },
      {
        "code" : "I61.5",
        "display" : "Intracerebral haemorrhage, intraventricular"
      },
      {
        "code" : "I61.9",
        "display" : "Intracerebral haemorrhage, unspecified"
      },
      {
        "code" : "I63.9",
        "display" : "Cerebral infarction, unspecified"
      },
      {
        "code" : "I64",
        "display" : "Stroke, not specified as haemorrhage or infarction"
      },
      {
        "code" : "I65.2",
        "display" : "Occlusion and stenosis of carotid artery"
      },
      {
        "code" : "I65.8",
        "display" : "Occlusion and stenosis of other precerebral artery"
      },
      {
        "code" : "I66.9",
        "display" : "Occlusion and stenosis of unspecified cerebral artery"
      },
      {
        "code" : "I67.1",
        "display" : "Cerebral aneurysm, nonruptured"
      },
      {
        "code" : "I67.2",
        "display" : "Cerebral atherosclerosis"
      },
      {
        "code" : "I67.4",
        "display" : "Hypertensive encephalopathy"
      },
      {
        "code" : "I67.5",
        "display" : "Moyamoya disease"
      },
      {
        "code" : "I67.8",
        "display" : "Other specified cerebrovascular diseases"
      },
      {
        "code" : "I67.9",
        "display" : "Cerebrovascular disease, unspecified"
      },
      {
        "code" : "I70.0",
        "display" : "Atherosclerosis of aorta"
      },
      {
        "code" : "I70.2",
        "display" : "Atherosclerosis of arteries of extremities"
      },
      {
        "code" : "I70.9",
        "display" : "Generalized and unspecified atherosclerosis"
      },
      {
        "code" : "I71.0",
        "display" : "Dissection of aorta [any part]"
      },
      {
        "code" : "I71.1",
        "display" : "Thoracic aortic aneurysm, ruptured"
      },
      {
        "code" : "I71.2",
        "display" : "Thoracic aortic aneurysm, without mention of rupture"
      },
      {
        "code" : "I71.4",
        "display" : "Abdominal aortic aneurysm, without mention of rupture"
      },
      {
        "code" : "I71.5",
        "display" : "Thoracoabdominal aortic aneurysm, ruptured"
      },
      {
        "code" : "I71.9",
        "display" : "Aortic aneurysm of unspecified site, without mention of rupture"
      },
      {
        "code" : "I72.0",
        "display" : "Aneurysm and dissection of carotid artery"
      },
      {
        "code" : "I72.1",
        "display" : "Aneurysm and dissection of artery of upper extremity"
      },
      {
        "code" : "I72.8",
        "display" : "Aneurysm and dissection of other specified arteries"
      },
      {
        "code" : "I72.9",
        "display" : "Aneurysm and dissection of unspecified site"
      },
      {
        "code" : "I73.0",
        "display" : "Raynaud syndrome"
      },
      {
        "code" : "I73.1",
        "display" : "Thromboangiitis obliterans [Buerger]"
      },
      {
        "code" : "I73.8",
        "display" : "Other specified peripheral vascular diseases"
      },
      {
        "code" : "I73.9",
        "display" : "Peripheral vascular disease, unspecified"
      },
      {
        "code" : "I74.1",
        "display" : "Embolism and thrombosis of other and unspecified parts of aorta"
      },
      {
        "code" : "I74.9",
        "display" : "Embolism and thrombosis of unspecified artery"
      },
      {
        "code" : "I77.1",
        "display" : "Stricture of artery"
      },
      {
        "code" : "I77.2",
        "display" : "Rupture of artery"
      },
      {
        "code" : "I77.6",
        "display" : "Arteritis, unspecified"
      },
      {
        "code" : "I77.8",
        "display" : "Other specified disorders of arteries and arterioles"
      },
      {
        "code" : "I78.0",
        "display" : "Hereditary haemorrhagic telangiectasia"
      },
      {
        "code" : "I79.0",
        "display" : "Aneurysm of aorta in diseases classified elsewhere"
      },
      {
        "code" : "I80.2",
        "display" : "Phlebitis and thrombophlebitis of other deep vessels of lower extremities"
      },
      {
        "code" : "I82.0",
        "display" : "Budd-Chiari syndrome"
      },
      {
        "code" : "I82.2",
        "display" : "Embolism and thrombosis of vena cava"
      },
      {
        "code" : "I82.9",
        "display" : "Embolism and thrombosis of unspecified vein"
      },
      {
        "code" : "I87.1",
        "display" : "Compression of vein"
      },
      {
        "code" : "I87.8",
        "display" : "Other specified disorders of veins"
      },
      {
        "code" : "I87.9",
        "display" : "Disorder of vein, unspecified"
      },
      {
        "code" : "I89.8",
        "display" : "Other specified noninfective disorders of lymphatic vessels and lymph nodes"
      },
      {
        "code" : "I95.0",
        "display" : "Idiopathic hypotension"
      },
      {
        "code" : "I95.1",
        "display" : "Orthostatic hypotension"
      },
      {
        "code" : "I95.2",
        "display" : "Hypotension due to drugs"
      },
      {
        "code" : "I95.8",
        "display" : "Other hypotension"
      },
      {
        "code" : "I95.9",
        "display" : "Hypotension, unspecified"
      },
      {
        "code" : "I97.0",
        "display" : "Postcardiotomy syndrome"
      },
      {
        "code" : "I97.1",
        "display" : "Other functional disturbances following cardiac surgery"
      },
      {
        "code" : "I97.8",
        "display" : "Other postprocedural disorders of circulatory system, not elsewhere classified"
      },
      {
        "code" : "I97.9",
        "display" : "Postprocedural disorder of circulatory system, unspecified"
      },
      {
        "code" : "I99",
        "display" : "Other and unspecified disorders of circulatory system"
      },
      {
        "code" : "J10.8",
        "display" : "Influenza with other manifestations, seasonal influenza virus identified"
      },
      {
        "code" : "J12.1",
        "display" : "Respiratory syncytial virus pneumonia"
      },
      {
        "code" : "J12.9",
        "display" : "Viral pneumonia, unspecified"
      },
      {
        "code" : "J15.9",
        "display" : "Bacterial pneumonia, unspecified"
      },
      {
        "code" : "J18.9",
        "display" : "Pneumonia, unspecified"
      },
      {
        "code" : "J22",
        "display" : "Unspecified acute lower respiratory infection"
      },
      {
        "code" : "J38.5",
        "display" : "Laryngeal spasm"
      },
      {
        "code" : "J38.6",
        "display" : "Stenosis of larynx"
      },
      {
        "code" : "J39.8",
        "display" : "Other specified diseases of upper respiratory tract"
      },
      {
        "code" : "J42",
        "display" : "Unspecified chronic bronchitis"
      },
      {
        "code" : "J43",
        "display" : "Emphysema"
      },
      {
        "code" : "J44.8",
        "display" : "Other specified chronic obstructive pulmonary disease"
      },
      {
        "code" : "J44.9",
        "display" : "Chronic obstructive pulmonary disease, unspecified"
      },
      {
        "code" : "J45.9",
        "display" : "Asthma, unspecified"
      },
      {
        "code" : "J69.0",
        "display" : "Pneumonitis due to food and vomit"
      },
      {
        "code" : "J80",
        "display" : "Adult respiratory distress syndrome"
      },
      {
        "code" : "J81",
        "display" : "Pulmonary oedema"
      },
      {
        "code" : "J84.8",
        "display" : "Other specified interstitial pulmonary diseases"
      },
      {
        "code" : "J84.9",
        "display" : "Interstitial pulmonary disease, unspecified"
      },
      {
        "code" : "J86",
        "display" : "Pyothorax"
      },
      {
        "code" : "J86.0",
        "display" : "Pyothorax with fistula"
      },
      {
        "code" : "J90",
        "display" : "Pleural effusion, not elsewhere classified"
      },
      {
        "code" : "J93.1",
        "display" : "Other spontaneous pneumothorax"
      },
      {
        "code" : "J93.9",
        "display" : "Pneumothorax, unspecified"
      },
      {
        "code" : "J94.0",
        "display" : "Chylous effusion"
      },
      {
        "code" : "J94.9",
        "display" : "Pleural condition, unspecified"
      },
      {
        "code" : "J95.0",
        "display" : "Tracheostomy malfunction"
      },
      {
        "code" : "J95.1",
        "display" : "Acute pulmonary insufficiency following thoracic surgery"
      },
      {
        "code" : "J95.3",
        "display" : "Chronic pulmonary insufficiency following surgery"
      },
      {
        "code" : "J95.5",
        "display" : "Postprocedural subglottic stenosis"
      },
      {
        "code" : "J95.8",
        "display" : "Other postprocedural respiratory disorders"
      },
      {
        "code" : "J95.9",
        "display" : "Postprocedural respiratory disorder, unspecified"
      },
      {
        "code" : "J96.0",
        "display" : "Acute respiratory failure"
      },
      {
        "code" : "J96.1",
        "display" : "Chronic respiratory failure"
      },
      {
        "code" : "J96.9",
        "display" : "Respiratory failure, unspecified"
      },
      {
        "code" : "J98.0",
        "display" : "Diseases of bronchus, not elsewhere classified"
      },
      {
        "code" : "J98.1",
        "display" : "Pulmonary collapse"
      },
      {
        "code" : "J98.4",
        "display" : "Other disorders of lung"
      },
      {
        "code" : "J98.5",
        "display" : "Diseases of mediastinum, not elsewhere classified"
      },
      {
        "code" : "J98.6",
        "display" : "Disorders of diaphragm"
      },
      {
        "code" : "J98.8",
        "display" : "Other specified respiratory disorders"
      },
      {
        "code" : "J98.9",
        "display" : "Respiratory disorder, unspecified"
      },
      {
        "code" : "K07.0",
        "display" : "Major anomalies of jaw size"
      },
      {
        "code" : "K20",
        "display" : "Oesophagitis"
      },
      {
        "code" : "K21.9",
        "display" : "Gastro-oesophageal reflux disease without oesophagitis"
      },
      {
        "code" : "K22.0",
        "display" : "Achalasia of cardia"
      },
      {
        "code" : "K22.1",
        "display" : "Ulcer of oesophagus"
      },
      {
        "code" : "K22.2",
        "display" : "Oesophageal obstruction"
      },
      {
        "code" : "K22.3",
        "display" : "Perforation of oesophagus"
      },
      {
        "code" : "K22.5",
        "display" : "Diverticulum of oesophagus, acquired"
      },
      {
        "code" : "K22.8",
        "display" : "Other specified diseases of oesophagus"
      },
      {
        "code" : "K22.9",
        "display" : "Disease of oesophagus, unspecified"
      },
      {
        "code" : "K29.1",
        "display" : "Other acute gastritis"
      },
      {
        "code" : "K43.9",
        "display" : "Other and unspecified ventral hernia without obstruction or gangrene"
      },
      {
        "code" : "K44.9",
        "display" : "Diaphragmatic hernia without obstruction or gangrene"
      },
      {
        "code" : "K45.8",
        "display" : "Other specified abdominal hernia without obstruction or gangrene"
      },
      {
        "code" : "K52.0",
        "display" : "Gastroenteritis and colitis due to radiation"
      },
      {
        "code" : "K52.9",
        "display" : "Noninfective gastroenteritis and colitis, unspecified"
      },
      {
        "code" : "K55.0",
        "display" : "Acute vascular disorders of intestine"
      },
      {
        "code" : "K56.0",
        "display" : "Paralytic ileus"
      },
      {
        "code" : "K65.0",
        "display" : "Acute peritonitis"
      },
      {
        "code" : "K72.0",
        "display" : "Acute and subacute hepatic failure"
      },
      {
        "code" : "K72.9",
        "display" : "Hepatic failure, unspecified"
      },
      {
        "code" : "K74.0",
        "display" : "Hepatic fibrosis"
      },
      {
        "code" : "K74.6",
        "display" : "Other and unspecified cirrhosis of liver"
      },
      {
        "code" : "K76.1",
        "display" : "Chronic passive congestion of liver"
      },
      {
        "code" : "K76.8",
        "display" : "Other specified diseases of liver"
      },
      {
        "code" : "K81.0",
        "display" : "Acute cholecystitis"
      },
      {
        "code" : "K85",
        "display" : "Acute pancreatitis"
      },
      {
        "code" : "K90.4",
        "display" : "Malabsorption due to intolerance, not elsewhere classified"
      },
      {
        "code" : "K91.3",
        "display" : "Postoperative intestinal obstruction"
      },
      {
        "code" : "K91.8",
        "display" : "Other postprocedural disorders of digestive system, not elsewhere classified"
      },
      {
        "code" : "K91.9",
        "display" : "Postprocedural disorder of digestive system, unspecified"
      },
      {
        "code" : "K92.2",
        "display" : "Gastrointestinal haemorrhage, unspecified"
      },
      {
        "code" : "L02.2",
        "display" : "Cutaneous abscess, furuncle and carbuncle of trunk"
      },
      {
        "code" : "L02.9",
        "display" : "Cutaneous abscess, furuncle and carbuncle, unspecified"
      },
      {
        "code" : "L65.9",
        "display" : "Nonscarring hair loss, unspecified"
      },
      {
        "code" : "L81.4",
        "display" : "Other melanin hyperpigmentation"
      },
      {
        "code" : "L89",
        "display" : "Decubitus ulcer and pressure area"
      },
      {
        "code" : "L91.0",
        "display" : "Hypertrophic scar"
      },
      {
        "code" : "M02.3",
        "display" : "Reiter disease"
      },
      {
        "code" : "M08.9",
        "display" : "Juvenile arthritis, unspecified"
      },
      {
        "code" : "M13.0",
        "display" : "Polyarthritis, unspecified"
      },
      {
        "code" : "M30.0",
        "display" : "Polyarteritis nodosa"
      },
      {
        "code" : "M30.2",
        "display" : "Juvenile polyarteritis"
      },
      {
        "code" : "M30.3",
        "display" : "Mucocutaneous lymph node syndrome [Kawasaki]"
      },
      {
        "code" : "M30.8",
        "display" : "Other conditions related to polyarteritis nodosa"
      },
      {
        "code" : "M31.4",
        "display" : "Aortic arch syndrome [Takayasu]"
      },
      {
        "code" : "M31.6",
        "display" : "Other giant cell arteritis"
      },
      {
        "code" : "M32.1",
        "display" : "Systemic lupus erythematosus with organ or system involvement"
      },
      {
        "code" : "M32.9",
        "display" : "Systemic lupus erythematosus, unspecified"
      },
      {
        "code" : "M33.2",
        "display" : "Polymyositis"
      },
      {
        "code" : "M33.9",
        "display" : "Dermatopolymyositis, unspecified"
      },
      {
        "code" : "M34.9",
        "display" : "Systemic sclerosis, unspecified"
      },
      {
        "code" : "M35.0",
        "display" : "Sicca syndrome [Sjögren]"
      },
      {
        "code" : "M35.1",
        "display" : "Other overlap syndromes"
      },
      {
        "code" : "M35.2",
        "display" : "Behçet disease"
      },
      {
        "code" : "M35.9",
        "display" : "Systemic involvement of connective tissue, unspecified"
      },
      {
        "code" : "M45",
        "display" : "Ankylosing spondylitis"
      },
      {
        "code" : "M54.9",
        "display" : "Dorsalgia, unspecified"
      },
      {
        "code" : "M60.9",
        "display" : "Myositis, unspecified"
      },
      {
        "code" : "M62.5",
        "display" : "Muscle wasting and atrophy, not elsewhere classified"
      },
      {
        "code" : "M62.8",
        "display" : "Other specified disorders of muscle"
      },
      {
        "code" : "M79.2",
        "display" : "Neuralgia and neuritis, unspecified"
      },
      {
        "code" : "M84.1",
        "display" : "Nonunion of fracture [pseudarthrosis]"
      },
      {
        "code" : "M84.2",
        "display" : "Delayed union of fracture"
      },
      {
        "code" : "M86.9",
        "display" : "Osteomyelitis, unspecified"
      },
      {
        "code" : "M89.9",
        "display" : "Disorder of bone, unspecified"
      },
      {
        "code" : "M93.9",
        "display" : "Osteochondropathy, unspecified"
      },
      {
        "code" : "M94.0",
        "display" : "Chondrocostal junction syndrome [Tietze]"
      },
      {
        "code" : "N13.7",
        "display" : "Vesicoureteral-reflux-associated uropathy"
      },
      {
        "code" : "N17",
        "display" : "Acute renal failure"
      },
      {
        "code" : "N17.9",
        "display" : "Acute renal failure, unspecified"
      },
      {
        "code" : "N18",
        "display" : "Chronic kidney disease"
      },
      {
        "code" : "N18.5",
        "display" : "Chronic kidney disease, stage 5"
      },
      {
        "code" : "N18.9",
        "display" : "Chronic kidney disease, unspecified"
      },
      {
        "code" : "N19",
        "display" : "Unspecified kidney failure"
      },
      {
        "code" : "N39.0",
        "display" : "Urinary tract infection, site not specified"
      },
      {
        "code" : "N99.0",
        "display" : "Postprocedural renal failure"
      },
      {
        "code" : "N99.8",
        "display" : "Other postprocedural disorders of genitourinary system"
      },
      {
        "code" : "O04",
        "display" : "Medical abortion"
      },
      {
        "code" : "O13",
        "display" : "Gestational [pregnancy-induced] hypertension"
      },
      {
        "code" : "O14",
        "display" : "Pre-eclampsia"
      },
      {
        "code" : "O24.0",
        "display" : "Pre-existing type 1 diabetes mellitus"
      },
      {
        "code" : "O24.1",
        "display" : "Pre-existing type 2 diabetes mellitus"
      },
      {
        "code" : "O24.4",
        "display" : "Diabetes mellitus arising in pregnancy"
      },
      {
        "code" : "O24.9",
        "display" : "Diabetes mellitus in pregnancy, unspecified"
      },
      {
        "code" : "O28.3",
        "display" : "Abnormal ultrasonic finding on antenatal screening of mother"
      },
      {
        "code" : "O30.0",
        "display" : "Twin pregnancy"
      },
      {
        "code" : "O30.1",
        "display" : "Triplet pregnancy"
      },
      {
        "code" : "O30.9",
        "display" : "Multiple gestation, unspecified"
      },
      {
        "code" : "O35.1",
        "display" : "Maternal care for (suspected) chromosomal abnormality in fetus"
      },
      {
        "code" : "O35.5",
        "display" : "Maternal care for (suspected) damage to fetus by drugs"
      },
      {
        "code" : "O35.8",
        "display" : "Maternal care for other (suspected) fetal abnormality and damage"
      },
      {
        "code" : "O35.9",
        "display" : "Maternal care for (suspected) fetal abnormality and damage, unspecified"
      },
      {
        "code" : "O36.4",
        "display" : "Maternal care for intrauterine death"
      },
      {
        "code" : "O40",
        "display" : "Polyhydramnios"
      },
      {
        "code" : "O41.0",
        "display" : "Oligohydramnios"
      },
      {
        "code" : "O90.3",
        "display" : "Cardiomyopathy in the puerperium"
      },
      {
        "code" : "O99.2",
        "display" : "Endocrine, nutritional and metabolic diseases complicating pregnancy, childbirth and the puerperium"
      },
      {
        "code" : "O99.8",
        "display" : "Other specified diseases and conditions complicating pregnancy, childbirth and the puerperium"
      },
      {
        "code" : "P01.8",
        "display" : "Fetus and newborn affected by other maternal complications of pregnancy"
      },
      {
        "code" : "P02.3",
        "display" : "Fetus and newborn affected by placental transfusion syndromes"
      },
      {
        "code" : "P05.1",
        "display" : "Small for gestational age"
      },
      {
        "code" : "P05.9",
        "display" : "Slow fetal growth, unspecified"
      },
      {
        "code" : "P07.1",
        "display" : "Other low birth weight"
      },
      {
        "code" : "P07.3",
        "display" : "Other preterm infants"
      },
      {
        "code" : "P11.2",
        "display" : "Unspecified brain damage due to birth injury"
      },
      {
        "code" : "P21.9",
        "display" : "Birth asphyxia, unspecified"
      },
      {
        "code" : "P22.0",
        "display" : "Respiratory distress syndrome of newborn"
      },
      {
        "code" : "P22.1",
        "display" : "Transient tachypnoea of newborn"
      },
      {
        "code" : "P24.0",
        "display" : "Neonatal aspiration of meconium"
      },
      {
        "code" : "P27.1",
        "display" : "Bronchopulmonary dysplasia originating in the perinatal period"
      },
      {
        "code" : "P28.5",
        "display" : "Respiratory failure of newborn"
      },
      {
        "code" : "P29.0",
        "display" : "Neonatal cardiac failure"
      },
      {
        "code" : "P29.1",
        "display" : "Neonatal cardiac dysrhythmia"
      },
      {
        "code" : "P29.2",
        "display" : "Neonatal hypertension"
      },
      {
        "code" : "P29.3",
        "display" : "Persistent fetal circulation"
      },
      {
        "code" : "P29.4",
        "display" : "Transient myocardial ischaemia of newborn"
      },
      {
        "code" : "P29.8",
        "display" : "Other cardiovascular disorders originating in the perinatal period"
      },
      {
        "code" : "P35.0",
        "display" : "Congenital rubella syndrome"
      },
      {
        "code" : "P35.1",
        "display" : "Congenital cytomegalovirus infection"
      },
      {
        "code" : "P37.1",
        "display" : "Congenital toxoplasmosis"
      },
      {
        "code" : "P37.8",
        "display" : "Other specified congenital infectious and parasitic diseases"
      },
      {
        "code" : "P37.9",
        "display" : "Congenital infectious and parasitic disease, unspecified"
      },
      {
        "code" : "P39.9",
        "display" : "Infection specific to the perinatal period, unspecified"
      },
      {
        "code" : "P52.3",
        "display" : "Unspecified intraventricular (nontraumatic) haemorrhage of fetus and newborn"
      },
      {
        "code" : "P56.0",
        "display" : "Hydrops fetalis due to isoimmunization"
      },
      {
        "code" : "P59.9",
        "display" : "Neonatal jaundice, unspecified"
      },
      {
        "code" : "P61.1",
        "display" : "Polycythaemia neonatorum"
      },
      {
        "code" : "P61.4",
        "display" : "Other congenital anaemias, not elsewhere classified"
      },
      {
        "code" : "P70.1",
        "display" : "Syndrome of infant of a diabetic mother"
      },
      {
        "code" : "P74.9",
        "display" : "Transitory metabolic disturbance of newborn, unspecified"
      },
      {
        "code" : "P77",
        "display" : "Necrotizing enterocolitis of fetus and newborn"
      },
      {
        "code" : "P83.2",
        "display" : "Hydrops fetalis not due to haemolytic disease"
      },
      {
        "code" : "P83.3",
        "display" : "Other and unspecified oedema specific to fetus and newborn"
      },
      {
        "code" : "P92.9",
        "display" : "Feeding problem of newborn, unspecified"
      },
      {
        "code" : "P95",
        "display" : "Fetal death of unspecified cause"
      },
      {
        "code" : "P96.4",
        "display" : "Termination of pregnancy, affecting fetus and newborn"
      },
      {
        "code" : "P96.9",
        "display" : "Condition originating in the perinatal period, unspecified"
      },
      {
        "code" : "Q00.0",
        "display" : "Anencephaly"
      },
      {
        "code" : "Q02",
        "display" : "Microcephaly"
      },
      {
        "code" : "Q04.0",
        "display" : "Congenital malformations of corpus callosum"
      },
      {
        "code" : "Q04.2",
        "display" : "Holoprosencephaly"
      },
      {
        "code" : "Q04.3",
        "display" : "Other reduction deformities of brain"
      },
      {
        "code" : "Q04.9",
        "display" : "Congenital malformation of brain, unspecified"
      },
      {
        "code" : "Q05.9",
        "display" : "Spina bifida, unspecified"
      },
      {
        "code" : "Q06.8",
        "display" : "Other specified congenital malformations of spinal cord"
      },
      {
        "code" : "Q06.9",
        "display" : "Congenital malformation of spinal cord, unspecified"
      },
      {
        "code" : "Q20.0",
        "display" : "Common arterial trunk"
      },
      {
        "code" : "Q20.1",
        "display" : "Double outlet right ventricle"
      },
      {
        "code" : "Q20.2",
        "display" : "Double outlet left ventricle"
      },
      {
        "code" : "Q20.3",
        "display" : "Discordant ventriculoarterial connection"
      },
      {
        "code" : "Q20.4",
        "display" : "Double inlet ventricle"
      },
      {
        "code" : "Q20.5",
        "display" : "Discordant atrioventricular connection"
      },
      {
        "code" : "Q20.6",
        "display" : "Isomerism of atrial appendages"
      },
      {
        "code" : "Q20.8",
        "display" : "Other congenital malformations of cardiac chambers and connections"
      },
      {
        "code" : "Q20.9",
        "display" : "Congenital malformation of cardiac chambers and connections, unspecified"
      },
      {
        "code" : "Q21.0",
        "display" : "Ventricular septal defect"
      },
      {
        "code" : "Q21.1",
        "display" : "Atrial septal defect"
      },
      {
        "code" : "Q21.2",
        "display" : "Atrioventricular septal defect"
      },
      {
        "code" : "Q21.3",
        "display" : "Tetralogy of Fallot"
      },
      {
        "code" : "Q21.4",
        "display" : "Aortopulmonary septal defect"
      },
      {
        "code" : "Q21.8",
        "display" : "Other congenital malformations of cardiac septa"
      },
      {
        "code" : "Q21.9",
        "display" : "Congenital malformation of cardiac septum, unspecified"
      },
      {
        "code" : "Q22.0",
        "display" : "Pulmonary valve atresia"
      },
      {
        "code" : "Q22.1",
        "display" : "Congenital pulmonary valve stenosis"
      },
      {
        "code" : "Q22.2",
        "display" : "Congenital pulmonary valve insufficiency"
      },
      {
        "code" : "Q22.3",
        "display" : "Other congenital malformations of pulmonary valve"
      },
      {
        "code" : "Q22.4",
        "display" : "Congenital tricuspid stenosis"
      },
      {
        "code" : "Q22.5",
        "display" : "Ebstein anomaly"
      },
      {
        "code" : "Q22.6",
        "display" : "Hypoplastic right heart syndrome"
      },
      {
        "code" : "Q22.8",
        "display" : "Other congenital malformations of tricuspid valve"
      },
      {
        "code" : "Q22.9",
        "display" : "Congenital malformation of tricuspid valve, unspecified"
      },
      {
        "code" : "Q23.0",
        "display" : "Congenital stenosis of aortic valve"
      },
      {
        "code" : "Q23.1",
        "display" : "Congenital insufficiency of aortic valve"
      },
      {
        "code" : "Q23.2",
        "display" : "Congenital mitral stenosis"
      },
      {
        "code" : "Q23.3",
        "display" : "Congenital mitral insufficiency"
      },
      {
        "code" : "Q23.4",
        "display" : "Hypoplastic left heart syndrome"
      },
      {
        "code" : "Q23.8",
        "display" : "Other congenital malformations of aortic and mitral valves"
      },
      {
        "code" : "Q23.9",
        "display" : "Congenital malformation of aortic and mitral valves, unspecified"
      },
      {
        "code" : "Q24.0",
        "display" : "Dextrocardia"
      },
      {
        "code" : "Q24.1",
        "display" : "Laevocardia"
      },
      {
        "code" : "Q24.2",
        "display" : "Cor triatriatum"
      },
      {
        "code" : "Q24.3",
        "display" : "Pulmonary infundibular stenosis"
      },
      {
        "code" : "Q24.4",
        "display" : "Congenital subaortic stenosis"
      },
      {
        "code" : "Q24.5",
        "display" : "Malformation of coronary vessels"
      },
      {
        "code" : "Q24.6",
        "display" : "Congenital heart block"
      },
      {
        "code" : "Q24.8",
        "display" : "Other specified congenital malformations of heart"
      },
      {
        "code" : "Q24.9",
        "display" : "Congenital malformation of heart, unspecified"
      },
      {
        "code" : "Q25.0",
        "display" : "Patent ductus arteriosus"
      },
      {
        "code" : "Q25.1",
        "display" : "Coarctation of aorta"
      },
      {
        "code" : "Q25.2",
        "display" : "Atresia of aorta"
      },
      {
        "code" : "Q25.3",
        "display" : "Stenosis of aorta"
      },
      {
        "code" : "Q25.4",
        "display" : "Other congenital malformations of aorta"
      },
      {
        "code" : "Q25.5",
        "display" : "Atresia of pulmonary artery"
      },
      {
        "code" : "Q25.6",
        "display" : "Stenosis of pulmonary artery"
      },
      {
        "code" : "Q25.7",
        "display" : "Other congenital malformations of pulmonary artery"
      },
      {
        "code" : "Q25.8",
        "display" : "Other congenital malformations of great arteries"
      },
      {
        "code" : "Q25.9",
        "display" : "Congenital malformation of great arteries, unspecified"
      },
      {
        "code" : "Q26.0",
        "display" : "Congenital stenosis of vena cava"
      },
      {
        "code" : "Q26.1",
        "display" : "Persistent left superior vena cava"
      },
      {
        "code" : "Q26.2",
        "display" : "Total anomalous pulmonary venous connection"
      },
      {
        "code" : "Q26.3",
        "display" : "Partial anomalous pulmonary venous connection"
      },
      {
        "code" : "Q26.4",
        "display" : "Anomalous pulmonary venous connection, unspecified"
      },
      {
        "code" : "Q26.5",
        "display" : "Anomalous portal venous connection"
      },
      {
        "code" : "Q26.6",
        "display" : "Portal vein-hepatic artery fistula"
      },
      {
        "code" : "Q26.8",
        "display" : "Other congenital malformations of great veins"
      },
      {
        "code" : "Q26.9",
        "display" : "Congenital malformation of great vein, unspecified"
      },
      {
        "code" : "Q27.0",
        "display" : "Congenital absence and hypoplasia of umbilical artery"
      },
      {
        "code" : "Q27.1",
        "display" : "Congenital renal artery stenosis"
      },
      {
        "code" : "Q27.3",
        "display" : "Peripheral arteriovenous malformation"
      },
      {
        "code" : "Q27.4",
        "display" : "Congenital phlebectasia"
      },
      {
        "code" : "Q27.8",
        "display" : "Other specified congenital malformations of peripheral vascular system"
      },
      {
        "code" : "Q28.2",
        "display" : "Arteriovenous malformation of cerebral vessels"
      },
      {
        "code" : "Q28.3",
        "display" : "Other malformations of cerebral vessels"
      },
      {
        "code" : "Q28.8",
        "display" : "Other specified congenital malformations of circulatory system"
      },
      {
        "code" : "Q28.9",
        "display" : "Congenital malformation of circulatory system, unspecified"
      },
      {
        "code" : "Q30.0",
        "display" : "Choanal atresia"
      },
      {
        "code" : "Q31.8",
        "display" : "Other congenital malformations of larynx"
      },
      {
        "code" : "Q32.0",
        "display" : "Congenital tracheomalacia"
      },
      {
        "code" : "Q32.1",
        "display" : "Other congenital malformations of trachea"
      },
      {
        "code" : "Q32.2",
        "display" : "Congenital bronchomalacia"
      },
      {
        "code" : "Q32.3",
        "display" : "Congenital stenosis of bronchus"
      },
      {
        "code" : "Q32.4",
        "display" : "Other congenital malformations of bronchus"
      },
      {
        "code" : "Q33.0",
        "display" : "Congenital cystic lung"
      },
      {
        "code" : "Q33.2",
        "display" : "Sequestration of lung"
      },
      {
        "code" : "Q33.6",
        "display" : "Hypoplasia and dysplasia of lung"
      },
      {
        "code" : "Q33.8",
        "display" : "Other congenital malformations of lung"
      },
      {
        "code" : "Q33.9",
        "display" : "Congenital malformation of lung, unspecified"
      },
      {
        "code" : "Q35.9",
        "display" : "Cleft palate, unspecified"
      },
      {
        "code" : "Q36.9",
        "display" : "Cleft lip, unilateral"
      },
      {
        "code" : "Q37",
        "display" : "Cleft palate with cleft lip"
      },
      {
        "code" : "Q39.0",
        "display" : "Atresia of oesophagus without fistula"
      },
      {
        "code" : "Q39.1",
        "display" : "Atresia of oesophagus with tracheo-oesophageal fistula"
      },
      {
        "code" : "Q39.2",
        "display" : "Congenital tracheo-oesophageal fistula without atresia"
      },
      {
        "code" : "Q39.6",
        "display" : "Diverticulum of oesophagus"
      },
      {
        "code" : "Q39.8",
        "display" : "Other congenital malformations of oesophagus"
      },
      {
        "code" : "Q40.0",
        "display" : "Congenital hypertrophic pyloric stenosis"
      },
      {
        "code" : "Q40.1",
        "display" : "Congenital hiatus hernia"
      },
      {
        "code" : "Q40.2",
        "display" : "Other specified congenital malformations of stomach"
      },
      {
        "code" : "Q40.3",
        "display" : "Congenital malformation of stomach, unspecified"
      },
      {
        "code" : "Q41.0",
        "display" : "Congenital absence, atresia and stenosis of duodenum"
      },
      {
        "code" : "Q41.1",
        "display" : "Congenital absence, atresia and stenosis of jejunum"
      },
      {
        "code" : "Q41.2",
        "display" : "Congenital absence, atresia and stenosis of ileum"
      },
      {
        "code" : "Q42.1",
        "display" : "Congenital absence, atresia and stenosis of rectum without fistula"
      },
      {
        "code" : "Q42.3",
        "display" : "Congenital absence, atresia and stenosis of anus without fistula"
      },
      {
        "code" : "Q42.9",
        "display" : "Congenital absence, atresia and stenosis of large intestine, part unspecified"
      },
      {
        "code" : "Q43.1",
        "display" : "Hirschsprung disease"
      },
      {
        "code" : "Q43.3",
        "display" : "Congenital malformations of intestinal fixation"
      },
      {
        "code" : "Q43.8",
        "display" : "Other specified congenital malformations of intestine"
      },
      {
        "code" : "Q43.9",
        "display" : "Congenital malformation of intestine, unspecified"
      },
      {
        "code" : "Q44.2",
        "display" : "Atresia of bile ducts"
      },
      {
        "code" : "Q44.7",
        "display" : "Other congenital malformations of liver"
      },
      {
        "code" : "Q52.2",
        "display" : "Congenital rectovaginal fistula"
      },
      {
        "code" : "Q54",
        "display" : "Hypospadias"
      },
      {
        "code" : "Q60",
        "display" : "Renal agenesis and other reduction defects of kidney"
      },
      {
        "code" : "Q60.0",
        "display" : "Renal agenesis, unilateral"
      },
      {
        "code" : "Q61.3",
        "display" : "Polycystic kidney, unspecified"
      },
      {
        "code" : "Q61.4",
        "display" : "Renal dysplasia"
      },
      {
        "code" : "Q62.0",
        "display" : "Congenital hydronephrosis"
      },
      {
        "code" : "Q63.1",
        "display" : "Lobulated, fused and horseshoe kidney"
      },
      {
        "code" : "Q64.9",
        "display" : "Congenital malformation of urinary system, unspecified"
      },
      {
        "code" : "Q66.8",
        "display" : "Other congenital deformities of feet"
      },
      {
        "code" : "Q67.5",
        "display" : "Congenital deformity of spine"
      },
      {
        "code" : "Q67.6",
        "display" : "Pectus excavatum"
      },
      {
        "code" : "Q67.7",
        "display" : "Pectus carinatum"
      },
      {
        "code" : "Q67.8",
        "display" : "Other congenital deformities of chest"
      },
      {
        "code" : "Q69.9",
        "display" : "Polydactyly, unspecified"
      },
      {
        "code" : "Q70.9",
        "display" : "Syndactyly, unspecified"
      },
      {
        "code" : "Q71.4",
        "display" : "Longitudinal reduction defect of radius"
      },
      {
        "code" : "Q75.0",
        "display" : "Craniosynostosis"
      },
      {
        "code" : "Q75.3",
        "display" : "Macrocephaly"
      },
      {
        "code" : "Q75.9",
        "display" : "Congenital malformation of skull and face bones, unspecified"
      },
      {
        "code" : "Q76.1",
        "display" : "Klippel-Feil syndrome"
      },
      {
        "code" : "Q76.4",
        "display" : "Other congenital malformations of spine, not associated with scoliosis"
      },
      {
        "code" : "Q76.6",
        "display" : "Other congenital malformations of ribs"
      },
      {
        "code" : "Q76.7",
        "display" : "Congenital malformation of sternum"
      },
      {
        "code" : "Q77.6",
        "display" : "Chondroectodermal dysplasia"
      },
      {
        "code" : "Q78.0",
        "display" : "Osteogenesis imperfecta"
      },
      {
        "code" : "Q79",
        "display" : "Congenital malformations of the musculoskeletal system, not elsewhere classified"
      },
      {
        "code" : "Q79.0",
        "display" : "Congenital diaphragmatic hernia"
      },
      {
        "code" : "Q79.2",
        "display" : "Exomphalos"
      },
      {
        "code" : "Q79.3",
        "display" : "Gastroschisis"
      },
      {
        "code" : "Q79.4",
        "display" : "Prune belly syndrome"
      },
      {
        "code" : "Q79.6",
        "display" : "Ehlers-Danlos syndrome"
      },
      {
        "code" : "Q79.8",
        "display" : "Other congenital malformations of musculoskeletal system"
      },
      {
        "code" : "Q81.2",
        "display" : "Epidermolysis bullosa dystrophica"
      },
      {
        "code" : "Q82.0",
        "display" : "Hereditary lymphoedema"
      },
      {
        "code" : "Q82.8",
        "display" : "Other specified congenital malformations of skin"
      },
      {
        "code" : "Q85.0",
        "display" : "Neurofibromatosis (nonmalignant)"
      },
      {
        "code" : "Q85.1",
        "display" : "Tuberous sclerosis"
      },
      {
        "code" : "Q86.0",
        "display" : "Fetal alcohol syndrome (dysmorphic)"
      },
      {
        "code" : "Q86.1",
        "display" : "Fetal hydantoin syndrome"
      },
      {
        "code" : "Q86.2",
        "display" : "Dysmorphism due to warfarin"
      },
      {
        "code" : "Q86.8",
        "display" : "Other congenital malformation syndromes due to known exogenous causes"
      },
      {
        "code" : "Q87.0",
        "display" : "Congenital malformation syndromes predominantly affecting facial appearance"
      },
      {
        "code" : "Q87.1",
        "display" : "Congenital malformation syndromes predominantly associated with short stature"
      },
      {
        "code" : "Q87.2",
        "display" : "Congenital malformation syndromes predominantly involving limbs"
      },
      {
        "code" : "Q87.3",
        "display" : "Congenital malformation syndromes involving early overgrowth"
      },
      {
        "code" : "Q87.4",
        "display" : "Marfan syndrome"
      },
      {
        "code" : "Q87.5",
        "display" : "Other congenital malformation syndromes with other skeletal changes"
      },
      {
        "code" : "Q87.8",
        "display" : "Other specified congenital malformation syndromes, not elsewhere classified"
      },
      {
        "code" : "Q89.0",
        "display" : "Congenital malformations of spleen"
      },
      {
        "code" : "Q89.2",
        "display" : "Congenital malformations of other endocrine glands"
      },
      {
        "code" : "Q89.3",
        "display" : "Situs inversus"
      },
      {
        "code" : "Q89.4",
        "display" : "Conjoined twins"
      },
      {
        "code" : "Q89.7",
        "display" : "Multiple congenital malformations, not elsewhere classified"
      },
      {
        "code" : "Q89.8",
        "display" : "Other specified congenital malformations"
      },
      {
        "code" : "Q89.9",
        "display" : "Congenital malformation, unspecified"
      },
      {
        "code" : "Q90.1",
        "display" : "Trisomy 21, mosaicism (mitotic nondisjunction)"
      },
      {
        "code" : "Q90.9",
        "display" : "Down syndrome, unspecified"
      },
      {
        "code" : "Q91.1",
        "display" : "Trisomy 18, mosaicism (mitotic nondisjunction)"
      },
      {
        "code" : "Q91.3",
        "display" : "Edwards syndrome, unspecified"
      },
      {
        "code" : "Q91.7",
        "display" : "Patau syndrome, unspecified"
      },
      {
        "code" : "Q92.8",
        "display" : "Other specified trisomies and partial trisomies of autosomes"
      },
      {
        "code" : "Q93.3",
        "display" : "Deletion of short arm of chromosome 4"
      },
      {
        "code" : "Q93.4",
        "display" : "Deletion of short arm of chromosome 5"
      },
      {
        "code" : "Q93.5",
        "display" : "Other deletions of part of a chromosome"
      },
      {
        "code" : "Q93.8",
        "display" : "Other deletions from the autosomes"
      },
      {
        "code" : "Q96.9",
        "display" : "Turner syndrome, unspecified"
      },
      {
        "code" : "Q98.4",
        "display" : "Klinefelter syndrome, unspecified"
      },
      {
        "code" : "Q99.2",
        "display" : "Fragile X chromosome"
      },
      {
        "code" : "Q99.8",
        "display" : "Other specified chromosome abnormalities"
      },
      {
        "code" : "Q99.9",
        "display" : "Chromosomal abnormality, unspecified"
      },
      {
        "code" : "R00.2",
        "display" : "Palpitations"
      },
      {
        "code" : "R00.8",
        "display" : "Other and unspecified abnormalities of heart beat"
      },
      {
        "code" : "R01.0",
        "display" : "Benign and innocent cardiac murmurs"
      },
      {
        "code" : "R01.1",
        "display" : "Cardiac murmur, unspecified"
      },
      {
        "code" : "R01.2",
        "display" : "Other cardiac sounds"
      },
      {
        "code" : "R04.0",
        "display" : "Epistaxis"
      },
      {
        "code" : "R04.2",
        "display" : "Haemoptysis"
      },
      {
        "code" : "R04.8",
        "display" : "Haemorrhage from other sites in respiratory passages"
      },
      {
        "code" : "R05",
        "display" : "Cough"
      },
      {
        "code" : "R06.0",
        "display" : "Dyspnoea"
      },
      {
        "code" : "R06.1",
        "display" : "Stridor"
      },
      {
        "code" : "R06.2",
        "display" : "Wheezing"
      },
      {
        "code" : "R06.8",
        "display" : "Other and unspecified abnormalities of breathing"
      },
      {
        "code" : "R07.2",
        "display" : "Precordial pain"
      },
      {
        "code" : "R07.3",
        "display" : "Other chest pain"
      },
      {
        "code" : "R07.4",
        "display" : "Chest pain, unspecified"
      },
      {
        "code" : "R09.1",
        "display" : "Pleurisy"
      },
      {
        "code" : "R09.2",
        "display" : "Respiratory arrest"
      },
      {
        "code" : "R09.8",
        "display" : "Other specified symptoms and signs involving the circulatory and respiratory systems"
      },
      {
        "code" : "R10.1",
        "display" : "Pain localized to upper abdomen"
      },
      {
        "code" : "R11",
        "display" : "Nausea and vomiting"
      },
      {
        "code" : "R13",
        "display" : "Dysphagia"
      },
      {
        "code" : "R14",
        "display" : "Flatulence and related conditions"
      },
      {
        "code" : "R16.0",
        "display" : "Hepatomegaly, not elsewhere classified"
      },
      {
        "code" : "R16.1",
        "display" : "Splenomegaly, not elsewhere classified"
      },
      {
        "code" : "R18",
        "display" : "Ascites"
      },
      {
        "code" : "R21",
        "display" : "Rash and other nonspecific skin eruption"
      },
      {
        "code" : "R22.2",
        "display" : "Localized swelling, mass and lump, trunk"
      },
      {
        "code" : "R23.0",
        "display" : "Cyanosis"
      },
      {
        "code" : "R23.1",
        "display" : "Pallor"
      },
      {
        "code" : "R40.2",
        "display" : "Coma, unspecified"
      },
      {
        "code" : "R42",
        "display" : "Dizziness and giddiness"
      },
      {
        "code" : "R46.8",
        "display" : "Other symptoms and signs involving appearance and behaviour"
      },
      {
        "code" : "R50.9",
        "display" : "Fever, unspecified"
      },
      {
        "code" : "R51",
        "display" : "Headache"
      },
      {
        "code" : "R53",
        "display" : "Malaise and fatigue"
      },
      {
        "code" : "R55",
        "display" : "Syncope and collapse"
      },
      {
        "code" : "R56.8",
        "display" : "Other and unspecified convulsions"
      },
      {
        "code" : "R57.0",
        "display" : "Cardiogenic shock"
      },
      {
        "code" : "R57.1",
        "display" : "Hypovolaemic shock"
      },
      {
        "code" : "R57.8",
        "display" : "Other shock"
      },
      {
        "code" : "R57.9",
        "display" : "Shock, unspecified"
      },
      {
        "code" : "R60.9",
        "display" : "Oedema, unspecified"
      },
      {
        "code" : "R61.9",
        "display" : "Hyperhidrosis, unspecified"
      },
      {
        "code" : "R62.0",
        "display" : "Delayed milestone"
      },
      {
        "code" : "R62.8",
        "display" : "Other lack of expected normal physiological development"
      },
      {
        "code" : "R62.9",
        "display" : "Lack of expected normal physiological development, unspecified"
      },
      {
        "code" : "R63.3",
        "display" : "Feeding difficulties and mismanagement"
      },
      {
        "code" : "R68.0",
        "display" : "Hypothermia, not associated with low environmental temperature"
      },
      {
        "code" : "R68.3",
        "display" : "Clubbing of fingers"
      },
      {
        "code" : "R68.8",
        "display" : "Other specified general symptoms and signs"
      },
      {
        "code" : "R69",
        "display" : "Unknown and unspecified causes of morbidity"
      },
      {
        "code" : "R90.8",
        "display" : "Other abnormal findings on diagnostic imaging of central nervous system"
      },
      {
        "code" : "R93.1",
        "display" : "Abnormal findings on diagnostic imaging of heart and coronary circulation"
      },
      {
        "code" : "R94.2",
        "display" : "Abnormal results of pulmonary function studies"
      },
      {
        "code" : "R94.3",
        "display" : "Abnormal results of cardiovascular function studies"
      },
      {
        "code" : "R95",
        "display" : "Sudden infant death syndrome"
      },
      {
        "code" : "R96.0",
        "display" : "Instantaneous death"
      },
      {
        "code" : "S05.0",
        "display" : "Injury of conjunctiva and corneal abrasion without mention of foreign body"
      },
      {
        "code" : "S09.9",
        "display" : "Unspecified injury of head"
      },
      {
        "code" : "S20.3",
        "display" : "Other superficial injuries of front wall of thorax"
      },
      {
        "code" : "S22.2",
        "display" : "Fracture of sternum"
      },
      {
        "code" : "S25.0",
        "display" : "Injury of thoracic aorta"
      },
      {
        "code" : "S25.2",
        "display" : "Injury of superior vena cava"
      },
      {
        "code" : "S25.4",
        "display" : "Injury of pulmonary blood vessels"
      },
      {
        "code" : "S26",
        "display" : "Injury of heart"
      },
      {
        "code" : "S26.8",
        "display" : "Other injuries of heart"
      },
      {
        "code" : "S27.3",
        "display" : "Other injuries of lung"
      },
      {
        "code" : "S27.4",
        "display" : "Injury of bronchus"
      },
      {
        "code" : "S27.5",
        "display" : "Injury of thoracic trachea"
      },
      {
        "code" : "S27.8",
        "display" : "Injury of other specified intrathoracic organs"
      },
      {
        "code" : "S36.9",
        "display" : "Injury of unspecified intra-abdominal organ"
      },
      {
        "code" : "S43.2",
        "display" : "Dislocation of sternoclavicular joint"
      },
      {
        "code" : "T09.3",
        "display" : "Injury of spinal cord, level unspecified"
      },
      {
        "code" : "T14.0",
        "display" : "Superficial injury of unspecified body region"
      },
      {
        "code" : "T14.9",
        "display" : "Injury, unspecified"
      },
      {
        "code" : "T17.5",
        "display" : "Foreign body in bronchus"
      },
      {
        "code" : "T27.0",
        "display" : "Burn of larynx and trachea"
      },
      {
        "code" : "T27.1",
        "display" : "Burn involving larynx and trachea with lung"
      },
      {
        "code" : "T27.2",
        "display" : "Burn of other parts of respiratory tract"
      },
      {
        "code" : "T28.1",
        "display" : "Burn of oesophagus"
      },
      {
        "code" : "T30.0",
        "display" : "Burn of unspecified body region, unspecified degree"
      },
      {
        "code" : "T30.1",
        "display" : "Burn of first degree, body region unspecified"
      },
      {
        "code" : "T30.2",
        "display" : "Burn of second degree, body region unspecified"
      },
      {
        "code" : "T30.3",
        "display" : "Burn of third degree, body region unspecified"
      },
      {
        "code" : "T30.4",
        "display" : "Corrosion of unspecified body region, unspecified degree"
      },
      {
        "code" : "T50.9",
        "display" : "Other and unspecified drugs, medicaments and biological substances"
      },
      {
        "code" : "T56.8",
        "display" : "Other metals"
      },
      {
        "code" : "T70.3",
        "display" : "Caisson disease [decompression sickness]"
      },
      {
        "code" : "T75.1",
        "display" : "Drowning and nonfatal submersion"
      },
      {
        "code" : "T78.2",
        "display" : "Anaphylactic shock, unspecified"
      },
      {
        "code" : "T78.4",
        "display" : "Allergy, unspecified"
      },
      {
        "code" : "T79.4",
        "display" : "Traumatic shock"
      },
      {
        "code" : "T79.6",
        "display" : "Traumatic ischaemia of muscle"
      },
      {
        "code" : "T80.1",
        "display" : "Vascular complications following infusion, transfusion and therapeutic injection"
      },
      {
        "code" : "T80.2",
        "display" : "Infections following infusion, transfusion and therapeutic injection"
      },
      {
        "code" : "T81.0",
        "display" : "Haemorrhage and haematoma complicating a procedure, not elsewhere classified"
      },
      {
        "code" : "T81.1",
        "display" : "Shock during or resulting from a procedure, not elsewhere classified"
      },
      {
        "code" : "T81.2",
        "display" : "Accidental puncture and laceration during a procedure, not elsewhere classified"
      },
      {
        "code" : "T81.3",
        "display" : "Disruption of operation wound, not elsewhere classified"
      },
      {
        "code" : "T81.4",
        "display" : "Infection following a procedure, not elsewhere classified"
      },
      {
        "code" : "T81.5",
        "display" : "Foreign body accidentally left in body cavity or operation wound following a procedure"
      },
      {
        "code" : "T81.7",
        "display" : "Vascular complications following a procedure, not elsewhere classified"
      },
      {
        "code" : "T81.8",
        "display" : "Other complications of procedures, not elsewhere classified"
      },
      {
        "code" : "T81.9",
        "display" : "Unspecified complication of procedure"
      },
      {
        "code" : "T82.0",
        "display" : "Mechanical complication of heart valve prosthesis"
      },
      {
        "code" : "T82.1",
        "display" : "Mechanical complication of cardiac electronic device"
      },
      {
        "code" : "T82.2",
        "display" : "Mechanical complication of coronary artery bypass and valve grafts"
      },
      {
        "code" : "T82.5",
        "display" : "Mechanical complication of other cardiac and vascular devices and implants"
      },
      {
        "code" : "T82.6",
        "display" : "Infection and inflammatory reaction due to cardiac valve prosthesis"
      },
      {
        "code" : "T82.7",
        "display" : "Infection and inflammatory reaction due to other cardiac and vascular devices, implants and grafts"
      },
      {
        "code" : "T82.8",
        "display" : "Other specified complications of cardiac and vascular prosthetic devices, implants and grafts"
      },
      {
        "code" : "T82.9",
        "display" : "Unspecified complication of cardiac and vascular prosthetic device, implant and graft"
      },
      {
        "code" : "T83.0",
        "display" : "Mechanical complication of urinary (indwelling) catheter"
      },
      {
        "code" : "T86.0",
        "display" : "Bone-marrow transplant rejection"
      },
      {
        "code" : "T86.2",
        "display" : "Heart transplant failure and rejection"
      },
      {
        "code" : "T86.3",
        "display" : "Heart-lung transplant failure and rejection"
      },
      {
        "code" : "T86.9",
        "display" : "Failure and rejection of unspecified transplanted organ and tissue"
      },
      {
        "code" : "T88.2",
        "display" : "Shock due to anaesthesia"
      },
      {
        "code" : "T88.3",
        "display" : "Malignant hyperthermia due to anaesthesia"
      },
      {
        "code" : "T88.4",
        "display" : "Failed or difficult intubation"
      },
      {
        "code" : "T88.5",
        "display" : "Other complications of anaesthesia"
      },
      {
        "code" : "T88.6",
        "display" : "Anaphylactic shock due to adverse effect of correct drug or medicament properly administered"
      },
      {
        "code" : "T88.7",
        "display" : "Unspecified adverse effect of drug or medicament"
      },
      {
        "code" : "T88.8",
        "display" : "Other specified complications of surgical and medical care, not elsewhere classified"
      },
      {
        "code" : "T88.9",
        "display" : "Complication of surgical and medical care, unspecified"
      },
      {
        "code" : "U07.1",
        "display" : "COVID-19, virus identified"
      },
      {
        "code" : "U07.2",
        "display" : "COVID-19, virus not identified"
      },
      {
        "code" : "X84",
        "display" : "Intentional self-harm by unspecified means"
      },
      {
        "code" : "Y44.3",
        "display" : "Anticoagulant antagonists, vitamin K and other coagulants"
      },
      {
        "code" : "Y44.5",
        "display" : "Thrombolytic drugs"
      },
      {
        "code" : "Y44.6",
        "display" : "Natural blood and blood products"
      },
      {
        "code" : "Y52.0",
        "display" : "Cardiac-stimulant glycosides and drugs of similar action"
      },
      {
        "code" : "Y57.5",
        "display" : "X-ray contrast media"
      },
      {
        "code" : "Y60.5",
        "display" : "During heart catheterization"
      },
      {
        "code" : "Y60.6",
        "display" : "During aspiration, puncture and other catheterization"
      },
      {
        "code" : "Y60.8",
        "display" : "During other surgical and medical care"
      },
      {
        "code" : "Y60.9",
        "display" : "During unspecified surgical and medical care"
      },
      {
        "code" : "Y62.9",
        "display" : "During unspecified surgical and medical care"
      },
      {
        "code" : "Y63.6",
        "display" : "Nonadministration of necessary drug, medicament or biological substance"
      },
      {
        "code" : "Y63.9",
        "display" : "Failure in dosage during unspecified surgical and medical care"
      },
      {
        "code" : "Y65.1",
        "display" : "Wrong fluid used in infusion"
      },
      {
        "code" : "Y65.3",
        "display" : "Endotracheal tube wrongly placed during anaesthetic procedure"
      },
      {
        "code" : "Y65.4",
        "display" : "Failure to introduce or to remove other tube or instrument"
      },
      {
        "code" : "Y65.8",
        "display" : "Other specified misadventures during surgical and medical care"
      },
      {
        "code" : "Y83.0",
        "display" : "Surgical operation with transplant of whole organ"
      },
      {
        "code" : "Y83.2",
        "display" : "Surgical operation with anastomosis, bypass or graft"
      },
      {
        "code" : "Y83.8",
        "display" : "Other surgical procedures"
      },
      {
        "code" : "Y84.8",
        "display" : "Other medical procedures"
      },
      {
        "code" : "Z13.6",
        "display" : "Special screening examination for cardiovascular disorders"
      },
      {
        "code" : "Z13.7",
        "display" : "Special screening examination for congenital malformations, deformations and chromosomal abnormalities"
      },
      {
        "code" : "Z21",
        "display" : "Asymptomatic human immunodeficiency virus [HIV] infection status"
      },
      {
        "code" : "Z33",
        "display" : "Pregnant state, incidental"
      },
      {
        "code" : "Z36.0",
        "display" : "Antenatal screening for chromosomal anomalies"
      },
      {
        "code" : "Z36.3",
        "display" : "Antenatal screening for malformations using ultrasound and other physical methods"
      },
      {
        "code" : "Z36.9",
        "display" : "Antenatal screening, unspecified"
      },
      {
        "code" : "Z37.2",
        "display" : "Twins, both liveborn"
      },
      {
        "code" : "Z37.9",
        "display" : "Outcome of delivery, unspecified"
      },
      {
        "code" : "Z45.0",
        "display" : "Adjustment and management of cardiac devices"
      },
      {
        "code" : "Z52.9",
        "display" : "Donor of unspecified organ or tissue"
      },
      {
        "code" : "Z72.0",
        "display" : "Tobacco use"
      },
      {
        "code" : "Z82.4",
        "display" : "Family history of ischaemic heart disease and other diseases of the circulatory system"
      },
      {
        "code" : "Z82.7",
        "display" : "Family history of congenital malformations, deformations and chromosomal abnormalities"
      },
      {
        "code" : "Z84.3",
        "display" : "Family history of consanguinity"
      },
      {
        "code" : "Z84.8",
        "display" : "Family history of other specified conditions"
      },
      {
        "code" : "Z86.2",
        "display" : "Personal history of diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism"
      },
      {
        "code" : "Z86.7",
        "display" : "Personal history of diseases of the circulatory system"
      },
      {
        "code" : "Z87.7",
        "display" : "Personal history of congenital malformations, deformations and chromosomal abnormalities"
      },
      {
        "code" : "Z91.1",
        "display" : "Personal history of noncompliance with medical treatment and regimen"
      },
      {
        "code" : "Z91.8",
        "display" : "Personal history of other specified risk-factors, not elsewhere classified"
      },
      {
        "code" : "Z92.2",
        "display" : "Personal history of long-term (current) use of other medicaments"
      },
      {
        "code" : "Z93.0",
        "display" : "Tracheostomy status"
      },
      {
        "code" : "Z93.4",
        "display" : "Other artificial openings of gastrointestinal tract status"
      },
      {
        "code" : "Z99.1",
        "display" : "Dependence on respirator"
      },
      {
        "code" : "Z99.2",
        "display" : "Dependence on renal dialysis"
      },
      {
        "code" : "Z99.8",
        "display" : "Dependence on other enabling machines and devices"
      }]
    }]
  }
}

```
