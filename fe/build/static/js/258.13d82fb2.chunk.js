"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[258],{7258:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var t=a(1413),r=a(5861),l=a(885),n=a(7757),o=a.n(n),i=a(2791),c=a(6355),d=a(6871),m=a(1134),u=a(6030),p=a(7195),x=a(1972),h=a(184),v=function(){var e,s,a,n,v=(0,m.cI)(),g=v.register,f=v.handleSubmit,j=v.formState.errors,N=v.setError,b=(0,i.useState)(!1),y=(0,l.Z)(b,2),Z=y[0],w=y[1],k=(0,u.I0)(),q=(0,d.s0)(),C=function(){var e=(0,r.Z)(o().mark((function e(s){var a,t,r,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.register(s);case 3:a=e.sent,k((0,x.Am)((null===a||void 0===a?void 0:a.actions)||[])),q("/app"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),400===(null===e.t0||void 0===e.t0||null===(t=e.t0.response)||void 0===t?void 0:t.status)&&N("email",{message:null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.message},{shouldFocus:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(s){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{className:"d-flex align-items-center bg-auth border-top border-top-2 border-primary",style:{width:"100%",height:"100vh"},children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row align-items-center",children:[(0,h.jsx)("div",{className:"col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0",children:(0,h.jsx)("div",{className:"text-center",children:(0,h.jsx)("img",{src:"/assets/img/4826435.jpg",alt:"...",className:"img-fluid"})})}),(0,h.jsxs)("div",{className:"col-12 col-md-5 col-xl-4 order-md-1 my-5",children:[(0,h.jsx)("a",{className:"masthead-brand d-flex justify-content-center",onClick:function(){return q("/home")},children:(0,h.jsx)("img",{style:{width:"270px",marginTop:"-15px",textAlign:"center",marginBottom:"50px"},src:"/assets/img/logo.jpeg",alt:"ptc"})}),(0,h.jsx)("h1",{className:"display-4 text-center mb-3",children:"Sign up"}),(0,h.jsx)("p",{className:"text-muted text-center mb-5",children:"Access to your dashboard."}),(0,h.jsxs)("form",{onSubmit:f(C),autoComplete:"off",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Your Name"}),(0,h.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control"},g("name",{required:"Required Input"})),{},{placeholder:"Your Name"})),(null===j||void 0===j?void 0:j.name)&&(0,h.jsx)("small",{className:"text-danger mt-3 ms-3",children:null===j||void 0===j||null===(e=j.name)||void 0===e?void 0:e.message})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Company Name"}),(0,h.jsx)("input",(0,t.Z)((0,t.Z)({type:"text"},g("companyName",{required:"Required Input"})),{},{className:"form-control",placeholder:"Company Name"})),(null===j||void 0===j?void 0:j.companyName)&&(0,h.jsx)("small",{className:"text-danger mt-3 ms-3",children:null===j||void 0===j||null===(s=j.companyName)||void 0===s?void 0:s.message})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Company Website"}),(0,h.jsx)("input",(0,t.Z)((0,t.Z)({type:"url"},g("companyWebsite")),{},{className:"form-control",placeholder:"name@address.com"}))]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Email Address"}),(0,h.jsx)("input",(0,t.Z)((0,t.Z)({type:"text"},g("email",{required:"Required Input",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid Email"}})),{},{className:"form-control",placeholder:"name@address.com"})),(null===j||void 0===j?void 0:j.email)&&(0,h.jsx)("small",{className:"text-danger mt-3 ms-3",children:null===j||void 0===j||null===(a=j.email)||void 0===a?void 0:a.message})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col",children:(0,h.jsx)("label",{className:"form-label",children:"Password"})})}),(0,h.jsxs)("div",{className:"input-group input-group-merge",children:[(0,h.jsx)("input",(0,t.Z)((0,t.Z)({},g("password",{required:"Required Input",minLength:{value:8,message:"Minimum length of 8 characters required"}})),{},{className:"form-control",type:Z?"text":"password",placeholder:"Enter your password"})),(0,h.jsx)("span",{className:"input-group-text",style:{cursor:"pointer"},onClick:function(){return w(!Z)},children:Z?(0,h.jsx)(c.tgn,{}):(0,h.jsx)(c.dSq,{})})]}),(null===j||void 0===j?void 0:j.password)&&(0,h.jsx)("small",{className:"text-danger mt-3 ms-3",children:null===j||void 0===j||null===(n=j.password)||void 0===n?void 0:n.message})]}),(0,h.jsx)("button",{className:"btn btn-lg w-100 btn-primary mb-3",type:"submit",children:"Sign up"}),(0,h.jsx)("div",{className:"text-center",children:(0,h.jsxs)("small",{className:"text-muted text-center",children:["Already have an account? ",(0,h.jsx)("a",{onClick:function(){return q("/auth/login")},style:{textDecoration:"underline",fontWeight:600,cursor:"pointer"},children:"Login"}),"."]})})]})]})]})})})}},7195:function(e,s,a){var t=a(4476),r=a(4268),l={login:function(e){return t.Z.post("/auth/login",e).then((function(e){return e.data.tokens&&r.Z.setUser(e.data.tokens),e.data}))},logout:function(){r.Z.removeUser()},register:function(e){return t.Z.post("/auth/register",e).then((function(e){return e.data.tokens&&r.Z.setUser(e.data.tokens),e.data}))}};s.Z=l}}]);
//# sourceMappingURL=258.13d82fb2.chunk.js.map