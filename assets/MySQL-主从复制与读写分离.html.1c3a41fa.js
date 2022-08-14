import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.2ec15a41.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mysql-\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#mysql-\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB" aria-hidden="true">#</a> MySQL-\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB</h1><h2 id="_1-\u4E3B\u4ECE\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3B\u4ECE\u590D\u5236" aria-hidden="true">#</a> 1. \u4E3B\u4ECE\u590D\u5236</h2><p>\u4E3B\u8981\u6D89\u53CA\u4E09\u4E2A\u7EBF\u7A0B: binlog \u7EBF\u7A0B\u3001I/O \u7EBF\u7A0B\u548C SQL \u7EBF\u7A0B\u3002</p><ul><li><strong>binlog \u7EBF\u7A0B</strong> : \u8D1F\u8D23\u5C06\u4E3B\u670D\u52A1\u5668\u4E0A\u7684\u6570\u636E\u66F4\u6539\u5199\u5165\u4E8C\u8FDB\u5236\u65E5\u5FD7\u4E2D\u3002</li><li><strong>I/O \u7EBF\u7A0B</strong> : \u8D1F\u8D23\u4ECE\u4E3B\u670D\u52A1\u5668\u4E0A\u8BFB\u53D6\u4E8C\u8FDB\u5236\u65E5\u5FD7\uFF0C\u5E76\u5199\u5165\u4ECE\u670D\u52A1\u5668\u7684\u4E2D\u7EE7\u65E5\u5FD7\u4E2D\u3002</li><li><strong>SQL \u7EBF\u7A0B</strong> : \u8D1F\u8D23\u8BFB\u53D6\u4E2D\u7EE7\u65E5\u5FD7\u5E76\u91CD\u653E\u5176\u4E2D\u7684 SQL \u8BED\u53E5\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630205020937.png" alt="image-20220630205020937"></p><h2 id="_2-\u8BFB\u5199\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#_2-\u8BFB\u5199\u5206\u79BB" aria-hidden="true">#</a> 2. \u8BFB\u5199\u5206\u79BB</h2><p>\u4E3B\u670D\u52A1\u5668\u5904\u7406\u5199\u64CD\u4F5C\u4EE5\u53CA\u5B9E\u65F6\u6027\u8981\u6C42\u6BD4\u8F83\u9AD8\u7684\u8BFB\u64CD\u4F5C\uFF0C\u800C\u4ECE\u670D\u52A1\u5668\u5904\u7406\u8BFB\u64CD\u4F5C\u3002</p><p>\u8BFB\u5199\u5206\u79BB\u80FD\u63D0\u9AD8\u6027\u80FD\u7684\u539F\u56E0\u5728\u4E8E:</p><ul><li>\u4E3B\u4ECE\u670D\u52A1\u5668\u8D1F\u8D23\u5404\u81EA\u7684\u8BFB\u548C\u5199\uFF0C\u6781\u5927\u7A0B\u5EA6\u7F13\u89E3\u4E86\u9501\u7684\u4E89\u7528\uFF1B</li><li><strong>\u4ECE\u670D\u52A1\u5668\u53EF\u4EE5\u4F7F\u7528 MyISAM\uFF0C\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u4EE5\u53CA\u8282\u7EA6\u7CFB\u7EDF\u5F00\u9500\uFF1B</strong></li><li>\u589E\u52A0\u5197\u4F59\uFF0C\u63D0\u9AD8\u53EF\u7528\u6027\u3002</li></ul><p>\u8BFB\u5199\u5206\u79BB\u5E38\u7528\u4EE3\u7406\u65B9\u5F0F\u6765\u5B9E\u73B0\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u63A5\u6536\u5E94\u7528\u5C42\u4F20\u6765\u7684\u8BFB\u5199\u8BF7\u6C42\uFF0C\u7136\u540E\u51B3\u5B9A\u8F6C\u53D1\u5230\u54EA\u4E2A\u670D\u52A1\u5668\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630205134688.png" alt="image-20220630205134688"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 12);
const _hoisted_13 = {
  href: "https://pdai.tech/md/db/sql-mysql/sql-mysql-slave.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode("MySQL - \u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_13, [
        _hoisted_14,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var MySQL___________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MySQL-\u4E3B\u4ECE\u590D\u5236\u4E0E\u8BFB\u5199\u5206\u79BB.html.vue"]]);
export { MySQL___________html as default };
