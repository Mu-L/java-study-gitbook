import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as p,a as n,b as e,e as t,d as s,r as o}from"./app.24aaacd5.js";const l={},u=t('<h1 id="minio\u4E34\u65F6\u8BBF\u95EE\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#minio\u4E34\u65F6\u8BBF\u95EE\u6743\u9650" aria-hidden="true">#</a> Minio\u4E34\u65F6\u8BBF\u95EE\u6743\u9650</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6211\u4EEC\u4E3A\u4E86\u6570\u636E\u7684\u5B89\u5168\uFF0C\u4F8B\u5982\u6211\u4EEC\u524D\u7AEF\u7684\u56FE\u7247\uFF0C\u5176\u5B9E\u53EA\u8981\u7528\u6237\u62FF\u5230url \u5C31\u53EF\u4EE5\u8BBF\u95EE\u4E86\u3002\u6211\u4EEC\u9700\u8981\u505A\u6743\u9650\u6821\u9A8C\u6216\u751F\u6210\u4E00\u4E2A\u4E34\u65F6\u6743\u9650</p><p>\u5728minio \u4E2D\u4F7F\u7528share \u5171\u4EAB\u6765\u5B9E\u73B0</p><h2 id="_2-mc-\u5BA2\u6237\u7AEF-share-\u547D\u4EE4-\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#_2-mc-\u5BA2\u6237\u7AEF-share-\u547D\u4EE4-\u5171\u4EAB" aria-hidden="true">#</a> 2. MC \u5BA2\u6237\u7AEF share \u547D\u4EE4-\u5171\u4EAB</h2><p>share \u751F\u6210\u7528\u4E8E\u5171\u4EAB\u7684URL\u3002</p>',6),d=n("p",null,[n("code",null,"share"),s("\u547D\u4EE4\u5B89\u5168\u5730\u6388\u4E88\u4E0A\u4F20\u6216\u4E0B\u8F7D\u7684\u6743\u9650\u3002"),n("strong",null,"\u6B64\u8BBF\u95EE\u53EA\u662F\u4E34\u65F6\u7684\uFF0C\u4E0E\u8FDC\u7A0B\u7528\u6237\u548C\u5E94\u7528\u7A0B\u5E8F\u5171\u4EAB\u4E5F\u662F\u5B89\u5168\u7684"),s("\u3002\u5982\u679C\u4F60\u60F3\u6388\u4E88\u6C38\u4E45\u8BBF\u95EE\u6743\u9650\uFF0C\u4F60\u53EF\u4EE5\u770B\u770B"),n("code",null,"mc policy"),s("\u547D\u4EE4\u3002")],-1),r=s("\u751F\u6210\u7684\u7F51\u5740\u4E2D\u542B\u6709\u7F16\u7801\u540E\u7684\u8BBF\u95EE\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4EFB\u4F55\u4F01\u56FE\u7BE1\u6539URL\u7684\u884C\u4E3A\u90FD\u4F1A\u4F7F\u8BBF\u95EE\u65E0\u6548\u3002\u60F3\u4E86\u89E3\u8FD9\u79CD\u673A\u5236\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF0C\u8BF7\u53C2\u8003"),m={href:"http://docs.aws.amazon.com/AmazonS3/latest/dev/ShareObjectPreSignedURL.html",target:"_blank",rel:"noopener noreferrer"},k=s("Pre-Signed URL"),v=s("\u6280\u672F\u3002"),b=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7528\u6CD5\uFF1A
   mc share [FLAGS] COMMAND

FLAGS:
  --help, -h                       \u663E\u793A\u5E2E\u52A9\u3002

COMMANDS:
   download   \u751F\u6210\u6709\u4E0B\u8F7D\u6743\u9650\u7684URL\u3002
   upload     \u751F\u6210\u6709\u4E0A\u4F20\u6743\u9650\u7684URL\u3002
   list       \u5217\u51FA\u5148\u524D\u5171\u4EAB\u7684\u5BF9\u8C61\u548C\u6587\u4EF6\u5939\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1share-download-\u5171\u4EAB\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_2-1share-download-\u5171\u4EAB\u4E0B\u8F7D" aria-hidden="true">#</a> 2.1<code>share download</code> - \u5171\u4EAB\u4E0B\u8F7D</h3><p><code>share download</code>\u547D\u4EE4\u751F\u6210\u4E0D\u9700\u8981access key\u548Csecret key\u5373\u53EF\u4E0B\u8F7D\u7684URL\uFF0C\u8FC7\u671F\u53C2\u6570\u8BBE\u7F6E\u6210\u6700\u5927\u6709\u6548\u671F\uFF08\u4E0D\u5927\u4E8E7\u5929\uFF09\uFF0C\u8FC7\u671F\u4E4B\u540E\u6743\u9650\u81EA\u52A8\u56DE\u6536\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copy\u7528\u6CD5\uFF1A
   mc share download [FLAGS] TARGET [TARGET...]

