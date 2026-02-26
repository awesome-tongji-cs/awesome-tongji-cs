import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/awesome-tongji-cs/',
  title: "Awesome TongJi CS",
  description: "同济大学计算机科学资源导航",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      {text: '杂项', link: '/tech/ai-for-dev'},
      { text: '重要概念', link: '/courses/os/intro' },
      
      { text: '关于', link: '/api-examples' }
    ],

    sidebar: {
      // 课程资料页面的侧边栏
      '/courses/': [
        {
          text: '操作系统',
          collapsed: false,
          items: [
            { text: '课程简介', link: '/courses/os/intro' },
            { text: '学习笔记', link: '/courses/os/notes' },
            { text: '历年卷', link: '/courses/os/exams' },
          ]
        },
        {
          text: '数据库',
          collapsed: false,
          items: [
            { text: '课程简介', link: '/courses/db/intro' },
            { text: '学习笔记', link: '/courses/db/notes' },
            { text: '历年卷', link: '/courses/db/exams' },
          ]
        },
      ],

      // 其他页面的默认侧边栏
      '/': [
        {
          text: '开始',
          items: [
            { text: '前言', link: '/prewrite' },
          ]
        },
        {
          text: '关于',
          items: [
            { text: '如何贡献', link: '/api-examples' }
          ]
        }
      ],
      '/tech/':[
      {
        text: '从vibe coding到agentic engineering',
        link: '/tech/ai-for-dev',
      }

    ],


    },
    

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '基于 MIT 协议开源',
      copyright: 'Copyright © 2024 Awesome TongJi CS Contributors'
    }
  }
})
