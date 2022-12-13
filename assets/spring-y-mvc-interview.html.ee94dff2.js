import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,d as s}from"./app.d4563a68.js";const t={},l=s(`<h1 id="springmvc\u5E38\u89C1\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#springmvc\u5E38\u89C1\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> SpringMVC\u5E38\u89C1\u77E5\u8BC6\u70B9</h1><h2 id="_1-spring-mvc-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-spring-mvc-\u7B80\u4ECB" aria-hidden="true">#</a> 1. Spring MVC \u7B80\u4ECB</h2><p>Spring MVC \u63D0\u4F9B\u201D\u6A21\u578B-\u89C6\u56FE-\u63A7\u5236\u5668\u201C\uFF08Model - View - Controller\uFF09 \u67B6\u6784\u548C\u968F\u65F6\u53EF\u7528\u7684\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5F00\u53D1\u7075\u6D3B\u4E14\u677E\u6563\u8026\u5408\u7684Web\u5E94\u7528\u7A0B\u5E8F\u3002</p><p>MVC \u6A21\u5F0F\u6709\u52A9\u4E8E\u5206\u79BB\u5E94\u7528\u7A0B\u5E8F\u7684\u4E0D\u540C\u65B9\u9762\uFF0C\u5982\u8F93\u5165\u903B\u8F91\uFF0C\u4E1A\u52A1\u903B\u8F91\u548CUI\u903B\u8F91\uFF0C\u540C\u65F6\u5728\u6240\u6709\u8FD9\u4E9B\u5143\u7D20\u4E4B\u95F4\u63D0\u4F9B\u677E\u6563\u8026\u5408</p><h2 id="_2-\u4ECB\u7ECD\u4E0B-spring-mvc-\u7684\u6838\u5FC3\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u4ECB\u7ECD\u4E0B-spring-mvc-\u7684\u6838\u5FC3\u7EC4\u4EF6" aria-hidden="true">#</a> 2. \u4ECB\u7ECD\u4E0B Spring MVC \u7684\u6838\u5FC3\u7EC4\u4EF6\uFF1F</h2><p>Spring MVC \u4E00\u5171\u6709\u4E5D\u5927\u6838\u5FC3\u7EC4\u4EF6\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li>MultipartResolver</li><li>LocaleResolver</li><li>ThemeResolver</li><li><strong>HandlerMapping</strong></li><li><strong>HandlerAdapter</strong></li><li><strong>HandlerExceptionResolver</strong></li><li>RequestToViewNameTransalator</li><li>ViewResolver</li><li>FlashMapManager</li></ul><p>\u867D\u7136\u5F88\u591A\uFF0C\u4F46\u662F\u6700\u5173\u952E\u7684\u53EA\u6709HandlerMapping+HandlerAdapter+HandlerExceptionResolver</p><h2 id="_3-\u63CF\u8FF0\u4E00\u4E0B-dispatcherservlet\u7684\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-\u63CF\u8FF0\u4E00\u4E0B-dispatcherservlet\u7684\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> 3. \u63CF\u8FF0\u4E00\u4E0B DispatcherServlet\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF1F</h2><p>DiapatcherServlet \u7684\u5DE5\u4F5C\u6D41\u7A0B\u53EF\u4EE5\u7528\u4E00\u526F\u56FE\u6765\u8BF4\u660E</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191101235522013.png" alt="image-20191101235522013" loading="lazy"></p><ol><li><p>\u53D1\u9001\u8BF7\u6C42</p><p>\u7528\u6237\u5411\u670D\u52A1\u5668\u53D1\u9001HTTP\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u88AB Spring MVC \u7684\u8C03\u5EA6\u5668 DispatherServlet \u6355\u83B7</p></li><li><p>\u6620\u5C04\u5904\u7406\u5668\uFF08HandlerMapping\uFF09</p><p><strong>DispatcherServlet \u6839\u636E\u8BF7\u6C42 URL,\u8C03\u7528 HandlerMapping \u83B7\u53D6\u8BE5 Handler \u914D\u7F6E\u7684\u6240\u6709\u76F8\u5173\u7684\u5BF9\u8C61</strong>\uFF08\u5305\u62EC Handler \u5BF9\u8C61\u4EE5\u53CA Handler \u5BF9\u8C61\u5BF9\u5E94\u7684\u62E6\u622A\u5668\uFF09\uFF0C<strong>\u6700\u540E\u4EE5 HandlerExecutionChain \u5BF9\u8C61\u7684\u5F62\u5F0F\u8FD4\u56DE\u3002</strong></p><ul><li>\u65E2 HandlerExecutionChain \u4E2D\uFF0C\u5305\u542B\u5BF9\u5E94\u7684Handler \u5BF9\u8C61\u548C\u62E6\u622A\u5668\u95E8</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">HandlerExecutionChain</span> <span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5904\u7406\u5668\u9002\u914D\uFF08HandlerAdapter\uFF09</p><p><strong>DispatcherServlet \u6839\u636E\u83B7\u5F97\u7684 Handler\uFF0C\u9009\u62E9\u4E00\u4E2A\u5408\u9002\u7684HandlerAdapter</strong>\uFF08\u6CE8\uFF1A\u5982\u679C\u6210\u529F\u83B7\u5F97HandlerAdapter\u540E\uFF0C\u6B64\u65F6\u5C06\u5F00\u59CB\u6267\u884C\u62E6\u622A\u5668\u7684#preHandler(...)\u65B9\u6CD5\uFF09</p><p>\u63D0\u53D6\u8BF7\u6C42 Request \u4E2D\u7684\u6A21\u578B\u6570\u636E\uFF0C\u586B\u5145 Handler \u5165\u53C2\uFF0C\u5F00\u59CB\u6267\u884CHandler\uFF08Controller\uFF09\u3002\u5728\u586B\u5145Handler\u7684\u5165\u53C2\u8FC7\u7A0B\u4E2D\uFF0C\u6839\u636E\u4F60\u7684\u914D\u7F6E\uFF0CSpring \u5C06\u5E2E\u4F60\u505A\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C</p><ul><li>HttpMessageConverter\uFF1A\u4F1A\u5C06\u8BF7\u6C42\u6D88\u606F\uFF08\u5982 JSON,XML \u7B49\u6570\u636E\uFF09\u8F6C\u6362\u6210\u4E00\u4E2A\u5BF9\u8C61</li><li>\u6570\u636E\u8F6C\u6362\uFF1A\u5BF9\u8BF7\u6C42\u6D88\u606F\u8FDB\u884C\u6570\u636E\u8F6C\u6362\u3002\u5982String \u8F6C\u6362\u6210Integer\uFF0CDouble\u7B49</li><li>\u6570\u636E\u683C\u5F0F\u5316\uFF1A\u5BF9\u8BF7\u6C42\u6D88\u606F\u8FDB\u884C\u6570\u636E\u683C\u5F0F\u5316\u3002\u5982\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u683C\u5F0F\u5316\u6570\u5B57\u6216\u683C\u5F0F\u5316\u65E5\u671F\u7B49</li><li>\u6570\u636E\u9A8C\u8BC1\uFF1A \u9A8C\u8BC1\u6570\u636E\u7684\u6709\u6548\u6027\uFF08\u957F\u5EA6\u3001\u683C\u5F0F\u7B49\uFF09\uFF0C\u9A8C\u8BC1\u7ED3\u679C\u5B58\u50A8\u5230 BindingResult \u6216 Error \u4E2D\u3002</li></ul><p><strong>Handler(Controller) \u6267\u884C\u5B8C\u6210\u540E\uFF0C\u5411 DispatcherServlet \u8FD4\u56DE\u4E00\u4E2A ModelAndView \u5BF9\u8C61</strong>\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ModelAndView</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u8C03\u7528\u5904\u7406\u5668\u65B9\u6CD5</p></li><li><p>\u89E3\u6790\u89C6\u56FE</p><p>\u6839\u636E\u8FD4\u56DE\u7684ModelAndView\uFF0C\u9009\u62E9\u4E00\u4E2A\u5408\u9002\u7684ViewResolver\uFF08\u5FC5\u987B\u662F\u5DF2\u7ECF\u6CE8\u518C\u5230Spring\u5BB9\u5668\u4E2D\u7684ViewResolver\uFF09\uFF0C\u89E3\u6790\u51FAView \u5BF9\u8C61\uFF0C\u7136\u540E\u8FD4\u56DE\u7ED9DispatcherServlet</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">View</span> <span class="token function">resolveViewName</span><span class="token punctuation">(</span><span class="token class-name">String</span> viewName<span class="token punctuation">,</span> <span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>7\u6E32\u67D3\u89C6\u56FE+\u54CD\u5E94\u8BF7\u6C42</p><p>ViewResolver \u7ED3\u5408Model \u548CView\uFF0C\u6765\u6E32\u67D3\u89C6\u56FE\uFF0C\u5E76\u5199\u56DE\u7ED9\u7528\u6237\uFF08\u6D4F\u89C8\u5668\uFF09</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">void</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> model<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_3-1-\u524D\u540E\u7AEF\u5206\u79BB\u7684spring-mvc-\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-1-\u524D\u540E\u7AEF\u5206\u79BB\u7684spring-mvc-\u6D41\u7A0B" aria-hidden="true">#</a> 3.1 \u524D\u540E\u7AEF\u5206\u79BB\u7684Spring MVC \u6D41\u7A0B</h3><p>\u5BF9\u4E8E\u524D\u540E\u7AEF\u5206\u79BB\u7684\u67B6\u6784\uFF0CSpring MVC \u53EA\u8D1F\u8D23 Model \u548C Controller \u4E24\u5757\uFF0C\u800C\u5C06View \u79FB\u4EA4\u7ED9\u4E86\u524D\u7AEF\uFF0C\u6240\u4EE5\uFF0C\u4E0A\u56FE\u4E2D\u7684\u6B65\u9AA45\uFF0C6 \u4E24\u6B65\uFF0C\u5C31\u4E0D\u9700\u8981\u4E86</p><p><strong>\u90A3\u4E48\u4F1A\u53D8\u6210\u4EC0\u4E48\u6837\uFF1F</strong></p><p>\u6B65\u9AA43\u4E2D\uFF0C\u5982\u679CHandler\uFF08Controller\uFF09\u6267\u884C\u5B8C\u540E\uFF0C\u5982\u679C\u5224\u65AD\u65B9\u6CD5\u6709@ResponseBody \u6CE8\u89E3\uFF0C\u5219\u76F4\u63A5\u5C06\u7ED3\u679C\u5199\u56DE\u7ED9\u6D4F\u89C8\u5668</p><p><strong>\u8FD4\u56DE\u7684\u662FJava POJO \u5BF9\u8C61\uFF0CHTTP\u662F\u4E0D\u652F\u6301\u7684\uFF0C\u600E\u4E48\u529E\uFF1F</strong></p><p>\u9700\u8981\u5C06\u7ED3\u679C\u4F7F\u7528HttpMessageConverter \u8FDB\u884C\u8F6C\u6362\u540E\uFF0C\u624D\u80FD\u8FD4\u56DE\u3002\u4F8B\u5982\u8BF4\uFF0C\u5927\u5BB6\u9501\u719F\u6089\u7684 FastJsonHttpMessage\uFF0C\u5C06POJO \u8F6C\u6362\u6210JSON \u5B57\u7B26\u4E32\u8FD4\u56DE</p><h2 id="_4-controller-\u6CE8\u89E3\u6709\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#_4-controller-\u6CE8\u89E3\u6709\u4EC0\u4E48\u7528" aria-hidden="true">#</a> 4. @Controller \u6CE8\u89E3\u6709\u4EC0\u4E48\u7528\uFF1F</h2><p>@Controller \u6CE8\u89E3\uFF0C\u4ED6\u5C06\u4E00\u4E2A\u7C7B\u6807\u8BB0\u4E3ASpring MVC \u63A7\u5236\u5668Controller</p><h2 id="_5-restcontroller-\u548C-controller-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-restcontroller-\u548C-controller-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 5. RestController \u548C @Controller \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><p>@RestController \u6CE8\u89E3\uFF0C\u5728@Controller \u57FA\u7840\u4E0A\uFF0C\u589E\u52A0\u4E86@ResponseBody \u6CE8\u89E3\uFF0C\u66F4\u52A0\u9002\u5408\u76EE\u524D\u524D\u540E\u7AEF\u5206\u79BB\u7684\u67B6\u6784\u4E0B\uFF0C\u63D0\u4F9BRestful API\uFF0C\u8FD4\u56DE\u4F8B\u5982JSON \u6570\u636E\u683C\u5F0F\u3002\u5F53\u7136\uFF0C<strong>\u8FD4\u56DE\u4EC0\u4E48\u6837\u7684\u683C\u5F0F</strong>\uFF0C\u6839\u636E<strong>\u5BA2\u6237\u7AEF\u7684\u201DAccept\u201C\u8BF7\u6C42\u5934\u6765\u51B3\u5B9A</strong></p><h2 id="_6-reuqestmapping-\u6CE8\u89E3\u6709\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#_6-reuqestmapping-\u6CE8\u89E3\u6709\u4EC0\u4E48\u7528" aria-hidden="true">#</a> 6. @ReuqestMapping \u6CE8\u89E3\u6709\u4EC0\u4E48\u7528\uFF1F</h2><p>@RequestMapping \u6CE8\u89E3\uFF0C\u7528\u4E8E\u5C06\u7279\u5B9A HTTP \u8BF7\u6C42\u65B9\u6CD5\u6620\u5C04\u5230\u5C06\u5904\u7406\u76F8\u5E94\u8BF7\u6C42\u7684\u63A7\u5236\u5668\u4E2D\u7684\u7279\u5B9A\u7C7B/\u65B9\u6CD5\u3002\u6B64\u6CE8\u89E3\u53EF\u5E94\u7528\u4E8E\u4E24\u4E2A\u7EA7\u522B\uFF1A</p><ul><li>\u7C7B\u7EA7\u522B\uFF1A\u6620\u5C04\u8BF7\u6C42\u7684URL</li><li>\u65B9\u6CD5\u7EA7\u522B\uFF1A\u6620\u5C04 URL \u4EE5\u53CAHTTP \u8BF7\u6C42\u65B9\u6CD5</li></ul><h2 id="_7-requestmapping-\u548C-getmapping-\u6CE8\u89E3\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u54EA\u91CC" tabindex="-1"><a class="header-anchor" href="#_7-requestmapping-\u548C-getmapping-\u6CE8\u89E3\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u54EA\u91CC" aria-hidden="true">#</a> 7. @RequestMapping \u548C@GetMapping \u6CE8\u89E3\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u54EA\u91CC</h2><ul><li><p>@RequestMapping \u53EF\u6CE8\u89E3\u5728\u7C7B\u548C\u65B9\u6CD5\u4E0A\uFF0C@GetMapping \u4EC5\u53EF\u6CE8\u518C\u5728\u65B9\u6CD5\u4E0A</p></li><li><p>@RequestMapping \u53EF\u8FDB\u884C GET\u3001POST\u3001PUT\u3001DELETE \u7B49\u8BF7\u6C42\u65B9\u6CD5;</p><p>@GetMapping \u662F @RequestMapping \u7684GET \u8BF7\u6C42\u4E0E\u65B9\u6CD5\u7684\u7279\u4F8B\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u63D0\u9AD8\u6E05\u6670\u5EA6</p></li></ul><h2 id="_8-\u8FD4\u56DEjson-\u683C\u5F0F\u4F7F\u7528\u4EC0\u4E48\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_8-\u8FD4\u56DEjson-\u683C\u5F0F\u4F7F\u7528\u4EC0\u4E48\u6CE8\u89E3" aria-hidden="true">#</a> 8. \u8FD4\u56DEJSON \u683C\u5F0F\u4F7F\u7528\u4EC0\u4E48\u6CE8\u89E3\uFF1F</h2><p>\u53EF\u4EE5\u4F7F\u7528@Response \u6CE8\u89E3\uFF0C\u6216\u8005\u4F7F\u7528\u5305\u542B@ResponseBody \u6CE8\u89E3\u7684@RestController \u6CE8\u89E3\u3002</p><p>\u5F53\u7136\uFF0C\u8FD8\u662F\u9700\u8981\u914D\u5408\u76F8\u5E94\u7684\u652F\u6301JSON\u683C\u5F0F\u5316\u7684HttpMessageConverter \u5B9E\u73B0\u7C7B\u3002\u4F8B\u5982\uFF0CSpring MVC \u9ED8\u8BA4\u4F7F\u7528MappingJackson2HttpMessageConverter</p><h2 id="_9-\u4ECB\u7ECD\u4E00\u4E0Bwebapplicationcontext" tabindex="-1"><a class="header-anchor" href="#_9-\u4ECB\u7ECD\u4E00\u4E0Bwebapplicationcontext" aria-hidden="true">#</a> 9. \u4ECB\u7ECD\u4E00\u4E0BWebApplicationContext\uFF1F</h2><p>WebApplicationContext \u662F\u5B9E\u73B0ApplicationContext \u63A5\u53E3\u7684\u5B50\u7C7B\uFF0C\u4E13\u95E8\u4E3AWeb\u5E94\u7528\u51C6\u5907\u7684</p><ul><li>\u4ED6\u5141\u8BB8\u4ECE\u76F8\u5BF9\u4E8EWeb \u6839\u76EE\u5F55\u7684\u8DEF\u5F84\u4E2D<strong>\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u5B8C\u6210\u521D\u59CB\u5316Spring MVC \u7EC4\u4EF6\u7684\u5DE5\u4F5C</strong></li><li>\u4ECEWebApplicationContext\u4E2D\uFF0C\u53EF\u4EE5\u83B7\u53D6ServletContext \u5F15\u7528\uFF0C\u6574\u4E2AWeb \u5E94\u7528\u4E0A\u4E0B\u6587\u5BF9\u8C61\u5C06\u4F5C\u4E3A\u5C5E\u6027\u653E\u7F6E\u5728SerletContext\u4E2D\uFF0C\u4E00\u904DWeb \u5E94\u7528\u73AF\u5883\u53EF\u4EE5\u8BBF\u95EESpring \u4E0A\u4E0B\u6587</li></ul><h2 id="_10-spirng-mvc-\u7684\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_10-spirng-mvc-\u7684\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> 10.Spirng MVC \u7684\u5F02\u5E38\u5904\u7406\uFF1F</h2><p>Spring MVC \u63D0\u4F9B\u4E86\u5F02\u5E38\u89E3\u6790\u5668 HandlerExceptionResolver \u63A5\u53E3\uFF0C\u5C06\u5904\u7406\u5668\uFF08handler\uFF09\u6267\u884C\u65F6\u53D1\u751F\u7684\u5F02\u5E38\uFF0C\u89E3\u6790\uFF08\u8F6C\u6362\uFF09\u6210\u5BF9\u5E94\u7684ModelAndView \u7ED3\u679C\uFF0C\u4EE3\u7801\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">HandlerExceptionResolver</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u89E3\u6790\u5F02\u5E38\uFF0C\u8F6C\u6362\u6210\u5BF9\u5E94\u7684 ModelAndView \u7ED3\u679C
     */</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token class-name">ModelAndView</span> <span class="token function">resolveException</span><span class="token punctuation">(</span>
            <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-spring-mvc-\u6709\u4EC0\u4E48\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_11-spring-mvc-\u6709\u4EC0\u4E48\u4F18\u70B9" aria-hidden="true">#</a> 11. Spring MVC \u6709\u4EC0\u4E48\u4F18\u70B9\uFF1F</h2><ol><li>\u4F7F\u7528\u975E\u5E38<strong>\u65B9\u4FBF</strong>\uFF0C\u65E0\u8BBA\u662F\u6DFB\u52A0HTTP\u8BF7\u6C42\u65B9\u6CD5\u6620\u5C04\u7684\u65B9\u6CD5\uFF0C\u8FD8\u662F\u4E0D\u540C\u6570\u636E\u683C\u5F0F\u7684\u54CD\u5E94</li><li>\u63D0\u4F9B<strong>\u62E6\u622A\u5668\u673A\u5236</strong>\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5BF9\u8BF7\u6C42\u8FDB\u884C\u62E6\u622A\u5904\u7406</li><li>\u63D0\u4F9B<strong>\u5F02\u5E38\u673A\u5236</strong>\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5BF9\u5F02\u5E38\u505A\u7EDF\u4E00\u7684\u5904\u7406</li><li>\u53EF\u4EE5\u4EFB\u610F\u4F7F\u7528\u5404\u79CD<strong>\u89C6\u56FE</strong>\u6280\u672F\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u5C40\u9650\u4E8EJSP\uFF0C\u4F8B\u5982Freemarker\u3001Thymeleaf\u7B49\u7B49</li><li>\u4E0D\u4F9D\u8D56\u4E8EServlet API(\u76EE\u6807\u867D\u662F\u5982\u6B64\uFF0C\u4F46\u662F\u5728\u5B9E\u73B0\u7684\u65F6\u5019\u786E\u5B9E\u662F\u4F9D\u8D56\u4E8E Servlet \u7684\uFF0C\u5F53\u7136\u4EC5\u4EC5\u4F9D\u8D56 Servlet \uFF0C\u800C\u4E0D\u4F9D\u8D56 Filter\u3001Listener )\u3002</li></ol><h2 id="_12-spring-mvc\u600E\u6837\u8BBE\u5B9A\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#_12-spring-mvc\u600E\u6837\u8BBE\u5B9A\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1" aria-hidden="true">#</a> 12. Spring MVC\u600E\u6837\u8BBE\u5B9A\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1\uFF1F</h2><ul><li>\u7ED3\u679C\u8F6C\u53D1\uFF1A\u5728\u8FD4\u56DE\u503C\u7684\u524D\u9762\u52A0 <code>&quot;forward:/&quot;</code> \u3002</li><li>\u91CD\u5B9A\u5411\uFF1A\u5728\u8FD4\u56DE\u503C\u7684\u524D\u9762\u52A0\u4E0A <code>&quot;redirect:/&quot;</code> \u3002</li></ul><p>\u5F53\u7136\uFF0C\u76EE\u524D\u524D\u540E\u7AEF\u5206\u79BB\u4E4B\u540E\uFF0C\u6211\u4EEC\u4F5C\u4E3A\u540E\u7AEF\u5F00\u53D1\uFF0C\u5DF2\u7ECF\u5F88\u5C11\u6709\u673A\u4F1A\u7528\u4E0A\u8FD9\u4E2A\u529F\u80FD\u4E86\u3002</p><h2 id="_13-spring-mvc-\u7684-controller-\u662F\u4E0D\u662F\u5355\u4F8B" tabindex="-1"><a class="header-anchor" href="#_13-spring-mvc-\u7684-controller-\u662F\u4E0D\u662F\u5355\u4F8B" aria-hidden="true">#</a> 13. Spring MVC \u7684 Controller \u662F\u4E0D\u662F\u5355\u4F8B\uFF1F</h2><p>\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B,Controller <strong>\u662F\u5355\u4F8B</strong>\u3002</p><p>\u90A3\u4E48\uFF0CController \u91CC\u4E00\u822C<strong>\u4E0D\u5EFA\u8BAE\u5B58\u5728\u5171\u4EAB\u7684\u53D8\u91CF</strong></p>`,44),p=[l];function r(i,o){return e(),a("div",null,p)}const u=n(t,[["render",r],["__file","spring-y-mvc-interview.html.vue"]]);export{u as default};