(() => {
"use strict";
const full=window.FULL_RESUME, summary=window.PORTFOLIO;
if(!full||!summary)return;
const $=sel=>document.querySelector(sel);
function n(tag,cl,txt){const x=document.createElement(tag);if(cl)x.className=cl;if(txt!==undefined)x.textContent=txt;return x;}
function bullets(list){const ul=n("ul");list.forEach(s=>ul.append(n("li","",s)));return ul;}
function tags(list){const div=n("div","tag-list");list.forEach(s=>div.append(n("span","tag",s)));return div;}
const metrics=$("#full-metrics");full.metrics.forEach(m=>{const c=n("div","metric");c.append(n("strong","",m.number),n("small","",m.label));metrics.append(c);});
full.summary.forEach(s=>$("#full-summary").append(n("p","",s)));
full.strengths.forEach(s=>{const c=n("article","strength-card");c.append(n("h3","",s.title),n("p","",s.detail));$("#full-strengths").append(c);});
full.experience.forEach((e,i)=>{
 const item=n("details","job-detail");item.open=i===0;
 const head=n("summary"),headText=n("div");headText.append(n("span","job-date",e.date),n("h3","",e.title),n("div","job-organisation",e.organisation));head.append(headText);
 const content=n("div","job-body");content.append(n("p","",e.about),bullets(e.items),tags(e.tags));
 item.append(head,content);$("#full-experience").append(item);
});
full.skillGroups.forEach(g=>{const item=n("article","skill-group");item.append(n("h3","",g.name),bullets(g.items));$("#full-skills").append(item);});
full.independentWork.forEach(p=>{
 const c=n("article","project");c.append(n("small","",p.date),n("h3","",p.title),n("p","",p.description),tags(p.tags));$("#full-projects").append(c);
});
full.education.forEach(e=>{
 const c=n("article","edu");c.append(n("small","",e.date),n("h3","",e.degree),n("p","institution",e.institution),n("p","education-note",e.note),bullets(e.bullets));
 $("#full-education").append(c);
});
full.academicProjects.forEach(p=>{const c=n("article","academic");c.append(n("span","",p.year),n("h3","",p.name),n("p","",p.text));$("#full-academics").append(c);});
full.bioinformaticsToolchain.forEach(g=>{
 const line=n("div","toolchain-row");line.append(n("strong","",g.area),n("p","",g.tools));$("#full-toolchain").append(line);
});
full.publications.forEach(p=>{const line=n("article","publication");line.append(n("span","",p.year),n("p","",p.citation));$("#full-publications").append(line);});
$("#full-languages").append(bullets(full.languages));
$("#full-notes").append(bullets(full.notes));
// Expand details for print (and restore the visitor's browsing state afterwards).
let openBefore=[];
window.addEventListener("beforeprint",()=>{
 const details=[...document.querySelectorAll("details")];openBefore=details.map(x=>x.open);details.forEach(x=>x.open=true);
});
window.addEventListener("afterprint",()=>{
 [...document.querySelectorAll("details")].forEach((x,i)=>{if(openBefore.length)x.open=openBefore[i];});
});
$("#print-resume").addEventListener("click",()=>window.print());
// Highlight the current section in the sidebar.
if("IntersectionObserver" in window){
 const links=[...document.querySelectorAll(".resume-nav a")];
 const sections=links.map(x=>document.querySelector(x.getAttribute("href"))).filter(Boolean);
 const obs=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
  if(!visible.length)return;
  const id=visible[0].target.id;
  links.forEach(a=>a.setAttribute("aria-current",String(a.getAttribute("href")==="#"+id)));
 },{rootMargin:"-90px 0px -55% 0px",threshold:[0,.1,.2,.5]});
 sections.forEach(s=>obs.observe(s));
}
})();