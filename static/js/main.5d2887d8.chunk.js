(this.webpackJsonpfanatico=this.webpackJsonpfanatico||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},46:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),s=a(2),m=a(10),i=Object(n.createContext)(),o=function(e,t){var a=e.article,c=Object(n.useContext)(i).setCurrentArticle;return r.a.createElement(s.b,{to:"/news/".concat(a.title),className:"article",onClick:function(e){c(a.title)}},r.a.createElement("div",{className:"article-img"},r.a.createElement("img",{src:a.urlToImage?a.urlToImage:"http://newsboss.in/img/3/1.jpg",alt:""})),r.a.createElement("div",{className:"article-desc"},r.a.createElement("div",{className:"article-desc-heading"},r.a.createElement("h1",null,a.title))))},u=function(e){var t=e.article,a=Object(n.useContext)(i).setCurrentArticle;return r.a.createElement(s.b,{to:"/news/".concat(t.title),className:"article-main",onClick:function(e){a(t.title)}},r.a.createElement("div",{className:"article-main-img"},r.a.createElement("img",{src:t.urlToImage?t.urlToImage:"http://newsboss.in/img/3/1.jpg",alt:""})),r.a.createElement("div",{className:"article-main-desc"},r.a.createElement("div",{className:"article-main-desc-heading"},r.a.createElement("h1",null,t.title)),r.a.createElement("div",{className:"article-main-desc-p"},r.a.createElement("p",null,t.description))))},E=function(e){var t=e.event;return r.a.createElement("div",{className:"event"},r.a.createElement("p",null,t.strEvent),r.a.createElement("p",{className:"small"},"Starts at: ".concat(t.strTime)))},p=function(e){var t=e.event;return r.a.createElement("div",{className:"event"},r.a.createElement("p",null,t.strEvent),r.a.createElement("p",{className:"small"},"Result: ".concat(t.intHomeScore,"-").concat(t.intAwayScore)))},d=Object(n.createContext)(),f=function(){var e=Object(n.useContext)(d),t=e.events,a=e.pastEvents;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Today's events"),r.a.createElement("div",{className:"events"},t.map((function(e,t){return t<8?r.a.createElement(E,{key:e.idEvent,event:e}):""}))),r.a.createElement("h1",null,"Last year on this day"),r.a.createElement("div",{className:"events"},a.map((function(e,t){return t<5?r.a.createElement(p,{key:e.idEvent,event:e}):""}))))},v=a(12),g={background:"#e1b12c",color:"#f5f6fa"},b=function(){return r.a.createElement("ul",{className:"list"},r.a.createElement("li",{className:"list-item"},r.a.createElement(s.c,{to:"/",className:"list-item-link",style:g,activeClassName:"active"},"Home")),r.a.createElement("li",{className:"list-item"},r.a.createElement(s.c,{to:"/news",className:"list-item-link",activeClassName:"active"},"News")),r.a.createElement("li",{className:"list-item"},r.a.createElement(s.c,{to:"/football",className:"list-item-link",activeClassName:"active"},"Football")))},h=function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){window.innerWidth>"500"&&c(!0)}),[]),r.a.createElement("nav",{className:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navigation-logo"},r.a.createElement("h1",null,"Fanatico"),r.a.createElement("div",{className:"bars",onClick:function(){c(!a)}},r.a.createElement("i",{className:"fas fa-bars"}))),a&&r.a.createElement(b,null),r.a.createElement("div",{className:"navigation-search"},r.a.createElement("input",{type:"text",className:"navigation-search-input",placeholder:"Search..."}))))},N=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"#",className:"twitter"},r.a.createElement("i",{className:"fab fa-twitter"})," Twitter"),r.a.createElement("a",{href:"#",className:"fb"},r.a.createElement("i",{className:"fab fa-facebook"})," Facebook"),r.a.createElement("a",{href:"#",className:"ig"},r.a.createElement("i",{className:"fab fa-instagram"})," Instagram"),r.a.createElement("a",{href:"#",className:"yt"},r.a.createElement("i",{className:"fab fa-youtube"})," Youtube")),r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"#"},"Home"),r.a.createElement("a",{href:"#"},"News"),r.a.createElement("a",{href:"#"},"Football"),r.a.createElement("a",{href:"#"},"Basketball"),r.a.createElement("a",{href:"#"},"Formula"),r.a.createElement("a",{href:"#"},"Fighting")),r.a.createElement("div",{className:"poweredBy"},r.a.createElement("p",null,"Powered By ",r.a.createElement("a",{href:"https://newsapi.org/"},"NewsAPI.org")," and",r.a.createElement("a",{href:"https://www.thesportsdb.com"}," thesportsdb.com"))),r.a.createElement("div",{className:"copyright"},"Copyright 2019 \xa9 Faruk Obradovi\u0107"))))},y=a(14),w=a.n(y),C=function(){var e=Object(n.useContext)(i),t=e.searchNews,a=e.news,c=Object(n.useContext)(d),l=c.setTodaysEvents,s=c.setPastEvents;return Object(n.useEffect)((function(){var e=new Date,a=e.getDate(),n=e.getMonth()+1,r=e.getFullYear(),c="".concat(r,"-").concat(n,"-").concat(a),m="".concat(r-1,"-").concat(n,"-").concat(a);t(),l(c),s(m)}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"section-main"},r.a.createElement("div",{className:"section-main-left"},r.a.createElement("div",{className:"section-main-left-newsGridFlex"},a.map((function(e,t){return 0===t?r.a.createElement(u,{key:w.a.v4(),article:e}):t<10?r.a.createElement(o,{key:w.a.v4(),article:e}):""})))),r.a.createElement("div",{className:"section-main-right"},r.a.createElement(f,null)))),r.a.createElement(N,null))},O={marginTop:"1rem",cursor:"pointer",textDecoration:"underline"},j=function(e){e.article;var t=Object(n.useContext)(i).currentArticle;return r.a.createElement("div",{className:"article-news"},r.a.createElement("div",{className:"source"},"Source: ".concat(t.source.name)),r.a.createElement("h1",null,t.title),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:null===t.urlToImage?"http://newsboss.in/img/3/1.jpg":t.urlToImage,alt:""})),r.a.createElement("p",{className:"description"},t.description),r.a.createElement("p",{className:"content"},t.content),r.a.createElement("p",{onClick:function(){window.open(t.url,"_blank")},style:O},"More info here "),r.a.createElement("p",{className:"author"},r.a.createElement("i",{className:"fas fa-user"})," ",t.author?t.author:"Unknown author"))},T=function(){Object(n.useContext)(i).currentArticle;return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"section-main"},r.a.createElement("div",{className:"section-main-left"},r.a.createElement(j,null)),r.a.createElement("div",{className:"section-main-right"},r.a.createElement(f,null)))),r.a.createElement(N,null))},_={textDecoration:"none"},x=Object(m.f)((function(e){var t=e.article,a=Object(n.useContext)(i).setCurrentArticle;return r.a.createElement("div",{className:"articles-grid-news"},r.a.createElement("div",{className:"art"},r.a.createElement("div",{className:"image",onClick:function(e){a(e.target.parentElement.nextSibling.firstElementChild.textContent)}},r.a.createElement("img",{src:t.urlToImage?t.urlToImage:"http://newsboss.in/img/3/1.jpg",alt:""})),r.a.createElement("div",{className:"desc"},r.a.createElement(s.b,{to:"/news/".concat(t.title),style:_},r.a.createElement("h1",{onClick:function(e){a(e.target.textContent)}},t.title)),r.a.createElement("p",null,t.description))))})),k=function(){var e=Object(n.useContext)(i).news;return r.a.createElement(n.Fragment,null,r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"section-main"},r.a.createElement("div",{className:"section-main-left"},e.map((function(e){return r.a.createElement(x,{key:w.a.v4(),article:e})}))),r.a.createElement("div",{className:"section-main-right"},r.a.createElement(f,null)))),r.a.createElement(N,null)))},S=function(e){var t=e.league,a=Object(n.useContext)(d),c=(a.currentLeague,a.getLeagueByID);return r.a.createElement(s.b,{to:"/league/".concat(t.idLeague),className:"card",id:t.idLeague,onClick:function(){c(t.idLeague)}},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"http://pngimg.com/uploads/football/football_PNG52789.png",alt:""})),r.a.createElement("h1",null,t.strLeague))},L=function(){var e=Object(n.useContext)(d),t=e.getLeagues,a=e.leagues;return Object(n.useEffect)((function(){t()}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"section-main"},r.a.createElement("div",{className:"section-main-left"},r.a.createElement("div",{className:"cards"},a.map((function(e){return"Soccer"===e.strSport?r.a.createElement(S,{key:e.idLeague,league:e}):""})))),r.a.createElement("div",{className:"section-main-right"},r.a.createElement(f,null)))),r.a.createElement(N,null))},A=function(e){var t=e.club,a=Object(n.useContext)(d),c=a.setCurrentClub,l=a.getLast5Events,m=a.getNext5Events,i=a.getRoster;return r.a.createElement(s.b,{to:"/club/".concat(t.idTeam),className:"card",onClick:function(){c(t.idTeam),m(t.idTeam),l(t.idTeam),i(t.idTeam)}},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.strTeamBadge,alt:""})),r.a.createElement("h1",null,t.strTeam))},P=function(e){var t=e.info;return r.a.createElement("div",{className:"infos"},r.a.createElement("div",{className:"main-part"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.strLogo?t.strLogo:"http://pngimg.com/uploads/football/football_PNG52789.png",alt:""})),r.a.createElement("div",{className:"desc"},r.a.createElement("h1",null,t.strLeague),r.a.createElement("p",null,"Country: ",r.a.createElement("span",null,t.strCountry)),r.a.createElement("p",null,"Formed year: ",r.a.createElement("span",null,t.intFormedYear)),r.a.createElement("p",{className:"main-desc"},t.strDescriptionEN),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:t.strFacebook},r.a.createElement("i",{className:"fab fa-facebook fb"})),r.a.createElement("a",{href:t.strTwitter},r.a.createElement("i",{className:"fab fa-twitter tw"}))))))},F=function(){var e=Object(n.useContext)(d),t=e.getAllClubsInLeague,a=e.clubs,c=e.currentLeague;return Object(n.useEffect)((function(){var e=window.location.href,a=e.substr(e.lastIndexOf("/")+1);t(a)}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"section-main"},r.a.createElement("div",{className:"section-main-left"},c&&r.a.createElement(P,{key:c.idLeague,info:c}),r.a.createElement("div",{className:"cards"},null!==a?a.map((function(e){return r.a.createElement(A,{key:e.idTeam,club:e})})):"Api Error")),r.a.createElement("div",{className:"section-main-right"},r.a.createElement(f,null)))),r.a.createElement(N,null))},R=function(e){var t=e.event;return r.a.createElement("div",{className:"result"},r.a.createElement("p",null,t.strEvent),r.a.createElement("p",null,"Date: ".concat(t.dateEvent)),r.a.createElement("p",null,"Result: ".concat(t.intHomeScore,"-").concat(t.intAwayScore)))},D=function(e){var t=e.event;return r.a.createElement("div",{className:"result"},r.a.createElement("p",null,t.strEvent),r.a.createElement("p",null,"Date: ".concat(t.dateEvent)))},I={textDecoration:"none",color:"#1e272e"},B=function(e){var t=e.player,a=Object(n.useContext)(d),c=a.setPlayer,l=a.setFormerClubs;return r.a.createElement(s.b,{to:"/player/".concat(t.idPlayer),className:"player",style:I,onClick:function(){c(t.idPlayer),l(t.idPlayer)}},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.strCutout?t.strCutout:"https://cdn4.iconfinder.com/data/icons/football-4/100/jersey_3-512.png",alt:""})),r.a.createElement("p",null,t.strPlayer))},G=function(e){var t=e.currentClub,a=Object(n.useContext)(d),c=a.last5Events,l=a.next5Events,s=a.roster;return r.a.createElement("div",{className:"infos"},r.a.createElement("div",{className:"main-part"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.strTeamBadge,alt:""})),r.a.createElement("div",{className:"desc"},r.a.createElement("h1",null,t.strTeam," ",r.a.createElement("span",null,"(".concat(t.strCountry,")"))),r.a.createElement("p",null,"League: ",r.a.createElement("span",null,t.strLeague)),r.a.createElement("p",null,"Formed year: ",r.a.createElement("span",null,t.intFormedYear)),r.a.createElement("p",null,"Stadium: ",r.a.createElement("span",null,t.strStadium)),r.a.createElement("p",null,"Stadium capacity: ",r.a.createElement("span",null,t.intStadiumCapacity)),r.a.createElement("p",{className:"main-desc"},t.strDescriptionEN),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-facebook fb"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-instagram ig"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-twitter tw"}))))),r.a.createElement("div",{className:"schedule"},r.a.createElement("h1",null,"Schedule"),r.a.createElement("div",{className:"sides"},r.a.createElement("div",{className:"last-5"},r.a.createElement("h1",null,"Last 5 matches"),c&&c.map((function(e){return r.a.createElement(R,{key:e.idEvent,event:e})}))),r.a.createElement("div",{className:"next-5"},r.a.createElement("h1",null,"Next 5 matches"),l&&l.map((function(e){return r.a.createElement(D,{key:e.idEvent,event:e})}))))),r.a.createElement("div",{className:"roster"},r.a.createElement("h1",null,"Team roster"),r.a.createElement("div",{className:"grid"},s&&s.map((function(e){return r.a.createElement(B,{key:e.idPlayer,player:e})})))))},U=function(){var e=Object(n.useContext)(d),t=(e.setCurrentClub,e.currentClub);return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"section-main"},r.a.createElement("div",{className:"section-main-left"},t&&r.a.createElement(G,{currentClub:t})),r.a.createElement("div",{className:"section-main-right"},r.a.createElement(f,null)))),r.a.createElement(N,null))},Y={fontWeight:"400"},H=function(e){var t=e.formerClub;return r.a.createElement("div",{className:"past-club"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.strTeamBadge,alt:""})),r.a.createElement("p",{style:Y},"".concat(t.strFormerTeam,"  ").concat(t.strJoined,"-").concat(t.strDeparted)))},V=function(e){var t=e.player,a=Object(n.useContext)(d).formerClubs;return r.a.createElement("div",{className:"infos"},r.a.createElement("div",{className:"main-part"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.strCutout?t.strCutout:"https://cdn4.iconfinder.com/data/icons/football-4/100/jersey_3-512.png",alt:""})),r.a.createElement("div",{className:"desc"},r.a.createElement("h1",null,t.strPlayer),r.a.createElement("p",null,"Nationatlity: ",r.a.createElement("span",null,t.strNationality)),r.a.createElement("p",null,"Date of birth: ",r.a.createElement("span",null,t.dateBorn)),r.a.createElement("p",null,"Date of debut: ",r.a.createElement("span",null,t.dateSigned)),r.a.createElement("p",null,"Birth location: ",r.a.createElement("span",null,t.strBirthLocation)),r.a.createElement("p",null,"Team: ",r.a.createElement("span",null,t.strTeam)),r.a.createElement("p",null,"Position: ",r.a.createElement("span",null,t.strPosition)),r.a.createElement("p",null,"Height: ",r.a.createElement("span",null,t.strHeight)),r.a.createElement("p",null,"Weight: ",r.a.createElement("span",null,"".concat(t.strWeight," kg"))),r.a.createElement("p",{className:"main-desc"},t.strDescriptionEN),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-facebook fb"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-instagram ig"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fab fa-twitter tw"}))),r.a.createElement("div",{className:"past-clubs"},r.a.createElement("h1",null,"Former teams"),a&&a.map((function(e){return r.a.createElement(H,{key:e.idFormerTeam,formerClub:e})}))))))},W=function(){var e=Object(n.useContext)(d),t=e.player,a=e.formerClubs;return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"section-main"},r.a.createElement("div",{className:"section-main-left"},t&&a&&r.a.createElement(V,{key:t.idPlayer,player:t})),r.a.createElement("div",{className:"section-main-right"},r.a.createElement(f,null)))),r.a.createElement(N,null))},M=(a(46),a(1)),J=a.n(M),X=a(4),K=a(5),q=a.n(K),z=a(15);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=function(e,t){switch(t.type){case"SEARCH_NEWS":return Z({},e,{news:t.payload});case"SET_CURRENT_ARTICLE":return Z({},e,{currentArticle:e.news.find((function(e){return e.title===t.payload}))});default:return e}},ee=function(e){var t=Object(n.useReducer)($,{news:[],currentArticle:null}),a=Object(v.a)(t,2),c=a[0],l=a[1],s=function(){var e=Object(X.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://newsapi.org/v2/everything?domains=espn.com&apiKey=4ab1044088284c12b01219057a75cfd7");case 2:t=e.sent,l({type:"SEARCH_NEWS",payload:t.data.articles});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(i.Provider,{value:{news:c.news,searchNews:s,currentArticle:c.currentArticle,setCurrentArticle:function(e){l({type:"SET_CURRENT_ARTICLE",payload:e})}}},e.children)};function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ne=function(e,t){switch(t.type){case"SET_TODAYS_EVENTS":return ae({},e,{events:t.payload});case"SET_LAST_YEAR_EVENTS":return ae({},e,{pastEvents:t.payload});case"GET_ALL_LEAGUES":return ae({},e,{leagues:t.payload});case"GET_LEAGUE_BY_ID":return ae({},e,{currentLeague:t.payload});case"GET_ALL_CLUBS_IN_LEAGUE_BY_ID":return ae({},e,{clubs:t.payload});case"SET_CURRENT_CLUB":return ae({},e,{currentClub:t.payload});case"GET_LAST_5_EVENTS":return ae({},e,{last5Events:t.payload});case"GET_NEXT_5_EVENTS":return ae({},e,{next5Events:t.payload});case"GET_ROSTER":return ae({},e,{roster:t.payload});case"SET_PLAYER":return ae({},e,{player:t.payload});case"SET_FORMER_CLUBS":return ae({},e,{formerClubs:t.payload});default:return e}},re=function(e){var t=Object(n.useReducer)(ne,{events:[],pastEvents:[],leagues:[],currentLeague:null,clubs:[],currentClub:null,last5Events:null,next5Events:null,roster:null,player:null,formerClubs:null}),a=Object(v.a)(t,2),c=a[0],l=a[1],s=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=".concat(t));case 2:a=e.sent,l({type:"SET_TODAYS_EVENTS",payload:a.data.events});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=".concat(t));case 2:a=e.sent,l({type:"SET_LAST_YEAR_EVENTS",payload:a.data.events});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(X.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php");case 2:t=e.sent,l({type:"GET_ALL_LEAGUES",payload:t.data.leagues});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=".concat(t));case 2:a=e.sent,l({type:"GET_LEAGUE_BY_ID",payload:a.data.leagues[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=".concat(t));case 2:a=e.sent,l({type:"GET_ALL_CLUBS_IN_LEAGUE_BY_ID",payload:a.data.teams});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=".concat(t));case 2:a=e.sent,l({type:"SET_CURRENT_CLUB",payload:a.data.teams[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=".concat(t));case 2:a=e.sent,l({type:"GET_LAST_5_EVENTS",payload:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=".concat(t));case 2:a=e.sent,l({type:"GET_NEXT_5_EVENTS",payload:a.data.events});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=".concat(t));case 2:a=e.sent,l({type:"GET_ROSTER",payload:a.data.player});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=".concat(t));case 2:a=e.sent,l({type:"SET_PLAYER",payload:a.data.players[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(X.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://www.thesportsdb.com/api/v1/json/1/lookupformerteams.php?id=".concat(t));case 2:a=e.sent,l({type:"SET_FORMER_CLUBS",payload:a.data.formerteams});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(d.Provider,{value:{events:c.events,setTodaysEvents:s,pastEvents:c.pastEvents,setPastEvents:m,leagues:c.leagues,getLeagues:i,currentLeague:c.currentLeague,getLeagueByID:o,clubs:c.clubs,getAllClubsInLeague:u,currentClub:c.currentClub,setCurrentClub:E,last5Events:c.last5Events,getLast5Events:p,next5Events:c.next5Events,getNext5Events:f,roster:c.roster,getRoster:g,player:c.player,setPlayer:b,formerClubs:c.formerClubs,setFormerClubs:h}},e.children)};var ce=function(){return r.a.createElement(re,null,r.a.createElement(ee,null,r.a.createElement(s.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:C}),r.a.createElement(m.a,{exact:!0,path:"/news/:name",component:T}),r.a.createElement(m.a,{exact:!0,path:"/news",component:k}),r.a.createElement(m.a,{exact:!0,path:"/football",component:L}),r.a.createElement(m.a,{exact:!0,path:"/league/:name",component:F}),r.a.createElement(m.a,{exact:!0,path:"/club/:name",component:U}),r.a.createElement(m.a,{exact:!0,path:"/player/:name",component:W}))))))};l.a.render(r.a.createElement(ce,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.5d2887d8.chunk.js.map