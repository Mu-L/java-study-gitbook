const e=JSON.parse('{"key":"v-3f405675","path":"/arch/manage-system/manage-system-springsecurity-rbac.html","title":"SpringSecurity\u6743\u9650\u63A7\u5236&\u5B9E\u73B0\u601D\u8DEF","lang":"zh-CN","frontmatter":{"summary":"SpringSecurity\u6743\u9650\u63A7\u5236&\u5B9E\u73B0\u601D\u8DEF 1. \u7B80\u4ECB \u6743\u9650\u63A7\u5236\u662F\u9879\u76EE\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u90E8\u5206 2. \u8868\u7ED3\u6784 \u5B9E\u4F53 \u8868 \u8BF4\u660E :---------- :-------------- :------------- SysUser sys_user \u7528\u6237\u4FE1\u606F SysRole sys_role \u7528\u6237\u4FE1\u606F SysUserRole sysuserrole \u7528\u6237\u548C\u89D2\u8272\u5173\u8054 ","head":[["meta",{"property":"og:url","content":"https://java.isture.com/arch/manage-system/manage-system-springsecurity-rbac.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"SpringSecurity\u6743\u9650\u63A7\u5236&\u5B9E\u73B0\u601D\u8DEF"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-08T08:42:23.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-08T08:42:23.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. \u8868\u7ED3\u6784","slug":"_2-\u8868\u7ED3\u6784","children":[{"level":3,"title":"2.1 SysUser","slug":"_2-1-sysuser","children":[]},{"level":3,"title":"2.2 SysRole","slug":"_2-2-sysrole","children":[]},{"level":3,"title":"2.3  SysUserRole","slug":"_2-3-sysuserrole","children":[]},{"level":3,"title":"2.4 SysMenu","slug":"_2-4-sysmenu","children":[]},{"level":3,"title":"2.5 SysRoleMenu","slug":"_2-5-sysrolemenu","children":[]}]},{"level":2,"title":"3. SecurityConfig","slug":"_3-securityconfig","children":[{"level":3,"title":"3.1 \u5B9E\u73B0 AuthenticationManager\u8BA4\u8BC1\u7BA1\u7406\u5668","slug":"_3-1-\u5B9E\u73B0-authenticationmanager\u8BA4\u8BC1\u7BA1\u7406\u5668","children":[]},{"level":3,"title":"3.2 \u914D\u7F6E URL \u7684\u6743\u9650","slug":"_3-2-\u914D\u7F6E-url-\u7684\u6743\u9650","children":[]},{"level":3,"title":"3.3 \u91CD\u5199 #authenticationManagerBean \u65B9\u6CD5","slug":"_3-3-\u91CD\u5199-authenticationmanagerbean-\u65B9\u6CD5","children":[]}]},{"level":2,"title":"4. \u767B\u5F55 API \u63A5\u53E3","slug":"_4-\u767B\u5F55-api-\u63A5\u53E3","children":[{"level":3,"title":"4.1 \u767B\u5F55\u63A5\u53E3","slug":"_4-1-\u767B\u5F55\u63A5\u53E3","children":[]},{"level":3,"title":"4.2 \u767B\u5F55service","slug":"_4-2-\u767B\u5F55service","children":[]},{"level":3,"title":"4.3 \u52A0\u8F7D\u7528\u6237\u4FE1\u606F","slug":"_4-3-\u52A0\u8F7D\u7528\u6237\u4FE1\u606F","children":[]}]},{"level":2,"title":"5. \u521B\u5EFA\u8BA4\u8BC1 Token","slug":"_5-\u521B\u5EFA\u8BA4\u8BC1-token","children":[{"level":3,"title":"5.1 JwtAuthenticationTokenFilter","slug":"_5-1-jwtauthenticationtokenfilter","children":[]}]},{"level":2,"title":"6. \u6743\u9650\u9A8C\u8BC1","slug":"_6-\u6743\u9650\u9A8C\u8BC1","children":[{"level":3,"title":"6.1 \u5224\u65AD\u662F\u5426\u6709\u6743\u9650","slug":"_6-1-\u5224\u65AD\u662F\u5426\u6709\u6743\u9650","children":[]},{"level":3,"title":"6.2 \u5224\u65AD\u662F\u5426\u6709\u89D2\u8272","slug":"_6-2-\u5224\u65AD\u662F\u5426\u6709\u89D2\u8272","children":[]}]},{"level":2,"title":"7. \u5404\u79CD\u5904\u7406\u5668","slug":"_7-\u5404\u79CD\u5904\u7406\u5668","children":[{"level":3,"title":"7.1 AuthenticationEntryPointImpl","slug":"_7-1-authenticationentrypointimpl","children":[]},{"level":3,"title":"6.2 GlobalExceptionHandler","slug":"_6-2-globalexceptionhandler","children":[]},{"level":3,"title":"7.3 LogoutSuccessHandlerImpl","slug":"_7-3-logoutsuccesshandlerimpl","children":[]}]},{"level":2,"title":"8. \u83B7\u5F97\u7528\u6237\u4FE1\u606F API \u63A5\u53E3","slug":"_8-\u83B7\u5F97\u7528\u6237\u4FE1\u606F-api-\u63A5\u53E3","children":[]},{"level":2,"title":"9. \u83B7\u53D6\u8DEF\u7531\u4FE1\u606F","slug":"_9-\u83B7\u53D6\u8DEF\u7531\u4FE1\u606F","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662626543000,"updatedTime":1662626543000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":24.99,"words":7497},"filePathRelative":"arch/manage-system/manage-system-springsecurity-rbac.md","localizedDate":"2022\u5E749\u67088\u65E5"}');export{e as data};
