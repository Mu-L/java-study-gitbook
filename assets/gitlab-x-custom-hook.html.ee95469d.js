import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as l,a as s,b as a,e as o,d as e,r}from"./app.f305e04f.js";const c={},p=o(`<h1 id="gitlab\u914D\u7F6Ecustom-hook" tabindex="-1"><a class="header-anchor" href="#gitlab\u914D\u7F6Ecustom-hook" aria-hidden="true">#</a> gitlab\u914D\u7F6Ecustom hook</h1><h2 id="_1-\u5177\u4F53\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u5177\u4F53\u6B65\u9AA4" aria-hidden="true">#</a> 1. \u5177\u4F53\u6B65\u9AA4</h2><h3 id="_1-1-\u8BBE\u7F6Ecustom-hooks\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_1-1-\u8BBE\u7F6Ecustom-hooks\u8DEF\u5F84" aria-hidden="true">#</a> 1.1 \u8BBE\u7F6Ecustom_hooks\u8DEF\u5F84</h3><p>\u4FEE\u6539 gitlab \u4E2D\u7684<code>vi /etc/gitlab/gitlab.rb</code></p><p>\u589E\u52A0 custom_hooks_dir \u8DEF\u5F84\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitlab_shell[&#39;custom_hooks_dir&#39;] = &quot;/opt/gitlab/embedded/service/gitlab-shell/hooks&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\uFF1A\u8FD9\u91CC\u76F4\u63A5\u53BB\u6389\u6CE8\u91CA\u4F7F\u7528\u81EA\u5E26\u7684</p><h3 id="_1-2-\u542F\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-\u542F\u7528\u914D\u7F6E" aria-hidden="true">#</a> 1.2 \u542F\u7528\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-\u521B\u5EFAhook\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-3-\u521B\u5EFAhook\u6587\u4EF6" aria-hidden="true">#</a> 1.3 \u521B\u5EFAhook\u6587\u4EF6</h3><p>\u81EA\u5B9A\u4E49\u811A\u672C\u76EE\u5F55\u8981\u7B26\u5408<code>&lt;custom_hooks_dir&gt;/&lt;hook_name.d&gt;/*</code> \u7684\u89C4\u8303\u3002\u5177\u4F53\u5C31\u662F</p><ul><li><p>\u5728\u81EA\u5B9A\u7684<code>custom_hooks_dir</code> \u76EE\u5F55\u4E0B\u53EF\u521B\u5EFA\u4E09\u4E2A\u6587\u4EF6\u5939\u5BF9\u5E94\u4E09\u7C7B <code>server hook name</code> \uFF1A</p><ul><li>pre-receive.d</li><li>update.d</li><li>post-receive.d</li></ul></li><li><p>\u5728\u6BCF\u4E2A\u6587\u4EF6\u5939\u4E0B\u53EF\u4EE5\u521B\u5EFA\u4EFB\u610F\u6587\u4EF6\uFF0C\u5728\u5BF9\u5E94\u7684hook\u65F6\u671F\uFF0Cgitlab\u5C31\u4F1A\u4E3B\u52A8\u8C03\u7528</p></li><li><p>\u6587\u4EF6\u540D\u4EE5<code>~</code>\u7ED3\u5C3E\u7684\u6587\u4EF6\u4F1A\u88AB\u5FFD\u7565</p></li><li><p>\u5982\u679C\u60F3\u770B\u8FD9\u90E8\u5206\u7684\u5B9E\u73B0\u7EC6\u8282\u53EF\u4EE5\u770B <code>&lt;gitlab-shell&gt;/lib/gitlab_custom_hook.rb</code> \u6587\u4EF6</p></li></ul><p>\u76EE\u5F55\u7ED3\u6784\u793A\u610F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost custom_hooks]# tree
.
\u251C\u2500\u2500 post-receive.d
\u2502   \u251C\u2500\u2500 01.sh
\u2502   \u2514\u2500\u2500 02.sh~
\u251C\u2500\u2500 pre-receive.d
\u2502   \u251C\u2500\u2500 01.sh
\u2502   \u251C\u2500\u2500 02.py
\u2502   \u2514\u2500\u2500 03.rb
\u2514\u2500\u2500 update.d
    \u251C\u2500\u2500 01.sh
    \u2514\u2500\u2500 02.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-\u7F16\u5199-hook-\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_1-4-\u7F16\u5199-hook-\u811A\u672C" aria-hidden="true">#</a> 1.4 \u7F16\u5199 hook \u811A\u672C</h3><p>hook \u811A\u672C\u5C31\u662Fgit \u81EA\u8EAB\u7684\u89C4\u8303\uFF0C\u5199shell\uFF0Cpython\u3001ruby \u90FD\u53EF\u4EE5</p>`,16),d=e("\u7559\u610F\u811A\u672C\u6700\u540E\u7684\u9000\u51FA\u503C\uFF1A"),u=s("strong",null,"0 \u6B63\u5E38\u9000\u51FA\uFF0C\u7528\u6237\u53EF\u4EE5 push\uFF1B\u975E 0 \u5F02\u5E38\u9000\u51FA\uFF0C\u4E2D\u65AD\u63D0\u4EA4\uFF08pre-receive \u548C update\uFF09",-1),v=e(" \u3002 \u7EC6\u8282\u53C2\u89C1\uFF1A "),m={href:"https://link.jianshu.com/?t=https://github.com/geeeeeeeeek/git-recipes/wiki/5.4-Git%E9%92%A9%E5%AD%90%EF%BC%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BD%A0%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81",target:"_blank",rel:"noopener noreferrer"},b=e("5.4 Git\u94A9\u5B50\uFF1A\u81EA\u5B9A\u4E49\u4F60\u7684\u5DE5\u4F5C\u6D41 \xB7 geeeeeeeeek/git-recipes Wiki \xB7 GitHub"),h=o(`<p>\u5982\u679C\u60F3\u8BA9\u7528\u6237 push \u65F6\u770B\u5230\u76F8\u5E94\u7684\u65E5\u5FD7\u76F4\u63A5\u5728\u811A\u672C\u4E2D echo \u5373\u53EF\u3002</p><p>\u8FD9\u91CC\u4E3E\u4E24\u4E2A\u4F8B\u5B50\uFF1A</p><p>\u{1F330}\uFF1ASay hi.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Say hi from gitlab servertes ok \u{1F604}&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F330}\uFF1A\u68C0\u67E5\u63D0\u4EA4\u4FEE\u6539\u7684\u6587\u4EF6\uFF0C\u53D1\u73B0\u6709\u7279\u5B9A\u5185\u5BB9\u7981\u6B62\u63D0\u4EA4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh
FIND_KEY=&#39;.test.51offer.com&#39;
OLD_VALUE=$2
NEW_VALUE=$3

FILES=$(git rev-list --objects $OLD_VALUE...$NEW_VALUE | egrep &#39;\\.(jsp|vm|java)$&#39; | awk &#39;{print $2}&#39; | sort | uniq )

FLAG=0
for FILE in $FILES
do
    git show $NEW_VALUE:$FILE | grep -q &quot;$FIND_KEY&quot;
    if [ $? -eq 0 ]
    then
        FLAG=1
        echo &quot;\u{1F4C3}  \u5305\u542B\u975E\u6CD5\u5B57\u6BB5 &#39;$FIND_KEY&#39; : $FILE&quot;
    fi
done

if [ $FLAG -eq 0 ]
then
    echo &quot;\u2705  \u4EE3\u7801\u68C0\u67E5\u901A\u8FC7.&quot;
else
    echo &quot;\u274C  \u4EE3\u7801\u68C0\u67E5\u4E0D\u901A\u8FC7!&quot;
    exit 1
fi

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B50\u7ED3\u679C</p><p>\u4E0A\u9762\u7B2C\u4E8C\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5C1D\u8BD5 <code>git push</code>\uFF0C\u5C31\u80FD\u770B\u5230\u5982\u4E0B\u7684\u65E5\u5FD7\uFF1A</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>Pushing to git<span class="token variable">@gitlab</span><span class="token number">.51</span>offer<span class="token punctuation">.</span>inner<span class="token symbol">:mall</span><span class="token operator">/</span>paycenter<span class="token punctuation">.</span>git
<span class="token symbol">remote</span><span class="token operator">:</span> \u{1F4C3}  \u5305\u542B\u975E\u6CD5\u5B57\u6BB5 <span class="token string-literal"><span class="token string">&#39;.test.51offer.com&#39;</span></span> <span class="token operator">:</span> service<span class="token operator">/</span>src<span class="token operator">/</span>main<span class="token operator">/</span>java<span class="token operator">/</span>com<span class="token operator">/</span>horizon<span class="token operator">/</span><span class="token keyword">module</span><span class="token operator">/</span>paycenter<span class="token operator">/</span>service<span class="token operator">/</span>PayService<span class="token punctuation">.</span>java        
<span class="token symbol">remote</span><span class="token operator">:</span> \u274C  \u4EE3\u7801\u68C0\u67E5\u4E0D\u901A\u8FC7<span class="token operator">!</span>        
<span class="token symbol">remote</span><span class="token operator">:</span> error<span class="token operator">:</span> hook declined to update refs<span class="token operator">/</span>heads<span class="token operator">/</span>test        
To git<span class="token variable">@gitlab</span><span class="token number">.51</span>offer<span class="token punctuation">.</span>inner<span class="token symbol">:mall</span><span class="token operator">/</span>paycenter<span class="token punctuation">.</span>git
 <span class="token operator">=</span> <span class="token punctuation">[</span>up to date<span class="token punctuation">]</span>      release<span class="token operator">/</span>old <span class="token operator">-</span><span class="token operator">&gt;</span> release<span class="token operator">/</span>old
 <span class="token operator">=</span> <span class="token punctuation">[</span>up to date<span class="token punctuation">]</span>      v1<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token number">.2016</span><span class="token number">.9</span><span class="token number">.8</span> <span class="token operator">-</span><span class="token operator">&gt;</span> v1<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token number">.2016</span><span class="token number">.9</span><span class="token number">.8</span>
 <span class="token operator">!</span> <span class="token punctuation">[</span>remote rejected<span class="token punctuation">]</span> test <span class="token operator">-</span><span class="token operator">&gt;</span> test <span class="token punctuation">(</span>hook declined<span class="token punctuation">)</span>
<span class="token symbol">error</span><span class="token operator">:</span> failed to push some refs to <span class="token string-literal"><span class="token string">&#39;git@gitlab.51offer.inner:mall/paycenter.git&#39;</span></span>
Completed with errors<span class="token punctuation">,</span> see above
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h3>`,10),k={href:"https://www.jianshu.com/p/5531a21afa68",target:"_blank",rel:"noopener noreferrer"},g=e("Gitlab \u670D\u52A1\u5668\u7AEF custom hook \u914D\u7F6E"),_={href:"https://docs.gitlab.com/ee/administration/custom_hooks.html",target:"_blank",rel:"noopener noreferrer"},f=e("\u5B98\u65B9\u6587\u6863");function x(E,y){const n=r("ExternalLinkIcon");return t(),l("div",null,[p,s("p",null,[d,u,v,s("a",m,[b,a(n)])]),h,s("p",null,[s("a",k,[g,a(n)])]),s("p",null,[s("a",_,[f,a(n)])])])}const q=i(c,[["render",x],["__file","gitlab-x-custom-hook.html.vue"]]);export{q as default};