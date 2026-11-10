/* Homepage motion enhancements. No third-party animation dependencies.
   Pointer effects automatically turn off when the visitor prefers reduced motion. */
(() => {
  "use strict";
  const stage=document.getElementById("portrait-stage");
  const card=document.getElementById("portrait-card");
  const photo=document.getElementById("profile-photo");
  if(photo){
    photo.addEventListener("error",()=>{
      photo.style.display="none";
      const wrap=photo.parentElement;
      wrap.setAttribute("role","img");
      wrap.setAttribute("aria-label","Portrait not available; add a personal photo to the portfolio.");
      const fallback=document.createElement("span");
      fallback.className="portrait-fallback";fallback.textContent="M.";
      wrap.append(fallback);
    },{once:true});
  }
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer=window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if(stage&&card&&finePointer&&!reduced.matches){
    let pending=false,lastX=0,lastY=0;
    function animate(){
      pending=false;
      const rect=stage.getBoundingClientRect();
      const x=(lastX-rect.left)/rect.width-.5;
      const y=(lastY-rect.top)/rect.height-.5;
      const xRot=Math.max(-6,Math.min(6,-y*10));
      const yRot=Math.max(-8,Math.min(8,x*13));
      card.style.setProperty("--rx",xRot.toFixed(2)+"deg");
      card.style.setProperty("--ry",yRot.toFixed(2)+"deg");
    }
    stage.addEventListener("pointermove",e=>{
      lastX=e.clientX;lastY=e.clientY;
      if(!pending){pending=true;requestAnimationFrame(animate);}
    },{passive:true});
    stage.addEventListener("pointerleave",()=>{
      card.style.setProperty("--rx","0deg");
      card.style.setProperty("--ry","0deg");
    },{passive:true});
  }
  // Reveal panels only when supported. Content remains visible without JS.
  if("IntersectionObserver" in window&&!reduced.matches){
    const selectors=[
      ".section-heading",
      ".impact-card",
      ".manifesto-panel",
      ".project-card",
      ".skills-explorer",
      ".tool-cloud",
      ".journey-layout",
      ".education-panel",
      ".publications-panel",
      ".contact-inner"
    ];
    const targets=[...document.querySelectorAll(selectors.join(","))];
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.isIntersecting){
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      }
    },{threshold:.09,rootMargin:"0px 0px 28px 0px"});
    targets.forEach(target=>{target.dataset.reveal="";observer.observe(target);});
    document.documentElement.classList.add("motion-ready");
  }
})();