_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"3NUf":function(e,r,t){e.exports={login:"Login_login__324fB",loginContent:"Login_loginContent__nkVwq",forgotBtn:"Login_forgotBtn__34NYj"}},"7VKf":function(e,r,t){e.exports={nav:"WebMenu_nav__rGn-c",menu:"WebMenu_menu__5GoEW"}},CBpi:function(e,r,t){"use strict";var n=t("nKUr"),a=t("o0o1"),s=t.n(a),i=t("HaE+"),o=t("NKCw"),l=t("IKAo"),u=t.n(l),c=t("q1tI"),d=t("Nlzp"),j=function(e){var r=e.setSuccess,t=e.setReturnValue,a=e.setApiCallComponent,o=e.setValue,l=e.setError,u=e.setOperationalError,j=e.reqType,h=e.url,m=e.reason,b=e.formInput;return Object(c.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var n,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(""),e.next=3,Object(d.a)(j,h,m,b);case 3:return"success"===(n=e.sent).status?(Object.keys(b).forEach((function(e){o(e,"")})),r(!0),t(n)):"fail"===n.response.data.status?(i=n.response.data.message.split(" ")[0].trim(),c=n.response.data.message.split(" ").slice(1).join(" "),l("".concat(i),{type:"manual",message:"".concat(c).replace(/^\w/,(function(e){return e.toUpperCase()}))}),n.response.data.isOperational&&u(n.response.data.message)):"error"===n.response.data.status&&u(n.response.data.message),e.abrupt("return",a(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(c.Fragment,{})},h=Object(c.lazy)((function(){return t.e(29).then(t.bind(null,"mxxH"))})),m=Object(c.lazy)((function(){return t.e(25).then(t.bind(null,"hHX8"))})),b=Object(c.lazy)((function(){return t.e(28).then(t.bind(null,"74Ju"))})),f=Object(c.lazy)((function(){return t.e(26).then(t.bind(null,"LmcR"))})),p=Object(c.lazy)((function(){return t.e(27).then(t.bind(null,"8lFg"))})),x=Object(c.lazy)((function(){return t.e(24).then(t.bind(null,"Ja3I"))}));r.a=function(e){var r=e.setReturnValue,t=e.setSuccess,a=e.submitValue,l=e.reason,d=e.reqType,O=e.url,g=e.formBuilder,C=e.submitBtnExtra,v=Object(c.useState)(!1),F=v[0],_=v[1],E=Object(c.useState)({}),N=E[0],y=E[1],w=Object(c.useState)(""),q=w[0],V=w[1],R=Object(o.a)(),T=R.register,S=R.errors,k=R.clearErrors,B=R.setValue,I=R.getValues,z=R.setError,K=R.handleSubmit,U=function(){var e=Object(i.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(r),_(!0);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(n.jsxs)(c.Fragment,{children:[F?Object(n.jsx)(j,{setSuccess:t,setReturnValue:r,setApiCallComponent:_,setError:z,setValue:B,setOperationalError:V,reqType:d,url:O,reason:l,formInput:N}):Object(n.jsx)(c.Fragment,{}),Object(n.jsxs)("form",{onSubmit:K(U),children:[Object(n.jsx)("p",{className:"error",children:q}),Object(n.jsx)(c.Suspense,{fallback:Object(n.jsx)(n.Fragment,{}),children:null===g||void 0===g?void 0:g.map((function(e){return Object(n.jsxs)(c.Fragment,{children:["CustomTypeTextField"===e.fieldType&&Object(n.jsx)(x,{value:e.value,label:e.label,customTypesArray:e.customTypesArray,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:T,setValue:B,errors:S,setError:z,clearErrors:k,getValues:I}),"TextField"===e.fieldType&&Object(n.jsx)(h,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:T,setValue:B,errors:S,setError:z,clearErrors:k,getValues:I}),"EmailField"===e.fieldType&&Object(n.jsx)(m,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,isRequired:e.isRequired,fieldName:e.fieldName,register:T,setValue:B,errors:S,setError:z,clearErrors:k,getValues:I}),"PasswordWithConfirmField"===e.fieldType&&Object(n.jsx)(b,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:T,setValue:B,errors:S,setError:z,clearErrors:k,getValues:I}),"PasswordConfirmField"===e.fieldType&&Object(n.jsx)(f,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:T,setValue:B,errors:S,setError:z,clearErrors:k,getValues:I}),"PasswordField"===e.fieldType&&Object(n.jsx)(p,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:T,setValue:B,errors:S,setError:z,clearErrors:k,getValues:I})]})}))}),Object(n.jsx)("input",{id:"hidden",name:"hidden",type:"hidden",placeholder:"hidden",autoComplete:"on"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{id:"submit",type:"submit",value:a}),Object(n.jsx)("div",{className:u.a.forgotBtn,children:C})]})]})]})}},IKAo:function(e,r,t){e.exports={register:"FormComponent_register__2IwdX",registerContent:"FormComponent_registerContent__ohUj2",forgotBtn:"FormComponent_forgotBtn__11A3p"}},"N9/k":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/auth/login",function(){return t("uzOT")}])},RaS1:function(e,r,t){"use strict";var n=t("nKUr"),a=t("20a2"),s=t("q1tI"),i=t("Uw7I"),o=t("xGi3"),l=t("jcvg"),u=t("wfTj");r.a=function(e){var r=e.children,t=Object(s.useContext)(u.a),c=t[0],d=(t[1],Object(s.useContext)(l.a)),j=d[0],h=(d[1],Object(a.useRouter)());return Object(s.useEffect)((function(){if(!j)return c?h.push("/user/dashboard"):void 0}),[c]),Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(o.a,{}),c?Object(n.jsx)("h1",{className:"heading",children:"Checking user..."}):Object(n.jsx)("main",{children:r}),Object(n.jsx)(i.a,{})]})}},uzOT:function(e,r,t){"use strict";t.r(r),t.d(r,"SubmitBtnExtra",(function(){return b}));var n=t("nKUr"),a=t("g4pe"),s=t.n(a),i=t("3NUf"),o=t.n(i),l=t("RaS1"),u=t("CBpi"),c=t("YFqc"),d=t.n(c),j=t("q1tI"),h=t("20a2"),m=t("wfTj"),b=function(){return Object(n.jsxs)(j.Fragment,{children:[Object(n.jsx)(d.a,{href:"/user/auth/forgot-password",children:"Forgot password?"}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{href:"/user/auth/registration",children:"Don't have account? "})]})};r.default=function(){var e=Object(j.useContext)(m.a),r=e[0],t=e[1],a=Object(j.useState)(!1),i=a[0],c=a[1],d=Object(j.useState)(null),f=d[0],p=d[1],x=Object(h.useRouter)();Object(j.useEffect)((function(){i&&f&&(localStorage.setItem("token",f.refreshToken),console.log(f),t(f.data.user))}),[i,f]),Object(j.useEffect)((function(){if(r)if("admin"===r.role)x.push("/admin/dashboard");else{if("user"!==r.role)return;x.push("/user/dashboard")}}),[r]);return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(s.a,{children:"Login form"}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("div",{id:o.a.login,children:[Object(n.jsx)("h1",{className:"heading",children:"Login"}),Object(n.jsx)("div",{id:o.a.loginContent,children:Object(n.jsx)(u.a,{setSuccess:c,setReturnValue:p,submitValue:"Login",reason:"login",reqType:"post",url:"users/login",formBuilder:[{fieldType:"EmailField",placeholder:"Email",label:"Email",initFocus:!0,isRequired:!0,fieldName:"email"},{fieldType:"PasswordField",placeholder:"Password",label:"Password",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"password"}],submitBtnExtra:Object(n.jsx)(b,{})})})]})})]})}},xGi3:function(e,r,t){"use strict";var n=t("nKUr"),a=t("q1tI"),s=t("jcvg"),i=t("k0rj"),o=t("YFqc"),l=t.n(o),u=t("7VKf"),c=t.n(u),d=function(){return Object(n.jsx)("menu",{id:c.a.menu,children:Object(n.jsxs)("nav",{id:c.a.nav,children:[Object(n.jsx)(l.a,{href:"/",children:"Home"}),Object(n.jsx)(l.a,{href:"/user/auth/login",children:"Login"}),Object(n.jsx)(l.a,{href:"/user/auth/registration",children:"Register"})]})})},j=t("y377"),h=t.n(j);r.a=function(){var e=Object(a.useContext)(s.a),r=e[0];e[1];return Object(n.jsxs)("header",{id:h.a.header,className:"header",children:[Object(n.jsx)(i.a,{}),r?Object(n.jsx)(a.Fragment,{}):Object(n.jsx)(d,{})]})}},y377:function(e,r,t){e.exports={header:"AuthHeader_header__1ZQe4"}}},[["N9/k",0,2,1,3,4,5]]]);