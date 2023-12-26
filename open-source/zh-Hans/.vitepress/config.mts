import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/zh-Hans/open-source/',
  lang: 'zh-Hans',
  title: 'Fresns 扩展插件开发文档',
  titleTemplate: false,
  description: '利用 Fresns 的开源潜力，增强和扩大 Fresns 的核心功能，提供一个强大的框架，以增强社区体验，在此基础上自由的发挥心中所想。',

  lastUpdated: true,

  cleanUrls: false,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://files.fresns.org/wiki/icons/fresns.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Fresns' }],
    ['meta', { property: 'og:description', content: '一款免费开源的社交网络服务软件' }],
    ['meta', { property: 'og:image', content: 'https://files.fresns.org/docs/images/og-image-zh-hans.jpg' }],
    ['meta', { property: 'og:url', content: 'https://docs.fresns.com/zh-Hans/open-source/' }],
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: 'https://docs.fresns.com/open-source'
    }
  },

  themeConfig: {
    siteTitle: 'Fresns 文档',
    logo: 'https://files.fresns.org/wiki/icons/fresns.png',
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '扩展', link: '/extensions/', activeMatch: '/extensions/' },
      { text: '数据库', link: '/database/', activeMatch: '/database/' },
      { text: '配置', link: '/configs/', activeMatch: '/configs/' },
      {
        text: '开发支持',
        items: [
          { text: '功能命令字', link: '/supports/cmd-words/basic.md' },
          { text: '辅助函数', link: '/supports/helpers/config.md' },
          { text: '实用程序', link: '/supports/utilities/config.md' },
          { text: '数据模型', link: '/supports/models/' },
        ],
        activeMatch: '/supports/',
      },
      {
        text: '生态系统',
        items: [
          { text: '交流社区', link: 'https://space.fresns.com/developers/zh-Hans/' },
          { text: '开发者中心', link: 'https://developers.fresns.com/zh-Hans/' },
          { text: '应用市场', link: 'https://marketplace.fresns.com/zh-Hans/' },
        ],
      }
    ],

    sidebar: {
      '/guide/': sidebarGuide(),
      '/extensions/': sidebarExtensions(),
      '/database/': sidebarDatabase(),
      '/configs/': sidebarConfigs(),
      '/supports/': sidebarSupports(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fresns/fresns' }
    ],

    footer: {
      message: 'Released under the Apache-2.0 License',
      copyright: 'Copyright © 2021-2024 <a href="https://github.com/jevantang" target="_blank">Jevan Tang</a>',
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
})

// sidebarGuide
function sidebarGuide() {
  return [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '使用', link: '/guide/using.md' },
        { text: '产品理念', link: '/guide/idea.md' },
      ]
    }
  ]
}

// sidebarExtensions
function sidebarExtensions() {
  return [
    {
      text: '扩展开发',
      items: [
        { text: '介绍', link: '/extensions/' },
        { text: '插件指令', link: '/extensions/artisan.md' },
        { text: '命令字使用', link: '/extensions/command-word.md' },
        { text: '状态码使用', link: '/extensions/error-code.md' },
        { text: '多语言说明', link: '/extensions/multilingual.md' },
        {
          text: '功能参考',
          items: [
            { text: '定时任务和订阅', link: '/extensions/functions.md' },
            { text: '命令字功能开发', link: '/extensions/command-word-dev.md' },
            { text: '验证访问令牌', link: '/extensions/verify-access-token.md' },
          ]
        },
        {
          text: '插件参考',
          items: [
            { text: '存储服务开发', link: '/extensions/storage.md' },
            { text: '编辑器开发', link: '/extensions/editor.md' },
            { text: '内容处理开发', link: '/extensions/content-handler.md' },
          ]
        },
      ]
    }
  ]
}

