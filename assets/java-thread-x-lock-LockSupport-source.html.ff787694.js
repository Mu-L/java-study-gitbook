import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c,a as n,b as s,e as o,d as e,r as l}from"./app.258ed467.js";const i={},u=o(`<h1 id="juc\u9501-locksupport\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#juc\u9501-locksupport\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> JUC\u9501: LockSupport\u6E90\u7801\u5206\u6790</h1><h2 id="_1-\u7C7B\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_1-\u7C7B\u7684\u5C5E\u6027" aria-hidden="true">#</a> 1. \u7C7B\u7684\u5C5E\u6027</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LockSupport</span> <span class="token punctuation">{</span>
    <span class="token comment">// Hotspot implementation via intrinsics API</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Unsafe</span> <span class="token constant">UNSAFE</span><span class="token punctuation">;</span>
    <span class="token comment">// parkBlocker\u5B57\u6BB5\u7684\u5185\u5B58\u504F\u79FB\u5730\u5740</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> parkBlockerOffset<span class="token punctuation">;</span>
    <span class="token comment">//threadLocalRandomSeed\u5B57\u6BB5\u7684\u5185\u5B58\u504F\u79FB\u5730\u5740</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token constant">SEED</span><span class="token punctuation">;</span>
    <span class="token comment">// threadLocalRandomProbe\u5B57\u6BB5\u7684\u5185\u5B58\u504F\u79FB\u5730\u5740</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token constant">PROBE</span><span class="token punctuation">;</span>
    <span class="token comment">// threadLocalRandomSecondarySeed\u5B57\u6BB5\u7684\u5185\u5B58\u504F\u79FB\u5730\u5740</span>
    
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u83B7\u53D6Unsafe\u5B9E\u4F8B</span>
            <span class="token constant">UNSAFE</span> <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u7EBF\u7A0B\u7C7B\u7C7B\u578B</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> tk <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
            <span class="token comment">// \u83B7\u53D6Thread\u7684parkBlocker\u5B57\u6BB5\u7684\u5185\u5B58\u504F\u79FB\u5730\u5740</span>
            parkBlockerOffset <span class="token operator">=</span> <span class="token constant">UNSAFE</span><span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span>tk<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;parkBlocker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u83B7\u53D6Thread\u7684threadLocalRandomSeed\u5B57\u6BB5\u7684\u5185\u5B58\u504F\u79FB\u5730\u5740</span>
            <span class="token constant">SEED</span> <span class="token operator">=</span> <span class="token constant">UNSAFE</span><span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span>tk<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;threadLocalRandomSeed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u83B7\u53D6Thread\u7684threadLocalRandomProbe\u5B57\u6BB5\u7684\u5185\u5B58\u504F\u79FB\u5730\u5740</span>
            <span class="token constant">PROBE</span> <span class="token operator">=</span> <span class="token constant">UNSAFE</span><span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span>tk<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;threadLocalRandomProbe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u83B7\u53D6Thread\u7684threadLocalRandomSecondarySeed\u5B57\u6BB5\u7684\u5185\u5B58\u504F\u79FB\u5730\u5740</span>
            <span class="token constant">SECONDARY</span> <span class="token operator">=</span> <span class="token constant">UNSAFE</span><span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span>tk<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;threadLocalRandomSecondarySeed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UNSAFE\u5B57\u6BB5\u8868\u793Asun.misc.Unsafe\u7C7B\uFF0C\u4E00\u822C\u7A0B\u5E8F\u4E2D\u4E0D\u5141\u8BB8\u76F4\u63A5\u8C03\u7528</li><li>\u800Clong\u578B\u7684\u8868\u793A\u5B9E\u4F8B\u5BF9\u8C61\u76F8\u5E94\u5B57\u6BB5\u5728\u5185\u5B58\u4E2D\u7684\u504F\u79FB\u5730\u5740\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u504F\u79FB\u5730\u5740\u83B7\u53D6\u6216\u8005\u8BBE\u7F6E\u8BE5\u5B57\u6BB5\u7684\u503C\u3002</li></ul><h2 id="_2-\u7C7B\u7684\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u7C7B\u7684\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> 2. \u7C7B\u7684\u6784\u9020\u51FD\u6570</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u79C1\u6709\u6784\u9020\u51FD\u6570\uFF0C\u65E0\u6CD5\u88AB\u5B9E\u4F8B\u5316</span>
<span class="token keyword">private</span> <span class="token class-name">LockSupport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u79C1\u6709\u6784\u9020\u51FD\u6570\uFF0C\u65E0\u6CD5\u88AB\u5B9E\u4F8B\u5316\u3002\u6240\u4EE5\u6240\u6709\u7684\u65B9\u6CD5\u90FD\u662F\u9759\u6001\u7684</p><h2 id="_3-unsafe\u7C7B\u4E2D\u7684park\u548Cunpark\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_3-unsafe\u7C7B\u4E2D\u7684park\u548Cunpark\u51FD\u6570" aria-hidden="true">#</a> 3. Unsafe\u7C7B\u4E2D\u7684park\u548Cunpark\u51FD\u6570</h2><p>\u5728\u5206\u6790LockSupport\u51FD\u6570\u4E4B\u524D\uFF0C\u5148\u5F15\u5165sun.misc.Unsafe\u7C7B\u4E2D\u7684park\u548Cunpark\u51FD\u6570\uFF0C\u56E0\u4E3ALockSupport\u7684\u6838\u5FC3\u51FD\u6570\u90FD\u662F\u57FA\u4E8EUnsafe\u7C7B\u4E2D\u5B9A\u4E49\u7684park\u548Cunpark\u51FD\u6570\uFF0C\u4E0B\u9762\u7ED9\u51FA\u4E24\u4E2A\u51FD\u6570\u7684\u5B9A\u4E49:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> isAbsolute<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">unpark</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> thread<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E: \u5BF9\u4E24\u4E2A\u51FD\u6570\u7684\u8BF4\u660E\u5982\u4E0B:</p><ul><li>park\u51FD\u6570\uFF0C\u963B\u585E\u7EBF\u7A0B\uFF0C\u5E76\u4E14\u8BE5\u7EBF\u7A0B\u5728\u4E0B\u5217\u60C5\u51B5\u53D1\u751F\u4E4B\u524D\u90FD\u4F1A\u88AB\u963B\u585E: \u2460 \u8C03\u7528unpark\u51FD\u6570\uFF0C\u91CA\u653E\u8BE5\u7EBF\u7A0B\u7684\u8BB8\u53EF\u3002\u2461 \u8BE5\u7EBF\u7A0B\u88AB\u4E2D\u65AD\u3002\u2462 \u8BBE\u7F6E\u7684\u65F6\u95F4\u5230\u4E86\u3002\u5E76\u4E14\uFF0C\u5F53time\u4E3A\u7EDD\u5BF9\u65F6\u95F4\u65F6\uFF0CisAbsolute\u4E3Atrue\uFF0C\u5426\u5219\uFF0CisAbsolute\u4E3Afalse\u3002\u5F53time\u4E3A0\u65F6\uFF0C\u8868\u793A\u65E0\u9650\u7B49\u5F85\uFF0C\u76F4\u5230unpark\u53D1\u751F\u3002</li><li>unpark\u51FD\u6570\uFF0C\u91CA\u653E\u7EBF\u7A0B\u7684\u8BB8\u53EF\uFF0C\u5373\u6FC0\u6D3B\u8C03\u7528park\u540E\u963B\u585E\u7684\u7EBF\u7A0B\u3002\u8FD9\u4E2A\u51FD\u6570\u4E0D\u662F\u5B89\u5168\u7684\uFF0C\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u65F6\u8981\u786E\u4FDD\u7EBF\u7A0B\u4F9D\u65E7\u5B58\u6D3B</li></ul><h2 id="_4-\u6838\u5FC3\u51FD\u6570\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_4-\u6838\u5FC3\u51FD\u6570\u5206\u6790" aria-hidden="true">#</a> 4. \u6838\u5FC3\u51FD\u6570\u5206\u6790</h2><h3 id="_4-1-park\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-1-park\u51FD\u6570" aria-hidden="true">#</a> 4.1 park\u51FD\u6570</h3><p>park\u51FD\u6570\u6709\u4E24\u4E2A\u91CD\u8F7D\u7248\u672C\uFF0C\u65B9\u6CD5\u6458\u8981\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF1B
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">)</span>\uFF1B    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E: \u4E24\u4E2A\u51FD\u6570\u7684\u533A\u522B\u5728\u4E8Epark()\u51FD\u6570\u6CA1\u6709\u6CA1\u6709blocker\uFF0C\u5373\u6CA1\u6709\u8BBE\u7F6E\u7EBF\u7A0B\u7684parkBlocker\u5B57\u6BB5\u3002park(Object)\u578B\u51FD\u6570\u5982\u4E0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B</span>
    <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8BBE\u7F6EBlocker</span>
    <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> blocker<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u83B7\u53D6\u8BB8\u53EF</span>
    <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u91CD\u65B0\u53EF\u8FD0\u884C\u540E\u518D\u6B64\u8BBE\u7F6EBlocker</span>
    <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u8C03\u7528park\u51FD\u6570\u65F6\uFF0C\u9996\u5148\u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B</li><li>\u7136\u540E\u8BBE\u7F6E\u5F53\u524D\u7EBF\u7A0B\u7684parkBlocker\u5B57\u6BB5\uFF0C\u5373\u8C03\u7528setBlocker\u51FD\u6570</li><li>\u4E4B\u540E\u8C03\u7528Unsafe\u7C7B\u7684park\u51FD\u6570</li><li>\u4E4B\u540E\u518D\u8C03\u7528setBlocker\u51FD\u6570\u3002</li></ol><h4 id="_4-1-1-\u4E3A\u4EC0\u4E48\u8981\u5728\u6B64park\u51FD\u6570\u4E2D\u8981\u8C03\u7528\u4E24\u6B21setblocker\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u4E3A\u4EC0\u4E48\u8981\u5728\u6B64park\u51FD\u6570\u4E2D\u8981\u8C03\u7528\u4E24\u6B21setblocker\u51FD\u6570" aria-hidden="true">#</a> 4.1.1 \u4E3A\u4EC0\u4E48\u8981\u5728\u6B64park\u51FD\u6570\u4E2D\u8981\u8C03\u7528\u4E24\u6B21setBlocker\u51FD\u6570?</h4><p>\u539F\u56E0\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u8C03\u7528park\u51FD\u6570\u65F6\uFF0C\u5F53\u524D\u7EBF\u7A0B\u9996\u5148\u8BBE\u7F6E\u597DparkBlocker\u5B57\u6BB5\uFF0C\u7136\u540E\u518D\u8C03\u7528Unsafe\u7684park\u51FD\u6570.</p><p>\u6B64\u540E\uFF0C<strong>\u5F53\u524D\u7EBF\u7A0B\u5C31\u5DF2\u7ECF\u963B\u585E\u4E86</strong>\uFF0C\u7B49\u5F85\u8BE5\u7EBF\u7A0B\u7684unpark\u51FD\u6570\u88AB\u8C03\u7528\uFF0C\u6240\u4EE5\u540E\u9762\u7684\u4E00\u4E2AsetBlocker\u51FD\u6570\u65E0\u6CD5\u8FD0\u884C</p><p>unpark\u51FD\u6570\u88AB\u8C03\u7528\uFF0C\u8BE5\u7EBF\u7A0B\u83B7\u5F97\u8BB8\u53EF\u540E\uFF0C\u5C31\u53EF\u4EE5\u7EE7\u7EED\u8FD0\u884C\u4E86\uFF0C\u4E5F\u5C31\u8FD0\u884C\u7B2C\u4E8C\u4E2AsetBlocker\uFF0C\u628A\u8BE5\u7EBF\u7A0B\u7684parkBlocker\u5B57\u6BB5\u8BBE\u7F6E\u4E3Anull\uFF0C\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u6574\u4E2Apark\u51FD\u6570\u7684\u903B\u8F91\u3002</p><p>\u5982\u679C\u6CA1\u6709\u7B2C\u4E8C\u4E2AsetBlocker\uFF0C\u90A3\u4E48\u4E4B\u540E\u6CA1\u6709\u8C03\u7528park(Object blocker)\uFF0C\u800C\u76F4\u63A5\u8C03\u7528getBlocker\u51FD\u6570\uFF0C\u5F97\u5230\u7684\u8FD8\u662F\u524D\u4E00\u4E2Apark(Object blocker)\u8BBE\u7F6E\u7684blocker\uFF0C\u663E\u7136\u662F\u4E0D\u7B26\u5408\u903B\u8F91\u7684\u3002</p><p>\u603B\u4E4B\uFF0C\u5FC5\u987B\u8981\u4FDD\u8BC1\u5728park(Object blocker)\u6574\u4E2A\u51FD\u6570\u6267\u884C\u5B8C\u540E\uFF0C\u8BE5\u7EBF\u7A0B\u7684parkBlocker\u5B57\u6BB5\u53C8\u6062\u590D\u4E3Anull\u3002\u6240\u4EE5\uFF0Cpark(Object)\u578B\u51FD\u6570\u91CC\u5FC5\u987B\u8981\u8C03\u7528setBlocker\u51FD\u6570\u4E24\u6B21\u3002</p><h4 id="_4-1-2-setblocker\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-1-2-setblocker\u65B9\u6CD5" aria-hidden="true">#</a> 4.1.2 setBlocker\u65B9\u6CD5</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setBlocker</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">,</span> <span class="token class-name">Object</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u7EBF\u7A0Bt\u7684parkBlocker\u5B57\u6BB5\u7684\u503C\u4E3Aarg</span>
    <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">putObject</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> parkBlockerOffset<span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E: \u6B64\u65B9\u6CD5\u7528\u4E8E\u8BBE\u7F6E\u7EBF\u7A0Bt\u7684parkBlocker\u5B57\u6BB5\u7684\u503C\u4E3Aarg\u3002</p><h3 id="_4-2-\u65E0\u53C2\u91CD\u8F7D\u7248\u672C-park-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-2-\u65E0\u53C2\u91CD\u8F7D\u7248\u672C-park-\u51FD\u6570" aria-hidden="true">#</a> 4.2 \u65E0\u53C2\u91CD\u8F7D\u7248\u672C\uFF0Cpark()\u51FD\u6570</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u8BB8\u53EF\uFF0C\u8BBE\u7F6E\u65F6\u95F4\u4E3A\u65E0\u9650\u957F\uFF0C\u76F4\u5230\u53EF\u4EE5\u83B7\u53D6\u8BB8\u53EF</span>
    <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E: \u8C03\u7528\u4E86park\u51FD\u6570\u540E\uFF0C\u4F1A\u7981\u7528\u5F53\u524D\u7EBF\u7A0B\uFF0C\u9664\u975E\u8BB8\u53EF\u53EF\u7528\u3002\u5728\u4EE5\u4E0B\u4E09\u79CD\u60C5\u51B5\u4E4B\u4E00\u53D1\u751F\u4E4B\u524D\uFF0C\u5F53\u524D\u7EBF\u7A0B\u90FD\u5C06\u5904\u4E8E\u4F11\u7720\u72B6\u6001\uFF0C\u5373\u4E0B\u5217\u60C5\u51B5\u53D1\u751F\u65F6\uFF0C\u5F53\u524D\u7EBF\u7A0B\u4F1A\u83B7\u53D6\u8BB8\u53EF\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u8FD0\u884C\u3002</p><ul><li>\u5176\u4ED6\u67D0\u4E2A\u7EBF\u7A0B\u5C06\u5F53\u524D\u7EBF\u7A0B\u4F5C\u4E3A\u76EE\u6807\u8C03\u7528 unpark\u3002</li><li>\u5176\u4ED6\u67D0\u4E2A\u7EBF\u7A0B\u4E2D\u65AD\u5F53\u524D\u7EBF\u7A0B\u3002</li><li>\u8BE5\u8C03\u7528\u4E0D\u5408\u903B\u8F91\u5730(\u5373\u6BEB\u65E0\u7406\u7531\u5730)\u8FD4\u56DE\u3002</li></ul><h3 id="_4-3-parknanos\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-3-parknanos\u51FD\u6570" aria-hidden="true">#</a> 4.3 parkNanos\u51FD\u6570</h3><p>\u6B64\u51FD\u6570\u8868\u793A\u5728\u8BB8\u53EF\u53EF\u7528\u524D\u7981\u7528\u5F53\u524D\u7EBF\u7A0B\uFF0C\u5E76\u6700\u591A\u7B49\u5F85\u6307\u5B9A\u7684\u7B49\u5F85\u65F6\u95F4\u3002\u5177\u4F53\u51FD\u6570\u5982\u4E0B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parkNanos</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">,</span> <span class="token keyword">long</span> nanos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nanos <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u65F6\u95F4\u5927\u4E8E0</span>
        <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8BBE\u7F6EBlocker</span>
        <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> blocker<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u83B7\u53D6\u8BB8\u53EF\uFF0C\u5E76\u8BBE\u7F6E\u4E86\u65F6\u95F4</span>
        <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> nanos<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8BBE\u7F6E\u8BB8\u53EF</span>
        <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E: \u8BE5\u51FD\u6570\u4E5F\u662F\u8C03\u7528\u4E86\u4E24\u6B21setBlocker\u51FD\u6570\uFF0Cnanos\u53C2\u6570\u8868\u793A\u76F8\u5BF9\u65F6\u95F4\uFF0C\u8868\u793A\u7B49\u5F85\u591A\u957F\u65F6\u95F4\u3002</p><h3 id="_4-4-parkuntil\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-4-parkuntil\u51FD\u6570" aria-hidden="true">#</a> 4.4 parkUntil\u51FD\u6570</h3><p>\u6B64\u51FD\u6570\u8868\u793A\u5728\u6307\u5B9A\u7684\u65F6\u9650\u524D\u7981\u7528\u5F53\u524D\u7EBF\u7A0B\uFF0C\u9664\u975E\u8BB8\u53EF\u53EF\u7528, \u5177\u4F53\u51FD\u6570\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parkUntil</span><span class="token punctuation">(</span><span class="token class-name">Object</span> blocker<span class="token punctuation">,</span> <span class="token keyword">long</span> deadline<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B</span>
    <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8BBE\u7F6EBlocker</span>
    <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> blocker<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> deadline<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8BBE\u7F6EBlocker\u4E3Anull</span>
    <span class="token function">setBlocker</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E: \u8BE5\u51FD\u6570\u4E5F\u8C03\u7528\u4E86\u4E24\u6B21setBlocker\u51FD\u6570\uFF0Cdeadline\u53C2\u6570\u8868\u793A\u7EDD\u5BF9\u65F6\u95F4\uFF0C\u8868\u793A\u6307\u5B9A\u7684\u65F6\u95F4\u3002</p><h3 id="_4-5-unpark\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-5-unpark\u51FD\u6570" aria-hidden="true">#</a> 4.5 unpark\u51FD\u6570</h3><p>\u6B64\u51FD\u6570\u8868\u793A\u5982\u679C\u7ED9\u5B9A\u7EBF\u7A0B\u7684\u8BB8\u53EF\u5C1A\u4E0D\u53EF\u7528\uFF0C\u5219\u4F7F\u5176\u53EF\u7528\u3002\u5982\u679C\u7EBF\u7A0B\u5728 park \u4E0A\u53D7\u963B\u585E\uFF0C\u5219\u5B83\u5C06\u89E3\u9664\u5176\u963B\u585E\u72B6\u6001\u3002\u5426\u5219\uFF0C\u4FDD\u8BC1\u4E0B\u4E00\u6B21\u8C03\u7528 park \u4E0D\u4F1A\u53D7\u963B\u585E\u3002\u5982\u679C\u7ED9\u5B9A\u7EBF\u7A0B\u5C1A\u672A\u542F\u52A8\uFF0C\u5219\u65E0\u6CD5\u4FDD\u8BC1\u6B64\u64CD\u4F5C\u6709\u4EFB\u4F55\u6548\u679C\u3002\u5177\u4F53\u51FD\u6570\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">unpark</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> thread<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>thread <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// \u7EBF\u7A0B\u4E3A\u4E0D\u7A7A</span>
        <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>thread<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u91CA\u653E\u8BE5\u7EBF\u7A0B\u8BB8\u53EF</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,44),k={href:"https://www.jianshu.com/p/f1f2cd289205",target:"_blank",rel:"noopener noreferrer"},r=e("LockSupport\u7684\u7528\u6CD5\u53CA\u539F\u7406"),d={href:"https://pdai.tech/md/java/thread/java-thread-x-lock-LockSupport.html",target:"_blank",rel:"noopener noreferrer"},v=e("JUC\u9501: LockSupport\u8BE6\u89E3");function m(b,h){const a=l("ExternalLinkIcon");return t(),c("div",null,[u,n("p",null,[n("a",k,[r,s(a)])]),n("p",null,[n("a",d,[v,s(a)])])])}const g=p(i,[["render",m],["__file","java-thread-x-lock-LockSupport-source.html.vue"]]);export{g as default};
