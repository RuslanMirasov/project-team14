/* empty css               */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();const S=document.querySelector(".preloader"),h=document.querySelector("[data-preloader]"),y=document.querySelector(".preloader__svg"),c=document.querySelectorAll("img, svg, video, audio");let a=0;window.addEventListener("load",b);c.forEach(e=>{e.onload=()=>{a+=1,h.innerHTML=(a*100/c.length).toFixed()+"%",y.style.width=(a*100/c.length).toFixed(1)+"%"}});function b(){h.innerHTML="100%",y.style.width="100%",setTimeout(function(){S.classList.add("is--hidden")},300)}const E=document.querySelectorAll("[data-popup]"),q=document.querySelectorAll("[data-popup-close]"),A=document.querySelectorAll(".modal"),d=document.querySelector(".backdrop"),x=[].filter.call(document.all,e=>getComputedStyle(e).position=="fixed"),s=document.querySelector(".body"),m=window.innerWidth-document.querySelector(".main").offsetWidth,g=document.querySelectorAll(".form"),T=document.querySelectorAll("input, textarea"),p=3,k="Minimum characters!",w="The minimum value is",N="The maximum value is";E.forEach(e=>{e.addEventListener("click",function(r){r.preventDefault(),u(this.dataset.popup)})});q.forEach(e=>{e.addEventListener("click",F)});function u(e){v(),d.classList.contains("is-hidden")&&(d.classList.remove("is-hidden"),L()),document.getElementById(e).classList.remove("is-hidden")}function v(){A.forEach(e=>{e.classList.add("is-hidden"),setTimeout(function(){e.scrollTo({top:0,left:0,behavior:"auto"})},300)})}function F(){v(),d.classList.add("is-hidden"),setTimeout(function(){L()},300)}function L(){s.classList.toggle("lock"),x.forEach(e=>{s.classList.contains("lock")?(s.style.paddingRight=m+"px",e.style.paddingRight=m+"px"):(s.style.paddingRight="0px",e.style.paddingRight="0px")})}T.forEach(e=>{e.addEventListener("focus",function(){this.classList.remove("red")})});g.forEach(e=>{e.addEventListener("submit",async function(r){if(r.preventDefault(),M(this)!=!1){u("loading");const o=new FormData(this);let t={};o.forEach((i,f)=>t[f]=i);let n=JSON.stringify(t);setTimeout(function(){u("ok"),_(),console.log(n)},1500)}return!1})});function M(e){let r=!0;return e.querySelectorAll("[required]").forEach(l=>{let o=l;if(l.value.length===0)t();else if(o.value.length<p&&o.type!=="number"){let i=k.split(" ");t(l,i[0]+" "+p+" "+i[1])}else o.name=="name"&&/[^A-zА-яЁё\+ ()\-]/.test(o.value)&&t(),o.type=="email"&&!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(o.value)&&t(),o.type=="tel"&&/[^0-9\+ ()\-]/.test(o.value)&&t(),o.type=="number"&&(o.min&&Number(o.value)<Number(o.min)&&t(l,w+" "+o.min),o.max&&Number(o.value)>Number(o.max)&&t(l,N+" "+o.max));function t(i,f){n()}function n(){o.classList.add("red"),r=!1}}),r}function _(){g.forEach(e=>{e.reset(),e.querySelectorAll(".label__error").forEach(r=>{r.classList.remove("active"),setTimeout(function(){r.remove()},250)}),e.querySelectorAll("[required]").forEach(r=>{r.classList.remove("red")})})}const D=document.querySelectorAll("[data-scrollto]"),R=document.querySelector(".header");D.forEach(e=>{e.addEventListener("click",function(r){r.preventDefault();let l=document.querySelector("."+this.dataset.scrollto).offsetTop-R.getBoundingClientRect().height;window.scrollTo({top:l,left:0,behavior:"smooth"})})});