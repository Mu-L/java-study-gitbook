import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a,b as o,d as p,e as l,r as i}from"./app.40d67f5c.js";const c={},r=p(`<h1 id="solr\u914D\u7F6Eik\u5206\u8BCD\u505C\u7528\u8BCD\u4E0E\u6269\u5C55\u8BCD" tabindex="-1"><a class="header-anchor" href="#solr\u914D\u7F6Eik\u5206\u8BCD\u505C\u7528\u8BCD\u4E0E\u6269\u5C55\u8BCD" aria-hidden="true">#</a> Solr\u914D\u7F6Eik\u5206\u8BCD\u505C\u7528\u8BCD\u4E0E\u6269\u5C55\u8BCD</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><h3 id="_1-1-\u505C\u7528\u8BCD" tabindex="-1"><a class="header-anchor" href="#_1-1-\u505C\u7528\u8BCD" aria-hidden="true">#</a> 1.1 \u505C\u7528\u8BCD</h3><p>\u505C\u7528\u8BCD(Stop Words) \uFF0C\u8BCD\u5178\u8BD1\u4E3A\u201C\u7535\u8111\u68C0\u7D22\u4E2D\u7684\u865A\u5B57\u3001\u975E\u68C0\u7D22\u7528\u5B57\u201D\u3002\u5728SEO\u4E2D\uFF0C\u4E3A\u8282\u7701\u5B58\u50A8\u7A7A\u95F4\u548C\u63D0\u9AD8\u641C\u7D22\u6548\u7387\uFF0C\u641C\u7D22\u5F15\u64CE\u5728\u7D22\u5F15\u9875\u9762\u6216\u5904\u7406<strong>\u641C\u7D22\u8BF7\u6C42\u65F6\u4F1A\u81EA\u52A8\u5FFD\u7565\u67D0\u4E9B\u5B57\u6216\u8BCD</strong>\uFF0C\u8FD9\u4E9B\u5B57\u6216\u8BCD\u5373\u88AB\u79F0\u4E3AStop Words(\u505C\u7528\u8BCD)\u3002</p><p>\u505C\u7528\u8BCD\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u76F8\u5F53\u4E8E\u8FC7\u6EE4\u8BCD(Filter Words)\uFF0C\u4E0D\u8FC7\u8FC7\u6EE4\u8BCD\u7684\u8303\u56F4\u66F4\u5927\u4E00\u4E9B\uFF0C\u5305\u542B\u9EC4\u8272\u3001\u653F\u6CBB\u7B49\u654F\u611F\u4FE1\u606F\u7684\u5173\u952E\u8BCD\u90FD\u4F1A\u88AB\u89C6\u505A\u8FC7\u6EE4\u8BCD\u52A0\u4EE5\u5904\u7406\uFF0C\u505C\u7528\u8BCD\u672C\u8EAB\u5219\u6CA1\u6709\u8FD9\u4E2A\u9650\u5236\u3002\u901A\u5E38\u610F\u4E49\u4E0A\uFF0C\u505C\u7528\u8BCD(Stop Words)\u5927\u81F4\u53EF\u5206\u4E3A\u5982\u4E0B\u4E24\u7C7B\uFF1A</p><ul><li><p><strong>\u4F7F\u7528\u5341\u5206\u5E7F\u6CDB\uFF0C\u751A\u81F3\u662F\u8FC7\u4E8E\u9891\u7E41\u7684\u4E00\u4E9B\u5355\u8BCD\u3002</strong></p><p>\u6BD4\u5982\u82F1\u6587\u7684\u201Ci\u201D\u3001\u201Cis\u201D\u3001\u201Cwhat\u201D\uFF0C\u4E2D\u6587\u7684\u201C\u6211\u201D\u3001\u201C\u5C31\u201D\u4E4B\u7C7B\u8BCD\u51E0\u4E4E\u5728\u6BCF\u4E2A\u6587\u6863\u4E0A\u5747\u4F1A\u51FA\u73B0\uFF0C\u67E5\u8BE2\u8FD9\u6837\u7684\u8BCD\u641C\u7D22\u5F15\u64CE\u5C31\u65E0\u6CD5\u4FDD\u8BC1\u80FD\u591F\u7ED9\u51FA\u771F\u6B63\u76F8\u5173\u7684\u641C\u7D22\u7ED3\u679C\uFF0C\u96BE\u4E8E\u7F29\u5C0F\u641C\u7D22\u8303\u56F4\u63D0\u9AD8\u641C\u7D22\u7ED3\u679C\u7684\u51C6\u786E\u6027\uFF0C\u540C\u65F6\u8FD8\u4F1A\u964D\u4F4E\u641C\u7D22\u7684\u6548\u7387\u3002\u56E0\u6B64\uFF0C\u5728\u771F\u6B63\u7684\u5DE5\u4F5C\u4E2D\uFF0CGoogle\u548C\u767E\u5EA6\u7B49\u641C\u7D22\u5F15\u64CE\u4F1A\u5FFD\u7565\u6389\u7279\u5B9A\u7684\u5E38\u7528\u8BCD\uFF0C\u5728\u641C\u7D22\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u4E86\u592A\u591A\u7684\u505C\u7528\u8BCD\uFF0C\u4E5F\u540C\u6837\u6709\u53EF\u80FD\u65E0\u6CD5\u5F97\u5230\u975E\u5E38\u7CBE\u786E\u7684\u7ED3\u679C\uFF0C\u751A\u81F3\u662F\u53EF\u80FD\u5927\u91CF\u6BEB\u4E0D\u76F8\u5173\u7684\u641C\u7D22\u7ED3\u679C\u3002</p></li><li><p><strong>\u6587\u672C\u4E2D\u51FA\u73B0\u9891\u7387\u5F88\u9AD8\uFF0C\u4F46\u5B9E\u9645\u610F\u4E49\u53C8\u4E0D\u5927\u7684\u8BCD\u3002</strong></p><p>\u8FD9\u4E00\u7C7B\u4E3B\u8981\u5305\u62EC\u4E86\u8BED\u6C14\u52A9\u8BCD\u3001\u526F\u8BCD\u3001\u4ECB\u8BCD\u3001\u8FDE\u8BCD\u7B49\uFF0C\u901A\u5E38\u81EA\u8EAB\u5E76\u65E0\u660E\u786E\u610F\u4E49\uFF0C\u53EA\u6709\u5C06\u5176\u653E\u5165\u4E00\u4E2A\u5B8C\u6574\u7684\u53E5\u5B50\u4E2D\u624D\u6709\u4E00\u5B9A\u4F5C\u7528\u7684\u8BCD\u8BED\u3002\u5982\u5E38\u89C1\u7684\u201C\u7684\u201D\u3001\u201C\u5728\u201D\u3001\u201C\u548C\u201D\u3001\u201C\u63A5\u7740\u201D\u4E4B\u7C7B\uFF0C\u6BD4\u5982\u201CSEO\u7814\u7A76\u9662\u662F\u539F\u521B\u7684SEO\u535A\u5BA2\u201D\u8FD9\u53E5\u8BDD\u4E2D\u7684\u201C\u662F\u201D\u3001\u201C\u7684\u201D\u5C31\u662F\u4E24\u4E2A\u505C\u7528\u8BCD</p></li></ul><h3 id="_1-2-\u6269\u5C55\u8BCD" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6269\u5C55\u8BCD" aria-hidden="true">#</a> 1.2 \u6269\u5C55\u8BCD</h3><p>\u57FA\u4E8E\u81EA\u5DF1\u9879\u76EE\u8FDB\u884C\u6269\u5C55\u7684\u4E00\u4E9B\u7279\u5B9A\u8BCD\u8BED</p><h2 id="_2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E" aria-hidden="true">#</a> 2. \u914D\u7F6E</h2><h3 id="_2-1-\u590D\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-1-\u590D\u5236\u6587\u4EF6" aria-hidden="true">#</a> 2.1 \u590D\u5236\u6587\u4EF6</h3><p>\u5C06ext.dic \u4E0E IKAnalyzer.cfg.xml \u548C stopword.dic \u590D\u5236\u5230 webapps\\solr\\WEB-INF\\classes \u6587\u4EF6\u5939\u4E0B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412154252936.png" alt="image-20220412154252936" loading="lazy"></p><h3 id="_2-2-ikanalyzer-cfg-xml-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-ikanalyzer-cfg-xml-\u914D\u7F6E" aria-hidden="true">#</a> 2.2 IKAnalyzer.cfg.xml \u914D\u7F6E</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;http://java.sun.com/dtd/properties.dtd&quot;</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>  
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">&gt;</span></span>IK Analyzer \u6269\u5C55\u914D\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u81EA\u5DF1\u7684\u6269\u5C55\u5B57\u5178 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>ik_ext.dic;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span> 
	
	<span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u81EA\u5DF1\u7684\u6269\u5C55\u505C\u6B62\u8BCD\u5B57\u5178--&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_stopwords<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>stopword.dic;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span> 
	
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u914D\u7F6E\u6269\u5C55\u8BCD" tabindex="-1"><a class="header-anchor" href="#_2-3-\u914D\u7F6E\u6269\u5C55\u8BCD" aria-hidden="true">#</a> 2.3 \u914D\u7F6E\u6269\u5C55\u8BCD</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412154445335.png" alt="image-20220412154445335" loading="lazy"></p><h3 id="_2-4-\u914D\u7F6E\u505C\u7528\u8BCD" tabindex="-1"><a class="header-anchor" href="#_2-4-\u914D\u7F6E\u505C\u7528\u8BCD" aria-hidden="true">#</a> 2.4 \u914D\u7F6E\u505C\u7528\u8BCD</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412154516180.png" alt="image-20220412154516180" loading="lazy"></p><h2 id="_3-\u6269\u5C55\u8BCD\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_3-\u6269\u5C55\u8BCD\u9A8C\u8BC1" aria-hidden="true">#</a> 3. \u6269\u5C55\u8BCD\u9A8C\u8BC1</h2><h3 id="_3-1-\u672A\u914D\u7F6E\u524D" tabindex="-1"><a class="header-anchor" href="#_3-1-\u672A\u914D\u7F6E\u524D" aria-hidden="true">#</a> 3.1 \u672A\u914D\u7F6E\u524D</h3><p>\u672A\u914D\u7F6E\u524D\u7F51\u7EA2\u5206\u8BCD\uFF0C\u5206\u4E3A\u7F51\u548C\u7EA2\u3002\u4F46\u662F\u6211\u4EEC\u4E5F\u5E0C\u671B\u4ED6\u4EEC\u662F\u4E00\u4F53\u7684</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220412155122059.png" alt="image-20220412155122059" loading="lazy"></p><h4 id="_3-2-\u914D\u7F6E\u540E\u7684\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_3-2-\u914D\u7F6E\u540E\u7684\u6548\u679C" aria-hidden="true">#</a> 3.2 \u914D\u7F6E\u540E\u7684\u6548\u679C</h4><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,24),d={href:"https://blog.csdn.net/Appleyk/article/details/79270363",target:"_blank",rel:"noopener noreferrer"},u=l("Solr 7.2.1 \u914D\u7F6E\u4E2D\u6587\u5206\u8BCD\u5668 IK Analyzer");function h(g,k){const n=i("ExternalLinkIcon");return t(),e("div",null,[r,a("p",null,[a("a",d,[u,o(n)])])])}const b=s(c,[["render",h],["__file","solr-j-ext.html.vue"]]);export{b as default};