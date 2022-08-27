import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as n,b as e,e as t,d as s,r as l}from"./app.f1a1a4ee.js";const p={},d=t(`<h1 id="jdk\u76D1\u63A7\u548C\u6545\u969C\u5904\u7406\u5DE5\u5177\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#jdk\u76D1\u63A7\u548C\u6545\u969C\u5904\u7406\u5DE5\u5177\u6C47\u603B" aria-hidden="true">#</a> JDK\u76D1\u63A7\u548C\u6545\u969C\u5904\u7406\u5DE5\u5177\u6C47\u603B</h1><h2 id="_1-jdk\u547D\u4EE4\u884C\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_1-jdk\u547D\u4EE4\u884C\u5DE5\u5177" aria-hidden="true">#</a> 1. JDK\u547D\u4EE4\u884C\u5DE5\u5177</h2><p>\u8FD9\u4E9B\u547D\u4EE4\u5728JDK \u5B89\u88C5\u76EE\u5F55\u4E0B\u7684bin\u76EE\u5F55\u4E0B</p><ul><li><strong>jps</strong> (JVM Process Status\uFF09: \u7C7B\u4F3C UNIX \u7684 <code>ps</code> \u547D\u4EE4\u3002\u7528\u6237\u67E5\u770B\u6240\u6709 Java \u8FDB\u7A0B\u7684\u542F\u52A8\u7C7B\u3001\u4F20\u5165\u53C2\u6570\u548C Java \u865A\u62DF\u673A\u53C2\u6570\u7B49\u4FE1\u606F\uFF1B</li><li><strong>jstat</strong>\uFF08 JVM Statistics Monitoring Tool\uFF09: \u7528\u4E8E\u6536\u96C6 HotSpot \u865A\u62DF\u673A\u5404\u65B9\u9762\u7684\u8FD0\u884C\u6570\u636E;</li><li><strong>jinfo</strong> (Configuration Info for Java) : Configuration Info forJava,\u663E\u793A\u865A\u62DF\u673A\u914D\u7F6E\u4FE1\u606F;</li><li><strong>jmap</strong> (Memory Map for Java) :\u751F\u6210\u5806\u8F6C\u50A8\u5FEB\u7167;</li><li><strong>jhat</strong> (JVM Heap Dump Browser ) : \u7528\u4E8E\u5206\u6790 heapdump \u6587\u4EF6\uFF0C\u5B83\u4F1A\u5EFA\u7ACB\u4E00\u4E2A HTTP/HTML \u670D\u52A1\u5668\uFF0C\u8BA9\u7528\u6237\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E0A\u67E5\u770B\u5206\u6790\u7ED3\u679C;</li><li><strong>jstack</strong> (Stack Trace for Java):\u751F\u6210\u865A\u62DF\u673A\u5F53\u524D\u65F6\u523B\u7684\u7EBF\u7A0B\u5FEB\u7167\uFF0C\u7EBF\u7A0B\u5FEB\u7167\u5C31\u662F\u5F53\u524D\u865A\u62DF\u673A\u5185\u6BCF\u4E00\u6761\u7EBF\u7A0B\u6B63\u5728\u6267\u884C\u7684\u65B9\u6CD5\u5806\u6808\u7684\u96C6\u5408\u3002</li></ul><h3 id="_1-1-jps-\u67E5\u770B\u6240\u6709-java-\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-1-jps-\u67E5\u770B\u6240\u6709-java-\u8FDB\u7A0B" aria-hidden="true">#</a> 1.1 <code>jps</code>:\u67E5\u770B\u6240\u6709 Java \u8FDB\u7A0B</h3><p><code>jps</code>(JVM Process Status) \u547D\u4EE4\u7C7B\u4F3C UNIX \u7684 <code>ps</code> \u547D\u4EE4\u3002</p><p><code>jps</code>\uFF1A\u663E\u793A\u865A\u62DF\u673A\u6267\u884C\u4E3B\u7C7B\u540D\u79F0\u4EE5\u53CA\u8FD9\u4E9B\u8FDB\u7A0B\u7684\u672C\u5730\u865A\u62DF\u673A\u552F\u4E00 ID\uFF08Local Virtual Machine Identifier,LVMID\uFF09\u3002<code>jps -q</code> \uFF1A\u53EA\u8F93\u51FA\u8FDB\u7A0B\u7684\u672C\u5730\u865A\u62DF\u673A\u552F\u4E00 ID\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\SnailClimb&gt;jps
7360 NettyClient2
17396
7972 Launcher
16504 Jps
17340 NettyServer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>jps -l</code>:\u8F93\u51FA\u4E3B\u7C7B\u7684\u5168\u540D\uFF0C\u5982\u679C\u8FDB\u7A0B\u6267\u884C\u7684\u662F Jar \u5305\uFF0C\u8F93\u51FA Jar \u8DEF\u5F84\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\SnailClimb&gt;jps -l
7360 firstNettyDemo.NettyClient2
17396
7972 org.jetbrains.jps.cmdline.Launcher
16492 sun.tools.jps.Jps
17340 firstNettyDemo.NettyServer
5541 mywebsocket.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>jps -v</code>\uFF1A\u8F93\u51FA\u865A\u62DF\u673A\u8FDB\u7A0B\u542F\u52A8\u65F6 JVM \u53C2\u6570\u3002</p><p><code>jps -m</code>\uFF1A\u8F93\u51FA\u4F20\u9012\u7ED9 Java \u8FDB\u7A0B main() \u51FD\u6570\u7684\u53C2\u6570\u3002</p><h3 id="_1-2-jstat-\u76D1\u89C6\u865A\u62DF\u673A\u5404\u79CD\u8FD0\u884C\u72B6\u6001\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_1-2-jstat-\u76D1\u89C6\u865A\u62DF\u673A\u5404\u79CD\u8FD0\u884C\u72B6\u6001\u4FE1\u606F" aria-hidden="true">#</a> 1.2 <code>jstat</code>: \u76D1\u89C6\u865A\u62DF\u673A\u5404\u79CD\u8FD0\u884C\u72B6\u6001\u4FE1\u606F</h3><p>jstat\uFF08JVM Statistics Monitoring Tool\uFF09 \u4F7F\u7528\u4E8E\u76D1\u89C6\u865A\u62DF\u673A\u5404\u79CD\u8FD0\u884C\u72B6\u6001\u4FE1\u606F\u7684\u547D\u4EE4\u884C\u5DE5\u5177\u3002 \u5B83\u53EF\u4EE5\u663E\u793A\u672C\u5730\u6216\u8005\u8FDC\u7A0B\uFF08\u9700\u8981\u8FDC\u7A0B\u4E3B\u673A\u63D0\u4F9B RMI \u652F\u6301\uFF09\u865A\u62DF\u673A\u8FDB\u7A0B\u4E2D\u7684\u7C7B\u4FE1\u606F\u3001\u5185\u5B58\u3001\u5783\u573E\u6536\u96C6\u3001JIT \u7F16\u8BD1\u7B49\u8FD0\u884C\u6570\u636E\uFF0C\u5728\u6CA1\u6709 GUI\uFF0C\u53EA\u63D0\u4F9B\u4E86\u7EAF\u6587\u672C\u63A7\u5236\u53F0\u73AF\u5883\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u5B83\u5C06\u662F\u8FD0\u884C\u671F\u95F4\u5B9A\u4F4D\u865A\u62DF\u673A\u6027\u80FD\u95EE\u9898\u7684\u9996\u9009\u5DE5\u5177\u3002</p><p><strong>jstat \u547D\u4EE4\u4F7F\u7528\u683C\u5F0F\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>jstat -&lt;option&gt; [-t] [-h&lt;lines&gt;] &lt;vmid&gt; [&lt;interval&gt; [&lt;count&gt;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6BD4\u5982 <code>jstat -gc -h3 31736 1000 10</code>\u8868\u793A\u5206\u6790\u8FDB\u7A0B id \u4E3A 31736 \u7684 gc \u60C5\u51B5\uFF0C\u6BCF\u9694 1000ms \u6253\u5370\u4E00\u6B21\u8BB0\u5F55\uFF0C\u6253\u5370 10 \u6B21\u505C\u6B62\uFF0C\u6BCF 3 \u884C\u540E\u6253\u5370\u6307\u6807\u5934\u90E8</p><p><strong>\u5E38\u89C1\u7684 option \u5982\u4E0B\uFF1A</strong></p><ul><li><code>jstat -class vmid</code> \uFF1A\u663E\u793A ClassLoader \u7684\u76F8\u5173\u4FE1\u606F\uFF1B</li><li><code>jstat -compiler vmid</code> \uFF1A\u663E\u793A JIT \u7F16\u8BD1\u7684\u76F8\u5173\u4FE1\u606F\uFF1B</li><li><code>jstat -gc vmid</code> \uFF1A\u663E\u793A\u4E0E GC \u76F8\u5173\u7684\u5806\u4FE1\u606F\uFF1B</li><li><code>jstat -gccapacity vmid</code> \uFF1A\u663E\u793A\u5404\u4E2A\u4EE3\u7684\u5BB9\u91CF\u53CA\u4F7F\u7528\u60C5\u51B5\uFF1B</li><li><code>jstat -gcnew vmid</code> \uFF1A\u663E\u793A\u65B0\u751F\u4EE3\u4FE1\u606F\uFF1B</li><li><code>jstat -gcnewcapcacity vmid</code> \uFF1A\u663E\u793A\u65B0\u751F\u4EE3\u5927\u5C0F\u4E0E\u4F7F\u7528\u60C5\u51B5\uFF1B</li><li><code>jstat -gcold vmid</code> \uFF1A\u663E\u793A\u8001\u5E74\u4EE3\u548C\u6C38\u4E45\u4EE3\u7684\u4FE1\u606F\uFF1B</li><li><code>jstat -gcoldcapacity vmid</code> \uFF1A\u663E\u793A\u8001\u5E74\u4EE3\u7684\u5927\u5C0F\uFF1B</li><li><code>jstat -gcpermcapacity vmid</code> \uFF1A\u663E\u793A\u6C38\u4E45\u4EE3\u5927\u5C0F\uFF1B</li><li><code>jstat -gcutil vmid</code> \uFF1A\u663E\u793A\u5783\u573E\u6536\u96C6\u4FE1\u606F\uFF1B</li></ul><p>\u53E6\u5916\uFF0C\u52A0\u4E0A <code>-t</code>\u53C2\u6570\u53EF\u4EE5\u5728\u8F93\u51FA\u4FE1\u606F\u4E0A\u52A0\u4E00\u4E2A Timestamp \u5217\uFF0C\u663E\u793A\u7A0B\u5E8F\u7684\u8FD0\u884C\u65F6\u95F4\u3002</p><h3 id="_1-3-jinfo-\u5B9E\u65F6\u5730\u67E5\u770B\u548C\u8C03\u6574\u865A\u62DF\u673A\u5404\u9879\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-3-jinfo-\u5B9E\u65F6\u5730\u67E5\u770B\u548C\u8C03\u6574\u865A\u62DF\u673A\u5404\u9879\u53C2\u6570" aria-hidden="true">#</a> 1.3 <code>jinfo</code>: \u5B9E\u65F6\u5730\u67E5\u770B\u548C\u8C03\u6574\u865A\u62DF\u673A\u5404\u9879\u53C2\u6570</h3><p><code>jinfo vmid</code> :\u8F93\u51FA\u5F53\u524D jvm \u8FDB\u7A0B\u7684\u5168\u90E8\u53C2\u6570\u548C\u7CFB\u7EDF\u5C5E\u6027 (\u7B2C\u4E00\u90E8\u5206\u662F\u7CFB\u7EDF\u7684\u5C5E\u6027\uFF0C\u7B2C\u4E8C\u90E8\u5206\u662F JVM \u7684\u53C2\u6570)\u3002</p><p><code>jinfo -flag name vmid</code> :\u8F93\u51FA\u5BF9\u5E94\u540D\u79F0\u7684\u53C2\u6570\u7684\u5177\u4F53\u503C\u3002\u6BD4\u5982\u8F93\u51FA MaxHeapSize\u3001\u67E5\u770B\u5F53\u524D jvm \u8FDB\u7A0B\u662F\u5426\u5F00\u542F\u6253\u5370 GC \u65E5\u5FD7 ( <code>-XX:PrintGCDetails</code> :\u8BE6\u7EC6 GC \u65E5\u5FD7\u6A21\u5F0F\uFF0C\u8FD9\u4E24\u4E2A\u90FD\u662F\u9ED8\u8BA4\u5173\u95ED\u7684)\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\SnailClimb&gt;jinfo  -flag MaxHeapSize 17340
-XX:MaxHeapSize=2124414976
C:\\Users\\SnailClimb&gt;jinfo  -flag PrintGC 17340
-XX:-PrintGC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 jinfo \u53EF\u4EE5\u5728\u4E0D\u91CD\u542F\u865A\u62DF\u673A\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u52A8\u6001\u7684\u4FEE\u6539 jvm \u7684\u53C2\u6570\u3002\u5C24\u5176\u5728\u7EBF\u4E0A\u7684\u73AF\u5883\u7279\u522B\u6709\u7528,\u8BF7\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p><p><code>jinfo -flag [+|-]name vmid</code> \u5F00\u542F\u6216\u8005\u5173\u95ED\u5BF9\u5E94\u540D\u79F0\u7684\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\SnailClimb&gt;jinfo  -flag  PrintGC 17340
-XX:-PrintGC

C:\\Users\\SnailClimb&gt;jinfo  -flag  +PrintGC 17340

C:\\Users\\SnailClimb&gt;jinfo  -flag  PrintGC 17340
-XX:+PrintGC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-jmap-\u751F\u6210\u5806\u8F6C\u50A8\u5FEB\u7167" tabindex="-1"><a class="header-anchor" href="#_1-4-jmap-\u751F\u6210\u5806\u8F6C\u50A8\u5FEB\u7167" aria-hidden="true">#</a> 1.4 <code>jmap</code>:\u751F\u6210\u5806\u8F6C\u50A8\u5FEB\u7167</h3><p><code>jmap</code>\uFF08Memory Map for Java\uFF09\u547D\u4EE4\u7528\u4E8E\u751F\u6210\u5806\u8F6C\u50A8\u5FEB\u7167\u3002 \u5982\u679C\u4E0D\u4F7F\u7528 <code>jmap</code> \u547D\u4EE4\uFF0C\u8981\u60F3\u83B7\u53D6 Java \u5806\u8F6C\u50A8\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>\u201C-XX:+HeapDumpOnOutOfMemoryError\u201D</code> \u53C2\u6570\uFF0C\u53EF\u4EE5\u8BA9\u865A\u62DF\u673A\u5728 OOM \u5F02\u5E38\u51FA\u73B0\u4E4B\u540E\u81EA\u52A8\u751F\u6210 dump \u6587\u4EF6\uFF0CLinux \u547D\u4EE4\u4E0B\u53EF\u4EE5\u901A\u8FC7 <code>kill -3</code> \u53D1\u9001\u8FDB\u7A0B\u9000\u51FA\u4FE1\u53F7\u4E5F\u80FD\u62FF\u5230 dump \u6587\u4EF6\u3002</p><p><code>jmap</code> \u7684\u4F5C\u7528\u5E76\u4E0D\u4EC5\u4EC5\u662F\u4E3A\u4E86\u83B7\u53D6 dump \u6587\u4EF6\uFF0C\u5B83\u8FD8\u53EF\u4EE5\u67E5\u8BE2 finalizer \u6267\u884C\u961F\u5217\u3001Java \u5806\u548C\u6C38\u4E45\u4EE3\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5982\u7A7A\u95F4\u4F7F\u7528\u7387\u3001\u5F53\u524D\u4F7F\u7528\u7684\u662F\u54EA\u79CD\u6536\u96C6\u5668\u7B49\u3002\u548C<code>jinfo</code>\u4E00\u6837\uFF0C<code>jmap</code>\u6709\u4E0D\u5C11\u529F\u80FD\u5728 Windows \u5E73\u53F0\u4E0B\u4E5F\u662F\u53D7\u9650\u5236\u7684\u3002</p><p>\u793A\u4F8B\uFF1A\u5C06\u6307\u5B9A\u5E94\u7528\u7A0B\u5E8F\u7684\u5806\u5FEB\u7167\u8F93\u51FA\u5230\u684C\u9762\u3002\u540E\u9762\uFF0C\u53EF\u4EE5\u901A\u8FC7 jhat\u3001Visual VM \u7B49\u5DE5\u5177\u5206\u6790\u8BE5\u5806\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>jmap -dump:format=b,file=./heap.hprof 19012
Dumping heap to /home/ftpuser/services/mywebsocket/heap.hprof ...
Heap dump file created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-jhat-\u5206\u6790-heapdump-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-5-jhat-\u5206\u6790-heapdump-\u6587\u4EF6" aria-hidden="true">#</a> 1.5 <strong>jhat</strong>: \u5206\u6790 heapdump \u6587\u4EF6</h3><p><strong>jhat</strong> \u7528\u4E8E\u5206\u6790 heapdump \u6587\u4EF6\uFF0C\u5B83\u4F1A\u5EFA\u7ACB\u4E00\u4E2A HTTP/HTML \u670D\u52A1\u5668\uFF0C\u8BA9\u7528\u6237\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E0A\u67E5\u770B\u5206\u6790\u7ED3\u679C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\SnailClimb&gt;jhat C:\\Users\\SnailClimb\\Desktop\\heap.hprof
Reading from C:\\Users\\SnailClimb\\Desktop\\heap.hprof...
Dump file created Sat May 04 12:30:31 CST 2019
Snapshot read, resolving...
Resolving 131419 objects...
Chasing references, expect 26 dots..........................
Eliminating duplicate references..........................
Snapshot resolved.
Started HTTP server on port 7000
Server is ready.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),u=s("\u8BBF\u95EE "),r={href:"http://localhost:7000/",target:"_blank",rel:"noopener noreferrer"},v=s("http://localhost:7000/"),m=t(`<h3 id="_1-6-jstack-\u751F\u6210\u865A\u62DF\u673A\u5F53\u524D\u65F6\u523B\u7684\u7EBF\u7A0B\u5FEB\u7167" tabindex="-1"><a class="header-anchor" href="#_1-6-jstack-\u751F\u6210\u865A\u62DF\u673A\u5F53\u524D\u65F6\u523B\u7684\u7EBF\u7A0B\u5FEB\u7167" aria-hidden="true">#</a> 1.6 <strong>jstack</strong> :\u751F\u6210\u865A\u62DF\u673A\u5F53\u524D\u65F6\u523B\u7684\u7EBF\u7A0B\u5FEB\u7167</h3><p><code>jstack</code>\uFF08Stack Trace for Java\uFF09\u547D\u4EE4\u7528\u4E8E\u751F\u6210\u865A\u62DF\u673A\u5F53\u524D\u65F6\u523B\u7684\u7EBF\u7A0B\u5FEB\u7167\u3002\u7EBF\u7A0B\u5FEB\u7167\u5C31\u662F\u5F53\u524D\u865A\u62DF\u673A\u5185\u6BCF\u4E00\u6761\u7EBF\u7A0B\u6B63\u5728\u6267\u884C\u7684\u65B9\u6CD5\u5806\u6808\u7684\u96C6\u5408.</p><p>\u751F\u6210\u7EBF\u7A0B\u5FEB\u7167\u7684\u76EE\u7684\u4E3B\u8981\u662F\u5B9A\u4F4D\u7EBF\u7A0B\u957F\u65F6\u95F4\u51FA\u73B0\u505C\u987F\u7684\u539F\u56E0\uFF0C\u5982\u7EBF\u7A0B\u95F4\u6B7B\u9501\u3001\u6B7B\u5FAA\u73AF\u3001\u8BF7\u6C42\u5916\u90E8\u8D44\u6E90\u5BFC\u81F4\u7684\u957F\u65F6\u95F4\u7B49\u5F85\u7B49\u90FD\u662F\u5BFC\u81F4\u7EBF\u7A0B\u957F\u65F6\u95F4\u505C\u987F\u7684\u539F\u56E0\u3002\u7EBF\u7A0B\u51FA\u73B0\u505C\u987F\u7684\u65F6\u5019\u901A\u8FC7<code>jstack</code>\u6765\u67E5\u770B\u5404\u4E2A\u7EBF\u7A0B\u7684\u8C03\u7528\u5806\u6808\uFF0C\u5C31\u53EF\u4EE5\u77E5\u9053\u6CA1\u6709\u54CD\u5E94\u7684\u7EBF\u7A0B\u5230\u5E95\u5728\u540E\u53F0\u505A\u4E9B\u4EC0\u4E48\u4E8B\u60C5\uFF0C\u6216\u8005\u5728\u7B49\u5F85\u4E9B\u4EC0\u4E48\u8D44\u6E90\u3002</p><p><strong>\u4E0B\u9762\u662F\u4E00\u4E2A\u7EBF\u7A0B\u6B7B\u9501\u7684\u4EE3\u7801\u3002\u6211\u4EEC\u4E0B\u9762\u4F1A\u901A\u8FC7 jstack \u547D\u4EE4\u8FDB\u884C\u6B7B\u9501\u68C0\u67E5\uFF0C\u8F93\u51FA\u6B7B\u9501\u4FE1\u606F\uFF0C\u627E\u5230\u53D1\u751F\u6B7B\u9501\u7684\u7EBF\u7A0B</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8D44\u6E90 1</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8D44\u6E90 2</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;waiting get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7EBF\u7A0B 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;waiting get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7EBF\u7A0B 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Thread[\u7EBF\u7A0B 1,5,main]get resource1
Thread[\u7EBF\u7A0B 2,5,main]get resource2
Thread[\u7EBF\u7A0B 1,5,main]waiting get resource2
Thread[\u7EBF\u7A0B 2,5,main]waiting get resource1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EBF\u7A0B A \u901A\u8FC7 synchronized (resource1) \u83B7\u5F97 resource1 \u7684\u76D1\u89C6\u5668\u9501\uFF0C\u7136\u540E\u901A\u8FC7<code> Thread.sleep(1000);</code>\u8BA9\u7EBF\u7A0B A \u4F11\u7720 1s \u4E3A\u7684\u662F\u8BA9\u7EBF\u7A0B B \u5F97\u5230\u6267\u884C\u7136\u540E\u83B7\u53D6\u5230 resource2 \u7684\u76D1\u89C6\u5668\u9501\u3002\u7EBF\u7A0B A \u548C\u7EBF\u7A0B B \u4F11\u7720\u7ED3\u675F\u4E86\u90FD\u5F00\u59CB\u4F01\u56FE\u8BF7\u6C42\u83B7\u53D6\u5BF9\u65B9\u7684\u8D44\u6E90\uFF0C\u7136\u540E\u8FD9\u4E24\u4E2A\u7EBF\u7A0B\u5C31\u4F1A\u9677\u5165\u4E92\u76F8\u7B49\u5F85\u7684\u72B6\u6001\uFF0C\u8FD9\u4E5F\u5C31\u4EA7\u751F\u4E86\u6B7B\u9501\u3002</p><p><strong>\u901A\u8FC7 jstack \u547D\u4EE4\u5206\u6790\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\SnailClimb&gt;jps
13792 KotlinCompileDaemon
7360 NettyClient2
17396
7972 Launcher
8932 Launcher
9256 DeadLockDemo
10764 Jps
17340 NettyServer

C:\\Users\\SnailClimb&gt;jstack 9256
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7684\u90E8\u5206\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Found one Java-level deadlock:
=============================
&quot;\u7EBF\u7A0B 2&quot;:
  waiting to lock monitor 0x000000000333e668 (object 0x00000000d5efe1c0, a java.lang.Object),
  which is held by &quot;\u7EBF\u7A0B 1&quot;
&quot;\u7EBF\u7A0B 1&quot;:
  waiting to lock monitor 0x000000000333be88 (object 0x00000000d5efe1d0, a java.lang.Object),
  which is held by &quot;\u7EBF\u7A0B 2&quot;

Java stack information for the threads listed above:
===================================================
&quot;\u7EBF\u7A0B 2&quot;:
        at DeadLockDemo.lambda$main$1(DeadLockDemo.java:31)
        - waiting to lock &lt;0x00000000d5efe1c0&gt; (a java.lang.Object)
        - locked &lt;0x00000000d5efe1d0&gt; (a java.lang.Object)
        at DeadLockDemo$$Lambda$2/1078694789.run(Unknown Source)
        at java.lang.Thread.run(Thread.java:748)
&quot;\u7EBF\u7A0B 1&quot;:
        at DeadLockDemo.lambda$main$0(DeadLockDemo.java:16)
        - waiting to lock &lt;0x00000000d5efe1d0&gt; (a java.lang.Object)
        - locked &lt;0x00000000d5efe1c0&gt; (a java.lang.Object)
        at DeadLockDemo$$Lambda$1/1324119927.run(Unknown Source)
        at java.lang.Thread.run(Thread.java:748)

Found 1 deadlock.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230 <code>jstack</code> \u547D\u4EE4\u5DF2\u7ECF\u5E2E\u6211\u4EEC\u627E\u5230\u53D1\u751F\u6B7B\u9501\u7684\u7EBF\u7A0B\u7684\u5177\u4F53\u4FE1\u606F\u3002</p><h2 id="_2-jdk-\u53EF\u89C6\u5316\u5206\u6790\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_2-jdk-\u53EF\u89C6\u5316\u5206\u6790\u5DE5\u5177" aria-hidden="true">#</a> 2. JDK \u53EF\u89C6\u5316\u5206\u6790\u5DE5\u5177</h2><h3 id="_2-1-visual-vm-\u591A\u5408\u4E00\u6545\u969C\u5904\u7406\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_2-1-visual-vm-\u591A\u5408\u4E00\u6545\u969C\u5904\u7406\u5DE5\u5177" aria-hidden="true">#</a> 2.1 Visual VM:\u591A\u5408\u4E00\u6545\u969C\u5904\u7406\u5DE5\u5177</h3>`,15),k=s("VisualVM \u63D0\u4F9B\u5728 Java \u865A\u62DF\u673A (Java Virutal Machine, JVM) \u4E0A\u8FD0\u884C\u7684 Java \u5E94\u7528\u7A0B\u5E8F\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u5728 VisualVM \u7684\u56FE\u5F62\u7528\u6237\u754C\u9762\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u65B9\u4FBF\u3001\u5FEB\u6377\u5730\u67E5\u770B\u591A\u4E2A Java \u5E94\u7528\u7A0B\u5E8F\u7684\u76F8\u5173\u4FE1\u606F\u3002Visual VM \u5B98\u7F51\uFF1A"),b={href:"https://visualvm.github.io/",target:"_blank",rel:"noopener noreferrer"},h=s("https://visualvm.github.io/"),g=s(" \u3002Visual VM \u4E2D\u6587\u6587\u6863:"),j={href:"https://visualvm.github.io/documentation.html",target:"_blank",rel:"noopener noreferrer"},f=s("https://visualvm.github.io/documentation.html"),_=s("\u3002"),x=t("<p>\u4E0B\u9762\u8FD9\u6BB5\u8BDD\u6458\u81EA\u300A\u6DF1\u5165\u7406\u89E3 Java \u865A\u62DF\u673A\u300B\u3002</p><blockquote><p>VisualVM\uFF08All-in-One Java Troubleshooting Tool\uFF09\u662F\u5230\u76EE\u524D\u4E3A\u6B62\u968F JDK \u53D1\u5E03\u7684\u529F\u80FD\u6700\u5F3A\u5927\u7684\u8FD0\u884C\u76D1\u89C6\u548C\u6545\u969C\u5904\u7406\u7A0B\u5E8F\uFF0C\u5B98\u65B9\u5728 VisualVM \u7684\u8F6F\u4EF6\u8BF4\u660E\u4E2D\u5199\u4E0A\u4E86\u201CAll-in-One\u201D\u7684\u63CF\u8FF0\u5B57\u6837\uFF0C\u9884\u793A\u7740\u4ED6\u9664\u4E86\u8FD0\u884C\u76D1\u89C6\u3001\u6545\u969C\u5904\u7406\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u5F88\u591A\u5176\u4ED6\u65B9\u9762\u7684\u529F\u80FD\uFF0C\u5982\u6027\u80FD\u5206\u6790\uFF08Profiling\uFF09\u3002VisualVM \u7684\u6027\u80FD\u5206\u6790\u529F\u80FD\u751A\u81F3\u6BD4\u8D77 JProfiler\u3001YourKit \u7B49\u4E13\u4E1A\u4E14\u6536\u8D39\u7684 Profiling \u5DE5\u5177\u90FD\u4E0D\u4F1A\u900A\u8272\u591A\u5C11\uFF0C\u800C\u4E14 VisualVM \u8FD8\u6709\u4E00\u4E2A\u5F88\u5927\u7684\u4F18\u70B9\uFF1A\u4E0D\u9700\u8981\u88AB\u76D1\u89C6\u7684\u7A0B\u5E8F\u57FA\u4E8E\u7279\u6B8A Agent \u8FD0\u884C\uFF0C\u56E0\u6B64\u4ED6\u5BF9\u5E94\u7528\u7A0B\u5E8F\u7684\u5B9E\u9645\u6027\u80FD\u7684\u5F71\u54CD\u5F88\u5C0F\uFF0C\u4F7F\u5F97\u4ED6\u53EF\u4EE5\u76F4\u63A5\u5E94\u7528\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u3002\u8FD9\u4E2A\u4F18\u70B9\u662F JProfiler\u3001YourKit \u7B49\u5DE5\u5177\u65E0\u6CD5\u4E0E\u4E4B\u5AB2\u7F8E\u7684\u3002</p></blockquote><p>VisualVM \u57FA\u4E8E NetBeans \u5E73\u53F0\u5F00\u53D1\uFF0C\u56E0\u6B64\u4ED6\u4E00\u5F00\u59CB\u5C31\u5177\u5907\u4E86\u63D2\u4EF6\u6269\u5C55\u529F\u80FD\u7684\u7279\u6027\uFF0C\u901A\u8FC7\u63D2\u4EF6\u6269\u5C55\u652F\u6301\uFF0CVisualVM \u53EF\u4EE5\u505A\u5230\uFF1A</p><ul><li><strong>\u663E\u793A\u865A\u62DF\u673A\u8FDB\u7A0B\u4EE5\u53CA\u8FDB\u7A0B\u7684\u914D\u7F6E\u3001\u73AF\u5883\u4FE1\u606F\uFF08jps\u3001jinfo\uFF09\u3002</strong></li><li><strong>\u76D1\u89C6\u5E94\u7528\u7A0B\u5E8F\u7684 CPU\u3001GC\u3001\u5806\u3001\u65B9\u6CD5\u533A\u4EE5\u53CA\u7EBF\u7A0B\u7684\u4FE1\u606F\uFF08jstat\u3001jstack\uFF09\u3002</strong></li><li><strong>dump \u4EE5\u53CA\u5206\u6790\u5806\u8F6C\u50A8\u5FEB\u7167\uFF08jmap\u3001jhat\uFF09\u3002</strong></li><li><strong>\u65B9\u6CD5\u7EA7\u7684\u7A0B\u5E8F\u8FD0\u884C\u6027\u80FD\u5206\u6790\uFF0C\u627E\u5230\u88AB\u8C03\u7528\u6700\u591A\u3001\u8FD0\u884C\u65F6\u95F4\u6700\u957F\u7684\u65B9\u6CD5\u3002</strong></li><li><strong>\u79BB\u7EBF\u7A0B\u5E8F\u5FEB\u7167\uFF1A\u6536\u96C6\u7A0B\u5E8F\u7684\u8FD0\u884C\u65F6\u914D\u7F6E\u3001\u7EBF\u7A0B dump\u3001\u5185\u5B58 dump \u7B49\u4FE1\u606F\u5EFA\u7ACB\u4E00\u4E2A\u5FEB\u7167\uFF0C\u53EF\u4EE5\u5C06\u5FEB\u7167\u53D1\u9001\u5F00\u53D1\u8005\u5904\u8FDB\u884C Bug \u53CD\u9988\u3002</strong></li><li><strong>\u5176\u4ED6 plugins \u7684\u65E0\u9650\u7684\u53EF\u80FD\u6027......</strong></li></ul><p>\u8FD9\u91CC\u5C31\u4E0D\u5177\u4F53\u4ECB\u7ECD VisualVM \u7684\u4F7F\u7528\uFF0C\u5982\u679C\u60F3\u4E86\u89E3\u7684\u8BDD\u53EF\u4EE5\u770B:</p>",5),y={href:"https://visualvm.github.io/documentation.html",target:"_blank",rel:"noopener noreferrer"},w=s("https://visualvm.github.io/documentation.html"),C={href:"https://www.ibm.com/developerworks/cn/java/j-lo-visualvm/index.html",target:"_blank",rel:"noopener noreferrer"},T=s("https://www.ibm.com/developerworks/cn/java/j-lo-visualvm/index.html");function J(S,V){const a=l("ExternalLinkIcon");return o(),c("div",null,[d,n("p",null,[u,n("a",r,[v,e(a)])]),m,n("p",null,[k,n("a",b,[h,e(a)]),g,n("a",j,[f,e(a)]),_]),x,n("ul",null,[n("li",null,[n("a",y,[w,e(a)])]),n("li",null,[n("a",C,[T,e(a)])])])])}var q=i(p,[["render",J],["__file","JDK\u76D1\u63A7\u548C\u6545\u969C\u5904\u7406\u5DE5\u5177\u6C47\u603B.html.vue"]]);export{q as default};
