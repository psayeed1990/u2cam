(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{Ja3I:function(e,a,r){"use strict";r.r(a);var n=r("nKUr"),t=r("q1tI");a.default=function(e){var a=e.value,r=e.label,c=e.customTypesArray,s=e.initFocus,o=e.placeholder,i=e.maxChar,l=e.minChar,u=e.isRequired,d=e.fieldName,m=e.register,h=e.setValue,p=e.errors,j=e.setError,f=e.clearErrors,g=e.getValues;return Object(t.useEffect)((function(){a&&h(d,a)}),[]),Object(n.jsx)(t.Fragment,{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{ref:m({required:!!u&&"".concat(d," is required"),maxLength:{value:i,message:"Max ".concat(i," character")},minLength:{value:l,message:"Min ".concat(l," character")},validate:function(e){return c.includes(e)||c.join(" or ")}}),id:d,autoFocus:s,name:d,type:"text",placeholder:o,autoComplete:"new-password",onChange:function(){c.includes(g(d))?f(d):j(d,{type:"manual",message:"Only ".concat(c.join(", ")," allowed ")})}}),Object(n.jsx)("label",{htmlFor:d,children:r}),Object(n.jsx)("span",{className:"".concat(p[d]?"error":""),children:p[d]&&p[d].message})]})})}}}]);