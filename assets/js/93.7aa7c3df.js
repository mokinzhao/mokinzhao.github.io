(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{508:function(e,o,t){"use strict";t.r(o);var r=t(16),a=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"跨域请求如何携带cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求如何携带cookie"}},[e._v("#")]),e._v(" 跨域请求如何携带cookie?")]),e._v(" "),t("ol",[t("li",[e._v('前端请求时在request对象中配置"withCredentials": true；')]),e._v(" "),t("li",[e._v('服务端在response的header中配置"Access-Control-Allow-Origin", "http://xxx:${port}";')]),e._v(" "),t("li",[e._v('服务端在response的header中配置"Access-Control-Allow-Credentials", "true"')])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/7066420545327218725?share_token=64606385-e1fa-497d-bdf3-dd753817542c",target:"_blank",rel:"noopener noreferrer"}},[e._v("面试题 -- 跨域请求如何携带cookie?"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"cookie的实现机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie的实现机制"}},[e._v("#")]),e._v(" Cookie的实现机制")]),e._v(" "),t("p",[e._v("Cookie是由客户端保存的小型文本文件，其内容为一系列的键值对。 Cookie是由HTTP服务器设置的，保存在浏览器中， 在用户访问其他页面时，会在HTTP请求中附上该服务器之前设置的Cookie。")]),e._v(" "),t("ol",[t("li",[e._v("浏览器向某个URL发起HTTP请求（可以是任何请求，比如GET一个页面、POST一个登录表单等）")]),e._v(" "),t("li",[e._v("对应的服务器收到该HTTP请求，并计算应当返回给浏览器的HTTP响应。")]),e._v(" "),t("li",[e._v("在响应头加入Set-Cookie字段，它的值是要设置的Cookie。")]),e._v(" "),t("li",[e._v("浏览器收到来自服务器的HTTP响应。")]),e._v(" "),t("li",[e._v("浏览器在响应头中发现Set-Cookie字段，就会将该字段的值保存在内存或者硬盘中。")])]),e._v(" "),t("blockquote",[t("p",[e._v("Set-Cookie字段的值可以是很多项Cookie，每一项都可以指定过期时间Expires。 默认的过期时间是用户关闭浏览器时。")])]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("浏览器下次给该服务器发送HTTP请求时， 会将服务器设置的Cookie附加在HTTP请求的头字段Cookie中。")])]),e._v(" "),t("blockquote",[t("p",[e._v("浏览器可以存储多个域名下的Cookie，但只发送当前请求的域名曾经指定的Cookie， 这个域名也可以在Set-Cookie字段中指定）。")])]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[e._v("服务器收到这个HTTP请求，发现请求头中有Cookie字段， 便知道之前就和这个用户打过交道了。")]),e._v(" "),t("li",[e._v("过期的Cookie会被浏览器删除。")])]),e._v(" "),t("p",[e._v("总之，服务器通过Set-Cookie响应头字段来指示浏览器保存Cookie， 浏览器通过Cookie请求头字段来告诉服务器之前的状态。 Cookie中包含若干个键值对，每个键值对可以设置过期时间。")]),e._v(" "),t("h2",{attrs:{id:"进程和线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[e._v("#")]),e._v(" 进程和线程")]),e._v(" "),t("p",[e._v("进程：进程是 CPU 资源分配的最小单位(是能拥有资源和独立运行的最小单位)\n线程：线程是 CPU 调度的最小单位(线程是建立在进程的基础上的一次程序运行单位)\n对于进程和线程并没有确切统一的描述，可以简单的理解：")]),e._v(" "),t("p",[e._v("比如一个应用程序: 如QQ、浏览器启动时会开启一个进程，而该进程可以有多个线程来进行资源调度和分配，达到运行程序的作用。\n更通俗的话讲：打开QQ应用程序开启了进程来运行程序(QQ), 有多个线程来进行资源调度和分配(多个线程来分配打开QQ所占用的运存)，达到运行程序(QQ)的作用.")]),e._v(" "),t("blockquote",[t("p",[e._v("线程依赖进程，一个进程可以有一个或者多个线程，但是线程只能是属于一个进程。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9da8d16bb13047baae811587bb54d885~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"任务类型分述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务类型分述"}},[e._v("#")]),e._v(" 任务类型分述")]),e._v(" "),t("ul",[t("li",[e._v("CPU 密集型，如压缩、转译等环节，可能的优化有：\n使用更高效算法：优化空间小；\n压榨 V8 性能：如参考 Crankshaft Bailout 或 TurboFan Bailout；\n多核并行计算：受到进程通信开销制约；\n使用其他语言实现⁵：受到跨语言通信制约；")]),e._v(" "),t("li",[e._v("I/O 密集型，包括：\n文件读写：利用 bundleless 减少本地文件读取量；此外 Node.js 默认异步 API 使得此类任务能足够快，优化空间小；\n进程通信：序列化/反序列化开销较大，共享内存的 worker_threads 尚不稳定⁶，此外线程启动有损耗；\n跨语言通信：2018 年，napi-rs 1.0 发布，Node.js 调用 rust 有了更高效简单的方式⁷；")]),e._v(" "),t("li",[e._v("GPU 密集型，前端场景较少⁸，包括：\n机器学习：如使用 NVIDIA RAPIDS API 的 node-rapids；\n图像处理：如 GPU.js。")])]),e._v(" "),t("h2",{attrs:{id:"推荐阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[e._v("#")]),e._v(" 推荐阅读")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6854573215830933512",target:"_blank",rel:"noopener noreferrer"}},[e._v("「查缺补漏」送你18道浏览器面试题"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/7075129301527429133",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cookie 从入门到进阶：一文彻底弄懂其原理以及应用"),t("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=a.exports}}]);