(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),i=n(6),o=n(8),a=(n(13),n(14),n(4)),r=n.n(a),l=n(1),u=n(0),b="name",j="length",h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var d=function(){var t=Object(l.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(l.useState)(!1),a=Object(i.a)(s,2),d=a[0],g=a[1],p=function(t,e,n){var c=Object(o.a)(t);return n&&c.sort((function(t,e){switch(n){case b:return t.localeCompare(e);case j:return t.length-e.length;default:return 0}})),e&&c.reverse(),c}(h,d,n);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:r()("button is-info",{"is-light":n!==b}),onClick:function(){c(b)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:r()("button is-success",{"is-light":n!==j}),onClick:function(){c(j)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:r()("button is-warning",{"is-light":!0!==d}),onClick:function(){g(!d)},children:"Reverse"}),(!0===d||""!==n)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),g(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t})}))})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.db307524.chunk.js.map