var define,require,esl;!function(n){function e(n,e){d(n,e)||(H[n]=Math.max(H[n]||0,e))}function t(n,e){function t(n){0===n.indexOf(".")&&o.push(n)}var o=[];if("string"==typeof n?t(n):U(n,function(n){t(n)}),o.length>0)throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: "+o.join(", "));var i=Z.waitSeconds;return i&&n instanceof Array&&(F&&clearTimeout(F),F=setTimeout(r,1e3*i)),Y(n,e)}function r(){function n(a,u){if(!i[a]&&!d(a,G)){i[a]=1;var f=L[a];f?(u||!d(a,C)||f.hang)&&(r[a]||(r[a]=1,e.push(a)),U(f.depMs,function(e){n(e.absId,e.hard)})):o[a]||(o[a]=1,t.push(a))}}var e=[],t=[],r={},o={},i={};for(var a in H)H[a]>=G&&n(a,1);if(e.length||t.length)throw new Error("[MODULE_TIMEOUT]Hang: "+(e.join(", ")||"none")+"; Miss: "+(t.join(", ")||"none"))}function o(n){U(V,function(e){U(n,function(n){u(n,e.deps,e.factory)})}),V.length=0}function i(n,e,t){if(null==t&&(null==e?(t=n,n=null):(t=e,e=null,n instanceof Array&&(e=n,n=null))),null!=t){var r,o=window.opera;if(!n&&document.attachEvent&&(!o||"[object Opera]"!==o.toString())){var i=T();r=i&&ee[i.getAttribute("data-src")]}n?u(n,e,t):r?U(r,function(n){u(n,e,t)}):V[0]={deps:e,factory:t}}}function a(){var n=Z.config[this.id];return n&&"object"==typeof n?n:{}}function u(n,e,t){L[n]||(L[n]={id:n,depsDec:e,deps:e||["require","exports","module"],factoryDeps:[],factory:t,exports:{},config:a,state:0,require:I(n),depMs:[],depMkv:{},depRs:[],hang:0},g(n,z))}function f(n){var e=L[n];if(e&&!d(n,B)){var t=e.deps,r=e.factory,o=0;"function"==typeof r&&(o=Math.min(r.length,t.length),!e.depsDec&&r.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,"").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g,function(n,e,r){t.push(r)}));var i=[],a=[];U(t,function(t,r){var u,f,c=R(t),s=S(c.mod,n);s&&!Q[s]?(c.res&&(f={id:t,mod:s,res:c.res},a.push(t),e.depRs.push(f)),u=e.depMkv[s],u||(u={id:c.mod,absId:s,hard:o>r},e.depMs.push(u),e.depMkv[s]=u,i.push(s))):u={absId:s},o>r&&e.factoryDeps.push(f||u)}),g(n,B),l(n),b(i),a.length&&e.require(a,function(){U(e.depRs,function(e){e.absId||(e.absId=S(e.id,n))}),c()})}}function c(){for(var n in H){var e=H[n];e>=C&&(f(n),s(n)),e>=G&&p(n)}}function s(n){function e(n){if(f(n),!d(n,B))return!1;if(d(n,C)||t[n])return!0;t[n]=1;var r=L[n],o=!0;return U(r.depMs,function(n){o=e(n.absId)&&o}),o&&U(r.depRs,function(n){return o=!!n.absId}),o&&g(n,C),t[n]=0,o}var t={};e(n)}function l(e){function t(){if(!r&&o.state===C){r=1;var t=1;if(U(o.factoryDeps,function(n){var e=n.absId;return Q[e]?void 0:(p(e),t=d(e,G))}),t){try{var i=o.factory,a="function"==typeof i?i.apply(n,v(o.factoryDeps,{require:o.require,exports:o.exports,module:o})):i;null!=a&&(o.exports=a),o.invokeFactory=null}catch(u){if(/^\[MODULE_MISS\]"([^"]+)/.test(u.message)){var f=o.depMkv[RegExp.$1];return f&&(f.hard=1),void(r=0)}throw o.hang=1,u}m(e)}}}var r,o=L[e];o.invokeFactory=t}function d(n,e){return L[n]&&L[n].state>=e}function p(n){var e=L[n];e&&e.invokeFactory&&e.invokeFactory()}function v(n,e){var t=[];return U(n,function(n,r){"object"==typeof n&&(n=n.absId),t[r]=e[n]||L[n].exports}),t}function h(n,e,t){if(d(n,e))return void t();var r=W[e][n];r||(r=W[e][n]=[]),r.push(t)}function g(n,e){if(!d(n,e)){var t=L[n];t.state=e,U(W[e][n],function(n){n()}),W[e][n]=null;var r=Z[W[e][":hook"]];"function"==typeof r&&r(t.id,t.deps,t.factory);var o=J[n],i=o&&o[e];U(i,function(n){n(t.id,t.deps,t.factory)})}}function m(n){delete H[n],g(n,G)}function y(n){return L[n]?L[n].state:X[n]?_:P}function b(e,t,r){function o(){if("function"==typeof t&&!i){var r=1;U(e,function(n){return Q[n]?void 0:r=!!d(n,G)}),r&&(i=1,t.apply(n,v(e,Q)))}}var i=0;U(e,function(n){if(!Q[n]&&!d(n,G)){h(n,G,o);var e,t={id:n,load:function(e){X[n]||L[n]||E(n,e)},getModuleState:y};X[n]||L[n]||(U(K,function(n){return e=n(t,c),"undefined"==typeof e}),"string"==typeof e?E(n,e):e!==!1&&(n.indexOf("!")>0?k(n,r):E(n)))}}),o()}function E(e,t){function r(){ee[t]||(ee[t]=[]),ee[t].push(e),$(t,e,function(){if(u){var r;"function"==typeof u.init&&(r=u.init.apply(n,v(f,Q))),null==r&&u.exports&&(r=n,U(u.exports.split("."),function(n){return r=r[n],!!r})),i(e,f,function(){return r||{}})}else o(ee[t]);c()})}X[e]=1;var a=A(e)||e;t=t||w(a+".js");var u=Z.shim[e];u instanceof Array&&(Z.shim[e]=u={deps:u});var f=u&&(u.deps||[]);f?(U(f,function(n){Z.shim[n]||(Z.shim[n]={})}),Y(f,r)):r()}function k(n,e){function t(e){f.exports=e||!0,m(n)}function r(r){var o=e?L[e].require:Y;r.load(u.res,o,t,a.call({id:n}))}var i=A(n);if(i)return void E(i);var u=R(n),f={id:n,state:B};L[n]=f,t.fromText=function(n,e){new Function(e)(),o([n])},r(Y(u.mod))}function x(n,e){var t=[];for(var r in n)n.hasOwnProperty(r)&&t.push({k:r,v:n[r],reg:"*"===r&&e?/^/:j(r)});return t.sort(N),t}function M(){function n(n){n instanceof RegExp?ae.push([n,a]):ie[q(n)]=S(a)}Z.baseUrl=Z.baseUrl.replace(/\/$/,"")+"/",te=x(Z.paths),oe=x(Z.map,1),U(oe,function(n){n.v=x(n.v)});var e=oe[oe.length-1];e&&"*"===e.k&&U(oe,function(n){n!=e&&(n.v=n.v.concat(e.v))});var t={},r=Z.packages.length;for(re=[];r--;){var o,i=Z.packages[r];switch(typeof i){case"string":o={name:i.split("/")[0],location:i};break;case"object":o={name:i.name,location:i.location,main:i.main}}t[o.name]||(t[o.name]=1,o.location=o.location||o.name,o.main=(o.main||"main").replace(/\.js$/i,""),o.reg=j(o.name),re.push(o))}re.sort(N),ue=x(Z.urlArgs,1),ie={},ae=[];for(var a in Z.bundles)U(Z.bundles[a],n)}function A(n){var e=ie[n];return e||U(ae,function(t){return t[0].test(n)?(e=t[1],!1):void 0}),e}function D(n,e,t){U(e,function(e){return e.reg.test(n)?(t(e.v,e.k,e),!1):void 0})}function w(n,e){var t=/(\.[a-z0-9]+)$/i,r=/(\?[^#]*)$/,o="",i=n,a="";r.test(n)&&(a=RegExp.$1,n=n.replace(r,"")),t.test(n)&&(o=RegExp.$1,i=n.replace(t,"")),null!=e&&(i=S(i,e));var u,f=i;return D(i,te,function(n,e){f=f.replace(e,n),u=1}),u||D(i,re,function(n,e,t){f=f.replace(t.name,t.location)}),/^([a-z]{2,10}:\/)?\//i.test(f)||(f=Z.baseUrl+f),f+=o+a,D(i,ue,function(n){f+=(f.indexOf("?")>0?"&":"?")+n}),f}function I(n){function t(t,r){var o=[],i=[];return U(t,function(t,a){var u=R(t),f=S(u.mod,n),c=u.res,s=f;if(c){var l=f+"!"+c;0!==c.indexOf(".")&&A(l)?f=s=l:s=null}i[a]=s,e(f,r),o.push(f)}),{mods:o,ids:i}}function r(r,i){if("string"==typeof r){if(!o[r]){var a=S(r,n);if(p(a),!d(a,G))throw new Error('[MODULE_MISS]"'+a+'" is not exists!');o[r]=L[a].exports}return o[r]}if(r instanceof Array){var u=t(r,G);b(u.mods,function(){U(u.ids,function(t,o){null==t&&(t=u.ids[o]=S(r[o],n),e(t,G))}),b(u.ids,i,n),c()},n),c()}}var o={};return r.toUrl=function(e){return w(e,n||"")},r.fetch=function(n,e){function r(){o++,o>=n.length&&e()}var o=0,i=t(n,C);U(i.mods,function(n){h(n,C,r)}),b(i.mods),c()},r}function S(n,e){if(!n)return"";e=e||"";var t=R(n);if(!t)return n;var r=t.res,o=O(t.mod,e);if(D(e,oe,function(n){D(o,n,function(n,e){o=o.replace(e,n)})}),o=q(o),r){var i=d(o,G)&&Y(o);r=i&&i.normalize?i.normalize(r,function(n){return S(n,e)}):S(r,e),o+="!"+r}return o}function q(n){return U(re,function(e){var t=e.name;return t===n?(n=t+"/"+e.main,!1):void 0}),n}function O(n,e){if(0!==n.indexOf("."))return n;for(var t=e.split("/").slice(0,-1).concat(n.split("/")),r=[],o=0;o<t.length;o++){var i=t[o];switch(i){case".":break;case"..":r.length&&".."!==r[r.length-1]?r.pop():r.push(i);break;default:i&&r.push(i)}}return r.join("/")}function R(n){var e=n.split("!");return e[0]?{mod:e[0],res:e[1]}:void 0}function j(n){return new RegExp("^"+n+"(/|$)")}function U(n,e){if(n instanceof Array)for(var t=0,r=n.length;r>t&&e(n[t],t)!==!1;t++);}function N(n,e){var t=n.k||n.name,r=e.k||e.name;return"*"===r?-1:"*"===t?1:r.length-t.length}function T(){if(fe)return fe;if(ce&&"interactive"===ce.readyState)return ce;for(var n=document.getElementsByTagName("script"),e=n.length;e--;){var t=n[e];if("interactive"===t.readyState)return ce=t,t}}function $(n,e,t){function r(){var n=o.readyState;("undefined"==typeof n||/^(loaded|complete)$/.test(n))&&(o.onload=o.onreadystatechange=null,o=null,t())}if(!ne[n]){ne[n]=1;var o=document.createElement("script");o.setAttribute("data-src",n),o.src=n,o.async=!0,o.readyState?o.onreadystatechange=r:o.onload=r;var i=Z.onNodeCreated;"function"==typeof i&&i(o,Z,e,n),fe=o,le?se.insertBefore(o,le):se.appendChild(o),fe=null}}var F,L={},P=-1,_=0,z=1,B=2,C=3,G=4,H={},Q={require:t,exports:1,module:1},Y=I(),Z={baseUrl:"./",paths:{},config:{},map:{},packages:[],shim:{},waitSeconds:0,bundles:{},urlArgs:{}};t.version="2.2.0-beta.5",t.toUrl=Y.toUrl,t.fetch=Y.fetch,t.ModuleState={NOT_FOUND:P,LOADING:_,PRE_DEFINED:z,ANALYZED:B,PREPARED:C,DEFINED:G};var J={};t.listenModuleStateChange=function(n,e,t){if("function"==typeof t&&e>=z&&G>=e)if(d(n,e)){var r=L[n];t(r.id,r.deps,r.factory)}else{var o=J[n];o||(o=J[n]={}),o[e]=o[e]||[],o[e].push(t)}},t.unlistenModuleStateChange=function(n,e,t){var r=J[n];if(r)if(t)for(var o=r[e],i=o&&o.length;i--;)o[i]===t&&o.splice(i,1);else r[e]=null};var K=[];t.addLoader=function(n){"function"==typeof n&&K.push(n)};var V=[];i.amd={};var W={};W[B]={":hook":"onModuleAnalyzed"},W[G]={":hook":"onModuleDefined"},W[z]={":hook":"onModulePreDefined"},W[C]={":hook":"onModulePrepared"};var X={},ne={},ee={};t.config=function(n){if(n){for(var e in n){var t=n[e],r=Z[e];if(0===e.indexOf("on"))Z[e]=t;else if("urlArgs"===e&&"string"==typeof t)Z.urlArgs["*"]=t;else if(r instanceof Array)r.push.apply(r,t);else if(null!=r)if("object"==typeof r)for(var o in t)r[o]=t[o];else Z[e]=t}M()}},M();var te,re,oe,ie,ae,ue,fe,ce,se=document.getElementsByTagName("head")[0],le=document.getElementsByTagName("base")[0];le&&(se=le.parentNode),define||(define=i,"function"!=typeof require&&(t.config(require),require=t),"function"!=typeof esl&&(t.config(esl),esl=t),"undefined"!=typeof requirejs&&"function"!=typeof requirejs&&t.config(requirejs));var de;!function(){for(var n=document.getElementsByTagName("script"),e=n.length;e--;){var t=n[e];if(de=t.getAttribute("data-main"))break}}(),de&&setTimeout(function(){t([de])},4)}(this);
require.config({paths:{
  "atomWorkerSandbox/ralltiir": "//tiyu.baidu.com/tiyu/pkg/empty_7be41e2",
  "atomWorkerSandbox/share": "//tiyu.baidu.com/tiyu/pkg/empty_7be41e2",
  "atomWorkerSandbox/changeHref": "//tiyu.baidu.com/tiyu/pkg/empty_7be41e2",
  "atom-tools/atomApi/env": "//tiyu.baidu.com/tiyu/pkg/empty_7be41e2",
  "tiyu/common/component/c-profile.atom": "//tiyu.baidu.com/tiyu/pkg/empty_7be41e2",
  "tiyu/common/component/app.atom": "//tiyu.baidu.com/tiyu/pkg/empty_7be41e2",
  "tiyu/empty/emptyContent.atom": "//tiyu.baidu.com/tiyu/pkg/empty_7be41e2",
  "tiyu/empty/empty.atom": "//tiyu.baidu.com/tiyu/pkg/empty_7be41e2",
  "tiyu/common/component/bigVideo.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/match/scheduleList.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/match/newsList.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/match/videoList.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "atom-tools/atomApi/atomRequire": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/common/component/c-rank-basketball.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/common/component/c-rank-football.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/match/rankList.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/common/component/c-olympics-star-item.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/match/player.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/match/matchContent.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/match/match.atom": "//tiyu.baidu.com/tiyu/pkg/match_8e83cb4",
  "tiyu/common/util/request": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "atomWorkerSandbox/masterRequire": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/common/component/topBar.atom": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "atomWorkerSandbox/watchScroll": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "atomWorkerSandbox/scrollTo": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/common/util/update": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/common/component/c-grouplist-sticky.atom": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/common/component/scheduleItem.atom": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/common/component/c-pull-refresh.atom": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/live/feedList.atom": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/common/component/c-loading.atom": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/common/component/c-loading-bd.atom": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/live/tabsContent.atom": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "tiyu/live/live.atom": "//tiyu.baidu.com/tiyu/pkg/live_ad25208",
  "atomWorkerSandbox/request": "//tiyu.baidu.com/static/atomWorkerSandbox/request_b81142c",
  "tiyu/common/component/singleNews.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/liveHeader.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/smallVideo.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/multiNews.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/textNews.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/videoList.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/analysis.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/c-popup.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/liveList.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/c-battle.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/c-player-compare.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/c-basketball-first.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/c-football-statistics.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/c-basketball-statistics.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/matchStatus.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/msgList.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/chatRoom.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/livePlay.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/liveContent.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/c-share.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/header.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/chatBox.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/livedetail/livedetail.atom": "//tiyu.baidu.com/tiyu/pkg/livedetail_ed0ffb6",
  "tiyu/common/component/c-carousel.atom": "//tiyu.baidu.com/tiyu/pkg/news_6732f07",
  "tiyu/common/component/c-scroll.atom": "//tiyu.baidu.com/tiyu/pkg/news_6732f07",
  "tiyu/common/ui/LazyLoad/LazyLoad.atom": "//tiyu.baidu.com/tiyu/pkg/news_6732f07",
  "tiyu/news/feedList.atom": "//tiyu.baidu.com/tiyu/pkg/news_6732f07",
  "tiyu/news/tabsContent.atom": "//tiyu.baidu.com/tiyu/pkg/news_6732f07",
  "tiyu/news/news.atom": "//tiyu.baidu.com/tiyu/pkg/news_6732f07",
  "tiyu/common/component/c-honor.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/common/component/weibo.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/player/momentList.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/player/videoList.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/common/component/c-player-score-basketball.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/common/component/c-player-score-football.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/common/component/c-player-career-football.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/player/playerInfo.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/player/playerContent.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/player/player.atom": "//tiyu.baidu.com/tiyu/pkg/player_89ea73e",
  "tiyu/common/component/c-like.atom": "//tiyu.baidu.com/tiyu/pkg/newsdetail_c246ef3",
  "tiyu/common/component/c-tags.atom": "//tiyu.baidu.com/tiyu/pkg/newsdetail_c246ef3",
  "tiyu/common/component/c-recommend.atom": "//tiyu.baidu.com/tiyu/pkg/newsdetail_c246ef3",
  "tiyu/newsdetail/newsContent.atom": "//tiyu.baidu.com/tiyu/pkg/newsdetail_c246ef3",
  "tiyu/common/component/topTitle.atom": "//tiyu.baidu.com/tiyu/pkg/newsdetail_c246ef3",
  "tiyu/newsdetail/newsdetail.atom": "//tiyu.baidu.com/tiyu/pkg/newsdetail_c246ef3",
  "tiyu/common/component/c-olympics-china-score-item.atom": "//tiyu.baidu.com/tiyu/common/component/c-olympics-china-score-item.atom_6b8cae9",
  "tiyu/common/component/c-olympics-nation-rank-list.atom": "//tiyu.baidu.com/tiyu/common/component/c-olympics-nation-rank-list.atom_09c8df6",
  "tiyu/common/component/c-olympics-schedule-item.atom": "//tiyu.baidu.com/tiyu/common/component/c-olympics-schedule-item.atom_6d82557",
  "tiyu/common/component/Layout.atom": "//tiyu.baidu.com/tiyu/common/component/Layout.atom_e0965ce",
  "tiyu/common/ui/ScrollPos/ScrollPos.atom": "//tiyu.baidu.com/tiyu/common/ui/ScrollPos/ScrollPos.atom_9dbfc49",
  "tiyu/common/ui/ShowLog/ShowLog.atom": "//tiyu.baidu.com/tiyu/pkg/videodetail_4a8283a",
  "tiyu/videodetail/videoPlay.atom": "//tiyu.baidu.com/tiyu/pkg/videodetail_4a8283a",
  "tiyu/videodetail/videoBanner.atom": "//tiyu.baidu.com/tiyu/pkg/videodetail_4a8283a",
  "tiyu/videodetail/videoMatch.atom": "//tiyu.baidu.com/tiyu/pkg/videodetail_4a8283a",
  "tiyu/videodetail/videoDetail.atom": "//tiyu.baidu.com/tiyu/pkg/videodetail_4a8283a",
  "tiyu/common/ui/SmoothScroll/SmoothScroll.atom": "//tiyu.baidu.com/tiyu/common/ui/SmoothScroll/SmoothScroll.atom_b370da7",
  "tiyu/matchList/matchListContent.atom": "//tiyu.baidu.com/tiyu/pkg/matchList_ab016c7",
  "tiyu/matchList/matchList.atom": "//tiyu.baidu.com/tiyu/pkg/matchList_ab016c7",
  "tiyu/olympics/pyeongchang/home/chinaScore.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/chinaScore.atom_3feb9a7",
  "tiyu/olympics/pyeongchang/home/collection.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/collection.atom_8f0210c",
  "tiyu/olympics/pyeongchang/home/focus.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/focus.atom_965cf79",
  "tiyu/olympics/pyeongchang/home/medalRankList.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/medalRankList.atom_d1d7dd9",
  "tiyu/olympics/pyeongchang/home/player.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/player.atom_8df76e6",
  "tiyu/olympics/pyeongchang/home/news.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/news.atom_5db63f3",
  "tiyu/olympics/pyeongchang/home/schedule.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/schedule.atom_6a9ce0a",
  "tiyu/olympics/pyeongchang/home/mainList.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/mainList.atom_d67f968",
  "tiyu/olympics/pyeongchang/home/playBack.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/playBack.atom_9049e08",
  "tiyu/olympics/pyeongchang/home/homeContent.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/homeContent.atom_d4f8c14",
  "tiyu/olympics/pyeongchang/home/home.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/home/home.atom_ab72f1f",
  "tiyu/olympics/pyeongchang/match/overview.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/match/overview.atom_a3f3cce",
  "tiyu/olympics/pyeongchang/match/news.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/match/news.atom_638f7fe",
  "tiyu/olympics/pyeongchang/match/video.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/match/video.atom_1524314",
  "tiyu/olympics/pyeongchang/match/nationTeam.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/match/nationTeam.atom_303a499",
  "tiyu/olympics/pyeongchang/match/schedule.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/match/schedule.atom_cba07b7",
  "tiyu/olympics/pyeongchang/match/matchContent.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/match/matchContent.atom_eb8d19a",
  "tiyu/olympics/pyeongchang/match/match.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/match/match.atom_43be68e",
  "tiyu/olympics/pyeongchang/player/news.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/player/news.atom_c0c76f1",
  "tiyu/olympics/pyeongchang/player/overview.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/player/overview.atom_910262e",
  "tiyu/olympics/pyeongchang/player/video.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/player/video.atom_d66b654",
  "tiyu/olympics/pyeongchang/player/schedule.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/player/schedule.atom_f61aaf6",
  "tiyu/olympics/pyeongchang/player/playerContent.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/player/playerContent.atom_e893e54",
  "tiyu/olympics/pyeongchang/player/player.atom": "//tiyu.baidu.com/tiyu/olympics/pyeongchang/player/player.atom_0d67931",
  "tiyu/team/memberList.atom": "//tiyu.baidu.com/tiyu/pkg/team_e72482c",
  "tiyu/team/scheduleList.atom": "//tiyu.baidu.com/tiyu/pkg/team_e72482c",
  "tiyu/team/momentList.atom": "//tiyu.baidu.com/tiyu/pkg/team_e72482c",
  "tiyu/team/videoList.atom": "//tiyu.baidu.com/tiyu/pkg/team_e72482c",
  "tiyu/team/teamInfo.atom": "//tiyu.baidu.com/tiyu/pkg/team_e72482c",
  "tiyu/team/teamContent.atom": "//tiyu.baidu.com/tiyu/pkg/team_e72482c",
  "tiyu/team/team.atom": "//tiyu.baidu.com/tiyu/pkg/team_e72482c",
  "tiyu/tv/tvVideo.atom": "//tiyu.baidu.com/tiyu/pkg/tv_0d7679d",
  "tiyu/tv/tv.atom": "//tiyu.baidu.com/tiyu/pkg/tv_0d7679d",
  "tiyu/tvList/tvListContent.atom": "//tiyu.baidu.com/tiyu/pkg/tvList_d0236a7",
  "tiyu/tvList/tvList.atom": "//tiyu.baidu.com/tiyu/pkg/tvList_d0236a7",
  "tiyu/video/feedList.atom": "//tiyu.baidu.com/tiyu/pkg/video_c9571b5",
  "tiyu/common/const": "//tiyu.baidu.com/tiyu/pkg/video_c9571b5",
  "tiyu/video/tabsContent.atom": "//tiyu.baidu.com/tiyu/pkg/video_c9571b5",
  "tiyu/video/video.atom": "//tiyu.baidu.com/tiyu/pkg/video_c9571b5",
  "fusion-worker/amd_modules/@baidu/pmd": "//tiyu.baidu.com/static/fusion-worker/amd_modules/@baidu/pmd_e29a8fa",
  "fusion-worker/amd_modules/@baidu/pmd/dist/pmd": "//tiyu.baidu.com/static/fusion-worker/amd_modules/@baidu/pmd/dist/pmd_c5b6233",
  "fusion-worker/dist/b-carousel/b-carousel": "//tiyu.baidu.com/static/fusion-worker/dist/b-carousel/b-carousel_85986fa",
  "fusion-worker/dist/b-city/cityInfo": "//tiyu.baidu.com/static/fusion-worker/dist/b-city/cityInfo_eb30b27",
  "fusion-worker/dist/b-dialog/b-dialog": "//tiyu.baidu.com/static/fusion-worker/dist/b-dialog/b-dialog_23fd408",
  "fusion-worker/dist/b-dropdownmenu/b-dropdownmenu": "//tiyu.baidu.com/static/fusion-worker/dist/b-dropdownmenu/b-dropdownmenu_6535dd1",
  "fusion-worker/dist/b-filter/b-filter": "//tiyu.baidu.com/static/fusion-worker/dist/b-filter/b-filter_a573fb9",
  "fusion-worker/dist/b-grouplist-sticky/b-grouplist-sticky": "//tiyu.baidu.com/static/fusion-worker/dist/b-grouplist-sticky/b-grouplist-sticky_4793f65",
  "fusion-worker/dist/b-grouplist/b-grouplist": "//tiyu.baidu.com/static/fusion-worker/dist/b-grouplist/b-grouplist_c8dec76",
  "fusion-worker/dist/b-imgfall/iscroll": "//tiyu.baidu.com/static/fusion-worker/dist/b-imgfall/iscroll_d8e8352",
  "fusion-worker/dist/b-lightbox/b-lightbox": "//tiyu.baidu.com/static/fusion-worker/dist/b-lightbox/b-lightbox_546b506",
  "fusion-worker/dist/b-imgfall/b-imgfall": "//tiyu.baidu.com/static/fusion-worker/dist/b-imgfall/b-imgfall_d2bc9f4",
  "fusion-worker/dist/b-infinitescroll/b-infinitescroll": "//tiyu.baidu.com/static/fusion-worker/dist/b-infinitescroll/b-infinitescroll_9261011",
  "fusion-worker/dist/deps/iscroll": "//tiyu.baidu.com/static/fusion-worker/dist/deps/iscroll_542deb0",
  "fusion-worker/dist/b-navs/b-navs": "//tiyu.baidu.com/static/fusion-worker/dist/b-navs/b-navs_08651bc",
  "fusion-worker/dist/b-player/b-player": "//tiyu.baidu.com/static/fusion-worker/dist/b-player/b-player_ab65751",
  "fusion-worker/dist/b-player/popup": "//tiyu.baidu.com/static/fusion-worker/dist/b-player/popup_d2a9bca",
  "fusion-worker/dist/b-pull-refresh/b-pull-refresh": "//tiyu.baidu.com/static/fusion-worker/dist/b-pull-refresh/b-pull-refresh_b62a5e6",
  "fusion-worker/dist/b-scroll/bdscroll": "//tiyu.baidu.com/static/fusion-worker/dist/b-scroll/bdscroll_1cf6f66",
  "fusion-worker/dist/b-scroll/scroll": "//tiyu.baidu.com/static/fusion-worker/dist/b-scroll/scroll_d990691",
  "fusion-worker/dist/b-scroll/b-scroll": "//tiyu.baidu.com/static/fusion-worker/dist/b-scroll/b-scroll_4e9e749",
  "fusion-worker/dist/b-tabs/b-tabs": "//tiyu.baidu.com/static/fusion-worker/dist/b-tabs/b-tabs_4aac9d8",
  "fusion-worker/dist/b-tabs2/b-tabs2": "//tiyu.baidu.com/static/fusion-worker/dist/b-tabs2/b-tabs2_68b38ac",
  "fusion-worker/dist/b-tags/b-tags": "//tiyu.baidu.com/static/fusion-worker/dist/b-tags/b-tags_3f7be8d",
  "fusion-worker/dist/b-toast/b-toast": "//tiyu.baidu.com/static/fusion-worker/dist/b-toast/b-toast_364dd9f",
  "fusion-best-worker/fusion": "//tiyu.baidu.com/static/fusion-best-worker/fusion_f523102",
  "fusion-best-worker/index": "//tiyu.baidu.com/static/fusion-best-worker/index_4627e26",
  "tiyu/common/ui/LazyLoad/b-lazyLoad": "//tiyu.baidu.com/tiyu/common/ui/LazyLoad/b-lazyLoad_6135c73",
  "tiyu/common/ui/ScrollPos/b-scrollPos": "//tiyu.baidu.com/tiyu/common/ui/ScrollPos/b-scrollPos_4b3d873",
  "tiyu/common/ui/ShowLog/b-showLog": "//tiyu.baidu.com/tiyu/common/ui/ShowLog/b-showLog_def61fe",
  "tiyu/common/ui/SmoothScroll/b-smoothScroll": "//tiyu.baidu.com/tiyu/common/ui/SmoothScroll/b-smoothScroll_499b306"
}});