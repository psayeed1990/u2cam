_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{E5GR:function(e,s,i){e.exports={register:"CreateUser_register__3YnOE",registerContent:"CreateUser_registerContent__-DiL_"}},GDVR:function(e,s,i){"use strict";var r=i("nKUr"),a=i("q1tI"),n=i("jcvg"),t=i("k0rj"),c=i("YFqc"),d=i.n(c),l=i("h6H3"),u=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:l.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(d.a,{href:"/",children:"Home"}),Object(r.jsx)(d.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(r.jsx)(d.a,{href:"/user/auth/logout",children:"Logout"})]})]})},o=i("GMIE"),j=i.n(o);s.a=function(){var e=Object(a.useContext)(n.a),s=e[0];e[1];return Object(r.jsxs)("header",{id:j.a.header,className:"header",children:[Object(r.jsx)(t.a,{}),s?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(u,{})]})}},GMIE:function(e,s,i){},HBKp:function(e,s,i){"use strict";var r=i("nKUr"),a=i("20a2"),n=i("q1tI"),t=i("Uw7I"),c=i("GDVR"),d=i("YFqc"),l=i.n(d),u=i("HGLW"),o=i.n(u),j=function(){return Object(r.jsx)("div",{className:o.a.sidebar,children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{className:o.a.adminLinks,children:[Object(r.jsx)(l.a,{href:"/admin/users/list-users",children:"Users"}),Object(r.jsxs)("ul",{className:o.a.subMenu,children:[Object(r.jsx)("li",{className:"".concat(o.a.adminLinks),children:Object(r.jsx)(l.a,{href:"/admin/users/list-users",children:"Search Users"})}),Object(r.jsx)("li",{className:"".concat(o.a.adminLinks),children:Object(r.jsx)(l.a,{href:"/admin/users/create-user",children:"Create User"})})]})]}),Object(r.jsx)("li",{className:o.a.adminLinks,children:Object(r.jsx)(l.a,{href:"/admin/profile",children:"Profile"})}),Object(r.jsx)("li",{className:o.a.adminLinks,children:Object(r.jsx)(l.a,{href:"/admin/uploads",children:"Uploads"})}),Object(r.jsx)("li",{className:o.a.adminLinks,children:Object(r.jsx)(l.a,{href:"/editor",children:"Theme Editor"})})]})})},m=i("jcvg"),h=i("wfTj"),b=i("RPPH"),x=i.n(b);s.a=function(e){var s=e.children,i=Object(n.useContext)(m.a),d=i[0],l=(i[1],Object(n.useContext)(h.a)),u=l[0],o=(l[1],Object(a.useRouter)());return Object(n.useEffect)((function(){if(!d)return u?"admin"===u.role?void 0:o.push("/admin/unauthorized"):o.push("/user/auth/login")}),[d,u]),Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(c.a,{}),!d&&u?Object(r.jsxs)("main",{className:x.a.AdminLayout,children:[Object(r.jsx)(j,{}),s]}):Object(r.jsx)("h1",{className:"heading",children:"Fetching user..."}),Object(r.jsx)(t.a,{})]})}},HGLW:function(e,s,i){e.exports={sidebar:"AdminSidebar_sidebar__2vcDe",adminLinks:"AdminSidebar_adminLinks__3SBUJ",subMenu:"AdminSidebar_subMenu__3kZ4n"}},RPPH:function(e,s,i){e.exports={AdminLayout:"AdminLayout_AdminLayout__2W35P"}},kJDH:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users/create-user",function(){return i("zjhl")}])},zjhl:function(e,s,i){"use strict";i.r(s),i.d(s,"SubmitBtnExtra",(function(){return o}));var r=i("nKUr"),a=i("g4pe"),n=i.n(a),t=i("E5GR"),c=i.n(t),d=i("CBpi"),l=(i("YFqc"),i("q1tI")),u=i("HBKp"),o=function(){return Object(r.jsx)(l.Fragment,{})};s.default=function(){var e=Object(l.useState)(""),s=e[0],i=e[1],a=Object(l.useState)(!1),t=a[0],j=a[1],m=Object(l.useState)(null),h=m[0],b=m[1];Object(l.useEffect)((function(){t&&h&&i("User created successfully")}),[t,h]);return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(n.a,{children:Object(r.jsx)("title",{children:"User Create"})}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("div",{id:c.a.register,children:[Object(r.jsx)("h1",{className:"heading",children:"Create User or Admin"}),Object(r.jsxs)("div",{id:c.a.registerContent,children:[Object(r.jsx)("h5",{className:"heading success-message",children:s}),Object(r.jsx)(d.a,{setSuccess:j,setReturnValue:b,submitValue:"Create",reason:"registration from admin",reqType:"post",url:"admin/users/create",formBuilder:[{fieldType:"CustomTypeTextField",placeholder:"user or admin or moderator",label:"User Type",customTypesArray:["user","admin","moderator"],initFocus:!0,maxChar:32,minChar:2,isRequired:!0,fieldName:"role"},{fieldType:"TextField",placeholder:"Name",label:"Name",initFocus:!1,maxChar:32,minChar:2,isRequired:!0,fieldName:"name"},{fieldType:"EmailField",placeholder:"Email",label:"Email",initFocus:!1,isRequired:!0,fieldName:"email"},{fieldType:"PasswordWithConfirmField",placeholder:"Password",label:"Password",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"password",otherFieldName:"passwordConfirm"},{fieldType:"PasswordConfirmField",placeholder:"Password Confirm",label:"Password Confirm",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"passwordConfirm",otherFieldName:"password"}],submitBtnExtra:Object(r.jsx)(o,{})})]})]})})]})}}},[["kJDH",0,2,1,3,4,5]]]);