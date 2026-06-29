import{a as c,S as u,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const m="56498737-33d961619fd960a0fb32ba01a",f="https://pixabay.com/api/";function d(e){return c.get(f,{params:{key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p({webformatURL:e,largeImageURL:o,tags:n,likes:i,views:t,comments:r,downloads:s}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${e}" alt="${n}" />
      </a>
      <div class="info-box">
        <div class="info-item">
          <b>Likes</b>
          <span>${i}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${t}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${r}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${s}</span>
        </div>
      </div>
    </li>
  `}function h(e){const o=document.querySelector("#gallery");if(!o)return;const n=e.map(p).join("");o.innerHTML=n,g.refresh()}function y(){const e=document.querySelector("#gallery");e&&(e.innerHTML="")}function F(){const e=document.querySelector("#loader");e&&e.classList.add("is-active")}function b(){const e=document.querySelector("#loader");e&&e.classList.remove("is-active")}const l=document.querySelector("#search-form");l&&l.addEventListener("submit",v);function v(e){e.preventDefault();const n=e.currentTarget.elements["search-text"].value.trim();if(n===""){a.warning({title:"Caution",message:"Please enter a search query.",position:"topRight"});return}y(),F(),d(n).then(i=>{if(!i||!i.hits||i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF5350",messageColor:"#FFFFFF",iconColor:"#FFFFFF",closeColor:"#FFFFFF",maxWidth:432});return}h(i.hits),l.reset()}).catch(i=>{console.error("API Error:",i),a.error({title:"Error",message:"Something went wrong while fetching images. Please try again!",position:"topRight"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
