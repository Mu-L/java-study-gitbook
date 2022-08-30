import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,a as e,b as t,e as l,d as r,r as d}from"./app.24aaacd5.js";const c={},o=l(`<h1 id="mac-linux\u538B\u6D4Bsiege" tabindex="-1"><a class="header-anchor" href="#mac-linux\u538B\u6D4Bsiege" aria-hidden="true">#</a> Mac/Linux\u538B\u6D4BSiege</h1><h2 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1. \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew install siege
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u5B89\u88C5\u5728<code>/usr/local/bin/</code>\uFF0C\u5E76\u81EA\u52A8\u6DFB\u52A0\u5230\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u4E2D,\u5728\u7EC8\u7AEF\u8F93\u5165<code>siege</code> \u5982\u679C\u53EF\u4EE5\u663E\u793A\u51FA\u76F8\u5E94\u7684\u547D\u4EE4\u4ECB\u7ECD\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u5219\u8868\u793A\u6211\u4EEC\u5DF2\u7ECF\u5B89\u88C5\u6210\u529F\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191230151706948.png" alt="image-20191230151706948"></p><h2 id="_2-\u538B\u6D4B\u524D\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-\u538B\u6D4B\u524D\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 2. \u538B\u6D4B\u524D\u51C6\u5907\u5DE5\u4F5C</h2><h3 id="_2-1-\u4FEE\u6539\u7CFB\u7EDF\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4FEE\u6539\u7CFB\u7EDF\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u9650\u5236" aria-hidden="true">#</a> 2.1 \u4FEE\u6539\u7CFB\u7EDF\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u9650\u5236</h3><p>\u5F53\u6211\u4EEC\u9700\u8981\u6A21\u62DF\u5927\u5E76\u53D1\u60C5\u51B5\u4E0B\u7684\u538B\u6D4B\uFF0C\u5219\u9700\u8981\u5F00\u542F\u6570\u91CF\u53EF\u89C2\u7684\u7EBF\u7A0B\uFF0C\u4EE5\u53CA\u8981\u5360\u7528\u5927\u91CF\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF0C\u800C\u7CFB\u7EDF\u9ED8\u8BA4\u5BF9\u80FD\u591F\u4F7F\u7528\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u91CF\u505A\u4E86\u9650\u5236\u3002\u9996\u5148\u4F7F\u7528 <code>ulimit -a</code> \u547D\u4EE4\u67E5\u770B\u76EE\u524D\u7CFB\u7EDF\u5F00\u542F\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u91CF</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191230165203813.png" alt="image-20191230165203813"></p><p>\u53EF\u4EE5\u770B\u5230\u76EE\u524D\u7CFB\u7EDF\u5141\u8BB8\u4F7F\u7528\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u6570\u91CF\u4E3A 256\uFF0C\u8FD9\u662F\u8FDC\u8FDC\u4E0D\u591F\u7684\u3002\u5982\u679C\u4E0D\u4FEE\u6539\u8BE5\u53C2\u6570\uFF0C\u8981\u662F\u8FDB\u884C\u5927\u91CF\u5E76\u53D1\u7684\u6A21\u62DF\u573A\u666F\u65F6\u5219\u4F1A\u62A5<code>TOO MANY FILES OPEN</code> \u9519\u8BEF\u3002\u4E3A\u6B64\u6211\u4EEC\u53EF\u4EE5\u5148\u4F7F\u7528 <code>ulimit -n 10000</code>\u547D\u4EE4\u6765\u8C03\u5927\u7CFB\u7EDF\u53EF\u6253\u5F00\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u91CF\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191230165254044.png" alt="image-20191230165254044"></p><h2 id="_3-\u5E38\u7528\u538B\u6D4B\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-\u5E38\u7528\u538B\u6D4B\u547D\u4EE4" aria-hidden="true">#</a> 3. \u5E38\u7528\u538B\u6D4B\u547D\u4EE4</h2><p>\u4E0B\u9762\u5217\u4E3E\u51FA\u4E86\u4E00\u4E9Bsiege\u7684\u5E38\u7528\u547D\u4EE4:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-C, --config \u5728\u5C4F\u5E55\u4E0A\u6253\u5370\u663E\u793A\u51FA\u5F53\u524D\u7684\u914D\u7F6E,\u914D\u7F6E\u662F\u5305\u62EC\u5728\u4ED6\u7684\u914D\u7F6E\u6587\u4EF6$HOME/.siegerc\u4E2D,\u53EF\u4EE5\u7F16\u8F91\u91CC\u9762\u7684\u53C2\u6570,\u8FD9\u6837\u6BCF\u6B21siege \u90FD\u4F1A\u6309\u7167\u5B83\u8FD0\u884C.
-v, --verbose \u8FD0\u884C\u65F6\u80FD\u770B\u5230\u8BE6\u7EC6\u7684\u8FD0\u884C\u4FE1\u606F.
-c, --concurrent=NUM \u6A21\u62DF\u6709n\u4E2A\u7528\u6237\u5728\u540C\u65F6\u8BBF\u95EE,n\u4E0D\u8981\u8BBE\u5F97\u592A\u5927,\u56E0\u4E3A\u8D8A\u5927,siege\u6D88\u8017\u672C\u5730\u673A\u5668\u7684\u8D44\u6E90\u8D8A\u591A.
-r, --reps=NUM \u91CD\u590D\u8FD0\u884C\u6D4B\u8BD5n\u6B21,\u4E0D\u80FD\u4E0E-t\u540C\u65F6\u5B58\u5728
-t, --time=NUMm \u6301\u7EED\u8FD0\u884Csiege \u2018n\u2019\u79D2(\u598210S),\u5206\u949F(10M),\u5C0F\u65F6(10H)
-d, --delay=NUM \u6BCF\u4E2Aurl\u4E4B\u95F4\u7684\u5EF6\u8FDF,\u57280-n\u4E4B\u95F4.
-b, --benchmark \u8BF7\u6C42\u65E0\u9700\u7B49\u5F85 delay=0.
-i, --internet \u968F\u673A\u8BBF\u95EEurls.txt\u4E2D\u7684url\u5217\u8868\u9879.
-f, --file=FILE \u6307\u5B9A\u7528\u7279\u5B9A\u7684urls\u6587\u4EF6\u8FD0\u884C ,\u9ED8\u8BA4\u4E3Aurls.txt,\u4F4D\u4E8Esiege\u5B89\u88C5\u76EE\u5F55\u4E0B\u7684etc/urls.txt
-R, --rc=FILE \u6307\u5B9A\u7528\u7279\u5B9A\u7684siege \u914D\u7F6E\u6587\u4EF6\u6765\u8FD0\u884C,\u9ED8\u8BA4\u7684\u4E3A$HOME/.siegerc
-l, --log[=FILE] \u8FD0\u884C\u7ED3\u675F,\u5C06\u7EDF\u8BA1\u6570\u636E\u4FDD\u5B58\u5230\u65E5\u5FD7\u6587\u4EF6\u4E2Dsiege .log,\u4E00\u822C\u4F4D\u4E8E/usr/local/var/siege .log\u4E2D,\u4E5F\u53EF\u5728.siegerc\u4E2D\u81EA\u5B9A\u4E49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5C0F\u8BD5\u725B\u5200" tabindex="-1"><a class="header-anchor" href="#_4-\u5C0F\u8BD5\u725B\u5200" aria-hidden="true">#</a> 4. \u5C0F\u8BD5\u725B\u5200</h2><p>\u505A\u597D\u4E86\u524D\u9762\u7684\u51C6\u5907\u5DE5\u4F5C\uFF0C\u6211\u4EEC\u4FBF\u53EF\u4EE5\u4F7F\u7528siege\u8FDB\u884C\u538B\u6D4B\u7684\u5B9E\u8DF5\uFF0C\u5C31\u62FF\u6211\u4EEC\u7ECF\u5E38\u8BBF\u95EE\u7684\u767E\u5EA6\u6765\u505A\u4E00\u4E2A\u6D4B\u8BD5\uFF0C\u5728\u547D\u4EE4\u884C\u4E2D\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>siege -c 5 -r 5 http://www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191230170159374.png" alt="image-20191230170159374"></p><p>\u8FD9\u4E9B\u6D4B\u8BD5\u7ED3\u679C\u4E2D\u7684\u9879\u76EE\u542B\u4E49\u5206\u522B\u4E3A\uFF1A</p><blockquote><p>Transactions &lt;\u2014\u2014\u2014&gt; \u603B\u5171\u6D4B\u8BD5\u6B21\u6570 Availability &lt;\u2014\u2014\u2014&gt; \u6210\u529F\u6B21\u6570\u767E\u5206\u6BD4 Elapsed time &lt;\u2014\u2014\u2014&gt; \u603B\u5171\u8017\u65F6\u591A\u5C11\u79D2 Data transferred &lt;\u2014\u2014\u2014&gt; \u603B\u5171\u6570\u636E\u4F20\u8F93 Response time &lt;\u2014\u2014\u2014&gt; \u7B49\u5230\u54CD\u5E94\u8017\u65F6 Transaction rate &lt;\u2014\u2014\u2014&gt; \u5E73\u5747\u6BCF\u79D2\u5904\u7406\u8BF7\u6C42\u6570 Throughput &lt;\u2014\u2014\u2014&gt; \u541E\u5410\u7387 Concurrency &lt;\u2014\u2014\u2014&gt; \u6700\u9AD8\u5E76\u53D1 Successful transactions &lt;\u2014\u2014\u2014&gt; \u6210\u529F\u7684\u8BF7\u6C42\u6570 Failed transactions &lt;\u2014\u2014\u2014&gt; \u5931\u8D25\u7684\u8BF7\u6C42\u6570 Longest transaction &lt;\u2014\u2014\u2014&gt; \u6BCF\u6B21\u4F20\u8F93\u6240\u82B1\u6700\u957F\u65F6\u95F4 Shortest transaction &lt;\u2014\u2014\u2014&gt; \u6BCF\u6B21\u4F20\u8F93\u6240\u82B1\u6700\u77ED\u65F6\u95F4</p></blockquote><h2 id="_5-\u5E38\u7528\u547D\u4EE4\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u5E38\u7528\u547D\u4EE4\u603B\u7ED3" aria-hidden="true">#</a> 5. \u5E38\u7528\u547D\u4EE4\u603B\u7ED3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 200\u4E2A\u5E76\u53D1\u5BF9\u767E\u5EA6\u53D1\u9001\u8BF7\u6C42100\u6B21
siege -c 200 -r 100 http://www.baidu.com

# \u5BF9urls.txt\u4E2D\u5217\u51FA\u6240\u6709\u7684\u7F51\u5740\u8FDB\u884C\u538B\u6D4B
siege -c 200 -r 100 -f urls.txt

# \u968F\u673A\u9009\u53D6urls.txt\u4E2D\u5217\u51FA\u7684\u7F51\u5740,\u6309\u7167100*100\u7684\u5E76\u53D1\u5EA6\u8FDB\u884C\u6D4B\u8BD5
siege -c 100 -r 100 -f urls.txt -i

# \u6307\u5B9Ahttp\u8BF7\u6C42\u5934 \u6587\u6863\u7C7B\u578B
siege -H &quot;Content-Type:application/json&quot; -c 200 -r 100 -f urls.txt -i -b

# \u53D1\u9001post\u8BF7\u6C42\uFF0C\u5728\u7F51\u5740\u540E\u6DFB\u52A0POST\u8BF4\u660E\uFF0C\u5E76\u4E14\u7D27\u8DDF\u53C2\u6570\u5728\u5176\u540E
siege -c 100 -r 100 http://www.baidu.com/ POST k1=v1&amp;k2=v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u5730\u5740\u548C\u53C2\u6570\u4E2D\u542B\u6709\u4E2D\u6587\u6216\u975EASCII\u5B57\u7B26\u65F6\uFF0C\u9996\u5148\u9700\u8981\u5BF9\u8FD9\u4E9B\u5B57\u7B26\u8FDB\u884Curl\u7F16\u7801\uFF0C\u8FD9\u6837\u624D\u53EF\u6B63\u786E\u7684\u8FDB\u884C\u6D4B\u8BD5\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,25),g={href:"https://blog.csdn.net/lisongjia123/article/details/79718843",target:"_blank",rel:"noopener noreferrer"},u=r("Mac/Linux\u538B\u529B\u6D4B\u8BD5\u795E\u5668Siege\u8BE6\u89E3(\u9644\u5B89\u88C5\u8FC7\u7A0B");function m(v,b){const i=d("ExternalLinkIcon");return n(),s("div",null,[o,e("p",null,[e("a",g,[u,t(i)])])])}var x=a(c,[["render",m],["__file","Mac\u538B\u6D4BSiege.html.vue"]]);export{x as default};
