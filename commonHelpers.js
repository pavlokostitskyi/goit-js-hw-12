import{a as g,S as v,i as b}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=c(s);fetch(s.href,o)}})();const w="43389395-13044f7a31a85be77891b044e",L="https://pixabay.com/api/";async function f(t,e){const c=new URLSearchParams({key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}),a=await g.get(`${L}?${c}`);if(!a.data||a.data.totalHits===0)throw new Error("No images found");return a.data}function S(t){return t.map(e=>`
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
  `).join("")}const $=document.querySelector(".search-form"),n=document.querySelector(".loader"),m=document.querySelector(".images-place"),i=document.querySelector(".load-more");let r=1,d="",p=1;const y=new v(".card .place-for-image a",{captionsData:"alt",captionDelay:250});i.style.display="none";$.addEventListener("submit",P);i.addEventListener("click",x);async function P(t){t.preventDefault(),d=t.currentTarget.elements.inputSearch.value,r=1,p=1,m.innerHTML="",n.style.display="block";try{const e=await f(d,r);e.totalHits===0?u("Sorry, there are no images matching your search query. Please try again!"):(p=Math.ceil(e.totalHits/15),h(e.hits),q(),y.refresh())}catch(e){u(`An error occurred: ${e.message}`)}finally{n.style.display="none"}}async function x(){r++,n.style.display="block";try{const t=await f(d,r);h(t.hits),y.refresh(),r===p&&(i.style.display="none")}catch(t){u(`An error occurred: ${t.message}`)}finally{n.style.display="none"}}function h(t){const e=S(t);m.insertAdjacentHTML("beforeend",e)}function u(t){b.error({title:"Ops.",titleColor:"white",message:t,messageColor:"white",position:"topCenter",timeout:5e3})}function q(){i.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
