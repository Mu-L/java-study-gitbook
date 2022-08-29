import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as o,a as e,b as n,e as i,d as a,r as l}from"./app.5d5ee434.js";const d={},c=i('<h1 id="\u5220\u9664-git\u4E2D\u7684\u9519\u8BEF\u63D0\u4EA4\u7684\u6587\u4EF6-md" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664-git\u4E2D\u7684\u9519\u8BEF\u63D0\u4EA4\u7684\u6587\u4EF6-md" aria-hidden="true">#</a> \u5220\u9664.git\u4E2D\u7684\u9519\u8BEF\u63D0\u4EA4\u7684\u6587\u4EF6.md</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>Git \u64CD\u4F5C\u65F6\uFF0C\u7ECF\u5E38\u201C\u4E0D\u5C0F\u5FC3\u201D\u4E0A\u4F20\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\uFF08\u5927\uFF09\u6587\u4EF6\uFF0C\u6216\u8005\u79C1\u5BC6\u6570\u636E\uFF0C\u7B49\u7B49\u3002</p><p>\u5F53\u7136\u53EF\u4EE5\u4ECE\u672C\u5730\u628A\u8FD9\u4E9B\u6587\u4EF6\u5220\u9664\uFF0C\u52A0\u5165 <code>.gitignore</code>, \u907F\u514D\u4E0B\u6B21\u518D\u4E0A\u4F20\u3002</p><p>\u7136\u800C\uFF0C<strong>\u4E4B\u524D\u5DF2\u7ECF\u4E0A\u4F20\u8FC7\u7684\uFF0C\u8FD8\u9057\u7559\u5728 git \u5386\u53F2\u4E2D</strong></p><h2 id="_2-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u4F8B" aria-hidden="true">#</a> 2. \u5B9E\u4F8B</h2><p>\u5982\u4E0B\u662F\u4E00\u4E2A\u6211\u8BEF\u5C06vue \u7684\u7B2C\u4E09\u65B9\u4F9D\u8D56node_modules \u6DFB\u52A0\u5230git \u5BFC\u81F4.git\u6587\u4EF6\u8FC7\u5927</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201010094508032.png" alt=""></p><h2 id="_3-\u64CD\u4F5C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_3-\u64CD\u4F5C\u6B65\u9AA4" aria-hidden="true">#</a> 3. \u64CD\u4F5C\u6B65\u9AA4</h2>',9),p={href:"https://rtyley.github.io/bfg-repo-cleaner/",target:"_blank",rel:"noopener noreferrer"},h=a("\u4E0B\u8F7Dbfg.jar"),g=a(", \u76F4\u63A5\u5C06\u5176\u590D\u5236\u5230 "),_=e("code",null,"your-repo.git",-1),u=a(" \u76EE\u5F55\u4E0B"),m=i(`<li><p>\u5220\u9664.git \u4E2D\u7684\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939</p><ul><li><p>\u5220\u9664\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -jar bfg-1.12.16.jar --delete-files test1.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5220\u9664\u6587\u4EF6\u5939</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -jar bfg-1.12.16.jar --delete-folders <span class="token string">&quot;{folderA,folderB,folderC}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>\u6267\u884C\u5982\u4E0B git \u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reflog expire --expire<span class="token operator">=</span>now --all <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> gc --prune<span class="token operator">=</span>now --aggressive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u65F6\u67E5\u770B.git \u6587\u4EF6\u5939\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u6587\u4EF6\u53D8\u5C0F\u4E86</p></li>`,2),b=e("p",null,[e("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201010093714396.png",alt:""})],-1),f=e("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),a(" \u53C2\u8003\u6587\u7AE0")],-1),v={href:"https://juejin.im/post/6844904045459537934",target:"_blank",rel:"noopener noreferrer"},x=a("BFG Repo-Cleaner - \u4ECE Git \u5386\u53F2\u4E2D\u771F\u6B63\u5220\u9664\u6587\u4EF6");function k(j,z){const s=l("ExternalLinkIcon");return r(),o("div",null,[c,e("ol",null,[e("li",null,[e("p",null,[e("a",p,[h,n(s)]),g,_,u])]),m]),b,f,e("p",null,[e("a",v,[x,n(s)])])])}var N=t(d,[["render",k],["__file","\u5220\u9664git\u4E2D\u7684\u9519\u8BEF\u63D0\u4EA4\u7684\u6587\u4EF6.html.vue"]]);export{N as default};
