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
  function renderProjects(){
    grid.replaceChildren();
    const projects=data.projects.filter(p=>active==="All"||p.category===active);
    for(const p of projects){
      const button=el("button","project-card recruiter-project-card");
      button.type="button";
      button.setAttribute("aria-label","View project: "+p.title);
      button.append(
        el("span","project-meta",p.category),
        el("h3","project-title",p.title),
        el("p","project-blurb",p.summary),
        el("span","recruiter-project-link","View project details ↗")
      );
      button.addEventListener("click",()=>showProject(p));
      grid.append(button);
    }
  }
  renderProjects();
  function showProject(p){
    const content=$("#dialog-content");content.replaceChildren();
    content.append(el("div","dialog-kicker",p.category),el("h2","",p.title));
    const context=el("p","dialog-lede",p.role+" · "+p.period);
    content.append(context);
    const section=(title,body)=>{
      const s=el("section","dialog-section");
      s.append(el("h3","",title),el("p","",body));
      content.append(s);
    };
    section("Context",p.challenge);
    const approach=el("section","dialog-section");
    const list=el("ul");
    for(const item of p.approach)list.append(el("li","",item));
    approach.append(el("h3","","Work performed"),list);content.append(approach);
    section("Result",p.result);
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