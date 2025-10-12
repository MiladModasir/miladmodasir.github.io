// Mobile menu toggle
document.getElementById('burger').addEventListener('click',()=>{
  document.getElementById('menu').classList.toggle('open');
});
// Current year
document.getElementById('year').textContent = new Date().getFullYear();
// Smooth scroll for same‑page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
      history.pushState(null,'',id);
      document.getElementById('menu').classList.remove('open');
    }
  })
});
