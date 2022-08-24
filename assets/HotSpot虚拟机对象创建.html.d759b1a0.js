import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.9ef7ce43.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="hotspot-\u865A\u62DF\u673A\u5BF9\u8C61\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#hotspot-\u865A\u62DF\u673A\u5BF9\u8C61\u521B\u5EFA" aria-hidden="true">#</a> HotSpot \u865A\u62DF\u673A\u5BF9\u8C61\u521B\u5EFA</h1><p>\u672C\u7AE0\u4ECB\u7ECDHotSpot \u865A\u62DF\u673A\u5728Java\u5806\u4E2D\u5BF9\u8C61\u5206\u914D\u3001\u5E03\u5C40\u548C\u8BBF\u95EE\u7684\u5168\u8FC7\u7A0B</p><h2 id="_1-\u5BF9\u8C61\u7684\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#_1-\u5BF9\u8C61\u7684\u521B\u5EFA" aria-hidden="true">#</a> 1. \u5BF9\u8C61\u7684\u521B\u5EFA</h2><p>\u4E0B\u56FE\u4FBF\u662F Java \u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B\uFF08\u9700\u9ED8\u5199\uFF0C\u5E76\u638C\u63E1\u6BCF\u4E00\u6B65\uFF09</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190924224402145.png" alt="image-20190924224402145"></p><h3 id="_1-1-step1-\u7C7B\u52A0\u8F7D\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#_1-1-step1-\u7C7B\u52A0\u8F7D\u68C0\u67E5" aria-hidden="true">#</a> 1.1 Step1: \u7C7B\u52A0\u8F7D\u68C0\u67E5</h3><p>\u865A\u62DF\u673A\u9047\u5230\u4E00\u6761new\u6307\u4EE4\u65F6\uFF0C\u9996\u5148\u5C06\u53BB\u68C0\u67E5\u8FD9\u4E2A\u6307\u5B9A\u7684\u53C2\u6570\u662F\u5426\u80FD\u5728\u5E38\u91CF\u6C60\u4E2D\u5B9A\u4F4D\u5230\u8FD9\u4E2A\u7C7B\u7684\u7B26\u53F7\u5F15\u7528\uFF0C\u5E76\u4E14\u68C0\u67E5\u8FD9\u4E2A\u7B26\u53F7\u5F15\u7528\u4EE3\u8868\u7C7B\u662F\u5426\u5DF2\u88AB\u52A0\u8F7D\u8FC7\uFF0C\u89E3\u6790\u548C\u521D\u59CB\u5316\u8FC7\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u5FC5\u987B\u5148\u6267\u884C\u76F8\u5E94\u7684\u7C7B\u52A0\u8F7D\u8FC7\u7A0B</p><h3 id="_1-2-step2-\u5206\u914D\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#_1-2-step2-\u5206\u914D\u5185\u5B58" aria-hidden="true">#</a> 1.2 Step2\uFF1A\u5206\u914D\u5185\u5B58</h3><p>\u5728<strong>\u7C7B\u52A0\u8F7D\u68C0\u67E5</strong>\u901A\u8FC7\u540E\uFF0C\u63A5\u4E0B\u6765\u865A\u62DF\u673A\u5C06\u4E3A\u65B0\u751F\u5BF9\u8C61<strong>\u5206\u914D\u5185\u5B58</strong>\u3002\u5BF9\u8C61\u6240\u9700\u7684\u5185\u5B58\u5927\u5C0F\u5728\u7C7B\u52A0\u8F7D\u5B8C\u6210\u540E\u4FBF\u53EF\u786E\u5B9A\uFF0C\u4E3A\u5BF9\u8C61\u5206\u914D\u7A7A\u95F4\u7684\u4EFB\u52A1\u7B49\u540C\u4E8E\u628A\u4E00\u5757\u786E\u5B9A\u5927\u5C0F\u7684\u5185\u5B58\u4ECEJava\u5806\u4E2D\u5212\u5206\u51FA\u6765\u3002<strong>\u5206\u914D\u65B9\u5F0F</strong>\u6709 <strong>\u201C\u6307\u9488\u78B0\u649E\u201D</strong> \u548C <strong>\u201C\u7A7A\u95F2\u5217\u8868\u201D</strong> \u4E24\u79CD\uFF0C<strong>\u9009\u62E9\u90A3\u79CD\u5206\u914D\u65B9\u5F0F\u7531 Java \u5806\u662F\u5426\u89C4\u6574\u51B3\u5B9A\uFF0C\u800C Java \u5806\u662F\u5426\u89C4\u6574\u53C8\u7531\u6240\u91C7\u7528\u7684\u5783\u573E\u6536\u96C6\u5668\u662F\u5426\u5E26\u6709\u538B\u7F29\u6574\u7406\u529F\u80FD\u51B3\u5B9A</strong>\u3002</p><h4 id="_1-2-1-\u5206\u914D\u5185\u5B58\u7684\u4E24\u79CD\u65B9\u5F0F-\u9700\u8981\u638C\u63E1" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u5206\u914D\u5185\u5B58\u7684\u4E24\u79CD\u65B9\u5F0F-\u9700\u8981\u638C\u63E1" aria-hidden="true">#</a> 1.2.1 \u5206\u914D\u5185\u5B58\u7684\u4E24\u79CD\u65B9\u5F0F\uFF08\u9700\u8981\u638C\u63E1\uFF09</h4><p>\u9009\u62E9\u4EE5\u4E0A\u4E24\u79CD\u65B9\u5F0F\u4E2D\u7684\u54EA\u4E00\u79CD\uFF0C\u53D6\u51B3\u4E8E Java \u5806\u5185\u5B58\u662F\u5426\u89C4\u6574\u3002\u800C Java \u5806\u5185\u5B58\u662F\u5426\u89C4\u6574\uFF0C\u53D6\u51B3\u4E8E GC \u6536\u96C6\u5668\u7684\u7B97\u6CD5\u662F&quot;\u6807\u8BB0-\u6E05\u9664&quot;\uFF0C\u8FD8\u662F&quot;\u6807\u8BB0-\u6574\u7406&quot;\uFF08\u4E5F\u79F0\u4F5C&quot;\u6807\u8BB0-\u538B\u7F29&quot;\uFF09\uFF0C\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u590D\u5236\u7B97\u6CD5\u5185\u5B58\u4E5F\u662F\u89C4\u6574\u7684</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190924225850663.png" alt="image-20190924225850663"></p><h4 id="_1-2-2-\u5185\u5B58\u5206\u914D\u5E76\u53D1\u95EE\u9898-\u9700\u8981\u638C\u63E1" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u5185\u5B58\u5206\u914D\u5E76\u53D1\u95EE\u9898-\u9700\u8981\u638C\u63E1" aria-hidden="true">#</a> 1.2.2 <strong>\u5185\u5B58\u5206\u914D\u5E76\u53D1\u95EE\u9898</strong>\uFF08\u9700\u8981\u638C\u63E1\uFF09</h4><p>\u5728\u521B\u5EFA\u5BF9\u8C61\u7684\u65F6\u5019\u6709\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u95EE\u9898\uFF0C\u5C31\u662F\u7EBF\u7A0B\u5B89\u5168\uFF0C\u56E0\u4E3A\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u521B\u5EFA\u5BF9\u8C61\u662F\u5F88\u9891\u7E41\u7684\u4E8B\u60C5\uFF0C\u4F5C\u4E3A\u865A\u62DF\u673A\u6765\u8BF4\uFF0C\u5FC5\u987B\u8981\u4FDD\u8BC1\u7EBF\u7A0B\u662F\u5B89\u5168\u7684\uFF0C\u901A\u5E38\u6765\u8BB2\uFF0C\u865A\u62DF\u673A\u91C7\u7528\u4E24\u79CD\u65B9\u5F0F\u6765\u4FDD\u8BC1\u7EBF\u7A0B\u5B89\u5168\uFF1A</p><ul><li><strong>CAS+\u5931\u8D25\u91CD\u8BD5\uFF1A</strong> CAS \u662F\u4E50\u89C2\u9501\u7684\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002\u6240\u8C13\u4E50\u89C2\u9501\u5C31\u662F\uFF0C\u6BCF\u6B21\u4E0D\u52A0\u9501\u800C\u662F\u5047\u8BBE\u6CA1\u6709\u51B2\u7A81\u800C\u53BB\u5B8C\u6210\u67D0\u9879\u64CD\u4F5C\uFF0C\u5982\u679C\u56E0\u4E3A\u51B2\u7A81\u5931\u8D25\u5C31\u91CD\u8BD5\uFF0C\u76F4\u5230\u6210\u529F\u4E3A\u6B62\u3002<strong>\u865A\u62DF\u673A\u91C7\u7528 CAS \u914D\u4E0A\u5931\u8D25\u91CD\u8BD5\u7684\u65B9\u5F0F\u4FDD\u8BC1\u66F4\u65B0\u64CD\u4F5C\u7684\u539F\u5B50\u6027\u3002</strong></li><li><strong>TLAB\uFF1A</strong> \u4E3A\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u9884\u5148\u5728 Eden \u533A\u5206\u914D\u4E00\u5757\u513F\u5185\u5B58\uFF0CJVM \u5728\u7ED9\u7EBF\u7A0B\u4E2D\u7684\u5BF9\u8C61\u5206\u914D\u5185\u5B58\u65F6\uFF0C\u9996\u5148\u5728 TLAB \u5206\u914D\uFF0C\u5F53\u5BF9\u8C61\u5927\u4E8E TLAB \u4E2D\u7684\u5269\u4F59\u5185\u5B58\u6216 TLAB \u7684\u5185\u5B58\u5DF2\u7528\u5C3D\u65F6\uFF0C\u518D\u91C7\u7528\u4E0A\u8FF0\u7684 CAS \u8FDB\u884C\u5185\u5B58\u5206\u914D</li></ul><h3 id="_1-3-step3-\u521D\u59CB\u5316\u96F6\u503C" tabindex="-1"><a class="header-anchor" href="#_1-3-step3-\u521D\u59CB\u5316\u96F6\u503C" aria-hidden="true">#</a> 1.3 Step3:\u521D\u59CB\u5316\u96F6\u503C</h3><p>\u5185\u5B58\u5206\u914D\u5B8C\u6210\u540E\uFF0C\u865A\u62DF\u673A\u9700\u8981\u5C06\u5206\u914D\u5230\u7684\u5185\u5B58\u7A7A\u95F4\u90FD\u521D\u59CB\u5316\u4E3A\u96F6\u503C\uFF08\u4E0D\u5305\u62EC\u5BF9\u8C61\u5934\uFF09\uFF0C\u8FD9\u4E00\u6B65\u64CD\u4F5C\u4FDD\u8BC1\u4E86\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5B57\u6BB5\u5728 Java \u4EE3\u7801\u4E2D\u53EF\u4EE5\u4E0D\u8D4B\u521D\u59CB\u503C\u5C31\u76F4\u63A5\u4F7F\u7528\uFF0C\u7A0B\u5E8F\u80FD\u8BBF\u95EE\u5230\u8FD9\u4E9B\u5B57\u6BB5\u7684\u6570\u636E\u7C7B\u578B\u6240\u5BF9\u5E94\u7684\u96F6\u503C\u3002</p><h3 id="_1-4-step4-\u8BBE\u7F6E\u5BF9\u8C61\u5934" tabindex="-1"><a class="header-anchor" href="#_1-4-step4-\u8BBE\u7F6E\u5BF9\u8C61\u5934" aria-hidden="true">#</a> 1.4 Step4:\u8BBE\u7F6E\u5BF9\u8C61\u5934</h3><p>\u521D\u59CB\u5316\u96F6\u503C\u5B8C\u6210\u4E4B\u540E\uFF0C<strong>\u865A\u62DF\u673A\u8981\u5BF9\u5BF9\u8C61\u8FDB\u884C\u5FC5\u8981\u7684\u8BBE\u7F6E</strong>\uFF0C\u4F8B\u5982\u8FD9\u4E2A\u5BF9\u8C61\u662F\u90A3\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u3001\u5982\u4F55\u624D\u80FD\u627E\u5230\u7C7B\u7684\u5143\u6570\u636E\u4FE1\u606F\u3001\u5BF9\u8C61\u7684\u54C8\u5E0C\u7801\u3001\u5BF9\u8C61\u7684 GC \u5206\u4EE3\u5E74\u9F84\u7B49\u4FE1\u606F\u3002 <strong>\u8FD9\u4E9B\u4FE1\u606F\u5B58\u653E\u5728\u5BF9\u8C61\u5934\u4E2D\u3002</strong> \u53E6\u5916\uFF0C\u6839\u636E\u865A\u62DF\u673A\u5F53\u524D\u8FD0\u884C\u72B6\u6001\u7684\u4E0D\u540C\uFF0C\u5982\u662F\u5426\u542F\u7528\u504F\u5411\u9501\u7B49\uFF0C\u5BF9\u8C61\u5934\u4F1A\u6709\u4E0D\u540C\u7684\u8BBE\u7F6E\u65B9\u5F0F\u3002</p><h3 id="_1-5-step5-\u6267\u884C-init-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-5-step5-\u6267\u884C-init-\u65B9\u6CD5" aria-hidden="true">#</a> 1.5 Step5:\u6267\u884C init \u65B9\u6CD5</h3><p>\u5728\u4E0A\u9762\u5DE5\u4F5C\u90FD\u5B8C\u6210\u4E4B\u540E\uFF0C\u4ECE\u865A\u62DF\u673A\u7684\u89C6\u89D2\u6765\u770B\uFF0C\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u5DF2\u7ECF\u4EA7\u751F\u4E86\uFF0C\u4F46\u4ECE Java \u7A0B\u5E8F\u7684\u89C6\u89D2\u6765\u770B\uFF0C\u5BF9\u8C61\u521B\u5EFA\u624D\u521A\u5F00\u59CB\uFF0C<code>&lt;init&gt;</code> \u65B9\u6CD5\u8FD8\u6CA1\u6709\u6267\u884C\uFF0C\u6240\u6709\u7684\u5B57\u6BB5\u90FD\u8FD8\u4E3A\u96F6\u3002\u6240\u4EE5\u4E00\u822C\u6765\u8BF4\uFF0C\u6267\u884C new \u6307\u4EE4\u4E4B\u540E\u4F1A\u63A5\u7740\u6267\u884C <code>&lt;init&gt;</code> \u65B9\u6CD5\uFF0C\u628A\u5BF9\u8C61\u6309\u7167\u7A0B\u5E8F\u5458\u7684\u610F\u613F\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u8FD9\u6837\u4E00\u4E2A\u771F\u6B63\u53EF\u7528\u7684\u5BF9\u8C61\u624D\u7B97\u5B8C\u5168\u4EA7\u751F\u51FA\u6765\u3002</p><h2 id="_2-\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_2-\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40" aria-hidden="true">#</a> 2. \u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40</h2><p>\u5728 Hotspot \u865A\u62DF\u673A\u4E2D\uFF0C\u5BF9\u8C61\u5728\u5185\u5B58\u4E2D\u7684\u5E03\u5C40\u53EF\u4EE5\u5206\u4E3A 3 \u5757\u533A\u57DF\uFF1A<strong>\u5BF9\u8C61\u5934</strong>\u3001<strong>\u5B9E\u4F8B\u6570\u636E</strong>\u548C<strong>\u5BF9\u9F50\u586B\u5145</strong>\u3002</p><ul><li><p><strong>\u5BF9\u8C61\u5934</strong></p><p><strong>Hotspot \u865A\u62DF\u673A\u7684\u5BF9\u8C61\u5934\u5305\u62EC\u4E24\u90E8\u5206\u4FE1\u606F</strong>\uFF0C<strong>\u7B2C\u4E00\u90E8\u5206\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u81EA\u8EAB\u7684\u81EA\u8EAB\u8FD0\u884C\u65F6\u6570\u636E</strong>\uFF08\u54C8\u5E0C\u7801\u3001GC \u5206\u4EE3\u5E74\u9F84\u3001\u9501\u72B6\u6001\u6807\u5FD7\u7B49\u7B49\uFF09\uFF0C<strong>\u53E6\u4E00\u90E8\u5206\u662F\u7C7B\u578B\u6307\u9488</strong>\uFF0C\u5373\u5BF9\u8C61\u6307\u5411\u5B83\u7684\u7C7B\u5143\u6570\u636E\u7684\u6307\u9488\uFF0C\u865A\u62DF\u673A\u901A\u8FC7\u8FD9\u4E2A\u6307\u9488\u6765\u786E\u5B9A\u8FD9\u4E2A\u5BF9\u8C61\u662F\u90A3\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u3002</p></li><li><p><strong>\u5B9E\u4F8B\u6570\u636E</strong></p><p><strong>\u5B9E\u4F8B\u6570\u636E\u90E8\u5206\u662F\u5BF9\u8C61\u771F\u6B63\u5B58\u50A8\u7684\u6709\u6548\u4FE1\u606F</strong>\uFF0C\u4E5F\u662F\u5728\u7A0B\u5E8F\u4E2D\u6240\u5B9A\u4E49\u7684\u5404\u79CD\u7C7B\u578B\u7684\u5B57\u6BB5\u5185\u5BB9\u3002</p></li><li><p>\u5BF9\u9F50\u586B\u5145\u90E8\u5206</p><p><strong>\u5BF9\u9F50\u586B\u5145\u90E8\u5206\u4E0D\u662F\u5FC5\u7136\u5B58\u5728\u7684\uFF0C\u4E5F\u6CA1\u6709\u4EC0\u4E48\u7279\u522B\u7684\u542B\u4E49\uFF0C\u4EC5\u4EC5\u8D77\u5360\u4F4D\u4F5C\u7528\u3002</strong> \u56E0\u4E3A Hotspot \u865A\u62DF\u673A\u7684\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u7CFB\u7EDF\u8981\u6C42\u5BF9\u8C61\u8D77\u59CB\u5730\u5740\u5FC5\u987B\u662F 8 \u5B57\u8282\u7684\u6574\u6570\u500D\uFF0C\u6362\u53E5\u8BDD\u8BF4\u5C31\u662F\u5BF9\u8C61\u7684\u5927\u5C0F\u5FC5\u987B\u662F 8 \u5B57\u8282\u7684\u6574\u6570\u500D\u3002\u800C\u5BF9\u8C61\u5934\u90E8\u5206\u6B63\u597D\u662F 8 \u5B57\u8282\u7684\u500D\u6570\uFF081 \u500D\u6216 2 \u500D\uFF09\uFF0C\u56E0\u6B64\uFF0C\u5F53\u5BF9\u8C61\u5B9E\u4F8B\u6570\u636E\u90E8\u5206\u6CA1\u6709\u5BF9\u9F50\u65F6\uFF0C\u5C31\u9700\u8981\u901A\u8FC7\u5BF9\u9F50\u586B\u5145\u6765\u8865\u5168\u3002</p></li></ul><h2 id="_3-\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#_3-\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D" aria-hidden="true">#</a> 3. \u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D</h2><p>\u5EFA\u7ACB\u5BF9\u8C61\u5C31\u662F\u4E3A\u4E86\u4F7F\u7528\u5BF9\u8C61\uFF0C\u6211\u4EEC\u7684 Java \u7A0B\u5E8F\u901A\u8FC7\u6808\u4E0A\u7684 reference \u6570\u636E\u6765\u64CD\u4F5C\u5806\u4E0A\u7684\u5177\u4F53\u5BF9\u8C61\u3002\u5BF9\u8C61\u7684\u8BBF\u95EE\u65B9\u5F0F\u7531\u865A\u62DF\u673A\u5B9E\u73B0\u800C\u5B9A\uFF0C\u76EE\u524D\u4E3B\u6D41\u7684\u8BBF\u95EE\u65B9\u5F0F\u6709<strong>\u2460\u4F7F\u7528\u53E5\u67C4</strong>\u548C<strong>\u2461\u76F4\u63A5\u6307\u9488</strong>\u4E24\u79CD\uFF1A</p><ol><li><strong>\u53E5\u67C4\uFF1A</strong> \u5982\u679C\u4F7F\u7528\u53E5\u67C4\u7684\u8BDD\uFF0C\u90A3\u4E48 Java \u5806\u4E2D\u5C06\u4F1A\u5212\u5206\u51FA\u4E00\u5757\u5185\u5B58\u6765\u4F5C\u4E3A\u53E5\u67C4\u6C60\uFF0Creference \u4E2D\u5B58\u50A8\u7684\u5C31\u662F\u5BF9\u8C61\u7684\u53E5\u67C4\u5730\u5740\uFF0C\u800C\u53E5\u67C4\u4E2D\u5305\u542B\u4E86\u5BF9\u8C61\u5B9E\u4F8B\u6570\u636E\u4E0E\u7C7B\u578B\u6570\u636E\u5404\u81EA\u7684\u5177\u4F53\u5730\u5740\u4FE1\u606F\uFF1B</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190924232328745.png" alt="image-20190924232328745"></p><p><strong>2.\u76F4\u63A5\u6307\u9488\uFF1A</strong> \u5982\u679C\u4F7F\u7528\u76F4\u63A5\u6307\u9488\u8BBF\u95EE\uFF0C\u90A3\u4E48 Java \u5806\u5BF9\u8C61\u7684\u5E03\u5C40\u4E2D\u5C31\u5FC5\u987B\u8003\u8651\u5982\u4F55\u653E\u7F6E\u8BBF\u95EE\u7C7B\u578B\u6570\u636E\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u800C reference \u4E2D\u5B58\u50A8\u7684\u76F4\u63A5\u5C31\u662F\u5BF9\u8C61\u7684\u5730\u5740\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190924232354100.png" alt="image-20190924232354100"></p><p><strong>\u8FD9\u4E24\u79CD\u5BF9\u8C61\u8BBF\u95EE\u65B9\u5F0F\u5404\u6709\u4F18\u52BF\u3002\u4F7F\u7528\u53E5\u67C4\u6765\u8BBF\u95EE\u7684\u6700\u5927\u597D\u5904\u662F reference \u4E2D\u5B58\u50A8\u7684\u662F\u7A33\u5B9A\u7684\u53E5\u67C4\u5730\u5740\uFF0C\u5728\u5BF9\u8C61\u88AB\u79FB\u52A8\u65F6\u53EA\u4F1A\u6539\u53D8\u53E5\u67C4\u4E2D\u7684\u5B9E\u4F8B\u6570\u636E\u6307\u9488\uFF0C\u800C reference \u672C\u8EAB\u4E0D\u9700\u8981\u4FEE\u6539\u3002\u4F7F\u7528\u76F4\u63A5\u6307\u9488\u8BBF\u95EE\u65B9\u5F0F\u6700\u5927\u7684\u597D\u5904\u5C31\u662F\u901F\u5EA6\u5FEB\uFF0C\u5B83\u8282\u7701\u4E86\u4E00\u6B21\u6307\u9488\u5B9A\u4F4D\u7684\u65F6\u95F4\u5F00\u9500\u3002</strong></p>', 31);
const _hoisted_32 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_32);
}
var HotSpot________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "HotSpot\u865A\u62DF\u673A\u5BF9\u8C61\u521B\u5EFA.html.vue"]]);
export { HotSpot________html as default };
