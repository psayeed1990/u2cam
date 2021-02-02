_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"7VKf":function(e,r,s){e.exports={nav:"WebMenu_nav__rGn-c",menu:"WebMenu_menu__5GoEW"}},BjMx:function(e,r,s){e.exports={register:"Register_register__23kuD",registerContent:"Register_registerContent__26UNG",forgotBtn:"Register_forgotBtn__x_e3w"}},RaS1:function(e,r,s){"use strict";var a=s("nKUr"),t=s("20a2"),n=s("q1tI"),c=s("Uw7I"),i=s("xGi3"),o=s("jcvg"),d=s("wfTj");r.a=function(e){var r=e.children,s=Object(n.useContext)(d.a),u=s[0],l=(s[1],Object(n.useContext)(o.a)),j=l[0],m=(l[1],Object(t.useRouter)());return Object(n.useEffect)((function(){if(!j)return u?m.push("/user/dashboard"):void 0}),[u]),Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(i.a,{}),u?Object(a.jsx)("h1",{className:"heading",children:"Checking user..."}):Object(a.jsx)("main",{children:r}),Object(a.jsx)(c.a,{})]})}},VpV3:function(e,r,s){"use strict";s.r(r);var a=s("nKUr"),t=s("o0o1"),n=s.n(t),c=s("HaE+"),i=s("g4pe"),o=s.n(i),d=s("NKCw"),u=s("BjMx"),l=s.n(u),j=s("RaS1"),m=s("q1tI"),p=s("YFqc"),h=s.n(p),b=s("20a2"),f=s("Nlzp"),x=function(e){var r=e.setSuccess,s=e.setApiCallComponent,t=e.setError,i=e.setOperationalError,o=e.reqType,d=e.url,u=e.reason,l=e.formInput;return Object(m.useEffect)((function(){(function(){var e=Object(c.a)(n.a.mark((function e(){var a,c,j;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.next=3,Object(f.a)(o,d,u,l);case 3:return"fail"===(a=e.sent).response.data.status?(c=a.response.data.message.split(" ")[0].trim(),j=a.response.data.message.split(" ").slice(1).join(" "),t("".concat(c),{type:"manual",message:"".concat(j)})):("error"===a.response.data.status||a.response.data.isOperational)&&i(a.response.data.message),"success"===a.response.data.status&&r("Success"),e.abrupt("return",s(!1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(m.Fragment,{})};r.default=function(){var e,r,s,t,i=Object(m.useState)(!1),u=(i[0],i[1]),p=Object(m.useState)(!1),f=p[0],g=p[1],O=Object(m.useState)({}),w=O[0],v=O[1],_=Object(m.useState)(""),C=_[0],N=_[1],E=(Object(b.useRouter)(),Object(d.a)()),y=E.register,q=E.errors,S=E.clearErrors,F=E.getValues,P=E.setError,R=E.handleSubmit,V=(E.trigger,function(){var e=Object(c.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(r),g(!0);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}());return Object(a.jsxs)(j.a,{children:[Object(a.jsx)(o.a,{children:Object(a.jsx)("title",{children:"Register"})}),f?Object(a.jsx)(x,{setSuccess:u,setApiCallComponent:g,setError:P,setOperationalError:N,reqType:"POST",url:"users/signup",reason:"registration",formInput:w}):Object(a.jsx)(m.Fragment,{}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("div",{id:l.a.register,children:[Object(a.jsx)("h1",{className:"heading",children:"Register"}),Object(a.jsx)("div",{className:"content",id:l.a.registerContent,children:Object(a.jsxs)("form",{onSubmit:R(V),children:[Object(a.jsx)("p",{className:"error",children:C}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{ref:y({required:"Name is required",maxLength:{value:32,message:"Max 32 character"},minLength:{value:2,message:"Min 2 character"}}),id:"name",autoFocus:!0,name:"name",type:"text",placeholder:"Name",autoComplete:"new-password"}),Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("span",{className:"".concat(q.name?"error":""),children:null===(e=q.name)||void 0===e?void 0:e.message})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{ref:y({required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid email address format"}}),id:"email",name:"email",type:"text",placeholder:"Email",autoComplete:"new-password"}),Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("span",{className:"".concat(q.email?"error":""),children:null===(r=q.email)||void 0===r?void 0:r.message})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{ref:y({required:"Password is required",maxLength:{value:100,message:"Max 100 character"},minLength:{value:8,message:"Min 8 character"}}),id:"password",name:"password",type:"password",placeholder:"Password",autoComplete:"new-password",onChange:function(){F("password")!==F("passwordConfirm")?P("passwordConfirm",{type:"manual",message:"Password should match "}):S("passwordConfirm")}}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("span",{className:"".concat(q.password?"error":""),children:null===(s=q.password)||void 0===s?void 0:s.message})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{ref:y({required:"Password again is required"}),id:"confirm-password",name:"passwordConfirm",type:"password",placeholder:"Password Confirm",autoComplete:"new-password",onChange:function(){F("password")!==F("passwordConfirm")?P("passwordConfirm",{type:"manual",message:"Password should match "}):S("passwordConfirm")}}),Object(a.jsx)("label",{htmlFor:"confirm-password",children:"Password Again"}),Object(a.jsx)("span",{className:"".concat(q.passwordConfirm?"error":""),children:null===(t=q.passwordConfirm)||void 0===t?void 0:t.message})]}),Object(a.jsx)("input",{id:"hidden",name:"hidden",type:"hidden",placeholder:"hidden",autoComplete:"on"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{id:"submit",type:"submit",value:"Signup"}),Object(a.jsx)("div",{className:l.a.forgotBtn,children:Object(a.jsx)(h.a,{href:"/user/auth/login",children:"Already have account? Login here "})})]})]})})]})})]})}},Vwac:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/auth/registration",function(){return s("VpV3")}])},xGi3:function(e,r,s){"use strict";var a=s("nKUr"),t=s("q1tI"),n=s("jcvg"),c=s("k0rj"),i=s("YFqc"),o=s.n(i),d=s("7VKf"),u=s.n(d),l=function(){return Object(a.jsx)("menu",{id:u.a.menu,children:Object(a.jsxs)("nav",{id:u.a.nav,children:[Object(a.jsx)(o.a,{href:"/",children:"Home"}),Object(a.jsx)(o.a,{href:"/user/auth/login",children:"Login"}),Object(a.jsx)(o.a,{href:"/user/auth/registration",children:"Register"})]})})},j=s("y377"),m=s.n(j);r.a=function(){var e=Object(t.useContext)(n.a),r=e[0];e[1];return Object(a.jsxs)("header",{id:m.a.header,className:"header",children:[Object(a.jsx)(c.a,{}),r?Object(a.jsx)(t.Fragment,{}):Object(a.jsx)(l,{})]})}},y377:function(e,r,s){e.exports={header:"AuthHeader_header__1ZQe4"}}},[["Vwac",0,2,1,3,4,5]]]);