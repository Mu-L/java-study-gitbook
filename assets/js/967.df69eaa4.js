(window.webpackJsonp=window.webpackJsonp||[]).push([[967],{1345:function(t,e,a){"use strict";a.r(e);var _=a(26),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jmeter函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmeter函数"}},[t._v("#")]),t._v(" JMeter函数")]),t._v(" "),a("h2",{attrs:{id:"_1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),a("p",[t._v("在性能测试中为了真实模拟用户请求，往往我们需要让提交的表单内容每次都发生变化，这个过程叫做参数化。JMeter配置元件与前置处理器都能帮助我们进行参数化，但是都有局限性，为了帮助我们能够更好地进行参数化，JMeter提供了一组函数来帮助我们参数化生成需要的数据，这些函数可以函数助手面板来进行编辑。当然函数助手的功能不仅仅是做参数化，还能帮助我们运算、字符编码格式转换、获取运行时参数等功能。")]),t._v(" "),a("p",[t._v("JMeter提供了很多函数，如果能够熟练使用，可以为脚本带来很多方便。可以很方便的实现一些小功能，几乎可以用于测试计划中的任何元件。")]),t._v(" "),a("p",[t._v("JMeter函数是一种特殊值，可用于除测试计划外的任何组件。")]),t._v(" "),a("h3",{attrs:{id:"_1-1-函数调用的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-函数调用的格式"}},[t._v("#")]),t._v(" 1.1 函数调用的格式")]),t._v(" "),a("p",[t._v("函数调用的格式如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("${__functionName(var1,var2,var3)}\n")])])]),a("p",[t._v("其中，“__”是两个英文半角的下划线，functionName为函数名，括号内是函数的参数，无参数时可以不用括号，如${__UUID}，其中参数视不同函数而定。")]),t._v(" "),a("blockquote",[a("p",[t._v("Tips:")]),t._v(" "),a("p",[t._v("如果参数包含逗号，那么一定要使用“\\”来转义，否则JMeter会把它当作一个参数分隔符")]),t._v(" "),a("p",[t._v("实际使用时，可通过函数助手对话框选择函数，设置参数后，点击生成按钮生成函数字符串。")])]),t._v(" "),a("h2",{attrs:{id:"_2-jmeter-中的常用函数主要分为如下几类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-jmeter-中的常用函数主要分为如下几类"}},[t._v("#")]),t._v(" 2. JMeter 中的常用函数主要分为如下几类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("函数类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("函数名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("函数作用")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("启用版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("脚本函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("__BeanShell")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("执行 beanshell 脚本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.X")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__javaScript")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("执行 js 脚本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("字符串操作函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("__split")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("根据分隔符拆分字符串为多个变量")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.0.2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__changeCase")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("转换大小写")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__regexFunction")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用正则表达式解析之前的响应结果")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.X")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("属性信息函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("__isPropDefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("判断属性是否存在")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4.0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__property")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("对多个整数求和")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.8.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__P")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("简化的属性函数，用于与命令行上定义的属性一起使用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__setProperty")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("简化的属性函数，用于与命令行上定义的属性一起使用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("数据输入函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("__StringFromFile")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从文本文件中读取字符串，每次调用读取一行")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.9")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__FileToString")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("把文件读取成一个字符串，每次调用都是读取整个文件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__CSVRead")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回当前正在执行的线程的编号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__XPath")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用 XPath 语法匹配 XML文件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("数据计算函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("__counter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计数器函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.9")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__intSum")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("对多个整数求和")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.8.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__longSum")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("长整型求和")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.3.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__Random")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回指定最大值和最小值之间的随机整数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__RandomDate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回给定开始日期和结束日期值之间的随机日期")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3.3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_RandomString")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("根据给定的字符生成指定长度的随机字符串")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__UUID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通用唯一标识符函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("获取信息函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("__TestPlanName")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回当前测试计划的名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__threadGroupName")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回当前线程组的名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__threadNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回当前正在执行的线程的编号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.X")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__samplerName")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回当前请求的名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__log")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输出日志信息")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("__time")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("以多种格式返回当前时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("h2",{attrs:{id:"_3-脚本函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-脚本函数"}},[t._v("#")]),t._v(" 3. 脚本函数")]),t._v(" "),a("h3",{attrs:{id:"_3-1-beanshell函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-beanshell函数"}},[t._v("#")]),t._v(" "),a("strong",[t._v("3.1__BeanShell函数")])]),t._v(" "),a("p",[t._v("JMeter支持BeanShell脚本语言，JMeter函数助手中提供BeanShell函数支持，__BeanShell函数入参可以是BeanShell语法的程序语句或者BeanShell脚本文件。调出函数面板，我们在“值”中输入的是两个字符串相加，然后点击“生成”按钮，就会生成一串以$开头的表达式，表达式在请求（Sampler）中可以直接调用。")]),t._v(" "),a("h4",{attrs:{id:"_3-1-1-初识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-初识"}},[t._v("#")]),t._v(" 3.1.1 初识")]),t._v(" "),a("p",[t._v("我们先来看看这个**__BeanShell** 长得是啥样子，路径：函数助手 > 选择**__BeanShell** ，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630142504839.png",alt:"image-20220630142504839"}})]),t._v(" "),a("h4",{attrs:{id:"_3-1-2-关键参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-关键参数说明"}},[t._v("#")]),t._v(" 3.1.2 关键参数说明：")]),t._v(" "),a("p",[t._v("**它有两个参数，**第一个参数是要执行的语句，可以是beanshell语句或者是文件地址，是必选参数；第二个参数是保存结果的变量名称，非必选参数。")]),t._v(" "),a("h4",{attrs:{id:"_3-1-3-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-实例"}},[t._v("#")]),t._v(" 3.1.3 实例")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("${__BeanShell(123456*789)}：返回97406784，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630142814343.png",alt:"image-20220630142814343"}})])]),t._v(" "),a("li",[a("p",[t._v('${__BeanShell(source("function.bsh"))}：会执行外部脚本function.bsh，并返回结果，如下图所示：')])])]),t._v(" "),a("p",[t._v("​\t"),a("strong",[t._v('文件里代码：System.out.print("bjhg");')])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630142914650.png",alt:"image-20220630142914650"}})]),t._v(" "),a("p",[t._v("返回结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630142933025.png",alt:"image-20220630142933025"}})]),t._v(" "),a("h4",{attrs:{id:"_3-1-4-与beanshell元件比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-与beanshell元件比较"}},[t._v("#")]),t._v(" 3.1.4 与beanshell元件比较：")]),t._v(" "),a("p",[t._v("该函数与beanshell元件(beanshell sampler、beanshell preprocess等)作用是一样的，只是beanshell函数更常用于一些简单的判断或计算等，可以把少量的脚本放在函数中直接赋值给一个变量，而不用总是添加beanshell元件。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-javascript"}},[t._v("#")]),t._v(" 3.2 "),a("code",[t._v("__javaScript")])]),t._v(" "),a("p",[t._v("用来执行 "),a("code",[t._v("JavaScript")]),t._v(" 脚本片段，并返回结果值。")]),t._v(" "),a("p",[t._v("该函数会调用标准的 JavaScript 解释器，还可以直接调用 jmeter 的内置函数。")]),t._v(" "),a("p",[t._v("注意：文本字符串要添加必要的引号。如果表达式中有逗号，要确保对其转义。")]),t._v(" "),a("p",[t._v("例如：{sp}'.slice(7,99999))}，对 7 之后的逗号进行了转义。")]),t._v(" "),a("h4",{attrs:{id:"_3-2-1-初识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-初识"}},[t._v("#")]),t._v(" 3.2.1 初识")]),t._v(" "),a("p",[t._v("我们先来看看这个**"),a("code",[t._v("__javaScript")]),a("strong",[t._v("长得是啥样子，路径：函数助手 > 选择")]),a("code",[t._v("__javaScript")]),t._v("**，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630143544586.png",alt:"image-20220630143544586"}})]),t._v(" "),a("h4",{attrs:{id:"_3-2-2-关键参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-关键参数说明"}},[t._v("#")]),t._v(" 3.2.2 关键参数说明：")]),t._v(" "),a("p",[t._v("第一个参数：JavaScript代码片段,待执行的JavaScript代码片段。例如：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("new Date()：返回当前日期和时间")])]),t._v(" "),a("li",[a("p",[t._v("Math.floor(Math.random()*(${maxRandom}，+1))：在0 和变量maxRandom之间的随机数")])]),t._v(" "),a("li",[a("p",[t._v('minRandom+Math.floor(Math.random()∗({maxRandom}-minRandom+1))：在变量minRandom和maxRandom之间的随机数"')])])]),t._v(" "),a("p",[t._v("第二个参数：变量名，重用函数计算值的引用名")]),t._v(" "),a("p",[t._v("请记得为文本字符串添加必要的引号。另外，如果表达式中有逗号，请确保对其转义。例如，Missing open brace for subscript{sp}'.slice(7,99999))}，对7之后的逗号进行了转义。")]),t._v(" "),a("h4",{attrs:{id:"_3-2-3-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-实例"}},[t._v("#")]),t._v(" 3.2.3 实例")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630143729036.png",alt:"image-20220630143729036"}})]),t._v(" "),a("h2",{attrs:{id:"_4-字符串操作函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-字符串操作函数"}},[t._v("#")]),t._v(" 4. 字符串操作函数")]),t._v(" "),a("h3",{attrs:{id:"_4-1-split"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-split"}},[t._v("#")]),t._v(" 4.1"),a("code",[t._v("__split")])]),t._v(" "),a("p",[t._v("根据分隔符拆分字符串为多个变量。")]),t._v(" "),a("p",[t._v("当两个分隔符中间没有字符时，返回 "),a("code",[t._v("?")]),t._v("。")]),t._v(" "),a("p",[t._v("被拆分出来的字符串，保存在变量中，类似这样：VAR1,{VAR_2} ...，总个数是")]),t._v(" "),a("p",[t._v("如果最后一个字符是分隔符，也会返回 "),a("code",[t._v("?")]),t._v("。")]),t._v(" "),a("p",[t._v('函数__split会通过分隔符来拆分传递给它的字符串，并返回原始的字符串。如果分隔符紧挨在一起，那么函数就会以变量值的形式返回"?"。')]),t._v(" "),a("p",[t._v('拆分出来的字符串，以变量${VAR_1}、{VAR_2}…以此类推的形式加以返回。JMeter 2.1.2及其以后版本，拖尾的分隔符会被认为缺少一个变量，会返回"?"。')]),t._v(" "),a("p",[t._v("另外，为了更好地配合ForEach控制器，现在__split会删除第一个不用的变量（由前一次分隔符所设置）。")]),t._v(" "),a("h4",{attrs:{id:"_4-1-1-初识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-初识"}},[t._v("#")]),t._v(" 4.1.1 初识")]),t._v(" "),a("p",[t._v("路径：函数助手 > 选择**"),a("code",[t._v("__split")]),t._v("**，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630143917339.png",alt:"image-20220630143917339"}})]),t._v(" "),a("h4",{attrs:{id:"_4-1-2-关键参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-关键参数说明"}},[t._v("#")]),t._v(" 4.1.2 关键参数说明：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("待拆分字符串")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("一个待拆分字符串，例如“a|b|c”")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("是")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("变量名")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重用函数计算值的引用名")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("分隔符")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("分隔符，例如“|”。如果省略了此参数，函数会使用逗号做分隔符。需要注意的是，假如 要多此一举，明确指定使用逗号，需要对逗号转义，如“,”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")])])])]),t._v(" "),a("h4",{attrs:{id:"_4-1-3-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-示例"}},[t._v("#")]),t._v(" 4.1.3 示例：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("定义字符串：\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VAR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a||c|"')]),t._v("\n\n调用 split 函数：\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n返回 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a||c|"')]),t._v("，并生成如下变量：\nVAR_n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VAR_1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("a \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VAR_2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VAR_3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VAR_4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VAR_5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630144052623.png",alt:"image-20220630144052623"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220630144123299.png",alt:"image-20220630144123299"}})]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/inventory/1923/article/1704543",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jmeter(二十三) - 从入门到精通 - JMeter函数"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=l.exports}}]);