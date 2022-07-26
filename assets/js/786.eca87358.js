(window.webpackJsonp=window.webpackJsonp||[]).push([[786],{1162:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"scrapy入门-三-调试-debugging-spiders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrapy入门-三-调试-debugging-spiders"}},[t._v("#")]),t._v(" Scrapy入门（三）-调试(Debugging)Spiders")]),t._v(" "),a("h2",{attrs:{id:"_1-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),a("p",[t._v("而Scrapy的爬虫通常是在命令行中启动的，我们怎么去调试呢？")]),t._v(" "),a("h2",{attrs:{id:"_2-调试部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-调试部署"}},[t._v("#")]),t._v(" 2. 调试部署")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先在setting.py同级目录下创建run.py文件。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210311105958418.png",alt:"image-20210311105958418"}})])])]),t._v(" "),a("p",[t._v("写入以下代码")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding: utf-8 -*-")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scrapy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cmdline\n\n\nname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'douban_movie_top250'")]),t._v("\ncmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scrapy crawl {0}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncmdline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("其中name参数为spider的name。\n接着在spider文件中设置断点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210311110405697.png",alt:"image-20210311110405697"}})]),t._v(" "),a("p",[t._v("返回run.py文件中右键选择Debug。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210311110423296.png",alt:"image-20210311110423296"}})]),t._v(" "),a("p",[t._v("最后程序就会在断点处暂停，我们就可以查看相应的内容从而进行调试 。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210311110438767.png",alt:"image-20210311110438767"}})]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25200262",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scrapy爬虫框架教程（三）-- 调试(Debugging)Spiders"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);