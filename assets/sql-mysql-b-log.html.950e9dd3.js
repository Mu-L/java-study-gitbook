import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as r,a as o,b as g,d as s,e as a,r as d}from"./app.5ad9c6e6.js";const i={},l=s('<h1 id="mysql-\u4E09\u5927\u65E5\u5FD7-redo-log\u3001undo-log\u3001bin-log" tabindex="-1"><a class="header-anchor" href="#mysql-\u4E09\u5927\u65E5\u5FD7-redo-log\u3001undo-log\u3001bin-log" aria-hidden="true">#</a> MySQL - \u4E09\u5927\u65E5\u5FD7(Redo Log\u3001Undo Log\u3001Bin Log)</h1><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014223434777.png" alt="image-20221014223434777" loading="lazy"></p><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> <strong>1. \u80CC\u666F</strong></h2><p>MySQL\u5B9E\u73B0\u4E8B\u52A1\u3001\u5D29\u6E83\u6062\u590D\u3001\u96C6\u7FA4\u7684\u4E3B\u4ECE\u590D\u5236\uFF0C\u5E95\u5C42\u90FD\u79BB\u4E0D\u5F00\u65E5\u5FD7\uFF0C\u6240\u4EE5\u65E5\u5FD7\u662FMySQL\u7684\u7CBE\u534E\u6240\u5728\u3002\u53EA\u6709\u4E86\u89E3MySQL\u65E5\u5FD7\uFF0C\u624D\u7B97\u662F\u5F7B\u5E95\u641E\u61C2MySQL\u3002</p><p>MySQL\u7684\u4E09\u5927\u65E5\u5FD7\u7CFB\u7EDF\uFF0C<strong>Redo Log\uFF08\u91CD\u505A\u65E5\u5FD7\uFF09</strong>\u3001<strong>Undo Log\uFF08\u6062\u590D\u65E5\u5FD7\uFF09</strong>\u3001<strong>Bin Log\uFF08\u5907\u4EFD\u65E5\u5FD7\uFF09</strong>\u3002</p><h2 id="_2-redo-log-\u91CD\u505A\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_2-redo-log-\u91CD\u505A\u65E5\u5FD7" aria-hidden="true">#</a> <strong>2. Redo Log\uFF08\u91CD\u505A\u65E5\u5FD7\uFF09</strong></h2><h3 id="_2-1-redo-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_2-1-redo-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528" aria-hidden="true">#</a> <strong>2.1 Redo Log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528</strong></h3><p>Redo Log \u8BB0\u5F55\u7684\u662F\u7269\u7406\u65E5\u5FD7\uFF0C\u4E5F\u5C31\u662F\u78C1\u76D8\u6570\u636E\u9875\u7684\u4FEE\u6539\u3002</p><p><strong>\u4F5C\u7528\uFF1A</strong> \u7528\u6765\u4FDD\u8BC1\u670D\u52A1\u5D29\u6E83\u540E\uFF0C\u4ECD\u80FD\u628A\u4E8B\u52A1\u4E2D\u53D8\u66F4\u7684\u6570\u636E\u6301\u4E45\u5316\u5230\u78C1\u76D8\u4E0A\u3002</p><p>MySQL\u4E8B\u52A1\u4E2D\u6301\u4E45\u6027\u5C31\u662F\u4F7F\u7528<strong>Redo Log</strong>\u5B9E\u73B0\u7684\u3002</p><h3 id="_2-2-\u4EC0\u4E48\u65F6\u5019\u5199\u5165redo-log" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4EC0\u4E48\u65F6\u5019\u5199\u5165redo-log" aria-hidden="true">#</a> <strong>2.2 \u4EC0\u4E48\u65F6\u5019\u5199\u5165Redo Log\uFF1F</strong></h3><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014221816524.png" alt="image-20221014221816524" style="zoom:50%;"><ol><li>\u4ECE\u78C1\u76D8\u52A0\u8F7D\u6570\u636E\u5230\u5185\u5B58</li><li>\u5728\u5185\u5B58\u4E2D\u4FEE\u6539\u6570\u636E</li><li>\u628A\u65B0\u6570\u636E\u5199\u5230<strong>Redo Log Buffer</strong>\u4E2D</li><li>\u628A<strong>Redo Log Buffer</strong>\u4E2D\u6570\u636E\u6301\u4E45\u5316\u5230<strong>Redo Log</strong>\u6587\u4EF6\u4E2D</li><li>\u628A<strong>Redo Log</strong>\u6587\u4EF6\u4E2D\u6570\u636E\u6301\u4E45\u5316\u5230\u6570\u636E\u5E93\u78C1\u76D8\u4E2D</li></ol><p>\u4F60\u53EF\u80FD\u4F1A\u95EE\uFF0C\u4E3A\u4EC0\u4E48\u9700\u8981\u5199<strong>Redo Log Buffer</strong>\u548C<strong>Redo Log FIle</strong>\uFF1F\u76F4\u63A5\u6301\u4E45\u5316\u5230\u78C1\u76D8\u4E0D\u597D\u5417\uFF1F</p><p>\u76F4\u63A5\u5199\u78C1\u76D8\u4F1A\u6709\u4EA7\u751F\u4E25\u91CD\u7684\u6027\u80FD\u95EE\u9898\uFF1A</p><ol><li>InnoDB\u5728\u78C1\u76D8\u4E2D\u5B58\u50A8\u7684\u57FA\u672C\u5355\u5143\u662F\u9875\uFF0C\u53EF\u80FD\u672C\u6B21\u4FEE\u6539\u53EA\u53D8\u66F4\u4E00\u9875\u4E2D\u51E0\u4E2A\u5B57\u8282\uFF0C\u4F46\u662F\u9700\u8981\u5237\u65B0\u6574\u9875\u7684\u6570\u636E\uFF0C\u5C31\u5F88\u6D6A\u8D39\u8D44\u6E90\u3002</li><li>\u4E00\u4E2A\u4E8B\u52A1\u53EF\u80FD\u4FEE\u6539\u4E86\u591A\u9875\u4E2D\u7684\u6570\u636E\uFF0C\u9875\u4E4B\u95F4\u53C8\u662F\u4E0D\u8FDE\u7EED\u7684\uFF0C\u5C31\u4F1A\u4EA7\u751F\u968F\u673AIO\uFF0C\u6027\u80FD\u66F4\u5DEE\u3002</li></ol><p>\u8FD9\u79CD\u65B9\u6848\u53EB\u505AWAL\uFF08Write-Ahead Logging\uFF09\uFF0C\u9884\u5199\u65E5\u5FD7\uFF0C\u5C31\u662F\u5148\u5199\u65E5\u5FD7\uFF0C\u518D\u5199\u78C1\u76D8\u3002</p><h3 id="_2-3-redo-log\u5237\u76D8\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-3-redo-log\u5237\u76D8\u89C4\u5219" aria-hidden="true">#</a> <strong>2.3 Redo Log\u5237\u76D8\u89C4\u5219</strong></h3><p>\u5199\u5165<strong>Redo Log Buffer</strong>\u4E4B\u540E\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6301\u4E45\u5316\u5230<strong>Redo Log FIle</strong>\uFF0C\u9700\u8981\u7B49\u5F85\u64CD\u4F5C\u7CFB\u7EDF\u8C03\u7528fsync()\u64CD\u4F5C\uFF0C\u624D\u4F1A\u5237\u5230\u78C1\u76D8\u4E0A\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014222303772.png" alt="image-20221014222303772" style="zoom:50%;"><p>\u5177\u4F53\u4EC0\u4E48\u65F6\u5019\u53EF\u4EE5\u628A<strong>Redo Log Buffer</strong>\u5237\u5230<strong>Redo Log FIle</strong>\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7<strong>innodb_flush_log_at_trx_commit</strong>\u53C2\u6570\u914D\u7F6E\u51B3\u5B9A\u3002</p><table><thead><tr><th>\u53C2\u6570\u503C</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>0\uFF08\u5EF6\u8FDF\u5199\uFF09</td><td>\u63D0\u4EA4\u4E8B\u52A1\u540E\uFF0C\u4E0D\u4F1A\u7ACB\u5373\u5237\u5230OS Buffer\u4E2D\uFF0C\u800C\u662F\u7B49\u4E00\u79D2\u540E\u5237\u65B0\u5230OS Buffer\u5E76\u8C03\u7528fsync()\u5199\u5165Redo Log FIle\uFF0C\u53EF\u80FD\u4F1A\u4E22\u5931\u4E00\u79D2\u949F\u7684\u6570\u636E\u3002</td></tr><tr><td>1\uFF08\u5B9E\u65F6\u5199</td><td>\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\uFF0C\u90FD\u4F1A\u5237\u65B0\u5230OS Buffer\u5E76\u8C03\u7528fsync()\u5199\u5230Redo Log FIle\uFF0C\u6027\u80FD\u8F83\u5DEE</td></tr><tr><td>2\uFF08\u5EF6\u8FDF\u5237\u65B0\uFF09</td><td>\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\u53EA\u5237\u65B0\u5230OS Buffer\uFF0C\u4E00\u79D2\u540E\u518D\u8C03\u7528fsync()\u5199\u5165Redo Log FIle\u3002</td></tr></tbody></table><p>InnoDB \u7684<strong>Redo Log File</strong>\u662F\u56FA\u5B9A\u5927\u5C0F\u7684\u3002\u53EF\u4EE5\u914D\u7F6E\u4E3A\u6BCF\u7EC44\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u7684\u5927\u5C0F\u662F 1GB\uFF0C\u90A3\u4E48<strong>Redo Log File</strong>\u53EF\u4EE5\u8BB0\u5F554GB\u7684\u64CD\u4F5C\u3002</p><p>\u91C7\u7528\u5FAA\u73AF\u5199\u5165\u8986\u76D6\u7684\u65B9\u5F0F\uFF0Cwrite pos\u8BB0\u5F55\u5F00\u59CB\u5199\u7684\u4F4D\u7F6E\uFF0C\u5411\u540E\u79FB\u52A8\u3002checkpoint\u8BB0\u5F55\u5C06\u8981\u64E6\u9664\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u662F\u5411\u540E\u79FB\u52A8\u3002write pos\u5230checkpoint\u4E4B\u95F4\u7684\u4F4D\u7F6E\uFF0C\u662F\u53EF\u5199\u533A\u57DF\uFF0Ccheckpoint\u5230write pos\u4E4B\u95F4\u7684\u4F4D\u7F6E\u662F\u5DF2\u5199\u533A\u57DF\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014222542586.png" alt="image-20221014222542586" style="zoom:50%;"><h2 id="_3-undo-log-\u56DE\u6EDA\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_3-undo-log-\u56DE\u6EDA\u65E5\u5FD7" aria-hidden="true">#</a> <strong>3. Undo Log\uFF08\u56DE\u6EDA\u65E5\u5FD7\uFF09</strong></h2><h3 id="_3-1-undo-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_3-1-undo-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528" aria-hidden="true">#</a> <strong>3.1 Undo Log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528</strong></h3><p>Undo Log\u8BB0\u5F55\u7684\u662F\u903B\u8F91\u65E5\u5FD7\uFF0C\u4E5F\u5C31\u662FSQL\u8BED\u53E5\u3002</p><p>\u6BD4\u5982\uFF1A\u5F53\u6211\u4EEC\u6267\u884C\u4E00\u6761insert\u8BED\u53E5\u65F6\uFF0CUndo Log\u5C31\u8BB0\u5F55\u4E00\u6761\u76F8\u53CD\u7684delete\u8BED\u53E5\u3002</p><p><strong>\u4F5C\u7528\uFF1A</strong></p><ol><li>\u56DE\u6EDA\u4E8B\u52A1\u65F6\uFF0C\u6062\u590D\u5230\u4FEE\u6539\u524D\u7684\u6570\u636E\u3002</li><li>\u5B9E\u73B0 <strong>MVCC\uFF08\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF0CMulti-Version Concurrency Control\uFF09</strong> \u3002</li></ol><p>MySQL\u4E8B\u52A1\u4E2D\u539F\u5B50\u6027\u5C31\u662F\u4F7F\u7528<strong>Undo Log</strong>\u5B9E\u73B0\u7684\u3002</p><h3 id="_3-2-undo-log\u5982\u4F55\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_3-2-undo-log\u5982\u4F55\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C" aria-hidden="true">#</a> <strong>3.2 Undo Log\u5982\u4F55\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C</strong></h3><p>\u5B9E\u73B0\u65B9\u5F0F\u901A\u8FC7\u4E24\u4E2A\u9690\u85CF\u5217trx_id\uFF08\u6700\u8FD1\u4E00\u6B21\u63D0\u4EA4\u4E8B\u52A1\u7684ID\uFF09\u548Croll_pointer\uFF08\u4E0A\u4E2A\u7248\u672C\u7684\u5730\u5740\uFF09\uFF0C\u5EFA\u7ACB\u4E00\u4E2A\u7248\u672C\u94FE\u3002\u5E76\u5728\u4E8B\u52A1\u4E2D\u8BFB\u53D6\u7684\u65F6\u5019\u751F\u6210\u4E00\u4E2AReadView\uFF08\u8BFB\u89C6\u56FE\uFF09\uFF0C\u5728Read Committed\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u6BCF\u6B21\u8BFB\u53D6\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u8BFB\u89C6\u56FE\uFF0C\u800C\u5728Repeatable Read\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u53EA\u4F1A\u5728\u7B2C\u4E00\u6B21\u8BFB\u53D6\u65F6\u751F\u6210\u4E00\u4E2A\u8BFB\u89C6\u56FE\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014222859478.png" alt="image-20221014222859478" loading="lazy"></p><h2 id="_4-bin-log-\u5907\u4EFD\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_4-bin-log-\u5907\u4EFD\u65E5\u5FD7" aria-hidden="true">#</a> <strong>4. Bin Log\uFF08\u5907\u4EFD\u65E5\u5FD7\uFF09</strong></h2><h3 id="_4-1-bin-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_4-1-bin-log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528" aria-hidden="true">#</a> <strong>4.1 Bin Log\u7684\u5185\u5BB9\u4E0E\u4F5C\u7528</strong></h3><p><strong>Bin Log</strong>\u8BB0\u5F55\u7684\u662F\u903B\u8F91\u65E5\u5FD7\uFF0C\u5373\u539F\u59CB\u7684SQL\u8BED\u53E5\uFF0C\u662FMySQL\u81EA\u5E26\u7684\u3002</p><p><strong>\u4F5C\u7528\uFF1A</strong> \u6570\u636E\u5907\u4EFD\u548C\u4E3B\u4ECE\u540C\u6B65\u3002</p><p><strong>Bin Log</strong>\u5171\u6709\u4E09\u79CD\u65E5\u5FD7\u683C\u5F0F\uFF0C\u53EF\u4EE5<strong>binlog_format</strong>\u914D\u7F6E\u53C2\u6570\u6307\u5B9A\u3002</p><table><thead><tr><th>\u53C2\u6570\u503C</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>Statement</td><td>\u8BB0\u5F55\u539F\u59CBSQL\u8BED\u53E5\uFF0C\u4F1A\u5BFC\u81F4\u66F4\u65B0\u65F6\u95F4\u4E0E\u539F\u5E93\u4E0D\u4E00\u81F4\u3002 \u6BD4\u5982 update_time=now()</td></tr><tr><td>Row</td><td>\u8BB0\u5F55\u6BCF\u884C\u6570\u636E\u7684\u53D8\u5316\uFF0C\u4FDD\u8BC1\u4E86\u6570\u636E\u4E0E\u539F\u5E93\u4E00\u81F4\uFF0C\u7F3A\u70B9\u662F\u6570\u636E\u91CF\u8F83\u5927\u3002</td></tr><tr><td>Mixed</td><td>Statement\u548CRow\u7684\u6DF7\u5408\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u91C7\u7528Statement\u6A21\u5F0F\uFF0C\u6D89\u53CA\u65E5\u671F\u3001\u51FD\u6570\u76F8\u5173\u7684\u65F6\u5019\u91C7\u7528Row\u6A21\u5F0F\uFF0C\u65E2\u51CF\u5C11\u4E86\u6570\u636E\u91CF\uFF0C\u53C8\u4FDD\u8BC1\u4E86\u6570\u636E\u4E00\u81F4\u6027\u3002</td></tr></tbody></table><h3 id="_4-2-\u4EC0\u4E48\u65F6\u5019\u5199\u5165bin-log" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4EC0\u4E48\u65F6\u5019\u5199\u5165bin-log" aria-hidden="true">#</a> <strong>4.2 \u4EC0\u4E48\u65F6\u5019\u5199\u5165Bin Log\uFF1F</strong></h3><p><strong>Bin Log</strong>\u91C7\u7528\u8FFD\u52A0\u5199\u5165\u7684\u6A21\u5F0F\uFF0C\u5E76\u4E0D\u4F1A\u8986\u76D6\u539F\u6709\u65E5\u5FD7\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7528\u6765\u6062\u590D\u5230\u4E4B\u524D\u67D0\u4E2A\u65F6\u523B\u7684\u6570\u636E\u3002</p><p><strong>Bin Log</strong>\u4E5F\u662F\u91C7\u7528WAL\u6A21\u5F0F\uFF0C\u5148\u5199\u65E5\u5FD7\uFF0C\u518D\u5199\u78C1\u76D8\u3002</p><p>\u81F3\u4E8E\u4EC0\u4E48\u65F6\u5019\u5237\u65B0\u5230\u78C1\u76D8\uFF0C\u53EF\u4EE5<strong>sync_binlog</strong>\u914D\u7F6E\u53C2\u6570\u6307\u5B9A\u3002</p><table><thead><tr><th>\u53C2\u6570\u503C</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>0\uFF08\u5EF6\u8FDF\u5199\uFF09</td><td>\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\u90FD\u4E0D\u4F1A\u5237\u76D8\uFF0C\u7531\u7CFB\u7EDF\u81EA\u5DF1\u51B3\u5B9A\u4EC0\u4E48\u65F6\u5019\u5237\u76D8\uFF0C\u53EF\u80FD\u4F1A\u4E22\u5931\u6570\u636E\u3002</td></tr><tr><td>1\uFF08\u5B9E\u65F6\u5199\uFF09</td><td>\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\uFF0C\u90FD\u4F1A\u5237\u76D8\uFF0C\u6027\u80FD\u8F83\u5DEE\u3002</td></tr><tr><td>N\uFF08\u5EF6\u8FDF\u5199\uFF09</td><td>\u63D0\u4EA4N\u4E2A\u4E8B\u52A1\u540E\uFF0C\u624D\u4F1A\u5237\u76D8\u3002</td></tr></tbody></table><p>\u52A0\u5165\u5199<strong>Bin Log</strong>\u4E4B\u540E\u7684\u4E8B\u52A1\u6D41\u7A0B\uFF1A</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014223217737.png" alt="image-20221014223217737" style="zoom:50%;"><p>\u8FD9\u5C31\u662F\u4E8C\u9636\u6BB5\u63D0\u4EA4\u7684\u6982\u5FF5\uFF0C\u5148\u5199\u5904\u4E8Eprepare\u72B6\u6001\u7684Redo Log\uFF0C\u4E8B\u52A1\u63D0\u4EA4\u540E\uFF0C\u518D\u5199\u5904\u4E8Ecommit\u72B6\u6001\u7684Redo Log\u3002</p><h2 id="_5-\u77E5\u8BC6\u70B9\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u77E5\u8BC6\u70B9\u603B\u7ED3" aria-hidden="true">#</a> 5. \u77E5\u8BC6\u70B9\u603B\u7ED3</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014223434777.png" alt="image-20221014223434777" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',52),h={href:"https://zhuanlan.zhihu.com/p/528575954",target:"_blank",rel:"noopener noreferrer"},c=a("\u5F7B\u5E95\u641E\u61C2\u4E09\u5927MySQL\u65E5\u5FD7\uFF0CRedo Log\u3001Undo Log\u3001Bin Log");function p(L,b){const t=d("ExternalLinkIcon");return n(),r("div",null,[l,o("p",null,[o("a",h,[c,g(t)])])])}const u=e(i,[["render",p],["__file","sql-mysql-b-log.html.vue"]]);export{u as default};