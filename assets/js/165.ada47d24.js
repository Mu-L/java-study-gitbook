(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{542:function(t,s,a){"use strict";a.r(s);var r=a(26),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oracle截取字符串substr、查找字符串位置instr、替换字符串replace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle截取字符串substr、查找字符串位置instr、替换字符串replace"}},[t._v("#")]),t._v(" Oracle截取字符串substr、查找字符串位置instr、替换字符串replace")]),t._v(" "),a("h2",{attrs:{id:"_1-截取字符串-substr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-截取字符串-substr"}},[t._v("#")]),t._v(" 1. 截取字符串：substr")]),t._v(" "),a("h3",{attrs:{id:"_1-1-substr-函数介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-substr-函数介绍"}},[t._v("#")]),t._v(" 1.1 substr 函数介绍")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("substr(str1,str2,str3)\n")])])]),a("ul",[a("li",[t._v("str1为目标字符串")]),t._v(" "),a("li",[t._v("str2是将要输出的子串的"),a("strong",[t._v("起点")])]),t._v(" "),a("li",[t._v("str3是将要输出的子串的"),a("strong",[t._v("长度")])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-示例"}},[t._v("#")]),t._v(" 1.2 示例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("例子：\nsubstr('ABCDEFG', 2, 3)   =   'BCD'    \nsubstr('ABCDEFG',   -2)   =   'FG'  --如果第二个参数为负数，那么将会从源串的尾部开始向前定位至负数的绝对值的位置\nsubstr('ABCDEFG',   -4)   =   'DEFG\n")])])]),a("h2",{attrs:{id:"_2-查找字符串位置-instr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查找字符串位置-instr"}},[t._v("#")]),t._v(" 2. "),a("strong",[t._v("查找字符串位置：instr")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-instr-函数介绍如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-instr-函数介绍如下"}},[t._v("#")]),t._v(" 2.1 instr 函数介绍如下：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("instr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" strSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startPos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" appearance  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("strSource :源字符串")]),t._v(" "),a("li",[t._v("str    :要查找的字符串.")]),t._v(" "),a("li",[t._v("startPos  :"),a("strong",[t._v("从哪个位置开始查找，默认为1。参数为正，从左到右开始检索，参数为负，从右到左检索。")])]),t._v(" "),a("li",[t._v("appearance :代表要查找第几次出现的str,默认为 1,不能为负。")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-示例"}},[t._v("#")]),t._v(" 2.2 示例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("例子：\ninstr('ABCDABCDAEF', 'AB');   -- 返回结果是：1，因为instr字符串索引从1开始，所以是1不是0\ninstr('ABCDABCDAEF', 'DA', 1, 2);   -- 返回结果是：8，返回第二次出现'DA'的位置\ninstr('A BCDABCDAEF', 'DA', 1, 2)；  -- 返回结果是：9，由于我在元字符串中加了一个空格，空格仍然算一个字符\n")])])]),a("h2",{attrs:{id:"_3-替换字符串-replace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-替换字符串-replace"}},[t._v("#")]),t._v(" 3. "),a("strong",[t._v("替换字符串：replace")])]),t._v(" "),a("h3",{attrs:{id:"_3-1-replace函数介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-replace函数介绍"}},[t._v("#")]),t._v(" 3.1 replace函数介绍")]),t._v(" "),a("p",[t._v("replace(str1, str2, str3)\n其表示的意思是：在str1中查找str2，凡是出现str2的地方，都替换成str3。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-示例"}},[t._v("#")]),t._v(" 3.2 示例")]),t._v(" "),a("p",[t._v("replace('ABCDEFG', 'CDE', 'cde');  -- 返回结果是：ABcdeFG\nreplace('ABCDEFG', 'CDE', '');   -- 返回结果是：ABFG，CDE被替换成空字符\nreplace('ABCDEFG', 'CDE');   -- 返回结果是：ABFG，当不存在第三个参数时，CDE直接被删掉------据此可以确定某个字符串在字符中出现的次数")]),t._v(" "),a("h2",{attrs:{id:"_4-replace扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-replace扩展"}},[t._v("#")]),t._v(" 4. "),a("strong",[t._v("replace扩展：")])]),t._v(" "),a("p",[t._v("确定某个字符串在字符中出现的次数。\n例子：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("select a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("* from tb_duty a where "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n为出现的次数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/big1989wmf/article/details/70144624",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle截取字符串substr、查找字符串位置instr、替换字符串replace"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.myexceptions.net/h/1369083.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ORACLE 查找某个字符最后一次出现的位置"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);