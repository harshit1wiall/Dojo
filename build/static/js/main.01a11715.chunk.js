(this["webpackJsonpthe-dojo"]=this["webpackJsonpthe-dojo"]||[]).push([[0],{42:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(23),s=n.n(a),i=(n(42),n(15)),u=n(6),l=n(5),o=n(9),j=n(22);n(77),n(44),n(76);j.a.initializeApp({apiKey:"AIzaSyDJYOtC4_E5CLiiTl8LPbzQowsLi9w4Pr0",authDomain:"thedojosite-dfc1b.firebaseapp.com",projectId:"thedojosite-dfc1b",storageBucket:"thedojosite-dfc1b.appspot.com",messagingSenderId:"656655006172",appId:"1:656655006172:web:541924cd4c9d359687f719"});var d=j.a.firestore(),b=j.a.auth(),O=j.a.storage(),p=j.a.firestore.Timestamp,h=n(2),x=Object(c.createContext)(),m=function(e,t){switch(t.type){case"LOGIN":return Object(o.a)(Object(o.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{user:null});case"AUTH_IS_READY":return{user:t.payload,authIsReady:!0};default:return e}},f=function(e){var t=e.children,n=Object(c.useReducer)(m,{user:null,authIsReady:!1}),r=Object(l.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var e=b.onAuthStateChanged((function(t){s({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log("AuthContext state:",a),Object(h.jsx)(x.Provider,{value:Object(o.a)(Object(o.a)({},a),{},{dispatch:s}),children:t})},v=function(){var e=Object(c.useContext)(x);if(!e)throw Error("useAuthContext must be used inside an AuthContextProvider");return e},g=(n(47),n(4)),y=n.n(g),N=n(10),D=n(12),S=function(e,t,n){var r=Object(c.useState)(null),a=Object(l.a)(r,2),s=a[0],i=a[1],u=Object(c.useState)(null),j=Object(l.a)(u,2),b=j[0],O=j[1],p=Object(c.useRef)(t).current,h=Object(c.useRef)(n).current;return Object(c.useEffect)((function(){var t,n,c=d.collection(e);p&&(c=(t=c).where.apply(t,Object(D.a)(p)));h&&(c=(n=c).orderBy.apply(n,Object(D.a)(h)));var r=c.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),i(t),O(null)}),(function(e){console.log(e),O("could not fetch the data")}));return function(){return r()}}),[e,p,h]),{documents:s,error:b}},E={document:null,isPending:!1,error:null,success:null},w=function(e,t){switch(t.type){case"IS_PENDING":return{isPending:!0,document:null,success:!1,error:null};case"ADDED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};case"DELETED_DOCUMENT":return{isPending:!1,document:null,success:!0,error:null};case"ERROR":return{isPending:!1,document:null,success:!1,error:t.payload};case"UPDATED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};default:return e}},P=function(e){var t=Object(c.useReducer)(w,E),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),u=i[0],j=i[1],b=d.collection(e),O=function(e){u||a(e)},h=function(){var e=Object(N.a)(y.a.mark((function e(t){var n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,n=p.fromDate(new Date),e.next=5,b.add(Object(o.a)(Object(o.a)({},t),{},{createdAt:n}));case 5:c=e.sent,O({type:"ADDED_DOCUMENT",payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),O({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(N.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).delete();case 4:O({type:"DELETED_DOCUMENT"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O({type:"ERROR",payload:"could not delete"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(N.a)(y.a.mark((function e(t,n){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).update(n);case 4:return c=e.sent,O({type:"UPDATED_DOCUMENT",payload:c}),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),O({type:"ERROR",payload:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return j(!0)}}),[]),{addDocument:h,deleteDocument:x,updateDocument:m,response:r}},R=n(34),L=(n(49),[{value:"development",label:"Development"},{value:"design",label:"Design"},{value:"sales",label:"Sales"},{value:"marketing",label:"Marketing"}]);function C(){var e=Object(u.n)(),t=P("projects"),n=t.addDocument,r=t.response,a=v().user,s=S("users").documents,i=Object(c.useState)([]),j=Object(l.a)(i,2),d=j[0],b=j[1],O=Object(c.useState)(""),x=Object(l.a)(O,2),m=x[0],f=x[1],g=Object(c.useState)(""),D=Object(l.a)(g,2),E=D[0],w=D[1],C=Object(c.useState)(""),U=Object(l.a)(C,2),k=U[0],A=U[1],I=Object(c.useState)(""),T=Object(l.a)(I,2),_=T[0],M=T[1],q=Object(c.useState)([]),G=Object(l.a)(q,2),z=G[0],B=G[1],F=Object(c.useState)(null),H=Object(l.a)(F,2),J=H[0],Y=H[1];Object(c.useEffect)((function(){s&&b(s.map((function(e){return{value:Object(o.a)(Object(o.a)({},e),{},{id:e.id}),label:e.displayName}})))}),[s]);var W=function(){var t=Object(N.a)(y.a.mark((function t(c){var s,i,u;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),Y(null),_){t.next=5;break}return Y("Please select a project category."),t.abrupt("return");case 5:if(!(z.length<1)){t.next=8;break}return Y("Please assign the project to at least 1 user"),t.abrupt("return");case 8:return s=z.map((function(e){return{displayName:e.value.displayName,photoURL:e.value.photoURL,id:e.value.id}})),i={displayName:a.displayName,photoURL:a.photoURL,id:a.uid},u={name:m,details:E,assignedUsersList:s,createdBy:i,category:_.value,dueDate:p.fromDate(new Date(k)),comments:[]},t.next=13,n(u);case 13:r.error||e("/");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"create-form",children:[Object(h.jsx)("h2",{className:"page-title",children:"Create a new Project"}),Object(h.jsxs)("form",{onSubmit:W,children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Project name:"}),Object(h.jsx)("input",{required:!0,type:"text",onChange:function(e){return f(e.target.value)},value:m})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Project Details:"}),Object(h.jsx)("textarea",{required:!0,onChange:function(e){return w(e.target.value)},value:E})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Set due date:"}),Object(h.jsx)("input",{required:!0,type:"date",onChange:function(e){return A(e.target.value)},value:k})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Project category:"}),Object(h.jsx)(R.a,{onChange:function(e){return M(e)},options:L})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Assign to:"}),Object(h.jsx)(R.a,{onChange:function(e){return B(e)},options:d,isMulti:!0})]}),Object(h.jsx)("button",{className:"btn",children:"Add Project"}),J&&Object(h.jsx)("p",{className:"error",children:J})]})]})}n(66);function U(e){var t=e.src;return Object(h.jsxs)("div",{className:"avatar",children:[" ",Object(h.jsx)("img",{src:t,alt:"user avatar"})]})}n(67);function k(e){var t=e.projects;return console.log(t),Object(h.jsxs)("div",{className:"project-list",children:[0===t.length&&Object(h.jsx)("p",{children:"No projects yet!"}),t.map((function(e){return Object(h.jsxs)(i.b,{to:"/projects/".concat(e.id),children:[Object(h.jsx)("h4",{children:e.name}),Object(h.jsxs)("p",{children:["Due by ",e.dueDate.toDate().toDateString()]}),Object(h.jsxs)("div",{className:"assigned-to",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:"Assigned to:"})}),Object(h.jsx)("ul",{children:e.assignedUsersList.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(U,{src:e.photoURL})},e.photoURL)}))})]})]},e.id)}))]})}var A=["all","mine","development","design","marketing","sales"];function I(e){var t=e.changeFilter,n=Object(c.useState)("all"),r=Object(l.a)(n,2),a=r[0],s=r[1];return Object(h.jsx)("div",{className:"project-filter",children:Object(h.jsxs)("nav",{children:[Object(h.jsx)("p",{children:"Filter by: "}),A.map((function(e){return Object(h.jsx)("button",{onClick:function(){return s(n=e),void t(n);var n},className:a===e?"active":"",children:e},e)}))]})})}n(68);function T(){var e=v().user,t=S("projects"),n=t.documents,r=t.error,a=Object(c.useState)("all"),s=Object(l.a)(a,2),i=s[0],u=s[1],o=n?n.filter((function(t){switch(i){case"all":return!0;case"mine":var n=!1;return t.assignedUsersList.forEach((function(t){t.id===e.uid&&(n=!0)})),n;case"development":case"design":case"sales":case"marketing":return console.log(t.category,i),t.category===i;default:return!0}})):null;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"page-title",children:"Dashboard"}),r&&Object(h.jsx)("p",{className:"error",children:r}),n&&Object(h.jsx)(I,{changeFilter:function(e){u(e)}}),o&&Object(h.jsx)(k,{projects:o})]})}n(69);function _(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],o=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),O=j[0],p=j[1],h=v().dispatch,x=function(){var e=Object(N.a)(y.a.mark((function e(t,c){var r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),p(!0),e.prev=2,e.next=5,b.signInWithEmailAndPassword(t,c);case 5:return r=e.sent,a=d.collection("users").doc(r.user.uid),e.next=9,a.update({online:!0});case 9:h({type:"LOGIN",payload:r.user}),n||(p(!1),u(null)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),n||(u(e.t0.message),p(!1));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{login:x,isPending:O,error:i}}(),j=o.login,O=o.error,p=o.isPending;return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(n,i)},className:"auth-form",children:[Object(h.jsx)("h2",{children:"login"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"email:"}),Object(h.jsx)("input",{required:!0,type:"email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"password:"}),Object(h.jsx)("input",{required:!0,type:"password",onChange:function(e){return u(e.target.value)},value:i})]}),!p&&Object(h.jsx)("button",{className:"btn",children:"Log in"}),p&&Object(h.jsx)("button",{className:"btn",disabled:!0,children:"loading"}),O&&Object(h.jsx)("div",{className:"error",children:O})]})}n(70);function M(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),p=j[0],x=j[1],m=Object(c.useState)(null),f=Object(l.a)(m,2),g=f[0],D=f[1],S=Object(c.useState)(null),E=Object(l.a)(S,2),w=E[0],P=E[1],R=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),p=j[0],h=j[1],x=v().dispatch,m=function(){var e=Object(N.a)(y.a.mark((function e(t,c,r,a){var s,i,l,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),h(!0),e.prev=2,e.next=5,b.createUserWithEmailAndPassword(t,c);case 5:if(s=e.sent){e.next=8;break}throw new Error("Could not complete signup");case 8:return i="thumbnails/".concat(s.user.uid,"/").concat(a.name),e.next=11,O.ref(i).put(a);case 11:return l=e.sent,e.next=14,l.ref.getDownloadURL();case 14:return o=e.sent,e.next=17,s.user.updateProfile({displayName:r,photoURL:o});case 17:return e.next=19,d.collection("users").doc(s.user.uid).set({online:!0,displayName:r,photoURL:o});case 19:x({type:"LOGIN",payload:s.user}),n||(h(!1),u(null)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),n||(u(e.t0.message),h(!1));case 26:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(t,n,c,r){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{signup:m,error:i,isPending:p}}(),L=R.signup,C=R.isPending,U=R.error;return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),L(n,i,p,g)},className:"auth-form",children:[Object(h.jsx)("h2",{children:"sign up"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"email:"}),Object(h.jsx)("input",{required:!0,type:"email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"password:"}),Object(h.jsx)("input",{required:!0,type:"password",onChange:function(e){return u(e.target.value)},value:i})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"display name:"}),Object(h.jsx)("input",{required:!0,type:"text",onChange:function(e){return x(e.target.value)},value:p})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Profile thumbnail:"}),Object(h.jsx)("input",{required:!0,type:"file",onChange:function(e){D(null);var t=e.target.files[0];console.log(t),t?t.type.includes("image")?t.size>1e7?P("Image file size must be less than 100kb"):(P(null),D(t),console.log("thumbnail updated")):P("Selected file must be an image"):P("Please select a file")}}),w&&Object(h.jsx)("div",{className:"error",children:w})]}),!C&&Object(h.jsx)("button",{className:"btn",children:"Sign up"}),C&&Object(h.jsx)("button",{className:"btn",disabled:!0,children:"loading"}),U&&Object(h.jsx)("div",{className:"error",children:U})]})}var q=n(37);function G(e){var t=e.project,n=v().user,r=P("projects"),a=r.updateDocument,s=r.response,i=Object(c.useState)(""),u=Object(l.a)(i,2),o=u[0],j=u[1],d=function(){var e=Object(N.a)(y.a.mark((function e(c){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),r={displayName:n.displayName,photoURL:n.photoURL,content:o,createdAt:p.fromDate(new Date),id:Math.random()},e.next=4,a(t.id,{comments:[].concat(Object(D.a)(t.comments),[r])});case 4:s.error||j("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"project-comments",children:[Object(h.jsx)("h4",{children:"Project Comments"}),Object(h.jsx)("ul",{children:t.comments.length>0&&t.comments.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{className:"comment-author",children:[Object(h.jsx)(U,{src:e.photoURL}),Object(h.jsx)("p",{children:e.displayName})]}),Object(h.jsx)("div",{className:"comment-date",children:Object(h.jsx)("p",{children:Object(q.a)(e.createdAt.toDate(),{addSuffix:!0})})}),Object(h.jsx)("div",{className:"comment-content",children:Object(h.jsx)("p",{children:e.content})})]},e.id)}))}),Object(h.jsxs)("form",{className:"add-comment",onSubmit:d,children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Add new comment:"}),Object(h.jsx)("textarea",{onChange:function(e){return j(e.target.value)},value:o})]}),Object(h.jsx)("button",{className:"btn",children:"Add Comment"})]})]})}function z(e){var t=e.project,n=P("projects").deleteDocument,c=v().user,r=Object(u.n)();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"project-summary",children:[Object(h.jsx)("h2",{className:"page-title",children:t.name}),Object(h.jsxs)("p",{className:"due-date",children:["Project due by ",t.dueDate.toDate().toDateString()]}),Object(h.jsx)("p",{className:"details",children:t.details}),Object(h.jsx)("h4",{children:"Project assigned to:"}),Object(h.jsx)("div",{className:"assigned-users",children:t.assignedUsersList.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(U,{src:e.photoURL})},e.id)}))})]}),c.uid===t.createdBy.id&&Object(h.jsx)("button",{className:"btn",onClick:function(){n(t.id),r("/")},children:"Mark as Complete"})]})}n(71);function B(){var e=function(e,t){var n=Object(c.useState)(null),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(null),u=Object(l.a)(i,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){var n=d.collection(e).doc(t).onSnapshot((function(e){e.data()?(s(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})),b(null)):b("No such document exists")}),(function(e){console.log(e.message),b("failed to get document")}));return function(){return n()}}),[e,t]),{document:a,error:j}}("projects",Object(u.p)().id),t=e.document,n=e.error;return n?Object(h.jsx)("div",{className:"error",children:n}):t?Object(h.jsxs)("div",{className:"project-details",children:[Object(h.jsx)(z,{project:t}),Object(h.jsx)(G,{project:t})]}):Object(h.jsx)("div",{className:"loading",children:"Loading..."})}n(72);var F=n.p+"static/media/temple.c57f882d.svg";function H(){var e=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),O=j[0],p=j[1],h=v().dispatch,x=function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),p(!0),e.prev=2,t=b.currentUser.uid,e.next=6,d.collection("users").doc(t).update({online:!1});case 6:return e.next=8,b.signOut();case 8:h({type:"LOGOUT"}),n||(p(!1),u(null)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n||(u(e.t0.message),p(!1));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{logout:x,error:i,isPending:O}}(),t=e.logout,n=e.isPending,r=v().user;return Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("ul",{children:[!r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("li",{className:"logo",children:[Object(h.jsx)("img",{src:F,alt:"dojo logo"}),Object(h.jsx)("span",{children:"The Dojo"})]}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/login",children:"Login"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/signup",children:"Signup"})})]}),r&&Object(h.jsxs)("li",{children:[!n&&Object(h.jsx)("button",{className:"btn",onClick:t,children:"Logout"}),n&&Object(h.jsx)("button",{className:"btn",disabled:!0,children:"Logging out..."})]})]})})}n(73);var J=n.p+"static/media/dashboard_icon.bc800f3b.svg",Y=n.p+"static/media/add_icon.376e9b6a.svg";function W(){var e=v().user;return Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsxs)("div",{className:"sidebar-content",children:[Object(h.jsxs)("div",{className:"user",children:[Object(h.jsx)(U,{src:e.photoURL}),Object(h.jsxs)("p",{children:["Hey ",e.displayName]})]}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsxs)(i.c,{to:"/",children:[Object(h.jsx)("img",{src:J,alt:"dashboard icon"}),Object(h.jsx)("span",{children:"Dashboard"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(i.c,{to:"/create",children:[Object(h.jsx)("img",{src:Y,alt:"add project icon"}),Object(h.jsx)("span",{children:"New Project"})]})})]})})]})})}n(74);function K(){var e=S("users"),t=e.isPending,n=e.error,c=e.documents;return Object(h.jsxs)("div",{className:"user-list",children:[Object(h.jsx)("h2",{children:"All Users"}),t&&Object(h.jsx)("div",{children:"Loading users..."}),n&&Object(h.jsx)("div",{children:n}),c&&c.map((function(e){return Object(h.jsxs)("div",{className:"user-list-item",children:[e.online&&Object(h.jsx)("span",{className:"online-user"}),Object(h.jsx)("span",{children:e.displayName}),Object(h.jsx)(U,{src:e.photoURL})]},e.id)}))]})}var Q=function(){var e=v(),t=e.authIsReady,n=e.user;return Object(h.jsx)("div",{className:"App",children:t&&Object(h.jsxs)(i.a,{children:[n&&Object(h.jsx)(W,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(H,{}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/",element:n?Object(h.jsx)(T,{}):Object(h.jsx)(u.a,{to:"/login"})}),Object(h.jsx)(u.b,{path:"/create",element:n?Object(h.jsx)(C,{}):Object(h.jsx)(u.a,{to:"/login"})}),Object(h.jsx)(u.b,{path:"/login",element:n?Object(h.jsx)(u.a,{to:"/"}):Object(h.jsx)(_,{})}),Object(h.jsx)(u.b,{path:"/signup",element:n?Object(h.jsx)(u.a,{to:"/"}):Object(h.jsx)(M,{})}),Object(h.jsx)(u.b,{path:"/projects/:id",element:n?Object(h.jsx)(B,{}):Object(h.jsx)(u.a,{to:"/login"})})]})]}),n&&Object(h.jsx)(K,{})]})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{children:Object(h.jsx)(Q,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.01a11715.chunk.js.map