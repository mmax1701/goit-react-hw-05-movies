"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,r){r.r(t);var n=r(439),c=r(791),i=r(399),a=r(184);t.default=function(){var e=(0,i.lr)(),t=(0,n.Z)(e,2),r=t[0],u=t[1],o=(0,c.useState)([]),s=(0,n.Z)(o,2),l=s[0],h=s[1],d=(0,i.TH)(),f=r.get("query");(0,c.useEffect)((function(){f&&fetch("https://api.themoviedb.org/3/search/movie?api_key=b4edd14713c6281ee6da10d38b062efd&language=en-US&query=".concat(f,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){h(e.results)})).catch((function(e){return console.error("Error fetching data:",e)}))}),[f]);return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u({query:e.target.searchStr.value})},children:[(0,a.jsx)("input",{type:"text",name:"searchStr",required:!0,placeholder:"Enter movie title"}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})}),(0,a.jsx)("div",{children:l&&(0,a.jsx)("ul",{children:l.map((function(e){var t=e.id,r=e.original_title;return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:d},children:r})},t)}))})})]})}}}]);
//# sourceMappingURL=134.d67ad5aa.chunk.js.map