import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.2ec15a41.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="aspose-word\u6587\u6863\u683C\u5F0F\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#aspose-word\u6587\u6863\u683C\u5F0F\u8F6C\u6362" aria-hidden="true">#</a> aspose.word\u6587\u6863\u683C\u5F0F\u8F6C\u6362</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>aspose.word\u6587\u6863\u683C\u5F0F\u8F6C\u6362\u975E\u5E38\u65B9\u4FBF\uFF0C\u5982\u679C\u53EA\u6709\u4E00\u4EFD\u6587\u4EF6\uFF08\u5982docx\uFF0Cpdf\u7B49\uFF09\u76F4\u63A5\u8C03\u7528save\u65B9\u6CD5\u5373\u53EF\u3002\u5982\u679C\u662F\u591A\u9875\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9SaveOptions \u5B9E\u73B0\u3002\u5982\u56FE\u7247</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ImageSaveOptions</span> iso <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImageSaveOptions</span><span class="token punctuation">(</span><span class="token class-name">SaveFormat</span><span class="token punctuation">.</span>JPEG<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        iso<span class="token punctuation">.</span><span class="token function">setResolution</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        iso<span class="token punctuation">.</span><span class="token function">setPrettyFormat</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        iso<span class="token punctuation">.</span><span class="token function">setUseAntiAliasing</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Document</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span>docPath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> pageCount <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getPageCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> imagesPath <span class="token operator">=</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%s/images&quot;</span><span class="token punctuation">,</span> outFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">File</span> imagesDir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>imagesPath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>imagesDir<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            imagesDir<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>pageCount<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">PageSet</span> pageSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageSet</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            iso<span class="token punctuation">.</span><span class="token function">setPageSet</span><span class="token punctuation">(</span>pageSet<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">String</span> mainName <span class="token operator">=</span> <span class="token class-name">FileUtil</span><span class="token punctuation">.</span><span class="token function">mainName</span><span class="token punctuation">(</span>docPath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token class-name">String</span> outPath <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%s/%s_%s.jpg&quot;</span><span class="token punctuation">,</span>imagesDir<span class="token punctuation">,</span>mainName<span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            doc<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>outPath<span class="token punctuation">,</span>iso<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> imagesPath<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> 2. \u5DE5\u5177\u7C7B</h2><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>\nimport cn.hutool.core.io.FileUtil;\nimport com.aspose.words.Document;\nimport com.aspose.words.ImageSaveOptions;\nimport com.aspose.words.PageSet;\nimport com.aspose.words.SaveFormat;\nimport com.faduit.common.constant.FdConstants;\nimport org.jetbrains.annotations.NotNull;\n\nimport java.io.File;\nimport java.util.Objects;\n\n/**\n * \u6587\u6863\u8F6C\u6362\n * @author zsz\n * @date 2022-05-25\n */\npublic class DocConversionUtils\n{\n\n\n    /**\n     * \u6587\u6863\u683C\u5F0F\u8F6C\u6362\n     * @param docPath\n     * @param outFileType\n     * @return\n     */\n    public static String docConversion(String docPath, String outFilePath, String outFileType) throws Exception {\n        if (Objects.equals(outFileType, FdConstants.OUT_FILE_TYPE.JPG)){\n            return docConversionJpg(docPath, outFilePath);\n        }\n        Document doc = new Document(docPath);\n        String mainName = FileUtil.mainName(docPath);\n        String outPath = String.format(&quot;%s/%s.%s&quot;,outFilePath,mainName,outFileType);\n        doc.save(outPath);\n        return outPath;\n    }\n\n    /**\n     * doc\u8F6Cpdf\n     * @param docPath\n     * @param outFilePath\n     * @return\n     */\n    public static String docConversionPdf(String docPath, String outFilePath) throws Exception {\n        String outPath = docConversion(docPath, outFilePath, FdConstants.OUT_FILE_TYPE.PDF);\n        return outPath;\n    }\n    /**\n     * doc\u8F6Cdocx\n     * @param docPath\n     * @param outFilePath\n     * @return\n     */\n    public static String docConversionDocx(String docPath, String outFilePath) throws Exception {\n        String outPath = docConversion(docPath, outFilePath, FdConstants.OUT_FILE_TYPE.DOCX);\n        return outPath;\n    }\n\n\n    /**\n     * \u6587\u6863\u8F6CJpg\u56FE\u7247\u683C\u5F0F\n     * @param docPath\n     * @param outFilePath\n     * @return\n     * @throws Exception\n     */\n    private static String docConversionJpg(String docPath, String outFilePath) throws Exception {\n        ImageSaveOptions iso = new ImageSaveOptions(SaveFormat.JPEG);\n        iso.setResolution(300);\n        iso.setPrettyFormat(true);\n        iso.setUseAntiAliasing(true);\n        Document doc = new Document(docPath);\n        int pageCount = doc.getPageCount();\n        String imagesPath =String.format(&quot;%s/images&quot;, outFilePath);\n        File imagesDir = new File(imagesPath);\n        if(imagesDir.exists()){\n            imagesDir.mkdirs();\n        }\n        for (int i = 0;i&lt;pageCount;i++){\n            PageSet pageSet = new PageSet(i);\n            iso.setPageSet(pageSet);\n            String mainName = FileUtil.mainName(docPath);\n\n            String outPath = String.format(&quot;%s/%s_%s.jpg&quot;,imagesDir,mainName,i+1);\n\n            doc.save(outPath,iso);\n        }\n        return imagesPath;\n    }\n}\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 6);
const _hoisted_7 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_7);
}
var aspose_word__Asposeword_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "aspose.word\u57FA\u7840-asposeword\u6587\u6863\u683C\u5F0F\u8F6C\u6362.html.vue"]]);
export { aspose_word__Asposeword_______html as default };
