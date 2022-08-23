<p align="center">
  <a href="https://drea.cc/docs">
    <img src="https://drea.cc/docs/hero.png" width="200" height="200" alt="Rhyheart">
  </a>
</p>

<div align="center">

  # drea-open-docs

  _✨ 本文档项目基于 [VuePress](https://v2.vuepress.vuejs.org/zh/) 框架，以 [Markdown](https://v2.vuepress.vuejs.org/zh/guide/markdown.html) 作为编写规范，简单易上手✨_

  <a href="https://github.com/Rhyheart/drea-open-docs/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Rhyheart/drea-open-docs" alt="license">
  </a>
  <a href="https://github.com/Rhyheart/drea-open-docs/releases">
    <img src="https://img.shields.io/github/v/release/Rhyheart/drea-open-docs?color=blueviolet&include_prereleases"
      alt="release">
  </a>

</div>

## 项目介绍

本文档项目服务于[梦幻社区](http://drea.cc)，对应文档站点为 <https://drea.cc/docs>，文档内容或有欠缺，诚邀各位开发者们共同参与编写补充。

## 云端修改

对于非专业用户，打开 [梦幻文档](https://drea.cc/docs)，找到你想要的编辑的页面，然后点击页面左下角`在 GitHub 上编辑此页`链接，直接在线编辑，保存后提PR即可！

## 本地修改

对于专业开发者，可克隆代码到本地进行修改，然后推送到云端

- **安装开发工具**

安装 VSCode、NodeJS、Git

- **初始化项目**

克隆代码

```bash
git clone -b dev https://github.com/Rhyheart/drea-open-docs.git
```

进入项目

```bash
cd /drea-open-docs
```

安装yarn

```bash
npm install -g yarn
```

初始化依赖

```bash
yarn
```

- **调试项目**

```bash
yarn dev
```

- **文档结构**

```
docs
├── .vuepress/    # Vuepress相关文件
│   └── config.ts # 文档配置
├── start/        # 平台介绍
├── forum/        # 社区介绍
├── framework/    # 框架教程
├── app/          # 应用教程
├── log/          # 开放平台日志
└── README.md     # 首页文档
```

- **提交代码**

确认文档修改无误后即可推送PR到云端，待管理员同步更新到开放平台即可。
