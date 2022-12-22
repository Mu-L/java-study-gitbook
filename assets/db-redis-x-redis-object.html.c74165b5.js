import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as s,b as a,e as n,d as t,r as p}from"./app.6a5825c6.js";const l={},r=s("h1",{id:"redis\u8FDB\u9636-\u6570\u636E\u7C7B\u578B-\u5BF9\u8C61\u673A\u5236\u8BE6\u89E3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#redis\u8FDB\u9636-\u6570\u636E\u7C7B\u578B-\u5BF9\u8C61\u673A\u5236\u8BE6\u89E3","aria-hidden":"true"},"#"),n(" Redis\u8FDB\u9636 - \u6570\u636E\u7C7B\u578B\uFF1A\u5BF9\u8C61\u673A\u5236\u8BE6\u89E3")],-1),d=s("h2",{id:"_1-\u5F15\u5165-\u4ECE\u54EA\u91CC\u5F00\u59CB\u5B66\u4E60\u5E95\u5C42",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-\u5F15\u5165-\u4ECE\u54EA\u91CC\u5F00\u59CB\u5B66\u4E60\u5E95\u5C42","aria-hidden":"true"},"#"),n(" 1. \u5F15\u5165:\u4ECE\u54EA\u91CC\u5F00\u59CB\u5B66\u4E60\u5E95\u5C42\uFF1F")],-1),m=s("blockquote",null,[s("p",null,"\u6211\u5728\u6574\u7406Redis\u5E95\u5C42\u8BBE\u8BA1\u65F6\uFF0C\u53D1\u73B0\u7F51\u4E0A\u5176\u5B9E\u662F\u6709\u5F88\u591A\u8D44\u6599\u7684\uFF0C\u4F46\u662F\u7F3A\u5C11\u4E00\u79CD\u81EA\u4E0A\u800C\u4E0B\u7684\u627F\u63A5\u3002\u8FD9\u91CC\u6211\u5C06\u6536\u96C6\u5F88\u591A\u7F51\u4E0A\u7684\u8D44\u6599\u5E76\u91CD\u65B0\u7EC4\u7EC7\uFF0C\u6765\u5E2E\u52A9\u4F60\u66F4\u597D\u7684\u7406\u89E3Redis\u5E95\u5C42\u8BBE\u8BA1\u3002")],-1),k=n("\u6211\u4EEC\u5728\u524D\u6587\u5DF2\u7ECF\u9610\u8FF0\u4E86"),u={href:"https://java.isture.com/redis/started/Redis%E5%85%A5%E9%97%A8-5%E7%A7%8D%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%AF%A6%E8%A7%A3.html",target:"_blank",rel:"noopener noreferrer"},b=n("Redis 5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B\u8BE6\u89E3"),v=n("\u548C"),h={href:"https://java.isture.com/redis/started/Redis%E5%85%A5%E9%97%A8Stream%E8%AF%A6%E8%A7%A3.html",target:"_blank",rel:"noopener noreferrer"},g=n("Redis\u5165\u95E8 - \u6570\u636E\u7ED3\u6784\uFF1AStream\u8BE6\u89E3"),_=n("\uFF1B\u90A3\u4E48\u8FD9\u4E9B\u57FA\u7840\u7C7B\u578B\u7684\u5E95\u5C42\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u5462\uFF1F"),E=t(`<p>\u5E26\u7740\u8FD9\u4E2A\u95EE\u9898\u6211\u4EEC\u6765\u7740\u624B\u7406\u89E3\u5E95\u5C42\u8BBE\u8BA1\uFF0C\u9996\u5148\u770B\u4E0B\u56FE\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623205912495.png" alt="image-20220623205912495" loading="lazy"></p><p>\u5B83\u53CD\u6620\u4E86Redis\u7684\u6BCF\u79CD\u5BF9\u8C61\u5176\u5B9E\u90FD\u7531<strong>\u5BF9\u8C61\u7ED3\u6784(redisObject)</strong> \u4E0E <strong>\u5BF9\u5E94\u7F16\u7801\u7684\u6570\u636E\u7ED3\u6784</strong>\u7EC4\u5408\u800C\u6210\uFF0C\u800C\u6BCF\u79CD\u5BF9\u8C61\u7C7B\u578B\u5BF9\u5E94\u82E5\u5E72\u7F16\u7801\u65B9\u5F0F\uFF0C\u4E0D\u540C\u7684\u7F16\u7801\u65B9\u5F0F\u6240\u5BF9\u5E94\u7684\u5E95\u5C42\u6570\u636E\u7ED3\u6784\u662F\u4E0D\u540C\u7684\u3002</p><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u9700\u8981\u4ECE\u51E0\u4E2A\u4E2A\u89D2\u5EA6\u6765\u7740\u624B\u5E95\u5C42\u7814\u7A76\uFF1A</p><ul><li><strong>\u5BF9\u8C61\u8BBE\u8BA1\u673A\u5236</strong>: \u5BF9\u8C61\u7ED3\u6784(redisObject)</li><li><strong>\u7F16\u7801\u7C7B\u578B\u548C\u5E95\u5C42\u6570\u636E\u7ED3\u6784</strong>: \u5BF9\u5E94\u7F16\u7801\u7684\u6570\u636E\u7ED3\u6784</li></ul><h2 id="_2-\u4E3A\u4EC0\u4E48redis\u4F1A\u8BBE\u8BA1redisobject\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48redis\u4F1A\u8BBE\u8BA1redisobject\u5BF9\u8C61" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48Redis\u4F1A\u8BBE\u8BA1redisObject\u5BF9\u8C61</h2><blockquote><p>\u4E3A\u4EC0\u4E48Redis\u4F1A\u8BBE\u8BA1redisObject\u5BF9\u8C61\uFF1F</p></blockquote><p>\u5728redis\u7684\u547D\u4EE4\u4E2D\uFF0C\u7528\u4E8E\u5BF9\u952E\u8FDB\u884C\u5904\u7406\u7684\u547D\u4EE4\u5360\u4E86\u5F88\u5927\u4E00\u90E8\u5206\uFF0C\u800C\u5BF9\u4E8E\u952E\u6240\u4FDD\u5B58\u7684\u503C\u7684\u7C7B\u578B\uFF08\u952E\u7684\u7C7B\u578B\uFF09\uFF0C\u952E\u80FD\u6267\u884C\u7684\u547D\u4EE4\u53C8\u5404\u4E0D\u76F8\u540C\u3002\u5982\uFF1A <code>LPUSH</code> \u548C <code>LLEN</code> \u53EA\u80FD\u7528\u4E8E\u5217\u8868\u952E, \u800C <code>SADD</code> \u548C <code>SRANDMEMBER</code> \u53EA\u80FD\u7528\u4E8E\u96C6\u5408\u952E, \u7B49\u7B49; \u53E6\u5916\u4E00\u4E9B\u547D\u4EE4, \u6BD4\u5982 <code>DEL</code>\u3001 <code>TTL</code> \u548C <code>TYPE</code>, \u53EF\u4EE5\u7528\u4E8E\u4EFB\u4F55\u7C7B\u578B\u7684\u952E\uFF1B\u4F46\u662F\u8981\u6B63\u786E\u5B9E\u73B0\u8FD9\u4E9B\u547D\u4EE4, \u5FC5\u987B\u4E3A\u4E0D\u540C\u7C7B\u578B\u7684\u952E\u8BBE\u7F6E\u4E0D\u540C\u7684\u5904\u7406\u65B9\u5F0F: \u6BD4\u5982\u8BF4, \u5220\u9664\u4E00\u4E2A\u5217\u8868\u952E\u548C\u5220\u9664\u4E00\u4E2A\u5B57\u7B26\u4E32\u952E\u7684\u64CD\u4F5C\u8FC7\u7A0B\u5C31\u4E0D\u592A\u4E00\u6837\u3002</p><p>\u4EE5\u4E0A\u7684\u63CF\u8FF0\u8BF4\u660E, <strong>Redis \u5FC5\u987B\u8BA9\u6BCF\u4E2A\u952E\u90FD\u5E26\u6709\u7C7B\u578B\u4FE1\u606F, \u4F7F\u5F97\u7A0B\u5E8F\u53EF\u4EE5\u68C0\u67E5\u952E\u7684\u7C7B\u578B, \u5E76\u4E3A\u5B83\u9009\u62E9\u5408\u9002\u7684\u5904\u7406\u65B9\u5F0F</strong>.</p><p>\u6BD4\u5982\u8BF4\uFF0C \u96C6\u5408\u7C7B\u578B\u5C31\u53EF\u4EE5\u7531\u5B57\u5178\u548C\u6574\u6570\u96C6\u5408\u4E24\u79CD\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u5B9E\u73B0\uFF0C \u4F46\u662F\uFF0C \u5F53\u7528\u6237\u6267\u884C ZADD \u547D\u4EE4\u65F6\uFF0C \u4ED6/\u5979\u5E94\u8BE5\u4E0D\u5FC5\u5173\u5FC3\u96C6\u5408\u4F7F\u7528\u7684\u662F\u4EC0\u4E48\u7F16\u7801\uFF0C \u53EA\u8981 Redis \u80FD\u6309\u7167 ZADD \u547D\u4EE4\u7684\u6307\u793A\uFF0C \u5C06\u65B0\u5143\u7D20\u6DFB\u52A0\u5230\u96C6\u5408\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u8FD9\u8BF4\u660E, <strong>\u64CD\u4F5C\u6570\u636E\u7C7B\u578B\u7684\u547D\u4EE4\u9664\u4E86\u8981\u5BF9\u952E\u7684\u7C7B\u578B\u8FDB\u884C\u68C0\u67E5\u4E4B\u5916, \u8FD8\u9700\u8981\u6839\u636E\u6570\u636E\u7C7B\u578B\u7684\u4E0D\u540C\u7F16\u7801\u8FDB\u884C\u591A\u6001\u5904\u7406</strong>.</p><p>\u4E3A\u4E86\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898, <strong>Redis \u6784\u5EFA\u4E86\u81EA\u5DF1\u7684\u7C7B\u578B\u7CFB\u7EDF</strong>, \u8FD9\u4E2A\u7CFB\u7EDF\u7684\u4E3B\u8981\u529F\u80FD\u5305\u62EC:</p><ul><li>redisObject \u5BF9\u8C61.</li><li>\u57FA\u4E8E redisObject \u5BF9\u8C61\u7684\u7C7B\u578B\u68C0\u67E5.</li><li>\u57FA\u4E8E redisObject \u5BF9\u8C61\u7684\u663E\u5F0F\u591A\u6001\u51FD\u6570.</li><li>\u5BF9 redisObject \u8FDB\u884C\u5206\u914D\u3001\u5171\u4EAB\u548C\u9500\u6BC1\u7684\u673A\u5236</li></ul><h2 id="_3-redisobject\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-redisobject\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 3. redisObject\u6570\u636E\u7ED3\u6784</h2><p>redisObject \u662F Redis \u7C7B\u578B\u7CFB\u7EDF\u7684\u6838\u5FC3, \u6570\u636E\u5E93\u4E2D\u7684\u6BCF\u4E2A\u952E\u3001\u503C, \u4EE5\u53CA Redis \u672C\u8EAB\u5904\u7406\u7684\u53C2\u6570, \u90FD\u8868\u793A\u4E3A\u8FD9\u79CD\u6570\u636E\u7C7B\u578B.</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">/*
 * Redis \u5BF9\u8C61
 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">redisObject</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u7C7B\u578B</span>
    <span class="token keyword">unsigned</span> type<span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7F16\u7801\u65B9\u5F0F</span>
    <span class="token keyword">unsigned</span> encoding<span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token comment">// LRU - 24\u4F4D, \u8BB0\u5F55\u6700\u672B\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4\uFF08\u76F8\u5BF9\u4E8Elru_clock\uFF09; \u6216\u8005 LFU\uFF08\u6700\u5C11\u4F7F\u7528\u7684\u6570\u636E\uFF1A8\u4F4D\u9891\u7387\uFF0C16\u4F4D\u8BBF\u95EE\u65F6\u95F4\uFF09</span>
    <span class="token keyword">unsigned</span> lru<span class="token operator">:</span>LRU_BITS<span class="token punctuation">;</span> <span class="token comment">// LRU_BITS: 24</span>

    <span class="token comment">// \u5F15\u7528\u8BA1\u6570</span>
    <span class="token keyword">int</span> refcount<span class="token punctuation">;</span>

    <span class="token comment">// \u6307\u5411\u5E95\u5C42\u6570\u636E\u7ED3\u6784\u5B9E\u4F8B</span>
    <span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">;</span>

<span class="token punctuation">}</span> robj<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u56FE\u5BF9\u5E94\u4E0A\u9762\u7684\u7ED3\u6784</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623211402720.png" alt="image-20220623211402720" loading="lazy"></p><p><strong>\u5176\u4E2Dtype\u3001encoding\u548Cptr\u662F\u6700\u91CD\u8981\u7684\u4E09\u4E2A\u5C5E\u6027</strong>\u3002</p><ul><li><strong>type\u8BB0\u5F55\u4E86\u5BF9\u8C61\u6240\u4FDD\u5B58\u7684\u503C\u7684\u7C7B\u578B</strong>\uFF0C\u5B83\u7684\u503C\u53EF\u80FD\u662F\u4EE5\u4E0B\u5E38\u91CF\u4E2D\u7684\u4E00\u4E2A\uFF1A</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">/*
* \u5BF9\u8C61\u7C7B\u578B
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_STRING</span> <span class="token expression"><span class="token number">0</span> </span><span class="token comment">// \u5B57\u7B26\u4E32</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_LIST</span> <span class="token expression"><span class="token number">1</span> </span><span class="token comment">// \u5217\u8868</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_SET</span> <span class="token expression"><span class="token number">2</span> </span><span class="token comment">// \u96C6\u5408</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ZSET</span> <span class="token expression"><span class="token number">3</span> </span><span class="token comment">// \u6709\u5E8F\u96C6</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_HASH</span> <span class="token expression"><span class="token number">4</span> </span><span class="token comment">// \u54C8\u5E0C\u8868</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>encoding\u8BB0\u5F55\u4E86\u5BF9\u8C61\u6240\u4FDD\u5B58\u7684\u503C\u7684\u7F16\u7801</strong>\uFF0C\u5B83\u7684\u503C\u53EF\u80FD\u662F\u4EE5\u4E0B\u5E38\u91CF\u4E2D\u7684\u4E00\u4E2A\uFF1A</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">/*
* \u5BF9\u8C61\u7F16\u7801
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_RAW</span> <span class="token expression"><span class="token number">0</span>     </span><span class="token comment">/* Raw representation */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_INT</span> <span class="token expression"><span class="token number">1</span>     </span><span class="token comment">/* Encoded as integer */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_HT</span> <span class="token expression"><span class="token number">2</span>      </span><span class="token comment">/* Encoded as hash table */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_ZIPMAP</span> <span class="token expression"><span class="token number">3</span>  </span><span class="token comment">/* \u6CE8\u610F\uFF1A\u7248\u672C2.6\u540E\u4E0D\u518D\u4F7F\u7528. */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_LINKEDLIST</span> <span class="token expression"><span class="token number">4</span> </span><span class="token comment">/* \u6CE8\u610F\uFF1A\u4E0D\u518D\u4F7F\u7528\u4E86\uFF0C\u65E7\u7248\u672C2.x\u4E2DString\u7684\u5E95\u5C42\u4E4B\u4E00. */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_ZIPLIST</span> <span class="token expression"><span class="token number">5</span> </span><span class="token comment">/* Encoded as ziplist */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_INTSET</span> <span class="token expression"><span class="token number">6</span>  </span><span class="token comment">/* Encoded as intset */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_SKIPLIST</span> <span class="token expression"><span class="token number">7</span>  </span><span class="token comment">/* Encoded as skiplist */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_EMBSTR</span> <span class="token expression"><span class="token number">8</span>  </span><span class="token comment">/* Embedded sds string encoding */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_QUICKLIST</span> <span class="token expression"><span class="token number">9</span> </span><span class="token comment">/* Encoded as linked list of ziplists */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OBJ_ENCODING_STREAM</span> <span class="token expression"><span class="token number">10</span> </span><span class="token comment">/* Encoded as a radix tree of listpacks */</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>ptr\u662F\u4E00\u4E2A\u6307\u9488\uFF0C\u6307\u5411\u5B9E\u9645\u4FDD\u5B58\u503C\u7684\u6570\u636E\u7ED3\u6784</strong>\uFF0C\u8FD9\u4E2A\u6570\u636E\u7ED3\u6784\u7531type\u548Cencoding\u5C5E\u6027\u51B3\u5B9A\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C \u5982\u679C\u4E00\u4E2AredisObject \u7684type \u5C5E\u6027\u4E3A<code>OBJ_LIST</code> \uFF0C encoding \u5C5E\u6027\u4E3A<code>OBJ_ENCODING_QUICKLIST</code> \uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u662F\u4E00\u4E2ARedis \u5217\u8868\uFF08List)\uFF0C\u5B83\u7684\u503C\u4FDD\u5B58\u5728\u4E00\u4E2AQuickList\u7684\u6570\u636E\u7ED3\u6784\u5185\uFF0C\u800Cptr \u6307\u9488\u5C31\u6307\u5411quicklist\u7684\u5BF9\u8C61\uFF1B</li></ul><p>\u4E0B\u56FE\u5C55\u793A\u4E86redisObject \u3001Redis \u6240\u6709\u6570\u636E\u7C7B\u578B\u3001Redis \u6240\u6709\u7F16\u7801\u65B9\u5F0F\u4EE5\u53CA\u5E95\u5C42\u6570\u636E\u7ED3\u6784\u4E4B\u95F4\u7684\u5173\u7CFB\uFF08\u4ECE6.0\u7248\u672C\u4E2D\u68B3\u7406\u800C\u6765\uFF09\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623212428823.png" alt="image-20220623212428823" loading="lazy"></p><blockquote><p>\u6CE8\u610F\uFF1A<code>OBJ_ENCODING_ZIPMAP</code>\u6CA1\u6709\u51FA\u73B0\u5728\u56FE\u4E2D\uFF0C\u56E0\u4E3A\u5728redis2.6\u5F00\u59CB\uFF0C\u5B83\u4E0D\u518D\u662F\u4EFB\u4F55\u6570\u636E\u7C7B\u578B\u7684\u5E95\u5C42\u7ED3\u6784(\u867D\u7136\u8FD8\u6709zipmap.c\u7684\u4EE3\u7801); <code>OBJ_ENCODING_LINKEDLIST</code>\u4E5F\u4E0D\u652F\u6301\u4E86\uFF0C\u76F8\u5173\u4EE3\u7801\u4E5F\u5220\u9664\u4E86\u3002</p></blockquote><ul><li><strong>lru\u5C5E\u6027: \u8BB0\u5F55\u4E86\u5BF9\u8C61\u6700\u540E\u4E00\u6B21\u88AB\u547D\u4EE4\u7A0B\u5E8F\u8BBF\u95EE\u7684\u65F6\u95F4</strong></li></ul><p><strong>\u7A7A\u8F6C\u65F6\u957F</strong>\uFF1A\u5F53\u524D\u65F6\u95F4\u51CF\u53BB\u952E\u7684\u503C\u5BF9\u8C61\u7684lru\u65F6\u95F4\uFF0C\u5C31\u662F\u8BE5\u952E\u7684\u7A7A\u8F6C\u65F6\u957F\u3002Object idletime\u547D\u4EE4\u53EF\u4EE5\u6253\u5370\u51FA\u7ED9\u5B9A\u952E\u7684\u7A7A\u8F6C\u65F6\u957F</p><p>\u5982\u679C\u670D\u52A1\u5668\u6253\u5F00\u4E86maxmemory\u9009\u9879\uFF0C\u5E76\u4E14\u670D\u52A1\u5668\u7528\u4E8E\u56DE\u6536\u5185\u5B58\u7684\u7B97\u6CD5\u4E3Avolatile-lru\u6216\u8005allkeys-lru\uFF0C\u90A3\u4E48\u5F53\u670D\u52A1\u5668\u5360\u7528\u7684\u5185\u5B58\u6570\u8D85\u8FC7\u4E86maxmemory\u9009\u9879\u6240\u8BBE\u7F6E\u7684\u4E0A\u9650\u503C\u65F6\uFF0C\u7A7A\u8F6C\u65F6\u957F\u8F83\u9AD8\u7684\u90A3\u90E8\u5206\u952E\u4F1A\u4F18\u5148\u88AB\u670D\u52A1\u5668\u91CA\u653E\uFF0C\u4ECE\u800C\u56DE\u6536\u5185\u5B58\u3002</p><h2 id="_4-\u547D\u4EE4\u7684\u7C7B\u578B\u68C0\u67E5\u548C\u591A\u6001" tabindex="-1"><a class="header-anchor" href="#_4-\u547D\u4EE4\u7684\u7C7B\u578B\u68C0\u67E5\u548C\u591A\u6001" aria-hidden="true">#</a> 4. \u547D\u4EE4\u7684\u7C7B\u578B\u68C0\u67E5\u548C\u591A\u6001</h2><blockquote><p>\u90A3\u4E48Redis\u662F\u5982\u4F55\u5904\u7406\u4E00\u6761\u547D\u4EE4\u7684\u5462\uFF1F</p></blockquote><p><strong>\u5F53\u6267\u884C\u4E00\u4E2A\u5904\u7406\u6570\u636E\u7C7B\u578B\u547D\u4EE4\u7684\u65F6\u5019\uFF0Credis\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4</strong></p><ul><li>\u6839\u636E\u7ED9\u5B9A\u7684key\uFF0C\u5728\u6570\u636E\u5E93\u5B57\u5178\u4E2D\u67E5\u627E\u548C\u4ED6\u76F8\u5BF9\u5E94\u7684redisObject\uFF0C\u5982\u679C\u6CA1\u627E\u5230\uFF0C\u5C31\u8FD4\u56DENULL\uFF1B</li><li>\u68C0\u67E5redisObject\u7684type\u5C5E\u6027\u548C\u6267\u884C\u547D\u4EE4\u6240\u9700\u7684\u7C7B\u578B\u662F\u5426\u76F8\u7B26\uFF0C\u5982\u679C\u4E0D\u76F8\u7B26\uFF0C\u8FD4\u56DE\u7C7B\u578B\u9519\u8BEF\uFF1B</li><li>\u6839\u636EredisObject\u7684encoding\u5C5E\u6027\u6240\u6307\u5B9A\u7684\u7F16\u7801\uFF0C\u9009\u62E9\u5408\u9002\u7684\u64CD\u4F5C\u51FD\u6570\u6765\u5904\u7406\u5E95\u5C42\u7684\u6570\u636E\u7ED3\u6784\uFF1B</li><li>\u8FD4\u56DE\u6570\u636E\u7ED3\u6784\u7684\u64CD\u4F5C\u7ED3\u679C\u4F5C\u4E3A\u547D\u4EE4\u7684\u8FD4\u56DE\u503C\u3002</li></ul><p>\u6BD4\u5982\u73B0\u5728\u6267\u884CLPOP\u547D\u4EE4\uFF1A</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623212517535.png" alt="image-20220623212517535"><h2 id="_5-\u5BF9\u8C61\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#_5-\u5BF9\u8C61\u5171\u4EAB" aria-hidden="true">#</a> 5. \u5BF9\u8C61\u5171\u4EAB</h2><blockquote><p>redis\u4E00\u822C\u4F1A\u628A\u4E00\u4E9B\u5E38\u89C1\u7684\u503C\u653E\u5230\u4E00\u4E2A\u5171\u4EAB\u5BF9\u8C61\u4E2D\uFF0C\u8FD9\u6837\u53EF\u4F7F\u7A0B\u5E8F\u907F\u514D\u4E86\u91CD\u590D\u5206\u914D\u7684\u9EBB\u70E6\uFF0C\u4E5F\u8282\u7EA6\u4E86\u4E00\u4E9BCPU\u65F6\u95F4\u3002</p></blockquote><p><strong>redis\u9884\u5206\u914D\u7684\u503C\u5BF9\u8C61\u5982\u4E0B</strong>\uFF1A</p><ul><li>\u5404\u79CD\u547D\u4EE4\u7684\u8FD4\u56DE\u503C\uFF0C\u6BD4\u5982\u6210\u529F\u65F6\u8FD4\u56DE\u7684OK\uFF0C\u9519\u8BEF\u65F6\u8FD4\u56DE\u7684ERROR\uFF0C\u547D\u4EE4\u5165\u961F\u4E8B\u52A1\u65F6\u8FD4\u56DE\u7684QUEUE\uFF0C\u7B49\u7B49</li><li>\u5305\u62EC0 \u5728\u5185\uFF0C\u5C0F\u4E8EREDIS_SHARED_INTEGERS\u7684\u6240\u6709\u6574\u6570\uFF08REDIS_SHARED_INTEGERS\u7684\u9ED8\u8BA4\u503C\u662F10000\uFF09</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623212558850.png" alt="image-20220623212558850" loading="lazy"></p><blockquote><p>\u6CE8\u610F\uFF1A\u5171\u4EAB\u5BF9\u8C61\u53EA\u80FD\u88AB\u5B57\u5178\u548C\u53CC\u5411\u94FE\u8868\u8FD9\u7C7B\u80FD\u5E26\u6709\u6307\u9488\u7684\u6570\u636E\u7ED3\u6784\u4F7F\u7528\u3002\u50CF\u6574\u6570\u96C6\u5408\u548C\u538B\u7F29\u5217\u8868\u8FD9\u4E9B\u53EA\u80FD\u4FDD\u5B58\u5B57\u7B26\u4E32\u3001\u6574\u6570\u7B49\u81EA\u52C9\u4E4B\u7684\u5185\u5B58\u6570\u636E\u7ED3\u6784</p></blockquote><p><strong>\u4E3A\u4EC0\u4E48redis\u4E0D\u5171\u4EAB\u5217\u8868\u5BF9\u8C61\u3001\u54C8\u5E0C\u5BF9\u8C61\u3001\u96C6\u5408\u5BF9\u8C61\u3001\u6709\u5E8F\u96C6\u5408\u5BF9\u8C61\uFF0C\u53EA\u5171\u4EAB\u5B57\u7B26\u4E32\u5BF9\u8C61</strong>\uFF1F</p><ul><li>\u5217\u8868\u5BF9\u8C61\u3001\u54C8\u5E0C\u5BF9\u8C61\u3001\u96C6\u5408\u5BF9\u8C61\u3001\u6709\u5E8F\u96C6\u5408\u5BF9\u8C61\uFF0C\u672C\u8EAB\u53EF\u4EE5\u5305\u542B\u5B57\u7B26\u4E32\u5BF9\u8C61\uFF0C\u590D\u6742\u5EA6\u8F83\u9AD8\u3002</li><li>\u5982\u679C\u5171\u4EAB\u5BF9\u8C61\u662F\u4FDD\u5B58\u5B57\u7B26\u4E32\u5BF9\u8C61\uFF0C\u90A3\u4E48\u9A8C\u8BC1\u64CD\u4F5C\u7684\u590D\u6742\u5EA6\u4E3AO(1)</li><li>\u5982\u679C\u5171\u4EAB\u5BF9\u8C61\u662F\u4FDD\u5B58\u5B57\u7B26\u4E32\u503C\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61\uFF0C\u90A3\u4E48\u9A8C\u8BC1\u64CD\u4F5C\u7684\u590D\u6742\u5EA6\u4E3AO(N)</li><li>\u5982\u679C\u5171\u4EAB\u5BF9\u8C61\u662F\u5305\u542B\u591A\u4E2A\u503C\u7684\u5BF9\u8C61\uFF0C\u5176\u4E2D\u503C\u672C\u8EAB\u53C8\u662F\u5B57\u7B26\u4E32\u5BF9\u8C61\uFF0C\u5373\u5176\u5B83\u5BF9\u8C61\u4E2D\u5D4C\u5957\u4E86\u5B57\u7B26\u4E32\u5BF9\u8C61\uFF0C\u6BD4\u5982\u5217\u8868\u5BF9\u8C61\u3001\u54C8\u5E0C\u5BF9\u8C61\uFF0C\u90A3\u4E48\u9A8C\u8BC1\u64CD\u4F5C\u7684\u590D\u6742\u5EA6\u5C06\u4F1A\u662FO(N\u7684\u5E73\u65B9)</li></ul><p>\u5982\u679C\u5BF9\u590D\u6742\u5EA6\u8F83\u9AD8\u7684\u5BF9\u8C61\u521B\u5EFA\u5171\u4EAB\u5BF9\u8C61\uFF0C\u9700\u8981\u6D88\u8017\u5F88\u5927\u7684CPU\uFF0C\u7528\u8FD9\u79CD\u6D88\u8017\u53BB\u6362\u53D6\u5185\u5B58\u7A7A\u95F4\uFF0C\u662F\u4E0D\u5408\u9002\u7684</p><h2 id="_6-\u5F15\u7528\u8BA1\u6570\u4EE5\u53CA\u5BF9\u8C61\u7684\u6D88\u6BC1" tabindex="-1"><a class="header-anchor" href="#_6-\u5F15\u7528\u8BA1\u6570\u4EE5\u53CA\u5BF9\u8C61\u7684\u6D88\u6BC1" aria-hidden="true">#</a> 6. \u5F15\u7528\u8BA1\u6570\u4EE5\u53CA\u5BF9\u8C61\u7684\u6D88\u6BC1</h2><blockquote><p>redisObject\u4E2D\u6709refcount\u5C5E\u6027\uFF0C\u662F\u5BF9\u8C61\u7684\u5F15\u7528\u8BA1\u6570\uFF0C\u663E\u7136\u8BA1\u65700\u90A3\u4E48\u5C31\u662F\u53EF\u4EE5\u56DE\u6536\u3002</p></blockquote><ul><li>\u6BCF\u4E2AredisObject\u7ED3\u6784\u90FD\u5E26\u6709\u4E00\u4E2Arefcount\u5C5E\u6027\uFF0C\u6307\u793A\u8FD9\u4E2A\u5BF9\u8C61\u88AB\u5F15\u7528\u4E86\u591A\u5C11\u6B21\uFF1B</li><li>\u5F53\u65B0\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5B83\u7684refcount\u5C5E\u6027\u88AB\u8BBE\u7F6E\u4E3A1\uFF1B</li><li>\u5F53\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u8FDB\u884C\u5171\u4EAB\u65F6\uFF0Credis\u5C06\u8FD9\u4E2A\u5BF9\u8C61\u7684refcount\u52A0\u4E00\uFF1B</li><li>\u5F53\u4F7F\u7528\u5B8C\u4E00\u4E2A\u5BF9\u8C61\u540E\uFF0C\u6216\u8005\u6D88\u9664\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u4E4B\u540E\uFF0C\u7A0B\u5E8F\u5C06\u5BF9\u8C61\u7684refcount\u51CF\u4E00\uFF1B</li><li>\u5F53\u5BF9\u8C61\u7684refcount\u964D\u81F30 \u65F6\uFF0C\u8FD9\u4E2ARedisObject\u7ED3\u6784\uFF0C\u4EE5\u53CA\u5B83\u5F15\u7528\u7684\u6570\u636E\u7ED3\u6784\u7684\u5185\u5B58\u90FD\u4F1A\u88AB\u91CA\u653E\u3002</li></ul><h2 id="_7-\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#_7-\u5C0F\u7ED3" aria-hidden="true">#</a> 7. \u5C0F\u7ED3</h2><ul><li>redis\u4F7F\u7528\u81EA\u5DF1\u5B9E\u73B0\u7684\u5BF9\u8C61\u673A\u5236\uFF08redisObject)\u6765\u5B9E\u73B0\u7C7B\u578B\u5224\u65AD\u3001\u547D\u4EE4\u591A\u6001\u548C\u57FA\u4E8E\u5F15\u7528\u6B21\u6570\u7684\u5783\u573E\u56DE\u6536\uFF1B</li><li>redis\u4F1A\u9884\u5206\u914D\u4E00\u4E9B\u5E38\u7528\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u5E76\u901A\u8FC7\u5171\u4EAB\u8FD9\u4E9B\u5BF9\u8C61\u6765\u51CF\u5C11\u5185\u5B58\u5360\u7528\uFF0C\u548C\u907F\u514D\u9891\u7E41\u7684\u4E3A\u5C0F\u5BF9\u8C61\u5206\u914D\u5185\u5B58\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,51),O={href:"https://pdai.tech/md/db/nosql-redis/db-redis-x-redis-object.html",target:"_blank",rel:"noopener noreferrer"},y=s("strong",null,"Redis\u8FDB\u9636 - \u6570\u636E\u7ED3\u6784\uFF1A\u5BF9\u8C61\u673A\u5236\u8BE6\u89E3",-1);function f(N,R){const e=p("ExternalLinkIcon");return o(),c("div",null,[r,d,m,s("p",null,[k,s("a",u,[b,a(e)]),v,s("a",h,[g,a(e)]),_]),E,s("p",null,[s("a",O,[y,a(e)])])])}const j=i(l,[["render",f],["__file","db-redis-x-redis-object.html.vue"]]);export{j as default};
