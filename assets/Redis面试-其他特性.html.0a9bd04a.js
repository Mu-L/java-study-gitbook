import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.9ef7ce43.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="redis\u9762\u8BD5-\u5176\u4ED6\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#redis\u9762\u8BD5-\u5176\u4ED6\u7279\u6027" aria-hidden="true">#</a> Redis\u9762\u8BD5-\u5176\u4ED6\u7279\u6027</h1><h2 id="_1-redis\u4E8B\u4EF6\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_1-redis\u4E8B\u4EF6\u673A\u5236" aria-hidden="true">#</a> 1 Redis\u4E8B\u4EF6\u673A\u5236?</h2><p>Redis\u4E2D\u7684\u4E8B\u4EF6\u9A71\u52A8\u5E93\u53EA\u5173\u6CE8\u7F51\u7EDCIO\uFF0C\u4EE5\u53CA\u5B9A\u65F6\u5668\u3002\u8BE5\u4E8B\u4EF6\u5E93\u5904\u7406\u4E0B\u9762\u4E24\u7C7B\u4E8B\u4EF6\uFF1A</p><ul><li><strong>\u6587\u4EF6\u4E8B\u4EF6</strong>(file event)\uFF1A\u7528\u4E8E\u5904\u7406 Redis \u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684\u7F51\u7EDCIO\u3002</li><li><strong>\u65F6\u95F4\u4E8B\u4EF6</strong>(time eveat)\uFF1ARedis \u670D\u52A1\u5668\u4E2D\u7684\u4E00\u4E9B\u64CD\u4F5C\uFF08\u6BD4\u5982serverCron\u51FD\u6570\uFF09\u9700\u8981\u5728\u7ED9\u5B9A\u7684\u65F6\u95F4\u70B9\u6267\u884C\uFF0C\u800C\u65F6\u95F4\u4E8B\u4EF6\u5C31\u662F\u5904\u7406\u8FD9\u7C7B\u5B9A\u65F6\u64CD\u4F5C\u7684\u3002</li></ul><p>\u4E8B\u4EF6\u9A71\u52A8\u5E93\u7684\u4EE3\u7801\u4E3B\u8981\u662F\u5728<code>src/ae.c</code>\u4E2D\u5B9E\u73B0\u7684\uFF0C\u5176\u793A\u610F\u56FE\u5982\u4E0B\u6240\u793A\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628231834918.png" alt="image-20220628231834918"></p><p><code>aeEventLoop</code>\u662F\u6574\u4E2A\u4E8B\u4EF6\u9A71\u52A8\u7684\u6838\u5FC3\uFF0C\u5B83\u7BA1\u7406\u7740\u6587\u4EF6\u4E8B\u4EF6\u8868\u548C\u65F6\u95F4\u4E8B\u4EF6\u5217\u8868\uFF0C\u4E0D\u65AD\u5730\u5FAA\u73AF\u5904\u7406\u7740\u5C31\u7EEA\u7684\u6587\u4EF6\u4E8B\u4EF6\u548C\u5230\u671F\u7684\u65F6\u95F4\u4E8B\u4EF6\u3002</p><h2 id="_2-redis\u6587\u4EF6\u4E8B\u4EF6\u7684\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_2-redis\u6587\u4EF6\u4E8B\u4EF6\u7684\u6A21\u578B" aria-hidden="true">#</a> 2 Redis\u6587\u4EF6\u4E8B\u4EF6\u7684\u6A21\u578B\uFF1F</h2><p>Redis\u57FA\u4E8E<strong>Reactor\u6A21\u5F0F</strong>\u5F00\u53D1\u4E86\u81EA\u5DF1\u7684\u7F51\u7EDC\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u4E5F\u5C31\u662F\u6587\u4EF6\u4E8B\u4EF6\u5904\u7406\u5668\u3002\u6587\u4EF6\u4E8B\u4EF6\u5904\u7406\u5668\u4F7F\u7528<strong>IO\u591A\u8DEF\u590D\u7528\u6280\u672F</strong>\uFF0C\u540C\u65F6\u76D1\u542C\u591A\u4E2A\u5957\u63A5\u5B57\uFF0C\u5E76\u4E3A\u5957\u63A5\u5B57\u5173\u8054\u4E0D\u540C\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002\u5F53\u5957\u63A5\u5B57\u7684\u53EF\u8BFB\u6216\u8005\u53EF\u5199\u4E8B\u4EF6\u89E6\u53D1\u65F6\uFF0C\u5C31\u4F1A\u8C03\u7528\u76F8\u5E94\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002</p><ul><li><strong>1. \u4E3A\u4EC0\u4E48\u5355\u7EBF\u7A0B\u7684 Redis \u80FD\u90A3\u4E48\u5FEB</strong>\uFF1F</li></ul><p>Redis\u7684\u74F6\u9888\u4E3B\u8981\u5728IO\u800C\u4E0D\u662FCPU\uFF0C\u6240\u4EE5\u4E3A\u4E86\u7701\u5F00\u53D1\u91CF\uFF0C\u57286.0\u7248\u672C\u524D\u662F\u5355\u7EBF\u7A0B\u6A21\u578B\uFF1B\u5176\u6B21\uFF0CRedis \u662F\u5355\u7EBF\u7A0B\u4E3B\u8981\u662F\u6307 <strong>Redis \u7684\u7F51\u7EDC IO \u548C\u952E\u503C\u5BF9\u8BFB\u5199\u662F\u7531\u4E00\u4E2A\u7EBF\u7A0B\u6765\u5B8C\u6210\u7684</strong>\uFF0C\u8FD9\u4E5F\u662F Redis \u5BF9\u5916\u63D0\u4F9B\u952E\u503C\u5B58\u50A8\u670D\u52A1\u7684\u4E3B\u8981\u6D41\u7A0B\u3002\uFF08\u4F46 Redis \u7684\u5176\u4ED6\u529F\u80FD\uFF0C\u6BD4\u5982\u6301\u4E45\u5316\u3001\u5F02\u6B65\u5220\u9664\u3001\u96C6\u7FA4\u6570\u636E\u540C\u6B65\u7B49\uFF0C\u5176\u5B9E\u662F\u7531\u989D\u5916\u7684\u7EBF\u7A0B\u6267\u884C\u7684\uFF09\u3002</p><p>Redis \u91C7\u7528\u4E86\u591A\u8DEF\u590D\u7528\u673A\u5236\u4F7F\u5176\u5728\u7F51\u7EDC IO \u64CD\u4F5C\u4E2D\u80FD\u5E76\u53D1\u5904\u7406\u5927\u91CF\u7684\u5BA2\u6237\u7AEF\u8BF7\u6C42\uFF0C\u5B9E\u73B0\u9AD8\u541E\u5410\u7387\u3002</p><ul><li><strong>2. Redis\u4E8B\u4EF6\u54CD\u5E94\u6846\u67B6ae_event\u53CA\u6587\u4EF6\u4E8B\u4EF6\u5904\u7406\u5668</strong></li></ul><p>Redis\u5E76\u6CA1\u6709\u4F7F\u7528 libevent \u6216\u8005 libev \u8FD9\u6837\u7684\u6210\u719F\u5F00\u6E90\u65B9\u6848\uFF0C\u800C\u662F\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A\u975E\u5E38\u7B80\u6D01\u7684\u4E8B\u4EF6\u9A71\u52A8\u5E93 ae_event\u3002@pdai</p><p>Redis \u4F7F\u7528\u7684IO\u591A\u8DEF\u590D\u7528\u6280\u672F\u4E3B\u8981\u6709\uFF1A<code>select</code>\u3001<code>epoll</code>\u3001<code>evport</code>\u548C<code>kqueue</code>\u7B49\u3002\u6BCF\u4E2AIO\u591A\u8DEF\u590D\u7528\u51FD\u6570\u5E93\u5728 Redis \u6E90\u7801\u4E2D\u90FD\u5BF9\u5E94\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982<code>ae_select.c</code>\uFF0C<code>ae_epoll.c</code>\uFF0C <code>ae_kqueue.c</code>\u7B49\u3002Redis \u4F1A\u6839\u636E\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u6309\u7167\u4E0D\u540C\u7684\u4F18\u5148\u7EA7\u9009\u62E9\u591A\u8DEF\u590D\u7528\u6280\u672F\u3002\u4E8B\u4EF6\u54CD\u5E94\u6846\u67B6\u4E00\u822C\u90FD\u91C7\u7528\u8BE5\u67B6\u6784\uFF0C\u6BD4\u5982 netty \u548C libevent\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628231916751.png" alt="image-20220628231916751"></p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u6587\u4EF6\u4E8B\u4EF6\u5904\u7406\u5668\u6709\u56DB\u4E2A\u7EC4\u6210\u90E8\u5206\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\u5957\u63A5\u5B57\u3001I/O\u591A\u8DEF\u590D\u7528\u7A0B\u5E8F\u3001\u6587\u4EF6\u4E8B\u4EF6\u5206\u6D3E\u5668\u4EE5\u53CA\u4E8B\u4EF6\u5904\u7406\u5668\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628231940531.png" alt="image-20220628231940531"></p><p>\u6587\u4EF6\u4E8B\u4EF6\u662F\u5BF9\u5957\u63A5\u5B57\u64CD\u4F5C\u7684\u62BD\u8C61\uFF0C\u6BCF\u5F53\u4E00\u4E2A\u5957\u63A5\u5B57\u51C6\u5907\u597D\u6267\u884C <code>accept</code>\u3001<code>read</code>\u3001<code>write</code>\u548C <code>close</code> \u7B49\u64CD\u4F5C\u65F6\uFF0C\u5C31\u4F1A\u4EA7\u751F\u4E00\u4E2A\u6587\u4EF6\u4E8B\u4EF6\u3002\u56E0\u4E3A Redis \u901A\u5E38\u4F1A\u8FDE\u63A5\u591A\u4E2A\u5957\u63A5\u5B57\uFF0C\u6240\u4EE5\u591A\u4E2A\u6587\u4EF6\u4E8B\u4EF6\u6709\u53EF\u80FD\u5E76\u53D1\u7684\u51FA\u73B0\u3002</p><p>I/O\u591A\u8DEF\u590D\u7528\u7A0B\u5E8F\u8D1F\u8D23\u76D1\u542C\u591A\u4E2A\u5957\u63A5\u5B57\uFF0C\u5E76\u5411\u6587\u4EF6\u4E8B\u4EF6\u6D3E\u53D1\u5668\u4F20\u9012\u90A3\u4E9B\u4EA7\u751F\u4E86\u4E8B\u4EF6\u7684\u5957\u63A5\u5B57\u3002</p><p>\u5C3D\u7BA1\u591A\u4E2A\u6587\u4EF6\u4E8B\u4EF6\u53EF\u80FD\u4F1A\u5E76\u53D1\u5730\u51FA\u73B0\uFF0C\u4F46I/O\u591A\u8DEF\u590D\u7528\u7A0B\u5E8F\u603B\u662F\u4F1A\u5C06\u6240\u6709\u4EA7\u751F\u7684\u5957\u63A5\u5B57\u90FD\u653E\u5230\u540C\u4E00\u4E2A\u961F\u5217(\u4E5F\u5C31\u662F\u540E\u6587\u4E2D\u63CF\u8FF0\u7684aeEventLoop\u7684fired\u5C31\u7EEA\u4E8B\u4EF6\u8868)\u91CC\u8FB9\uFF0C\u7136\u540E\u6587\u4EF6\u4E8B\u4EF6\u5904\u7406\u5668\u4F1A\u4EE5\u6709\u5E8F\u3001\u540C\u6B65\u3001\u5355\u4E2A\u5957\u63A5\u5B57\u7684\u65B9\u5F0F\u5904\u7406\u8BE5\u961F\u5217\u4E2D\u7684\u5957\u63A5\u5B57\uFF0C\u4E5F\u5C31\u662F\u5904\u7406\u5C31\u7EEA\u7684\u6587\u4EF6\u4E8B\u4EF6\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628232005169.png" alt="image-20220628232005169"></p><h2 id="_3-\u4EC0\u4E48\u662Fredis\u53D1\u5E03\u8BA2\u9605" tabindex="-1"><a class="header-anchor" href="#_3-\u4EC0\u4E48\u662Fredis\u53D1\u5E03\u8BA2\u9605" aria-hidden="true">#</a> 3 \u4EC0\u4E48\u662FRedis\u53D1\u5E03\u8BA2\u9605\uFF1F</h2><p>Redis \u53D1\u5E03\u8BA2\u9605(pub/sub)\u662F\u4E00\u79CD\u6D88\u606F\u901A\u4FE1\u6A21\u5F0F\uFF1A\u53D1\u9001\u8005(pub)\u53D1\u9001\u6D88\u606F\uFF0C\u8BA2\u9605\u8005(sub)\u63A5\u6536\u6D88\u606F\u3002</p><p>Redis \u7684 SUBSCRIBE \u547D\u4EE4\u53EF\u4EE5\u8BA9\u5BA2\u6237\u7AEF\u8BA2\u9605\u4EFB\u610F\u6570\u91CF\u7684\u9891\u9053\uFF0C \u6BCF\u5F53\u6709\u65B0\u4FE1\u606F\u53D1\u9001\u5230\u88AB\u8BA2\u9605\u7684\u9891\u9053\u65F6\uFF0C \u4FE1\u606F\u5C31\u4F1A\u88AB\u53D1\u9001\u7ED9\u6240\u6709\u8BA2\u9605\u6307\u5B9A\u9891\u9053\u7684\u5BA2\u6237\u7AEF\u3002</p><p>\u4F5C\u4E3A\u4F8B\u5B50\uFF0C \u4E0B\u56FE\u5C55\u793A\u4E86\u9891\u9053 channel1 \uFF0C \u4EE5\u53CA\u8BA2\u9605\u8FD9\u4E2A\u9891\u9053\u7684\u4E09\u4E2A\u5BA2\u6237\u7AEF \u2014\u2014 client2 \u3001 client5 \u548C client1 \u4E4B\u95F4\u7684\u5173\u7CFB</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628232200617.png" alt="image-20220628232200617" style="zoom:50%;"><p>\u5F53\u6709\u65B0\u6D88\u606F\u901A\u8FC7 PUBLISH \u547D\u4EE4\u53D1\u9001\u7ED9\u9891\u9053 channel1 \u65F6\uFF0C \u8FD9\u4E2A\u6D88\u606F\u5C31\u4F1A\u88AB\u53D1\u9001\u7ED9\u8BA2\u9605\u5B83\u7684\u4E09\u4E2A\u5BA2\u6237\u7AEF\uFF1A</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628232219119.png" alt="image-20220628232219119" style="zoom:50%;"><h2 id="_4-redis\u53D1\u5E03\u8BA2\u9605\u6709\u54EA\u4E24\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-redis\u53D1\u5E03\u8BA2\u9605\u6709\u54EA\u4E24\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 4 Redis\u53D1\u5E03\u8BA2\u9605\u6709\u54EA\u4E24\u79CD\u65B9\u5F0F\uFF1F</h2><ul><li><strong>\u57FA\u4E8E\u9891\u9053(Channel)\u7684\u53D1\u5E03/\u8BA2\u9605</strong></li></ul><p>&quot;\u53D1\u5E03/\u8BA2\u9605&quot;\u6A21\u5F0F\u5305\u542B\u4E24\u79CD\u89D2\u8272\uFF0C\u5206\u522B\u662F\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u3002\u53D1\u5E03\u8005\u53EF\u4EE5\u5411\u6307\u5B9A\u7684\u9891\u9053(channel)\u53D1\u9001\u6D88\u606F; \u8BA2\u9605\u8005\u53EF\u4EE5\u8BA2\u9605\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u9891\u9053(channel),\u6240\u6709\u8BA2\u9605\u6B64\u9891\u9053\u7684\u8BA2\u9605\u8005\u90FD\u4F1A\u6536\u5230\u6B64\u6D88\u606F\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628232251439.png" alt="image-20220628232251439"></p><ul><li><strong>\u57FA\u4E8E\u6A21\u5F0F(pattern)\u7684\u53D1\u5E03/\u8BA2\u9605</strong></li></ul><p>\u4E0B\u56FE\u5C55\u793A\u4E86\u4E00\u4E2A\u5E26\u6709\u9891\u9053\u548C\u6A21\u5F0F\u7684\u4F8B\u5B50\uFF0C \u5176\u4E2D tweet.shop.* \u6A21\u5F0F\u5339\u914D\u4E86 tweet.shop.kindle \u9891\u9053\u548C tweet.shop.ipad \u9891\u9053\uFF0C \u5E76\u4E14\u6709\u4E0D\u540C\u7684\u5BA2\u6237\u7AEF\u5206\u522B\u8BA2\u9605\u5B83\u4EEC\u4E09\u4E2A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628232314728.png" alt="image-20220628232314728"></p><p>\u5F53\u6709\u4FE1\u606F\u53D1\u9001\u5230 tweet.shop.kindle \u9891\u9053\u65F6\uFF0C \u4FE1\u606F\u9664\u4E86\u53D1\u9001\u7ED9 clientX \u548C clientY \u4E4B\u5916\uFF0C \u8FD8\u4F1A\u53D1\u9001\u7ED9\u8BA2\u9605 tweet.shop.* \u6A21\u5F0F\u7684 client123 \u548C client256 \uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628232334451.png" alt="image-20220628232334451"></p><p>\u53E6\u4E00\u65B9\u9762\uFF0C \u5982\u679C\u63A5\u6536\u5230\u4FE1\u606F\u7684\u662F\u9891\u9053 tweet.shop.ipad \uFF0C \u90A3\u4E48 client123 \u548C client256 \u540C\u6837\u4F1A\u6536\u5230\u4FE1\u606F\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628232349308.png" alt="image-20220628232349308"></p>', 40);
const _hoisted_41 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_41);
}
var Redis________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Redis\u9762\u8BD5-\u5176\u4ED6\u7279\u6027.html.vue"]]);
export { Redis________html as default };
