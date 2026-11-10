# Portfolio Update Guide

This guide assumes that the repository is **https://github.com/mehrdadsk/portfolio**.

## 1. First-time publishing

1. Sign in to GitHub and visit the repository.
2. Click **Settings**, then **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Set **Branch: main** and **Folder: /(root)**.
5. Click **Save**. Once GitHub finishes deployment, visit **https://mehrdadsk.github.io/portfolio/**.
6. If the site shows a 404 initially, check the Pages settings and deployment status before modifying code.

## 2. The fastest way to change your information

1. Open \`content.js\` in your repository.
2. Click the pencil icon (**Edit this file**).
3. Change only the intended text, preserving quotes, commas, braces and brackets.
4. Choose **Commit changes**.
5. Refresh the live website after GitHub Pages has deployed the change (hard refresh with Ctrl+F5 if needed).

Content uses ordinary JavaScript objects. A string is in quotes, objects use braces \`{ }\`, arrays use brackets \`[ ]\`, and adjacent items need commas.

Example — update your summary:

\`\`\`js
description: "I design reliable data pipelines and turn complex research data into clear decisions.",
\`\`\`

Example — set the email button once you decide which address you want public:

\`\`\`js
contact: {
  email: "your-public-address@example.com",
  linkedin: "https://www.linkedin.com/in/mehrdadshoaekazemi/",
  github: "https://github.com/mehrdadsk",
  cv: "./cv.html"
},
\`\`\`

An empty \`email: ""\` suppresses the Email button so no unconfirmed contact address is exposed.

## 3. Add a new project

In \`content.js\`, find \`projects: [\` and copy one existing project object within the array. Replace the fields. For example:

\`\`\`js
{
  id: "synthetic-data-quality-demo",
  category: "Data Engineering",
  badge: "PUBLIC DEMO",
  title: "Quality control in a synthetic registry",
  summary: "An example showing reproducible checks on sample data.",
  outcome: "Interactive quality dashboard",
  symbol: "QC",
  art: "blue",
  role: "Personal project",
  period: "2026",
  challenge: "Demonstrating consistent rules across messy input formats.",
  approach: [
    "Generate fake, non-identifiable example records.",
    "Write reusable quality rules.",
    "Document assumptions and export visual results."
  ],
  result: "A clear walkthrough that others can reproduce using synthetic data.",
  tools: ["Python", "pandas", "Quality control"],
  confidentiality: "All example data are synthetic."
},
\`\`\`

**Allowed category values** (to make the filters work): \`Data Engineering\`, \`Clinical Research\`, \`Data Science\`, \`Bioinformatics\`.

**Allowed art values:** \`green\`, \`violet\`, \`blue\`, \`amber\`.

When adding a project, ensure there is a comma separating it from the previous/next project object. Every new project's \`id\` should be unique. Do not claim a GitHub demo exists until it is actually available.

## 4. Change an impact statistic

Within \`impact: [\`, use a record like:

\`\`\`js
{ label: "REGISTRIES", value: "19", suffix: "", description: "European registries", icon: "✳" },
\`\`\`

\`value\` and \`suffix\` are displayed together. The project cards, CV and biography are separate sections: update all relevant claims when the underlying number changes.

## 5. Update expertise and technology keywords

- Edit \`expertise\` to change the four clickable skill areas.
- Edit \`tools\` for the technology tag cloud.
- The résumé automatically reuses the same \`tools\` list.
- Make a distinction between production experience and training, e.g. **Databricks fundamentals (training)**.

## 6. Update career timeline / degrees / publications

- \`timeline\`: position title, organization, dates, summary and bullet points.
- \`education\`: degree, school, dates and research notes.
- \`publications\`: publication year, title, journal and optional verified public \`link\` URL.

Leave \`link: ""\` when you have not verified a public publication URL.

## 7. Download your CV as PDF

1. Open **https://mehrdadsk.github.io/portfolio/cv.html** once publishing is enabled.
2. Click **Print / Save as PDF**.
3. Select **Save as PDF** as the printer destination.
4. Check pagination and save the file.

The résumé page is a concise online professional profile, not an automatically tailored job application. You can tailor a separate CV for each vacancy.

## 8. Change the visual style

In \`styles.css\`, the first \`:root\` block sets the dark theme. The \`:root[data-theme="light"]\` block sets the light theme.

Useful variables:
- \`--bg\`: background
- \`--panel\`: card backgrounds
- \`--fg\`: main text
- \`--text\`: muted body text
- \`--accent\`: primary green accent
- \`--border\`: card/divider borders

The headline is in \`index.html\`. To change its wording, edit the text inside \`<h1 id="hero-title">...\`.

## 9. Add a professional photograph

This version deliberately uses a custom data/network illustration instead of a stock portrait. To add a photo:
1. Add a photo you own (for example \`assets/portrait.webp\`) to the repository.
2. Insert an image element in \`index.html\` where desired.
3. Use descriptive \`alt\` text and style it in \`styles.css\`.
4. Avoid uploading private metadata with photos.

For better social previews, you may replace \`social-card.svg\` with your own graphic. Update the corresponding \`og:image\` tag in \`index.html\`.

## 10. Work with Git locally

\`\`\`bash
git clone https://github.com/mehrdadsk/portfolio.git
cd portfolio
python -m http.server 8000
\`\`\`

Edit in VS Code, then publish with:

\`\`\`bash
git add .
git commit -m "Update portfolio content"
git push origin main
\`\`\`

For substantial design or code changes, create a separate branch and open a pull request before merging.

## 11. Troubleshooting

**Blank cards / missing sections:** There may be a JavaScript syntax error in \`content.js\`. Open the browser Developer Tools (F12) and inspect **Console**. Check commas and quotes.

**Changes not visible:** Confirm the commit is on \`main\`, check Pages deployment, then refresh with Ctrl+F5.

**Github Pages 404:** In Settings → Pages, confirm main / root is selected and allow time for deployment.

**Email button absent:** This is intentional while \`contact.email\` is blank.

**Projects filter incorrectly:** Check that every project's \`category\` matches one of the values in \`filters\`.

**PDF looks different:** Use Chrome or Edge's print preview; enable background graphics if you want decorative background colors.

## 12. Publication checklist

- Confirm all claims, names, dates, publications and metrics.
- Choose and add your preferred public email address.
- Confirm LinkedIn and GitHub links.
- Ensure screenshots and datasets are either synthetic or approved for public release.
- Review mobile layout and all case studies.
- Test a CV export.
- Enable and verify GitHub Pages before sharing the portfolio link with recruiters.

### Suggested future improvements
- Personal portrait and optional introduction video
- Separate dedicated project demos using synthetic datasets
- GitHub-backed case studies with runnable examples
- Custom domain and basic search engine performance review
- Validated PDF version of a selected master CV
