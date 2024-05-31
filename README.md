# front-based
## 说明
这是一个mono-repo，使用lerna + pnpm管理

切换分支
```shell
git checkout -b yourbranch
```

安装依赖
```shell
pnpm i
```

以下命令会启动所有相关的工程
```shell
npm run dev
npm run dev_

```

启动指定的项目
```shell
cd [项目所在路径] && npm run dev
```

```yaml
packages:
  js-advanced: js高级特性验证使用（web.js）
  shared: js相关api手写，以及相关工具类（node.js）
  react-ui: 搭建的一个全新的ui组件库
  react-front-research: react开发相关调研
  express-based: 基于express的node开发环境
  react-pdf-viewer: 基于react-pdf的一个可高亮的库
  v3-admin-vite: 一个开源的v3管理后台
  react-i18n-ast: ast与i18n的碰撞
```
