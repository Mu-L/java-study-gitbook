import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as o,d as p,e as c,r as i}from"./app.5ad9c6e6.js";const l={},u=p(`<h1 id="druid\u6E90\u7801\u5B66\u4E60-\u516B-druiddatasource\u7684removeabandoned\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#druid\u6E90\u7801\u5B66\u4E60-\u516B-druiddatasource\u7684removeabandoned\u673A\u5236" aria-hidden="true">#</a> Druid\u6E90\u7801\u5B66\u4E60\uFF08\u516B\uFF09-DruidDataSource\u7684removeAbandoned\u673A\u5236</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6709\u5173\u4E8E Druid \u7684removeAbandoned\u673A\u5236\uFF0C\u5728getConnection\u6E90\u7801\u4E2D\u4ECB\u7ECD\u8FC7\u3002removeAbandoned\u5B9E\u9645\u4E0A\u5C31\u662FDruid\u7684\u6CC4\u9732\u68C0\u6D4B\u673A\u5236\u3002\u4E3B\u8981\u7684\u53C2\u6570\u6709\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>removeAbandoned</td><td>\u5982\u679C\u8FDE\u63A5\u6CC4\u9732\uFF0C\u662F\u5426\u9700\u8981\u56DE\u6536\u6CC4\u9732\u7684\u8FDE\u63A5\uFF0C\u9ED8\u8BA4false\uFF1B</td></tr><tr><td>logAbandoned</td><td>\u5982\u679C\u56DE\u6536\u4E86\u6CC4\u9732\u7684\u8FDE\u63A5\uFF0C\u662F\u5426\u8981\u6253\u5370\u4E00\u6761log\uFF0C\u9ED8\u8BA4false\uFF1B</td></tr><tr><td>removeAbandonedTimeoutMillis</td><td>\u8FDE\u63A5\u56DE\u6536\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA45\u5206\u949F\uFF1B</td></tr></tbody></table><p>removeAbandoned\u4F5C\u4E3A\u5F00\u542F\u8FDE\u63A5\u6CC4\u9732\u68C0\u6D4B\u673A\u5236\u7684\u5F00\u5173\uFF0C\u9ED8\u8BA4\u4E3Afalse,\u5F53\u4E3Atrue\u7684\u65F6\u5019\uFF0C\u5728\u968F\u7740DestroyTask\u7684\u8C03\u7528\u9891\u7387\u5B9A\u671F\u68C0\u6D4B\u3002 \u5728DestroyTask\u7684run\u65B9\u6CD5\u4E2D\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">shrink</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> keepAlive<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRemoveAbandoned</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">removeAbandoned</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u5F00\u542F\u8FDE\u63A5\u6CC4\u9732\u68C0\u6D4B\u673A\u5236\u4E4B\u540E\uFF0C\u4F1A\u5B9A\u671F\u68C0\u6D4B\u8FDE\u63A5\u662F\u5426\u89E6\u53D1\u8D85\u65F6\u65F6\u95F4\uFF0C\u5982\u679C\u89E6\u53D1\u5219\u5173\u95ED\u8FDE\u63A5\u3002\u51E1\u662Fget\u4E4B\u540E\u88AB\u4F7F\u7528\u7684\u8FDE\u63A5\u90FD\u653E\u7F6E\u5728activeConnections\u4E2D\u3002 \u4E4B\u540E\u904D\u5386activeConnections\uFF0C\u5BF9\u8FDE\u63A5\u8FDB\u884C\u5224\u65AD\uFF0C\u5982\u679C\u89E6\u53D1\u8D85\u65F6\u65F6\u95F4\uFF0C\u5219close\u3002</p><h2 id="_2-removeabandoned-\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_2-removeabandoned-\u6E90\u7801" aria-hidden="true">#</a> 2. removeAbandoned \u6E90\u7801</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u5B9A\u4E49\u4E00\u4E2AabandonedList\u6765\u5B58\u653E\u7B26\u5408\u8D85\u65F6\u65F6\u95F4\u7684\u8FDE\u63A5\u3002</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DruidPooledConnection</span><span class="token punctuation">&gt;</span></span> abandonedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DruidPooledConnection</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u52A0\u9501</span>
activeConnectionLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
     <span class="token comment">//\u901A\u8FC7\u8FED\u4EE3\u5668\u904D\u5386activeConnections</span>
    <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DruidPooledConnection</span><span class="token punctuation">&gt;</span></span> iter <span class="token operator">=</span> activeConnections<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> iter<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6\u5230\u8FDE\u63A5</span>
        <span class="token class-name">DruidPooledConnection</span> pooledConnection <span class="token operator">=</span> iter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//\u5982\u679C\u8FDE\u7EA7\u4E3ARunning\u72B6\u6001\uFF0C\u8BF4\u660Esql\u8BED\u53E5\u6B63\u5728\u6267\u884C\uFF0C\u5219\u8DF3\u8FC7\u5F53\u524D\u8FDE\u63A5</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pooledConnection<span class="token punctuation">.</span><span class="token function">isRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u8BA1\u7B97\u8D85\u65F6\u65F6\u95F4 \u9ED8\u8BA4\u503C\u4E3A5\u5206\u949F</span>
        <span class="token keyword">long</span> timeMillis <span class="token operator">=</span> <span class="token punctuation">(</span>currrentNanos <span class="token operator">-</span> pooledConnection<span class="token punctuation">.</span><span class="token function">getConnectedTimeNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5982\u679C\u89E6\u53D1\u8D85\u65F6\uFF1A</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timeMillis <span class="token operator">&gt;=</span> removeAbandonedTimeoutMillis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">//\u4ECEiter\u5220\u9664\u8BE5\u8FDE\u63A5</span>
            iter<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//\u5173\u95EDsetTraceEnable</span>
            pooledConnection<span class="token punctuation">.</span><span class="token function">setTraceEnable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//\u6DFB\u52A0\u5230abandonedList</span>
            abandonedList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>pooledConnection<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
<span class="token comment">//\u89E3\u9501</span>
    activeConnectionLock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u6EE1\u8DB3\u8D85\u65F6\u6761\u4EF6\u7684\u8FDE\u63A5\u653E\u7F6E\u5230abandonedList\u4E2D\u3002 \u5982\u679CabandonedList\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u8981\u5BF9abandonedList\u8FDB\u884C\u904D\u5386\uFF0C\u7136\u540E\u5173\u95ED\u8FD9\u4E9B\u8FDE\u63A5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u5B9A\u4E49\u9501</span>
<span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> pooledConnection<span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5982\u679C\u8FDE\u63A5\u4E3Adisiable\u72B6\u6001 \u8BF4\u660E\u5DF2\u7ECF\u4E0D\u53EF\u7528 \u76F4\u63A5\u8DF3\u8FC7</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pooledConnection<span class="token punctuation">.</span><span class="token function">isDisable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u89E3\u9501</span>
    lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u5173\u95ED\u8FDE\u63A5</span>
<span class="token class-name">JdbcUtils</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>pooledConnection<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u8BBE\u7F6Eabandond\u72B6\u6001</span>
pooledConnection<span class="token punctuation">.</span><span class="token function">abandond</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u589E\u52A0\u8BA1\u6570\u5668</span>
removeAbandonedCount<span class="token operator">++</span><span class="token punctuation">;</span>
removeCount<span class="token operator">++</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u540E\u8FDB\u884C\u65E5\u5FD7\u5904\u7406\u3002 \u6253\u5370\u51FAwarn\u7684\u65E5\u5FD7\u4E4B\u540E\uFF0C\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,13),d={href:"https://blog.csdn.net/dhaibo1986/article/details/121384904?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"},r=c("Druid\u6E90\u7801\u9605\u8BFB8-DruidDataSource\u7684removeAbandoned\u673A\u5236");function k(v,m){const s=i("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",d,[r,o(s)])])])}const h=a(l,[["render",k],["__file","dbcp-y-druid-source-removeAbandoned.html.vue"]]);export{h as default};