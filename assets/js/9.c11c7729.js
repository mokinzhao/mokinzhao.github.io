(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{416:function(t,e,a){t.exports=a.p+"assets/img/process.c55d5087.png"},592:function(t,e,a){"use strict";a.r(e);var r=a(16),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"component"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component"}},[t._v("#")]),t._v(" Component")]),t._v(" "),r("h3",{attrs:{id:"组件的生命周期有哪些-16版本后生命周期有哪些变化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件的生命周期有哪些-16版本后生命周期有哪些变化"}},[t._v("#")]),t._v(" 组件的生命周期有哪些？16版本后生命周期有哪些变化？")]),t._v(" "),r("h3",{attrs:{id:"react废弃了哪些生命周期-为什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react废弃了哪些生命周期-为什么"}},[t._v("#")]),t._v(" React废弃了哪些生命周期？为什么？")]),t._v(" "),r("ol",[r("li",[t._v("componentWillMount")]),t._v(" "),r("li",[t._v("componentWillReceiveProps")]),t._v(" "),r("li",[t._v("componentWillUpdate")])]),t._v(" "),r("ul",[r("li",[t._v("被废弃的三个函数都是在render之前，因为fiber的出现，很可能因为高优先级任务的出现而打断现有任务导致它们会被执行多次。")]),t._v(" "),r("li",[t._v("另外的一个原因则是，React想约束使用者，好的框架能够让人不得已写出容易维护和扩展的代码，这一点又是从何谈起，可以从新增加以及即将废弃的生命周期分析入手")])]),t._v(" "),r("h3",{attrs:{id:"组件之间的通讯方式有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件之间的通讯方式有哪些"}},[t._v("#")]),t._v(" 组件之间的通讯方式有哪些？")]),t._v(" "),r("h3",{attrs:{id:"为什么react并不推荐优先考虑使用context"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么react并不推荐优先考虑使用context"}},[t._v("#")]),t._v(" 为什么React并不推荐优先考虑使用Context？")]),t._v(" "),r("ol",[r("li",[t._v("Context目前还处于实验阶段，可能会在后面的发行版本中有很大的变化，事实上这种情况已经发生了，所以为了避免给今后升级带来大的影响和麻烦，不建议在app中使用context。")]),t._v(" "),r("li",[t._v("尽管不建议在app中使用context，但是独有组件而言，由于影响范围小于app，如果可以做到高内聚，不破坏组件树之间的依赖关系，可以考虑使用context")]),t._v(" "),r("li",[t._v("对于组件之间的数据通信或者状态管理，有效使用props或者state解决，然后再考虑使用第三方的成熟库进行解决，以上的方法都不是最佳的方案的时候，在考虑context。")]),t._v(" "),r("li",[t._v("context的更新需要通过setState()触发，但是这并不是很可靠的，Context支持跨组件的访问，但是如果中间的子组件通过一些方法不影响更新，比如 shouldComponentUpdate() 返回false 那么不能保证Context的更新一定可以使用Context的子组件，因此，Context的可靠性需要关注")])]),t._v(" "),r("h3",{attrs:{id:"hoc、renderprops、mixin、hooks优劣如何"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hoc、renderprops、mixin、hooks优劣如何"}},[t._v("#")]),t._v(" HOC、RenderProps、Mixin、Hooks优劣如何？")]),t._v(" "),r("ul",[r("li",[t._v("HOC")])]),t._v(" "),r("p",[t._v("是接受一个组件并返回一个新组件的函数。基本上，这是一个模式，是从 React 的组合特性中衍生出来的，称其为纯组件")]),t._v(" "),r("ol",[r("li",[t._v("代码重用、逻辑和引导抽象")]),t._v(" "),r("li",[t._v("渲染劫持")]),t._v(" "),r("li",[t._v("state 抽象和操作")]),t._v(" "),r("li",[t._v("props 处理")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。具体而言，高阶组件是参数为组件，返回值为新组件的函数。")])]),t._v(" "),r("li",[r("p",[t._v("render props是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术，更具体的说，render prop 是一个用于告知组件需要渲染什么内容的函数 prop。")])]),t._v(" "),r("li",[r("p",[t._v("通常，render props 和高阶组件只渲染一个子节点。让 Hook 来服务这个使用场景更加简单。这两种模式仍有用武之地，（例如，一个虚拟滚动条组件或许会有一个 renderltem 属性，或是一个可见的容器组件或许会有它自己的 DOM 结构）。但在大部分场景下，Hook 足够了，并且能够帮助减少嵌套。")])]),t._v(" "),r("li",[r("p",[t._v("hook")])])]),t._v(" "),r("ol",[r("li",[t._v("使用直观；")]),t._v(" "),r("li",[t._v("解决hoc的prop 重名问题；")]),t._v(" "),r("li",[t._v("解决render props 因共享数据 而出现嵌套地狱的问题；")]),t._v(" "),r("li",[t._v("能在return之外使用数据的问题")])]),t._v(" "),r("h3",{attrs:{id:"受控组件和非受控组件的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#受控组件和非受控组件的区别"}},[t._v("#")]),t._v(" 受控组件和非受控组件的区别？")]),t._v(" "),r("ul",[r("li",[t._v("受控组件是 React 控制中的组件，并且是表单数据真实的唯一来源。")]),t._v(" "),r("li",[t._v("非受控组件是由 DOM 处理表单数据的地方，而不是在 React 组件中。")])]),t._v(" "),r("p",[t._v("尽管非受控组件通常更易于实现，因为只需使用refs即可从 DOM 中获取值，但通常建议优先选择受控制的组件，而不是非受控制的组件")]),t._v(" "),r("p",[t._v("这样做的主要原因是受控组件支持即时字段验证，允许有条件地禁用/启用按钮，强制输入格式。")]),t._v(" "),r("h3",{attrs:{id:"类组件与函数组件有什么异同"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#类组件与函数组件有什么异同"}},[t._v("#")]),t._v(" 类组件与函数组件有什么异同？")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/7E/CE/CgqCHl_PXDiAO20DAABdvYlGsmA577.png",alt:"vs"}})]),t._v(" "),r("ul",[r("li",[t._v("相同点")])]),t._v(" "),r("p",[t._v("组件是 React 可复用的最小代码片段，它们会返回要在页面中渲染的 React 元素。也正因为组件是 React 的最小编码单位，所以无论是函数组件还是类组件，在使用方式和最终呈现效果上都是完全一致的。")]),t._v(" "),r("p",[t._v("我们甚至可以将一个类组件改写成函数组件，或者把函数组件改写成一个类组件（虽然并不推荐这种重构行为）。从使用者的角度而言，很难从使用体验上区分两者，而且在现代浏览器中，闭包和类的性能只在极端场景下才会有明显的差别。所以，基本可认为两者作为组件是完全一致的。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("不同点")])]),t._v(" "),r("li",[r("p",[t._v("它们在开发时的心智模型上却存在巨大的差异。类组件是基于面向对象编程的，它主打的是继承、生命周期等核心概念；而函数组件内核是函数式编程，主打的是 immutable、没有副作用、引用透明等特点。")])]),t._v(" "),r("li",[r("p",[t._v("之前，在使用场景上，如果存在需要使用生命周期的组件，那么主推类组件；设计模式上，如果需要使用继承，那么主推类组件。但现在由于 React Hooks 的推出，生命周期概念的淡出，函数组件可以完全取代类组件。其次继承并不是组件最佳的设计模式，官方更推崇“组合优于继承”的设计概念，所以类组件在这方面的优势也在淡出。")])]),t._v(" "),r("li",[r("p",[t._v("性能优化上，类组件主要依靠 shouldComponentUpdate 阻断渲染来提升性能，而函数组件依靠 React.memo 缓存渲染结果来提升性能。")])]),t._v(" "),r("li",[r("p",[t._v("从上手程度而言，类组件更容易上手，从未来趋势上看，由于React Hooks 的推出，函数组件成了社区未来主推的方案。")])]),t._v(" "),r("li",[r("p",[t._v("类组件在未来时间切片与并发模式中，由于生命周期带来的复杂度，并不易于优化。而函数组件本身轻量简单，且在 Hooks 的基础上提供了比原先更细粒度的逻辑组织与复用，更能适应 React 的未来发展。")])])]),t._v(" "),r("h2",{attrs:{id:"state-props"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#state-props"}},[t._v("#")]),t._v(" State&Props")]),t._v(" "),r("h2",{attrs:{id:"state-和-props-区别是啥"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#state-和-props-区别是啥"}},[t._v("#")]),t._v(" state 和 props 区别是啥？")]),t._v(" "),r("p",[t._v("props和state是普通的 JS 对象。虽然它们都包含影响渲染输出的信息，但是它们在组件方面的功能是不同的。即")]),t._v(" "),r("ul",[r("li",[t._v("state 是组件自己管理数据，控制自己的状态，可变；")]),t._v(" "),r("li",[t._v("props 是外部传入的数据参数，不可变；")]),t._v(" "),r("li",[t._v("没有state的叫做无状态组件，有state的叫做有状态组件；")]),t._v(" "),r("li",[t._v("多用 props，少用 state，也就是多写无状态组件。")])]),t._v(" "),r("h3",{attrs:{id:"setstate-是异步还是同步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setstate-是异步还是同步"}},[t._v("#")]),t._v(" setState 是异步还是同步？")]),t._v(" "),r("ol",[r("li",[t._v("合成事件中是异步")]),t._v(" "),r("li",[t._v("钩子函数中的是异步")]),t._v(" "),r("li",[t._v("原生事件中是同步")]),t._v(" "),r("li",[t._v("setTimeout 中是同步")])]),t._v(" "),r("p",[t._v("setState 并非真异步，只是看上去像异步。在源码中，通过 isBatchingUpdates 来判断\nsetState 是先存进 state 队列还是直接更新，如果值为 true 则执行异步操作，为 false 则直接更新。\n那么什么情况下 isBatchingUpdates 会为 true 呢？在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。")]),t._v(" "),r("p",[t._v("但在 React 无法控制的地方，比如原生事件，具体就是在 addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新。\n一般认为，做异步设计是为了性能优化、减少渲染次数，React 团队还补充了两点。\n保持内部一致性。如果将 state 改为同步更新，那尽管 state 的更新是同步的，但是 props不是。\n启用并发更新，完成异步渲染。")]),t._v(" "),r("ul",[r("li",[t._v("setState 是同步还是异步的核心关键点：更新队列。")])]),t._v(" "),r("h3",{attrs:{id:"setstate-后发生了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setstate-后发生了什么"}},[t._v("#")]),t._v(" setState 后发生了什么？")]),t._v(" "),r("ol",[r("li",[t._v("在 setState 的时候，React 会为当前节点创建一个 updateQueue 的更新列队。")]),t._v(" "),r("li",[t._v("然后会触发 reconciliation 过程，在这个过程中，会使用名为 Fiber 的调度算法，开始生成新的 Fiber 树， Fiber 算法的最大特点是可以做到异步可中断的执行。")]),t._v(" "),r("li",[t._v("然后 React Scheduler 会根据优先级高低，先执行优先级高的节点，具体是执行 doWork 方法。")]),t._v(" "),r("li",[t._v("在 doWork 方法中，React 会执行一遍 updateQueue 中的方法，以获得新的节点。然后对比新旧节点，为老节点打上 更新、插入、替换 等 Tag。")]),t._v(" "),r("li",[t._v("当前节点 doWork 完成后，会执行 performUnitOfWork 方法获得新节点，然后再重复上面的过程。")]),t._v(" "),r("li",[t._v("当所有节点都 doWork 完成后，会触发 commitRoot 方法，React 进入 commit 阶段。\n在 commit 阶段中，React 会根据前面为各个节点打的 Tag，一次性更新整个 dom 元素")])]),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:a(416)}}),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"reconciler-fiber"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reconciler-fiber"}},[t._v("#")]),t._v(" Reconciler&Fiber")]),t._v(" "),r("h3",{attrs:{id:"什么是fiber-fiber架构解决了什么问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是fiber-fiber架构解决了什么问题"}},[t._v("#")]),t._v(" 什么是fiber？fiber架构解决了什么问题？")]),t._v(" "),r("h3",{attrs:{id:"fiber-root-和root-fiber有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fiber-root-和root-fiber有什么区别"}},[t._v("#")]),t._v(" Fiber root 和root fiber有什么区别？")]),t._v(" "),r("h3",{attrs:{id:"不同fiber之间如何建立区别和联系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不同fiber之间如何建立区别和联系"}},[t._v("#")]),t._v(" 不同fiber之间如何建立区别和联系？")]),t._v(" "),r("h3",{attrs:{id:"react的调和流程是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react的调和流程是什么"}},[t._v("#")]),t._v(" React的调和流程是什么？")]),t._v(" "),r("p",[t._v("React 的渲染过程大致一致，但协调并不相同，以 React 16 为分界线，分为 Stack Reconciler 和 Fiber Reconciler。这里的协调从狭义上来讲，特指 React 的 diff 算法，广义上来讲，有时候也指 React 的 reconciler 模块，它通常包含了 diff 算法和一些公共逻辑。")]),t._v(" "),r("p",[t._v("回到 Stack Reconciler 中，Stack Reconciler 的核心调度方式是递归。调度的基本处理单位是事务，它的事务基类是 Transaction，这里的事务是 React 团队从后端开发中加入的概念。在 React 16 以前，挂载主要通过 ReactMount 模块完成，更新通过 ReactUpdate 模块完成，模块之间相互分离，落脚执行点也是事务。")]),t._v(" "),r("p",[t._v("在 React 16 及以后，协调改为了 Fiber Reconciler。它的调度方式主要有两个特点，第一个是协作式多任务模式，在这个模式下，线程会定时放弃自己的运行权利，交还给主线程，通过requestIdleCallback 实现。第二个特点是策略优先级，调度任务通过标记 tag 的方式分优先级执行，比如动画，或者标记为 high 的任务可以优先执行。Fiber Reconciler的基本单位是 Fiber，Fiber 基于过去的 React Element 提供了二次封装，提供了指向父、子、兄弟节点的引用，为 diff 工作的双链表实现提供了基础。")]),t._v(" "),r("p",[t._v("在新的架构下，整个生命周期被划分为 Render 和 Commit 两个阶段。Render 阶段的执行特点是可中断、可停止、无副作用，主要是通过构造 workInProgress 树计算出 diff。以 current 树为基础，将每个 Fiber 作为一个基本单位，自下而上逐个节点检查并构造 workInProgress 树。这个过程不再是递归，而是基于循环来完成。")]),t._v(" "),r("p",[t._v("在执行上通过 requestIdleCallback 来调度执行每组任务，每组中的每个计算任务被称为 work，每个 work 完成后确认是否有优先级更高的 work 需要插入，如果有就让位，没有就继续。优先级通常是标记为动画或者 high 的会先处理。每完成一组后，将调度权交回主线程，直到下一次 requestIdleCallback 调用，再继续构建 workInProgress 树。")]),t._v(" "),r("p",[t._v("在 commit 阶段需要处理 effect 列表，这里的 effect 列表包含了根据 diff 更新 DOM 树、回调生命周期、响应 ref 等。")]),t._v(" "),r("p",[t._v("但一定要注意，这个阶段是同步执行的，不可中断暂停，所以不要在 componentDidMount、componentDidUpdate、componentWiilUnmount 中去执行重度消耗算力的任务。")]),t._v(" "),r("h3",{attrs:{id:"两大阶段commit-和render-都做了哪些事情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#两大阶段commit-和render-都做了哪些事情"}},[t._v("#")]),t._v(" 两大阶段commit 和render 都做了哪些事情？")]),t._v(" "),r("h3",{attrs:{id:"什么是双缓冲树有什么作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是双缓冲树有什么作用"}},[t._v("#")]),t._v(" 什么是双缓冲树有什么作用？")]),t._v(" "),r("h3",{attrs:{id:"fiber深度优先遍历流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fiber深度优先遍历流程"}},[t._v("#")]),t._v(" Fiber深度优先遍历流程？")]),t._v(" "),r("h3",{attrs:{id:"fiber-的调和能中断吗-如何中断"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fiber-的调和能中断吗-如何中断"}},[t._v("#")]),t._v(" Fiber 的调和能中断吗？如何中断？")]),t._v(" "),r("h2",{attrs:{id:"scheduler-timeslice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scheduler-timeslice"}},[t._v("#")]),t._v(" Scheduler&TimeSlice")]),t._v(" "),r("h3",{attrs:{id:"异步调度原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步调度原理"}},[t._v("#")]),t._v(" 异步调度原理？")]),t._v(" "),r("h3",{attrs:{id:"react-为什么不用settimeout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-为什么不用settimeout"}},[t._v("#")]),t._v(" React 为什么不用setTimeout？")]),t._v(" "),r("h3",{attrs:{id:"说一说时间切片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一说时间切片"}},[t._v("#")]),t._v(" 说一说时间切片？")]),t._v(" "),r("h3",{attrs:{id:"react-如何模拟-requestidlecallback"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-如何模拟-requestidlecallback"}},[t._v("#")]),t._v(" react 如何模拟 RequestIdleCallback?")]),t._v(" "),r("h3",{attrs:{id:"简述一下调度流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简述一下调度流程"}},[t._v("#")]),t._v(" 简述一下调度流程？")]),t._v(" "),r("h2",{attrs:{id:"hooks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),r("h3",{attrs:{id:"react-hooks-为什么必须在函数组件内部执行-react-如何能够监听-react-hooks-在外部执行并抛出异常"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks-为什么必须在函数组件内部执行-react-如何能够监听-react-hooks-在外部执行并抛出异常"}},[t._v("#")]),t._v(" React Hooks 为什么必须在函数组件内部执行？React 如何能够监听 React Hooks 在外部执行并抛出异常？")]),t._v(" "),r("h3",{attrs:{id:"react-hooks-如何把状态保存起来-保存的信息存在了哪里"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks-如何把状态保存起来-保存的信息存在了哪里"}},[t._v("#")]),t._v(" React Hooks 如何把状态保存起来？保存的信息存在了哪里？")]),t._v(" "),r("h3",{attrs:{id:"react-hooks-为什么不能写在条件语句中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks-为什么不能写在条件语句中"}},[t._v("#")]),t._v(" React Hooks 为什么不能写在条件语句中？")]),t._v(" "),r("h3",{attrs:{id:"usememo-内部引用-useref-为什么不需要添加依赖项-而-usestate-就要添加依赖项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usememo-内部引用-useref-为什么不需要添加依赖项-而-usestate-就要添加依赖项"}},[t._v("#")]),t._v(" useMemo 内部引用 useRef 为什么不需要添加依赖项，而 useState 就要添加依赖项？")]),t._v(" "),r("h3",{attrs:{id:"useeffect-添加依赖项-props-a-为什么-props-a-改变-useeffect-回调函数-create-重新执行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#useeffect-添加依赖项-props-a-为什么-props-a-改变-useeffect-回调函数-create-重新执行"}},[t._v("#")]),t._v(" useEffect 添加依赖项 props.a ，为什么 props.a 改变，useEffect 回调函数 create 重新执行？")]),t._v(" "),r("h3",{attrs:{id:"react-内部如何区别-useeffect-和-uselayouteffect-执行时机有什么不同"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-内部如何区别-useeffect-和-uselayouteffect-执行时机有什么不同"}},[t._v("#")]),t._v(" React 内部如何区别 useEffect 和 useLayoutEffect ，执行时机有什么不同？")]),t._v(" "),r("h2",{attrs:{id:"事件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),r("h3",{attrs:{id:"react-有自己的事件系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-有自己的事件系统"}},[t._v("#")]),t._v(" React 有自己的事件系统？")]),t._v(" "),r("h3",{attrs:{id:"什么是合成事件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是合成事件"}},[t._v("#")]),t._v(" 什么是合成事件？")]),t._v(" "),r("ul",[r("li",[t._v("兼容所有浏览器，更好的跨平台；")]),t._v(" "),r("li",[t._v("将事件统一存放在一个数组，避免频繁的新增与删除（垃圾回收）。")]),t._v(" "),r("li",[t._v("方便 react 统一管理和事务机制。")])]),t._v(" "),r("h3",{attrs:{id:"react事件和原生事件的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react事件和原生事件的区别"}},[t._v("#")]),t._v(" React事件和原生事件的区别")]),t._v(" "),r("ul",[r("li",[t._v("对于事件名称命名方式，原生事件为全小写，react 事件采用小驼峰；")]),t._v(" "),r("li",[t._v("对于事件函数处理语法，原生事件为字符串，react 事件为函数；")]),t._v(" "),r("li",[t._v("react 事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用preventDefault()来阻止默认行为")])]),t._v(" "),r("h3",{attrs:{id:"如何实现批量更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何实现批量更新"}},[t._v("#")]),t._v(" 如何实现批量更新")]),t._v(" "),r("h3",{attrs:{id:"事件系统如何模拟冒泡和捕获阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件系统如何模拟冒泡和捕获阶段"}},[t._v("#")]),t._v(" 事件系统如何模拟冒泡和捕获阶段")]),t._v(" "),r("h3",{attrs:{id:"如何通过dom元素找到与之匹配答fiber"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何通过dom元素找到与之匹配答fiber"}},[t._v("#")]),t._v(" 如何通过dom元素找到与之匹配答fiber？")]),t._v(" "),r("h3",{attrs:{id:"为什么不能用return-false-来阻止事件的默认行为"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么不能用return-false-来阻止事件的默认行为"}},[t._v("#")]),t._v(" 为什么不能用return false 来阻止事件的默认行为？")]),t._v(" "),r("h3",{attrs:{id:"事件是绑定在真实的dom上吗-为何不绑定在那里"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件是绑定在真实的dom上吗-为何不绑定在那里"}},[t._v("#")]),t._v(" 事件是绑定在真实的dom上吗？为何不绑定在那里？")]),t._v(" "),r("h3",{attrs:{id:"v17-对事件系统做了哪些改变"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v17-对事件系统做了哪些改变"}},[t._v("#")]),t._v(" V17 对事件系统做了哪些改变？")]),t._v(" "),r("h2",{attrs:{id:"其他"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),r("h3",{attrs:{id:"懒加载-lazy-实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#懒加载-lazy-实现原理"}},[t._v("#")]),t._v(" 懒加载（lazy）实现原理")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.cn/post/6844904191853494280",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解React：懒加载（lazy）实现原理"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"react的异常捕获原理是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react的异常捕获原理是什么"}},[t._v("#")]),t._v(" React的异常捕获原理是什么？")]),t._v(" "),r("h3",{attrs:{id:"react的设计理念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react的设计理念"}},[t._v("#")]),t._v(" React的设计理念？")]),t._v(" "),r("h3",{attrs:{id:"react-与其他库的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-与其他库的区别"}},[t._v("#")]),t._v(" React 与其他库的区别？")]),t._v(" "),r("h2",{attrs:{id:"性能优化手段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能优化手段"}},[t._v("#")]),t._v(" 性能优化手段")]),t._v(" "),r("ol",[r("li",[t._v("React 渲染控制的方法？缓存 react element ，pureComponent ，Memo ，shouldComponentUpdate")]),t._v(" "),r("li",[t._v("shallowEqual 浅比较原理。")]),t._v(" "),r("li",[t._v("React 中节流防抖运用。")]),t._v(" "),r("li",[t._v("合理运用状态管理。")]),t._v(" "),r("li",[t._v("按需引入。减少项目体积。")]),t._v(" "),r("li",[t._v("代码分割 lazy ，异步组件 Suspense 及其原理。")]),t._v(" "),r("li",[t._v("diff 算法，合理应用 key 。")]),t._v(" "),r("li",[t._v("渲染错误边界，componentDidCatch。")]),t._v(" "),r("li",[t._v("状态管理工具和 immutable.js 使用。")]),t._v(" "),r("li",[t._v("useMemo 缓存逻辑。")]),t._v(" "),r("li",[t._v("memo 的缓存策略。")]),t._v(" "),r("li",[t._v("useCallback 缓存函数")])]),t._v(" "),r("h2",{attrs:{id:"设计理念和模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计理念和模式"}},[t._v("#")]),t._v(" 设计理念和模式")]),t._v(" "),r("ol",[r("li",[t._v("React 几种设计模式总结。组合模式，render props模式，提供者模式， hoc 模式，自定义hooks 模式。")]),t._v(" "),r("li",[t._v("新老版本 context 用法特点。")]),t._v(" "),r("li",[t._v("React context 特点。逐层传递，发布订阅。")]),t._v(" "),r("li",[t._v("新版本 context 消费者几种方式。contextType ，useContext ，consumer")]),t._v(" "),r("li",[t._v("hoc 两种方式，优缺点？属性代理，反向继承。")]),t._v(" "),r("li",[t._v("hoc 如何解决静态属性继承问题。")]),t._v(" "),r("li",[t._v("hoc 如何解决 ref 获取问题。")]),t._v(" "),r("li",[t._v("hoc 注意事项。")]),t._v(" "),r("li",[t._v("自定义 hooks 设计。")]),t._v(" "),r("li",[t._v("自定义 hooks 实践。")])]),t._v(" "),r("h2",{attrs:{id:"生态发展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生态发展"}},[t._v("#")]),t._v(" 生态发展")]),t._v(" "),r("ol",[r("li",[t._v("两种路由模式 ｜ spa 单页面路由原理。")]),t._v(" "),r("li",[t._v("React router 使用，实现动态路由，自定义路由。")]),t._v(" "),r("li",[t._v("Route. Router Switch 分工。")]),t._v(" "),r("li",[t._v("权限路由封装。")]),t._v(" "),r("li",[t._v("Mobx-react 使用。")]),t._v(" "),r("li",[t._v("Mobx 和 React Redux 区别？")]),t._v(" "),r("li",[t._v("Mobx 原理，收集依赖，触发更新。")]),t._v(" "),r("li",[t._v("React Redux 和 Redux 使用。")]),t._v(" "),r("li",[t._v("Redux 设计模式 ｜ 中间件原理。")]),t._v(" "),r("li",[t._v("React Redux  原理？")]),t._v(" "),r("li",[t._v("react redux 衍生： dva React-saga 等")]),t._v(" "),r("li",[t._v("React Redux 中 connect 原理 （这里推荐大家看一下源码，学习一下 hooks使用）")])]),t._v(" "),r("h2",{attrs:{id:"推荐阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[t._v("#")]),t._v(" 推荐阅读")]),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzk0MDMwMzQyOA==&mid=2247490164&idx=1&sn=2eb9b80862516d8f01f0ba7fac508ee8&source=41#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("React高频面试题梳理，看看面试怎么答？（上）"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6941546135827775525#heading-27",target:"_blank",rel:"noopener noreferrer"}},[t._v("「2021」高频前端面试题汇总之React篇（上）"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6940942549305524238#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("「2021」高频前端面试题汇总之React篇（下）"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844903993278201870",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 开发必须知道的 34 个技巧【近1W字】"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/GTTm260AvNdEib671RDufg",target:"_blank",rel:"noopener noreferrer"}},[t._v("React知识点梳理"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7085145274200358949",target:"_blank",rel:"noopener noreferrer"}},[t._v("86张脑图，一口气看完 React"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/sudheerj/reactjs-interview-questions",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 500题"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=s.exports}}]);