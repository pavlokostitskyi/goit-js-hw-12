import{a as v,S as b,i as w}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=c(s);fetch(s.href,o)}})();const L="43389395-13044f7a31a85be77891b044e",S="https://pixabay.com/api/";async function f(t,e){const c=new URLSearchParams({key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}),a=await v.get(`${S}?${c}`);if(!a.data||a.data.totalHits===0)throw new Error("No images found");return a.data}function $(t){return t.map(e=>`
    <li class="card">
        <div class="place-for-image">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" class="picture"/>
            </a>
        </div>
        <div class="info-text">
            <div class="description">
                <span class="bold-text">Likes</span>
                <span class="info-value">${e.likes}</span>
            </div>
            <div class="description">
                <span class="bold-text">Views</span>
                <span class="info-value">${e.views}</span>
            </div>
            <div class="description">
                <span class="bold-text">Comments</span>
                <span class="info-value">${e.comments}</span>
            </div>
            <div class="description">
                <span class="bold-text">Downloads</span>
                <span class="info-value">${e.downloads}</span>
            </div>
        </div>
    </li>
  `).join("")}const P=document.querySelector(".search-form"),i=document.querySelector(".loader"),y=document.querySelector(".images-place"),n=document.querySelector(".load-more");function x(){n.style.display="block"}function m(){n.style.display="none"}let r=1,d="",p=1;const h=new b(".card .place-for-image a",{captionsData:"alt",captionDelay:250});n.style.display="none";P.addEventListener("submit",M);n.addEventListener("click",q);async function M(t){t.preventDefault(),d=t.currentTarget.elements.inputSearch.value,r=1,p=1,y.innerHTML="",i.style.display="block";try{const e=await f(d,r);e.totalHits===0?u("Sorry, there are no images matching your search query. Please try again!"):(p=Math.ceil(e.totalHits/15),g(e.hits),x(),h.refresh())}catch(e){u(`An error occurred: ${e.message}`),m()}finally{i.style.display="none"}}async function q(){r++,i.style.display="block";try{const t=await f(d,r);g(t.hits),h.refresh(),r===p&&m()}catch(t){u(`An error occurred: ${t.message}`),n.style.display="none"}finally{i.style.display="none"}}function g(t){const e=$(t);y.insertAdjacentHTML("beforeend",e)}function u(t){w.error({title:"Ops.",titleColor:"white",message:t,messageColor:"white",position:"topCenter",timeout:5e3})}
//# sourceMappingURL=commonHelpers.js.map
