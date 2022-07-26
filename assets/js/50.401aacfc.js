(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{426:function(t,s,a){"use strict";a.r(s);var e=a(26),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apache的commons-io学习使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache的commons-io学习使用"}},[t._v("#")]),t._v(" Apache的Commons-IO学习使用")]),t._v(" "),a("h2",{attrs:{id:"_1-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[t._v("#")]),t._v(" 1. 概述")]),t._v(" "),a("p",[t._v("Commons IO是针对开发IO流功能的工具类库。common-io 的架构如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211016134906213.png",alt:"image-20211016134906213"}})]),t._v(" "),a("h2",{attrs:{id:"_2-fileutils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-fileutils"}},[t._v("#")]),t._v(" 2. "),a("strong",[t._v("FileUtils")])]),t._v(" "),a("p",[t._v("FileUtils类包含使用File对象的工具方法。包括读写、复制和比较等等。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-读文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-读文件"}},[t._v("#")]),t._v(" 2.1 读文件")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),t._v(" file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/application.properties"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" lines "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLines")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n       "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-2-读取文件大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-读取文件大小"}},[t._v("#")]),t._v(" 2.2 读取文件大小")]),t._v(" "),a("p",[t._v("byteCountToDisplaySize：挺人性化的一个方法，可以吧字节数组的长度，转化成用户良好的单位，如EB、GB、MB、KB、bytes等等")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" in1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://commons.apache.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("byteCountToDisplaySize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//26 KB")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-3-其他常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-其他常用操作"}},[t._v("#")]),t._v(" 2.3 其他常用操作")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("checksum、checksumCRC32：类似于校验MD5和。如")]),t._v(" "),a("p",[a("code",[t._v("long csum = FileUtils.checksum(file, new CRC32()).getValue();")]),t._v(",一般下载来一个文件后，为了安全可以校验一把")])]),t._v(" "),a("li",[a("p",[t._v("cleanDirectory：把指定文件夹里面的东西全部删除掉")])]),t._v(" "),a("li",[a("p",[t._v("contentEquals：依赖于IOUtils.contentEquals")])]),t._v(" "),a("li",[a("p",[t._v("convertFileCollectionToFileArray：把File的集合转换为File的数组")])]),t._v(" "),a("li",[a("p",[t._v("copyDirectory(srcDir,destDir,FileFilter)：吧src的文件夹内容copy（或者剪切）到dest里面，可以使用FileFilter过滤")])]),t._v(" "),a("li",[a("p",[t._v("copyFile：可以一个文件copy到另外一个文件，也可以copy到outputStream里面。")])]),t._v(" "),a("li",[a("p",[t._v("copyFileToDirectory：")])]),t._v(" "),a("li",[a("p",[t._v("copyInputStreamToFile：")])]),t._v(" "),a("li",[a("p",[t._v("copyURLToFile：")])]),t._v(" "),a("li",[a("p",[t._v("deleteDirectory：递归删除这个文件夹里面的所有东西（包括文件夹自己）")])]),t._v(" "),a("li",[a("p",[t._v("deleteQuietly：既可以删除文件，也可以递归删除文件夹")])]),t._v(" "),a("li",[a("p",[t._v("directoryContains：指定文件夹下是否包含某个文件")])]),t._v(" "),a("li",[a("p",[t._v("forceDelete：强制删除一个文件。如果是文件夹，也会递归删除掉。")])]),t._v(" "),a("li",[a("p",[t._v("forceMkdir：强制创建一个目录")])]),t._v(" "),a("li",[a("p",[t._v("getTempDirectoryPath：拿到IO的临时文件夹路径")])]),t._v(" "),a("li",[a("p",[t._v("isFileNewer、isFileOlder：判断该文件的最后修改时间，是否新于给定的Date时间（或者给定文件的lastModified）")])]),t._v(" "),a("li",[a("p",[t._v("listFiles、listFilesAndDirs：拿到指定文件夹下所有的文件")])]),t._v(" "),a("li",[a("p",[t._v("moveDirectory、moveFile")])]),t._v(" "),a("li",[a("p",[t._v("openInputStream：效果同new FileInputStream")])]),t._v(" "),a("li",[a("p",[t._v("openOutputStream：同上")])]),t._v(" "),a("li",[a("p",[t._v("readFileToByteArray、readFileToString、readLines")])]),t._v(" "),a("li",[a("p",[t._v("sizeOf、sizeOfAsBigInteger、：拿到文件/文件夹的大小")])]),t._v(" "),a("li",[a("p",[t._v("sizeOfDirectory、sizeOfDirectoryAsBigInteger")])]),t._v(" "),a("li",[a("p",[t._v("toFile（URL url）：把网络上的资源字节编程一个文件")])]),t._v(" "),a("li",[a("p",[t._v("write、writeByteArrayToFile、writeLines、writeStringToFile：把传入的data串写入到File里面")])])]),t._v(" "),a("h2",{attrs:{id:"_3-ioutils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ioutils"}},[t._v("#")]),t._v(" 3. IOUtils")]),t._v(" "),a("p",[t._v("IOUtils包含处理读、写和复制的工具方法。方法对InputStream、OutputStream、Reader和Writer起作用。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-常用操作"}},[t._v("#")]),t._v(" 3.1 常用操作")]),t._v(" "),a("ul",[a("li",[t._v("buffer：一句话可以吧inputStream、outputStream、Reader、Witter等包装成带缓冲区的流，提高效率")]),t._v(" "),a("li",[t._v("closeQuietly：可以关闭各种流、socket等任何closeable的实例（不过官方推荐使用try-with-resources来代替）")]),t._v(" "),a("li",[t._v("contentEquals：比较两个InputStream或者两个Reader里面的内容（字节流）是否完全相同")]),t._v(" "),a("li",[t._v("copy：流的互相拷贝。可以将输入流拷到输出流。"),a("code",[t._v("copy(final InputStream input, final OutputStream output, final int bufferSize)")]),t._v(",Reader拷贝到Writer等等")]),t._v(" "),a("li",[t._v("copyLarge：当你的流拷贝的是大文件（一般大于2G级别），请使用此方法拷贝")]),t._v(" "),a("li",[t._v("read、readFully：把输入流的东西读取添加到第二个参数中的字节数组里")]),t._v(" "),a("li",[t._v("readLines：不解释")]),t._v(" "),a("li",[t._v("resourceToByteArray、resourceToString：直接传入一个文件的路径，读取进来")]),t._v(" "),a("li",[t._v("toBufferedInputStream：把普通的inputStream转换成带缓冲区的，返回一个新的InputStream")]),t._v(" "),a("li",[t._v("toByteArray：吧输入流转换到字节数组")]),t._v(" "),a("li",[t._v("toCharArray：")]),t._v(" "),a("li",[t._v("toInputStream：吧字符、字符串等等直接读到流里")]),t._v(" "),a("li",[t._v("toString：强大的方法，可以吧各种输出流读成一个串")]),t._v(" "),a("li",[t._v("write、writeChunked、writeLines：把传入的字节数组，写入到输出流里（可指定编码）")])]),t._v(" "),a("h2",{attrs:{id:"_4-filenameutils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-filenameutils"}},[t._v("#")]),t._v(" 4. FilenameUtils")]),t._v(" "),a("p",[t._v("FilenameUtils类包含工具方法不需要使用File对象就可以操作文件名。该类致力于屏蔽Unix和Windows之间的不同，避免这些环境之间的转换（例如，从开发到生产）。  开发在windows、生产在Linux")]),t._v(" "),a("p",[t._v("一般使用较少，这里不做过多介绍.")]),t._v(" "),a("h2",{attrs:{id:"_5-lineiterator-行迭代器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-lineiterator-行迭代器"}},[t._v("#")]),t._v(" 5. LineIterator：行迭代器")]),t._v(" "),a("p",[t._v("提供灵活的方式使用一个基于行的文件。可以直接，或通过FileUtils或IOUtils的工厂方法创建实例。推荐使用模式：")]),t._v(" "),a("p",[t._v("备注：也是需要close的")]),t._v(" "),a("h2",{attrs:{id:"_6-filefilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-filefilter"}},[t._v("#")]),t._v(" 6.Filefilter")]),t._v(" "),a("p",[t._v("包含IOFileFilter、FilenameFilter等。可以在copy、remove等等操作的时候，对文件进行各种过滤行为")]),t._v(" "),a("p",[t._v("此包自带一些常用的Filter如：AgeFileFilter、CanReadFileFilter、CanWriteFileFilter、DirectoryFileFilter、EmptyFileFilter、HiddenFileFilter等等。基本能满足我们所有需求")]),t._v(" "),a("h2",{attrs:{id:"_7-比较器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-比较器"}},[t._v("#")]),t._v(" 7.比较器")]),t._v(" "),a("h4",{attrs:{id:"比如按照文件名倒序、文件大小倒序这种需求-用此比较器会非常方便。也内置了很多的比较器实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比如按照文件名倒序、文件大小倒序这种需求-用此比较器会非常方便。也内置了很多的比较器实现"}},[t._v("#")]),t._v(" 比如按照文件名倒序、文件大小倒序这种需求，用此比较器会非常方便。也内置了很多的比较器实现")]),t._v(" "),a("p",[t._v("如：SizeFileComparator、ReverseComparator、LastModifiedFileComparator、ExtensionFileComparator等等")])])}),[],!1,null,null,null);s.default=n.exports}}]);