(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{605:function(a,t,s){"use strict";s.r(t);var r=s(16),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"日志监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志监控"}},[a._v("#")]),a._v(" 日志监控")]),a._v(" "),s("p",[a._v("可以通过监控异常日志的变动，将新增的异常类型和数量反映出来 监控日志可以实现pv和uv的监控，通过pv/uv的监控，可以知道使用者们的使用习惯，预知访问高峰")]),a._v(" "),s("h2",{attrs:{id:"响应时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应时间"}},[a._v("#")]),a._v(" 响应时间")]),a._v(" "),s("p",[a._v("响应时间也是一个需要监控的点。一旦系统的某个子系统出现异常或者性能瓶颈将会导致系统的响应时间变长。响应时间可以在nginx一类的反向代理上监控，也可以通过应用自己产生访问日志来监控")]),a._v(" "),s("h2",{attrs:{id:"进程监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程监控"}},[a._v("#")]),a._v(" 进程监控")]),a._v(" "),s("p",[a._v("监控日志和响应时间都能较好地监控到系统的状态，但是它们的前提是系统是运行状态的，所以监控进程是比前两者更为紧要的任务。监控进程一般是检查操作系统中运行的应用进程数，比如对于采用多进程架构的web应用，就需要检查工作进程的数，如果低于低估值，就应当发出警报")]),a._v(" "),s("h2",{attrs:{id:"磁盘监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘监控"}},[a._v("#")]),a._v(" 磁盘监控")]),a._v(" "),s("p",[a._v("磁盘监控主要是监控磁盘的用量。由于写日志频繁的缘故，磁盘空间渐渐被用光。一旦磁盘不够用将会引发系统的各种问题，给磁盘的使用量设置一个上限，一旦磁盘用量超过警戒值，服务器的管理者应该整理日志或者清理磁盘")]),a._v(" "),s("h2",{attrs:{id:"内存监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存监控"}},[a._v("#")]),a._v(" 内存监控")]),a._v(" "),s("p",[a._v("对于node而言，一旦出现内存泄漏，不是那么容易排查的。监控服务器的内存使用情况。如果内存只升不降，那么铁定存在内存泄漏问题。符合正常的内存使用应该是有升有降，在访问量大的时候上升，在访问量回落的时候，占用量也随之回落。监控内存异常时间也是防止系统出现异常的好方法。如果突然出现内存异常，也能够追踪到近期的哪些代码改动导致的问题")]),a._v(" "),s("h2",{attrs:{id:"cpu占用监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu占用监控"}},[a._v("#")]),a._v(" cpu占用监控")]),a._v(" "),s("p",[a._v("服务器的cpu占用监控也是必不可少的项，cpu的使用分为用户态、内核态、IOWait等。如果用户态cpu使用率较高，说明服务器上的应用需要大量的cpu开销；如果内核态cpu使用率较高，说明服务器需要花费大量时间进行进程调度或者系统调用；IOWait使用率反映的是cpu等待磁盘I/O操作；cpu的使用率中，用户态小于70%，内核态小于35%且整体小于70%，处于正常范围。监控cpu占用情况，可以帮助分析应用程序在实际业务中的状况。合理设置监控阈值能够很好地预警")]),a._v(" "),s("h3",{attrs:{id:"cpu-load监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu-load监控"}},[a._v("#")]),a._v(" cpu load监控")]),a._v(" "),s("p",[a._v("cpu load又称cpu平均负载。它用来描述操作系统当前的繁忙程度，又简单地理解为cpu在单位时间内正在使用和等待使用cpu的平均任务数。它有3个指标，即1分钟的平均负载、5分钟的平均负载，15分钟的平均负载。cpu load过高说明进程数量过多，这在node中可能体现在用于进程模块反复启动新的进程。监控该值可以防止意外发生")]),a._v(" "),s("h2",{attrs:{id:"i-o负载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-o负载"}},[a._v("#")]),a._v(" I/O负载")]),a._v(" "),s("p",[a._v("I/O负载指的主要是磁盘I/O。反应的是磁盘上的读写情况，对于node编写的应用，主要是面向网络业务，是不太可能出现I/O负载过高的情况，大多数的I/O压力来自于数据库。不管node进程是否与数据库或其他I/O密集的应用共同处理相同的服务器，我们都应该监控该值防止意外情况")]),a._v(" "),s("h2",{attrs:{id:"网络监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络监控"}},[a._v("#")]),a._v(" 网络监控")]),a._v(" "),s("p",[a._v("虽然网络流量监控的优先级没有上述项目那么高，但还是需要对流量进行监控并设置流量上限值。即便应用突然受到用户的青睐，流量暴涨的时候也可以通过数值感知到网站的宣传是否有效。一旦流量超过警戒值，开发者就应当找出流量增长的原因。对于正常增长，应当评估是否该增加硬件设备来为更多用户提供服务。网络流量监控的两个主要指标是流入流量和流出流量")]),a._v(" "),s("ul",[s("li",[a._v("应用状态监控 除了这些硬性需要检测的指标之外，应用还应该提供一种机制来反馈其自身的状态信息，外部监控将会持续性地调用应用地反馈接口来检查它地健康状态。")]),a._v(" "),s("li",[a._v("dns监控 dns是网络应用的基础，在实际的对外服务产品中，多数都对域名有依赖。dns故障导致产品出现大面积影响的事件并不少见。由于dns服务通常是稳定的，容易让人忽略，但是一旦出现故障，就可能是史无前例的故障。对于产品的稳定性，域名dns状态也需要加入监控。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);