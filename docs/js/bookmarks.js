(()=>{"use strict";var e={672:(e,t,a)=>{a.d(t,{Kz:()=>n});const n="38f02c16bd3f4b208587775b9c332912"}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n=a(672);window.onload=function(){!function(){let e=document.getElementById("bookmarkedcontainer"),t="",a=sessionStorage.getItem("userId");fetch(`https://web2-course-project-medoski.onrender.com/games/bookmarks/${a}`,{method:"GET"}).then((e=>e.json())).then((a=>{for(let n=a.length-1;n>=0;n--)t=`\n                        <div class="allgamesection">\n                        <img class="img" src="${a[n].gameImg}" alt="Avatar" style="width:100%">\n    \n                        <div class="allgametext">\n                            <p class="allgametitle "><b class="gameBookmarked" id="${a[n].gameId}">${a[n].gameName}</b><i class="material-icons delete game" id="${a[n]._id}">delete</i></p>\n                            <p><b class="allgamerelease">Release date : ${a[n].gameRelease}</b></p>\n                        </div>\n                    </div>\n                       `,e.insertAdjacentHTML("beforeend",t);!function(){const e=document.getElementsByClassName("delete");[].slice.call(e).forEach((e=>{e.addEventListener("click",(function(t){fetch(`https://web2-course-project-medoski.onrender.com/games/${e.id}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{setTimeout(window.location.reload(),100)}))}))}))}(),function(){const e=document.getElementsByClassName("gameBookmarked");[].slice.call(e).forEach((e=>{e.addEventListener("click",(function(t){setTimeout(500),t.preventDefault();let a=e.id;window.location.href=`./gameinfo.html?id=${a}`}))}))}()}))}(),document.getElementById("searchinput").addEventListener("keyup",(async function(e){if(e.preventDefault(),"Enter"!==e.key)return;const t=document.getElementById("searchinput").value.replace(/ /g,"-").toLowerCase();let a=await fetch(`https://api.rawg.io/api/games?search=${t}&key=${n.Kz}`);if(a.ok){let e=(await a.json()).results,t="";e.forEach((e=>{let a=e.name,n=e.background_image,l=e.released,s=document.getElementById("bookmarkedcontainer");t+=`\n                    <div class="allgamesection">\n            <img class="img" src="${n}" alt="Avatar" style="width:100%">\n\n            <div class="allgametext">\n                <p class="allgametitle" ><b class="title game">${a}</b><i class="material-icons bookmark game" id="${e.id}">bookmark_border</i></p>\n                <p><b class="allgamerelease">Release date : <b class="allgamereleasedate" id="allgamereleasedate">${l}</b></b></p>\n\n            </div>\n\n        </div>`,s.innerHTML=t,function(){const e=document.getElementsByClassName("game");[].slice.call(e).forEach((e=>{e.addEventListener("click",(function(t){setTimeout(500),t.preventDefault();let a=e.nextSibling.id;window.location.href=`./gameinfo.html?id=${a}`}))}))}(),function(){const e=document.getElementsByClassName("bookmark");Array.from(e).forEach((e=>{e.addEventListener("click",(function(t){let a=sessionStorage.getItem("userId"),n=e.id,l=e.parentElement.parentElement.parentElement.firstElementChild.src,s=e.previousSibling.outerText,o=e.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.outerText;fetch("https://web2-course-project-medoski.onrender.com/games",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:a,gameId:n,gameImg:l,gameName:s,gameRelease:o})}).then((e=>e.json())),e.innerHTML="bookmark"}))}))}()}))}else alert("error: "+response.status)}))}})();