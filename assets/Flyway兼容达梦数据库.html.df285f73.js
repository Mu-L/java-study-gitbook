import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e}from"./app.4b9ee468.js";const t={},i=e(`<h1 id="flyway\u517C\u5BB9\u8FBE\u68A6\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#flyway\u517C\u5BB9\u8FBE\u68A6\u6570\u636E\u5E93" aria-hidden="true">#</a> Flyway\u517C\u5BB9\u8FBE\u68A6\u6570\u636E\u5E93</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><h2 id="_2-\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539" aria-hidden="true">#</a> 2. \u4FEE\u6539</h2><h3 id="_2-1-\u5C06pom\u6587\u4EF6-\u79FB\u5230\u6839\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5C06pom\u6587\u4EF6-\u79FB\u5230\u6839\u76EE\u5F55" aria-hidden="true">#</a> 2.1 \u5C06pom\u6587\u4EF6\uFF0C\u79FB\u5230\u6839\u76EE\u5F55</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921202513182.png" alt="image-20210921202513182" loading="lazy"></p><ol><li>\u5C06META-INF\u6587\u4EF6\u5939\u4E0B\u7684pom\u6587\u4EF6\u79FB\u5230\u6839\u76EE\u5F55</li><li>\u5E76\u66F4\u65B0</li></ol><h3 id="_2-2-\u65B0\u5EFAsrc-main-java-\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B0\u5EFAsrc-main-java-\u6587\u4EF6\u5939" aria-hidden="true">#</a> 2.2 \u65B0\u5EFAsrc/main/java \u6587\u4EF6\u5939</h3><ol><li>\u65B0\u5EFAsrc/main/java \u6587\u4EF6\u5939</li><li>\u65B0\u5EFAsrc/main/resources \u6587\u4EF6\u5939</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921202029009.png" alt="image-20210921202029009" loading="lazy"></p><h3 id="_2-2-\u5C06org\u5305\u4E0B\u7684\u6E90\u7801\u79FB\u5165java\u76EE\u5F55\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5C06org\u5305\u4E0B\u7684\u6E90\u7801\u79FB\u5165java\u76EE\u5F55\u4E0B" aria-hidden="true">#</a> 2.2 \u5C06org\u5305\u4E0B\u7684\u6E90\u7801\u79FB\u5165java\u76EE\u5F55\u4E0B</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921202229371.png" alt="image-20210921202229371" loading="lazy"></p><h2 id="_1-\u89E3\u538B\u51FA\u6765\u7684\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_1-\u89E3\u538B\u51FA\u6765\u7684\u5185\u5BB9" aria-hidden="true">#</a> 1. \u89E3\u538B\u51FA\u6765\u7684\u5185\u5BB9</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921161054646.png" alt="image-20210921161054646" loading="lazy"></p><p>\u65B0\u5EFAsrc \u548C resource \u6587\u4EF6\u5939\uFF0C\u5C06org \u6587\u4EF6\u5939\u79FB\u52A8\u5230src\u6587\u4EF6\u5939\u4E2D</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921161200504.png" alt="image-20210921161200504" loading="lazy"></p><p>\u5C06META-INF\u6587\u4EF6\u5939\u4E0B\u7684pom\u6587\u4EF6\uFF0C\u79FB\u5230\u6839\u76EE\u5F55</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921161521951.png" alt="image-20210921161521951" loading="lazy"></p><p>\u5728modules \u4E2D\u5C06src \u8BBE\u7F6E\u6210sources \uFF0C\u5C06resource \u8BBE\u7F6E\u6210resources</p><ul><li>\u65B9\u5F0F\u4E00\uFF1A</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921161705098.png" alt="image-20210921161705098" loading="lazy"></p><ul><li>\u65B9\u5F0F\u4E8C\uFF1A</li><li><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921165133285.png" alt="image-20210921165133285" loading="lazy"></li></ul><p>\u5168\u5C40\u641C\u7D22 databaseProductName.startsWith(&quot;Oracle&quot;)</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921162215933.png" alt="image-20210921162215933" loading="lazy"></p><p>\u589E\u52A0||databaseProductName.startsWith(&quot;DM&quot;)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (databaseProductName.startsWith(&quot;Oracle&quot;)||databaseProductName.startsWith(&quot;DM&quot;)) {
            return ORACLE;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-mysql\u96C6\u6210\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-mysql\u96C6\u6210\u6D4B\u8BD5" aria-hidden="true">#</a> 3. MySql\u96C6\u6210\u6D4B\u8BD5</h2><h3 id="_3-1-\u6DFB\u52A0mysql-\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6DFB\u52A0mysql-\u4F9D\u8D56" aria-hidden="true">#</a> 3.1 \u6DFB\u52A0mysql \u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u6DFB\u52A0\u6D4B\u8BD5\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6DFB\u52A0\u6D4B\u8BD5\u7C7B" aria-hidden="true">#</a> 3.2 \u6DFB\u52A0\u6D4B\u8BD5\u7C7B</h3><p>\u7B2C\u4E00\u6B65\u5148\u6267\u884Cbaseline,\u4E4B\u540E\u624D\u80FD\u6267\u884Cmigrate</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>flywaydb<span class="token punctuation">.</span>core</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Flyway</span> flyway <span class="token operator">=</span> <span class="token class-name">Flyway</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://47.119.125.3:3306/ygn?useUnicode=true&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ywt123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        \u7B2C\u4E00\u6B65\u5148\u6267\u884Cbaseline,\u4E4B\u540E\u624D\u80FD\u6267\u884Cmigrate                 </span>
        flyway<span class="token punctuation">.</span><span class="token function">baseline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        flyway.migrate();</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6267\u884C\u5B8C\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u6570\u636E\u5E93\u65B0\u589E\u8868-flyway-schema-history" tabindex="-1"><a class="header-anchor" href="#_3-3-\u6570\u636E\u5E93\u65B0\u589E\u8868-flyway-schema-history" aria-hidden="true">#</a> 3.3 \u6570\u636E\u5E93\u65B0\u589E\u8868 flyway_schema_history</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921165644716.png" alt="image-20210921165644716" loading="lazy"></p><p>\u8868\u5185\u5BB9\u5982\u4E0B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921165652823.png" alt="image-20210921165652823" loading="lazy"></p><h2 id="_4-\u8FBE\u68A6\u96C6\u6210\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-\u8FBE\u68A6\u96C6\u6210\u6D4B\u8BD5" aria-hidden="true">#</a> 4. \u8FBE\u68A6\u96C6\u6210\u6D4B\u8BD5</h2><h3 id="_4-1-\u6DFB\u52A0dm\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6DFB\u52A0dm\u4F9D\u8D56" aria-hidden="true">#</a> 4.1 \u6DFB\u52A0dm\u4F9D\u8D56</h3><div class="language-pom ext-pom line-numbers-mode"><pre class="language-pom"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.dm&lt;/groupId&gt;
    &lt;artifactId&gt;DmJdbcDriver&lt;/artifactId&gt;
    &lt;version&gt;1.8.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-\u4FEE\u6539databasetype" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4FEE\u6539databasetype" aria-hidden="true">#</a> 4.2 \u4FEE\u6539DatabaseType</h3><p>org.flywaydb.core.internal.jdbc.DatabaseType\u7C7B\u4E2D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span>databaseProductName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Oracle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> ORACLE<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u589E\u52A0||databaseProductName.startsWith(&quot;DM&quot;)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span>databaseProductName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Oracle&quot;</span><span class="token punctuation">)</span><span class="token operator">||</span>databaseProductName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;DM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> ORACLE<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-drivertype\u4E2D\u6DFB\u52A0dmdrivertype" tabindex="-1"><a class="header-anchor" href="#_4-3-drivertype\u4E2D\u6DFB\u52A0dmdrivertype" aria-hidden="true">#</a> 4.3 DriverType\u4E2D\u6DFB\u52A0dmDriverType</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DriverDataSource</span> <span class="token keyword">implements</span> <span class="token class-name">DataSource</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">DriverType</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 
  <span class="token function">ORACLE</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:oracle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;oracle.jdbc.OracleDriver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token function">DM</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:dm&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dm.jdbc.driver.DmDriver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-\u6DFB\u52A0\u8FBE\u68A6\u6D4B\u8BD5\u7C7B" tabindex="-1"><a class="header-anchor" href="#_4-4-\u6DFB\u52A0\u8FBE\u68A6\u6D4B\u8BD5\u7C7B" aria-hidden="true">#</a> 4.4 \u6DFB\u52A0\u8FBE\u68A6\u6D4B\u8BD5\u7C7B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Flyway</span> flyway <span class="token operator">=</span> <span class="token class-name">Flyway</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:dm://192.168.0.1:5236&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        \u7B2C\u4E00\u6B65\u5148\u6267\u884Cbaseline,\u4E4B\u540E\u624D\u80FD\u6267\u884Cmigrate</span>
        flyway<span class="token punctuation">.</span><span class="token function">baseline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        flyway.migrate();</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6267\u884C\u5B8C\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h3 id="_4-5-\u5176\u4ED6\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_4-5-\u5176\u4ED6\u4FEE\u6539" aria-hidden="true">#</a> 4.5 \u5176\u4ED6\u4FEE\u6539</h3><p>\u6539\u5B8C\u8FD0\u884C\u53D1\u73B0 Oracle upgrade required: Oracle 8.1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Exception in thread &quot;main&quot; org.flywaydb.core.internal.exception.FlywayDbUpgradeRequiredException: Oracle upgrade required: Oracle 8.1 is outdated and no longer supported by Flyway. Flyway currently supports Oracle 10 and newer.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921173026851.png" alt="image-20210921173026851" loading="lazy"></p><p>\u56E0\u4E3A\u6211\u4EEC\u8FBE\u68A6\u76F4\u63A5\u4F7F\u7528oracle \u7684\u8BED\u6CD5\uFF0C\u4F46\u662F\u7248\u672C\u8FD8\u662F\u8FBE\u68A6\u7684\u3002\u6240\u4EE5\u6211\u4EEC\u76F4\u63A5\u6CE8\u91CA\u6389\u3002\u6709\u4E24\u5904</p><ul><li>\u7B2C\u4E00\u5904\u4E3A\uFF1A</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>   <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">ensureDatabaseIsRecentEnough</span><span class="token punctuation">(</span><span class="token class-name">String</span> oldestSupportedVersion<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        if (!getVersion().isAtLeast(oldestSupportedVersion)) {</span>
<span class="token comment">//            throw new FlywayDbUpgradeRequiredException(databaseType, computeVersionDisplayName(getVersion()),</span>
<span class="token comment">//                    computeVersionDisplayName(MigrationVersion.fromVersion(oldestSupportedVersion)));</span>
<span class="token comment">//        }</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E8C\u5904\u4E3A\uFF1A</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Ensures this database it at least at recent as this version otherwise suggest upgrade to this higher edition of
     * Flyway.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">oldestSupportedVersionInThisEdition</span> The oldest supported version of the database by this edition of Flyway.
     * <span class="token keyword">@param</span> <span class="token parameter">editionWhereStillSupported</span>          The edition of Flyway that still supports this version of the database,
     *                                            in case it&#39;s too old.
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">ensureDatabaseNotOlderThanOtherwiseRecommendUpgradeToFlywayEdition</span><span class="token punctuation">(</span><span class="token class-name">String</span> oldestSupportedVersionInThisEdition<span class="token punctuation">,</span>
                                                                                            <span class="token class-name">Edition</span> editionWhereStillSupported<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        if (!getVersion().isAtLeast(oldestSupportedVersionInThisEdition)) {</span>
<span class="token comment">//            throw new FlywayEditionUpgradeRequiredException(</span>
<span class="token comment">//                    editionWhereStillSupported,</span>
<span class="token comment">//                    databaseType,</span>
<span class="token comment">//                    computeVersionDisplayName(getVersion()));</span>
<span class="token comment">//        }</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-\u518D\u6B21\u8FD0\u884C\u65F6-\u5C31\u80FD\u6B63\u5E38\u8FD0\u884C\u4E86" tabindex="-1"><a class="header-anchor" href="#_4-5-\u518D\u6B21\u8FD0\u884C\u65F6-\u5C31\u80FD\u6B63\u5E38\u8FD0\u884C\u4E86" aria-hidden="true">#</a> 4.5 \u518D\u6B21\u8FD0\u884C\u65F6\uFF0C\u5C31\u80FD\u6B63\u5E38\u8FD0\u884C\u4E86</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921173515577.png" alt="image-20210921173515577" loading="lazy"></p><p>\u4E5F\u6B63\u5E38\u751F\u6210 <code>flyway_schema_history</code></p>`,60),p=[i];function o(l,c){return n(),s("div",null,p)}var d=a(t,[["render",o],["__file","Flyway\u517C\u5BB9\u8FBE\u68A6\u6570\u636E\u5E93.html.vue"]]);export{d as default};
