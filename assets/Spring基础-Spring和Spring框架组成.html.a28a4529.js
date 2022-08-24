import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.9ef7ce43.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="spring\u57FA\u7840-spring\u548Cspring\u6846\u67B6\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#spring\u57FA\u7840-spring\u548Cspring\u6846\u67B6\u7EC4\u6210" aria-hidden="true">#</a> Spring\u57FA\u7840-Spring\u548CSpring\u6846\u67B6\u7EC4\u6210</h1><blockquote><p>Spring\u662F\u4EC0\u4E48\uFF1F\u5B83\u662F\u600E\u4E48\u8BDE\u751F\u7684\uFF1F\u6709\u54EA\u4E9B\u4E3B\u8981\u7684\u7EC4\u4EF6\u548C\u6838\u5FC3\u529F\u80FD\u5462? \u672C\u6587\u901A\u8FC7\u8FD9\u51E0\u4E2A\u95EE\u9898\u5E2E\u52A9\u4F60\u6784\u7B51Spring\u548CSpring Framework\u7684\u6574\u4F53\u8BA4\u77E5</p></blockquote><h2 id="_1-\u4EC0\u4E48\u662Fspring" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fspring" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662FSpring</h2><h3 id="_1-1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6982\u5FF5" aria-hidden="true">#</a> 1.1 \u6982\u5FF5</h3><p>Spring \u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u5F00\u53D1\u6846\u67B6\uFF0C<strong>\u65E8\u5728\u63D0\u9AD8\u5F00\u53D1\u4EBA\u5458\u7684\u5F00\u53D1\u6548\u7387\u4EE5\u53CA\u7CFB\u7EDF\u7684\u53EF\u7EF4\u62A4\u6027</strong>\u3002</p><p>\u6211\u4EEC\u4E00\u822C\u8BF4\u7684Spring\u6846\u67B6\u6307\u7684\u90FD\u662FSpring Framwork\uFF0C\u4ED6\u662F\u5F88\u591A\u6A21\u5757\u7684\u96C6\u5408\uFF0C\u4F7F\u7528\u8FD9\u4E9B\u6A21\u5757\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u534F\u52A9\u6211\u4EEC\u8FDB\u884C\u5F00\u53D1</p><h3 id="_1-2-spring\u7684\u8D77\u6E90" tabindex="-1"><a class="header-anchor" href="#_1-2-spring\u7684\u8D77\u6E90" aria-hidden="true">#</a> 1.2 Spring\u7684\u8D77\u6E90</h3><p>\u8981\u8C08Spring\u7684\u5386\u53F2\uFF0C\u5C31\u8981\u5148\u8C08J2EE\u3002J2EE\u5E94\u7528\u7A0B\u5E8F\u7684\u5E7F\u6CDB\u5B9E\u73B0\u662F\u57281999\u5E74\u548C2000\u5E74\u5F00\u59CB\u7684\uFF0C\u5B83\u7684\u51FA\u73B0\u5E26\u6765\u4E86\u8BF8\u5982\u4E8B\u52A1\u7BA1\u7406\u4E4B\u7C7B\u7684<strong>\u6838\u5FC3\u4E2D\u95F4\u5C42\u6982\u5FF5\u7684\u6807\u51C6\u5316</strong>\uFF0C\u4F46\u662F\u5728\u5B9E\u8DF5\u4E2D\u5E76\u6CA1\u6709\u83B7\u5F97\u7EDD\u5BF9\u7684\u6210\u529F\uFF0C\u56E0\u4E3A<strong>\u5F00\u53D1\u6548\u7387</strong>\uFF0C\u5F00\u53D1\u96BE\u5EA6\u548C\u5B9E\u9645\u7684<strong>\u6027\u80FD</strong>\u90FD\u4EE4\u4EBA\u5931\u671B\u3002</p><p><strong>Spring\u7684\u4E00\u4E2A\u6700\u5927\u7684\u76EE\u7684\u5C31\u662F\u4F7FJAVA EE\u5F00\u53D1\u66F4\u52A0\u5BB9\u6613</strong>\u3002</p><h3 id="_1-3-spring\u7684\u7279\u6027\u548C\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_1-3-spring\u7684\u7279\u6027\u548C\u4F18\u52BF" aria-hidden="true">#</a> 1.3 Spring\u7684\u7279\u6027\u548C\u4F18\u52BF</h3><blockquote><p>Spring Framework\u6709\u54EA\u4E9B\u7279\u6027\uFF0C\u7528\u4E86\u8FD9\u4E2A\u6846\u67B6\u5BF9\u5F00\u53D1\u800C\u8A00\u6709\u4EC0\u4E48\u597D\u5904\u5462\uFF1F</p></blockquote><p>\u4ECESpring \u6846\u67B6\u7684<strong>\u7279\u6027</strong>\u6765\u770B\uFF1A</p><ul><li>\u975E\u4FB5\u5165\u5F0F\uFF1A\u57FA\u4E8ESpring\u5F00\u53D1\u7684\u5E94\u7528\u4E2D\u7684\u5BF9\u8C61\u53EF\u4EE5\u4E0D\u4F9D\u8D56\u4E8ESpring\u7684API</li><li>\u63A7\u5236\u53CD\u8F6C\uFF1AIOC\u2014\u2014Inversion of Control\uFF0C\u6307\u7684\u662F\u5C06\u5BF9\u8C61\u7684\u521B\u5EFA\u6743\u4EA4\u7ED9 Spring \u53BB\u521B\u5EFA\u3002\u4F7F\u7528 Spring \u4E4B\u524D\uFF0C\u5BF9\u8C61\u7684\u521B\u5EFA\u90FD\u662F\u7531\u6211\u4EEC\u81EA\u5DF1\u5728\u4EE3\u7801\u4E2Dnew\u521B\u5EFA\u3002\u800C\u4F7F\u7528 Spring \u4E4B\u540E\u3002\u5BF9\u8C61\u7684\u521B\u5EFA\u90FD\u662F\u7ED9\u4E86 Spring \u6846\u67B6\u3002</li><li>\u4F9D\u8D56\u6CE8\u5165\uFF1ADI\u2014\u2014Dependency Injection\uFF0C\u662F\u6307\u4F9D\u8D56\u7684\u5BF9\u8C61\u4E0D\u9700\u8981\u624B\u52A8\u8C03\u7528 setXX \u65B9\u6CD5\u53BB\u8BBE\u7F6E\uFF0C\u800C\u662F\u901A\u8FC7\u914D\u7F6E\u8D4B\u503C\u3002</li><li>\u9762\u5411\u5207\u9762\u7F16\u7A0B\uFF1AAspect Oriented Programming\u2014\u2014AOP</li><li>\u5BB9\u5668\uFF1ASpring \u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u56E0\u4E3A\u5B83\u5305\u542B\u5E76\u4E14\u7BA1\u7406\u5E94\u7528\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F</li><li>\u7EC4\u4EF6\u5316\uFF1ASpring \u5B9E\u73B0\u4E86\u4F7F\u7528\u7B80\u5355\u7684\u7EC4\u4EF6\u914D\u7F6E\u7EC4\u5408\u6210\u4E00\u4E2A\u590D\u6742\u7684\u5E94\u7528\u3002\u5728 Spring \u4E2D\u53EF\u4EE5\u4F7F\u7528XML\u548CJava\u6CE8\u89E3\u7EC4\u5408\u8FD9\u4E9B\u5BF9\u8C61\u3002</li><li>\u4E00\u7AD9\u5F0F\uFF1A\u5728 IOC \u548C AOP \u7684\u57FA\u7840\u4E0A\u53EF\u4EE5\u6574\u5408\u5404\u79CD\u4F01\u4E1A\u5E94\u7528\u7684\u5F00\u6E90\u6846\u67B6\u548C\u4F18\u79C0\u7684\u7B2C\u4E09\u65B9\u7C7B\u5E93\uFF08\u5B9E\u9645\u4E0A Spring \u81EA\u8EAB\u4E5F\u63D0\u4F9B\u4E86\u8868\u73B0\u5C42\u7684 SpringMVC \u548C\u6301\u4E45\u5C42\u7684 Spring JDBC\uFF09</li></ul><p>\u4ECE\u4F7F\u7528Spring \u6846\u67B6\u7684<strong>\u597D\u5904</strong>\u770B\uFF1A</p><ul><li>Spring \u53EF\u4EE5\u4F7F\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528 POJOs \u5F00\u53D1\u4F01\u4E1A\u7EA7\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u53EA\u4F7F\u7528 POJOs \u7684\u597D\u5904\u662F\u4F60\u4E0D\u9700\u8981\u4E00\u4E2A EJB \u5BB9\u5668\u4EA7\u54C1\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u670D\u52A1\u5668\uFF0C\u4F46\u662F\u4F60\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528\u4E00\u4E2A\u5065\u58EE\u7684 servlet \u5BB9\u5668\uFF0C\u6BD4\u5982 Tomcat \u6216\u8005\u4E00\u4E9B\u5546\u4E1A\u4EA7\u54C1\u3002</li><li>Spring \u5728\u4E00\u4E2A\u5355\u5143\u6A21\u5F0F\u4E2D\u662F\u6709\u7EC4\u7EC7\u7684\u3002\u5373\u4F7F\u5305\u548C\u7C7B\u7684\u6570\u91CF\u975E\u5E38\u5927\uFF0C\u4F60\u53EA\u8981\u62C5\u5FC3\u4F60\u9700\u8981\u7684\uFF0C\u800C\u5176\u5B83\u7684\u5C31\u53EF\u4EE5\u5FFD\u7565\u4E86\u3002</li><li>Spring \u4E0D\u4F1A\u8BA9\u4F60\u767D\u8D39\u529B\u6C14\u505A\u91CD\u590D\u5DE5\u4F5C\uFF0C\u5B83\u771F\u6B63\u7684\u5229\u7528\u4E86\u4E00\u4E9B\u73B0\u6709\u7684\u6280\u672F\uFF0C\u50CF ORM \u6846\u67B6\u3001\u65E5\u5FD7\u6846\u67B6\u3001JEE\u3001Quartz \u548C JDK \u8BA1\u65F6\u5668\uFF0C\u5176\u4ED6\u89C6\u56FE\u6280\u672F\u3002</li><li>\u6D4B\u8BD5\u4E00\u4E2A\u7528 Spring \u7F16\u5199\u7684\u5E94\u7528\u7A0B\u5E8F\u5F88\u5BB9\u6613\uFF0C\u56E0\u4E3A\u73AF\u5883\u76F8\u5173\u7684\u4EE3\u7801\u88AB\u79FB\u52A8\u5230\u8FD9\u4E2A\u6846\u67B6\u4E2D\u3002\u6B64\u5916\uFF0C\u901A\u8FC7\u4F7F\u7528 JavaBean-style POJOs\uFF0C\u5B83\u5728\u4F7F\u7528\u4F9D\u8D56\u6CE8\u5165\u6CE8\u5165\u6D4B\u8BD5\u6570\u636E\u65F6\u53D8\u5F97\u66F4\u5BB9\u6613\u3002</li><li>Spring \u7684 web \u6846\u67B6\u662F\u4E00\u4E2A\u8BBE\u8BA1\u826F\u597D\u7684 web MVC \u6846\u67B6\uFF0C\u5B83\u4E3A\u6BD4\u5982 Structs \u6216\u8005\u5176\u4ED6\u5DE5\u7A0B\u4E0A\u7684\u6216\u8005\u4E0D\u600E\u4E48\u53D7\u6B22\u8FCE\u7684 web \u6846\u67B6\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5F88\u597D\u7684\u4F9B\u66FF\u4EE3\u7684\u9009\u62E9\u3002MVC \u6A21\u5F0F\u5BFC\u81F4\u5E94\u7528\u7A0B\u5E8F\u7684\u4E0D\u540C\u65B9\u9762(\u8F93\u5165\u903B\u8F91\uFF0C\u4E1A\u52A1\u903B\u8F91\u548CUI\u903B\u8F91)\u5206\u79BB\uFF0C\u540C\u65F6\u63D0\u4F9B\u8FD9\u4E9B\u5143\u7D20\u4E4B\u95F4\u7684\u677E\u6563\u8026\u5408\u3002\u6A21\u578B(Model)\u5C01\u88C5\u4E86\u5E94\u7528\u7A0B\u5E8F\u6570\u636E\uFF0C\u901A\u5E38\u5B83\u4EEC\u5C06\u7531 POJO \u7C7B\u7EC4\u6210\u3002\u89C6\u56FE(View)\u8D1F\u8D23\u6E32\u67D3\u6A21\u578B\u6570\u636E\uFF0C\u4E00\u822C\u6765\u8BF4\u5B83\u751F\u6210\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u53EF\u4EE5\u89E3\u91CA HTML \u8F93\u51FA\u3002\u63A7\u5236\u5668(Controller)\u8D1F\u8D23\u5904\u7406\u7528\u6237\u8BF7\u6C42\u5E76\u6784\u5EFA\u9002\u5F53\u7684\u6A21\u578B\uFF0C\u5E76\u5C06\u5176\u4F20\u9012\u7ED9\u89C6\u56FE\u8FDB\u884C\u6E32\u67D3\u3002</li><li>Spring \u5BF9 JavaEE \u5F00\u53D1\u4E2D\u975E\u5E38\u96BE\u7528\u7684\u4E00\u4E9B API\uFF08JDBC\u3001JavaMail\u3001\u8FDC\u7A0B\u8C03\u7528\u7B49\uFF09\uFF0C\u90FD\u63D0\u4F9B\u4E86\u5C01\u88C5\uFF0C\u4F7F\u8FD9\u4E9BAPI\u5E94\u7528\u96BE\u5EA6\u5927\u5927\u964D\u4F4E\u3002</li><li>\u8F7B\u91CF\u7EA7\u7684 IOC \u5BB9\u5668\u5F80\u5F80\u662F\u8F7B\u91CF\u7EA7\u7684\uFF0C\u4F8B\u5982\uFF0C\u7279\u522B\u662F\u5F53\u4E0E EJB \u5BB9\u5668\u76F8\u6BD4\u7684\u65F6\u5019\u3002\u8FD9\u6709\u5229\u4E8E\u5728\u5185\u5B58\u548C CPU \u8D44\u6E90\u6709\u9650\u7684\u8BA1\u7B97\u673A\u4E0A\u5F00\u53D1\u548C\u90E8\u7F72\u5E94\u7528\u7A0B\u5E8F\u3002</li><li>Spring \u63D0\u4F9B\u4E86\u4E00\u81F4\u7684\u4E8B\u52A1\u7BA1\u7406\u63A5\u53E3\uFF0C\u53EF\u5411\u4E0B\u6269\u5C55\u5230\uFF08\u4F7F\u7528\u4E00\u4E2A\u5355\u4E00\u7684\u6570\u636E\u5E93\uFF0C\u4F8B\u5982\uFF09\u672C\u5730\u4E8B\u52A1\u5E76\u6269\u5C55\u5230\u5168\u5C40\u4E8B\u52A1\uFF08\u4F8B\u5982\uFF0C\u4F7F\u7528 JTA\uFF09</li></ul><h2 id="_2-spring\u6709\u54EA\u4E9B\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-spring\u6709\u54EA\u4E9B\u7EC4\u4EF6" aria-hidden="true">#</a> 2. Spring\u6709\u54EA\u4E9B\u7EC4\u4EF6?</h2><blockquote><p>Spring Framework\u6709\u54EA\u4E9B\u7EC4\u4EF6\u5462\uFF1F</p></blockquote>', 17);
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u4E0B\u56FE\u6765\u81EA\uFF0C");
const _hoisted_19 = {
  href: "https://docs.spring.io/spring-framework/docs/5.0.0.M4/spring-framework-reference/pdf/spring-framework-reference.pdf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u6587\u6863 Spring-framework 5.0 ");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("\uFF1B\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u867D\u7136\u8FD9\u4E2A\u56FE\u6765\u6E90\u4E8ESpring Framwork5.0 M4 \u7248\u672C\uFF0C\u4F46\u662F\u5B83\u4F9D\u7136\u662FV4\u7248\u672C\u7684\u56FE\uFF0C\u6BD4\u5982Spring 5\u7248\u672C\u4E2D\u7684web\u6A21\u5757\u5DF2\u7ECF\u53BB\u6389\u4E86");
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("strong", null, "Portlet\u6A21\u5757", -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\uFF0C\u65B0\u589E\u4E86");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("strong", null, "WebFlux\u6A21\u5757", -1);
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\u7B49\u3002");
const _hoisted_26 = /* @__PURE__ */ createStaticVNode('<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709094411825.png" alt="image-20220709094411825"></p><p>\u4E0A\u56FE\u4E2D\u5305\u542B\u4E86 Spring \u6846\u67B6\u7684\u6240\u6709\u6A21\u5757\uFF0C\u8FD9\u4E9B\u6A21\u5757\u53EF\u4EE5\u6EE1\u8DB3\u4E00\u5207\u4F01\u4E1A\u7EA7\u5E94\u7528\u5F00\u53D1\u7684\u9700\u6C42\uFF0C\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u6709\u9009\u62E9\u6027\u5730\u4F7F\u7528\u6240\u9700\u8981\u7684\u6A21\u5757\u3002\u4E0B\u9762\u5206\u522B\u5BF9\u8FD9\u4E9B\u6A21\u5757\u7684\u4F5C\u7528\u8FDB\u884C\u7B80\u5355\u4ECB\u7ECD\uFF08\u5E76\u4E14\u7ED3\u5408SpringFramework5.x\u6E90\u7801\u6A21\u5757\u5E2E\u52A9\u4F60\u5BF9\u5E94\u597D\u5404\u6A21\u5757\u5173\u7CFB\uFF09\u3002</p><h3 id="_2-1-core-container-spring\u7684\u6838\u5FC3\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_2-1-core-container-spring\u7684\u6838\u5FC3\u5BB9\u5668" aria-hidden="true">#</a> 2.1 Core Container\uFF08Spring\u7684\u6838\u5FC3\u5BB9\u5668\uFF09</h3><p>Spring \u7684\u6838\u5FC3\u5BB9\u5668\u662F\u5176\u4ED6\u6A21\u5757\u5EFA\u7ACB\u7684\u57FA\u7840\uFF0C\u7531 Beans \u6A21\u5757\u3001Core \u6838\u5FC3\u6A21\u5757\u3001Context \u4E0A\u4E0B\u6587\u6A21\u5757\u548C SpEL \u8868\u8FBE\u5F0F\u8BED\u8A00\u6A21\u5757\u7EC4\u6210\uFF0C\u6CA1\u6709\u8FD9\u4E9B\u6838\u5FC3\u5BB9\u5668\uFF0C\u4E5F\u4E0D\u53EF\u80FD\u6709 AOP\u3001Web \u7B49\u4E0A\u5C42\u7684\u529F\u80FD\u3002\u5177\u4F53\u4ECB\u7ECD\u5982\u4E0B\u3002</p><ul><li><strong>Beans \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u6846\u67B6\u7684\u57FA\u7840\u90E8\u5206\uFF0C\u5305\u62EC\u63A7\u5236\u53CD\u8F6C\u548C\u4F9D\u8D56\u6CE8\u5165\u3002</li><li><strong>Core \u6838\u5FC3\u6A21\u5757</strong>\uFF1A\u5C01\u88C5\u4E86 Spring \u6846\u67B6\u7684\u5E95\u5C42\u90E8\u5206\uFF0C\u5305\u62EC\u8D44\u6E90\u8BBF\u95EE\u3001\u7C7B\u578B\u8F6C\u6362\u53CA\u4E00\u4E9B\u5E38\u7528\u5DE5\u5177\u7C7B\u3002</li><li><strong>Context \u4E0A\u4E0B\u6587\u6A21\u5757</strong>\uFF1A\u5EFA\u7ACB\u5728 Core \u548C Beans \u6A21\u5757\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u96C6\u6210 Beans \u6A21\u5757\u529F\u80FD\u5E76\u6DFB\u52A0\u8D44\u6E90\u7ED1\u5B9A\u3001\u6570\u636E\u9A8C\u8BC1\u3001\u56FD\u9645\u5316\u3001Java EE \u652F\u6301\u3001\u5BB9\u5668\u751F\u547D\u5468\u671F\u3001\u4E8B\u4EF6\u4F20\u64AD\u7B49\u3002ApplicationContext \u63A5\u53E3\u662F\u4E0A\u4E0B\u6587\u6A21\u5757\u7684\u7126\u70B9\u3002</li><li><strong>SpEL \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u8868\u8FBE\u5F0F\u8BED\u8A00\u652F\u6301\uFF0C\u652F\u6301\u8BBF\u95EE\u548C\u4FEE\u6539\u5C5E\u6027\u503C\uFF0C\u65B9\u6CD5\u8C03\u7528\uFF0C\u652F\u6301\u8BBF\u95EE\u53CA\u4FEE\u6539\u6570\u7EC4\u3001\u5BB9\u5668\u548C\u7D22\u5F15\u5668\uFF0C\u547D\u540D\u53D8\u91CF\uFF0C\u652F\u6301\u7B97\u6570\u548C\u903B\u8F91\u8FD0\u7B97\uFF0C\u652F\u6301\u4ECE Spring \u5BB9\u5668\u83B7\u53D6 Bean\uFF0C\u5B83\u4E5F\u652F\u6301\u5217\u8868\u6295\u5F71\u3001\u9009\u62E9\u548C\u4E00\u822C\u7684\u5217\u8868\u805A\u5408\u7B49\u3002</li></ul><p>\u5BF9\u5E94\u7684\u6E90\u7801\u6A21\u5757\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709094925366.png" alt="image-20220709094925366"></p><h3 id="_2-2-data-access-integration-\u6570\u636E\u8BBF\u95EE-\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_2-2-data-access-integration-\u6570\u636E\u8BBF\u95EE-\u96C6\u6210" aria-hidden="true">#</a> 2.2 Data Access/Integration\uFF08\u6570\u636E\u8BBF\u95EE\uFF0F\u96C6\u6210\uFF09</h3><p>\u6570\u636E\u8BBF\u95EE\uFF0F\u96C6\u6210\u5C42\u5305\u62EC JDBC\u3001ORM\u3001OXM\u3001JMS \u548C Transactions \u6A21\u5757\uFF0C\u5177\u4F53\u4ECB\u7ECD\u5982\u4E0B\u3002</p><ul><li><strong>JDBC \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u4E00\u4E2A JBDC \u7684\u6837\u4F8B\u6A21\u677F\uFF0C\u4F7F\u7528\u8FD9\u4E9B\u6A21\u677F\u80FD\u6D88\u9664\u4F20\u7EDF\u5197\u957F\u7684 JDBC \u7F16\u7801\u8FD8\u6709\u5FC5\u987B\u7684\u4E8B\u52A1\u63A7\u5236\uFF0C\u800C\u4E14\u80FD\u4EAB\u53D7\u5230 Spring \u7BA1\u7406\u4E8B\u52A1\u7684\u597D\u5904\u3002</li><li><strong>ORM \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E0E\u6D41\u884C\u7684\u201C\u5BF9\u8C61-\u5173\u7CFB\u201D\u6620\u5C04\u6846\u67B6\u65E0\u7F1D\u96C6\u6210\u7684 API\uFF0C\u5305\u62EC JPA\u3001JDO\u3001Hibernate \u548C MyBatis \u7B49\u3002\u800C\u4E14\u8FD8\u53EF\u4EE5\u4F7F\u7528 Spring \u4E8B\u52A1\u7BA1\u7406\uFF0C\u65E0\u9700\u989D\u5916\u63A7\u5236\u4E8B\u52A1\u3002</li><li><strong>OXM \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u4E00\u4E2A\u652F\u6301 Object /XML \u6620\u5C04\u7684\u62BD\u8C61\u5C42\u5B9E\u73B0\uFF0C\u5982 JAXB\u3001Castor\u3001XMLBeans\u3001JiBX \u548C XStream\u3002\u5C06 Java \u5BF9\u8C61\u6620\u5C04\u6210 XML \u6570\u636E\uFF0C\u6216\u8005\u5C06XML \u6570\u636E\u6620\u5C04\u6210 Java \u5BF9\u8C61\u3002</li><li><strong>JMS \u6A21\u5757</strong>\uFF1A\u6307 Java \u6D88\u606F\u670D\u52A1\uFF0C\u63D0\u4F9B\u4E00\u5957 \u201C\u6D88\u606F\u751F\u4EA7\u8005\u3001\u6D88\u606F\u6D88\u8D39\u8005\u201D\u6A21\u677F\u7528\u4E8E\u66F4\u52A0\u7B80\u5355\u7684\u4F7F\u7528 JMS\uFF0CJMS \u7528\u4E8E\u7528\u4E8E\u5728\u4E24\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E4B\u95F4\uFF0C\u6216\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u53D1\u9001\u6D88\u606F\uFF0C\u8FDB\u884C\u5F02\u6B65\u901A\u4FE1\u3002</li><li><strong>Transactions \u4E8B\u52A1\u6A21\u5757</strong>\uFF1A\u652F\u6301\u7F16\u7A0B\u548C\u58F0\u660E\u5F0F\u4E8B\u52A1\u7BA1\u7406\u3002</li></ul><p>\u5BF9\u5E94\u7684\u6E90\u7801\u6A21\u5757\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709095314072.png" alt="image-20220709095314072"></p><h3 id="_2-3-web\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_2-3-web\u6A21\u5757" aria-hidden="true">#</a> 2.3 Web\u6A21\u5757</h3><p>Spring \u7684 Web \u5C42\u5305\u62EC Web\u3001Servlet\u3001WebSocket \u548C Webflux \u7EC4\u4EF6\uFF0C\u5177\u4F53\u4ECB\u7ECD\u5982\u4E0B\u3002</p><ul><li><strong>Web \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u57FA\u672C\u7684 Web \u5F00\u53D1\u96C6\u6210\u7279\u6027\uFF0C\u4F8B\u5982\u591A\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD\u3001\u4F7F\u7528\u7684 Servlet \u76D1\u542C\u5668\u7684 IOC \u5BB9\u5668\u521D\u59CB\u5316\u4EE5\u53CA Web \u5E94\u7528\u4E0A\u4E0B\u6587\u3002</li><li><strong>Servlet \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u4E00\u4E2A Spring MVC Web \u6846\u67B6\u5B9E\u73B0\u3002Spring MVC \u6846\u67B6\u63D0\u4F9B\u4E86\u57FA\u4E8E\u6CE8\u89E3\u7684\u8BF7\u6C42\u8D44\u6E90\u6CE8\u5165\u3001\u66F4\u7B80\u5355\u7684\u6570\u636E\u7ED1\u5B9A\u3001\u6570\u636E\u9A8C\u8BC1\u7B49\u53CA\u4E00\u5957\u975E\u5E38\u6613\u7528\u7684 JSP \u6807\u7B7E\uFF0C\u5B8C\u5168\u65E0\u7F1D\u4E0E Spring \u5176\u4ED6\u6280\u672F\u534F\u4F5C\u3002</li><li><strong>WebSocket \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u7B80\u5355\u7684\u63A5\u53E3\uFF0C\u7528\u6237\u53EA\u8981\u5B9E\u73B0\u54CD\u5E94\u7684\u63A5\u53E3\u5C31\u53EF\u4EE5\u5FEB\u901F\u7684\u642D\u5EFA WebSocket Server\uFF0C\u4ECE\u800C\u5B9E\u73B0\u53CC\u5411\u901A\u8BAF\u3002</li><li><strong>Webflux \u6A21\u5757</strong>\uFF1A Spring WebFlux \u662F Spring Framework 5.x\u4E2D\u5F15\u5165\u7684\u65B0\u7684\u54CD\u5E94\u5F0Fweb\u6846\u67B6\u3002\u4E0ESpring MVC\u4E0D\u540C\uFF0C\u5B83\u4E0D\u9700\u8981Servlet API\uFF0C\u662F\u5B8C\u5168\u5F02\u6B65\u4E14\u975E\u963B\u585E\u7684\uFF0C\u5E76\u4E14\u901A\u8FC7Reactor\u9879\u76EE\u5B9E\u73B0\u4E86Reactive Streams\u89C4\u8303\u3002Spring WebFlux \u7528\u4E8E\u521B\u5EFA\u57FA\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u6267\u884C\u6A21\u578B\u7684\u5B8C\u5168\u5F02\u6B65\u4E14\u975E\u963B\u585E\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li></ul><p>\u6B64\u5916Spring4.x\u4E2D\u8FD8\u6709Portlet \u6A21\u5757\uFF0C\u5728Spring 5.x\u4E2D\u5DF2\u7ECF\u79FB\u9664</p><ul><li><strong>Portlet \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u5728 Portlet \u73AF\u5883\u4E2D\u4F7F\u7528 MVC \u5B9E\u73B0\uFF0C\u7C7B\u4F3C Web-Servlet \u6A21\u5757\u7684\u529F\u80FD\u3002</li></ul><p>\u5BF9\u5E94\u7684\u6E90\u7801\u6A21\u5757\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709095421975.png" alt="image-20220709095421975"></p><h3 id="_2-4-aop\u3001aspects\u3001instrumentation\u548Cmessaging" tabindex="-1"><a class="header-anchor" href="#_2-4-aop\u3001aspects\u3001instrumentation\u548Cmessaging" aria-hidden="true">#</a> 2.4 AOP\u3001Aspects\u3001Instrumentation\u548CMessaging</h3><p>\u5728 Core Container \u4E4B\u4E0A\u662F AOP\u3001Aspects \u7B49\u6A21\u5757\uFF0C\u5177\u4F53\u4ECB\u7ECD\u5982\u4E0B\uFF1A</p><ul><li><strong>AOP \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u9762\u5411\u5207\u9762\u7F16\u7A0B\u5B9E\u73B0\uFF0C\u63D0\u4F9B\u6BD4\u5982\u65E5\u5FD7\u8BB0\u5F55\u3001\u6743\u9650\u63A7\u5236\u3001\u6027\u80FD\u7EDF\u8BA1\u7B49\u901A\u7528\u529F\u80FD\u548C\u4E1A\u52A1\u903B\u8F91\u5206\u79BB\u7684\u6280\u672F\uFF0C\u5E76\u4E14\u80FD\u52A8\u6001\u7684\u628A\u8FD9\u4E9B\u529F\u80FD\u6DFB\u52A0\u5230\u9700\u8981\u7684\u4EE3\u7801\u4E2D\uFF0C\u8FD9\u6837\u5404\u53F8\u5176\u804C\uFF0C\u964D\u4F4E\u4E1A\u52A1\u903B\u8F91\u548C\u901A\u7528\u529F\u80FD\u7684\u8026\u5408\u3002</li><li><strong>Aspects \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E0E AspectJ \u7684\u96C6\u6210\uFF0C\u662F\u4E00\u4E2A\u529F\u80FD\u5F3A\u5927\u4E14\u6210\u719F\u7684\u9762\u5411\u5207\u9762\u7F16\u7A0B\uFF08AOP\uFF09\u6846\u67B6\u3002</li><li><strong>Instrumentation \u6A21\u5757</strong>\uFF1A\u63D0\u4F9B\u4E86\u7C7B\u5DE5\u5177\u7684\u652F\u6301\u548C\u7C7B\u52A0\u8F7D\u5668\u7684\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u5728\u7279\u5B9A\u7684\u5E94\u7528\u670D\u52A1\u5668\u4E2D\u4F7F\u7528\u3002</li><li><strong>messaging \u6A21\u5757</strong>\uFF1ASpring 4.0 \u4EE5\u540E\u65B0\u589E\u4E86\u6D88\u606F\uFF08Spring-messaging\uFF09\u6A21\u5757\uFF0C\u8BE5\u6A21\u5757\u63D0\u4F9B\u4E86\u5BF9\u6D88\u606F\u4F20\u9012\u4F53\u7CFB\u7ED3\u6784\u548C\u534F\u8BAE\u7684\u652F\u6301\u3002</li><li><strong>jcl \u6A21\u5757</strong>\uFF1A Spring 5.x\u4E2D\u65B0\u589E\u4E86\u65E5\u5FD7\u6846\u67B6\u96C6\u6210\u7684\u6A21\u5757\u3002</li></ul><p>\u5BF9\u5E94\u7684\u6E90\u7801\u6A21\u5757\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709102945449.png" alt="image-20220709102945449"></p><h3 id="_2-5-test\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_2-5-test\u6A21\u5757" aria-hidden="true">#</a> 2.5 Test\u6A21\u5757</h3><p>Test \u6A21\u5757\uFF1ASpring \u652F\u6301 Junit \u548C TestNG \u6D4B\u8BD5\u6846\u67B6\uFF0C\u800C\u4E14\u8FD8\u989D\u5916\u63D0\u4F9B\u4E86\u4E00\u4E9B\u57FA\u4E8E Spring \u7684\u6D4B\u8BD5\u529F\u80FD\uFF0C\u6BD4\u5982\u5728\u6D4B\u8BD5 Web \u6846\u67B6\u65F6\uFF0C\u6A21\u62DF Http \u8BF7\u6C42\u7684\u529F\u80FD\u3002</p><p>\u5305\u542BMock Objects, TestContext Framework, Spring MVC Test, WebTestClient\u3002</p><p>\u5BF9\u5E94\u7684\u6E90\u7801\u6A21\u5757\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709103037369.png" alt="image-20220709103037369"></p><h2 id="_3-\u4E3A\u4EC0\u4E48\u7528spring" tabindex="-1"><a class="header-anchor" href="#_3-\u4E3A\u4EC0\u4E48\u7528spring" aria-hidden="true">#</a> 3. \u4E3A\u4EC0\u4E48\u7528Spring?</h2>', 30);
const _hoisted_56 = /* @__PURE__ */ createTextVNode("\u90A3\u4E48\u4E3A\u4EC0\u4E48\u7528Spring\u5462\uFF1F\u6765\u770B\u770B");
const _hoisted_57 = {
  href: "https://spring.io/why-spring",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_58 = /* @__PURE__ */ createTextVNode("\u5B98\u7F51\u5BF9\u8FD9\u4E2A\u95EE\u9898\u7684\u56DE\u7B54");
const _hoisted_59 = /* @__PURE__ */ createStaticVNode('<p>\u6700\u91CD\u8981\u7684\u4F53\u73B0\u5728\u5B83\u80FD\u505A\u4EC0\u4E48\uFF0C\u8FD9\u662FSpring\u7684\u6838\u5FC3\u6240\u5728</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709103353729.png" alt="image-20220709103353729"></p><p>\u4E14\u5B98\u65B9\u5BF9\u6B64\u4E13\u95E8\u5BF9\u6B64\u505A\u4E86\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u611F\u5174\u8DA3\u53EF\u4EE5\u770B\u4E0B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709103410353.png" alt="image-20220709103410353"></p><h2 id="_4-\u5B66\u4E60spring\u65F6\u53C2\u8003\u54EA\u4E9B\u8D44\u6599\u5462" tabindex="-1"><a class="header-anchor" href="#_4-\u5B66\u4E60spring\u65F6\u53C2\u8003\u54EA\u4E9B\u8D44\u6599\u5462" aria-hidden="true">#</a> 4. \u5B66\u4E60Spring\u65F6\u53C2\u8003\u54EA\u4E9B\u8D44\u6599\u5462\uFF1F</h2><blockquote><p>\u975E\u5E38\u8D1F\u8D23\u4EFB\u7684\u544A\u8BC9\u4F60\uFF0C\u6700\u597D\u6700\u5168\u7684\u8D44\u6599\u5728Spring\u7684\u5B98\u7F51\uFF0CSpring\u80FD\u6210\u4E3A\u6700\u4E3B\u8981\u7684\u4F01\u4E1A\u5F00\u53D1\u6846\u67B6\uFF0C\u6587\u6863\u548C\u751F\u6001\u4F53\u7CFB\u4E5F\u505A\u7684\u5F88\u597D\uFF1B\u8FD9\u91CC\u4ECB\u7ECD\u4E0B\u5982\u4F55\u83B7\u53D6\u5B98\u65B9\u7684\u5B66\u4E60\u8D44\u6E90\u3002@pdai</p></blockquote><h3 id="_4-1-spring-\u7684\u5B98\u65B9\u9879\u76EE\u548C\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-1-spring-\u7684\u5B98\u65B9\u9879\u76EE\u548C\u6559\u7A0B" aria-hidden="true">#</a> 4.1 Spring \u7684\u5B98\u65B9\u9879\u76EE\u548C\u6559\u7A0B</h3>', 7);
const _hoisted_66 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u7684\u9879\u76EE\u548C\u6559\u7A0B\uFF0C\u5730\u5740\u5728");
const _hoisted_67 = {
  href: "https://spring.io/projects/spring-framework",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_68 = /* @__PURE__ */ createTextVNode("\u8FD9\u91CC");
const _hoisted_69 = /* @__PURE__ */ createTextVNode("\uFF0C\u5728\u5B66\u4E60Spring\u65F6\uFF0C\u4E00\u5B9A\u8981\u628A\u5B83\u5F53\u505A\u751F\u6001\u4F53\u7CFB\uFF0C\u800C\u662F\u4E0D\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u5F00\u53D1\u6846\u67B6\u3002");
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709103505374.png",
    alt: "image-20220709103505374"
  })
], -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "_4-2-spring-\u7684\u5F52\u6863\u6587\u6863",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_4-2-spring-\u7684\u5F52\u6863\u6587\u6863",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 4.2 Spring \u7684\u5F52\u6863\u6587\u6863")
], -1);
const _hoisted_72 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u63D0\u4F9B\u4E86\u7CFB\u7EDF\u6027\u7684\u6587\u6863\u7684FTP\uFF0C\u4F60\u53EF\u4EE5\u5728");
const _hoisted_73 = {
  href: "https://docs.spring.io/spring-framework/docs/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_74 = /* @__PURE__ */ createTextVNode("\u8FD9\u91CC (opens new window)");
const _hoisted_75 = /* @__PURE__ */ createTextVNode("\u627E\u5230\u6240\u6709\u5386\u53F2\u7248\u672C\u7684PDF/HTML\u7248\u672C\u3002");
const _hoisted_76 = /* @__PURE__ */ createStaticVNode('<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709103536540.png" alt="image-20220709103536540"></p><p>\u53EF\u4EE5\u770B\u5230\u5F88\u591A\u7CFB\u7EDF\u6027\u7684\u6587\u6863\uFF0C\u5305\u62EC\u4E0A\u9762\u5F15\u7528\u7684\u56FE\uFF0C</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709103614697.png" alt="image-20220709103614697"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709103625296.png" alt="image-20220709103625296"></p><h3 id="_4-3-spring-\u7684\u5B98\u65B9github" tabindex="-1"><a class="header-anchor" href="#_4-3-spring-\u7684\u5B98\u65B9github" aria-hidden="true">#</a> 4.3 Spring \u7684\u5B98\u65B9Github</h3>', 5);
const _hoisted_81 = /* @__PURE__ */ createTextVNode("Spring\u5B98\u65B9\u7684GitHub\u5728");
const _hoisted_82 = {
  href: "https://github.com/spring-projects/spring-framework",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_83 = /* @__PURE__ */ createTextVNode("\u8FD9\u91CC (opens new window)");
const _hoisted_84 = /* @__PURE__ */ createTextVNode("\uFF0C\u5B83\u5305\u542B\u7740Spring-framework\u7684\u6E90\u7801\uFF0C\u5982\u679C\u4F60\u611F\u5174\u8DA3\uFF0C\u53EF\u4EE5\u4ECE\u8FD9\u91CCclone\u4EE3\u7801\u8FDB\u884C\u9605\u8BFB\u3002");
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220709103647666.png",
    alt: "image-20220709103647666"
  })
], -1);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u53C2\u8003\u6587\u7AE0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53C2\u8003\u6587\u7AE0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53C2\u8003\u6587\u7AE0")
], -1);
const _hoisted_87 = {
  href: "https://pdai.tech/md/spring/spring-x-framework-introduce.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("strong", null, "Spring\u57FA\u7840 - Spring\u548CSpring\u6846\u67B6\u7EC4\u6210", -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_18,
      createBaseVNode("a", _hoisted_19, [
        _hoisted_20,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_21,
      _hoisted_22,
      _hoisted_23,
      _hoisted_24,
      _hoisted_25
    ]),
    _hoisted_26,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        _hoisted_56,
        createBaseVNode("a", _hoisted_57, [
          _hoisted_58,
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_59,
    createBaseVNode("p", null, [
      _hoisted_66,
      createBaseVNode("a", _hoisted_67, [
        _hoisted_68,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_69
    ]),
    _hoisted_70,
    _hoisted_71,
    createBaseVNode("p", null, [
      _hoisted_72,
      createBaseVNode("a", _hoisted_73, [
        _hoisted_74,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_75
    ]),
    _hoisted_76,
    createBaseVNode("p", null, [
      _hoisted_81,
      createBaseVNode("a", _hoisted_82, [
        _hoisted_83,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_84
    ]),
    _hoisted_85,
    _hoisted_86,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_87, [
        _hoisted_88,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Spring__Spring_Spring_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Spring\u57FA\u7840-Spring\u548CSpring\u6846\u67B6\u7EC4\u6210.html.vue"]]);
export { Spring__Spring_Spring_____html as default };
