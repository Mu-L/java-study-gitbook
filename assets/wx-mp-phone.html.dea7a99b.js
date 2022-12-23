import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.b742c861.js";const e={},p=t(`<h1 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u83B7\u53D6\u624B\u673A\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u83B7\u53D6\u624B\u673A\u53F7" aria-hidden="true">#</a> \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u83B7\u53D6\u624B\u673A\u53F7</h1><h2 id="_1-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9E\u73B0" aria-hidden="true">#</a> 1. \u5B9E\u73B0</h2><p>\u4F7F\u7528open-type \u7684\u5F00\u653E\u80FD\u529B</p><ul><li>getPhoneNumber\uFF1A\u83B7\u53D6\u7528\u6237\u624B\u673A\u53F7\uFF0C\u53EF\u4EE5\u4ECE@getphonenumber\u56DE\u8C03\u4E2D\u83B7\u53D6\u5230\u7528\u6237\u4FE1\u606F</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPhoneNumber<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@getphonenumber</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>decryptPhoneNumber<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u83B7\u53D6\u624B\u673A\u53F7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u670D\u52A1\u7AEF\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_2-\u670D\u52A1\u7AEF\u89E3\u6790" aria-hidden="true">#</a> 2. \u670D\u52A1\u7AEF\u89E3\u6790</h2><ul><li>wxMaUserService.getPhoneNoInfo(sessionKey, request.getEncryptedData(), request.getIv());</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">UmsMember</span> <span class="token function">getPhoneNoInfo</span><span class="token punctuation">(</span><span class="token class-name">GetWxPhoneRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> appId <span class="token operator">=</span> <span class="token class-name">ThirdSessionHolder</span><span class="token punctuation">.</span><span class="token function">getThirdSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAppId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> sessionKey <span class="token operator">=</span> <span class="token class-name">ThirdSessionHolder</span><span class="token punctuation">.</span><span class="token function">getThirdSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSessionKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Long</span> wxUserId <span class="token operator">=</span> <span class="token class-name">ThirdSessionHolder</span><span class="token punctuation">.</span><span class="token function">getThirdSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getWxUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">WxMaUserService</span> wxMaUserService <span class="token operator">=</span> <span class="token class-name">WxMaConfiguration</span><span class="token punctuation">.</span><span class="token function">getMaService</span><span class="token punctuation">(</span>appId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">WxMaPhoneNumberInfo</span> phoneNoInfo <span class="token operator">=</span> wxMaUserService<span class="token punctuation">.</span><span class="token function">getPhoneNoInfo</span><span class="token punctuation">(</span>sessionKey<span class="token punctuation">,</span>
				request<span class="token punctuation">.</span><span class="token function">getEncryptedData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				request<span class="token punctuation">.</span><span class="token function">getIv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">UmsMember</span> umsMember <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UmsMember</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		umsMember<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>wxUserId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		umsMember<span class="token punctuation">.</span><span class="token function">setPhone</span><span class="token punctuation">(</span>phoneNoInfo<span class="token punctuation">.</span><span class="token function">getPurePhoneNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		umsMemberService<span class="token punctuation">.</span><span class="token function">updateUmsMember</span><span class="token punctuation">(</span>umsMember<span class="token punctuation">)</span><span class="token punctuation">;</span>
		umsMember <span class="token operator">=</span> umsMemberService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>umsMember<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> umsMember<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(u,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","wx-mp-phone.html.vue"]]);export{k as default};
