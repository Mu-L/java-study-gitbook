import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a as n,b as p,d as s,e as c,r as i}from"./app.258ed467.js";const l={},u=n("h1",{id:"vue\u9879\u76EE\u9884\u89C8pdf",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue\u9879\u76EE\u9884\u89C8pdf","aria-hidden":"true"},"#"),s(" vue\u9879\u76EE\u9884\u89C8pdf")],-1),r=n("h2",{id:"_1-\u96C6\u6210\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u96C6\u6210\u4F7F\u7528","aria-hidden":"true"},"#"),s(" 1. \u96C6\u6210\u4F7F\u7528")],-1),d=n("p",null,"\u5C06pdf\u6587\u4EF6\u5939\u653E\u5728public \u76EE\u5F55\u4E0B",-1),k=s("\u94FE\u63A5:"),_={href:"https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA",target:"_blank",rel:"noopener noreferrer"},m=s("https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA"),h=s(" \u5BC6\u7801:g9c5"),v=n("p",null,[n("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210515161010336.png",alt:"image-20210515161010336",loading:"lazy"})],-1),b=c(`<li><p>\u5C06base64 \u8BBE\u7F6E\u5230sessionStorage, \u6253\u5F00\u65B0\u7A97\u53E3\u5C55\u793A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$post</span><span class="token punctuation">(</span><span class="token string">&quot;getBase64PdfStr&quot;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> base64PdfStr <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
          sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;_imgUrl&quot;</span><span class="token punctuation">,</span> base64PdfStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
          window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;/pdf/web/viewer.html&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1);function f(g,x){const a=i("ExternalLinkIcon");return e(),o("div",null,[u,r,n("ol",null,[n("li",null,[d,n("p",null,[k,n("a",_,[m,p(a)]),h]),v]),b])])}const j=t(l,[["render",f],["__file","fe-lib-vue-preview-pdf.html.vue"]]);export{j as default};
