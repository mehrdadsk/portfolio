# EuroSpA Power BI & Research Feasibility — verified portfolio case study (2026)

This project page describes the **real November 2026 Power BI Desktop PBIP** in the cleaned EuroSpA repository, not an independently invented five-tab JavaScript simulation.

[Open the portfolio case study](https://mehrdadsk.github.io/portfolio/projects/eurospa-powerbi/)

## What was verified

Source archive: `EuroSpA_PowerBI_Clean_Integrated.zip`, specifically `template/PowerBI_charts/EuroSpA_Dashboard.Report/definition/pages`, the TMDL semantic model, `run.py`, `README.md`, and `examples/synthetic_pooled_data.csv`.

The master has **six actual pages**:
1. Registry Overview
2. Treatment Lines
3. Visit Completeness
4. Executive KPI Scorecard
5. Research Feasibility
6. Definitions & Security

Research Feasibility measures:
- eligible treatments and eligible patients (patient counts have additive cohort limitations);
- clinical follow-up completeness by variable and month;
- retention follow-up adequacy, number at risk and observed events;
- paired baseline + follow-up completeness;
- country-level usable-outcome counts and shares.

The model supports Country, Diagnosis, Gender, Age at drug baseline, Treatment Line, Drug Class, Drug Name, Clinical Variable, Outcome Month and Retention Month slicers.

**Thresholds:** Low <20%; Medium 20–40%, inclusive; Sufficient >40%. They are user-specified completeness labels, not statistical power determinations.

## Authentic synthetic example

The archive's approved synthetic example contains **2,468 distinct country+patient pairs, 3,637 treatment episodes, 9,524 synthetic recorded timepoint visits, and 17 registries**.

The unfiltered outcome table in the portfolio page was counted from the original treatment-level CSV. Download [verified-synthetic-metrics.csv](./verified-synthetic-metrics.csv) or inspect [kpi-source.md](./kpi-source.md) for actual PBIP measure definitions.

The source PBIP and full Python pipeline remain local and have **not** been represented as publicly hosted. The public source here is the truthful portfolio case study, not the full working Power BI solution.

## What was removed

The former page showed **five recreated browser dashboards**, an animated fake-treatment chart and an illustrative "2 of 4 targets achieved" snapshot. Those visuals and claims have been removed from the rendered site because they were not exports from the current six-page PBIP and were misleading in a portfolio about real work.

## Privacy

Use synthetic data only in public examples. Do not publish any real pooled patient-level data, confidential study screenshots, credentials or organisation-specific server paths. An approved **synthetic** Power BI Desktop export can be added later, clearly labeled as a screenshot rather than an HTML recreation.
