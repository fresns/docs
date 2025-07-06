import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',

  title: 'Fresns Open Source',
  description: 'Fresns is a free and open source social network service software, a general-purpose community product designed for cross-platform, and supports flexible and diverse content forms. It conforms to the trend of the times, satisfies a variety of operating scenarios, is more open and easier to re-development.',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://assets.fresns.com/images/icons/fresns.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Fresns' }],
    ['meta', { property: 'og:description', content: 'Cross-platform general-purpose multiple content forms social network service software' }],
    ['meta', { property: 'og:url', content: 'https://fresns.org' }],
    ['meta', { property: 'og:image', content: 'https://assets.fresns.com/images/wikis/open-graph/open-source.jpg' }],
  ],

  cleanUrls: false,

  sitemap: {
    hostname: 'https://fresns.org',
  },

  themeConfig:{
    logo: 'https://assets.fresns.com/images/icons/fresns.png',
    nav: navbar(),

    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-hans': {
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
      copyright: 'Copyright © 2021-2025 <a href="https://github.com/jevantang" target="_blank">Jevan Tang</a>',
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    'zh-hans': {
      label: '简体中文',
      lang: 'zh-Hans',
      title: 'Fresns 开源程序',
      description: 'Fresns 是一款免费开源的社交网络服务软件，专为跨平台而打造的通用型社区产品，支持灵活多样的内容形态，可以满足多种运营场景，符合时代潮流，更开放且更易于二次开发。',

      head: [
        ['link', { rel: 'icon', type: 'image/png', href: 'https://assets.fresns.com/images/icons/fresns.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Fresns' }],
        ['meta', { property: 'og:description', content: '一款免费开源的社交网络服务软件' }],
        ['meta', { property: 'og:url', content: 'https://fresns.org/zh-hans/' }],
        ['meta', { property: 'og:image', content: 'https://assets.fresns.com/images/wikis/open-graph/open-source-zh-hans.jpg' }],
      ],

      themeConfig: {
        nav: navbarForZh(),

        sidebar: {
          '/zh-hans/intro/': sidebarIntroForZh(),
          '/zh-hans/guide/': sidebarGuideForZh(),
          '/zh-hans/config/': sidebarGuideForZh(),
          '/zh-hans/community/': sidebarCommunityForZh(),
          '/zh-hans/contributing/': sidebarCommunityForZh(),
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
        { text: 'Sponsor', link: '/community/sponsor.md' },
        { text: 'Contributing', link: '/contributing/' },
        { text: 'Community', link: 'https://discuss.fresns.org' },
        { text: 'Marketplace', link: 'https://marketplace.fresns.com/open-source' },
      ],
      activeMatch: `^/(community|contributing)/`,
    },
    {
      text: 'Documentation',
      items: [
        { text: 'Client API', link: 'https://docs.fresns.com/clients/api/' },
        { text: 'Database Directory', link: 'https://docs.fresns.com/open-source/database/' },
        { text: 'Configurations', link: 'https://docs.fresns.com/open-source/configs/' },
        { text: 'Plugin Manager', link: 'https://pm.fresns.org/' },
        { text: 'Cmd Word Manager', link: 'https://pm.fresns.org/command-word/' },
      ],
    },
    {
      text: 'Development',
      items: [
        { text: 'Extensions', link: 'https://docs.fresns.com/open-source/' },
        { text: 'Clients', link: 'https://docs.fresns.com/clients/' },
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
        { text: 'Configurations', link: '/guide/configs.md' },
        { text: 'Updating', link: '/guide/upgrade.md' },
        { text: 'Migration', link: '/guide/migration.md' },
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
          { text: 'Sponsor', link: '/community/sponsor.md' },
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
    { text: '首页', link: '/zh-hans/' },
    { text: '介绍', link: '/zh-hans/intro/', activeMatch: '/zh-hans/intro/' },
    { text: '使用指南', link: '/zh-hans/guide/', activeMatch: `^/(zh-hans/guide|zh-hans/config)/` },
    {
      text: '生态系统',
      items: [
        { text: '团队', link: '/zh-hans/community/teams.md' },
        { text: '加入我们', link: '/zh-hans/community/join.md' },
        { text: '赞助我们', link: '/zh-hans/community/sponsor.md' },
        { text: '贡献指南', link: '/zh-hans/contributing/' },
        { text: '互动交流', link: 'https://discuss.fresns.org/' },
        { text: '应用市场', link: 'https://marketplace.fresns.com/zh-hans/open-source' },
        { text: '作者名片', link: 'https://tangjie.me/mycard' },
      ],
      activeMatch: `^/(zh-hans/community|zh-hans/contributing)/`,
    },
    {
      text: '技术文档',
      items: [
        { text: '客户端 API', link: 'https://docs.fresns.com/zh-hans/clients/api/' },
        { text: '数据库结构', link: 'https://docs.fresns.com/zh-hans/open-source/database/' },
        { text: '功能配置项', link: 'https://docs.fresns.com/zh-hans/open-source/configs/' },
        { text: '插件管理器', link: 'https://pm.fresns.org/zh-hans/' },
        { text: '命令字管理器', link: 'https://pm.fresns.org/zh-hans/command-word/' },
      ],
    },
    {
      text: '应用开发',
      items: [
        { text: '开发扩展插件', link: 'https://docs.fresns.com/zh-hans/open-source/' },
        { text: '开发客户端', link: 'https://docs.fresns.com/zh-hans/clients/' },
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
        { text: '关于 Fresns', link: '/zh-hans/intro/' },
        { text: '功能特征', link: '/zh-hans/intro/features.md' },
        { text: '运营方向', link: '/zh-hans/intro/operating.md' },
        { text: '目录结构', link: '/zh-hans/intro/directory.md' },
        { text: '更新记录', link: '/zh-hans/intro/changelog.md' },
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
        { text: '下载', link: '/zh-hans/guide/' },
        { text: '安装', link: '/zh-hans/guide/install.md' },
        { text: '配置', link: '/zh-hans/guide/configs.md' },
        { text: '升级', link: '/zh-hans/guide/upgrade.md' },
        { text: '迁移', link: '/zh-hans/guide/migration.md' },
        { text: '常见问题', link: '/zh-hans/guide/faq.md' },
        { text: '提交反馈', link: '/zh-hans/guide/feedback.md' },
      ]
    },
    {
      text: '环境配置教程',
      items: [
        { text: '宝塔面板', link: '/zh-hans/config/baota.md' },
        { text: '1Panel', link: '/zh-hans/config/1panel.md' },
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
        { text: '团队', link: '/zh-hans/community/teams.md' },
        { text: '加入我们', link: '/zh-hans/community/join.md' },
        { text: '赞助我们', link: '/zh-hans/community/sponsor.md' },
      ]
    },
    {
      text: '贡献',
      items: [
        { text: '贡献指南', link: '/zh-hans/contributing/' },
        { text: '翻译文档', link: '/zh-hans/contributing/translations.md' },
      ]
    },
    {
      text: '互动',
      items: [
        { text: '互动交流', link: 'https://discuss.fresns.org/' },
        { text: '应用市场', link: 'https://marketplace.fresns.com/zh-hans/open-source' },
        { text: '作者名片', link: 'https://tangjie.me/mycard' },
      ]
    },
  ]
}
