import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as t,a as s,b as n,e,d as i,r}from"./app.5d5ee434.js";const g={},c=e('<h3 id="maven\u79C1\u670D-nexus\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#maven\u79C1\u670D-nexus\u90E8\u7F72" aria-hidden="true">#</a> Maven\u79C1\u670D Nexus\u90E8\u7F72</h3><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u79C1\u670D\u662F\u6307\u79C1\u6709\u670D\u52A1\u5668\uFF0C\u662F\u67B6\u8BBE\u5728\u5C40\u57DF\u7F51\u7684\u4E00\u79CD\u7279\u6B8A\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u76EE\u7684\u662F\u4EE3\u7406\u8FDC\u7A0B\u4ED3\u5E93\u53CA\u90E8\u7F72\u7B2C\u4E09\u65B9\u6784\u5EFA\u3002\u6709\u4E86\u79C1\u670D\u4E4B\u540E\uFF0C\u5F53 Maven \u9700\u8981\u4E0B\u8F7D\u6784\u4EF6\u65F6\uFF0C\u76F4\u63A5\u8BF7\u6C42\u79C1\u670D\uFF0C\u79C1\u670D\u4E0A\u5B58\u5728\u5219\u4E0B\u8F7D\u5230\u672C\u5730\u4ED3\u5E93\uFF1B\u5426\u5219\uFF0C\u79C1\u670D\u8BF7\u6C42\u5916\u90E8\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5C06\u6784\u4EF6\u4E0B\u8F7D\u5230\u79C1\u670D\uFF0C\u518D\u63D0\u4F9B\u7ED9\u672C\u5730\u4ED3\u5E93\u4E0B\u8F7D</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004204944689.png" alt="image-20211004204944689"></p><h2 id="_2-\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> 2. \u5B89\u88C5\u6B65\u9AA4</h2>',5),p=s("p",null,"\u4E0B\u8F7D",-1),m={href:"https://help.sonatype.com/repomanager3/download",target:"_blank",rel:"noopener noreferrer"},d=i("Nexus\u5B98\u65B93.X\u4E0B\u8F7D\u5730\u5740"),u=e(`<li><p>\u90E8\u7F72\u6B65\u9AA4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /usr/local/nexus
<span class="token function">tar</span> zxf nexus-3.34.1-01-unix.tar.gz -C /usr/local/nexus/
<span class="token comment">#\u542F\u52A8nexus\u5FC5\u987B\u4F7F\u7528nexus\u7528\u6237\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528\u6743\u9650\u8FC7\u9AD8\u7684\u7528\u6237\uFF0C\u6BD4\u5982root\uFF0C\u5426\u5219\u4F1A\u542F\u52A8\u5931\u8D25</span>
<span class="token function">useradd</span> nexus
<span class="token function">chown</span> -R nexus:nexus /usr/local/nexus/
<span class="token function">ls</span> /usr/local/nexus/
nexus-3.34.1-01     <span class="token comment"># \u8FD9\u662F\u5E94\u7528\u76EE\u5F55</span>
sonatype-work         <span class="token comment"># \u8FD9\u662F\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u5B58\u653E\u955C\u50CF\u4ED3\u5E93</span>
<span class="token comment">#\u8FD0\u884C\u5185\u5B58\u548C\u5DE5\u4F5C\u76EE\u5F55nexus-3.34.1-01/bin/nexus.vmoptions \uFF08\u4FEE\u6539\u5BF9\u5E94\u5B57\u6BB5\u5373\u53EF\uFF09</span>
<span class="token comment">#\u8FD0\u884C\u76D1\u542C\u5730\u5740\u548C\u7AEF\u53E3nexus-3.34.1-01/etc/nexus-default.properties</span>
<span class="token function">ln</span> -s /usr/local/nexus/nexus-3.34.1-01/bin/nexus /usr/local/bin/
<span class="token comment">#\u521B\u5EFA\u547D\u4EE4\u8F6F\u8FDE\u63A5</span>
<span class="token comment">#\u5207\u6362\u81F3nexus\u7528\u6237\uFF0C\u5E76\u542F\u52A8nexus\u670D\u52A1\uFF0C\u5982\u679C\u4F7F\u7528root\u7528\u6237\uFF0C\u4F1A\u56E0\u4E3A\u6743\u9650\u8FC7\u9AD8\u800C\u542F\u52A8\u5931\u8D25</span>
<span class="token function">su</span> nexus
nexus start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FD0\u884C\u68C0\u67E5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>netstat <span class="token operator">-</span>anput <span class="token operator">|</span> grep <span class="token number">8081</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u8BBF\u95EE\u6D4B\u8BD5</p><p>\u542F\u52A8nexus\u540E\uFF0C\u5373\u53EF\u8BBF\u95EE\u670D\u52A1\u5668IP+8081\u7AEF\u53E3\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211202373.png" alt="image-20211004211202373"></p></li>`,3),b=e(`<h2 id="_3-\u767B\u5F55\u5E76\u4FEE\u6539\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_3-\u767B\u5F55\u5E76\u4FEE\u6539\u5BC6\u7801" aria-hidden="true">#</a> 3. \u767B\u5F55\u5E76\u4FEE\u6539\u5BC6\u7801</h2><ol><li><p>\u67E5\u770B\u5BC6\u7801</p><p>\u6839\u636E\u4E0B\u8FF0\u63D0\u793A\u7684\u8DEF\u5F84\uFF0C\u67E5\u770B\u5BC6\u7801\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211352564.png" alt="image-20211004211352564"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /usr/local/nexus/sonatype-work/nexus3/admin.password 
02fc969a-cc65-44a8-ad56-9d22b243de1e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FDB\u884C\u767B\u5F55\uFF0C<strong>\u9ED8\u8BA4\u7684\u7528\u6237\u540D\u4E3Aadmin\uFF0C\u5BC6\u7801\u5C31\u662F\u6211\u4EEC\u4E0A\u9762\u67E5\u770B\u5230\u7684\uFF1A</strong></p></li><li><p>\u767B\u5F55\u540E,\u4FEE\u6539\u5BC6\u7801</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211715907.png" alt="image-20211004211715907"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211756213.png" alt="image-20211004211756213"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211840651.png" alt="image-20211004211840651"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004211852121.png" alt="image-20211004211852121"></p></li></ol><h2 id="_4-\u521B\u5EFA\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA\u89D2\u8272" aria-hidden="true">#</a> 4. <strong>\u521B\u5EFA\u89D2\u8272</strong></h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212042299.png" alt="image-20211004212042299"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212207094.png" alt="image-20211004212207094"></p><p><strong>\u70B9\u51FB\u521B\u5EFA\uFF1A</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212246300.png" alt="image-20211004212246300"></p><h2 id="_5-\u521B\u5EFA\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_5-\u521B\u5EFA\u7528\u6237" aria-hidden="true">#</a> 5. <strong>\u521B\u5EFA\u7528\u6237</strong></h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212426719.png" alt="image-20211004212426719"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212558422.png" alt="image-20211004212558422"></p><h2 id="_6-\u67E5\u770B\u9ED8\u8BA4\u4ED3\u5E93\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_6-\u67E5\u770B\u9ED8\u8BA4\u4ED3\u5E93\u7C7B\u578B" aria-hidden="true">#</a> 6. <strong>\u67E5\u770B\u9ED8\u8BA4\u4ED3\u5E93\u7C7B\u578B</strong></h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004212722827.png" alt="image-20211004212722827"></p><ul><li>group\uFF08\u4ED3\u5E93\u7EC4\u7C7B\u578B\uFF09\uFF1A\u53C8\u53EB\u7EC4\u4ED3\u5E93\uFF0C\u7528\u4E8E\u65B9\u4FBF\u5F00\u53D1\u4EBA\u5458\uFF0C\u81EA\u5DF1\u8BBE\u5B9A\u7684\u4ED3\u5E93</li><li>hosted\uFF08\u5BBF\u4E3B\u7C7B\u578B\uFF09\uFF1A\u5185\u90E8\u9879\u76EE\u7684\u53D1\u5E03\u4ED3\u5E93\uFF08\u5185\u90E8\u5F00\u53D1\u4EBA\u5458\u53D1\u5E03\u4E0A\u53BB\u5B58\u653E\u7684\u4ED3\u5E93\uFF09</li><li>proxy\uFF08\u4EE3\u7406\u7C7B\u578B\uFF09\uFF1A\u4ECE\u8FDC\u7A0B\u4E2D\u592E\u4ED3\u5E93\u4E2D\u5BFB\u627E\u6570\u636E\u7684\u4ED3\u5E93\uFF08\u53EF\u4EE5\u70B9\u51FB\u5BF9\u5E94\u7684\u4ED3\u5E93\u7684Configuration\u9875\u7B7E\u4E0BRemote Storage Location\u5C5E\u6027\u7684\u503C\uFF0C\u5373\u88AB\u4EE3\u7406\u7684\u8FDC\u7A0B\u4ED3\u5E93\u7684\u8DEF\u5F84\uFF09</li><li>virtual\uFF08\u865A\u62DF\u7C7B\u578B\uFF09\uFF1A\u865A\u62DF\u4ED3\u5E93\uFF08\u8FD9\u4E2A\u57FA\u672C\u4E0A\u7528\u4E0D\u5230\uFF09</li><li>Public Repositories\u4E0B\u7684\u4ED3\u5E93\u7C7B\u578B</li><li><strong>3rd party: \u65E0\u6CD5\u4ECE\u516C\u5171\u4ED3\u5E93\u83B7\u5F97\u7684\u7B2C\u4E09\u65B9\u53D1\u5E03\u7248\u672C\u7684\u6784\u4EF6\u4ED3\u5E93\uFF0C\u5373\u7B2C\u4E09\u65B9\u4F9D\u8D56\u7684\u4ED3\u5E93\uFF0C\u8FD9\u4E2A\u6570\u636E\u901A\u5E38\u662F\u7531\u5185\u90E8\u4EBA\u5458\u81EA\u884C\u4E0B\u8F7D\u4E4B\u540E\u53D1\u5E03\u4E0A\u53BB\uFF1B</strong></li><li>Apache Snapshots: \u7528\u4E86\u4EE3\u7406ApacheMaven\u4ED3\u5E93\u5FEB\u7167\u7248\u672C\u7684\u6784\u4EF6\u4ED3\u5E93</li><li>Central: \u7528\u6765\u4EE3\u7406maven\u4E2D\u592E\u4ED3\u5E93\u4E2D\u53D1\u5E03\u7248\u672C\u6784\u4EF6\u7684\u4ED3\u5E93</li><li>entral M1 shadow: \u7528\u4E8E\u63D0\u4F9B\u4E2D\u592E\u4ED3\u5E93\u4E2DM1\u683C\u5F0F\u7684\u53D1\u5E03\u7248\u672C\u7684\u6784\u4EF6\u955C\u50CF\u4ED3\u5E93</li><li>Codehaus Snapshots: \u7528\u6765\u4EE3\u7406CodehausMaven \u4ED3\u5E93\u7684\u5FEB\u7167\u7248\u672C\u6784\u4EF6\u7684\u4ED3\u5E93</li><li><strong>Releases: \u5185\u90E8\u7684\u6A21\u5757\u4E2Drelease\u6A21\u5757\u7684\u53D1\u5E03\u4ED3\u5E93\uFF0C\u7528\u6765\u90E8\u7F72\u7BA1\u7406\u5185\u90E8\u7684\u53D1\u5E03\u7248\u672C\u6784\u4EF6\u7684\u5BBF\u4E3B\u7C7B\u578B\u4ED3\u5E93\uFF1Brelease\u662F\u53D1\u5E03\u7248\u672C\uFF1B</strong></li><li><strong>Snapshots:\u53D1\u5E03\u5185\u90E8\u7684SNAPSHOT\u6A21\u5757\u7684\u4ED3\u5E93\uFF0C\u7528\u6765\u90E8\u7F72\u7BA1\u7406\u5185\u90E8\u7684\u5FEB\u7167\u7248\u672C\u6784\u4EF6\u7684\u5BBF\u4E3B\u7C7B\u578B\u4ED3\u5E93\uFF1Bsnapshots\u662F\u5FEB\u7167\u7248\u672C\uFF0C\u4E5F\u5C31\u662F\u4E0D\u7A33\u5B9A\u7248\u672C</strong></li></ul><h2 id="_7-\u5F00\u542Frelease\u7684\u91CD\u590D\u53D1\u7248\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_7-\u5F00\u542Frelease\u7684\u91CD\u590D\u53D1\u7248\u6743\u9650" aria-hidden="true">#</a> 7. <strong>\u5F00\u542Frelease\u7684\u91CD\u590D\u53D1\u7248\u6743\u9650</strong></h2><p>\u5F00\u53D1\u4E2D\u9700\u8981\u91CD\u590D\u53D1\u7248\uFF0C\u5219\u9700\u8981\u5F00\u542Frelease\u7C7B\u578B\u4ED3\u5E93\u7684\u5BF9\u5E94\u6743\u9650\u8BBE\u7F6Eallow redeploy\u3002\u5982\u4E0B:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213118075.png" alt="image-20211004213118075"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213230425.png" alt="image-20211004213230425"></p><h2 id="_8-\u8BBE\u7F6E\u4EE3\u7406\u4ED3\u5E93-\u963F\u91CC\u4E91maven\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_8-\u8BBE\u7F6E\u4EE3\u7406\u4ED3\u5E93-\u963F\u91CC\u4E91maven\u4ED3\u5E93" aria-hidden="true">#</a> 8. <strong>\u8BBE\u7F6E\u4EE3\u7406\u4ED3\u5E93\uFF08\u963F\u91CC\u4E91maven\u4ED3\u5E93\uFF09</strong></h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213337597.png" alt="image-20211004213337597"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213415866.png" alt="image-20211004213415866"></p><p>\u963F\u91CC\u4E91\u4ED3\u5E93\u7684URL\uFF1Ahttps://maven.aliyun.com/nexus/content/groups/public/</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213621568.png" alt="image-20211004213621568"></p><p>\u586B\u5199\u4E0A\u8FF0\u4E24\u4E2A\u5185\u5BB9\u540E\uFF0C\u70B9\u51FB\u9875\u9762\u4E0B\u8FB9\u7684create repository \u521B\u5EFA\u5B8C\u6210\u4E4B\u540E\u53EF\u4EE5\u770B\u5230\u65B0\u589E\u52A0\u4E86\u963F\u91CC\u4E91\u5E93\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213707656.png" alt="image-20211004213707656"></p><p>\u5C06\u6DFB\u52A0\u7684\u963F\u91CC\u4E91Proxy\u52A0\u5165\u9ED8\u8BA4group\u4E2D\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213813431.png" alt="image-20211004213813431"></p><p>\u5C06\u963F\u91CC\u4E91\u79FB\u52A8\u5230\u7B2C\u4E00\u4E2A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004213918176.png" alt="image-20211004213918176"></p><p>\u4FDD\u5B58\u540E\uFF0C\u518D\u6B21\u5237\u65B0\u9875\u9762\uFF0C\u5373\u53EF\u770B\u5230\u5F53\u524D\u7684Nexus\u5730\u5740\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004214034153.png" alt="image-20211004214034153"></p><h3 id="_8-1-\u5173\u4E8E\u4E0A\u8FF0\u914D\u7F6E\u7684\u5E38\u89C1\u4F7F\u7528\u573A\u666F\u4ECB\u7ECD\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#_8-1-\u5173\u4E8E\u4E0A\u8FF0\u914D\u7F6E\u7684\u5E38\u89C1\u4F7F\u7528\u573A\u666F\u4ECB\u7ECD\u5982\u4E0B" aria-hidden="true">#</a> 8.1 \u5173\u4E8E\u4E0A\u8FF0\u914D\u7F6E\u7684\u5E38\u89C1\u4F7F\u7528\u573A\u666F\u4ECB\u7ECD\u5982\u4E0B\uFF1A</h3><ul><li>release\u53D1\u7248\u4ED3\u5E93\uFF08nexus\u9ED8\u8BA4\u5DF2\u5EFA\u7ACB\uFF1Amaven-releasees\uFF09</li><li>snapshot \u6D4B\u8BD5\u4E2D\u5FC3\u5FEB\u7167\u4ED3\u5E93\uFF08nexus\u9ED8\u8BA4\u5DF2\u5EFA\u7ACB\uFF1Amaven-snapshots\uFF09</li><li>central \u4E2D\u592E\u4ED3\u5E93 \uFF08nexus\u9ED8\u8BA4\u5DF2\u5EFA\u7ACB\uFF1Amaven-central\uFF09</li><li>\u5173\u4E8E\u7EC4\uFF1A\u5728nexus\u4E2D\u53EF\u4EE5\u5EFA\u7ACB\u7EC4\uFF0C\u5C06\u4E0D\u540C\u7C7B\u578B\u4ED3\u5E93\u96C6\u5408\u5728\u4E00\u8D77\uFF08nexus\u9ED8\u8BA4\u5DF2\u5EFA\u7ACB\uFF1Amaven-public\uFF09</li><li>\u573A\u666F\u4E00\uFF1A \u81EA\u5B9A\u4E49\u65B0\u5EFAproxy\u7C7B\u578B\u4ED3\u5E93\uFF0C\u5728maven\u914D\u7F6E\u4E2D\u5206\u522B\u914D\u7F6E\u4E0D\u540C\u8C03\u7528\u5730\u5740\uFF0C\u6216\u662F\u5C06\u81EA\u5B9A\u4E49\u65B0\u5EFA\u7684proxy\u4ED3\u5E93\u7EDF\u4E00\u52A0\u5165\u4E00\u4E2A\u7EC4\uFF0C\u5728maven\u914D\u7F6E\u4E2D\u8C03\u7528\u4E00\u4E2A\u5730\u5740</li><li>\u573A\u666F\u4E8C\uFF1A \u4F7F\u7528maven\u5DF2\u7ECF\u5EFA\u7ACB\u597D\u7684proxy\u4ED3\u5E93\uFF0C\u4E14\u4F7F\u7528\u5DF2\u5EFA\u7ACB\u597D\u7684\u7EC4\uFF08maven-public\uFF09\u914D\u7F6Emaven\u8C03\u7528\u5730\u5740</li><li>\u573A\u666F\u4E00\u548C\u573A\u666F\u4E8C\u672C\u8D28\u4E0A\u8BB2\u6CA1\u6709\u4EC0\u4E48\u53D8\u5316\uFF0C\u6839\u636E\u516C\u53F8\u5F00\u53D1\u4E60\u60EF\u548C\u9700\u6C42\u8FDB\u884C\u914D\u7F6E\u5373\u53EF</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,33),h={href:"https://cloud.tencent.com/developer/article/1623922",target:"_blank",rel:"noopener noreferrer"},z=i("\u90E8\u7F72maven\u53CANexus\u79C1\u670D");function v(x,_){const a=r("ExternalLinkIcon");return o(),t("div",null,[c,s("ol",null,[s("li",null,[p,s("p",null,[s("a",m,[d,n(a)])])]),u]),b,s("p",null,[s("a",h,[z,n(a)])])])}var k=l(g,[["render",v],["__file","C10-Maven\u79C1\u670DNexus\u90E8\u7F72.html.vue"]]);export{k as default};
