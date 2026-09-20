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
