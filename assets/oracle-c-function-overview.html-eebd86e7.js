import{_ as s,W as n,X as a,a0 as e}from"./framework-0cf5f349.js";const p={},t=e(`<h1 id="oracle预定义函数" tabindex="-1"><a class="header-anchor" href="#oracle预定义函数" aria-hidden="true">#</a> Oracle预定义函数</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>oralce 的函数分为</p><ul><li>单行函数 <ul><li>字符函数</li><li>日期函数</li><li>数字函数</li><li>转换函数</li></ul></li><li>分组函数（后续介绍）</li></ul><blockquote><p>学前知识：哑表 dual</p><p>dual 是一个虚拟表，辅助查找和运算，通常用在select语句中，作为查询的目标表结构，oracle保证dual里面永远只有一条记录</p><p>例如：</p><p>显示1+1 的结果，可以看出，dual很多时候是为了构成select的标准语法</p><p>select 1+1 from dual;</p></blockquote><h2 id="_2-字符函数" tabindex="-1"><a class="header-anchor" href="#_2-字符函数" aria-hidden="true">#</a> 2. 字符函数</h2><ol><li><p>LOWER:转换成小写</p></li><li><p>UPPER:转换成大写</p></li><li><p>INITCAP:首字母变成大写，其余都小写</p></li><li><p>CONCAT:字符串的连接</p></li><li><p>SUBSTR(str,start,length)或者SUBSTR(str,start):字符串的截取</p></li><li><p>LENGTH:求字符串的长度</p></li><li><p>NVL : 转换null 的值。(前边已经用过)</p></li></ol><p>nvl2:</p><ol start="8"><li>DECODE：</li></ol><h3 id="_2-1-lower-把字符转为小写" tabindex="-1"><a class="header-anchor" href="#_2-1-lower-把字符转为小写" aria-hidden="true">#</a> 2.1 LOWER 把字符转为小写</h3><p>例如：把&#39;HELLO&#39; 转换为小写</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> lower<span class="token punctuation">(</span><span class="token string">&#39;HELLO&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如: 把s_emp 表中的last_name 列的值转换为小写</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> lower<span class="token punctuation">(</span>last_name<span class="token punctuation">)</span>
<span class="token keyword">from</span> s_emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-upper-把字符转换为大写" tabindex="-1"><a class="header-anchor" href="#_2-2-upper-把字符转换为大写" aria-hidden="true">#</a> 2.2 UPPER 把字符转换为大写</h3><p>例如:把&#39;world&#39;转换为大写</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> upper<span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:把s_emp 表中的last_name 列的值转换为大写</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> upper<span class="token punctuation">(</span>last_name<span class="token punctuation">)</span>
<span class="token keyword">from</span> s_emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:查询s_emp 表中名字为Ngao 的人信息 这样是查不到:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> last_name<span class="token punctuation">,</span>salary<span class="token punctuation">,</span>dept_id
<span class="token keyword">from</span> s_emp
<span class="token keyword">where</span> last_name<span class="token operator">=</span><span class="token string">&#39;NGAO&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以查询到了:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> last_name<span class="token punctuation">,</span>salary<span class="token punctuation">,</span>dept_id
<span class="token keyword">from</span> s_emp
<span class="token keyword">where</span> upper<span class="token punctuation">(</span>last_name<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;NGAO&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-initcap-把字符串首字母大写" tabindex="-1"><a class="header-anchor" href="#_2-3-initcap-把字符串首字母大写" aria-hidden="true">#</a> 2.3 initcap 把字符串首字母大写</h3><p>例如:把&#39;hELLO&#39;转换为首字母大写,其余字母小写</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> initcap<span class="token punctuation">(</span><span class="token string">&#39;hELLO&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-concat-把俩个字符串连接在一起-类似之前的-的作用" tabindex="-1"><a class="header-anchor" href="#_2-4-concat-把俩个字符串连接在一起-类似之前的-的作用" aria-hidden="true">#</a> 2.4 concat 把俩个字符串连接在一起(类似之前的||的作用)</h3><p>例如:把&#39;hello&#39;和&#39;world&#39;俩个字符串连接到一起,并且起个别名为msg</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> concat<span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span> msg
<span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:把first_name 和last_name 俩个列的值连接到一起</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> concat<span class="token punctuation">(</span>first_name<span class="token punctuation">,</span>last_name<span class="token punctuation">)</span>
<span class="token keyword">from</span> s_emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-substr-截取字符串" tabindex="-1"><a class="header-anchor" href="#_2-5-substr-截取字符串" aria-hidden="true">#</a> 2.5 substr 截取字符串</h3><p>例如:截取&#39;hello&#39;字符串,从第2 个字符开始,截取后面的3 个字符</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> substr<span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>out: ell</p><h3 id="_2-6-length-获得字符串长度" tabindex="-1"><a class="header-anchor" href="#_2-6-length-获得字符串长度" aria-hidden="true">#</a> 2.6 length 获得字符串长度</h3><p>例如:获得&#39;world&#39;字符串的长度</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> length<span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:获得s_emp 表中last_name 列的每个值的字符长度</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> length<span class="token punctuation">(</span>last_name<span class="token punctuation">)</span>
<span class="token keyword">from</span> s_emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-nvl-替换列中为null-的值" tabindex="-1"><a class="header-anchor" href="#_2-7-nvl-替换列中为null-的值" aria-hidden="true">#</a> 2.7 nvl 替换列中为null 的值</h3><p>nvl(要输出的列名，为空的时候要被替换的值) //要替换的值类型必须要和之前保持一致</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>nvl<span class="token punctuation">(</span>commission_pct<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">from</span> s_emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-7-1-nvl与nvl2两个函数的用法和区别" tabindex="-1"><a class="header-anchor" href="#_2-7-1-nvl与nvl2两个函数的用法和区别" aria-hidden="true">#</a> 2.7.1 NVL与NVL2两个函数的用法和区别？</h4><p>NVL (expr1, expr2)：expr1为NULL，返回expr2；不为NULL，返回expr1。注意两者的类型要一致</p><p>NVL2 (expr1, expr2, expr3) ：expr1不为NULL，返回expr2；为NULL，返回expr3。expr2和expr3类型不同的话，expr3会转换为expr2的类型</p><h3 id="_2-8-instr-查找字符串" tabindex="-1"><a class="header-anchor" href="#_2-8-instr-查找字符串" aria-hidden="true">#</a> 2.8 instr 查找字符串</h3><p>INSTR方法的格式为</p><ul><li>INSTR(源字符串, 要查找的字符串, 从第几个字符开始, 要找到第几个匹配的序号)</li><li>返回找到的位置，如果找不到则返回0.</li></ul><p>例如：INSTR(&#39;CORPORATE FLOOR&#39;,&#39;OR&#39;, 3, 2)中，源字符串为&#39;CORPORATE FLOOR&#39;,在字符串中查找&#39;OR&#39;，从第三个字符位置开始查找&quot;OR&quot;，取第三个字后第2个匹配项的位置。</p><p>默认查找顺序为从左到右。当起始位置为负数的时候，从右边开始查找。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> INSTR<span class="token punctuation">(</span><span class="token string">&#39;CORPORATE FLOOR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;OR&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;aaa&quot;</span> <span class="token keyword">FROM</span> DUAL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out: 14</p><h2 id="_3-数字函数" tabindex="-1"><a class="header-anchor" href="#_3-数字函数" aria-hidden="true">#</a> 3. 数字函数</h2><ol><li><p>ROUND:四舍五入</p></li><li><p>TRUNC:截取，不进行四舍五入</p></li><li><p>MOD:取余</p></li></ol><h3 id="_3-1-round-四舍五入" tabindex="-1"><a class="header-anchor" href="#_3-1-round-四舍五入" aria-hidden="true">#</a> 3.1 round 四舍五入</h3><p><strong>切记-1 代表保存小数点后一位，0 保留到个位，1 保留到10 位</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>   <span class="token function">round</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span>arg2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>第一个参数表示要进行四舍五入操作的数字</p></li><li><p>第二个参数表示保留到哪一位(负数代表小数点之前，0，正数代表小数点之后)</p></li></ul><p>0 代表保留到个位！！-1 代表保存到十位</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>   <span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">46</span>
   <span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">45.7</span>
   <span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">45.67</span>
   <span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">50</span>
   <span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">0</span>
   <span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">55.67</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-trunc-截取到某一位" tabindex="-1"><a class="header-anchor" href="#_3-2-trunc-截取到某一位" aria-hidden="true">#</a> 3.2 trunc 截取到某一位</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>trunc<span class="token punctuation">(</span>arg1<span class="token punctuation">,</span>arg2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>和round 的用法一样,但是trunc 只舍去不进位</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">45</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">45.6</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">45.67</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">40</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">45.67</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">0</span>
<span class="token keyword">select</span> trunc<span class="token punctuation">(</span><span class="token number">55.67</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-mod-取余" tabindex="-1"><a class="header-anchor" href="#_3-3-mod-取余" aria-hidden="true">#</a> 3.3 mod 取余</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token function">mod</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span>arg2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>第一个参数表示要进行取余操作的数字</li><li>第二个参数表示参数1 和谁取余 例如: 把10 和3 进行取余(10 除以3 然后获取余数) select mod(10,3) from dual;</li></ul><h2 id="_4-日期函数" tabindex="-1"><a class="header-anchor" href="#_4-日期函数" aria-hidden="true">#</a> 4. 日期函数</h2><ol><li><p>sysdate 关键字</p></li><li><p>MONTHS_BETWEEN:两个日期之间的月数，如果是正数前面的值大于后面的值</p></li><li><p>ADD_MONTHS:在指定日期上增加月数</p></li><li><p>NEXT_DAY:指定日期的下一个星期几是哪天</p></li><li><p>LAST_DAY:指定日期的最后一天</p></li><li><p>ROUND:对指定日期进行四舍五入</p></li><li><p>TRUNC:对指定日期进行截取</p></li></ol><h3 id="_4-1-sysdate-关键字" tabindex="-1"><a class="header-anchor" href="#_4-1-sysdate-关键字" aria-hidden="true">#</a> 4.1 sysdate 关键字</h3><p>表示系统的当前时间</p><ul><li><p>显示时间:当前时间</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT sysdate from dual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ OUT: 2021-02-18 15:39:07</p></li><li><p>注意：sysdate 进行加减操作的时候，单位是天</p><p>例如明天这个时候</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> sysdate<span class="token operator">+</span><span class="token number">1</span> <span class="token keyword">from</span> dual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out: 2021-02-19 15:41:12</p></li><li><p>例如显示1小时之后的时候</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT sysdate+1/24 from dual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out: 2021-02-18 16:42:14</p></li></ul><h3 id="_4-2-months-between" tabindex="-1"><a class="header-anchor" href="#_4-2-months-between" aria-hidden="true">#</a> 4.2 months_between</h3><p>俩个时间点之间相差多少个月(单位是月)</p><p>30 天之后和现在相差多少个月</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> MONTHS_BETWEEN <span class="token punctuation">(</span>sysdate<span class="token operator">+</span><span class="token number">30</span><span class="token punctuation">,</span> sysdate<span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out: 1.06451612</p><h3 id="_4-3-add-months" tabindex="-1"><a class="header-anchor" href="#_4-3-add-months" aria-hidden="true">#</a> 4.3 add_months</h3><p>返回一个日期数据:表示一个时间点,往后推x 月的日期</p><p>例如:</p><p>当前时间往后推2 个月</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT  ADD_MONTHS (sysdate, 2) from dual;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out: 2021-04-18 15:56:02</p><h3 id="_4-4-next-day" tabindex="-1"><a class="header-anchor" href="#_4-4-next-day" aria-hidden="true">#</a> 4.4 next_day</h3><p>返回一个日期数据:表示一个时间点后的下一个星期几在哪一天</p><p>例如: 当前时间的下一个星期5 是哪一个天</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT  NEXT_DAY(SYSDATE, &#39;FRIDAY&#39;) FROM DUAL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>OUT: 2021-02-19 15:57:26</p><h3 id="_4-5-last-day" tabindex="-1"><a class="header-anchor" href="#_4-5-last-day" aria-hidden="true">#</a> 4.5 last_day</h3><p>返回一个日期数据:表示一个日期所在月份的最后一天</p><p>例如: 当前日期所在月份的最后一天</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT  LAST_DAY(SYSDATE ) FROM DUAL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>OUT: 2021-02-28 16:00:44</p><h3 id="_4-6-round" tabindex="-1"><a class="header-anchor" href="#_4-6-round" aria-hidden="true">#</a> 4.6 round</h3><p>对日期进四舍五入,返回操作后的日期数据。逢16 日往月份进一,逢7 月往年份进一</p><p>round(sysdate,&#39;year/y/yy/yyy/yyyy&#39;) 年7 月节点 round(sysdate,&#39;mm/month&#39;) 月16 号节点 round(sysdate,&#39;d/day&#39;) 星期星期四节点 round(sysdate,&#39;dd&#39;) : 天-》12 点节点 例如: 把当前日期四舍五入到月（年月日.时分秒把这个看错数字就可以了） 今天2021 年2 月18 日四舍五入到月，就要看日是否大于16？大于进一，不大于不进一，同时舍弃为1</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>  <span class="token function">ROUND</span><span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span> <span class="token string">&#39;mm&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out: 2021-03-01 00:00:00</p><p>把当前日期四舍五入到年 大致算一下，今天已经2 月了，所以不满足大于节点7 进一位，同时舍弃年前面的值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>  <span class="token function">ROUND</span><span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span> <span class="token string">&#39;yyyy&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> DUAL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out: 2021-01-01 00:00:00</p><h3 id="_4-7-trunc" tabindex="-1"><a class="header-anchor" href="#_4-7-trunc" aria-hidden="true">#</a> 4.7 trunc</h3><p>对日期进行截取和round 类似,但是只舍弃不进位 trunc（sysdate,&#39;yyyy/year&#39;） --返回当年第一天。 trunc（sysdate,&#39;mm/month&#39;） --返回当月第一天。 trunc（sysdate,&#39;d/day&#39;） --返回当前星期的第一天。 trunc（sysdate,&#39;dd&#39;）--返回当前年月日 截取和round 基本是一样的只是，不进位而已。</p><h2 id="_5-类型转换函数" tabindex="-1"><a class="header-anchor" href="#_5-类型转换函数" aria-hidden="true">#</a> 5. 类型转换函数</h2><ol><li>TO_CHAR 将日期或者数值转换成字符串</li><li>TO_NUMBER 将字符串转换成数字</li><li>TO_DATE 将日期字符串转换成日期</li></ol><h3 id="_5-1-to-char-把日期转换为字符" tabindex="-1"><a class="header-anchor" href="#_5-1-to-char-把日期转换为字符" aria-hidden="true">#</a> 5.1 to_char 把日期转换为字符</h3><p>例如: 把当前日期按照指定格式转换为字符串</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>  TO_CHAR<span class="token punctuation">(</span>SYSDATE<span class="token punctuation">,</span><span class="token string">&#39;yyyy-MM-dd&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out: 2021-02-18</p><p>日期格式： yyyy/YYYY：四位数的年份 rrrr：四位数的年份 yy：两位数的年份 rr：两位数的年份 mm：两位数的月份（数字） D：一周的第几天 DD：一月的第几天 DDD ：一年的第几天 YEAR：英文的年份 MONTH：英文全称的月份 mon：英文简写的月份 ddsp：英文的第几天 ddspth：英文序列数的第几天 DAY：全英文的星期 DY：简写的英文星期 hh：小时 mi：分钟 ss：秒 AM:上午 PM:下午</p><h3 id="_5-2-to-char-把数字转换为字符" tabindex="-1"><a class="header-anchor" href="#_5-2-to-char-把数字转换为字符" aria-hidden="true">#</a> 5.2 to_char 把数字转换为字符</h3><blockquote><p>L : 本地货币符号 $ : $ . : 小数点 , : 千分符 9 : 0-9 0 : 0-9, 如果位数不足，强制补0</p></blockquote><p>例如:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> to_char<span class="token punctuation">(</span>salary<span class="token punctuation">,</span><span class="token string">&#39;$999,999.00&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> s_emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>fm 表示去除结果显示中的开始的空格 L 表示系统本地的货币符号 select to_char(salary,&#39;fmL999,999.00&#39;) from s_emp; to_number 把字符转换为数字</p><h3 id="_5-3-to-number-把字符转换为数字" tabindex="-1"><a class="header-anchor" href="#_5-3-to-number-把字符转换为数字" aria-hidden="true">#</a> 5.3 to_number 把字符转换为数字</h3><p>例如:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> to_number<span class="token punctuation">(</span><span class="token string">&#39;1000&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>out:1000</p><h3 id="_5-4-to-date-把字符转换为日期" tabindex="-1"><a class="header-anchor" href="#_5-4-to-date-把字符转换为日期" aria-hidden="true">#</a> 5.4 to_date 把字符转换为日期</h3><p>.TO_DATE(char, [&#39;fmt&#39;]):</p><p>例如</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> TO_DATE <span class="token punctuation">(</span><span class="token string">&#39;10-September-1992&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;dd-Month-YYYY&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>out: 1992-09-10 00:00:00</p><p>.使用format 的元素格式 例如:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> to_date<span class="token punctuation">(</span><span class="token string">&#39;10-12-2016&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;dd-mm-yyyy&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> to_date<span class="token punctuation">(</span><span class="token string">&#39;25-5 月-95&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;dd-month-yy&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-exists-和not-exists-用法" tabindex="-1"><a class="header-anchor" href="#_6-exists-和not-exists-用法" aria-hidden="true">#</a> 6. exists 和not exists 用法</h2><p>SQL 代码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> Resc_id <span class="token keyword">from</span> dbo<span class="token punctuation">.</span>Res_Coach
<span class="token keyword">where</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Res_Coach <span class="token keyword">where</span> Resc_id <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查询原理： 遍历dbo.Res_Coach 每一条，同时处理where 条件（EXISTS (select * from Res_Coach where Resc_id=0) 判断结果为true 或者false），为true 时拿出该条，false 时，放弃该条记录。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 1、where 条件中的子查询和主查询没关系</span>
<span class="token keyword">select</span> Resc_id
<span class="token keyword">from</span> dbo<span class="token punctuation">.</span>Res_Coach
<span class="token keyword">where</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">select</span> Rese_id <span class="token keyword">from</span> dbo<span class="token punctuation">.</span>Res_Excellent <span class="token keyword">where</span> Rese_id <span class="token operator">Is</span> <span class="token boolean">null</span> <span class="token punctuation">)</span>
<span class="token comment">-- 2、where 条件中得子查询和主查询有关系</span>
<span class="token keyword">select</span> Resc_id
<span class="token keyword">from</span> dbo<span class="token punctuation">.</span>Res_Coach
<span class="token keyword">where</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span><span class="token keyword">select</span> Resc_id <span class="token keyword">from</span> dbo<span class="token punctuation">.</span>Res_Coach <span class="token keyword">where</span> Resc_id <span class="token operator">Is</span> <span class="token boolean">null</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例备注：不管where 条件中得子查询和主查询有没有关系，遍历主查询中得每一条时，判断where 条件，exists 结果为真，where 条件返回true，拿出该条记录，where 条件返回false， 不返回该记录。</p><h3 id="_6-1-exists-和in-的选择" tabindex="-1"><a class="header-anchor" href="#_6-1-exists-和in-的选择" aria-hidden="true">#</a> 6.1 EXISTS 和IN 的选择</h3><p>如果查询的两个表大小相当，那么用in 和exists 差别不大。如果两个表中一个较小，一个是大表，则子查询表大的 用exists，子查询表小的用in</p><h2 id="_7-decode函数" tabindex="-1"><a class="header-anchor" href="#_7-decode函数" aria-hidden="true">#</a> 7. DECODE函数</h2><p>Oracle DECODE函数是<strong>Oracle公司独家提供的功能</strong>，它是一个功能很强的函数。它虽然<strong>不是SQL的标准</strong>,但对于性能非常有用。</p><ol><li><p>DECODE 中的if-then-else逻辑</p><p>在逻辑编程中，经常用到If – Then –Else 进行逻辑判断。在DECODE的语法中，实际上就是这样的逻辑处理过程。它的语法如下： DECODE(value, if1, then1, if2,then2, if3,then3, . . . else ) Value 代表某个表的任何类型的任意列或一个通过计算所得的任何结果。当每个value值被测试，如果value的值为if1，Decode 函数的结果是then1；如果value等于if2，Decode函数结果是then2；等等。事实上，可以给出多个if/then 配对。如果value结果不等于给出的任何配对时，Decode 结果就返回else 。 需要注意的是，这里的if、then及else 都可以是函数或计算表达式。 含义解释：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>DECODE<span class="token punctuation">(</span>条件<span class="token punctuation">,</span>值<span class="token number">1</span><span class="token punctuation">,</span>翻译值<span class="token number">1</span><span class="token punctuation">,</span>值<span class="token number">2</span><span class="token punctuation">,</span>翻译值<span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>值n<span class="token punctuation">,</span>翻译值n<span class="token punctuation">,</span>缺省值<span class="token punctuation">)</span>

该函数的含义如下：
<span class="token keyword">IF</span> 条件<span class="token operator">=</span>值<span class="token number">1</span> <span class="token keyword">THEN</span>
<span class="token keyword">RETURN</span><span class="token punctuation">(</span>翻译值<span class="token number">1</span><span class="token punctuation">)</span>
ELSIF 条件<span class="token operator">=</span>值<span class="token number">2</span> <span class="token keyword">THEN</span>
<span class="token keyword">RETURN</span><span class="token punctuation">(</span>翻译值<span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
ELSIF 条件<span class="token operator">=</span>值n <span class="token keyword">THEN</span>
<span class="token keyword">RETURN</span><span class="token punctuation">(</span>翻译值n<span class="token punctuation">)</span>

<span class="token keyword">ELSE</span>
<span class="token keyword">RETURN</span><span class="token punctuation">(</span>缺省值<span class="token punctuation">)</span>
<span class="token keyword">END</span> <span class="token keyword">IF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,139),l=[t];function o(c,i){return n(),a("div",null,l)}const r=s(p,[["render",o],["__file","oracle-c-function-overview.html.vue"]]);export{r as default};