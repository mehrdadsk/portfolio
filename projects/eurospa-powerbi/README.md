# EuroSpA synthetic pooled-data Power BI prototype (2026)

This is a **portfolio demonstration** of concepts from a Power BI reporting project. The original project was developed locally using synthetic pooled EuroSpA-style data. A **public browser-based recreation** of selected views is hosted here:

**[Open the interactive chart and table demo](https://mehrdadsk.github.io/portfolio/projects/eurospa-powerbi/)**

## What recruiters can inspect

- **Registry Overview** — patient, treatment and visit totals, with a country dropdown and colored selected-registry share against a light-grey remainder.
- **Treatment Lines** — first-, second-, third- and fourth-plus-line treatment class distributions (TNFi, IL-17i, and all other drug classes).
- **Synthetic Registry Summary table** — patient, treatment and visit counts for each of 17 example registries.
- **Animated treatment-line preview** — [view animated-preview.svg](https://mehrdadsk.github.io/portfolio/projects/eurospa-powerbi/animated-preview.svg).

The browser demo uses vanilla JavaScript and SVG/CSS, **not** an embedded Power BI report. It is an illustrative, independently viewable companion to the original Power BI project, so recruiters do not need organizational Power BI access.

## Files

| File | Purpose |
| --- | --- |
| [index.html](./index.html) | Browser demo with plots and summary table |
| [demo.js](./demo.js) | Country selection, aggregation, stacked shares, table rendering |
| [demo.css](./demo.css) | Accessible responsive styling |
| [data.js](./data.js) | Synthetic aggregate example data |
| [animated-preview.svg](./animated-preview.svg) | Lightweight looping visual preview |

## Data provenance

Source of these **synthetic-only aggregates**: `EuroSpA_PowerBI_Synthetic_Summaries_Updated.xlsx` prepared during the project, using the `RegistrySummary`, `TreatmentSummary` and `GlobalTotals` worksheets. Only aggregate counts are published in `data.js`; the original workbook (which also contains synthetic row-level identifiers) is **not uploaded**.

- 17 synthetic registries
- 2,468 synthetic patients
- 3,637 synthetic treatments
- 9,524 synthetic visits

The treatment line visualization derives from `TreatmentSummary` and groups drug classes:
- **TNFi** — source class `TNFi`
- **IL-17i** — source class `IL-17i`
- **Other** — all remaining classes in the synthetic source: e.g. JAKi, IL-23i, IL-12/23i, PDE4i, TYK2i, etc.

Country labels (including `SF`) follow the source workbook. Values are illustrative and must not be interpreted as real EuroSpA study results.

## Original Power BI and pipeline source

The accepted working prototype was **Version 5**, with registry overview, treatment-line charts and country filtering. The local project was developed in `synthetic_eurospa_powerbi_dashboard` using Python, R and Power BI project files (`.pbip`).

**The complete original local source project has not been pushed to this connected GitHub repository yet.** The public `demo.js` and `data.js` are new portfolio demo code, not the original Python or Power BI pipeline. Do not treat them as a substitute for original `.pbip` source.

When the original project is approved for public sharing, add a separate GitHub repository (or a `powerbi-source/` directory) containing the permitted scripts, the `.pbip` project, sanitized instructions and selected output screenshots, then update `codeUrl` / `plotsUrl` in the `eurospa-dashboard` entry of `content.js`.

## Privacy & responsible sharing

Do not publish real patient-level data, private registry extracts, internal Power BI sharing links, hospital credentials or server configuration. Use synthetic examples and approved high-level method descriptions only.