FLAGS:
  --help, -h                       \u663E\u793A\u5E2E\u52A9\u3002
  --recursive, -r          \u9012\u5F52\u5171\u4EAB\u6240\u6709\u5BF9\u8C61\u3002
  --expire, -E &quot;168h&quot;          \u8BBE\u7F6E\u8FC7\u671F\u65F6\u9650\uFF0CNN[h|m|s]\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u793A\u4F8B\uFF1A \u751F\u6210\u4E00\u4E2A\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u67094\u5C0F\u65F6\u8BBF\u95EE\u6743\u9650\u7684URL\u3002</em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mc share download --expire 4h play/mybucket/myobject.txt
URL: https://play.min.io/mybucket/myobject.txt
Expire: 0 days 4 hours 0 minutes 0 seconds
Share: https://play.min.io/mybucket/myobject.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20160408%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20160408T182008Z&amp;X-Amz-Expires=604800&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=1527fc8f21a3a7e39ce3c456907a10b389125047adc552bcd86630b9d459b634
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-share-upload-\u5171\u4EAB\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#_2-2-share-upload-\u5171\u4EAB\u4E0A\u4F20" aria-hidden="true">#</a> 2.2 <code>share upload</code> - \u5171\u4EAB\u4E0A\u4F20</h3><p><code>share upload</code>\u547D\u4EE4\u751F\u6210\u4E0D\u9700\u8981access key\u548Csecret key\u5373\u53EF\u4E0A\u4F20\u7684URL\u3002\u8FC7\u671F\u53C2\u6570\u8BBE\u7F6E\u6210\u6700\u5927\u6709\u6548\u671F\uFF08\u4E0D\u5927\u4E8E7\u5929\uFF09\uFF0C\u8FC7\u671F\u4E4B\u540E\u6743\u9650\u81EA\u52A8\u56DE\u6536\u3002 Content-type\u53C2\u6570\u9650\u5236\u53EA\u5141\u8BB8\u4E0A\u4F20\u6307\u5B9A\u7C7B\u578B\u7684\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7528\u6CD5\uFF1A
   mc share upload [FLAGS] TARGET [TARGET...]

FLAGS:
  --help, -h                       \u663E\u793A\u5E2E\u52A9\u3002
  --recursive, -r              \u9012\u5F52\u5171\u4EAB\u6240\u6709\u5BF9\u8C61\u3002
  --expire, -E &quot;168h&quot;          \u8BBE\u7F6E\u8FC7\u671F\u65F6\u9650\uFF0CNN[h|m|s].
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u793A\u4F8B\uFF1A \u751F\u6210\u4E00\u4E2A<code>curl</code>\u547D\u4EE4\uFF0C\u8D4B\u4E88\u4E0A\u4F20\u5230<code>play/mybucket/myotherobject.txt</code>\u7684\u6743\u9650\u3002</em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mc share upload play/mybucket/myotherobject.txt
URL: https://play.min.io/mybucket/myotherobject.txt
Expire: 7 days 0 hours 0 minutes 0 seconds
Share: curl https://play.min.io/mybucket -F x-amz-date=20160408T182356Z -F x-amz-signature=de343934bd0ba38bda0903813b5738f23dde67b4065ea2ec2e4e52f6389e51e1 -F bucket=mybucket -F policy=eyJleHBpcmF0aW9uIjoiMjAxNi0wNC0xNVQxODoyMzo1NS4wMDdaIiwiY29uZGl0aW9ucyI6W1siZXEiLCIkYnVja2V0IiwibXlidWNrZXQiXSxbImVxIiwiJGtleSIsIm15b3RoZXJvYmplY3QudHh0Il0sWyJlcSIsIiR4LWFtei1kYXRlIiwiMjAxNjA0MDhUMTgyMzU2WiJdLFsiZXEiLCIkeC1hbXotYWxnb3JpdGhtIiwiQVdTNC1ITUFDLVNIQTI1NiJdLFsiZXEiLCIkeC1hbXotY3JlZGVudGlhbCIsIlEzQU0zVVE4NjdTUFFRQTQzUDJGLzIwMTYwNDA4L3VzLWVhc3QtMS9zMy9hd3M0X3JlcXVlc3QiXV19 -F x-amz-algorithm=AWS4-HMAC-SHA256 -F x-amz-credential=Q3AM3UQ867SPQQA43P2F/20160408/us-east-1/s3/aws4_request -F key=myotherobject.txt -F file=@&lt;FILE&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-share-list-\u5217\u51FA\u4E4B\u524D\u7684\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#_2-3-share-list-\u5217\u51FA\u4E4B\u524D\u7684\u5171\u4EAB" aria-hidden="true">#</a> 2.3 share list\` - \u5217\u51FA\u4E4B\u524D\u7684\u5171\u4EAB</h3><p><code>share list</code>\u5217\u51FA\u6CA1\u672A\u8FC7\u671F\u7684\u5171\u4EABURL\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copy\u7528\u6CD5\uFF1A
   mc share list COMMAND

