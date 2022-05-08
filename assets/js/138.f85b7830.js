(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{551:function(t,e,s){"use strict";s.r(e);var a=s(16),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ssr-服务端渲染的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr-服务端渲染的优缺点"}},[t._v("#")]),t._v(" "),s("strong",[t._v("（SSR）服务端渲染的优缺点")])]),t._v(" "),s("h3",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" "),s("strong",[t._v("优点：")])]),t._v(" "),s("p",[t._v("1.前端耗时少，首屏加载速度快。因为后端拼接完了html，浏览器只需要直接渲染出来。")]),t._v(" "),s("p",[t._v("2.有利于SEO。因为在后端有完整的html页面，所以爬虫更容易爬取获得信息，更有利于seo。")]),t._v(" "),s("p",[t._v("3.无需占用客户端资源。即解析模板的工作完全交由后端来做，客户端只要解析标准的html页面即可，这样对于客户端的资源占用更少，尤其是移动端，也可以更省电。")]),t._v(" "),s("p",[t._v("4.后端生成静态化文件。即生成缓存片段，这样就可以减少数据库查询浪费的时间了，且对于数据变化不大的页面非常高效 。")]),t._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" "),s("strong",[t._v("缺点：")])]),t._v(" "),s("p",[t._v("1.不利于前后端分离，开发效率低。(无框架前)")]),t._v(" "),s("p",[t._v("2.占用服务器端资源。")]),t._v(" "),s("p",[t._v("即服务器端完成html模板的解析，如果请求较多，会对服务器造成一定的访问压力。而如果使用前端渲染，就是把这些解析的压力分摊了前端，而这里确实完全交给了一个服务器。")]),t._v(" "),s("h1",{attrs:{id:"nuxt-js起源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-js起源"}},[t._v("#")]),t._v(" # Nuxt.js起源")]),t._v(" "),s("p",[t._v("2016 年 10 月 25 日， "),s("a",{attrs:{href:"https://zeit.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zeit.co"),s("OutboundLink")],1),t._v(" 背后的团队对外发布了 "),s("a",{attrs:{href:"https://zeit.co/blog/next",target:"_blank",rel:"noopener noreferrer"}},[t._v("Next.js"),s("OutboundLink")],1),t._v(" ，一个 React 的服务端渲染应用框架。几小时后，与 Next.js 异曲同工，一个基于 "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js"),s("OutboundLink")],1),t._v(" 的服务端渲染应用框架应运而生，我们称之为：Nuxt.js。")]),t._v(" "),s("p",[t._v("Nuxt 是服务器呈现的简约应用程序的框架，通过对客户端和服务端基础架构的抽象，Nuxt.js 可以让开发者更专注于页面的UI渲染。作用就是在 node.js 上进一步封装，然后省去我们搭建服务端环境的步骤，只需要遵循这个库的一些规则就能轻松实现 SSR。")]),t._v(" "),s("h1",{attrs:{id:"作用及特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用及特性"}},[t._v("#")]),t._v(" 作用及特性")]),t._v(" "),s("ul",[s("li",[t._v("通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 "),s("strong",[t._v("UI 渲染")]),t._v("。")]),t._v(" "),s("li",[t._v("Nuxt.js 预设了利用 Vue.js 开发"),s("strong",[t._v("服务端渲染")]),t._v("的应用所需要的各种配置。")]),t._v(" "),s("li",[t._v("支持 Vue.js 应用的静态化，通过 nuxt generate 命令实现。")]),t._v(" "),s("li",[t._v("基于 Vue.js")]),t._v(" "),s("li",[t._v("自动代码分层")]),t._v(" "),s("li",[t._v("服务端渲染")]),t._v(" "),s("li",[t._v("强大的路由功能，支持异步数据")]),t._v(" "),s("li",[t._v("静态文件服务")]),t._v(" "),s("li",[t._v("ES2015+ 语法支持")]),t._v(" "),s("li",[t._v("打包和压缩 JS 和 CSS")]),t._v(" "),s("li",[t._v("HTML 头部标签管理")]),t._v(" "),s("li",[t._v("本地开发支持热加载")]),t._v(" "),s("li",[t._v("集成 ESLint")]),t._v(" "),s("li",[t._v("支持各种样式预处理器：SASS、LESS、Stylus 等等")]),t._v(" "),s("li",[t._v("支持 HTTP/2 推送")])]),t._v(" "),s("h1",{attrs:{id:"核心原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心原理"}},[t._v("#")]),t._v(" 核心原理")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe78bba9a0ba2?w=1000&h=212&f=png&s=61053",alt:"图片"}})]),t._v(" "),s("p",[t._v("Nuxt.js 集成了以下组件/框架，用于开发完整而强大的 Web 应用：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 2"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-Router"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuex",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex"),s("OutboundLink")],1),t._v(" (当配置了 "),s("a",{attrs:{href:"https://zh.nuxtjs.org/guide/vuex-store",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex 状态树配置项"),s("OutboundLink")],1),t._v(" 时才会引入)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://ssr.vuejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 服务器端渲染"),s("OutboundLink")],1),t._v(" (排除使用 "),s("a",{attrs:{href:"https://zh.nuxtjs.org/api/configuration-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("mode: 'spa'"),s("OutboundLink")],1),t._v(" )")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/nuxt/vue-meta",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-Meta"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("压缩并 gzip 后，总代码大小为："),s("strong",[t._v("57kb")]),t._v(" （如果使用了 Vuex 特性的话为 60kb）。")]),t._v(" "),s("p",[t._v("另外，Nuxt.js 使用 "),s("a",{attrs:{href:"https://github.com/webpack/webpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-loader"),s("OutboundLink")],1),t._v(" 、 "),s("a",{attrs:{href:"https://github.com/babel/babel-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-loader"),s("OutboundLink")],1),t._v(" 来处理代码的自动化构建工作（如打包、代码分层、压缩等等）。")]),t._v(" "),s("p",[s("strong",[t._v("work flow：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe78b7c2b0762?w=460&h=600&f=png&s=28394",alt:"图片"}})]),t._v(" "),s("h1",{attrs:{id:"安装-略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-略"}},[t._v("#")]),t._v(" 安装(略)")]),t._v(" "),s("p",[t._v("详见 "),s("a",{attrs:{href:"https://zh.nuxtjs.org/guide/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zh.nuxtjs.org/guide/installation"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("├── assets           //用于组织未编译的静态资源如 LESS、SASS 或 JavaScript\n│   └── README.md\n├── components       //用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性\n├── layouts    //布局目录 layouts 用于组织应用的布局组件。若无额外配置，该目录不能被重命名。\n│   ├── README.md\n│   └── default.vue\n├── middleware    //目录用于存放应用的中间件\n│   └── README.md\n├── nuxt.config.js  //nuxt 配置文件\n├── pages           //放page页面，自动生产路由\n│   ├── README.md\n│   ├── index.vue\n│ \n├── plugins    //用于组织那些需要在 根vue.js应用 实例化之前需要运行的 插件\n│   ├── README.md\n│   └── axios.js\n├── server                \n│   └── index.js           //服务配置\n├── static           \n│   ├── README.md     //存放静态文件，不被编译\n│   ├── favicon.ico\n│   ├── icon.png\n│   └── sw.js\n├── store                 //vuex状态\n│   ├── README.md\n│   ├── index.js\n│   └── webLogin.js\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br")])]),s("h1",{attrs:{id:"常用-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用-api"}},[t._v("#")]),t._v(" 常用 API")]),t._v(" "),s("h3",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[t._v("Nuxt扩展了Vue的生命周期")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export default {\n  middleware (ctx) {}, //服务端\n  validate (ctx) {}, // 服务端\n  asyncData (ctx) {}, //服务端\n  fetch (ctx) {}, // store数据加载\n  beforeCreate () {  // 服务端和客户端都会执行},\n  created () { // 服务端和客户端都会执行 },\n  beforeMount () {}, \n  mounted () {} // 客户端\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h1",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h3",{attrs:{id:"context-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context-对象"}},[t._v("#")]),t._v(" context 对象")]),t._v(" "),s("p",[t._v("context 的可用属性一览:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性字段")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可用")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("app")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Vue 根实例")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("包含所有插件的 Vue 根实例。例如：在使用 axios 的时候，你想获取 $axios 可以直接通过 context.app.$axios 来获取")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("isClient")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否来自客户端渲染（废弃。请使用 process.client ）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("isServer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否来自服务端渲染（废弃。请使用 process.server ）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("isStatic")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否来自 nuxt generate 静态化（预渲染）（废弃。请使用 process.static ）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("isDev")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否是开发 dev 模式，在生产环境的数据缓存中用到")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("isHMR")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否是通过模块热替换 webpack hot module replacement ("),s("em",[t._v("仅在客户端以 dev 模式")]),t._v(")")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("route")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router 路由"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Vue Router 路由实例")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("store")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://vuex.vuejs.org/zh/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex 数据"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Vuex.Store 实例。"),s("strong",[t._v("只有")]),s("a",{attrs:{href:"https://zh.nuxtjs.org/guide/vuex-store",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuex 数据流"),s("OutboundLink")],1),s("strong",[t._v("存在相关配置时可用")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("env")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("nuxt.config.js 中配置的环境变量，见 "),s("a",{attrs:{href:"https://zh.nuxtjs.org/api/configuration-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("环境变量 api"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("params")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("route.params 的别名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("query")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("route.query 的别名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("req")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://nodejs.org/api/http.html#http_class_http_incomingmessage",target:"_blank",rel:"noopener noreferrer"}},[t._v("http.Request"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Node.js API 的 Request 对象。如果 Nuxt 以中间件形式使用的话，这个对象就根据你所使用的框架而定。"),s("em",[t._v("nuxt generate 不可用")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("res")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://nodejs.org/api/http.html#http_class_http_serverresponse",target:"_blank",rel:"noopener noreferrer"}},[t._v("http.Response"),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Node.js API 的 Response 对象。如果 Nuxt 以中间件形式使用的话，这个对象就根据你所使用的框架而定。"),s("em",[t._v("nuxt generate 不可用")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("redirect")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用这个方法重定向用户请求到另一个路由。状态码在服务端被使用，默认 302 redirect([status,] path [, query])")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("error")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端 & 服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用这个方法展示错误页：error(params) 。params 参数应该包含 statusCode 和 message 字段")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("nuxtState")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Nuxt 状态，在使用 beforeNuxtRender 之前，用于客户端获取 Nuxt 状态，仅在 universal 模式下可用")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("beforeNuxtRender(fn)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("服务端")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("使用此方法更新 "),s("strong",[t._v("NUXT")]),t._v(" 在客户端呈现的变量，fn 调用 (可以是异步) { Components, nuxtState } ，参考 "),s("a",{attrs:{href:"https://github.com/nuxt/nuxt.js/blob/cf6b0df45f678c5ac35535d49710c606ab34787d/test/fixtures/basic/pages/special-state.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),s("OutboundLink")],1)])])])]),t._v(" "),s("h3",{attrs:{id:"asyncdata-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asyncdata-函数"}},[t._v("#")]),t._v(" asyncData 函数")]),t._v(" "),s("ul",[s("li",[t._v("**类型：**Function")])]),t._v(" "),s("p",[t._v("asyncData 方法会在组件（"),s("strong",[t._v("限于页面组件")]),t._v("）每次加载之前被调用。它可以在服务端或路由更新之前被调用。在这个方法被调用的时候，第一个参数被设定为当前页面的"),s("strong",[t._v("上下文对象")]),t._v("，你可以利用 asyncData 方法来获取数据并返回给当前组件。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export default {\n  data () {\n    return { project: 'default' }\n  },\n  asyncData (context) {\n    return { project: 'nuxt' }\n  }\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("注意：由于 asyncData 方法是在组件 "),s("strong",[t._v("初始化")]),t._v(" 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。")]),t._v(" "),s("h3",{attrs:{id:"fetch-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-函数"}},[t._v("#")]),t._v(" fetch 函数")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。")])])]),t._v(" "),s("ul",[s("li",[t._v("**类型：**Function")])]),t._v(" "),s("p",[t._v("如果页面组件设置了 fetch 方法，它会在组件每次加载前被调用（在服务端或切换至目标路由之前）。")]),t._v(" "),s("p",[t._v("fetch 方法的第一个参数是页面组件的 "),s("a",{attrs:{href:"https://zh.nuxtjs.org/api/#%E4%B8%8A%E4%B8%8B%E6%96%87%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("上下文对象"),s("OutboundLink")],1),t._v(" context，我们可以用 fetch 方法来获取数据填充应用的vuex状态树。为了让获取过程可以异步，你需要"),s("strong",[t._v("返回一个 Promise")]),t._v("，Nuxt.js 会等这个 promise 完成后再渲染组件。")]),t._v(" "),s("p",[s("strong",[t._v("警告")]),t._v(": 您无法在内部使用 this 获取"),s("strong",[t._v("组件实例")]),t._v("，fetch 是在"),s("strong",[t._v("组件初始化之前")]),t._v("被调用")]),t._v(" "),s("p",[t._v("例如 pages/index.vue：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<template>\n  <h1>Stars: {{ $store.state.stars }}</h1>\n</template>\n<script>\nexport default {\n  fetch ({ store, params }) {\n    return axios.get('http://my-api/stars')\n    .then((res) => {\n      store.commit('setStars', res.data)\n    })\n  }\n}\n<\/script>\n你也可以使用 async 或 await 的模式简化代码如下：\n<template>\n  <h1>Stars: {{ $store.state.stars }}</h1>\n</template>\n<script>\nexport default {\n  async fetch ({ store, params }) {\n    let { data } = await axios.get('http://my-api/stars')\n    store.commit('setStars', data)\n  }\n}\n<\/script>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br")])]),s("p",[t._v("如果要在 fetch 中调用并操作 store，请使用 store.dispatch，但是要确保在内部使用 async / await 等待操作结束：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<script>\nexport default {\n  async fetch ({ store, params }) {\n    await store.dispatch('GET_STARS');\n  }\n}\n<\/script>\nstore/index.js\n// ...\nexport const actions = {\n  async GET_STARS ({ commit }) {\n    const { data } = await axios.get('http://my-api/stars')\n    commit('SET_STARS', data)\n  }\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("p",[s("strong",[t._v("监听 query 字符串的改变")]),t._v("\n默认情况下，不会在查询字符串更改时调用 fetch 方法。如果想更改此行为，例如，在编写分页组件时，您可以设置通过页面组件的 watchQuery 属性来监听参数的变化。了解更多有关 "),s("a",{attrs:{href:"https://zh.nuxtjs.org/api/pages-watchquery",target:"_blank",rel:"noopener noreferrer"}},[t._v("API watchQuery page"),s("OutboundLink")],1),t._v(" 的信息。")]),t._v(" "),s("p",[s("strong",[t._v("增加用户体验的两个插件")])]),t._v(" "),s("h3",{attrs:{id:"nuxtjs-toast模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxtjs-toast模块"}},[t._v("#")]),t._v(" @nuxtjs/toast模块")]),t._v(" "),s("p",[t._v("toast可以说是很常用的功能，一般的UI框架都会有这个功能。但如果你的站点没有使用UI框架，而alert又太丑，不妨引入该模块：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install @nuxtjs/toast\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后在nuxt.config.js中引入")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("module.exports = {\n    modules: [\n    '@nuxtjs/toast',\n    ['@nuxtjs/dotenv', { filename: '.env.prod' }] // 指定打包时使用的dotenv\n  ],\n  toast: {// toast模块的配置\n    position: 'top-center', \n    duration: 2000\n  }\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("这样，nuxt就会在全局注册$toast方法供你使用，非常方便：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("this.$toast.error('服务器开小差啦~~')\nthis.$toast.error('请求成功~~')\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"loading方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading方法"}},[t._v("#")]),t._v(" loading方法")]),t._v(" "),s("p",[t._v("nuxt内置了页面顶部"),s("a",{attrs:{href:"https://zh.nuxtjs.org/api/configuration-loading/#loading-%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("loading进度条的样式"),s("OutboundLink")],1),t._v(" 推荐使用，提供页面跳转体验。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//打开\nthis.$nuxt.$loading.start() \n//完成 \nthis.$nuxt.$loading.finish()\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("更多 API 详见官网 "),s("a",{attrs:{href:"https://zh.nuxtjs.org/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zh.nuxtjs.org/api"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"源码浅析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码浅析"}},[t._v("#")]),t._v(" 源码浅析")]),t._v(" "),s("p",[t._v("源码地址："),s("a",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/nuxt/nuxt.js"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("源码目录：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe78b7def391e?w=1293&h=375&f=png&s=19143",alt:"图片"}})]),t._v(" "),s("h3",{attrs:{id:"_1、通过-nuxt-文件来执行我们的工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、通过-nuxt-文件来执行我们的工作流程"}},[t._v("#")]),t._v(" 1、通过 .nuxt 文件来执行我们的工作流程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe78b47c0c8db?w=340&h=285&f=png&s=46013",alt:"图片"}})]),t._v(" "),s("p",[t._v("这个是我们项目生成的临时文件，我们项目运行时候配置的文件都是在这里，大家可以看到这里的路由文件，没错，这个就是系统自动给我们配置的路由文件，根据我们的 pages 文件夹路径生成的，大家还可以看到，由app.js ，client.js 和 server.js 这两个就是类似我们的 SSR 中配置的那个 server.js 入口文件，然后还有 middleware.js 中间件文件，其实这个时候我们大概能懂了，上边我们说的工作流程，走的就是这个 临时文件.nuxt 文件夹中的内容，但是这个文件夹是如何生成的呢，大家请往下看。")]),t._v(" "),s("h3",{attrs:{id:"_2、-nuxt-是如何产生的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、-nuxt-是如何产生的"}},[t._v("#")]),t._v(" 2、.nuxt 是如何产生的")]),t._v(" "),s("p",[t._v("本文主要研究nuxt的运行原理,分析它从接收一条nuxt指令,到完成指令背后所发生的一系列事情,在开始本文之前,请读者务必亲自体验过nuxt.js的使用,并且具备一定的vue.js相关开发经验。")]),t._v(" "),s("p",[t._v("通过查看nuxt.js工程目录下的package.json文件,我们可以看到下列几条指令:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"scripts": { "dev": "nuxt",           // 开启一个监听3000端口的服务器,同时提供hot-reloading功能\n    "build": "nuxt build", //构建整个应用,压缩合并JS和CSS文件(用于生产环境)\n    "start": "nuxt start", // 开启一个生产模式的服务器(必须先运行nuxt build命令)\n    "generate": "nuxt generate" //构建整个应用,并为每一个路由生成一个静态页面(用于静态服务器)\n} \n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("咱们还从来没有看过我们的依赖包哈，今天就来看看，打开我们的 node_modules 文件夹下的 nuxt工程文件夹 进入到到bin目录,我们可以看到几个文件:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe78b673d7bad?w=1492&h=584&f=png&s=241409",alt:"图片"}})]),t._v(" "),s("p",[t._v("咱们就说一下 dev 是如何工作的，咱们先找到一个片段，发现基本是执行了以下几个步骤：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  async run (cmd) {\n    const { argv } = cmd\n    await this.startDev(cmd, argv, argv.open)\n  },\n\n  async startDev (cmd, argv) {\n    let nuxt\n    try {\n      nuxt = await this._listenDev(cmd, argv)\n    } catch (error) {\n      consola.fatal(error)\n      return\n    }\n    try {\n      await this._buildDev(cmd, argv, nuxt)\n    } catch (error) {\n      await nuxt.callHook('cli:buildError', error)\n      consola.error(error)\n    }\n    return nuxt\n  },\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe78ba384700a?w=756&h=96&f=png&s=40023",alt:"图片"}})]),t._v(" "),s("p",[t._v("那什么是 nuxt() 类，它又是执行了什么样的方法呢？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe78c1dd55aa1?w=527&h=960&f=png&s=29105",alt:"图片"}})]),t._v(" "),s("p",[t._v("上图中每一步都可以在具体的代码中自行浏览。在用户输入指令并实例化了Nuxt()类以后,实例化")]),t._v(" "),s("p",[t._v("同时,Nuxt()类也提供了一个close()公有方法,用于关闭其所开启的服务器。")]),t._v(" "),s("h3",{attrs:{id:"_3、builder-build-进行编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、builder-build-进行编译"}},[t._v("#")]),t._v(" 3、builder.build() 进行编译")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe78c5a6815ee?w=519&h=762&f=png&s=24982",alt:"图片"}})]),t._v(" "),s("p",[t._v("简单来说,build()方法在判断完运行条件后,会先初始化产出目录.nuxt,然后通过不同目录下的文件结构来生成一系列的配置,写入模板文件后输出到.nuxt目录。接下来,则会根据不同的开发环境来调用不同的webpack配置,运行不同的webpack构建方案。")]),t._v(" "),s("h3",{attrs:{id:"_4、render-js文件-打包输出渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、render-js文件-打包输出渲染"}},[t._v("#")]),t._v(" 4、render.js文件 打包输出渲染")]),t._v(" "),s("p",[t._v("在nuxt/lib目录下找到render.js文件,它包含着我们即将要分析的三个方法:render(), renderRoute(), renderAndGetWindow()。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe78cc87ddcc4?w=1036&h=765&f=png&s=259231",alt:"图片"}})]),t._v(" "),s("p",[t._v("通过这张图片,我们可以知道nuxt对于处理“客户端渲染”与“服务端渲染”的逻辑其实是非常清晰的。")]),t._v(" "),s("ul",[s("li",[t._v("首先,在render()方法在处理完一系列的路径问题后,会调用renderRoute()方法,获取响应所需内容并完成响应。")]),t._v(" "),s("li",[t._v("其中renderRoute()方法会判断当前响应是否应执行服务端渲染。如果是,则调用vue提供的bundleRenderer()方法,把html内容渲染完毕以后再整体输出;如果不是,则直接输出一个"),s("div"),t._v("字符串,交由客户端渲染。")]),t._v(" "),s("li",[t._v("最后,通过renderAndGetWindow()来检查输出的html是否存在问题,然后发出通知,表明html可用。")])]),t._v(" "),s("h1",{attrs:{id:"打包部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包部署"}},[t._v("#")]),t._v(" 打包部署")]),t._v(" "),s("p",[t._v("上传全部代码到自己到服务器上执行\n编译打包：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm run build\nnpm run start\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("建议部署方式Docker+K8S")])])}),[],!1,null,null,null);e.default=n.exports}}]);