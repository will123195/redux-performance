(this["webpackJsonpredux-performance"]=this["webpackJsonpredux-performance"]||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},23:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(7),a=n(0),c=n.n(a),l=n(4),i=n.n(l),s=n(3);var u=Object(s.b)((function(e,t){return{color:e.colors[t.n]}}))((function(e){var t=e.n,n=e.color;return c.a.createElement("div",{style:{width:30,height:30,textAlign:"center",padding:10,float:"left",backgroundColor:n},id:"".concat(t),key:"".concat(t)},t)}));var m=Object(s.b)((function(e){return{numColorUpdates:e.numColorUpdates||0,startTime:e.startTime}}))((function(e){for(var t=e.numElements,n=e.numColorUpdates,r=e.startTime,o=(Date.now()-r)/1e3,a=[],l=1;l<=t;l++)a.push(c.a.createElement(u,{key:l,n:l}));return c.a.createElement("div",null,c.a.createElement("h1",{style:{fontWeight:100}},c.a.createElement("span",null,o),"s"),c.a.createElement("div",null,n.toLocaleString()," colors"),c.a.createElement("div",null,Math.floor(n/o)," colors per second"),c.a.createElement("div",{style:{width:500}},a))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=n(6),h={colors:{},startTime:Date.now()};var p=100,v=0,f=Object(d.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COLOR":return Object(o.a)({},e,{colors:Object(o.a)({},e.colors,Object(r.a)({},t.n,t.color))});case"UPDATE_COUNT":var n=t.numColorUpdates;return Object(o.a)({},e,{numColorUpdates:n});default:return e}}));function E(e){e>p&&(e%=p);var t="#".concat(Math.floor(16777215*Math.random()).toString(16));f.dispatch({type:"ADD_COLOR",n:e,color:t}),v++,f.dispatch({type:"UPDATE_COUNT",numColorUpdates:v}),setTimeout((function(){return E(e)}),0)}i.a.render(c.a.createElement(s.a,{store:f},c.a.createElement((function(e){var t=e.numElements;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React Redux"),c.a.createElement(m,{numElements:t}))}),{numElements:p})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}));for(var g=1;g<=p;g++)E(g)}},[[13,1,2]]]);
//# sourceMappingURL=main.75acd808.chunk.js.map