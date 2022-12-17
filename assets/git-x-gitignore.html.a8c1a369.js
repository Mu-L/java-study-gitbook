import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,d as i}from"./app.89cd0885.js";const a={},l=i(`<h1 id="gitignore\u6587\u4EF6\u5C4F\u853D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#gitignore\u6587\u4EF6\u5C4F\u853D\u89C4\u5219" aria-hidden="true">#</a> gitignore\u6587\u4EF6\u5C4F\u853D\u89C4\u5219</h1><p>\u5728\u4F7F\u7528git\u4ED3\u5E93\u65F6\uFF0C\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B\u5C06\u6240\u6709\u7684\u6587\u4EF6\u90FD\u63D0\u4EA4\u5230\u4ED3\u5E93\u4E2D\uFF0C\u9700\u8981\u5BF9\u4E00\u4E9B\u6587\u4EF6\u8FDB\u884C\u5C4F\u853D\uFF0C\u6709\u4E9B\u5219\u8981\u4FDD\u7559</p><p>\u6B64\u65F6\u6211\u4EEC\u5C31\u9700\u8981\u4F7F\u7528\u5230<code>.gitignore</code>\u6587\u4EF6</p><h2 id="_2-gitignore-\u6587\u4EF6\u683C\u5F0F\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_2-gitignore-\u6587\u4EF6\u683C\u5F0F\u89C4\u8303" aria-hidden="true">#</a> 2. gitignore \u6587\u4EF6\u683C\u5F0F\u89C4\u8303</h2><ul><li>\u6240\u6709\u7A7A\u884C\u6216#\u5F00\u901A\u7684\u884C\u90FD\u4F1A\u88AB\u5FFD\u7565</li><li>\u53EF\u4EE5\u4F7F\u7528\u6807\u51C6\u7684<strong>glob \u6A21\u5F0F\u5339\u914D</strong></li><li>\u6587\u4EF6\u6216\u76EE\u5F55\u524D\u52A0<code>/</code>\u8868\u793A\u4ED3\u5E93\u6839\u76EE\u5F55\u7684\u5BF9\u5E94\u6587\u4EF6</li><li>\u5339\u914D\u6A21\u5F0F\u6700\u540E\u8DDF\u53CD\u659C\u6760<code>/</code>\u8BF4\u660E\u8981\u5FFD\u7565\u76EE\u5F55</li><li>\u8981\u7279\u6B8A\u4E0D\u8BB8\u4E86\u67D0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u53EF\u4EE5\u5728\u6A21\u5F0F\u94B1\u52A0\u4E0A\u53D6\u53CD<code>!</code></li></ul><h3 id="_2-1-glob-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-1-glob-\u6A21\u5F0F" aria-hidden="true">#</a> 2.1 glob \u6A21\u5F0F</h3><p>\u5176\u4E2Dglob\u6A21\u5F0F\u662F\u6307shell \u6240\u4F7F\u7528\u7684\u7B80\u5316\u4E86\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</p><ul><li><p>\u661F\u53F7<code>*</code>\u5339\u914D\u96F6\u4E2A\u6216\u591A\u4E2A\u4EFB\u610F\u5B57\u7B26</p></li><li><p><code>[abc]</code>\u5339\u914D\u4EFB\u4F55\u4E00\u4E2A\u5217\u5728\u65B9\u62EC\u53F7\u4E2D\u7684\u5B57\u7B26\uFF08\u8FD9\u4E2A\u4F8B\u5B50\u8981\u4E48\u5339\u914D\u4E00\u4E2Aa\uFF0C\u8981\u4E48\u5339\u914D\u4E00\u4E2Ab\uFF0C\u8981\u4E48\u5339\u914D\u4E00\u4E2Ac\uFF09\uFF0C</p><ul><li><code>\uFF1F</code>\u5339\u914D\u4E00\u4E2A\u4EFB\u610F\u5B57\u7B26</li></ul></li><li><p>\u5982\u679C\u5728\u65B9\u62EC\u53F7\u4E2D\u4F7F\u7528\u77ED\u5212\u7EBF\u5206\u5272\u4E24\u4E2A\u5B57\u7B26\uFF0C\u8868\u793A\u6240\u6709\u5728\u8FD9\u4E24\u4E2A\u5B57\u7B26\u8303\u56F4\u5185\u7684\u90FD\u53EF\u4EE5\u5339\u914D</p><p>\u4F8B\u5982\uFF1A[0-9] \u8868\u793A\u5339\u914D\u6240\u67090-9\u7684\u6570\u5B57</p></li></ul><h2 id="_3-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u6848\u4F8B" aria-hidden="true">#</a> 3. \u6848\u4F8B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*.a                    <span class="token comment"># \u6240\u6709\u4EE5 &#39;.a&#39; \u4E3A\u540E\u7F00\u7684\u6587\u4EF6\u90FD\u5C4F\u853D\u6389</span>
<span class="token comment"># Office \u7F13\u5B58\u6587\u4EF6</span>
~<span class="token string">&#39;$&#39;</span>*.docx
~<span class="token string">&#39;$&#39;</span>*.ppt
~<span class="token string">&#39;$&#39;</span>*.pptx 
~<span class="token string">&#39;$&#39;</span>*.xls

tags                   <span class="token comment"># \u4ED3\u5E93\u4E2D\u6240\u6709\u540D\u4E3A tags \u7684\u6587\u4EF6\u90FD\u5C4F\u853D</span>
core.*                 <span class="token comment"># \u4ED3\u5E93\u4E2D\u6240\u6709\u4EE5 &#39;core.&#39; \u5F00\u5934\u7684\u6587\u4EF6\u90FD\u5C4F\u853D</span>

tools/                <span class="token comment"># \u5C4F\u853D\u76EE\u5F55 tools</span>
log/*                  <span class="token comment"># \u5C4F\u853D\u76EE\u5F55 log \u4E0B\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u4F46\u4E0D\u5C4F\u853D log \u76EE\u5F55\u672C\u8EAB</span>

/log.log               <span class="token comment"># \u53EA\u5C4F\u853D\u4ED3\u5E93\u6839\u76EE\u5F55\u4E0B\u7684 log.log \u6587\u4EF6\uFF0C\u5176\u4ED6\u76EE\u5F55\u4E2D\u7684\u4E0D\u5C4F\u853D</span>
readme.md       <span class="token comment"># \u5C4F\u853D\u4ED3\u5E93\u4E2D\u6240\u6709\u540D\u4E3A readme.md \u7684\u6587\u4EF6</span>
<span class="token operator">!</span>/readme.md     <span class="token comment"># \u5728\u4E0A\u4E00\u6761\u5C4F\u853D\u89C4\u5219\u7684\u6761\u4EF6\u4E0B\uFF0C\u4E0D\u5C4F\u853D\u4ED3\u5E93\u6839\u76EE\u5F55\u4E0B\u7684 readme.md \u6587</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A \u4F8B\u5B50\u4E2D\u7684\u6700\u540E\u4E24\u6761\u7684\u987A\u5E8F\u5F88\u91CD\u8981\uFF0C\u5FC5\u987B\u8981\u5148\u5C4F\u853D\u6240\u6709\u7684\uFF0C\u7136\u540E\u624D\u5EFA\u7ACB\u7279\u6B8A\u4E0D\u5C4F\u853D\u7684\u89C4\u5219\uFF01</p>`,11),o=[l];function d(c,r){return n(),s("div",null,o)}const m=e(a,[["render",d],["__file","git-x-gitignore.html.vue"]]);export{m as default};
