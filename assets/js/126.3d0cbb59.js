(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{502:function(t,a,_){"use strict";_.r(a);var s=_(26),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"linux-cpu监控"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux-cpu监控"}},[t._v("#")]),t._v(" Linux CPU监控")]),t._v(" "),_("h2",{attrs:{id:"_1-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),_("p",[t._v("常用命令有top 和mpstat")]),t._v(" "),_("h2",{attrs:{id:"_2-命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令"}},[t._v("#")]),t._v(" 2.命令")]),t._v(" "),_("h3",{attrs:{id:"_2-1-top"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-top"}},[t._v("#")]),t._v(" 2.1 top")]),t._v(" "),_("h4",{attrs:{id:"_2-1-1-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-简介"}},[t._v("#")]),t._v(" 2.1.1 简介")]),t._v(" "),_("p",[t._v("top命令 可以实时动态地查看系统的整体运行情况。")]),t._v(" "),_("h4",{attrs:{id:"_2-1-2-语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-语法"}},[t._v("#")]),t._v(" 2.1.2 语法：")]),t._v(" "),_("div",{staticClass:"language-scss extra-class"},[_("pre",{pre:!0,attrs:{class:"language-scss"}},[_("code",[t._v("top "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),_("p",[t._v("选项：\n"),_("code",[t._v("-b")]),t._v("：以批处理模式操作；\n"),_("code",[t._v("-c")]),t._v("：显示完整的治命令；\n"),_("code",[t._v("-d")]),t._v("：屏幕刷新间隔时间；\n"),_("code",[t._v("-I")]),t._v("：忽略失效过程；\n"),_("code",[t._v("-s")]),t._v("：保密模式；\n"),_("code",[t._v("-S")]),t._v("：累积模式；\n"),_("code",[t._v("-i<时间>")]),t._v("：设置间隔时间；\n"),_("code",[t._v("-u<用户名>")]),t._v("：指定用户名；\n"),_("code",[t._v("-p<进程号>")]),t._v("：指定进程；\n"),_("code",[t._v("-n<次数>")]),t._v("：循环显示的次数")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401142646239.png",alt:"image-20220401142646239"}})]),t._v(" "),_("h4",{attrs:{id:"_2-1-3-字段说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-字段说明"}},[t._v("#")]),t._v(" 2.1.3 字段说明")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("top")]),t._v("：系统当前时间")]),t._v(" "),_("li",[_("code",[t._v("up xxx days")]),t._v("：系统运行时间")]),t._v(" "),_("li",[_("code",[t._v("1 users")]),t._v("：当前登录用户个数")]),t._v(" "),_("li",[_("code",[t._v("load average")]),t._v("：系统负载。即任务队列的平均长度。三个数值分别为最近1分钟、最近5分钟、最近15分钟的平均负载。——超过N（CPU核数）说明系统满负荷运行。")]),t._v(" "),_("li",[t._v("Tasks\n"),_("ul",[_("li",[_("code",[t._v("total")]),t._v("：总进程数")]),t._v(" "),_("li",[_("code",[t._v("running")]),t._v("：正在运行的进程数")]),t._v(" "),_("li",[_("code",[t._v("sleeping")]),t._v("：睡眠的进程数")]),t._v(" "),_("li",[_("code",[t._v("stopped")]),t._v("：停止的进程数")]),t._v(" "),_("li",[_("code",[t._v("zombie")]),t._v("：冻结的进程数")])])]),t._v(" "),_("li",[t._v("%Cpu(s)\n"),_("ul",[_("li",[_("code",[t._v("us")]),t._v("：用户进程消耗的CPU百分比")]),t._v(" "),_("li",[_("code",[t._v("sy")]),t._v("：内核进程消耗的CPU百分比")]),t._v(" "),_("li",[_("code",[t._v("ni")]),t._v("：改变过优先级的进程占用CPU的百分比")]),t._v(" "),_("li",[_("code",[t._v("id")]),t._v("：空闲CPU的百分比")]),t._v(" "),_("li",[_("code",[t._v("wa")]),t._v("：IO等待消耗的CPU百分比")])])]),t._v(" "),_("li",[t._v("Mem\n"),_("ul",[_("li",[_("code",[t._v("total")]),t._v("：物理内存总量")]),t._v(" "),_("li",[_("code",[t._v("free")]),t._v("：空闲物理内存总量")]),t._v(" "),_("li",[_("code",[t._v("used")]),t._v("：已用物理内存总量")]),t._v(" "),_("li",[_("code",[t._v("buff")]),t._v("：用作内核缓存内存总量")])])]),t._v(" "),_("li",[t._v("Swap\n"),_("ul",[_("li",[_("code",[t._v("total")]),t._v("：虚拟内存总量")]),t._v(" "),_("li",[_("code",[t._v("free")]),t._v("：空闲虚拟内存总量")]),t._v(" "),_("li",[_("code",[t._v("used")]),t._v("：已用虚拟内存总量")])])])]),t._v(" "),_("h4",{attrs:{id:"_2-1-4-实例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-实例"}},[t._v("#")]),t._v(" 2.1.4 实例")]),t._v(" "),_("h5",{attrs:{id:"_2-1-4-1-默认top"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-1-默认top"}},[t._v("#")]),t._v(" 2.1.4.1 默认top")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401142646239.png",alt:"image-20220401142646239"}})]),t._v(" "),_("h3",{attrs:{id:"_2-2-mpstat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-mpstat"}},[t._v("#")]),t._v(" 2.2 mpstat")]),t._v(" "),_("h4",{attrs:{id:"_2-2-1-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-简介"}},[t._v("#")]),t._v(" 2.2.1 简介")]),t._v(" "),_("p",[t._v("mpstat命令 指令主要用于多CPU环境下，它显示各个可用CPU的状态系你想。")]),t._v(" "),_("h4",{attrs:{id:"_2-2-2-语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-语法"}},[t._v("#")]),t._v(" 2.2.2 语法：")]),t._v(" "),_("div",{staticClass:"language-erlang extra-class"},[_("pre",{pre:!0,attrs:{class:"language-erlang"}},[_("code",[_("span",{pre:!0,attrs:{class:"token atom"}},[t._v("mpstat")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),_("p",[t._v("选项：")]),t._v(" "),_("div",{staticClass:"language-css extra-class"},[_("pre",{pre:!0,attrs:{class:"language-css"}},[_("code",[t._v("-P：指定CPU编号。\n")])])]),_("p",[t._v("参数：")]),t._v(" "),_("ul",[_("li",[t._v("间隔时间：每次报告的间隔时间（秒）；")]),t._v(" "),_("li",[t._v("次数：显示报告的次数。")])]),t._v(" "),_("h4",{attrs:{id:"_2-2-3-示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-示例"}},[t._v("#")]),t._v(" 2.2.3 示例")]),t._v(" "),_("p",[t._v("ALL表示显示所有CPUs，也可以指定某个CPU；2表示刷新间隔。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401143304219.png",alt:"image-20220401143304219"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);