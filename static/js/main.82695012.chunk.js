(this["webpackJsonpweather-react-2"]=this["webpackJsonpweather-react-2"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),i=(n(9),n(3)),o=n(0),l="ba97997bcf3c85fc91414f251a3265f9",u="https://api.openweathermap.org/data/2.5";var h=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(i.a)(r,2),h=(s[0],s[1]);return Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search ...",onChange:function(e){return c(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(n,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){h(e),c(""),console.log(e)}))}})}),Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsx)("div",{className:"location",children:"Berlin, Deutschland"}),Object(o.jsx)("div",{className:"date",children:function(e){var t=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"][e.getDay()],n=e.getDate(),a=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(c)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsx)("div",{className:"temp",children:"15\xb0C"}),Object(o.jsx)("div",{className:"weather",children:"Sunny"})]})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.82695012.chunk.js.map