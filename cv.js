(() => {
"use strict";
const d=window.PORTFOLIO;if(!d)return;
const $=s=>document.querySelector(s);
const e=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
$("#cv-name").textContent=d.name;$("#cv-headline").textContent=d.headline;
const links=$("#cv-contact");links.append(e("span","","Copenhagen area, Denmark"));
for(const [label,url] of [["LinkedIn",d.contact.linkedin],["GitHub",d.contact.github]]){
 if(!url)continue;const a=e("a","",label+" ↗");a.href=url;a.target="_blank";a.rel="noopener noreferrer";links.append(a);}
if(d.contact.email){const a=e("a","",d.contact.email);a.href="mailto:"+d.contact.email;links.append(a);}
$("#cv-summary").textContent="Data Engineer & Analyst combining clinical real-world data, scientific computing and bioinformatics. I build reproducible R/Python workflows, resolve difficult quality issues and turn heterogeneous source data into reliable research datasets.";
d.impact.forEach(s=>{const m=e("div","metric");m.append(e("strong","",s.value+s.suffix),e("small","",s.description));$("#cv-impact").append(m);});
const jobs=$("#cv-experience");
const current=e("article","job");current.append(e("h3","","Data Engineer & Analyst — COPECARE, Rigshospitalet"),e("div","date","2023–present · Copenhagen"));
const bullet=e("ul");
[
 "Data engineering and QC for research pooling data from 19 European rheumatology registries.",
 "Built longitudinal patient, treatment and visit datasets; delivered 30+ research outputs.",
 "Recovered ~1,700 eligible patients through root-cause validation and accelerated a key pipeline ~10–20×.",
 "Partner with clinicians and international registries on definitions, reporting and scientific outcomes."
].forEach(s=>bullet.append(e("li","",s)));current.append(bullet);jobs.append(current);
for(const i of [2,3]){
 const t=d.timeline[i];if(!t)continue;
 const job=e("article","job");job.append(e("h3","",t.title+" — "+t.company.split(" · ")[0]),e("div","date",t.date),e("p","",t.description));jobs.append(job);
}
d.expertise.forEach(s=>{const group=e("div","skill-group");group.append(e("h3","",s.name),e("p","",s.skills.slice(0,6).join(" · ")));$("#cv-skills").append(group);});
d.education.forEach(s=>{const item=e("p","education");item.append(e("strong","",s.degree),e("span","",s.school+" · "+s.date));$("#cv-education").append(item);});
d.publications.slice(0,3).forEach(p=>$("#cv-publications").append(e("p","pub",p.journal+" ("+p.year+"): "+p.title)));
$("#print-cv").addEventListener("click",()=>window.print());
})();