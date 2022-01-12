(this["webpackJsonpexpense-report"]=this["webpackJsonpexpense-report"]||[]).push([[0],{180:function(e,t,n){},214:function(e,t,n){},216:function(e,t,n){},370:function(e,t,n){},371:function(e,t,n){},392:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(49),s=n.n(a),r=n(29),i=(n(214),n(24)),o=n(11),l=n(17),d="user/signUp",u="user/logIn",j="user/authenticateUser",b="user/edit",p="user/signOut",m="lists/createList",x="lists/updateList",O="lists/deleteList",f="expenses/fetchExpenses",h="expenses/createExpense",v="expenses/updateExpense",g="expenses/deleteExpense",y=[{value:"Food & Drinks",color:"#1fb003"},{value:"Shopping",color:"#ffc300"},{value:"Healthcare",color:"#1e8449"},{value:"Electricity",color:"#34495e"},{value:"Transport",color:"#d35400"},{value:"Travel",color:"#8f659a"},{value:"Other",color:"#a7b979"}],N=Object(l.b)(d,(function(e){return{payload:{user:e}}})),w=Object(l.b)(u,(function(e){return{payload:e}})),k=(Object(l.b)(j,(function(e){return{payload:e}})),Object(l.b)(b,(function(e,t){return{payload:{id:e,data:t}}})),Object(l.b)(p)),S=Object(l.b)("clearNotifications"),C=Object(l.b)("reports/fetchReport",(function(e){return{payload:e}})),L=Object(l.b)(m,(function(e,t){return{payload:{id:e,data:t}}})),E=Object(l.b)(x,(function(e,t){return{payload:{id:e,data:t}}})),I=Object(l.b)(O,(function(e){return{payload:e}})),D=Object(l.b)(f,(function(e){return{payload:e}})),_=Object(l.b)(h,(function(e,t){return{payload:{id:e,data:t}}})),R=Object(l.b)(v,(function(e,t){return{payload:{id:e,data:t}}})),T=Object(l.b)(g,(function(e){return{payload:e}})),U=Object(l.b)("requestFailed",(function(e){return{payload:e}})),q={authenticated:!1,user:null},A=Object(l.c)({name:"user",initialState:q,reducers:{authenticateUser:function(e,t){e.authenticated=t.payload.authenticated,e.user=t.payload.user},editUserSucceeded:function(e,t){e.user=t.payload},signOutSucceeded:function(){return q}}}),F=A.actions,M=F.authenticateUser,z=F.editUserSucceeded,P=F.signOutSucceeded,H=A.reducer,J=n(20),B=n(7),W=n(25),V=function(e){return e.user},G=function(e){return e.lists.length?e.lists:null},Y=function(e){return e.expenses.length?e.expenses:null},$=function(e){return e.notifications},K=function(e){var t=Object(c.useState)(e),n=Object(W.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),i=Object(W.a)(r,2),o=i[0],l=i[1];Object(c.useEffect)((function(){e&&s(e)}),[]);return{state:a,handleChange:function(e){var t=e.target,n=t.name,c=t.value;s(Object(B.a)(Object(B.a)({},a),{},Object(J.a)({},n,c)))},visible:o,toggleDisplay:function(){return l((function(e){return!e}))},reset:function(){return s(e)}}},Q=function(){var e=Object(r.b)(),t=Object(o.g)(),n=Object(r.c)(V),c=n.authenticated,a=n.user,s=Object(r.c)($);return{loggedIn:c,user:a,isLoading:s.isLoading,error:s.error,dispatch:e,navigate:t}},X=(n(215),n(216),n(3)),Z=function(){var e=Q(),t=e.loggedIn,n=e.navigate;return Object(c.useEffect)((function(){t&&n("app")}),[]),Object(X.jsx)("div",{className:"banner-area",children:Object(X.jsxs)("div",{className:"banner-text",children:[Object(X.jsx)("h1",{children:"Expense's Made Easy"}),Object(X.jsx)("p",{children:"Welcome to Expense's made easy, and app which will help you manage and track all of your expenses. You can keep up to date with our easy to use services. With our easy to visualize charts you will be able to see all your spending in a nice chart"}),Object(X.jsx)("a",{href:"/signup",children:"Signup"}),Object(X.jsx)("a",{href:"/login",children:"Login"})]})})},ee=n(133),te=n(399),ne=(n(218),n(19)),ce=function(){var e=Q(),t=e.loggedIn,n=e.dispatch,a=e.navigate;return Object(c.useEffect)((function(){!1===t&&a("/",{replace:!0})}),[t]),Object(X.jsxs)(ee.a,{style:{background:"#09070d"},children:[Object(X.jsx)(ee.a.Brand,{style:{color:"#61dafb"},children:"Expense"}),Object(X.jsxs)(te.a,{children:[Object(X.jsx)(te.a.Item,{as:i.c,to:"/app",style:{color:"#61dafb"},children:"Categories"}),Object(X.jsx)(te.a.Item,{as:i.c,to:"/app/reports",style:{color:"#61dafb"},children:"Reports"})]}),Object(X.jsxs)(te.a,{pullRight:!0,children:[Object(X.jsx)(te.a.Item,{as:i.c,to:"/devs",icon:Object(X.jsx)(ne.b,{}),size:"2em",style:{color:"#61dafb"},children:"Devs"}),Object(X.jsx)(te.a.Item,{as:i.c,to:"/",className:"center",onClick:function(){return n(k())},icon:Object(X.jsx)(ne.c,{}),size:"2em",style:{color:"#61dafb"},children:"Sign Out"})]})]})},ae=n(98),se=n(198),re=n(97),ie=(n(370),function(e){var t=e.id,n=e.name,c=e.trackExpenses,a=e.updateList,s=e.deleteList,r=K({name:n}),i=r.state,o=r.handleChange,l=r.visible,d=r.toggleDisplay,u=r.reset;return Object(X.jsxs)("div",{className:"card-container",children:[Object(X.jsxs)("div",{className:"cards",children:[Object(X.jsx)("div",{className:"front",children:Object(X.jsx)("span",{className:"fs-2",children:function(e){switch(e){case"Food & Drinks":return Object(X.jsx)(se.a,{});case"Shopping":return Object(X.jsx)(ne.i,{});case"Healthcare":return Object(X.jsx)(ne.d,{});case"Electricity":return Object(X.jsx)(ne.g,{});case"Transport":return Object(X.jsx)(re.b,{});case"Travel":return Object(X.jsx)(re.c,{});default:return Object(X.jsx)(re.a,{})}}(n)})}),Object(X.jsxs)("div",{className:"back",children:[Object(X.jsxs)("span",{className:"name",onClick:function(){l?(d(),u()):d()},children:[n," ",Object(X.jsx)(ne.f,{})," "]}),!l&&Object(X.jsx)("button",{type:"button",className:"category-btn",onClick:function(){return c(t,n)},children:"Expenses"})]})]}),l&&Object(X.jsx)("form",{className:"list__editor",onSubmit:function(e){e.preventDefault(),a(t,i),d()},children:Object(X.jsxs)("div",{className:"inset",children:[Object(X.jsx)("input",{type:"text",name:"name",value:i.name,onChange:o}),Object(X.jsx)("button",{type:"submit",className:"btn list__btn",children:"Rename"}),Object(X.jsx)("button",{type:"submit",className:"btn list__btn",onClick:function(){return s(t)},children:Object(X.jsx)(ne.k,{})})]})})]})}),oe=function(){var e,t,n=Q(),c=n.user,a=n.isLoading,s=(n.error,n.dispatch),i=n.navigate,o=null!==(e=null===c||void 0===c?void 0:c.username.toUpperCase().split(/\s/))&&void 0!==e?e:"",l=Object(W.a)(o,1)[0],d=Object(r.c)(G),u=null===d||void 0===d?void 0:d.map((function(e){return e.name})),j=y.filter((function(e){var t=e.value;return!(null===u||void 0===u?void 0:u.includes(t))})),b=K(),p=b.state,m=void 0===p?{}:p,x=b.handleChange,O=b.visible,f=b.toggleDisplay,h=b.reset,v=function(e,t){return s(E(e,t))},g=function(e){return s(I(e))},N=function(e,t){var n="/app/tracker?id=".concat(e,"&list=").concat(t);s(D(e)),i(n,{replace:!0})};return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)("div",{className:"wrap-page",children:[Object(X.jsx)("section",{className:"col-lg-4 offset-lg-4 mb-3",children:Object(X.jsx)(ae.a,{className:"custom-card h5",children:Object(X.jsxs)(ae.a.Body,{children:[Object(X.jsxs)("span",{className:"fs-8 fw-bold",children:["Hello, \xa0",Object(X.jsx)("span",{className:"fs-8 fw-bold",children:l})]}),Object(X.jsx)(ae.a.Text,{children:Object(X.jsx)("button",{type:"submit",variant:"outline-info",size:"sm",onClick:function(){O?(f(),h()):f()},children:O?Object(X.jsx)(ne.l,{}):Object(X.jsx)(ne.h,{})})})]})})}),a&&Object(X.jsx)("p",{className:"page-loading",children:Object(X.jsx)(ne.j,{})}),O&&Object(X.jsxs)("form",{className:"col-lg-4 offset-lg-4",onSubmit:function(e){e.preventDefault(),(null===u||void 0===u?void 0:u.includes(m.name))||(s(L(null===c||void 0===c?void 0:c.id,m)),f(),h())},children:[Object(X.jsx)("div",{className:"inset",children:Object(X.jsx)("input",{type:"text",className:"me-3 size-md",list:"categories",name:"name",onChange:x})}),Object(X.jsx)("datalist",{id:"categories",children:j.map((function(e){var t=e.value,n=e.color;return Object(X.jsx)("option",{value:t,"aria-label":"category"},n)}))}),Object(X.jsx)("button",{className:"btn btn-sm",type:"submit",children:"Create"})]}),Object(X.jsxs)("ul",{className:"lists",children:[Object(X.jsx)("h4",{className:"fz-bold",children:"Categories"}),null!==(t=null===d||void 0===d?void 0:d.map((function(e){var t=e.id,n=e.name;return Object(X.jsx)(ie,{id:t,name:n,trackExpenses:N,updateList:v,deleteList:g},t)})))&&void 0!==t?t:Object(X.jsx)("li",{children:Object(X.jsx)("p",{className:"mb-0 fst-italic",children:"No lists of expenses available"})})]})]})})},le=n(132),de=function(e){var t=e.id,n=e.title,c=e.amount,a=e.date,s=e.notes,r=e.setter,i=e.submit,o=e.cancel,l=e.remove,d=t<=0;return Object(X.jsxs)("form",{className:"row mw-form mx-auto px-1",onSubmit:i,children:[Object(X.jsxs)("div",{className:"inset",children:[Object(X.jsx)("label",{for:"title",children:"Title*"}),Object(X.jsx)("input",{type:"text",name:"title",value:n,onChange:r,minLength:2,required:!0}),Object(X.jsxs)(le.a.Group,{className:"".concat(d?"col-sm-4":"col-5"," mb-3"),controlId:"amount",children:[Object(X.jsx)("label",{for:"amount",children:"Amount ($)*"}),Object(X.jsx)("input",{type:"number",name:"amount",value:c,onChange:r,min:.01,step:.01,required:!0})]}),Object(X.jsxs)(le.a.Group,{className:"".concat(d?"col-sm-8":"col-7"," mb-3"),controlId:"date",children:[Object(X.jsx)("label",{for:"date",children:"Date*"}),Object(X.jsx)("input",{type:"date",name:"date",value:a,onChange:r,required:!0})]}),Object(X.jsx)("label",{for:"notes",children:"Description"}),Object(X.jsx)("input",{as:"textarea",rows:3,name:"notes",value:s,onChange:r,maxLength:140})]}),d?Object(X.jsxs)("div",{className:"col-12",children:[Object(X.jsx)("button",{type:"submit",className:"w-100 mb-3",children:"Create new expense"}),Object(X.jsx)("button",{type:"submit",variant:"bg-light",className:"w-100 color-mix-two",onClick:o,children:"Cancel"})]}):Object(X.jsxs)("div",{className:"col-12 mb-2 px-0 text-end",children:[Object(X.jsx)("button",{type:"submit",className:"fw-bold",size:"sm",children:"Update"}),Object(X.jsx)("button",{type:"submit",className:"ms-3",size:"sm",onClick:function(){return l(t)},children:Object(X.jsx)(ne.k,{})})]})]})};de.defaultProps={id:-1,cancel:function(){},remove:function(){}};var ue=de,je=function(e){var t=e.id,n=e.title,c=e.amount,a=e.date,s=e.notes,r=e.onUpdate,i=e.onDelete,o=K({title:n,amount:c,date:a,notes:s}),l=o.state,d=o.handleChange,u=o.visible,j=o.toggleDisplay,b=o.reset;return Object(X.jsxs)("li",{children:[Object(X.jsxs)("div",{className:"details",children:[Object(X.jsxs)("p",{children:[Object(X.jsx)("span",{className:"fs-4 amount",children:"$".concat(c)}),Object(X.jsx)("br",{}),Object(X.jsx)("small",{children:a})]}),Object(X.jsxs)("p",{className:"align-self-center ms-2 flex-grow-1",children:[Object(X.jsx)("span",{className:"fw-bold",children:n}),Object(X.jsx)("br",{}),Object(X.jsx)("span",{className:"notes",children:s||"..."})]}),Object(X.jsx)("button",{className:"mb-1 toggle",type:"submit",onClick:function(){u?(j(),b()):j()},children:Object(X.jsx)(ne.f,{})})]}),u&&Object(X.jsx)("div",{className:"mt-3",children:Object(X.jsx)(ue,{id:t,title:l.title,amount:l.amount,date:l.date,notes:l.notes||"",setter:d,remove:i,submit:function(e){e.preventDefault(),r(t,l),j()}})})]})};je.defaultProps={notes:""};var be=je,pe=function(){var e,t=Q(),n=t.isLoading,c=(t.error,t.dispatch),a=t.navigate,s=Object(i.d)(),o=Object(W.a)(s,1)[0],l=o.get("list"),d=o.get("id"),u=Object(r.c)(Y),j=K(),b=j.state,p=void 0===b?{}:b,m=j.handleChange,x=j.visible,O=j.toggleDisplay,f=j.reset,h=function(e,t){return c(R(e,t))},v=function(e){return c(T(e))};return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)("div",{className:"wrap-page mw-container mx-auto",children:[Object(X.jsx)("h3",{children:l}),Object(X.jsxs)("div",{className:"mt-4 mx-auto",children:[x&&Object(X.jsx)("div",{className:"mb-3",children:Object(X.jsx)(ue,{title:p.title||"",amount:p.amount||"",date:p.date||"",notes:p.notes||"",setter:m,submit:function(e){e.preventDefault(),c(_(d,p)),O(),f()},cancel:function(){f(),O()}})}),Object(X.jsxs)("div",{children:[!x&&Object(X.jsxs)("div",{className:"track-it",children:[Object(X.jsxs)("button",{type:"button",className:"btn btn-sm",onClick:function(){return a("/app")},children:[Object(X.jsx)(ne.a,{}),Object(X.jsx)("span",{className:"ms-2",children:"Back to Lists"})]}),Object(X.jsx)("button",{type:"button",className:"btn btn-sm",onClick:O,children:"Add expense"})]}),n?Object(X.jsx)("p",{className:"page-loading",children:Object(X.jsx)(ne.j,{})}):Object(X.jsx)("ul",{className:"expenses mt-4 pt-3",children:null!==(e=null===u||void 0===u?void 0:u.map((function(e){return Object(X.jsx)(be,{id:e.id,title:e.title,amount:e.amount,date:e.date,notes:e.notes,onUpdate:h,onDelete:v},e.id)})))&&void 0!==e?e:Object(X.jsx)("li",{children:"No record of expenses"})})]})]})]})})},me=n(131);var xe=function(){var e=Object(c.useRef)(null),t=Q().isLoading,n=Object(r.c)((function(e){return e.lists})),a=Object(r.c)((function(e){return e.reports})),s=null===n||void 0===n?void 0:n.map((function(e){var t=e.id;return{name:e.name,total:null===a||void 0===a?void 0:a.filter((function(e){return e.list_id===t})).reduce((function(e,t){return e+t.amount}),0)}})),i=Object(c.useCallback)((function(){var t=null===e||void 0===e?void 0:e.current,n=s.map((function(e){return e.name})),c=s.map((function(e){return e.total})),a=n.map((function(e){var t,n;return null!==(t=null===(n=y.find((function(t){var n=t.value;return e===n})))||void 0===n?void 0:n.color)&&void 0!==t?t:"#7fb3d5"}));return{ctx:t,labels:n,data:c,backgroundColor:a,chartType:"doughnut"}}),[a]);return Object(c.useEffect)((function(){var e=function(e){var t=e.ctx,n=e.chartType,c=e.labels,a=e.data,s=e.radius,r=e.backgroundColor;return me.a.defaults.color="orange",new me.a(t,{type:n,radius:s,responsive:!0,maintainAspectRatio:!1,data:{labels:c,datasets:[{data:a,backgroundColor:r,hoverOffset:4}]},options:{plugins:{title:{display:!0,text:"Amounts in USD",color:"white",font:{size:24},labels:{color:"white"}}}}})}(i());return function(){return e.destroy()}}),[]),Object(X.jsx)(X.Fragment,{children:Object(X.jsx)("div",{className:"wrap-page",children:Object(X.jsxs)("section",{className:"outcome",children:[Object(X.jsx)("h3",{children:"Total Outcome"}),Object(X.jsx)("div",{children:t?Object(X.jsx)("p",{className:"page-loading",children:Object(X.jsx)(ne.j,{})}):Object(X.jsx)("canvas",{ref:e})})]})})})},Oe=function(){var e=Q(),t=e.loggedIn,n=e.navigate;return Object(c.useEffect)((function(){!1===t&&n("/",{replace:!0})}),[t]),Object(X.jsxs)("div",{className:"vh-100 position-relative",children:[Object(X.jsx)(ce,{}),Object(X.jsxs)(o.c,{children:[Object(X.jsx)(o.a,{path:"/",element:Object(X.jsx)(oe,{})}),Object(X.jsx)(o.a,{path:"/tracker",element:Object(X.jsx)(pe,{})}),Object(X.jsx)(o.a,{path:"/reports",element:Object(X.jsx)(xe,{})})]})]})},fe=function(e){var t=e.auth,n=e.username,c=e.email,a=e.password,s=e.confirm,r=e.setter,o=e.submit,l=e.reset;return Object(X.jsxs)("form",{className:t?"py-3":"py-1",onSubmit:o,children:[Object(X.jsxs)("h1",{children:[Object(X.jsx)(i.b,{to:"/",children:Object(X.jsx)(ne.e,{className:"display-6 mb-3"})}),"Sign up"]}),Object(X.jsxs)("div",{className:"inset",children:[Object(X.jsxs)("p",{children:[Object(X.jsx)("label",{for:"username",children:"USERNAME"}),Object(X.jsx)("input",{type:"text",name:"username",minLength:2,value:n,onChange:r,required:!0})]}),Object(X.jsxs)("p",{children:[Object(X.jsx)("label",{for:"email",children:"EMAIL"}),Object(X.jsx)("input",{type:"text",name:"email",value:c,onChange:r,required:!0})]}),Object(X.jsxs)("p",{children:[Object(X.jsx)("label",{for:"password",children:"PASSWORD"}),Object(X.jsx)("input",{type:"password",name:"password",minLength:6,value:a,onChange:r,required:!0})]}),Object(X.jsxs)("p",{children:[Object(X.jsx)("label",{for:"password",children:"PASSWORD CONFIRMATION"}),Object(X.jsx)("input",{type:"password",name:"password_confirmation",minLength:6,value:s,onChange:r,required:!0})]})]}),Object(X.jsxs)("p",{className:"p-container",children:[Object(X.jsx)("button",{className:"btn mb-3 w-100",type:"submit",children:"Sign Up"}),Object(X.jsxs)("p",{children:["Already have an account? ",Object(X.jsx)(i.b,{to:"/login",onClick:l,children:"Login In"})]})]})]})};fe.defaultProps={password:"",confirm:"",reset:function(){}};var he=fe,ve=function(){var e=Object(c.useState)({username:"",email:"",password:"",password_confirmation:""}),t=Object(W.a)(e,2),n=t[0],a=t[1],s=Q(),r=s.loggedIn,i=s.isLoading,o=s.error,l=s.dispatch,d=s.navigate;Object(c.useEffect)((function(){r&&d("/app",{replace:!0})}),[r]);return Object(X.jsx)("div",{className:"container pt-4 row mx-0",children:Object(X.jsx)("div",{className:"mw-md mx-auto",children:i?Object(X.jsx)("p",{className:"page-loading",children:Object(X.jsx)(ne.j,{})}):Object(X.jsx)(he,{auth:r,username:n.username,email:n.email,password:n.password,confirm:n.password_confirmation,setter:function(e){var t=e.target,c=t.name,s=t.value;"password_confirmation"===c&&s!==n.password?e.target.setCustomValidity("Password does not match"):e.target.setCustomValidity(""),a(Object(B.a)(Object(B.a)({},n),{},Object(J.a)({},c,s)))},submit:function(e){e.preventDefault(),l(N(n))},reset:function(){null!==o&&l(S())}})})})},ge=(n(371),function(){var e=K({username:"",password:""}),t=e.state,n=e.handleChange,a=Q(),s=a.loggedIn,r=a.isLoading,o=a.error,l=a.dispatch,d=a.navigate;Object(c.useEffect)((function(){s&&d("/app",{replace:!0})}),[s]);return Object(X.jsx)("div",{className:"mw-md mx-auto",children:r?Object(X.jsx)("p",{className:"page-loading",children:Object(X.jsx)(ne.j,{})}):Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(w(t))},children:[Object(X.jsxs)("h1",{children:[Object(X.jsx)(i.b,{to:"/",children:Object(X.jsx)(ne.e,{className:"display-6 mb-3"})})," Log In"]}),Object(X.jsxs)("div",{className:"inset",children:[Object(X.jsxs)("p",{children:[Object(X.jsx)("label",{for:"username",children:"USERNAME"}),Object(X.jsx)("input",{type:"text",name:"username",minLength:2,value:t.username,onChange:n,required:!0})]}),Object(X.jsxs)("p",{children:[Object(X.jsx)("label",{for:"password",children:"PASSWORD"}),Object(X.jsx)("input",{type:"password",name:"password",minLength:6,value:t.password,onChange:n,required:!0})]}),Object(X.jsxs)("p",{children:[Object(X.jsx)("input",{type:"checkbox",name:"remember",id:"remember"}),Object(X.jsx)("label",{for:"remember",style:{display:"inline"},children:" Remember me "})]})]}),Object(X.jsxs)("p",{className:"p-container",children:[Object(X.jsx)("button",{className:"btn mb-3 w-100",type:"submit",children:"Log in"}),Object(X.jsxs)("p",{children:["Don't have an account? ",Object(X.jsx)(i.b,{to:"/signup",onClick:function(){null!==o&&l(S())},children:"Sign up"})]})]})]})})}),ye=n(55),Ne=n(48),we=n(199),ke=(n(180),n.p+"static/media/niraj.97445ecb.jpeg"),Se=n.p+"static/media/holly.113e8e06.jpeg",Ce=n.p+"static/media/louis.e9b3a11f.jpg",Le=n.p+"static/media/niraj1.8f955f16.jpg",Ee=n.p+"static/media/holly1.f277d447.jpg",Ie=n.p+"static/media/louis1.83aaf92f.jpg";ye.b.add(we.a);var De=function(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)("div",{className:"card-container1",children:[Object(X.jsxs)("section",{className:"img-card-section",children:[Object(X.jsx)("div",{className:"img-card-square"}),Object(X.jsx)("img",{alt:"background",className:"img-card-style",src:Le})]}),Object(X.jsx)("section",{className:"name-card-section",children:"Niraj Patel"}),Object(X.jsx)("section",{className:"title-card-section",children:"Software Engineer"}),Object(X.jsx)("section",{className:"desc-card-section",children:"I\u2019m a full-time Software Engineering student at Flatiron. My hobbies include playing basketball, playing video games and learning new programming frameworks."}),Object(X.jsxs)("section",{className:"social-card-section",children:[Object(X.jsx)("a",{href:"https://nirajpatel23.medium.com/",target:"_blank",rel:"noopener noreferrer",children:Object(X.jsx)(Ne.a,{icon:["fab","medium"],className:"social-card-style"})}),Object(X.jsx)("a",{href:"https://www.linkedin.com/in/niraj-p-a5a063156/",target:"_blank",rel:"noopener noreferrer",children:Object(X.jsx)(Ne.a,{icon:["fab","linkedin"],className:"social-card-style"})}),Object(X.jsx)("a",{href:"https://github.com/niraj23",target:"_blank",rel:"noopener noreferrer",children:Object(X.jsx)(Ne.a,{icon:["fab","github"],className:"social-card-style"})})]}),Object(X.jsx)("img",{alt:"profile",className:"profile-img-card",src:ke})]}),Object(X.jsx)("div",{}),Object(X.jsxs)("div",{className:"card-container1",children:[Object(X.jsxs)("section",{className:"img-card-section",children:[Object(X.jsx)("div",{className:"img-card-square"}),Object(X.jsx)("img",{alt:"background",className:"img-card-style",src:Ie})]}),Object(X.jsx)("section",{className:"name-card-section",children:"Louis Jacob"}),Object(X.jsx)("section",{className:"title-card-section",children:"Software Engineer"}),Object(X.jsx)("section",{className:"desc-card-section",children:"I'm a full-time student at the Flatiron School. I enjoy being outdoors with my dog and watching soccer. I'm passionate about developing my skills to become a better developer."}),Object(X.jsxs)("section",{className:"social-card-section",children:[Object(X.jsx)("a",{href:"https://medium.com/@loujacob2",target:"_blank",rel:"noopener noreferrer",children:Object(X.jsx)(Ne.a,{icon:["fab","medium"],className:"social-card-style"})}),Object(X.jsx)("a",{href:"https://www.linkedin.com/in/louis-jacob-b30b04b2/",target:"_blank",rel:"noopener noreferrer",children:Object(X.jsx)(Ne.a,{icon:["fab","linkedin"],className:"social-card-style"})}),Object(X.jsx)("a",{href:"https://github.com/ljacob49",target:"_blank",rel:"noopener noreferrer",children:Object(X.jsx)(Ne.a,{icon:["fab","github"],className:"social-card-style"})})]}),Object(X.jsx)("img",{alt:"profile",className:"profile-img-card",src:Ce})]}),Object(X.jsx)("div",{}),Object(X.jsxs)("div",{className:"card-container1",children:[Object(X.jsxs)("section",{className:"img-card-section",children:[Object(X.jsx)("div",{className:"img-card-square"}),Object(X.jsx)("img",{alt:"background",className:"img-card-style",src:Ee})]}),Object(X.jsx)("section",{className:"name-card-section",children:"Holly Teunis"}),Object(X.jsx)("section",{className:"title-card-section",children:"Software Engineer"}),Object(X.jsx)("section",{className:"desc-card-section",children:"Holly Teunis is a software developer currently residing in NYC. They love animals, music, meditation and political economy."}),Object(X.jsxs)("section",{className:"social-card-section",children:[Object(X.jsx)("a",{href:"https://hashnode.com/@HMTeunis",target:"_blank",rel:"noopener noreferrer",children:Object(X.jsx)(Ne.a,{icon:["fab","meduim"],className:"social-card-style"})}),Object(X.jsx)("a",{href:"https://github.com/HMTEUNIS",target:"_blank",rel:"noopener noreferrer",children:Object(X.jsx)(Ne.a,{icon:["fab","github"],className:"social-card-style"})})]}),Object(X.jsx)("img",{alt:"profile",className:"profile-img-card",src:Se})]}),Object(X.jsx)("div",{})]})},_e=n.p+"static/media/Video.13f507ef.mp4",Re=function(){return Object(X.jsxs)("div",{children:[Object(X.jsx)("video",{id:"home-video",autoPlay:!0,loop:!0,muted:!0,src:_e,type:"video/mp4"}),Object(X.jsx)(ce,{}),Object(X.jsxs)("div",{id:"title-container",children:[Object(X.jsx)("br",{})," ",Object(X.jsx)("br",{})," ",Object(X.jsx)("br",{})," ",Object(X.jsx)("br",{}),Object(X.jsx)("h1",{id:"home-title",style:{paddingLeft:"590px",color:"blue",fontFamily:"Trattatello, fantasy"},children:"Meet The Devs"}),Object(X.jsx)("div",{id:"pages-container",style:{paddingLeft:"280px"},children:Object(X.jsx)(De,{})})]})]})},Te=n(200),Ue=n.n(Te),qe=function(){var e=Object(r.b)();return Object(c.useEffect)((function(){var t=localStorage.getItem("exp_tracker");t&&e(M(JSON.parse(t)))}),[]),Object(c.useEffect)((function(){Ue()({key:"ec782c9839e4d50b2bf11f1ffa85037b2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,n=e.articles;"newHeadlines"===t&&console.log(n)}})}),[]),Object(X.jsx)(i.a,{children:Object(X.jsxs)(o.c,{children:[Object(X.jsx)(o.a,{path:"/",element:Object(X.jsx)(Z,{reset:function(){return e(S())}})}),Object(X.jsx)(o.a,{path:"/signup",element:Object(X.jsx)(ve,{})}),Object(X.jsx)(o.a,{path:"/login",element:Object(X.jsx)(ge,{})}),Object(X.jsx)(o.a,{path:"/app/*",element:Object(X.jsx)(Oe,{})}),Object(X.jsx)(o.a,{path:"/devs",element:Object(X.jsx)(Re,{})})]})})},Ae=n(33),Fe=n(66),Me=Object(l.c)({name:"lists",initialState:[],reducers:{fetchListsSucceeded:function(e,t){return t.payload},createListSucceeded:function(e,t){e.push(t.payload)},updateListSucceeded:function(e,t){return e.map((function(e){return e.id===t.payload.id?Object(B.a)(Object(B.a)({},e),t.payload):e}))},deleteListSucceeded:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),ze=Me.actions,Pe=ze.fetchListsSucceeded,He=ze.createListSucceeded,Je=ze.updateListSucceeded,Be=ze.deleteListSucceeded,We=Me.reducer,Ve=Object(l.c)({name:"reports",initialState:[],reducers:{fetchReportSucceeded:function(e,t){return t.payload}}}),Ge=Ve.actions.fetchReportSucceeded,Ye=Ve.reducer,$e=Object(l.c)({name:"expenses",initialState:[],reducers:{fetchExpensesSucceeded:function(e,t){return t.payload},createExpenseSucceeded:function(e,t){e.push(t.payload)},updateExpenseSucceeded:function(e,t){return e.map((function(e){return e.id===t.payload.id?Object(B.a)(Object(B.a)({},e),t.payload):e}))},deleteExpenseSucceeded:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),Ke=$e.actions,Qe=Ke.fetchExpensesSucceeded,Xe=Ke.createExpenseSucceeded,Ze=Ke.updateExpenseSucceeded,et=Ke.deleteExpenseSucceeded,tt=$e.reducer,nt={isLoading:!1,error:null},ct=Object(l.c)({name:"notifications",initialState:nt,reducers:{},extraReducers:function(e){return e.addCase(U,(function(e,t){e.isLoading=!1,e.error=t.payload})).addMatcher(Object(l.d)(N,w,C,L,D,_),(function(e){e.isLoading=!0,e.error=null})).addMatcher(Object(l.d)(M,Ge,Pe,He,Qe,Xe,S),(function(){return nt}))}}).reducer,at=(n(201),n(15)),st=n.n(at),rt=(n(202),n(8)),it=n(203),ot=n.n(it).a.create({baseURL:"https://api-backend-phase4.herokuapp.com/",withCredentials:!0});ot.interceptors.request.use((function(e){var t=localStorage.getItem("exp_tracker"),n=(t?JSON.parse(t):{token:""}).token;return e.headers.common.Authorization="Bearer ".concat(n),e}));var lt=function(e){return ot.post("users",e)},dt=function(e){return ot.post("sessions",e)},ut=function(e){return ot.get("users/".concat(e))},jt=function(e,t){return ot.put("users/".concat(e),t)},bt=function(){return ot.delete("sessions")},pt=function(e){return ot.get("users/".concat(e,"/lists"))},mt=function(e,t){return ot.post("users/".concat(e,"/lists"),t)},xt=function(e,t){return ot.put("/lists/".concat(e),t)},Ot=function(e){return ot.delete("/lists/".concat(e))},ft=function(e){return ot.get("lists/".concat(e,"/expenses"))},ht=function(e,t){return ot.post("lists/".concat(e,"/expenses"),t)},vt=function(e,t){return ot.put("/expenses/".concat(e),t)},gt=function(e){return ot.delete("/expenses/".concat(e))},yt=st.a.mark(St),Nt=st.a.mark(Ct),wt=st.a.mark(Lt),kt=st.a.mark(Et);function St(e){var t,n,c;return st.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(rt.b)(lt,t);case 4:return n=a.sent,c=n.data,a.next=8,Object(rt.c)(M(c));case 8:localStorage.setItem("exp_tracker",JSON.stringify(c)),a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(rt.c)(U(a.t0.message));case 15:case"end":return a.stop()}}),yt,null,[[1,11]])}function Ct(e){var t,n,c;return st.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(rt.b)(dt,t);case 4:return n=a.sent,c=n.data,a.next=8,Object(rt.c)(M(c));case 8:localStorage.setItem("exp_tracker",JSON.stringify(c)),a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(rt.c)(U(a.t0.message));case 15:case"end":return a.stop()}}),Nt,null,[[1,11]])}function Lt(e){var t,n,c,a,s;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.id,c=t.data,r.prev=2,r.next=5,Object(rt.b)(jt,n,c);case 5:return a=r.sent,s=a.data.user,r.next=9,Object(rt.c)(z(s));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(rt.c)(U(r.t0.message));case 15:case"end":return r.stop()}}),wt,null,[[2,11]])}function Et(){var e,t;return st.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(rt.b)(bt);case 3:return e=n.sent,t=e.data,n.next=7,Object(rt.c)(P(t));case 7:localStorage.removeItem("exp_tracker"),n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(rt.c)(U(n.t0.message));case 14:case"end":return n.stop()}}),kt,null,[[0,10]])}var It=st.a.mark(Dt);function Dt(e){var t,n,c,a,s,r;return st.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.user.id,i.prev=2,i.next=5,Object(rt.a)([Object(rt.b)(ut,n),Object(rt.b)(pt,n)]);case 5:return c=i.sent,a=Object(W.a)(c,2),s=a[0].data,r=a[1].data,i.next=11,Object(rt.a)([Object(rt.c)(Ge(s.expenses)),Object(rt.c)(Pe(r))]);case 11:i.next=17;break;case 13:return i.prev=13,i.t0=i.catch(2),i.next=17,Object(rt.c)(U(i.t0.message));case 17:case"end":return i.stop()}}),It,null,[[2,13]])}var _t=st.a.mark(Ut),Rt=st.a.mark(qt),Tt=st.a.mark(At);function Ut(e){var t,n,c,a,s;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.id,c=t.data,r.prev=2,r.next=5,Object(rt.b)(mt,n,c);case 5:return a=r.sent,s=a.data,r.next=9,Object(rt.c)(He(s));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(rt.c)(U(r.t0.message));case 15:case"end":return r.stop()}}),_t,null,[[2,11]])}function qt(e){var t,n,c,a,s;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.id,c=t.data,r.prev=2,r.next=5,Object(rt.b)(xt,n,c);case 5:return a=r.sent,s=a.data.list,r.next=9,Object(rt.c)(Je(s));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(rt.c)(U(r.t0.message));case 15:case"end":return r.stop()}}),Rt,null,[[2,11]])}function At(e){var t,n,c;return st.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(rt.b)(Ot,t);case 4:return n=a.sent,c=n.data.id,a.next=8,Object(rt.c)(Be(c));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(1),a.next=14,Object(rt.c)(U(a.t0.message));case 14:case"end":return a.stop()}}),Tt,null,[[1,10]])}var Ft=st.a.mark(Ht),Mt=st.a.mark(Jt),zt=st.a.mark(Bt),Pt=st.a.mark(Wt);function Ht(e){var t,n,c;return st.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(rt.b)(ft,t);case 4:return n=a.sent,c=n.data,a.next=8,Object(rt.c)(Qe(c));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(1),a.next=14,Object(rt.c)(U(a.t0.message));case 14:case"end":return a.stop()}}),Ft,null,[[1,10]])}function Jt(e){var t,n,c,a,s;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.id,c=t.data,r.prev=2,r.next=5,Object(rt.b)(ht,n,c);case 5:return a=r.sent,s=a.data,r.next=9,Object(rt.c)(Xe(s));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(rt.c)(U(r.t0.message));case 15:case"end":return r.stop()}}),Mt,null,[[2,11]])}function Bt(e){var t,n,c,a,s;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.id,c=t.data,r.prev=2,r.next=5,Object(rt.b)(vt,n,c);case 5:return a=r.sent,s=a.data.expense,r.next=9,Object(rt.c)(Ze(s));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(rt.c)(U(r.t0.message));case 15:case"end":return r.stop()}}),zt,null,[[2,11]])}function Wt(e){var t,n,c;return st.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(rt.b)(gt,t);case 4:return n=a.sent,c=n.data.id,a.next=8,Object(rt.c)(et(c));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(1),a.next=14,Object(rt.c)(U(a.t0.message));case 14:case"end":return a.stop()}}),Pt,null,[[1,10]])}var Vt=st.a.mark(Gt);function Gt(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rt.d)(d,St);case 2:return e.next=4,Object(rt.d)(u,Ct);case 4:return e.next=6,Object(rt.e)(j,Dt);case 6:return e.next=8,Object(rt.e)(b,Lt);case 8:return e.next=10,Object(rt.e)(p,Et);case 10:return e.next=12,Object(rt.d)(m,Ut);case 12:return e.next=14,Object(rt.d)(x,qt);case 14:return e.next=16,Object(rt.e)(O,At);case 16:return e.next=18,Object(rt.e)(f,Ht);case 18:return e.next=20,Object(rt.d)(h,Jt);case 20:return e.next=22,Object(rt.d)(v,Bt);case 22:return e.next=24,Object(rt.e)(g,Wt);case 24:case"end":return e.stop()}}),Vt)}var Yt=Object(Fe.a)(),$t=Object(l.a)({reducer:Object(Ae.b)({user:H,lists:We,reports:Ye,expenses:tt,notifications:ct}),middleware:function(e){return e().prepend(Yt)}});Yt.run(Gt),s.a.render(Object(X.jsx)(r.a,{store:$t,children:Object(X.jsx)(qe,{})}),document.getElementById("root"))}},[[392,1,2]]]);
//# sourceMappingURL=main.0c4db6bc.chunk.js.map