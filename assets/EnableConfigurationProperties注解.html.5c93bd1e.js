import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.9ef7ce43.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="enableconfigurationproperties\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#enableconfigurationproperties\u6CE8\u89E3" aria-hidden="true">#</a> @EnableConfigurationProperties\u6CE8\u89E3</h1><h2 id="_1-\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u4F5C\u7528" aria-hidden="true">#</a> 1. \u4F5C\u7528</h2><p><strong>@EnableConfigurationProperties \u6CE8\u89E3\u7684\u4F5C\u7528\u662F:\u8BA9\u4F7F\u7528\u4E86 @ConfigurationProperties \u6CE8\u89E3\u7684\u7C7B\u751F\u6548,\u5E76\u4E14\u5C06\u8BE5\u7C7B\u6CE8\u5165\u5230 IOC \u5BB9\u5668\u4E2D,\u4EA4\u7531 IOC \u5BB9\u5668\u8FDB\u884C\u7BA1\u7406</strong></p><blockquote><p>@ConfigurationProperties\u662F\u5728\u7B2C\u4E09\u65B9\u5305\u4E2D\uFF0C\u90A3\u4E48@component\u662F\u4E0D\u80FD\u6CE8\u5165\u5230\u5BB9\u5668\u7684\u3002\u53EA\u6709@EnableConfigurationProperties\u624D\u53EF\u4EE5\u6CE8\u5165\u5230\u5BB9\u5668</p></blockquote><h2 id="_2-\u5982\u4F55\u4F7F-configurationproperties\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_2-\u5982\u4F55\u4F7F-configurationproperties\u751F\u6548" aria-hidden="true">#</a> 2. \u5982\u4F55\u4F7F@ConfigurationProperties\u751F\u6548</h2><h3 id="_2-1-\u65B9\u5F0F1-\u4F7F\u7528-configurationproperties-component-\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u5F0F1-\u4F7F\u7528-configurationproperties-component-\u6CE8\u89E3" aria-hidden="true">#</a> 2.1 \u65B9\u5F0F1\uFF1A<strong>\u4F7F\u7528 @ConfigurationProperties + @Component \u6CE8\u89E3</strong></h3><p>\u5982\u679C\u4E00\u4E2A\u7C7B\u53EA\u914D\u7F6E\u4E86 @ConfigurationProperties \u6CE8\u89E3\uFF0C\u800C\u6CA1\u6709\u4F7F\u7528 @Component \u6CE8\u89E3\u5C06\u8BE5\u7C7B\u52A0\u5165\u5230 IOC \u5BB9\u5668\u4E2D\uFF0C\u90A3\u4E48\u5B83\u5C31\u4E0D\u80FD\u5B8C\u6210 xxx.properties \u914D\u7F6E\u6587\u4EF6\u548C Java Bean \u7684\u6570\u636E\u7ED1\u5B9A</p><ol><li><p>application.properties</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">mytest.name</span><span class="token punctuation">=</span><span class="token value attr-value">zszdevelop</span>\n<span class="token key attr-name">mytest.age</span><span class="token punctuation">=</span><span class="token value attr-value">27</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>MyConfigurationProperties \u8FD9\u4E2A\u5B9E\u4F53\u7C7B\u4E2D\u5FC5\u987B\u8981\u52A0\u4E0A @Component ,\u4F7F\u8FD9\u4E2A\u7C7B\u6CE8\u5165\u5230 IOC\u5BB9\u5668\u4E2D,\u5426\u5219\u5C31\u65E0\u6CD5\u4ECE\u5BB9\u5668\u4E2D\u83B7\u53D6\u5230\u8FD9\u4E2A\u7C7B\u7684\u5BF9\u8C61\u5B9E\u4F8B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;mytest&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyConfigurationProperties</span> <span class="token punctuation">{</span>\n\n    <span class="token comment">// \u7701\u7565 get\u3001set\u3001toString \u65B9\u6CD5</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> gender<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>HelloController</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">MyConfigurationProperties</span> config<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/config&quot;</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">testConfigurationProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> <span class="token string">&quot;SUCCESS!!!&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6D4B\u8BD5\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MyConfigurationProperties{name=&#39;zszdevelop&#39;, age=27, gender=&#39;null&#39;}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_2-2-\u65B9\u5F0F2-\u4F7F\u7528-enableconfigurationproperties-\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u5F0F2-\u4F7F\u7528-enableconfigurationproperties-\u6CE8\u89E3" aria-hidden="true">#</a> 2.2 \u65B9\u5F0F2\uFF1A<strong>\u4F7F\u7528 @EnableConfigurationProperties \u6CE8\u89E3</strong></h3><ol><li><p>\u6DFB\u52A0\u4E00\u4E2A HelloService \u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6CE8\u5165\u5230 IOC \u5BB9\u5668\u4E2D,\u4EA4\u7531 Spring \u8FDB\u884C\u7BA1\u7406</span>\n\n<span class="token annotation punctuation">@Service</span>\n<span class="token comment">// \u8BE5\u6CE8\u89E3\u7684\u4F5C\u7528\u662F\u4F7F MyConfigurationProperties \u8FD9\u4E2A\u7C7B\u4E0A\u6807\u6CE8\u7684 @ConfigurationProperties \u6CE8\u89E3\u751F\u6548,\u5E76\u4E14\u4F1A\u81EA\u52A8\u5C06\u8FD9\u4E2A\u7C7B\u6CE8\u5165\u5230 IOC \u5BB9\u5668\u4E2D</span>\n<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">MyConfigurationProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">HelloService</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>MyConfigurationProperties \u6709\u4E86 @EnableConfigurationProperties \u6CE8\u89E3\u4E4B\u540E\u8BE5\u5B9E\u4F53\u7C7B\u5C31\u4E0D\u9700\u8981\u52A0\u4E0A @Component \u6CE8\u89E3\u4E86</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;mytest&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyConfigurationProperties</span> <span class="token punctuation">{</span>\n\n    <span class="token comment">// \u7701\u7565 get\u3001set\u3001toString \u65B9\u6CD5</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> gender<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>HelloController.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">MyConfigurationProperties</span> config<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/config&quot;</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">testConfigurationProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> <span class="token string">&quot;SUCCESS!!!&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6D4B\u8BD5\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MyConfigurationProperties{name=&#39;xiaomaomao&#39;, age=27, gender=&#39;null&#39;}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_3-\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#_3-\u7ED3\u8BBA" aria-hidden="true">#</a> 3. <strong>\u7ED3\u8BBA</strong></h2><ul><li><p>\u5982\u679C\u8981\u4F7F xxx.properties \u914D\u7F6E\u6587\u4EF6\u4E0E Java Bean \u52A8\u6001\u7ED1\u5B9A,\u90A3\u4E48\u5C31\u5FC5\u987B\u5C06\u8FD9\u4E2A Java Bean \u52A0\u5165\u5230\u5BB9\u5668\u4E2D,\u5E76\u4E14\u9700\u8981\u5728\u8BE5\u7C7B\u4E0A\u4F7F\u7528 @ConfigurationProperties \u6CE8\u89E3</p></li><li><p>@EnableConfigurationProperties(A.class)\u7684\u4F5C\u7528\u5C31\u662F\u5982\u679C A \u8FD9\u4E2A\u7C7B\u4E0A\u4F7F\u7528\u4E86 @ConfigurationProperties \u6CE8\u89E3,\u90A3\u4E48 A \u8FD9\u4E2A\u7C7B\u4F1A\u4E0E xxx.properties \u8FDB\u884C\u52A8\u6001\u7ED1\u5B9A,\u5E76\u4E14\u4F1A\u5C06 A \u8FD9\u4E2A\u7C7B\u52A0\u5165 IOC \u5BB9\u5668\u4E2D,\u5E76\u4EA4\u7531 IOC \u5BB9\u5668\u8FDB\u884C\u7BA1\u7406</p></li><li><p>\u5982\u679C@ConfigurationProperties\u662F\u5728\u7B2C\u4E09\u65B9\u5305\u4E2D\uFF0C\u90A3\u4E48@component\u662F\u4E0D\u80FD\u6CE8\u5165\u5230\u5BB9\u5668\u7684\u3002\u53EA\u6709@EnableConfigurationProperties\u624D\u53EF\u4EE5\u6CE8\u5165\u5230\u5BB9\u5668</p></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 13);
const _hoisted_14 = {
  href: "https://blog.csdn.net/Cloud_July/article/details/122720164",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode("@EnableConfigurationProperties \u6CE8\u89E3");
const _hoisted_16 = {
  href: "https://www.jianshu.com/p/7f54da1cb2eb",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u5173\u4E0E @EnableConfigurationProperties \u6CE8\u89E3");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_14, [
        _hoisted_15,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_16, [
        _hoisted_17,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var EnableConfigurationProperties___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "EnableConfigurationProperties\u6CE8\u89E3.html.vue"]]);
export { EnableConfigurationProperties___html as default };
