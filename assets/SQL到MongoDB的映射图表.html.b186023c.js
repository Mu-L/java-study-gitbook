import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as d,a as t,b as o,d as e,e as l,r as u}from"./app.4b9ee468.js";const a={},_=t("h1",{id:"sql\u5230mongodb\u7684\u6620\u5C04\u56FE\u8868",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#sql\u5230mongodb\u7684\u6620\u5C04\u56FE\u8868","aria-hidden":"true"},"#"),e(" SQL\u5230MongoDB\u7684\u6620\u5C04\u56FE\u8868")],-1),i=t("h2",{id:"_1-\u672F\u8BED\u548C\u6982\u5FF5",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-\u672F\u8BED\u548C\u6982\u5FF5","aria-hidden":"true"},"#"),e(" 1. \u672F\u8BED\u548C\u6982\u5FF5")],-1),c=t("p",null,"\u4E0B\u8868\u4ECB\u7ECD\u4E86\u5404\u79CDSQL\u672F\u8BED\u548C\u6982\u5FF5\u4EE5\u53CA\u76F8\u5E94\u7684MongoDB\u672F\u8BED\u548C\u6982\u5FF5\u3002",-1),g=t("thead",null,[t("tr",null,[t("th",null,"SQL\u672F\u8BED/\u6982\u5FF5"),t("th",null,"MongoDB\u672F\u8BED/\u6982\u5FF5")])],-1),h=t("td",null,"database",-1),p={href:"https://docs.mongodb.com/manual/reference/glossary/#term-database",target:"_blank",rel:"noopener noreferrer"},m=e("database"),b=t("td",null,"table",-1),f={href:"https://docs.mongodb.com/manual/reference/glossary/#term-collection",target:"_blank",rel:"noopener noreferrer"},E=e("collection"),S=t("td",null,"row",-1),M={href:"https://docs.mongodb.com/manual/reference/glossary/#term-document",target:"_blank",rel:"noopener noreferrer"},L=e("document"),T=e(" or "),R={href:"https://docs.mongodb.com/manual/reference/glossary/#term-bson",target:"_blank",rel:"noopener noreferrer"},D=e("BSON"),O=e(" document"),A=t("td",null,"column",-1),C={href:"https://docs.mongodb.com/manual/reference/glossary/#term-field",target:"_blank",rel:"noopener noreferrer"},y=e("field"),k=t("td",null,"index",-1),B={href:"https://docs.mongodb.com/manual/reference/glossary/#term-index",target:"_blank",rel:"noopener noreferrer"},q=e("index"),x=t("td",null,"table joins",-1),N={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#pipe._S_lookup",target:"_blank",rel:"noopener noreferrer"},I=e("$lookup"),v=e(", \u5D4C\u5165\u6587\u6863"),F=t("td",null,"primary key \uFF08\u6307\u5B9A\u4EFB\u4F55\u552F\u4E00\u7684\u5217\u6216\u5217\u7EC4\u5408\u4F5C\u4E3A\u4E3B\u952E\u3002\uFF09",-1),$={href:"https://docs.mongodb.com/manual/reference/glossary/#term-primary-key",target:"_blank",rel:"noopener noreferrer"},Q=e("primary key"),W=e(" \uFF08\u5728MongoDB\u4E2D\uFF0C\u4E3B\u952E\u81EA\u52A8\u8BBE\u7F6E\u4E3A_id\u5B57\u6BB5\u3002\uFF09"),H=t("td",null,"aggregation (e.g. group by)",-1),U=e("aggregation pipeline See the "),P={href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"},j=e("SQL to Aggregation Mapping Chart"),V=e("."),Y=t("td",null,"SELECT INTO NEW_TABLE",-1),X={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/out/#pipe._S_out",target:"_blank",rel:"noopener noreferrer"},w=e("$out"),z=e(" See the "),K={href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"},G=e("SQL to Aggregation Mapping Chart"),J=e("."),Z=t("td",null,"MERGE INTO TABLE",-1),tt={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/merge/#pipe._S_merge",target:"_blank",rel:"noopener noreferrer"},et=e("$merge"),nt=e(" (Available starting in MongoDB 4.2) See the "),ot={href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"},lt=e("SQL to Aggregation Mapping Chart"),st=e("."),rt=t("td",null,"Transactions",-1),dt={href:"https://docs.mongodb.com/manual/core/transactions/",target:"_blank",rel:"noopener noreferrer"},ut=e("transactions"),at=e(" \u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u975E\u89C4\u8303\u5316\u6570\u636E\u6A21\u578B\uFF08\u5D4C\u5165\u5F0F\u6587\u6863\u548C\u6570\u7EC4\uFF09 \u5C06\u7EE7\u7EED\u662F\u60A8\u6570\u636E\u548C\u7528\u4F8B\u7684\u6700\u4F73\u9009\u62E9\uFF0C\u800C\u4E0D\u662F\u591A\u6587\u6863\u4E8B\u52A1\u3002 \u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u9002\u5F53\u7684\u5EFA\u6A21\u5C06\u6700 \u5927\u7A0B\u5EA6\u5730\u51CF\u5C11\u5BF9\u591A\u6587\u6863\u4EA4\u6613\u7684\u9700\u6C42\u3002"),_t=t("h2",{id:"_2-\u53EF\u6267\u884C\u6587\u4EF6",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-\u53EF\u6267\u884C\u6587\u4EF6","aria-hidden":"true"},"#"),e(" 2. \u53EF\u6267\u884C\u6587\u4EF6")],-1),it=t("p",null,"\u4E0B\u8868\u5C55\u793A\u4E86\u4E00\u4E9B\u6570\u636E\u5E93\u53EF\u6267\u884C\u6587\u4EF6\u548C\u76F8\u5E94\u7684MongoDB\u53EF\u6267\u884C\u6587\u4EF6\u3002\u8FD9\u4E2A\u8868\u683C\u5E76\u4E0D\u662F\u8BE6\u5C3D\u65E0\u9057\u7684\u3002",-1),ct=t("thead",null,[t("tr",null,[t("th"),t("th",null,"MongoDB"),t("th",null,"MySQL"),t("th",null,"Oracle"),t("th",null,"Informix"),t("th",null,"DB2")])],-1),gt=t("td",null,"Database Server",-1),ht={href:"https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod",target:"_blank",rel:"noopener noreferrer"},pt=e("mongod"),mt=t("td",null,"mysqld",-1),bt=t("td",null,"oracle",-1),ft=t("td",null,"IDS",-1),Et=t("td",null,"DB2 Server",-1),St=t("td",null,"Database Client",-1),Mt={href:"https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo",target:"_blank",rel:"noopener noreferrer"},Lt=e("mongo"),Tt=t("td",null,"mysql",-1),Rt=t("td",null,"sqlplus",-1),Dt=t("td",null,"DB-Access",-1),Ot=t("td",null,"DB2 Client",-1),At=l(`<h2 id="_3-\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_3-\u4F8B\u5B50" aria-hidden="true">#</a> 3. \u4F8B\u5B50</h2><p>\u4E0B\u8868\u5C55\u793A\u4E86\u5404\u79CDSQL\u8BED\u53E5\u548C\u76F8\u5E94\u7684MongoDB\u8BED\u53E5\u3002\u8868\u4E2D\u7684\u4F8B\u5B50\u5047\u8BBE\u4EE5\u4E0B\u6761\u4EF6:</p><ul><li>SQL\u793A\u4F8B\u5047\u8BBE\u6709\u4E00\u4E2A\u540D\u4E3A<strong>people</strong>\u7684\u8868\u3002</li><li>MongoDB\u793A\u4F8B\u5047\u8BBE\u4E00\u4E2A\u540D\u4E3A<strong>people</strong>\u7684\u96C6\u5408\uFF0C\u5B83\u5305\u542B\u4EE5\u4E0B\u539F\u578B\u7684\u6587\u6863:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> { 
       _id: ObjectId(&quot;509a8fb2f3f4948bd2f983a0&quot;),
       user_id: &quot;abc123&quot;,
       age: 55,
       status: &#39;A&#39;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-\u521B\u5EFA\u548C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_3-1-\u521B\u5EFA\u548C\u4FEE\u6539" aria-hidden="true">#</a> 3.1 \u521B\u5EFA\u548C\u4FEE\u6539</h3><p>\u4E0B\u8868\u5C55\u793A\u4E86\u4E0E\u8868\u7EA7\u64CD\u4F5C\u76F8\u5173\u7684\u5404\u79CDSQL\u8BED\u53E5\u4EE5\u53CA\u76F8\u5E94\u7684MongoDB\u8BED\u53E5\u3002</p>`,6),Ct=t("thead",null,[t("tr",null,[t("th",null,"SQL Schema\u8BED\u53E5"),t("th",null,"MongoDB Schema\u8BED\u53E5")])],-1),yt=t("td",null,[t("strong",null,"CREATE"),e(),t("strong",null,"TABLE"),e(" people ( id MEDIUMINT "),t("strong",null,"NOT"),e(),t("strong",null,"NULL"),e(" AUTO_INCREMENT, user_id Varchar(30), age Number, status char(1), "),t("strong",null,"PRIMARY"),e(),t("strong",null,"KEY"),e(" (id) )")],-1),kt=e("\u9690\u5F0F\u521B\u5EFA\u7684\u7B2C\u4E00\u4E2A"),Bt={href:"https://docs.mongodb.com/master/reference/method/db.collection.insertOne/#db.collection.insertOne",target:"_blank",rel:"noopener noreferrer"},qt=t("code",null,"insertOne()",-1),xt=e("\u6216"),Nt={href:"https://docs.mongodb.com/master/reference/method/db.collection.insertMany/#db.collection.insertMany",target:"_blank",rel:"noopener noreferrer"},It=t("code",null,"insertMany()",-1),vt=e('\u64CD\u4F5C\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A**_id**\u5B57\u6BB5\uFF0C\u5219\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E3B\u952E_id\u3002 db.people.insertOne( { user_id: "abc123", age: 55, status: "A" } ) \u4F46\u662F\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u663E\u5F0F\u5730\u521B\u5EFA\u4E00\u4E2A\u96C6\u5408: db.createCollection("people")'),Ft=t("td",null,[t("strong",null,"ALTER"),e(),t("strong",null,"TABLE"),e(" people "),t("strong",null,"ADD"),e(" join_date DATETIME")],-1),$t=e("\u96C6\u5408\u4E0D\u63CF\u8FF0\u6216\u4E0D\u5F3A\u5236\u5176\u6587\u4EF6\u7ED3\u6784\uFF1B \u5373\u5728\u96C6\u5408\u7EA7\u522B\u6CA1\u6709\u7ED3\u6784\u4E0A\u7684\u66F4\u6539\u3002 \u4F46\u662F\uFF0C\u5728\u6587\u6863\u7EA7\u522B\uFF0C"),Qt={href:"https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany",target:"_blank",rel:"noopener noreferrer"},Wt=e("updateMany()"),Ht=e("\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u7528"),Ut={href:"https://docs.mongodb.com/manual/reference/operator/update/set/#up._S_set",target:"_blank",rel:"noopener noreferrer"},Pt=e("$set"),jt=e("\u8FD0\u7B97\u7B26\u5C06\u5B57\u6BB5\u6DFB\u52A0\u5230\u73B0\u6709\u6587\u6863\u4E2D\u3002 db.people.updateMany( { }, { $set: { join_date: "),Vt=t("strong",null,"new",-1),Yt=e(" Date() } } )"),Xt=t("td",null,[t("strong",null,"ALTER"),e(),t("strong",null,"TABLE"),e(" people "),t("strong",null,"DROP"),e(),t("strong",null,"COLUMN"),e(" join_date")],-1),wt=e("\u96C6\u5408\u4E0D\u63CF\u8FF0\u6216\u4E0D\u5F3A\u5236\u5176\u6587\u4EF6\u7ED3\u6784\uFF1B \u5373\u5728\u96C6\u5408\u7EA7\u522B\u6CA1\u6709\u7ED3\u6784\u4E0A\u7684\u66F4\u6539\u3002 \u4F46\u662F\uFF0C\u5728\u6587\u6863\u7EA7\u522B\uFF0C"),zt={href:"https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany",target:"_blank",rel:"noopener noreferrer"},Kt=e("updateMany()"),Gt=e("\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u7528"),Jt={href:"https://docs.mongodb.com/manual/reference/operator/update/unset/#up._S_unset",target:"_blank",rel:"noopener noreferrer"},Zt=e("$unset"),te=e('\u8FD0\u7B97\u7B26\u5C06\u5B57\u6BB5\u6DFB\u52A0\u5230\u73B0\u6709\u6587\u6863\u4E2D\u3002 db.people.updateMany( { }, { $unset: { "join_date": "" } } )'),ee=t("tr",null,[t("td",null,[t("strong",null,"CREATE"),e(),t("strong",null,"INDEX"),e(" idx_user_id_asc "),t("strong",null,"ON"),e(" people(user_id)")]),t("td",null,"db.people.createIndex( { user_id: 1 } )")],-1),ne=t("tr",null,[t("td",null,[t("strong",null,"CREATE"),e(),t("strong",null,"INDEX"),e(" idx_user_id_asc_age_desc "),t("strong",null,"ON"),e(" people(user_id, age "),t("strong",null,"DESC"),e(")")]),t("td",null,"db.people.createIndex( { user_id: 1, age: -1 } )")],-1),oe=t("tr",null,[t("td",null,[t("strong",null,"DROP"),e(),t("strong",null,"TABLE"),e(" people")]),t("td",null,"db.people.drop()")],-1),le=l('<p>\u4E0B\u8868\u663E\u793A\u4E86\u4E0E\u5C06\u8BB0\u5F55\u63D2\u5165\u8868\u548C\u76F8\u5E94\u7684MongoDB\u8BED\u53E5\u6709\u5173\u7684\u5404\u79CDSQL\u8BED\u53E5\u3002</p><table><thead><tr><th>SQL INSERT\u8BED\u53E5</th><th><strong>MongoDB insertOne() Statements</strong></th></tr></thead><tbody><tr><td><strong>INSERT</strong> <strong>INTO</strong> people(user_id, age, status) <strong>VALUES</strong> (&quot;bcd001&quot;, 45, &quot;A&quot;)</td><td>db.people.insertOne( { user_id: &quot;bcd001&quot;, age: 45, status: &quot;A&quot; } )</td></tr></tbody></table><h3 id="_3-3-\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_3-3-\u9009\u62E9" aria-hidden="true">#</a> 3.3 \u9009\u62E9</h3><p>\u4E0B\u8868\u5C55\u793A\u4E86\u4E0E\u4ECE\u8868\u4E2D\u8BFB\u53D6\u8BB0\u5F55\u76F8\u5173\u7684\u5404\u79CDSQL\u8BED\u53E5\u4EE5\u53CA\u76F8\u5E94\u7684MongoDB\u8BED\u53E5\u3002</p>',4),se=t("p",null,[t("strong",null,"\u6CE8\u610F")],-1),re=e("\u9664\u975E\u901A\u8FC7\u6295\u5F71\u660E\u786E\u6392\u9664\uFF0C\u5426\u5219["),de={href:"https://docs.mongodb.com/master/reference/method/db.collection.find/#db.collection.find",target:"_blank",rel:"noopener noreferrer"},ue=t("code",null,"find()",-1),ae=e("\u65B9\u6CD5\u59CB\u7EC8\u5728\u8FD4\u56DE\u7684\u6587\u6863\u4E2D\u5305\u542B**_id"),_e=t("strong",null,"\u5B57\u6BB5\u3002 \u4E0B\u9762\u7684\u67D0\u4E9BSQL\u67E5\u8BE2\u53EF\u80FD\u5305\u542B\u4E00\u4E2A",-1),ie=e("_id**\u5B57\u6BB5\u6765\u53CD\u6620\u8FD9\u4E00\u70B9\uFF0C\u5373\u4F7F\u8BE5\u5B57\u6BB5\u672A\u5305\u542B\u5728\u76F8\u5E94\u7684"),ce={href:"https://docs.mongodb.com/master/reference/method/db.collection.find/#db.collection.find",target:"_blank",rel:"noopener noreferrer"},ge=t("code",null,"find()",-1),he=e("\u67E5\u8BE2\u4E2D\u4E5F\u662F\u5982\u6B64\u3002"),pe=t("thead",null,[t("tr",null,[t("th",null,"SQL SELECT \u8BED\u53E5"),t("th",null,"MongoDB find() \u8BED\u53E5")])],-1),me=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("em",null,"FROM"),e(" people")]),t("td",null,"db.people.find()")],-1),be=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" id, user_id, status "),t("strong",null,"FROM"),e(" people")]),t("td",null,"db.people.find( { }, { user_id: 1, status: 1 } )")],-1),fe=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" user_id, status "),t("strong",null,"FROM"),e(" people")]),t("td",null,"db.people.find( { }, { user_id: 1, status: 1, _id: 0 } )")],-1),Ee=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("em",null,"WHERE"),e(' status = "A"')]),t("td",null,'db.people.find( { status: "A" } )')],-1),Se=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" user_id, status "),t("strong",null,"FROM"),e(" people "),t("strong",null,"WHERE"),e(' status = "A"')]),t("td",null,'db.people.find( { status: "A" }, { user_id: 1, status: 1, _id: 0 } )')],-1),Me=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("em",null,"WHERE"),e(' status != "A"')]),t("td",null,'db.people.find( { status: { $ne: "A" } } )')],-1),Le=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("strong",null,"WHERE*"),e(),t("em",null,'status = "A"'),e(" *"),t("em",null,"AND"),e(" age = 50")]),t("td",null,'db.people.find( { status: "A", age: 50 } )')],-1),Te=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("strong",null,"WHERE*"),e(),t("em",null,'status = "A"'),e(" *"),t("em",null,"OR"),e(" age = 50")]),t("td",null,'db.people.find( { $or: [ { status: "A" } , { age: 50 } ] } )')],-1),Re=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("em",null,"WHERE"),e(" age > 25")]),t("td",null,"db.people.find( { age: { $gt: 25 } } )")],-1),De=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("em",null,"WHERE"),e(" age < 25")]),t("td",null,"db.people.find( { age: { $lt: 25 } } )")],-1),Oe=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("strong",null,"WHERE*"),e(),t("em",null,"age > 25"),e(" *"),t("em",null,"AND"),e(" age <= 50")]),t("td",null,"db.people.find( { age: { $gt: 25, $lte: 50 } } )")],-1),Ae=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("strong",null,"WHERE*"),e(),t("em",null,"user_id *like"),e(' "%bc%"')]),t("td",null,[e("db.people.find( { user"),t("em",null,"id: /bc/ } )"),e(),t("em",null,"_or"),e(" db.people.find( { user_id: { $regex: /bc/ } } )")])],-1),Ce=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("strong",null,"WHERE*"),e(),t("em",null,"user_id *like"),e(' "bc%"')]),t("td",null,[e("db.people.find( { user"),t("em",null,"id: /^bc/ } )"),e(),t("em",null,"_or"),e(" db.people.find( { user_id: { $regex: /^bc/ } } )")])],-1),ye=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("strong",null,"WHERE*"),e(),t("em",null,'status = "A"'),e(" *"),t("strong",null,"ORDER*"),e(" *"),t("strong",null,"BY*"),e(),t("em",null,"user_id *ASC")]),t("td",null,'db.people.find( { status: "A" } ).sort( { user_id: 1 } )')],-1),ke=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("strong",null,"WHERE*"),e(),t("em",null,'status = "A"'),e(" *"),t("strong",null,"ORDER*"),e(" *"),t("strong",null,"BY*"),e(),t("em",null,"user_id *DESC")]),t("td",null,'db.people.find( { status: "A" } ).sort( { user_id: -1 } )')],-1),Be=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(),t("strong",null,"COUNT"),e("("),t("em",null,")"),e(" *"),t("em",null,"FROM"),e(" people")]),t("td",null,[e("db.people.count() "),t("em",null,"or"),e(" db.people.find().count()")])],-1),qe=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(),t("strong",null,"COUNT"),e("(user_id) "),t("strong",null,"FROM"),e(" people")]),t("td",null,[e("db.people.count( { user"),t("em",null,"id: { $exists:"),e(" *"),t("strong",null,"true*"),e(),t("em",null,"} } )"),e(),t("em",null,"_or"),e(" db.people.find( { user_id: { $exists: "),t("strong",null,"true"),e(" } } ).count()")])],-1),xe=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(),t("strong",null,"COUNT"),e("("),t("em",null,")"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("em",null,"WHERE"),e(" age > 30")]),t("td",null,[e("db.people.count( { age: { $gt: 30 } } ) "),t("em",null,"or"),e(" db.people.find( { age: { $gt: 30 } } ).count()")])],-1),Ne=t("td",null,[t("strong",null,"SELECT"),e(),t("strong",null,"DISTINCT"),e("(status) "),t("strong",null,"FROM"),e(" people")],-1),Ie=e('db.people.aggregate( [ { $group : { _id : "$status" } } ] ) or, for distinct value sets that do not exceed the '),ve={href:"https://docs.mongodb.com/manual/reference/limits/#limit-bson-document-size",target:"_blank",rel:"noopener noreferrer"},Fe=e("BSON size limit"),$e=e(' db.people.distinct( "status" )'),Qe=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("em",null,"LIMIT"),e(" 1")]),t("td",null,[e("db.people.findOne() "),t("em",null,"or"),e(" db.people.find().limit(1)")])],-1),We=t("tr",null,[t("td",null,[t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("em",null,"LIMIT"),e(" 5 SKIP 10")]),t("td",null,"db.people.find().limit(5).skip(10)")],-1),He=t("tr",null,[t("td",null,[t("strong",null,"EXPLAIN"),e(),t("strong",null,"SELECT"),e(" *"),t("strong",null,"FROM*"),e(),t("em",null,"people"),e(" *"),t("em",null,"WHERE"),e(' status = "A"')]),t("td",null,'db.people.find( { status: "A" } ).explain()')],-1),Ue=l('<h3 id="_3-4-\u66F4\u65B0\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_3-4-\u66F4\u65B0\u8BB0\u5F55" aria-hidden="true">#</a> 3.4 \u66F4\u65B0\u8BB0\u5F55</h3><p>\u4E0B\u8868\u663E\u793A\u4E86\u4E0E\u66F4\u65B0\u8868\u4E2D\u7684\u73B0\u6709\u8BB0\u5F55\u548C\u76F8\u5E94\u7684MongoDB\u8BED\u53E5\u6709\u5173\u7684\u5404\u79CDSQL\u8BED\u53E5\u3002</p><table><thead><tr><th><strong>SQL Update Statements</strong></th><th><strong>MongoDB updateMany() Statements</strong></th></tr></thead><tbody><tr><td><strong>UPDATE</strong> people <strong>SET</strong> status = &quot;C&quot; <strong>WHERE</strong> age &gt; 25</td><td>db.people.updateMany( { age: { $gt: 25 } }, { $set: { status: &quot;C&quot; } } )</td></tr><tr><td><strong>UPDATE</strong> people <strong>SET</strong> age = age + 3 <strong>WHERE</strong> status = &quot;A&quot;</td><td>db.people.updateMany( { status: &quot;A&quot; } , { $inc: { age: 3 } } )</td></tr></tbody></table><p>\u6709\u5173\u793A\u4F8B\u4E2D\u4F7F\u7528\u7684\u65B9\u6CD5\u548C\u8FD0\u7B97\u7B26\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1\uFF1A</p><h3 id="_3-5-\u5220\u9664\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_3-5-\u5220\u9664\u8BB0\u5F55" aria-hidden="true">#</a> 3.5 \u5220\u9664\u8BB0\u5F55</h3><p>\u4E0B\u8868\u663E\u793A\u4E86\u4E0E\u4ECE\u8868\u4E2D\u5220\u9664\u8BB0\u5F55\u548C\u76F8\u5E94\u7684MongoDB\u8BED\u53E5\u6709\u5173\u7684\u5404\u79CDSQL\u8BED\u53E5\u3002</p><table><thead><tr><th><strong>SQL Delete Statements</strong></th><th><strong>MongoDB deleteMany() Statements</strong></th></tr></thead><tbody><tr><td><strong>DELETE</strong> <strong>FROM</strong> people <strong>WHERE</strong> status = &quot;D&quot;</td><td>db.people.deleteMany( { status: &quot;D&quot; } )</td></tr><tr><td><strong>DELETE</strong> <strong>FROM</strong> people</td><td>db.people.deleteMany({})</td></tr></tbody></table><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',8),Pe={href:"https://docs.mongoing.com/mongodb-crud-operations/sql-to-mongodb-mapping-chart",target:"_blank",rel:"noopener noreferrer"},je=e("SQL\u5230MongoDB\u7684\u6620\u5C04\u56FE\u8868");function Ve(Ye,Xe){const n=u("ExternalLinkIcon");return r(),d("div",null,[_,i,c,t("table",null,[g,t("tbody",null,[t("tr",null,[h,t("td",null,[t("a",p,[m,o(n)])])]),t("tr",null,[b,t("td",null,[t("a",f,[E,o(n)])])]),t("tr",null,[S,t("td",null,[t("a",M,[L,o(n)]),T,t("a",R,[D,o(n)]),O])]),t("tr",null,[A,t("td",null,[t("a",C,[y,o(n)])])]),t("tr",null,[k,t("td",null,[t("a",B,[q,o(n)])])]),t("tr",null,[x,t("td",null,[t("a",N,[I,o(n)]),v])]),t("tr",null,[F,t("td",null,[t("a",$,[Q,o(n)]),W])]),t("tr",null,[H,t("td",null,[U,t("a",P,[j,o(n)]),V])]),t("tr",null,[Y,t("td",null,[t("a",X,[w,o(n)]),z,t("a",K,[G,o(n)]),J])]),t("tr",null,[Z,t("td",null,[t("a",tt,[et,o(n)]),nt,t("a",ot,[lt,o(n)]),st])]),t("tr",null,[rt,t("td",null,[t("a",dt,[ut,o(n)]),at])])])]),_t,it,t("table",null,[ct,t("tbody",null,[t("tr",null,[gt,t("td",null,[t("a",ht,[pt,o(n)])]),mt,bt,ft,Et]),t("tr",null,[St,t("td",null,[t("a",Mt,[Lt,o(n)])]),Tt,Rt,Dt,Ot])])]),At,t("table",null,[Ct,t("tbody",null,[t("tr",null,[yt,t("td",null,[kt,t("a",Bt,[qt,o(n)]),xt,t("a",Nt,[It,o(n)]),vt])]),t("tr",null,[Ft,t("td",null,[$t,t("a",Qt,[Wt,o(n)]),Ht,t("a",Ut,[Pt,o(n)]),jt,Vt,Yt])]),t("tr",null,[Xt,t("td",null,[wt,t("a",zt,[Kt,o(n)]),Gt,t("a",Jt,[Zt,o(n)]),te])]),ee,ne,oe])]),le,t("blockquote",null,[se,t("p",null,[re,t("a",de,[ue,o(n)]),ae,_e,ie,t("a",ce,[ge,o(n)]),he])]),t("table",null,[pe,t("tbody",null,[me,be,fe,Ee,Se,Me,Le,Te,Re,De,Oe,Ae,Ce,ye,ke,Be,qe,xe,t("tr",null,[Ne,t("td",null,[Ie,t("a",ve,[Fe,o(n)]),$e])]),Qe,We,He])]),Ue,t("p",null,[t("a",Pe,[je,o(n)])])])}var Ke=s(a,[["render",Ve],["__file","SQL\u5230MongoDB\u7684\u6620\u5C04\u56FE\u8868.html.vue"]]);export{Ke as default};
