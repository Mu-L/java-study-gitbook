import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as l,a as e,b as s,e as i,d as n,r as o}from"./app.5d5ee434.js";const r={},c=i('<h1 id="jedispool\u8D44\u6E90\u6C60\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#jedispool\u8D44\u6E90\u6C60\u4F18\u5316" aria-hidden="true">#</a> JedisPool\u8D44\u6E90\u6C60\u4F18\u5316</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u5408\u7406\u7684jedisPool \u8D44\u6E90\u6C60\u53C2\u6570\u8BBE\u7F6E\u80FD\u4E3A\u4E1A\u52A1\u4F7F\u7528Redis\u4FDD\u9A7E\u62A4\u822A\uFF0C\u672C\u6587\u5C06\u5BF9JedisPool\u7684\u4F7F\u7528\u3001\u8D44\u6E90\u6C60\u7684\u53C2\u6570\u8FDB\u884C\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u6700\u540E\u7ED9\u51FA\u201C\u6700\u5408\u7406\u201D\u7684\u914D\u7F6E</p><h2 id="_2-\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> 2. \u4F7F\u7528\u65B9\u6CD5</h2><h3 id="_2-1-\u4F9D\u8D56\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4F9D\u8D56\u5173\u7CFB" aria-hidden="true">#</a> 2.1 \u4F9D\u8D56\u5173\u7CFB</h3>',5),p=n("\u4EE5\u5B98\u65B9\u76842.9.0\u4E3A\u4F8B\u5B50("),u={href:"https://github.com/xetorthio/jedis/releases",target:"_blank",rel:"noopener noreferrer"},m=n("Jedis Release"),v=n(")\uFF0CMaven\u4F9D\u8D56\u5982\u4E0B\uFF1A"),h=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
&lt;dependency&gt;
    &lt;groupId&gt;redis.clients&lt;/groupId&gt;
    &lt;artifactId&gt;jedis&lt;/artifactId&gt;
    &lt;version&gt;2.9.0&lt;/version&gt;
    &lt;scope&gt;compile&lt;/scope&gt;
&lt;/dependency&gt;
	
&lt;dependency&gt;
	&lt;groupId&gt;org.apache.commons&lt;/groupId&gt;
	&lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;
	&lt;optional&gt;true&lt;/optional&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jedis\u4F7F\u7528apache commons-pool2\u5BF9Jedis\u8D44\u6E90\u6C60\u8FDB\u884C\u7BA1\u7406\uFF0C\u6240\u4EE5\u5728\u5B9A\u4E49JedisPool\u65F6\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u53C2\u6570\u5C31\u662F\u8D44\u6E90\u6C60GenericObjectPoolConfig\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF0C\u5176\u4E2D\u6709\u5F88\u591A\u8D44\u6E90\u7BA1\u7406\u548C\u4F7F\u7528\u7684\u53C2\u6570(\u5177\u4F53\u770B\u7B2C\u4E8C\u8282)</p><p><strong>\u6CE8\u610F\uFF1A\u540E\u9762\u4F1A\u63D0\u5230\u5EFA\u8BAE\u7528JedisPoolConfig\u4EE3\u66FFGenericObjectPoolConfig</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">GenericObjectPoolConfig</span> jedisPoolConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericObjectPoolConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
jedisPoolConfig<span class="token punctuation">.</span><span class="token function">setMaxTotal</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
jedisPoolConfig<span class="token punctuation">.</span><span class="token function">setMaxIdle</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
jedisPoolConfig<span class="token punctuation">.</span><span class="token function">setMinIdle</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
jedisPoolConfig<span class="token punctuation">.</span><span class="token function">setMaxWaitMillis</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JedisPool\u7684\u521D\u59CB\u5316\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// redisHost\u548CredisPort\u662F\u5B9E\u4F8B\u7684IP\u548C\u7AEF\u53E3
// redisPassword\u662F\u5B9E\u4F8B\u7684\u5BC6\u7801
// timeout\uFF0C\u8FD9\u91CC\u65E2\u662F\u8FDE\u63A5\u8D85\u65F6\u53C8\u662F\u8BFB\u5199\u8D85\u65F6\uFF0C\u4ECEJedis 2.8\u5F00\u59CB\u6709\u533A\u5206connectionTimeout\u548CsoTimeout\u7684\u6784\u9020\u51FD\u6570

