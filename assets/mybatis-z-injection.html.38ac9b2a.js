import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as s,b as p,d as o,e as l,r as c}from"./app.b742c861.js";const r={},i=o(`<h1 id="mybatis\u95EE\u9898-mybatis\u662F\u5982\u4F55\u9632\u6B62sql\u6CE8\u5165\u7684" tabindex="-1"><a class="header-anchor" href="#mybatis\u95EE\u9898-mybatis\u662F\u5982\u4F55\u9632\u6B62sql\u6CE8\u5165\u7684" aria-hidden="true">#</a> MyBatis\u95EE\u9898 - Mybatis\u662F\u5982\u4F55\u9632\u6B62SQL\u6CE8\u5165\u7684</h1><h2 id="_1-\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#_1-\u5F15\u5165" aria-hidden="true">#</a> 1.\u5F15\u5165</h2><p><strong>1\u3001\u9996\u5148\u770B\u4E00\u4E0B\u4E0B\u9762\u4E24\u4E2Asql\u8BED\u53E5\u7684\u533A\u522B\uFF1A</strong></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">&lt;</span><span class="token keyword">select</span> id<span class="token operator">=</span><span class="token string">&quot;selectByNameAndPassword&quot;</span> parameterType<span class="token operator">=</span><span class="token string">&quot;java.util.Map&quot;</span> resultMap<span class="token operator">=</span><span class="token string">&quot;BaseResultMap&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">select</span> id<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> role
<span class="token keyword">from</span> <span class="token keyword">user</span>
<span class="token keyword">where</span> username <span class="token operator">=</span> <span class="token comment">#{username,jdbcType=VARCHAR}</span>
<span class="token operator">and</span> password <span class="token operator">=</span> <span class="token comment">#{password,jdbcType=VARCHAR}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">select</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">&lt;</span><span class="token keyword">select</span> id<span class="token operator">=</span><span class="token string">&quot;selectByNameAndPassword&quot;</span> parameterType<span class="token operator">=</span><span class="token string">&quot;java.util.Map&quot;</span> resultMap<span class="token operator">=</span><span class="token string">&quot;BaseResultMap&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">select</span> id<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> role
<span class="token keyword">from</span> <span class="token keyword">user</span>
<span class="token keyword">where</span> username <span class="token operator">=</span> \${username<span class="token punctuation">,</span>jdbcType<span class="token operator">=</span><span class="token keyword">VARCHAR</span>}
<span class="token operator">and</span> password <span class="token operator">=</span> \${password<span class="token punctuation">,</span>jdbcType<span class="token operator">=</span><span class="token keyword">VARCHAR</span>}
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">select</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-mybatis\u4E2D\u7684-\u548C-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-1-mybatis\u4E2D\u7684-\u548C-\u7684\u533A\u522B" aria-hidden="true">#</a> 1.1 <strong>mybatis\u4E2D\u7684#\u548C$\u7684\u533A\u522B\uFF1A</strong></h3><ol><li>#\u5C06\u4F20\u5165\u7684\u6570\u636E\u90FD\u5F53\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5BF9\u81EA\u52A8\u4F20\u5165\u7684\u6570\u636E\u52A0\u4E00\u4E2A\u53CC\u5F15\u53F7\u3002 \u5982\uFF1Awhere username=#{username}\uFF0C\u5982\u679C\u4F20\u5165\u7684\u503C\u662F111,\u90A3\u4E48\u89E3\u6790\u6210sql\u65F6\u7684\u503C\u4E3Awhere username=&quot;111&quot;, \u5982\u679C\u4F20\u5165\u7684\u503C\u662Fid\uFF0C\u5219\u89E3\u6790\u6210\u7684sql\u4E3Awhere username=&quot;id&quot;.</li><li>$\u5C06\u4F20\u5165\u7684\u6570\u636E\u76F4\u63A5\u663E\u793A\u751F\u6210\u5728sql\u4E2D\u3002 \u5982\uFF1Awhere username=\${username}\uFF0C\u5982\u679C\u4F20\u5165\u7684\u503C\u662F111,\u90A3\u4E48\u89E3\u6790\u6210sql\u65F6\u7684\u503C\u4E3Awhere username=111\uFF1B \u5982\u679C\u4F20\u5165\u7684\u503C\u662F\uFF1Adrop table user;\uFF0C\u5219\u89E3\u6790\u6210\u7684sql\u4E3A\uFF1Aselect id, username, password, role from user where username=;drop table user;</li><li>#\u65B9\u5F0F\u80FD\u591F\u5F88\u5927\u7A0B\u5EA6\u9632\u6B62sql\u6CE8\u5165\uFF0C$\u65B9\u5F0F\u65E0\u6CD5\u9632\u6B62Sql\u6CE8\u5165\u3002</li><li>$\u65B9\u5F0F\u4E00\u822C\u7528\u4E8E\u4F20\u5165\u6570\u636E\u5E93\u5BF9\u8C61\uFF0C\u4F8B\u5982\u4F20\u5165\u8868\u540D.</li><li>\u4E00\u822C\u80FD\u7528#\u7684\u5C31\u522B\u7528$\uFF0C\u82E5\u4E0D\u5F97\u4E0D\u4F7F\u7528\u201C\${xxx}\u201D\u8FD9\u6837\u7684\u53C2\u6570\uFF0C\u8981\u624B\u5DE5\u5730\u505A\u597D\u8FC7\u6EE4\u5DE5\u4F5C\uFF0C\u6765\u9632\u6B62sql\u6CE8\u5165\u653B\u51FB\u3002</li><li>\u5728MyBatis\u4E2D\uFF0C\u201C\${xxx}\u201D\u8FD9\u6837\u683C\u5F0F\u7684\u53C2\u6570\u4F1A\u76F4\u63A5\u53C2\u4E0ESQL\u7F16\u8BD1\uFF0C\u4ECE\u800C\u4E0D\u80FD\u907F\u514D\u6CE8\u5165\u653B\u51FB\u3002\u4F46\u6D89\u53CA\u5230\u52A8\u6001\u8868\u540D\u548C\u5217\u540D\u65F6\uFF0C\u53EA\u80FD\u4F7F\u7528\u201C\${xxx}\u201D\u8FD9\u6837\u7684\u53C2\u6570\u683C\u5F0F\u3002\u6240\u4EE5\uFF0C\u8FD9\u6837\u7684\u53C2\u6570\u9700\u8981\u6211\u4EEC\u5728\u4EE3\u7801\u4E2D\u624B\u5DE5\u8FDB\u884C\u5904\u7406\u6765\u9632\u6B62\u6CE8\u5165\u3002</li></ol><blockquote><p>\u3010\u7ED3\u8BBA\u3011\u5728\u7F16\u5199MyBatis\u7684\u6620\u5C04\u8BED\u53E5\u65F6\uFF0C\u5C3D\u91CF\u91C7\u7528\u201C#{xxx}\u201D\u8FD9\u6837\u7684\u683C\u5F0F\u3002\u82E5\u4E0D\u5F97\u4E0D\u4F7F\u7528\u201C\${xxx}\u201D\u8FD9\u6837\u7684\u53C2\u6570\uFF0C\u8981\u624B\u5DE5\u5730\u505A\u597D\u8FC7\u6EE4\u5DE5\u4F5C\uFF0C\u6765\u9632\u6B62SQL\u6CE8\u5165\u653B\u51FB\u3002</p></blockquote><h2 id="_2-\u4EC0\u4E48\u662Fsql\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_2-\u4EC0\u4E48\u662Fsql\u6CE8\u5165" aria-hidden="true">#</a> 2. \u4EC0\u4E48\u662Fsql\u6CE8\u5165</h2><blockquote><p>sql\u6CE8\u5165\u89E3\u91CA\uFF1A\u662F\u4E00\u79CD\u4EE3\u7801\u6CE8\u5165\u6280\u672F\uFF0C\u7528\u4E8E\u653B\u51FB\u6570\u636E\u9A71\u52A8\u7684\u5E94\u7528\uFF0C\u6076\u610F\u7684SQL\u8BED\u53E5\u88AB\u63D2\u5165\u5230\u6267\u884C\u7684\u5B9E\u4F53\u5B57\u6BB5\u4E2D\uFF08\u4F8B\u5982\uFF0C\u4E3A\u4E86\u8F6C\u50A8\u6570\u636E\u5E93\u5185\u5BB9\u7ED9\u653B\u51FB\u8005\uFF09</p></blockquote><p><strong>SQL\u6CE8\u5165</strong>\uFF0C\u5927\u5BB6\u90FD\u4E0D\u964C\u751F\uFF0C\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u653B\u51FB\u65B9\u5F0F\u3002<strong>\u653B\u51FB\u8005</strong>\u5728\u754C\u9762\u7684\u8868\u5355\u4FE1\u606F\u6216URL\u4E0A\u8F93\u5165\u4E00\u4E9B\u5947\u602A\u7684SQL\u7247\u6BB5\uFF08\u4F8B\u5982\u201Cor \u20181\u2019=\u20191\u2019\u201D\u8FD9\u6837\u7684\u8BED\u53E5\uFF09\uFF0C\u6709\u53EF\u80FD\u5165\u4FB5<strong>\u53C2\u6570\u68C0\u9A8C\u4E0D\u8DB3</strong>\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u6240\u4EE5\uFF0C\u5728\u6211\u4EEC\u7684\u5E94\u7528\u4E2D\u9700\u8981\u505A\u4E00\u4E9B\u5DE5\u4F5C\uFF0C\u6765\u9632\u5907\u8FD9\u6837\u7684\u653B\u51FB\u65B9\u5F0F\u3002\u5728\u4E00\u4E9B\u5B89\u5168\u6027\u8981\u6C42\u5F88\u9AD8\u7684\u5E94\u7528\u4E2D\uFF08\u6BD4\u5982\u94F6\u884C\u8F6F\u4EF6\uFF09\uFF0C\u7ECF\u5E38\u4F7F\u7528\u5C06<strong>SQL\u8BED\u53E5</strong>\u5168\u90E8\u66FF\u6362\u4E3A<strong>\u5B58\u50A8\u8FC7\u7A0B</strong>\u8FD9\u6837\u7684\u65B9\u5F0F\uFF0C\u6765\u9632\u6B62SQL\u6CE8\u5165\u3002\u8FD9\u5F53\u7136\u662F<strong>\u4E00\u79CD\u5F88\u5B89\u5168\u7684\u65B9\u5F0F</strong>\uFF0C\u4F46\u6211\u4EEC\u5E73\u65F6\u5F00\u53D1\u4E2D\uFF0C\u53EF\u80FD\u4E0D\u9700\u8981\u8FD9\u79CD\u6B7B\u677F\u7684\u65B9\u5F0F\u3002</p><h2 id="_3-mybatis\u662F\u5982\u4F55\u505A\u5230\u9632\u6B62sql\u6CE8\u5165\u7684" tabindex="-1"><a class="header-anchor" href="#_3-mybatis\u662F\u5982\u4F55\u505A\u5230\u9632\u6B62sql\u6CE8\u5165\u7684" aria-hidden="true">#</a> 3. mybatis\u662F\u5982\u4F55\u505A\u5230\u9632\u6B62sql\u6CE8\u5165\u7684</h2><p>MyBatis\u6846\u67B6\u4F5C\u4E3A\u4E00\u6B3E\u534A\u81EA\u52A8\u5316\u7684\u6301\u4E45\u5C42\u6846\u67B6\uFF0C\u5176SQL\u8BED\u53E5\u90FD\u8981\u6211\u4EEC\u81EA\u5DF1\u624B\u52A8\u7F16\u5199\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5F53\u7136\u9700\u8981\u9632\u6B62SQL\u6CE8\u5165\u3002\u5176\u5B9E\uFF0CMyBatis\u7684SQL\u662F\u4E00\u4E2A\u5177\u6709\u201C<strong>\u8F93\u5165+\u8F93\u51FA</strong>\u201D\u7684\u529F\u80FD\uFF0C\u7C7B\u4F3C\u4E8E\u51FD\u6570\u7684\u7ED3\u6784\uFF0C\u53C2\u8003\u4E0A\u9762\u7684\u4E24\u4E2A\u4F8B\u5B50\u3002\u5176\u4E2D\uFF0CparameterType\u8868\u793A\u4E86\u8F93\u5165\u7684\u53C2\u6570\u7C7B\u578B\uFF0CresultType\u8868\u793A\u4E86\u8F93\u51FA\u7684\u53C2\u6570\u7C7B\u578B\u3002\u56DE\u5E94\u4E0A\u6587\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u9632\u6B62SQL\u6CE8\u5165\uFF0C\u7406\u6240\u5F53\u7136\u5730\u8981\u5728\u8F93\u5165\u53C2\u6570\u4E0A\u4E0B\u529F\u592B\u3002\u4E0A\u9762\u4EE3\u7801\u4E2D\u4F7F\u7528#\u7684\u5373\u8F93\u5165\u53C2\u6570\u5728SQL\u4E2D\u62FC\u63A5\u7684\u90E8\u5206\uFF0C\u4F20\u5165\u53C2\u6570\u540E\uFF0C\u6253\u5370\u51FA\u6267\u884C\u7684SQL\u8BED\u53E5\uFF0C\u4F1A\u770B\u5230SQL\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> id<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> role <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> username<span class="token operator">=</span>? <span class="token operator">and</span> password<span class="token operator">=</span>?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0D\u7BA1\u8F93\u5165\u4EC0\u4E48\u53C2\u6570\uFF0C\u6253\u5370\u51FA\u7684SQL\u90FD\u662F\u8FD9\u6837\u7684\u3002\u8FD9\u662F\u56E0\u4E3AMyBatis\u542F\u7528\u4E86\u9884\u7F16\u8BD1\u529F\u80FD\uFF0C\u5728SQL\u6267\u884C\u524D\uFF0C\u4F1A\u5148\u5C06\u4E0A\u9762\u7684SQL\u53D1\u9001\u7ED9\u6570\u636E\u5E93\u8FDB\u884C\u7F16\u8BD1\uFF1B\u6267\u884C\u65F6\uFF0C\u76F4\u63A5\u4F7F\u7528\u7F16\u8BD1\u597D\u7684SQL\uFF0C\u66FF\u6362\u5360\u4F4D\u7B26\u201C?\u201D\u5C31\u53EF\u4EE5\u4E86\u3002\u56E0\u4E3ASQL\u6CE8\u5165\u53EA\u80FD\u5BF9\u7F16\u8BD1\u8FC7\u7A0B\u8D77\u4F5C\u7528\uFF0C\u6240\u4EE5\u8FD9\u6837\u7684\u65B9\u5F0F\u5C31\u5F88\u597D\u5730\u907F\u514D\u4E86SQL\u6CE8\u5165\u7684\u95EE\u9898\u3002</p><h3 id="_3-1-\u5E95\u5C42\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5E95\u5C42\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 3.1 \u5E95\u5C42\u5B9E\u73B0\u539F\u7406</h3><p>MyBatis\u662F\u5982\u4F55\u505A\u5230SQL\u9884\u7F16\u8BD1\u7684\u5462\uFF1F\u5176\u5B9E\u5728\u6846\u67B6\u5E95\u5C42\uFF0C\u662FJDBC\u4E2D\u7684PreparedStatement\u7C7B\u5728\u8D77\u4F5C\u7528\uFF0CPreparedStatement\u662F\u6211\u4EEC\u5F88\u719F\u6089\u7684Statement\u7684\u5B50\u7C7B\uFF0C\u5B83\u7684\u5BF9\u8C61\u5305\u542B\u4E86\u7F16\u8BD1\u597D\u7684SQL\u8BED\u53E5\u3002\u8FD9\u79CD\u201C\u51C6\u5907\u597D\u201D\u7684\u65B9\u5F0F\u4E0D\u4EC5\u80FD\u63D0\u9AD8\u5B89\u5168\u6027\uFF0C\u800C\u4E14\u5728\u591A\u6B21\u6267\u884C\u540C\u4E00\u4E2ASQL\u65F6\uFF0C\u80FD\u591F\u63D0\u9AD8\u6548\u7387\u3002\u539F\u56E0\u662FSQL\u5DF2\u7F16\u8BD1\u597D\uFF0C\u518D\u6B21\u6267\u884C\u65F6\u65E0\u9700\u518D\u7F16\u8BD1\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u5B89\u5168\u7684\uFF0C\u9884\u7F16\u8BD1\u4E86\u7684</span>
<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token function">getConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u5F97\u8FDE\u63A5</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id, username, password, role from user where id=?&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u6267\u884Csql\u524D\u4F1A\u9884\u7F16\u8BD1\u53F7\u8BE5\u6761\u8BED\u53E5</span>
<span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span> 
pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">ResultSet</span> rs<span class="token operator">=</span>pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u4E0D\u5B89\u5168\u7684\uFF0C\u6CA1\u8FDB\u884C\u9884\u7F16\u8BD1</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getNameByUserId</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token function">getConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u5F97\u8FDE\u63A5</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id,username,password,role from user where id=&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>
    <span class="token comment">//\u5F53id\u53C2\u6570\u4E3A&quot;3;drop table user;&quot;\u65F6\uFF0C\u6267\u884C\u7684sql\u8BED\u53E5\u5982\u4E0B:</span>
    <span class="token comment">//select id,username,password,role from user where id=3; drop table user;  </span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span>  conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ResultSet</span> rs<span class="token operator">=</span>pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7ED3\u8BBA" aria-hidden="true">#</a> 3.2 \u7ED3\u8BBA</h3><p>#{}\uFF1A\u76F8\u5F53\u4E8EJDBC\u4E2D\u7684PreparedStatement</p><p>\${}\uFF1A\u662F\u8F93\u51FA\u53D8\u91CF\u7684\u503C</p><p>\u7B80\u5355\u8BF4\uFF0C#{}\u662F\u7ECF\u8FC7\u9884\u7F16\u8BD1\u7684\uFF0C\u662F\u5B89\u5168\u7684\uFF1B\${}\u662F\u672A\u7ECF\u8FC7\u9884\u7F16\u8BD1\u7684\uFF0C\u4EC5\u4EC5\u662F\u53D6\u53D8\u91CF\u7684\u503C\uFF0C\u662F\u975E\u5B89\u5168\u7684\uFF0C\u5B58\u5728SQL\u6CE8\u5165\u3002 \u5982\u679C\u6211\u4EECorder by\u8BED\u53E5\u540E\u7528\u4E86\${}\uFF0C\u90A3\u4E48\u4E0D\u505A\u4EFB\u4F55\u5904\u7406\u7684\u65F6\u5019\u662F\u5B58\u5728SQL\u6CE8\u5165\u5371\u9669\u7684\u3002\u4F60\u8BF4\u600E\u4E48\u9632\u6B62\uFF0C\u90A3\u6211\u53EA\u80FD\u60B2\u60E8\u7684\u544A\u8BC9\u4F60\uFF0C\u4F60\u5F97\u624B\u52A8\u5904\u7406\u8FC7\u6EE4\u4E00\u4E0B\u8F93\u5165\u7684\u5185\u5BB9\u3002\u5982\u5224\u65AD\u4E00\u4E0B\u8F93\u5165\u7684\u53C2\u6570\u7684\u957F\u5EA6\u662F\u5426\u6B63\u5E38\uFF08\u6CE8\u5165\u8BED\u53E5\u4E00\u822C\u5F88\u957F\uFF09\uFF0C\u66F4\u7CBE\u786E\u7684\u8FC7\u6EE4\u5219\u53EF\u4EE5\u67E5\u8BE2\u4E00\u4E0B\u8F93\u5165\u7684\u53C2\u6570\u662F\u5426\u5728\u9884\u671F\u7684\u53C2\u6570\u96C6\u5408\u4E2D\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,24),u={href:"https://zhuanlan.zhihu.com/p/39408398",target:"_blank",rel:"noopener noreferrer"},d=l("mybatis\u662F\u5982\u4F55\u9632\u6B62SQL\u6CE8\u5165\u7684");function k(m,v){const n=c("ExternalLinkIcon");return e(),t("div",null,[i,s("p",null,[s("a",u,[d,p(n)])])])}const g=a(r,[["render",k],["__file","mybatis-z-injection.html.vue"]]);export{g as default};
