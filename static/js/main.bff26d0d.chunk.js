(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),s=(c(31),c(32),c(6)),a=c(3),r=c(10),j=c.n(r),i=(c(33),c(2)),l=function(){var e=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(s.c,{to:"/",className:e,children:"Home"}),Object(i.jsx)(s.c,{to:"/people",className:e,children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},o=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Home Page"})})},b=c(4),d=c(0);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(35);var O=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},x=function(e){var t=e.person,c=Object(a.r)().slug;return Object(i.jsx)(s.b,{to:c?"../".concat(t.slug):"".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},u=function(e){var t=e.person,c=e.people,n=t.sex,s=t.born,r=t.died,l=t.motherName,o=t.fatherName,b=Object(d.useMemo)((function(){return function(e){return c.find((function(t){return t.name===e}))}}),[c]),h=b(l),O=b(o),u=l||"-",p=o||"-",m=Object(a.r)().slug;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":t.slug===m}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(x,{person:t})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:h?Object(i.jsx)(x,{person:h}):u}),Object(i.jsx)("td",{children:O?Object(i.jsx)(x,{person:O}):p})]})},p=function(e){var t=e.people;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(u,{person:e,people:t},e.name)}))})]})},m=function(){var e=Object(d.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(d.useState)(!0),a=Object(b.a)(s,2),r=a[0],j=a[1],l=Object(d.useState)(!1),o=Object(b.a)(l,2),x=o[0],u=o[1],m=!r&&!x&&c.length>0;return Object(d.useEffect)((function(){h().then((function(e){return n(e)})).catch((function(){return u(!0)})).finally((function(){return j(!1)}))}),[]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[r&&Object(i.jsx)(O,{}),x&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!r&&!x&&0===c.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),m&&Object(i.jsx)(p,{people:c})]})})]})},f=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})},v=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(l,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(o,{})}),Object(i.jsx)(a.c,{path:"home",element:Object(i.jsx)(a.a,{to:"/"})}),Object(i.jsxs)(a.c,{path:"people",children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(m,{})}),Object(i.jsx)(a.c,{path:":slug",element:Object(i.jsx)(m,{})})]}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(f,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(v,{}))}},[[36,1,2]]]);
//# sourceMappingURL=main.bff26d0d.chunk.js.map