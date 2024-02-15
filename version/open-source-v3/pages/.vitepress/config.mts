import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',

  title: 'Fresns Open Source',
  description: 'Fresns is a free and open source social network service software, a general-purpose community product designed for cross-platform, and supports flexible and diverse content forms. It conforms to the trend of the times, satisfies a variety of operating scenarios, is more open and easier to re-development.',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://images.fresns.com/icon-2021.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Fresns' }],
    ['meta', { property: 'og:description', content: 'Cross-platform general-purpose multiple content forms social network service software' }],
    ['meta', { property: 'og:url', content: 'https://fresns.org' }],
    ['meta', { property: 'og:image', content: 'https://images.fresns.com/docs/open-graph/open-source.jpg' }],
  ],

  cleanUrls: false,

  sitemap: {
    hostname: 'https://fresns.org',
  },

  themeConfig:{
    logo: 'https://images.fresns.com/icon-2021.png',
    nav: navbar(),

    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-Hans': {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/fresns/fresns',
      }
    ],

    sidebar: {
      '/intro/': sidebarIntro(),
      '/guide/': sidebarGuide(),
      '/config/': sidebarGuide(),
      '/community/': sidebarCommunity(),
      '/contributing/': sidebarCommunity(),
    },

    footer: {
      message: 'Released under the Apache-2.0 License',
      copyright: 'Copyright © 2021-2024 <a href="https://github.com/jevantang" target="_blank">Jevan Tang</a>',
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    'zh-Hans': {
      label: '简体中文',
      lang: 'zh-Hans',
      title: 'Fresns 开源程序',
      description: 'Fresns 是一款免费开源的社交网络服务软件，专为跨平台而打造的通用型社区产品，支持灵活多样的内容形态，可以满足多种运营场景，符合时代潮流，更开放且更易于二次开发。',

      head: [
        ['link', { rel: 'icon', type: 'image/png', href: 'https://images.fresns.com/icon-2021.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Fresns' }],
        ['meta', { property: 'og:description', content: '一款免费开源的社交网络服务软件' }],
        ['meta', { property: 'og:url', content: 'https://fresns.org/zh-Hans/' }],
        ['meta', { property: 'og:image', content: 'https://images.fresns.com/docs/open-graph/open-source-zh-hans.jpg' }],
      ],

      themeConfig: {
        nav: navbarForZh(),

        sidebar: {
          '/zh-Hans/intro/': sidebarIntroForZh(),
          '/zh-Hans/guide/': sidebarGuideForZh(),
          '/zh-Hans/config/': sidebarGuideForZh(),
          '/zh-Hans/community/': sidebarCommunityForZh(),
          '/zh-Hans/contributing/': sidebarCommunityForZh(),
        },

        outlineTitle: '本页导览',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '深色模式',

        lastUpdatedText: '最后一次更新',

        docFooter: {
          prev: '上一项',
          next: '下一项',
        },
      }
    }
  },
})

// Navbar
function navbar() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Intro', link: '/intro/', activeMatch: '/intro/' },
    { text: 'Guide', link: '/guide/', activeMatch: `^/(guide|config)/` },
    {
      text: 'Ecosystem',
      items: [
        { text: 'Teams', link: '/community/teams.md' },
        { text: 'Join', link: '/community/join.md' },
        // { text: 'Sponsor', link: '/community/sponsor.md' },
        { text: 'Contributing', link: '/contributing/' },
        { text: 'Community', link: 'https://discuss.fresns.org' },
        { text: 'Marketplace', link: 'https://marketplace.fresns.com/open-source' },
      ],
      activeMatch: `^/(community|contributing)/`,
    },
    {
      text: 'Developer Docs',
      items: [
        { text: 'Development Extensions', link: 'https://docs.fresns.com/open-source/' },
        { text: 'Development Clients', link: 'https://docs.fresns.com/clients/' },
        { text: 'Plugin Manager', link: 'https://pm.fresns.org/' },
        { text: 'Command Word Manager', link: 'https://pm.fresns.org/command-word/' },
      ],
    },
    {
      text: 'Version',
      items: [
        { text: 'Fresns v2', link: 'https://v2.fresns.org/' },
      ],
    },
  ]
}

// sidebarIntro
function sidebarIntro() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'About Fresns', link: '/intro/' },
        { text: 'Features', link: '/intro/features.md' },
        { text: 'Operating', link: '/intro/operating.md' },
        { text: 'Core Directory', link: '/intro/directory.md' },
        { text: 'Release Notes', link: '/intro/changelog.md' },
      ]
    }
  ]
}

