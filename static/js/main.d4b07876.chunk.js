(this["webpackJsonpweather-react-2"]=this["webpackJsonpweather-react-2"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),i=(n(9),n(3)),o=n(0),u="ba97997bcf3c85fc91414f251a3265f9",h="https://api.openweathermap.org/data/2.5";var l=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(i.a)(r,2),l=s[0],d=s[1];return Object(o.jsx)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"app warm":"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search ...",onChange:function(e){return c(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(h,"weather?q=").concat(n,"&units=metric&APPID=").concat(u)).then((function(e){return e.json()})).then((function(e){d(e),c(""),console.log(e)}))}})}),"undefined"!=typeof l.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var t=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"][e.getDay()],n=e.getDate(),a=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(c)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(l.main.temp),"\xb0C"]}),Object(o.jsx)("div",{className:"weather",children:l.weather[0].main})]})]}):""]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.d4b07876.chunk.js.map