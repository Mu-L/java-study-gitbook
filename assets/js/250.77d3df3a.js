(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{628:function(t,s,a){"use strict";a.r(s);var e=a(26),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"无法连接远端mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无法连接远端mysql"}},[t._v("#")]),t._v(" 无法连接远端Mysql")]),t._v(" "),a("h2",{attrs:{id:"_1-错误提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-错误提示"}},[t._v("#")]),t._v(" 1. 错误提示")]),t._v(" "),a("p",[t._v("提示：Host 'xxx.xxx.x.xx' is not allowed to connect to this MySQL server")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190913211110163.png",alt:"image-20190913211110163"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("问题原因")])]),t._v(" "),a("p",[t._v("客户端想直接用root账户从远端直接连接，Mysql从安全性考虑，限定了root账户只能有本机端localhost连接")]),t._v(" "),a("p",[t._v("可以执行")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select Host,User from mysql.user;\n")])])]),a("p",[t._v("结果如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190909214141218.png",alt:"image-20190909214141218"}})]),t._v(" "),a("h2",{attrs:{id:"_3-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决方案"}},[t._v("#")]),t._v(" 3. 解决方案")]),t._v(" "),a("ol",[a("li",[t._v("root 的權限開放，讓他也能從遠端連")]),t._v(" "),a("li",[t._v("新建一個帳號，讓他只有所要連接的資料庫的權限，只要是非 root 帳號都可以從遠端連。")])]),t._v(" "),a("h2",{attrs:{id:"_4-具体解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-具体解决"}},[t._v("#")]),t._v(" 4. 具体解决")]),t._v(" "),a("p",[t._v("创建一个远程用户")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("create user test identified by '123456'; \n")])])]),a("p",[t._v("分配权限")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("grant all privileges on *.* to 'test'@'%'identified by '123456' with grant option; \n")])])]),a("p",[t._v("刷新mysql用户权限")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("flush privileges ; \n")])])]),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ewdna.com/2011/09/mysqlmessage-from-server-host-xxx-is.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("無法遠端連接MySQL"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);