JedisPool jedisPool = new JedisPool(jedisPoolConfig, redisHost, redisPort, timeout, redisPassword);
\u6267\u884C\u547D\u4EE4\u5982\u4E0B\uFF1A
Jedis jedis = null;
try {
    jedis = jedisPool.getResource();
    //\u5177\u4F53\u7684\u547D\u4EE4
    jedis.executeCommand()
} catch (Exception e) {
    logger.error(e.getMessage(), e);
} finally {
    //\u6CE8\u610F\u8FD9\u91CC\u4E0D\u662F\u5173\u95ED\u8FDE\u63A5\uFF0C\u5728JedisPool\u6A21\u5F0F\u4E0B\uFF0CJedis\u4F1A\u88AB\u5F52\u8FD8\u7ED9\u8D44\u6E90\u6C60\u3002
    if (jedis != null) 
        jedis.close();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_3-\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> 3. \u53C2\u6570\u8BF4\u660E</h2><p>JedisPool\u4FDD\u8BC1\u8D44\u6E90\u5728\u4E00\u4E2A\u53EF\u63A7\u8303\u56F4\u5185\uFF0C<strong>\u5E76\u4E14\u63D0\u4F9B\u4E86\u7EBF\u7A0B\u5B89\u5168</strong>\uFF0C\u4F46\u662F\u4E00\u4E2A\u5408\u7406\u7684GenericObjectPoolConfig\u914D\u7F6E\u80FD\u4E3A\u5E94\u7528\u4F7F\u7528Redis\u4FDD\u9A7E\u62A4\u822A\uFF0C\u4E0B\u9762\u5C06\u5BF9\u5B83\u7684\u4E00\u4E9B\u91CD\u8981\u53C2\u6570\u8FDB\u884C\u8BF4\u660E\u548C\u5EFA\u8BAE\uFF1A</p><p>\u5728\u5F53\u524D\u73AF\u5883\u4E0B\uFF0CJedis\u8FDE\u63A5\u5C31\u662F\u8D44\u6E90\uFF0CJedisPool\u7BA1\u7406\u7684\u5C31\u662FJedis\u8FDE\u63A5\u3002</p><h3 id="_3-1-\u8D44\u6E90\u8BBE\u7F6E\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8D44\u6E90\u8BBE\u7F6E\u548C\u4F7F\u7528" aria-hidden="true">#</a> 3.1 \u8D44\u6E90\u8BBE\u7F6E\u548C\u4F7F\u7528</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>\u53C2\u6570\u540D</th><th>\u542B\u4E49</th><th>\u9ED8\u8BA4\u503C</th><th>\u4F7F\u7528\u5EFA\u8BAE</th></tr></thead><tbody><tr><td>1</td><td>maxTotal</td><td>\u8D44\u6E90\u6C60\u4E2D\u6700\u5927\u8FDE\u63A5\u6570</td><td>8</td><td>\u8BBE\u7F6E\u5EFA\u8BAE\u89C1\u4E0B\u8282</td></tr><tr><td>2</td><td>maxIdle</td><td>\u8D44\u6E90\u6C60\u5141\u8BB8\u6700\u5927\u7A7A\u95F2\u7684\u8FDE\u63A5\u6570</td><td>8</td><td>\u8BBE\u7F6E\u5EFA\u8BAE\u89C1\u4E0B\u8282</td></tr><tr><td>3</td><td>minIdle</td><td>\u8D44\u6E90\u6C60\u786E\u4FDD\u6700\u5C11\u7A7A\u95F2\u7684\u8FDE\u63A5\u6570</td><td>0</td><td>\u8BBE\u7F6E\u5EFA\u8BAE\u89C1\u4E0B\u8282</td></tr><tr><td>4</td><td>blockWhenExhausted</td><td>\u5F53\u8D44\u6E90\u6C60\u7528\u5C3D\u540E\uFF0C\u8C03\u7528\u8005\u662F\u5426\u8981\u7B49\u5F85\u3002\u53EA\u6709\u5F53\u4E3Atrue\u65F6\uFF0C\u4E0B\u9762\u7684maxWaitMillis\u624D\u4F1A\u751F\u6548</td><td>true</td><td>\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u503C</td></tr><tr><td>5</td><td>maxWaitMillis</td><td>\u5F53\u8D44\u6E90\u6C60\u8FDE\u63A5\u7528\u5C3D\u540E\uFF0C\u8C03\u7528\u8005\u7684\u6700\u5927\u7B49\u5F85\u65F6\u95F4(\u5355\u4F4D\u4E3A\u6BEB\u79D2)</td><td>-1\uFF1A\u8868\u793A\u6C38\u4E0D\u8D85\u65F6</td><td>\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u503C</td></tr><tr><td>6</td><td>testOnBorrow</td><td>\u5411\u8D44\u6E90\u6C60\u501F\u7528\u8FDE\u63A5\u65F6\u662F\u5426\u505A\u8FDE\u63A5\u6709\u6548\u6027\u68C0\u6D4B(ping)\uFF0C\u65E0\u6548\u8FDE\u63A5\u4F1A\u88AB\u79FB\u9664</td><td>false</td><td>\u4E1A\u52A1\u91CF\u5F88\u5927\u65F6\u5019\u5EFA\u8BAE\u8BBE\u7F6E\u4E3Afalse(\u591A\u4E00\u6B21ping\u7684\u5F00\u9500)\u3002</td></tr><tr><td>7</td><td>testOnReturn</td><td>\u5411\u8D44\u6E90\u6C60\u5F52\u8FD8\u8FDE\u63A5\u65F6\u662F\u5426\u505A\u8FDE\u63A5\u6709\u6548\u6027\u68C0\u6D4B(ping)\uFF0C\u65E0\u6548\u8FDE\u63A5\u4F1A\u88AB\u79FB\u9664</td><td>false</td><td>\u4E1A\u52A1\u91CF\u5F88\u5927\u65F6\u5019\u5EFA\u8BAE\u8BBE\u7F6E\u4E3Afalse(\u591A\u4E00\u6B21ping\u7684\u5F00\u9500)\u3002</td></tr><tr><td>8</td><td>jmxEnabled</td><td>\u662F\u5426\u5F00\u542Fjmx\u76D1\u63A7\uFF0C\u53EF\u7528\u4E8E\u76D1\u63A7</td><td>true</td><td>\u5EFA\u8BAE\u5F00\u542F\uFF0C\u4F46\u5E94\u7528\u672C\u8EAB\u4E5F\u8981\u5F00\u542F</td></tr></tbody></table><h3 id="_3-2-\u7A7A\u95F2\u8D44\u6E90\u76D1\u6D4B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7A7A\u95F2\u8D44\u6E90\u76D1\u6D4B" aria-hidden="true">#</a> 3.2 \u7A7A\u95F2\u8D44\u6E90\u76D1\u6D4B</h3><p>\u7A7A\u95F2Jedis\u5BF9\u8C61\u68C0\u6D4B\uFF0C\u4E0B\u9762\u56DB\u4E2A\u53C2\u6570\u7EC4\u5408\u6765\u5B8C\u6210\uFF0CtestWhileIdle\u662F\u8BE5\u529F\u80FD\u7684\u5F00\u5173\u3002</p><table><thead><tr><th>\u5E8F\u53F7</th><th>\u53C2\u6570\u540D</th><th>\u542B\u4E49</th><th>\u9ED8\u8BA4\u503C</th><th>\u4F7F\u7528\u5EFA\u8BAE</th></tr></thead><tbody><tr><td>1</td><td>testWhileIdle</td><td>\u662F\u5426\u5F00\u542F\u7A7A\u95F2\u8D44\u6E90\u76D1\u6D4B</td><td>false</td><td>true</td></tr><tr><td>2</td><td>timeBetweenEvictionRunsMillis</td><td>\u7A7A\u95F2\u8D44\u6E90\u7684\u68C0\u6D4B\u5468\u671F(\u5355\u4F4D\u4E3A\u6BEB\u79D2)</td><td>-1\uFF1A\u4E0D\u68C0\u6D4B</td><td>\u5EFA\u8BAE\u8BBE\u7F6E\uFF0C\u5468\u671F\u81EA\u884C\u9009\u62E9\uFF0C\u4E5F\u53EF\u4EE5\u9ED8\u8BA4\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762JedisPoolConfig\u4E2D\u7684\u914D\u7F6E</td></tr><tr><td>3</td><td>minEvictableIdleTimeMillis</td><td>\u8D44\u6E90\u6C60\u4E2D\u8D44\u6E90\u6700\u5C0F\u7A7A\u95F2\u65F6\u95F4(\u5355\u4F4D\u4E3A\u6BEB\u79D2)\uFF0C\u8FBE\u5230\u6B64\u503C\u540E\u7A7A\u95F2\u8D44\u6E90\u5C06\u88AB\u79FB\u9664</td><td>1000<em>60</em> 30 = 30\u5206\u949F</td><td>\u53EF\u6839\u636E\u81EA\u8EAB\u4E1A\u52A1\u51B3\u5B9A\uFF0C\u5927\u90E8\u5206\u9ED8\u8BA4\u503C\u5373\u53EF\uFF0C\u4E5F\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u4E0B\u9762JeidsPoolConfig\u4E2D\u7684\u914D\u7F6E</td></tr><tr><td>4</td><td>numTestsPerEvictionRun</td><td>\u505A\u7A7A\u95F2\u8D44\u6E90\u68C0\u6D4B\u65F6\uFF0C\u6BCF\u6B21\u7684\u91C7\u6837\u6570</td><td>3</td><td>\u53EF\u6839\u636E\u81EA\u8EAB\u5E94\u7528\u8FDE\u63A5\u6570\u8FDB\u884C\u5FAE\u8C03,\u5982\u679C\u8BBE\u7F6E\u4E3A-1\uFF0C\u5C31\u662F\u5BF9\u6240\u6709\u8FDE\u63A5\u505A\u7A7A\u95F2\u76D1\u6D4B</td></tr></tbody></table><p>\u4E3A\u4E86\u65B9\u4FBF\u4F7F\u7528\uFF0CJedis\u63D0\u4F9B\u4E86JedisPoolConfig\uFF0C\u5B83\u672C\u8EAB\u7EE7\u627F\u4E86GenericObjectPoolConfig\u8BBE\u7F6E\u4E86\u4E00\u4E9B\u7A7A\u95F2\u76D1\u6D4B\u8BBE\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class JedisPoolConfig extends GenericObjectPoolConfig {
  public JedisPoolConfig() {
    // defaults to make your life with connection pool easier :)
    setTestWhileIdle(true);
    //
    setMinEvictableIdleTimeMillis(60000);
    //
    setTimeBetweenEvictionRunsMillis(30000);
    setNumTestsPerEvictionRun(-1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u6709\u9ED8\u8BA4\u503C\u53EF\u4EE5\u4ECEorg.apache.commons.pool2.impl.BaseObjectPoolConfig\u4E2D\u770B\u5230\u3002</p><h2 id="_4-\u8D44\u6E90\u6C60\u5927\u5C0F-maxtotal-\u3001\u7A7A\u95F2-maxidle-minidle-\u8BBE\u7F6E\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#_4-\u8D44\u6E90\u6C60\u5927\u5C0F-maxtotal-\u3001\u7A7A\u95F2-maxidle-minidle-\u8BBE\u7F6E\u5EFA\u8BAE" aria-hidden="true">#</a> 4. \u8D44\u6E90\u6C60\u5927\u5C0F(maxTotal)\u3001\u7A7A\u95F2(maxIdle minIdle)\u8BBE\u7F6E\u5EFA\u8BAE</h2><h3 id="_4-1-maxtotal-\u6700\u5927\u8FDE\u63A5\u6570" tabindex="-1"><a class="header-anchor" href="#_4-1-maxtotal-\u6700\u5927\u8FDE\u63A5\u6570" aria-hidden="true">#</a> 4.1.maxTotal\uFF1A\u6700\u5927\u8FDE\u63A5\u6570</h3><p>\u5B9E\u9645\u4E0A\u8FD9\u4E2A\u662F\u4E00\u4E2A\u5F88\u96BE\u56DE\u7B54\u7684\u95EE\u9898\uFF0C\u8003\u8651\u7684\u56E0\u7D20\u6BD4\u8F83\u591A\uFF1A</p><ul><li>\u4E1A\u52A1\u5E0C\u671BRedis\u5E76\u53D1\u91CF</li><li>\u5BA2\u6237\u7AEF\u6267\u884C\u547D\u4EE4\u65F6\u95F4</li><li>Redis\u8D44\u6E90\uFF1A\u4F8B\u5982 nodes(\u4F8B\u5982\u5E94\u7528\u4E2A\u6570) * maxTotal \u662F\u4E0D\u80FD\u8D85\u8FC7redis\u7684\u6700\u5927\u8FDE\u63A5\u6570\u3002</li><li>\u8D44\u6E90\u5F00\u9500\uFF1A\u4F8B\u5982\u867D\u7136\u5E0C\u671B\u63A7\u5236\u7A7A\u95F2\u8FDE\u63A5\uFF0C\u4F46\u662F\u4E0D\u5E0C\u671B\u56E0\u4E3A\u8FDE\u63A5\u6C60\u7684\u9891\u7E41\u91CA\u653E\u521B\u5EFA\u8FDE\u63A5\u9020\u6210\u4E0D\u5FC5\u9760\u5F00\u9500\u3002</li></ul><p>\u4EE5\u4E00\u4E2A\u4F8B\u5B50\u8BF4\u660E\uFF0C\u5047\u8BBE:</p><ul><li>\u4E00\u6B21\u547D\u4EE4\u65F6\u95F4\uFF08borrow|return resource + Jedis\u6267\u884C\u547D\u4EE4(\u542B\u7F51\u7EDC) \uFF09\u7684\u5E73\u5747\u8017\u65F6\u7EA6\u4E3A1ms\uFF0C\u4E00\u4E2A\u8FDE\u63A5\u7684QPS\u5927\u7EA6\u662F1000</li><li>\u4E1A\u52A1\u671F\u671B\u7684QPS\u662F50000</li></ul><p>\u90A3\u4E48\u7406\u8BBA\u4E0A\u9700\u8981\u7684\u8D44\u6E90\u6C60\u5927\u5C0F\u662F50000 / 1000 = 50\u4E2A\u3002\u4F46\u4E8B\u5B9E\u4E0A\u8FD9\u662F\u4E2A\u7406\u8BBA\u503C\uFF0C\u8FD8\u8981\u8003\u8651\u5230\u8981\u6BD4\u7406\u8BBA\u503C\u9884\u7559\u4E00\u4E9B\u8D44\u6E90\uFF0C\u901A\u5E38\u6765\u8BB2maxTotal\u53EF\u4EE5\u6BD4\u7406\u8BBA\u503C\u5927\u4E00\u4E9B\u3002</p><p>\u4F46\u8FD9\u4E2A\u503C\u4E0D\u662F\u8D8A\u5927\u8D8A\u597D\uFF0C\u4E00\u65B9\u9762\u8FDE\u63A5\u592A\u591A\u5360\u7528\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u8D44\u6E90\uFF0C\u53E6\u4E00\u65B9\u9762\u5BF9\u4E8ERedis\u8FD9\u79CD\u9AD8QPS\u7684\u670D\u52A1\u5668\uFF0C\u4E00\u4E2A\u5927\u547D\u4EE4\u7684\u963B\u585E\u5373\u4F7F\u8BBE\u7F6E\u518D\u5927\u8D44\u6E90\u6C60\u4ECD\u7136\u4F1A\u65E0\u6D4E\u4E8E\u4E8B\u3002</p><h3 id="_4-2-maxidle-minidle" tabindex="-1"><a class="header-anchor" href="#_4-2-maxidle-minidle" aria-hidden="true">#</a> 4.2. maxIdle minIdle</h3><p>maxIdle\u5B9E\u9645\u4E0A\u624D\u662F\u4E1A\u52A1\u9700\u8981\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF0CmaxTotal\u662F\u4E3A\u4E86\u7ED9\u51FA\u4F59\u91CF\uFF0C\u6240\u4EE5maxIdle\u4E0D\u8981\u8BBE\u7F6E\u8FC7\u5C0F\uFF0C\u5426\u5219\u4F1A\u6709new Jedis(\u65B0\u8FDE\u63A5)\u5F00\u9500\uFF0C\u800CminIdle\u662F\u4E3A\u4E86\u63A7\u5236\u7A7A\u95F2\u8D44\u6E90\u76D1\u6D4B\u3002</p><p>\u8FDE\u63A5\u6C60\u7684\u6700\u4F73\u6027\u80FD\u662FmaxTotal = maxIdle ,\u8FD9\u6837\u5C31\u907F\u514D\u8FDE\u63A5\u6C60\u4F38\u7F29\u5E26\u6765\u7684\u6027\u80FD\u5E72\u6270\u3002\u4F46\u662F\u5982\u679C\u5E76\u53D1\u91CF\u4E0D\u5927\u6216\u8005maxTotal\u8BBE\u7F6E\u8FC7\u9AD8\uFF0C\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u8FDE\u63A5\u8D44\u6E90\u6D6A\u8D39\u3002 \u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u603BOPS\u548C\u8C03\u7528redis\u5BA2\u6237\u7AEF\u7684\u89C4\u6A21\u6574\u4F53\u8BC4\u4F30\u6BCF\u4E2A\u8282\u70B9\u6240\u4F7F\u7528\u7684\u8FDE\u63A5\u6C60\u3002</p><h3 id="_4-3-\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#_4-3-\u76D1\u63A7" aria-hidden="true">#</a> 4.3.\u76D1\u63A7</h3><p>\u5B9E\u9645\u4E0A\u6700\u9760\u8C31\u7684\u503C\u662F\u901A\u8FC7\u76D1\u63A7\u6765\u5F97\u5230\u201C\u6700\u4F73\u503C\u201D\u7684\uFF0C\u53EF\u4EE5\u8003\u8651\u901A\u8FC7\u4E00\u4E9B\u624B\u6BB5(\u4F8B\u5982jmx)\u5B9E\u73B0\u76D1\u63A7\uFF0C\u627E\u5230\u5408\u7406\u503C\u3002</p><h3 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h3>`,31),b={href:"http://blog.didispace.com/JedisPool%E8%B5%84%E6%BA%90%E6%B1%A0%E4%BC%98%E5%8C%96/",target:"_blank",rel:"noopener noreferrer"},g=n("JedisPool\u8D44\u6E90\u6C60\u4F18\u5316");function x(f,_){const t=o("ExternalLinkIcon");return d(),l("div",null,[c,e("p",null,[p,e("a",u,[m,s(t)]),v]),h,e("p",null,[e("a",b,[g,s(t)])])])}var j=a(r,[["render",x],["__file","JedisPool\u8D44\u6E90\u6C60\u4F18\u5316.html.vue"]]);export{j as default};
