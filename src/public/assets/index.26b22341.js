const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};g();const v=document.querySelector("#uploadArea"),l=document.querySelector("#dropZoon"),a=document.querySelector("#loadingText"),c=document.querySelector("#fileInput"),d=document.querySelector("#previewImage"),L=document.querySelector("#fileDetails"),u=document.querySelector("#uploadedFile"),f=document.querySelector("#uploadedFileInfo"),S=document.querySelector(".uploaded-file__name"),p=document.querySelector(".uploaded-file__icon-text"),T=document.querySelector(".uploaded-file__counter"),q=document.querySelector(".upload-area__tooltip-data"),m=["jpeg","png","svg","gif"];q.innerHTML=[...m].join(", .");l.addEventListener("dragover",function(e){e.preventDefault(),l.classList.add("drop-zoon--over")});l.addEventListener("dragleave",function(e){l.classList.remove("drop-zoon--over")});l.addEventListener("drop",function(e){e.preventDefault(),l.classList.remove("drop-zoon--over");const t=e.dataTransfer.files[0];y(t)});l.addEventListener("click",function(e){c.click()});c.addEventListener("change",function(e){const t=e.target.files[0];y(t)});function y(e){const t=new FileReader,r=e.type,i=e.size;F(r,i)&&(l.classList.add("drop-zoon--Uploaded"),a.style.display="block",d.style.display="none",u.classList.remove("uploaded-file--open"),f.classList.remove("uploaded-file__info--active"),t.addEventListener("load",function(){setTimeout(function(){v.classList.add("upload-area--open"),a.style.display="none",d.style.display="block",L.classList.add("file-details--open"),u.classList.add("uploaded-file--open"),f.classList.add("uploaded-file__info--active")},500),d.setAttribute("src",t.result),S.innerHTML=e.name,I()}),t.readAsDataURL(e))}function I(){let e=0;setTimeout(()=>{let t=setInterval(()=>{e===100?clearInterval(t):(e=e+10,T.innerHTML=`${e}%`)},100)},600)}function F(e,t){let r=m.filter(i=>e.indexOf(`image/${i}`)!==-1);return r[0]==="jpeg"?p.innerHTML="jpg":p.innerHTML=r[0],r.length!==0?t<=2e6?!0:alert("Please Your File Should be 2 Megabytes or Less"):alert("Please make sure to upload An Image File Type")}