(function(){var b=document.querySelector('.burger'),n=document.getElementById('nav'),h=document.querySelector('.site-header');
if(b)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
addEventListener('scroll',function(){h.classList.toggle('scrolled',scrollY>8)},{passive:true});
var f=document.getElementById('inq');if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),s='Dopyt - '+(d.get('sluzba')||'Vkroč'),
t='Meno: '+d.get('meno')+'\nE-mail: '+d.get('email')+'\nSlužba: '+d.get('sluzba')+'\nTyp a veľkosť: '+d.get('typ')+'\n\n'+d.get('sprava')+'\n\n(Pôdorys priložím k tomuto e-mailu.)';
location.href='mailto:vkrkroc3d@gmail.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(t)});
if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});})();
