(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{921:function(t,s,a){"use strict";a.r(s);var e=a(26),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"minio对象存储的元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minio对象存储的元数据"}},[t._v("#")]),t._v(" Minio对象存储的元数据")]),t._v(" "),a("h2",{attrs:{id:"_1-文件存储vs块存储vs对象存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件存储vs块存储vs对象存储"}},[t._v("#")]),t._v(" 1. 文件存储VS块存储VS对象存储")]),t._v(" "),a("p",[a("strong",[t._v("文件、块和对象是三种以不同的方式来保存、整理和呈现数据的存储格式")]),t._v("。这些格式各有各的功能和限制。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("文件存储：")]),t._v(" "),a("p",[t._v("会以"),a("strong",[t._v("文件和文件夹")]),t._v("的层次结构来整理和呈现数据；")])]),t._v(" "),a("li",[a("p",[t._v("块存储会：")]),t._v(" "),a("p",[a("strong",[t._v("将数据拆分到任意划分且大小相同")]),t._v("的卷中；")])]),t._v(" "),a("li",[a("p",[t._v("对象存储：")]),t._v(" "),a("p",[t._v("会管理数据并将其链接至"),a("strong",[t._v("关联的元数据")]),t._v("。")]),t._v(" "),a("p",[t._v("元数据包括 account（用户）， bucket， bucket index， Object 的 tag等信息")])])]),t._v(" "),a("h2",{attrs:{id:"_2-对象存储的元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-对象存储的元数据"}},[t._v("#")]),t._v(" 2. 对象存储的元数据")]),t._v(" "),a("p",[t._v("在对象存储里，元数据包括 account（用户）， bucket， bucket index等信息。Minio没有独立的元数据服务器，这个和GlusterFs的架构设计很类似，在minio里都保存在底层的本地文件系统里。")]),t._v(" "),a("p",[t._v("在本地文件系统里，一个bucket对应本地文件系统中的一个目录。一个对象对应bucket目录下的一个目录（在EC的情况下对应多个part文件）。目录下保存者对象相关的数据和元数据。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220721225001273.png",alt:"image-20220721225001273"}}),t._v(" "),a("p",[t._v("如上图所示：在Erasure Set中有4个磁盘：Disk1，Disk2，Disk3，Disk4，四个磁盘组成一个Erasure Set。每个bucket对应一个相应桶名称的目录，每个对象对应bucket的一个目录：目录里保存着对应的数据和元数据文件。")]),t._v(" "),a("p",[t._v("创建bucket的元数据操作：对于Erasure Set(2+2)为例：创建一个bucket，对应底层文件系统的4次目录创建。创建一个文件，需要对应底层4次目录创建，8次文件创建操作。对于小文件，数据和元数据都保存在meta文件中，也需要4次文件创建操作。"),a("strong",[t._v("由此可知，minio对应大量小文件的性能非常差。")])]),t._v(" "),a("h2",{attrs:{id:"_3-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实例"}},[t._v("#")]),t._v(" 3. 实例")]),t._v(" "),a("p",[t._v("对于小文件，"),a("strong",[t._v("数据和元数据都同时保存在对应的xl.meta的文件中")]),t._v("。对应大文件的写入，会创建相应的目录，该目录下是对应的part的数据文件和元数据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220721225520501.png",alt:"image-20220721225520501"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220721225531228.png",alt:"image-20220721225531228"}})]),t._v(" "),a("p",[t._v("由图3可知：当前集群中有2个bucket：test1和test2。 test1中有3个对象：分别是x，y，wget-log三个对象。x是30M的大文件，通过multipart上传到集群中，有2个part，分别为part.1和part.2文件。wget-log文件是一个小文件，大小为357.9KB.")]),t._v(" "),a("p",[t._v("通过图4：可以清晰的看到，每个bucket对应一个同名本地目录，每个对象也对应一个同名的目录，下面存数据和元数据。对应小文件，数据和元数据都保存在 xl.meta的元数据文件中。")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/374939519",target:"_blank",rel:"noopener noreferrer"}},[t._v("MinIO对象存储介绍"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);