(() => {
"use strict";
const d=window.PORTFOLIO;if(!d)return;
const $=s=>document.querySelector(s);
const element=(tag,text)=>{const n=document.createElement(tag);n.textContent=text;return n;};
$("#cv-name").textContent=d.name;$("#cv-headline").textContent=d.headline;$("#cv-summary").textContent=d.introduction;
$("#cv-contact").textContent=[d.location,d.contact.email,d.contact.linkedin,d.contact.github].filter(Boolean).join("  ·  ");
d.impact.forEach(x=>$("#cv-impact").append(element("li",x.value+x.suffix+" — "+x.description)));
d.timeline.forEach(x=>{
const article=document.createElement("article");article.className="job";
const h=element("h3",x.title);const sub=element("div",x.company+"  |  "+x.date);sub.className="date";
article.append(h,sub,element("p",x.description));
const ul=document.createElement("ul");x.points.forEach(p=>ul.append(element("li",p)));article.append(ul);$("#cv-experience").append(article);
});
d.tools.forEach(t=>$("#cv-skills").append(element("span",t)));
d.publications.forEach(p=>{const item=element("p",p.title+" — "+p.journal+" ("+p.year+")");item.className="pub";$("#cv-publications").append(item);});
$("#print-cv").addEventListener("click",()=>window.print());
})();