// sidebarGuide
function sidebarGuide() {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Download', link: '/guide/' },
        { text: 'Installation', link: '/guide/install.md' },
        { text: 'Configuration', link: '/guide/configuration.md' },
        { text: 'Updating', link: '/guide/upgrade.md' },
        { text: 'FAQ', link: '/guide/faq.md' },
        { text: 'Reporting Bugs', link: '/guide/feedback.md' },
      ]
    }
  ]
}

// sidebarCommunity
function sidebarCommunity() {
  return  [
    {
        text: 'About',
        items: [
          { text: 'Teams', link: '/community/teams.md' },
          { text: 'Join', link: '/community/join.md' },
          // { text: 'Sponsor', link: '/community/sponsor.md' },
        ]
    },
    {
        text: 'Contributing',
        items: [
          { text: 'Guide', link: '/contributing/' },
          { text: 'Translations', link: '/contributing/translations.md' },
        ]
    },
    {
        text: 'Interaction',
        items: [
          { text: 'Community', link: 'https://discuss.fresns.org' },
          { text: 'Marketplace', link: 'https://marketplace.fresns.com/open-source' },
        ]
    },
  ]
}

// Navbar
function navbarForZh() {
  return [
    { text: '首页', link: '/zh-Hans/' },
    { text: '介绍', link: '/zh-Hans/intro/', activeMatch: '/zh-Hans/intro/' },
    { text: '使用指南', link: '/zh-Hans/guide/', activeMatch: `^/(zh-Hans/guide|zh-Hans/config)/` },
    {
      text: '生态系统',
      items: [
        { text: '团队', link: '/zh-Hans/community/teams.md' },
        { text: '加入我们', link: '/zh-Hans/community/join.md' },
        // { text: '赞助我们', link: '/zh-Hans/community/sponsor.md' },
        { text: '贡献指南', link: '/zh-Hans/contributing/' },
        { text: '互动交流', link: 'https://discuss.fresns.org/zh-Hans' },
        { text: '应用市场', link: 'https://marketplace.fresns.com/zh-Hans/open-source' },
      ],
      activeMatch: `^/(zh-Hans/community|zh-Hans/contributing)/`,
    },
    {
      text: '开发者文档',
      items: [
        { text: '开发扩展插件', link: 'https://docs.fresns.com/zh-Hans/open-source/' },
        { text: '开发客户端', link: 'https://docs.fresns.com/zh-Hans/clients/' },
        { text: '插件管理器', link: 'https://pm.fresns.org/zh-Hans/' },
        { text: '命令字管理器', link: 'https://pm.fresns.org/zh-Hans/command-word/' },
      ],
    },
    {
      text: 'Version',
      items: [
        { text: 'Fresns v2', link: 'https://v2.fresns.org/zh-Hans/' },
      ],
    },
  ]
}

// sidebarIntro
function sidebarIntroForZh() {
  return [
    {
      text: '介绍',
      items: [
        { text: '关于 Fresns', link: '/zh-Hans/intro/' },
        { text: '功能特征', link: '/zh-Hans/intro/features.md' },
        { text: '运营方向', link: '/zh-Hans/intro/operating.md' },
        { text: '目录结构', link: '/zh-Hans/intro/directory.md' },
        { text: '更新记录', link: '/zh-Hans/intro/changelog.md' },
      ]
    }
  ]
}

// sidebarGuide
function sidebarGuideForZh() {
  return [
    {
      text: '指南',
      items: [
        { text: '下载', link: '/zh-Hans/guide/' },
        { text: '安装', link: '/zh-Hans/guide/install.md' },
        { text: '配置', link: '/zh-Hans/guide/configuration.md' },
        { text: '升级', link: '/zh-Hans/guide/upgrade.md' },
        { text: '常见问题', link: '/zh-Hans/guide/faq.md' },
        { text: '提交反馈', link: '/zh-Hans/guide/feedback.md' },
      ]
    },
    {
      text: '环境配置教程',
      items: [
        { text: '1Panel', link: '/zh-Hans/config/1panel.md' },
        { text: '宝塔面板', link: '/zh-Hans/config/baota.md' },
      ]
    }
  ]
}

// sidebarCommunity
function sidebarCommunityForZh() {
  return  [
    {
      text: '关于',
      items: [
        { text: '团队', link: '/zh-Hans/community/teams.md' },
        { text: '加入我们', link: '/zh-Hans/community/join.md' },
        // { text: '赞助我们', link: '/zh-Hans/community/sponsor.md' },
      ]
    },
    {
      text: '贡献',
      items: [
        { text: '贡献指南', link: '/zh-Hans/contributing/' },
        { text: '翻译文档', link: '/zh-Hans/contributing/translations.md' },
      ]
    },
    {
      text: '互动',
      items: [
        { text: '互动交流', link: 'https://discuss.fresns.org/zh-Hans' },
        { text: '应用市场', link: 'https://marketplace.fresns.com/zh-Hans/open-source' },
      ]
    },
  ]
}
