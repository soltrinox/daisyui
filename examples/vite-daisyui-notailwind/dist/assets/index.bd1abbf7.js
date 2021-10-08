const s=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function u(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=u(t);fetch(t.href,n)}};s();document.querySelector("#app").innerHTML=`

<!-- default theme (dark) -->
<div>
  <button class="btn">button</button>
  <button class="btn btn-primary">button</button>
  <button class="btn btn-secondary">button</button>
  <button class="btn btn-accent">button</button>
</div>

<!-- garden theme -->
<div data-theme=garden>
  <button class="btn">button</button>
  <button class="btn btn-primary">button</button>
  <button class="btn btn-secondary">button</button>
  <button class="btn btn-accent">button</button>
</div>

<!-- forest theme -->
<div data-theme=forest>
  <button class="btn">button</button>
  <button class="btn btn-primary">button</button>
  <button class="btn btn-secondary">button</button>
  <button class="btn btn-accent">button</button>
</div>

`;
