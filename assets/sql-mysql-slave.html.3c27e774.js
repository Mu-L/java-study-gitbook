import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,a,b as t,d as r,e as o,r as l}from"./app.5ad9c6e6.js";const h={},d=r('<h1 id="mysql-\u4E3B\u4ECE\u590D\u5236\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#mysql-\u4E3B\u4ECE\u590D\u5236\u539F\u7406" aria-hidden="true">#</a> MySQL - \u4E3B\u4ECE\u590D\u5236\u539F\u7406</h1><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014225826741.png" alt="image-20221014225826741" style="zoom:50%;"><h2 id="_1-mysql\u4E3B\u4ECE\u540C\u6B65\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-mysql\u4E3B\u4ECE\u540C\u6B65\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> 1. <strong>MySQL\u4E3B\u4ECE\u540C\u6B65\u5B9E\u73B0\u65B9\u5F0F</strong></h2><p>MySQL\u4E3B\u4ECE\u540C\u6B65\u662F\u57FA\u4E8EBin Log\u5B9E\u73B0\u7684\uFF0C\u800CBin Log\u8BB0\u5F55\u7684\u662F\u539F\u59CBSQL\u8BED\u53E5\u3002</p><p><strong>Bin Log</strong>\u5171\u6709\u4E09\u79CD\u65E5\u5FD7\u683C\u5F0F\uFF0C\u53EF\u4EE5<strong>binlog_format</strong>\u914D\u7F6E\u53C2\u6570\u6307\u5B9A\u3002</p><table><thead><tr><th>\u53C2\u6570\u503C</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>Statement</td><td>\u8BB0\u5F55\u539F\u59CBSQL\u8BED\u53E5\uFF0C\u4F1A\u5BFC\u81F4\u66F4\u65B0\u65F6\u95F4\u4E0E\u539F\u5E93\u4E0D\u4E00\u81F4\u3002 \u6BD4\u5982 update_time=now()</td></tr><tr><td>Row</td><td>\u8BB0\u5F55\u6BCF\u884C\u6570\u636E\u7684\u53D8\u5316\uFF0C\u4FDD\u8BC1\u4E86\u6570\u636E\u4E0E\u539F\u5E93\u4E00\u81F4\uFF0C\u7F3A\u70B9\u662F\u6570\u636E\u91CF\u8F83\u5927\u3002</td></tr><tr><td>Mixed</td><td>Statement\u548CRow\u7684\u6DF7\u5408\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u91C7\u7528Statement\u6A21\u5F0F\uFF0C\u6D89\u53CA\u65E5\u671F\u3001\u51FD\u6570\u76F8\u5173\u7684\u65F6\u5019\u91C7\u7528Row\u6A21\u5F0F\uFF0C\u65E2\u51CF\u5C11\u4E86\u6570\u636E\u91CF\uFF0C\u53C8\u4FDD\u8BC1\u4E86\u6570\u636E\u4E00\u81F4\u6027\u3002</td></tr></tbody></table><p><strong>\u5E38\u89C1\u7684\u4E3B\u4ECE\u540C\u6B65\u67B6\u6784\u6709\u4E00\u4E3B\u591A\u4ECE\u3001\u53CC\u4E3B\u591A\u4ECE\u3002</strong></p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014224519505.png" alt="image-20221014224519505" style="zoom:50%;"><h2 id="_2-mysql\u4E3B\u4ECE\u540C\u6B65\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_2-mysql\u4E3B\u4ECE\u540C\u6B65\u7684\u4F5C\u7528" aria-hidden="true">#</a> <strong>2. MySQL\u4E3B\u4ECE\u540C\u6B65\u7684\u4F5C\u7528</strong></h2><ol><li>\u8BFB\u5199\u5206\u79BB\uFF0C\u63D0\u5347\u6570\u636E\u5E93\u6027\u80FD</li><li>\u5BB9\u707E\u6062\u590D\uFF0C\u4E3B\u670D\u52A1\u5668\u4E0D\u53EF\u7528\u65F6\uFF0C\u4ECE\u670D\u52A1\u5668\u63D0\u4F9B\u670D\u52A1\uFF0C\u63D0\u9AD8\u53EF\u7528\u6027</li><li>\u5197\u4F59\u5907\u4EFD\uFF0C\u4E3B\u670D\u52A1\u5668\u6570\u636E\u635F\u574F\u4E22\u5931\uFF0C\u4ECE\u670D\u52A1\u5668\u4FDD\u7559\u5907\u4EFD</li></ol><h3 id="_2-1-\u4E00\u4E3B\u591A\u4ECE\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4E00\u4E3B\u591A\u4ECE\u67B6\u6784" aria-hidden="true">#</a> 2.1 <strong>\u4E00\u4E3B\u591A\u4ECE\u67B6\u6784\uFF1A</strong></h3><p>\u4E00\u822C\u662F\u4E3B\u5E93\u8D1F\u8D23\u6240\u6709\u8BFB\u5199\u8BF7\u6C42\uFF0C\u800C\u4ECE\u5E93\u53EA\u8D1F\u8D23\u5BB9\u707E\u6062\u590D\u548C\u5197\u4F59\u5907\u4EFD\u3002</p><p>\u5982\u679C\u505A\u4E86\u8BFB\u5199\u5206\u79BB\u7684\u8BDD\uFF0C\u4E3B\u5E93\u8D1F\u8D23\u5199\u8BF7\u6C42\uFF0C\u4ECE\u5E93\u8D1F\u8D23\u8BFB\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u63D0\u5347\u6570\u636E\u5E93\u6027\u80FD\u3002</p><h3 id="_2-2-\u53CC\u4E3B\u591A\u4ECE\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_2-2-\u53CC\u4E3B\u591A\u4ECE\u67B6\u6784" aria-hidden="true">#</a> 2.2 <strong>\u53CC\u4E3B\u591A\u4ECE\u67B6\u6784\uFF1A</strong></h3><p>\u4E00\u822C\u662F\u4E3B\u5E931\u8D1F\u8D23\u6240\u6709\u8BFB\u5199\u8BF7\u6C42\uFF0C\u4E3B\u5E932\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u53EA\u7528\u6765\u5BB9\u707E\u6062\u590D\u3002</p><p>\u76F8\u6BD4\u4E00\u4E3B\u591A\u4ECE\u67B6\u6784\uFF0C\u53CC\u4E3B\u591A\u4ECE\u67B6\u6784\u53EF\u4EE5\u51CF\u5C11\u5B95\u673A\u65F6\u95F4\uFF0C\u66F4\u5FEB\u6062\u590D\u6570\u636E\u5E93\u53EF\u7528\u72B6\u6001\u3002</p><h2 id="_3-\u4E3B\u52A8\u540C\u6B65\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u4E3B\u52A8\u540C\u6B65\u7684\u539F\u7406" aria-hidden="true">#</a> <strong>3. \u4E3B\u52A8\u540C\u6B65\u7684\u539F\u7406</strong></h2><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014224754176.png" alt="image-20221014224754176" style="zoom:80%;"><ol><li>\u5F53\u4E3B\u5E93\u6570\u636E\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5199\u5165\u672C\u5730Bin Log\u6587\u4EF6</li><li>\u4ECE\u5E93IO\u7EBF\u7A0B\u53D1\u8D77dump\u4E3B\u5E93Bin Log\u6587\u4EF6\u7684\u8BF7\u6C42</li><li>\u4E3B\u5E93IO\u7EBF\u7A0B\u63A8\u9001Bin Log\u6587\u4EF6\u5230\u4ECE\u5E93\u4E2D</li><li>\u4ECE\u5E93IO\u7EBF\u7A0B\u628ABin Log\u5185\u5BB9\u5199\u5165\u672C\u5730\u7684Relay Log\u6587\u4EF6\u4E2D</li><li>\u4ECE\u5E93SQL\u7EBF\u7A0B\u8BFB\u53D6Relay Log\u6587\u4EF6\u5185\u5BB9</li><li>\u4ECE\u5E93SQL\u7EBF\u7A0B\u91CD\u65B0\u6267\u884C\u4E00\u904DSQL\u8BED\u53E5</li></ol><h2 id="_4-\u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-\u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\u95EE\u9898" aria-hidden="true">#</a> <strong>4. \u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\u95EE\u9898</strong></h2><p>\u4E3B\u4ECE\u540C\u6B65\u6700\u5E38\u9047\u5230\u7684\u95EE\u9898\u5C31\u662F\u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u4ECE\u5E93\u4E0A\u6267\u884C<strong>show slave status</strong>\u547D\u4EE4\u67E5\u770B\u5EF6\u8FDF\u65F6\u95F4\uFF0C<strong>Seconds_Behind_Master</strong>\u8868\u793A\u5EF6\u8FDF\u7684\u79D2\u6570\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014225151555.png" alt="image-20221014225151555" loading="lazy"></p><h3 id="_4-1-\u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\u7684\u539F\u56E0\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_4-1-\u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\u7684\u539F\u56E0\u6709\u54EA\u4E9B" aria-hidden="true">#</a> <strong>4.1 \u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\u7684\u539F\u56E0\u6709\u54EA\u4E9B\uFF1F</strong></h3><ol><li>\u4ECE\u5E93\u673A\u5668\u6027\u80FD\u8F83\u5DEE \u4E3B\u5E93\u8D1F\u8D23\u6240\u6709\u8BFB\u5199\u8BF7\u6C42\uFF0C\u4ECE\u5E93\u53EA\u7528\u6765\u5907\u4EFD\uFF0C\u4F1A\u7528\u6027\u80FD\u8F83\u5DEE\u7684\u673A\u5668\uFF0C\u6267\u884C\u65F6\u95F4\u81EA\u7136\u8F83\u6162\u3002</li><li>\u4ECE\u5E93\u538B\u529B\u66F4\u5927 \u8BFB\u5199\u5206\u79BB\u540E\uFF0C\u4E3B\u5E93\u8D1F\u8D23\u5199\u8BF7\u6C42\uFF0C\u4ECE\u5E93\u8D1F\u8D23\u8BFB\u8BF7\u6C42\u3002 \u4E92\u8054\u7F51\u5E94\u7528\u4E00\u822C\u8BFB\u8BF7\u6C42\u66F4\u591A\uFF0C\u6240\u4EE5\u4ECE\u5E93\u8BFB\u538B\u529B\u66F4\u5927\uFF0C\u5360\u7528\u66F4\u591ACPU\u8D44\u6E90\u3002</li><li>\u7F51\u7EDC\u5EF6\u8FDF \u5F53\u4E3B\u5E93\u7684Bin Log\u6587\u4EF6\u5F80\u4ECE\u5E93\u4E0A\u53D1\u9001\u65F6\uFF0C\u53EF\u80FD\u4EA7\u751F\u7F51\u7EDC\u5EF6\u8FDF\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u4ECE\u5E93\u6570\u636E\u8DDF\u4E0D\u4E0A\u3002</li><li>\u4E3B\u5E93\u6709\u5927\u4E8B\u52A1 \u5F53\u4E3B\u5E93\u4E0A\u6709\u4E2A\u5927\u4E8B\u52A1\u9700\u8981\u6267\u884C5\u5206\u949F\uFF0C\u628ABin Log\u6587\u4EF6\u53D1\u9001\u5230\u4ECE\u5E93\uFF0C\u4ECE\u5E93\u81F3\u5C11\u4E5F\u9700\u8981\u6267\u884C5\u5206\u949F\uFF0C\u6240\u4EE5\u8FD9\u65F6\u5019\u4ECE\u5E93\u5C31\u51FA\u73B0\u4E865\u5206\u949F\u7684\u5EF6\u8FDF\u3002</li></ol><h3 id="_4-2-\u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\u7684\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\u7684\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 4.2 <strong>\u4E3B\u4ECE\u540C\u6B65\u5EF6\u8FDF\u7684\u89E3\u51B3\u65B9\u6848\uFF1F</strong></h3><ol><li>\u4ECE\u5E93\u673A\u5668\u6027\u80FD\u8F83\u5DEE \u628A\u4ECE\u5E93\u6362\u6210\u8DDF\u4E3B\u5E93\u540C\u7B49\u89C4\u683C\u7684\u673A\u5668\u3002</li><li>\u4ECE\u5E93\u538B\u529B\u66F4\u5927 \u591A\u641E\u51E0\u53F0\u4ECE\u5E93\uFF0C\u5206\u62C5\u8BFB\u8BF7\u6C42\u538B\u529B\u3002</li><li>\u7F51\u7EDC\u5EF6\u8FDF \u8054\u7CFB\u8FD0\u7EF4\u6216\u8005\u4E91\u670D\u52A1\u63D0\u4F9B\u5546\u89E3\u51B3\u3002</li><li>\u4E3B\u5E93\u6709\u5927\u4E8B\u52A1 \u628A\u5927\u4E8B\u52A1\u5206\u5272\u6210\u5C0F\u4E8B\u52A1\u6267\u884C\uFF0C\u5927\u4E8B\u52A1\u4E0D\u4F46\u4F1A\u4EA7\u751F\u4ECE\u5E93\u5EF6\u8FDF\uFF0C\u8FD8\u53EF\u80FD\u4EA7\u751F\u6B7B\u9501\uFF0C\u964D\u4F4E\u6570\u636E\u5E93\u5E76\u53D1\u6027\u80FD\uFF0C\u6240\u4EE5\u5C3D\u91CF\u5C11\u7528\u5927\u4E8B\u52A1\u3002</li></ol><h2 id="_5-\u5982\u4F55\u63D0\u5347\u4E3B\u4ECE\u540C\u6B65\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#_5-\u5982\u4F55\u63D0\u5347\u4E3B\u4ECE\u540C\u6B65\u6027\u80FD" aria-hidden="true">#</a> <strong>5. \u5982\u4F55\u63D0\u5347\u4E3B\u4ECE\u540C\u6B65\u6027\u80FD</strong></h2><h3 id="_5-1-\u4ECE\u5E93\u5F00\u542F\u591A\u7EBF\u7A0B\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#_5-1-\u4ECE\u5E93\u5F00\u542F\u591A\u7EBF\u7A0B\u590D\u5236" aria-hidden="true">#</a> 5.1. \u4ECE\u5E93\u5F00\u542F\u591A\u7EBF\u7A0B\u590D\u5236</h3><p>\u5C31\u662F\u5728\u4E3B\u4ECE\u540C\u6B65\u7684\u6700\u540E\u4E24\u6B65\u4F7F\u7528\u591A\u7EBF\u7A0B\uFF0C\u4FEE\u6539\u914D\u7F6E <strong>slave_parallel_workers</strong>=4\uFF0C\u4EE3\u8868\u5F00\u542F4\u4E2A\u590D\u5236\u7EBF\u7A0B\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014225527025.png" alt="image-20221014225527025" style="zoom:50%;"><h3 id="_5-2-\u4FEE\u6539\u540C\u6B65\u6A21\u5F0F-\u6539\u4E3A\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#_5-2-\u4FEE\u6539\u540C\u6B65\u6A21\u5F0F-\u6539\u4E3A\u5F02\u6B65" aria-hidden="true">#</a> 5.2 \u4FEE\u6539\u540C\u6B65\u6A21\u5F0F\uFF0C\u6539\u4E3A\u5F02\u6B65</h3><p><strong>\u4E3B\u4ECE\u540C\u6B65\u5171\u6709\u4E09\u79CD\u590D\u5236\u65B9\u5F0F\uFF1A</strong></p><ol><li>\u5168\u540C\u6B65\u590D\u5236 \u5F53\u4E3B\u5E93\u6267\u884C\u5B8C\u4E00\u4E2A\u4E8B\u52A1\uFF0C\u5E76\u4E14\u6240\u6709\u4ECE\u5E93\u90FD\u6267\u884C\u5B8C\u8BE5\u4E8B\u52A1\u540E\uFF0C\u624D\u7ED9\u5BA2\u6237\u7AEF\u8FD4\u56DE\u6210\u529F\u3002</li><li>\u534A\u540C\u6B65\u590D\u5236 \u81F3\u5C11\u6709\u4E00\u4E2A\u4ECE\u5E93\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u5C31\u7ED9\u5BA2\u6237\u7AEF\u8FD4\u56DE\u6210\u529F\u3002</li><li>\u5F02\u6B65\u590D\u5236 \u4E3B\u5E93\u6267\u884C\u5B8C\u540E\uFF0C\u7ACB\u5373\u8FD4\u56DE\u6210\u529F\uFF0C\u4E0D\u5173\u5FC3\u4ECE\u5E93\u662F\u5426\u6267\u884C\u5B8C\u6210\u3002</li></ol><p>\u5982\u679C\u5BF9\u6570\u636E\u5B89\u5168\u6027\u8981\u6C42\u6CA1\u90A3\u4E48\u9AD8\uFF0C\u53EF\u4EE5\u628A\u540C\u6B65\u6A21\u5F0F\u6539\u6210\u534A\u540C\u6B65\u590D\u5236\u6216\u8005\u5F02\u6B65\u590D\u5236\u3002</p><h3 id="_5-3-\u4FEE\u6539\u4ECE\u5E93bin-log\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-3-\u4FEE\u6539\u4ECE\u5E93bin-log\u914D\u7F6E" aria-hidden="true">#</a> 5.3 \u4FEE\u6539\u4ECE\u5E93Bin Log\u914D\u7F6E</h3><p><strong>\u4FEE\u6539sync_binlog\u914D\u7F6E\uFF1A</strong></p><blockquote><p>sync_binlog=0 \uFF0C\u8868\u793A\u5199binlog\u4E0D\u7ACB\u5373\u5237\u65B0\u78C1\u76D8\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u4EC0\u4E48\u65F6\u5019\u5237\u65B0\u78C1\u76D8\u3002 sync_binlog=1\uFF0C\u6BCF\u6B21\u5199binlog\u90FD\u5237\u65B0\u78C1\u76D8\uFF0C\u5B89\u5168\u6027\u9AD8\uFF0C\u6027\u80FD\u5DEE\u3002 sync_binlog=N\uFF0C\u5199N\u6B21binlog\u624D\u5237\u65B0\u78C1\u76D8\u3002</p></blockquote><p>\u4ECE\u5E93\u5BF9\u6570\u636E\u5B89\u5168\u6027\u8981\u6C42\u6CA1\u90A3\u4E48\u9AD8\uFF0C\u53EF\u4EE5\u8BBE\u7F6Esync_binlog=0\u3002</p><p><strong>\u4FEE\u6539innodb_flush_log_at_trx_commit\u914D\u7F6E\uFF1A</strong></p><blockquote><p>innodb_flush_log_at_trx_commit=0\uFF0C\u6BCF\u9694\u4E00\u79D2\u949F\uFF0C\u628A\u4E8B\u52A1\u65E5\u5FD7\u5237\u65B0\u5230\u78C1\u76D8\u3002 innodb_flush_log_at_trx_commit=1\uFF0C\u6BCF\u6B21\u4E8B\u52A1\u90FD\u5237\u65B0\u5230\u78C1\u76D8\u3002 innodb_flush_log_at_trx_commit=2\uFF0C\u6BCF\u6B21\u4E8B\u52A1\u90FD\u4E0D\u4E3B\u52A8\u5237\u65B0\u78C1\u76D8\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u4EC0\u4E48\u65F6\u5019\u5237\u65B0\u78C1\u76D8\u3002</p></blockquote><p>\u4ECE\u5E93\u5BF9\u6570\u636E\u5B89\u5168\u6027\u8981\u6C42\u6CA1\u90A3\u4E48\u9AD8\uFF0C\u53EF\u4EE5\u8BBE\u7F6Einnodb_flush_log_at_trx_commit=2\u3002</p><h2 id="_6-\u77E5\u8BC6\u70B9\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_6-\u77E5\u8BC6\u70B9\u603B\u7ED3" aria-hidden="true">#</a> 6. <strong>\u77E5\u8BC6\u70B9\u603B\u7ED3\uFF1A</strong></h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014225826741.png" alt="image-20221014225826741" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',44),g={href:"https://zhuanlan.zhihu.com/p/533187002",target:"_blank",rel:"noopener noreferrer"},c=o("\u9AD8\u7EA7\u7A0B\u5E8F\u5458\u5FC5\u77E5\u5FC5\u4F1A\uFF0C\u4E00\u6587\u8BE6\u89E3MySQL\u4E3B\u4ECE\u540C\u6B65\u539F\u7406"),_={href:"https://pdai.tech/md/db/sql-mysql/sql-mysql-slave.html",target:"_blank",rel:"noopener noreferrer"},p=o("MySQL - \u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB");function m(b,u){const e=l("ExternalLinkIcon");return i(),s("div",null,[d,a("p",null,[a("a",g,[c,t(e)])]),a("p",null,[a("a",_,[p,t(e)])])])}const z=n(h,[["render",m],["__file","sql-mysql-slave.html.vue"]]);export{z as default};