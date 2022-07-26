(window.webpackJsonp=window.webpackJsonp||[]).push([[804],{1180:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"权限认证基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限认证基础"}},[t._v("#")]),t._v(" 权限认证基础")]),t._v(" "),a("h2",{attrs:{id:"_1-认证-authentication-和授权-authorization-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-认证-authentication-和授权-authorization-的区别"}},[t._v("#")]),t._v(" 1. 认证（Authentication）和授权（Authorization）的区别？")]),t._v(" "),a("p",[t._v("这是一个很多人都会混淆的问题。")]),t._v(" "),a("p",[t._v("简单点：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("认证（Authentication")]),t._v("）:你是谁")]),t._v(" "),a("li",[a("strong",[t._v("授权（Authorization）")]),t._v("：你有权限干什么")])]),t._v(" "),a("p",[t._v("正式点：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Authentication（认证）")]),t._v("：是验证您的身份的凭据（例如用户名/用户ID和密码），通过这个凭据，系统得以知道你是谁。也就是说系统存在你这个用户。所以，"),a("strong",[t._v("Authentication 被称为身份/用户验证")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 用户认证\n     *\n     * @param authenticationToken 身份认证 token\n     * @return AuthenticationInfo 身份认证信息\n     * @throws AuthenticationException 认证相关异常\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticationInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doGetAuthenticationInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticationToken")]),t._v(" authenticationToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticationException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrincipal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javaboy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnknownAccountException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"账户不存在!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleAuthenticationInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Authorization（授权）")]),t._v("：发生在Authentication(认证)之后。授权主要掌管我们访问系统的权限。比如有些特定资源只能具有特定权限的人才能访问，比如admin，有些对系统资源操作比如删除，添加、更新只能特定人才有")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 授权模块，获取用户角色和权限\n *\n * @param token token\n * @return AuthorizationInfo 权限信息\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthorizationInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doGetAuthorizationInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrincipalCollection")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JWTUtil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleAuthorizationInfo")]),t._v(" simpleAuthorizationInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleAuthorizationInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户角色集")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" roleSet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserRoles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    simpleAuthorizationInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRoles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roleSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户权限集")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" permissionSet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserPermissions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    simpleAuthorizationInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStringPermissions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("permissionSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" simpleAuthorizationInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_2-什么是token-什么是jwt-如何基于token进行身份验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是token-什么是jwt-如何基于token进行身份验证"}},[t._v("#")]),t._v(" 2. 什么是Token？什么是JWT?如何基于Token进行身份验证？")]),t._v(" "),a("h3",{attrs:{id:"_2-1-为什么要使用token-session-的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-为什么要使用token-session-的缺点"}},[t._v("#")]),t._v(" 2.1 为什么要使用Token/session 的缺点")]),t._v(" "),a("ol",[a("li",[t._v("session 保存在内存中，随着使用者增多，开销大")]),t._v(" "),a("li",[t._v("分布式 session 还会面临session 共享问题")]),t._v(" "),a("li",[t._v("CSRF: cookie 如果被拦截，使用者就会很容易受到跨站伪造请求的攻击")])]),t._v(" "),a("p",[t._v("我们知道session 可以用来鉴别用户的身份，我们Session 信息需要保存一份在服务端。这种方式会带来一些麻烦，比如需要我们保证保存**session 信息的服务器的可用性，不适合移动端（依赖Cookie）**等等")]),t._v(" "),a("blockquote",[a("p",[t._v("移动端有Cookie，但还是需要手动实现cookie持久化。默认是非持久化生命周期跟app保持一致。还需要再写拦截器每次封装进请求header")])]),t._v(" "),a("p",[t._v("有没有一种不需要自己存放 Session 信息就能实现身份验证的方式呢？使用 "),a("strong",[t._v("Token")]),t._v(" 即可！JWT （JSON Web Token） 就是这种方式的实现，通过这种方式服务器端就不需要保存 Session 数据了，"),a("strong",[t._v("只用在客户端保存服务端返回给客户的 Token 就可以了")]),t._v("，扩展性得到提升。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-什么是jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-什么是jwt"}},[t._v("#")]),t._v(" 2.2 什么是JWT")]),t._v(" "),a("p",[a("strong",[t._v("JWT（JSON Web Token）  本质上就一段签名的 JSON 格式的数据。由于它是带有签名的，因此接收者便可以验证它的真实性。")])]),t._v(" "),a("p",[t._v("JWT 由3部分构成")]),t._v(" "),a("ol",[a("li",[t._v("Header：描述JWT 的元数据。定义了生成签名的算法以及token的类型")]),t._v(" "),a("li",[t._v("Payload（负载）：用来存放实际需要传递的数据")]),t._v(" "),a("li",[t._v("Signature（签名）：服务器通过Payload、Header 和一个密钥（secret）使用Header里面指定的算法签名（默认是HMAC SHA256）生成")])]),t._v(" "),a("p",[t._v("在基于 Token 进行身份验证的的应用程序中，服务器通过"),a("code",[t._v("Payload")]),t._v("、"),a("code",[t._v("Header")]),t._v("和一个密钥("),a("code",[t._v("secret")]),t._v(")创建令牌（"),a("code",[t._v("Token")]),t._v("）并将 "),a("code",[t._v("Token")]),t._v(" 发送给客户端，客户端将 "),a("code",[t._v("Token")]),t._v(" 保存在 Cookie 或者 localStorage 里面，以后客户端发出的所有请求都会携带这个令牌。你可以把它放在 Cookie 里面自动发送，但是这样不能跨域，所以更好的做法是放在 HTTP Header 的 Authorization字段中："),a("code",[t._v("Authorization: Bearer Token")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_2-3-jwt-工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-jwt-工作流程"}},[t._v("#")]),t._v(" 2.3 JWT 工作流程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191018002517227.png",alt:"image-20191018002517227"}})]),t._v(" "),a("ol",[a("li",[t._v("用户向服务器发送用户名和密码用于登陆系统")]),t._v(" "),a("li",[t._v("身份验证服务响应并返回了签名的 JWT，上面包含了用户是谁的内容")]),t._v(" "),a("li",[t._v("用户以后每次想后端发请求都在Header中带上 JWT")]),t._v(" "),a("li",[t._v("服务端检查JWT 并从中获取用户相关信息")])]),t._v(" "),a("h2",{attrs:{id:"_3-什么是oauth-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是oauth-2-0"}},[t._v("#")]),t._v(" 3. 什么是OAuth 2.0?")]),t._v(" "),a("p",[t._v("OAuth 是行业的标准授权协议，主要用来授权第三方应用获取有限的权限。")]),t._v(" "),a("blockquote",[a("p",[t._v("而 OAuth 2.0是对 OAuth 1.0 的完全重新设计，OAuth 2.0更快，更容易实现，OAuth 1.0 已经被废弃")])]),t._v(" "),a("p",[t._v("实际上他就是一种授权机制，他的最终目的是为第三方应用颁发一个有时效性的令牌token。使得第三方应用能够通过该令牌获取相关资源")]),t._v(" "),a("p",[a("strong",[t._v("使用场景")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第三方登录：")]),t._v(" "),a("p",[t._v("当你的网站接入了第三方登录的时候一般就是使用的 OAuth 2.0 协议。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);