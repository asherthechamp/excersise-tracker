(this["webpackJsonpexcersise-tracker"]=this["webpackJsonpexcersise-tracker"]||[]).push([[0],{60:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=(c(30),c(9)),r=c(4),i=c(6),j=c.n(i),o=c(11),l=c(5),b=c(10),u=c(28),d=c.n(u),h="https://exercise-tracker111.herokuapp.com",O=c(3);var x=function(){var e,t=Object(n.useState)({}),c=Object(l.a)(t,2),a=c[0],i=c[1],u=Object(n.useState)([]),x=Object(l.a)(u,2),p=(x[0],x[1],Object(n.useState)([])),m=Object(l.a)(p,2),f=m[0],v=m[1],N=Object(n.useState)(),y=Object(l.a)(N,2),k=y[0],g=y[1],S=null===(e=Object(r.e)().state)||void 0===e?void 0:e.eid;function C(){return(C=Object(o.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(a),!S){e.next=7;break}return e.next=4,fetch("".concat(h,"/exercises/update/").concat(S),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)});case 4:e.sent,e.next=11;break;case 7:return e.next=9,fetch("".concat(h,"/exercises/add"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)});case 9:return c=e.sent,e.abrupt("return",c.json());case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/exercises/").concat(S));case 2:return e.sent.json().then((function(e){i(e)})),e.next=6,fetch("".concat(h,"http://localhost:5000/exercises"));case 6:return e.sent.json().then((function(e){return v(f)})),e.next=10,fetch("".concat(h,"/users"));case 10:return e.next=12,e.sent.json().then((function(e){g(e.map((function(e){return Object(O.jsx)("option",{value:e.username,children:e.username})})))}));case 12:e.sent;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)(Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:case"end":return e.stop()}}),e)}))),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"mb-4",children:"Exercise"}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsxs)("select",{className:"form-select",onChange:function(e){i(Object(b.a)(Object(b.a)({},a),{},{username:e.target.value}))},value:a.username,placeholder:"User Name",children:[Object(O.jsx)("option",{className:"text-muted",hidden:!0,children:"Select User"}),k||[]]})}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsx)("input",{className:"form-control",onChange:function(e){i(Object(b.a)(Object(b.a)({},a),{},{description:e.target.value}))},value:a.description,placeholder:"Descreption",type:"text"})}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsx)("input",{className:"form-control",onChange:function(e){i(Object(b.a)(Object(b.a)({},a),{},{duration:e.target.value}))},value:a.duration,placeholder:"Duration",type:"number"})}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsx)(d.a,{className:"form-control",onChange:function(e){i(Object(b.a)(Object(b.a)({},a),{},{date:e}))},value:a.date||null,disableClock:!0})}),Object(O.jsx)(s.b,{to:"/",className:"btn btn-primary",onClick:function(){return function(e){return C.apply(this,arguments)}()},children:"Save"})]})};var p=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),i=Object(l.a)(r,2),b=i[0],u=i[1];return Object(n.useEffect)(function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/exercises"));case 2:e.sent.json().then((function(e){a(e),console.log(c),u(e.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.username}),Object(O.jsx)("td",{children:e.description}),Object(O.jsx)("td",{children:e.duration}),Object(O.jsx)("td",{children:new Date(e.date).toDateString()}),Object(O.jsx)("td",{children:Object(O.jsx)(s.b,{className:"btn btn-primary",to:"excercises-tracker/create",state:{eid:e._id},children:"Edit"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e._id,void fetch("".concat(h,"/exercises/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Application:"application/json"}});var t},children:"Delete"})})]})})))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[c]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"mb-3",children:"Exercises List"}),Object(O.jsxs)("table",{className:"mt-5 table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"UserName"}),Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"Duration"}),Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{})]})}),Object(O.jsx)("tbody",{children:b})]})]})};var m=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(l.a)(s,2),i=(r[0],r[1]),u=Object(n.useState)([]),d=Object(l.a)(u,2),x=d[0],p=d[1];function m(){return(m=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/users/add"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(c)});case 2:return t=e.sent,e.next=5,f();case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/users"),{method:"GET",headers:{"Content-Type":"application",Accept:"application/json"}});case 2:e.sent.json().then((function(e){i(e),p(e.map((function(e){return Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:e.username})})})))}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){f()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"mb-3",children:" Create User "}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsx)("input",{value:c.username,onChange:function(e){a(Object(b.a)(Object(b.a)({},c),{},{username:e.target.value}))},placeholder:"User Name",className:"form-control",type:"text"})}),Object(O.jsx)("button",{className:"btn btn-primary",onClick:function(){return m.apply(this,arguments)},children:"Add User"}),Object(O.jsxs)("table",{className:"mt-5 table",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)("th",{children:"Users"})})}),Object(O.jsx)("tbody",{children:x})]})]})};var f=function(){return Object(O.jsxs)("nav",{className:" navbar navbar-dark navbar-expand-lg bg-dark",children:[Object(O.jsx)("div",{className:"",children:Object(O.jsx)(s.b,{to:"excersises-tracker/",className:"navbar-brand ml-5 ",children:"... Exercise Tracker"})}),Object(O.jsx)("div",{className:"navbar-collapse justify-content-end ",children:Object(O.jsxs)("ul",{className:"nav navbar-nav mr-auto mr-3",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(s.b,{to:"/",className:"nav-link",children:"Exercises"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(s.b,{to:"/create",className:"nav-link",children:"Create Exercise Log"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(s.b,{to:"/user",className:"nav-link",children:"Create User"})})]})})]})};var v=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(s.a,{children:[Object(O.jsx)(f,{}),Object(O.jsx)("br",{}),Object(O.jsxs)(r.c,{children:[Object(O.jsx)(r.a,{path:"/",exact:!0,element:Object(O.jsx)(p,{})}),Object(O.jsx)(r.a,{path:"/user",element:Object(O.jsx)(m,{})}),Object(O.jsx)(r.a,{path:"/create",element:Object(O.jsx)(x,{})})]})]})})})},N=c(18);c.n(N).a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.c981dff4.chunk.js.map