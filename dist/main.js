(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(81),i=n.n(a),o=n(645),d=n.n(o),r=n(667),c=n.n(r),s=new URL(n(853),n.b),l=new URL(n(800),n.b),p=new URL(n(25),n.b),m=new URL(n(650),n.b),u=new URL(n(875),n.b),f=new URL(n(807),n.b),v=new URL(n(874),n.b),g=new URL(n(98),n.b),h=new URL(n(226),n.b),b=d()(i()),x=c()(s),y=c()(l),E=c()(p),L=c()(m),w=c()(u),C=c()(f),k=c()(v),T=c()(g),O=c()(h);b.push([e.id,"@font-face {\n    font-family: 'norsebold';\n    src: url("+x+") format('woff2'),\n         url("+y+") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    margin: 0px;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-image: url("+E+");\n    background-repeat:no-repeat;\n}\n\n\n/* ------------------------- top page */\n\n.top {\n    display: flex;\n    height: 15vh;\n    min-width: 700px;\n    min-height: 100px;\n    background-color: 1f262e;\n    opacity: 1;\n}\n.top-left {\n    width:50%;\n    font-size: 5em;\n    font-family: 'norsebold';\n    padding-left: 70px;\n    padding-right: 30px;\n    color: white;\n    display: flex;\n    align-items: center;\n}\n.top-right {\n    width:50%;\n    position: relative;\n    display: flex;\n    align-items: center;\n}\n\n\n/* ------------------------- NAVBAR */\n\n.navbar {\n    display: flex;\n    justify-content: end;\n    padding-right: 70px;\n    gap: 10px;\n    width: 100%;\n    height: 38%;\n}\n\n.navbar-tab-active {\n    height: auto;\n    width: 150px;\n    background-color: #f48245;\n    border-radius: 5px;\n    font-size: 1.3em;\n    font-family: 'norsebold';\n    color: rgb(255, 255, 255);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n.navbar-tab-active:hover {\n    background-color: #eb642f;\n}\n\n.navbar-tab-not-active {\n    height: auto;\n    width: 150px;\n    border: 2px solid white;\n    border-radius: 5px;\n    font-size: 1.3em;\n    font-family: 'norsebold';\n    color: rgb(255, 255, 255);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n.navbar-tab-not-active:hover {\n    opacity: 0.6;\n}\n\n\n/* ------------------------- mid page */\n\n.mid-page {\n    height: 78vh;\n    width: 100vw;;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.mid-left {\n    width: 50vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.mid-left-cont {\n    width: 400px;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-right: 30px;\n    border-right: 2px solid white;\n}\n\n.mid-left-para { \n   font-size: 4em;\n   font-family: sans-serif;\n}\n\n.mid-left-para2 {\n    padding-top: 20px;\n\n    font-size: 1.4em;\n    font-style: italic;\n}\n.mid-left-body {\n   padding-top: 20px;\n   width: 350px;\n   font-size: 1em;\n   font-family: sans-serif;\n}\n\n\n/* ------------------------- mid RIGHT */\n\n.mid-right {\n    width: 50vw;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    padding-left: 30px;\n}\n\n .mid-right-cont {\n    width: 400px;\n    height: 400px;\n    background-size: 250px;\n    background-image: url("+L+");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:flex-start;\n}\n\n.mid-right-body {\n    width: 350px;\n }\n\n/* ------------------------- FOOTER */\n\n.footer {\n    height: 7vh;\n    min-height: 30px;\n    opacity: 1;\n    background-color: #1f262e;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.footer-cont{\n    color: rgb(194, 194, 194);\n    font-family: sans-serif;\n    font-size: 0.65em;\n}\n\n.footer-git{ \n    background-image: url("+w+");\n    width: 20px;\n    height: 20px;\n    background-size: 20px;\n    padding-left: 30px;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.7;\n}\n\n\n/* ------------- MENU PAGE ---*/\n\n.menu-container{\n    display:flex;\n    flex-direction: row;\n    justify-content: center;\n    align-content: center;\n    gap: 45px;\n    padding: 100px;\n}\n.menu-item1, .menu-item2, .menu-item3{\n\n    width: 250px;\n    height: 45%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    }\n\n.menu-item1-pic, .menu-item2-pic, .menu-item3-pic {\n    width: 150px;\n    height: 150px;\n}\n\n.menu-item1-pic {\n    background-image: url("+C+");\n}\n\n.menu-item2-pic {\n    background-image: url("+k+");\n}\n\n.menu-item3-pic {\n    background-image: url("+T+");\n}\n\n.menu-item1-para, .menu-item2-para, .menu-item3-para {\n    margin-top: 25px;\n    font-size: 2.35em;\n    font-family: 'norsebold';\n    color: white;\n}\n\n.menu-item-price {\n    margin-top: 10px;\n    font-size: 4em;\n    color: #f48245;\n    font-weight: 100;\n    /* font-family: sans-serif; */\n    font-family: 'norsebold';\n}\n\n.menu-item-body, .menu-item2-body, .menu-item3-body {\n    margin-top: 10px;\n    color: white;\n    font-size: 0.8em;\n    text-align: center;\n    font-family: sans-serif;\n}\n\n\n/* ------------- CONTACT PAGE ---*/\n\n.contact-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.contact-map {\n    width: 500px;\n    height: 300px;\n    background-image: url("+O+");\n    background-size: contain;\n    border: 2px solid white;\n}\n\n.contact-item {\n    width: 300px;\n    height: auto;\n    /* background-color: #f48245; */\n}\n\n.contact-para1{\n    font-size: 1em;\n    color: white;\n    font-family: sans-serif;\n}\n.contact-para2{\n    font-size: 1em;\n    color: white;\n    font-family: sans-serif;\n}\n.contact-para3{\n    font-size: 1em;\n    color: white;\n    font-family: sans-serif;\n}",""]);const S=b},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&d[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},d=[],r=0;r<e.length;r++){var c=e[r],s=a.base?c[0]+a.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var m=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=i(u,a);a.byIndex=r,t.splice(r,0,{identifier:p,updater:f,references:1})}d.push(p)}return d}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var d=0;d<o.length;d++){var r=n(o[d]);t[r].references--}for(var c=a(e,i),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},800:(e,t,n)=>{e.exports=n.p+"f51c4877f6cdb657b5a2.woff"},853:(e,t,n)=>{e.exports=n.p+"f038f6c53d8f3d56482b.woff2"},25:(e,t,n)=>{e.exports=n.p+"79e261f299c75cda906d.jpg"},874:(e,t,n)=>{e.exports=n.p+"4ab7ce822e8059457fe4.svg"},875:(e,t,n)=>{e.exports=n.p+"94540add071e0e81cf65.svg"},226:(e,t,n)=>{e.exports=n.p+"34b7571aea0fe4e44c86.png"},650:(e,t,n)=>{e.exports=n.p+"4f0f495b2f256748749f.png"},98:(e,t,n)=>{e.exports=n.p+"d300060157638e404f87.svg"},807:(e,t,n)=>{e.exports=n.p+"c02678df7336e9350e92.svg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),i=n.n(a),o=n(569),d=n.n(o),r=n(565),c=n.n(r),s=n(216),l=n.n(s),p=n(589),m=n.n(p),u=n(426),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const v=function(){const e=document.querySelector("#content");for(e.style="";e.firstChild;)e.removeChild(e.lastChild)},g=function(){!function(){let e=document.createElement("div");e.classList.add("wrapper"),content.append(e);let t=document.createElement("div");t.classList.add("top"),e.append(t);let n=document.createElement("div");n.classList.add("top-left"),n.textContent="ODINSFEAST",t.append(n);let a=document.createElement("div");a.classList.add("top-right"),t.append(a);let i=document.createElement("div");i.classList.add("navbar"),a.append(i);let o=document.createElement("div");o.classList.add("navbar-tab-not-active"),o.id="home",o.textContent="HOME",o.addEventListener("click",(e=>{v(),b()})),i.append(o);let d=document.createElement("div");d.classList.add("navbar-tab-not-active"),d.id="menu",d.textContent="MENU",d.addEventListener("click",(e=>{v(),h()})),i.append(d);let r=document.createElement("div");r.classList.add("navbar-tab-active"),r.id="contact",r.textContent="CONTACT",i.append(r);let c=document.createElement("div");c.classList.add("mid-page"),e.append(c);let s=document.createElement("div");s.classList.add("contact-container"),c.appendChild(s);let l=document.createElement("div");l.classList.add("contact-map"),s.append(l);let p=document.createElement("div");p.classList.add("contact-item"),s.append(p);let m=document.createElement("div");m.classList.add("contact-para1"),m.textContent="Phone: 123 456 789",p.append(m);let u=document.createElement("div");u.classList.add("contact-para2"),u.textContent="e-mail: mr_odin@odinsfeast.com",p.append(u);let f=document.createElement("div");f.classList.add("contact-para3"),f.textContent="address: 123 Valhalla St, Norway",p.append(f);let g=document.createElement("div");g.classList.add("footer"),e.append(g);let x=document.createElement("div");x.classList.add("footer-cont"),x.textContent="Developed by Damian Grabowski",g.append(x);let y=document.createElement("div");y.classList.add("footer-git"),g.append(y)}()},h=function(){!function(){let e=document.createElement("div");e.classList.add("wrapper"),content.append(e);let t=document.createElement("div");t.classList.add("top"),e.append(t);let n=document.createElement("div");n.classList.add("top-left"),n.textContent="ODINSFEAST",t.append(n);let a=document.createElement("div");a.classList.add("top-right"),t.append(a);let i=document.createElement("div");i.classList.add("navbar"),a.append(i);let o=document.createElement("div");o.classList.add("navbar-tab-not-active"),o.id="home",o.textContent="HOME",o.addEventListener("click",(e=>{v(),b()})),i.append(o);let d=document.createElement("div");d.classList.add("navbar-tab-active"),d.id="menu",d.textContent="MENU",i.append(d);let r=document.createElement("div");r.classList.add("navbar-tab-not-active"),r.id="contact",r.textContent="CONTACT",r.addEventListener("click",(e=>{v(),g()})),i.append(r);let c=document.createElement("div");c.classList.add("mid-page"),e.append(c);let s=document.createElement("div");s.classList.add("menu-container"),c.appendChild(s);let l=document.createElement("div");l.classList.add("menu-item1"),s.append(l);let p=document.createElement("div");p.classList.add("menu-item1-pic"),l.append(p);let m=document.createElement("div");m.classList.add("menu-item1-para"),m.textContent="Odins Steak!",l.append(m);let u=document.createElement("div");u.classList.add("menu-item-price"),u.textContent="£55",l.append(u);let f=document.createElement("div");f.classList.add("menu-item-body"),f.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",l.append(f);let h=document.createElement("div");h.classList.add("menu-item2"),s.append(h);let x=document.createElement("div");x.classList.add("menu-item2-pic"),h.append(x);let y=document.createElement("div");y.classList.add("menu-item2-para"),y.textContent="Odins Fish!",h.append(y);let E=document.createElement("div");E.classList.add("menu-item-price"),E.textContent="£25",h.append(E);let L=document.createElement("div");L.classList.add("menu-item2-body"),L.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",h.append(L);let w=document.createElement("div");w.classList.add("menu-item3"),s.append(w);let C=document.createElement("div");C.classList.add("menu-item3-pic"),w.append(C);let k=document.createElement("div");k.classList.add("menu-item3-para"),k.textContent="Odins Ribbs!",w.append(k);let T=document.createElement("div");T.classList.add("menu-item-price"),T.textContent="£45",w.append(T);let O=document.createElement("div");O.classList.add("menu-item3-body"),O.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",w.append(O);let S=document.createElement("div");S.classList.add("footer"),e.append(S);let U=document.createElement("div");U.classList.add("footer-cont"),U.textContent="Developed by Damian Grabowski",S.append(U);let j=document.createElement("div");j.classList.add("footer-git"),S.append(j)}()},b=function(){!function(){let e=document.createElement("div");e.classList.add("wrapper"),content.append(e);let t=document.createElement("div");t.classList.add("top"),e.append(t);let n=document.createElement("div");n.classList.add("top-left"),n.textContent="ODINSFEAST",t.append(n);let a=document.createElement("div");a.classList.add("top-right"),t.append(a);let i=document.createElement("div");i.classList.add("navbar"),a.append(i);let o=document.createElement("div");o.classList.add("navbar-tab-active"),o.id="home",o.textContent="HOME",i.append(o);let d=document.createElement("div");d.classList.add("navbar-tab-not-active"),d.id="menu",d.textContent="MENU",d.addEventListener("click",(e=>{v(),h()})),i.append(d);let r=document.createElement("div");r.classList.add("navbar-tab-not-active"),r.id="contact",r.textContent="CONTACT",r.addEventListener("click",(e=>{v(),g()})),i.append(r);let c=document.createElement("div");c.classList.add("mid-page"),e.append(c);let s=document.createElement("div");s.classList.add("mid-left"),c.append(s);let l=document.createElement("div");l.classList.add("mid-left-cont"),s.append(l);let p=document.createElement("div");p.classList.add("mid-left-para"),p.textContent="Welcome to Odinsfeast!",l.append(p);let m=document.createElement("div");m.classList.add("mid-left-para2"),m.textContent="Worlds most renowned nordic restaurant. One you will always come back to!",l.append(m);let u=document.createElement("div");u.classList.add("mid-left-body"),u.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",l.append(u);let f=document.createElement("div");f.classList.add("mid-right"),c.append(f);let b=document.createElement("div");b.classList.add("mid-right-cont"),f.append(b);let x=document.createElement("div");b.classList.add("mid-right-body"),b.append(x);let y=document.createElement("div");y.classList.add("footer"),e.append(y);let E=document.createElement("div");E.classList.add("footer-cont"),E.textContent="Developed by Damian Grabowski",y.append(E);let L=document.createElement("div");L.classList.add("footer-git"),y.append(L)}()};b()})()})();