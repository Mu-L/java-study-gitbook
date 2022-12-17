import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as i,d as r,e as l,r as c}from"./app.89cd0885.js";const p={},o=r(`<h1 id="rabbitmq\u7BA1\u7406-\u5E94\u7528\u4E0E\u96C6\u7FA4\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u7BA1\u7406-\u5E94\u7528\u4E0E\u96C6\u7FA4\u7BA1\u7406" aria-hidden="true">#</a> RabbitMQ\u7BA1\u7406 - \u5E94\u7528\u4E0E\u96C6\u7FA4\u7BA1\u7406</h1><p>\u672C\u7AE0\u4E3B\u8981\u4ECB\u7ECD\u5E94\u7528\u4E0E\u96C6\u7FA4\u76F8\u5173\u7684\u4E00\u4E9B\u64CD\u4F5C\u7BA1\u7406\u547D\u4EE4\uFF0C\u5305\u62EC\u5173\u95ED\u3001\u91CD\u7F6E\u3001\u5F00\u542F\u670D\u52A1\uFF0C\u8FD8\u6709\u5EFA\u7ACB\u96C6\u7FA4\u7684\u4E00\u4E9B\u4FE1\u606F\u3002\u6709\u5173\u96C6\u7FA4\u642D\u5EFA\u8BF7\u53C2\u8003\u540E\u7EED\u7684\u300CRabbitMQ \u8FD0\u7EF4\u300D\u7AE0\u8282</p><h2 id="_1-\u5E94\u7528\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_1-\u5E94\u7528\u7BA1\u7406" aria-hidden="true">#</a> 1. \u5E94\u7528\u7BA1\u7406</h2><h3 id="_1-1-\u505C\u6B62\u8FD0\u884C-stop" tabindex="-1"><a class="header-anchor" href="#_1-1-\u505C\u6B62\u8FD0\u884C-stop" aria-hidden="true">#</a> 1.1 \u505C\u6B62\u8FD0\u884C stop</h3><p>\u7528\u4E8E\u505C\u6B62\u8FD0\u884C RabbitMQ \u548C Erlang \u865A\u62DF\u673A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl stop <span class="token punctuation">[</span>pid_file<span class="token punctuation">]</span>

\u53C2\u6570\uFF1A
	pid_file\uFF1A\u901A\u8FC7 rabbitmq-server \u547D\u4EE4\u542F\u52A8 RabbitMQ \u670D\u52A1\u521B\u5EFA\u7684\u3002\u9ED8\u8BA4\u60C5\u51B5\u5B58\u653E\u4E0E rabbitmq\u5B89\u88C5\u76EE\u5F55/var/lib/rabbitmq/mnesia \u76EE\u5F55\u4E0B\uFF1B\u53EF\u4EE5\u901A\u8FC7 RABBITMQ_PID_FILE \u73AF\u5883\u53D8\u91CF\u6765\u6539\u53D8\u5B58\u653E\u8DEF\u5F84\u3002
			  \u6CE8\u610F\uFF1A\u901A\u8FC7 rabbitmq-server <span class="token parameter variable">--detach</span> \u8FD9\u4E2A\u540E\u7F00\u547D\u4EE4\u542F\u52A8\u4E0D\u4F1A\u751F\u6210 pid_file \u6587\u4EF6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6CE8\u610F\u554A\uFF0C\u6211\u4EEC\u901A\u8FC7 rabbitmq-server -detached \u540E\u53F0\u8FD0\u884C\u542F\u52A8\u7684</span>
<span class="token comment"># \u53EF\u4EE5\u901A\u8FC7\u5B83\u6765\u505C\u6B62\uFF0C\u800C\u4E14\u5199\u4E00\u4E2A\u9519\u8BEF\u7684\u8DEF\u5F84\u4E5F\u53EF\u4EE5\u505C\u6B62\u8FD0\u884C</span>
<span class="token comment"># \u901A\u8FC7\u4E0B\u9762\u8BB2\u89E3\u7684 shutdown \u547D\u4EE4\uFF0C\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A pid \u6216\u8BB8\u4E0D\u662F\u771F\u6B63\u7684 pid \u6587\u4EF6</span>
<span class="token comment"># \u56E0\u4E3A\u5728\u542F\u52A8\u7684\u65F6\u5019\u6253\u5370\u4E86 Warning: PID file not written; -detached was passed.</span>
<span class="token punctuation">[</span>root@study mnesia<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl stop /opt/rabbitmq/var/lib/rabbitmq/mnesia/rabbit@study.pid</span>
Stopping and halting <span class="token function">node</span> rabbit@study
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u505C\u6B62\u8FD0\u884C-shutdown" tabindex="-1"><a class="header-anchor" href="#_1-2-\u505C\u6B62\u8FD0\u884C-shutdown" aria-hidden="true">#</a> 1.2 \u505C\u6B62\u8FD0\u884C shutdown</h3><p>\u7528\u4E8E\u505C\u6B62\u8FD0\u884C RabbitMQ \u548C Erlang \u865A\u62DF\u673A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u8BE5\u6307\u4EE4\u4F1A\u963B\u585E\u77E5\u9053 Erlang \u865A\u62DF\u673A\u8FDB\u7A0B\u9000\u51FA\u3002\u5982\u679C RabbitMQ \u6CA1\u6709\u6210\u529F\u5173\u95ED\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u975E\u96F6\u503C\u3002</p><p>\u4E0E stop \u4E0D\u540C\u7684\u662F\uFF0C\u4E0D\u9700\u8981\u6307\u5B9A pid_file\uFF0C\u800C\u4E14\u53EF\u4EE5\u963B\u585E\u7B49\u5F85\u6307\u5B9A\u8FDB\u7A0B\u7684\u5173\u95ED</p><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study mnesia<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl shutdown</span>
Shutting down RabbitMQ <span class="token function">node</span> rabbit@study running at PID <span class="token number">19531</span>
Waiting <span class="token keyword">for</span> PID <span class="token number">19531</span> to terminate
RabbitMQ <span class="token function">node</span> rabbit@study running at PID <span class="token number">19531</span> successfully shut down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-\u505C\u6B62-rabbitmq-\u670D\u52A1\u5E94\u7528-stop-app" tabindex="-1"><a class="header-anchor" href="#_1-3-\u505C\u6B62-rabbitmq-\u670D\u52A1\u5E94\u7528-stop-app" aria-hidden="true">#</a> 1.3 \u505C\u6B62 RabbitMQ \u670D\u52A1\u5E94\u7528\uFF1Astop_app</h3><p>\u505C\u6B62 RabbitMQ \u670D\u52A1\u5E94\u7528\uFF0C\u4F46\u662F Erlang \u865A\u62DF\u673A\u8FD8\u662F\u5904\u4E8E\u8FD0\u884C\u72B6\u6001\u3002\u6B64\u547D\u4EE4\u7684\u6267\u884C\u4F18\u5148\u4E8E\u5176\u4ED6\u7BA1\u7406\u64CD\u4F5C\uFF08\u8FD9\u4E9B\u7BA1\u7406\u64CD\u4F5C\u9700\u8981\u5148\u505C\u6B62 RabbitMQ \u5E94\u7528\uFF09\uFF0C\u6BD4\u5982 rabbitmqct reset</p><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study mnesia<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl stop_app</span>
Stopping rabbit application on <span class="token function">node</span> rabbit@study
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-\u542F\u52A8-rabbitmq-\u670D\u52A1\u5E94\u7528-start-app" tabindex="-1"><a class="header-anchor" href="#_1-4-\u542F\u52A8-rabbitmq-\u670D\u52A1\u5E94\u7528-start-app" aria-hidden="true">#</a> 1.4 \u542F\u52A8 RabbitMQ \u670D\u52A1\u5E94\u7528\uFF1Astart_app</h3><p>\u8BE5\u547D\u4EE4\u7684\u5178\u578B\u5E94\u7528\u573A\u666F\u662F\uFF1A\u5728\u6267\u884C\u4E86\u5176\u4ED6\u7684\u7BA1\u7406\u64CD\u4F5C\u4E4B\u540E\uFF0C\u91CD\u65B0\u542F\u52A8\u4E4B\u524D\u505C\u6B62\u7684 RabbitMQ \u5E94\u7528\uFF0C\u6BD4\u5982 rabbitmqct reset</p><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study mnesia<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl start_app</span>
Starting <span class="token function">node</span> rabbit@study
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-\u7B49\u5F85-rabbitmq-\u5E94\u7528\u7684\u542F\u52A8-wait" tabindex="-1"><a class="header-anchor" href="#_1-5-\u7B49\u5F85-rabbitmq-\u5E94\u7528\u7684\u542F\u52A8-wait" aria-hidden="true">#</a> 1.5 \u7B49\u5F85 RabbitMQ \u5E94\u7528\u7684\u542F\u52A8\uFF1Await</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl <span class="token function">wait</span> <span class="token punctuation">[</span>pid_file<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B49\u5F85 RabbitMQ \u5E94\u7528\u7684\u542F\u52A8\u3002\u5B83\u4F1A <strong>\u7B49\u5230 pid_file \u7684\u521B\u5EFA</strong>\uFF0C\u7136\u540E <strong>\u7B49\u5F85 pid_file \u4E2D\u6240\u4EE3\u8868\u7684\u8FDB\u7A0B\u542F\u52A8</strong>\u3002\u5F53\u6307\u5B9A\u7684\u8FDB\u7A0B\u6CA1\u6709\u542F\u52A8 RabbitMQ \u5E94\u7528\u800C\u5173\u95ED\u65F6\u5C06\u8FD4\u56DE\u5931\u8D25\u3002</p><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study mnesia<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl wait /opt/rabbitmq/var/lib/rabbitmq/mnesia/rabbit@study.pid</span>
Waiting <span class="token keyword">for</span> rabbit@study
pid is <span class="token number">18130</span>
Error: process_not_running
<span class="token comment"># \u524D\u9762\u8BB2\u5230\u542F\u52A8\u65F6\uFF0C\u6709\u4E00\u4E2A\u8B66\u544A Warning: PID file not written; </span>
<span class="token comment"># \u5728\u8FD9\u91CC\u4E5F\u80FD\u8BC1\u660E\u51FA\u6765\uFF0C\u7684\u786E\u6CA1\u6709\u5199\u5165\u3002\u8FD9\u4E2A 18130 \u53EF\u80FD\u662F\u6700\u5F00\u59CB\u7B14\u8005\u4E0D\u5C0F\u5FC3\u76F4\u63A5\u6267\u884C\u4E86 rabbitmq-server \u521B\u5EFA\u7684</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-\u91CD\u7F6E-rabbitmq-\u8282\u70B9-reset" tabindex="-1"><a class="header-anchor" href="#_1-6-\u91CD\u7F6E-rabbitmq-\u8282\u70B9-reset" aria-hidden="true">#</a> 1.6 \u91CD\u7F6E RabbitMQ \u8282\u70B9\uFF1Areset</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06 RabbitMQ \u8282\u70B9\u91CD\u7F6E\u8FD8\u539F\u5230\u6700\u521D\u72B6\u6001\u3002\u5305\u62EC\u4ECE <strong>\u539F\u6765\u6240\u5728\u7684\u96C6\u7FA4\u4E2D\u5220\u9664\u6B64\u8282\u70B9</strong>\uFF0C\u4ECE\u7BA1\u7406\u6570\u636E\u5E93\u4E2D\u5220\u9664\u6240\u6709\u7684\u914D\u7F6E\u6570\u636E\uFF0C\u5982\u5DF2\u914D\u7F6E\u7684\u7528\u6237\u3001vhost \u7B49\u3002\u4EE5\u53CA\u5220\u9664\u6240\u6709\u7684\u6301\u4E45\u5316\u6D88\u606F\u3002</p><p><strong>\u6267\u884C\u8BE5\u547D\u4EE4\u524D\u5FC5\u987B\u505C\u6B62 RabbitMQ \u5E94\u7528</strong>\uFF0C\u6BD4\u5982\u5148\u6267\u884C <code>rabbitmqctl stop_app</code></p><p>\u8FD9\u91CC\u7B14\u8005\u5C31\u4E0D\u5C1D\u8BD5\u5B9E\u8DF5\u4E86\uFF0C\u53EA\u6709\u4E00\u4E2A\u8282\u70B9</p><h3 id="_1-7-\u5F3A\u5236\u91CD\u7F6E-rabbitmq-\u8282\u70B9-force-reset" tabindex="-1"><a class="header-anchor" href="#_1-7-\u5F3A\u5236\u91CD\u7F6E-rabbitmq-\u8282\u70B9-force-reset" aria-hidden="true">#</a> 1.7 \u5F3A\u5236\u91CD\u7F6E RabbitMQ \u8282\u70B9\uFF1Aforce_reset</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl force_reset    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0E reset \u7C7B\u4F3C\uFF0C\u4E0D\u8FC7\u5B83\u65E0\u8BBA\u5F53\u524D\u7BA1\u7406\u6570\u636E\u5E93\u7684\u72B6\u6001\u548C\u96C6\u7FA4\u914D\u7F6E\u662F\u4EC0\u4E48\uFF0C\u90FD\u4F1A\u65E0\u6761\u4EF6\u7684\u91CD\u7F6E\u8282\u70B9\u3002<strong>\u53EA\u80FD\u5728\u6570\u636E\u5E93\u6216\u96C6\u7FA4\u914D\u7F6E\u5DF2\u635F\u574F\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528</strong>\u3002</p><h3 id="_1-8-\u914D\u7F6E\u8F6E\u6362\u65E5\u5FD7\u6587\u4EF6-rotate-logs" tabindex="-1"><a class="header-anchor" href="#_1-8-\u914D\u7F6E\u8F6E\u6362\u65E5\u5FD7\u6587\u4EF6-rotate-logs" aria-hidden="true">#</a> 1.8 \u914D\u7F6E\u8F6E\u6362\u65E5\u5FD7\u6587\u4EF6\uFF1Arotate_logs</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl rotate_logs <span class="token punctuation">{</span>suffix<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E RabbitMQ \u8282\u70B9\u8F6E\u6362\u65E5\u5FD7\u6587\u4EF6\u3002RabbitMQ \u8282\u70B9\u4F1A\u5C06\u539F\u6765\u7684\u65E5\u5FD7\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u8FFD\u52A0\u5230\u300C\u539F\u59CB\u540D\u79F0 + \u540E\u7F00\u300D\u7684\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF0C\u7136\u540E\u518D\u5C06\u65B0\u7684\u65E5\u5FD7\u5185\u5BB9\u8BB0\u5F55\u5230\u65B0\u521B\u5EFA\u7684\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF08\u4E0E\u539F\u65E5\u5FD7\u540C\u540D\uFF09\u3002</p><p>\u5F53\u76EE\u6807\u6587\u4EF6\u4E0D\u5B58\u5728\u65F6\uFF0C\u4F1A\u91CD\u65B0\u521B\u5EFA\u3002\u5982\u679C\u4E0D\u6307\u5B9A suffix \u540E\u7F00\uFF0C\u5219\u65E5\u5FD7\u6587\u4EF6\u53EA\u662F\u91CD\u65B0\u6253\u5F00\u800C\u4E0D\u4F1A\u8FDB\u884C\u8F6E\u6362\u3002</p><p>\u5B9E\u8DF5\u7EC3\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u5230\u65E5\u5FD7\u76EE\u5F55</span>
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># cd /opt/rabbitmq/var/log/rabbitmq/</span>
<span class="token punctuation">[</span>root@study rabbitmq<span class="token punctuation">]</span><span class="token comment"># ll</span>
\u603B\u7528\u91CF <span class="token number">60</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">59781</span> <span class="token number">6</span>\u6708  <span class="token number">29</span> 06:04 rabbit@study.log
-rw-r--r--. <span class="token number">1</span> root root     <span class="token number">0</span> <span class="token number">6</span>\u6708  <span class="token number">23</span> <span class="token number">10</span>:23 rabbit@study-sasl.log

<span class="token comment"># \u6267\u884C\u8F6E\u6362\u64CD\u4F5C</span>
<span class="token punctuation">[</span>root@study rabbitmq<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl rotate_logs .1</span>
Rotating logs to files with suffix <span class="token string">&quot;.1&quot;</span>

<span class="token punctuation">[</span>root@study rabbitmq<span class="token punctuation">]</span><span class="token comment"># ll</span>
\u603B\u7528\u91CF <span class="token number">60</span>
-rw-r--r--. <span class="token number">1</span> root root     <span class="token number">0</span> <span class="token number">6</span>\u6708  <span class="token number">29</span> 06:17 rabbit@study.log
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">59856</span> <span class="token number">6</span>\u6708  <span class="token number">29</span> 06:17 rabbit@study.log.1
-rw-r--r--. <span class="token number">1</span> root root     <span class="token number">0</span> <span class="token number">6</span>\u6708  <span class="token number">29</span> 06:17 rabbit@study-sasl.log
-rw-r--r--. <span class="token number">1</span> root root     <span class="token number">0</span> <span class="token number">6</span>\u6708  <span class="token number">29</span> 06:17 rabbit@study-sasl.log.1
<span class="token comment"># \u53EF\u4EE5\u770B\u5230\u539F\u6765\u7684\u6587\u4EF6\u88AB\u5F52\u6863\u4E86\u4E00\u6837\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-9-\u7F16\u8BD1-hipe-compile" tabindex="-1"><a class="header-anchor" href="#_1-9-\u7F16\u8BD1-hipe-compile" aria-hidden="true">#</a> 1.9 \u7F16\u8BD1\uFF1Ahipe_compile</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl hipe_compile <span class="token punctuation">{</span>directory<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u90E8\u5206 RabbitMQ \u4EE3\u7801\u7528 HiPE \u7F16\u8BD1\uFF0C\u5E76\u5C06\u7F16\u8BD1\u540E\u7684 <code>.beam</code> \u6587\u4EF6\u4FDD\u5B58\u5230\u6307\u5B9A\u7684\u6587\u4EF6\u76EE\u5F55\u4E2D\u3002\u5982\u679C\u8BE5\u76EE\u5F55\u4E0D\u5B58\u5728\u5219\u4F1A\u521B\u5EFA\uFF0C\u5982\u679C\u5B58\u5728\uFF0C\u5219\u5148\u5220\u9664\u91CC\u9762\u7684\u4EFB\u4F55 <code>.beam</code> \u6587\u4EF6\u3002</p><p>\u5982\u679C\u8981\u4F7F\u7528\u9884\u7F16\u8BD1\u7684\u8FD9\u4E9B\u6587\u4EF6\uFF0C\u5219\u9700\u8981\u8BBE\u7F6E <code>RABBITMQ_SERVER_CODE_PATH</code> \u73AF\u5883\u53D8\u91CF\u6765\u6307\u5B9A hipe_compile \u8C03\u7528\u7684\u8DEF\u5F84</p><p>\u540D\u8BCD\u89E3\u91CA\uFF1A</p><ul><li>HiPE\uFF1AHigh Performance Erlang\uFF0C\u662F Erlang \u7248\u7684 JIT \u7F16\u8BD1</li><li><code>.beam</code> \uFF1A\u662F Erlang \u7F16\u8BD1\u5668\u751F\u6210\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u52A0\u8F7D\u5230 Erlang \u865A\u62DF\u673A\u4E2D\u8FD0\u884C\u7684\u6587\u4EF6\u683C\u5F0F</li></ul><p>\u5982\u4E0B\u6240\u793A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study rabbitmq<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl hipe_compile /opt/rabbitmq/tmp/rabbit-hipe/ebin</span>

HiPE compiling:  <span class="token operator">|</span>---------------------------------------------------------<span class="token operator">|</span>
                 <span class="token operator">|</span><span class="token comment">#########################################################|</span>

Compiled <span class="token number">57</span> modules <span class="token keyword">in</span> 221s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136\u77E5\u9053\u6709\u5565\u7528\u5904\uFF0C\u6307\u5B9A\u7684\u65B0\u76EE\u5F55\u91CC\u9762\u7684\u786E\u591A\u4E86\u5F88\u591A <code>.beam</code>ni c \u6587\u4EF6</p><h2 id="_2-\u96C6\u7FA4\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u96C6\u7FA4\u7BA1\u7406" aria-hidden="true">#</a> 2. \u96C6\u7FA4\u7BA1\u7406</h2><p>\u8FD9\u91CC\u53EA\u5217\u51FA\u6765\u547D\u4EE4\uFF0C\u5177\u4F53\u7684\u4F7F\u7528\u8BE6\u89C1\u540E\u7EED\u7AE0\u8282 RabbitMQ \u8FD0\u7EF4;</p><h3 id="_2-1-\u52A0\u5165\u96C6\u7FA4-join-cluster" tabindex="-1"><a class="header-anchor" href="#_2-1-\u52A0\u5165\u96C6\u7FA4-join-cluster" aria-hidden="true">#</a> 2.1 \u52A0\u5165\u96C6\u7FA4\uFF1Ajoin_cluster</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl join_cluster <span class="token punctuation">{</span>cluster_node<span class="token punctuation">}</span> <span class="token punctuation">[</span>--ram<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u8282\u70B9\u8BA1\u5165\u6307\u5B9A\u96C6\u7FA4\u4E2D</p><h3 id="\u96C6\u7FA4\u72B6\u6001-cluster-status" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u72B6\u6001-cluster-status" aria-hidden="true">#</a> \u96C6\u7FA4\u72B6\u6001\uFF1Acluster_status</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl cluster_status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u663E\u793A\u96C6\u7FA4\u72B6\u6001\u3002</p><h3 id="_2-3-\u4FEE\u6539\u96C6\u7FA4\u8282\u70B9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4FEE\u6539\u96C6\u7FA4\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a> 2.3 \u4FEE\u6539\u96C6\u7FA4\u8282\u70B9\u7C7B\u578B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl change_cluster_node_type <span class="token punctuation">{</span>disc <span class="token operator">|</span> <span class="token function">ram</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u96C6\u7FA4\u8282\u70B9\u7684\u7C7B\u578B\uFF0C\u4FEE\u6539\u4E4B\u524D\u9700\u8981\u505C\u6B62 RabbitMQ \u5F15\u7528</p><h3 id="_2-4-\u5220\u9664\u96C6\u7FA4\u8282\u70B9-forget-cluster-node" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5220\u9664\u96C6\u7FA4\u8282\u70B9-forget-cluster-node" aria-hidden="true">#</a> 2.4 \u5220\u9664\u96C6\u7FA4\u8282\u70B9\uFF1Aforget_cluster_node</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl forget_cluster_node <span class="token punctuation">[</span>--offline<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u8282\u70B9\u4ECE\u96C6\u7FA4\u4E2D\u5220\u9664\uFF0C\u5141\u8BB8\u79BB\u7EBF\u6267\u884C\u3002</p><h3 id="_2-5-\u66F4\u65B0\u96C6\u7FA4\u4FE1\u606F-update-cluster-nodes" tabindex="-1"><a class="header-anchor" href="#_2-5-\u66F4\u65B0\u96C6\u7FA4\u4FE1\u606F-update-cluster-nodes" aria-hidden="true">#</a> 2.5 \u66F4\u65B0\u96C6\u7FA4\u4FE1\u606F\uFF1Aupdate_cluster_nodes</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl update_cluster_nodes <span class="token punctuation">{</span>clusternode<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u96C6\u7FA4\u4E2D\u7684\u8282\u70B9\u5E94\u7528\u542F\u52A8\u524D\u54A8\u8BE2 clusternode \u8282\u70B9\u7684\u6700\u65B0\u4FE1\u606F\uFF0C\u5E76\u66F4\u65B0\u76F8\u5E94\u7684\u96C6\u7FA4\u4FE1\u606F\uFF1B</p><p><strong>\u4E0E join_cluster \u4E0D\u540C\uFF0C\u5B83\u4E0D\u52A0\u5165\u96C6\u7FA4</strong>\uFF1B\u5982\u8FD9\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u8282\u70B9 A \u548C\u8282\u70B9 B \u5728\u96C6\u7FA4\u4E2D\uFF0C</li><li>\u5F53\u8282\u70B9 A \u79BB\u7EBF\u4E86\uFF0C\u8282\u70B9 C \u53C8\u548C \u8282\u70B9 B \u7EC4\u6210\u4E86\u4E00\u4E2A\u96C6\u7FA4\uFF0C</li><li>\u7136\u540E\u8282\u70B9 B \u53C8\u79BB\u5F00\u4E86\u96C6\u7FA4</li></ul><p>\u5F53\u8282\u70B9 A \u9192\u6765\u65F6\uFF0C\u5B83\u4F1A\u5C1D\u8BD5\u8054\u7CFB\u8282\u70B9 B\uFF0C\u4F46\u662F\u8FD9\u6837\u4F1A\u5931\u8D25\uFF0C\u56E0\u4E3A\u8282\u70B9 B \u5DF2\u7ECF\u4E0D\u5728\u96C6\u7FA4\u4E2D\u4E86\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl update_cluster_nodes <span class="token parameter variable">-n</span> A C 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\u4EE5\u4E0A\u547D\u4EE4\uFF0C\u53EF\u89E3\u51B3\u8FD9\u79CD\u573A\u666F\u4E0B\u51FA\u73B0\u7684\u95EE\u9898\u3002</p><h3 id="_2-6-\u786E\u4FDD\u8282\u70B9\u53EF\u4EE5\u542F\u52A8-force-boot" tabindex="-1"><a class="header-anchor" href="#_2-6-\u786E\u4FDD\u8282\u70B9\u53EF\u4EE5\u542F\u52A8-force-boot" aria-hidden="true">#</a> 2.6 \u786E\u4FDD\u8282\u70B9\u53EF\u4EE5\u542F\u52A8\uFF1Aforce_boot</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl force_boot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u786E\u4FDD\u8282\u70B9\u53EF\u4EE5\u542F\u52A8\uFF0C\u5373\u4F7F\u5B83\u4E0D\u662F\u6700\u540E\u4E00\u4E2A\u5173\u95ED\u7684\u8282\u70B9\u3002</p><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C<strong>\u5F53\u5173\u95ED\u6574\u4E2A RabbitMQ \u96C6\u7FA4\u65F6</strong>\uFF0C<strong>\u91CD\u542F\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9</strong> <strong>\u5E94\u8BE5\u662F\u6700\u540E\u5173\u95ED\u7684\u8282\u70B9</strong>\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u770B\u5230\u5176\u4ED6\u8282\u70B9\u6240\u770B\u4E0D\u5230\u7684\u4E8B\u60C5\u3002\u4F46\u662F\u6709\u65F6\u5019\u4F1A\u51FA\u73B0\u4E00\u4E9B\u5F02\u5E38\u60C5\u51B5\uFF0C\u6BD4\u5982\u6574\u4E2A\u96C6\u7FA4\u90FD\u65AD\u7535\uFF0C\u6240\u6709\u8282\u70B9\u90FD\u4E0D\u662F\u6700\u540E\u4E00\u4E2A\u5173\u95ED\u7684\u3002</p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5C31\u53EF\u4EE5\u4F7F\u7528\u8BE5\u547D\u4EE4\u544A\u8BC9\u8282\u70B9\u53EF\u4EE5\u65E0\u6761\u4EF6\u542F\u52A8\u3002</p><p>\u5728\u6B64\u8282\u70B9\u5173\u95ED\u540E\uFF0C\u96C6\u7FA4\u7684\u4EFB\u4F55\u53D8\u5316\uFF0C\u90FD\u4F1A\u4E22\u5931\u3002\u5982\u679C\u6700\u540E\u4E00\u4E2A\u5173\u95ED\u7684\u8282\u70B9\u6C38\u4E45\u4E22\u5931\u4E86\uFF0C\u90A3\u4E48\u9700\u8981\u4F18\u5148\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl forget_cluster_node <span class="token parameter variable">--offline</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u4ED6\u53EF\u4EE5\u786E\u4FDD\u955C\u50CF\u961F\u5217\u7684\u6B63\u5E38\u8FD0\u8F6C\u3002</p><h3 id="_2-7-\u540C\u6B65\u955C\u50CF\u961F\u5217\u5185\u5BB9-sync-queue" tabindex="-1"><a class="header-anchor" href="#_2-7-\u540C\u6B65\u955C\u50CF\u961F\u5217\u5185\u5BB9-sync-queue" aria-hidden="true">#</a> 2.7 \u540C\u6B65\u955C\u50CF\u961F\u5217\u5185\u5BB9\uFF1Async_queue</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl sync_queue <span class="token punctuation">[</span>-p vhost<span class="token punctuation">]</span> <span class="token punctuation">{</span>queue<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6307\u5B9A <strong>\u672A\u540C\u6B65\u961F\u5217 queue \u7684 slave \u955C\u50CF\u53EF\u4EE5\u540C\u6B65 master \u955C\u50CF\u884C\u7684\u5185\u5BB9</strong>\u3002\u540C\u6B65\u671F\u95F4\u6B64\u961F\u5217\u4F1A\u88AB\u963B\u585E\uFF08\u6240\u6709\u6B64\u961F\u5217\u7684\u751F\u4EA7\u6D88\u606F\u90FD\u4F1A\u88AB\u963B\u585E\uFF09\uFF0C\u76F4\u5230\u540C\u6B65\u5B8C\u6210\u3002</p><p>**\u524D\u63D0\u662F\uFF1A**\u914D\u7F6E\u4E86 queue \u955C\u50CF</p><p>\u6CE8\u610F\uFF1A\u672A\u540C\u6B65\u961F\u5217\u4E2D\u7684\u6D88\u606F\u88AB\u6D88\u8017\u5C3D\u540E\uFF0C\u6700\u7EC8\u4E5F\u4F1A\u53D8\u6210\u540C\u6B65\uFF0C\u6B64\u547D\u4EE4\u4E3B\u8981\u7528\u4E8E\u672A\u8017\u5C3D\u7684\u961F\u5217\u3002\uFF08\u8BE6\u89C1\u540E\u7EC4\u7AE0\u8282 RabbitMQ \u9AD8\u9636\uFF09</p><h3 id="_2-8-\u53D6\u6D88\u955C\u50CF\u961F\u5217\u540C\u6B65-cancel-sync-queue" tabindex="-1"><a class="header-anchor" href="#_2-8-\u53D6\u6D88\u955C\u50CF\u961F\u5217\u540C\u6B65-cancel-sync-queue" aria-hidden="true">#</a> 2.8 \u53D6\u6D88\u955C\u50CF\u961F\u5217\u540C\u6B65\uFF1Acancel_sync_queue</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl cancel_sync_queue <span class="token punctuation">[</span>-p vhost<span class="token punctuation">]</span> <span class="token punctuation">{</span>queue<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-9-\u8BBE\u7F6E\u96C6\u7FA4\u540D\u79F0-set-cluster-name" tabindex="-1"><a class="header-anchor" href="#_2-9-\u8BBE\u7F6E\u96C6\u7FA4\u540D\u79F0-set-cluster-name" aria-hidden="true">#</a> 2.9 \u8BBE\u7F6E\u96C6\u7FA4\u540D\u79F0\uFF1Aset_cluster_name</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl set_cluster_name <span class="token punctuation">{</span>name<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u96C6\u7FA4\u540D\u79F0\u3002</p><p>\u96C6\u7FA4\u540D\u79F0\u5728\u5BA2\u6237\u7AEF\u8FDE\u63A5\u65F6\u4F1A\u901A\u62A5\u7ED9\u5BA2\u6237\u7AEF\u3002Federation \u548C Shovel \u63D2\u4EF6\u4E5F\u4F1A\u6709\u7528\u5230\u96C6\u7FA4\u540D\u7684\u5730\u65B9\uFF0C\u8BE6\u7EC6\u5185\u5BB9\u53C2\u8003\u540E\u7EED\u7AE0\u8282 \u8DE8\u8D8A\u96C6\u7FA4\u7684\u754C\u9650</p><p><strong>\u96C6\u7FA4\u540D\u79F0 \u9ED8\u8BA4\u662F\u96C6\u7FA4\u4E2D\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684\u540D\u79F0</strong>\uFF0C\u901A\u8FC7\u8BE5\u547D\u4EE4\u91CD\u65B0\u8BBE\u7F6E\u3002\u5728 web \u7BA1\u7406\u754C\u9762\u53F3\u4E0A\u89D2\u6709\u53EF\u4EE5\u4FEE\u6539\uFF0C\u5982\u4E0B\u56FE</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220924215257905.png" alt="image-20220924215257905" loading="lazy"></p><p>\u901A\u8FC7\u96C6\u7FA4\u72B6\u6001\u4E5F\u80FD\u67E5\u770B\u5230\u5F53\u524D\u7684\u96C6\u7FA4\u540D\u79F0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study rabbitmq<span class="token punctuation">]</span><span class="token comment"># rabbitmqctl cluster_status</span>
Cluster status of <span class="token function">node</span> rabbit@study
<span class="token punctuation">[</span><span class="token punctuation">{</span>nodes,<span class="token punctuation">[</span><span class="token punctuation">{</span>disc,<span class="token punctuation">[</span>rabbit@study<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>running_nodes,<span class="token punctuation">[</span>rabbit@study<span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>cluster_name,<span class="token operator">&lt;&lt;</span><span class="token string">&quot;rabbit@study&quot;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>partitions,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
 <span class="token punctuation">{</span>alarms,<span class="token punctuation">[</span><span class="token punctuation">{</span>rabbit@study,<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token comment"># \u8FD9\u4E2A\u662F\u6CA1\u6709\u64CD\u4F5C\u8FC7\u96C6\u7FA4\u7684\uFF0C\u9ED8\u8BA4\u5C31\u662F\u4E2A\u5355\u8282\u70B9\u7684\u96C6\u7FA4</span>

 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,97),d={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/05/04.html",target:"_blank",rel:"noopener noreferrer"},u=l("\u5E94\u7528\u4E0E\u96C6\u7FA4\u7BA1\u7406");function b(m,v){const a=c("ExternalLinkIcon");return e(),t("div",null,[o,n("p",null,[n("a",d,[u,i(a)])])])}const k=s(p,[["render",b],["__file","rabbitmq-y-manange-app.html.vue"]]);export{k as default};
