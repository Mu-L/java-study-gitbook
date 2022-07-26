(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{854:function(t,e,s){"use strict";s.r(e);var n=s(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"springmvc拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springmvc拦截器"}},[t._v("#")]),t._v(" SpringMVC拦截器")]),t._v(" "),s("h2",{attrs:{id:"_1-详细介绍下-spring-mvc-拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-详细介绍下-spring-mvc-拦截器"}},[t._v("#")]),t._v(" 1. 详细介绍下 Spring MVC 拦截器？")]),t._v(" "),s("p",[s("code",[t._v("org.springframework.web.servlet.HandlerInterceptor")]),t._v(" ，拦截器接口。代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HandlerInterceptor.java")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 拦截处理器，在 {@link HandlerAdapter#handle(HttpServletRequest, HttpServletResponse, Object)} 执行之前\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preHandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 拦截处理器，在 {@link HandlerAdapter#handle(HttpServletRequest, HttpServletResponse, Object)} 执行成功之后\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postHandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" modelAndView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 拦截处理器，在 {@link HandlerAdapter#handle(HttpServletRequest, HttpServletResponse, Object)} 执行完之后，无论成功还是失败\n *\n * 并且，只有该处理器 {@link #preHandle(HttpServletRequest, HttpServletResponse, Object)} 执行成功之后，才会被执行\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterCompletion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("一共有三个方法，分别为：")]),t._v(" "),s("ul",[s("li",[t._v("preHandle（...）方法，调用Controller方法之"),s("strong",[t._v("前")]),t._v("执行")]),t._v(" "),s("li",[t._v("postHandle（...）方法，调用Controller方法之"),s("strong",[t._v("后")]),t._v("执行")]),t._v(" "),s("li",[t._v("afterCompletion(...)方法，处理完Controller 方法返回结果之后执行\n"),s("ul",[s("li",[t._v("例如：页面渲染后")]),t._v(" "),s("li",[t._v("注意："),s("strong",[t._v("无论调用Controller方法是否成功，都会执行")])])])])])]),t._v(" "),s("li",[s("p",[t._v("举个例子：")]),t._v(" "),s("ul",[s("li",[t._v("当两个拦截器都实现放行操作是，执行顺序"),s("code",[t._v("preHandle[1] => preHandle[2] => postHandle[2] => postHandle[1] => afterCompletion[2] => afterCompletion[1]")]),t._v(" 。")]),t._v(" "),s("li",[t._v("当第一个拦截器preHandle(...)返回false 的时候，也就是对其进行拦截时，第二个拦截器是完全不执行的，第一个拦截器只执行 "),s("code",[t._v("#preHandle(...)")]),t._v(" 部分。")]),t._v(" "),s("li",[t._v("当第一个拦截器 "),s("code",[t._v("#preHandle(...)")]),t._v(" 方法返回 "),s("code",[t._v("true")]),t._v(" ，第二个拦截器 "),s("code",[t._v("#preHandle(...)")]),t._v(" 返回 "),s("code",[t._v("false")]),t._v(" ，执行顺序为 "),s("code",[t._v("preHandle[1] => preHandle[2] => afterCompletion[1]")]),t._v(" 。")])])]),t._v(" "),s("li",[s("p",[t._v("总结：")]),t._v(" "),s("ul",[s("li",[t._v("preHandle(...)方法，按拦截器定义"),s("strong",[t._v("顺序")]),t._v("调用，若任一拦截器返回false，则Controller方法不再调用")]),t._v(" "),s("li",[s("code",[t._v("#postHandle(...)")]),t._v(" 和 "),s("code",[t._v("#afterCompletion(...)")]),t._v(" 方法，按拦截器定义"),s("strong",[t._v("逆序")]),t._v("调用。")]),t._v(" "),s("li",[s("code",[t._v("#postHandler(...)")]),t._v(" 方法，在调用 Controller 方法之"),s("strong",[t._v("后")]),t._v("执行。")]),t._v(" "),s("li",[s("code",[t._v("#afterCompletion(...)")]),t._v(" 方法，只有该拦截器在 "),s("code",[t._v("#preHandle(...)")]),t._v(" 方法返回 "),s("code",[t._v("true")]),t._v(" 时，才能够被调用，且一定会被调用。为什么“且一定会被调用”呢？即使 "),s("code",[t._v("#afterCompletion(...)")]),t._v(" 方法，按拦截器定义"),s("strong",[t._v("逆序")]),t._v("调用时，前面的拦截器发生异常，后面的拦截器还能够调用，"),s("strong",[t._v("即无视异常")]),t._v("。")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-spring-mvc-的拦截器可以做哪些事情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-spring-mvc-的拦截器可以做哪些事情"}},[t._v("#")]),t._v(" 2. Spring MVC 的拦截器可以做哪些事情？")]),t._v(" "),s("p",[t._v("拦截器能做的事情非常非常多，例如：")]),t._v(" "),s("ul",[s("li",[t._v("记录访问日志")]),t._v(" "),s("li",[t._v("记录异常日志")]),t._v(" "),s("li",[t._v("需要登录的请求操作，拦截未登录的用户")]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("h2",{attrs:{id:"_3-spring-mvc-的拦截器和filter-过滤器有什么差别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring-mvc-的拦截器和filter-过滤器有什么差别"}},[t._v("#")]),t._v(" 3. Spring MVC 的拦截器和Filter 过滤器有什么差别")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("功能相同")]),t._v("：拦截器和Filter 都能实现相应的功能，谁都不比谁强")]),t._v(" "),s("li",[s("strong",[t._v("容器不同")]),t._v("：拦截器构建在Spring MVC 体系中，Filter 构建在 Servlet 容器之上")]),t._v(" "),s("li",[s("strong",[t._v("使用便利性不同")]),t._v("：拦截器提供了三个方法，分别在不同的时机执行；过滤器仅提供一个方法，当然也能现实拦截器的执行时机的效果，就是麻烦一些")])]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://svip.iocoder.cn/Spring-MVC/Interview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("过滤器(Filter)和拦截器(Interceptor)的区别"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);