(()=>{"use strict";var e={672:(e,a,t)=>{t.d(a,{Kz:()=>n,VS:()=>l});const n="38f02c16bd3f4b208587775b9c332912";async function l(){const e=await fetch(`https://api.rawg.io/api/games?key=${n}`);return await e.json()}}},a={};function t(n){var l=a[n];if(void 0!==l)return l.exports;var s=a[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.d=(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a);var n=t(672);window.onload=function(){function e(){const e=document.getElementsByClassName("game");[].slice.call(e).forEach((e=>{e.addEventListener("click",(function(a){setTimeout(500),a.preventDefault();let t=e.nextSibling.id;window.location.href=`./gameinfo.html?id=${t}`}))}))}function a(){const e=document.getElementsByClassName("bookmark");Array.from(e).forEach((e=>{e.addEventListener("click",(function(a){let t=sessionStorage.getItem("userId"),n=e.id,l=e.parentElement.parentElement.parentElement.firstElementChild.src,s=e.previousSibling.outerText,i=e.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.outerText;fetch("https://web2-course-project-medoski.onrender.com/games",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t,gameId:n,gameImg:l,gameName:s,gameRelease:i})}).then((e=>e.json())),e.innerHTML="bookmark"}))}))}document.getElementById("searchinput").addEventListener("keyup",(async function(t){if(t.preventDefault(),"Enter"!==t.key)return;const l=document.getElementById("searchinput").value.replace(/ /g,"-").toLowerCase();let s=await fetch(`https://api.rawg.io/api/games?search=${l}&key=${n.Kz}`);if(s.ok){let t=(await s.json()).results,n="";t.forEach((e=>{let a=e.name,t=e.background_image,l=e.released,s=document.getElementById("allgamescontainer");n+=`\n                    <div class="allgamesection">\n            <img class="img" src="${t}" alt="Avatar" style="width:100%">\n\n            <div class="allgametext">\n                <p class="allgametitle"><b class="title game">${a}</b><i class="material-icons bookmark" id="${e.id}">bookmark_border</i></p>\n                <p><b class="allgamerelease">Release date : <b class="allgamereleasedate" id="allgamereleasedate">${l}</b></b></p>\n            </div>\n        </div>`,s.innerHTML=n})),e(),a()}else alert("error: "+response.status)})),(0,n.VS)().then((t=>{t.results.forEach((e=>{let a=e.name,t=e.background_image,n=e.released,l=document.getElementById("allgamescontainer"),s="";s+=`<div class="allgamesection">\n            <img class="img" id="img" src="${t}" alt="Avatar" style="width:100%">\n\n            <div class="allgametext">\n                <p class="allgametitle"><b class="title game" id="title">${a}</b><i class="material-icons bookmark game" id="${e.id}">bookmark_border</i></p>\n                <p><b class="allgamerelease" id="allgamerelease">Release date : <b class="allgamereleasedate" id="allgamereleasedate">${n}</b></b></p>\n\n            </div>\n\n        </div>`,l.insertAdjacentHTML("beforeend",s)})),e(),a()}))}})();