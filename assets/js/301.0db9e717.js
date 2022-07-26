(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{677:function(a,t,s){"use strict";s.r(t);var e=s(26),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"flyway兼容达梦数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flyway兼容达梦数据库"}},[a._v("#")]),a._v(" Flyway兼容达梦数据库")]),a._v(" "),s("h2",{attrs:{id:"_1-背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[a._v("#")]),a._v(" 1. 背景")]),a._v(" "),s("p",[a._v("公司项目需要兼容国产数据库达梦，达梦和oracle 相似度还是非常高的。绝大部分的sql语句都能共用。但是flyway 本身是不支持达梦的，但是不着急，flyway 本身是开源的，那么我们是否能将达梦适配到 oracle的flyway呢")]),a._v(" "),s("h2",{attrs:{id:"_2-源码下载导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-源码下载导入"}},[a._v("#")]),a._v(" 2. 源码下载导入")]),a._v(" "),s("h2",{attrs:{id:"_2-1-flyway-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-flyway-源码"}},[a._v("#")]),a._v(" 2.1 flyway 源码")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/flyway/flyway",target:"_blank",rel:"noopener noreferrer"}},[a._v("flyway源码地址"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("因公司项目之前是用6.3.3 版本，现在版本已经变化挺大了，所以还是使用tag 为6.3.3 的")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925101634465.png",alt:"image-20210925101634465"}})]),a._v(" "),s("h2",{attrs:{id:"_2-2-flyway-打包测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-flyway-打包测试"}},[a._v("#")]),a._v(" 2.2 flyway 打包测试")]),a._v(" "),s("p",[a._v("我们直接打包是不能直接打包成功的")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.8.1:compile (default-compile) on project flyway-core: Fatal error compiling\n")])])]),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925102032444.png",alt:"image-20210925102032444"}})]),a._v(" "),s("p",[a._v("网上的解释是，版本不一致，但按照他们的方法一个个设置，怎么都没用。")]),a._v(" "),s("p",[a._v("后面怀疑是idea 的问题，用mvn clean package 打包做测试")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925102307886.png",alt:"image-20210925102307886"}})]),a._v(" "),s("p",[a._v("结果发现mvn 的提示清晰多了")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("无效的标记: --release \n")])])]),s("h3",{attrs:{id:"_2-2-1-解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-解决办法"}},[a._v("#")]),a._v(" 2.2.1 解决办法")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("第一种： jdk 升级到 JDK9")]),a._v(" "),s("p",[a._v("不推荐，很多公司还是用jdk8")])]),a._v(" "),s("li",[s("p",[a._v("pom.xml 注释掉 "),s("code",[a._v("<release>8</release>")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925102554160.png",alt:"image-20210925102554160"}})])])]),a._v(" "),s("p",[a._v("这样打包就可以正常使用了")]),a._v(" "),s("h2",{attrs:{id:"_4-适配达梦"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-适配达梦"}},[a._v("#")]),a._v(" 4. 适配达梦")]),a._v(" "),s("h3",{attrs:{id:"_4-1-修改databasetype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-修改databasetype"}},[a._v("#")]),a._v(" 4.1 修改DatabaseType")]),a._v(" "),s("p",[a._v("org.flywaydb.core.internal.jdbc.DatabaseType类中")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("databaseProductName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Oracle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" ORACLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v('增加||databaseProductName.startsWith("DM")')]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("databaseProductName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Oracle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v("databaseProductName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"DM"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" ORACLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"_4-2-drivertype中添加dmdrivertype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-drivertype中添加dmdrivertype"}},[a._v("#")]),a._v(" 4.2 DriverType中添加dmDriverType")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DriverDataSource")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSource")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("enum")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DriverType")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ORACLE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"jdbc:oracle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"oracle.jdbc.OracleDriver"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("DM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"jdbc:dm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dm.jdbc.driver.DmDriver"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("h3",{attrs:{id:"_4-3-不校验版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-不校验版本"}},[a._v("#")]),a._v(" 4.3  不校验版本")]),a._v(" "),s("p",[a._v("我们要兼容达梦，达梦的版本是8.X 而 Oracle 是需要10.x 以上的，所以我们不校验版本")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Exception in thread "main" org.flywaydb.core.internal.exception.FlywayDbUpgradeRequiredException: Oracle upgrade required: Oracle 8.1 is outdated and no longer supported by Flyway. Flyway currently supports Oracle 10 and newer.\n\n')])])]),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921173026851.png",alt:"image-20210921173026851"}})]),a._v(" "),s("p",[a._v("因为我们达梦直接使用oracle 的语法，但是版本还是达梦的。所以我们直接注释掉。有两处")]),a._v(" "),s("ul",[s("li",[a._v("第一处为：")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ensureDatabaseIsRecentEnough")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" oldestSupportedVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//        if (!getVersion().isAtLeast(oldestSupportedVersion)) {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//            throw new FlywayDbUpgradeRequiredException(databaseType, computeVersionDisplayName(getVersion()),")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//                    computeVersionDisplayName(MigrationVersion.fromVersion(oldestSupportedVersion)));")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//        }")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("第二处为：")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Ensures this database it at least at recent as this version otherwise suggest upgrade to this higher edition of\n     * Flyway.\n     *\n     * @param oldestSupportedVersionInThisEdition The oldest supported version of the database by this edition of Flyway.\n     * @param editionWhereStillSupported          The edition of Flyway that still supports this version of the database,\n     *                                            in case it's too old.\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ensureDatabaseNotOlderThanOtherwiseRecommendUpgradeToFlywayEdition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" oldestSupportedVersionInThisEdition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                                                                                            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Edition")]),a._v(" editionWhereStillSupported"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//        if (!getVersion().isAtLeast(oldestSupportedVersionInThisEdition)) {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//            throw new FlywayEditionUpgradeRequiredException(")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//                    editionWhereStillSupported,")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//                    databaseType,")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//                    computeVersionDisplayName(getVersion()));")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//        }")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"_5-达梦测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-达梦测试"}},[a._v("#")]),a._v(" 5. 达梦测试")]),a._v(" "),s("h3",{attrs:{id:"_5-1-添加dm依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-添加dm依赖"}},[a._v("#")]),a._v(" 5.1 添加dm依赖")]),a._v(" "),s("div",{staticClass:"language-pom extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<dependency>\n    <groupId>com.dm</groupId>\n    <artifactId>DmJdbcDriver</artifactId>\n    <version>1.8.0</version>\n</dependency>\n")])])]),s("h3",{attrs:{id:"_5-2-添加达梦测试类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-添加达梦测试类"}},[a._v("#")]),a._v(" 5.2 添加达梦测试类")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MainTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Flyway")]),a._v(" flyway "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Flyway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dataSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"jdbc:dm://192.168.0.1:5236"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"root"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"123456"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//        第一步先执行baseline,之后才能执行migrate")]),a._v("\n        flyway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("baseline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//        flyway.migrate();")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"执行完了"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"_5-3-运行测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-运行测试"}},[a._v("#")]),a._v(" 5.3 运行测试")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921173515577.png",alt:"image-20210921173515577"}})]),a._v(" "),s("p",[a._v("也正常生成 "),s("code",[a._v("flyway_schema_history")])]),a._v(" "),s("h2",{attrs:{id:"_6-集成到自己项目中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-集成到自己项目中"}},[a._v("#")]),a._v(" 6. 集成到自己项目中")]),a._v(" "),s("h3",{attrs:{id:"_6-1-下载flyway-dm-6-3-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-下载flyway-dm-6-3-3"}},[a._v("#")]),a._v(" 6.1 下载flyway-dm-6.3.3")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zszdevelop/flyway-dm/releases/tag/flyway-6.3.3",target:"_blank",rel:"noopener noreferrer"}},[a._v("flyway-dm-6.3.3下载"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"_6-2-将文件放入lib中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-将文件放入lib中"}},[a._v("#")]),a._v(" 6.2  将文件放入lib中")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925103927972.png",alt:"image-20210925103927972"}})]),a._v(" "),s("h3",{attrs:{id:"_6-2-pom依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-pom依赖"}},[a._v("#")]),a._v(" 6.2  pom依赖")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- flyway--\x3e")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.flywaydb"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("flyway-core"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("0-SNAPSHOT"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("system"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("systemPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("${project.basedir}/lib/flyway-core-0-SNAPSHOT.jar"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("systemPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("h2",{attrs:{id:"_7-在flyway-commandline使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-在flyway-commandline使用"}},[a._v("#")]),a._v(" 7. 在flyway-commandline使用")]),a._v(" "),s("p",[a._v("我们使用方式可以是在项目中使用，还可以使用flyway-commandline 的方式。此方式更加方便")]),a._v(" "),s("h3",{attrs:{id:"_7-1-下载对应版本的flyway-commandline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-下载对应版本的flyway-commandline"}},[a._v("#")]),a._v(" 7.1 下载对应版本的flyway-commandline")]),a._v(" "),s("p",[a._v("我们改的源码是6.3.3 的，所以我们下载6.3.3 的flyway-commandline")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://repo1.maven.org/maven2/org/flywaydb/",target:"_blank",rel:"noopener noreferrer"}},[a._v("flywaydb下载"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"_7-2-添加达梦驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-添加达梦驱动"}},[a._v("#")]),a._v(" 7.2 添加达梦驱动")]),a._v(" "),s("p",[a._v("将达梦驱动放到 flyway-6.3.3->drivers->DmJdbcDriver18.jar")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211011222426034.png",alt:"image-20211011222426034"}})]),a._v(" "),s("h3",{attrs:{id:"_7-3-更改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-更改配置"}},[a._v("#")]),a._v(" 7.3  更改配置")]),a._v(" "),s("p",[a._v("修改flyway-6.3.3-》conf->flyway.conf")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 达梦数据库url")]),a._v("\nflyway.url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:dm://192.168.0.1:5236\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据库驱动")]),a._v("\nflyway.driver"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dm.jdbc.driver.DmDriver\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据库用户名")]),a._v("\nflyway.user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("youuser\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据库密码")]),a._v("\nflyway.password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("youpassword\n")])])]),s("h4",{attrs:{id:"_7-4-替换flyway-core包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-替换flyway-core包"}},[a._v("#")]),a._v(" 7.4 替换flyway-core包")]),a._v(" "),s("p",[a._v("修改flyway-6.3.3-》lib->community->flyway-core-6.3.3.jar")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211011222641335.png",alt:"image-20211011222641335"}})]),a._v(" "),s("h3",{attrs:{id:"_7-5-命令行运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-命令行运行"}},[a._v("#")]),a._v(" 7.5 命令行运行")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./flyway migrate -baselineOnMigrate=true\n")])])]),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/qq_32811865/article/details/105594256",target:"_blank",rel:"noopener noreferrer"}},[a._v("flyway 源码解析"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/babyzhongheng/article/details/115176744",target:"_blank",rel:"noopener noreferrer"}},[a._v("flyway-4.2适配DM8数据库"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/u013084266/article/details/106542814",target:"_blank",rel:"noopener noreferrer"}},[a._v("问题解决：flyway源码编译，报：flyway-core: Fatal error compiling: 无效的标记: --release"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);