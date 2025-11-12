// Reveal on scroll
document.addEventListener('DOMContentLoaded', function(){
  const sections = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }, {threshold: 0.12});
  sections.forEach(s=>io.observe(s));
});