document.addEventListener('DOMContentLoaded',()=>{
  // mobile nav
  const menuBtn=document.querySelector('.menu-btn'), nav=document.querySelector('nav');
  menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

  // scroll reveal
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // journey strip animation (hero signature element)
  const fill=document.getElementById('journeyFill');
  const dots=document.querySelectorAll('.journey-steps .dot');
  if(fill){
    setTimeout(()=>{ fill.style.width='100%'; },400);
    const stepTimes=[300,1000,1700,2400];
    stepTimes.forEach((t,i)=>setTimeout(()=>dots[i]?.classList.add('active'),t));
  }

  // contact form (static site — no backend, friendly confirmation)
  const form=document.getElementById('enquiryForm');
  form?.addEventListener('submit',(e)=>{
    e.preventDefault();
    const btn=form.querySelector('button');
    btn.textContent='Enquiry sent — we\'ll call within a day';
    btn.disabled=true;
    form.reset();
  });
});
