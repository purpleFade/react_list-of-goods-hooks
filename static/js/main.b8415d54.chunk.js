(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(6),i=n(8),r=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var h=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!1),a=Object(o.a)(s,2),h=a[0],j=a[1],d=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=Object(i.a)(t);return e&&c.sort((function(t,n){return"name"===e?t.localeCompare(n):"length"===e?t.length-n.length:0})),n&&c.reverse(),c}(b,n,h);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":"name"!==n}),onClick:function(){return c("name")},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":"length"!==n}),onClick:function(){return c("length")},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!h}),onClick:function(){j(!h)},children:"Reverse"}),""!==n||h?Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),j(!1)},children:"Reset"}):null]}),Object(u.jsx)("ul",{children:d.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b8415d54.chunk.js.map