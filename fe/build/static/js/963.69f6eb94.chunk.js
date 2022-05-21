"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[963],{8963:function(e,s,t){t.r(s),t.d(s,{default:function(){return v}});var r=t(1413),n=t(5861),a=t(885),l=t(7757),i=t.n(l),o=t(2791),c=t(6355),d=t(6871),m=t(1134),u=t(7195),h=(t(4268),t(1972)),p=t(6030),x=t(2931),g=t(184),v=function(){var e,s,t=(0,m.cI)(),l=t.register,v=t.handleSubmit,f=t.formState.errors,j=t.setError,N=(0,o.useState)(!1),b=(0,a.Z)(N,2),w=b[0],y=b[1],Z=(0,d.s0)(),k=(0,p.I0)(),S=function(){var e=(0,n.Z)(i().mark((function e(s){var t,r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(s),e.prev=1,e.next=4,u.Z.login(s);case 4:t=e.sent,k((0,h.Am)((null===t||void 0===t?void 0:t.actions)||[])),console.log(t),x.W.emit("user",{id:t.id}),Z("/app"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),400===(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)&&j("email",{message:null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message},{shouldFocus:!0});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(s){return e.apply(this,arguments)}}();return(0,g.jsx)("div",{className:"d-flex align-items-center bg-auth border-top border-top-2 border-primary",style:{width:"100%",height:"100vh"},children:(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:"row align-items-center",children:[(0,g.jsx)("div",{className:"col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0",children:(0,g.jsx)("div",{className:"text-center",children:(0,g.jsx)("img",{src:"/assets/img/4826435.jpg",alt:"...",className:"img-fluid"})})}),(0,g.jsxs)("div",{className:"col-12 col-md-5 col-xl-4 order-md-1 my-5",children:[(0,g.jsx)("a",{className:"masthead-brand d-flex justify-content-center",onClick:function(){return Z("/home")},children:(0,g.jsx)("img",{style:{width:"270px",marginTop:"-15px",textAlign:"center",marginBottom:"50px"},src:"/assets/img/logo.jpeg",alt:"ptc"})}),(0,g.jsx)("h1",{className:"display-4 text-center mb-3",children:"Sign in"}),(0,g.jsx)("p",{className:"text-muted text-center mb-5",children:"Access to your dashboard."}),(0,g.jsxs)("form",{onSubmit:v(S),children:[(0,g.jsxs)("div",{className:"form-group",children:[(0,g.jsx)("label",{className:"form-label",children:"Email Address"}),(0,g.jsx)("input",(0,r.Z)((0,r.Z)({type:"text"},l("email",{required:"Required Input",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid Email"}})),{},{className:"form-control",placeholder:"name@address.com"})),(null===f||void 0===f?void 0:f.email)&&(0,g.jsx)("small",{className:"text-danger mt-3 ms-3",children:null===f||void 0===f||null===(e=f.email)||void 0===e?void 0:e.message})]}),(0,g.jsxs)("div",{className:"form-group",children:[(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col",children:(0,g.jsx)("label",{className:"form-label",children:"Password"})}),(0,g.jsx)("div",{className:"col-auto",children:(0,g.jsx)("a",{href:"password-reset-cover.html",className:"form-text small text-muted",children:"Forgot password?"})})]}),(0,g.jsxs)("div",{className:"input-group input-group-merge",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},l("password",{required:"Required Input",minLength:{value:8,message:"Minimum length of 8 characters required"}})),{},{className:"form-control",type:w?"text":"password",placeholder:"Enter your password"})),(0,g.jsx)("span",{className:"input-group-text",style:{cursor:"pointer"},onClick:function(){return y(!w)},children:w?(0,g.jsx)(c.tgn,{}):(0,g.jsx)(c.dSq,{})})]}),(null===f||void 0===f?void 0:f.password)&&(0,g.jsx)("small",{className:"text-danger mt-3 ms-3",children:null===f||void 0===f||null===(s=f.password)||void 0===s?void 0:s.message})]}),(0,g.jsx)("button",{className:"btn btn-lg w-100 btn-primary mb-3",type:"submit",children:"Sign in"}),(0,g.jsx)("div",{className:"text-center",children:(0,g.jsxs)("small",{className:"text-muted text-center",children:["Don't have an account yet? ",(0,g.jsx)("a",{onClick:function(){return Z("/auth/signup")},style:{textDecoration:"underline",fontWeight:600,cursor:"pointer"},children:"Sign up"}),"."]})})]})]})]})})})}},7195:function(e,s,t){var r=t(4476),n=t(4268),a={login:function(e){return r.Z.post("/auth/login",e).then((function(e){return e.data.tokens&&n.Z.setUser(e.data.tokens),e.data}))},logout:function(){n.Z.removeUser()},register:function(e){return r.Z.post("/auth/register",e).then((function(e){return e.data.tokens&&n.Z.setUser(e.data.tokens),e.data}))}};s.Z=a}}]);
//# sourceMappingURL=963.69f6eb94.chunk.js.map