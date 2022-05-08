(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{580:function(t,a,s){"use strict";s.r(a);var e=s(16),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"virtualdom是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtualdom是什么"}},[t._v("#")]),t._v(" VirtualDom是什么？")]),t._v(" "),s("p",[t._v("从本质上来说，Virtual Dom是一个JavaScript对象，通过对象的方式来表示DOM结构。将页面的状态抽象为JS对象的形式，配合不同的渲染工具，使跨平台渲染成为可能。通过事务处理机制，将多次DOM修改的结果一次性的更新到页面上，从而有效的减少页面渲染的次数，减少修改DOM的重绘重排次数，提高渲染性能。")]),t._v(" "),s("p",[t._v("虚拟DOM是对DOM的抽象，这个对象是更加轻量级的对DOM的描述。它设计的最初目的，就是更好的跨平台，比如node.js就没有DOM，如果想实现SSR，那么一个方式就是借助虚拟dom，因为虚拟dom本身是js对象。 在代码渲染到页面之前，vue或者react会把代码转换成一个对象（虚拟DOM）。以对象的形式来描述真实dom结构，最终渲染到页面。在每次数据发生变化前，虚拟dom都会缓存一份，变化之时，现在的虚拟dom会与缓存的虚拟dom进行比较。在vue或者react内部封装了diff算法，通过这个算法来进行比较，渲染时修改改变的变化，原先没有发生改变的通过原先的数据进行渲染。")]),t._v(" "),s("p",[t._v("另外现代前端框架的一个基本要求就是无须手动操作DOM，一方面是因为手动操作DOM无法保证程序性能，多人协作的项目中如果review不严格，可能会有开发者写出性能较低的代码，另一方面更重要的是省略手动DOM操作可以大大提高开发效率。")]),t._v(" "),s("p",[t._v("当我们需要创建或更新元素时， React首先会让这个 VitrualDom对象进行创建和更改，然后再将 VitrualDom对象渲染成真实DOM。")]),t._v(" "),s("p",[t._v("当我们需要对 DOM进行事件监听时，首先对 VitrualDom进行事件监听， VitrualDom会代理原生的 DOM事件从而做出响应。")]),t._v(" "),s("h2",{attrs:{id:"virtualdom比普通dom更快吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtualdom比普通dom更快吗"}},[t._v("#")]),t._v(" VirtualDom比普通Dom更快吗？")]),t._v(" "),s("p",[t._v("很多文章说 VitrualDom可以提升性能，这一说法实际上是很片面的。")]),t._v(" "),s("p",[t._v("直接操作 DOM是非常耗费性能的，这一点毋庸置疑。但是 React使用 VitrualDom也是无法避免操作 DOM的。")]),t._v(" "),s("p",[t._v("如果是首次渲染， VitrualDom不具有任何优势，甚至它要进行更多的计算，消耗更多的内存。")]),t._v(" "),s("p",[t._v("虚拟DOM相对原生的DOM不一定是效率更高，如果只修改一个按钮的文案，那么虚拟 DOM 的操作无论如何都不可能比真实的 DOM 操作更快。在首次渲染大量DOM时，由于多了一层虚拟DOM的计算，虚拟DOM也会比innerHTML插入慢。它能保证性能下限，在真实DOM操作的时候进行针对性的优化时，还是更快的。所以要根据具体的场景进行探讨。")]),t._v(" "),s("p",[t._v("在整个 DOM 操作的演化过程中，其实主要矛盾并不在于性能，而在于开发者写得爽不爽，在于研发体验/研发效率。虚拟 DOM 不是别的，正是前端开发们为了追求更好的研发体验和研发效率而创造出来的高阶产物。虚拟 DOM 并不一定会带来更好的性能，React 官方也从来没有把虚拟 DOM 作为性能层面的卖点对外输出过。虚拟 DOM 的优越之处在于，它能够在提供更爽、更高效的研发模式（也就是函数式的 UI 编程方式）的同时，仍然保持一个还不错的性能")]),t._v(" "),s("p",[t._v('VitrualDom的优势在于 React的 Diff算法和批处理策略， React在页面更新之前，提前计算好了如何进行更新和渲染 DOM。实际上，这个计算过程我们在直接操作 DOM时，也是可以自己判断和实现的，但是一定会耗费非常多的精力和时间，而且往往我们自己做的是不如 React好的。所以，在这个过程中 React帮助我们"提升了性能"。')]),t._v(" "),s("p",[t._v("所以，我更倾向于说， VitrualDom帮助我们提高了开发效率，在重复渲染时它帮助我们计算如何更高效的更新，而不是它比 DOM操作更快。")]),t._v(" "),s("h2",{attrs:{id:"virtualdom-优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtualdom-优缺点"}},[t._v("#")]),t._v(" VirtualDom 优缺点")]),t._v(" "),s("h3",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ol",[s("li",[t._v("保证一定的性能")])]),t._v(" "),s("p",[t._v("解决了频繁操作真实 DOM 的低效率工作-不直接操作 DOM，数据驱动视图,也在一定程度上提升了性能,保证性能下限，在不进行手动优化的情况下，提供过得去的性能\n下面对比一下修改DOM时真实DOM操作和Virtual DOM的过程，来看一下它们重排重绘的性能消耗∶")]),t._v(" "),s("ul",[s("li",[t._v("真实DOM∶ 生成HTML字符串＋ 重建所有的DOM元素")]),t._v(" "),s("li",[t._v("Virtual DOM∶ 生成vNode＋ DOMDiff＋必要的DOM更新")])]),t._v(" "),s("p",[t._v("Virtual DOM的更新DOM的准备工作耗费更多的时间，也就是JS层面，相比于更多的DOM操作它的消费是极其便宜的。尤雨溪在社区论坛中说道∶ 框架给你的保证是，你不需要手动优化的情况下，我依然可以给你提供过得去的性能。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("简化前端开发，提升开发体验和效率")])]),t._v(" "),s("p",[t._v("虚拟 DOM 的优越之处在于，它能够在提供更爽、更高效的研发模式（也就是函数式的 UI 编程方式）的同时，仍然保持一个还不错的性能")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("降低跨平台成本")])]),t._v(" "),s("p",[t._v('解决了扩平台开发的问题，因为虚拟 DOM 描述的东西可以是真实 DOM,也可以是安卓界面。IOS 界面等等,这就可以对接不同平台的渲染逻辑。从而实现"一次编码，多端运行"(如 React,React Native,SSR)')]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("可规避XSS攻击")])]),t._v(" "),s("p",[t._v("避免跨站点脚本攻击，也就是常说的 XSS， Facebook 拥有庞大的站点，很容易因为一处暴露 XSS 而造成整体风险。XSS 不会直接攻击网页，而是通过嵌入 JavaScript 代码的方式，将恶意攻击附加到用户的请求中来攻击用户。它可以被用作窃取用户信息，或者恶意增删用户的一些资料。而 XHP 的优势就在于可以默认启用 XSS 保护")]),t._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("内存占用较高。因为当前网页的虚拟 DOM 包含了真实 DOM 的完整信息，而且由于是 Object，其内存占用肯定会有所上升。")])]),t._v(" "),s("li",[s("p",[t._v("无法进行极致优化。 虽然虚拟 DOM 足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中，虚拟 DOM 无法进行针对性的极致优化，比如实现类似 Google Earth 的场景。")])])]),t._v(" "),s("p",[t._v("如果当虚拟 DOM 的构建和diff的过程相对复杂(比如很多递归遍历等操作),那么虚拟 DOM 的 JS 计算是比较耗时的")]),t._v(" "),s("h2",{attrs:{id:"diff算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" Diff算法")]),t._v(" "),s("h3",{attrs:{id:"什么是diff算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是diff算法"}},[t._v("#")]),t._v(" 什么是diff算法")]),t._v(" "),s("p",[t._v("实际上，diff 算法探讨的就是虚拟 DOM 树发生变化后，生成 DOM 树更新补丁的方式。它通过对比新旧两株虚拟 DOM 树的变更差异，将更新补丁作用于真实 DOM，以最小成本完成视图更新")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e44d4ebb48a74ffda63754428c9d5273~tplv-k3u1fbpfcp-zoom-in-crop-mark:1630:0:0:0.awebp",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("具体的流程如下：\n"),s("ul",[s("li",[t._v("真实的 DOM 首先会映射为虚拟 DOM；")]),t._v(" "),s("li",[t._v("当虚拟 DOM 发生变化后，就会根据差距计算生成 patch，这个 patch 是一个结构化的数据，内容包含了增加、更新、移除等；")]),t._v(" "),s("li",[t._v("根据 patch 去更新真实的 DOM，反馈到用户的界面上。")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/246e03a02e3e48ff941f921843bd8676~tplv-k3u1fbpfcp-zoom-in-crop-mark:1630:0:0:0.awebp",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"如何从on3降到on的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何从on3降到on的"}},[t._v("#")]),t._v(" 如何从On3降到On的")]),t._v(" "),s("p",[t._v("一般的原始 diff 思路算法复杂度是O(n^3),即循环递归进行树节点的一一对比")]),t._v(" "),s("p",[t._v("但 React 的 diff 算法是 O (n) 复杂度的思路")]),t._v(" "),s("blockquote",[s("p",[t._v("当对比两棵虚拟 DOM 树时，React 首先比较两棵树的根节点。不同类型的根节点元素会有不同的形态\n当对比两个相同类型的 React 元素时，React 会保留 DOM 节点，仅比对及更新有改变的属性。")])]),t._v(" "),s("ul",[s("li",[t._v("Diff 逻辑的拆分与解读")])]),t._v(" "),s("ol",[s("li",[t._v("Diff算法性能突破的关键点在于‘分层对比’")]),t._v(" "),s("li",[t._v("类型一致的节点才有继续Diff的必要性")]),t._v(" "),s("li",[t._v("Key属性的设在，可以帮我们尽可能的重用同一层级内的节点")])]),t._v(" "),s("p",[s("strong",[t._v("diff算法可以总结为三个策略，分别从树、组件及元素三个层面进行复杂度的优化：")])]),t._v(" "),s("blockquote",[s("p",[t._v("采用分治思想，分治策略")])]),t._v(" "),s("ul",[s("li",[t._v("策略一：忽略节点跨层级操作场景，提升比对效率。（基于树进行对比）")])]),t._v(" "),s("p",[t._v("这一策略需要进行树比对，即对树进行分层比较。树比对的处理手法是非常“暴力”的，即两棵树只对同一层次的节点进行比较，如果发现节点已经不存在了，则该节点及其子节点会被完全删除掉，不会用于进一步的比较，这就提升了比对效率。")]),t._v(" "),s("ul",[s("li",[t._v("策略二：如果组件的 class 一致，则默认为相似的树结构，否则默认为不同的树结构。（基于组件进行对比）")])]),t._v(" "),s("p",[t._v("在组件比对的过程中：")]),t._v(" "),s("p",[t._v("如果组件是同一类型则进行树比对；\n如果不是则直接放入补丁中。")]),t._v(" "),s("p",[t._v("只要父组件类型不同，就会被重新渲染。这也就是为什么 shouldComponentUpdate、PureComponent 及 React.memo 可以提高性能的原因。")]),t._v(" "),s("ul",[s("li",[t._v("策略三：同一层级的子节点，可以通过标记 key 的方式进行列表对比。（基于节点进行对比）")])]),t._v(" "),s("p",[t._v("元素比对主要发生在同层级中，通过标记节点操作生成补丁。节点操作包含了插入、移动、删除等。其中节点重新排序同时涉及插入、移动、删除三个操作，所以效率消耗最大，此时策略三起到了至关重要的作用。通过标记 key 的方式，React 可以直接移动 DOM 节点，降低内耗")]),t._v(" "),s("p",[t._v("通过标记 key 的方式，React 可以直接移动 DOM 节点，降低内耗。操作代码如下：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("a"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("b"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("c"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("d"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ui")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("以上是 React Diff 算法最基本的内容，除此以外，由于 React 16 引入Fiber 设计，所以我们还需要了解 Fiber 给 diff 算法带来的影响。")]),t._v(" "),s("p",[t._v("Fiber 机制下节点与树分别采用 FiberNode 与 FiberTree 进行重构。FiberNode 使用了双链表的结构，可以直接找到兄弟节点与子节点，使得整个更新过程可以随时暂停恢复。FiberTree 则是通过 FiberNode 构成的树。")]),t._v(" "),s("p",[t._v("Fiber 机制下，整个更新过程由 current 与 workInProgress 两株树双缓冲完成。当 workInProgress 更新完成后，通过修改 current 相关指针指向的节点，直接抛弃老树，虽然非常简单粗暴，却非常合理。")]),t._v(" "),s("h2",{attrs:{id:"其他框架dom-diff算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他框架dom-diff算法"}},[t._v("#")]),t._v(" 其他框架Dom diff算法")]),t._v(" "),s("h3",{attrs:{id:"vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Vue 2.0 因为使用了 snabbdom，所以整体思路与 React 相同。")]),t._v(" "),s("ul",[s("li",[t._v("双端比较 O(n^2)")]),t._v(" "),s("li",[t._v("但在元素对比时，如果新旧两个元素是同一个元素，且没有设置 key 时，snabbdom 在 diff 子元素中会一次性对比旧节点、新节点及它们的首尾元素四个节点，以及验证列表是否有变化。")])])]),t._v(" "),s("li",[s("p",[t._v("Vue 3.0 整体变化不大，依然没有引入 Fiber 等设计，也没有时间切片等功能.")]),t._v(" "),s("ul",[s("li",[t._v("加入了静态 标记")]),t._v(" "),s("li",[t._v("最长递增子序列 O(nlgn)～O(n^2)")])])])]),t._v(" "),s("h3",{attrs:{id:"preact"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preact"}},[t._v("#")]),t._v(" Preact")]),t._v(" "),s("p",[t._v("在众多的 React-like 框架中，Preact 适用范围最广，生命力最强。它以仅 3kb 的小巧特点应用于对体积追求非常极致的场景。也正因为体积受限，Preact 在 diff 算法上做了裁剪。")]),t._v(" "),s("p",[t._v("以下 Preact 的 diff 算法的图示，可以看到它将 diff 分为了三个类型：Fragment、Component 及 DOM Node。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/8C/4A/Ciqc1F_qyqeAWvpYAAEVYxYrQis686.png",alt:""}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Fragment 对应 React 的树比较；")])]),t._v(" "),s("li",[s("p",[t._v("Component 对应组件比较，它们在原理上是相通的，所以这里我们不再赘述；")])]),t._v(" "),s("li",[s("p",[t._v("最大的不同在于 DOM Node 这一层，Preact 并没有 Patch 的过程，而是直接更新 DOM 节点属性。")])])]),t._v(" "),s("h2",{attrs:{id:"推荐阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[t._v("#")]),t._v(" 推荐阅读")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=566#/detail/pc?id=5800",target:"_blank",rel:"noopener noreferrer"}},[t._v("与其他框架相比，React 的 diff 算法有何不同？-拉钩教育"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);