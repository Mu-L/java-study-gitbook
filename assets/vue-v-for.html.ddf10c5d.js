import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a,b as p,d as o,e as l,r as i}from"./app.b742c861.js";const c={},u=o(`<h1 id="vue\u6307\u4EE4v-for\u4E4B\u904D\u5386\u8F93\u51FAjavascript\u6570\u7EC4-json\u5BF9\u8C61\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue\u6307\u4EE4v-for\u4E4B\u904D\u5386\u8F93\u51FAjavascript\u6570\u7EC4-json\u5BF9\u8C61\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> Vue\u6307\u4EE4v-for\u4E4B\u904D\u5386\u8F93\u51FAJavaScript\u6570\u7EC4\uFF0Cjson\u5BF9\u8C61\u7684\u51E0\u79CD\u65B9\u5F0F</h1><h2 id="_1-\u57FA\u7840\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u7840\u51C6\u5907" aria-hidden="true">#</a> 1. \u57FA\u7840\u51C6\u5907</h2><ol><li><p>\u5B9A\u4E49\u6570\u636E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">list</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">web</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token string-property property">&quot;\u767E\u5EA6&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;\u641C\u72D0&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://www.sohu.com&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;\u65B0\u6D6A&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://www.sina.com&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;\u6DD8\u5B9D&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://www.taobao.com&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>html\u7ED3\u6784</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ list }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ web }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8F93\u51FA\u7ED3\u679C</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210162547578.png" alt="image-20201210162547578" loading="lazy"></p></li></ol><h2 id="_2-v-for\u5BF9-json-\u6570\u7EC4-\u51E0\u79CD\u8F93\u51FA\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-v-for\u5BF9-json-\u6570\u7EC4-\u51E0\u79CD\u8F93\u51FA\u65B9\u5F0F" aria-hidden="true">#</a> 2. v-for\u5BF9 JSON \u6570\u7EC4 \u51E0\u79CD\u8F93\u51FA\u65B9\u5F0F</h2><h3 id="_2-1-\u53EA\u8F93\u51FAvalue" tabindex="-1"><a class="header-anchor" href="#_2-1-\u53EA\u8F93\u51FAvalue" aria-hidden="true">#</a> 2.1 \u53EA\u8F93\u51FAvalue</h3><p>html \u4EE3\u7801</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164049745.png" alt="image-20201210164049745" loading="lazy"></p><h3 id="_2-2-\u8F93\u51FAvalue\u503C\u4E14\u8F93\u51FA\u5BF9\u5E94\u7684\u7D22\u5F15\u503C" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8F93\u51FAvalue\u503C\u4E14\u8F93\u51FA\u5BF9\u5E94\u7684\u7D22\u5F15\u503C" aria-hidden="true">#</a> 2.2 \u8F93\u51FAvalue\u503C\u4E14\u8F93\u51FA\u5BF9\u5E94\u7684\u7D22\u5F15\u503C</h3><p>html\u4EE3\u7801\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>(item,index) in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}\u7684\u7D22\u5F15\u503C\u662F{{ index }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164215652.png" alt="image-20201210164215652" loading="lazy"></p><h2 id="_3-v-for\u5BF9json\u683C\u5F0F\u7684\u51E0\u79CD\u8F93\u51FA\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-v-for\u5BF9json\u683C\u5F0F\u7684\u51E0\u79CD\u8F93\u51FA\u65B9\u5F0F" aria-hidden="true">#</a> 3. v-for\u5BF9json\u683C\u5F0F\u7684\u51E0\u79CD\u8F93\u51FA\u65B9\u5F0F</h2><h3 id="_3-1-\u53EA\u8F93\u51FAvalue\u503C" tabindex="-1"><a class="header-anchor" href="#_3-1-\u53EA\u8F93\u51FAvalue\u503C" aria-hidden="true">#</a> 3.1 \u53EA\u8F93\u51FAvalue\u503C</h3><p>html\u4EE3\u7801</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>value in web<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164447098.png" alt="image-20201210164447098" loading="lazy"></p><h3 id="_3-2-\u8F93\u51FAvalue\u503C\u548Ckey\u503C" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8F93\u51FAvalue\u503C\u548Ckey\u503C" aria-hidden="true">#</a> 3.2 \u8F93\u51FAvalue\u503C\u548Ckey\u503C</h3><p>html \u4EE3\u7801</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>(value,key) in web<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ key }} \u7684\u7F51\u5740\u662F \uFF1A {{ value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164606587.png" alt="image-20201210164606587" loading="lazy"></p><h2 id="_3-\u8F93\u51FAvalue\u503C-key\u503C\u548C\u7D22\u5F15\u503Cindex" tabindex="-1"><a class="header-anchor" href="#_3-\u8F93\u51FAvalue\u503C-key\u503C\u548C\u7D22\u5F15\u503Cindex" aria-hidden="true">#</a> 3.\u8F93\u51FAvalue\u503C\uFF0Ckey\u503C\u548C\u7D22\u5F15\u503Cindex</h2><p>html\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;div id=&quot;test&quot;&gt;
        &lt;div v-for = &quot;(value,key,index) in web&quot; :key=&quot;index&quot;&gt;{{ index }}__{{ key }} \u7684\u7F51\u5740\u662F \uFF1A {{ value }}&lt;/div&gt;
    &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201210164817986.png" alt="image-20201210164817986" loading="lazy"></p><h2 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h2><ul><li><p>\u5728\u6570\u7EC4\u91CC\u9762\uFF0C\u5C0F\u62EC\u53F7\u91CC\u9762\u7684\u53C2\u6570\u7B2C\u4E00\u4F4D\u662Fvalue\u503C\uFF0C\u7B2C\u4E8C\u4F4D\u662F\u7D22\u5F15\u503C</p></li><li><p>\u5728json\u91CC\u9762\uFF0C\u7B2C\u4E00\u4F4D\u662Fvalue\u503C\uFF0C\u7B2C\u4E8C\u4F4D\u662Fkey\u503C\uFF0C\u7B2C\u4E09\u4F4D\u662F\u7D22\u5F15\u503C</p></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,33),r={href:"https://www.cnblogs.com/mmzuo-798/p/9435215.html",target:"_blank",rel:"noopener noreferrer"},d=l("Vue\u6307\u4EE4v-for\u4E4B\u904D\u5386\u8F93\u51FAJavaScript\u6570\u7EC4\uFF0Cjson\u5BF9\u8C61\u7684\u51E0\u79CD\u65B9\u5F0F");function k(v,g){const n=i("ExternalLinkIcon");return t(),e("div",null,[u,a("p",null,[a("a",r,[d,p(n)])])])}const b=s(c,[["render",k],["__file","vue-v-for.html.vue"]]);export{b as default};
