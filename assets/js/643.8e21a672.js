(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{1019:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue自定义防抖指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue自定义防抖指令"}},[t._v("#")]),t._v(" Vue自定义防抖指令")]),t._v(" "),s("h2",{attrs:{id:"_1-背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),s("p",[t._v("项目中经常会遇到说，一个按钮因为网络IO等问题，可能还在请求过程中，用户连续点击。导致重复发送请求。")]),t._v(" "),s("p",[t._v("这种情况下我们使用防抖/节流就能很好的解决，实现得方案有很多，但是自定义指令的方式是最简单的。后面有需要使用防抖的地方只要使用改指令即可。")]),t._v(" "),s("h2",{attrs:{id:"_2-原始情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-原始情况"}},[t._v("#")]),t._v(" 2. 原始情况")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sayHello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("提交"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当我们连续点击多次，控制台会输出多次 Hello!")]),t._v(" "),s("h2",{attrs:{id:"_3-我想达到的效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-我想达到的效果"}},[t._v("#")]),t._v(" 3. 我想达到的效果：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-throttle")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“200”")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sayHello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("提交"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("通过此设置，可以让提交按钮在200ms内的多次点击只能执行一次，并且刚点击时就执行。若不设置时间（200），则默认2000ms内只执行一次。")]),t._v(" "),s("h2",{attrs:{id:"_4-防抖-节流的区别和选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-防抖-节流的区别和选择"}},[t._v("#")]),t._v(" 4. 防抖 / 节流的区别和选择")]),t._v(" "),s("h3",{attrs:{id:"_4-1-解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-解释"}},[t._v("#")]),t._v(" 4.1 解释")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("节流")]),t._v(" "),s("p",[t._v("指一定时间内js方法只跑一次。比如人的眨眼睛，就是一定时间内眨一次。这是函数。")])]),t._v(" "),s("li",[s("p",[t._v("防抖")]),t._v(" "),s("p",[t._v("指频繁触发的情况下，只有足够的空闲时间，才执行代码一次。比如生活中的坐公交，就是一定时间内，如果有人陆续刷卡上车，司机就不会开车。只有别人没刷卡了，司机才开车。")])])]),t._v(" "),s("h3",{attrs:{id:"_4-2-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-区别"}},[t._v("#")]),t._v(" 4.2 区别")]),t._v(" "),s("p",[t._v("在我看来它们的差别在于应用场景，举例如下：")]),t._v(" "),s("p",[t._v("【应用场景】：分别在时间段0.2s,0.4s,0.6s,0.8s进行连续点击，触发searchAPI。")]),t._v(" "),s("p",[t._v("【防抖后的效果】：0.8s后才真正进行searchAPI的发送；")]),t._v(" "),s("p",[t._v("【节流的效果】：0.2s时发现有人点击，立即触发searchAPI接口，并且在x秒内，用户点击无效。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f58e1a53d1a476db7dbea470ad29b57~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"_4-3-如何选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-如何选择"}},[t._v("#")]),t._v(" 4.3 如何选择")]),t._v(" "),s("p",[t._v("我这边需要在用户刚点击的时候就立即响应，后面几秒钟的点击无效，是节流的效果，所以选择节流。")]),t._v(" "),s("h2",{attrs:{id:"_5-如何创建自定义指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何创建自定义指令"}},[t._v("#")]),t._v(" 5. 如何创建自定义指令")]),t._v(" "),s("h3",{attrs:{id:"_5-1-选择合适的钩子函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-选择合适的钩子函数"}},[t._v("#")]),t._v(" 5.1 选择合适的钩子函数")]),t._v(" "),s("p",[t._v("自定义指令的钩子函数：bind，inserted，update，componentUpdated，unbind")]),t._v(" "),s("p",[t._v("我选用bind，只需要一次性的初始化就够了。")]),t._v(" "),s("h3",{attrs:{id:"_5-2-钩子函数参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-钩子函数参数"}},[t._v("#")]),t._v(" 5.2 钩子函数参数")]),t._v(" "),s("p",[t._v("el：可直接操作DOM(例如， "),s("code",[t._v("el.addEventListener")]),t._v(" , "),s("code",[t._v("el.onclick")]),t._v(" )。")]),t._v(" "),s("p",[t._v("binding：可通过value获得指令绑定值。")]),t._v(" "),s("h3",{attrs:{id:"_5-3-思考-如何在不妨碍原本click事件的情况下-添加监听click事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-思考-如何在不妨碍原本click事件的情况下-添加监听click事件"}},[t._v("#")]),t._v(" 5.3 思考：如何在不妨碍原本click事件的情况下，添加监听click事件")]),t._v(" "),s("blockquote",[s("p",[t._v("onclick事件的处理程序在有多个的情况下，后者会覆盖前者。addEventListener给一个事件注册多个listener，不会出现覆盖的情况。")])]),t._v(" "),s("p",[t._v("当然是使用"),s("code",[t._v("addEventListener")]),t._v("（"),s("em",[t._v("IE浏览器要用 "),s("code",[t._v("attachEvent")]),t._v(" ，然而我的项目中只需要支持chrome即可，就不考虑啦")]),t._v("）")]),t._v(" "),s("h2",{attrs:{id:"_6-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-实现"}},[t._v("#")]),t._v(" 6. 实现")]),t._v(" "),s("h3",{attrs:{id:"_6-1-定义防抖指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-定义防抖指令"}},[t._v("#")]),t._v(" 6.1 定义防抖指令：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'throttle'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" binding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" throttleTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" binding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 防抖时间")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("throttleTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户若不设置防抖时间，则默认2s")]),t._v("\n      throttleTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cbFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cbFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一次执行")]),t._v("\n        cbFun "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          cbFun "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" throttleTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopImmediatePropagation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6-2-使用指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-使用指令"}},[t._v("#")]),t._v(" 6.2 使用指令：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sayHello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-throttle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("提交"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844903944653651981",target:"_blank",rel:"noopener noreferrer"}},[t._v("【实战】Vue自定义防抖指令"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);