// sidebarDatabase
function sidebarDatabase() {
  return  [
    {
      text: '总览',
      items: [
        { text: '介绍', link: '/database/' },
        { text: '编号数据说明', link: '/database/numbered-description.md' },
      ]
    },
    {
      text: '系统',
      collapsed: true,
      items: [
        { text: 'configs 全局配置表', link: '/database/systems/configs.md' },
        { text: 'code_messages 全局状态码信息表', link: '/database/systems/code-messages.md' },
        { text: 'languages 全局语言内容表', link: '/database/systems/languages.md' },
        { text: 'session_keys 交互密钥表', link: '/database/systems/session-keys.md' },
        { text: 'session_tokens 交互凭证表', link: '/database/systems/session-tokens.md' },
        { text: 'session_logs 交互日志表', link: '/database/systems/session-logs.md' },
        { text: 'verify_codes 验证码表', link: '/database/systems/verify-codes.md' },
        { text: 'files 文件表', link: '/database/systems/files.md' },
        { text: 'file_usages 文件使用记录表', link: '/database/systems/file-usages.md' },
        { text: 'file_downloads 文件下载记录表', link: '/database/systems/file-downloads.md' },
      ]
    },
    {
      text: '应用',
      collapsed: true,
      items: [
        { text: 'apps 应用表', link: '/database/apps/apps.md' },
        { text: 'app_callbacks 应用回调表', link: '/database/apps/app-callbacks.md' },
        { text: 'app_usages 应用关联使用表', link: '/database/apps/app-usages.md' },
        { text: 'app_badges 应用徽标数据表', link: '/database/apps/app-badges.md' },
      ]
    },
    {
      text: '账号',
      collapsed: true,
      items: [
        { text: 'accounts 账号主表', link: '/database/accounts/accounts.md' },
        { text: 'account_connects 账号互联凭证表', link: '/database/accounts/account-connects.md' },
        { text: 'account_wallets 账号钱包表', link: '/database/accounts/account-wallets.md' },
        { text: 'account_wallet_logs 账号钱包交易日志表', link: '/database/accounts/account-wallet-logs.md' },
      ]
    },
    {
      text: '用户',
      collapsed: true,
      items: [
        { text: 'roles 角色表', link: '/database/users/roles.md' },
        { text: 'users 用户主表', link: '/database/users/users.md' },
        { text: 'user_stats 用户数据统计表', link: '/database/users/user-stats.md' },
        { text: 'user_extcredits_logs 用户扩展分值日志表', link: '/database/users/user-extcredits-logs.md' },
        { text: 'user_roles 用户角色关联表', link: '/database/users/user-roles.md' },
        { text: 'user_likes 用户赞记录表', link: '/database/users/user-likes.md' },
        { text: 'user_follows 用户关注表', link: '/database/users/user-follows.md' },
        { text: 'user_blocks 用户屏蔽表', link: '/database/users/user-blocks.md' },
      ]
    },
    {
      text: '互动',
      collapsed: true,
      items: [
        { text: 'mentions 艾特记录表', link: '/database/interactions/mentions.md' },
        { text: 'notifications 通知表', link: '/database/interactions/notifications.md' },
        { text: 'conversations 对话表', link: '/database/interactions/conversations.md' },
        { text: 'conversation_messages 对话内容表', link: '/database/interactions/conversation-messages.md' },
      ]
    },
    {
      text: '内容信息',
      collapsed: true,
      items: [
        { text: 'posts 帖子主表', link: '/database/contents/posts.md' },
        { text: 'post_appends 帖子-附属表', link: '/database/contents/post-appends.md' },
        { text: 'post_auths 帖子-授权记录表', link: '/database/contents/post-auths.md' },
        { text: 'post_users 帖子-特定用户表', link: '/database/contents/post-users.md' },
        { text: 'post_logs 帖子-日志表', link: '/database/contents/post-logs.md' },
        { text: 'comments 评论主表', link: '/database/contents/comments.md' },
        { text: 'comment_appends 评论-附属表', link: '/database/contents/comment-appends.md' },
        { text: 'comment_logs 评论-日志表', link: '/database/contents/comment-logs.md' },
      ]
    },
    {
      text: '内容归类',
      collapsed: true,
      items: [
        { text: 'groups 小组表', link: '/database/contents/groups.md' },
        { text: 'group_admins 小组管理员表', link: '/database/contents/group-admins.md' },
        { text: 'hashtags 话题表', link: '/database/contents/hashtags.md' },
        { text: 'hashtag_usages 话题使用记录表', link: '/database/contents/hashtag-usages.md' },
        { text: 'domains 域名表', link: '/database/contents/domains.md' },
        { text: 'domain_links 域名链接表', link: '/database/contents/domain-links.md' },
        { text: 'domain_link_usages 链接使用记录表', link: '/database/contents/domain-link-usages.md' },
      ]
    },
    {
      text: '内容配置',
      collapsed: true,
      items: [
        { text: 'archives 扩展参数表', link: '/database/extends/archives.md' },
        { text: 'archive_usages 扩展参数使用表', link: '/database/extends/archive-usages.md' },
        { text: 'operations 扩展资料表', link: '/database/extends/operations.md' },
        { text: 'operation_usages 扩展资料使用表', link: '/database/extends/operation-usages.md' },
        { text: 'extends 扩展内容表', link: '/database/extends/extends.md' },
        { text: 'extend_usages 扩展内容使用表', link: '/database/extends/extend-usages.md' },
        { text: 'stickers 表情表', link: '/database/extends/stickers.md' },
        { text: 'seo 搜索引擎优化信息表', link: '/database/extends/seo.md' },
      ]
    },
  ]
}

