import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as n,a as e,b as s,d as t,e as d,r as i}from"./app.6a5825c6.js";const r={},l=t('<h1 id="\u5546\u57CE\u8BBE\u8BA1\u8981\u70B9-\u4E03-mysql\u8BFB\u5199\u5206\u79BB\u5E26\u6765\u7684\u6570\u636E\u4E0D\u4E00\u81F4\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5546\u57CE\u8BBE\u8BA1\u8981\u70B9-\u4E03-mysql\u8BFB\u5199\u5206\u79BB\u5E26\u6765\u7684\u6570\u636E\u4E0D\u4E00\u81F4\u95EE\u9898" aria-hidden="true">#</a> \u5546\u57CE\u8BBE\u8BA1\u8981\u70B9(\u4E03)-MySQL\u8BFB\u5199\u5206\u79BB\u5E26\u6765\u7684\u6570\u636E\u4E0D\u4E00\u81F4\u95EE\u9898</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u4E92\u8054\u7F51\u4E1A\u52A1\u5927\u90E8\u5206\u90FD\u662F <code>\u8BFB\u591A\u5199\u5C11</code>\uFF0C\u4E3A\u4E86\u63D0\u5347\u6570\u636E\u5E93\u96C6\u7FA4\u7684\u541E\u5410\u6027\u80FD\uFF0C\u6211\u4EEC\u901A\u5E38\u4F1A\u91C7\u7528 <code>\u4E3B\u4ECE\u67B6\u6784</code>\u3001<code>\u8BFB\u5199\u5206\u79BB</code></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326211746699.png" alt="image-20220326211746699" loading="lazy"></p><p>\u90E8\u7F72\u4E00\u4E2A\u4E3B\u5E93\u5B9E\u4F8B\uFF0C\u5BA2\u6237\u7AEF\u8BF7\u6C42<code>\u6240\u6709\u5199\u64CD\u4F5C</code>\u5168\u90E8\u5199\u5230\u4E3B\u5E93\uFF0C\u7136\u540E\u501F\u52A9 MySQL \u81EA\u5E26\u7684 <code>\u4E3B\u4ECE\u540C\u6B65</code> \u529F\u80FD\uFF0C\u505A\u4E00\u4E9B\u7B80\u5355\u914D\u7F6E\uFF0C\u53EF\u4EE5\u8FD1\u4E4E\u5B9E\u65F6\u7684\u5C06\u4E3B\u5E93\u7684\u6570\u636E\u540C\u6B65\u7ED9 <code>\u591A\u4E2A\u4ECE\u5E93\u5B9E\u4F8B</code>\uFF0C\u4E3B\u4ECE\u5EF6\u8FDF\u975E\u5E38\u5C0F\uFF0C\u4E00\u822C<strong>\u4E0D\u8D85\u8FC7 1 \u6BEB\u79D2</strong>\u3002</p><p>\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684<code>\u6240\u6709\u8BFB\u64CD\u4F5C</code>\u5168\u90E8\u6253\u5230 <code>\u4ECE\u5E93</code>\uFF0C\u501F\u52A9\u591A\u5B9E\u4F8B\u96C6\u7FA4\u63D0\u5347<code>\u8BFB\u8BF7\u6C42</code>\u7684\u6574\u4F53\u5904\u7406\u80FD\u529B\u3002</p><p>\u8FD9\u4E2A\u65B9\u6848\u770B\u4F3C\u5929\u8863\u65E0\u7F1D\uFF0C\u4F46\u5B9E\u9645\u6709\u4E2A <strong>\u526F\u4F5C\u7528</strong></p><p>\u4E3B\u4ECE\u540C\u6B65\u867D\u7136\u8FD1\u4E4E\u5B9E\u65F6\uFF0C\u4F46\u8FD8\u662F\u6709\u4E2A <code>\u65F6\u95F4\u5DEE</code> \uFF0C\u4E3B\u5E93\u6570\u636E\u521A\u66F4\u65B0\u5B8C\uFF0C\u4F46\u6570\u636E\u8FD8\u6CA1\u6765\u5F97\u53CA\u540C\u6B65\u5230\u4ECE\u5E93\uFF0C\u540E\u7EED<code>\u8BFB\u8BF7\u6C42</code>\u76F4\u63A5\u8BBF\u95EE\u4E86\u4ECE\u5E93\uFF0C\u770B\u5230\u7684\u8FD8\u662F\u65E7\u6570\u636E\uFF0C\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u3002</p><p>\u4EFB\u4F55\u4E8B\u60C5\u90FD\u4E0D\u662F\u5B8C\u7F8E\u7684\uFF0C\u4ECE\u4E3B\u540C\u6B65\u4E5F\u662F\u4E00\u6837\uFF0C\u6CA1\u6709\u5B8C\u7F8E\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6211\u4EEC\u8981\u627E\u5230\u5176\u4E2D\u7684\u5E73\u8861\u53D6\u820D\u70B9\u3002</p><p>\u6211\u4EEC\u4EE5\u7535\u5546\u4E3A\u4F8B\uFF0C\u770B\u770B\u5982\u4F55\u4ECE <code>\u4EA7\u54C1\u5C42\u9762</code> \u6765\u5316\u89E3\u8FD9\u4E2A\u95EE\u9898</p><h2 id="_2-\u590D\u73B0\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-\u590D\u73B0\u573A\u666F" aria-hidden="true">#</a> 2. \u590D\u73B0\u573A\u666F</h2><ol><li>\u5728\u4E0B\u5355\u786E\u8BA4\u9875\u9762\uFF0C\u70B9\u51FB\u8D2D\u4E70\u6309\u94AE\uFF0C\u8FDB\u5165\u4E86\u652F\u4ED8\u9875\u9762</li></ol><p>\u200B <img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326212046726.png" alt="image-20220326212046726" loading="lazy"></p><ol start="2"><li>\u8F93\u5165\u652F\u4ED8\u5B9D\u652F\u4ED8\u5BC6\u7801\uFF0C\u8FDB\u5165<strong>\u652F\u4ED8\u6210\u529F\u9875\u9762</strong>\uFF0C\u9875\u9762\u6709\u67E5\u770B\u8BA2\u5355\u8BE6\u60C5\u7684\u5165\u53E3\u3002</li></ol><p>\u200B <img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326212106205.png" alt="image-20220326212106205" loading="lazy"></p><ol start="3"><li><p>\u70B9\u51FB <code>\u67E5\u770B\u4EA4\u6613\u8BE6\u60C5</code> \uFF0C\u624D\u8DF3\u5230\u771F\u6B63\u7684 \u8BA2\u5355\u8BE6\u60C5\u9875\uFF0C\u53EF\u4EE5\u67E5\u770B\u8BA2\u5355\u7684\u652F\u4ED8\u72B6\u6001\uFF08\u8BA2\u5355\u6570\u636E\u53D6\u81EA\u4ECE\u5E93\uFF09</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326212128598.png" alt="image-20220326212128598" loading="lazy"></p></li></ol><h2 id="_3-\u65B9\u6848\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_3-\u65B9\u6848\u89E3\u6790" aria-hidden="true">#</a> 3. \u65B9\u6848\u89E3\u6790</h2><p>\u6211\u4EEC\u5728\u652F\u4ED8\u6210\u529F\u540E\uFF0C\u5E76\u6CA1\u6709\u7ACB\u5373\u8DF3\u5230 <code>\u8BA2\u5355\u8BE6\u60C5\u9875</code>\uFF0C\u800C\u662F\u589E\u52A0\u4E86\u4E00\u4E2A \u65E0\u5173\u7D27\u8981\u7684 <code>\u4E2D\u95F4\u9875\uFF08\u652F\u4ED8\u6210\u529F\u9875\uFF09</code>\uFF0C\u4E00\u662F\u544A\u8BC9\u4F60\u652F\u4ED8\u7684\u7ED3\u679C\u662F\u6210\u529F\u7684\uFF0C\u94B1\u6CA1\u4E22\uFF0C\u4E0D\u8981\u62C5\u5FC3\uFF1B\u53E6\u5916\u4E5F\u53EF\u4EE5\u589E\u52A0\u4E00\u4E9B\u63A8\u8350\u5546\u54C1\uFF0C\u5F15\u6D41\u63D0\u5347\u7F51\u7AD9\u7684GMV\u3002\u6700\u91CD\u8981\u7684\uFF0C\u589E\u52A0\u4E86\u4E00\u4E2A\u7F13\u51B2\u671F\uFF0C\u4E3A <code>\u8BA2\u5355\u7684\u4E3B\u4ECE\u5E93\u6570\u636E\u540C\u6B65</code> \u4E89\u53D6\u4E86\u66F4\u591A\u7684\u65F6\u95F4\u3002</p><p>\u53EF\u8C13\u4E00\u4E3E\u591A\u5F97\uFF0C\u5176\u4ED6\u4E92\u8054\u7F51\u4E1A\u52A1\u4E5F\u662F\u7C7B\u4F3C\u9053\u7406\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',20),p={href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"},h=d("\u804A\u804A\u7535\u5546\u7CFB\u7EDF\u4E2D\u5E38\u89C1\u76849\u5927\u5751\uFF01\u5E93\u5B58\u8D85\u5356\u3001\u91CD\u590D\u4E0B\u5355\u3001\u7269\u6D41\u5355ABA");function g(m,_){const o=i("ExternalLinkIcon");return c(),n("div",null,[l,e("p",null,[e("a",p,[h,s(o)])])])}const f=a(r,[["render",g],["__file","mall-key-points-data-inconsistent.html.vue"]]);export{f as default};
