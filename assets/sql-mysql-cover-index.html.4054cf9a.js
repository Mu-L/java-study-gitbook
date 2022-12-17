import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as t,d as o,e as c,r as l}from"./app.89cd0885.js";const k={},i=o(`<h1 id="mysql-\u8986\u76D6\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#mysql-\u8986\u76D6\u7D22\u5F15" aria-hidden="true">#</a> MySQL - \u8986\u76D6\u7D22\u5F15</h1><h2 id="_1-\u8986\u76D6\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_1-\u8986\u76D6\u7D22\u5F15" aria-hidden="true">#</a> 1. \u8986\u76D6\u7D22\u5F15</h2><p>\u8986\u76D6\u7D22\u5F15\uFF1A<strong>SQL\u53EA\u9700\u8981\u901A\u8FC7\u7D22\u5F15\u5C31\u53EF\u4EE5\u8FD4\u56DE\u67E5\u8BE2\u6240\u9700\u8981\u7684\u6570\u636E\uFF0C\u800C\u4E0D\u5FC5\u901A\u8FC7\u4E8C\u7EA7\u7D22\u5F15\u67E5\u5230\u4E3B\u952E\u4E4B\u540E\u518D\u53BB\u67E5\u8BE2\u6570\u636E\u3002</strong></p><blockquote><p>\u9996\u5148\u8981\u4E86\u89E3\u8986\u76D6\u7D22\u5F15\u4E4B\u524D\uFF0C\u4F60\u5FC5\u987B\u8981\u4E86\u89E3</p><ul><li><p>\u4EC0\u4E48\u662F\u805A\u7C07\u7D22\u5F15\u548C\u975E\u805A\u7C07\u7D22\u5F15\uFF0C</p></li><li><p>\u56DE\u8868\uFF0C\u8986\u76D6\u7D22\u5F15\u5176\u5B9E\u5C31\u662F\u8DDF\u5230\u5E95\u9700\u4E0D\u9700\u8981\u56DE\u8868\u6709\u76F4\u63A5\u7684\u5173\u7CFB\u7684\u3002</p></li></ul></blockquote><h3 id="_1-1-\u4EC0\u4E48\u662F\u56DE\u8868" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4EC0\u4E48\u662F\u56DE\u8868" aria-hidden="true">#</a> 1.1 \u4EC0\u4E48\u662F\u56DE\u8868?</h3><p>\u4EC0\u4E48\u662F\u56DE\u8868\u5462? \u901A\u4FD7\u7684\u8BB2\u5C31\u662F\uFF0C\u5982\u679C\u7D22\u5F15\u7684\u5217\u5728 select \u6240\u9700\u83B7\u5F97\u7684\u5217\u4E2D \u6216\u8005\u6839\u636E\u4E00\u6B21\u7D22\u5F15\u67E5\u8BE2\u5C31\u80FD\u83B7\u5F97\u8BB0\u5F55\u5C31\u4E0D\u9700\u8981\u56DE\u8868\uFF0C<strong>\u5982\u679C select \u6240\u9700\u83B7\u5F97\u5217\u4E2D\u6709\u5927\u91CF\u7684\u975E\u7D22\u5F15\u5217\uFF0C\u7D22\u5F15\u5C31\u9700\u8981\u5230\u8868\u4E2D\u627E\u5230\u76F8\u5E94\u7684\u5217\u7684\u4FE1\u606F\uFF0C\u8FD9\u5C31\u53EB\u56DE\u8868</strong>\u3002\u53EA\u6709\u975E\u805A\u7C07\u7D22\u5F15\u662F\u9700\u8981\u56DE\u8868\u7684\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u61C2\u5F97\u975E\u805A\u7C07\u7D22\u5F15\u7684\u5B58\u50A8\u7684\u7ED3\u6784\uFF0C\u4F60\u81EA\u7136\u5C31\u77E5\u9053\u4E3A\u5565\u9700\u8981\u56DE\u8868\u4E86\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u4E0D\u662F\u6240\u6709\u7C7B\u578B\u7684\u7D22\u5F15\u90FD\u53EF\u4EE5\u6210\u4E3A\u8986\u76D6\u7D22\u5F15\u3002\u8986\u76D6\u7D22\u5F15\u5FC5\u987B\u8981\u5B58\u50A8\u7D22\u5F15\u7684\u5217\uFF0C\u800C\u54C8\u5E0C\u7D22\u5F15\u3001\u7A7A\u95F4\u7D22\u5F15\u548C\u5168\u6587\u7D22\u5F15\u7B49\u90FD\u4E0D\u5B58\u50A8\u7D22\u5F15\u5217\u7684\u503C\uFF0C\u6240\u4EE5MySQL\u53EA\u80FD\u4F7F\u7528B-Tree\u7D22\u5F15\u505A\u8986\u76D6\u7D22\u5F15</p></blockquote><h2 id="_2-\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3E\u4F8B" aria-hidden="true">#</a> 2. \u4E3E\u4F8B</h2><p>\u6211\u8FD9\u91CC\u4E3E\u4E00\u4E2A\u4F8B\u5B50\u4F60\u5C31\u53EF\u4EE5\u5F88\u5FEB\u660E\u767D\u4E86\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> t1
<span class="token punctuation">(</span>
    a <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">,</span>
    b <span class="token keyword">int</span><span class="token punctuation">,</span>
    c <span class="token keyword">int</span><span class="token punctuation">,</span>
    d <span class="token keyword">int</span><span class="token punctuation">,</span>
    e <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">InnoDB</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;h&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t1 <span class="token keyword">value</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">index</span> idx_t1_bcd <span class="token keyword">on</span> t1<span class="token punctuation">(</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">-- \u521B\u5EFA\u590D\u5408\u7D22\u5F15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u770B\u8FD9\u4E9BSQL\uFF0C\u770B\u770B\u54EA\u4E9BSQL\u6EE1\u8DB3\u4E86\u8986\u76D6\u7D22\u5F15\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- \u56DE\u8868</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> e <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- \u56DE\u8868</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> b <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- \u4E0D\u7528\u56DE\u8868 Using index  \u8986\u76D6\u7D22\u5F15</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> b<span class="token punctuation">,</span>c <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- \u4E0D\u7528\u56DE\u8868 Using index  \u8986\u76D6\u7D22\u5F15</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> b<span class="token punctuation">,</span>d <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- \u4E0D\u7528\u56DE\u8868 Using index  \u8986\u76D6\u7D22\u5F15</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- \u4E0D\u7528\u56DE\u8868 Using index  \u8986\u76D6\u7D22\u5F15</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d <span class="token keyword">from</span> t1 <span class="token keyword">where</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- \u4E0D\u7528\u56DE\u8868 Using index  \u8986\u76D6\u7D22\u5F15</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u4E0A\u9762\u5DF2\u7ECF\u7ED9\u51FA\u7B54\u6848\u4E86\u3002</p><p>\u6211\u4EEC\u901A\u8FC7\u6267\u884C\u8BA1\u5212\u5C31\u53EF\u4EE5\u77E5\u9053\u662F\u4E0D\u662F\u6EE1\u8DB3\u4E86\u8986\u76D6\u7D22\u5F15\u7684\u6761\u4EF6\u4E86\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221204214426240.png" alt="image-20221204214426240" loading="lazy"></p><p>\u5982\u679CExtra\u4F7F\u7528\u4E86<strong>Using index</strong>\uFF0C\u5C31\u8BF4\u660E\u4E86\u4ED6\u662F\u6EE1\u8DB3\u4E86\u8986\u76D6\u7D22\u5F15\u4E86\uFF0C\u8FD9\u4E2A\u5C31\u662F\u8986\u76D6\u7D22\u5F15\u7684\u6807\u5FD7\u4E86\u3002</p><p>\u800C\u4E0B\u9762\u8FD9\u79CD\u5F88\u660E\u663E\u5C31\u662F\u4E0D\u6EE1\u8DB3\u7D22\u5F15\u8986\u76D6\u4E86\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221204214458013.png" alt="image-20221204214458013" loading="lazy"></p><p>\u56E0\u4E3A\u6211\u4EEC\u5EFA\u7ACB\u7684\u662F\u590D\u5408\u7D22\u5F15\uFF0C\u6240\u4EE5\u5C31\u662F\u975E\u805A\u7C07\u7D22\u5F15\uFF0C\u975E\u805A\u7C07\u7D22\u5F15\u7684\u53F6\u5B50\u8282\u70B9\u4E0A\u4F1A\u5B58\u653E\u952E\u7684\u503C\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u7684(b,c,d) \u8FD9\u4E09\u4E2A\u5B57\u6BB5\uFF0C\u8FD8\u4F1A\u5B58\u653E\u4E3B\u952Ea\u5B57\u6BB5\u7528\u4E8E\u56DE\u8868\u64CD\u4F5C\u3002</p><p>\u6240\u4EE5\u53EA\u8981\u67E5\u8BE2\u7684\u5217\u662F\u4F60\u5EFA\u7ACB\u7684\u7D22\u5F15\u5B57\u6BB5\u518D\u52A0\u4E0A\u4E3B\u952E\u5B57\u6BB5\uFF0C\u90FD\u662F\u6EE1\u8DB3\u7D22\u5F15\u8986\u76D6\u7684\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5728\u975E\u805A\u7C07\u7D22\u5F15\u7684\u53F6\u5B50\u8282\u70B9\u5C31\u80FD\u7ED9\u591F\u83B7\u53D6\u5230\u8FD9\u4E9B\u6570\u636E\uFF0C\u4E0D\u9700\u8981\u56DE\u8868\u64CD\u4F5C\u3002</p><h2 id="_3-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_3-\u603B\u7ED3" aria-hidden="true">#</a> 3. \u603B\u7ED3</h2><p>\u5982\u679C\u8981\u4F7F\u7528\u8986\u76D6\u7D22\u5F15\uFF0C\u4E00\u5B9A\u8981\u6CE8\u610FSELECT \u5217\u8868\u503C\u53D6\u51FA\u9700\u8981\u7684\u5217(\u5E76\u4E14\u8FD9\u4E9B\u5217\u662F\u6709\u7D22\u5F15\u7684)\uFF0C\u4E0D\u53EF\u4EE5\u662FSELECT *\uFF0C\u4F46\u6709\u7684\u4EBA\u8BF4\u53EF\u4EE5\u5168\u90E8\u5217\u90FD\u52A0\u7D22\u5F15\uFF0C\u4F46\u5982\u679C\u5C06\u6240\u6709\u5B57\u6BB5\u4E00\u8D77\u505A\u7D22\u5F15\u4F1A\u5BFC\u81F4\u7D22\u5F15\u6587\u4EF6\u8FC7\u5927\uFF0C\u67E5\u8BE2\u6027\u80FD\u4E0B\u964D\uFF0C\u4E0D\u80FD\u4E3A\u4E86\u5229\u7528\u8986\u76D6\u7D22\u5F15\u800C\u8FD9\u4E48\u505A\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,23),u={href:"https://blog.csdn.net/cckevincyh/article/details/119655516",target:"_blank",rel:"noopener noreferrer"},r=c("\u4E94\u5206\u949F\u544A\u8BC9\u4F60\u4EC0\u4E48\u662FMySQL\u7684\u8986\u76D6\u7D22\u5F15");function d(m,b){const s=l("ExternalLinkIcon");return e(),p("div",null,[i,n("p",null,[n("a",u,[r,t(s)])])])}const w=a(k,[["render",d],["__file","sql-mysql-cover-index.html.vue"]]);export{w as default};
