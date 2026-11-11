/* Independently reproducible visualization demo.
 * Input: data.js derived from aggregated synthetic EuroSpA summary workbook.
 * This is NOT the production Power BI / Python project source.
 */
(() => {
  "use strict";
  const data=window.EUROSPA_SYNTHETIC;
  if(!data) return;
  const $=s=>document.querySelector(s);
  const number=n=>Number(n).toLocaleString("en-US");
  const pct=(num,total)=>total ? (100*num/total).toFixed(1)+"%" : "0.0%";
  const create=(tag,cls,txt)=>{
    const x=document.createElement(tag);
    if(cls)x.className=cls;
    if(txt!==undefined)x.textContent=String(txt);
    return x;
  };
  const select=$("#country");
  const countryRows=data.registries;
  const labels={patients:"Patients",treatments:"Treatments",visits:"Visits"};
  const fields={patients:2,treatments:3,visits:4};
  for(const r of countryRows){
    const opt=create("option","",r[0]+" · "+r[1]);
    opt.value=r[0];select.append(opt);
  }
  select.value="DK";

  function aggregateTreatments(code){
    if(code!=="ALL")return data.lines[code];
    return data.lineLabels.map((_,lineNo)=>{
      const sums=[0,0,0];
      for(const c of countryRows){
        const values=data.lines[c[0]][lineNo]||[0,0,0];
        values.forEach((x,j)=>sums[j]+=x);
      }
      return sums;
    });
  }
  function render(){
    const code=select.value;
    const row=countryRows.find(x=>x[0]===code);
    const values=row?{patients:row[2],treatments:row[3],visits:row[4]}:data.total;
    const name=row?row[0]+" · "+row[1]:"All registries";
    $("#selected-label").textContent=name;
    $("#line-label").textContent=name;

    const stats=$("#stats");
    stats.replaceChildren();
    const cards=[
      ["Patients",values.patients, row?"Synthetic registry count":"Pooled synthetic total"],
      ["Treatments",values.treatments,row?"Synthetic registry count":"Pooled synthetic total"],
      ["Visits",values.visits,row?"Synthetic registry count":"Pooled synthetic total"],
      ["Registry scope",row?"1 of 17":"17","Synthetic registry datasets"]
    ];
    for(const [title,value,foot] of cards){
      const item=create("article","stat-card");
      item.append(create("span","",title.toUpperCase()),create("strong","",typeof value==="number"?number(value):value),create("small","",foot));
      stats.append(item);
    }

    const share=$("#share-chart");share.replaceChildren();
    for(const [field,label] of Object.entries(labels)){
      const n=values[field],total=data.total[field],pr=n/total*100;
      const r=create("div","share-row");
      const caption=create("label","",label);
      const track=create("div","track");
      const fill=create("div","fill");
      fill.style.width=pr.toFixed(3)+"%";
      track.append(fill);
      const value=create("strong","",pct(n,total));
      r.append(caption,track,value);
      share.append(r);
    }
    share.setAttribute("aria-label","Selected registry "+name+" accounts for "+Object.keys(labels).map(f=>pct(values[f],data.total[f])+" of "+labels[f]).join(", "));

    const lines=aggregateTreatments(code);
    const chart=$("#line-chart");chart.replaceChildren();
    lines.forEach((classes,i)=>{
      const total=classes.reduce((a,b)=>a+b,0);
      const r=create("div","line-row");
      const head=create("div","line-row-header");
      head.append(create("span","",data.lineLabels[i]),create("strong","",number(total)+" treatments"));
      const stack=create("div","stack");
      ["tnf","il17","other"].forEach((cls,j)=>{
        const segment=create("div","stack-seg "+cls);
        segment.style.width=(total?classes[j]/total*100:0).toFixed(3)+"%";
        segment.title=data.classes[j]+": "+number(classes[j])+" ("+pct(classes[j],total)+")";
        stack.append(segment);
      });
      const details=create("div","line-values",classes.map((n,j)=>data.classes[j]+": "+pct(n,total)).join("   ·   "));
      r.append(head,stack,details);chart.append(r);
    });
    chart.setAttribute("aria-label","Treatment distributions for "+name+" by line. "+lines.map((v,i)=>data.lineLabels[i]+" TNFi "+pct(v[0],v.reduce((a,b)=>a+b,0))).join(", "));

    const tbody=$("#registry-table");tbody.replaceChildren();
    for(const r of countryRows){
      const tr=document.createElement("tr");
      if(code===r[0])tr.className="selected";
      r.forEach((value,i)=>tr.append(create("td","",i>=2?number(value):value)));
      tbody.append(tr);
    }
  }
  const foot=$("#registry-totals"),tr=document.createElement("tr");
  [["TOTAL",""],["", ""],["", data.total.patients],["",data.total.treatments],["",data.total.visits]].forEach((parts,i)=>{
    tr.append(create("td","",i===0?"TOTAL":i===1?"17 registries":number(parts[1])));
  });
  foot.append(tr);
  select.addEventListener("change",render);
  render();
})();