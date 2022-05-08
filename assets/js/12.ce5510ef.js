(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{421:function(t,e,a){t.exports=a.p+"assets/img/cli-tool.631097f5.png"},655:function(t,e,a){"use strict";a.r(e);var r=a(16),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"为什么要使用脚手架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用脚手架"}},[t._v("#")]),t._v(" 为什么要使用脚手架")]),t._v(" "),r("p",[t._v("除了可以快速创建代码之外，使用相同脚手架创建出来的项目，拥有着相同的文件结构、代码风格、依赖模块、开发工具，这对于同一个团队而言，减少了团队成员之间的沟通和维护成本。")]),t._v(" "),r("p",[t._v("说了这么多，我们来总结一下到底为什么要使用前端脚手架。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("方便快捷：我们只需要下载对应的脚手架依赖然后在命令行执行一行命令或者一些初始化信息，就可以将项目的框架搭建完成，整个用时十分钟左右，而自己搭建少则一两个小时，多则一两天。")])]),t._v(" "),r("li",[r("p",[t._v("最佳实践：不管我们使用的是官方提供的脚手架还是团队内部的脚手架，其中的配置或者模板肯定都是经过反复的试错之后提炼出来的最佳实践，我们使用脚手架相当于站在了巨人的肩膀上进行开发。")])]),t._v(" "),r("li",[r("p",[t._v("统一规范：团队的内部使用相同的脚手架创建出来的项目，具有相同的组织结构、依赖模块、工具配置，有利于项目的维护和团队的合作。")])])]),t._v(" "),r("h2",{attrs:{id:"业界其他脚手架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#业界其他脚手架"}},[t._v("#")]),t._v(" 业界其他脚手架")]),t._v(" "),r("h3",{attrs:{id:"create-react-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-react-app"}},[t._v("#")]),t._v(" Create-React-App")]),t._v(" "),r("p",[t._v("和前面介绍的 Plop、Yeoman 不指定特定框架的脚手架生成器相比，Create-React-App（简称 CRA）和 Vue Cli 恰恰相反。")]),t._v(" "),r("p",[t._v("CRA 是一款 React 官方提供的 React 开发工具集，其中包含了 create-react-app 和 react-script 两个基础包。create-react-app 用于选择脚手架创建项目，而 react-script 是封装了项目启动、编译、测试等基础工具的运行时依赖包。")]),t._v(" "),r("p",[t._v("正是因为 CRA 将运行时的各项配置都封装在 react-script 中了，这大大降低了开发者的学习成本，你不需要选择使用哪个构建工具，不需要选择对应依赖包的版本，不需要去编写并测试那些繁琐的配置文件（特别是 webpack！），开箱即用！自己从 0 到 1 自己搭建过项目的同学都知道，要想成功地将项目启动，少则需要个把小时，多则需要一两天的时间 o(╥﹏╥)o，搭建项目两小时，开发十分钟。而使用 CRA，我们只需要执行 npx create-react-app your-app-name 就可以直接生成一个 React 项目。打开项目后，再执行 npm run start 就可以开发业务代码了！")]),t._v(" "),r("p",[t._v("不过凡事都有利弊，CRA 将所有的细节都封装了起来，虽然降低了创建项目时的成本，但是却增加了后期的维护成本。比如你想要去修改 webpack 的某一项配置，是不能在项目中直接修改的。这个时候就要使用官方提供的 eject 选项将全部配置反编译回项目。但是一旦你这么做了，那么就意味着你放弃了官方提供的各个依赖包的维护。为此，官方又提供了修复包 react-rewired 和 customize-cra ，可以进行自定义配置 。")]),t._v(" "),r("h3",{attrs:{id:"vue-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli"}},[t._v("#")]),t._v(" Vue Cli")]),t._v(" "),r("p",[t._v("和 CRA 类似，Vue Cli 是一款 Vue 开发工具集。由 Vue.js 官方维护，定位是 Vue.js 快速开发的完整系统。")]),t._v(" "),r("p",[t._v("完整的 Vue Cli 由三部分组成：全局命令的 @vue/cli、运行时依赖 @vue/cli-service和功能插件 @vue/cli-plugin-*，并且还有一套完整的图形化创建和用户管理界面，可谓是良心售后了。")]),t._v(" "),r("p",[t._v("Vue Cli 吸取了 CRA 的教训，在保留了创建项目开箱即用的优点的同时，也提供了覆盖原有配置的能力。同时，在创建项目的时候@vue/cli 通过交互式的方式让用户自己选择需要哪些定制化功能，比如是否集成路由、是否需要 TypeScript、是否使用 Babel……")]),t._v(" "),r("p",[t._v("Vue Cli 代表的是更灵活的折中理念，也是官方提供的关于特定框架的最佳实践。但是，其只是在创建项目的时候根据你的需求集成不同的工具，并不在运行时有过多的干预，这样你就可以直接修改其中的内容，定制化能力增强。")]),t._v(" "),r("h2",{attrs:{id:"工具集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工具集"}},[t._v("#")]),t._v(" 工具集")]),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:a(421)}}),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"搭建流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搭建流程"}},[t._v("#")]),t._v(" 搭建流程")]),t._v(" "),r("h3",{attrs:{id:"_1-创建项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建项目"}},[t._v("#")]),t._v(" 1.创建项目")]),t._v(" "),r("h3",{attrs:{id:"_2-创建脚手架启动命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建脚手架启动命令"}},[t._v("#")]),t._v(" 2.创建脚手架启动命令")]),t._v(" "),r("ul",[r("li",[t._v("首先我们要借助 commander 依赖去实现这个需求")]),t._v(" "),r("li",[t._v("参照 vue-cli 常用的命令有 create、config 等等，在最新版本中可以使用 vue ui 进行可视化创建")]),t._v(" "),r("li",[t._v("如果创建的存在，需要提示是否覆盖")])]),t._v(" "),r("h3",{attrs:{id:"_3-询问用户问题获取创建所需信息-使用-inquirer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-询问用户问题获取创建所需信息-使用-inquirer"}},[t._v("#")]),t._v(" 3. 询问用户问题获取创建所需信息（使用 inquirer）")]),t._v(" "),r("h3",{attrs:{id:"_4-下载远程模板-使用-download-git-repo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-下载远程模板-使用-download-git-repo"}},[t._v("#")]),t._v(" 4. 下载远程模板（使用 download-git-repo）")]),t._v(" "),r("h3",{attrs:{id:"_5-发布项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-发布项目"}},[t._v("#")]),t._v(" 5. 发布项目")]),t._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6966119324478079007",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 0 构建自己的脚手架/CLI知识体系（万字）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7021097811491946503",target:"_blank",rel:"noopener noreferrer"}},[t._v("中高级前端必备：如何设计并实现一个脚手架"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7087462668604276749",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于umi的前端脚手架（避坑，巨详细）"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);