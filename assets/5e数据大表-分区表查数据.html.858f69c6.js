import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.9ef7ce43.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="_5e\u6570\u636E\u5927\u8868-\u5206\u533A\u8868\u67E5\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_5e\u6570\u636E\u5927\u8868-\u5206\u533A\u8868\u67E5\u6570\u636E" aria-hidden="true">#</a> 5e\u6570\u636E\u5927\u8868\uFF0C\u5206\u533A\u8868\u67E5\u6570\u636E</h1><p>\u5206\u533A\u8868\u662F\u6309\u65E5\u81EA\u52A8\u521B\u5EFA\u7684\u3002</p><p>\u8BB0\u4E0B\u601D\u8DEF</p><ol><li><p>\u67E5\u8BE2\u51FA\u8BE5\u8868\u6240\u6709\u5206\u533A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> PARTITION_NAME<span class="token punctuation">,</span> HIGH_VALUE <span class="token keyword">from</span> user_tab_partitions <span class="token keyword">where</span> table_name<span class="token operator">=</span><span class="token string">&#39;DAVE&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5BF9\u6BD4 HIGH_VALUE \u67E5\u51FA\u8FD13\u5E74\u7684\u6240\u6709\u5206\u533A\u503C</p></li><li><p>\u5C06\u6240\u6709\u5206\u533A\u503C\u8FDB\u884Cunion all</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dave <span class="token keyword">partition</span><span class="token punctuation">(</span>SYS_P53<span class="token punctuation">)</span>\n<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>\n<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dave <span class="token keyword">partition</span><span class="token punctuation">(</span>SYS_P54<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>', 4);
const _hoisted_5 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_5);
}
var _5e____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "5e\u6570\u636E\u5927\u8868-\u5206\u533A\u8868\u67E5\u6570\u636E.html.vue"]]);
export { _5e____________html as default };
