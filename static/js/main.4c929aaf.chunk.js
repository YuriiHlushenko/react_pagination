(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),i=c(3),r=c(1);c(9);function l(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(0),o=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),r=l(1,i).map((function(e){return e}));return Object(s.jsxs)("ul",{className:"pagination",children:[Object(s.jsx)("li",{className:1===t?"page-item disabled":"page-item",children:Object(s.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){return 1===t?null:n(t-1)},children:"\xab"})}),r.map((function(e){return Object(s.jsx)("li",{className:t===e?"page-item active":"page-item",children:Object(s.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(s.jsx)("li",{className:t===i?"page-item disabled":"page-item",children:Object(s.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){return t===i?null:n(t+1)},children:"\xbb"})})]})},j=l(1,42).map((function(e){return"Item ".concat(e)})),d=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),d=l[0],u=l[1],p=j.length,h=d*c,m=h-c;h-1>p&&(h=p);var b=j.slice(m,h);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Items with Pagination"}),Object(s.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(d," (items ").concat(m+1," - ").concat(h," of ").concat(p,")")}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(s.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){t(+e.target.value),u(1)},children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{selected:!0,value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})}),Object(s.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(s.jsx)(o,{total:p,perPage:c,currentPage:d,onPageChange:function(e){u(e)}}),Object(s.jsx)("ul",{children:b.map((function(e){return Object(s.jsx)("li",{"data-cy":"item",children:e},b.indexOf(e))}))})]})};n.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.4c929aaf.chunk.js.map