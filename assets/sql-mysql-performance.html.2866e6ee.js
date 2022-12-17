import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as s,b as p,d as o,r as l}from"./app.89cd0885.js";const r={},i=o(`<h1 id="mysql-\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#mysql-\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> MySQL - \u6027\u80FD\u4F18\u5316</h1><h2 id="_1-\u4F7F\u7528-explain-\u8FDB\u884C\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528-explain-\u8FDB\u884C\u5206\u6790" aria-hidden="true">#</a> 1. \u4F7F\u7528 Explain \u8FDB\u884C\u5206\u6790</h2><p>Explain \u7528\u6765\u5206\u6790 SELECT \u67E5\u8BE2\u8BED\u53E5\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u901A\u8FC7\u5206\u6790 Explain \u7ED3\u679C\u6765\u4F18\u5316\u67E5\u8BE2\u8BED\u53E5\u3002</p><p>\u6BD4\u8F83\u91CD\u8981\u7684\u5B57\u6BB5\u6709:</p><ul><li><p>select_type : \u67E5\u8BE2\u7C7B\u578B\uFF0C\u6709\u7B80\u5355\u67E5\u8BE2\u3001\u8054\u5408\u67E5\u8BE2\u3001\u5B50\u67E5\u8BE2\u7B49</p></li><li><p>key : \u4F7F\u7528\u7684\u7D22\u5F15</p></li><li><p>rows : \u626B\u63CF\u7684\u884C\u6570</p><p>rows\u626B\u63CF\u7684\u884C\u6570\uFF0C\u8D8A\u5C0F\u8D8A\u597D</p></li><li><p>type\uFF1A\u4F7F\u7528\u7D22\u5F15\u7684\u7C7B\u578B</p><p>\u901A\u8FC7type\u7684\u503C\u5224\u65AD\u67E5\u8BE2\u662F\u5426\u9AD8\u6548\uFF0C\u5224\u65AD\u6B64\u6B21\u662F\u5168\u8868\u626B\u63CF\u8FD8\u662F\u7D22\u5F15\u626B\u63CF</p><ul><li>ALL &lt; index &lt; range ~ index_merge &lt; ref &lt; eq_ref &lt; const &lt; system</li></ul></li></ul><h2 id="_2-\u4F18\u5316\u6570\u636E\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_2-\u4F18\u5316\u6570\u636E\u8BBF\u95EE" aria-hidden="true">#</a> 2. \u4F18\u5316\u6570\u636E\u8BBF\u95EE</h2><h3 id="_2-1-\u51CF\u5C11\u8BF7\u6C42\u7684\u6570\u636E\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-1-\u51CF\u5C11\u8BF7\u6C42\u7684\u6570\u636E\u91CF" aria-hidden="true">#</a> 2.1. \u51CF\u5C11\u8BF7\u6C42\u7684\u6570\u636E\u91CF</h3><ul><li>\u53EA\u8FD4\u56DE\u5FC5\u8981\u7684\u5217: \u6700\u597D\u4E0D\u8981\u4F7F\u7528 SELECT * \u8BED\u53E5\u3002</li><li>\u53EA\u8FD4\u56DE\u5FC5\u8981\u7684\u884C: \u4F7F\u7528 LIMIT \u8BED\u53E5\u6765\u9650\u5236\u8FD4\u56DE\u7684\u6570\u636E\u3002</li><li>\u7F13\u5B58\u91CD\u590D\u67E5\u8BE2\u7684\u6570\u636E: \u4F7F\u7528\u7F13\u5B58\u53EF\u4EE5\u907F\u514D\u5728\u6570\u636E\u5E93\u4E2D\u8FDB\u884C\u67E5\u8BE2\uFF0C\u7279\u522B\u5728\u8981\u67E5\u8BE2\u7684\u6570\u636E\u7ECF\u5E38\u88AB\u91CD\u590D\u67E5\u8BE2\u65F6\uFF0C\u7F13\u5B58\u5E26\u6765\u7684\u67E5\u8BE2\u6027\u80FD\u63D0\u5347\u5C06\u4F1A\u662F\u975E\u5E38\u660E\u663E\u7684\u3002</li></ul><h3 id="_2-2-\u51CF\u5C11\u670D\u52A1\u5668\u7AEF\u626B\u63CF\u7684\u884C\u6570" tabindex="-1"><a class="header-anchor" href="#_2-2-\u51CF\u5C11\u670D\u52A1\u5668\u7AEF\u626B\u63CF\u7684\u884C\u6570" aria-hidden="true">#</a> 2.2. \u51CF\u5C11\u670D\u52A1\u5668\u7AEF\u626B\u63CF\u7684\u884C\u6570</h3><p>\u6700\u6709\u6548\u7684\u65B9\u5F0F\u662F\u4F7F\u7528\u7D22\u5F15\u6765\u8986\u76D6\u67E5\u8BE2\u3002</p><h2 id="_3-\u91CD\u6784\u67E5\u8BE2\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u91CD\u6784\u67E5\u8BE2\u65B9\u5F0F" aria-hidden="true">#</a> 3. \u91CD\u6784\u67E5\u8BE2\u65B9\u5F0F</h2><h3 id="_3-1-\u5207\u5206\u5927\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5207\u5206\u5927\u67E5\u8BE2" aria-hidden="true">#</a> 3.1. \u5207\u5206\u5927\u67E5\u8BE2</h3><p>\u4E00\u4E2A\u5927\u67E5\u8BE2\u5982\u679C\u4E00\u6B21\u6027\u6267\u884C\u7684\u8BDD\uFF0C\u53EF\u80FD\u4E00\u6B21\u9501\u4F4F\u5F88\u591A\u6570\u636E\u3001\u5360\u6EE1\u6574\u4E2A\u4E8B\u52A1\u65E5\u5FD7\u3001\u8017\u5C3D\u7CFB\u7EDF\u8D44\u6E90\u3001\u963B\u585E\u5F88\u591A\u5C0F\u7684\u4F46\u91CD\u8981\u7684\u67E5\u8BE2\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>DELEFT <span class="token keyword">FROM</span> messages <span class="token keyword">WHERE</span> <span class="token keyword">create</span> <span class="token operator">&lt;</span> DATE_SUB<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">3</span> <span class="token keyword">MONTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>rows_affected <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">do</span> {
    rows_affected <span class="token operator">=</span> do_query<span class="token punctuation">(</span>
    <span class="token string">&quot;DELETE FROM messages WHERE create  &lt; DATE_SUB(NOW(), INTERVAL 3 MONTH) LIMIT 10000&quot;</span><span class="token punctuation">)</span>
} <span class="token keyword">while</span> rows_affected <span class="token operator">&gt;</span> <span class="token number">0</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u5206\u89E3\u5927\u8FDE\u63A5\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5206\u89E3\u5927\u8FDE\u63A5\u67E5\u8BE2" aria-hidden="true">#</a> 3.2 \u5206\u89E3\u5927\u8FDE\u63A5\u67E5\u8BE2</h3><h4 id="_3-2-1-\u5927\u8FDE\u63A5\u67E5\u8BE2\u5206\u89E3\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u5927\u8FDE\u63A5\u67E5\u8BE2\u5206\u89E3\u597D\u5904" aria-hidden="true">#</a> 3.2.1 \u5927\u8FDE\u63A5\u67E5\u8BE2\u5206\u89E3\u597D\u5904</h4><p>\u5C06\u4E00\u4E2A\u5927\u8FDE\u63A5\u67E5\u8BE2\u5206\u89E3\u6210\u5BF9\u6BCF\u4E00\u4E2A\u8868\u8FDB\u884C\u4E00\u6B21\u5355\u8868\u67E5\u8BE2\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u8FDB\u884C\u5173\u8054\uFF0C\u8FD9\u6837\u505A\u7684\u597D\u5904\u6709:</p><ul><li><strong>\u8BA9\u7F13\u5B58\u66F4\u9AD8\u6548</strong>\u3002\u5BF9\u4E8E\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u8868\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u6574\u4E2A\u67E5\u8BE2\u7F13\u5B58\u5C31\u65E0\u6CD5\u4F7F\u7528\u3002\u800C\u5206\u89E3\u540E\u7684\u591A\u4E2A\u67E5\u8BE2\uFF0C\u5373\u4F7F\u5176\u4E2D\u4E00\u4E2A\u8868\u53D1\u751F\u53D8\u5316\uFF0C\u5BF9\u5176\u5B83\u8868\u7684\u67E5\u8BE2\u7F13\u5B58\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u3002</li><li>\u5206\u89E3\u6210\u591A\u4E2A\u5355\u8868\u67E5\u8BE2\uFF0C\u8FD9\u4E9B<strong>\u5355\u8868\u67E5\u8BE2\u7684\u7F13\u5B58\u7ED3\u679C\u66F4\u53EF\u80FD\u88AB\u5176\u5B83\u67E5\u8BE2\u4F7F\u7528\u5230</strong>\uFF0C\u4ECE\u800C\u51CF\u5C11\u5197\u4F59\u8BB0\u5F55\u7684\u67E5\u8BE2\u3002</li><li><strong>\u51CF\u5C11\u9501\u7ADE\u4E89</strong>\uFF1B</li><li>\u5728\u5E94\u7528\u5C42\u8FDB\u884C\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u66F4\u5BB9\u6613\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u62C6\u5206\uFF0C\u4ECE\u800C<strong>\u66F4\u5BB9\u6613\u505A\u5230\u9AD8\u6027\u80FD\u548C\u53EF\u4F38\u7F29</strong>\u3002\uFF08\u5206\u5E93\u5206\u8868\u505A\u51C6\u5907\uFF09</li><li>\u67E5\u8BE2\u672C\u8EAB\u6548\u7387\u4E5F\u53EF\u80FD\u4F1A\u6709\u6240\u63D0\u5347\u3002\u4F8B\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u4F7F\u7528 IN() \u4EE3\u66FF\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u8BA9 MySQL \u6309\u7167 ID \u987A\u5E8F\u8FDB\u884C\u67E5\u8BE2\uFF0C\u8FD9\u53EF\u80FD\u6BD4\u968F\u673A\u7684\u8FDE\u63A5\u8981\u66F4\u9AD8\u6548\u3002</li></ul><h4 id="_3-2-2-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-2-2-\u793A\u4F8B" aria-hidden="true">#</a> 3.2.2 \u793A\u4F8B</h4><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tab
<span class="token keyword">JOIN</span> tag_post <span class="token keyword">ON</span> tag_post<span class="token punctuation">.</span>tag_id<span class="token operator">=</span>tag<span class="token punctuation">.</span>id
<span class="token keyword">JOIN</span> post <span class="token keyword">ON</span> tag_post<span class="token punctuation">.</span>post_id<span class="token operator">=</span>post<span class="token punctuation">.</span>id
<span class="token keyword">WHERE</span> tag<span class="token punctuation">.</span>tag<span class="token operator">=</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tag <span class="token keyword">WHERE</span> tag<span class="token operator">=</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> tag_post <span class="token keyword">WHERE</span> tag_id<span class="token operator">=</span><span class="token number">1234</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> post <span class="token keyword">WHERE</span> post<span class="token punctuation">.</span>id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">,</span><span class="token number">567</span><span class="token punctuation">,</span><span class="token number">9098</span><span class="token punctuation">,</span><span class="token number">8904</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,23),c={href:"https://pdai.tech/md/db/sql-mysql/sql-mysql-performance.html",target:"_blank",rel:"noopener noreferrer"},d=s("strong",null,"MySQL - \u6027\u80FD\u4F18\u5316",-1);function u(k,h){const a=l("ExternalLinkIcon");return e(),t("div",null,[i,s("p",null,[s("a",c,[d,p(a)])])])}const v=n(r,[["render",u],["__file","sql-mysql-performance.html.vue"]]);export{v as default};
