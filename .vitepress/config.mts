import { defineConfig } from 'vitepress'
import { setSidebar } from './utils/autoSetSidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "谢同学的文档",
  description: "A VitePress Site",
  head: [["link", {rel: "icon", href: "/logo.svg"}]],
  // 国际化i18n
  // locales: {
  //   root: {
  //     label: '简体中文',
  //     lang: 'zh-CN',
  //   }
  // },
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    outline: 'deep',
    outlineTitle: '目录',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/front-end/JavaScript' },
          { text: 'Vue', link: '/front-end/Vue' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      { text: 'JavaScript', link: '/front-end/JavaScript/' },
      { text: 'Vue', link: '/front-end/Vue' },
    ],

    // 利用自定义的函数，根据文件夹格式生成sidebar
    sidebar: {
      "/front-end/JavaScript": setSidebar("/front-end/JavaScript"),
      "/front-end/Vue": setSidebar("/front-end/Vue"),
      "Examples": [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thresh3x' }
    ],

    footer: {
      message: 'A VitePress Site',
      copyright: 'Copyright © 2024-present Xie Shijie'
    },
    // 上次更新显示（目前没看到作用）
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // 文章切换时显示，对于非英语页面有用
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换页面',
              closeText: '关闭',
            },
          }
        },
      }
    },
  }
})
