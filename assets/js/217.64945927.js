(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{637:function(t,a,s){"use strict";s.r(a);var n=s(16),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、什么是-jsbridge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-jsbridge"}},[t._v("#")]),t._v(" 一、什么是 JSBridge")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("主要是给 JavaScript 提供调用 Native 功能的接口，让混合开发中的前端部分可以方便地使用 Native 的功能（例如：地址位置、摄像头）。")]),t._v(" "),s("p",[t._v("而且 JSBridge 的功能不止调用 Native 功能这么简单宽泛。实际上，JSBridge 就像其名称中的 Bridge 的意义一样，是 Native 和非 Native 之间的桥梁，它的核心是构建 Native 和非 Native 间消息通信的通道，而且这个通信的通道是双向的。")]),t._v(" "),s("blockquote",[s("p",[t._v("双向通信的通道:")]),t._v(" "),s("ul",[s("li",[t._v("JS 向 Native 发送消息: 调用相关功能、通知 Native 当前 JS 的相关状态等。")]),t._v(" "),s("li",[t._v("Native 向 JS 发送消息: 回溯调用结果、消息推送、通知 JS 当前 Native 的状态等。")])])]),t._v(" "),s("p",[t._v("H5 与 Native 交互如下图：\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019062410483862.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l1emhlbmdmZWk3,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("h2",{attrs:{id:"二、jsbridge-的实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、jsbridge-的实现原理"}},[t._v("#")]),t._v(" 二、JSBridge 的实现原理")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("JavaScript 是运行在一个单独的 JS Context 中（例如，WebView 的 Webkit 引擎、JSCore）。由于这些 Context 与原生运行环境的天然隔离，我们可以将这种情况与 RPC（Remote Procedure Call，远程过程调用）通信进行类比，将 Native 与 JavaScript 的每次互相调用看做一次 RPC 调用。")]),t._v(" "),s("p",[t._v("在 JSBridge 的设计中，可以把前端看做 RPC 的客户端，把 Native 端看做 RPC 的服务器端，从而 JSBridge 要实现的主要逻辑就出现了：通信调用（Native 与 JS 通信） 和句柄解析调用。")]),t._v(" "),s("h2",{attrs:{id:"三、jsbridge-的通信原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、jsbridge-的通信原理"}},[t._v("#")]),t._v(" 三、JSBridge 的通信原理")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"_1-javascript-调用-native-的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-javascript-调用-native-的方式"}},[t._v("#")]),t._v(" 1.JavaScript 调用 Native 的方式")]),t._v(" "),s("p",[t._v("主要有两种：注入 API 和 拦截 URL SCHEME。")]),t._v(" "),s("h4",{attrs:{id:"_1-1-注入-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-注入-api"}},[t._v("#")]),t._v(" 1.1 注入 API")]),t._v(" "),s("p",[t._v("注入 API 方式的主要原理是，通过 WebView 提供的接口，向 JavaScript 的 Context（window）中注入对象或者方法，让 JavaScript 调用时，直接执行相应的 Native 代码逻辑，达到 JavaScript 调用 Native 的目的。")]),t._v(" "),s("p",[t._v("对于 iOS 的 UIWebView，实例如下：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    JSContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("uiWebView valueForKeyPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"documentView.webView.mainFrame.javaScriptContext"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postBridgeMessage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSArray"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NSArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("calls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Native 逻辑")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//前端调用方式：")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postBridgeMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n对于 iOS 的 WKWebView 可以用以下方式：\n\n    @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WKWebVIewVC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WKScriptMessageHandler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    @implementation WKWebVIewVC\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidLoad "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" viewDidLoad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        WKWebViewConfiguration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" configuration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WKWebViewConfiguration alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        configuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userContentController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WKUserContentController alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        WKUserContentController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("userCC "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" configuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userContentController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注入对象，前端调用其方法时，Native 可以捕获到")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("userCC addScriptMessageHandler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("self name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nativeBridge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        WKWebView wkWebView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WKWebView alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame configuration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("configuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO 显示 WebView")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("userContentController"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WKUserContentController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("userContentController didReceiveScriptMessage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WKScriptMessage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name isEqualToString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nativeBridge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"前端传递的数据 %@: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Native 逻辑")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前端调用方式：")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("messageHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeBridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"_1-2-拦截-url-scheme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-拦截-url-scheme"}},[t._v("#")]),t._v(" 1.2 拦截 URL SCHEME")]),t._v(" "),s("p",[t._v("解释一下 URL SCHEME：URL SCHEME 是一种类似于 url 的链接，是为了方便 app 直接互相调用设计的，形式和普通的 url 近似，主要区别是 protocol 和 host 一般是自定义的。")]),t._v(" "),s("blockquote",[s("p",[t._v("例如:")]),t._v(" "),s("p",[t._v("qunarhy://hy/url?url=ymfe.tech，")]),t._v(" "),s("p",[t._v("protocol 是 qunarhy，host 则是 hy。")])]),t._v(" "),s("p",[t._v("拦截 URL SCHEME 的主要流程是：Web 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 URL SCHEME（包括所带的参数）进行相关操作。")]),t._v(" "),s("p",[t._v("在时间过程中，这种方式有一定的缺陷：")]),t._v(" "),s("ul",[s("li",[t._v("使用 iframe.src 发送 URL SCHEME 会有 url 长度的隐患。")])]),t._v(" "),s("blockquote",[s("p",[t._v("有些方案为了规避 url 长度隐患的缺陷，在 iOS 上采用了使用 Ajax 发送同域请求的方式，并将参数放到 head 或 body 里。这样，虽然规避了 url 长度的隐患，但是 WKWebView 并不支持这样的方式。")]),t._v(" "),s("p",[t._v("为什么选择 iframe.src 不选择 locaiton.href ？")]),t._v(" "),s("p",[t._v("因为如果通过 location.href 连续调用 Native，很容易丢失一些调用。")])]),t._v(" "),s("ul",[s("li",[t._v("创建请求，需要一定的耗时，比注入 API 的方式调用同样的功能，耗时会较长。")])]),t._v(" "),s("p",[t._v("因此：JavaScript 调用 Native 推荐使用注入 API 的方式")]),t._v(" "),s("h3",{attrs:{id:"_2-native-调用-javascript-的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-native-调用-javascript-的方式"}},[t._v("#")]),t._v(" 2.Native 调用 JavaScript 的方式")]),t._v(" "),s("p",[t._v("相比于 JavaScript 调用 Native， Native 调用 JavaScript 较为简单，直接执行拼接好的 JavaScript 代码即可。")]),t._v(" "),s("p",[t._v("从外部调用 JavaScript 中的方法，因此 JavaScript 的方法必须在全局的 window 上。")]),t._v(" "),s("p",[t._v("对于 iOS 的 UIWebView，示例如下：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("uiWebview stringByEvaluatingJavaScriptFromString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("javaScriptString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" javaScriptString为JavaScript 代码串\n\n对于 iOS 的 WKWebView，示例如下：\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("wkWebView evaluateJavaScript"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("javaScriptString completionHandler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("completionHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"四、jsbridge-接口实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、jsbridge-接口实现"}},[t._v("#")]),t._v(" 四、JSBridge 接口实现")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("从上面的剖析中，可以得知，JSBridge 的接口主要功能有两个：调用 Native（给 Native 发消息） 和 接被 Native 调用（接收 Native 消息）。因此，JSBridge 可以设计如下：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JSBridge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 Native")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("invoke")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断环境，获取不同的 nativeBridge")]),t._v("\n    nativeBridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("receiveMessage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理 msg")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("在上面部分中，提到过 RPC 中有一个非常重要的环节是 "),s("strong",[t._v("句柄解析调用")]),t._v(" ，这点在 JSBridge 中体现为 "),s("strong",[t._v("句柄与功能对应关系")]),t._v("。同时，我们将句柄抽象为 "),s("strong",[t._v("桥名（BridgeName）")]),t._v("，最终演化为一个 BridgeName 对应一个 Native 功能或者一类 Native 消息。基于此点，JSBridge 的实现可以优化为如下：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JSBridge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 Native")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("invoke")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("bridgeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断环境，获取不同的 nativeBridge")]),t._v("\n    nativeBridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bridgeName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bridgeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("receiveMessage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bridgeName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bridgeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体逻辑")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("p",[t._v("终极提问：消息都是单向的，那么调用 Native 功能时 Callback 怎么实现的？")]),t._v(" "),s("p",[t._v("对于 JSBridge 的 Callback ，其实就是 RPC 框架的回调机制。当然也可以用更简单的 JSONP 机制解释：")]),t._v(" "),s("blockquote",[s("p",[t._v("当发送 JSONP 请求时，url 参数里会有 callback 参数，其值是 当前页面唯一 的，而同时以此参数值为 key 将回调函数存到 window 上，随后，服务器返回 script 中，也会以此参数值作为句柄，调用相应的回调函数。")])]),t._v(" "),s("p",[s("strong",[t._v("整体流程")]),t._v("：")]),t._v(" "),s("p",[t._v("在 Native 端配合实现 JSBridge 的 JavaScript 调用 Native 逻辑也很简单，主要的代码逻辑是：接收到 JavaScript 消息 => 解析参数，拿到 bridgeName、data 和 callbackId => 根据 bridgeName 找到功能方法，以 data 为参数执行 => 执行返回值和 callbackId 一起回传前端。")]),t._v(" "),s("p",[t._v("*"),s("strong",[t._v("*Native 调用 JavaScript**")]),t._v(" 也同样简单，直接自动生成一个唯一的 ResponseId，并存储句柄，然后和 data 一起发送给前端即可。")]),t._v(" "),s("h2",{attrs:{id:"五、jsbridge-的引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、jsbridge-的引用"}},[t._v("#")]),t._v(" 五、JSBridge 的引用")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("对于 JSBridge 的引用，常用有如下两种方式，但各有利弊。")]),t._v(" "),s("h3",{attrs:{id:"_1-由-native-端进行注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-由-native-端进行注入"}},[t._v("#")]),t._v(" 1.由 Native 端进行注入")]),t._v(" "),s("p",[t._v("注入方式和 Native 调用 JavaScript 类似，直接执行桥的全部代码。")]),t._v(" "),s("p",[t._v("它的优点是：")]),t._v(" "),s("blockquote",[s("p",[t._v("桥的版本很容易与 Native 保持一致，Native 端不用对不同版本的 JSBridge 进行兼容。")])]),t._v(" "),s("p",[t._v("它的缺点是：")]),t._v(" "),s("blockquote",[s("p",[t._v("注入时机不确定，需要实现注入失败后重试的机制，保证注入的成功率，同时 JavaScript 端在调用接口时，需要优先判断 JSBridge 是否已经注入成功。")])]),t._v(" "),s("h3",{attrs:{id:"_2-由-javascript-端引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-由-javascript-端引用"}},[t._v("#")]),t._v(" 2.由 JavaScript 端引用")]),t._v(" "),s("p",[t._v("直接与 JavaScript 一起执行。")]),t._v(" "),s("p",[t._v("它的优点是：")]),t._v(" "),s("blockquote",[s("p",[t._v("JavaScript 端可以确定 JSBridge 的存在，直接调用即可。")])]),t._v(" "),s("p",[t._v("它的缺点是：")]),t._v(" "),s("blockquote",[s("p",[t._v("如果桥的实现方式有更改，JSBridge 需要兼容多版本的 Native Bridge 或者 Native Bridge 兼容多版本的 JSBridge。")])]),t._v(" "),s("h2",{attrs:{id:"推荐阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[t._v("#")]),t._v(" 推荐阅读")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6981388210580488206#heading-10",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSBridge原理解析-字节ADFE"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);