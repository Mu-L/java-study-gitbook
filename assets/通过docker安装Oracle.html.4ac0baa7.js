import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.2ec15a41.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u901A\u8FC7docker\u5B89\u88C5oracle" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7docker\u5B89\u88C5oracle" aria-hidden="true">#</a> \u901A\u8FC7docker\u5B89\u88C5Oracle</h1><h2 id="_1-\u5B89\u88C5oracle" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5oracle" aria-hidden="true">#</a> 1. \u5B89\u88C5Oracle</h2><ol><li><p>\u62C9\u53D6\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u955C\u50CF\u5927\u6982\u67096.8G</p><p>\u67E5\u770B\u955C\u50CF\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> iamges\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u521B\u5EFA\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">1521</span>:1521 --name oracle_11g registry.aliyuncs.com/helowin/oracle_11g\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> start oracle_11g\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u8FDB\u5165\u63A7\u5236\u53F0\u8BBE\u7F6E\u7528\u6237\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it oracle_11g <span class="token function">bash</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5207\u6362\u6210root\u8FDB\u884C\u64CD\u4F5C\uFF1A</p><blockquote><p>su - root</p></blockquote><p>\u8F93\u5165\u5BC6\u7801helowin</p></li><li><p>\u8BBE\u7F6Eoracle\u73AF\u5883\u53D8\u91CF\u5982\u4E0B\uFF1A</p><p>vi /etc/profile\u6587\u4EF6\u672B\u5C3E\u6DFB\u52A0\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_HOME</span><span class="token operator">=</span>/home/oracle/app/oracle/product/11.2.0/dbhome_2\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>helowin\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">PATH</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5207\u6362\u56DEoracle\u7528\u6237\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">su</span> - oracle\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539sys\u3001system\u7528\u6237\u5BC6\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sqlplus /nolog\nconn /as sysdba\nalter user system identified by oracle;\nalter user sys identified by oracle;\nALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5904\u7684oracle \u5C31\u662F\u4F60\u8BBE\u7F6E\u7684\u5BC6\u7801</p><p>Ps:\u9ED8\u8BA4\u5BC6\u7801\u662F\uFF1Ahelowin</p></li></ol><h2 id="_2-\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> 2. \u9047\u5230\u7684\u95EE\u9898</h2><h3 id="_2-1-\u8FDC\u7A0B\u8FDE\u63A5\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8FDC\u7A0B\u8FDE\u63A5\u63D0\u793A" aria-hidden="true">#</a> 2.1 \u8FDC\u7A0B\u8FDE\u63A5\u63D0\u793A</h3><p>ORA-12514: TNS:listener does not currently know of service requested in connect descriptor</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200507212411220.png" alt="image-20200507212411220"></p><p>\u4E3B\u8981\u539F\u56E0\u662Fservice name \u8BBE\u7F6E\u7684\u5E76\u4E0D\u662FORCL \u5BFC\u81F4</p><ul><li><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><p>service name \u6539\u4E3A helowin</p></li><li><p>\u89E3\u51B3\u6B65\u9AA4</p><ol><li><p>\u8FDB\u5165docker \u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it oracle_11g <span class="token function">bash</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u8FDB\u5165 tnsnames.ora\u6240\u5728\u7684\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/oracle/app/oracle/product/11.2.0/dbhome_2/network/admin\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u67E5\u770B tnsnames.ora</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi  tnsnames.ora\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230SERVICE_NAME = helowin</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200507213419605.png" alt="image-20200507213419605"></p><p>serviceName \u6539\u4E3Ahelowin \u6216\u8005\u8FD9\u91CC\u6539\u4E3Aorcl</p></li></ol></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 10);
const _hoisted_11 = {
  href: "https://segmentfault.com/a/1190000020633619",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("centos7\u4F7F\u7528docker\u5B89\u88C5oracle");
const _hoisted_13 = {
  href: "https://blog.csdn.net/weixin_30657541/article/details/98204681",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Linux\u4E0B\u5982\u4F55\u67E5\u627Esqlnet.ora \u548Clistener.ora \u548Ctnsnames.ora \u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_11, [
        _hoisted_12,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_13, [
        _hoisted_14,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var __docker__Oracle_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u901A\u8FC7docker\u5B89\u88C5Oracle.html.vue"]]);
export { __docker__Oracle_html as default };
