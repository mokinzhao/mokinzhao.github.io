(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{703:function(t,a,r){"use strict";r.r(a);var e=r(16),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"基本概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),r("p",[t._v("计算机网络：是一个将分散的、具有独立功能的计算机系统，通过通信设备与线路连接起来，由功能完善的软件实现资源共享和信息传递的系统。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fc186f82ac44e65a320e01debb133eb~tplv-k3u1fbpfcp-watermark.awebp",alt:""}})]),t._v(" "),r("p",[t._v("这里需要注意的是，按分布范围，计算机网络里有局域网LAN和广域网WAN, 其中局域网的代表以太网，以及这两种网络最重要的区分点，局域网基于广播技术，广域网基于分组交换技术。（这些概念听一下就行，后面会详细介绍，因为理解广播和分组交换技术，大体上就理解了局域网和广域网）")]),t._v(" "),r("h3",{attrs:{id:"衡量计算机网络的性能的指标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#衡量计算机网络的性能的指标"}},[t._v("#")]),t._v(" 衡量计算机网络的性能的指标")]),t._v(" "),r("ul",[r("li",[t._v("速率")])]),t._v(" "),r("p",[t._v("速率就是数据传输（数据是指0和1）的速率，比如你用迅雷下载，1兆每秒，来衡量目前数据传输的快慢。它是计算机网络中最重要的一个性能指标。")]),t._v(" "),r("ul",[r("li",[t._v("带宽")])]),t._v(" "),r("p",[t._v("在计算机网络中，网络带宽是指在单位时间（一般指的是1秒钟）内能传输的数据量，比如说你家的电信网络是100兆比特，意思是，一秒内最大的传输速率是100兆比特。")]),t._v(" "),r("ul",[r("li",[t._v("吞吐量")])]),t._v(" "),r("p",[t._v("吞吐量表示在单位时间内通过某个网络（或信道、接口）的数据量。")]),t._v(" "),r("p",[t._v("由此可知带宽是说的是最大值速率，吞吐量说的是某时刻速率。但吞吐量不能超过最大速率。")]),t._v(" "),r("ul",[r("li",[t._v("时延\n"),r("ol",[r("li",[t._v("发送时延")]),t._v(" "),r("li",[t._v("传播时延")]),t._v(" "),r("li",[t._v("排队时延")]),t._v(" "),r("li",[t._v("处理时延")]),t._v(" "),r("li",[t._v("往返时间（RTT）")]),t._v(" "),r("li",[t._v("时延带宽积")])])])]),t._v(" "),r("h2",{attrs:{id:"网络模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络模型"}},[t._v("#")]),t._v(" 网络模型")]),t._v(" "),r("h3",{attrs:{id:"osi-7层网络模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#osi-7层网络模型"}},[t._v("#")]),t._v(" OSI 7层网络模型")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1e8e168d9f249788c74c5b50e0528e2~tplv-k3u1fbpfcp-watermark.awebp",alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/f99d6190174db81cd9246f7f832b6587.png",alt:"2019-06-24-12-51-02"}})]),t._v(" "),r("h4",{attrs:{id:"应用层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),r("p",[t._v("OSI参考模型中最靠近用户的一层，是为计算机用户提供应用接口，也为用户直接提供各种网络服务。我们常见应用层的网络服务协议有：***HTTP，HTTPS，FTP，POP3、SMTP***等。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("在客户端与服务器中经常会有数据的请求，这个时候就是会用到http(hyper text transfer protocol)(超文本传输协议)或者https.在后端设计数据接口时，我们常常使用到这个协议。")])]),t._v(" "),r("li",[r("p",[t._v("FTP是文件传输协议，在开发过程中，个人并没有涉及到，但是我想，在一些资源网站，比如百度网盘``迅雷应该是基于此协议的。")])]),t._v(" "),r("li",[r("p",[t._v("SMTP是simple mail transfer protocol（简单邮件传输协议）。在一个项目中，在用户邮箱验证码登录的功能时，使用到了这个协议。")])])]),t._v(" "),r("h4",{attrs:{id:"表示层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表示层"}},[t._v("#")]),t._v(" 表示层")]),t._v(" "),r("p",[t._v("表示层提供各种用于应用层数据的编码和转换功能,确保一个系统的应用层发送的数据能被另一个系统的应用层识别。如果必要，该层可提供一种标准表示形式，用于将计算机内部的多种数据格式转换成通信中采用的标准表示形式。数据压缩和加密也是表示层可提供的转换功能之一。")]),t._v(" "),r("p",[t._v("在项目开发中，为了方便数据传输，可以使用base64对数据进行编解码。如果按功能来划分，base64应该是工作在表示层。")]),t._v(" "),r("h4",{attrs:{id:"会话层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#会话层"}},[t._v("#")]),t._v(" 会话层")]),t._v(" "),r("p",[t._v("会话层就是负责建立、管理和终止表示层实体之间的通信会话。该层的通信由不同设备中的应用程序之间的服务请求和响应组成。")]),t._v(" "),r("h4",{attrs:{id:"传输层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),r("p",[t._v("传输层建立了主机端到端的链接，传输层的作用是为上层协议提供端到端的可靠和透明的数据传输服务，包括处理差错控制和流量控制等问题。该层向高层屏蔽了下层数据通信的细节，使高层用户看到的只是在两个传输实体间的一条主机到主机的、可由用户控制和设定的、可靠的数据通路。我们通常说的，***TCP UDP***就是在这一层。端口号既是这里的“端”。")]),t._v(" "),r("h4",{attrs:{id:"网络层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),r("p",[t._v("本层通过"),r("strong",[t._v("IP")]),t._v("寻址来建立两个节点之间的连接，为源端的运输层送来的分组，选择合适的路由和交换节点，正确无误地按照地址传送给目的端的运输层。就是通常说的IP层。这一层就是我们经常说的IP协议层。IP协议是Internet的基础。我们可以这样理解，网络层规定了数据包的传输路线，而传输层则规定了数据包的传输方式。")]),t._v(" "),r("h4",{attrs:{id:"数据链路层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[t._v("#")]),t._v(" 数据链路层")]),t._v(" "),r("p",[t._v("将比特组合成字节,再将字节组合成帧,使用链路层地址 (以太网使用MAC地址)来访问介质,并进行差错检测。\n网络层与数据链路层的对比，通过上面的描述，我们或许可以这样理解，网络层是规划了数据包的传输路线，而数据链路层就是传输路线。不过，在数据链路层上还增加了差错控制的功能。")]),t._v(" "),r("h4",{attrs:{id:"物理层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),r("p",[t._v("实际最终信号的传输是通过物理层实现的。通过物理介质传输比特流。规定了电平、速度和电缆针脚。常用设备有（各种物理设备）集线器、中继器、调制解调器、网线、双绞线、同轴电缆。这些都是物理层的传输介质。")]),t._v(" "),r("h4",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("ul",[r("li",[t._v("OSI七层模型通信特点：对等通信")])]),t._v(" "),r("p",[t._v("对等通信，为了使数据分组从源传送到目的地，源端OSI模型的每一层都必须与目的端的对等层进行通信，这种通信方式称为对等层通信。在每一层通信过程中，使用本层自己协议进行通信。")]),t._v(" "),r("h3",{attrs:{id:"tcp-ip五层协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip五层协议"}},[t._v("#")]),t._v(" TCP/IP五层协议")]),t._v(" "),r("p",[t._v("TCP/IP五层协议和OSI的七层协议对应关系如下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48cd77d608714c298366f4dac77f33fb~tplv-k3u1fbpfcp-watermark.awebp",alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a89b9ddb9d541a880fee0dccd1c03e9~tplv-k3u1fbpfcp-watermark.awebp",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"应用层-application-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用层-application-layer"}},[t._v("#")]),t._v(" 应用层 (application layer)")]),t._v(" "),r("p",[t._v("直接为应用进程提供服务。应用层协议定义的是应用进程间通讯和交互的规则，不同的应用有着不同的应用层协议，如 HTTP协议（万维网服务）、FTP协议（文件传输）、SMTP协议（电子邮件）、DNS（域名查询）等。")]),t._v(" "),r("h4",{attrs:{id:"传输层-transport-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传输层-transport-layer"}},[t._v("#")]),t._v(" 传输层 (transport layer)")]),t._v(" "),r("p",[t._v("有时也译为运输层，它负责为两台主机中的进程提供通信服务。该层主要有以下两种协议：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("传输控制协议 (Transmission Control Protocol，TCP)：提供面向连接的、可靠的数据传输服务，数据传输的基本单位是报文段（segment）")])]),t._v(" "),r("li",[r("p",[t._v("用户数据报协议 (User Datagram Protocol，UDP)：提供无连接的、尽最大努力的数据传输服务，但不保证数据传输的可靠性，数据传输的基本单位是用户数据报")])])]),t._v(" "),r("h4",{attrs:{id:"网络层-internet-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络层-internet-layer"}},[t._v("#")]),t._v(" 网络层 (internet layer)")]),t._v(" "),r("p",[t._v("有时也译为网际层，它负责为两台主机提供通信服务，并通过选择合适的路由将数据传递到目标主机。")]),t._v(" "),r("h4",{attrs:{id:"数据链路层-data-link-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层-data-link-layer"}},[t._v("#")]),t._v(" 数据链路层 (data link layer)")]),t._v(" "),r("p",[t._v("负责将网络层交下来的 IP 数据报封装成帧，并在链路的两个相邻节点间传送帧，每一帧都包含数据和必要的控制信息（如同步信息、地址信息、差错控制等）")]),t._v(" "),r("h4",{attrs:{id:"物理层-physical-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#物理层-physical-layer"}},[t._v("#")]),t._v(" 物理层 (physical Layer)")]),t._v(" "),r("p",[t._v("确保数据可以在各种物理媒介上进行传输，为数据的传输提供可靠的环境。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2db9226a6cdb4ee48daecd9bc4181b64~tplv-k3u1fbpfcp-watermark.awebp",alt:""}})]),t._v(" "),r("ul",[r("li",[r("p",[t._v("从上图中可以看出，TCP/IP模型比OSI模型更加简洁，它把应用层/表示层/会话层全部整合为了应用层。")])]),t._v(" "),r("li",[r("p",[t._v("在每一层都工作着不同的设备，比如我们常用的交换机就工作在数据链路层的，一般的路由器是工作在网络层的。")])]),t._v(" "),r("li",[r("p",[t._v("同样，TCP/IP五层协议的通信方式也是对等通信")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c0d79ff592242a8af294ce32177c8e3~tplv-k3u1fbpfcp-watermark.awebp",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"推荐阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[t._v("#")]),t._v(" 推荐阅读")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/PdY5fXKOmTN1idiCYSJisw",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端-网络协议知识点汇总（2.9万字）🌟🌟"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6908327746473033741",target:"_blank",rel:"noopener noreferrer"}},[t._v("「2021」高频前端面试题汇总之计算机网络篇🌟🌟"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6939691851746279437#heading-23",target:"_blank",rel:"noopener noreferrer"}},[t._v("字节跳动最爱考的前端面试题：计算机网络基础🌟"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/g-uxwAZC93oIW8zFwsiaXQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("24道计网题目，保姆级巩固你的计网知识体系"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844904079974465544#heading-50",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端需要了解的计算机网络知识， 这一篇就够了！"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);