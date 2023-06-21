const e=JSON.parse('{"key":"v-18897764","path":"/db/neo4j/neo4j-x-tutorial.html","title":"Neo4j  - 基础教程","lang":"zh-CN","frontmatter":{"order":10,"category":["neo4j"],"description":"1. 前言 今天，我们来聊一聊知识图谱中的Neo4J。首先，什么是知识图谱？先摘一段百度百科： 知识图谱（Knowledge Graph），在图书情报界称为知识域可视化或知识领域映射地图，是显示知识发展进程与结构关系的一系列各种不同的图形，用 可视化技术描述知识资源及其载体，挖掘、分析、 构建、绘制和显示知识及它们之间的相互联系。 知识图谱是通过将应用...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/neo4j/neo4j-x-tutorial.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Neo4j  - 基础教程"}],["meta",{"property":"og:description","content":"1. 前言 今天，我们来聊一聊知识图谱中的Neo4J。首先，什么是知识图谱？先摘一段百度百科： 知识图谱（Knowledge Graph），在图书情报界称为知识域可视化或知识领域映射地图，是显示知识发展进程与结构关系的一系列各种不同的图形，用 可视化技术描述知识资源及其载体，挖掘、分析、 构建、绘制和显示知识及它们之间的相互联系。 知识图谱是通过将应用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-21T07:40:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-06-21T07:40:00.000Z"}]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. Neo4J简介","slug":"_2-neo4j简介","link":"#_2-neo4j简介","children":[]},{"level":2,"title":"3. Neo4J使用","slug":"_3-neo4j使用","link":"#_3-neo4j使用","children":[]},{"level":2,"title":"3. Cypher查询语言","slug":"_3-cypher查询语言","link":"#_3-cypher查询语言","children":[]},{"level":2,"title":"4. Neo4J实战教程","slug":"_4-neo4j实战教程","link":"#_4-neo4j实战教程","children":[{"level":3,"title":"4.1删除数据库中以往的图","slug":"_4-1删除数据库中以往的图","link":"#_4-1删除数据库中以往的图","children":[]},{"level":3,"title":"4.2 创建一个节点","slug":"_4-2-创建一个节点","link":"#_4-2-创建一个节点","children":[]},{"level":3,"title":"4.3 创建多个接地那","slug":"_4-3-创建多个接地那","link":"#_4-3-创建多个接地那","children":[]},{"level":3,"title":"4.4 创建地区节点","slug":"_4-4-创建地区节点","link":"#_4-4-创建地区节点","children":[]},{"level":3,"title":"4.5 创建关系","slug":"_4-5-创建关系","link":"#_4-5-创建关系","children":[]},{"level":3,"title":"4.6 关系增加属性","slug":"_4-6-关系增加属性","link":"#_4-6-关系增加属性","children":[]},{"level":3,"title":"4.7 接下来增加更多的关系","slug":"_4-7-接下来增加更多的关系","link":"#_4-7-接下来增加更多的关系","children":[]},{"level":3,"title":"4.8 建立不同类型节点之间的关系-人物和地点的关系","slug":"_4-8-建立不同类型节点之间的关系-人物和地点的关系","link":"#_4-8-建立不同类型节点之间的关系-人物和地点的关系","children":[]},{"level":3,"title":"4.9 同样建立更多人的出生地","slug":"_4-9-同样建立更多人的出生地","link":"#_4-9-同样建立更多人的出生地","children":[]},{"level":3,"title":"4.10 查询所有在Boston出生的人物","slug":"_4-10-查询所有在boston出生的人物","link":"#_4-10-查询所有在boston出生的人物","children":[]},{"level":3,"title":"4.11 查询所有对外有关系的节点","slug":"_4-11-查询所有对外有关系的节点","link":"#_4-11-查询所有对外有关系的节点","children":[]},{"level":3,"title":"4.12 查询所有有关系的节点","slug":"_4-12-查询所有有关系的节点","link":"#_4-12-查询所有有关系的节点","children":[]},{"level":3,"title":"4.13 查询所有对外有关系的节点，以及关系类型","slug":"_4-13-查询所有对外有关系的节点-以及关系类型","link":"#_4-13-查询所有对外有关系的节点-以及关系类型","children":[]},{"level":3,"title":"4.14 查询所有有结婚关系的节点","slug":"_4-14-查询所有有结婚关系的节点","link":"#_4-14-查询所有有结婚关系的节点","children":[]},{"level":3,"title":"4.15 创建节点的时候就建好关系","slug":"_4-15-创建节点的时候就建好关系","link":"#_4-15-创建节点的时候就建好关系","children":[]},{"level":3,"title":"4.16 查找某人的朋友的朋友","slug":"_4-16-查找某人的朋友的朋友","link":"#_4-16-查找某人的朋友的朋友","children":[]},{"level":3,"title":"4. 17 增加/修改节点的属性","slug":"_4-17-增加-修改节点的属性","link":"#_4-17-增加-修改节点的属性","children":[]},{"level":3,"title":"4.18 删除节点的属性","slug":"_4-18-删除节点的属性","link":"#_4-18-删除节点的属性","children":[]},{"level":3,"title":"4.19 删除节点","slug":"_4-19-删除节点","link":"#_4-19-删除节点","children":[]},{"level":3,"title":"4.20 删除有关系的节点","slug":"_4-20-删除有关系的节点","link":"#_4-20-删除有关系的节点","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1687333200000,"updatedTime":1687333200000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":7.96,"words":2388},"filePathRelative":"db/neo4j/neo4j-x-tutorial.md","localizedDate":"2023年6月21日","autoDesc":true}');export{e as data};
