import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as d,a as n,b as l,e as a,d as e,r}from"./app.5d5ee434.js";const o={},c=a(`<h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1 \u7B80\u4ECB</h2><p>find\u662F\u6700\u5E38\u89C1\u548C\u6700\u5F3A\u5927\u7684\u67E5\u627E\u547D\u4EE4\uFF0C\u4F60\u53EF\u4EE5\u7528\u5B83\u627E\u5230\u4EFB\u4F55\u4F60\u60F3\u627E\u7684\u6587\u4EF6\u3002</p><h2 id="_2-\u547D\u4EE4\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u547D\u4EE4\u8BED\u6CD5" aria-hidden="true">#</a> 2 \u547D\u4EE4\u8BED\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> <span class="token operator">&lt;</span> path <span class="token operator">&gt;</span> <span class="token operator">&lt;</span> expression <span class="token operator">&gt;</span> <span class="token operator">&lt;</span> cmd <span class="token operator">&gt;</span>
<span class="token function">find</span> <span class="token operator">&lt;</span>\u6307\u5B9A\u76EE\u5F55<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u6307\u5B9A\u6761\u4EF6<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u6307\u5B9A\u52A8\u4F5C<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>path\uFF1A \u6240\u8981\u641C\u7D22\u7684\u76EE\u5F55\u53CA\u5176\u6240\u6709\u5B50\u76EE\u5F55\u3002\u9ED8\u8BA4\u4E3A\u5F53\u524D\u76EE\u5F55\u3002</li><li>expression\uFF1A \u6240\u8981\u641C\u7D22\u7684\u6587\u4EF6\u7684\u7279\u5F81\u3002</li><li>cmd\uFF1A \u5BF9\u641C\u7D22\u7ED3\u679C\u8FDB\u884C\u7279\u5B9A\u7684\u5904\u7406\u3002</li></ul><p>\u5982\u679C\u4EC0\u4E48\u53C2\u6570\u4E5F\u4E0D\u52A0\uFF0Cfind\u9ED8\u8BA4\u641C\u7D22\u5F53\u524D\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\uFF0C\u5E76\u4E14\u4E0D\u8FC7\u6EE4\u4EFB\u4F55\u7ED3\u679C\uFF08\u4E5F\u5C31\u662F\u8FD4\u56DE\u6240\u6709\u6587\u4EF6\uFF09\uFF0C\u5C06\u5B83\u4EEC\u5168\u90FD\u663E\u793A\u5728\u5C4F\u5E55\u4E0A\u3002</p><h2 id="_3-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9E\u4F8B" aria-hidden="true">#</a> 3 \u5B9E\u4F8B</h2><h3 id="_3-1-\u6309\u6269\u5C55\u540D\u67E5\u627E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6309\u6269\u5C55\u540D\u67E5\u627E\u6587\u4EF6" aria-hidden="true">#</a> 3.1 \u6309\u6269\u5C55\u540D\u67E5\u627E\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token comment"># \u8BED\u6CD5</span>
 <span class="token function">find</span> root_path -name <span class="token string">&#39;*.ext&#39;</span>
 <span class="token comment"># \u793A\u4F8B</span>
 <span class="token function">find</span> /home -name <span class="token string">&quot;*.txt&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u5728\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6A21\u5F0F\u4E0B-\u67E5\u627E\u4E0E\u7ED9\u5B9A\u540D\u79F0\u5339\u914D\u7684\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5728\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6A21\u5F0F\u4E0B-\u67E5\u627E\u4E0E\u7ED9\u5B9A\u540D\u79F0\u5339\u914D\u7684\u76EE\u5F55" aria-hidden="true">#</a> 3.2 \u5728\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6A21\u5F0F\u4E0B\uFF0C\u67E5\u627E\u4E0E\u7ED9\u5B9A\u540D\u79F0\u5339\u914D\u7684\u76EE\u5F55</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token comment"># \u8BED\u6CD5</span>
<span class="token function">find</span> root_path -type d -iname <span class="token string">&#39;*lib*&#39;</span>
 <span class="token comment"># \u793A\u4F8B</span>
 <span class="token function">find</span> /home -type d -name <span class="token string">&quot;*service*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u901A\u8FC7\u5339\u914D\u591A\u4E2A\u6A21\u5F0F\u67E5\u627E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-3-\u901A\u8FC7\u5339\u914D\u591A\u4E2A\u6A21\u5F0F\u67E5\u627E\u6587\u4EF6" aria-hidden="true">#</a> 3.3 \u901A\u8FC7\u5339\u914D\u591A\u4E2A\u6A21\u5F0F\u67E5\u627E\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token comment"># \u8BED\u6CD5</span>
<span class="token function">find</span> root_path -name <span class="token string">&#39;*pattern_1*&#39;</span> -or -name <span class="token string">&#39;*pattern_2*&#39;</span>
 <span class="token comment"># \u793A\u4F8B</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> -name <span class="token string">&quot;*.txt&quot;</span> -o -name <span class="token string">&quot;*.pdf&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u67E5\u627E\u4E0E\u8DEF\u5F84\u6A21\u5F0F\u5339\u914D\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-4-\u67E5\u627E\u4E0E\u8DEF\u5F84\u6A21\u5F0F\u5339\u914D\u7684\u6587\u4EF6" aria-hidden="true">#</a> 3.4 \u67E5\u627E\u4E0E\u8DEF\u5F84\u6A21\u5F0F\u5339\u914D\u7684\u6587\u4EF6:</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token comment"># \u8BED\u6CD5</span>
 <span class="token function">find</span> root_path -path <span class="token string">&#39;**/lib/**/*.ext&#39;</span>
  <span class="token comment"># \u793A\u4F8B</span>
 <span class="token function">find</span> /usr/ -path <span class="token string">&quot;*local*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5\u67E5\u627E\u4E0E\u7ED9\u5B9A\u5927\u5C0F\u8303\u56F4\u5339\u914D\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-5\u67E5\u627E\u4E0E\u7ED9\u5B9A\u5927\u5C0F\u8303\u56F4\u5339\u914D\u7684\u6587\u4EF6" aria-hidden="true">#</a> 3.5\u67E5\u627E\u4E0E\u7ED9\u5B9A\u5927\u5C0F\u8303\u56F4\u5339\u914D\u7684\u6587\u4EF6:</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> root_path -size +500k -size -10M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-6-\u627E\u5230\u6700\u8FD17\u5929\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6-\u5E76\u5220\u9664\u5B83\u4EEC" tabindex="-1"><a class="header-anchor" href="#_3-6-\u627E\u5230\u6700\u8FD17\u5929\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6-\u5E76\u5220\u9664\u5B83\u4EEC" aria-hidden="true">#</a> 3.6 \u627E\u5230\u6700\u8FD17\u5929\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6\uFF0C\u5E76\u5220\u9664\u5B83\u4EEC:</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> root_path -mtime -7 -delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-7-\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#_3-7-\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u641C\u7D22" aria-hidden="true">#</a> 3.7 \u6839\u636E\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u641C\u7D22</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -type \u7C7B\u578B\u53C2\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u53C2\u6570\u5217\u8868\uFF1A</p><ul><li><strong>f</strong> \u666E\u901A\u6587\u4EF6</li><li><strong>l</strong> \u7B26\u53F7\u8FDE\u63A5</li><li><strong>d</strong> \u76EE\u5F55</li><li><strong>c</strong> \u5B57\u7B26\u8BBE\u5907</li><li><strong>b</strong> \u5757\u8BBE\u5907</li><li><strong>s</strong> \u5957\u63A5\u5B57</li><li><strong>p</strong> Fifo</li></ul><h3 id="_3-8-\u6839\u636E\u6587\u4EF6\u65F6\u95F4\u6233\u8FDB\u884C\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#_3-8-\u6839\u636E\u6587\u4EF6\u65F6\u95F4\u6233\u8FDB\u884C\u641C\u7D22" aria-hidden="true">#</a> 3.8 \u6839\u636E\u6587\u4EF6\u65F6\u95F4\u6233\u8FDB\u884C\u641C\u7D22</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -type f \u65F6\u95F4\u6233
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>UNIX/Linux\u6587\u4EF6\u7CFB\u7EDF\u6BCF\u4E2A\u6587\u4EF6\u90FD\u6709\u4E09\u79CD\u65F6\u95F4\u6233\uFF1A</p><ul><li><strong>\u8BBF\u95EE\u65F6\u95F4</strong>\uFF08-atime/\u5929\uFF0C-amin/\u5206\u949F\uFF09\uFF1A\u7528\u6237\u6700\u8FD1\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4\u3002</li><li><strong>\u4FEE\u6539\u65F6\u95F4</strong>\uFF08-mtime/\u5929\uFF0C-mmin/\u5206\u949F\uFF09\uFF1A\u6587\u4EF6\u6700\u540E\u4E00\u6B21\u4FEE\u6539\u65F6\u95F4\u3002</li><li><strong>\u53D8\u5316\u65F6\u95F4</strong>\uFF08-ctime/\u5929\uFF0C-cmin/\u5206\u949F\uFF09\uFF1A\u6587\u4EF6\u6570\u636E\u5143\uFF08\u4F8B\u5982\u6743\u9650\u7B49\uFF09\u6700\u540E\u4E00\u6B21\u4FEE\u6539\u65F6\u95F4\u3002</li></ul><p>\u641C\u7D22\u6700\u8FD1\u4E03\u5929\u5185\u88AB\u8BBF\u95EE\u8FC7\u7684\u6240\u6709\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -type f -atime -7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u641C\u7D22\u6070\u597D\u5728\u4E03\u5929\u524D\u88AB\u8BBF\u95EE\u8FC7\u7684\u6240\u6709\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -type f -atime 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u641C\u7D22\u8D85\u8FC7\u4E03\u5929\u5185\u88AB\u8BBF\u95EE\u8FC7\u7684\u6240\u6709\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -type f -atime +7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u641C\u7D22\u8BBF\u95EE\u65F6\u95F4\u8D85\u8FC710\u5206\u949F\u7684\u6240\u6709\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -type f -amin +10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35),p=e("\u627E\u51FA\u6BD4"),u={href:"http://man.linuxde.net/file",target:"_blank",rel:"noopener noreferrer"},h=e("file"),m=e(".log\u4FEE\u6539\u65F6\u95F4\u66F4\u957F\u7684\u6240\u6709\u6587\u4EF6"),v=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find . -type f -newer file.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,2);function g(b,f){const s=r("ExternalLinkIcon");return t(),d("div",null,[c,n("p",null,[p,n("a",u,[h,l(s)]),m]),v])}var k=i(o,[["render",g],["__file","Linux\u67E5\u627E\u547D\u4EE4-Linux-find\u547D\u4EE4\u67E5\u627E\u6587\u4EF6.html.vue"]]);export{k as default};
