import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Fresns Docs',
  description: 'Fresns Developer Documentation. Help for wherever you are on your Fresns journey.',

  titleTemplate: false,
  cleanUrls: false,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://assets.fresns.com/images/icons/fresns.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Fresns' }],
    ['meta', { property: 'og:description', content: 'Cross-platform general-purpose multiple content forms social network service software' }],
    ['meta', { property: 'og:url', content: 'https://docs.fresns.com' }],
    ['meta', { property: 'og:image', content: 'https://assets.fresns.com/images/wikis/open-graph/open-source.jpg' }],
  ],

  themeConfig: {
    siteTitle: 'Fresns Docs',
    logo: 'https://assets.fresns.com/images/icons/fresns.png',

    nav: [
      {
        text: 'Ecosystem',
        items: [
          { text: 'Community', link: 'https://discuss.fresns.org/' },
          { text: 'Marketplace', link: 'https://marketplace.fresns.com/' },
          { text: 'Developer Platform', link: 'https://developer.fresns.com/' },
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
      description: 'Fresns 开发者文档，在 Fresns 旅程中随时为你提供帮助。',

      titleTemplate: false,

      head: [
        ['link', { rel: 'icon', type: 'image/png', href: 'https://assets.fresns.com/images/icons/fresns.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Fresns' }],
        ['meta', { property: 'og:description', content: '一款免费开源的社交网络服务软件' }],
        ['meta', { property: 'og:url', content: 'https://docs.fresns.com' }],
        ['meta', { property: 'og:image', content: 'https://assets.fresns.com/images/wikis/open-graph/open-source-zh-hans.jpg' }],
      ],

      themeConfig: {
        siteTitle: 'Fresns 文档',

        nav: [
          {
            text: '生态系统',
            items: [
              { text: '交流社区', link: 'https://discuss.fresns.org/' },
              { text: '应用市场', link: 'https://marketplace.fresns.com/zh-Hans/' },
              { text: '开发者中心', link: 'https://developer.fresns.com/zh-Hans/' },
            ],
          }
        ],
      },
    },
  },
})
