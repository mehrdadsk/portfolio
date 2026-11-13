/* Reusable project detail page. All content comes from public content.js. */
(() => {
  "use strict";
  const portfolio=window.PORTFOLIO;
  const root=document.querySelector("#project-content");
  if(!portfolio || !root)return;
  const id=new URLSearchParams(window.location.search).get("id");
  const project=(portfolio.projects||[]).find(p=>p.id===id);
  const el=(tag,cls,value)=>{
    const node=document.createElement(tag);
    if(cls)node.className=cls;
    if(value!==undefined)node.textContent=String(value);
    return node;
  };
  const link=(url,label)=>{
    const a=el("a","project-button",label+" ↗");
    a.href=url;
    if(/^https?:\/\//.test(url)){a.target="_blank";a.rel="noopener noreferrer";}
    return a;
  };
  root.replaceChildren();
  if(!project){
    document.title="Project not found | Mehrdad Shoae Kazemi";
    root.append(el("h1","","Project not found"),
      el("p","case-lede","This project ID is not recognized. Return to the Projects page and select an available case study."),
      link("./projects.html","Browse projects"));
    return;
  }
  document.title=project.title+" | Mehrdad Shoae Kazemi";
  root.append(el("div","case-kicker",(project.year||"") +"  /  "+project.category),
    el("h1","",project.title),
    el("p","case-lede",project.summary));
  const intro=el("div","case-facts");
  [["Project year",project.year||project.period],["My role",project.role],["Period",project.period]].forEach(([k,v])=>{
    if(!v)return;
    const block=el("div","case-fact");
    block.append(el("span","",k.toUpperCase()),el("strong","",v));
    intro.append(block);
  });
  root.append(intro);
  if(project.previewUrl){
    const image=el("img","case-image");
    image.src=project.previewUrl;image.alt="Illustrative synthetic-data visualization for this project";image.loading="lazy";
    root.append(image);
  }
  const section=(label,desc)=>{
    const box=el("section","case-section");
    box.append(el("h2","",label),el("p","",desc||""));
    root.append(box);
  };
  section("Project context",project.challenge);
  const responsibilities=el("section","case-section");
  responsibilities.append(el("h2","","My contribution"));
  const list=el("ul","case-points");
  for(const task of project.approach||[])list.append(el("li","",task));
  responsibilities.append(list);
  root.append(responsibilities);
  section("Outcome & impact",project.result);
  const methods=el("section","case-section");
  methods.append(el("h2","","Tools & methods"));
  const tags=el("div","case-tags");
  (project.tools||[]).forEach(x=>tags.append(el("span","",x)));
  methods.append(tags);
  root.append(methods);
  const resources=el("section","case-section");
  resources.append(el("h2","","Code, plots & tables"));
  if(project.codeNote)resources.append(el("p","",project.codeNote));
  const links=el("div","case-links");
  [["demoUrl","Interactive demo"],["plotsUrl","Plots"],["contributionUrl","Pooled contribution"],
    ["completenessUrl","Completeness dashboard"],["tableUrl","Data table"],["codeUrl","GitHub code"]]
    .forEach(([k,label])=>{if(project[k])links.append(link(project[k],k==="codeUrl"?(project.codeLabel||label):(project.id==="eurospa-dashboard" && k==="demoUrl"?"Power BI case study":(project.id==="eurospa-dashboard" && k==="plotsUrl"?"Verified report pages":label))));});
  if(!links.children.length)links.append(el("p","case-unavailable","Code and visual examples have not yet been published for this project."));
  resources.append(links);root.append(resources);
  if(project.confidentiality){
    root.append(el("p","case-disclosure",project.confidentiality));
  }
})();