// sidebarConfigs
function sidebarConfigs() {
  return [
    {
      text: '字典数据',
      items: [
        { text: '终端平台编号', link: '/configs/dictionary/platforms.md' },
        { text: '互联平台编号', link: '/configs/dictionary/connects.md' },
        { text: '地图服务商编号', link: '/configs/dictionary/maps.md' },
        { text: '七大洲编号', link: '/configs/dictionary/continents.md' },
        { text: '地区代码', link: '/configs/dictionary/area-codes.md' },
        { text: '语言代码', link: '/configs/dictionary/language-codes.md' },
        { text: '货币代码', link: '/configs/dictionary/currency-codes.md' },
        { text: '时区选项', link: '/configs/dictionary/timezone.md' },
      ]
    },
    {
      text: '控制面板',
      items: [
        {
          text: '仪表盘',
          collapsed: false,
          items: [
            { text: '事件', link: '/configs/panel/events.md' },
            { text: '设置', link: '/configs/panel/settings.md' },
          ]
        },
        {
          text: '系统',
          collapsed: false,
          items: [
            { text: '语言设置', link: '/configs/panel/languages.md' },
            { text: '存储设置', link: '/configs/panel/storage.md' },
            { text: '站点设置', link: '/configs/panel/general.md' },
            { text: '政策设置', link: '/configs/panel/policy.md' },
            { text: '发信设置', link: '/configs/panel/send.md' },
            { text: '账户设置', link: '/configs/panel/account.md' },
            { text: '钱包设置', link: '/configs/panel/wallet.md' },
          ]
        },
        {
          text: '运营',
          collapsed: false,
          items: [
            { text: '用户配置', link: '/configs/panel/user.md' },
            { text: '内容配置', link: '/configs/panel/content.md' },
            { text: '互动配置', link: '/configs/panel/interaction.md' },
            { text: '发表配置', link: '/configs/panel/publish.md' },
          ]
        },
        {
          text: '扩展',
          collapsed: false,
          items: [
            { text: '内容处理扩展', link: '/configs/panel/content-handler.md' },
          ]
        },
        {
          text: '客户端',
          collapsed: false,
          items: [
            { text: '频道配置', link: '/configs/panel/channels.md' },
            { text: '路径配置', link: '/configs/panel/paths.md' },
            { text: '客户端基础配置', link: '/configs/panel/basic.md' },
          ]
        },
        {
          text: '应用中心',
          collapsed: false,
          items: [
            { text: '主题模板', link: '/configs/panel/themes.md' },
          ]
        },
      ]
    }
  ]
}

// sidebarSupports
function sidebarSupports() {
  return  [
    {
      text: '功能命令字',
      collapsed: false,
      items: [
        { text: '基础功能', link: '/supports/cmd-words/basic.md' },
        { text: '发信功能', link: '/supports/cmd-words/send.md' },
        { text: '账号功能', link: '/supports/cmd-words/account.md' },
        { text: '用户功能', link: '/supports/cmd-words/user.md' },
        { text: '钱包功能', link: '/supports/cmd-words/wallet.md' },
        { text: '文件功能', link: '/supports/cmd-words/file.md' },
        { text: '内容功能', link: '/supports/cmd-words/content.md' },
        { text: '详情功能', link: '/supports/cmd-words/detail.md' },
        { text: '管理功能', link: '/supports/cmd-words/manage.md' },
        { text: '定时任务', link: '/supports/cmd-words/crontab.md' },
      ]
    },
    {
      text: '辅助函数',
      collapsed: false,
      items: [
        { text: '配置 ConfigHelper', link: '/supports/helpers/config.md' },
        { text: '语言 LanguageHelper', link: '/supports/helpers/language.md' },
        { text: '插件 PluginHelper', link: '/supports/helpers/plugin.md' },
        { text: '文件 FileHelper', link: '/supports/helpers/file.md' },
        { text: '时间 DateHelper', link: '/supports/helpers/date.md' },
        { text: '数据处理 StrHelper', link: '/supports/helpers/str.md' },
        { text: '主键转换 PrimaryHelper', link: '/supports/helpers/primary.md' },
        { text: '互动配置 InteractionHelper', link: '/supports/helpers/interaction.md' },
      ]
    },
    {
      text: '实用程序',
      collapsed: false,
      items: [
        { text: '通用工具 GeneralUtility', link: '/supports/utilities/general.md' },
        { text: '配置工具 ConfigUtility', link: '/supports/utilities/config.md' },
        { text: '数组工具 ArrUtility', link: '/supports/utilities/arr.md' },
        { text: '扩展工具 ExtendUtility', link: '/supports/utilities/extend.md' },
        { text: '文件工具 FileUtility', link: '/supports/utilities/file.md' },
        { text: '互动工具 InteractionUtility', link: '/supports/utilities/interaction.md' },
        { text: '鉴权工具 PermissionUtility', link: '/supports/utilities/permission.md' },
        { text: '验证工具 ValidationUtility', link: '/supports/utilities/validation.md' },
      ]
    },
    {
      text: '数据模型',
      collapsed: false,
      items: [
        { text: '数据集模型', link: '/supports/models/' },
        { text: '缓存键名和标签', link: '/supports/models/cache.md' },
      ]
    },
  ]
}
