import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as o,e as p,d as l,r as i}from"./app.f305e04f.js";const c={},u=p(`<h1 id="beautifulsoup\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#beautifulsoup\u5165\u95E8" aria-hidden="true">#</a> BeautifulSoup\u5165\u95E8</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p><strong>Beautiful Soup</strong> \u662F\u4E00\u4E2A\u53EF\u4EE5\u4ECE <strong>HTML</strong> \u6216 <strong>XML</strong> \u6587\u4EF6\u4E2D\u63D0\u53D6\u6570\u636E\u7684 <strong>Python</strong> \u5E93.\u5B83\u80FD\u591F\u901A\u8FC7\u4F60\u559C\u6B22\u7684\u8F6C\u6362\u5668\u5B9E\u73B0\u60EF\u7528\u7684\u6587\u6863\u5BFC\u822A,\u67E5\u627E,\u4FEE\u6539\u6587\u6863\u7684\u65B9\u5F0F.<strong>Beautiful Soup</strong> \u4F1A\u5E2E\u4F60\u8282\u7701\u6570\u5C0F\u65F6\u751A\u81F3\u6570\u5929\u7684\u5DE5\u4F5C\u65F6\u95F4.</p><h2 id="_2-\u7B80\u5355\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u7B80\u5355\u7528\u6CD5" aria-hidden="true">#</a> 2. \u7B80\u5355\u7528\u6CD5</h2><p>\u5C06\u4E00\u6BB5\u6587\u6863\u4F20\u5165 <strong>BeautifulSoup</strong> \u7684\u6784\u9020\u65B9\u6CD5,\u5C31\u80FD\u5F97\u5230\u4E00\u4E2A\u6587\u6863\u7684\u5BF9\u8C61, \u53EF\u4EE5\u4F20\u5165\u4E00\u6BB5\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u6587\u4EF6\u53E5\u67C4.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span><span class="token string">&quot;&lt;html&gt;&lt;body&gt;&lt;p&gt;data&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;&quot;</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> soup
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>data<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> soup<span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>data<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>\u9996\u5148\u4F20\u5165\u4E00\u4E2A <strong>html</strong> \u6587\u6863\uFF0C<code>soup</code> \u662F\u83B7\u5F97\u6587\u6863\u7684\u5BF9\u8C61\u3002</p></li><li><p>\u7136\u540E,\u6587\u6863\u88AB\u8F6C\u6362\u6210 <strong>Unicode</strong> ,\u5E76\u4E14 <strong>HTML</strong> \u7684\u5B9E\u4F8B\u90FD\u88AB\u8F6C\u6362\u6210 <strong>Unicode</strong> \u7F16\u7801\u3002</p></li><li><p>\u7136\u540E,<strong>Beautiful Soup</strong> \u9009\u62E9\u6700\u5408\u9002\u7684\u89E3\u6790\u5668\u6765\u89E3\u6790\u8FD9\u6BB5\u6587\u6863,</p><p>\u5982\u679C\u624B\u52A8\u6307\u5B9A\u89E3\u6790\u5668\u90A3\u4E48 <strong>Beautiful Soup</strong> \u4F1A\u9009\u62E9\u6307\u5B9A\u7684\u89E3\u6790\u5668\u6765\u89E3\u6790\u6587\u6863\u3002\u4F46\u662F\u4E00\u822C\u6700\u597D\u624B\u52A8\u6307\u5B9A\u89E3\u6790\u5668\uFF0C</p></li></ol><ul><li>\u8981\u89E3\u6790\u7684\u6587\u6863\u662F\u4EC0\u4E48\u7C7B\u578B: \u76EE\u524D\u652F\u6301, <strong>html, xml,</strong> \u548C <strong>html5</strong></li><li>\u6307\u5B9A\u4F7F\u7528\u54EA\u79CD\u89E3\u6790\u5668: \u76EE\u524D\u652F\u6301, <strong>lxml, html5lib,</strong> \u548C <strong>html.parser</strong></li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
<span class="token keyword">import</span> requests

html <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>\u2018http<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token punctuation">.</span>jianshu<span class="token punctuation">.</span>com<span class="token operator">/</span>\u2019<span class="token punctuation">)</span><span class="token punctuation">.</span>content  
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">,</span> from_encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> soup<span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u5BF9\u8C61\u79CD\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-\u5BF9\u8C61\u79CD\u7C7B" aria-hidden="true">#</a> 3. \u5BF9\u8C61\u79CD\u7C7B</h2><p><strong>Beautiful Soup</strong> \u5C06\u590D\u6742 <strong>HTML</strong> \u6587\u6863\u8F6C\u6362\u6210\u4E00\u4E2A\u590D\u6742\u7684\u6811\u5F62\u7ED3\u6784,\u6BCF\u4E2A\u8282\u70B9\u90FD\u662F <strong>Python</strong> \u5BF9\u8C61,\u6240\u6709\u5BF9\u8C61\u53EF\u4EE5\u5F52\u7EB3\u4E3A 4 \u79CD: <code>Tag , NavigableString , BeautifulSoup , Comment .</code></p><ul><li><p><code>Tag</code>\uFF1A\u901A\u4FD7\u70B9\u8BB2\u5C31\u662F <strong>HTML</strong> \u4E2D\u7684\u4E00\u4E2A\u4E2A\u6807\u7B7E\uFF0C\u50CF\u4E0A\u9762\u7684 <code>div\uFF0Cp</code>\u3002\u6BCF\u4E2A <code>Tag</code> \u6709\u4E24\u4E2A\u91CD\u8981\u7684\u5C5E\u6027 <code>name</code> \u548C <code>attrs\uFF0Cname</code> \u6307\u6807\u7B7E\u7684\u540D\u5B57\u6216\u8005 <code>tag</code> \u672C\u8EAB\u7684 <code>name\uFF0Cattrs</code> \u901A\u5E38\u6307\u4E00\u4E2A\u6807\u7B7E\u7684 <code>class</code>\u3002</p></li><li><p><code>NavigableString</code>\uFF1A\u83B7\u53D6\u6807\u7B7E\u5185\u90E8\u7684\u6587\u5B57\uFF0C\u5982\uFF0C<code>soup.p.string</code>\u3002</p></li><li><p><code>BeautifulSoup</code>\uFF1A\u8868\u793A\u4E00\u4E2A\u6587\u6863\u7684\u5168\u90E8\u5185\u5BB9\u3002</p></li><li><p><code>Comment\uFF1AComment</code> \u5BF9\u8C61\u662F\u4E00\u4E2A\u7279\u6B8A\u7C7B\u578B\u7684 <code>NavigableString</code> \u5BF9\u8C61\uFF0C\u5176\u8F93\u51FA\u7684\u5185\u5BB9\u4E0D\u5305\u62EC\u6CE8\u91CA\u7B26\u53F7.</p></li></ul><h2 id="_4-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-\u793A\u4F8B" aria-hidden="true">#</a> 4. \u793A\u4F8B</h2><p>\u5982\u4E0B\u793A\u4F8B\uFF0C<strong>Beautiful Soup</strong> \u7684\u5E38\u89C1\u7528\u6CD5</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>
<span class="token keyword">import</span> sys  
<span class="token builtin">reload</span><span class="token punctuation">(</span>sys<span class="token punctuation">)</span>  
sys<span class="token punctuation">.</span>setdefaultencoding<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> 
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
<span class="token keyword">import</span> requests


html_doc <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
&lt;head&gt;
      &lt;meta charset=&quot;utf-8&quot;&gt;
      &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=Edge&quot;&gt;
    &lt;title&gt;\u9996\u9875 - \u7B80\u4E66&lt;/title&gt;
&lt;/head&gt;

&lt;body class=&quot;output fluid zh cn win reader-day-mode reader-font2 &quot; data-js-module=&quot;recommendation&quot; data-locale=&quot;zh-CN&quot;&gt;

&lt;ul class=&quot;article-list thumbnails&quot;&gt;

  &lt;li class=have-img&gt;
      &lt;a class=&quot;wrap-img&quot; href=&quot;/p/49c4728c3ab2&quot;&gt;&lt;img src=&quot;http://upload-images.jianshu.io/upload_images/2442470-745c6471c6f8258c.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300&quot; alt=&quot;300&quot; /&gt;&lt;/a&gt;
    &lt;div&gt;
      &lt;p class=&quot;list-top&quot;&gt;
        &lt;a class=&quot;author-name blue-link&quot; target=&quot;_blank&quot; href=&quot;/users/0af6b163b687&quot;&gt;\u963F\u968F\u5411\u524D\u51B2&lt;/a&gt;
        &lt;em&gt;\xB7&lt;/em&gt;
        &lt;span class=&quot;time&quot; data-shared-at=&quot;2016-07-27T07:03:54+08:00&quot;&gt;&lt;/span&gt;
      &lt;/p&gt;
      &lt;h4 class=&quot;title&quot;&gt;&lt;a target=&quot;_blank&quot; href=&quot;/p/49c4728c3ab2&quot;&gt; \u53EA\u88C5\u4E86\u8FD9\u516D\u6B3E\u8F6F\u4EF6\uFF0C\u5DE5\u4F5C\u5C31\u9AD8\u6548\u5230\u6709\u65F6\u95F4\u901B\u67D0\u5B9D\u5237\u67D0\u5708&lt;/a&gt;&lt;/h4&gt;
      &lt;div class=&quot;list-footer&quot;&gt;
        &lt;a target=&quot;_blank&quot; href=&quot;/p/49c4728c3ab2&quot;&gt;
          \u9605\u8BFB 1830
&lt;/a&gt;        &lt;a target=&quot;_blank&quot; href=&quot;/p/49c4728c3ab2#comments&quot;&gt;
           \xB7 \u8BC4\u8BBA 35
&lt;/a&gt;        &lt;span&gt; \xB7 \u559C\u6B22 95&lt;/span&gt;
          &lt;span&gt; \xB7 \u6253\u8D4F 1&lt;/span&gt;
        
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;

&lt;/body&gt;
&quot;&quot;&quot;</span>

soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html_doc<span class="token punctuation">,</span> <span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">,</span> from_encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u67E5\u627E\u6240\u6709\u6709\u5173\u7684\u8282\u70B9</span>
tags <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string">&quot;have-img&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> tag <span class="token keyword">in</span> tags<span class="token punctuation">:</span>
        image <span class="token operator">=</span> tag<span class="token punctuation">.</span>img<span class="token punctuation">[</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">]</span>
        article_user <span class="token operator">=</span> tag<span class="token punctuation">.</span>p<span class="token punctuation">.</span>a<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span>
        article_user_url <span class="token operator">=</span> tag<span class="token punctuation">.</span>p<span class="token punctuation">.</span>a<span class="token punctuation">[</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">]</span>      
        created <span class="token operator">=</span> tag<span class="token punctuation">.</span>p<span class="token punctuation">.</span>span<span class="token punctuation">[</span><span class="token string">&#39;data-shared-at&#39;</span><span class="token punctuation">]</span>        
        article_url <span class="token operator">=</span> tag<span class="token punctuation">.</span>h4<span class="token punctuation">.</span>a<span class="token punctuation">[</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">]</span>

        <span class="token comment"># \u53EF\u4EE5\u5728\u67E5\u627E\u7684 tag \u4E0B\u7EE7\u7EED\u4F7F\u7528 find_all()</span>
        tag_span <span class="token operator">=</span> tag<span class="token punctuation">.</span>div<span class="token punctuation">.</span>div<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>

        likes <span class="token operator">=</span> tag_span<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>get_text<span class="token punctuation">(</span>strip<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-find-all" tabindex="-1"><a class="header-anchor" href="#_4-1-find-all" aria-hidden="true">#</a> 4.1 find_all()</h3><p><strong>BeautifulSoup</strong> \u4E3B\u8981\u7528\u6765\u904D\u5386\u5B50\u8282\u70B9\u53CA\u5B50\u8282\u70B9\u7684\u5C5E\u6027\uFF0C\u901A\u8FC7\u70B9\u53D6\u5C5E\u6027\u7684\u65B9\u5F0F\u53EA\u80FD\u83B7\u5F97\u5F53\u524D\u6587\u6863\u4E2D\u7684\u7B2C\u4E00\u4E2A <code>tag</code>\uFF0C\u4F8B\u5982\uFF0C<code>soup.li</code>\u3002\u5982\u679C\u60F3\u8981\u5F97\u5230\u6240\u6709\u7684<code>&lt;li&gt;</code> \u6807\u7B7E,\u6216\u662F\u901A\u8FC7\u540D\u5B57\u5F97\u5230\u6BD4\u4E00\u4E2A <code>tag</code> \u66F4\u591A\u7684\u5185\u5BB9\u7684\u65F6\u5019,\u5C31\u9700\u8981\u7528\u5230 <code>find_all()</code>\uFF0C<code>find_all()</code> \u65B9\u6CD5\u641C\u7D22\u5F53\u524D tag \u7684\u6240\u6709 tag \u5B50\u8282\u70B9,\u5E76\u5224\u65AD\u662F\u5426\u7B26\u5408\u8FC7\u6EE4\u5668\u7684\u6761\u4EF6<code>find_all()</code> \u6240\u63A5\u53D7\u7684\u53C2\u6570\u5982\u4E0B\uFF1A</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token function">find_all</span><span class="token punctuation">(</span> name <span class="token punctuation">,</span> attrs <span class="token punctuation">,</span> recursive <span class="token punctuation">,</span> string <span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span>kwargs <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>\u6309 <code>name</code> \u641C\u7D22: <code>name</code> \u53C2\u6570\u53EF\u4EE5\u67E5\u627E\u6240\u6709\u540D\u5B57\u4E3A <code>name</code> \u7684 <code>tag</code>,\u5B57\u7B26\u4E32\u5BF9\u8C61\u4F1A\u88AB\u81EA\u52A8\u5FFD\u7565\u6389:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> soup.find_all<span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6309 <code>id</code> \u641C\u7D22: \u5982\u679C\u5305\u542B\u4E00\u4E2A\u540D\u5B57\u4E3A <code>id</code> \u7684\u53C2\u6570,\u641C\u7D22\u65F6\u4F1A\u628A\u8BE5\u53C2\u6570\u5F53\u4F5C\u6307\u5B9A\u540D\u5B57 <code>tag</code> \u7684\u5C5E\u6027\u6765\u641C\u7D22:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> soup.find_all<span class="token punctuation">(</span>id<span class="token operator">=</span><span class="token string">&#39;link2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6309 <code>attr</code> \u641C\u7D22\uFF1A\u6709\u4E9B <code>tag</code> \u5C5E\u6027\u5728\u641C\u7D22\u4E0D\u80FD\u4F7F\u7528,\u6BD4\u5982 <strong>HTML5</strong> \u4E2D\u7684 <code>data-*</code> \u5C5E\u6027\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7 <code>find_all()</code> \u65B9\u6CD5\u7684 <code>attrs</code> \u53C2\u6570\u5B9A\u4E49\u4E00\u4E2A\u5B57\u5178\u53C2\u6570\u6765\u641C\u7D22\u5305\u542B\u7279\u6B8A\u5C5E\u6027\u7684 <code>tag</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> data_soup.find_all<span class="token punctuation">(</span>attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;data-foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6309 <code>CSS</code> \u641C\u7D22: \u6309\u7167 <code>CSS</code> \u7C7B\u540D\u641C\u7D22 <code>tag</code> \u7684\u529F\u80FD\u975E\u5E38\u5B9E\u7528,\u4F46\u6807\u8BC6<code>CSS</code> \u7C7B\u540D\u7684\u5173\u952E\u5B57 <code>class</code> \u5728 <strong>Python</strong> \u4E2D\u662F\u4FDD\u7559\u5B57,\u4F7F\u7528 <code>class</code> \u505A\u53C2\u6570\u4F1A\u5BFC\u81F4\u8BED\u6CD5\u9519\u8BEF.\u4ECE <strong>Beautiful Soup</strong> \u7684 4.1.1 \u7248\u672C\u5F00\u59CB,\u53EF\u4EE5\u901A\u8FC7 <code>class_</code> \u53C2\u6570\u641C\u7D22\u6709\u6307\u5B9A <code>CSS</code> \u7C7B\u540D\u7684 <code>tag</code>:</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;li&#39;</span></span><span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;have-img&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>string</code> \u53C2\u6570\uFF1A\u901A\u8FC7 <code>string</code> \u53C2\u6570\u53EF\u4EE5\u641C\u641C\u6587\u6863\u4E2D\u7684\u5B57\u7B26\u4E32\u5185\u5BB9.\u4E0E <code>name</code> \u53C2\u6570\u7684\u53EF\u9009\u503C\u4E00\u6837, <code>string</code> \u53C2\u6570\u63A5\u53D7 \u5B57\u7B26\u4E32 , \u6B63\u5219\u8868\u8FBE\u5F0F , \u5217\u8868, <code>True</code> \u3002 \u770B\u4F8B\u5B50:</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code> soup<span class="token punctuation">.</span><span class="token function">find_all</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> string<span class="token operator">=</span><span class="token string">&quot;Elsie&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>recursive</code> \u53C2\u6570\uFF1A\u8C03\u7528 <code>tag</code> \u7684 <code>find_all()</code> \u65B9\u6CD5\u65F6,<strong>Beautiful Soup</strong> \u4F1A\u68C0\u7D22\u5F53\u524D <code>tag</code> \u7684\u6240\u6709\u5B50\u5B59\u8282\u70B9,\u5982\u679C\u53EA\u60F3\u641C\u7D22 <code>tag</code> \u7684\u76F4\u63A5\u5B50\u8282\u70B9,\u53EF\u4EE5\u4F7F\u7528\u53C2\u6570 <code>recursive=False</code> .</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> soup<span class="token operator">.</span><span class="token function">find_all</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;title&quot;</span><span class="token punctuation">,</span> recursive<span class="token operator">=</span><span class="token constant boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><blockquote><p><strong>find_all()</strong> \u51E0\u4E4E\u662F <strong>Beautiful Soup</strong>\u4E2D\u6700\u5E38\u7528\u7684\u641C\u7D22\u65B9\u6CD5,\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u7B80\u5199\u65B9\u6CD5\uFF0C\u4EE5\u4E0B\u4EE3\u7801\u7B49\u4EF7\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
    soup<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_4-2-get-text" tabindex="-1"><a class="header-anchor" href="#_4-2-get-text" aria-hidden="true">#</a> 4.2 get_text()</h3><p>\u5982\u679C\u53EA\u60F3\u5F97\u5230 <code>tag</code> \u4E2D\u5305\u542B\u7684\u6587\u672C\u5185\u5BB9,\u90A3\u4E48\u53EF\u4EE5\u7528 <code>get_text()</code> \u65B9\u6CD5,\u8FD9\u4E2A\u65B9\u6CD5\u83B7\u53D6\u5230 <code>tag</code> \u4E2D\u5305\u542B\u7684\u6240\u6709\u6587\u7248\u5185\u5BB9\u5305\u62EC\u5B50\u5B59 <code>tag</code> \u4E2D\u7684\u5185\u5BB9,\u5E76\u5C06\u7ED3\u679C\u4F5C\u4E3A <code>Unicode</code> \u5B57\u7B26\u4E32\u8FD4\u56DE:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>    tag.p.a.get_<span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,24),d={href:"https://www.jianshu.com/p/2b783f7914c6",target:"_blank",rel:"noopener noreferrer"},r=l("python\uFF1ABeautifulSoup \u6A21\u5757\u4F7F\u7528\u6307\u5357");function g(v,k){const s=i("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",d,[r,o(s)])])])}const h=a(c,[["render",g],["__file","python-beautiful-soup-started.html.vue"]]);export{h as default};