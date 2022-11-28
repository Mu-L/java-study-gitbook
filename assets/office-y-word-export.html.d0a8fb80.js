import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as t,a,b as r,d as n,e as o,r as h}from"./app.5ad9c6e6.js";const c={},l=n('<h1 id="java\u5BFC\u51FA\u751F\u6210word\u6280\u672F\u9009\u578B" tabindex="-1"><a class="header-anchor" href="#java\u5BFC\u51FA\u751F\u6210word\u6280\u672F\u9009\u578B" aria-hidden="true">#</a> java\u5BFC\u51FA\u751F\u6210word\u6280\u672F\u9009\u578B</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u5728\u9879\u76EE\u4E2D\u9700\u8981\u5C06\u4E00\u4E9B\u4FE1\u606F\u5BFC\u51FA\u5230word\u4E2D\uFF0C\u76EE\u524D\u5BFC\u51FA\u5230word\u5927\u81F4\u67096\u79CD\u89E3\u51B3\u65B9\u6848</p><ul><li>jacob</li><li>Apache POI</li><li>java2word</li><li>itext</li><li>JSP\u8F93\u51FA\u6837\u5F0F</li><li>\u4F7F\u7528xml</li><li>aspose.words java <ul><li>\u516C\u53F8.net\u56E2\u961F\u4F7F\u7528\u7684\u6280\u672F\uFF0C\u4E5F\u6709java\u7248\u672C\u3002\u6536\u8D39</li></ul></li></ul><h2 id="_2-\u6280\u672F\u9009\u578B" tabindex="-1"><a class="header-anchor" href="#_2-\u6280\u672F\u9009\u578B" aria-hidden="true">#</a> 2. \u6280\u672F\u9009\u578B</h2><h2 id="pageoffice" tabindex="-1"><a class="header-anchor" href="#pageoffice" aria-hidden="true">#</a> pageoffice</h2><p>\u96C6\u6210\u8FD8\u662F\u633A\u65B9\u4FBF\u7684\uFF0C\u4F46\u662F\u8981\u5B89\u88C5\u5B83\u7684\u8F6F\u4EF6</p><h2 id="_2-1-jacob" tabindex="-1"><a class="header-anchor" href="#_2-1-jacob" aria-hidden="true">#</a> 2.1 Jacob</h2><p>Jacob\u662FJava-COM Bridge\u7684\u7F29\u5199\u3002\u4ED6\u5728java\u4E0E\u5FAE\u8F6F\u7684COM\u7EC4\u4EF6\u4E4B\u95F4\u6784\u5EFA\u4E00\u5EA7\u6865\u6881\u3002\u4F7F\u7528Jacob\u81EA\u5E26\u7684DLL\u52A8\u6001\u94FE\u63A5\u5E93\uFF0C\u5E76\u901A\u8FC7JNI\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E86\u5728Java\u5E73\u53F0\u4E0A\u5BF9COM\u7A0B\u5E8F\u7684\u8C03\u7528\u3002DLL\u52A8\u6001\u94FE\u63A5\u5E93\u7684\u751F\u6210\u9700\u8981windows\u5E73\u53F0\u7684\u652F\u6301\u3002\u8BE5\u65B9\u6848\u53EA\u80FD\u5728windows\u5E73\u53F0\u5B9E\u73B0\uFF0C\u662F\u5176\u5C40\u9650\u6027\u3002</p><p><strong>\u5F0A\u7AEF</strong>\uFF1A\u8BE5\u65B9\u6848<strong>\u53EA\u80FD\u5728windows\u5E73\u53F0\u5B9E\u73B0</strong></p><h3 id="_2-2-apache-poi" tabindex="-1"><a class="header-anchor" href="#_2-2-apache-poi" aria-hidden="true">#</a> 2.2 Apache POI</h3><p>Apache POI\u5305\u62EC\u4E00\u7CFB\u5217\u7684API\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u64CD\u4F5C\u57FA\u4E8EMicroSoft OLE 2 Compound Document Format\u7684\u5404\u79CD\u683C\u5F0F\u6587\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9BAPI\u5728Java\u4E2D\u8BFB\u5199Excel\u3001Word\u7B49\u6587\u4EF6\u3002\u4ED6\u7684excel\u5904\u7406\u5F88\u5F3A\u5927\uFF0C\u5BF9\u4E8Eword\u8FD8\u5C40\u9650\u4E8E\u8BFB\u53D6\uFF0C\u76EE\u524D\u53EA\u80FD\u5B9E\u73B0\u4E00\u4E9B\u7B80\u5355\u6587\u4EF6\u7684\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u8BBE\u7F6E\u6837\u5F0F\u3002</p><p><strong>\u5F0A\u7AEF\uFF1A</strong> <strong>\u53EA\u80FD\u64CD\u4F5C\u7B80\u5355word</strong></p><h3 id="_2-3-java2word" tabindex="-1"><a class="header-anchor" href="#_2-3-java2word" aria-hidden="true">#</a> 2.3 Java2word</h3><p>Java2word\u662F\u4E00\u4E2A\u5728java\u7A0B\u5E8F\u4E2D\u8C03\u7528 MS Office Word \u6587\u6863\u7684\u7EC4\u4EF6(\u7C7B\u5E93)\u3002\u8BE5\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u7EC4\u7B80\u5355\u7684\u63A5\u53E3\uFF0C\u4EE5\u4FBFjava\u7A0B\u5E8F\u8C03\u7528\u4ED6\u7684\u670D\u52A1\u64CD\u4F5CWord \u6587\u6863\u3002 \u8FD9\u4E9B\u670D\u52A1\u5305\u62EC\uFF1A \u6253\u5F00\u6587\u6863\u3001\u65B0\u5EFA\u6587\u6863\u3001\u67E5\u627E\u6587\u5B57\u3001\u66FF\u6362\u6587\u5B57\uFF0C\u63D2\u5165\u6587\u5B57\u3001\u63D2\u5165\u56FE\u7247\u3001\u63D2\u5165\u8868\u683C\uFF0C\u5728\u4E66\u7B7E\u5904\u63D2\u5165\u6587\u5B57\u3001\u63D2\u5165\u56FE\u7247\u3001\u63D2\u5165\u8868\u683C\u7B49\u3002\u586B\u5145\u6570\u636E\u5230\u8868\u683C\u4E2D\u8BFB\u53D6\u8868\u683C\u6570\u636E \uFF0C1.1\u7248\u589E\u5F3A\u7684\u529F\u80FD\uFF1A \u6307\u5B9A\u6587\u672C\u6837\u5F0F\uFF0C\u6307\u5B9A\u8868\u683C\u6837\u5F0F\u3002\u5982\u6B64\uFF0C\u5219\u53EF\u52A8\u6001\u6392\u7248word\u6587\u6863\u3002\u662F\u4E00\u79CD\u4E0D\u9519\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><h3 id="_2-4-itext" tabindex="-1"><a class="header-anchor" href="#_2-4-itext" aria-hidden="true">#</a> 2.4 iText</h3><p>iText\u662F\u8457\u540D\u7684\u5F00\u653E\u6E90\u7801\u7684\u7AD9\u70B9sourceforge\u4E00\u4E2A\u9879\u76EE\uFF0C\u662F\u7528\u4E8E\u751F\u6210PDF\u6587\u6863\u7684\u4E00\u4E2Ajava\u7C7B\u5E93\u3002\u901A\u8FC7iText\u4E0D\u4EC5\u53EF\u4EE5\u751F\u6210PDF\u6216rtf\u7684\u6587\u6863\uFF0C\u800C\u4E14\u53EF\u4EE5\u5C06XML\u3001Html\u6587\u4EF6\u8F6C\u5316\u4E3APDF\u6587\u4EF6\u3002\u529F\u80FD\u5F3A\u5927\u3002</p><h3 id="_2-5-jsp\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_2-5-jsp\u8F93\u51FA" aria-hidden="true">#</a> 2.5 JSP\u8F93\u51FA</h3><p>JSP\u8F93\u51FA\u6837\u5F0F\uFF0C\u8BE5\u65B9\u6848\u5B9E\u73B0\u7B80\u5355\uFF0C\u4F46\u662F\u5904\u7406\u6837\u5F0F\u6709\u70B9\u7F3A\u9677\uFF0C\u7B80\u5355\u7684\u5BFC\u51FA\u53EF\u4EE5\u4F7F\u7528\u3002</p><h3 id="_2-6\u4F7F\u7528xml" tabindex="-1"><a class="header-anchor" href="#_2-6\u4F7F\u7528xml" aria-hidden="true">#</a> 2.6\u4F7F\u7528xml</h3><p>\u7528XML\u505A\u5C31\u5F88\u7B80\u5355\u4E86\u3002</p><p>Word\u4ECE2003\u5F00\u59CB\u652F\u6301XML\u683C\u5F0F\uFF0C\u64CD\u4F5C\u6D41\u7A0B</p><ul><li>\u5148\u7528office2003\u6216\u80052007\u7F16\u8F91\u597Dword\u7684\u6837\u5F0F\uFF0C\u7136\u540E\u53E6\u5B58\u4E3Axml\uFF0C</li><li>\u5C06xml\u7FFB\u8BD1\u4E3AFreeMarker\u6A21\u677F\uFF0C</li><li>\u6700\u540E\u7528java\u6765\u89E3\u6790FreeMarker\u6A21\u677F\u5E76\u8F93\u51FADoc\u3002</li></ul><p>\u7ECF\u6D4B\u8BD5\u8FD9\u6837\u65B9\u5F0F\u751F\u6210\u7684word\u6587\u6863\u5B8C\u5168\u7B26\u5408office\u6807\u51C6\uFF0C\u6837\u5F0F\u3001\u5185\u5BB9\u63A7\u5236\u975E\u5E38\u4FBF\u5229\uFF0C\u6253\u5370\u4E5F\u4E0D\u4F1A\u53D8\u5F62\uFF0C\u751F\u6210\u7684\u6587\u6863\u548Coffice\u4E2D\u7F16\u8F91\u6587\u6863\u5B8C\u5168\u4E00\u6837\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',25),s={href:"https://www.cnblogs.com/lcngu/p/5247179.html",target:"_blank",rel:"noopener noreferrer"},p=o("java\u5BFC\u51FA\u751F\u6210word"),f={href:"https://blog.csdn.net/qq_36961530/article/details/72628028",target:"_blank",rel:"noopener noreferrer"},_=o("java\u751F\u6210word\u548Cpdf\u7684\u51E0\u79CD\u65B9\u6CD5\u7684\u4F18\u7F3A\u70B9\u5BF9\u6BD4");function x(u,w){const e=h("ExternalLinkIcon");return d(),t("div",null,[l,a("p",null,[a("a",s,[p,r(e)])]),a("p",null,[a("a",f,[_,r(e)])])])}const m=i(c,[["render",x],["__file","office-y-word-export.html.vue"]]);export{m as default};