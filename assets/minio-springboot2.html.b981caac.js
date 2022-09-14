import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e as t}from"./app.4920373c.js";const p={},e=t(`<h1 id="springboot\u6574\u5408minio" tabindex="-1"><a class="header-anchor" href="#springboot\u6574\u5408minio" aria-hidden="true">#</a> SpringBoot\u6574\u5408minio</h1><h2 id="_1-\u96C6\u6210\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u96C6\u6210\u4F7F\u7528" aria-hidden="true">#</a> 1. \u96C6\u6210\u4F7F\u7528</h2><h3 id="_1-1-\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> 1.1 \u6DFB\u52A0\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.minio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>minio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>me.tongfei<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>progressbar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.5.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.squareup.okhttp3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>okhttp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u6784\u5EFAminioclient\u5BF9\u8C61-\u5E76\u4EA4\u7ED9spring\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6784\u5EFAminioclient\u5BF9\u8C61-\u5E76\u4EA4\u7ED9spring\u7BA1\u7406" aria-hidden="true">#</a> 1.2 \u6784\u5EFAMinioClient\u5BF9\u8C61\uFF0C\u5E76\u4EA4\u7ED9spring\u7BA1\u7406</h3><p>\u6784\u5EFAMinioClient\u5BF9\u8C61\uFF0C\u5E76\u4EA4\u7ED9spring\u7BA1\u7406</p><p>MinioProperties \u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;minio&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinioProperties</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> endpoint<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> accessKey<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> secretKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yml \u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">minio</span><span class="token punctuation">:</span>
	<span class="token key atrule">endpoint</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">9000</span>
	<span class="token key atrule">accesskey</span><span class="token punctuation">:</span> admin
	<span class="token key atrule">secretKey</span><span class="token punctuation">:</span> <span class="token number">12345678</span>
	<span class="token key atrule">bucketName</span><span class="token punctuation">:</span> test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20-\u4E0B\u8F7D-\u5220\u9664\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20-\u4E0B\u8F7D-\u5220\u9664\u64CD\u4F5C" aria-hidden="true">#</a> 1.3 \u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\uFF0C\u4E0B\u8F7D\uFF0C\u5220\u9664\u64CD\u4F5C</h3>`,11),o=[e];function c(i,l){return a(),s("div",null,o)}var r=n(p,[["render",c],["__file","minio-springboot2.html.vue"]]);export{r as default};
