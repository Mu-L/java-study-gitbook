import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.f1a1a4ee.js";const i={},l=e(`<h1 id="linux\u8FDB\u7A0B\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#linux\u8FDB\u7A0B\u76D1\u63A7" aria-hidden="true">#</a> Linux\u8FDB\u7A0B\u76D1\u63A7</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u8FDB\u7A0B\u76D1\u63A7\u547D\u4EE4ps</p><h2 id="_2-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u547D\u4EE4" aria-hidden="true">#</a> 2. \u547D\u4EE4</h2><h3 id="_2-1-ps" tabindex="-1"><a class="header-anchor" href="#_2-1-ps" aria-hidden="true">#</a> 2.1 ps</h3><h4 id="_2-1-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u7B80\u4ECB" aria-hidden="true">#</a> 2.1.1 \u7B80\u4ECB</h4><p>ps\uFF08Process Status\uFF0C\u8FDB\u7A0B\u72B6\u6001\uFF09\u547D\u4EE4 \u7528\u4E8E\u62A5\u544A\u5F53\u524D\u7CFB\u7EDF\u7684\u8FDB\u7A0B\u72B6\u6001\u3002</p><h4 id="_2-1-2-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u8BED\u6CD5" aria-hidden="true">#</a> 2.1.2 \u8BED\u6CD5</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ps [\u53C2\u6570]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E38\u7528\u53C2\u6570\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-A    \u663E\u793A\u6240\u6709\u8FDB\u7A0B\uFF08\u540C-e\uFF09
-a    \u663E\u793A\u5F53\u524D\u7EC8\u7AEF\u7684\u6240\u6709\u8FDB\u7A0B
-u    \u663E\u793A\u8FDB\u7A0B\u7684\u7528\u6237\u4FE1\u606F
-o    \u4EE5\u7528\u6237\u81EA\u5B9A\u4E49\u5F62\u5F0F\u663E\u793A\u8FDB\u7A0B\u4FE1\u606F
-f    \u663E\u793A\u7A0B\u5E8F\u95F4\u7684\u5173\u7CFB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-\u5B57\u6BB5\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u5B57\u6BB5\u542B\u4E49" aria-hidden="true">#</a> 2.1.3 <strong>\u5B57\u6BB5\u542B\u4E49</strong></h4><p>\u5728\u4ECB\u7ECD\u5B9E\u4F8B\u4E4B\u524D\uFF0C\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E0Bps\u547D\u4EE4\u8F93\u51FA\u5404\u5B57\u6BB5\u7684\u542B\u4E49\uFF0C\u8FD9\u6837\u6211\u4EEC\u624D\u80FD\u66F4\u597D\u5730\u7406\u89E3\u6240\u5C55\u793A\u7684\u4FE1\u606F\u3002\u5E38\u89C1\u5B57\u6BB5\u7684\u57FA\u672C\u542B\u4E49\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token environment constant">USER</span>          \u8FDB\u7A0B\u6240\u6709\u8005\u7684\u7528\u6237\u540D
PID           \u8FDB\u7A0BID\uFF08Process ID\uFF09
START         \u8FDB\u7A0B\u6FC0\u6D3B\u65F6\u95F4
%CPU          \u8FDB\u7A0B\u7684cpu\u5360\u7528\u7387
%MEM          \u8FDB\u7A0B\u4F7F\u7528\u5185\u5B58\u7684\u767E\u5206\u6BD4
VSZ           \u8FDB\u7A0B\u4F7F\u7528\u7684\u865A\u62DF\u5185\u5B58\u5927\u5C0F\uFF0C\u4EE5K\u4E3A\u5355\u4F4D
RSS           \u9A7B\u7559\u7A7A\u95F4\u7684\u5927\u5C0F\u3002\u663E\u793A\u5F53\u524D\u5E38\u9A7B\u5185\u5B58\u7684\u7A0B\u5E8F\u7684K\u5B57\u8282\u6570\u3002
TTY           \u4E0E\u8FDB\u7A0B\u5173\u8054\u7684\u7EC8\u7AEF\uFF08tty\uFF09
STAT          \u8FDB\u7A0B\u72B6\u6001\uFF0C\u5305\u62EC\u4E0B\u9762\u7684\u72B6\u6001\uFF1A 
                     D    \u4E0D\u53EF\u4E2D\u65AD     Uninterruptible <span class="token function">sleep</span> <span class="token punctuation">(</span>usually IO<span class="token punctuation">)</span>
                     R    \u6B63\u5728\u8FD0\u884C\uFF0C\u6216\u5728\u961F\u5217\u4E2D\u7684\u8FDB\u7A0B
                     S    \u5904\u4E8E\u4F11\u7720\u72B6\u6001
                     T    \u505C\u6B62\u6216\u88AB\u8FFD\u8E2A
                     Z    \u50F5\u5C38\u8FDB\u7A0B
                     W    \u8FDB\u5165\u5185\u5B58\u4EA4\u6362\uFF08\u4ECE\u5185\u68382.6\u5F00\u59CB\u65E0\u6548\uFF09
                     X    \u6B7B\u6389\u7684\u8FDB\u7A0B
                     <span class="token operator">&lt;</span>    \u9AD8\u4F18\u5148\u7EA7
                     N    \u4F4E\u4F18\u5148\u7EA7
                     L    \u6709\u4E9B\u9875\u88AB\u9501\u8FDB\u5185\u5B58
                     s    \u5305\u542B\u5B50\u8FDB\u7A0B
                     <span class="token punctuation">\\</span>+   \u4F4D\u4E8E\u540E\u53F0\u7684\u8FDB\u7A0B\u7EC4\uFF1B
                     l    \u591A\u7EBF\u7A0B\uFF0C\u514B\u9686\u7EBF\u7A0B

