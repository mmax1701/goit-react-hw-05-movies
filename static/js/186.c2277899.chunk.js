"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(439),i=t(791),s=t(399),c=t(184);n.default=function(){var e=(0,s.UO)().movieId,n=(0,i.useState)(null),t=(0,r.Z)(n,2),u=t[0],a=t[1];return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=b4edd14713c6281ee6da10d38b062efd&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[e]),u?(0,c.jsx)("div",{children:u.results.length>0?(0,c.jsx)("ul",{children:u.results.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,c.jsxs)("li",{children:[(0,c.jsxs)("h3",{children:["Author: ",t]}),(0,c.jsx)("p",{children:r})]},n)}))}):(0,c.jsx)("p",{children:"We don't have any reviews for this movie."})}):(0,c.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=186.c2277899.chunk.js.map