import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as p,a as n,b as a,e as c,d as o,r as l}from"./app.4920373c.js";const i={},u=c(`<h1 id="hibernate\u7684\u56DB\u79CD\u67E5\u8BE2\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#hibernate\u7684\u56DB\u79CD\u67E5\u8BE2\u65B9\u5F0F" aria-hidden="true">#</a> Hibernate\u7684\u56DB\u79CD\u67E5\u8BE2\u65B9\u5F0F</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1.\u7B80\u4ECB</h2><ol><li>\u4E3B\u952E\u67E5\u8BE2</li><li>HQL\u67E5\u8BE2</li><li>QBC\u67E5\u8BE2</li><li>\u672C\u5730SQL\u67E5\u8BE2</li></ol><h2 id="_2-\u4E3B\u952E\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3B\u952E\u67E5\u8BE2" aria-hidden="true">#</a> 2. \u4E3B\u952E\u67E5\u8BE2</h2><p>\u901A\u8FC7\u4E3B\u952E\u6765\u67E5\u8BE2\u6570\u636E\u5E93\u7684\u8BB0\u5F55\uFF0C\u4ECE\u800C\u8FD4\u56DE\u4E00\u4E2AJavaBean\u5BF9\u8C61</p><ul><li><strong>session.get(javaBean.class, int id); \u3010\u4F20\u5165\u5BF9\u5E94\u7684class\u548Cid\u5C31\u53EF\u4EE5\u67E5\u8BE2\u3011</strong></li><li><strong>session.load(javaBean.class, int id); \u3010\u652F\u6301\u61D2\u52A0\u8F7D\u3011</strong></li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>       User user1 = (User) session.get(User.class, 1);
        System.out.println(user1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-hql\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_3-hql\u67E5\u8BE2" aria-hidden="true">#</a> 3. HQL\u67E5\u8BE2</h2><p>HQL:hibernate query language \u5373hibernate\u63D0\u4F9B\u7684\u9762\u5411\u5BF9\u8C61\u7684\u67E5\u8BE2\u8BED\u8A00</p><ul><li><p>\u4F18\u70B9\uFF1A\u53EF\u8BFB\u6027\u597D\uFF0C\u529F\u80FD\u5F3A\u5927\u6548\u7387\u9AD8\u3002</p></li><li><p>\u7F3A\u70B9\uFF1A\u7531\u4E8E\u662F\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u53EA\u6709\u5728\u8FD0\u884C\u65F6\u624D\u88AB\u89E3\u6790\uFF0C\u6545\u6269\u5C55\u6027\u5DEE\u3002</p></li></ul><h3 id="_3-1-hql\u7B80\u5355\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-1-hql\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a> 3.1 HQL\u7B80\u5355\u793A\u4F8B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        <span class="token class-name">Query</span> query <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createQuery</span><span class="token punctuation">(</span><span class="token string">&quot;FROM User WHERE id=?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u8FD9\u91CC\u7684\uFF1F\u53F7\u662F\u4ECE0\u5F00\u59CB\u7684\uFF0C\u5E76\u4E0D\u50CFJDBC\u4ECE1\u5F00\u59CB\u7684\uFF01</span>
        query<span class="token punctuation">.</span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span> list <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-hql\u8BE6\u7EC6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-2-hql\u8BE6\u7EC6\u64CD\u4F5C" aria-hidden="true">#</a> 3.2 HQL\u8BE6\u7EC6\u64CD\u4F5C</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//1.\u4E66\u5199HQL\u8BED\u53E5\uFF1A</span>
    \u57FA\u672C\u67E5\u8BE2\uFF1A<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;\u5BF9\u8C61\u7684\u5B8C\u6574\u7C7B\u540D&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u67E5\u8BE2\u6240\u6709\u7684\u5BF9\u8C61</span>
    \u6761\u4EF6\u67E5\u8BE2\uFF1A<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;from \u5BF9\u8C61\u540D where \u5C5E\u6027\u540D=***&quot;</span><span class="token punctuation">;</span>
		     <span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;select ** from \u5BF9\u8C61\u540D where \u5C5E\u6027\u540D=***&quot;</span><span class="token punctuation">;</span>
		     <span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;from \u5BF9\u8C61\u540D where \u5C5E\u6027\u540D=*** order by ** desc/asc&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u6392\u5E8F</span>
		     <span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;select count(*) from \u5BF9\u8C61\u540D where \u5C5E\u6027\u540D=***&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u805A\u5408\u51FD\u6570</span>
              <span class="token comment">//\u5176\u4ED6\u805A\u5408\u51FD\u6570\uFF1Asum(\u5217\u540D) avg(\u5217\u540D) max(\u5217\u540D) min(\u5217\u540D)</span>
    \u6295\u5F71\u67E5\u8BE2\uFF1A<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;select new \u5BF9\u8C61\u540D(\u53C2\u6570) from \u5BF9\u8C61\u540D &quot;</span><span class="token punctuation">;</span>
    \u591A\u8868\u67E5\u8BE2\uFF1A\u666E\u901A\u5185\u8FDE\u63A5\uFF1A<span class="token class-name">String</span> hql <span class="token operator">=</span><span class="token string">&quot;from \u5BF9\u8C61\u540D1 \u522B\u540D inner join \u522B\u540D.\u5BF9\u8C61\u540D2&quot;</span><span class="token punctuation">;</span>
            \u8FEB\u5207\u5185\u8FDE\u63A5\uFF1A<span class="token class-name">String</span> hql <span class="token operator">=</span><span class="token string">&quot;from \u5BF9\u8C61\u540D1 \u522B\u540D inner join fetch \u522B\u540D.\u5BF9\u8C61\u540D2&quot;</span><span class="token punctuation">;</span>
            \u5DE6\u5916\u8FDE\u63A5\uFF1A<span class="token class-name">String</span> hql <span class="token operator">=</span><span class="token string">&quot;from \u5BF9\u8C61\u540D1 \u522B\u540D left  join \u522B\u540D.\u5BF9\u8C61\u540D2&quot;</span><span class="token punctuation">;</span>
            \u53F3\u5916\u8FDE\u63A5\uFF1A<span class="token class-name">String</span> hql <span class="token operator">=</span><span class="token string">&quot;from \u5BF9\u8C61\u540D1 \u522B\u540D right join \u522B\u540D.\u5BF9\u8C61\u540D2&quot;</span><span class="token punctuation">;</span>
    <span class="token operator">?</span>\u53F7\u5360\u4F4D\u7B26\uFF1A<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;from \u5BF9\u8C61\u540D where \u5C5E\u6027\u540D=?&quot;</span><span class="token punctuation">;</span>
    <span class="token operator">:</span>\u53F7\u5360\u4F4D\u7B26\uFF1A<span class="token class-name">String</span> hql <span class="token operator">=</span> <span class="token string">&quot;from \u5BF9\u8C61\u540D where \u5C5E\u6027\u540D=:***&quot;</span><span class="token punctuation">;</span>  <span class="token comment">//***\u4E3A\u8BE5&quot;:&quot;\u7684\u540D\u79F0</span>

<span class="token comment">//2.\u521B\u5EFA\u67E5\u8BE2\u5BF9\u8C61</span>
    <span class="token class-name">Quert</span> query <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createQuery</span><span class="token punctuation">(</span>hql<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">//3.\u8BBE\u7F6E\u67E5\u8BE2\u53C2\u6570</span>
    query<span class="token punctuation">.</span><span class="token function">setLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1l</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//?\u53C2\u6570\u7C7B\u578B\u4E3ALong</span>
    query<span class="token punctuation">.</span><span class="token function">setParameter</span><span class="token punctuation">(</span>\u7D22\u5F15\u53F7<span class="token punctuation">,</span>\u53C2\u6570\u6570\u636E<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//?\u53C2\u6570\u7C7B\u578B\u4E3A\u4EFB\u610F</span>
    query<span class="token punctuation">.</span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token string">&quot;:\u7684\u540D\u79F0&quot;</span><span class="token punctuation">,</span>\u53C2\u6570\u6570\u636E<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    query<span class="token punctuation">.</span><span class="token function">setFirstResult</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5206\u9875\uFF1A\u5F00\u59CB\u67E5\u8BE2\u7684\u9875\u6570</span>
    query<span class="token punctuation">.</span><span class="token function">setMaxResults</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u5206\u9875\uFF1A\u6BCF\u9875\u663E\u793A\u591A\u5C11\u6761\u6570\u636E</span>
<span class="token comment">//4.\u67E5\u8BE2\u5E76\u83B7\u53D6\u7ED3\u679C</span>
    query<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DEList&lt;Object[]&gt;   List&lt;\u5BF9\u8C61\u540D&gt;</span>
    query<span class="token punctuation">.</span><span class="token function">uniqueResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u552F\u4E00\u67E5\u8BE2\u7ED3\u679C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-qbc\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-qbc\u67E5\u8BE2" aria-hidden="true">#</a> 4. QBC\u67E5\u8BE2</h2><p><strong>QBC\u67E5\u8BE2: query by criteria \u5B8C\u5168\u9762\u5411\u5BF9\u8C61\u7684\u67E5\u8BE2</strong></p><ul><li><p>QBC\u4F18\u70B9\uFF1A\u63D0\u4F9B\u9762\u5411\u5BF9\u8C61\u7684\u63A5\u53E3\uFF0C\u7F16\u8BD1\u65F6\u5373\u53EF\u88AB\u89E3\u6790\uFF0C\u4FBF\u4E8E\u8C03\u8BD5\uFF0C\u6269\u5C55\u6027\u597D\uFF0C\u5141\u8BB8\u7528\u6237\u6269\u5C55Criteria\u63A5\u53E3\u3002</p></li><li><p>QBC\u7F3A\u70B9\uFF1A\u53EF\u8BFB\u6027\u5DEE\uFF1B\u4E0D\u652F\u6301\u62A5\u8868\u67E5\u8BE2\u548C\u5B50\u67E5\u8BE2\u3002</p></li></ul><h3 id="_4-1-qbc\u7B80\u5355\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-1-qbc\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a> 4.1 QBC\u7B80\u5355\u793A\u4F8B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        <span class="token comment">//\u521B\u5EFA\u5173\u4E8Euser\u5BF9\u8C61\u7684criteria\u5BF9\u8C61</span>
        <span class="token class-name">Criteria</span> criteria <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u6DFB\u52A0\u6761\u4EF6</span>
        criteria<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Restrictions</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u67E5\u8BE2\u5168\u90E8\u6570\u636E</span>
        <span class="token class-name">List</span> list <span class="token operator">=</span> criteria<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-qbc-\u8BE6\u7EC6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_4-2-qbc-\u8BE6\u7EC6\u64CD\u4F5C" aria-hidden="true">#</a> 4.2 QBC \u8BE6\u7EC6\u64CD\u4F5C</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//1.\u521B\u5EFA\u67E5\u8BE2\u5BF9\u8C61    </span>
    <span class="token comment">//\u521B\u5EFACriteria\u67E5\u8BE2\u5BF9\u8C61</span>
    <span class="token class-name">Criteria</span> c<span class="token operator">=</span>session<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u67E5\u8BE2\u6240\u6709\u7684**\u5BF9\u8C61\u3002</span>
    <span class="token comment">//\u521B\u5EFA\u79BB\u7EBFCriteria\u5BF9\u8C61</span>
    <span class="token class-name">DetachedCriteria</span> dc <span class="token operator">=</span> <span class="token class-name">DetachedCriteria</span><span class="token punctuation">.</span><span class="token function">forClass</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Criteria</span> c <span class="token operator">=</span> dc<span class="token punctuation">.</span><span class="token function">getExecutableCriteria</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2.\u6DFB\u52A0\u67E5\u8BE2\u53C2\u6570</span>
    c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Restrictions</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C5E\u6027\u540D&quot;</span><span class="token punctuation">,</span>\u5C5E\u6027\u503C<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9664\u4E86eq(==)\uFF0C\u8FD8\u6709\u4E0B\u9762\u8FD9\u4E9B\uFF1A</span>
    <span class="token comment">//\uFF08&gt;,gt\uFF09 \uFF08&gt;=,ge\uFF09 \uFF08&lt;,lt\uFF09 \uFF08&lt;=,le\uFF09\uFF08!=,ne\uFF09 \uFF08between and,between\uFF09\uFF08is null,isNull\uFF09</span>
    <span class="token comment">//\uFF08Nullis not null,isNotNull\uFF09\u8FD8\u6709\u51E0\u4E2A\u4E00\u6837\u7684\uFF1Ain\u3001like\u3001or\u3001and</span>
    c<span class="token punctuation">.</span><span class="token function">setFirstResult</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u5206\u9875\u4FE1\u606F</span>
    c<span class="token punctuation">.</span><span class="token function">setMaxResults</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u5206\u9875\u4FE1\u606F</span>
    c<span class="token punctuation">.</span><span class="token function">setProjection</span><span class="token punctuation">(</span><span class="token class-name">Projections</span><span class="token punctuation">.</span><span class="token function">rowCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u805A\u5408\u51FD\u6570\uFF0C\u6B64\u5904\u4E3A\u67E5\u8BE2\u603B\u884C\u6570</span>
    c<span class="token punctuation">.</span><span class="token function">addOrder</span><span class="token punctuation">(</span><span class="token class-name">Order</span><span class="token punctuation">.</span><span class="token function">desc</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C5E\u6027\u540D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u6392\u5E8F\u3002desc(\u964D\u5E8F)\u3001asc(\u5347\u5E8F)</span>
<span class="token comment">//3.\u67E5\u8BE2\u5E76\u83B7\u53D6\u7ED3\u679C</span>
    c<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u65B9\u5F0F\u4E00</span>
    \u5BF9\u8C61 <span class="token operator">*</span> <span class="token operator">=</span> <span class="token punctuation">(</span>\u5F3A\u8F6C<span class="token operator">*</span><span class="token punctuation">)</span>c<span class="token punctuation">.</span><span class="token function">uniqueResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u65B9\u5F0F\u4E8C</span>
    <span class="token class-name">List</span><span class="token operator">&lt;</span>\u6CDB\u578B<span class="token operator">&gt;</span> list <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token operator">&lt;</span>\u6CDB\u578B<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token function">getHibernateTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findByCriteria</span><span class="token punctuation">(</span>dc<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u65B9\u5F0F\u4E09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u672C\u5730sql\u67E5\u8BE2-\u590D\u6742\u7684\u4E1A\u52A1\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_5-\u672C\u5730sql\u67E5\u8BE2-\u590D\u6742\u7684\u4E1A\u52A1\u67E5\u8BE2" aria-hidden="true">#</a> 5. \u672C\u5730SQL\u67E5\u8BE2 **(**\u590D\u6742\u7684\u4E1A\u52A1\u67E5\u8BE2)</h2><ul><li>\u9002\u5408\u573A\u666F\uFF1A\u590D\u6742\u7684\u4E1A\u52A1\u67E5\u8BE2</li><li>\u7F3A\u70B9\uFF1A\u65E0\u6CD5\u8DE8\u5E73\u53F0</li></ul><h3 id="_5-1-\u539F\u751Fsql\u7B80\u5355\u5B9E\u7528" tabindex="-1"><a class="header-anchor" href="#_5-1-\u539F\u751Fsql\u7B80\u5355\u5B9E\u7528" aria-hidden="true">#</a> 5.1 \u539F\u751FSQL\u7B80\u5355\u5B9E\u7528</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        <span class="token comment">//\u5C06\u6240\u6709\u7684\u8BB0\u5F55\u5C01\u88C5\u6210User\u5BF9\u8C61\u5B58\u8FDBList\u96C6\u5408\u4E2D</span>
        <span class="token class-name">SQLQuery</span> sqlQuery <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createSQLQuery</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEntity</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span> list <span class="token operator">=</span> sqlQuery<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-\u539F\u751Fsql\u8BE6\u7EC6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_5-2-\u539F\u751Fsql\u8BE6\u7EC6\u64CD\u4F5C" aria-hidden="true">#</a> 5.2 \u539F\u751FSQL\u8BE6\u7EC6\u64CD\u4F5C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//1.\u4E66\u5199sql\u8BED\u53E5
    String sql = &quot;\u2026\u2026limit ?,?&quot;;
//2.\u521B\u5EFAsql\u67E5\u8BE2\u5BF9\u8C61
    SQLQuery query = session.createSQLQuery(sql);
//3.\u8BBE\u7F6E\u67E5\u8BE2\u53C2\u6570
    query.addEntity(**.class); //\u6307\u5B9A\u7ED3\u679C\u96C6\u5C01\u88C5\u5230\u67D0\u5BF9\u8C61\u4E2D
    query.setParameter(0,\u7D22\u5F150\u7684\u6570\u636E); //?\u53C2\u6570
//4.\u67E5\u8BE2\u5E76\u83B7\u53D6\u7ED3\u679C
    List&lt;\u7C7B\u540D&gt; list = query.list(); //\u8BBE\u7F6E\u6B65\u9AA43
    List&lt;Object[]&gt; list = query.list(); //\u672A\u8BBE\u7F6E\u6B65\u9AA43
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,29),r={href:"https://www.yuque.com/yiwang/java/sbvuni",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"Hibernate",-1),d={href:"https://cloud.tencent.com/developer/article/1010155",target:"_blank",rel:"noopener noreferrer"},m=o("Hibernate\u7684\u56DB\u79CD\u67E5\u8BE2\u65B9\u5F0F\uFF08\u4E3B\u952E\u67E5\u8BE2\uFF0CHQL\u67E5\u8BE2\uFF0CCriteria");function v(b,h){const s=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[k,a(s)])]),n("p",null,[n("a",d,[m,a(s)])])])}var f=t(i,[["render",v],["__file","hibernate-x-query.html.vue"]]);export{f as default};
