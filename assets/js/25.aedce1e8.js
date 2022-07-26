(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{402:function(e,n,t){"use strict";t.r(n);var a=t(26),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"android调用js方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android调用js方法"}},[e._v("#")]),e._v(" Android调用js方法")]),e._v(" "),t("p",[e._v("本文参考"),t("a",{attrs:{href:"https://www.jianshu.com/p/345f4d8a5cfa",target:"_blank",rel:"noopener noreferrer"}},[e._v("博客原文"),t("OutboundLink")],1),e._v("整理，并对他进行补充扩展，并对原文深表感谢。")]),e._v(" "),t("p",[e._v("对于Android调用JS代码的方法有2种：")]),e._v(" "),t("ol",[t("li",[e._v("通过"),t("code",[e._v("WebView")]),e._v("的"),t("code",[e._v("loadUrl（）")])]),e._v(" "),t("li",[e._v("通过"),t("code",[e._v("WebView")]),e._v("的"),t("code",[e._v("evaluateJavascript（）")])])]),e._v(" "),t("p",[e._v("##方式1：通过"),t("code",[e._v("WebView")]),e._v("的"),t("code",[e._v("loadUrl（）")])]),e._v(" "),t("p",[t("strong",[e._v("步骤1：将需要调用的JS代码以.html格式放到src/main/assets文件夹里")])]),e._v(" "),t("p",[t("em",[e._v("需要加载JS代码：javascript.html")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 文本名：javascript\n<!DOCTYPE html>\n<html>\n\n   <head>\n      <meta charset="utf-8">\n      <title>Carson_Ho</title>\n      \n// JS代码\n     <script>\n// Android需要调用的方法\n   function callJS(){\n      alert("Android调用了JS的callJS方法");\n   }\n<\/script>\n\n   </head>\n\n</html>\n')])])]),t("p",[t("strong",[e._v("步骤2：在Android里通过WebView设置调用JS代码")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class MainActivity extends AppCompatActivity {\n\n    WebView mWebView;\n    Button button;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n\n        mWebView =(WebView) findViewById(R.id.webview);\n\n        WebSettings webSettings = mWebView.getSettings();\n\n        // 设置与Js交互的权限\n        webSettings.setJavaScriptEnabled(true);\n        // 设置允许JS弹窗\n        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);\n\n        // 先载入JS代码\n        // 格式规定为:file:///android_asset/文件名.html\n        mWebView.loadUrl("file:///android_asset/javascript.html");\n\n        button = (Button) findViewById(R.id.button);\n\n\n        button.setOnClickListener(new View.OnClickListener() {\n            @Override\n            public void onClick(View v) {\n                // 通过Handler发送消息\n                mWebView.post(new Runnable() {\n                    @Override\n                    public void run() {\n\n                        // 注意调用的JS方法名要对应上\n                        // 调用javascript的callJS()方法\n                        mWebView.loadUrl("javascript:callJS()");\n                    }\n                });\n                \n            }\n        });\n\n        // 由于设置了弹窗检验调用结果,所以需要支持js对话框\n        // webview只是载体，内容的渲染需要使用webviewChromClient类去实现\n        // 通过设置WebChromeClient对象处理JavaScript的对话框\n        //设置响应js 的Alert()函数\n        mWebView.setWebChromeClient(new WebChromeClient() {\n            @Override\n            public boolean onJsAlert(WebView view, String url, String message, final JsResult result) {\n                AlertDialog.Builder b = new AlertDialog.Builder(MainActivity.this);\n                b.setTitle("Alert");\n                b.setMessage(message);\n                b.setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {\n                    @Override\n                    public void onClick(DialogInterface dialog, int which) {\n                        result.confirm();\n                    }\n                });\n                b.setCancelable(false);\n                b.create().show();\n                return true;\n            }\n\n        });\n\n\n    }\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/944365-826d0aa065f70cb1.png",alt:"效果如图所示"}})]),e._v(" "),t("p",[t("strong",[e._v("特别注意：JS代码调用一定要在 onPageFinished（） 回调之后才能调用，否则不会调用。")])]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("onPageFinished()")]),e._v("属于WebViewClient类的方法，主要在页面加载结束时调用")])]),e._v(" "),t("p",[e._v("##方式2：通过"),t("code",[e._v("WebView")]),e._v("的"),t("code",[e._v("evaluateJavascript（）")])]),e._v(" "),t("ul",[t("li",[e._v("优点：该方法比第一种方法效率更高、使用更简洁。")])]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("因为该方法的执行不会使页面刷新，而第一种方法（loadUrl ）的执行则会。")]),e._v(" "),t("li",[e._v("Android 4.4 后才可使用")])])]),e._v(" "),t("ul",[t("li",[e._v("具体使用")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 只需要将第一种方法的loadUrl()换成下面该方法即可\n    mWebView.evaluateJavascript（"javascript:callJS()", new ValueCallback<String>() {\n        @Override\n        public void onReceiveValue(String value) {\n            //此处为 js 返回的结果\n        }\n    });\n}\n')])])]),t("h2",{attrs:{id:"方法对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法对比"}},[e._v("#")]),e._v(" 方法对比")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/944365-30f095d4c9e638fd.png",alt:"方法对比"}})]),e._v(" "),t("h2",{attrs:{id:"使用建议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用建议"}},[e._v("#")]),e._v(" 使用建议")]),e._v(" "),t("p",[e._v("两种方法混合使用，即Android 4.4以下使用方法1，Android 4.4以上方法2")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Android版本变量\nfinal int version = Build.VERSION.SDK_INT;\n// 因为该方法在 Android 4.4 版本才可使用，所以使用时需进行版本判断\nif (version < 18) {\n    mWebView.loadUrl("javascript:callJS()");\n} else {\n    mWebView.evaluateJavascript（"javascript:callJS()", new ValueCallback<String>() {\n        @Override\n        public void onReceiveValue(String value) {\n            //此处为 js 返回的结果\n        }\n    });\n}\n')])])])])}),[],!1,null,null,null);n.default=i.exports}}]);