import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as t,a as n,b as o,e as p,r as c}from"./app.e5cb29cd.js";const l={},d=p(`<h1 id="collection-stack-queue-\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#collection-stack-queue-\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> Collection - Stack &amp; Queue \u6E90\u7801\u89E3\u6790</h1><h2 id="_1-stack-queue\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-stack-queue\u6982\u8FF0" aria-hidden="true">#</a> 1. Stack &amp; Queue\u6982\u8FF0</h2><p>Java\u91CC\u6709\u4E00\u4E2A\u53EB\u505A<em>Stack</em>\u7684\u7C7B\uFF0C\u5374\u6CA1\u6709\u53EB\u505A<em>Queue</em>\u7684\u7C7B(\u5B83\u662F\u4E2A\u63A5\u53E3\u540D\u5B57)\u3002\u5F53\u9700\u8981\u4F7F\u7528\u6808\u65F6\uFF0CJava\u5DF2\u4E0D\u63A8\u8350\u4F7F\u7528<em>Stack</em>\uFF0C\u800C\u662F\u63A8\u8350\u4F7F\u7528\u66F4\u9AD8\u6548\u7684<em>ArrayDeque</em>\uFF1B\u65E2\u7136<em>Queue</em>\u53EA\u662F\u4E00\u4E2A\u63A5\u53E3\uFF0C\u5F53\u9700\u8981\u4F7F\u7528\u961F\u5217\u65F6\u4E5F\u5C31\u9996\u9009<em>ArrayDeque</em>\u4E86(\u6B21\u9009\u662F<em>LinkedList</em>)\u3002</p><h2 id="_2-queue" tabindex="-1"><a class="header-anchor" href="#_2-queue" aria-hidden="true">#</a> 2. Queue</h2><p><em>Queue</em>\u63A5\u53E3\u7EE7\u627F\u81EACollection\u63A5\u53E3\uFF0C\u9664\u4E86\u6700\u57FA\u672C\u7684Collection\u7684\u65B9\u6CD5\u4E4B\u5916\uFF0C\u5B83\u8FD8\u652F\u6301\u989D\u5916\u7684<em>insertion</em>, <em>extraction</em>\u548C<em>inspection</em>\u64CD\u4F5C\u3002\u8FD9\u91CC\u6709\u4E24\u7EC4\u683C\u5F0F\uFF0C\u51716\u4E2A\u65B9\u6CD5\uFF0C\u4E00\u7EC4\u662F\u629B\u51FA\u5F02\u5E38\u7684\u5B9E\u73B0\uFF1B\u53E6\u5916\u4E00\u7EC4\u662F\u8FD4\u56DE\u503C\u7684\u5B9E\u73B0(\u6CA1\u6709\u5219\u8FD4\u56DEnull)\u3002</p><table><thead><tr><th></th><th>Throws exception</th><th>Returns special value</th></tr></thead><tbody><tr><td>Insert</td><td>add(e)</td><td>offer(e)</td></tr><tr><td>Remove</td><td>remove()</td><td>poll()</td></tr><tr><td>Examine</td><td>element()</td><td>peek()</td></tr></tbody></table><h2 id="_3-deque" tabindex="-1"><a class="header-anchor" href="#_3-deque" aria-hidden="true">#</a> 3. Deque</h2><p><code>Deque</code>\u662F&quot;double ended queue&quot;, \u8868\u793A\u53CC\u5411\u7684\u961F\u5217\uFF0C\u82F1\u6587\u8BFB\u4F5C&quot;deck&quot;. Deque \u7EE7\u627F\u81EA Queue\u63A5\u53E3\uFF0C\u9664\u4E86\u652F\u6301Queue\u7684\u65B9\u6CD5\u4E4B\u5916\uFF0C\u8FD8\u652F\u6301<code>insert</code>, <code>remove</code>\u548C<code>examine</code>\u64CD\u4F5C\uFF0C\u7531\u4E8EDeque\u662F\u53CC\u5411\u7684\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5BF9\u961F\u5217\u7684\u5934\u548C\u5C3E\u90FD\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5B83\u540C\u65F6\u4E5F\u652F\u6301\u4E24\u7EC4\u683C\u5F0F\uFF0C\u4E00\u7EC4\u662F\u629B\u51FA\u5F02\u5E38\u7684\u5B9E\u73B0\uFF1B\u53E6\u5916\u4E00\u7EC4\u662F\u8FD4\u56DE\u503C\u7684\u5B9E\u73B0(\u6CA1\u6709\u5219\u8FD4\u56DEnull)\u3002\u517112\u4E2A\u65B9\u6CD5\u5982\u4E0B:</p><table><thead><tr><th></th><th>First Element - Head</th><th></th><th>Last Element - Tail</th><th></th></tr></thead><tbody><tr><td></td><td>Throws exception</td><td>Special value</td><td>Throws exception</td><td>Special value</td></tr><tr><td>Insert</td><td>addFirst(e)</td><td>offerFirst(e)</td><td>addLast(e)</td><td>offerLast(e)</td></tr><tr><td>Remove</td><td>removeFirst()</td><td>pollFirst()</td><td>removeLast()</td><td>pollLast()</td></tr><tr><td>Examine</td><td>getFirst()</td><td>peekFirst()</td><td>getLast()</td><td>peekLast()</td></tr></tbody></table><p>\u5F53\u628A<code>Deque</code>\u5F53\u505AFIFO\u7684<code>queue</code>\u6765\u4F7F\u7528\u65F6\uFF0C\u5143\u7D20\u662F\u4ECE<code>deque</code>\u7684\u5C3E\u90E8\u6DFB\u52A0\uFF0C\u4ECE\u5934\u90E8\u8FDB\u884C\u5220\u9664\u7684\uFF1B \u6240\u4EE5<code>deque</code>\u7684\u90E8\u5206\u65B9\u6CD5\u662F\u548C<code>queue</code>\u662F\u7B49\u540C\u7684\u3002\u5177\u4F53\u5982\u4E0B:</p><table><thead><tr><th>Queue Method</th><th>Equivalent Deque Method</th></tr></thead><tbody><tr><td>add(e)</td><td>addLast(e)</td></tr><tr><td>offer(e)</td><td>offerLast(e)</td></tr><tr><td>remove()</td><td>removeFirst()</td></tr><tr><td>poll()</td><td>pollFirst()</td></tr><tr><td>element()</td><td>getFirst()</td></tr><tr><td>peek()</td><td>peekFirst()</td></tr></tbody></table><p><em>Deque</em>\u7684\u542B\u4E49\u662F\u201Cdouble ended queue\u201D\uFF0C\u5373\u53CC\u7AEF\u961F\u5217\uFF0C\u5B83\u65E2\u53EF\u4EE5\u5F53\u4F5C\u6808\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u5F53\u4F5C\u961F\u5217\u4F7F\u7528\u3002\u4E0B\u8868\u5217\u51FA\u4E86<em>Deque</em>\u4E0E<em>Queue</em>\u76F8\u5BF9\u5E94\u7684\u63A5\u53E3:</p><table><thead><tr><th>Queue Method</th><th>Equivalent Deque Method</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>add(e)</code></td><td><code>addLast(e)</code></td><td>\u5411\u961F\u5C3E\u63D2\u5165\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td><code>offer(e)</code></td><td><code>offerLast(e)</code></td><td>\u5411\u961F\u5C3E\u63D2\u5165\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>false</code></td></tr><tr><td><code>remove()</code></td><td><code>removeFirst()</code></td><td>\u83B7\u53D6\u5E76\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td><code>poll()</code></td><td><code>pollFirst()</code></td><td>\u83B7\u53D6\u5E76\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>null</code></td></tr><tr><td><code>element()</code></td><td><code>getFirst()</code></td><td>\u83B7\u53D6\u4F46\u4E0D\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td><code>peek()</code></td><td><code>peekFirst()</code></td><td>\u83B7\u53D6\u4F46\u4E0D\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>null</code></td></tr></tbody></table><p>\u4E0B\u8868\u5217\u51FA\u4E86<em>Deque</em>\u4E0E<em>Stack</em>\u5BF9\u5E94\u7684\u63A5\u53E3:</p><table><thead><tr><th>Stack Method</th><th>Equivalent Deque Method</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>push(e)</code></td><td><code>addFirst(e)</code></td><td>\u5411\u6808\u9876\u63D2\u5165\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td>\u65E0</td><td><code>offerFirst(e)</code></td><td>\u5411\u6808\u9876\u63D2\u5165\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>false</code></td></tr><tr><td><code>pop()</code></td><td><code>removeFirst()</code></td><td>\u83B7\u53D6\u5E76\u5220\u9664\u6808\u9876\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td>\u65E0</td><td><code>pollFirst()</code></td><td>\u83B7\u53D6\u5E76\u5220\u9664\u6808\u9876\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>null</code></td></tr><tr><td><code>peek()</code></td><td><code>getFirst()</code></td><td>\u83B7\u53D6\u4F46\u4E0D\u5220\u9664\u6808\u9876\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td>\u65E0</td><td><code>peekFirst()</code></td><td>\u83B7\u53D6\u4F46\u4E0D\u5220\u9664\u6808\u9876\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>null</code></td></tr></tbody></table><p>\u4E0A\u9762\u4E24\u4E2A\u8868\u5171\u5B9A\u4E49\u4E86<em>Deque</em>\u768412\u4E2A\u63A5\u53E3\u3002\u6DFB\u52A0\uFF0C\u5220\u9664\uFF0C\u53D6\u503C\u90FD\u6709\u4E24\u5957\u63A5\u53E3\uFF0C\u5B83\u4EEC\u529F\u80FD\u76F8\u540C\uFF0C\u533A\u522B\u662F\u5BF9\u5931\u8D25\u60C5\u51B5\u7684\u5904\u7406\u4E0D\u540C\u3002<strong>\u4E00\u5957\u63A5\u53E3\u9047\u5230\u5931\u8D25\u5C31\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u53E6\u4E00\u5957\u9047\u5230\u5931\u8D25\u4F1A\u8FD4\u56DE\u7279\u6B8A\u503C(<code>false</code>\u6216<code>null</code>)</strong>\u3002\u9664\u975E\u67D0\u79CD\u5B9E\u73B0\u5BF9\u5BB9\u91CF\u6709\u9650\u5236\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6DFB\u52A0\u64CD\u4F5C\u662F\u4E0D\u4F1A\u5931\u8D25\u7684\u3002<strong>\u867D\u7136*Deque*\u7684\u63A5\u53E3\u670912\u4E2A\u4E4B\u591A\uFF0C\u4F46\u65E0\u975E\u5C31\u662F\u5BF9\u5BB9\u5668\u7684\u4E24\u7AEF\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6216\u6DFB\u52A0\uFF0C\u6216\u5220\u9664\uFF0C\u6216\u67E5\u770B</strong>\u3002\u660E\u767D\u4E86\u8FD9\u4E00\u70B9\u8BB2\u89E3\u8D77\u6765\u5C31\u4F1A\u975E\u5E38\u7B80\u5355\u3002</p><p><em>ArrayDeque</em>\u548C<em>LinkedList</em>\u662F<em>Deque</em>\u7684\u4E24\u4E2A\u901A\u7528\u5B9E\u73B0\uFF0C\u7531\u4E8E\u5B98\u65B9\u66F4\u63A8\u8350\u4F7F\u7528<em>AarryDeque</em>\u7528\u4F5C\u6808\u548C\u961F\u5217\uFF0C\u52A0\u4E4B\u4E0A\u4E00\u7BC7\u5DF2\u7ECF\u8BB2\u89E3\u8FC7<em>LinkedList</em>\uFF0C\u672C\u6587\u5C06\u7740\u91CD\u8BB2\u89E3<em>ArrayDeque</em>\u7684\u5177\u4F53\u5B9E\u73B0\u3002</p><p>\u4ECE\u540D\u5B57\u53EF\u4EE5\u770B\u51FA<em>ArrayDeque</em>\u5E95\u5C42\u901A\u8FC7\u6570\u7EC4\u5B9E\u73B0\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u53EF\u4EE5\u540C\u65F6\u5728\u6570\u7EC4\u4E24\u7AEF\u63D2\u5165\u6216\u5220\u9664\u5143\u7D20\u7684\u9700\u6C42\uFF0C\u8BE5\u6570\u7EC4\u8FD8\u5FC5\u987B\u662F\u5FAA\u73AF\u7684\uFF0C\u5373<strong>\u5FAA\u73AF\u6570\u7EC4(circular array)</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6570\u7EC4\u7684\u4EFB\u4F55\u4E00\u70B9\u90FD\u53EF\u80FD\u88AB\u770B\u4F5C\u8D77\u70B9\u6216\u8005\u7EC8\u70B9\u3002<em>ArrayDeque</em>\u662F\u975E\u7EBF\u7A0B\u5B89\u5168\u7684(not thread-safe)\uFF0C\u5F53\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u9700\u8981\u7A0B\u5E8F\u5458\u624B\u52A8\u540C\u6B65\uFF1B\u53E6\u5916\uFF0C\u8BE5\u5BB9\u5668\u4E0D\u5141\u8BB8\u653E\u5165<code>null</code>\u5143\u7D20\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220816211332105.png" alt="image-20220816211332105" loading="lazy"></p><p>\u4E0A\u56FE\u4E2D\u6211\u4EEC\u770B\u5230\uFF0C<strong><code>head</code>\u6307\u5411\u9996\u7AEF\u7B2C\u4E00\u4E2A\u6709\u6548\u5143\u7D20\uFF0C<code>tail</code>\u6307\u5411\u5C3E\u7AEF\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u63D2\u5165\u5143\u7D20\u7684\u7A7A\u4F4D</strong>\u3002\u56E0\u4E3A\u662F\u5FAA\u73AF\u6570\u7EC4\uFF0C\u6240\u4EE5<code>head</code>\u4E0D\u4E00\u5B9A\u603B\u7B49\u4E8E0\uFF0C<code>tail</code>\u4E5F\u4E0D\u4E00\u5B9A\u603B\u662F\u6BD4<code>head</code>\u5927\u3002</p><h2 id="_4-\u65B9\u6CD5\u5256\u6790" tabindex="-1"><a class="header-anchor" href="#_4-\u65B9\u6CD5\u5256\u6790" aria-hidden="true">#</a> 4. \u65B9\u6CD5\u5256\u6790</h2><h3 id="_4-1-addfirst" tabindex="-1"><a class="header-anchor" href="#_4-1-addfirst" aria-hidden="true">#</a> 4.1 addFirst()</h3><p><code>addFirst(E e)</code>\u7684\u4F5C\u7528\u662F\u5728<em>Deque</em>\u7684\u9996\u7AEF\u63D2\u5165\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u5728<code>head</code>\u7684\u524D\u9762\u63D2\u5165\u5143\u7D20\uFF0C\u5728\u7A7A\u95F4\u8DB3\u591F\u4E14\u4E0B\u6807\u6CA1\u6709\u8D8A\u754C\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EA\u9700\u8981\u5C06<code>elements[--head] = e</code>\u5373\u53EF\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220816211527313.png" alt="image-20220816211527313" loading="lazy"></p><p>\u5B9E\u9645\u9700\u8981\u8003\u8651: 1.\u7A7A\u95F4\u662F\u5426\u591F\u7528\uFF0C\u4EE5\u53CA2.\u4E0B\u6807\u662F\u5426\u8D8A\u754C\u7684\u95EE\u9898\u3002\u4E0A\u56FE\u4E2D\uFF0C\u5982\u679C<code>head</code>\u4E3A<code>0</code>\u4E4B\u540E\u63A5\u7740\u8C03\u7528<code>addFirst()</code>\uFF0C\u867D\u7136\u7A7A\u4F59\u7A7A\u95F4\u8FD8\u591F\u7528\uFF0C\u4F46<code>head</code>\u4E3A<code>-1</code>\uFF0C\u4E0B\u6807\u8D8A\u754C\u4E86\u3002\u4E0B\u5217\u4EE3\u7801\u5F88\u597D\u7684\u89E3\u51B3\u4E86\u8FD9\u4E24\u4E2A\u95EE\u9898\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//addFirst(E e)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token comment">//\u4E0D\u5141\u8BB8\u653E\u5165null</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elements<span class="token punctuation">[</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>head <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span><span class="token comment">//2.\u4E0B\u6807\u662F\u5426\u8D8A\u754C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> tail<span class="token punctuation">)</span><span class="token comment">//1.\u7A7A\u95F4\u662F\u5426\u591F\u7528</span>
        <span class="token function">doubleCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6269\u5BB9</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u6211\u4EEC\u770B\u5230\uFF0C<strong>\u7A7A\u95F4\u95EE\u9898\u662F\u5728\u63D2\u5165\u4E4B\u540E\u89E3\u51B3\u7684</strong>\uFF0C\u56E0\u4E3A<code>tail</code>\u603B\u662F\u6307\u5411\u4E0B\u4E00\u4E2A\u53EF\u63D2\u5165\u7684\u7A7A\u4F4D\uFF0C\u4E5F\u5C31\u610F\u5473\u7740<code>elements</code>\u6570\u7EC4\u81F3\u5C11\u6709\u4E00\u4E2A\u7A7A\u4F4D\uFF0C\u6240\u4EE5\u63D2\u5165\u5143\u7D20\u7684\u65F6\u5019\u4E0D\u7528\u8003\u8651\u7A7A\u95F4\u95EE\u9898\u3002</p><p>\u4E0B\u6807\u8D8A\u754C\u7684\u5904\u7406\u89E3\u51B3\u8D77\u6765\u975E\u5E38\u7B80\u5355\uFF0C<code>head = (head - 1) &amp; (elements.length - 1)</code>\u5C31\u53EF\u4EE5\u4E86\uFF0C<strong>\u8FD9\u6BB5\u4EE3\u7801\u76F8\u5F53\u4E8E\u53D6\u4F59\uFF0C\u540C\u65F6\u89E3\u51B3\u4E86<code>head</code>\u4E3A\u8D1F\u503C\u7684\u60C5\u51B5</strong>\u3002\u56E0\u4E3A<code>elements.length</code>\u5FC5\u9700\u662F<code>2</code>\u7684\u6307\u6570\u500D\uFF0C<code>elements - 1</code>\u5C31\u662F\u4E8C\u8FDB\u5236\u4F4E\u4F4D\u5168<code>1</code>\uFF0C\u8DDF<code>head - 1</code>\u76F8\u4E0E\u4E4B\u540E\u5C31\u8D77\u5230\u4E86\u53D6\u6A21\u7684\u4F5C\u7528\uFF0C\u5982\u679C<code>head - 1</code>\u4E3A\u8D1F\u6570(\u5176\u5B9E\u53EA\u53EF\u80FD\u662F-1)\uFF0C\u5219\u76F8\u5F53\u4E8E\u5BF9\u5176\u53D6\u76F8\u5BF9\u4E8E<code>elements.length</code>\u7684\u8865\u7801\u3002</p><p>\u4E0B\u9762\u518D\u8BF4\u8BF4\u6269\u5BB9\u51FD\u6570<code>doubleCapacity()</code>\uFF0C\u5176\u903B\u8F91\u662F\u7533\u8BF7\u4E00\u4E2A\u66F4\u5927\u7684\u6570\u7EC4(\u539F\u6570\u7EC4\u7684\u4E24\u500D)\uFF0C\u7136\u540E\u5C06\u539F\u6570\u7EC4\u590D\u5236\u8FC7\u53BB\u3002\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220816212042861.png" alt="image-20220816212042861" loading="lazy"></p><p>\u56FE\u4E2D\u6211\u4EEC\u770B\u5230\uFF0C\u590D\u5236\u5206\u4E24\u6B21\u8FDB\u884C\uFF0C\u7B2C\u4E00\u6B21\u590D\u5236<code>head</code>\u53F3\u8FB9\u7684\u5143\u7D20\uFF0C\u7B2C\u4E8C\u6B21\u590D\u5236<code>head</code>\u5DE6\u8FB9\u7684\u5143\u7D20\u3002</p><blockquote><p>\u6269\u5BB9\u6210\u539F\u6765\u76842\u500D</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//doubleCapacity()</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doubleCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">assert</span> head <span class="token operator">==</span> tail<span class="token punctuation">;</span>
    <span class="token keyword">int</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> r <span class="token operator">=</span> n <span class="token operator">-</span> p<span class="token punctuation">;</span> <span class="token comment">// head\u53F3\u8FB9\u5143\u7D20\u7684\u4E2A\u6570</span>
    <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> n <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//\u539F\u7A7A\u95F4\u76842\u500D</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span><span class="token string">&quot;Sorry, deque too big&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>newCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> p<span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u590D\u5236\u53F3\u534A\u90E8\u5206\uFF0C\u5BF9\u5E94\u4E0A\u56FE\u4E2D\u7EFF\u8272\u90E8\u5206</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> r<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u590D\u5236\u5DE6\u534A\u90E8\u5206\uFF0C\u5BF9\u5E94\u4E0A\u56FE\u4E2D\u7070\u8272\u90E8\u5206</span>
    elements <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>a<span class="token punctuation">;</span>
    head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    tail <span class="token operator">=</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-addlast" tabindex="-1"><a class="header-anchor" href="#_4-2-addlast" aria-hidden="true">#</a> 4.2 addLast()</h3><p><code>addLast(E e)</code>\u7684\u4F5C\u7528\u662F\u5728<em>Deque</em>\u7684\u5C3E\u7AEF\u63D2\u5165\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u5728<code>tail</code>\u7684\u4F4D\u7F6E\u63D2\u5165\u5143\u7D20\uFF0C\u7531\u4E8E<code>tail</code>\u603B\u662F\u6307\u5411\u4E0B\u4E00\u4E2A\u53EF\u4EE5\u63D2\u5165\u7684\u7A7A\u4F4D\uFF0C\u56E0\u6B64\u53EA\u9700\u8981<code>elements[tail] = e;</code>\u5373\u53EF\u3002\u63D2\u5165\u5B8C\u6210\u540E\u518D\u68C0\u67E5\u7A7A\u95F4\uFF0C\u5982\u679C\u7A7A\u95F4\u5DF2\u7ECF\u7528\u5149\uFF0C\u5219\u8C03\u7528<code>doubleCapacity()</code>\u8FDB\u884C\u6269\u5BB9\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220816213145335.png" alt="image-20220816213145335" loading="lazy"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addLast</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token comment">//\u4E0D\u5141\u8BB8\u653E\u5165null</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elements<span class="token punctuation">[</span>tail<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span><span class="token comment">//\u8D4B\u503C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span>tail <span class="token operator">=</span> <span class="token punctuation">(</span>tail <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> head<span class="token punctuation">)</span><span class="token comment">//\u4E0B\u6807\u8D8A\u754C\u5904\u7406</span>
        <span class="token function">doubleCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6269\u5BB9</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u6807\u8D8A\u754C\u5904\u7406\u65B9\u5F0F<code>addFirt()</code>\u4E2D\u5DF2\u7ECF\u8BB2\u8FC7\uFF0C\u4E0D\u518D\u8D58\u8FF0\u3002</p><h3 id="_4-3-pollfirst" tabindex="-1"><a class="header-anchor" href="#_4-3-pollfirst" aria-hidden="true">#</a> 4.3 pollFirst()</h3><p><code>pollFirst()</code>\u7684\u4F5C\u7528\u662F\u5220\u9664\u5E76\u8FD4\u56DE<em>Deque</em>\u9996\u7AEF\u5143\u7D20\uFF0C\u4E5F\u5373\u662F<code>head</code>\u4F4D\u7F6E\u5904\u7684\u5143\u7D20\u3002\u5982\u679C\u5BB9\u5668\u4E0D\u7A7A\uFF0C\u53EA\u9700\u8981\u76F4\u63A5\u8FD4\u56DE<code>elements[head]</code>\u5373\u53EF\uFF0C\u5F53\u7136\u8FD8\u9700\u8981\u5904\u7406\u4E0B\u6807\u7684\u95EE\u9898\u3002\u7531\u4E8E<code>ArrayDeque</code>\u4E2D\u4E0D\u5141\u8BB8\u653E\u5165<code>null</code>\uFF0C\u5F53<code>elements[head] == null</code>\u65F6\uFF0C\u610F\u5473\u7740\u5BB9\u5668\u4E3A\u7A7A\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">E</span> result <span class="token operator">=</span> elements<span class="token punctuation">[</span>head<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token comment">//null\u503C\u610F\u5473\u7740deque\u4E3A\u7A7A</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    elements<span class="token punctuation">[</span>h<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token comment">//let GC work</span>
    head <span class="token operator">=</span> <span class="token punctuation">(</span>head <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u4E0B\u6807\u8D8A\u754C\u5904\u7406</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-polllast" tabindex="-1"><a class="header-anchor" href="#_4-4-polllast" aria-hidden="true">#</a> 4.4 pollLast()</h3><p><code>pollLast()</code>\u7684\u4F5C\u7528\u662F\u5220\u9664\u5E76\u8FD4\u56DE<em>Deque</em>\u5C3E\u7AEF\u5143\u7D20\uFF0C\u4E5F\u5373\u662F<code>tail</code>\u4F4D\u7F6E\u524D\u9762\u7684\u90A3\u4E2A\u5143\u7D20\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">pollLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token punctuation">(</span>tail <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//tail\u7684\u4E0A\u4E00\u4E2A\u4F4D\u7F6E\u662F\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
    <span class="token class-name">E</span> result <span class="token operator">=</span> elements<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token comment">//null\u503C\u610F\u5473\u7740deque\u4E3A\u7A7A</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    elements<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token comment">//let GC work</span>
    tail <span class="token operator">=</span> t<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-peekfirst" tabindex="-1"><a class="header-anchor" href="#_4-5-peekfirst" aria-hidden="true">#</a> 4.5 peekFirst()</h3><p><code>peekFirst()</code>\u7684\u4F5C\u7528\u662F\u8FD4\u56DE\u4F46\u4E0D\u5220\u9664<em>Deque</em>\u9996\u7AEF\u5143\u7D20\uFF0C\u4E5F\u5373\u662F<code>head</code>\u4F4D\u7F6E\u5904\u7684\u5143\u7D20\uFF0C\u76F4\u63A5\u8FD4\u56DE<code>elements[head]</code>\u5373\u53EF\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">peekFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> elements<span class="token punctuation">[</span>head<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// elements[head] is null if deque empty</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-peeklast" tabindex="-1"><a class="header-anchor" href="#_4-6-peeklast" aria-hidden="true">#</a> 4.6 peekLast()</h3><p><code>peekLast()</code>\u7684\u4F5C\u7528\u662F\u8FD4\u56DE\u4F46\u4E0D\u5220\u9664<em>Deque</em>\u5C3E\u7AEF\u5143\u7D20\uFF0C\u4E5F\u5373\u662F<code>tail</code>\u4F4D\u7F6E\u524D\u9762\u7684\u90A3\u4E2A\u5143\u7D20\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">peekLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> elements<span class="token punctuation">[</span><span class="token punctuation">(</span>tail <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,51),i={href:"https://pdai.tech/md/java/collection/java-collection-Queue&Stack.html",target:"_blank",rel:"noopener noreferrer"},u=n("strong",null,"Collection - Stack & Queue \u6E90\u7801\u89E3\u6790",-1);function r(k,m){const a=c("ExternalLinkIcon");return e(),t("div",null,[d,n("p",null,[n("a",i,[u,o(a)])])])}var b=s(l,[["render",r],["__file","java-collection-Queue&Stack.html.vue"]]);export{b as default};
