!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("6dQcf");var i=o("gcQJ6"),a=o("aZ3a6"),s=o("8AEpj");const c=document.querySelector(".library-empty"),l=document.querySelector(".library_list"),r=document.querySelector(".js-watched"),d=document.querySelector(".js-queue");function u(){d.classList.remove("active-button"),r.classList.add("active-button"),l.innerHTML="";const e=JSON.parse(localStorage.getItem("watchedList"));e&&0!==e.length?(c.style.display="none",f(e)):c.style.display="block"}function p({id:e,title:t,name:n,poster_path:o,genres:i,release_date:s,first_air_date:c,vote_average:r}){const d=[];d.push(i.map((e=>e.id)));const u=d[0],p=`<li class="movieCard" data="${e}">\n      <div class="movieCard__img-wrapper">\n      <img src="https://image.tmdb.org/t/p/w500/${o}"\n        alt="${t||n} movie poster"\n        loading="lazy"\n        class="movieCard__img"\n      />\n      </div>\n      <div class="movieCard__text">\n        <h2 class="movieCard__title">${(t||n).toUpperCase()}</h2>\n        <p class="movieCard__info"> ${function(e){const t=[];return a.genres.forEach((n=>{e.includes(n.id)&&t.push(n.name)})),t.length>2?`${t[0]}, ${t[1]}, Other`:t.join(", ")}(u)} | ${new Date(s||c).getFullYear()}\n          <span class="movieCard__rate">${r.toFixed(1)}</span></p>\n      </div>\n      </li> `;l.insertAdjacentHTML("beforeend",p)}function g(){const e=JSON.parse(localStorage.getItem("watchedList")),t=JSON.parse(localStorage.getItem("queueList")),n=!e||0===e.length,o=!t||0===t.length;let i=!1;(r.classList.contains("active-button")&&n||d.classList.contains("active-button")&&o)&&(i=!0),i?(l.innerHTML="",c.style.display="block"):(c.style.display="none",l.innerHTML="",r.classList.contains("active-button")?(console.log("parsedWatchedFilms",e),f(e)):d.classList.contains("active-button")&&(console.log("parsedQueueFilms",t),f(t)))}function f(e){let t=0;function n(){window.innerHeight+window.scrollY+1>=document.body.offsetHeight&&t<e.length&&o()}function o(){const o=Math.min(t+9,e.length);e.slice(t,o).forEach((e=>{(async function(e){(0,i.onSpinnerEnabled)();const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=e8d94f3e976148bda0a5c640d4df112b&language=en-US`);return(0,i.onSpinnerDisabled)(),await t.json()})(e).then((e=>{p(e)}))})),t+=9,t<e.length&&document.addEventListener("scroll",n),console.log(e.length),console.log(t)}o()}u(),r.addEventListener("click",u),d.addEventListener("click",(function(){r.classList.remove("active-button"),d.classList.add("active-button"),l.innerHTML="";const e=JSON.parse(localStorage.getItem("queueList"));if(!e||0===e.length)return void(c.style.display="block");c.style.display="none",f(e)})),s.closeModalBtn.addEventListener("click",g),document.addEventListener("keyup",(e=>function(e){if("Escape"!==e.code)return;g()}(e))),s.backdgop.addEventListener("click",(e=>function(e){e.target===e.currentTarget&&g()}(e))),o("3HmWm"),o("gcQJ6"),o("47Ayw"),o("8AEpj")}();
//# sourceMappingURL=library.7306b4cb.js.map
