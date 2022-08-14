import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.2ec15a41.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="nexus\u79C1\u670D\u4E0A\u4F20\u7B2C\u4E09\u65B9\u5305" tabindex="-1"><a class="header-anchor" href="#nexus\u79C1\u670D\u4E0A\u4F20\u7B2C\u4E09\u65B9\u5305" aria-hidden="true">#</a> nexus\u79C1\u670D\u4E0A\u4F20\u7B2C\u4E09\u65B9\u5305</h1><h2 id="_1-\u64CD\u4F5C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u64CD\u4F5C\u6B65\u9AA4" aria-hidden="true">#</a> 1. \u64CD\u4F5C\u6B65\u9AA4</h2><h3 id="_1-1-\u521B\u5EFArepositories" tabindex="-1"><a class="header-anchor" href="#_1-1-\u521B\u5EFArepositories" aria-hidden="true">#</a> 1.1 \u521B\u5EFArepositories</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004225113417.png" alt="image-20211004225113417"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004225141529.png" alt="image-20211004225141529"></p><h3 id="_1-2-\u914D\u7F6Erepositories" tabindex="-1"><a class="header-anchor" href="#_1-2-\u914D\u7F6Erepositories" aria-hidden="true">#</a> 1.2 \u914D\u7F6Erepositories</h3><p>\u914D\u7F6E\u5982\u4E0B\uFF08\u5B9A\u4E49\u540D\u79F0\u5E76\u6FC0\u6D3B\uFF09\uFF0C\u7136\u540E\u81EA\u884C\u62D6\u5230\u9875\u9762\u7684\u6700\u4E0B\u65B9\uFF0C\u70B9\u51FB\u6DFB\u52A0\u5373\u53EF</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004225316142.png" alt="image-20211004225316142"></p><h3 id="_1-3-maven-public\u914D\u7F6E3rd" tabindex="-1"><a class="header-anchor" href="#_1-3-maven-public\u914D\u7F6E3rd" aria-hidden="true">#</a> 1.3 maven-public\u914D\u7F6E3rd</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004225459127.png" alt="image-20211004225459127"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004225514115.png" alt="image-20211004225514115"></p><h3 id="_1-4-maven\u6DFB\u52A0\u7B2C\u4E09\u65B9\u4ED3\u5E93\u5730\u5740-\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-4-maven\u6DFB\u52A0\u7B2C\u4E09\u65B9\u4ED3\u5E93\u5730\u5740-\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> 1.4 Maven\u6DFB\u52A0\u7B2C\u4E09\u65B9\u4ED3\u5E93\u5730\u5740\uFF08\u5168\u5C40\u914D\u7F6E\uFF09</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004225624932.png" alt="image-20211004225624932"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004225652991.png" alt="image-20211004225652991"></p><h3 id="_1-5-\u914D\u7F6Esettings-xml" tabindex="-1"><a class="header-anchor" href="#_1-5-\u914D\u7F6Esettings-xml" aria-hidden="true">#</a> 1.5 \u914D\u7F6Esettings.xml</h3><p>\u5728profiles \u4E2D\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>3rdnexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://192.168.0.1:8081/repository/3rd/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>release</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enable</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enable</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>release</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enable</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enable</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>   \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0server</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;server&gt;\n      &lt;id&gt;3rdnexus&lt;/id&gt;      #\u6B64ID\u8981\u4E0Eprofile\u4E2D\u7684ID\u5BF9\u5E94\n      &lt;username&gt;test&lt;/username&gt;\n      &lt;password&gt;123456&lt;/password&gt;\n &lt;/server&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-\u4E0A\u4F20\u672C\u5730\u5305" tabindex="-1"><a class="header-anchor" href="#_1-6-\u4E0A\u4F20\u672C\u5730\u5305" aria-hidden="true">#</a> 1.6 \u4E0A\u4F20\u672C\u5730\u5305</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ls\nojdbc14-10.2.0.4.0.jar\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn deploy:deploy-file -DgroupId<span class="token operator">=</span>com.oracle -DartifactId<span class="token operator">=</span>ojdbc14 -Dversion<span class="token operator">=</span><span class="token number">10.2</span>.0.4.0 -Dpackaging<span class="token operator">=</span>jar -Dfile<span class="token operator">=</span>/Users/zsz/Project/software/jar/oracle/ojdbc14-10.2.0.4.0.jar -Durl<span class="token operator">=</span>http://192.168.0.1:8081/repository/3rd/ -DrepositoryId<span class="token operator">=</span>3rdnexus\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-7-\u67E5\u770B\u672C\u5730\u4E0A\u4F20\u7684jar\u5305" tabindex="-1"><a class="header-anchor" href="#_1-7-\u67E5\u770B\u672C\u5730\u4E0A\u4F20\u7684jar\u5305" aria-hidden="true">#</a> 1.7 <strong>\u67E5\u770B\u672C\u5730\u4E0A\u4F20\u7684jar\u5305\uFF1A</strong></h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004230728014.png" alt="image-20211004230728014"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211004230745224.png" alt="image-20211004230745224"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 26);
const _hoisted_27 = {
  href: "https://cloud.tencent.com/developer/article/1623922",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u90E8\u7F72maven\u53CANexus\u79C1\u670D");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_27, [
        _hoisted_28,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var C10Nexus_________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C10-nexus\u79C1\u670D\u4E0A\u4F20\u7B2C\u4E09\u65B9\u5305.html.vue"]]);
export { C10Nexus_________html as default };
