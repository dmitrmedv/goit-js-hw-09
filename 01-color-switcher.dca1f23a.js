!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,o=setInterval((function(){console.log(r()),n.style.backgroundColor=r()}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(o)}));var o=null;function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.dca1f23a.js.map
