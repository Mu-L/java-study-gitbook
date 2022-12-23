import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,a,b as e,d as r,e as s,r as l}from"./app.b742c861.js";const d={},p=r(`<h1 id="\u8FBE\u68A6\u6570\u636E\u5E93-\u5173\u952E\u5B57-domain\u7B49-\u5BFC\u81F4\u7684\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u8FBE\u68A6\u6570\u636E\u5E93-\u5173\u952E\u5B57-domain\u7B49-\u5BFC\u81F4\u7684\u5F02\u5E38" aria-hidden="true">#</a> \u8FBE\u68A6\u6570\u636E\u5E93-\u5173\u952E\u5B57\uFF08domain\u7B49\uFF09\u5BFC\u81F4\u7684\u5F02\u5E38</h1><h2 id="_1-\u95EE\u9898\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u95EE\u9898\u80CC\u666F" aria-hidden="true">#</a> 1. \u95EE\u9898\u80CC\u666F</h2><p>\u5728\u9879\u76EE\u8FD0\u884C\u65F6\u53D1\u73B0ORACLE \u6CA1\u95EE\u9898\u7684\u8BED\u53E5\uFF0C\u5728\u8FBE\u68A6\u51FA\u73B0\u4E86\u95EE\u9898</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  @SQL:  SELECT WorkID,Domain, FROM Test WHERE WorkID <span class="token operator">=</span>:WorkID
  @Param: <span class="token assign-left variable">Num</span><span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">WorkID</span><span class="token operator">=</span><span class="token number">1386</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span>
  @\u5F02\u5E38\u4FE1\u606F: \u7B2C <span class="token number">1</span> \u884C, \u7B2C <span class="token number">1483</span> \u5217<span class="token punctuation">[</span>Domain<span class="token punctuation">]</span>\u9644\u8FD1\u51FA\u73B0\u9519\u8BEF:  \u8BED\u6CD5\u5206\u6790\u51FA\u9519<span class="token punctuation">]</span>
java.lang.RuntimeException: @\u8FD0\u884C\u67E5\u8BE2\u5728<span class="token punctuation">(</span>RunSQLReturnTable_200705_Ora<span class="token punctuation">)</span>\u51FA\u9519\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4F7F\u7528\u8FBE\u68A6\u6570\u636E\u5E93\u65F6\uFF0C\u67E5\u8BE2SQL\u4E2D\u6D89\u53CAXML,EXCHANGE,DOMAIN,link\u5B57\u6BB5\uFF0C\u5728\u8FBE\u68A6\u4E2D\u662F\u5173\u952E\u5B57\uFF0CSQL\u62A5\u5173\u952E\u8BCD\u4E0D\u80FD\u4F7F\u7528\u7684\u9519\u8BEF\u3002</p><h2 id="_2-\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> 2. \u89E3\u51B3\u529E\u6CD5</h2><h3 id="_2-1-\u65B9\u6CD5\u4E00-\u53CC\u5F15\u53F7\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u6CD5\u4E00-\u53CC\u5F15\u53F7\u6CD5" aria-hidden="true">#</a> 2.1 \u65B9\u6CD5\u4E00\uFF1A\u53CC\u5F15\u53F7\u6CD5</h3><p>\u8FD9\u4E2A\u4E00\u822C\u53EF\u4EE5\u7528\u6765\u5904\u7406\u5EFA\u8868\u8BED\u53E5\u4E2D\u7684\u4FDD\u7559\u5B57\u51B2\u7A81\uFF0C\u5982\u8868\u540D\u6216\u8005\u5B57\u6BB5\u540D\u662F DM \u7684\u4FDD\u7559\u5B57\u3002\u8FD9\u79CD\u65B9\u6CD5\u4E00\u822C\u53EF\u4EE5\u5FEB\u901F\u5730\u7ED5\u8FC7\u95EE\u9898\uFF0C\u4F46\u662F\u5BF9\u4E8E\u5927\u5C0F\u5199\u654F\u611F\u7684\u5E93\uFF0C\u8FD9\u79CD\u7528\u53CC\u5F15\u53F7\u7684\u65B9\u6CD5\u4F1A\u56FA\u5B9A\u6B7B\u5B57\u6BB5\u5927\u5C0F\u5199\uFF0C\u5BF9\u4E8E\u5C0F\u5199\u7684\u5B57\u6BB5\uFF0C\u53EF\u80FD\u4F1A\u5E26\u6765\u65E0\u6548\u7684\u8868\u540D\u6216\u8005\u5217\u540D\u7684\u95EE\u9898\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> WorkID<span class="token punctuation">,</span><span class="token string">&quot;Domain&quot;</span><span class="token punctuation">,</span> <span class="token keyword">FROM</span> Test <span class="token keyword">WHERE</span> WorkID <span class="token operator">=</span>:WorkID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-\u65B9\u6CD52-dm-ini-\u4E2D\u7684\u53C2\u6570\u8BBE\u7F6E-\u5B9E\u6D4B\u6CA1\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u6CD52-dm-ini-\u4E2D\u7684\u53C2\u6570\u8BBE\u7F6E-\u5B9E\u6D4B\u6CA1\u7528" aria-hidden="true">#</a> 2.2 \u65B9\u6CD52\uFF1Adm.ini \u4E2D\u7684\u53C2\u6570\u8BBE\u7F6E\uFF08\u5B9E\u6D4B\u6CA1\u7528\uFF09</h3><p>\u5728 dm.ini \u4E2D\u6709\u4E2A\u53C2\u6570 <code>EXCLUDE_RESERVED_WORDS</code>\uFF0C\u8FD9\u4E2A\u53C2\u6570\u53EF\u4EE5\u7528\u6765\u5C4F\u853D\u4FDD\u7559\u5B57\uFF0C\u5C06\u9700\u8981\u5C4F\u853D\u7684\u4FDD\u7559\u5B57\u5199\u5728 = \u53F7\u540E\u9762\uFF0C\u7136\u540E\u4EE5\u9017\u53F7\u5206\u9694\u3002</p><p>\u8BBE\u7F6E\u5728 dm.ini \u4E2D\u7684\u597D\u5904\u5C31\u662F\u4E00\u65E6\u8BBE\u7F6E\uFF0C\u6C38\u4E45\u751F\u6548\u800C\u4E14\u5BF9\u6240\u6709\u5BA2\u6237\u7AEF\u90FD\u6709\u6548\uFF0C\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u5728\u6240\u6709\u5BA2\u6237\u7AEF\u7CFB\u7EDF\u4E2D\u8FDB\u884C\u4E13\u95E8\u914D\u7F6E\u3002\u4F46\u662F\u8BBE\u7F6E\u5728 dm.ini \u4E2D\u4E4B\u540E\uFF0C\u8FD9\u4E2A\u4FDD\u7559\u5B57\u5C31\u6C38\u4E45\u6027\u5931\u6548\u4E86\uFF0C\u54EA\u6015\u4F60\u60F3\u901A\u8FC7 Manager \u5BA2\u6237\u7AEF\u5DE5\u5177\u5728\u672C\u5730\u8FDE\u63A5\u4E5F\u6CA1\u7528\u4E86\u3002\u800C\u4E14\u8BE5\u65B9\u5F0F\u8FD8\u5B58\u5728\u4E00\u4E2A\u9690\u60A3\u5C31\u662F\u7531\u4E8E\u5C4F\u853D\u6389\u4E86\u4E00\u4E9B\u7CFB\u7EDF\u7684\u4FDD\u7559\u5B57\uFF0C\u6240\u4EE5\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7CFB\u7EDF\u7684\u4E00\u4E9B\u529F\u80FD\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u3002</p><p>\u914D\u7F6E\u8FBE\u68A6\u5B89\u88C5\u6587\u4EF6D:\\dmdbms\\data\\DAMENG\\dm.ini \u5FFD\u7565\u8FD9\u4E9B\u5173\u952E\u8BCD\uFF0C</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">EXCLUDE_RESERVED_WORDS</span>      <span class="token punctuation">=</span>  <span class="token value attr-value">XML,EXCHANGE,DOMAIN,link           #Reserved words to be exclude</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u5F97SQL\u53EF\u4EE5\u4F7F\u7528\u3002</p><h4 id="_2-2-1-\u914D\u7F6E\u56FE\u6587\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u914D\u7F6E\u56FE\u6587\u8BE6\u89E3" aria-hidden="true">#</a> 2.2.1 \u914D\u7F6E\u56FE\u6587\u8BE6\u89E3\uFF1A</h4><p>1.\u627E\u5230dm.ini\u6587\u4EF6</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629152019604.png" alt="image-20210629152019604" loading="lazy"></p><p>2.\u6253\u5F00dm.ini\u6587\u4EF6,Ctrl+F\u627E\u5230\u201CEXCLUDE_RESERVED_WORDS\u201D</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629152046748.png" alt="image-20210629152046748" loading="lazy"></p><p>3.\u5728\u201CEXCLUDE_RESERVED_WORDS\u201D\u7F16\u7801 \u7684 \u7B49\u53F7\u540E\u8FB9\u52A0\u4E0A \u9700\u8981\u5FFD\u7565\u7684\u5173\u952E\u5B57\u201CXML,EXCHANGE,DOMAIN,link\u201D\uFF0C \u4FDD\u5B58\u5373\u53EF\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629152145059.png" alt="image-20210629152145059" loading="lazy"></p><h2 id="_3-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_3-\u603B\u7ED3" aria-hidden="true">#</a> 3. \u603B\u7ED3</h2><p><strong>\u4E0D\u5EFA\u8BAE\u7528\u8FD9\u4E2A\u53C2\u6570\uFF0C\u4F1A\u6709\u4E25\u91CD\u7684\u526F\u4F5C\u7528</strong>\uFF0C\u5E76\u4E14\u6BD4\u8F83\u9690\u853D\uFF1B\u5728\u4E0D\u6539\u8868\u7684\u5B57\u6BB5\u7684\u60C5\u51B5\u4E0B\uFF0C\u6700\u597D\u7684\u65B9\u6848\u662F\u6539\u540D\u5B57\uFF0C\u6B21\u4E4B\u7ED9\u5BF9\u8C61\u540D\u52A0\u53CC\u5F15\u53F7\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0s" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0s" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0s</h2>`,25),c={href:"https://www.modb.pro/db/34639",target:"_blank",rel:"noopener noreferrer"},m=s("\u67E5\u8BE2DM\u8FBE\u68A6\u6570\u636E\u5E93\u5173\u952E\u5B57\u5217\u8868 \u4FDD\u7559\u5B57"),u={href:"https://www.cnblogs.com/zcx-94/p/11936551.html",target:"_blank",rel:"noopener noreferrer"},h=s("\u8FBE\u68A6\u5173\u952E\u5B57(\u5982:XML,EXCHANsGE,DOMAIN,link\u7B49)\u914D\u7F6E\u5FFD\u7565");function g(b,k){const n=l("ExternalLinkIcon");return o(),t("div",null,[p,a("p",null,[a("a",c,[m,e(n)])]),a("p",null,[a("a",u,[h,e(n)])])])}const v=i(d,[["render",g],["__file","dm-problem-keys-domain.html.vue"]]);export{v as default};
