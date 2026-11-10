(() => {
"use strict";
const data = window.PORTFOLIO;
if (!data) return;
const $ = (s, scope=document) => scope.querySelector(s);
const el = (tag, className, text) => { const n=document.createElement(tag); if(className)n.className=className; if(text!==undefined)n.textContent=text; return n; };
const clean = (value) => String(value == null ? "" : value);
const textSet = (selector,value) => {const node=$(selector);if(node)node.textContent=clean(value);};
const appendChildren = (parent, ...children) => { for (const child of children) parent.append(child); return parent; };
textSet("#hero-status",data.status);
textSet("#hero-description",data.description);
textSet("#about-intro",data.introduction);
textSet("#about-principle", "“"+data.principle+"”");
textSet("#updated-year",new Date().getFullYear());
const impacts=$("#impact-grid");
for (const stat of data.impact) {
  const c=el("article","impact-card");
  appendChildren(c,el("div","stat-label",stat.label),el("div","stat-icon",stat.icon));
  const number=el("div","stat-number",stat.value);number.append(el("span","",stat.suffix));
  appendChildren(c,number,el("div","stat-text",stat.description)); impacts.append(c);
}
const filters=$("#project-filters"), grid=$("#project-grid"), projectDialog=$("#project-dialog");
let activeFilter="All";
for(const name of data.filters) {
 const btn=el("button","filter-button",name);btn.type="button";btn.dataset.filter=name;btn.setAttribute("aria-pressed",String(name==="All"));
 btn.addEventListener("click",()=>{activeFilter=name;renderProjects();for(const b of filters.children)b.setAttribute("aria-pressed",String(b.dataset.filter===name));});
 filters.append(btn);
}
const artClasses=new Set(["green","violet","blue","amber"]);
function renderProjects() {
 grid.replaceChildren();
 const projects=data.projects.filter(p=>activeFilter==="All"||p.category===activeFilter);
 textSet("#project-count",String(projects.length).padStart(2,"0"));
 for(const p of projects){
  const card=el("button","project-card");card.type="button";card.setAttribute("aria-label","Read case study: "+p.title);
  const art=el("div","project-art art-"+(artClasses.has(p.art)?p.art:"green"));
  const shape=el("div","art-shape");shape.append(el("span","",p.symbol));art.append(shape,el("span","art-badge",p.badge));
  const body=el("div","project-body"),foot=el("div","project-footer");
  foot.append(el("span","project-result",p.outcome),el("span","project-arrow","↗"));
  body.append(el("div","project-meta",p.category.toUpperCase()),el("div","project-title",p.title),el("div","project-blurb",p.summary),foot);
  card.append(art,body);card.addEventListener("click",()=>showProject(p));grid.append(card);
 }
}
renderProjects();
function showProject(p) {
 const body=$("#dialog-content");body.replaceChildren();
 body.append(el("div","dialog-kicker",p.category.toUpperCase()+" / CASE STUDY"),el("h2","",p.title),el("p","dialog-lede",p.summary));
 const insight=el("div","dialog-insight");
 for(const [k,v] of [["OUTCOME",p.outcome],["ROLE / PERIOD",p.role+" · "+p.period]]){
 const item=el("div");item.append(el("span","",k),el("strong","",v));insight.append(item);}
 body.append(insight);
 const section=(title,paragraph)=>{const box=el("section","dialog-section");box.append(el("h3","",title),el("p","",paragraph));body.append(box);};
 section("The challenge",p.challenge);
 const approach=el("section","dialog-section");approach.append(el("h3","","How I approached it"));
 const list=el("ul");p.approach.forEach(item=>list.append(el("li","",item)));approach.append(list);body.append(approach);
 section("Outcome",p.result);
 const tags=el("div","dialog-tags");p.tools.forEach(tool=>tags.append(el("span","dialog-tag",tool)));body.append(tags);
 body.append(el("div","dialog-notice",p.confidentiality));
 projectDialog.showModal();document.body.classList.add("dialog-open");
}
function closeDialog(){projectDialog.close();document.body.classList.remove("dialog-open");}
$(".dialog-close").addEventListener("click",closeDialog);
projectDialog.addEventListener("click",e=>{if(e.target===projectDialog)closeDialog();});
projectDialog.addEventListener("close",()=>document.body.classList.remove("dialog-open"));
const tabs=$("#skill-tabs"),skillDetail=$("#skill-detail");let skillIndex=0;
function renderSkill(index,moveFocus=false) {
 skillIndex=index;const s=data.expertise[index];
 for(const [i,btn] of [...tabs.children].entries()){
  btn.setAttribute("aria-selected",String(i===index));btn.tabIndex=i===index?0:-1;
  if(i===index && moveFocus)btn.focus();
 }
 skillDetail.replaceChildren();
 const proof=el("div","skill-proof",s.proof);
 const pills=el("div","skill-pill-list");s.skills.forEach(v=>pills.append(el("span","skill-pill",v)));
 skillDetail.append(el("div","skill-overline",s.eyebrow),el("h3","",s.heading),el("p","",s.description),proof,pills);
 skillDetail.setAttribute("aria-labelledby","skill-tab-"+s.id);
}
data.expertise.forEach((s,index)=>{
 const btn=el("button","skill-tab");btn.type="button";btn.id="skill-tab-"+s.id;btn.setAttribute("role","tab");btn.setAttribute("aria-controls","skill-detail");
 btn.append(el("span","",s.icon),el("strong","",s.name));btn.addEventListener("click",()=>renderSkill(index));
 btn.addEventListener("keydown",event=>{
  const key=event.key;if(key==="ArrowDown"||key==="ArrowRight"||key==="ArrowUp"||key==="ArrowLeft"||key==="Home"||key==="End"){
  event.preventDefault();const next=key==="Home"?0:key==="End"?data.expertise.length-1:(skillIndex+(key==="ArrowDown"||key==="ArrowRight"?1:-1)+data.expertise.length)%data.expertise.length;renderSkill(next,true);}
 });tabs.append(btn);
});
skillDetail.id="skill-detail";renderSkill(0);
data.tools.forEach(tool=>$("#tool-cloud").append(el("span","tool-tag",tool)));
const timeline=$("#timeline-list");let timelineIndex=0;
function renderTimeline(index){
 timelineIndex=index;const entry=data.timeline[index];
 for(const [i,btn] of [...timeline.children].entries())btn.setAttribute("aria-pressed",String(i===index));
 const d=$("#timeline-detail");d.replaceChildren();
 d.append(el("span","timeline-date",entry.date),el("h3","",entry.title),el("div","company",entry.company),el("p","",entry.description));
 const list=el("ul");entry.points.forEach(p=>list.append(el("li","",p)));d.append(list);
}
data.timeline.forEach((entry,index)=>{
 const btn=el("button","timeline-button");btn.type="button";
 btn.append(el("span","timeline-date",entry.date),el("span","timeline-title",entry.title),el("span","timeline-sub",entry.company));
 btn.addEventListener("click",()=>renderTimeline(index));timeline.append(btn);
});renderTimeline(0);
const education=$("#education-panel");education.append(el("div","mini-heading","EDUCATION"));
data.education.forEach(e=>{
 const box=el("article","edu-item");box.append(el("span","",e.date),el("h3","",e.degree),el("p","",e.school),el("p","",e.note));education.append(box);
});
const pubs=$("#publication-list");data.publications.forEach((pub,i)=>{
 const item=el("article","pub-item");const info=el("div");
 info.append(el("h3","",pub.title),el("p","",pub.journal+" · "+pub.year));
 if(pub.link){const link=el("a","","Read publication ↗");link.href=pub.link;link.target="_blank";link.rel="noopener noreferrer";info.append(link);}
 item.append(el("span","pub-index",String(i+1).padStart(2,"0")),info);pubs.append(item);
});
const contacts=$("#contact-links");
if(data.contact.email){
 const a=el("a","button button-primary","Email me ↗");a.href="mailto:"+data.contact.email;contacts.append(a);
}
for(const [name,url] of [["LinkedIn",data.contact.linkedin],["GitHub",data.contact.github]]){
 if(!url)continue;const a=el("a",contacts.children.length?"button button-ghost":"button button-primary",name+" ↗");
 a.href=url;a.target="_blank";a.rel="noopener noreferrer";contacts.append(a);
}
const mobile=$("#mobile-menu"),menu=$(".menu-toggle");
menu.addEventListener("click",()=>{
 const open=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!open));menu.setAttribute("aria-label",open?"Open menu":"Close menu");mobile.hidden=open;
});
mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mobile.hidden=true;menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open menu");}));
const themeButton=$(".theme-toggle");const themeKey="portfolio-theme";
function setTheme(theme){
 const mode=theme==="light"?"light":"dark";document.documentElement.dataset.theme=mode;
 themeButton.setAttribute("aria-label",mode==="dark"?"Switch to light theme":"Switch to dark theme");$(".theme-icon").textContent=mode==="dark"?"☼":"☾";
 try{localStorage.setItem(themeKey,mode);}catch(_){}
}
let initial="dark";try{initial=localStorage.getItem(themeKey)||"dark";}catch(_){}setTheme(initial);
themeButton.addEventListener("click",()=>setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark"));
const canvas=$("#hero-canvas"),visual=$(".hero-visual");
const motionReduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(canvas && !motionReduced){
 const ctx=canvas.getContext("2d");let width=0,height=0,points=[],frame=0,raf=0;
 function resize(){
 const rect=visual.getBoundingClientRect();width=rect.width;height=rect.height;
 const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
 points=Array.from({length:32},(_,i)=>({x:(i*73%101)/101*width,y:(i*41%97)/97*height,phase:i*.73}));
 }
 function draw(){
 frame++;ctx.clearRect(0,0,width,height);
 ctx.lineWidth=.7;for(let i=0;i<points.length;i++)for(let j=i+1;j<points.length;j++){
 const a=points[i],b=points[j],dist=Math.hypot(a.x-b.x,a.y-b.y);
 if(dist<110){ctx.strokeStyle="rgba(159,248,199,"+(.15*(1-dist/110))+")";ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
 }
 for(const p of points){ctx.fillStyle="rgba(160,247,208,.45)";ctx.beginPath();ctx.arc(p.x,p.y+Math.sin(frame*.015+p.phase)*3,1.3,0,Math.PI*2);ctx.fill();}
 raf=requestAnimationFrame(draw);
 }
 resize();draw();
 if("ResizeObserver" in window)new ResizeObserver(resize).observe(visual);
 document.addEventListener("visibilitychange",()=>{if(document.hidden)cancelAnimationFrame(raf);else{cancelAnimationFrame(raf);draw();}});
}
})();