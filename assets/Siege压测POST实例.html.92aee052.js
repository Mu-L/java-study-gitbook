import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as t,e as s}from"./app.f1a1a4ee.js";const i={},n=s(`<h1 id="siege\u538B\u6D4Bpost\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#siege\u538B\u6D4Bpost\u5B9E\u4F8B" aria-hidden="true">#</a> Siege\u538B\u6D4BPOST\u5B9E\u4F8B</h1><h2 id="_1-\u65B0\u5EFApost-\u7684\u53C2\u6570\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u65B0\u5EFApost-\u7684\u53C2\u6570\u6587\u4EF6" aria-hidden="true">#</a> 1. \u65B0\u5EFAPOST \u7684\u53C2\u6570\u6587\u4EF6</h2><p>\u65B0\u5EFA param.json\u53C2\u6570\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{&quot;accessId&quot;:&quot;1000000000&quot;,
&quot;secretValue&quot;:&quot;7be4265165a9&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u6267\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-\u6267\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> 2. \u6267\u884C\u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>siege -H &quot;Content-Type:application/json&quot; -c 500 -r 500 &quot;http://app.msyos.com/ele_wallet_service/api/essc/getSign POST &lt; ./param.json&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),r=[n];function o(d,c){return a(),t("div",null,r)}var h=e(i,[["render",o],["__file","Siege\u538B\u6D4BPOST\u5B9E\u4F8B.html.vue"]]);export{h as default};
