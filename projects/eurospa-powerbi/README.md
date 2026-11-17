# EuroSpA Power BI — interactive synthetic portfolio case study (2026)

[Open the interactive dashboard](https://mehrdadsk.github.io/portfolio/projects/eurospa-powerbi/)

The project landing page is now a **working browser-based dashboard** with six navigable report sections and functional slicers. Its single self-contained HTML file embeds 3,637 synthetic treatment-level records derived from `EuroSpA_PowerBI_Clean_Integrated.zip`. It does not require Power BI authentication, a server or uploading a dataset.

## Six interactive sections

1. Registry Overview — patients, treatments, visits and country contributions.
2. Treatment Lines — drug-class composition across therapy lines and individual drug names.
3. Visit Completeness — observed visit checkpoints and per-variable missingness.
4. Executive KPI Scorecard — actual versus configured thresholds (80% completeness, 90% structural coverage, at most 0.5% unmapped, 99% treatment-line coverage).
5. Research Feasibility — eligible treatment/patient counts, variable completeness, paired outcomes, retention maturity and countries with usable outcomes.
6. Definitions & Security — numerator/denominator rules, interpretation and limitations.

The browser version uses country, diagnosis, gender, age at drug baseline, treatment line, drug class, drug name, variable, timepoint and retention horizon selectors. Charts and tables recompute from the synthetic records, and clicking a country row or class segment applies a filter.

## Provenance and scope

Source: `EuroSpA_PowerBI_Clean_Integrated.zip`, including the master PBIP page definitions, semantic model measures, `research_feasibility.py`, `eurospa_extensions.py`, `drug_class_map.csv` and `examples/synthetic_pooled_data.csv`. Clinical variable completeness was checked against the published synthetic verification counts.

This is **not** Power BI itself: Publish to web is disabled on the hospital account. Exact pixel-for-pixel report rendering, DAX execution, Power BI's full selection semantics and native slicer multiselection are not replicated; equivalent web controls have been implemented and the layout is adapted for the portfolio. Do not represent the site as a native Power BI embed. The working PBIP and full production pipeline are not publicly hosted.

**Privacy:** only artificial synthetic treatment episodes are present. Never expose confidential EuroSpA study data, credentials or organization-specific access details in this public page.

[Documented DAX measures](./kpi-source.md) · [Download CSV of verified selected metrics](./verified-synthetic-metrics.csv)
