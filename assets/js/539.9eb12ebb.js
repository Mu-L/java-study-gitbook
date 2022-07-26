(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{917:function(t,a,s){"use strict";s.r(a);var n=s(26),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"minio分布式集群搭建部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minio分布式集群搭建部署"}},[t._v("#")]),t._v(" Minio分布式集群搭建部署")]),t._v(" "),s("h2",{attrs:{id:"_1-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),s("p",[t._v("分布式 Minio 可以让你将多块硬盘或者多台服务器组成一个对象存储服务。由于硬盘分布在不同的节点上，分布式 Minio 避免了单点故障。MinioMinio分布式模式可以帮助你搭建一个高可用的对象存储服务，你可以使用这些存储设备，而不用考虑其真实物理位置。")]),t._v(" "),s("h2",{attrs:{id:"_2-minio分布式部署的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-minio分布式部署的优势"}},[t._v("#")]),t._v(" 2. Minio分布式部署的优势")]),t._v(" "),s("h3",{attrs:{id:"_2-1-数据保护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-数据保护"}},[t._v("#")]),t._v(" 2.1 数据保护")]),t._v(" "),s("ul",[s("li",[t._v("分布式 Minio 采用纠删码来防范多个节点宕机和位衰减。")]),t._v(" "),s("li",[t._v("分布式 Minio 至少需要 4 个节点（4台服务器），使用分布式 Minio 就 自动引入了纠删码功能。")]),t._v(" "),s("li",[t._v("纠删码是一种恢复丢失和损坏数据的数学算法， Minio 采用 Reed-Solomon code 将对象拆分成 N/2 数据和 N/2 奇偶校验块。 这就意味着如果是 12 块盘，一个对象会被分成 6 个数据块、6 个奇偶校验块，你可以丢失任意 6 块盘（不管其是存放的数据块还是奇偶校验块），你仍可以从剩下的盘中的数据进行恢复。")]),t._v(" "),s("li",[t._v("纠删码的工作原理和 RAID 或者复制不同，像 RAID6 可以在损失两块盘的情况下不丢数据，而 Minio 纠删码可以在丢失一半的盘的情况下，仍可以保证数据安全。 而且 Minio 纠删码是作用在对象级别，可以一次恢复一个对象，而RAID 是作用在卷级别，数据恢复时间很长。 Minio 对每个对象单独编码，存储服务一经部署，通常情况下是不需要更换硬盘或者修复。Minio 纠删码的设计目标是为了性能和尽可能的使用硬件加速。")]),t._v(" "),s("li",[t._v("位衰减又被称为数据腐化 Data Rot、无声数据损坏 Silent Data Corruption ，是目前硬盘数据的一种严重数据丢失问题。硬盘上的数据可能会神不知鬼不觉就损坏了，也没有什么错误日志。正所谓明枪易躲，暗箭难防，这种背地里犯的错比硬盘直接故障还危险。 所以 Minio 纠删码采用了高速 HighwayHash 基于哈希的校验和来防范位衰减。")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-高可用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-高可用"}},[t._v("#")]),t._v(" 2.2 高可用")]),t._v(" "),s("ul",[s("li",[t._v("单机 Minio 服务存在单点故障，相反，如果是一个 N 节点的分布式 Minio ,只要有 N/2 节点在线，你的数据就是安全的。不过你需要至少有 N/2+1 个节点来创建新的对象。")]),t._v(" "),s("li",[t._v("例如，一个 8 节点的 Minio 集群，每个节点一块盘，就算 4 个节点宕机，这个集群仍然是可读的，不过你需要 5 个节点才能写数据。")])]),t._v(" "),s("h3",{attrs:{id:"_2-3-限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-限制"}},[t._v("#")]),t._v(" 2.3 限制")]),t._v(" "),s("ul",[s("li",[t._v("分布式 Minio 单租户存在最少 4 个盘最多 16 个盘的限制（受限于纠删码）。这种限制确保了 Minio 的简洁，同时仍拥有伸缩性。如果你需要搭建一个多租户环境，你可以轻松的使用编排工具（Kubernetes）来管理多个Minio实例。")]),t._v(" "),s("li",[t._v("注意，只要遵守分布式 Minio 的限制，你可以组合不同的节点和每个节点几块盘。比如，你可以使用 2 个节点，每个节点 4 块盘，也可以使用 4 个节点，每个节点两块盘，诸如此类。")])]),t._v(" "),s("h3",{attrs:{id:"_2-4-一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-一致性"}},[t._v("#")]),t._v(" 2.4 一致性")]),t._v(" "),s("ul",[s("li",[t._v("Minio 在分布式和单机模式下，所有读写操作都严格遵守 read-after-write 一致性模型。")])]),t._v(" "),s("h2",{attrs:{id:"minio分布式集群搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minio分布式集群搭建"}},[t._v("#")]),t._v(" Minio分布式集群搭建")]),t._v(" "),s("h3",{attrs:{id:"_3-1-环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-环境准备"}},[t._v("#")]),t._v(" 3.1 环境准备")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("节点")]),t._v(" "),s("th",[t._v("目录")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("192.168.1.1")]),t._v(" "),s("td",[t._v("/data/minio/data")])]),t._v(" "),s("tr",[s("td",[t._v("192.168.1.2")]),t._v(" "),s("td",[t._v("/data/minio/data")])]),t._v(" "),s("tr",[s("td",[t._v("192.168.1.3")]),t._v(" "),s("td",[t._v("/data/minio/data")])]),t._v(" "),s("tr",[s("td",[t._v("192.168.1.4")]),t._v(" "),s("td",[t._v("/data/minio/data")])])])]),t._v(" "),s("p",[t._v("从"),s("a",{attrs:{href:"https://dl.min.io/server/minio/release/linux-amd64/minio",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("获取Minio！")]),t._v(" "),s("h3",{attrs:{id:"_3-2-目录创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-目录创建"}},[t._v("#")]),t._v(" 3.2 目录创建")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /data/minio/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("run,data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /etc/minio\n")])])]),s("p",[t._v("run：启动脚本及二进制文件目录；\ndata：数据存储目录；\n/etc/minio：配置文件目录；")]),t._v(" "),s("h3",{attrs:{id:"_3-3-集群启动文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-集群启动文件"}},[t._v("#")]),t._v(" 3.3 集群启动文件")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /data/minio/run/run.sh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MINIO_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Minio\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MINIO_SECRET_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Test1234"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n \n/data/minio/run/minio server --config-dir /etc/minio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nhttp://192.168.99.1/data/minio/data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nhttp://192.168.99.2/data/minio/data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nhttp://192.168.99.3/data/minio/data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nhttp://192.168.99.4/data/minio/data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("MINIO_ACCESS_KEY")]),t._v("：用户名，长度最小是5个字符；")]),t._v(" "),s("li",[s("code",[t._v("MINIO_SECRET_KEY")]),t._v("：密码，密码不能设置过于简单，不然minio会启动失败，长度最小是8个字符；")]),t._v(" "),s("li",[s("code",[t._v("–config-dir")]),t._v("：指定集群配置文件目录；")])]),t._v(" "),s("h3",{attrs:{id:"_3-4-配置为系统服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-配置为系统服务"}},[t._v("#")]),t._v(" 3.4 配置为系统服务")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /usr/lib/systemd/system/minio.service\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Minio "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Documentation")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://docs.minio.io/\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WorkingDirectory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/minio/run/\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/minio/run/run.sh\n \n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on-failure\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RestartSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n")])])]),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("将minio二进制文件上传到"),s("code",[t._v("/data/minio/run")]),t._v("目录！")])]),t._v(" "),s("li",[s("strong",[t._v("给所有涉及到的文件或目录添加权限！")])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /data/minio/run/minio "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /data/minio/run/run.sh\n")])])]),s("h3",{attrs:{id:"_3-5-启动集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-启动集群"}},[t._v("#")]),t._v(" 3.5 启动集群")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ systemctl daemon-reload\n$ systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" minio "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" systemctl start minio\n")])])]),s("h3",{attrs:{id:"_3-6-代理集群-nginx负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-代理集群-nginx负载均衡"}},[t._v("#")]),t._v(" 3.6 代理集群（nginx负载均衡）")]),t._v(" "),s("p",[t._v("生产环境需要使用Nginx将集群地址进行代理，对外统一入口！")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".99")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".99")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".99")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".99")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client_max_body_size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n")])])]),s("h3",{attrs:{id:"_3-7-访问测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-访问测试"}},[t._v("#")]),t._v(" 3.7 访问测试")]),t._v(" "),s("p",[t._v("浏览器访问minio集群代理地址+9000端口，用户名密码为上文中启动文件run.sh中我们设置的！")]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/lvzhenjiang/p/14943939.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minio分布式集群搭建部署"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);