# fe-tutorial

## 视频教程大纲

- 学习 node.js
- 学习 react
- 学习 fiddler
- 学习 react-imvc

## 第一部分：学习 node.js

### 下载安装 node.js

node.js 官网：https://nodejs.org/en/

下载到 nodejs.exe 之后，一路点确定，安装 node.js 到本机电脑

时间有限，本教程所在的机器已经安装了 node.js。继续——

node.js 官方里有相关文档，比如：https://nodejs.org/api/

### 使用 node.js http 模块创建一个 http 服务

在文件夹下按住 shift 键，再点击鼠标右键，菜单栏将出现“在此处打开命令行窗口”

在命令行输入`node -v`，查看 node.js 版本，输入 `npm -v` 查看 npm 版本。

输入 `npm install -g cnpm`，安装 cnpm，使用 `cnpm install` 代替 `npm install`，可以加快下载依赖的速度。

输入 `node xxx.js` 启动服务。

在浏览器里输入 localhost:3003 查看。

修改 httpServer 的 response 内容，验证 node.js 服务。

一般情况下，修改文件之后，需要按住 ctrl+c kill 掉当前 node.js 进程，再输入 `node xxx.js` 重启服务。

## 第二部分，学习 react

### 安装 create-react-app 工具

在命令行输入 `cnpm install -g create-react-app`，安装 create-react-app 工具

在命令行输入 `create-react-app learn-react` 命令，创建文件夹 `learn-react`，等待工具自动完成安装事宜。

打开 Github，访问 https://github.com/facebookincubator/create-react-app

可以查看 create-react-app 的使用教程。

打开 Github，访问 react 仓库，进入官方文档。

地址：https://facebook.github.io/react/

### 使用 create-react-app + react 写一个简单的 counter web app

时间有限，本教程所在机器已经安装好 create-react-app ，并生成了 learn-react 的项目，可以直接进入开发阶段。

在 `learn-react` 目录下，打开命令行，输入 `npm start` 启动开发环境，该命令会自动打开网址。

生成的项目里有简单的演示内容。在大致预览之后，删除演示内容，进入 counter web-app 的开发。

### react 开发 counter app

创建以大写字母开头的组件文件，Counter.js。

`import React`，`export default Counter`。

创建入口文件 index.js，使用 `ReactDOM` 模块，将 `Counter` 组件渲染成 DOM，显示在浏览器上。

阅读 create-react-app 的错误提示，完善代码细节，直到成功。

编写事件处理器，实现 `+1` 和 `-1` 的功能。

当你编辑代码后，create-react-app 会自动刷新浏览器。

如果对 ES2015+ 的语法不熟悉，可以去 babel 的官网学习 `learn es2015` 。

babel 官网地址：http://babeljs.io/
learn es2015：http://babeljs.io/learn-es2015/

Counter App 已经完成，great!!

## 第三部分，学习 fiddler 工具的用法

### 安装 fiddler 软件

去 fiddler 官网下载，需要输入一个邮箱地址，如果想订阅 fiddler 的更新，可以输入真实地址。

如果只是想下载，可以输入一个合法的邮箱地址。

时间有限，本教程所在的机器上已经安装好了 fiddler，可以直接进入使用阶段。

### 使用 fiddler 代理 http 请求。

在浏览器里输入 google.com，不管能否打开，我们都使用 fiddler 进行代理。

fiddler 左侧面板是它捕获到的网络请求。

fiddler 右侧面板可以实现代理功能，比如 AutoResponser 添加规则。

创建一个自定义的响应内容，比如 `hello google`。点击 save 之后，关掉弹窗。

再次打开 google.com，将会看到你自定义的响应内容，然后我们尝试修改一下。如此简单。

用本地文件作为响应内容。可以看到，我们成功地将 Counter.js 组件设置为 google.com 的相应内容。

将 google.com 的网络请求映射到本地端口。将 google.com 的请求转发到我们的 Counter App 里，成功！。

## 学习 react-imvc 的用法。

第一步：下载 react-imvc-template 项目模板

时间有限，本教程所在的机器上已经下载了 react-imvc-template。

### 在 react-imvc 仓库里创建一个新项目

新项目在 src 文件夹里，以 app-xxx 命名。

新项目的入口文件 index.js 是一个路由表，它需要被 import 到 src/index.js 这个总路由表里。

项目如此创建完毕。

### 在项目 app-learn 下创建一个新页面

每个页面都是一个文件夹结构，其中包含三个组成部分：Model、View 和 Controller。

View 是 React 写的，Model 是 redux-like 的简化版库 relite，Controller 是一个带生命周期的 ES2015 Classes 类。

创建 home 页面，复用 Counter App 的代码，然后配置 Home 的路由。

Model 包含两个概念，initialState 和 actions，其中 initialState 是我们页面的状态树，包含所有数据。

而 actions 则是纯函数，接受两个参数 state 和 payload，state 最初是 initialState，然后变成 action 返回的 new state。

View 和 Model 都将被挂在到 Controller 里，Model 的两个组成部分用来创建 controller.store。

react-imvc 会自动将 store 和 View 绑定起来，store 里的 state 发生变化，View 就自动刷新。

在启动应用之前，先 `cnpm install` 下载依赖。启动命令为 `npm start`

react-imvc 的发布路径在 `package.json` 的 config.vd 字段里。

有一个需要注意的知识，ES2015 里的 `export let xxx` 和 `export default` 是不同的，容易混淆。

使用 `npm run start:client` 命令可以启动不带服务端渲染的开发模式，容易 debug。查看源码会发现，服务端只渲染了一个基本骨架。

而 `npm start` 则会启动服务端渲染。此时再查看源代码，可以看到服务端渲染的内容。

imvc 的全称是 isomorphic-mvc，同构 MVC，一份代码，既可以跑在服务端，也可以跑在客户端。

写好 model.js，view.js 和 controller.js 之后，不需要再写额外的代码，每个页面都自带了服务端渲染的功能。

同时，在用户交互过程中发生的页面跳转，则走客户端渲染模式，可以极大地降低服务器的负荷，同时又保留首次访问的快速。

view 是由 react 编写的，react 组件的生命周期全部被映射到 controller 里。同时 controller 还具备其他额外的生命周期。

react-imvc 会在控制台，输入每次 action 的记录。以及每次 react 渲染的耗时。

同时内置 recorder，可以回溯 action 的时间线。

react-imvc 还包含很多强大而灵活的功能，鉴于时间关系，本教程不再一一演示，留给大家在项目中自行探索。


## 结语

感谢大家观看本次教程。下次再见。