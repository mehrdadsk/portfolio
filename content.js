/* EDIT THIS FILE to update the website. See README.md and UPDATE_GUIDE.md.
   All projects represent professional experience, NOT public source repositories unless
   you explicitly add a verified public URL.
*/
window.PORTFOLIO = {
  name: "Mehrdad Shoae Kazemi",
  headline: "Data Engineer & Analyst | Clinical Data | Data Science | Bioinformatics",
  location: "Copenhagen area, Denmark",
  status: "OPEN TO DATA ENGINEERING & ANALYTICS ROLES",
  description: "At COPECARE, Rigshospitalet, I work with clinical registry data, R/Python pipelines and research quality control.",
  introduction: "Data Engineer & Analyst working with European clinical registries, reproducible analysis and data quality.",
  principle: "The most useful insight is one you can explain, reproduce and trust.",
  contact: {
    // Confirm your preferred public email before publishing; left blank intentionally.
    email: "",
    linkedin: "https://www.linkedin.com/in/mehrdadshoaekazemi/",
    github: "https://github.com/mehrdadsk",
    cv: "./cv.html"
  },
  impact: [
    { label: "Eligible patients restored", value: "1,700", suffix: "+", description: "Identified and corrected a cohort-selection defect in a medicines study." },
    { label: "Faster scientific processing", value: "10–20", suffix: "×", description: "Optimised inherited R workflows using vectorisation and parallel processing on Linux." },
    { label: "Analysis-ready research datasets", value: "30", suffix: "+", description: "Prepared pooled study datasets using clinical information from 19 European registries." }
  ],
  filters: ["All", "Data Engineering", "Clinical Research", "Data Science", "Bioinformatics"],
  projects: [
    {
      id: "eurospa-harmonisation",
      category: "Data Engineering",
      badge: "REAL-WORLD EVIDENCE",
      title: "Harmonising longitudinal clinical registry data",
      summary: "Harmonising heterogeneous longitudinal healthcare data into reusable study datasets.",
      outcome: "19 registries · 30+ datasets",
      symbol: "19",
      art: "green",
      role: "Data Engineer & Analyst / senior data-management responsibilities",
      period: "2023–present",
      challenge: "Different registries encode diagnoses, visits, therapies and adverse events in different ways. Meaningful pooled research requires consistent concepts, credible histories and traceable transformations.",
      approach: ["Map source definitions and discrepancies across countries.", "Construct patient, visit, treatment and safety structures.", "Reconstruct treatment histories, switches, gaps and longitudinal derived variables.", "Document lineage, harmonisation rules and repeatable quality controls."],
      result: "Supported delivery of more than 30 analysis-ready datasets for international studies, including cohorts of approximately 40,000–50,000 patients.",
      tools: ["R", "Python", "SQL", "ETL", "Longitudinal data", "QC"],
      confidentiality: "Descriptions are based on professional work; no actual study records or confidential registry data are shared."
    },
    {
      id: "quality-recovery",
      category: "Clinical Research",
      badge: "ROOT-CAUSE INVESTIGATION",
      title: "Investigating a cohort-selection error",
      summary: "Following an unexpected cohort discrepancy back to its source rather than accepting the output.",
      outcome: "~1,700 patients recovered",
      symbol: "QC",
      art: "violet",
      role: "Data Engineer & Analyst",
      period: "EuroSpA collaboration",
      challenge: "A data-processing defect had inadvertently excluded a substantial number of otherwise eligible patients from a medicines study.",
      approach: ["Compare intermediate pipeline outputs against study inclusion definitions.", "Investigate unexpected country-level and treatment-level counts.", "Identify the root cause of an inherited data-processing error.", "Correct the logic and revalidate affected records and outputs."],
      result: "Restored approximately 1,700 eligible patients to the study dataset and improved confidence in the underlying quality checks.",
      tools: ["Data validation", "R", "Root-cause analysis", "Cohort QC"],
      confidentiality: "This summary does not disclose study-specific patient records."
    },
    {
      id: "workflow-acceleration",
      category: "Data Engineering",
      badge: "SCIENTIFIC COMPUTING",
      title: "Optimising an inherited R pipeline",
      summary: "Redesigning slow inherited processing into efficient, reproducible scientific code.",
      outcome: "10–20× faster execution",
      symbol: "×20",
      art: "blue",
      role: "Data Engineer & Analyst",
      period: "COPECARE / EuroSpA",
      challenge: "Iterative scientific pipelines were becoming too slow as the volume of longitudinal research data increased.",
      approach: ["Profile and rethink repeated operations in inherited R workflows.", "Replace avoidable loops with vectorised operations.", "Apply parallel computation on Linux where appropriate.", "Preserve reproducibility and quality controls while improving performance."],
      result: "Achieved approximately 10–20 times faster execution in the optimised workflow.",
      tools: ["R", "Linux", "Parallel computing", "Vectorisation", "Reproducibility"],
      confidentiality: "Architecture and performance are described at a high level; no private production code is published."
    },
    {
      id: "eurospa-dashboard",
      category: "Data Science",
      badge: "SYNTHETIC DATA DEMO",
      title: "Building country-level study dashboards",
      summary: "Exploring how registry dashboards can communicate cohort composition, treatment lines and data quality.",
      outcome: "Interactive dashboard prototype",
      symbol: "BI",
      art: "amber",
      role: "Independent prototype",
      period: "2026",
      challenge: "Researchers and registry teams need intuitive views of large multi-country study outputs while respecting access controls and data privacy.",
      approach: ["Prototype overview and country-level reporting with synthetic pooled data.", "Visualise patient, treatment and visit counts and treatment-line distributions.", "Separate report preparation from a future secure access portal.", "Test repeatable dashboard-generation workflows."],
      result: "Built a working prototype to communicate the structure and potential of registry-specific reporting; production access controls are not claimed.",
      tools: ["Power BI", "Python", "R", "Synthetic data", "Dashboard design"],
      confidentiality: "Prototype examples use synthetic data only. A secure production portal is a separate proposed development."
    },
    {
      id: "tcr-pmhc",
      category: "Bioinformatics",
      badge: "MACHINE LEARNING",
      title: "Predicting TCR–pMHC binding",
      summary: "Testing deep-learning architectures for T-cell receptor and peptide–MHC binding prediction.",
      outcome: "CNN · bi-LSTM · feed-forward",
      symbol: "AI",
      art: "violet",
      role: "Academic project",
      period: "DTU, 2021",
      challenge: "Predicting T-cell receptor recognition of peptide–MHC complexes from sequence representations is a difficult biological classification problem.",
      approach: ["Train convolutional, bidirectional LSTM and feed-forward neural-network models.", "Compare performance on held-out sequences.", "Examine quality using classification metrics and interpret the limitations.", "Connect modelling choices to potential immunological research applications."],
      result: "Developed and evaluated several neural-network architectures as part of academic bioinformatics coursework.",
      tools: ["Python", "PyTorch", "CNN", "bi-LSTM", "Bioinformatics"],
      confidentiality: "Academic project description; source code is not represented as publicly available."
    },
    {
      id: "rnaseq-thesis",
      category: "Bioinformatics",
      badge: "TRANSCRIPTOMICS",
      title: "Analysing BRB-seq transcriptomic data",
      summary: "Processing intestinal transcriptomic data for a master's thesis in food allergy research.",
      outcome: "BRB-seq → analysis pipeline",
      symbol: "RNA",
      art: "green",
      role: "MSc thesis, DTU",
      period: "2022",
      challenge: "Understand transcriptional changes relevant to neuro-immune regulation of allergic inflammation using sequencing data.",
      approach: ["Build a Linux-based sequencing analysis workflow.", "Align BRB-seq reads using STAR.", "Conduct differential gene expression analysis in R.", "Create figures and reproducible scientific summaries."],
      result: "Established a functioning intestinal transcriptomics workflow and produced differential-expression analyses for the thesis.",
      tools: ["R", "Linux", "STAR", "RNA-seq", "BRB-seq"],
      confidentiality: "Academic research summary; no unpublished sample-level datasets are shared."
    },
    {
      id: "clinical-operations",
      category: "Data Engineering",
      badge: "OPERATIONAL ANALYTICS",
      title: "Healthcare data and reporting systems",
      summary: "Integrating hospital and university nutrition, inventory and budget information for practical management decisions.",
      outcome: "Web-based data workflows",
      symbol: "SQL",
      art: "blue",
      role: "Data Analyst",
      period: "2006–2015",
      challenge: "Separate health, nutritional and operational datasets made reporting and coordination slow and difficult.",
      approach: ["Join patient and nutrition records with hospital operational information.", "Build PHP/MySQL-based data-entry and reporting tools.", "Automate recurring inventory, consumption and budget reports.", "Translate operational requirements into reusable reporting outputs."],
      result: "Helped replace manual processes with integrated online tools and more consistent management reporting.",
      tools: ["SQL", "PHP", "MySQL", "Reporting", "Healthcare data"],
      confidentiality: "No private hospital or university data are displayed."
    }
  ],
  expertise: [
    { id:"engineering", name:"Data Engineering", description:"ETL pipelines, source harmonisation and reproducible data processing.", skills:["Python / pandas","R / tidyverse","SQL","ETL / ELT","Data modelling","Linux","Git / GitLab","Parallel processing"] },
    { id:"clinical", name:"Clinical Data & Real-World Evidence", description:"Longitudinal patient, visit and treatment data for multi-registry studies.", skills:["Clinical registries","Cohort definitions","Drug exposure histories","Treatment retention","Kaplan–Meier","Quality control","Data lineage"] },
    { id:"science", name:"Data Science & Reporting", description:"Statistical analysis, prediction modelling and reporting prototypes.", skills:["Power BI","Statistics","scikit-learn","Data visualisation","Dashboard design","Reproducible reports"] },
    { id:"bio", name:"Bioinformatics", description:"Computational analysis of biological sequences and gene expression.", skills:["RNA-seq / BRB-seq","STAR alignment","Differential expression","PyTorch","CNN / bi-LSTM","TCR–pMHC models"] }
  ],
  tools: ["Python", "R", "SQL", "pandas", "NumPy", "scikit-learn", "PyTorch", "Power BI", "Linux", "Git", "GitLab", "R Markdown", "Databricks fundamentals (training)", "ETL", "Quality control", "Longitudinal modelling"],
  timeline: [
    { date:"2023 — PRESENT",title:"Data Engineer & Analyst",company:"COPECARE · Rigshospitalet, Denmark",description:"Building analysis-ready assets and scientific workflows for the EuroSpA international registry collaboration. My responsibilities also include senior-level data-management coordination.",points:["Harmonise patient, visit and treatment data for international clinical studies.","Develop reusable ETL, quality-control and research reporting workflows.","Work with clinical experts, statisticians and registry managers.","Improve robustness, runtime and reproducibility of inherited code."] },
    { date:"2020 — 2022",title:"MSc · Bioinformatics",company:"Technical University of Denmark (DTU)",description:"MSc in Engineering, Bioinformatics and Systems Biology. Worked with biological data, computational modelling and immunology-related scientific questions.",points:["Master's thesis on neuro-immune regulation in food allergy.","BRB-seq / RNA-seq workflow on Linux with STAR and R.","Machine-learning coursework, including TCR–pMHC binding prediction."] },
    { date:"2008 — 2015",title:"Data Analyst",company:"Mashhad University of Medical Sciences, Iran",description:"Worked across nutritional and health data, university reporting and operational systems.",points:["Developed web-based information and reporting tools.","Integrated nutrition, health, inventory and budget data.","Automated recurring reporting and replaced manual data processes."] },
    { date:"2006 — 2008",title:"Data Analyst",company:"Ghaem Hospital, Mashhad, Iran",description:"Supported clinical nutrition data analysis and operational reporting at a teaching hospital.",points:["Linked patient and ward-level information to operational datasets.","Contributed to web-based patient and food-service data-entry tools.","Improved recurring management reporting."] },
    { date:"1997 — 2005",title:"Nutritional Sciences",company:"Shahid Beheshti University of Medical Sciences, Tehran",description:"Completed BSc and MSc degrees in Nutritional Sciences, establishing a clinical and research foundation.",points:["Studied applied nutritional science and research methodology.","Published first-author research on L-carnitine, lactate and exercise performance."] }
  ],
  education: [
    { date:"2020–2022", degree:"MSc, Bioinformatics and Systems Biology", school:"Technical University of Denmark (DTU)", note:"MSc in Engineering · Thesis: Neuro-immune regulation in food allergy" },
    { date:"1997–2005", degree:"BSc & MSc, Nutritional Sciences", school:"Shahid Beheshti University of Medical Sciences", note:"" }
  ],
  publications: [
    { year:"2026", title:"Predictors of secukinumab effectiveness in European patients with psoriatic arthritis", journal:"Journal of Rheumatology", link:"" },
    { year:"2026", title:"Impact of cardiometabolic comorbidities on first b/tsDMARD treatment in European psoriatic arthritis", journal:"RMD Open", link:"https://doi.org/10.1136/rmdopen-2026-006477" },
    { year:"2025", title:"Defining BASDAI cut-off values in a multinational European axial spondyloarthritis cohort", journal:"ACR Open Rheumatology", link:"" },
    { year:"2005", title:"L-carnitine supplementation, blood lactate and exercise performance in athletes", journal:"Scientific Journal of Kurdistan University of Medical Sciences", link:"" }
  ]
};