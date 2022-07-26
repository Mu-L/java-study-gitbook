(window.webpackJsonp=window.webpackJsonp||[]).push([[927],{1305:function(a,t,s){"use strict";s.r(t);var n=s(26),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mac安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac安装nginx"}},[a._v("#")]),a._v(" Mac安装nginx")]),a._v(" "),s("h2",{attrs:{id:"_1-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[a._v("#")]),a._v(" 1. 简介")]),a._v(" "),s("p",[a._v("Mac安装nginx，采用Mac的包管理工具 "),s("strong",[a._v("homebrew")]),a._v(" 安装")]),a._v(" "),s("h2",{attrs:{id:"_2-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[a._v("#")]),a._v(" 2. 安装")]),a._v(" "),s("h3",{attrs:{id:"_2-1-步骤一-先更新homebrew"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-步骤一-先更新homebrew"}},[a._v("#")]),a._v(" 2.1 "),s("strong",[a._v("步骤一：先更新homebrew")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew update\n")])])]),s("p",[a._v("如果上面操作长时间没任何动静，请更换镜像，参考清华的镜像 "),s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://mirrors.tuna.tsinghua..."),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"_2-2-步骤二-查看nginx信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-步骤二-查看nginx信息"}},[a._v("#")]),a._v(" 2.2 "),s("strong",[a._v("步骤二")]),a._v("： 查看nginx信息")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew search nginx\n")])])]),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210607150955882.png",alt:"image-20210607150955882"}})]),a._v(" "),s("h3",{attrs:{id:"_2-3-安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-安装nginx"}},[a._v("#")]),a._v(" 2.3 "),s("strong",[a._v("安装nginx")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew install nginx\n")])])]),s("p",[a._v("安装完毕")]),a._v(" "),s("ul",[s("li",[a._v("主页的文件在/usr/local/var/www 文件夹下")]),a._v(" "),s("li",[a._v("对应的配置文件地址在/usr/local/etc/nginx/nginx.conf")])]),a._v(" "),s("h3",{attrs:{id:"_2-4-步骤四-运行nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-步骤四-运行nginx"}},[a._v("#")]),a._v(" "),s("strong",[a._v("2.4 步骤四：运行nginx")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nginx\n")])])]),s("p",[a._v("nginx默认使用8080端口 如果发现端口被占用了，可以杀掉使用使用改端口的进程，也可以修改/usr/local/etc/nginx/nginx.conf 下的")]),a._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("http")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8181")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server_name")]),a._v("  localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#charset koi8-r;")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2-5-重新启动nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-重新启动nginx"}},[a._v("#")]),a._v(" 2.5 "),s("strong",[a._v("重新启动nginx")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nginx -s reload\n")])])]),s("p",[a._v("成功看到欢迎页面～！（对应的html是/usr/local/var/www/index.html）")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210607151153045.png",alt:"image-20210607151153045"}})]),a._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000016020328",target:"_blank",rel:"noopener noreferrer"}},[a._v("MAC下安装nginx"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);