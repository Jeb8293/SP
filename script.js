
const r=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.12});r.forEach(x=>o.observe(x))}else r.forEach(x=>x.classList.add('visible'));
document.querySelectorAll('.size').forEach(b=>b.onclick=()=>{document.querySelectorAll('.size').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
