(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{1006:function(s,t,a){"use strict";a.r(t);var e=a(26),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"线上element的字体图标乱码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线上element的字体图标乱码"}},[s._v("#")]),s._v(" 线上element的字体图标乱码")]),s._v(" "),a("h2",{attrs:{id:"_1-现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-现象"}},[s._v("#")]),s._v(" 1. 现象")]),s._v(" "),a("p",[s._v("本地开发测试都没有问题，部署到线上环境图标第一次显示不出来")]),s._v(" "),a("h2",{attrs:{id:"_2-问题原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-问题原因"}},[s._v("#")]),s._v(" 2. 问题原因")]),s._v(" "),a("p",[s._v('dart-sass编译时会将对应的unicode编码转换成对应unicode明文，所以通过伪元素来展示的图标如el-icon-arrow:before{ content: "\\e6df"}，编译之后就变成了el-icon-arrow:before{ content: ""}，“”便是一个双字节字符')]),s._v(" "),a("ul",[a("li",[s._v("正常情况我们会在meta标签上设置："),a("code",[s._v('<meta charset="utf-8" >')]),s._v("，"),a("strong",[s._v("但这只对HTML内容解析有效，")])]),s._v(" "),a("li",[s._v('对于css内容中(外部样式表下)的双字节字符（如中文）解析并没有作用的，所以如果浏览器请求回来的css资源的HTTP响应头里的Content-Type未指明"charset=utf-8"的话，浏览器根据自身的嗅探机制来决定采用哪一种编码解析，结果就会概率出现双字节字符乱码的情况')])]),s._v(" "),a("h2",{attrs:{id:"_3-解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决方法"}},[s._v("#")]),s._v(" 3. 解决方法")]),s._v(" "),a("h3",{attrs:{id:"_3-1-改为node-sass编译-亲测有效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-改为node-sass编译-亲测有效"}},[s._v("#")]),s._v(" 3.1 改为node-sass编译(亲测有效)")]),s._v(" "),a("p",[s._v("element-ui采用的时node-sass编译，可以把dart-sass换成node-sass，但是官网主推dart-sass，dart-sass会是未来主流")]),s._v(" "),a("h3",{attrs:{id:"_3-2-css-增加-charset-utf-8-响应头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-css-增加-charset-utf-8-响应头"}},[s._v("#")]),s._v(' 3.2 css 增加"charset=utf-8"响应头')]),s._v(" "),a("p",[s._v('让css资源请求的响应头的Content-Type增加"charset=utf-8"声明，因为涉及到后端，所以具体笔者没试验过，不知道可不可行。')]),s._v(" "),a("h3",{attrs:{id:"_3-3-设置sassoptions不压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-设置sassoptions不压缩"}},[s._v("#")]),s._v(" 3.3 设置sassOptions不压缩")]),s._v(" "),a("p",[s._v("因为 sass-loader 会检查运行环境的模式，给 dart-sass 传入 "),a("code",[s._v('{ outputStyle: "compressed" }')]),s._v("。 dart-sass 在这时会使用 BOM 而不是输出 "),a("code",[s._v("@charset")]),s._v("。")]),s._v(" "),a("p",[s._v("如果是通过 @vue/cli 搭建的环境，因为有 cssnano 处理压缩，所以可以给 vue.config.js 传入 sassOptions 避免 compressed。")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loaderOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      sass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sassOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" outputStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"expanded"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/shandou/p/14867943.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("dart-sass编译element-ui打包出来的icon乱码的解决方案"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues/3526",target:"_blank",rel:"noopener noreferrer"}},[s._v("用最新的框架，打包出来element的字体图标乱码了？"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);