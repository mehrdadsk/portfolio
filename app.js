/* Recruiter-facing portfolio. All factual content is maintained in content.js. */
(() => {
  "use strict";
  const data=window.PORTFOLIO;
  if(!data)return;
  const $=(selector,root=document)=>root.querySelector(selector);
  const el=(tag,className,text)=>{
    const node=document.createElement(tag);
    if(className)node.className=className;
    if(text!==undefined)node.textContent=String(text);
    return node;
  };
  const set=(selector,value)=>{const node=$(selector);if(node)node.textContent=String(value ?? "");};
  const append=(parent,...nodes)=>{parent.append(...nodes);return parent;};
  set("#hero-description",data.description);
  if(data.personalStory)set("#personal-story",data.personalStory);
  set("#updated-year",new Date().getFullYear());

  // The homepage includes real static <li> elements for reliable first paint,
  // even if JavaScript fails or gets blocked. Refresh them from content.js when
  // available, keeping only concise summaries (never full descriptions).
  const jobs = data.timeline.filter(item =>
    item.title !== "Nutritional Sciences" && !item.title.startsWith("MSc")
  );
  const homeSummaries = [
    ["#home-skills", data.expertise.map(item =>
      item.name + " — " + item.skills.slice(0, 3).join(", ")
    )],
    ["#home-experience", jobs.map(item =>
      item.date + " — " + item.title + ", " + item.company
    )],
    ["#home-projects", data.projects.slice(0, 5)],
    ["#home-achievements", data.impact.map(item =>
      item.value + (item.suffix || "") + " — " + item.label.toLowerCase()
    )]
  ];
  for (const [selector, titles] of homeSummaries) {
    const list = $(selector);
    if (!list || !titles.length) continue;
    list.replaceChildren(...titles.map(entry => {
      if(selector!=="#home-projects") return el("li", "", entry);
      const item=el("li","");
      item.append(el("strong","",(entry.year || "Year to confirm")+" — "));
      const link=el("a","home-project-link",entry.title);
      link.href=entry.demoUrl || "./project.html?id="+encodeURIComponent(entry.id);
      item.append(link);
      return item;
    }));
  }

  // Results: the only metric summary on the homepage. Each number has a full label.
  const resultList=$("#impact-grid");
  if(resultList)for(const item of data.impact){
    const article=el("article","recruiter-result");
    const metric=append(el("strong","recruiter-result-value"),document.createTextNode(item.value),el("span","",item.suffix||""));
    const copy=append(el("div","recruiter-result-copy"),el("h3","",item.label),el("p","",item.description));
    article.append(metric,copy);
    resultList.append(article);
  }

  // Project cards describe the subject only; outcomes are described in case study details.
  const filterRoot=$("#project-filters"),grid=$("#project-grid"),dialog=$("#project-dialog");
  if(filterRoot && grid && dialog){
  let active="All";
  const btnFilters=data.filters||["All"];
  for(const name of btnFilters){
    const button=el("button","filter-button",name);
    button.type="button";button.dataset.filter=name;
    button.setAttribute("aria-pressed",String(name==="All"));
    button.addEventListener("click",()=>{
      active=name;
      for(const b of filterRoot.children)b.setAttribute("aria-pressed",String(b.dataset.filter===name));
      renderProjects();
    });
    filterRoot.append(button);
  }
  // Every project has an explicit year. Real public resource URLs appear only
  // when provided; other projects use a truthful "not yet published" status.
  function resourceLink(url,label){
    const a=el("a","project-resource-link",label+" ↗");
    a.href=url;
    if(/^https?:\/\//.test(url)){
      a.target="_blank";a.rel="noopener noreferrer";
    }
    return a;
  }
  function addResources(parent,p){
    const panel=el("div","project-resources");
    if(p.demoUrl)panel.append(resourceLink(p.demoUrl,"Interactive demo"));
    if(p.plotsUrl)panel.append(resourceLink(p.plotsUrl,"Plots"));
    if(p.contributionUrl)panel.append(resourceLink(p.contributionUrl,"Pooled contribution"));
    if(p.completenessUrl)panel.append(resourceLink(p.completenessUrl,"Completeness report"));
    if(p.tableUrl)panel.append(resourceLink(p.tableUrl,"Data table"));
    if(p.codeUrl)panel.append(resourceLink(p.codeUrl,p.codeLabel||"GitHub code"));
    if(!panel.children.length){
      panel.append(el("span","project-resource-note","Code & visual examples not public yet"));
    }
    parent.append(panel);
  }
  function renderProjects(){
    grid.replaceChildren();
    const projects=data.projects.filter(p=>active==="All"||p.category===active);
    for(const p of projects){
      const article=el("article","project-card recruiter-project-card");
      article.id="project-"+p.id;
      if(p.featured)article.classList.add("featured-case-study");
      const open=el("button","project-open-button");
      open.type="button";
      open.setAttribute("aria-label","Read "+(p.year||"")+" project: "+p.title);
      open.append(
        el("span","project-meta",p.category),
        el("span","project-year",p.year||p.period||"Year to confirm"),
        el("h3","project-title",p.title),
        el("p","project-blurb",p.summary),
        el("span","recruiter-project-link","Read case study ↗")
      );
      open.addEventListener("click",()=>showProject(p));
      article.append(open);
      if(p.previewUrl){
        const img=el("img","project-animated-preview");
        img.src=p.previewUrl;img.loading="lazy";
        img.alt="Animated synthetic-data treatment-line charts, recreated as a public illustrative preview";
        article.append(img);
      }
      addResources(article,p);
      grid.append(article);
    }
  }
  renderProjects();
  // Support direct links to a project card after dynamic cards are rendered.
  const projectHash=window.location.hash.slice(1);
  if(projectHash.startsWith("project-")){
    const selectedCard=document.getElementById(projectHash);
    if(selectedCard)window.requestAnimationFrame(()=>selectedCard.scrollIntoView({block:"start"}));
  }
  function showProject(p){
    const content=$("#dialog-content");content.replaceChildren();
    content.append(el("div","dialog-kicker",(p.year||"")+" · "+p.category),el("h2","",p.title));
    const context=el("p","dialog-lede",p.role+" · "+p.period);
    content.append(context);
    if(p.previewUrl){
      const pic=el("img","case-study-preview");
      pic.src=p.previewUrl;
      pic.alt="Animated chart preview using synthetic registry treatment-line counts";
      content.append(pic);
    }
    const section=(title,body)=>{
      const panel=el("section","dialog-section");
      panel.append(el("h3","",title),el("p","",body));
      content.append(panel);
    };
    section("Context",p.challenge);
    const approach=el("section","dialog-section");
    const list=el("ul");
    for(const item of p.approach)list.append(el("li","",item));
    approach.append(el("h3","","Work performed"),list);
    content.append(approach);
    section("Result",p.result);
    const sources=el("section","dialog-section");
    sources.append(el("h3","","Code, plots & tables"));
    if(p.codeNote)sources.append(el("p","",p.codeNote));
    addResources(sources,p);
    content.append(sources);
    const tools=el("div","dialog-tags");
    for(const tool of p.tools)tools.append(el("span","dialog-tag",tool));
    content.append(tools);
    if(p.confidentiality)content.append(el("p","dialog-notice",p.confidentiality));
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }
  function closeDialog(){if(dialog.open)dialog.close();document.body.classList.remove("dialog-open");}
  $(".dialog-close").addEventListener("click",closeDialog);
  dialog.addEventListener("click",event=>{if(event.target===dialog)closeDialog();});
  dialog.addEventListener("close",()=>document.body.classList.remove("dialog-open"));

  }

  // Skills are visible together, never hidden behind tabs or repeated in a tool cloud.
  const skills=$("#skill-cards");
  if(skills)for(const s of data.expertise){
    const card=el("article","recruiter-skill-card");
    const heading=el("h3","",s.name);
    const desc=el("p","",s.description);
    const list=el("ul","recruiter-skill-list");
    for(const item of s.skills)list.append(el("li","",item));
    card.append(heading,desc,list);
    skills.append(card);
  }

  // Employment only; education is displayed solely in the education section.
  const career=$("#career-list");
  if(career)for(const e of data.timeline.filter(item=>item.title!=="Nutritional Sciences" && !item.title.startsWith("MSc"))){
    const entry=el("article","recruiter-career-entry");
    const meta=el("div","recruiter-career-meta");
    meta.append(el("span","timeline-date",e.date),el("h3","",e.title),el("p","",e.company));
    const bullets=el("ul");
    for(const point of e.points.slice(0,3))bullets.append(el("li","",point));
    entry.append(meta,bullets);
    career.append(entry);
  }

  const education=$("#education-panel");
  if(education){
  education.append(el("div","mini-heading","DEGREES"));
  for(const e of data.education){
    const item=el("article","edu-item");
    item.append(el("span","",e.date),el("h3","",e.degree),el("p","",e.school));
    if(e.note)item.append(el("p","recruiter-edu-note",e.note));
    education.append(item);
  }
  }
  const publications=$("#publication-list");
  if(publications)for(const pub of data.publications){
    const item=el("article","pub-item");
    const details=el("div");
    details.append(el("h3","",pub.title),el("p","",pub.journal+" · "+pub.year));
    if(pub.link){
      const link=el("a","","Read paper ↗");
      link.href=pub.link;link.target="_blank";link.rel="noopener noreferrer";
      details.append(link);
    }
    item.append(details);
    publications.append(item);
  }

  const contacts=$("#contact-links");
  if(contacts){
  if(data.contact.email){
    const email=el("a","button button-primary","Email ↗");
    email.href="mailto:"+data.contact.email;
    contacts.append(email);
  }
  for(const [label,url] of [["LinkedIn",data.contact.linkedin],["GitHub",data.contact.github]]){
    if(!url)continue;
    const a=el("a",contacts.children.length?"button button-ghost":"button button-primary",label+" ↗");
    a.href=url;a.target="_blank";a.rel="noopener noreferrer";
    contacts.append(a);
  }
  }
  const mobile=$("#mobile-menu"),menu=$(".menu-toggle");
  if(mobile && menu){
  menu.addEventListener("click",()=>{
    const wasOpen=menu.getAttribute("aria-expanded")==="true";
    menu.setAttribute("aria-expanded",String(!wasOpen));
    menu.setAttribute("aria-label",wasOpen?"Open menu":"Close menu");
    mobile.hidden=wasOpen;
  });
  mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    mobile.hidden=true;menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open menu");
  }));
  }
})();