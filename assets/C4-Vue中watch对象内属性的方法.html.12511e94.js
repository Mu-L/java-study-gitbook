import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as t,a as n,b as p,e as o,d as i,r as l}from"./app.24aaacd5.js";const c={},u=o(`<h1 id="vue\u4E2Dwatch\u76D1\u542C\u5BF9\u8C61\u5185\u5C5E\u6027\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#vue\u4E2Dwatch\u76D1\u542C\u5BF9\u8C61\u5185\u5C5E\u6027\u7684\u65B9\u6CD5" aria-hidden="true">#</a> Vue\u4E2Dwatch\u76D1\u542C\u5BF9\u8C61\u5185\u5C5E\u6027\u7684\u65B9\u6CD5</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6211\u4EEC\u6709\u4E2A\u573A\u666F\uFF0C\u9700\u8981\u76D1\u542C\u8868\u5355\u4E2D\u4EFB\u610F\u4E00\u4E2A\u5C5E\u6027\u53D8\u5316\uFF0C\u518D\u5C06\u53D8\u5316\u901A\u8FC7vuex \u4F20\u9012\u7ED9\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528\u3002\u56E0\u4E3A\u5B9E\u65F6\u6027\u8981\u6C42\u9AD8\uFF0C\u4E14\u5B57\u6BB5\u591A\u3002\u5E76\u4E0D\u60F3\u6BCF\u4E2A\u5B57\u6BB5\u53D8\u5316\u540E\u53BB\u89E6\u53D1\u4E8B\u4EF6\u3002</p><ul><li><p>\u9700\u6C42\uFF1A</p><p>\u6211\u4EECwatch\u76D1\u542C\u5BF9\u8C61\u5185\u7684\u5C5E\u6027\u53D8\u5316</p></li><li><p>\u95EE\u9898</p><p>\u73B0\u5728\u6211\u4EEC\u6B63\u5E38\u7684\u5199\u6CD5\uFF0C\u53EA\u80FD\u76D1\u542C\u5BF9\u8C61\u7684\u53D8\u5316\uFF0C\u5BF9\u8C61\u5185\u7684\u5C5E\u6027\u53D8\u5316\u5E76\u4E0D\u4F1A\u88AB\u76D1\u542C\u5230</p></li><li><p>\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Vue({
  data: {
    count: 10\uFF0C
    blog:{
        title:&#39;my-blog&#39;,
        categories:[]
    }
  },
  watch: {
    count: function (newval, oldVal) {
      console.log(\`new: %s, old: %s\`, newVal, oldVal);
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u60C5\u51B5\u91CC<code>data</code>\u4E2D\u7684<code>count</code>\u5C5E\u6027\u53EF\u4EE5\u76F4\u63A5\u76D1\u542C\uFF0C\u4F46\u662F\u5982\u679C\u9700\u8981\u76D1\u542C\u7684\u6570\u636E\u662F\u5BF9\u8C61\u5185\u7684\u67D0\u4E00\u5C5E\u6027\u503C\u7684\u53D8\u5316\uFF0C\u76F4\u63A5<code>watch</code>\u5BF9\u8C61<code>blog</code>\u662F\u68C0\u6D4B\u4E0D\u5230\u53D8\u5316\u7684\uFF0C\u8FD9\u662F\u56E0\u4E3A<code>blog</code>\u8FD9\u4E2A\u5BF9\u8C61\u7684\u6307\u5411\u5E76\u6CA1\u6709\u53D1\u751F\u6539\u53D8\u3002</p></li></ul><h2 id="_2-\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> 2. \u89E3\u51B3\u65B9\u6CD5</h2><h3 id="_2-1-\u65B9\u6848\u4E00-\u6DF1\u5EA6\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u6848\u4E00-\u6DF1\u5EA6\u68C0\u6D4B" aria-hidden="true">#</a> 2.1 \u65B9\u6848\u4E00\uFF1A\u6DF1\u5EA6\u68C0\u6D4B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>new Vue<span class="token punctuation">(</span><span class="token punctuation">{</span>
  data: <span class="token punctuation">{</span>
    count: <span class="token number">10</span>\uFF0C
    blog:<span class="token punctuation">{</span>
        title:<span class="token string">&#39;my-blog&#39;</span>,
        categories:<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  watch: <span class="token punctuation">{</span>
    blog:<span class="token punctuation">{</span>
        handler<span class="token punctuation">(</span>newVal,oldVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
            console.log<span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span>new: $<span class="token punctuation">{</span>newVal<span class="token punctuation">}</span>, old: $<span class="token punctuation">{</span>oldVal<span class="token punctuation">}</span><span class="token variable">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>,
        deep:true
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CC\u9762\u7684<code>deep</code>\u8BBE\u4E3A\u4E86<code>true</code>\uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C\u5982\u679C\u4FEE\u6539\u4E86\u8FD9\u4E2A<code>blog</code>\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u5C5E\u6027\uFF0C\u90FD\u4F1A\u6267\u884C<code>handler</code>\u8FD9\u4E2A\u65B9\u6CD5\u3002</p><blockquote><p>\u4E0D\u8FC7\u8FD9\u6837\u4F1A\u9020\u6210\u66F4\u591A\u7684\u6027\u80FD\u5F00\u9500\uFF0C\u5C24\u5176\u662F\u5BF9\u8C61\u91CC\u9762\u5C5E\u6027\u8FC7\u591A\uFF0C\u7ED3\u6784\u5D4C\u5957\u8FC7\u6DF1\u7684\u65F6\u5019\u3002\u800C\u4E14\u6709\u65F6\u5019\u6211\u4EEC\u5C31\u53EA\u60F3\u5173\u5FC3\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u7684\u67D0\u4E2A\u7279\u5B9A\u5C5E\u6027</p></blockquote><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u76D1\u542C\u67D0\u4E00\u4E2A\u5C5E\u6027</p><h3 id="_2-2-\u7528\u5B57\u7B26\u4E32\u6765\u8868\u793A\u5BF9\u8C61\u7684\u5C5E\u6027\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7528\u5B57\u7B26\u4E32\u6765\u8868\u793A\u5BF9\u8C61\u7684\u5C5E\u6027\u8C03\u7528" aria-hidden="true">#</a> 2.2 \u7528\u5B57\u7B26\u4E32\u6765\u8868\u793A\u5BF9\u8C61\u7684\u5C5E\u6027\u8C03\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span>\uFF0C
    <span class="token literal-property property">blog</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;my-blog&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">categories</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;blog.categories&#39;</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">new:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, old:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>oldVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u4F7F\u7528computed\u8BA1\u7B97\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4F7F\u7528computed\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a> 2.3 \u4F7F\u7528<code>computed</code>\u8BA1\u7B97\u5C5E\u6027</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span>\uFF0C
    <span class="token literal-property property">blog</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;my-blog&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">categories</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">categories</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>blog<span class="token punctuation">.</span>categories<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">categories</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">new:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, old:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>oldVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,15),r={href:"https://segmentfault.com/a/1190000018080301",target:"_blank",rel:"noopener noreferrer"},d=i("Vue\u4E2Dwatch\u5BF9\u8C61\u5185\u5C5E\u6027\u7684\u65B9\u6CD5");function k(v,m){const a=l("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[d,p(a)])])])}var g=s(c,[["render",k],["__file","C4-Vue\u4E2Dwatch\u5BF9\u8C61\u5185\u5C5E\u6027\u7684\u65B9\u6CD5.html.vue"]]);export{g as default};
