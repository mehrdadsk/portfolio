/* EDIT THIS FILE to update the website. See README.md and UPDATE_GUIDE.md.
   All projects represent professional experience, NOT public source repositories unless
   you explicitly add a verified public URL.
*/
window.PORTFOLIO = {
  name: "Mehrdad Shoae Kazemi",
  headline: "Data Engineer & Analyst | Clinical Data | Data Science | Bioinformatics",
  location: "Copenhagen area, Denmark",
  status: "OPEN TO MEANINGFUL DATA CHALLENGES",
  description: "I build reliable data systems and turn complex scientific data into meaningful insights.",
  introduction: "At COPECARE, Rigshospitalet, I help turn real-world clinical data from European registries into analysis-ready research assets. I enjoy investigating unexpected results, making inherited code faster and more reliable, and collaborating with researchers to answer the right question.",
  principle: "The most useful insight is one you can explain, reproduce and trust.",
  contact: {
    // Confirm your preferred public email before publishing; left blank intentionally.
    email: "",
    linkedin: "https://www.linkedin.com/in/mehrdadshoaekazemi/",
    github: "https://github.com/mehrdadsk",
    cv: "./cv.html"
  },
  impact: [
    { label: "REGISTRY COLLABORATION", value: "19", suffix: "", description: "European rheumatology registries integrated into multi-country studies", icon: "✳" },
    { label: "DATA QUALITY RECOVERY", value: "1,700", suffix: "+", description: "Eligible patients recovered after finding a pipeline defect", icon: "↗" },
    { label: "PIPELINE MODERNISATION", value: "10–20", suffix: "×", description: "Faster runtime through refactoring, vectorisation and parallelisation", icon: "⌘" },
    { label: "RESEARCH DELIVERABLES", value: "30", suffix: "+", description: "Analysis-ready pooled datasets prepared for research teams", icon: "◈" }
  ],
  filters: ["All", "Data Engineering", "Clinical Research", "Data Science", "Bioinformatics"],
  projects: [
    {
      id: "eurospa-harmonisation",
      category: "Data Engineering",
      badge: "REAL-WORLD EVIDENCE",
      title: "One coherent picture from 19 registries",
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
      title: "Finding the error behind missing patients",
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
      title: "Making research pipelines 10–20× faster",
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
      title: "Interactive insight for multi-country studies",
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
      title: "Learning biological interactions from sequence",
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
      title: "Exploring the neuro-immune dialogue",
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
      title: "Moving healthcare reporting beyond paper",
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
    { id:"engineering", icon:"⌘", name:"Data Engineering", eyebrow:"BUILD RELIABLE FOUNDATIONS", heading:"From messy sources to trusted datasets.", description:"I design practical, reproducible data workflows: source mapping, ETL, quality controls, traceable transformations and longitudinal data models.", proof:"Example: integrating 19 European registries and delivering 30+ pooled research datasets.", skills:["Python & pandas","R & tidyverse","SQL","ETL / ELT","Data harmonisation","Metadata & lineage","Linux / Git","Parallel processing"] },
    { id:"clinical", icon:"✳", name:"Clinical Data & RWE", eyebrow:"TRANSLATE COMPLEXITY", heading:"Make real-world evidence research-ready.", description:"My clinical data work covers longitudinal cohorts, treatment exposure histories, inclusion logic, quality investigations and study-specific definitions across international teams.", proof:"Example: investigating a data issue that excluded approximately 1,700 eligible patients.", skills:["Real-world evidence","Clinical registries","Patient / visit / treatment models","Cohort definitions","Kaplan–Meier","Quality assurance","Data interpretation","Registry collaboration"] },
    { id:"science", icon:"↗", name:"Data Science & BI", eyebrow:"MOVE FROM DATA TO ACTION", heading:"Find the signal. Explain the meaning.", description:"I combine statistical and analytical thinking with practical reporting, visualisation, prediction modelling and thoughtful communication of uncertainty.", proof:"Example: synthetic-data Power BI prototype for study-specific, country-level visual reporting.", skills:["Python","R","scikit-learn","Statistics","Power BI","Exploratory analysis","ML models","Reproducible reporting"] },
    { id:"bio", icon:"◎", name:"Bioinformatics & AI", eyebrow:"CONNECT COMPUTING & BIOLOGY", heading:"Computational methods for biological questions.", description:"My MSc in Bioinformatics and Systems Biology included sequencing workflows, biological data analysis and neural-network modelling of molecular interactions.", proof:"Example: BRB-seq transcriptomics and CNN / bi-LSTM models for TCR–pMHC binding.", skills:["Transcriptomics","RNA-seq / BRB-seq","STAR","PyTorch","CNN / bi-LSTM","Protein interactions","Biological statistics","Linux"] }
  ],
  tools: ["Python", "R", "SQL", "pandas", "NumPy", "scikit-learn", "PyTorch", "Power BI", "Linux", "Git", "GitLab", "R Markdown", "Databricks fundamentals (training)", "ETL", "Quality control", "Longitudinal modelling"],
  timeline: [
    { date:"2023 — PRESENT",title:"Data Engineer & Analyst",company:"COPECARE · Rigshospitalet, Denmark",description:"Building analysis-ready assets and scientific workflows for the EuroSpA international registry collaboration. My responsibilities also include senior-level data-management coordination.",points:["Integrate and validate longitudinal data from 19 European registries.","Develop reusable ETL, quality-control and research reporting workflows.","Work with clinical experts, statisticians and registry managers.","Improve robustness, runtime and reproducibility of inherited code."] },
    { date:"2020 — 2022",title:"MSc · Bioinformatics",company:"Technical University of Denmark (DTU)",description:"MSc in Engineering, Bioinformatics and Systems Biology. Worked with biological data, computational modelling and immunology-related scientific questions.",points:["Master's thesis on neuro-immune regulation in food allergy.","BRB-seq / RNA-seq workflow on Linux with STAR and R.","Machine-learning coursework, including TCR–pMHC binding prediction."] },
    { date:"2008 — 2015",title:"Data Analyst",company:"Mashhad University of Medical Sciences, Iran",description:"Worked across nutritional and health data, university reporting and operational systems.",points:["Developed web-based information and reporting tools.","Integrated nutrition, health, inventory and budget data.","Automated recurring reporting and replaced manual data processes."] },
    { date:"2006 — 2008",title:"Data Analyst",company:"Ghaem Hospital, Mashhad, Iran",description:"Supported clinical nutrition data analysis and operational reporting at a teaching hospital.",points:["Linked patient and ward-level information to operational datasets.","Contributed to web-based patient and food-service data-entry tools.","Improved recurring management reporting."] },
    { date:"1997 — 2005",title:"Nutritional Sciences",company:"Shahid Beheshti University of Medical Sciences, Tehran",description:"Completed BSc and MSc degrees in Nutritional Sciences, establishing a clinical and research foundation.",points:["Studied applied nutritional science and research methodology.","Published first-author research on L-carnitine, lactate and exercise performance."] }
  ],
  education: [
    { date:"2020–2022", degree:"MSc, Bioinformatics and Systems Biology", school:"Technical University of Denmark (DTU)", note:"MSc in Engineering · Thesis: Neuro-immune regulation in food allergy" },
    { date:"1997–2005", degree:"BSc & MSc, Nutritional Sciences", school:"Shahid Beheshti University of Medical Sciences", note:"Clinical research and nutritional sciences" }
  ],
  publications: [
    { year:"2026", title:"Predictors of secukinumab effectiveness in European patients with psoriatic arthritis", journal:"Journal of Rheumatology", link:"" },
    { year:"2026", title:"Impact of cardiometabolic comorbidities on first b/tsDMARD treatment in European psoriatic arthritis", journal:"RMD Open", link:"https://doi.org/10.1136/rmdopen-2026-006477" },
    { year:"2025", title:"Defining BASDAI cut-off values in a multinational European axial spondyloarthritis cohort", journal:"ACR Open Rheumatology", link:"" },
    { year:"2005", title:"L-carnitine supplementation, blood lactate and exercise performance in athletes", journal:"Scientific Journal of Kurdistan University of Medical Sciences", link:"" }
  ]
};