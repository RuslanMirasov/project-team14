/* empty css               */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const g=document.querySelector(".preloader");window.addEventListener("load",()=>{setTimeout(function(){g.classList.add("is--hidden")},500)});const L=document.querySelectorAll("[data-popup]"),S=document.querySelectorAll("[data-popup-close]"),b=document.querySelectorAll(".modal"),r=document.querySelector(".backdrop"),v=[].filter.call(document.all,o=>getComputedStyle(o).position=="fixed"),c=document.querySelector(".body"),d=window.innerWidth-document.querySelector(".main").offsetWidth,f=document.querySelectorAll(".form"),E=document.querySelectorAll("input, textarea"),u=3,x="Minimum characters!",A="The field must not be empty!",k="Only letters are allowed!",w="Wrong E-mail format!";L.forEach(o=>{o.addEventListener("click",function(t){t.preventDefault(),a(this.dataset.popup)})});S.forEach(o=>{o.addEventListener("click",T)});function a(o){m(),r.classList.contains("is-hidden")&&(r.classList.remove("is-hidden"),p()),document.getElementById(o).classList.remove("is-hidden")}function m(){b.forEach(o=>{o.classList.add("is-hidden"),setTimeout(function(){o.scrollTo({top:0,left:0,behavior:"auto"})},300)})}function T(){m(),r.classList.add("is-hidden"),setTimeout(function(){p(),y()},300)}function p(){c.classList.toggle("lock"),v.forEach(o=>{c.classList.contains("lock")?(c.style.paddingRight=d+"px",o.style.paddingRight=d+"px"):(c.style.paddingRight="0px",o.style.paddingRight="0px")})}E.forEach(o=>{o.addEventListener("focus",function(){this.classList.remove("red");{let t=this.nextSibling;for(;t&&t.nodeType!=1;)t=t.nextSibling;t.classList[0]==="label__error"&&(t.classList.remove("active"),setTimeout(function(){t.remove()},250))}})});f.forEach(o=>{o.addEventListener("submit",async function(t){if(t.preventDefault(),M(this)!=!1){a("loading");const l=new FormData(this);let e={};l.forEach((i,h)=>e[h]=i);let s=JSON.stringify(e);setTimeout(function(){a("ok"),y(),console.log(s)},1e3)}return!1})});function M(o){let t=!0;return o.querySelectorAll("[required]").forEach(n=>{if(n.value.length===0)l(n,A);else if(n.value.length<u&&n.type!=="number"){let e=x.split(" ");l(n,e[0]+" "+u+" "+e[1])}else n.name=="name"&&/[^A-zА-яЁё\+ ()\-]/.test(n.value)&&l(n,k),n.type=="email"&&!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(n.value)&&l(n,w);function l(e,s){e.classList.contains("red")||e.nextSibling.nextSibling.classList[0]!=="label__error"&&(e.insertAdjacentHTML("afterEnd",'<div class="label__error">'+s+"</div>"),setTimeout(function(){e.nextSibling.classList.add("active")},5)),n.classList.add("red"),t=!1}}),t}function y(){f.forEach(o=>{o.reset(),o.querySelectorAll(".label__error").forEach(t=>{t.classList.remove("active"),setTimeout(function(){t.remove()},250)}),o.querySelectorAll("[required]").forEach(t=>{t.classList.remove("red")})})}(()=>{const o=document.querySelector("[js-menu-container]"),t=document.querySelector("[js-open-menu]"),n=document.querySelector("[js-close-menu]"),l=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const s=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};t.addEventListener("click",l),n.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const _=document.querySelectorAll("[data-scrollto]"),q=document.querySelector(".header");_.forEach(o=>{o.addEventListener("click",function(t){t.preventDefault();let n=document.querySelector("."+this.dataset.scrollto).offsetTop-q.getBoundingClientRect().height;window.scrollTo({top:n,left:0,behavior:"smooth"})})});