import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Fresns Docs',
  titleTemplate: false,
  description: 'Fresns Developer Documentation. Help for wherever you are on your Fresns journey.',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://files.fresns.org/wiki/icons/fresns.png' }],
  ],

  cleanUrls: false,

  themeConfig: {
    siteTitle: 'Fresns Docs',
    logo: 'https://files.fresns.org/wiki/icons/fresns.png',

    nav: [
      {
        text: 'Ecosystem',
        items: [
          { text: 'Community', link: 'https://space.fresns.com/developers' },
          { text: 'Developer', link: 'https://developer.fresns.com/' },
          { text: 'Marketplace', link: 'https://marketplace.fresns.com/' },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fresns' }
    ],

    footer: {
      message: 'Released under the Apache-2.0 License',
      copyright: 'Copyright © 2021-2024 <a href="https://github.com/jevantang" target="_blank">Jevan Tang</a>',
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    'zh-Hans': {
      label: '简体中文',
      lang: 'zh-Hans',
      title: 'Fresns 文档',
      titleTemplate: false,
      description: 'Fresns 开发者文档，在 Fresns 旅程中随时为你提供帮助。',

      themeConfig: {
        siteTitle: 'Fresns 文档',

        nav: [
          {
            text: '生态系统',
            items: [
              { text: '交流社区', link: 'https://space.fresns.com/developers/zh-Hans/' },
              { text: '开发者中心', link: 'https://developer.fresns.com/zh-Hans/' },
              { text: '应用市场', link: 'https://marketplace.fresns.com/zh-Hans/' },
            ],
          }
        ],
      },
    },
  },
})
