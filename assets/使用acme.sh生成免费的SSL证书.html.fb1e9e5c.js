import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c,a as e,b as i,d as a,e as s,r}from"./app.24aaacd5.js";const l={},o=e("h1",{id:"\u4F7F\u7528acme-sh\u751F\u6210\u514D\u8D39\u7684ssl\u8BC1\u4E66",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F7F\u7528acme-sh\u751F\u6210\u514D\u8D39\u7684ssl\u8BC1\u4E66","aria-hidden":"true"},"#"),a(" \u4F7F\u7528acme.sh\u751F\u6210\u514D\u8D39\u7684SSL\u8BC1\u4E66")],-1),m={href:"https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},h=a("\u5B98\u7F51\u4E2D\u6587\u4ECB\u7ECD"),p=e("p",null,"\u6B64\u6587\u4EC5\u8BB0\u5F55\u6211\u7684\u5B9E\u64CD\u8BB0\u5F55\uFF0C\u4E0E\u9047\u5230\u7684\u76F8\u5173\u95EE\u9898",-1),u=s(`<p><strong>acme.sh</strong> \u5B9E\u73B0\u4E86 <code>acme</code> \u534F\u8BAE, \u53EF\u4EE5\u4ECE letsencrypt \u751F\u6210\u514D\u8D39\u7684\u8BC1\u4E66.</p><p>\u4E3B\u8981\u6B65\u9AA4:</p><ol><li>\u5B89\u88C5 <strong>acme.sh</strong></li><li>\u751F\u6210\u8BC1\u4E66</li><li>copy \u8BC1\u4E66\u5230 nginx/apache \u6216\u8005\u5176\u4ED6\u670D\u52A1</li><li>\u66F4\u65B0\u8BC1\u4E66</li><li>\u66F4\u65B0 <strong>acme.sh</strong></li><li>\u51FA\u9519\u600E\u4E48\u529E, \u5982\u4F55\u8C03\u8BD5</li></ol><p>\u4E0B\u9762\u8BE6\u7EC6\u4ECB\u7ECD.</p><h2 id="_1-\u5B89\u88C5-acme-sh" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-acme-sh" aria-hidden="true">#</a> 1. \u5B89\u88C5 <strong>acme.sh</strong></h2><p>\u5B89\u88C5\u5F88\u7B80\u5355, \u4E00\u4E2A\u547D\u4EE4:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl  https://get.acme.sh | sh -s email=my@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u666E\u901A\u7528\u6237\u548C root \u7528\u6237\u90FD\u53EF\u4EE5\u5B89\u88C5\u4F7F\u7528. \u5B89\u88C5\u8FC7\u7A0B\u8FDB\u884C\u4E86\u4EE5\u4E0B\u51E0\u6B65:</p><ol><li>\u628A acme.sh \u5B89\u88C5\u5230\u4F60\u7684 <strong>home</strong> \u76EE\u5F55\u4E0B:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>~/.acme.sh/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E76\u521B\u5EFA \u4E00\u4E2A bash \u7684 alias, \u65B9\u4FBF\u4F60\u7684\u4F7F\u7528: <code>alias acme.sh=~/.acme.sh/acme.sh</code></p><ol><li>\u81EA\u52A8\u4E3A\u4F60\u521B\u5EFA cronjob, \u6BCF\u5929 0:00 \u70B9\u81EA\u52A8\u68C0\u6D4B\u6240\u6709\u7684\u8BC1\u4E66, \u5982\u679C\u5FEB\u8FC7\u671F\u4E86, \u9700\u8981\u66F4\u65B0, \u5219\u4F1A\u81EA\u52A8\u66F4\u65B0\u8BC1\u4E66.</li></ol><p>\u66F4\u9AD8\u7EA7\u7684\u5B89\u88C5\u9009\u9879\u8BF7\u53C2\u8003: https://github.com/Neilpang/acme.sh/wiki/How-to-install</p><p><strong>\u5B89\u88C5\u8FC7\u7A0B\u4E0D\u4F1A\u6C61\u67D3\u5DF2\u6709\u7684\u7CFB\u7EDF\u4EFB\u4F55\u529F\u80FD\u548C\u6587\u4EF6</strong>, \u6240\u6709\u7684\u4FEE\u6539\u90FD\u9650\u5236\u5728\u5B89\u88C5\u76EE\u5F55\u4E2D: <code>~/.acme.sh/</code></p><h2 id="_2-\u751F\u6210\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_2-\u751F\u6210\u8BC1\u4E66" aria-hidden="true">#</a> 2. \u751F\u6210\u8BC1\u4E66</h2><p><strong>acme.sh</strong> \u5B9E\u73B0\u4E86 <strong>acme</strong> \u534F\u8BAE\u652F\u6301\u7684\u6240\u6709\u9A8C\u8BC1\u534F\u8BAE. \u4E00\u822C\u6709\u4E24\u79CD\u65B9\u5F0F\u9A8C\u8BC1: http \u548C dns \u9A8C\u8BC1.</p><h3 id="_2-1-http-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-1-http-\u65B9\u5F0F" aria-hidden="true">#</a> 2.1. http \u65B9\u5F0F</h3><h4 id="_2-1-1-\u57FA\u7840\u4F7F\u7528-\u6307\u5B9A\u7F51\u7AD9\u6839\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u57FA\u7840\u4F7F\u7528-\u6307\u5B9A\u7F51\u7AD9\u6839\u76EE\u5F55" aria-hidden="true">#</a> 2.1.1 \u57FA\u7840\u4F7F\u7528\uFF08\u6307\u5B9A\u7F51\u7AD9\u6839\u76EE\u5F55\uFF09</h4><p>\u9700\u8981\u5728\u4F60\u7684\u7F51\u7AD9\u6839\u76EE\u5F55\u4E0B\u653E\u7F6E\u4E00\u4E2A\u6587\u4EF6, \u6765\u9A8C\u8BC1\u4F60\u7684\u57DF\u540D\u6240\u6709\u6743,\u5B8C\u6210\u9A8C\u8BC1. \u7136\u540E\u5C31\u53EF\u4EE5\u751F\u6210\u8BC1\u4E66\u4E86.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh  --issue  -d mydomain.com -d www.mydomain.com  --webroot  /home/wwwroot/mydomain.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EA\u9700\u8981\u6307\u5B9A\u57DF\u540D, \u5E76\u6307\u5B9A\u57DF\u540D\u6240\u5728\u7684\u7F51\u7AD9\u6839\u76EE\u5F55. <strong>acme.sh</strong> \u4F1A\u5168\u81EA\u52A8\u7684\u751F\u6210\u9A8C\u8BC1\u6587\u4EF6, \u5E76\u653E\u5230\u7F51\u7AD9\u7684\u6839\u76EE\u5F55, \u7136\u540E\u81EA\u52A8\u5B8C\u6210\u9A8C\u8BC1. \u6700\u540E\u4F1A\u806A\u660E\u7684\u5220\u9664\u9A8C\u8BC1\u6587\u4EF6. \u6574\u4E2A\u8FC7\u7A0B\u6CA1\u6709\u4EFB\u4F55\u526F\u4F5C\u7528.</p><h4 id="_2-1-2-apache\u670D\u52A1\u5668-nginx\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_2-1-2-apache\u670D\u52A1\u5668-nginx\u670D\u52A1\u5668" aria-hidden="true">#</a> 2.1.2 <strong>apache</strong>\u670D\u52A1\u5668/nginx\u670D\u52A1\u5668</h4><p>\u5982\u679C\u4F60\u7528\u7684 <strong>apache</strong>\u670D\u52A1\u5668, <strong>acme.sh</strong> \u8FD8\u53EF\u4EE5\u667A\u80FD\u7684\u4ECE <strong>apache</strong>\u7684\u914D\u7F6E\u4E2D\u81EA\u52A8\u5B8C\u6210\u9A8C\u8BC1, \u4F60\u4E0D\u9700\u8981\u6307\u5B9A\u7F51\u7AD9\u6839\u76EE\u5F55:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh --issue  -d mydomain.com   --apache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u7528\u7684 <strong>nginx</strong>\u670D\u52A1\u5668, \u6216\u8005\u53CD\u4EE3, <strong>acme.sh</strong> \u8FD8\u53EF\u4EE5\u667A\u80FD\u7684\u4ECE <strong>nginx</strong>\u7684\u914D\u7F6E\u4E2D\u81EA\u52A8\u5B8C\u6210\u9A8C\u8BC1, \u4F60\u4E0D\u9700\u8981\u6307\u5B9A\u7F51\u7AD9\u6839\u76EE\u5F55:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh --issue  -d mydomain.com   --nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F, \u65E0\u8BBA\u662F apache \u8FD8\u662F nginx \u6A21\u5F0F, acme.sh\u5728\u5B8C\u6210\u9A8C\u8BC1\u4E4B\u540E, \u4F1A\u6062\u590D\u5230\u4E4B\u524D\u7684\u72B6\u6001, \u90FD\u4E0D\u4F1A\u79C1\u81EA\u66F4\u6539\u4F60\u672C\u8EAB\u7684\u914D\u7F6E. \u597D\u5904\u662F\u4F60\u4E0D\u7528\u62C5\u5FC3\u914D\u7F6E\u88AB\u641E\u574F, \u4E5F\u6709\u4E00\u4E2A\u7F3A\u70B9, \u4F60\u9700\u8981\u81EA\u5DF1\u914D\u7F6E ssl \u7684\u914D\u7F6E, \u5426\u5219\u53EA\u80FD\u6210\u529F\u751F\u6210\u8BC1\u4E66, \u4F60\u7684\u7F51\u7AD9\u8FD8\u662F\u65E0\u6CD5\u8BBF\u95EEhttps. \u4F46\u662F\u4E3A\u4E86\u5B89\u5168, \u4F60\u8FD8\u662F\u81EA\u5DF1\u624B\u52A8\u6539\u914D\u7F6E\u5427.</strong></p><h5 id="_2-1-2-1-nginx\u670D\u52A1\u5668\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-2-1-nginx\u670D\u52A1\u5668\u793A\u4F8B" aria-hidden="true">#</a> 2.1.2.1 nginx\u670D\u52A1\u5668\u793A\u4F8B</h5><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220724224849353.png" alt="image-20220724224849353"></p><h4 id="_2-1-3-\u5047\u88C5webserver-\u5B8C\u6210\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u5047\u88C5webserver-\u5B8C\u6210\u9A8C\u8BC1" aria-hidden="true">#</a> 2.1.3 \u5047\u88C5webserver\uFF0C\u5B8C\u6210\u9A8C\u8BC1</h4><p>\u5982\u679C\u4F60\u8FD8\u6CA1\u6709\u8FD0\u884C\u4EFB\u4F55 web \u670D\u52A1, <strong>80</strong> \u7AEF\u53E3\u662F\u7A7A\u95F2\u7684, \u90A3\u4E48 <strong>acme.sh</strong> \u8FD8\u80FD\u5047\u88C5\u81EA\u5DF1\u662F\u4E00\u4E2Awebserver, \u4E34\u65F6\u542C\u5728<strong>80</strong> \u7AEF\u53E3, \u5B8C\u6210\u9A8C\u8BC1:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh  --issue -d mydomain.com   --standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u66F4\u9AD8\u7EA7\u7684\u7528\u6CD5\u8BF7\u53C2\u8003: https://github.com/Neilpang/acme.sh/wiki/How-to-issue-a-cert</p><h3 id="_2-\u624B\u52A8-dns-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u624B\u52A8-dns-\u65B9\u5F0F" aria-hidden="true">#</a> 2. \u624B\u52A8 dns \u65B9\u5F0F</h3><p>\u624B\u52A8\u5728\u57DF\u540D\u4E0A\u6DFB\u52A0\u4E00\u6761 txt \u89E3\u6790\u8BB0\u5F55, \u9A8C\u8BC1\u57DF\u540D\u6240\u6709\u6743.</p><p>\u8FD9\u79CD\u65B9\u5F0F\u7684\u597D\u5904\u662F, \u4F60\u4E0D\u9700\u8981\u4EFB\u4F55\u670D\u52A1\u5668, \u4E0D\u9700\u8981\u4EFB\u4F55\u516C\u7F51 ip, \u53EA\u9700\u8981 dns \u7684\u89E3\u6790\u8BB0\u5F55\u5373\u53EF\u5B8C\u6210\u9A8C\u8BC1. \u574F\u5904\u662F\uFF0C\u5982\u679C\u4E0D\u540C\u65F6\u914D\u7F6E Automatic DNS API\uFF0C\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F acme.sh \u5C06\u65E0\u6CD5\u81EA\u52A8\u66F4\u65B0\u8BC1\u4E66\uFF0C\u6BCF\u6B21\u90FD\u9700\u8981\u624B\u52A8\u518D\u6B21\u91CD\u65B0\u89E3\u6790\u9A8C\u8BC1\u57DF\u540D\u6240\u6709\u6743\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh  --issue  --dns   -d mydomain.com \\
 --yes-I-know-dns-manual-mode-enough-go-ahead-please
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E, <strong>acme.sh</strong> \u4F1A\u751F\u6210\u76F8\u5E94\u7684\u89E3\u6790\u8BB0\u5F55\u663E\u793A\u51FA\u6765, \u4F60\u53EA\u9700\u8981\u5728\u4F60\u7684\u57DF\u540D\u7BA1\u7406\u9762\u677F\u4E2D\u6DFB\u52A0\u8FD9\u6761 txt \u8BB0\u5F55\u5373\u53EF.</p><p>\u7B49\u5F85\u89E3\u6790\u5B8C\u6210\u4E4B\u540E, \u91CD\u65B0\u751F\u6210\u8BC1\u4E66:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh  --renew   -d mydomain.com \\
  --yes-I-know-dns-manual-mode-enough-go-ahead-please
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u7B2C\u4E8C\u6B21\u8FD9\u91CC\u7528\u7684\u662F <code>--renew</code></p><p>dns \u65B9\u5F0F\u7684\u771F\u6B63\u5F3A\u5927\u4E4B\u5904\u5728\u4E8E\u53EF\u4EE5\u4F7F\u7528\u57DF\u540D\u89E3\u6790\u5546\u63D0\u4F9B\u7684 api \u81EA\u52A8\u6DFB\u52A0 txt \u8BB0\u5F55\u5B8C\u6210\u9A8C\u8BC1.</p><p><strong>acme.sh</strong> \u76EE\u524D\u652F\u6301 cloudflare, dnspod, cloudxns, godaddy \u4EE5\u53CA ovh \u7B49\u6570\u5341\u79CD\u89E3\u6790\u5546\u7684\u81EA\u52A8\u96C6\u6210.</p><p>\u4EE5 dnspod \u4E3A\u4F8B, \u4F60\u9700\u8981\u5148\u767B\u5F55\u5230 dnspod \u8D26\u53F7, \u751F\u6210\u4F60\u7684 api id \u548C api key, \u90FD\u662F\u514D\u8D39\u7684. \u7136\u540E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export DP_Id=&quot;1234&quot;

export DP_Key=&quot;sADDsdasdgdsf&quot;

acme.sh   --issue   --dns dns_dp   -d aa.com  -d www.aa.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BC1\u4E66\u5C31\u4F1A\u81EA\u52A8\u751F\u6210\u4E86. \u8FD9\u91CC\u7ED9\u51FA\u7684 api id \u548C api key \u4F1A\u88AB\u81EA\u52A8\u8BB0\u5F55\u4E0B\u6765, \u5C06\u6765\u4F60\u5728\u4F7F\u7528 dnspod api \u7684\u65F6\u5019, \u5C31\u4E0D\u9700\u8981\u518D\u6B21\u6307\u5B9A\u4E86. \u76F4\u63A5\u751F\u6210\u5C31\u597D\u4E86:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh  --issue   -d  mydomain2.com   --dns  dns_dp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u66F4\u8BE6\u7EC6\u7684 api \u7528\u6CD5: https://github.com/Neilpang/acme.sh/blob/master/dnsapi/README.md</p><h2 id="_3-copy-\u5B89\u88C5-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_3-copy-\u5B89\u88C5-\u8BC1\u4E66" aria-hidden="true">#</a> 3. copy/\u5B89\u88C5 \u8BC1\u4E66</h2><p>\u524D\u9762\u8BC1\u4E66\u751F\u6210\u4EE5\u540E, \u63A5\u4E0B\u6765\u9700\u8981\u628A\u8BC1\u4E66 copy \u5230\u771F\u6B63\u9700\u8981\u7528\u5B83\u7684\u5730\u65B9.</p><p>\u6CE8\u610F, \u9ED8\u8BA4\u751F\u6210\u7684\u8BC1\u4E66\u90FD\u653E\u5728\u5B89\u88C5\u76EE\u5F55\u4E0B: <code>~/.acme.sh/</code>, \u8BF7\u4E0D\u8981\u76F4\u63A5\u4F7F\u7528\u6B64\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6, \u4F8B\u5982: \u4E0D\u8981\u76F4\u63A5\u8BA9 nginx/apache \u7684\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528\u8FD9\u4E0B\u9762\u7684\u6587\u4EF6. \u8FD9\u91CC\u9762\u7684\u6587\u4EF6\u90FD\u662F\u5185\u90E8\u4F7F\u7528, \u800C\u4E14\u76EE\u5F55\u7ED3\u6784\u53EF\u80FD\u4F1A\u53D8\u5316.</p><p>\u6B63\u786E\u7684\u4F7F\u7528\u65B9\u6CD5\u662F\u4F7F\u7528 <code>--install-cert</code> \u547D\u4EE4,\u5E76\u6307\u5B9A\u76EE\u6807\u4F4D\u7F6E, \u7136\u540E\u8BC1\u4E66\u6587\u4EF6\u4F1A\u88ABcopy\u5230\u76F8\u5E94\u7684\u4F4D\u7F6E, \u4F8B\u5982:</p><h3 id="_3-1-apache-example" tabindex="-1"><a class="header-anchor" href="#_3-1-apache-example" aria-hidden="true">#</a> 3.1 Apache example:</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh --install-cert -d example.com \\
--cert-file      /path/to/certfile/in/apache/cert.pem  \\
--key-file       /path/to/keyfile/in/apache/key.pem  \\
--fullchain-file /path/to/fullchain/certfile/apache/fullchain.pem \\
--reloadcmd     &quot;service apache2 force-reload&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-nginx-example" tabindex="-1"><a class="header-anchor" href="#_3-2-nginx-example" aria-hidden="true">#</a> 3.2 Nginx example:</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh --install-cert -d example.com \\
--key-file       /path/to/keyfile/in/nginx/key.pem  \\
--fullchain-file /path/to/fullchain/nginx/cert.pem \\
--reloadcmd     &quot;service nginx force-reload&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(\u4E00\u4E2A\u5C0F\u63D0\u9192, \u8FD9\u91CC\u7528\u7684\u662F <code>service nginx force-reload</code>, \u4E0D\u662F <code>service nginx reload</code>, \u636E\u6D4B\u8BD5, <code>reload</code> \u5E76\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u8BC1\u4E66, \u6240\u4EE5\u7528\u7684 <code>force-reload</code>)</p>`,57),v=a("Nginx \u7684\u914D\u7F6E "),g=e("code",null,"ssl_certificate",-1),x=a(" \u4F7F\u7528 "),b=e("code",null,"/etc/nginx/ssl/fullchain.cer",-1),_=a(" \uFF0C\u800C\u975E "),f=e("code",null,"/etc/nginx/ssl/<domain>.cer",-1),y=a(" \uFF0C\u5426\u5219 "),w={href:"https://www.ssllabs.com/ssltest/",target:"_blank",rel:"noopener noreferrer"},k=a("SSL Labs"),L=a(" \u7684\u6D4B\u8BD5\u4F1A\u62A5 "),N=e("code",null,"Chain issues Incomplete",-1),C=a(" \u9519\u8BEF\u3002"),q=s(`<p><code>--install-cert</code>\u547D\u4EE4\u53EF\u4EE5\u643A\u5E26\u5F88\u591A\u53C2\u6570, \u6765\u6307\u5B9A\u76EE\u6807\u6587\u4EF6. \u5E76\u4E14\u53EF\u4EE5\u6307\u5B9A reloadcmd, \u5F53\u8BC1\u4E66\u66F4\u65B0\u4EE5\u540E, reloadcmd\u4F1A\u88AB\u81EA\u52A8\u8C03\u7528,\u8BA9\u670D\u52A1\u5668\u751F\u6548.</p><p>\u8BE6\u7EC6\u53C2\u6570\u8BF7\u53C2\u8003: https://github.com/Neilpang/acme.sh#3-install-the-issued-cert-to-apachenginx-etc</p><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F, \u8FD9\u91CC\u6307\u5B9A\u7684\u6240\u6709\u53C2\u6570\u90FD\u4F1A\u88AB\u81EA\u52A8\u8BB0\u5F55\u4E0B\u6765, \u5E76\u5728\u5C06\u6765\u8BC1\u4E66\u81EA\u52A8\u66F4\u65B0\u4EE5\u540E, \u88AB\u518D\u6B21\u81EA\u52A8\u8C03\u7528.</p><h1 id="_4-\u67E5\u770B\u5DF2\u5B89\u88C5\u8BC1\u4E66\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u770B\u5DF2\u5B89\u88C5\u8BC1\u4E66\u4FE1\u606F" aria-hidden="true">#</a> 4. \u67E5\u770B\u5DF2\u5B89\u88C5\u8BC1\u4E66\u4FE1\u606F</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh --info -d example.com
# \u4F1A\u8F93\u51FA\u5982\u4E0B\u5185\u5BB9\uFF1A
DOMAIN_CONF=/root/.acme.sh/example.com/example.com.conf
Le_Domain=example.com
Le_Alt=no
Le_Webroot=dns_ali
Le_PreHook=
Le_PostHook=
Le_RenewHook=
Le_API=https://acme-v02.api.letsencrypt.org/directory
Le_Keylength=
Le_OrderFinalize=https://acme-v02.api.letsencrypt.org/acme/finalize/23xxxx150/781xxxx4310
Le_LinkOrder=https://acme-v02.api.letsencrypt.org/acme/order/233xxx150/781xxxx4310
Le_LinkCert=https://acme-v02.api.letsencrypt.org/acme/cert/04cbd28xxxxxx349ecaea8d07
Le_CertCreateTime=1649358725
Le_CertCreateTimeStr=Thu Apr  7 19:12:05 UTC 2022
Le_NextRenewTimeStr=Mon Jun  6 19:12:05 UTC 2022
Le_NextRenewTime=1654456325
Le_RealCertPath=
Le_RealCACertPath=
Le_RealKeyPath=/etc/acme/example.com/privkey.pem
Le_ReloadCmd=service nginx force-reload
Le_RealFullChainPath=/etc/acme/example.com/chain.pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-\u66F4\u65B0\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_5-\u66F4\u65B0\u8BC1\u4E66" aria-hidden="true">#</a> 5. \u66F4\u65B0\u8BC1\u4E66</h1><p>\u76EE\u524D\u8BC1\u4E66\u5728 60 \u5929\u4EE5\u540E\u4F1A\u81EA\u52A8\u66F4\u65B0, \u4F60\u65E0\u9700\u4EFB\u4F55\u64CD\u4F5C. \u4ECA\u540E\u6709\u53EF\u80FD\u4F1A\u7F29\u77ED\u8FD9\u4E2A\u65F6\u95F4, \u4E0D\u8FC7\u90FD\u662F\u81EA\u52A8\u7684, \u4F60\u4E0D\u7528\u5173\u5FC3.</p><p>\u8BF7\u786E\u4FDD cronjob \u6B63\u786E\u5B89\u88C5, \u770B\u8D77\u6765\u662F\u7C7B\u4F3C\u8FD9\u6837\u7684:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>crontab  -l

56 * * * * &quot;/root/.acme.sh&quot;/acme.sh --cron --home &quot;/root/.acme.sh&quot; &gt; /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-\u51FA\u9519\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#_6-\u51FA\u9519\u600E\u4E48\u529E" aria-hidden="true">#</a> 6. \u51FA\u9519\u600E\u4E48\u529E\uFF1A</h1><p>\u5982\u679C\u51FA\u9519, \u8BF7\u6DFB\u52A0 debug log\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh  --issue  .....  --debug 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>acme.sh  --issue  .....  --debug  2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BF7\u53C2\u8003\uFF1A https://github.com/Neilpang/acme.sh/wiki/How-to-debug-acme.sh</p><p>\u6700\u540E, \u672C\u6587\u5E76\u975E\u5B8C\u5168\u7684\u4F7F\u7528\u8BF4\u660E, \u8FD8\u6709\u5F88\u591A\u9AD8\u7EA7\u7684\u529F\u80FD, \u66F4\u9AD8\u7EA7\u7684\u7528\u6CD5\u8BF7\u53C2\u770B\u5176\u4ED6 wiki \u9875\u9762.</p><p>https://github.com/Neilpang/acme.sh/wiki</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,18),A={href:"https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},S=a("\u5B98\u7F51\u4E2D\u6587\u4ECB\u7ECD");function E(P,I){const n=r("ExternalLinkIcon");return t(),c("div",null,[o,e("blockquote",null,[e("p",null,[e("a",m,[h,i(n)])]),p]),u,e("p",null,[v,g,x,b,_,f,y,e("a",w,[k,i(n)]),L,N,C]),q,e("p",null,[e("a",A,[S,i(n)])])])}var T=d(l,[["render",E],["__file","\u4F7F\u7528acme.sh\u751F\u6210\u514D\u8D39\u7684SSL\u8BC1\u4E66.html.vue"]]);export{T as default};
