(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{660:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"基础概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[s._v("#")]),s._v(" 基础概念")]),s._v(" "),t("h3",{attrs:{id:"lerna是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna是什么"}},[s._v("#")]),s._v(" lerna是什么")]),s._v(" "),t("p",[s._v("Lerna是一个用来优化托管在 git\\npm 上的多 package 代码库的工作流的一个管理工具,可以让你在主项目下管理多个子项目，从而解决了多个包互相依赖，且发布时需要手动维护多个包的问题。")]),s._v(" "),t("ul",[t("li",[s._v("关键词：多仓库管理，多包管理，自动管理包依赖")])]),s._v(" "),t("h3",{attrs:{id:"lerna-优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-优势"}},[s._v("#")]),s._v(" lerna 优势")]),s._v(" "),t("ul",[t("li",[s._v("资源浪费")])]),s._v(" "),t("p",[s._v("通常情况下，一个公司的业务项目只有一个主干，多 git repo 的方式，这样 node_module 会出现大量的冗余，比如它们可能都会安装 React、React-dom 等包，浪费了大量存储空间。")]),s._v(" "),t("ul",[t("li",[s._v("调试繁琐")])]),s._v(" "),t("p",[s._v("很多公共的包通过 npm 安装，想要调试依赖的包时，需要通过 npm link 的方式进行调试。")]),s._v(" "),t("ul",[t("li",[s._v("资源包升级问题")])]),s._v(" "),t("p",[s._v("一个项目依赖了多个 npm 包，当某一个子 npm 包代码修改升级时，都要对主干项目包进行升级修改。(这个问题感觉是最烦的，可能一个版本号就要去更新一下代码并发布)")]),s._v(" "),t("h2",{attrs:{id:"原理浅析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理浅析"}},[s._v("#")]),s._v(" 原理浅析")]),s._v(" "),t("ul",[t("li",[s._v("monorepo 和 multrepo 对比")])]),s._v(" "),t("p",[s._v("monorepo：是将所有的模块统一的放在一个主干分支之中管理。multrepo：将项目分化为多个模块，并针对每一个模块单独的开辟一个 reporsitory来进行管理。")]),s._v(" "),t("h3",{attrs:{id:"lerna-软链实现-如何动态创建软链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-软链实现-如何动态创建软链"}},[s._v("#")]),s._v(" lerna 软链实现(如何动态创建软链)")]),s._v(" "),t("p",[s._v("未使用 lerna 之前，想要调试一个本地的 npm 模块包，需要使用 npm link 来进行调试，但是在 lerna 中可以直接进行模块的引入和调试，这种动态创建软链是如何实现的？")]),s._v(" "),t("ul",[t("li",[s._v("软链是什么？")])]),s._v(" "),t("p",[s._v("lerna  中也是通过这种方式来实现软链的，Node.js 中如何实现软链方式: fs.symlinkSync(target,path,type)")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("symlinkSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntarget "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Buffer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 目标文件")]),s._v("\npath "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Buffer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建软链对应的地址")]),s._v("\ntype "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("它会创建名为 path 的链接，该链接指向 target。type 参数仅在 Windows 上可用，在其他平台上则会被忽略。它可以被设置为 'dir'、 'file' 或 'junction'。如果未设置 type 参数，则 Node.js 将会自动检测 target 的类型并使用 'file' 或 'dir'。如果 target 不存在，则将会使用 'file'。Windows 上的连接点要求目标路径是绝对路径。当使用 'junction' 时， target 参数将会自动地标准化为绝对路径。")]),s._v(" "),t("ul",[t("li",[s._v("基本使用")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("symlinkSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./target/a.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./b.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这段代码的意思是为  创建一个软链接 b.js 指向了文件 ./targert/a.js,当 a.js 中的内容发生变化时，b.js 文件也会发生相同的改变。")]),s._v(" "),t("p",[s._v("在 Node.js 文档中，fs.symlinkSync()lerna 的源码中动态链接也是通过 symlinkSync 来实现的。源码对应地址：软链实现源码地址参考")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createSymbolicLink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("silly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"createSymbolicLink"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" fs\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lstat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* nothing exists at destination */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("symlink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),t("h3",{attrs:{id:"初始化一个lerna-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个lerna-项目"}},[s._v("#")]),s._v(" 初始化一个lerna 项目")]),s._v(" "),t("ul",[t("li",[s._v("lerna 在使用之前需要全局安装 lerna 工具。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lerna -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("mkdir lerna-demo,在当前目录下创建文件夹lerna-demo,然后使用命令 lerna init执行成功后，目录下将会生成这样的目录结构。，一个 hello world级别的 lerna 项目就完成了。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("packages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" lerna"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("配置文件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("工程描述文件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"lerna-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-常用命令"}},[s._v("#")]),s._v(" lerna 常用命令")]),s._v(" "),t("ol",[t("li",[s._v("初始化 lerna 项目")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna init \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("创建一个新的由 lerna 管理的包。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna create "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("安装所有·依赖项并连接所有的交叉依赖")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna bootstrap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("增加模块包到最外层的公共 node_modules中")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" axios\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("增加模块包到 packages 中指定项目 下面是将 ui-web 模块增加到 example-web 项目中")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ui-web --scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("example-web\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("在 packages 中对应包下的执行任意命令 下面的命令，是对 packages 下的 example-web 项目执行 yarn start 命令 ，比较常用，可以把它配置到最外层的 package.json 中。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" --scope example-web -- "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果命令中不增加 --scope example-web直接使用下面的命令，这会在 packages 下所有包执行命令rm -rf ./node_modules")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -- "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ./node_modules\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("显示所有的安装的包")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna list // 等同于 lerna "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里再提一个命令也比较常用,可以通过json的方式查看 lerna 安装了哪些包,json 中还包括包的路径，有时候可以用于查找包是否生效。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna list --json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"8"}},[t("li",[s._v("从所有包中删除 node_modules 目录")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna clean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("注意下 lerna clean 不会删除项目最外层的根 node_modules")])]),s._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[s._v("在当前项目中发布包")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lerna publish\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v('这个命令可以结合 lerna.json 中的  "version": "independent" 配置一起使用，可以完成统一发布版本号和packages 下每个模版发布的效果，具体会在下面的实战讲解。')]),s._v(" "),t("blockquote",[t("p",[s._v("lerna publish 永远不会发布标记为 private 的包（package.json中的”private“: true）")])]),s._v(" "),t("p",[s._v("以上命令基本够日常开发使用了，如果需要更详细内命令内容，可以查看下面的详细文档 lerna 命令详细文档参考")]),s._v(" "),t("h2",{attrs:{id:"推荐阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[s._v("#")]),s._v(" 推荐阅读")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/qYK-4WABULffy5tRV9T46A",target:"_blank",rel:"noopener noreferrer"}},[s._v("Lerna 运行流程剖析"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/OsYX3hB8XeJC-8oHHoASzg",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端工程化-基于 Monorepo 的 lerna 模块(从原理到实战)"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);