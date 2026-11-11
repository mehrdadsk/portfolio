/* Synthetic EuroSpA portfolio reporting demo.
 * Derived from summarized synthetic workbook. No real patient-level data.
 * This browser code is not the original local Power BI/Python/R pipeline.
 */
(() => {
  "use strict";
  const data=window.EUROSPA_SYNTHETIC;
  if (!data) return;
  const $=selector=>document.querySelector(selector);
  const $$=selector=>[...document.querySelectorAll(selector)];
  const num=n=>Number(n).toLocaleString("en-US");
  const pct=(n,d)=>d ? (100*n/d).toFixed(1)+"%" : "0.0%";
  const el=(tag,cls,text)=>{
    const node=document.createElement(tag);
    if(cls)node.className=cls;
    if(text!==undefined)node.textContent=String(text);
    return node;
  };
  const registries=data.registries;
  const fields=[["patients","Patients",2],["treatments","Treatments",3],["visits","Visits",4]];
  const country=$("#country");
  for(const row of registries){
    const option=el("option","",row[0]+" · "+row[1]);
    option.value=row[0];
    country.append(option);
  }
  country.value="DK";

  function rowByCountry(code){return registries.find(row=>row[0]===code)}
  function selected(){
    const row=rowByCountry(country.value);
    return {code:country.value,row,name:row?row[0]+" · "+row[1]:"All registries",
      values:row?{patients:row[2],treatments:row[3],visits:row[4]}:data.total};
  }
  function metricCard(label,value,foot){
    const node=el("article","stat-card");
    node.append(el("span","",label.toUpperCase()),el("strong","",typeof value==="number"?num(value):value),el("small","",foot));
    return node;
  }
  function recordShare(label,share,detail,cls){
    const outer=el("div","share-row");
    outer.append(el("span","metric-name",label));
    const track=el("div","track");
    const fill=el("div","fill"+(cls?" "+cls:""));
    fill.style.width=Math.min(100,Math.max(0,share)).toFixed(3)+"%";
    track.append(fill);
    outer.append(track,el("strong","",detail));
    return outer;
  }
  function renderOverview(selection){
    $("#selected-label").textContent=selection.name;
    $("#stats").replaceChildren(
      metricCard("Patients",selection.values.patients,"Synthetic registry count"),
      metricCard("Treatments",selection.values.treatments,"Synthetic treatment records"),
      metricCard("Visits",selection.values.visits,"Synthetic recorded visits"),
      metricCard("Registry scope",selection.row?"1 of 17":"17","Synthetic registries")
    );
    const share=$("#share-chart");
    share.replaceChildren(...fields.map(([field,label])=>{
      const n=selection.values[field],total=data.total[field];
      return recordShare(label,n/total*100,pct(n,total));
    }));
    share.setAttribute("aria-label",selection.name+": "+fields.map(([field,label])=>label+" "+pct(selection.values[field],data.total[field])).join(", "));
    const tbody=$("#registry-table");
    tbody.replaceChildren(...registries.map(row=>{
      const tr=el("tr",selection.code===row[0]?"selected":"");
      row.forEach((v,i)=>tr.append(el("td","",i>=2?num(v):v)));
      return tr;
    }));
  }
  function treatmentCounts(code){
    if(code!=="ALL")return data.lines[code];
    return data.lineLabels.map((_,i)=>{
      const sums=[0,0,0];
      registries.forEach(row=>data.lines[row[0]][i].forEach((v,j)=>{sums[j]+=v}));
      return sums;
    });
  }
  function renderTreatments(selection){
    $("#line-label").textContent=selection.name;
    const chart=$("#line-chart");
    const values=treatmentCounts(selection.code);
    chart.replaceChildren(...values.map((counts,i)=>{
      const total=counts.reduce((a,b)=>a+b,0);
      const outer=el("div","line-row");
      const heading=el("div","line-row-header");
      heading.append(el("span","",data.lineLabels[i]),el("strong","",num(total)+" treatment records"));
      const stack=el("div","stack");
      ["tnf","il17","other"].forEach((cls,j)=>{
        const segment=el("div","stack-seg "+cls);
        segment.style.width=(total?counts[j]/total*100:0).toFixed(3)+"%";
        segment.title=data.classes[j]+": "+num(counts[j])+" ("+pct(counts[j],total)+")";
        stack.append(segment);
      });
      outer.append(heading,stack,el("div","line-values",counts.map((n,j)=>data.classes[j]+": "+pct(n,total)).join(" · ")));
      return outer;
    }));
    chart.setAttribute("aria-label",selection.name+" treatment line class shares. "+values.map((v,i)=>data.lineLabels[i]+" TNFi "+pct(v[0],v.reduce((a,b)=>a+b,0))).join("; "));
  }
  function renderContribution(selection){
    const stats=$("#contribution-stats");
    stats.replaceChildren(...fields.map(([key,label])=>metricCard(label+" share",pct(selection.values[key],data.total[key]),num(selection.values[key])+" of "+num(data.total[key])+" synthetic records")));
    stats.append(metricCard("Registries",17,"Compared in the pooled synthetic sample"));
    const metric=$("#contribution-metric").value;
    const field=fields.find(x=>x[0]===metric);
    const sorted=registries.slice().sort((a,b)=>b[field[2]]-a[field[2]]);
    const wrap=$("#contribution-bars");
    wrap.replaceChildren(...sorted.map((r,i)=>{
      const share=r[field[2]]/data.total[metric]*100;
      const selectedRow=selection.code===r[0];
      const row=el("div","contribution-row"+(selectedRow?" is-selected":""));
      row.append(el("span","contrib-rank",String(i+1).padStart(2,"0")),
        el("span","contrib-name",r[0]+" · "+r[1]));
      const track=el("div","track");
      const bar=el("div","fill");
      bar.style.width=(share/10*100).toFixed(2)+"%"; // axis: 0–10% of pooled total
      track.append(bar);
      row.append(track,el("strong","",pct(r[field[2]],data.total[metric])));
      return row;
    }));
    wrap.setAttribute("aria-label","Sorted "+metric+" shares of total synthetic pooled data for 17 registries.");
  }
  function coverageValues(code){
    if(code!=="ALL")return data.visitCoverage[code];
    const sum=[0,0,0,0,0,0,0];
    Object.values(data.visitCoverage).forEach(row=>row.forEach((v,i)=>{sum[i]+=v}));
    return sum;
  }
  function renderCompleteness(selection){
    const values=coverageValues(selection.code),denom=values[0];
    $("#coverage-label").textContent=selection.name;
    $("#coverage-stats").replaceChildren(
      metricCard("Treatment rows",denom,"Synthetic treatment records"),
      metricCard("Baseline observed",pct(values[1],denom),num(values[1])+" recorded indicators"),
      metricCard("12-month observed",pct(values[3],denom),num(values[3])+" recorded indicators"),
      metricCard("24-month observed",pct(values[4],denom),num(values[4])+" recorded indicators")
    );
    const chart=$("#coverage-chart");
    chart.replaceChildren(...data.checkpointLabels.map((label,i)=>{
      const observed=values[i+1],pr=denom?observed/denom*100:0;
      const row=el("div","coverage-row");
      row.append(el("span","coverage-name",label));
      const track=el("div","track");
      const bar=el("div","fill");
      bar.style.width=pr.toFixed(2)+"%";
      track.append(bar);
      row.append(track,el("strong","",pct(observed,denom)));
      return row;
    }));
    chart.setAttribute("aria-label",selection.name+" synthetic visit checkpoint observation rates. "+data.checkpointLabels.map((label,i)=>label+" "+pct(values[i+1],denom)).join("; "));
    const table=$("#coverage-table");
    table.replaceChildren(...data.checkpointLabels.map((label,i)=>{
      const tr=el("tr","");
      [label,num(values[i+1]),num(denom),pct(values[i+1],denom)].forEach(v=>tr.append(el("td","",v)));
      return tr;
    }));
  }
  function render(){
    const selection=selected();
    renderOverview(selection);
    renderTreatments(selection);
    renderContribution(selection);
    renderCompleteness(selection);
  }
  const totals=$("#registry-totals");
  const tr=el("tr","");
  ["TOTAL","17 registries",num(data.total.patients),num(data.total.treatments),num(data.total.visits)]
    .forEach(v=>tr.append(el("td","",v)));
  totals.append(tr);

  const reports=["overview","treatments","contribution","completeness"];
  function selectTab(name,updateHash=false,focus=false){
    if(!reports.includes(name))name="overview";
    $$(".report-tab").forEach(tab=>{
      const active=tab.dataset.report===name;
      tab.setAttribute("aria-selected",String(active));
      tab.tabIndex=active?0:-1;
      if(focus&&active)tab.focus();
    });
    $$(".dashboard-panel").forEach(panel=>{panel.hidden=panel.id!==name});
    if(updateHash)window.history.replaceState(null,"","#"+name);
  }
  function tabFromHash(){
    const hash=window.location.hash.slice(1);
    if(reports.includes(hash))return hash;
    if(hash==="data-table")return "overview";
    return "overview";
  }
  $$(".report-tab").forEach(tab=>{
    tab.addEventListener("click",()=>selectTab(tab.dataset.report,true));
    tab.addEventListener("keydown",e=>{
      if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;
      e.preventDefault();
      const idx=reports.indexOf(tab.dataset.report);
      const next=e.key==="Home"?0:e.key==="End"?reports.length-1:(idx+(e.key==="ArrowRight"?1:-1)+reports.length)%reports.length;
      selectTab(reports[next],true,true);
    });
  });
  window.addEventListener("hashchange",()=>selectTab(tabFromHash()));
  $("#contribution-metric").addEventListener("change",render);
  country.addEventListener("change",render);
  render();
  selectTab(tabFromHash());
})();