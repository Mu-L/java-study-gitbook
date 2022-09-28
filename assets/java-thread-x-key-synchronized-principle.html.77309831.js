import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as n,b as e,e as t,d as s,r as c}from"./app.258ed467.js";const l={},p=t(`<h1 id="synchronized\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#synchronized\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> Synchronized\u7684\u5B9E\u73B0\u539F\u7406</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p><code>synchronized</code>\uFF0C\u662FJava\u4E2D\u7528\u4E8E\u89E3\u51B3\u5E76\u53D1\u60C5\u51B5\u4E0B\u6570\u636E\u540C\u6B65\u8BBF\u95EE\u7684\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u5173\u952E\u5B57\u3002\u5F53\u6211\u4EEC\u60F3\u8981\u4FDD\u8BC1\u4E00\u4E2A\u5171\u4EAB\u8D44\u6E90\u5728\u540C\u4E00\u65F6\u95F4\u53EA\u4F1A\u88AB\u4E00\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u5230\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528<code>synchronized</code>\u5173\u952E\u5B57\u5BF9\u7C7B\u6216\u8005\u5BF9\u8C61\u52A0\u9501\u3002</p><p>\u90A3\u4E48<code>synchronized</code>\u5173\u952E\u5B57\u7684\u5B9E\u73B0\u539F\u7406\u662F\u4EC0\u4E48\u5462\uFF1F</p><h2 id="_2-\u51C6\u5907\u5DE5\u4F5C-\u53CD\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_2-\u51C6\u5907\u5DE5\u4F5C-\u53CD\u7F16\u8BD1" aria-hidden="true">#</a> 2. \u51C6\u5907\u5DE5\u4F5C\uFF08\u53CD\u7F16\u8BD1\uFF09</h2><h3 id="_2-1-\u6E90\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6E90\u4EE3\u7801" aria-hidden="true">#</a> 2.1 \u6E90\u4EE3\u7801</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">doSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSth1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">SynchronizedTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u7F16\u8BD1-javac" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7F16\u8BD1-javac" aria-hidden="true">#</a> 2.2 \u7F16\u8BD1 javac</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>javac SynchronizedTest.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u7F16\u8BD1\u51FA\u6765\u7684class \u4EE3\u7801\u6211\u4EEC\u662F\u65E0\u6CD5\u76F4\u63A5\u9605\u8BFB\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220519170413379.png" alt="image-20220519170413379" loading="lazy"></p><h3 id="_2-3-\u53CD\u7F16\u8BD1javap" tabindex="-1"><a class="header-anchor" href="#_2-3-\u53CD\u7F16\u8BD1javap" aria-hidden="true">#</a> 2.3 \u53CD\u7F16\u8BD1javap</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>javap -c SynchronizedTest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u51FA\u7684\u7ED3\u679C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Compiled</span> from <span class="token string">&quot;SynchronizedTest.java&quot;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">SynchronizedTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Code</span><span class="token operator">:</span>
       <span class="token number">0</span><span class="token operator">:</span> aload_0
       <span class="token number">1</span><span class="token operator">:</span> invokespecial #<span class="token number">1</span>                  <span class="token comment">// Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span>
       <span class="token number">4</span><span class="token operator">:</span> <span class="token keyword">return</span>

  <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">doSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Code</span><span class="token operator">:</span>
       <span class="token number">0</span><span class="token operator">:</span> getstatic     #<span class="token number">2</span>                  <span class="token comment">// Field java/lang/System.out:Ljava/io/PrintStream;</span>
       <span class="token number">3</span><span class="token operator">:</span> ldc           #<span class="token number">3</span>                  <span class="token comment">// String Hello World</span>
       <span class="token number">5</span><span class="token operator">:</span> invokevirtual #<span class="token number">4</span>                  <span class="token comment">// Method java/io/PrintStream.println:(Ljava/lang/String;)V</span>
       <span class="token number">8</span><span class="token operator">:</span> <span class="token keyword">return</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSth1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Code</span><span class="token operator">:</span>
       <span class="token number">0</span><span class="token operator">:</span> ldc           #<span class="token number">5</span>                  <span class="token comment">// class SynchronizedTest</span>
       <span class="token number">2</span><span class="token operator">:</span> dup
       <span class="token number">3</span><span class="token operator">:</span> astore_1
       <span class="token number">4</span><span class="token operator">:</span> monitorenter
       <span class="token number">5</span><span class="token operator">:</span> getstatic     #<span class="token number">2</span>                  <span class="token comment">// Field java/lang/System.out:Ljava/io/PrintStream;</span>
       <span class="token number">8</span><span class="token operator">:</span> ldc           #<span class="token number">3</span>                  <span class="token comment">// String Hello World</span>
      <span class="token number">10</span><span class="token operator">:</span> invokevirtual #<span class="token number">4</span>                  <span class="token comment">// Method java/io/PrintStream.println:(Ljava/lang/String;)V</span>
      <span class="token number">13</span><span class="token operator">:</span> aload_1
      <span class="token number">14</span><span class="token operator">:</span> monitorexit
      <span class="token number">15</span><span class="token operator">:</span> <span class="token keyword">goto</span>          <span class="token number">23</span>
      <span class="token number">18</span><span class="token operator">:</span> astore_2
      <span class="token number">19</span><span class="token operator">:</span> aload_1
      <span class="token number">20</span><span class="token operator">:</span> monitorexit
      <span class="token number">21</span><span class="token operator">:</span> aload_2
      <span class="token number">22</span><span class="token operator">:</span> athrow
      <span class="token number">23</span><span class="token operator">:</span> <span class="token keyword">return</span>
    <span class="token class-name">Exception</span> table<span class="token operator">:</span>
       from    <span class="token keyword">to</span>  <span class="token namespace">target</span> type
           <span class="token number">5</span>    <span class="token number">15</span>    <span class="token number">18</span>   any
          <span class="token number">18</span>    <span class="token number">21</span>    <span class="token number">18</span>   any
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u539F\u7406" aria-hidden="true">#</a> 3. \u539F\u7406</h2><p>\u53CD\u7F16\u8BD1 \u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230Java\u7F16\u8BD1\u5668\u4E3A\u6211\u4EEC\u751F\u6210\u7684\u5B57\u8282\u7801\u3002\u5728\u5BF9\u4E8E<code>doSth</code>\u548C<code>doSth1</code>\u7684\u5904\u7406\u4E0A\u7A0D\u6709\u4E0D\u540C\u3002\u4E5F\u5C31\u662F\u8BF4\u3002<strong>JVM\u5BF9\u4E8E\u540C\u6B65\u65B9\u6CD5\u548C\u540C\u6B65\u4EE3\u7801\u5757\u7684\u5904\u7406\u65B9\u5F0F\u4E0D\u540C</strong>\u3002</p><ul><li>\u540C\u6B65\u65B9\u6CD5\uFF1A<strong>JVM\u91C7\u7528<code>ACC_SYNCHRONIZED</code>\u6807\u8BB0\u7B26\u6765\u5B9E\u73B0\u540C\u6B65</strong></li><li>\u540C\u6B65\u4EE3\u7801\u5757\uFF1A<strong>JVM\u91C7\u7528<code>monitorenter</code>\u3001<code>monitorexit</code>\u4E24\u4E2A\u6307\u4EE4\u6765\u5B9E\u73B0\u540C\u6B65</strong>\u3002</li></ul><h3 id="_3-1-\u540C\u6B65\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-1-\u540C\u6B65\u65B9\u6CD5" aria-hidden="true">#</a> 3.1 \u540C\u6B65\u65B9\u6CD5</h3>`,19),d={href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.11.10",target:"_blank",rel:"noopener noreferrer"},u=s("The Java\xAE Virtual Machine Specification"),h=s("\u4E2D\u6709\u5173\u4E8E\u65B9\u6CD5\u7EA7\u540C\u6B65\u7684\u4ECB\u7ECD\uFF1A"),m=t('<blockquote><p>Method-level synchronization is performed implicitly, as part of method invocation and return. A synchronized method is distinguished in the run-time constant pool\u2019s method_info structure by the ACC_SYNCHRONIZED flag, which is checked by the method invocation instructions. When invoking a method for which ACC_SYNCHRONIZED is set, the executing thread enters a monitor, invokes the method itself, and exits the monitor whether the method invocation completes normally or abruptly. During the time the executing thread owns the monitor, no other thread may enter it. If an exception is thrown during invocation of the synchronized method and the synchronized method does not handle the exception, the monitor for the method is automatically exited before the exception is rethrown out of the synchronized method.</p></blockquote><p>\u4E3B\u8981\u8BF4\u7684\u662F\uFF1A <strong>\u65B9\u6CD5\u7EA7\u7684\u540C\u6B65\u662F\u9690\u5F0F\u7684</strong>\u3002</p><ul><li>\u540C\u6B65\u65B9\u6CD5\u7684<strong>\u5E38\u91CF\u6C60\u4E2D\u4F1A\u6709\u4E00\u4E2A<code>ACC_SYNCHRONIZED</code>\u6807\u5FD7</strong>\u3002</li><li>\u5F53\u67D0\u4E2A\u7EBF\u7A0B\u8981\u8BBF\u95EE\u67D0\u4E2A\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C<strong>\u4F1A\u68C0\u67E5\u662F\u5426\u6709<code>ACC_SYNCHRONIZED</code>\uFF0C\u5982\u679C\u6709\u8BBE\u7F6E\uFF0C\u5219\u9700\u8981\u5148\u83B7\u5F97\u76D1\u89C6\u5668\u9501</strong>\uFF0C\u7136\u540E\u5F00\u59CB\u6267\u884C\u65B9\u6CD5\uFF0C<strong>\u65B9\u6CD5\u6267\u884C\u4E4B\u540E\u518D\u91CA\u653E\u76D1\u89C6\u5668\u9501</strong>\u3002</li><li>\u8FD9\u65F6\u5982\u679C\u5176\u4ED6\u7EBF\u7A0B\u6765\u8BF7\u6C42\u6267\u884C\u65B9\u6CD5\uFF0C\u4F1A\u56E0\u4E3A<strong>\u65E0\u6CD5\u83B7\u5F97\u76D1\u89C6\u5668\u9501\u800C\u88AB\u963B\u65AD\u4F4F</strong>\u3002</li><li>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u5728\u65B9\u6CD5\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C<strong>\u53D1\u751F\u4E86\u5F02\u5E38</strong>\uFF0C\u5E76\u4E14\u65B9\u6CD5\u5185\u90E8\u5E76\u6CA1\u6709\u5904\u7406\u8BE5\u5F02\u5E38\uFF0C\u90A3\u4E48\u5728\u5F02\u5E38\u88AB\u629B\u5230\u65B9\u6CD5\u5916\u9762\u4E4B\u524D\u76D1\u89C6\u5668<strong>\u9501\u4F1A\u88AB\u81EA\u52A8\u91CA\u653E</strong>\u3002</li></ul><h3 id="_3-2-\u540C\u6B65\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#_3-2-\u540C\u6B65\u4EE3\u7801\u5757" aria-hidden="true">#</a> 3.2 \u540C\u6B65\u4EE3\u7801\u5757</h3>',4),k=s("\u540C\u6B65\u4EE3\u7801\u5757\u4F7F\u7528"),v=n("code",null,"monitorenter",-1),b=s("\u548C"),g=n("code",null,"monitorexit",-1),_=s("\u4E24\u4E2A\u6307\u4EE4\u5B9E\u73B0\u3002 "),y={href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html",target:"_blank",rel:"noopener noreferrer"},f=s("The Java\xAE Virtual Machine Specification"),x=s(" \u4E2D\u6709\u5173\u4E8E\u8FD9\u4E24\u4E2A\u6307\u4EE4\u7684\u4ECB\u7ECD\uFF1A"),w=t('<h4 id="monitorenter" tabindex="-1"><a class="header-anchor" href="#monitorenter" aria-hidden="true">#</a> monitorenter</h4><blockquote><p>Each object is associated with a monitor. A monitor is locked if and only if it has an owner. The thread that executes monitorenter attempts to gain ownership of the monitor associated with objectref, as follows:</p><blockquote><p>If the entry count of the monitor associated with objectref is zero, the thread enters the monitor and sets its entry count to one. The thread is then the owner of the monitor.</p><p>If the thread already owns the monitor associated with objectref, it reenters the monitor, incrementing its entry count.</p><p>If another thread already owns the monitor associated with objectref, the thread blocks until the monitor\u2019s entry count is zero, then tries again to gain ownership.</p></blockquote></blockquote><h4 id="monitorexit" tabindex="-1"><a class="header-anchor" href="#monitorexit" aria-hidden="true">#</a> monitorexit</h4><blockquote><p>The thread that executes monitorexit must be the owner of the monitor associated with the instance referenced by objectref.</p><p>The thread decrements the entry count of the monitor associated with objectref. If as a result the value of the entry count is zero, the thread exits the monitor and is no longer its owner. Other threads that are blocking to enter the monitor are allowed to attempt to do so.</p></blockquote><p>\u5927\u81F4\u5185\u5BB9\u5982\u4E0B\uFF1A</p><ul><li><strong>\u53EF\u4EE5\u628A\u6267\u884C<code>monitorenter</code>\u6307\u4EE4\u7406\u89E3\u4E3A\u52A0\u9501\uFF0C\u6267\u884C<code>monitorexit</code>\u7406\u89E3\u4E3A\u91CA\u653E\u9501</strong>\u3002</li><li><strong>\u6BCF\u4E2A\u5BF9\u8C61\u7EF4\u62A4\u7740\u4E00\u4E2A\u8BB0\u5F55\u7740\u88AB\u9501\u6B21\u6570\u7684\u8BA1\u6570\u5668</strong>\u3002\u672A\u88AB\u9501\u5B9A\u7684\u5BF9\u8C61\u7684\u8BE5\u8BA1\u6570\u5668\u4E3A0\uFF0C<strong>\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u5F97\u9501\uFF08\u6267\u884C<code>monitorenter</code>\uFF09\u540E\uFF0C\u8BE5\u8BA1\u6570\u5668\u81EA\u589E\u53D8\u4E3A 1</strong> \uFF0C\u5F53\u540C\u4E00\u4E2A\u7EBF\u7A0B\u518D\u6B21\u83B7\u5F97\u8BE5\u5BF9\u8C61\u7684\u9501\u7684\u65F6\u5019\uFF0C\u8BA1\u6570\u5668\u518D\u6B21\u81EA\u589E\u3002</li><li>\u5F53\u540C\u4E00\u4E2A<strong>\u7EBF\u7A0B\u91CA\u653E\u9501\uFF08\u6267\u884C<code>monitorexit</code>\u6307\u4EE4\uFF09\u7684\u65F6\u5019\uFF0C\u8BA1\u6570\u5668\u518D\u81EA\u51CF</strong>\u3002</li><li>\u5F53<strong>\u8BA1\u6570\u5668\u4E3A0\u7684\u65F6\u5019\u3002\u9501\u5C06\u88AB\u91CA\u653E\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u4FBF\u53EF\u4EE5\u83B7\u5F97\u9501</strong>\u3002</li></ul><h3 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h3><ul><li><p>\u540C\u6B65\u65B9\u6CD5\u901A\u8FC7<code>ACC_SYNCHRONIZED</code>\u5173\u952E\u5B57\u9690\u5F0F\u7684\u5BF9\u65B9\u6CD5\u8FDB\u884C\u52A0\u9501\u3002\u5F53\u7EBF\u7A0B\u8981\u6267\u884C\u7684\u65B9\u6CD5\u88AB\u6807\u6CE8\u4E0A<code>ACC_SYNCHRONIZED</code>\u65F6\uFF0C\u9700\u8981\u5148\u83B7\u5F97\u9501\u624D\u80FD\u6267\u884C\u8BE5\u65B9\u6CD5\u3002</p></li><li><p>\u540C\u6B65\u4EE3\u7801\u5757\u901A\u8FC7<code>monitorenter</code>\u548C<code>monitorexit</code>\u6267\u884C\u6765\u8FDB\u884C\u52A0\u9501\u3002\u5F53\u7EBF\u7A0B\u6267\u884C\u5230<code>monitorenter</code>\u7684\u65F6\u5019\u8981\u5148\u83B7\u5F97\u6240\u9501\uFF0C\u624D\u80FD\u6267\u884C\u540E\u9762\u7684\u65B9\u6CD5\u3002\u5F53\u7EBF\u7A0B\u6267\u884C\u5230<code>monitorexit</code>\u7684\u65F6\u5019\u5219\u8981\u91CA\u653E\u9501\u3002</p><p><strong>\u6BCF\u4E2A\u5BF9\u8C61\u81EA\u8EAB\u7EF4\u62A4\u8FD9\u4E00\u4E2A\u88AB\u52A0\u9501\u6B21\u6570\u7684\u8BA1\u6570\u5668\uFF0C\u5F53\u8BA1\u6570\u5668\u6570\u5B57\u4E3A0\u65F6\u8868\u793A\u53EF\u4EE5\u88AB\u4EFB\u610F\u7EBF\u7A0B\u83B7\u5F97\u9501\u3002\u5F53\u8BA1\u6570\u5668\u4E0D\u4E3A0\u65F6\uFF0C\u53EA\u6709\u83B7\u5F97\u9501\u7684\u7EBF\u7A0B\u624D\u80FD\u518D\u6B21\u83B7\u5F97\u9501\u3002\u5373\u53EF\u91CD\u5165\u9501</strong>\u3002</p></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',9),j={href:"https://www.hollischuang.com/archives/1883",target:"_blank",rel:"noopener noreferrer"},S=s("\u6DF1\u5165\u7406\u89E3\u591A\u7EBF\u7A0B\uFF08\u4E00\uFF09\u2014\u2014Synchronized\u7684\u5B9E\u73B0\u539F\u7406");function z(C,N){const a=c("ExternalLinkIcon");return i(),r("div",null,[p,n("p",null,[n("a",d,[u,e(a)]),h]),m,n("p",null,[k,v,b,g,_,n("a",y,[f,e(a)]),x]),w,n("p",null,[n("a",j,[S,e(a)])])])}const I=o(l,[["render",z],["__file","java-thread-x-key-synchronized-principle.html.vue"]]);export{I as default};
