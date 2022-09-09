import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as p,a as n,b as t,e as c,r as o}from"./app.e683cd35.js";const l={},i=c(`<h1 id="java-8-\u79FB\u9664jvm\u6C38\u4E45\u4EE3permgen" tabindex="-1"><a class="header-anchor" href="#java-8-\u79FB\u9664jvm\u6C38\u4E45\u4EE3permgen" aria-hidden="true">#</a> Java 8 - \u79FB\u9664JVM\u6C38\u4E45\u4EE3Permgen</h1><blockquote><p>\u5F88\u591A\u5F00\u53D1\u8005\u90FD\u5728\u5176\u7CFB\u7EDF\u4E2D\u89C1\u8FC7\u201Cjava.lang.OutOfMemoryError: PermGen space\u201D\u8FD9\u4E00\u95EE\u9898\u3002\u8FD9\u5F80\u5F80\u662F\u7531\u7C7B\u52A0\u8F7D\u5668\u76F8\u5173\u7684\u5185\u5B58\u6CC4\u6F0F\u4EE5\u53CA\u65B0\u7C7B\u52A0\u8F7D\u5668\u7684\u521B\u5EFA\u5BFC\u81F4\u7684\uFF0C\u901A\u5E38\u51FA\u73B0\u4E8E\u4EE3\u7801\u70ED\u90E8\u7F72\u65F6\u3002\u76F8\u5BF9\u4E8E\u6B63\u5F0F\u4EA7\u54C1\uFF0C\u8BE5\u95EE\u9898\u5728\u5F00\u53D1\u673A\u4E0A\u51FA\u73B0\u7684\u9891\u7387\u66F4\u9AD8\uFF0C\u5728\u4EA7\u54C1\u4E2D\u6700\u5E38\u89C1\u7684\u201C\u95EE\u9898\u201D\u662F\u9ED8\u8BA4\u503C\u592A\u4F4E\u4E86\u3002\u5E38\u7528\u7684\u89E3\u51B3\u65B9\u6CD5\u662F\u5C06\u5176\u8BBE\u7F6E\u4E3A256MB\u6216\u66F4\u9AD8\u3002</p></blockquote><h2 id="_1-permgen-space\u7B80\u5355\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-permgen-space\u7B80\u5355\u4ECB\u7ECD" aria-hidden="true">#</a> 1. PermGen space\u7B80\u5355\u4ECB\u7ECD</h2><p>PermGen space\u7684\u5168\u79F0\u662FPermanent Generation space,\u662F\u6307\u5185\u5B58\u7684\u6C38\u4E45\u4FDD\u5B58\u533A\u57DF\uFF0C\u8BF4\u8BF4\u4E3A\u4EC0\u4E48\u4F1A\u5185\u5B58\u6EA2\u51FA: \u8FD9\u4E00\u90E8\u5206\u7528\u4E8E\u5B58\u653EClass\u548CMeta\u7684\u4FE1\u606F,Class\u5728\u88AB Load\u7684\u65F6\u5019\u88AB\u653E\u5165PermGen space\u533A\u57DF\uFF0C\u5B83\u548C\u548C\u5B58\u653EInstance\u7684Heap\u533A\u57DF\u4E0D\u540C,\u6240\u4EE5\u5982\u679C\u4F60\u7684APP\u4F1ALOAD\u5F88\u591ACLASS\u7684\u8BDD,\u5C31\u5F88\u53EF\u80FD\u51FA\u73B0PermGen space\u9519\u8BEF\u3002\u8FD9\u79CD\u9519\u8BEF\u5E38\u89C1\u5728web\u670D\u52A1\u5668\u5BF9JSP\u8FDB\u884Cpre compile\u7684\u65F6\u5019\u3002</p><p>JVM \u79CD\u7C7B\u6709\u5F88\u591A\uFF0C\u6BD4\u5982 Oralce-Sun Hotspot, Oralce JRockit, IBM J9, Taobao JVM(\u6DD8\u5B9D\u597D\u6837\u7684\uFF01)\u7B49\u7B49\u3002\u5F53\u7136\u6B66\u6797\u76DF\u4E3B\u662FHotspot\u4E86\uFF0C\u8FD9\u4E2A\u6BEB\u65E0\u4E89\u8BAE\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CPermGen space\u662FOracle-Sun Hotspot\u624D\u6709\uFF0CJRockit\u4EE5\u53CAJ9\u662F\u6CA1\u6709\u8FD9\u4E2A\u533A\u57DF\u3002</p><h2 id="_2-\u5143\u7A7A\u95F4-metaspace-\u4E00\u79CD\u65B0\u7684\u5185\u5B58\u7A7A\u95F4\u8BDE\u751F" tabindex="-1"><a class="header-anchor" href="#_2-\u5143\u7A7A\u95F4-metaspace-\u4E00\u79CD\u65B0\u7684\u5185\u5B58\u7A7A\u95F4\u8BDE\u751F" aria-hidden="true">#</a> 2. \u5143\u7A7A\u95F4(MetaSpace)\u4E00\u79CD\u65B0\u7684\u5185\u5B58\u7A7A\u95F4\u8BDE\u751F</h2><p>JDK8 HotSpot JVM \u5C06\u79FB\u9664\u6C38\u4E45\u533A\uFF0C\u4F7F\u7528\u672C\u5730\u5185\u5B58\u6765\u5B58\u50A8\u7C7B\u5143\u6570\u636E\u4FE1\u606F\u5E76\u79F0\u4E4B\u4E3A: \u5143\u7A7A\u95F4(Metaspace)\uFF1B\u8FD9\u4E0EOracle JRockit \u548CIBM JVM\u2019s\u5F88\u76F8\u4F3C\uFF0C\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220818220125200.png" alt="image-20220818220125200" loading="lazy"></p><p>\u8FD9\u610F\u5473\u7740\u4E0D\u4F1A\u518D\u6709java.lang.OutOfMemoryError: PermGen\u95EE\u9898\uFF0C\u4E5F\u4E0D\u518D\u9700\u8981\u4F60\u8FDB\u884C\u8C03\u4F18\u53CA\u76D1\u63A7\u5185\u5B58\u7A7A\u95F4\u7684\u4F7F\u7528\u2026\u2026\u4F46\u8BF7\u7B49\u7B49\uFF0C\u8FD9\u4E48\u8BF4\u8FD8\u4E3A\u65F6\u8FC7\u65E9\u3002\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E9B\u6539\u53D8\u662F\u900F\u660E\u7684\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u7684\u5C55\u793A\u5C06\u4F7F\u4F60\u77E5\u9053\u4ECD\u7136\u8981\u5173\u6CE8\u7C7B\u5143\u6570\u636E\u5185\u5B58\u7684\u5360\u7528\u3002\u8BF7\u4E00\u5B9A\u8981\u7262\u8BB0\uFF0C\u8FD9\u4E2A\u65B0\u7279\u6027\u4E5F\u4E0D\u80FD\u795E\u5947\u5730\u6D88\u9664\u7C7B\u548C\u7C7B\u52A0\u8F7D\u5668\u5BFC\u81F4\u7684\u5185\u5B58\u6CC4\u6F0F\u3002</p><p>java8\u4E2Dmetaspace\u603B\u7ED3\u5982\u4E0B:</p><ul><li>PermGen \u7A7A\u95F4\u7684\u72B6\u51B5</li></ul><p>\u8FD9\u90E8\u5206\u5185\u5B58\u7A7A\u95F4\u5C06\u5168\u90E8\u79FB\u9664\u3002</p><p>JVM\u7684\u53C2\u6570: PermSize \u548C MaxPermSize \u4F1A\u88AB\u5FFD\u7565\u5E76\u7ED9\u51FA\u8B66\u544A(\u5982\u679C\u5728\u542F\u7528\u65F6\u8BBE\u7F6E\u4E86\u8FD9\u4E24\u4E2A\u53C2\u6570)\u3002</p><ul><li>Metaspace \u5185\u5B58\u5206\u914D\u6A21\u578B</li></ul><p>\u5927\u90E8\u5206\u7C7B\u5143\u6570\u636E\u90FD\u5728\u672C\u5730\u5185\u5B58\u4E2D\u5206\u914D\u3002</p><p>\u7528\u4E8E\u63CF\u8FF0\u7C7B\u5143\u6570\u636E\u7684\u201Cklasses\u201D\u5DF2\u7ECF\u88AB\u79FB\u9664\u3002</p><ul><li>Metaspace \u5BB9\u91CF</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7C7B\u5143\u6570\u636E\u53EA\u53D7\u53EF\u7528\u7684\u672C\u5730\u5185\u5B58\u9650\u5236(\u5BB9\u91CF\u53D6\u51B3\u4E8E\u662F32\u4F4D\u6216\u662F64\u4F4D\u64CD\u4F5C\u7CFB\u7EDF\u7684\u53EF\u7528\u865A\u62DF\u5185\u5B58\u5927\u5C0F)\u3002</p><p>\u65B0\u53C2\u6570(MaxMetaspaceSize)\u7528\u4E8E\u9650\u5236\u672C\u5730\u5185\u5B58\u5206\u914D\u7ED9\u7C7B\u5143\u6570\u636E\u7684\u5927\u5C0F\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u8FD9\u4E2A\u53C2\u6570\uFF0C\u5143\u7A7A\u95F4\u4F1A\u5728\u8FD0\u884C\u65F6\u6839\u636E\u9700\u8981\u52A8\u6001\u8C03\u6574\u3002</p><ul><li>Metaspace \u5783\u573E\u56DE\u6536</li></ul><p>\u5BF9\u4E8E\u50F5\u6B7B\u7684\u7C7B\u53CA\u7C7B\u52A0\u8F7D\u5668\u7684\u5783\u573E\u56DE\u6536\u5C06\u5728\u5143\u6570\u636E\u4F7F\u7528\u8FBE\u5230\u201CMaxMetaspaceSize\u201D\u53C2\u6570\u7684\u8BBE\u5B9A\u503C\u65F6\u8FDB\u884C\u3002</p><p>\u9002\u65F6\u5730\u76D1\u63A7\u548C\u8C03\u6574\u5143\u7A7A\u95F4\u5BF9\u4E8E\u51CF\u5C0F\u5783\u573E\u56DE\u6536\u9891\u7387\u548C\u51CF\u5C11\u5EF6\u65F6\u662F\u5F88\u6709\u5FC5\u8981\u7684\u3002\u6301\u7EED\u7684\u5143\u7A7A\u95F4\u5783\u573E\u56DE\u6536\u8BF4\u660E\uFF0C\u53EF\u80FD\u5B58\u5728\u7C7B\u3001\u7C7B\u52A0\u8F7D\u5668\u5BFC\u81F4\u7684\u5185\u5B58\u6CC4\u6F0F\u6216\u662F\u5927\u5C0F\u8BBE\u7F6E\u4E0D\u5408\u9002\u3002</p><ul><li>Java \u5806\u5185\u5B58\u7684\u5F71\u54CD</li></ul><p>\u4E00\u4E9B\u6742\u9879\u6570\u636E\u5DF2\u7ECF\u79FB\u5230Java\u5806\u7A7A\u95F4\u4E2D\u3002\u5347\u7EA7\u5230JDK8\u4E4B\u540E\uFF0C\u4F1A\u53D1\u73B0Java\u5806 \u7A7A\u95F4\u6709\u6240\u589E\u957F\u3002</p><ul><li>Metaspace \u76D1\u63A7</li></ul><p>\u5143\u7A7A\u95F4\u7684\u4F7F\u7528\u60C5\u51B5\u53EF\u4EE5\u4ECEHotSpot1.8\u7684\u8BE6\u7EC6GC\u65E5\u5FD7\u8F93\u51FA\u4E2D\u5F97\u5230\u3002</p><p>Jstat \u548C JVisualVM\u4E24\u4E2A\u5DE5\u5177\uFF0C\u5728\u4F7F\u7528b75\u7248\u672C\u8FDB\u884C\u6D4B\u8BD5\u65F6\uFF0C\u5DF2\u7ECF\u66F4\u65B0\u4E86\uFF0C\u4F46\u662F\u8FD8\u662F\u80FD\u770B\u5230\u8001\u7684PermGen\u7A7A\u95F4\u7684\u51FA\u73B0\u3002</p><p>\u524D\u9762\u5DF2\u7ECF\u4ECE\u7406\u8BBA\u4E0A\u5145\u5206\u8BF4\u660E\uFF0C\u4E0B\u9762\u8BA9\u6211\u4EEC\u901A\u8FC7\u201C\u6CC4\u6F0F\u201D\u7A0B\u5E8F\u8FDB\u884C\u65B0\u5185\u5B58\u7A7A\u95F4\u7684\u89C2\u5BDF\u2026\u2026</p><h2 id="_3-permgen-vs-metaspace-\u8FD0\u884C\u65F6\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_3-permgen-vs-metaspace-\u8FD0\u884C\u65F6\u6BD4\u8F83" aria-hidden="true">#</a> 3. PermGen vs. Metaspace \u8FD0\u884C\u65F6\u6BD4\u8F83</h2><p>\u4E3A\u4E86\u66F4\u597D\u5730\u7406\u89E3Metaspace\u5185\u5B58\u7A7A\u95F4\u7684\u8FD0\u884C\u65F6\u884C\u4E3A\uFF0C</p><p>\u5C06\u8FDB\u884C\u4EE5\u4E0B\u51E0\u79CD\u573A\u666F\u7684\u6D4B\u8BD5:</p><ul><li>\u4F7F\u7528JDK1.7\u8FD0\u884CJava\u7A0B\u5E8F\uFF0C\u76D1\u63A7\u5E76\u8017\u5C3D\u9ED8\u8BA4\u8BBE\u5B9A\u768485MB\u5927\u5C0F\u7684PermGen\u5185\u5B58\u7A7A\u95F4\u3002</li><li>\u4F7F\u7528JDK1.8\u8FD0\u884CJava\u7A0B\u5E8F\uFF0C\u76D1\u63A7\u65B0Metaspace\u5185\u5B58\u7A7A\u95F4\u7684\u52A8\u6001\u589E\u957F\u548C\u5783\u573E\u56DE\u6536\u8FC7\u7A0B\u3002</li><li>\u4F7F\u7528JDK1.8\u8FD0\u884CJava\u7A0B\u5E8F\uFF0C\u6A21\u62DF\u8017\u5C3D\u901A\u8FC7\u201CMaxMetaspaceSize\u201D\u53C2\u6570\u8BBE\u5B9A\u7684128MB\u5927\u5C0F\u7684Metaspace\u5185\u5B58\u7A7A\u95F4\u3002</li></ul><p>\u9996\u5148\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u6A21\u62DFPermGen OOM\u7684\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassA</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do nothing</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684ClassA\uFF0C\u628A\u4ED6\u7F16\u8BD1\u6210class\u5B57\u8282\u7801\u653E\u5230D: /classes\u4E0B\u9762\uFF0C\u6D4B\u8BD5\u4EE3\u7801\u4E2D\u7528URLClassLoader\u6765\u52A0\u8F7D\u6B64\u7C7B\u578B\u4E0A\u9762\u7C7B\u7F16\u8BD1\u6210class</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u6A21\u62DFPermGen OOM
 * <span class="token keyword">@author</span> benhail
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OOMTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u51C6\u5907url</span>
            <span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:/classes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            URL<span class="token punctuation">[</span><span class="token punctuation">]</span> urls <span class="token operator">=</span> <span class="token punctuation">{</span>url<span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token comment">//\u83B7\u53D6\u6709\u5173\u7C7B\u578B\u52A0\u8F7D\u7684JMX\u63A5\u53E3</span>
            <span class="token class-name">ClassLoadingMXBean</span> loadingBean <span class="token operator">=</span> <span class="token class-name">ManagementFactory</span><span class="token punctuation">.</span><span class="token function">getClassLoadingMXBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//\u7528\u4E8E\u7F13\u5B58\u7C7B\u52A0\u8F7D\u5668</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ClassLoader</span><span class="token punctuation">&gt;</span></span> classLoaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ClassLoader</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u52A0\u8F7D\u7C7B\u578B\u5E76\u7F13\u5B58\u7C7B\u52A0\u8F7D\u5668\u5B9E\u4F8B</span>
                <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLClassLoader</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span><span class="token punctuation">;</span>
                classLoaders<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
                classLoader<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">&quot;ClassA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//\u663E\u793A\u6570\u91CF\u4FE1\u606F(\u5171\u52A0\u8F7D\u8FC7\u7684\u7C7B\u578B\u6570\u76EE\uFF0C\u5F53\u524D\u8FD8\u6709\u6548\u7684\u7C7B\u578B\u6570\u76EE\uFF0C\u5DF2\u7ECF\u88AB\u5378\u8F7D\u7684\u7C7B\u578B\u6570\u76EE)</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;total: &quot;</span> <span class="token operator">+</span> loadingBean<span class="token punctuation">.</span><span class="token function">getTotalLoadedClassCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;active: &quot;</span> <span class="token operator">+</span> loadingBean<span class="token punctuation">.</span><span class="token function">getLoadedClassCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;unloaded: &quot;</span> <span class="token operator">+</span> loadingBean<span class="token punctuation">.</span><span class="token function">getUnloadedClassCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u865A\u62DF\u673A\u5668\u53C2\u6570\u8BBE\u7F6E\u5982\u4E0B: -verbose -verbose:gc</p><p>\u8BBE\u7F6E-verbose\u53C2\u6570\u662F\u4E3A\u4E86\u83B7\u53D6\u7C7B\u578B\u52A0\u8F7D\u548C\u5378\u8F7D\u7684\u4FE1\u606F</p><p>\u8BBE\u7F6E-verbose:gc\u662F\u4E3A\u4E86\u83B7\u53D6\u5783\u573E\u6536\u96C6\u7684\u76F8\u5173\u4FE1\u606F</p><h3 id="_3-1-jdk-1-7-64-bit-\u2013-permgen-\u8017\u5C3D\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-1-jdk-1-7-64-bit-\u2013-permgen-\u8017\u5C3D\u6D4B\u8BD5" aria-hidden="true">#</a> 3.1 JDK 1.7 @64-bit \u2013 PermGen \u8017\u5C3D\u6D4B\u8BD5</h3><p>Java1.7\u7684PermGen\u9ED8\u8BA4\u7A7A\u95F4\u4E3A85 MB(\u6216\u8005\u53EF\u4EE5\u901A\u8FC7-XX:MaxPermSize=XXXm\u6307\u5B9A)</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220818221159680.png" alt="image-20220818221159680" loading="lazy"></p><p>\u53EF\u4EE5\u4ECE\u4E0A\u9762\u7684JVisualVM\u7684\u622A\u56FE\u770B\u51FA: \u5F53\u52A0\u8F7D\u8D85\u8FC76\u4E07\u4E2A\u7C7B\u4E4B\u540E\uFF0CPermGen\u88AB\u8017\u5C3D\u3002\u6211\u4EEC\u4E5F\u80FD\u901A\u8FC7\u7A0B\u5E8F\u548CGC\u7684\u8F93\u51FA\u89C2\u5BDF\u8017\u5C3D\u7684\u8FC7\u7A0B\u3002</p><p>\u7A0B\u5E8F\u8F93\u51FA(\u6458\u53D6\u4E86\u90E8\u5206)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token punctuation">[</span>Loaded ClassA from file:/D:/classes/<span class="token punctuation">]</span>
total: <span class="token number">64887</span>
active: <span class="token number">64887</span>
unloaded: <span class="token number">0</span>
<span class="token punctuation">[</span>GC 245041K-<span class="token operator">&gt;</span>213978K<span class="token punctuation">(</span>536768K<span class="token punctuation">)</span>, <span class="token number">0.0597188</span> secs<span class="token punctuation">]</span>
<span class="token punctuation">[</span>Full GC 213978K-<span class="token operator">&gt;</span>211425K<span class="token punctuation">(</span>644992K<span class="token punctuation">)</span>, <span class="token number">0.6456638</span> secs<span class="token punctuation">]</span>
<span class="token punctuation">[</span>GC 211425K-<span class="token operator">&gt;</span>211425K<span class="token punctuation">(</span>656448K<span class="token punctuation">)</span>, <span class="token number">0.0086696</span> secs<span class="token punctuation">]</span>
<span class="token punctuation">[</span>Full GC 211425K-<span class="token operator">&gt;</span>211411K<span class="token punctuation">(</span>731008K<span class="token punctuation">)</span>, <span class="token number">0.6924754</span> secs<span class="token punctuation">]</span>
<span class="token punctuation">[</span>GC 211411K-<span class="token operator">&gt;</span>211411K<span class="token punctuation">(</span>726528K<span class="token punctuation">)</span>, <span class="token number">0.0088992</span> secs<span class="token punctuation">]</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.
java.lang.OutOfMemoryError: PermGen space
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-jdk-1-8-64-bit-\u2013-metaspace\u5927\u5C0F\u52A8\u6001\u8C03\u6574\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-2-jdk-1-8-64-bit-\u2013-metaspace\u5927\u5C0F\u52A8\u6001\u8C03\u6574\u6D4B\u8BD5" aria-hidden="true">#</a> 3.2 JDK 1.8 @64-bit \u2013 Metaspace\u5927\u5C0F\u52A8\u6001\u8C03\u6574\u6D4B\u8BD5</h3><p>Java\u7684Metaspace\u7A7A\u95F4: \u4E0D\u53D7\u9650\u5236 (\u9ED8\u8BA4)</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220818221515514.png" alt="image-20220818221515514" loading="lazy"></p><p>\u4ECE\u4E0A\u9762\u7684\u622A\u56FE\u53EF\u4EE5\u770B\u5230\uFF0CJVM Metaspace\u8FDB\u884C\u4E86\u52A8\u6001\u6269\u5C55\uFF0C\u672C\u5730\u5185\u5B58\u7684\u4F7F\u7528\u753120MB\u589E\u957F\u5230646MB\uFF0C\u4EE5\u6EE1\u8DB3\u7A0B\u5E8F\u4E2D\u4E0D\u65AD\u589E\u957F\u7684\u7C7B\u6570\u636E\u5185\u5B58\u5360\u7528\u9700\u6C42\u3002\u6211\u4EEC\u4E5F\u80FD\u89C2\u5BDF\u5230JVM\u7684\u5783\u573E\u56DE\u6536\u4E8B\u4EF6\u2014\u8BD5\u56FE\u9500\u6BC1\u50F5\u6B7B\u7684\u7C7B\u6216\u7C7B\u52A0\u8F7D\u5668\u5BF9\u8C61\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u6211\u4EEC\u7A0B\u5E8F\u7684\u6CC4\u6F0F\uFF0CJVM\u522B\u65E0\u9009\u62E9\u53EA\u80FD\u52A8\u6001\u6269\u5C55Metaspace\u5185\u5B58\u7A7A\u95F4\u3002\u7A0B\u5E8F\u52A0\u8F7D\u8D85\u8FC710\u4E07\u4E2A\u7C7B\uFF0C\u800C\u6CA1\u6709\u51FA\u73B0OOM\u4E8B\u4EF6\u3002</p><h3 id="_3-3-jdk-1-8-64-bit-\u2013-metaspace-\u53D7\u9650\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-3-jdk-1-8-64-bit-\u2013-metaspace-\u53D7\u9650\u6D4B\u8BD5" aria-hidden="true">#</a> 3.3 JDK 1.8 @64-bit \u2013 Metaspace \u53D7\u9650\u6D4B\u8BD5</h3><p>Java\u7684Metaspace\u7A7A\u95F4: 128MB(-XX:MaxMetaspaceSize=128m)</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220818221612558.png" alt="image-20220818221612558" loading="lazy"></p><p>\u53EF\u4EE5\u4ECE\u4E0A\u9762\u7684JVisualVM\u7684\u622A\u56FE\u770B\u51FA: \u5F53\u52A0\u8F7D\u8D85\u8FC72\u4E07\u4E2A\u7C7B\u4E4B\u540E\uFF0CMetaspace\u88AB\u8017\u5C3D\uFF1B\u4E0EJDK1.7\u8FD0\u884C\u65F6\u975E\u5E38\u76F8\u4F3C\u3002\u6211\u4EEC\u4E5F\u80FD\u901A\u8FC7\u7A0B\u5E8F\u548CGC\u7684\u8F93\u51FA\u89C2\u5BDF\u8017\u5C3D\u7684\u8FC7\u7A0B\u3002\u53E6\u4E00\u4E2A\u6709\u8DA3\u7684\u73B0\u8C61\u662F\uFF0C\u4FDD\u7559\u7684\u539F\u751F\u5185\u5B58\u5360\u7528\u91CF\u662F\u8BBE\u5B9A\u7684\u6700\u5927\u5927\u5C0F\u4E24\u500D\u4E4B\u591A\u3002\u8FD9\u53EF\u80FD\u8868\u660E\uFF0C\u5982\u679C\u53EF\u80FD\u7684\u8BDD\uFF0C\u53EF\u5FAE\u8C03\u5143\u7A7A\u95F4\u5BB9\u91CF\u5927\u5C0F\u7B56\u7565\uFF0C\u6765\u907F\u514D\u672C\u5730\u5185\u5B58\u7684\u6D6A\u8D39\u3002</p><p>\u4ECEJava\u7A0B\u5E8F\u7684\u8F93\u51FA\u4E2D\u770B\u5230\u5982\u4E0B\u5F02\u5E38\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Loaded ClassA from file:/D:/classes/<span class="token punctuation">]</span>
total: <span class="token number">21393</span>
active: <span class="token number">21393</span>
unloaded: <span class="token number">0</span>
<span class="token punctuation">[</span>GC <span class="token punctuation">(</span>Metadata GC Threshold<span class="token punctuation">)</span> 64306K-<span class="token operator">&gt;</span>57010K<span class="token punctuation">(</span>111616K<span class="token punctuation">)</span>, <span class="token number">0.0145502</span> secs<span class="token punctuation">]</span>
<span class="token punctuation">[</span>Full GC <span class="token punctuation">(</span>Metadata GC Threshold<span class="token punctuation">)</span> 57010K-<span class="token operator">&gt;</span>56810K<span class="token punctuation">(</span>122368K<span class="token punctuation">)</span>, <span class="token number">0.1068084</span> secs<span class="token punctuation">]</span>
java.lang.OutOfMemoryError: Metaspace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8BBE\u7F6E\u4E86MaxMetaspaceSize\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u7A7A\u95F4\u7684\u5185\u5B58\u4ECD\u7136\u4F1A\u8017\u5C3D\uFF0C\u8FDB\u800C\u5F15\u53D1\u201Cjava.lang.OutOfMemoryError: Metadata space\u201D\u9519\u8BEF\u3002\u56E0\u4E3A\u7C7B\u52A0\u8F7D\u5668\u7684\u6CC4\u6F0F\u4ECD\u7136\u5B58\u5728\uFF0C\u800C\u901A\u5E38Java\u53C8\u4E0D\u5E0C\u671B\u65E0\u9650\u5236\u5730\u6D88\u8017\u672C\u673A\u5185\u5B58\uFF0C\u56E0\u6B64\u8BBE\u7F6E\u4E00\u4E2A\u7C7B\u4F3C\u4E8EMaxPermSize\u7684\u9650\u5236\u770B\u8D77\u6765\u4E5F\u662F\u5408\u7406\u7684\u3002</p><h2 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h2><ul><li>\u4E4B\u524D\u4E0D\u7BA1\u662F\u4E0D\u662F\u9700\u8981\uFF0CJVM\u90FD\u4F1A\u5403\u6389\u90A3\u5757\u7A7A\u95F4\u2026\u2026\u5982\u679C\u8BBE\u7F6E\u5F97\u592A\u5C0F\uFF0CJVM\u4F1A\u6B7B\u6389\uFF1B\u5982\u679C\u8BBE\u7F6E\u5F97\u592A\u5927\uFF0C\u8FD9\u5757\u5185\u5B58\u5C31\u88ABJVM\u6D6A\u8D39\u4E86\u3002\u7406\u8BBA\u4E0A\u8BF4\uFF0C\u73B0\u5728\u4F60\u5B8C\u5168\u53EF\u4EE5\u4E0D\u5173\u6CE8\u8FD9\u4E2A\uFF0C\u56E0\u4E3AJVM\u4F1A\u5728\u8FD0\u884C\u65F6\u81EA\u52A8\u8C03\u6821\u4E3A\u201C\u5408\u9002\u7684\u5927\u5C0F\u201D\uFF1B</li><li>\u63D0\u9AD8Full GC\u7684\u6027\u80FD\uFF0C\u5728Full GC\u671F\u95F4\uFF0CMetadata\u5230Metadata pointers\u4E4B\u95F4\u4E0D\u9700\u8981\u626B\u63CF\u4E86\uFF0C\u522B\u5C0F\u770B\u8FD9\u51E0\u7EB3\u79D2\u65F6\u95F4\uFF1B</li><li>\u9690\u60A3\u5C31\u662F\u5982\u679C\u7A0B\u5E8F\u5B58\u5728\u5185\u5B58\u6CC4\u9732\uFF0C\u50CFOOMTest\u90A3\u6837\uFF0C\u4E0D\u505C\u7684\u6269\u5C55metaspace\u7684\u7A7A\u95F4\uFF0C\u4F1A\u5BFC\u81F4\u673A\u5668\u7684\u5185\u5B58\u4E0D\u8DB3\uFF0C\u6240\u4EE5\u8FD8\u662F\u8981\u6709\u5FC5\u8981\u7684\u8C03\u8BD5\u548C\u76D1\u63A7\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,59),u={href:"https://pdai.tech/md/java/java8/java8-permgen.html",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"Java 8 - \u79FB\u9664Permgen",-1);function d(k,m){const a=o("ExternalLinkIcon");return e(),p("div",null,[i,n("p",null,[n("a",u,[r,t(a)])])])}var g=s(l,[["render",d],["__file","java8-permgen.html.vue"]]);export{g as default};
