(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{622:function(t,a,r){"use strict";r.r(a);var e=r(16),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("p",[t._v("服务端渲染（Server Side Renderinig，SSR）是一项可以在服务端预先生成页面的 DOM 结构（而不是在浏览器端生成）的技术。")]),t._v(" "),r("h3",{attrs:{id:"优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("SEO，对搜索引擎友好")])]),t._v(" "),r("li",[r("p",[t._v("首屏加载快")])])]),t._v(" "),r("p",[t._v("因此 SSR 适合于重页面内容而非交互的页面，比如新闻站点和大型活动页面等。SSR 对这些项目的用户体验有极大的提升。")]),t._v(" "),r("h3",{attrs:{id:"缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("维护成本增加")])]),t._v(" "),r("li",[r("p",[t._v("服务器成本提")])]),t._v(" "),r("li",[r("p",[t._v("单服务器能承受的 QPS 降低")])]),t._v(" "),r("li",[r("p",[t._v("技术复杂度提高")])])]),t._v(" "),r("h2",{attrs:{id:"几种渲染方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#几种渲染方式"}},[t._v("#")]),t._v(" 几种渲染方式")]),t._v(" "),r("h3",{attrs:{id:"csr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csr"}},[t._v("#")]),t._v(" CSR")]),t._v(" "),r("ul",[r("li",[t._v("客户端渲染（Client Side Rendering）")])]),t._v(" "),r("h3",{attrs:{id:"ssr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssr"}},[t._v("#")]),t._v(" SSR")]),t._v(" "),r("ul",[r("li",[t._v("服务端渲染（Server Side Rendering）")])]),t._v(" "),r("p",[t._v("是指将单页应用（SPA）在服务器端渲染成 HTML 片段，发送到浏览器，然后交由浏览器为其绑定状态与事件，成为完全可交互页面的过程。（PS：本文中的 SSR 内容都是围绕同构应用来讲的）")]),t._v(" "),r("p",[t._v("服务端只负责首次“渲染”（真正意义上，只有浏览器才能渲染页面，服务端其实是生成 HTML 内容），然后返回给客户端，客户端接管页面交互（事件绑定等逻辑），之后客户端路由切换时，直接通过 JS 代码来显示对应的内容，不再需要服务端渲染（只有页面刷新时会需要）")]),t._v(" "),r("h3",{attrs:{id:"esr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esr"}},[t._v("#")]),t._v(" ESR")]),t._v(" "),r("p",[t._v("后面随着边缘计算的发展，由于CDN节点距离用户更近，有更短网络延时的优势，我们可以将页面进行动静拆分，将静态内容缓存在CDN先快速返回给用户，然后在CDN节点上发起动态内容的请求，之后将动态内容与静态部分以流的形式进行拼接，从而进一步提高了用户的首屏加载时间，尤其在边缘地区或者弱网环境也有能拥有很好的用户体验，此外还减少原先SSR服务器压力。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/020b10fdb4f24ba7997001e790501f2f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp",alt:""}})]),t._v(" "),r("ul",[r("li",[t._v("原理和优势")])]),t._v(" "),r("p",[t._v("刚才也提到了，ESR就是借助边缘计算能力，将返回的内容进行静态+动态部分拆分并以流的形式返回。静态部分依托CDN的缓存能力，优先返回给用户，随后在CDN节点上继续发起动态数据请求，并拼接在静态部分之后，继续流式返回。因此，其优势也是显而易见：")]),t._v(" "),r("ol",[r("li",[t._v("TTFB(Time To First Byte)很短：因为静态内容在CDN缓存住了，会很快的返回给用户。")]),t._v(" "),r("li",[t._v("FP(First Paint)很短：因为在静态内容返回后，已经可以开始HTML的解析以及 JS, CSS的下载和执行。")]),t._v(" "),r("li",[t._v("FMP(First Meaningful Paint)很短：因为动态内容的请求是在CDN发起，相比于客户端与服务端直连，请求减少了TCP建连和网络传输开销，而且由于动态部分是以chunked形式流式返回，FMP就会很短，比如搜索网站的第一个搜索结果就会首先绘制出来。")])]),t._v(" "),r("h3",{attrs:{id:"ssg"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssg"}},[t._v("#")]),t._v(" SSG")]),t._v(" "),r("ul",[r("li",[t._v("静态页面生成（Static Stie Generation）")])]),t._v(" "),r("p",[t._v("解决白屏问题、SEO问题。但无法生成用户相关内容（所以用户请求的结果都相同）。请求发生的过程中直接生成静态的HTML文件。（缺点以生成的文件难以达到自动更新，往往设置时间戳或者定时清理文件）")]),t._v(" "),r("h3",{attrs:{id:"同构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同构"}},[t._v("#")]),t._v(" 同构")]),t._v(" "),r("p",[t._v("所谓同构，通俗的讲，就是一套 React 代码在服务器上运行一遍，到达浏览器又运行一遍。 服务端渲染完成页面结构，客户端渲染绑定事件。它是在 SPA 的基础上，利用服务端渲染直出首屏，解决了单页面应用首屏渲染慢的问题")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e8021f7cdc945a8b4b16c1c2c1e4e8f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp",alt:""}})]),t._v(" "),r("p",[t._v("要实现同构，简单来说就是以下两步：")]),t._v(" "),r("ul",[r("li",[t._v("服务端要能运行 React 代码；")]),t._v(" "),r("li",[t._v("浏览器同样运行 React 代码。")])]),t._v(" "),r("h2",{attrs:{id:"推荐阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[t._v("#")]),t._v(" 推荐阅读")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://nextjs.org/docs/basic-features/pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Next.js官方文档"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7002151207762395172",target:"_blank",rel:"noopener noreferrer"}},[t._v("边缘渲染提速"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);