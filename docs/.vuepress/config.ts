import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { clipboardPlugin } from "vuepress-plugin-clipboard"; 
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Drea Robot',
  description: '梦幻框架是一款基于HTTP内核，支持多协议、多账号、多平台的高效、稳定、免费的机器人框架！',
  base: '/docs/',
  head: [
    ['link', { rel: 'icon', href: '/docs/favicon.png' }]
  ],
  plugins: [
    clipboardPlugin({
      align: 'top',
      color: '#fff',
      successText: '复制成功',
      successTextColor: '#fff'
    }),
    docsearchPlugin({
      appId: 'P5DTJZHV92',
      apiKey: '31269f8ab1baa22623a6a00fbea77940',
      indexName: 'drea',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        }
      }
    })
  ],
  theme: defaultTheme({
    logo: '/favicon.png',
    colorMode: 'dark',
    repo: 'Rhyheart/drea-open-docs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLink: true,
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
        navbar: [
          {
            text: '官网',
            link: 'https://drea.cc',
          },
          {
            text: '社区',
            link: 'https://drea.cc/forum.php',
          },
          {
            text: '文档',
            link: '/',
            activeMatch: '.*'
          }
        ],
        sidebar: {
          '/': [
            {
              text: '文档',
              children: [
                '/start/readme.md'
              ],
            },
            {
              text: '梦幻社区',
              children: [
                '/forum/readme.md',
                '/forum/rule.md'
              ],
            },
            {
              text: '梦幻框架',
              children: [
                '/framework/readme.md',
                '/framework/course.md',
                {
                  text: '方法文档',
                  children: [
                    '/framework/event.md',
                    '/framework/method.md',
                    '/framework/const.md',
                    '/framework/code.md'
                  ]
                }
              ],
            },
            {
              text: '梦幻应用',
              children: [
                '/app/readme.md',
                '/app/custom.md',
                '/app/qa.md',
                '/app/ui.md',
                '/app/menu.md'
              ],
            }
          ]
        }
      }
    }
  })
})