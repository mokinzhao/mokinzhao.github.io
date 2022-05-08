(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{649:function(s,e,a){"use strict";a.r(e);var t=a(16),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"serverless-基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverless-基本概念"}},[s._v("#")]),s._v(" ServerLess 基本概念")]),s._v(" "),a("ul",[a("li",[s._v("简介")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("❝ 我们可以将 Serverless 拆解为 server 和 less 两个单词，从字面上推断词意即为“少服务器的，亦或是无服务器的，弱化后端和运维概念"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("当前比较成熟的 Serverless 云产品主要有 Amazon Lambda、Google Cloud Function、Azure Function、AliCloud Function Compute、Tencent CloudBase等\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("2.1 Serverless 的演变")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-2c7902465220a6c4a141b2922ab23cab_720w.jpg",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("2.2 什么是Serverless")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("❝ Serverless "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Faas")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Function "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Baas")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Backend "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-d07b3dc660e2ce0b4d5e0800a49122b9_720w.jpg",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("2.3 云函数（Faas）")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("❝ FaaS（Function"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Service）是服务商提供一个平台、提供给用户开发、运行管理这些函数的功能，而无需搭建和维护基础框架，是一种事件驱动由消息触发的函数服务\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("前端同学调用Faas服务如同调用本地函数一样简洁，如下所示，是一个腾讯云中一个简单的小程序云开发demo，cloudfunction是用来定义云函数的方法")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-3b6385b92a0fe9628b4469294860c43f_720w.jpg",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("2.4 后端即服务（ BaaS）")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("❝ BaaS（Backend"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Service）后端即服务，包含了后端服务组件，它是基于 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API")]),s._v(" 的第三方服务，用于实现应用程序中的核心功能，包含常用的数据库、对象存储、消息队列、日志服务等等。\n❞\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("比如腾讯云云开发中下面的这些服务 ：")]),s._v(" "),a("p",[s._v("微信小程序的云调用 wx-server-sdk\n云开发数据库 wx.cloud.database")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-704ef4b2925776dc97ee2238dbefe047_720w.jpg",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("2.5 Serverless的架构")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-b055003199a4a4c0851a9c6eab8486c5_720w.jpg",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("2.6 Serverless的优势")])]),s._v(" "),a("ol",[a("li",[s._v("环境统一: 不需要搭建服务端环境,, 保持各个机器环境一致 Serverless 的机制天然可复制")]),s._v(" "),a("li",[s._v("按需计费: 我们只在代码运行的时候付费，没有未使用资源浪费的问题")]),s._v(" "),a("li",[s._v("丰富的SDK: 有完善的配套服务, 如云数据库, 云存储, 云消息队列, 云音视频和云 AI 服务等")]),s._v(" "),a("li",[s._v("弹性伸缩: 不需要预估流量, 关心资源利用率, 备份容灾, 扩容机器 ，可以根据流量动态提前峰值流量")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-8c524a691b8c03b126dabd339cc67761_720w.jpg",alt:""}})]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("❝ “ Serverless 带来的其实是前端研发模式上的颠覆。相对以往纯前端研发的方式，Serverless 屏蔽底层基础设施的复杂度，后台能力通过FaaS平台化，我们不再需要关注运维、部署的细节，开发难度得到了简化，前端开发群体的边界就得以拓宽，能够参与到业务逻辑的开发当中，更加贴近和理解业务，做更有价值的输出。”\n❞\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("2.7 Serverless的缺点")])]),s._v(" "),a("ol",[a("li",[s._v("云厂商强绑定：它们常常会和厂商的其他云产品相绑定，如对象存储、消息队列等，意味你需要同时开通其他的服务，迁移成本高，如果想迁移基本原有的逻辑不可服用，kennel需要重构")]),s._v(" "),a("li",[s._v("不适合长时间任务：云函数平台会限制函数执行时间，如阿里云 Function Compute 最大执行时长为 10 min")]),s._v(" "),a("li",[s._v("冷启动时间：函数运行时，执行容器和环境需要一定的时间，对 HTTP 请求来讲，可能会带来响应时延的增加")]),s._v(" "),a("li",[s._v("调试与测试：开发者需要不断调整代码，打印日志，并提交到函数平台运行测试，会带来开发成本和产生费用")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-42d4ea7ce6eff0fff6c3944b3f6a61c0_720w.jpg",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("2.8 Serverless的应用场景")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("场景1: 负载有波峰波谷\n波峰波谷时，机器资源要按照峰值需求预，比如医院挂号这需求，假设在每天10点放号预约，那10点就会有峰值的出现，为了这个峰值并发的考虑，准备了相对应性能（固定）的服务器，然而在波谷时机器利用率又明显下降，不能进行资源复用导致浪费，而serverless不用为了波峰去做准备，不用留住水位，支持弹性缩扩容，在你高峰时再在进行动态扩容")])]),s._v(" "),a("li",[a("p",[s._v("场景2: 定时任务（报表统计等）\n服务空闲时间来处理批量数据，来生成数据报表，通过Serverless方式，不用额外购买利用率并不高的处理资源，比如每日的凌晨，分析前一天收集的数据并生成报告")])]),s._v(" "),a("li",[a("p",[s._v("场景3: 小程序开发（云开发）\n比如微信小程序开发m在实际开发中，如果我们不用云开发的openid获取流程，而用传统的方式，你就知道openid的获取是非常繁琐的一个过程，前端需要通过wx.login获取一个code值（具有时效性）再通过code值去后台用appsecret去调取openid。")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("❝ 而云函数由于是部署在腾讯云的关系，腾讯云将云调用将鉴权部分有效的封装，让你的接口很容易的实现了鉴权保护，无需维护复杂的鉴权机制，从而让个人开发者和小团队可以更容易地开发小程序\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-cc0184fb7e0b2d4548126c2a68344b8d_720w.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("你学BFF和Serverless了吗 ⭐️\n"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/368780365/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zhuanlan.zhihu.com/p/368780365/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);