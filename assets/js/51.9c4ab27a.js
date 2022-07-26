(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{428:function(t,a,s){"use strict";s.r(a);var e=s(26),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hutool的io包之fileutil源码阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hutool的io包之fileutil源码阅读"}},[t._v("#")]),t._v(" Hutool的IO包之FileUtil源码阅读")]),t._v(" "),s("h2",{attrs:{id:"_1-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),s("p",[t._v("在IO操作中，文件的操作相对来说是比较复杂的，但也是使用频率最高的部分，我们几乎所有的项目中几乎都躺着一个叫做FileUtil或者FileUtils的工具类，我想Hutool应该将这个工具类纳入其中，解决用来解决大部分的文件操作问题。")]),t._v(" "),s("p",[t._v("总体来说，FileUtil类包含以下几类操作工具：")]),t._v(" "),s("ol",[s("li",[t._v("文件操作：包括文件目录的新建、删除、复制、移动、改名等")]),t._v(" "),s("li",[t._v("文件判断：判断文件或目录是否非空，是否为目录，是否为文件等等。")]),t._v(" "),s("li",[t._v("绝对路径：针对ClassPath中的文件转换为绝对路径文件。")]),t._v(" "),s("li",[t._v("文件名：主文件名，扩展名的获取")]),t._v(" "),s("li",[t._v("读操作：包括类似IoUtil中的getReader、readXXX操作")]),t._v(" "),s("li",[t._v("写操作：包括getWriter和writeXXX操作")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-设计思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-设计思路"}},[t._v("#")]),t._v(" 1.1 设计思路")]),t._v(" "),s("p",[t._v("在FileUtil中，方法名与Linux相一致，例如创建文件的方法并不是createFile，而是"),s("code",[t._v("touch")]),t._v("，这种统一对于熟悉Linux的人来说，大大提高了上手速度。当然，如果你不熟悉Linux，那FileUtil工具类的使用则是在帮助你学习Linux命令。这些类Linux命令的方法包括：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("ls")]),t._v(" 列出目录和文件")]),t._v(" "),s("li",[s("code",[t._v("touch")]),t._v(" 创建文件，如果父目录不存在也自动创建")]),t._v(" "),s("li",[s("code",[t._v("mkdir")]),t._v(" 创建目录，会递归创建每层目录")]),t._v(" "),s("li",[s("code",[t._v("del")]),t._v(" 删除文件或目录（递归删除，不判断是否为空），这个方法相当于Linux的delete命令")]),t._v(" "),s("li",[s("code",[t._v("copy")]),t._v(" 拷贝文件或目录")])]),t._v(" "),s("h2",{attrs:{id:"_2-fileutil-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-fileutil-使用"}},[t._v("#")]),t._v(" 2. FileUtil 使用")]),t._v(" "),s("h3",{attrs:{id:"_2-1-ls-列出目录和文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-ls-列出目录和文件"}},[t._v("#")]),t._v(" 2.1 "),s("code",[t._v("ls")]),t._v(" 列出目录和文件")]),t._v(" "),s("h4",{attrs:{id:"_2-1-1-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-源码"}},[t._v("#")]),t._v(" 2.1.1 源码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016205833483.png",alt:"image-20211016205833483"}})]),t._v(" "),s("h3",{attrs:{id:"_2-2-touch-创建文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-touch-创建文件"}},[t._v("#")]),t._v(" 2.2 "),s("code",[t._v("touch")]),t._v(" 创建文件")]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-源码"}},[t._v("#")]),t._v(" 2.2.1 源码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016210332293.png",alt:"image-20211016210332293"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016210402872.png",alt:"image-20211016210402872"}})]),t._v(" "),s("h3",{attrs:{id:"_2-3-mkdir-创建目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-mkdir-创建目录"}},[t._v("#")]),t._v(" 2.3 "),s("code",[t._v("mkdir")]),t._v(" 创建目录")]),t._v(" "),s("h4",{attrs:{id:"_2-3-1-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-源码"}},[t._v("#")]),t._v(" 2.3.1 源码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016210459317.png",alt:"image-20211016210459317"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016210516840.png",alt:"image-20211016210516840"}})]),t._v(" "),s("h3",{attrs:{id:"_2-4-del-删除文件或目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-del-删除文件或目录"}},[t._v("#")]),t._v(" 2.4 "),s("code",[t._v("del")]),t._v(" 删除文件或目录")]),t._v(" "),s("h4",{attrs:{id:"_2-4-1-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-源码"}},[t._v("#")]),t._v(" 2.4.1 源码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016210704576.png",alt:"image-20211016210704576"}})]),t._v(" "),s("h3",{attrs:{id:"_2-5-copy-拷贝文件或目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-copy-拷贝文件或目录"}},[t._v("#")]),t._v(" 2.5 "),s("code",[t._v("copy")]),t._v(" 拷贝文件或目录")]),t._v(" "),s("h4",{attrs:{id:"_2-5-1-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-源码"}},[t._v("#")]),t._v(" 2.5.1 源码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016210812825.png",alt:"image-20211016210812825"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016210908878.png",alt:"image-20211016210908878"}})]),t._v(" "),s("p",[t._v("拷贝内容的意思为源目录下的所有文件和目录拷贝到另一个目录下，而不拷贝源目录本身")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016210930992.png",alt:"image-20211016210930992"}})]),t._v(" "),s("p",[t._v("拷贝文件")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016211052720.png",alt:"image-20211016211052720"}})]),t._v(" "),s("h2",{attrs:{id:"_3-filetypeutil-文件类型判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-filetypeutil-文件类型判断"}},[t._v("#")]),t._v(" 3. FileTypeUtil-文件类型判断")]),t._v(" "),s("p",[t._v("在文件上传时，有时候我们需要判断文件类型。但是又不能简单的通过扩展名来判断（防止恶意脚本等通过上传到服务器上），于是我们需要在"),s("strong",[t._v("服务端通过读取文件的首部几个二进制位来判断常用的文件类型")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_3-1-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-使用"}},[t._v("#")]),t._v(" 3.1 使用")]),t._v(" "),s("p",[t._v("这个工具类使用非常简单，通过调用"),s("code",[t._v("FileTypeUtil.getType")]),t._v("即可判断，这个方法同时提供众多的重载方法，用于读取不同的文件和流。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d:/test.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileTypeUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出 jpg则说明确实为jpg文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-2-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-源码"}},[t._v("#")]),t._v(" 3.2 源码")]),t._v(" "),s("p",[t._v("判断文件类型")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016214101979.png",alt:"image-20211016214101979"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016214034559.png",alt:"image-20211016214034559"}})]),t._v(" "),s("p",[t._v("读取前28位")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016214012999.png",alt:"image-20211016214012999"}})]),t._v(" "),s("h2",{attrs:{id:"_4-文件监听-watchmonitor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-文件监听-watchmonitor"}},[t._v("#")]),t._v(" 4. 文件监听-WatchMonitor")]),t._v(" "),s("p",[t._v("很多时候我们需要监听一个文件的变化或者目录的变动，包括文件的创建、修改、删除，以及目录下文件的创建、修改和删除，在JDK7前我们只能靠轮询方式遍历目录或者定时检查文件的修改事件，这样效率非常低，性能也很差。因此在JDK7中引入了"),s("code",[t._v("WatchService")]),t._v("。不过考虑到其API并不友好，于是Hutool便针对其做了简化封装，使监听更简单，也提供了更好的功能，这包括：")]),t._v(" "),s("ul",[s("li",[t._v("支持多级目录的监听（WatchService只支持一级目录），可自定义监听目录深度")]),t._v(" "),s("li",[t._v("延迟合并触发支持（文件变动时可能触发多次modify，支持在某个时间范围内的多次修改事件合并为一个修改事件）")]),t._v(" "),s("li",[t._v("简洁易懂的API方法，一个方法即可搞定监听，无需理解复杂的监听注册机制。")]),t._v(" "),s("li",[t._v("多观察者实现，可以根据业务实现多个"),s("code",[t._v("Watcher")]),t._v("来响应同一个事件（通过WatcherChain）")])])])}),[],!1,null,null,null);a.default=i.exports}}]);