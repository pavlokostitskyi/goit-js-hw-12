import{a as h,S as g,i as v}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const b="43389395-13044f7a31a85be77891b044e",w="https://pixabay.com/api/";async function u(t,e){const i=new URLSearchParams({key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}),r=await h.get(`${w}?${i}`);if(!r.data||r.data.totalHits===0)throw new Error("No images found");return r.data}function L(t){return t.map(e=>`
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
  `).join("")}const S=document.querySelector(".search-form"),a=document.querySelector(".loader"),f=document.querySelector(".images-place"),p=document.querySelector(".load-more");let n=1,l="";const m=new g(".card .place-for-image a",{captionsData:"alt",captionDelay:250});p.style.display="none";S.addEventListener("submit",$);p.addEventListener("click",x);async function $(t){t.preventDefault(),l=t.currentTarget.elements.inputSearch.value,n=1,f.innerHTML="",a.style.display="block";try{const e=await u(l,n);e.totalHits===0?d("Sorry, there are no images matching your search query. Please try again!"):(y(e.hits),P(),m.refresh())}catch(e){d(`An error occurred: ${e.message}`)}finally{a.style.display="none"}}async function x(){n++,a.style.display="block";try{const t=await u(l,n);y(t.hits),m.refresh()}catch(t){d(`An error occurred: ${t.message}`)}finally{a.style.display="none"}}function y(t){const e=L(t);f.insertAdjacentHTML("beforeend",e)}function d(t){v.error({title:"Ops.",titleColor:"white",message:t,messageColor:"white",position:"topCenter",timeout:5e3})}function P(){p.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
