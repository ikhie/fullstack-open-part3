(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),r=t.n(c),a=t(3),o=t(1),i=t(4),u=t.n(i),d="/api/persons",l=function(){return console.log(d),u.a.get(d).then((function(e){return e.data}))},s=function(e){return u.a.post(d,e).then((function(e){return e.data}))},j=function(e,n){return u.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return u.a.delete("".concat(d,"/").concat(e))},f=t(0),h=function(e){var n=e.newFilter,t=e.handleFilter;return Object(f.jsxs)("div",{children:["filter shown with ",Object(f.jsx)("input",{value:n,onChange:t})]})},m=function(e){var n=e.name,t=e.number,c=e.deleteEntry;return Object(f.jsxs)("li",{children:[n," ",t," ",Object(f.jsx)("button",{onClick:c,children:"delete"})]})},O=function(e){return Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"add a new"}),"name: ",Object(f.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",onClick:e.addPerson,children:"Add"})})]})},v=function(e){var n=e.message,t=e.error;return null===n?null:Object(f.jsx)("div",{className:t,children:n})},p=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),i=Object(a.a)(r,2),u=i[0],d=i[1],p=Object(o.useState)(""),x=Object(a.a)(p,2),w=x[0],g=x[1],C=Object(o.useState)(""),N=Object(a.a)(C,2),k=N[0],y=N[1],S=Object(o.useState)(null),E=Object(a.a)(S,2),F=E[0],P=E[1],A=Object(o.useState)("notification"),D=Object(a.a)(A,2),J=D[0],L=D[1];Object(o.useEffect)((function(){l().then((function(e){c(e)}))}),[]);var T=""!==k?t.filter((function(e){return e.name.toLowerCase().startsWith(k.toLowerCase())})):t;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(v,{message:F,error:J}),Object(f.jsx)(h,{newFilter:k,handleFilter:function(e){y(e.target.value)}}),Object(f.jsx)(O,{newName:u,handleNameChange:function(e){d(e.target.value)},newNumber:w,handleNumberChange:function(e){g(e.target.value)},addPerson:function(e){e.preventDefault();var n={name:u,number:w},r=t.find((function(e){return e.name===n.name}));void 0===r?function(e){s(e).then((function(n){L("notification"),c(t.concat(n)),P("Added ".concat(e.name," to phonebook"))}))}(n):function(e,n){window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&j(e,n).then((function(r){c(t.map((function(n){return n.id!==e?n:r}))),L("notification"),P("Updated ".concat(n.name))})).catch((function(r){L("error"),P("".concat(n.name," already removed from the server")),c(t.filter((function(n){return n.id!==e})))}))}(r.id,n),d(""),g(""),setTimeout((function(){P(null)}),3e3)}}),Object(f.jsx)("h2",{children:"Numbers"}),T.map((function(e){return Object(f.jsx)(m,{name:e.name,number:e.number,deleteEntry:function(){return function(e){var n=t.find((function(n){return n.id===e})).name;window.confirm("delete ".concat(n,"?"))&&b(e).then((function(e){P("Deleted ".concat(n)),setTimeout((function(){P(null)}),3e3)}))}(e.id)}},e.name)}))]})};t(38);r.a.render(Object(f.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9378115a.chunk.js.map