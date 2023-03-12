import{_ as e,W as p,X as o,Y as n,Z as s,$ as l,a0 as a,D as c}from"./framework-0cf5f349.js";const i={},r=a(`<h1 id="freemarker入门" tabindex="-1"><a class="header-anchor" href="#freemarker入门" aria-hidden="true">#</a> FreeMarker入门</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>FreeMarker是一款用java语言编写的模版引擎，主要应用场景，<strong>生成Html web 页面</strong> 和 <strong>代码自动生成工具</strong></p><h3 id="_1-1-特点" tabindex="-1"><a class="header-anchor" href="#_1-1-特点" aria-hidden="true">#</a> 1.1 特点：</h3><ol><li>轻量级模版引擎，不需要Servlet环境就可以很轻松的嵌入到应用程序中</li><li>能生成各种文本，如html，xml，java，等</li><li>入门简单，它是用java编写的，很多语法和java相似</li></ol><h3 id="_1-2-工作原理" tabindex="-1"><a class="header-anchor" href="#_1-2-工作原理" aria-hidden="true">#</a> 1.2 工作原理</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201208110123472.png" alt="image-20201208110123472" tabindex="0" loading="lazy"><figcaption>image-20201208110123472</figcaption></figure><h2 id="_2-集成使用" tabindex="-1"><a class="header-anchor" href="#_2-集成使用" aria-hidden="true">#</a> 2. 集成使用</h2><p>简单</p><ol><li><p>添加maven依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置application.properties</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>
<span class="token comment">## Freemarker 配置</span>
<span class="token comment">##模版存放路径（默认为 classpath:/templates/）</span>
<span class="token key attr-name">spring.freemarker.template-loader-path</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/templates/</span>
<span class="token comment">##是否生成缓存，生成环境建议开启（默认为true）</span>
<span class="token key attr-name">spring.freemarker.cache</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment">##编码</span>
<span class="token key attr-name">spring.freemarker.charset</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8</span>
<span class="token key attr-name">spring.freemarker.check-template-location</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment">##content-type类型(默认为test/html)</span>
<span class="token key attr-name">spring.freemarker.content-type</span><span class="token punctuation">=</span><span class="token value attr-value">text/html</span>
<span class="token comment">## 设定所有request的属性在merge到模板的时候，是否要都添加到model中（默认为false）</span>
<span class="token key attr-name">spring.freemarker.expose-request-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment">##设定所有HttpSession的属性在merge到模板的时候，是否要都添加到model中.(默认为false)</span>
<span class="token key attr-name">spring.freemarker.expose-session-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment">##RequestContext属性的名称（默认为-）</span>
<span class="token key attr-name">spring.freemarker.request-context-attribute</span><span class="token punctuation">=</span><span class="token value attr-value">request</span>
<span class="token comment">##模板后缀(默认为.ftl)</span>
<span class="token key attr-name">spring.freemarker.suffix</span><span class="token punctuation">=</span><span class="token value attr-value">.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在/templates/ 目录添加模板文件</p><p>\${classPath} 其中\${} 就是需要动态替换， classPath 就是对应要设置的变量</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> $<span class="token punctuation">{</span>packagePath<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> $<span class="token punctuation">{</span>className<span class="token punctuation">}</span> <span class="token punctuation">{</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\${helloWorld}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>FreeMarkerDemo 生成文件和设置对应的属性</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zszdevelop<span class="token punctuation">.</span>freemarkerdemo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">freemarker<span class="token punctuation">.</span>template<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">freemarker<span class="token punctuation">.</span>template<span class="token punctuation">.</span></span><span class="token class-name">Template</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 作者: zhangshengzhong
 * @文件名: FreeMarkerDemo
 * @版本号:1.0
 * @创建日期: 2020/12/8 11:17
 * @描述: 数据填充 freeMarker 占位符
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FreeMarkerDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">TEMPLATE_PATH</span> <span class="token operator">=</span> <span class="token string">&quot;src/main/resources/templates&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">CLASS_PATH</span> <span class="token operator">=</span> <span class="token string">&quot;src/main/java/com/zszdevelop/freemarkerdemo&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// step1 创建freeMarker配置实例</span>
        <span class="token class-name">Configuration</span> configuration <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Writer</span> out <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// step2 获取模版路径</span>
            configuration<span class="token punctuation">.</span><span class="token function">setDirectoryForTemplateLoading</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">TEMPLATE_PATH</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// step3 创建数据模型</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> dataMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;packagePath&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;com.zszdevelop.freemarkerdemo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;className&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;AutoCodeDemo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;helloWorld&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;通过简单的 &lt;代码自动生产程序&gt; 演示 FreeMarker的HelloWorld！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// step4 加载模版文件</span>
            <span class="token class-name">Template</span> template <span class="token operator">=</span> configuration<span class="token punctuation">.</span><span class="token function">getTemplate</span><span class="token punctuation">(</span><span class="token string">&quot;hello.ftl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// step5 生成数据</span>
            <span class="token class-name">File</span> docFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">CLASS_PATH</span> <span class="token operator">+</span> <span class="token string">&quot;\\\\&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;AutoCodeDemo.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>docFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// step6 输出文件</span>
            template<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">,</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;AutoCodeDemo.java 文件创建成功 !&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> out<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e2<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行完毕可以看到生成了一个新类 AutoCodeDemo.java 。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201208112441266.png" alt="image-20201208112441266" tabindex="0" loading="lazy"><figcaption>image-20201208112441266</figcaption></figure><p>运行程序后刷新项目，会发现多了一个AutoCodeDemo.java类。不仅仅是java类，xml也是可以。笔者就是通过FreeMarker做了一个简易的工具类，公司的一个标准管理页面及其增删改查等功能，以及相关的配置文件（十三个文件），一个回车就全部自动生成。</p></li></ol><h2 id="_3-freemarker-语法" tabindex="-1"><a class="header-anchor" href="#_3-freemarker-语法" aria-hidden="true">#</a> 3. FreeMarker 语法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>字符串输出<span class="token operator">:</span>
$<span class="token punctuation">{</span><span class="token string">&quot;Hello \${name} !&quot;</span><span class="token punctuation">}</span> <span class="token operator">/</span> $<span class="token punctuation">{</span><span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot; !&quot;</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>#assign cname<span class="token operator">=</span>r<span class="token string">&quot;特殊字符完成输出(http:\\www.baidu.com)&quot;</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>cname<span class="token punctuation">}</span>

字符串截取 ： 
通过下标直接获取下标对应的字母： $<span class="token punctuation">{</span>name<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
起点下标<span class="token punctuation">.</span><span class="token punctuation">.</span>结尾下标截取字符串：$<span class="token punctuation">{</span>name<span class="token punctuation">[</span><span class="token number">0.</span><span class="token number">.5</span><span class="token punctuation">]</span><span class="token punctuation">}</span>

算数运算：
<span class="token operator">&lt;</span>#<span class="token operator">--</span> 支持<span class="token string">&quot;+&quot;</span>、<span class="token string">&quot;－&quot;</span>、<span class="token string">&quot;*&quot;</span>、<span class="token string">&quot;/&quot;</span>、<span class="token string">&quot;%&quot;</span>运算符 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#assign number1 <span class="token operator">=</span> <span class="token number">10</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#assign number2 <span class="token operator">=</span> <span class="token number">5</span><span class="token operator">&gt;</span>
<span class="token string">&quot;+&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">+</span> number2<span class="token punctuation">}</span>
<span class="token string">&quot;－&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">-</span> number2<span class="token punctuation">}</span>
<span class="token string">&quot;*&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">*</span> number2<span class="token punctuation">}</span>
<span class="token string">&quot;/&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">/</span> number2<span class="token punctuation">}</span>
<span class="token string">&quot;%&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">%</span> number2<span class="token punctuation">}</span>

比较运算符：
<span class="token operator">&lt;</span>#<span class="token keyword">if</span> number1 <span class="token operator">+</span> number2 gte <span class="token number">12</span> <span class="token operator">||</span> number1 <span class="token operator">-</span> number2 lt <span class="token number">6</span><span class="token operator">&gt;</span>
<span class="token string">&quot;*&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">*</span> number2<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>#<span class="token keyword">else</span><span class="token operator">&gt;</span>
<span class="token string">&quot;/&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">/</span> number2<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>

内建函数：
<span class="token operator">&lt;</span>#assign data <span class="token operator">=</span> <span class="token string">&quot;abcd1234&quot;</span><span class="token operator">&gt;</span>
第一个字母大写：$<span class="token punctuation">{</span>data<span class="token operator">?</span>cap_first<span class="token punctuation">}</span>
所有字母小写：$<span class="token punctuation">{</span>data<span class="token operator">?</span>lower_case<span class="token punctuation">}</span>
所有字母大写：$<span class="token punctuation">{</span>data<span class="token operator">?</span>upper_case<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>#assign floatData <span class="token operator">=</span> <span class="token number">12.34</span><span class="token operator">&gt;</span>
数值取整数：$<span class="token punctuation">{</span>floatData<span class="token operator">?</span><span class="token keyword">int</span><span class="token punctuation">}</span>
获取集合的长度：$<span class="token punctuation">{</span>users<span class="token operator">?</span>size<span class="token punctuation">}</span>
时间格式化：$<span class="token punctuation">{</span>dateTime<span class="token operator">?</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

空判断和对象集合：
<span class="token operator">&lt;</span>#<span class="token keyword">if</span> users<span class="token operator">?</span><span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#list users as user <span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token operator">-</span> $<span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#list<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#<span class="token keyword">else</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>user<span class="token operator">!</span><span class="token string">&quot;变量为空则给一个默认值&quot;</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>

<span class="token class-name">Map</span>集合：
<span class="token operator">&lt;</span>#assign mapData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;程序员&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;salary&quot;</span><span class="token operator">:</span><span class="token number">15000</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
直接通过<span class="token class-name">Key</span>获取 <span class="token class-name">Value</span>值：$<span class="token punctuation">{</span>mapData<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
通过<span class="token class-name">Key</span>遍历<span class="token class-name">Map</span>：
<span class="token operator">&lt;</span>#list mapData<span class="token operator">?</span>keys as key<span class="token operator">&gt;</span>
<span class="token class-name">Key</span><span class="token operator">:</span> $<span class="token punctuation">{</span>key<span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token class-name">Value</span><span class="token operator">:</span> $<span class="token punctuation">{</span>mapData<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#list<span class="token operator">&gt;</span>
通过<span class="token class-name">Value</span>遍历<span class="token class-name">Map</span>：
<span class="token operator">&lt;</span>#list mapData<span class="token operator">?</span>values as value<span class="token operator">&gt;</span>
<span class="token class-name">Value</span><span class="token operator">:</span> $<span class="token punctuation">{</span>value<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#list<span class="token operator">&gt;</span>

<span class="token class-name">List</span>集合：
<span class="token operator">&lt;</span>#assign listData<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;ITDragon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cool&quot;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#list listData as value<span class="token operator">&gt;</span>$<span class="token punctuation">{</span>value<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>#list<span class="token operator">&gt;</span>

include指令：
引入其他文件：<span class="token operator">&lt;</span>#include <span class="token string">&quot;otherFreeMarker.ftl&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

macro宏指令：
<span class="token operator">&lt;</span>#macro mo<span class="token operator">&gt;</span>
定义无参数的宏macro<span class="token operator">--</span>$<span class="token punctuation">{</span>name<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#macro<span class="token operator">&gt;</span>
使用宏macro<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token annotation punctuation">@mo</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#macro moArgs a b c<span class="token operator">&gt;</span>
定义带参数的宏macro<span class="token operator">--</span> $<span class="token punctuation">{</span>a<span class="token operator">+</span>b<span class="token operator">+</span>c<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#macro<span class="token operator">&gt;</span>
使用带参数的宏macro<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token annotation punctuation">@moArgs</span> a<span class="token operator">=</span><span class="token number">1</span> b<span class="token operator">=</span><span class="token number">2</span> c<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

命名空间：
<span class="token operator">&lt;</span>#<span class="token keyword">import</span> <span class="token string">&quot;otherFreeMarker.ftl&quot;</span> as otherFtl<span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>otherFtl<span class="token punctuation">.</span>otherName<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token annotation punctuation">@otherFtl.addMethod</span> a<span class="token operator">=</span><span class="token number">10</span> b<span class="token operator">=</span><span class="token number">20</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#assign otherName<span class="token operator">=</span><span class="token string">&quot;修改otherFreeMarker.ftl中的otherName变量值&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>otherFtl<span class="token punctuation">.</span>otherName<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>#assign otherName<span class="token operator">=</span><span class="token string">&quot;修改otherFreeMarker.ftl中的otherName变量值&quot;</span> in otherFtl <span class="token operator">/</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>otherFtl<span class="token punctuation">.</span>otherName<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-最常用的语法" tabindex="-1"><a class="header-anchor" href="#_4-最常用的语法" aria-hidden="true">#</a> 4. 最常用的语法</h2><ul><li><p>字符串输出:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$<span class="token punctuation">{</span><span class="token string">&quot;Hello \${name} !&quot;</span><span class="token punctuation">}</span> <span class="token operator">/</span> $<span class="token punctuation">{</span><span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot; !&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>List集合</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List集合：
&lt;#assign listData=[&quot;ITDragon&quot;, &quot;blog&quot;, &quot;is&quot;, &quot;cool&quot;]&gt;
&lt;#list listData as value&gt;\${value} &lt;/#list&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_5-语法详解" tabindex="-1"><a class="header-anchor" href="#_5-语法详解" aria-hidden="true">#</a> 5. 语法详解</h2><p><strong>数据类型</strong> 和java不同，FreeMarker不需要定义变量的类型，直接赋值即可。 字符串： value = &quot;xxxx&quot; 。如果有特殊字符 string = r&quot;xxxx&quot; 。单引号和双引号是一样的。 数值：value = 1.2。数值可以直接等于，但是不能用科学计数法。 布尔值：true or false。 List集合：list = [1,2,3] ; list=[1..100] 表示 1 到 100 的集合，反之亦然。 Map集合：map = {&quot;key&quot; : &quot;value&quot; , &quot;key2&quot; : &quot;value2&quot;}，key 必须是字符串哦！ 实体类：和EL表达式差不多，直接点出来。</p>`,16),u=n("p",{"hello,+name":""},[n("strong",null,"字符串操作"),s(' 字符串连接：可以直接嵌套{"hello , {name}"} ； 也可以用加号$')],-1),k=a('<p>字符串截取：string[index]。index 可以是一个值，也可以是形如 0..2 表示下标从0开始，到下标为2结束。一共是三个数。</p><p><strong>比较运算符</strong> == （等于），!= （不等于），gt（大于），gte（大于或者等于），lt（小于），lte（小于或者等于）。不建议用 &gt;，&lt; 可能会报错！ 一般和 if 配合使用</p><p><strong>内建函数</strong> FreeMarker 提供了一些内建函数来转换输出，其结构：变量?内建函数，这样就可以通过内建函数来转换输出变量。 html： 对字符串进行HTML编码； cap_first： 使字符串第一个字母大写； lower_case： 将字符串转成小写； upper_case： 将字符串转成大写； size： 获得集合中元素的个数； int： 取得数字的整数部分。</p><p><strong>变量空判断</strong> ! 　　指定缺失变量的默认值；一般配置变量输出使用 ?? 　判断变量是否存在。一般配合if使用 &lt;#if value??&gt;&lt;/#if&gt;</p><p><strong>宏指令</strong> 可以理解为java的封装方法，供其他地方使用。宏指令也称为自定义指令，macro指令 语法很简单：&lt;#macro val &gt; 声明macro &lt;/#macro&gt;; 使用macro &lt;@val /&gt;</p><p><strong>命名空间</strong> 可以理解为java的import语句，为避免变量重复。一个重要的规则就是:路径不应该包含大写字母，使用下划线_分隔词语，myName --&gt; my_name 语法很简单：&lt;#import &quot;xxx.ftl&quot; as val&gt;</p><p>其他没有说明的语法是因为和java一样，没什么特别之处。所以没有列出来。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',8),d={href:"https://segmentfault.com/a/1190000011768799",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const t=c("ExternalLinkIcon");return p(),o("div",null,[r,u,k,n("p",null,[n("a",d,[s("FreeMarker 快速入门"),l(t)])])])}const q=e(i,[["render",m],["__file","templates-k-freeMarker-overview.html.vue"]]);export{q as default};