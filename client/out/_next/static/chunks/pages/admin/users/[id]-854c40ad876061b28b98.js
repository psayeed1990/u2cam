_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{GDVR:function(e,n,i){"use strict";var s=i("nKUr"),t=i("q1tI"),a=i("jcvg"),r=i("k0rj"),c=i("YFqc"),d=i.n(c),l=i("h6H3"),u=function(){return Object(s.jsxs)("menu",{id:"menu",children:[Object(s.jsx)("div",{id:"menu-icon",onClick:l.a,children:"Menu"}),Object(s.jsxs)("nav",{id:"nav",children:[Object(s.jsx)(d.a,{href:"/",children:"Home"}),Object(s.jsx)(d.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(s.jsx)(d.a,{href:"/user/auth/logout",children:"Logout"})]})]})},o=i("GMIE"),j=i.n(o);n.a=function(){var e=Object(t.useContext)(a.a),n=e[0];e[1];return Object(s.jsxs)("header",{id:j.a.header,className:"header",children:[Object(s.jsx)(r.a,{}),n?Object(s.jsx)(t.Fragment,{}):Object(s.jsx)(u,{})]})}},GMIE:function(e,n,i){},HBKp:function(e,n,i){"use strict";var s=i("nKUr"),t=i("20a2"),a=i("q1tI"),r=i("Uw7I"),c=i("GDVR"),d=i("YFqc"),l=i.n(d),u=i("HGLW"),o=i.n(u),j=function(){return Object(s.jsx)("div",{className:o.a.sidebar,children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{className:o.a.adminLinks,children:[Object(s.jsx)(l.a,{href:"/admin/users/list-users",children:"Users"}),Object(s.jsxs)("ul",{className:o.a.subMenu,children:[Object(s.jsx)("li",{className:"".concat(o.a.adminLinks),children:Object(s.jsx)(l.a,{href:"/admin/users/list-users",children:"Search Users"})}),Object(s.jsx)("li",{className:"".concat(o.a.adminLinks),children:Object(s.jsx)(l.a,{href:"/admin/users/create-user",children:"Create User"})})]})]}),Object(s.jsx)("li",{className:o.a.adminLinks,children:Object(s.jsx)(l.a,{href:"/admin/profile",children:"Profile"})}),Object(s.jsx)("li",{className:o.a.adminLinks,children:Object(s.jsx)(l.a,{href:"/admin/uploads",children:"Uploads"})}),Object(s.jsx)("li",{className:o.a.adminLinks,children:Object(s.jsx)(l.a,{href:"/editor",children:"Theme Editor"})})]})})},h=i("jcvg"),m=i("wfTj"),b=i("RPPH"),x=i.n(b);n.a=function(e){var n=e.children,i=Object(a.useContext)(h.a),d=i[0],l=(i[1],Object(a.useContext)(m.a)),u=l[0],o=(l[1],Object(t.useRouter)());return Object(a.useEffect)((function(){if(!d)return u?"admin"===u.role?void 0:o.push("/admin/unauthorized"):o.push("/user/auth/login")}),[d,u]),Object(s.jsxs)(a.Fragment,{children:[Object(s.jsx)(c.a,{}),!d&&u?Object(s.jsxs)("main",{className:x.a.AdminLayout,children:[Object(s.jsx)(j,{}),n]}):Object(s.jsx)("h1",{className:"heading",children:"Fetching user..."}),Object(s.jsx)(r.a,{})]})}},HGLW:function(e,n,i){e.exports={sidebar:"AdminSidebar_sidebar__2vcDe",adminLinks:"AdminSidebar_adminLinks__3SBUJ",subMenu:"AdminSidebar_subMenu__3kZ4n"}},RPPH:function(e,n,i){e.exports={AdminLayout:"AdminLayout_AdminLayout__2W35P"}},ioCs:function(e,n,i){e.exports={register:"SingleUser_register__1aIxa",registerContent:"SingleUser_registerContent__1E8rC"}},pF3x:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users/[id]",function(){return i("yy1l")}])},yy1l:function(e,n,i){"use strict";i.r(n),i.d(n,"SubmitBtnExtra",(function(){return x}));var s=i("nKUr"),t=i("o0o1"),a=i.n(t),r=i("HaE+"),c=i("20a2"),d=i("g4pe"),l=i.n(d),u=i("ioCs"),o=i.n(u),j=i("CBpi"),h=i("q1tI"),m=i("HBKp"),b=i("Nlzp"),x=function(){return Object(s.jsx)(h.Fragment,{})};n.default=function(){var e=Object(c.useRouter)().query.id,n=Object(h.useState)(null),i=n[0],t=n[1],d=Object(h.useState)(""),u=d[0],O=d[1],f=Object(h.useState)(!1),p=f[0],v=f[1],_=Object(h.useState)(null),g=_[0],N=_[1],y=Object(h.useState)(null),C=y[0],E=y[1];return Object(h.useEffect)((function(){e&&function(){var n=Object(r.a)(a.a.mark((function n(){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.a)("get","users/".concat(e),"get user");case 2:i=n.sent,t(i.data.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[e,p]),Object(h.useEffect)((function(){p&&g&&O("User updated successfully")}),[p,g]),Object(h.useEffect)((function(){if(i){var e=[{fieldType:"CustomTypeTextField",label:"User Type",customTypesArray:["user","admin","moderator"],initFocus:!0,maxChar:32,minChar:2,isRequired:!0,fieldName:"role",value:null===i||void 0===i?void 0:i.role,placeholder:null===i||void 0===i?void 0:i.role},{fieldType:"TextField",label:"Name",initFocus:!1,maxChar:32,minChar:2,isRequired:!0,fieldName:"name",value:null===i||void 0===i?void 0:i.name,placeholder:null===i||void 0===i?void 0:i.name},{fieldType:"EmailField",label:"Email",initFocus:!1,isRequired:!0,fieldName:"email",value:null===i||void 0===i?void 0:i.email,placeholder:null===i||void 0===i?void 0:i.email},{fieldType:"TextField",label:"Phone",initFocus:!1,maxChar:32,minChar:4,isRequired:!0,fieldName:"phone",value:null===i||void 0===i?void 0:i.phone,placeholder:null===i||void 0===i?void 0:i.phone}];E(e)}}),[i]),Object(s.jsxs)(m.a,{children:[Object(s.jsx)(l.a,{children:Object(s.jsx)("title",{children:"User Update - Admin"})}),Object(s.jsx)("div",{className:"content",children:i?Object(s.jsxs)("div",{id:o.a.register,children:[Object(s.jsx)("h1",{className:"heading",children:i.name}),Object(s.jsx)("img",{src:"/images/icons/photo.svg",width:70,height:70}),Object(s.jsxs)("div",{id:o.a.registerContent,children:[Object(s.jsx)("h5",{className:"heading success-message",children:u}),Object(s.jsx)(j.a,{setSuccess:v,setReturnValue:N,submitValue:"Update",reason:"Update user",reqType:"patch",url:"users/".concat(e),formBuilder:C,submitBtnExtra:Object(s.jsx)(x,{})})]})]}):""})]})}}},[["pF3x",0,2,1,3,4,5]]]);