(this["webpackJsonpweather-react-2"]=this["webpackJsonpweather-react-2"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(4),s=n.n(i),r=(n(10),n(3)),o=n(5),d=n(0),l="ba97997bcf3c85fc91414f251a3265f9",u="https://api.openweathermap.org/data/2.5/",h=[];var m=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({}),s=Object(r.a)(i,2),m=s[0],b=s[1];return Object(d.jsx)("div",{className:"undefined"!=typeof m.main&&m.main.temp>16?"app warm":"app",children:Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{className:"search-box",children:Object(d.jsx)("input",{type:"text",className:"search-bar",placeholder:"Ort suchen ...",onChange:function(e){return c(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(n,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){b(e),c(""),console.log(e)}))}})}),Object(d.jsxs)("div",{className:"favoriten-box",children:[Object(d.jsx)("div",{className:"kopf",children:"Favoriten"}),Object(d.jsx)("div",{className:"k\xf6rper",children:Object(d.jsxs)("select",{className:"auswahlbox",size:"1",id:"fav-box-id",onChange:function(e){var t=h.find((function(t){return t.stadt===e.target.value})).info;b(t)},children:["value=",n,"//hier sit die Liste der Favoriten"]})})]}),"undefined"!=typeof m.main?Object(d.jsxs)("div",{className:"info-box",children:[Object(d.jsxs)("div",{className:"location-box",children:[Object(d.jsxs)("div",{className:"location",id:"location-id",children:[m.name,", ",m.sys.country]}),Object(d.jsx)("div",{className:"date",children:function(e){var t=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"][e.getDay()],n=e.getDate(),a=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(c)}(new Date)})]}),Object(d.jsxs)("div",{className:"weather-box",children:[Object(d.jsxs)("div",{className:"temp",id:"temp-id",children:[Math.round(m.main.temp),"\xb0C"]}),Object(d.jsx)("div",{className:"weather",children:m.weather[0].main})]}),Object(d.jsx)("div",{className:"add-favorite-box",children:Object(d.jsxs)("button",{className:"add-favorite-button",onClick:function(){return function(e){var t=document.getElementById("fav-box-id"),n=!1;if(Array.from(t).forEach((function(t){if(t.value==e)return window.alert("".concat(e," ist bereits in den Favoriten enthalten!")),void(n=!0)})),!n){var a=document.createElement("option");a.value=e,a.textContent=e,t.appendChild(a),h.push({stadt:"".concat(m.name,", ").concat(m.sys.country),info:{name:m.name,sys:{country:m.sys.country},main:{temp:m.main.temp},weather:[{main:m.weather[0].main}]}}),console.log(h[0])}}("".concat(m.name,", ").concat(m.sys.country))},children:[Object(d.jsx)(o.a,{size:"15px"})," Zu Favoriten hinzuf\xfcgen"]})})]}):""]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.12c878e9.chunk.js.map