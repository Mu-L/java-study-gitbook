import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as e,a as s,b as o,e as t,d as l,r}from"./app.4b9ee468.js";const c={},k=t(`<h1 id="group-by\u5206\u7EC4\u53D6\u5B57\u6BB5\u6700\u5927\u503C" tabindex="-1"><a class="header-anchor" href="#group-by\u5206\u7EC4\u53D6\u5B57\u6BB5\u6700\u5927\u503C" aria-hidden="true">#</a> GROUP BY\u5206\u7EC4\u53D6\u5B57\u6BB5\u6700\u5927\u503C</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u5047\u8BBE\u6709\u4E00\u4E2A\u4E1A\u52A1\u573A\u666F\uFF0C\u9700\u8981\u67E5\u8BE2\u7528\u6237\u767B\u5F55\u8BB0\u5F55\u4FE1\u606F\uFF0C\u5176\u4E2D\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>tb<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>uid<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>ip<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>login_time<span class="token punctuation">\`</span></span> <span class="token keyword">datetime</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>uid<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6765\u70B9\u6D4B\u8BD5\u6570\u636E\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb <span class="token keyword">SELECT</span> <span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&#39;192.168.1.1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-01-21 16:30:47&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb <span class="token keyword">SELECT</span> <span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">1003</span><span class="token punctuation">,</span> <span class="token string">&#39;192.168.1.153&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-01-21 19:30:51&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb <span class="token keyword">SELECT</span> <span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&#39;192.168.1.61&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-01-21 16:50:41&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb <span class="token keyword">SELECT</span> <span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">1002</span><span class="token punctuation">,</span> <span class="token string">&#39;192.168.1.31&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-01-21 18:30:21&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb <span class="token keyword">SELECT</span> <span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">1002</span><span class="token punctuation">,</span> <span class="token string">&#39;192.168.1.66&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-01-21 19:12:32&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb <span class="token keyword">SELECT</span> <span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&#39;192.168.1.81&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-01-21 19:53:09&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tb <span class="token keyword">SELECT</span> <span class="token boolean">null</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&#39;192.168.1.231&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-01-21 19:55:34&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8868\u6570\u636E\u60C5\u51B5\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">----+------+---------------+---------------------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> uid  <span class="token operator">|</span> ip            <span class="token operator">|</span> login_time          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+---------------+---------------------+</span>
<span class="token operator">|</span> <span class="token number">1</span>  <span class="token operator">|</span> <span class="token number">1001</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.1</span>   <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">16</span>:<span class="token number">30</span>:<span class="token number">47</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">2</span>  <span class="token operator">|</span> <span class="token number">1003</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.153</span> <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">19</span>:<span class="token number">30</span>:<span class="token number">51</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">3</span>  <span class="token operator">|</span> <span class="token number">1001</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.61</span>  <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">16</span>:<span class="token number">50</span>:<span class="token number">41</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">4</span>  <span class="token operator">|</span> <span class="token number">1002</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.31</span>  <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">18</span>:<span class="token number">30</span>:<span class="token number">21</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">5</span>  <span class="token operator">|</span> <span class="token number">1002</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.66</span>  <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">19</span>:<span class="token number">12</span>:<span class="token number">32</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">6</span>  <span class="token operator">|</span> <span class="token number">1001</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.81</span>  <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">19</span>:<span class="token number">53</span>:<span class="token number">09</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">7</span>  <span class="token operator">|</span> <span class="token number">1001</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.231</span> <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">19</span>:<span class="token number">55</span>:<span class="token number">34</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+---------------+---------------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u82E5\u8FD8\u9700\u8981\u67E5\u8BE2\u7528\u6237\u6700\u540E\u767B\u5F55\u65F6\u7684\u5176\u4ED6\u4FE1\u606F\uFF0C\u5C31\u4E0D\u80FD\u7528\u8FD9\u79CDsql\u5199\u4E86\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u9519\u8BEF\u5199\u6CD5</span>
<span class="token keyword">SELECT</span> uid<span class="token punctuation">,</span> ip<span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span>login_time<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> tb
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> uid<span class="token punctuation">;</span>
<span class="token comment">-- \u9519\u8BEF\u5199\u6CD5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\u8BED\u53E5\u662F\u975ESQL\u6807\u51C6\u7684\uFF0C\u867D\u7136\u80FD\u591F\u5728MySQL\u6570\u636E\u5E93\u4E2D\u6267\u884C\u6210\u529F\uFF0C\u4F46\u8FD4\u56DE\u7684\u5374\u662F\u672A\u77E5\u7684 \uFF08\u5982\u679Csql_mode\u5F00\u542F\u4E86only_full_group_by\uFF0C\u5219\u4E0D\u4F1A\u6267\u884C\u6210\u529F\u3002\uFF09 \u53EF\u80FDip\u5B57\u6BB5\u4F1A\u53D6uid\u5206\u7EC4\u524D\u7684\u7B2C\u4E00\u4E2Arow\u7684\u503C\uFF0C\u663E\u7136\u4E0D\u662F\u6240\u9700\u4FE1\u606F</p><h2 id="_2-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2.\u89E3\u51B3\u65B9\u6848</h2><h3 id="_2-1-\u5199\u6CD51" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5199\u6CD51" aria-hidden="true">#</a> 2.1 \u5199\u6CD51</h3><p>\u5199\u4E00\u4E2A\u5B50\u67E5\u8BE2\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>uid<span class="token punctuation">,</span> a<span class="token punctuation">.</span>ip<span class="token punctuation">,</span> a<span class="token punctuation">.</span>login_time
<span class="token keyword">FROM</span> tb a
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>login_time <span class="token operator">in</span> <span class="token punctuation">(</span>
<span class="token keyword">SELECT</span> <span class="token function">max</span><span class="token punctuation">(</span>login_time<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> tb
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u5B58\u5728\u76F8\u540C\u7684\u767B\u5F55\u65F6\u95F4\uFF0C\u90A3\u4E48\u8BA1\u7B97\u5C06\u4F1A\u9519\u4E71\u5F02\u5E38</p></blockquote><h3 id="_2-2-\u5199\u6CD52" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5199\u6CD52" aria-hidden="true">#</a> 2.2 \u5199\u6CD52</h3><p>\u518D\u6216\u8005\u6362\u4E00\u4E2A\u5199\u6CD5\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>uid<span class="token punctuation">,</span> a<span class="token punctuation">.</span>ip<span class="token punctuation">,</span> a<span class="token punctuation">.</span>login_time
<span class="token keyword">FROM</span> tb a
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>login_time <span class="token operator">=</span> <span class="token punctuation">(</span>
<span class="token keyword">SELECT</span> <span class="token function">max</span><span class="token punctuation">(</span>login_time<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> tb
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>uid <span class="token operator">=</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-1-\u5199\u6CD51\u548C\u5199\u6CD52\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u5199\u6CD51\u548C\u5199\u6CD52\u5BF9\u6BD4" aria-hidden="true">#</a> 2.2.1 \u5199\u6CD51\u548C\u5199\u6CD52\u5BF9\u6BD4</h4><p>\u987A\u4FBF\u6D4B\u4E86\u4E00\u4E0B \u57285.6\u4EE5\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u5199\u6CD5\u2461\u8FD9\u6761sql\u5728\u5927\u6570\u636E\u91CF\u7684\u60C5\u51B5\u4E0B\uFF0C\u6267\u884C\u8BA1\u5212\u4E0D\u7406\u60F3\uFF0C\u76EE\u6D4B\u6027\u80FD\u4E0D\u4F73\u3002 \u57285.6\u53CA\u4EE5\u540E\u7684\u7248\u672C\u4E2D\uFF0C\u5199\u6CD5\u2461\u8FD9\u6761sql\u4F1A\u5FEB\u5F88\u591A\uFF0C\u6267\u884C\u8BA1\u5212\u4E5F\u6709\u4E86\u6539\u53D8 5.5.50\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">----+--------------------+-------+------+---------------+------+---------+------+------+-------------+</span>

<span class="token operator">|</span> id   <span class="token operator">|</span> select_type <span class="token operator">|</span> <span class="token keyword">table</span> <span class="token operator">|</span> <span class="token keyword">type</span> <span class="token operator">|</span> possible_keys <span class="token operator">|</span> <span class="token keyword">key</span>  <span class="token operator">|</span> key_len <span class="token operator">|</span> ref  <span class="token operator">|</span> <span class="token keyword">rows</span> <span class="token operator">|</span> Extra <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token comment">---- | ----------- | ----- | ---- | ------------- | ---- | ------- | ---- | ---- | ----- |</span>
<span class="token operator">|</span>      <span class="token operator">|</span>             <span class="token operator">|</span>       <span class="token operator">|</span>      <span class="token operator">|</span>               <span class="token operator">|</span>      <span class="token operator">|</span>         <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>       <span class="token operator">|</span>

<span class="token operator">+</span><span class="token comment">----+--------------------+-------+------+---------------+------+---------+------+------+-------------+</span>

<span class="token operator">|</span> <span class="token number">1</span>    <span class="token operator">|</span> <span class="token keyword">PRIMARY</span> <span class="token operator">|</span> a    <span class="token operator">|</span> <span class="token keyword">ALL</span>  <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token number">7</span>    <span class="token operator">|</span> <span class="token keyword">Using</span> <span class="token keyword">where</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token comment">---- | ------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----------- |</span>
<span class="token operator">|</span>      <span class="token operator">|</span>         <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>             <span class="token operator">|</span>

<span class="token operator">|</span> <span class="token number">2</span>    <span class="token operator">|</span> DEPENDENT SUBQUERY <span class="token operator">|</span> tb   <span class="token operator">|</span> <span class="token keyword">ALL</span>  <span class="token operator">|</span> uid  <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token number">7</span>    <span class="token operator">|</span> <span class="token keyword">Using</span> <span class="token keyword">where</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token comment">---- | ------------------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----------- |</span>
<span class="token operator">|</span>      <span class="token operator">|</span>                    <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>      <span class="token operator">|</span>             <span class="token operator">|</span>

<span class="token operator">+</span><span class="token comment">----+--------------------+-------+------+---------------+------+---------+------+------+-------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.6.30\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">----+--------------------+-------+------+---------------+------+---------+------------+------+-------------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> select_type        <span class="token operator">|</span> <span class="token keyword">table</span>  <span class="token operator">|</span> <span class="token keyword">type</span> <span class="token operator">|</span> possible_keys <span class="token operator">|</span> <span class="token keyword">key</span>  <span class="token operator">|</span> key_len <span class="token operator">|</span> ref       <span class="token operator">|</span> <span class="token keyword">rows</span>  <span class="token operator">|</span> Extra      <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+--------------------+-------+------+---------------+------+---------+------------+------+-------------+</span>
<span class="token operator">|</span> <span class="token number">1</span>  <span class="token operator">|</span> <span class="token keyword">PRIMARY</span>            <span class="token operator">|</span> a     <span class="token operator">|</span> <span class="token keyword">ALL</span>  <span class="token operator">|</span> <span class="token boolean">NULL</span>              <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span>      <span class="token operator">|</span> <span class="token boolean">NULL</span>        <span class="token operator">|</span> <span class="token number">7</span>    <span class="token operator">|</span> <span class="token keyword">Using</span> <span class="token keyword">where</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">2</span>  <span class="token operator">|</span> DEPENDENT SUBQUERY <span class="token operator">|</span> tb    <span class="token operator">|</span> ref  <span class="token operator">|</span> uid           <span class="token operator">|</span> uid  <span class="token operator">|</span> <span class="token number">4</span>       <span class="token operator">|</span> test<span class="token punctuation">.</span>a<span class="token punctuation">.</span>uid <span class="token operator">|</span> <span class="token number">1</span>    <span class="token operator">|</span> <span class="token boolean">NULL</span>           <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+--------------------+-------+------+---------------+------+---------+------------+------+-------------+</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u5199\u6CD53" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5199\u6CD53" aria-hidden="true">#</a> 2.3 \u5199\u6CD53</h3><p>\u76F4\u63A5\u6539\u6210join\u6027\u80FD\u4F1A\u66F4\u52A0\u597D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT a.uid, a.ip, a.login_time
FROM (SELECT uid, max(login_time) login_time
FROM tb
GROUP BY uid
) b JOIN tb a ON a.uid = b.uid AND a.login_time = b.login_time;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u7ED3\u679C\u90FD\u76F8\u540C\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">------+---------------+---------------------+</span>
<span class="token operator">|</span> uid  <span class="token operator">|</span> ip            <span class="token operator">|</span> login_time          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+---------------+---------------------+</span>
<span class="token operator">|</span> <span class="token number">1003</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.153</span> <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">19</span>:<span class="token number">30</span>:<span class="token number">51</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">1002</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.66</span>  <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">19</span>:<span class="token number">12</span>:<span class="token number">32</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">1001</span> <span class="token operator">|</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.231</span> <span class="token operator">|</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">19</span>:<span class="token number">55</span>:<span class="token number">34</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+---------------+---------------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A\u5982\u679C\u8981\u5206\u7EC4\u53D6\u6700\u5C0F\u503C\u76F4\u63A5\u6539\u5BF9\u5E94\u51FD\u6570\u548C\u7B26\u53F7\u5C31\u884C\u4E86\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,31),i={href:"https://blog.csdn.net/l1028386804/article/details/54657412",target:"_blank",rel:"noopener noreferrer"},u=l("MySQL\u4E4B\u2014\u2014GROUP BY\u5206\u7EC4\u53D6\u5B57\u6BB5\u6700\u5927\u503C");function d(m,b){const n=r("ExternalLinkIcon");return p(),e("div",null,[k,s("p",null,[s("a",i,[u,o(n)])])])}var g=a(c,[["render",d],["__file","GROUPBY\u5206\u7EC4\u53D6\u5B57\u6BB5\u6700\u5927\u503C.html.vue"]]);export{g as default};
