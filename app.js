const views = {cutaway: {src:'assets/top-cutaway.webp', caption:'Roof and upper walls removed — approximate model dimensions'}, full:{src:'assets/top-full-walls.webp',caption:'Roof removed, full-height walls retained — approximate model dimensions'}};
const plan = document.querySelector('#plan-image');
document.querySelectorAll('[data-plan]').forEach(button => button.addEventListener('click', () => {
  const view = views[button.dataset.plan]; plan.src=view.src; plan.alt=view.caption;
  plan.parentElement.dataset.enlarge=view.src; plan.parentElement.dataset.caption=view.caption;
  document.querySelectorAll('[data-plan]').forEach(item => {const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
}));
const lightbox=document.querySelector('#lightbox');
document.querySelectorAll('[data-enlarge]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelector('#lightbox-image').src=button.dataset.enlarge;
  document.querySelector('#lightbox-image').alt=button.dataset.caption;
  document.querySelector('#lightbox-caption').textContent=button.dataset.caption;
  lightbox.showModal();
}));
document.querySelector('.close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close();});
// Public responder link only. Never put inbox credentials or form-edit links here.
const enquiryUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfIgm1o4y6_Z9kzbAGQ1yPczI0WO49iedaqHBGmY-hFFxrd5A/viewform';
if(enquiryUrl){const link=document.querySelector('#enquiry-link');link.href=enquiryUrl;link.target='_blank';link.rel='noopener noreferrer';document.querySelector('#enquiry-status').textContent='Opens a short Google Form in a new tab.';}
