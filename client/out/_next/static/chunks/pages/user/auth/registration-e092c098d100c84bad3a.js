_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"7VKf":function(e,r,t){e.exports={nav:"WebMenu_nav__rGn-c",menu:"WebMenu_menu__5GoEW"}},BjMx:function(e,r,t){e.exports={register:"Register_register__23kuD",registerContent:"Register_registerContent__26UNG",forgotBtn:"Register_forgotBtn__x_e3w"}},CBpi:function(e,r,t){"use strict";var a=t("nKUr"),s=t("o0o1"),n=t.n(s),i=t("HaE+"),l=t("NKCw"),o=t("IKAo"),u=t.n(o),c=t("q1tI"),d=t("Nlzp"),m=function(e){var r=e.setSuccess,t=e.setReturnValue,s=e.setApiCallComponent,l=e.setValue,o=e.setError,u=e.setOperationalError,m=e.reqType,h=e.url,j=e.reason,f=e.formInput;return Object(c.useEffect)((function(){(function(){var e=Object(i.a)(n.a.mark((function e(){var a,i,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(""),e.next=3,Object(d.a)(m,h,j,f);case 3:return"success"===(a=e.sent).status?(Object.keys(f).forEach((function(e){l(e,"")})),r(!0),t(a)):"fail"===a.response.data.status?(i=a.response.data.message.split(" ")[0].trim(),c=a.response.data.message.split(" ").slice(1).join(" "),o("".concat(i),{type:"manual",message:"".concat(c).replace(/^\w/,(function(e){return e.toUpperCase()}))})):("error"===a.response.data.status||a.response.data.isOperational)&&u(a.response.data.message),e.abrupt("return",s(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(c.Fragment,{})},h=Object(c.lazy)((function(){return t.e(28).then(t.bind(null,"mxxH"))})),j=Object(c.lazy)((function(){return t.e(24).then(t.bind(null,"hHX8"))})),f=Object(c.lazy)((function(){return t.e(27).then(t.bind(null,"74Ju"))})),b=Object(c.lazy)((function(){return t.e(25).then(t.bind(null,"LmcR"))})),p=Object(c.lazy)((function(){return t.e(26).then(t.bind(null,"8lFg"))})),x=Object(c.lazy)((function(){return t.e(23).then(t.bind(null,"Ja3I"))}));r.a=function(e){var r=e.setReturnValue,t=e.setSuccess,s=e.submitValue,o=e.reason,d=e.reqType,O=e.url,g=e.formBuilder,C=e.submitBtnExtra,F=Object(c.useState)(!1),v=F[0],_=F[1],N=Object(c.useState)({}),E=N[0],w=N[1],y=Object(c.useState)(""),R=y[0],V=y[1],q=Object(l.a)(),T=q.register,S=q.errors,B=q.clearErrors,I=q.setValue,k=q.getValues,P=q.setError,A=q.handleSubmit,K=function(){var e=Object(i.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(r),_(!0);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(a.jsxs)(c.Fragment,{children:[v?Object(a.jsx)(m,{setSuccess:t,setReturnValue:r,setApiCallComponent:_,setError:P,setValue:I,setOperationalError:V,reqType:d,url:O,reason:o,formInput:E}):Object(a.jsx)(c.Fragment,{}),Object(a.jsxs)("form",{onSubmit:A(K),children:[Object(a.jsx)("p",{className:"error",children:R}),Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(a.Fragment,{}),children:null===g||void 0===g?void 0:g.map((function(e){return Object(a.jsxs)(c.Fragment,{children:["CustomTypeTextField"===e.fieldType&&Object(a.jsx)(x,{value:e.value,label:e.label,customTypesArray:e.customTypesArray,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:T,setValue:I,errors:S,setError:P,clearErrors:B,getValues:k}),"TextField"===e.fieldType&&Object(a.jsx)(h,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:T,setValue:I,errors:S,setError:P,clearErrors:B,getValues:k}),"EmailField"===e.fieldType&&Object(a.jsx)(j,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,isRequired:e.isRequired,fieldName:e.fieldName,register:T,setValue:I,errors:S,setError:P,clearErrors:B,getValues:k}),"PasswordWithConfirmField"===e.fieldType&&Object(a.jsx)(f,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:T,setValue:I,errors:S,setError:P,clearErrors:B,getValues:k}),"PasswordConfirmField"===e.fieldType&&Object(a.jsx)(b,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:T,setValue:I,errors:S,setError:P,clearErrors:B,getValues:k}),"PasswordField"===e.fieldType&&Object(a.jsx)(p,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:T,setValue:I,errors:S,setError:P,clearErrors:B,getValues:k})]})}))}),Object(a.jsx)("input",{id:"hidden",name:"hidden",type:"hidden",placeholder:"hidden",autoComplete:"on"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{id:"submit",type:"submit",value:s}),Object(a.jsx)("div",{className:u.a.forgotBtn,children:C})]})]})]})}},IKAo:function(e,r,t){e.exports={register:"FormComponent_register__2IwdX",registerContent:"FormComponent_registerContent__ohUj2",forgotBtn:"FormComponent_forgotBtn__11A3p"}},RaS1:function(e,r,t){"use strict";var a=t("nKUr"),s=t("20a2"),n=t("q1tI"),i=t("Uw7I"),l=t("xGi3"),o=t("jcvg"),u=t("wfTj");r.a=function(e){var r=e.children,t=Object(n.useContext)(u.a),c=t[0],d=(t[1],Object(n.useContext)(o.a)),m=d[0],h=(d[1],Object(s.useRouter)());return Object(n.useEffect)((function(){if(!m)return c?h.push("/user/dashboard"):void 0}),[c]),Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(l.a,{}),c?Object(a.jsx)("h1",{className:"heading",children:"Checking user..."}):Object(a.jsx)("main",{children:r}),Object(a.jsx)(i.a,{})]})}},VpV3:function(e,r,t){"use strict";t.r(r),t.d(r,"SubmitBtnExtra",(function(){return f}));var a=t("nKUr"),s=t("g4pe"),n=t.n(s),i=t("BjMx"),l=t.n(i),o=t("RaS1"),u=t("CBpi"),c=t("YFqc"),d=t.n(c),m=t("q1tI"),h=t("20a2"),j=t("wfTj"),f=function(){return Object(a.jsx)(d.a,{href:"/user/auth/login",children:"Already have account? Login here "})};r.default=function(){var e=Object(m.useContext)(j.a),r=e[0],t=e[1],s=Object(m.useState)(!1),i=s[0],c=s[1],d=Object(m.useState)(null),b=d[0],p=d[1],x=Object(h.useRouter)();Object(m.useEffect)((function(){i&&b&&(localStorage.setItem("token",b.refreshToken),t(b.data.user))}),[i,b]),Object(m.useEffect)((function(){if(r)if("admin"===r.role)x.push("/admin/dashboard");else{if("user"!==r.role)return;x.push("/user/dashboard")}}),[r]);return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(n.a,{children:"Registration form"}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("div",{id:l.a.register,children:[Object(a.jsx)("h1",{className:"heading",children:"Registration"}),Object(a.jsx)("div",{id:l.a.registerContent,children:Object(a.jsx)(u.a,{setSuccess:c,setReturnValue:p,submitValue:"Signup",reason:"registration",reqType:"post",url:"users/signup",formBuilder:[{fieldType:"TextField",placeholder:"Name",label:"Name",initFocus:!0,maxChar:32,minChar:2,isRequired:!0,fieldName:"name"},{fieldType:"EmailField",placeholder:"Email",label:"Email",initFocus:!1,isRequired:!0,fieldName:"email"},{fieldType:"PasswordWithConfirmField",placeholder:"Password",label:"Password",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"password",otherFieldName:"passwordConfirm"},{fieldType:"PasswordConfirmField",placeholder:"Password Confirm",label:"Password Confirm",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"passwordConfirm",otherFieldName:"password"}],submitBtnExtra:Object(a.jsx)(f,{})})})]})})]})}},Vwac:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/auth/registration",function(){return t("VpV3")}])},xGi3:function(e,r,t){"use strict";var a=t("nKUr"),s=t("q1tI"),n=t("jcvg"),i=t("k0rj"),l=t("YFqc"),o=t.n(l),u=t("7VKf"),c=t.n(u),d=function(){return Object(a.jsx)("menu",{id:c.a.menu,children:Object(a.jsxs)("nav",{id:c.a.nav,children:[Object(a.jsx)(o.a,{href:"/",children:"Home"}),Object(a.jsx)(o.a,{href:"/user/auth/login",children:"Login"}),Object(a.jsx)(o.a,{href:"/user/auth/registration",children:"Register"})]})})},m=t("y377"),h=t.n(m);r.a=function(){var e=Object(s.useContext)(n.a),r=e[0];e[1];return Object(a.jsxs)("header",{id:h.a.header,className:"header",children:[Object(a.jsx)(i.a,{}),r?Object(a.jsx)(s.Fragment,{}):Object(a.jsx)(d,{})]})}},y377:function(e,r,t){e.exports={header:"AuthHeader_header__1ZQe4"}}},[["Vwac",0,2,1,3,4,5]]]);