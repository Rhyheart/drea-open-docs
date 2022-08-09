# 介绍

## 简介

本项目为 [梦幻框架](http://drea.cc)机器人社区[开放文档](http://drea.cc/docs)，开发者们既可以为梦幻框架编写文档，也可以为您喜欢的应用编写文档。

## 云端修改

对于非专业用户，可点击文档页面左下角`在 GitHub 上编辑此页`链接，直接在线编辑，保存后提PR即可！

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

- **编写文档**

本文档项目基于[VuePress](https://v2.vuepress.vuejs.org/zh/)框架，以[Markdown](https://v2.vuepress.vuejs.org/zh/guide/markdown.html)作为编写规范。

- **提交代码**

确认文档修改无误后即可推送PR到dev分支，待管理员同步更新到社区即可。