COMMAND:
   upload:   \u5217\u51FA\u5148\u524D\u5171\u4EAB\u7684\u6709\u4E0A\u4F20\u6743\u9650\u7684URL\u3002
   download: \u5217\u51FA\u5148\u524D\u5171\u4EAB\u7684\u6709\u4E0B\u8F7D\u6743\u9650\u7684URL\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-javasdk-\u65B9\u6CD5getpresignedobjecturl" tabindex="-1"><a class="header-anchor" href="#_3-javasdk-\u65B9\u6CD5getpresignedobjecturl" aria-hidden="true">#</a> 3. JavaSdk \u65B9\u6CD5getPresignedObjectUrl</h2><p>\u83B7\u53D6\u5BF9\u8C61\u7684HTTP\u65B9\u6CD5\uFF0C\u5230\u671F\u65F6\u95F4\u548C\u81EA\u5B9A\u4E49\u8BF7\u6C42\u53C2\u6570\u7684\u9884\u7B7E\u540DURL\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Get presigned URL of an object for HTTP method, expiry time and custom request parameters.</span>
<span class="token class-name">String</span> url <span class="token operator">=</span>
    minioClient<span class="token punctuation">.</span><span class="token function">getPresignedObjectUrl</span><span class="token punctuation">(</span>
        <span class="token class-name">GetPresignedObjectUrlArgs</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">Method</span><span class="token punctuation">.</span>DELETE<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">bucket</span><span class="token punctuation">(</span><span class="token string">&quot;my-bucketname&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;my-objectname&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">expiry</span><span class="token punctuation">(</span><span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get presigned URL string to upload &#39;my-objectname&#39; in &#39;my-bucketname&#39; </span>
<span class="token comment">// with response-content-type as application/json and life time as one day.</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> reqParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
reqParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;response-content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> url <span class="token operator">=</span>
    minioClient<span class="token punctuation">.</span><span class="token function">getPresignedObjectUrl</span><span class="token punctuation">(</span>
        <span class="token class-name">GetPresignedObjectUrlArgs</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">Method</span><span class="token punctuation">.</span>PUT<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">bucket</span><span class="token punctuation">(</span><span class="token string">&quot;my-bucketname&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;my-objectname&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">expiry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>DAYS<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">extraQueryParams</span><span class="token punctuation">(</span>reqParams<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get presigned URL string to download &#39;my-objectname&#39; in &#39;my-bucketname&#39; and its life time</span>
<span class="token comment">// is 2 hours.</span>
<span class="token class-name">String</span> url <span class="token operator">=</span>
    minioClient<span class="token punctuation">.</span><span class="token function">getPresignedObjectUrl</span><span class="token punctuation">(</span>
        <span class="token class-name">GetPresignedObjectUrlArgs</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">Method</span><span class="token punctuation">.</span>GET<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">bucket</span><span class="token punctuation">(</span><span class="token string">&quot;my-bucketname&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;my-objectname&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">expiry</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>HOURS<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,18),h={href:"https://docs.min.io/docs/java-client-api-reference.html",target:"_blank",rel:"noopener noreferrer"},g=s("\u5B98\u7F51");function x(y,f){const a=o("ExternalLinkIcon");return c(),p("div",null,[u,n("blockquote",null,[d,n("p",null,[r,n("a",m,[k,e(a)]),v])]),b,n("p",null,[n("a",h,[g,e(a)])])])}var A=i(l,[["render",x],["__file","Minio\u4E34\u65F6\u8BBF\u95EE\u6743\u9650.html.vue"]]);export{A as default};
