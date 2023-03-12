import{_ as l,W as r,X as t,Y as e,Z as i,$ as n,a0 as o,D as c}from"./framework-0cf5f349.js";const s={},h=o('<h1 id="微服务-看法与思考" tabindex="-1"><a class="header-anchor" href="#微服务-看法与思考" aria-hidden="true">#</a> 微服务 - 看法与思考</h1><h2 id="_1-微服务" tabindex="-1"><a class="header-anchor" href="#_1-微服务" aria-hidden="true">#</a> 1. 微服务</h2><h3 id="_1-1-为什么使用微服务" tabindex="-1"><a class="header-anchor" href="#_1-1-为什么使用微服务" aria-hidden="true">#</a> 1.1 为什么使用微服务</h3><ul><li>大型服务 <ul><li>单例服务如果流量大了就抗不住，微服务可以加机器搞流量</li><li>加机器的地方，最理想的就是：弹性伸缩，流量下去就缩容，流量上来就扩容，能最恰好的使用资源</li><li>传统的巨大单体应用程序在部署和运行时，需要单台服务器具有大量内存和其他资源</li></ul></li><li>规范化 <ul><li>规范化，大家用同一套框架规范，可以沉淀和深入技术，还可以培养技术氛围</li></ul></li><li>业务拆分 <ul><li>业务拆分，解耦业务，各司其职</li></ul></li></ul><blockquote><p>不过如果你是搞个小服务，内部服务，微服务还是太重，甚至 java 都重，可以用其它语言 python node 写几行代码就行</p></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',6),d={href:"https://segmentfault.com/a/1190000041223236",target:"_blank",rel:"noopener noreferrer"};function _(u,f){const a=c("ExternalLinkIcon");return r(),t("div",null,[h,e("p",null,[e("a",d,[i("为什么要使用微服务"),n(a)])])])}const p=l(s,[["render",_],["__file","ms-x-view.html.vue"]]);export{p as default};