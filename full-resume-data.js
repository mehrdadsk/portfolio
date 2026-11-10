/* EDIT THIS FILE to update the detailed résumé.
   The short résumé and homepage use content.js.
   This content is adapted from Mehrdad_Shoae_Kazemi_Full_Resume_Updated_2026.docx.
   Do not publish private patient datasets, confidential research code or unapproved project links.
*/
window.FULL_RESUME = {
  summary: [
    "Data Engineer & Analyst with approximately 12 years of data work spanning hospital and university operations, clinical real-world evidence and bioinformatics. I turn inconsistent data into validated, analysis-ready datasets that teams can use to answer difficult questions.",
    "Since 2023, I have supported international rheumatology studies at COPECARE, Rigshospitalet, including EuroSpA data from 19 European registries. My work combines reproducible R/Python pipelines, data quality and treatment-history reconstruction with scientific reporting and cross-country collaboration.",
    "My background includes an MSc in Engineering, Bioinformatics and Systems Biology from DTU and both an MSc and a BSc in Nutritional Sciences."
  ],
  strengths: [
    {title:"Finding what others miss", detail:"Root-cause QC investigations restored approximately 1,700 eligible patients and improved usable data by 7–10% in affected workflows."},
    {title:"Improving inherited systems", detail:"Refactored an inherited research pipeline using vectorisation and parallel execution, achieving about 10–20× faster processing."},
    {title:"Learning across disciplines", detail:"Moved from clinical nutrition and operational analytics to bioinformatics, scientific computing and international healthcare data engineering."}
  ],
  metrics: [
    {number:"19",label:"European registries"},
    {number:"30+",label:"Pooled study datasets"},
    {number:"400+",label:"Derived study variables"},
    {number:"3",label:"EuroSpA peer-reviewed papers"}
  ],
  experience: [
    {
      date:"2023 — PRESENT",
      title:"Data Engineer & Analyst",
      organisation:"COPECARE, Rigshospitalet · Copenhagen, Denmark",
      about:"End-to-end data engineering, QC, analysis-ready research assets and international data-management coordination for EuroSpA and Danish rheumatology registry studies. Duties include senior-level data-management responsibilities.",
      items: [
        "Build patient, treatment, visit and serious adverse-event (SAE) domain tables from DANBIO, ICEBIO and TurkBio inputs, then harmonise them with data delivered from 16 other European countries.",
        "Manage six multi-country uploads and prepare more than 30 pooled research datasets, applying study-specific eligibility definitions and master/pooled metadata.",
        "Develop reusable R functions generating more than 400 derived variables for cohorts of approximately 40,000–50,000 patients and about 500,000 observations.",
        "Reconstruct biologic treatment trajectories, including initiation, discontinuation, switching, gaps, overlap resolution and treatment duration.",
        "Maintain pipeline lineage, mapping specifications, vocabulary translation and quality-control routines spanning raw data, national uploads, clinician review and pooled outputs.",
        "Investigate inconsistencies in treatment windows, date formats, metadata and cohort counts; uncover a pipeline defect excluding about 1,700 eligible patients.",
        "Prepare graded registry feedback and maintain documentation around country-specific binary variables (1/0/missing) to reduce recurring ambiguities.",
        "Process SAE data for upadacitinib and filgotinib studies, including physician-supported reconciliation of event and clinical records.",
        "Prepare pseudonymised annual DANBIO extracts and research-ready outputs; data linkage with Statistics Denmark is performed by the collaborating partner group.",
        "Develop separate Danish/Icelandic R ETL pathways and analyze outcomes, Kaplan–Meier treatment retention, heat maps, ridgelines, stacked proportions and demographic figures.",
        "Refactor loop-based R processing into vectorised/parallelised workflows on Linux (roughly 10–20× faster) and contribute to a transition toward Python.",
        "Prototype a Python CLI study-reporting pipeline and Power BI reports using synthetic pooled data, including country filters, counts and treatment-line drug-class distributions; secure country-specific portal deployment remains planned, not live.",
        "Develop a Streamlit prototype for documenting country-specific binary-variable encoding and validating zero/missing recoding proposals.",
        "Use GitLab, Linux/SSH and PowerShell automation, contribute to peer-reviewed research, and help onboard and train three data engineers."
      ],
      tags:["R","Python","SQL","ETL","Clinical RWE","QC","Linux","GitLab"]
    },
    {
      date:"2015 — 2020",
      title:"Transition and studies in Denmark",
      organisation:"Copenhagen, Denmark",
      about:"Relocated to Denmark in 2015, studied Danish and worked while preparing for a move into technical higher education.",
      items:[
        "Danish language studies during 2015–2017.",
        "Worked as a courier during 2017–2019 while financing further education.",
        "Started the DTU MSc in Bioinformatics and Systems Biology in 2020."
      ],
      tags:["Language learning","Career transition"]
    },
    {
      date:"JUN 2008 — JAN 2015",
      title:"Data Analyst · Nutrition Office",
      organisation:"Mashhad University of Medical Sciences · Iran",
      about:"Operational and health-data analytics spanning university student nutrition, inventory, finances and consultation services.",
      items: [
        "Analyzed student meal consumption, stock and budget data to support purchasing decisions.",
        "Automated SQL data recording and collaborated on a digital meal-booking platform replacing paper food coupons.",
        "Built a PHP/MySQL portal for student nutritional status, periodic laboratory records and consultation bookings.",
        "Integrated Nutrition Office and Education Department tables and supervised data-entry operations.",
        "Presented recurring financial and student-health reports to management, including supplier and contractor performance."
      ],
      tags:["SQL","PHP","MySQL","Operational analytics","Reporting"]
    },
    {
      date:"JAN 2006 — MAY 2008",
      title:"Data Analyst · Food Department",
      organisation:"Ghaem Hospital, Mashhad University of Medical Sciences · Iran",
      about:"Clinical nutrition, ward-level data integration and operational food-service reporting in a teaching hospital.",
      items: [
        "Linked ward food consumption, patient demographics, diet types and warehouse records to monitor resource use and budget.",
        "Prepared monthly ward and finance reports for hospital leadership and purchasing/accounting teams.",
        "Helped build two early PHP/MySQL web-based data input systems with hospital IT colleagues.",
        "Analyzed patient anthropometrics, lab results, clinical records and dietary needs."
      ],
      tags:["SQL","PHP","MySQL","Clinical nutrition","Data systems"]
    }
  ],
  skillGroups: [
    {name:"Programming & data tools", items:["Python: pandas, NumPy, scikit-learn, PyTorch, matplotlib; PySpark and automation","R: tidyverse, dplyr, purrr, ggplot2, R Markdown, kableExtra","SQL: MySQL, SQLite; PowerShell, Bash/Unix and DAX"]},
    {name:"Data engineering", items:["ETL and data ingestion pipelines; patient, treatment-episode and visit models","Clinical domain tables, longitudinal reconstruction, schema mapping and metadata documentation","Pseudonymisation, data lineage, performance tuning and parallel processing"]},
    {name:"Data quality & reporting", items:["Reusable QC functions, cohort checks, gap and consistency controls, deduplication","Treatment retention and Kaplan–Meier analyses; descriptive statistics; PCA and k-NN imputation","R Markdown, ggplot2, Power BI, Excel and clear communication of assumptions"]},
    {name:"Machine learning & bioinformatics", items:["Academic CNN, bi-LSTM and feed-forward networks in PyTorch; random forests and neural networks","Nested cross-validation, precision/MCC, sequence analysis and biomolecular modelling","RNA-seq/BRB-seq processing, differential expression, metagenomics, phylogenetics and protein structures"]},
    {name:"Infrastructure & collaboration", items:["Linux/SSH, Git/GitLab/GitHub, Windows PowerShell and conda","Collaboration with clinicians, epidemiologists, statisticians, registries and IT partners","Databricks and Azure data-platform concepts through training, not claimed production deployment","Training and onboarding of three data engineers"]}
  ],
  independentWork: [
    {date:"2026",title:"Python JobAgent — personal project",description:"Created an on-demand job discovery and review workflow using Python, Playwright and SQLite. It aggregates and deduplicates advertisements, scores relevance, generates draft application materials and exports Excel reports. Applications are reviewed and submitted manually.",tags:["Python","Playwright","SQLite","Automation"]},
    {date:"2026",title:"Country-level study reporting prototypes",description:"Prototyped Python-generated synthetic study outputs, Power BI summaries and interactive cohort/treatment-class charts. Country-specific restricted portal access is planned with partners, not deployed.",tags:["Python","Power BI","Synthetic data"]},
    {date:"2026",title:"Streamlit variable documentation portal",description:"Prototyped a country-specific interface for binary variable coding definitions and validation of zero-versus-missing recoding decisions.",tags:["Streamlit","Python","Data QC"]}
  ],
  education: [
    {
      date:"FEB 2020 — DEC 2022",
      degree:"MSc in Engineering · Bioinformatics and Systems Biology",
      institution:"Technical University of Denmark (DTU)",
      note:"120 ECTS · GPA 9.45/12",
      bullets:[
        "Thesis: Neuro-immune regulation of allergic inflammation and anaphylaxis in food allergy (National Food Institute, 2022).",
        "Processed Illumina BRB-seq intestinal transcriptomic data, aligned reads with STAR on Linux, performed differential-expression analysis and created figures in R.",
        "Academic projects included TCR–pMHC binding prediction (CNN/bi-LSTM/feed-forward), Lassa virus vaccine epitope design, infant gut microbiome PCA and heart-failure outcome prediction."
      ]
    },
    {
      date:"1997 — 2005",
      degree:"BSc & MSc in Nutritional Sciences",
      institution:"Shahid Beheshti University of Medical Sciences, Tehran",
      note:"GPA 17.66/20 · 3rd of 1,500+ in the national master's entrance exam",
      bullets:[
        "MSc research: single-blind crossover study of a 2 g L-carnitine dose in elite taekwondo athletes, with blood lactate and treadmill-performance outcomes; published as first author.",
        "BSc project: dietary calcium intake and the prevalence of pre-eclampsia in pregnant women."
      ]
    }
  ],
  academicProjects: [
    {name:"TCR–peptide–MHC binding prediction",year:"2021",text:"Trained and evaluated CNN, bi-LSTM and feed-forward models in PyTorch on 6,913 sequences; reported test-set classification metrics including MCC and precision."},
    {name:"Lassa virus vaccine design",year:"2020",text:"Designed a computational epitope-prediction workflow using BepiPred2, BEpro, NetMHCpan and NetMHCIIpan; assessed antigen structures in PyMOL."},
    {name:"Infant gut microbiome",year:"2021",text:"Used PCA in R to compare microbiome patterns by feeding and delivery mode."},
    {name:"Heart-failure mortality prediction",year:"2021",text:"Compared random forests and neural networks with nested 10-fold cross-validation on clinical outcomes."},
    {name:"Large-scale Airbnb analysis",year:"2020",text:"Processed reviews and listing metrics using PySpark for city-level exploratory analysis."},
    {name:"Movie metadata prediction",year:"2020",text:"Applied scikit-learn to genre and revenue prediction on film metadata."},
    {name:"Missing-value imputation",year:"2020",text:"Estimated missing continuous data using k-nearest neighbours in Python."}
  ],
  bioinformaticsToolchain: [
    {area:"Sequencing & transcriptomics",tools:"STAR, BRB-seq, differential expression in R, Snakemake"},
    {area:"Metagenomics",tools:"BBduk, BBMap, KMA, metaSPAdes, MetaBAT2, Kraken2"},
    {area:"Sequence analysis",tools:"BLAST, PSI-BLAST, Clustal, HMMER, Prosite, Jpred, TMpred, VirtualRibosome"},
    {area:"Phylogenetics",tools:"jModelTest, PAUP, MrBayes, PAML, BEAUti2/BEAST2"},
    {area:"Protein structures",tools:"MODELLER, HHpred, PyMOL, FoldX, Rosetta, ProQ, RAMPAGE, Lyra, FREAD"},
    {area:"Immunological bioinformatics",tools:"NetMHCpan, NetMHCIIpan, NNAlign, MHCMotifDecon, PopCover, BepiPred, BEpro, DiscoTope"},
    {area:"Biological databases",tools:"PDB, UniProt, Swiss-Prot, GenBank"},
    {area:"Laboratory methods",tools:"ELISA, flow cytometry, basophil activation tests, RNA extraction"}
  ],
  publications: [
    {year:"2026",citation:"Heberg J, Georgiadis S, Ahmadzay ZF, Glintborg B, Castrejón I, Shoae Kazemi M, et al. Overall and sex-specific predictors of secukinumab effectiveness in European patients with psoriatic arthritis. Journal of Rheumatology. 2026;53(9):977–985."},
    {year:"2026",citation:"Ahmadzay ZF, Ørnbjerg LM, Østergaard M, et al., including Shoae Kazemi M. Impact of cardiometabolic comorbidities on clinical characteristics, prescription patterns and retention rate of first b/tsDMARD treatment in 5299 European patients with psoriatic arthritis. RMD Open. 2026;12(2):e006477."},
    {year:"2025",citation:"Georgiadis S, Ørnbjerg LM, Michelsen B, Kvien TK, Shoae Kazemi M, et al. Defining BASDAI cut-off values for disease activity states in a multinational European axial spondyloarthritis cohort. ACR Open Rheumatology. 2025;7(12):e70125."},
    {year:"2005",citation:"Shoae Kazemi M, Kimiagar M, Rastmanesh R, Taleban FA. Effects of L-carnitine acute supplementation on blood lactate and exercise performance. Scientific Journal of Kurdistan University of Medical Sciences. 2005;10(3):43–52."}
  ],
  languages:["English — fluent","Farsi — native","Danish — developing"],
  notes:["Certifications/coursework: SQL, processing and visualizing data, probability and statistics.","Contributed to EULAR congress abstracts.","References available on request."]
};