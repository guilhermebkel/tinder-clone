(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/logo.6a01ceef.svg"},30:function(e,t,n){e.exports=n.p+"static/media/like.542059a4.svg"},31:function(e,t,n){e.exports=n.p+"static/media/dislike.d4ec34e8.svg"},34:function(e,t,n){e.exports=n(64)},39:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),i=(n(39),n(8)),s=n(7),u=n(6),l=n.n(u),p=n(9),m=n(13),d=n(29),f=n.n(d).a.create({baseURL:"https://fake-tinder-app.herokuapp.com"}),h=(n(58),n(12)),E=n.n(h);function v(e){var t=e.history,n=Object(a.useState)(""),c=Object(m.a)(n,2),o=c[0],i=c[1];function s(){return(s=Object(p.a)(l.a.mark(function e(n){var a,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,f.post("/users",{user:o});case 3:a=e.sent,console.log(a),r=a.data.user._id,t.push("/Fake-Tinder/user/".concat(r));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement("img",{src:E.a,alt:"Tinder Logo"}),r.a.createElement("input",{placeholder:"Type your github username...",value:o,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Log in")))}var b=n(30),g=n.n(b),k=n(31),w=n.n(k);n(59);function y(e){var t=e.match,n=Object(a.useState)([]),c=Object(m.a)(n,2),o=c[0],s=c[1];function u(){return(u=Object(p.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("/users/".concat(n,"/likes"),null,{headers:{user:t.params.id}});case 2:e.sent.data.user.match&&alert("Match!");case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function d(){return(d=Object(p.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("/users/".concat(n,"/dislikes"),null,{headers:{user:t.params.id}});case 2:s(o.filter(function(e){return e._id!==n}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(a.useEffect)(function(){function e(){return(e=Object(p.a)(l.a.mark(function e(){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/users",{headers:{user:t.params.id}});case 2:n=e.sent,s(n.data.users);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[t.params.id]),r.a.createElement("div",{className:"main-container"},r.a.createElement(i.b,{to:"/Fake-Tinder/"},r.a.createElement("img",{src:E.a,alt:"Tinder Logo"})),o.length?r.a.createElement("ul",null,o.map(function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("img",{src:e.avatar,alt:""}),r.a.createElement("footer",null,r.a.createElement("strong",null,e.name),r.a.createElement("p",null,e.bio)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:function(){return function(e){return d.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:w.a,alt:"Dislike"})),r.a.createElement("button",{type:"button",onClick:function(){return function(e){return u.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:g.a,alt:"Dislike"}))))})):r.a.createElement("div",{className:"empty"},"Acabou :("))}function x(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{path:"/Fake-Tinder/",exact:!0,component:v}),r.a.createElement(s.a,{path:"/Fake-Tinder/user/:id",component:y}))}var j=function(){return r.a.createElement(x,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{basename:"/Fake-Tinder"},r.a.createElement(s.a,{exact:!0,path:"",component:j})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.c68e0858.chunk.js.map