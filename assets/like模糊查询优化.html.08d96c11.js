import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as i,a as e,b as t,e as d,d as n,r as l}from"./app.5d5ee434.js";const o={},c=d('<h1 id="like\u6A21\u7CCA\u67E5\u8BE2\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#like\u6A21\u7CCA\u67E5\u8BE2\u4F18\u5316" aria-hidden="true">#</a> like\u6A21\u7CCA\u67E5\u8BE2\u4F18\u5316</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u5728\u4F7F\u7528mysql\u8FDB\u884C\u6A21\u7CCA\u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u5F88\u81EA\u5BB9\u7684\u4F1A\u7528\u5230 like \u8BED\u53E5\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5728\u6570\u91CF\u5C0F\u7684\u65F6\u5019\uFF0C\u4E0D\u5BB9\u6613\u770B\u51FA\u67E5\u8BE2\u6548\u7387\uFF0C<strong>\u4F46\u5728\u6570\u636E\u91CF\u8FBE\u5230\u767E\u4E07\u7EA7\uFF0C\u5343\u4E07\u7EA7\u7684\u65F6\u5019</strong>\uFF0C\u67E5\u8BE2\u7684\u6548\u7387\u5C31\u5F88\u5BB9\u6613\u663E\u73B0\u51FA\u6765\u3002\u8FD9\u4E2A\u65F6\u5019\u67E5\u8BE2\u7684\u6548\u7387\u5C31\u663E\u5F97\u5F88\u91CD\u8981\uFF01</p><p>\u4E00\u822C\u60C5\u51B5\u4E0Blike\u6A21\u7CCA\u67E5\u8BE2\u7684\u5199\u6CD5\u4E3A\uFF08field\u5DF2\u5EFA\u7ACB\u7D22\u5F15\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT `column` FROM `table` WHERE `field` like `%keyword%`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u8BED\u53E5\u7528explain\u89E3\u91CA\u6765\u770B\uFF0CSQL\u8BED\u53E5\u5E76\u672A\u7528\u5230\u7D22\u5F15\uFF0C\u800C\u4E14\u662F\u5168\u8868\u7D22\u5F15\uFF0C\u5982\u679C\u5728\u6570\u636E\u91CF\u8D85\u5927\u7684\u65F6\u5019\uFF0C\u53EF\u60F3\u800C\u77E5\u6700\u540E\u7684\u6548\u7387\u4F1A\u662F\u600E\u4E48\u6837</p><h2 id="_2-\u5BF9\u7167\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-\u5BF9\u7167\u7EC4" aria-hidden="true">#</a> 2. \u5BF9\u7167\u7EC4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT `column` FROM `table` WHERE `field` like &#39;keyword%&#39;; \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\u5199\u6CD5\u7528explain\u89E3\u91CA\u770B\u5230\uFF0CSQL\u8BED\u53E5\u4F7F\u7528\u4E86\u7D22\u5F15\uFF0C\u641C\u7D22\u7684\u6548\u7387\u5927\u5927\u7684\u63D0\u9AD8\u4E86</p><p>\u4F46\u662F\u6709\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u518D\u4F5C\u6A21\u7CCA\u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u5E76\u975E\u8981\u60F3\u67E5\u8BE2\u7684\u5173\u952E\u5B57\u90FD\u5728\u5F00\u5934\uFF0C\u6240\u4EE5\u5982\u679C\u4E0D\u662F\u7279\u522B\u7684\u8981\u6C42\uFF0C&quot;ketwork%&quot;\u5E76\u4E0D\u9002\u5408\u6240\u6709\u7684\u6A21\u7CCA\u67E5\u8BE2</p><h2 id="_3-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 3. \u89E3\u51B3\u65B9\u6848</h2><h3 id="_3-1-locate-substr-str-pos-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-1-locate-substr-str-pos-\u65B9\u6CD5" aria-hidden="true">#</a> 3.1 LOCATE\uFF08&#39;substr&#39;,str,pos\uFF09\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT LOCATE(&#39;xbar&#39;,`foobar`);   \u8FD4\u56DE0 \nSELECT LOCATE(&#39;bar&#39;,`foobarbar`);  \u8FD4\u56DE4\nSELECT LOCATE(&#39;bar&#39;,`foobarbar`,**5**); \u8FD4\u56DE7\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5907\u6CE8\uFF1A</p><ul><li>\u8FD4\u56DEsubstr \u7684str\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u95EE\u9898\uFF0C\u5982\u679Csubstr \u5728str\u4E2D\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE\u503C\u4E3A0.</li><li>\u5982\u679Cpos\u5B58\u5728\uFF0C\u8FD4\u56DEsubstr \u5728\u7B2Cpos\u4E2A\u4F4D\u7F6E\u540E\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u5982\u679Csubstr\u4E2D\u7684str\u4E2D\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE\u503C\u4E3A0</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT `column` FROM `table` WHERE LOCATE(&#39;keyword&#39;, `field`)&gt;0 \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5907\u6CE8\uFF1Akeyword\u662F\u8981\u641C\u7D22\u7684\u5185\u5BB9\uFF0Cfield\u4E3A\u88AB\u5339\u914D\u7684\u5B57\u6BB5\uFF0C\u67E5\u8BE2\u51FA\u6240\u6709\u5B58\u5728keyword\u7684\u6570\u636E</p><h3 id="_3-2-position-substr-in-field-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-2-position-substr-in-field-\u65B9\u6CD5" aria-hidden="true">#</a> 3.2 POSITION(&#39;substr&#39; IN <code>field</code>)\u65B9\u6CD5</h3><p>position\u53EF\u4EE5\u770B\u505A\u662Flocate\u7684\u522B\u540D\uFF0C\u529F\u80FD\u8DDFlocate\u4E00\u6837</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT `column` FROM `table` WHERE POSITION(&#39;keyword&#39; IN `filed`)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-instr-str-substr-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-3-instr-str-substr-\u65B9\u6CD5" aria-hidden="true">#</a> 3.3 INSTR(<code>str</code>,&#39;substr&#39;)\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT `column` FROM `table` WHERE INSTR(`field`, &#39;keyword&#39; )&gt;0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-find-in-set-str1-str2" tabindex="-1"><a class="header-anchor" href="#_3-4-find-in-set-str1-str2" aria-hidden="true">#</a> 3.4 FIND_IN_SET(str1,str2):</h3><p>\u8FD4\u56DEstr2\u4E2Dstr1\u6240\u5728\u7684\u4F4D\u7F6E\u7D22\u5F15\uFF0C\u5176\u4E2Dstr2\u5FC5\u987B\u4EE5&quot;,&quot;\u5206\u5272\u5F00\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT * FROM `person` WHERE FIND_IN_SET(&#39;apply&#39;,`name`);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',26),u={href:"https://yq.aliyun.com/articles/674870",target:"_blank",rel:"noopener noreferrer"},h=n("mysql \u4F18\u5316 - like\u6A21\u7CCA\u67E5\u8BE2\u4F18\u5316");function b(p,v){const a=l("ExternalLinkIcon");return s(),i("div",null,[c,e("p",null,[e("a",u,[h,t(a)])])])}var _=r(o,[["render",b],["__file","like\u6A21\u7CCA\u67E5\u8BE2\u4F18\u5316.html.vue"]]);export{_ as default};
