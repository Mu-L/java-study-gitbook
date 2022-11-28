import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as t,a as e,b as l,d as o,e as n,r as p}from"./app.5ad9c6e6.js";const s={},c=o('<h1 id="rabbitmq\u76F8\u5173\u6982\u5FF5-aqmp-\u534F\u8BAE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u76F8\u5173\u6982\u5FF5-aqmp-\u534F\u8BAE\u4ECB\u7ECD" aria-hidden="true">#</a> RabbitMQ\u76F8\u5173\u6982\u5FF5 - AQMP \u534F\u8BAE\u4ECB\u7ECD</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>RabbitMQ \u662F AMQP \u534F\u8BAE\u7684 Erlang \u7684\u5B9E\u73B0\uFF08RabbitMQ \u8FD8\u652F\u6301 STOMP\u3001MQTT \u7B49\u534F\u8BAE\uFF09\u3002</p><p>AMQP \u7684\u6A21\u578B\u67B6\u6784\u548C RabbitMQ \u7684\u6A21\u578B\u67B6\u6784\u662F\u4E00\u6837\u7684\uFF1A</p><ol><li>\u751F\u4EA7\u8005\u53D1\u9001\u6D88\u606F\u7ED9\u4EA4\u6362\u5668</li><li>\u4EA4\u6362\u5668\u548C\u961F\u5217\u7ED1\u5B9A</li><li>\u5F53 RoutingKey \u548C BindingKey \u76F8\u5339\u914D\u65F6\uFF0C\u6D88\u606F\u88AB\u5B58\u5165\u76F8\u5E94\u7684\u961F\u5217\u4E2D</li><li>\u6D88\u8D39\u8005\u53EF\u4EE5\u8BA2\u9605\u76F8\u5E94\u7684\u961F\u5217\u6765\u83B7\u53D6\u6D88\u606F\u3002</li></ol><p>RabbitMQ \u4E2D\u7684\u4EA4\u6362\u5668\u3001\u4EA4\u6362\u5668\u7C7B\u578B\u3001\u961F\u5217\u3001\u7ED1\u5B9A\u3001\u8DEF\u7531\u952E\u7B49\u90FD\u9075\u5FAA AMQP \u534F\u8BAE\u4E2D\u76F8\u5E94\u7684\u6982\u5FF5\u3002\u672C\u4E66\u8BB2\u89E3\u7684 RabbitMQ \u7248\u672C\u5BF9\u5E94\u7684\u662F <code>AMQP 0-9-1 </code>\u7248\u672C\u534F\u8BAE\u3002\u5982\u65E0\u7279\u6307\uFF0C\u5219\u4EE5\u8BE5\u534F\u8BAE\u4E3A\u57FA\u51C6\u4ECB\u7ECD\u3002</p><blockquote><ul><li>STOPM\uFF1ASimple/Streaming Text Oriented Messaging Protocol</li></ul><p>\u7B80\u5355/\u6D41\u6587\u672C\u9762\u5411\u6D88\u606F\u534F\u8BAE\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EF\u4E92\u64CD\u4F5C\u7684\u8FDE\u63A5\u683C\u5F0F\uFF0C\u8FD0\u884C STOMP \u5BA2\u6237\u7AEF\u4E0E\u4EFB\u610F STOMP \u6D88\u606F\u4EE3\u7406\uFF08Broker\uFF09\u8FDB\u884C\u4EA4\u4E92\u3002</p><p>STOMP \u534F\u8BAE\u7531\u4E8E\u8BBE\u8BA1\u7B80\u5355\uFF0C\u6613\u4E8E\u5F00\u53D1\u5BA2\u6237\u7AEF\uFF0C\u56E0\u6B64\u5728\u591A\u79CD\u9047\u4E0A\u548C\u5E73\u53F0\u4E0A\u5F97\u5230\u5E7F\u6CDB\u5E94\u7528</p><ul><li>MQTT\uFF1AMessage Queuing Telemetry Transport</li></ul><p>\u6D88\u606F\u961F\u5217\u9065\u6D4B\u4F20\u8F93\u3002\u662F IBM \u5F00\u53D1\u7684\u4E00\u4E2A <strong>\u53CA\u65F6\u901A\u4FE1\u534F\u8BAE</strong>\uFF0C\u6709\u53EF\u80FD\u6210\u4E3A\u7269\u8054\u7F51\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002</p><p>\u8BE5\u534F\u8BAE\u652F\u6301\u6240\u6709\u5E73\u53F0\uFF0C\u51E0\u4E4E\u53EF\u4EE5\u628A\u6240\u6709\u7269\u8054\u7F51\u548C\u5916\u90E8\u8FDE\u63A5\u8D77\u6765\uFF0C\u88AB\u7528\u6765\u5F53\u505A\u4F20\u611F\u5668\u548C\u5236\u52A8\u5668\u7684\u901A\u4FE1\u534F\u8BAE\u3002</p></blockquote><h2 id="_2-amqp-\u4E09\u5C42\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#_2-amqp-\u4E09\u5C42\u534F\u8BAE" aria-hidden="true">#</a> 2. AMQP \u4E09\u5C42\u534F\u8BAE</h2><p>AMQP \u534F\u8BAE\u672C\u8EAB\u5305\u62EC\u4E09\u5C42\uFF1A</p><ul><li><p>Module Layer\uFF1A</p><p>\u4F4D\u4E8E\u534F\u8BAE\u6700\u9AD8\u5C42\uFF0C\u4E3B\u8981\u5B9A\u4E49\u4E86\u4E00\u4E9B\u4F9B\u5BA2\u6237\u7AEF\u8C03\u7528\u7684\u547D\u4EE4\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u5229\u7528\u8FD9\u4E9B\u547D\u4EE4\u5B9E\u73B0\u81EA\u5DF1\u7684\u4E1A\u52A1\u903B\u8F91\u3002</p><p>\u4F8B\u5982\uFF1A\u5BA2\u6237\u7AEF\u53EF\u4EE5\u4F7F\u7528 <code>Queue.Declare</code> \u547D\u4EE4\u58F0\u660E\u4E00\u4E2A\u961F\u5217\u6216\u4F7F\u7528 <code>Basic.Consume</code> \u8BA2\u9605\u6D88\u8D39\u4E00\u4E2A\u961F\u5217\u4E2D\u7684\u6D88\u606F\u3002</p></li><li><p>Session Layer\uFF1A</p><p>\u4F4D\u4E8E\u4E2D\u95F4\u5C42\uFF0C\u4E3B\u8981\u8D1F\u8D23\u5C06\u5BA2\u6237\u7AEF\u7684\u547D\u4EE4\u53D1\u9001\u7ED9\u670D\u52A1\u5668\uFF0C\u518D\u5C06\u670D\u52A1\u7AEF\u7684\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u4E3B\u8981\u4E3A\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u901A\u4FE1\u63D0\u4F9B\u53EF\u9760\u6027\u540C\u6B65\u673A\u5236\u548C\u9519\u8BEF\u5904\u7406\u3002</p></li><li><p>Transport Layer\uFF1A</p><p>\u4F4D\u4E8E\u6700\u5E95\u5C42\uFF0C\u4E3B\u8981\u4F20\u8F93\u4E8C\u8FDB\u5236\u6570\u636E\u6D41\uFF0C\u63D0\u4F9B\u5E27\u7684\u5904\u7406\u3001\u4FE1\u9053\u590D\u7528\u3001\u9519\u8BEF\u68C0\u6D4B\u548C\u6570\u636E\u8868\u793A\u7B49\u3002</p></li></ul><h2 id="_3-amqp-\u62A5\u6587\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#_3-amqp-\u62A5\u6587\u4EA4\u4E92" aria-hidden="true">#</a> 3. AMQP \u62A5\u6587\u4EA4\u4E92</h2><p>AMQP \u662F\u4E00\u4E2A\u901A\u4FE1\u534F\u8BAE\uFF0C\u4F1A\u6D89\u53CA\u5230 <strong>\u62A5\u6587\u4EA4\u4E92</strong>\uFF1A</p><ul><li>\u4ECE low-level \u4E3E\u4F8B\u6765\u8BF4\uFF0CAMQP \u672C\u8EAB\u662F\u5E94\u7528\u5C42\u7684\u534F\u8BAE\uFF0C\u586B\u5145\u4E8E TCP \u534F\u8BAE\u5C42\u7684\u6570\u636E\u90E8\u5206</li><li>\u4ECE high-level \u6765\u8BF4\uFF0CAMQP \u662F\u901A\u8FC7\u534F\u8BAE\u547D\u4EE4\u8FDB\u884C\u4EA4\u4E92\u7684\u3002\u53EF\u4EE5\u770B\u6210\u662F\u4E00\u7CFB\u5217\u7ED3\u6784\u5316\u547D\u4EE4\u7684\u96C6\u5408\uFF0C\u8FD9\u91CC\u7684\u547D\u4EE4\u4EE3\u8868\u4E00\u79CD\u64CD\u4F5C\uFF0C\u7C7B\u4F3C\u4E8E HTTP \u4E2D\u7684\u65B9\u6CD5\uFF0CGET\u3001POST...</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',14),d={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/02/02.html",target:"_blank",rel:"noopener noreferrer"},h=n("AQMP \u534F\u8BAE\u4ECB\u7ECD");function b(u,m){const a=p("ExternalLinkIcon");return r(),t("div",null,[c,e("p",null,[e("a",d,[h,l(a)])])])}const Q=i(s,[["render",b],["__file","rabbitmq-x-amqp.html.vue"]]);export{Q as default};