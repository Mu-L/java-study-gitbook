import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as o,a as n,b as s,e as c,d as p,r as i}from"./app.24aaacd5.js";const l={},u=c(`<h1 id="locksupport\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#locksupport\u7528\u6CD5" aria-hidden="true">#</a> LockSupport\u7528\u6CD5</h1><h2 id="_0-\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#_0-\u9762\u8BD5\u9898" aria-hidden="true">#</a> 0. \u9762\u8BD5\u9898</h2><ul><li>\u4E3A\u4EC0\u4E48LockSupport\u4E5F\u662F\u6838\u5FC3\u57FA\u7840\u7C7B? AQS\u6846\u67B6\u501F\u52A9\u4E8E\u4E24\u4E2A\u7C7B\uFF1AUnsafe(\u63D0\u4F9BCAS\u64CD\u4F5C)\u548CLockSupport(\u63D0\u4F9Bpark/unpark\u64CD\u4F5C)</li><li>\u5199\u51FA\u5206\u522B\u901A\u8FC7wait/notify\u548CLockSupport\u7684park/unpark\u5B9E\u73B0\u540C\u6B65?</li><li>LockSupport.park()\u4F1A\u91CA\u653E\u9501\u8D44\u6E90\u5417? \u90A3\u4E48Condition.await()\u5462?</li><li>Thread.sleep()\u3001Object.wait()\u3001Condition.await()\u3001LockSupport.park()\u7684\u533A\u522B? \u91CD\u70B9</li><li>\u5982\u679C\u5728wait()\u4E4B\u524D\u6267\u884C\u4E86notify()\u4F1A\u600E\u6837?</li><li>\u5982\u679C\u5728park()\u4E4B\u524D\u6267\u884C\u4E86unpark()\u4F1A\u600E\u6837?</li></ul><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p><code>LockSupport</code>\u662F\u4E00\u4E2A\u7EBF\u7A0B\u963B\u585E\u5DE5\u5177\u7C7B\uFF0C<strong>\u63D0\u4F9B\u4E86\u7EBF\u7A0B\u7684\u963B\u585E\u548C\u5524\u9192\u529F\u80FD</strong>\uFF0C\u5B83\u662F\u521B\u5EFA\u9501\u548C\u5176\u4ED6\u540C\u6B65\u7EC4\u4EF6\u7684\u57FA\u7840\u5DE5\u5177\uFF0C\u5185\u90E8\u662F\u4F7F\u7528sun.misc.Unsafe\u7C7B\u5B9E\u73B0\u7684\u3002</p><p>LockSupport\u548C\u4F7F\u7528\u5B83\u7684\u7EBF\u7A0B\u90FD\u4F1A\u5173\u8054\u4E00\u4E2A\u8BB8\u53EF</p><ul><li>\u5F53\u8C03\u7528LockSupport.park\u65F6\uFF0C\u8868\u793A\u5F53\u524D\u7EBF\u7A0B\u5C06\u4F1A\u7B49\u5F85\uFF0C\u76F4\u81F3\u83B7\u5F97\u8BB8\u53EF\uFF0C</li><li>\u5F53\u8C03\u7528LockSupport.unpark\u65F6\uFF0C\u5FC5\u987B\u628A\u7B49\u5F85\u83B7\u5F97\u8BB8\u53EF\u7684\u7EBF\u7A0B\u4F5C\u4E3A\u53C2\u6570\u8FDB\u884C\u4F20\u9012\uFF0C\u597D\u8BA9\u6B64\u7EBF\u7A0B\u7EE7\u7EED\u8FD0\u884C\u3002</li></ul><h2 id="_2-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u65B9\u6CD5" aria-hidden="true">#</a> 2. \u65B9\u6CD5</h2><p>\u4E3B\u8981\u6709\u4E24\u7C7B\u65B9\u6CD5\uFF1A<code>park</code>\u548C<code>unpark</code>\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u65E0\u671F\u9650\u6682\u505C\uFF08\u963B\u585E\uFF09\u5F53\u524D\u7EBF\u7A0B\uFF0C\u76F4\u5230unpark\u65B9\u6CD5\u88AB\u8C03\u7528\u6216\u5F53\u524D\u7EBF\u7A0B\u88AB\u4E2D\u65AD\uFF0Cpark\u65B9\u6CD5\u624D\u4F1A\u8FD4\u56DE\u3002</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6682\u505C\uFF08\u963B\u585E\uFF09\u5F53\u524D\u7EBF\u7A0B\uFF0C\u591A\u4E86\u4E00\u4E2A\u963B\u585E\u5BF9\u8C61blocker\u53C2\u6570\u3002</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parkNanos</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">,</span> <span class="token keyword">long</span> nanos<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6682\u505C\uFF08\u963B\u585E\uFF09\u5F53\u524D\u7EBF\u7A0B\uFF0C\u4E0D\u8FC7\u6709\u8D85\u65F6\u65F6\u95F4\u7684\u9650\u5236</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parkUntil</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">,</span> <span class="token keyword">long</span> deadline<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6682\u505C\uFF08\u963B\u585E\uFF09\u5F53\u524D\u7EBF\u7A0B\uFF0C\u76F4\u5230\u67D0\u4E2A\u65F6\u95F4</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parkNanos</span><span class="token punctuation">(</span><span class="token keyword">long</span> nanos<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6682\u505C\uFF08\u963B\u585E\uFF09\u5F53\u524D\u7EBF\u7A0B\uFF0C\u4E0D\u8FC7\u6709\u8D85\u65F6\u65F6\u95F4\u7684\u9650\u5236</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parkUntil</span><span class="token punctuation">(</span><span class="token keyword">long</span> deadline<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6682\u505C\uFF08\u963B\u585E\uFF09\u5F53\u524D\u7EBF\u7A0B\uFF0C\u76F4\u5230\u67D0\u4E2A\u65F6\u95F4</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">unpark</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> thread<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  \u5524\u9192\u5904\u4E8E\u6682\u505C\uFF08\u963B\u585E\uFF09\u72B6\u6001\u7684\u7EBF\u7A0B</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getBlocker</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>park\u82F1\u6587\u610F\u601D\u4E3A\u505C\u8F66\u3002\u6211\u4EEC\u5982\u679C\u628AThread\u770B\u6210\u4E00\u8F86\u8F66\u7684\u8BDD\uFF0Cpark\u5C31\u662F\u8BA9\u8F66\u505C\u4E0B\uFF0Cunpark\u5C31\u662F\u8BA9\u8F66\u542F\u52A8\u7136\u540E\u8DD1\u8D77\u6765\u3002</p><h2 id="_3-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9E\u4F8B" aria-hidden="true">#</a> 3. \u5B9E\u4F8B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LockSupportDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">ChangeObjectThread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChangeObjectThread</span><span class="token punctuation">(</span><span class="token string">&quot;t1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">ChangeObjectThread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChangeObjectThread</span><span class="token punctuation">(</span><span class="token string">&quot;t2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ChangeObjectThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token class-name">ChangeObjectThread</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token annotation punctuation">@Override</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>u<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;in &quot;</span> <span class="token operator">+</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isInterrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u88AB\u4E2D\u65AD\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7EE7\u7EED\u6267\u884C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t1<span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>t2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>in t1
\u88AB\u4E2D\u65AD\u4E86
\u7EE7\u7EED\u6267\u884C
in t2
\u7EE7\u7EED\u6267\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u513F<code>park</code>\u548C<code>unpark</code>\u5176\u5B9E\u5B9E\u73B0\u4E86<code>wait</code>\u548C<code>notify</code>\u7684\u529F\u80FD\uFF0C\u4E0D\u8FC7\u8FD8\u662F\u6709\u4E00\u4E9B\u5DEE\u522B\u7684\u3002</p><ol><li><code>park</code>\u4E0D\u9700\u8981\u83B7\u53D6\u67D0\u4E2A\u5BF9\u8C61\u7684\u9501</li><li>\u56E0\u4E3A\u4E2D\u65AD\u7684\u65F6\u5019<code>park</code>\u4E0D\u4F1A\u629B\u51FA<code>InterruptedException</code>\u5F02\u5E38\uFF0C\u6240\u4EE5\u9700\u8981\u5728<code>park</code>\u4E4B\u540E\u81EA\u884C\u5224\u65AD\u4E2D\u65AD\u72B6\u6001\uFF0C\u7136\u540E\u505A\u989D\u5916\u7684\u5904\u7406</li></ol><h2 id="_4-park\u548Cunpark\u7684\u5148\u540E\u987A\u5E8F\u4E0D\u4E25\u683C" tabindex="-1"><a class="header-anchor" href="#_4-park\u548Cunpark\u7684\u5148\u540E\u987A\u5E8F\u4E0D\u4E25\u683C" aria-hidden="true">#</a> 4. <code>park\u548Cunpark</code>\u7684\u5148\u540E\u987A\u5E8F\u4E0D\u4E25\u683C</h2><p>\u76F8\u5BF9\u4E8E\u7EBF\u7A0B\u7684<code>stop\u548Cresume</code>\uFF0C<code>park\u548Cunpark</code>\u7684\u5148\u540E\u987A\u5E8F\u5E76\u4E0D\u662F\u90A3\u4E48\u4E25\u683C\u3002<code>stop\u548Cresume</code>\u5982\u679C\u987A\u5E8F\u53CD\u4E86\uFF0C\u4F1A\u51FA\u73B0\u6B7B\u9501\u73B0\u8C61\u3002\u800C<code>park\u548Cunpark</code>\u5374\u4E0D\u4F1A\u3002\u8FD9\u53C8\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F\u8FD8\u662F\u770B\u4E00\u4E2A\u4F8B\u5B50</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LockSupportDemo02</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">ChangeObjectThread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChangeObjectThread</span><span class="token punctuation">(</span><span class="token string">&quot;t1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ChangeObjectThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>

        <span class="token keyword">public</span> <span class="token class-name">ChangeObjectThread</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>u<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;in &quot;</span> <span class="token operator">+</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isInterrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u88AB\u4E2D\u65AD\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7EE7\u7EED\u6267\u884C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;unpark invoked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>t1\u5185\u90E8\u6709\u4F11\u77201s\u7684\u64CD\u4F5C\uFF0C\u6240\u4EE5unpark\u80AF\u5B9A\u5148\u4E8Epark\u7684\u8C03\u7528\uFF0C\u4F46\u662Ft1\u6700\u7EC8\u4ECD\u7136\u53EF\u4EE5\u5B8C\u7ED3\u3002\u8FD9\u662F\u56E0\u4E3A<code>park\u548Cunpark</code>\u4F1A\u5BF9\u6BCF\u4E2A\u7EBF\u7A0B\u7EF4\u6301\u4E00\u4E2A\u8BB8\u53EF\uFF08boolean\u503C\uFF09</p><ol><li>unpark\u8C03\u7528\u65F6\uFF0C\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u8FD8\u672A\u8FDB\u5165park\uFF0C\u5219\u8BB8\u53EF\u4E3Atrue</li><li>park\u8C03\u7528\u65F6\uFF0C\u5224\u65AD\u8BB8\u53EF\u662F\u5426\u4E3Atrue\uFF0C\u5982\u679C\u662Ftrue\uFF0C\u5219\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\uFF1B\u5982\u679C\u662Ffalse\uFF0C\u5219\u7B49\u5F85\uFF0C\u76F4\u5230\u8BB8\u53EF\u4E3Atrue</li></ol><h3 id="_4-1-jdk\u7684\u6587\u6863\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#_4-1-jdk\u7684\u6587\u6863\u63CF\u8FF0" aria-hidden="true">#</a> 4.1 jdk\u7684\u6587\u6863\u63CF\u8FF0</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220523200941379.png" alt="image-20220523200941379"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220523200950925.png" alt="image-20220523200950925"></p><h2 id="_5-\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> 5. \u76F8\u5173\u95EE\u9898</h2><h3 id="_5-1-thread-sleep-\u548Cobject-wait-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-1-thread-sleep-\u548Cobject-wait-\u7684\u533A\u522B" aria-hidden="true">#</a> 5.1 Thread.sleep()\u548CObject.wait()\u7684\u533A\u522B</h3><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u770BThread.sleep()\u548CObject.wait()\u7684\u533A\u522B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u70C2\u5927\u8857\u7684\u9898\u76EE\u4E86\uFF0C\u5927\u5BB6\u5E94\u8BE5\u90FD\u80FD\u8BF4\u4E0A\u6765\u4E24\u70B9\u3002</p><ul><li>Thread.sleep()\u4E0D\u4F1A\u91CA\u653E\u5360\u6709\u7684\u9501\uFF0CObject.wait()\u4F1A\u91CA\u653E\u5360\u6709\u7684\u9501\uFF1B</li><li>Thread.sleep()\u5FC5\u987B\u4F20\u5165\u65F6\u95F4\uFF0CObject.wait()\u53EF\u4F20\u53EF\u4E0D\u4F20\uFF0C\u4E0D\u4F20\u8868\u793A\u4E00\u76F4\u963B\u585E\u4E0B\u53BB\uFF1B</li><li>Thread.sleep()\u5230\u65F6\u95F4\u4E86\u4F1A\u81EA\u52A8\u5524\u9192\uFF0C\u7136\u540E\u7EE7\u7EED\u6267\u884C\uFF1B</li><li>Object.wait()\u4E0D\u5E26\u65F6\u95F4\u7684\uFF0C\u9700\u8981\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u4F7F\u7528Object.notify()\u5524\u9192\uFF1B</li><li>Object.wait()\u5E26\u65F6\u95F4\u7684\uFF0C\u5047\u5982\u6CA1\u6709\u88ABnotify\uFF0C\u5230\u65F6\u95F4\u4E86\u4F1A\u81EA\u52A8\u5524\u9192\uFF0C\u8FD9\u65F6\u53C8\u5206\u597D\u4E24\u79CD\u60C5\u51B5\uFF0C\u4E00\u662F\u7ACB\u5373\u83B7\u53D6\u5230\u4E86\u9501\uFF0C\u7EBF\u7A0B\u81EA\u7136\u4F1A\u7EE7\u7EED\u6267\u884C\uFF1B\u4E8C\u662F\u6CA1\u6709\u7ACB\u5373\u83B7\u53D6\u9501\uFF0C\u7EBF\u7A0B\u8FDB\u5165\u540C\u6B65\u961F\u5217\u7B49\u5F85\u83B7\u53D6\u9501\uFF1B</li></ul><p>\u5176\u5B9E\uFF0C\u4ED6\u4EEC\u4FE9\u6700\u5927\u7684\u533A\u522B\u5C31\u662FThread.sleep()\u4E0D\u4F1A\u91CA\u653E\u9501\u8D44\u6E90\uFF0CObject.wait()\u4F1A\u91CA\u653E\u9501\u8D44\u6E90\u3002</p><h3 id="_5-2-object-wait-\u548Ccondition-await-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-2-object-wait-\u548Ccondition-await-\u7684\u533A\u522B" aria-hidden="true">#</a> 5.2 Object.wait()\u548CCondition.await()\u7684\u533A\u522B</h3><p>Object.wait()\u548CCondition.await()\u7684\u539F\u7406\u662F\u57FA\u672C\u4E00\u81F4\u7684\uFF0C\u4E0D\u540C\u7684\u662FCondition.await()\u5E95\u5C42\u662F\u8C03\u7528LockSupport.park()\u6765\u5B9E\u73B0\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u7684\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u5B83\u5728\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u4E4B\u524D\u8FD8\u5E72\u4E86\u4E24\u4EF6\u4E8B\uFF0C\u4E00\u662F\u628A\u5F53\u524D\u7EBF\u7A0B\u6DFB\u52A0\u5230\u6761\u4EF6\u961F\u5217\u4E2D\uFF0C\u4E8C\u662F\u201C\u5B8C\u5168\u201D\u91CA\u653E\u9501\uFF0C\u4E5F\u5C31\u662F\u8BA9state\u72B6\u6001\u53D8\u91CF\u53D8\u4E3A0\uFF0C\u7136\u540E\u624D\u662F\u8C03\u7528LockSupport.park()\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u3002</p><h3 id="_5-3-thread-sleep-\u548Clocksupport-park-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-3-thread-sleep-\u548Clocksupport-park-\u7684\u533A\u522B" aria-hidden="true">#</a> 5.3 Thread.sleep()\u548CLockSupport.park()\u7684\u533A\u522B</h3><p>LockSupport.park()\u8FD8\u6709\u51E0\u4E2A\u5144\u5F1F\u65B9\u6CD5\u2014\u2014parkNanos()\u3001parkUtil()\u7B49\uFF0C\u6211\u4EEC\u8FD9\u91CC\u8BF4\u7684park()\u65B9\u6CD5\u7EDF\u79F0\u8FD9\u4E00\u7C7B\u65B9\u6CD5\u3002</p><ul><li>\u4ECE\u529F\u80FD\u4E0A\u6765\u8BF4\uFF0CThread.sleep()\u548CLockSupport.park()\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u90FD\u662F\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u7684\u6267\u884C\uFF0C<strong>\u4E14\u90FD\u4E0D\u4F1A\u91CA\u653E\u5F53\u524D\u7EBF\u7A0B\u5360\u6709\u7684\u9501\u8D44\u6E90\uFF1B</strong></li><li>Thread.sleep()\u6CA1\u6CD5\u4ECE\u5916\u90E8\u5524\u9192\uFF0C\u53EA\u80FD\u81EA\u5DF1\u9192\u8FC7\u6765\uFF1B</li><li>LockSupport.park()\u65B9\u6CD5\u53EF\u4EE5\u88AB\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u8C03\u7528LockSupport.unpark()\u65B9\u6CD5\u5524\u9192\uFF1B</li><li>Thread.sleep()\u65B9\u6CD5\u58F0\u660E\u4E0A\u629B\u51FA\u4E86InterruptedException\u4E2D\u65AD\u5F02\u5E38\uFF0C\u6240\u4EE5\u8C03\u7528\u8005\u9700\u8981\u6355\u83B7\u8FD9\u4E2A\u5F02\u5E38\u6216\u8005\u518D\u629B\u51FA\uFF1B</li><li>LockSupport.park()\u65B9\u6CD5\u4E0D\u9700\u8981\u6355\u83B7\u4E2D\u65AD\u5F02\u5E38\uFF1B</li><li>Thread.sleep()\u672C\u8EAB\u5C31\u662F\u4E00\u4E2Anative\u65B9\u6CD5\uFF1B</li><li>LockSupport.park()\u5E95\u5C42\u662F\u8C03\u7528\u7684Unsafe\u7684native\u65B9\u6CD5\uFF1B</li></ul><h3 id="_5-4-object-wait-\u548Clocksupport-park-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-4-object-wait-\u548Clocksupport-park-\u7684\u533A\u522B" aria-hidden="true">#</a> 5.4 Object.wait()\u548CLockSupport.park()\u7684\u533A\u522B</h3><p>\u4E8C\u8005\u90FD\u4F1A\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u7684\u8FD0\u884C\uFF0C\u4ED6\u4EEC\u6709\u4EC0\u4E48\u533A\u522B\u5462? \u7ECF\u8FC7\u4E0A\u9762\u7684\u5206\u6790\u76F8\u4FE1\u4F60\u4E00\u5B9A\u5F88\u6E05\u695A\u4E86\uFF0C\u771F\u7684\u5417? \u5F80\u4E0B\u770B\uFF01</p><ul><li>Object.wait()\u65B9\u6CD5\u9700\u8981\u5728synchronized\u5757\u4E2D\u6267\u884C\uFF1B</li><li>LockSupport.park()\u53EF\u4EE5\u5728\u4EFB\u610F\u5730\u65B9\u6267\u884C\uFF1B</li><li>Object.wait()\u65B9\u6CD5\u58F0\u660E\u629B\u51FA\u4E86\u4E2D\u65AD\u5F02\u5E38\uFF0C\u8C03\u7528\u8005\u9700\u8981\u6355\u83B7\u6216\u8005\u518D\u629B\u51FA\uFF1B</li><li>LockSupport.park()\u4E0D\u9700\u8981\u6355\u83B7\u4E2D\u65AD\u5F02\u5E38\uFF1B</li><li>Object.wait()\u4E0D\u5E26\u8D85\u65F6\u7684\uFF0C\u9700\u8981\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884Cnotify()\u6765\u5524\u9192\uFF0C\u4F46\u4E0D\u4E00\u5B9A\u7EE7\u7EED\u6267\u884C\u540E\u7EED\u5185\u5BB9\uFF1B</li><li>LockSupport.park()\u4E0D\u5E26\u8D85\u65F6\u7684\uFF0C\u9700\u8981\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884Cunpark()\u6765\u5524\u9192\uFF0C\u4E00\u5B9A\u4F1A\u7EE7\u7EED\u6267\u884C\u540E\u7EED\u5185\u5BB9\uFF1B</li></ul><p>park()/unpark()\u5E95\u5C42\u7684\u539F\u7406\u662F\u201C\u4E8C\u5143\u4FE1\u53F7\u91CF\u201D\uFF0C\u4F60\u53EF\u4EE5\u628A\u5B83\u76F8\u50CF\u6210\u53EA\u6709\u4E00\u4E2A\u8BB8\u53EF\u8BC1\u7684Semaphore\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u4E2A\u4FE1\u53F7\u91CF\u5728\u91CD\u590D\u6267\u884Cunpark()\u7684\u65F6\u5019\u4E5F\u4E0D\u4F1A\u518D\u589E\u52A0\u8BB8\u53EF\u8BC1\uFF0C\u6700\u591A\u53EA\u6709\u4E00\u4E2A\u8BB8\u53EF\u8BC1\u3002</p><h3 id="_5-5-\u5982\u679C\u5728wait-\u4E4B\u524D\u6267\u884C\u4E86notify-\u4F1A\u600E\u6837" tabindex="-1"><a class="header-anchor" href="#_5-5-\u5982\u679C\u5728wait-\u4E4B\u524D\u6267\u884C\u4E86notify-\u4F1A\u600E\u6837" aria-hidden="true">#</a> 5.5 \u5982\u679C\u5728wait()\u4E4B\u524D\u6267\u884C\u4E86notify()\u4F1A\u600E\u6837?</h3><p>\u5982\u679C\u5F53\u524D\u7684\u7EBF\u7A0B\u4E0D\u662F\u6B64\u5BF9\u8C61\u9501\u7684\u6240\u6709\u8005\uFF0C\u5374\u8C03\u7528\u8BE5\u5BF9\u8C61\u7684notify()\u6216wait()\u65B9\u6CD5\u65F6\u629B\u51FAIllegalMonitorStateException\u5F02\u5E38\uFF1B</p><p>\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u662F\u6B64\u5BF9\u8C61\u9501\u7684\u6240\u6709\u8005\uFF0Cwait()\u5C06\u4E00\u76F4\u963B\u585E\uFF0C\u56E0\u4E3A\u540E\u7EED\u5C06\u6CA1\u6709\u5176\u5B83notify()\u5524\u9192\u5B83\u3002</p><h3 id="_5-6-\u5982\u679C\u5728park-\u4E4B\u524D\u6267\u884C\u4E86unpark-\u4F1A\u600E\u6837" tabindex="-1"><a class="header-anchor" href="#_5-6-\u5982\u679C\u5728park-\u4E4B\u524D\u6267\u884C\u4E86unpark-\u4F1A\u600E\u6837" aria-hidden="true">#</a> 5.6 \u5982\u679C\u5728park()\u4E4B\u524D\u6267\u884C\u4E86unpark()\u4F1A\u600E\u6837?</h3><p>\u7EBF\u7A0B\u4E0D\u4F1A\u88AB\u963B\u585E\uFF0C\u76F4\u63A5\u8DF3\u8FC7park()\uFF0C\u7EE7\u7EED\u6267\u884C\u540E\u7EED\u5185\u5BB9</p><h3 id="_5-7-locksupport-park-\u4F1A\u91CA\u653E\u9501\u8D44\u6E90\u5417" tabindex="-1"><a class="header-anchor" href="#_5-7-locksupport-park-\u4F1A\u91CA\u653E\u9501\u8D44\u6E90\u5417" aria-hidden="true">#</a> 5.7 LockSupport.park()\u4F1A\u91CA\u653E\u9501\u8D44\u6E90\u5417?</h3><p>\u4E0D\u4F1A\uFF0C\u5B83\u53EA\u8D1F\u8D23\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\uFF0C\u91CA\u653E\u9501\u8D44\u6E90\u5B9E\u9645\u4E0A\u662F\u5728Condition\u7684await()\u65B9\u6CD5\u4E2D\u5B9E\u73B0\u7684\u3002</p><h2 id="_6-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_6-\u603B\u7ED3" aria-hidden="true">#</a> 6. \u603B\u7ED3</h2><ol><li><p><code>park\u548Cunpark</code>\u53EF\u4EE5\u5B9E\u73B0\u7C7B\u4F3C<code>wait\u548Cnotify</code>\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u5E76\u4E0D\u548C<code>wait\u548Cnotify</code>\u4EA4\u53C9\uFF0C\u4E5F\u5C31\u662F\u8BF4<code>unpark</code>\u4E0D\u4F1A\u5BF9<code>wait</code>\u8D77\u4F5C\u7528\uFF0C<code>notify</code>\u4E5F\u4E0D\u4F1A\u5BF9<code>park</code>\u8D77\u4F5C\u7528\u3002</p></li><li><p><code>park\u548Cunpark</code>\u7684\u4F7F\u7528\u4E0D\u4F1A\u51FA\u73B0\u6B7B\u9501\u7684\u60C5\u51B5</p></li><li><p>blocker\u7684\u4F5C\u7528\u662F\u5728dump\u7EBF\u7A0B\u7684\u65F6\u5019\u770B\u5230\u963B\u585E\u5BF9\u8C61\u7684\u4FE1\u606F</p></li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,50),k={href:"https://www.jianshu.com/p/f1f2cd289205",target:"_blank",rel:"noopener noreferrer"},r=p("LockSupport\u7684\u7528\u6CD5\u53CA\u539F\u7406"),d={href:"https://pdai.tech/md/java/thread/java-thread-x-lock-LockSupport.html",target:"_blank",rel:"noopener noreferrer"},v=p("JUC\u9501: LockSupport\u8BE6\u89E3");function m(b,h){const a=i("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",k,[r,s(a)])]),n("p",null,[n("a",d,[v,s(a)])])])}var f=t(l,[["render",m],["__file","LockSupport\u7528\u6CD5.html.vue"]]);export{f as default};