TIME          \u8FDB\u7A0B\u4F7F\u7528\u7684\u603BCPU\u65F6\u95F4
COMMAND       \u88AB\u6267\u884C\u7684\u547D\u4EE4\u884C
NI            \u8FDB\u7A0B\u7684\u4F18\u5148\u7EA7\u503C\uFF0C\u8F83\u5C0F\u7684\u6570\u5B57\u610F\u5473\u7740\u5360\u7528\u8F83\u5C11\u7684CPU\u65F6\u95F4
PRI           \u8FDB\u7A0B\u4F18\u5148\u7EA7\u3002
<span class="token environment constant">PPID</span>          \u7236\u8FDB\u7A0BID
WCHAN         \u8FDB\u7A0B\u7B49\u5F85\u7684\u5185\u6838\u4E8B\u4EF6\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-tldr-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_2-1-4-tldr-\u6587\u6863" aria-hidden="true">#</a> 2.1.4 tldr \u6587\u6863</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  ~ tldr <span class="token function">ps</span>
Cache is out of date. You should run <span class="token string">&quot;tldr --update&quot;</span>

  <span class="token function">ps</span>

  Information about running processes.

  - List all running processes:
    \u663E\u793A\u6240\u6709\u8FD0\u884C\u7684\u8FDB\u7A0B
    <span class="token function">ps</span> aux

  - List all running processes including the full <span class="token builtin class-name">command</span> string:
  	\u5217\u51FA\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\uFF0C\u5305\u62EC\u5B8C\u6574\u7684\u547D\u4EE4\u5B57\u7B26\u4E32
    <span class="token function">ps</span> auxww

  - Search <span class="token keyword">for</span> a process that matches a string:
  	\u641C\u7D22\u4E0E\u5B57\u7B26\u4E32\u5339\u914D\u7684\u8FDB\u7A0B:
    <span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> string

  - List all processes of the current user <span class="token keyword">in</span> extra full format:
  	\u4EE5\u989D\u5916\u5B8C\u6574\u683C\u5F0F\u5217\u51FA\u5F53\u524D\u7528\u6237\u7684\u6240\u6709\u8FDB\u7A0B:
    <span class="token function">ps</span> --user <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -u<span class="token variable">)</span></span> -F

  - List all processes of the current user as a tree:
  	\u4EE5\u6811\u7684\u5F62\u5F0F\u5217\u51FA\u5F53\u524D\u7528\u6237\u7684\u6240\u6709\u8FDB\u7A0B:
    <span class="token function">ps</span> --user <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -u<span class="token variable">)</span></span> f

  - Get the parent pid of a process:
  	\u83B7\u53D6\u8FDB\u7A0B\u7684\u7236\u8FDB\u7A0Bpid:
    <span class="token function">ps</span> -o <span class="token assign-left variable">ppid</span><span class="token operator">=</span> -p pid

  - Sort processes by memory consumption:
  	\u6309\u5185\u5B58\u6D88\u8017\u5BF9\u8FDB\u7A0B\u8FDB\u884C\u6392\u5E8F:
    <span class="token function">ps</span> --sort size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-5-\u5E38\u89C1\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-5-\u5E38\u89C1\u7528\u6CD5" aria-hidden="true">#</a> 2.1.5 \u5E38\u89C1\u7528\u6CD5</h4><h5 id="_2-1-5-1-\u663E\u793A\u6240\u6709\u8FD0\u884C\u7684\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-1-5-1-\u663E\u793A\u6240\u6709\u8FD0\u884C\u7684\u8FDB\u7A0B" aria-hidden="true">#</a> 2.1.5.1 \u663E\u793A\u6240\u6709\u8FD0\u884C\u7684\u8FDB\u7A0B</h5><p>\u628A\u6240\u6709\u8FDB\u7A0B\u663E\u793A\u51FA\u6765\uFF0C\u53EF\u7528\u4F7F\u7528 ps -aux \u6216\u8005 ps -A \u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">ps</span> -aux 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408112800947.png" alt="image-20220408112800947"></p><h5 id="_2-1-5-2-\u663E\u793A\u6240\u6709\u8FDB\u7A0B\u57FA\u672C\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_2-1-5-2-\u663E\u793A\u6240\u6709\u8FDB\u7A0B\u57FA\u672C\u4FE1\u606F" aria-hidden="true">#</a> 2.1.5.2 <strong>\u663E\u793A\u6240\u6709\u8FDB\u7A0B\u57FA\u672C\u4FE1\u606F</strong></h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> -ef
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408112951231.png" alt="image-20220408112951231"></p><h5 id="_2-1-5-3-\u641C\u7D22\u4E0E\u5B57\u7B26\u4E32\u5339\u914D\u7684\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-1-5-3-\u641C\u7D22\u4E0E\u5B57\u7B26\u4E32\u5339\u914D\u7684\u8FDB\u7A0B" aria-hidden="true">#</a> 2.1.5.3 \u641C\u7D22\u4E0E\u5B57\u7B26\u4E32\u5339\u914D\u7684\u8FDB\u7A0B</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">ps</span> -aux <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408113035249.png" alt="image-20220408113035249"></p><h5 id="_2-1-5-4-\u67E5\u770Bcpu-\u8D44\u6E90\u7684\u4F7F\u7528\u91CF\u5BF9\u8FDB\u7A0B\u8FDB\u884C\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-1-5-4-\u67E5\u770Bcpu-\u8D44\u6E90\u7684\u4F7F\u7528\u91CF\u5BF9\u8FDB\u7A0B\u8FDB\u884C\u6392\u5E8F" aria-hidden="true">#</a> 2.1.5.4 <strong>\u67E5\u770BCPU \u8D44\u6E90\u7684\u4F7F\u7528\u91CF\u5BF9\u8FDB\u7A0B\u8FDB\u884C\u6392\u5E8F</strong></h5><p>\u9ED8\u8BA4\u7684\u7ED3\u679C\u96C6\u662F\u672A\u6392\u597D\u5E8F\u7684\u3002\u53EF\u4EE5\u901A\u8FC7 sort\u547D\u4EE4\u6765\u6392\u5E8F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> -aux <span class="token operator">|</span> <span class="token function">sort</span> -nk <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-1-5-4-\u5176\u4ED6\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-5-4-\u5176\u4ED6\u7528\u6CD5" aria-hidden="true">#</a> 2.1.5.4 <strong>\u5176\u4ED6\u7528\u6CD5</strong></h5><p>ps \u7684\u7528\u6CD5\u975E\u5E38\u591A\uFF0C\u8FD9\u91CC\u4EC5\u5217\u4E3E\u4E00\u4E9B\u5E38\u7528\u7684\uFF1A</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token function">ps</span> <span class="token operator">-</span>aux <span class="token punctuation">|</span> grep &lt;name&gt;      <span class="token comment"># \u67E5\u770Bname \u8FDB\u7A0B\u8BE6\u7EC6\u4FE1\u606F</span>
<span class="token function">ps</span> <span class="token operator">-</span>p &lt;pid&gt; <span class="token operator">-</span>L             <span class="token comment"># \u663E\u793A\u8FDB\u7A0B&lt;pid&gt; \u7684\u6240\u6709\u7EBF\u7A0B</span>
<span class="token function">ps</span> <span class="token operator">-</span>o lstart &lt;pid&gt;         <span class="token comment"># \u663E\u793A\u8FDB\u7A0B\u7684\u542F\u52A8\u65F6\u95F4</span>
<span class="token function">ps</span> <span class="token operator">-</span>f <span class="token operator">--</span>forest <span class="token operator">-</span>C &lt;name&gt;   <span class="token comment"># \u7528\u6811\u7684\u98CE\u683C\u663E\u793A\u8FDB\u7A0B\u7684\u5C42\u6B21\u5173\u7CFB</span>
<span class="token function">ps</span> <span class="token operator">-</span>e <span class="token operator">-</span>o pid<span class="token punctuation">,</span>uname<span class="token punctuation">,</span>pcpu<span class="token punctuation">,</span>pmem<span class="token punctuation">,</span>comm<span class="token punctuation">,</span>etime  <span class="token comment"># \u5B9A\u5236\u663E\u793A\u7684\u5217</span>
<span class="token function">ps</span> <span class="token operator">-</span>o lstart &lt;pid&gt;         <span class="token comment"># \u663E\u793A\u8FDB\u7A0B\u7684\u542F\u52A8\u65F6\u95F4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),d=[l];function r(c,t){return s(),a("div",null,d)}var u=n(i,[["render",r],["__file","Linux\u7CFB\u7EDF\u76D1\u63A7-Linux\u8FDB\u7A0B\u76D1\u63A7.html.vue"]]);export{u as default};
