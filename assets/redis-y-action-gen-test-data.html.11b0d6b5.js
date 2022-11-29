import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,d as a}from"./app.75100209.js";const d={},t=a(`<h1 id="\u6279\u91CF\u751F\u6210redis\u6D4B\u8BD5\u6570\u636E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6279\u91CF\u751F\u6210redis\u6D4B\u8BD5\u6570\u636E\u65B9\u6CD5" aria-hidden="true">#</a> \u6279\u91CF\u751F\u6210redis\u6D4B\u8BD5\u6570\u636E\u65B9\u6CD5</h1><h2 id="_1-linux-bash\u4E0B\u9762\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_1-linux-bash\u4E0B\u9762\u6267\u884C" aria-hidden="true">#</a> 1. Linux Bash\u4E0B\u9762\u6267\u884C</h2><div class="language-ssh ext-ssh line-numbers-mode"><pre class="language-ssh"><code>for((i=1;i&lt;=20000000;i++)); do echo &quot;set k$i v$i&quot; &gt;&gt; /tmp/redisTest.txt ;done;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u751F\u62102\u5343\u4E07\u6761redis\u6279\u91CF\u8BBE\u7F6Ekv\u7684\u8BED\u53E5(key=kn,value=vn)\u5199\u5165\u5230/tmp\u76EE\u5F55\u4E0B\u7684redisTest.txt\u6587\u4EF6\u4E2D</p><h2 id="_2-\u7528vim\u53BB\u6389\u884C\u5C3E\u7684-m\u7B26\u53F7-\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-\u7528vim\u53BB\u6389\u884C\u5C3E\u7684-m\u7B26\u53F7-\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B" aria-hidden="true">#</a> 2.\u7528vim\u53BB\u6389\u884C\u5C3E\u7684^M\u7B26\u53F7\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /tmp/redisTest.txt
:set fileformat=dos #\u8BBE\u7F6E\u6587\u4EF6\u7684\u683C\u5F0F\uFF0C\u901A\u8FC7\u8FD9\u53E5\u8BDD\u53BB\u6389\u6BCF\u884C\u7ED3\u5C3E\u7684^M\u7B26\u53F7
:wq #\u4FDD\u5B58\u9000\u51FA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u901A\u8FC7redis\u63D0\u4F9B\u7684\u7BA1\u9053\u2013pipe\u5F62\u5F0F-\u53BB\u8DD1redis-\u4F20\u5165\u6587\u4EF6\u7684\u6307\u4EE4\u6279\u91CF\u704C\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-\u901A\u8FC7redis\u63D0\u4F9B\u7684\u7BA1\u9053\u2013pipe\u5F62\u5F0F-\u53BB\u8DD1redis-\u4F20\u5165\u6587\u4EF6\u7684\u6307\u4EE4\u6279\u91CF\u704C\u6570\u636E" aria-hidden="true">#</a> 3.\u901A\u8FC7redis\u63D0\u4F9B\u7684\u7BA1\u9053\u2013pipe\u5F62\u5F0F\uFF0C\u53BB\u8DD1redis\uFF0C\u4F20\u5165\u6587\u4EF6\u7684\u6307\u4EE4\u6279\u91CF\u704C\u6570\u636E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /tmp/redisTest.txt | \u8DEF\u5F84/redis-5.0.0/src/redis-cli -h \u4E3B\u673Aip -p \u7AEF\u53E3\u53F7 --pipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u672C\u673A\u7684\u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /tmp/redisTest.txt | /usr/local/redis/bin/redis-cli -h localhost -p 6379  --pipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5927\u6982\u9700\u8981\u82B110\u5206\u949F\u5DE6\u53F3</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210410103828296.png" alt="image-20210410103828296" loading="lazy"></p>`,12),r=[t];function n(l,c){return i(),s("div",null,r)}const m=e(d,[["render",n],["__file","redis-y-action-gen-test-data.html.vue"]]);export{m as default};