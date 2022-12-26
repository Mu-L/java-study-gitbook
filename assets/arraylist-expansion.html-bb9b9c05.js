const t=JSON.parse('{"key":"v-7621b86d","path":"/java/collection/arraylist-expansion.html","title":"ArrayList 的扩容机制","lang":"zh-CN","frontmatter":{"order":930,"category":["Java"],"description":"1.如何实现扩容 底层主要是这三个私有方法配合实现grow(),`grow(int minCapacity),newCapacity(int minCapacity)扩容。最终是调用了Arrays.copyOf`方法来进行扩充数组容量的。默认情况下，新的容量是原容量的1.5倍。 ``` // 扩容一个 private Object[] grow() {...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/collection/arraylist-expansion.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"ArrayList 的扩容机制"}],["meta",{"property":"og:description","content":"1.如何实现扩容 底层主要是这三个私有方法配合实现grow(),`grow(int minCapacity),newCapacity(int minCapacity)扩容。最终是调用了Arrays.copyOf`方法来进行扩充数组容量的。默认情况下，新的容量是原容量的1.5倍。 ``` // 扩容一个 private Object[] grow() {..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1.如何实现扩容","slug":"_1-如何实现扩容","link":"#_1-如何实现扩容","children":[]},{"level":2,"title":"2. 手动扩容","slug":"_2-手动扩容","link":"#_2-手动扩容","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":1.36,"words":408},"filePathRelative":"java/collection/arraylist-expansion.md","localizedDate":"2022年9月3日","autoDesc":true}');export{t as data};