import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/zh-Hans/clients/',
  lang: 'zh-Hans',
  title: 'Fresns 客户端开发文档',
  titleTemplate: false,
  description: 'Fresns 是一套社交网络服务产品解决方案，专为跨平台而打造的通用型社区产品，支持灵活多样的内容形态，可以满足多种运营场景，符合时代潮流，更开放且更易于二次开发。',

  lastUpdated: true,

  cleanUrls: false,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://assets.fresns.com/images/icons/fresns.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Fresns' }],
    ['meta', { property: 'og:description', content: '一款免费开源的社交网络服务软件' }],
    ['meta', { property: 'og:url', content: 'https://docs.fresns.com/zh-hans/clients/' }],
    ['meta', { property: 'og:image', content: 'https://assets.fresns.com/images/wikis/open-graph/open-source-zh-hans.jpg' }],
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: 'https://docs.fresns.com/clients/'
    }
  },

  themeConfig: {
    siteTitle: 'Fresns 文档',
    logo: 'https://assets.fresns.com/images/icons/fresns.png',
    nav: [
        { text: '指南', link: '/guide/', activeMatch: '/guide/' },
        { text: 'API', link: '/api/', activeMatch: '/api/' },
        { text: '参考', link: '/reference/', activeMatch: '/reference/' },
        { text: 'SDK', link: '/sdk/', activeMatch: '/sdk/' },
        {
          text: '生态系统',
          items: [
            { text: '交流社区', link: 'https://space.fresns.com/developers/zh-Hans/' },
            { text: '应用市场', link: 'https://marketplace.fresns.com/zh-Hans/' },
            { text: '开发者中心', link: 'https://developer.fresns.com/zh-Hans/' },
          ],
        }
    ],

    sidebar: {
      '/guide/': sidebarGuide(),
      '/api/': sidebarApi(),
      '/reference/': sidebarReference(),
      '/sdk/': sidebarSdk(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fresns' }
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
        { text: '产品理念', link: '/guide/idea.md' },
        { text: '使用方向', link: '/guide/directions.md' },
        { text: '开发资源', link: '/guide/resources.md' },
        { text: '更新日志', link: '/guide/changelog.md' },
      ]
    }
  ]
}

// sidebarApi
function sidebarApi() {
  return [
    { text: 'API 总览', link: '/api/' },
    {
      text: '全局配置',
      collapsed: false,
      items: [
        { text: '客户端状态', link: '/api/global/status.md' },
        { text: '配置信息', link: '/api/global/configs.md' },
        { text: '语言包信息', link: '/api/global/language-pack.md' },
        { text: '扩展频道', link: '/api/global/channels.md' },
        { text: '扩展档案', link: '/api/global/archives.md' },
        { text: '内容类型', link: '/api/global/content-types.md' },
        { text: '用户角色', link: '/api/global/roles.md' },
        { text: '表情图', link: '/api/global/stickers.md' },
      ]
    },
    {
      text: '公共业务',
      collapsed: false,
      items: [
        { text: 'IP 信息', link: '/api/common/ip-info.md' },
        { text: '输入提示信息', link: '/api/common/input-tips.md' },
        { text: '命令字请求', link: '/api/common/cmd-word.md' },
        { text: '文件: 生成 S3 上传令牌', link: '/api/common/file-upload-token.md' },
        { text: '文件: 上传文件', link: '/api/common/file-upload.md' },
        { text: '文件: 更新文件信息', link: '/api/common/file-update.md' },
        { text: '文件: 文件下载链接', link: '/api/common/file-link.md' },
        { text: '文件: 下载过文件的用户', link: '/api/common/file-users.md' },
      ]
    },
    {
      text: '账号',
      collapsed: false,
      items: [
        { text: '账号登录', link: '/api/account/login.md' },
        { text: '退出登录', link: '/api/account/logout.md' },
        { text: '获取账号详情', link: '/api/account/detail.md' },
        { text: '钱包交易记录', link: '/api/account/wallet-records.md' },
      ]
    },
    {
      text: '用户',
      collapsed: false,
      items: [
        {
          text: '功能',
          items: [
            { text: '用户登录', link: '/api/user/login.md' },
            { text: '用户概览', link: '/api/user/overview.md' },
            { text: '用户扩展分值记录', link: '/api/user/extcredits-records.md' },
            { text: '修改用户资料', link: '/api/user/update-profile.md' },
            { text: '更新设置信息', link: '/api/user/update-settings.md' },
            { text: '操作标记', link: '/api/user/mark.md' },
            { text: '更新标记备注', link: '/api/user/mark-note.md' },
            { text: '操作扩展交互', link: '/api/user/extend-action.md' },
          ]
        },
        {
          text: '互动',
          items: [
            { text: '获取用户[列表]', link: '/api/user/list.md' },
            { text: '获取用户[详情]', link: '/api/user/detail.md' },
            { text: '获取用户[详情] 认识的关注者', link: '/api/user/followers-you-follow.md' },
            { text: '获取用户[详情] 互动列表', link: '/api/user/interaction.md' },
            { text: '获取用户[详情] 标记列表', link: '/api/user/mark-list.md' },
          ]
        },
      ]
    },
    {
      text: '消息',
      collapsed: false,
      items: [
        {
          text: '通知',
          items: [
            { text: '获取消息列表', link: '/api/message/notification-list.md' },
            { text: '更新阅读状态', link: '/api/message/notification-read.md' },
            { text: '删除消息', link: '/api/message/notification-delete.md' },
          ]
        },
        {
          text: '对话',
          items: [
            { text: '获取对话列表', link: '/api/message/conversation-list.md' },
            { text: '获取对话详情', link: '/api/message/conversation-detail.md' },
            { text: '获取消息列表', link: '/api/message/conversation-messages.md' },
            { text: '置顶对话', link: '/api/message/conversation-pin.md' },
            { text: '更新阅读状态', link: '/api/message/conversation-read.md' },
            { text: '删除对话或消息', link: '/api/message/conversation-delete.md' },
            { text: '发送消息', link: '/api/message/conversation-send.md' },
          ]
        },
      ]
    },
    {
      text: '小组',
      collapsed: false,
      items: [
        { text: '获取小组[列表] 树结构', link: '/api/group/tree.md' },
        { text: '获取小组[列表]', link: '/api/group/list.md' },
        { text: '获取小组[详情]', link: '/api/group/detail.md' },
        { text: '获取小组[详情] 创建者', link: '/api/group/creator.md' },
        { text: '获取小组[详情] 管理员', link: '/api/group/admins.md' },
        { text: '获取小组[详情] 互动列表', link: '/api/group/interaction.md' },
      ]
    },
    {
      text: '话题',
      collapsed: false,
      items: [
        { text: '获取话题[列表]', link: '/api/hashtag/list.md' },
        { text: '获取话题[详情]', link: '/api/hashtag/detail.md' },
        { text: '获取话题[详情] 互动列表', link: '/api/hashtag/interaction.md' },
      ]
    },
    {
      text: '地理',
      collapsed: false,
      items: [
        { text: '获取地理[列表]', link: '/api/geotag/list.md' },
        { text: '获取地理[详情]', link: '/api/geotag/detail.md' },
        { text: '获取地理[详情] 互动列表', link: '/api/geotag/interaction.md' },
      ]
    },
    {
      text: '帖子',
      collapsed: false,
      items: [
        { text: '获取帖子[列表]', link: '/api/post/list.md' },
        { text: '获取帖子[列表] 时间线', link: '/api/post/timelines.md' },
        { text: '获取帖子[列表] 附近', link: '/api/post/nearby.md' },
        { text: '获取帖子[详情]', link: '/api/post/detail.md' },
        { text: '获取帖子[详情] 互动列表', link: '/api/post/interaction.md' },
        { text: '获取帖子[详情] 附属用户列表', link: '/api/post/users.md' },
        { text: '获取帖子[详情] 引用它的帖子列表', link: '/api/post/quotes.md' },
        { text: '获取帖子[详情] 历史列表', link: '/api/post/histories.md' },
        { text: '获取历史帖子[详情]', link: '/api/post/history-detail.md' },
        { text: '删除帖子', link: '/api/post/delete.md' },
      ]
    },
    {
      text: '评论',
      collapsed: false,
      items: [
        { text: '获取评论[列表]', link: '/api/comment/list.md' },
        { text: '获取评论[列表] 时间线', link: '/api/comment/timelines.md' },
        { text: '获取评论[列表] 附近', link: '/api/comment/nearby.md' },
        { text: '获取评论[详情]', link: '/api/comment/detail.md' },
        { text: '获取评论[详情] 互动列表', link: '/api/comment/interaction.md' },
        { text: '获取评论[详情] 历史列表', link: '/api/comment/histories.md' },
        { text: '获取历史评论[详情]', link: '/api/comment/history-detail.md' },
        { text: '删除评论', link: '/api/comment/delete.md' },
      ]
    },
    {
      text: '编辑器',
      collapsed: false,
      items: [
        { text: '编辑器配置信息', link: '/api/editor/configs.md' },
        { text: '直接发表', link: '/api/editor/publish.md' },
        { text: '编辑帖子或评论', link: '/api/editor/edit.md' },
        { text: '草稿: 创建', link: '/api/editor/draft-create.md' },
        { text: '草稿: 列表', link: '/api/editor/draft-list.md' },
        { text: '草稿: 详情', link: '/api/editor/draft-detail.md' },
        { text: '草稿: 更新', link: '/api/editor/draft-update.md' },
        { text: '草稿: 提交发表（或审核）', link: '/api/editor/draft-publish.md' },
        { text: '草稿: 撤回审核中草稿', link: '/api/editor/draft-recall.md' },
        { text: '草稿: 删除', link: '/api/editor/draft-delete.md' },
      ]
    },
    {
      text: '搜索',
      collapsed: false,
      items: [
        { text: '用户', link: '/api/search/users.md' },
        { text: '小组', link: '/api/search/groups.md' },
        { text: '话题', link: '/api/search/hashtags.md' },
        { text: '地理', link: '/api/search/geotags.md' },
        { text: '帖子', link: '/api/search/posts.md' },
        { text: '评论', link: '/api/search/comments.md' },
      ]
    },
  ]
}

// sidebarReference
function sidebarReference() {
  return [
    {
      text: '参考',
      items: [
        { text: '介绍', link: '/reference/' },
        { text: '状态码', link: '/reference/error-codes.md' },
        { text: '请求标头', link: '/reference/headers.md' },
        { text: '登录流程', link: '/reference/login.md' },
        {
          text: '全局配置',
          collapsed: false,
          items: [
            { text: '配置项', link: '/reference/configs.md' },
            { text: '语言包', link: '/reference/language-pack.md' },
            { text: '缓存', link: '/reference/cache.md' },
          ]
        },
        {
          text: '通用数据结构',
          collapsed: false,
          items: [
            { text: '账户', link: '/reference/data/account.md' },
            { text: '用户', link: '/reference/data/user.md' },
            { text: '小组', link: '/reference/data/group.md' },
            { text: '话题', link: '/reference/data/hashtag.md' },
            { text: '地理', link: '/reference/data/geotag.md' },
            { text: '帖子', link: '/reference/data/post.md' },
            { text: '评论', link: '/reference/data/comment.md' },
            { text: '草稿', link: '/reference/data/draft.md' },
            { text: '文件', link: '/reference/data/file.md' },
            { text: '扩展', link: '/reference/data/extends.md' },
          ]
        },
        {
          text: '扩展回调',
          collapsed: false,
          items: [
            { text: '使用流程', link: '/reference/callback/' },
            { text: '路径变量名', link: '/reference/callback/variables.md' },
            { text: '生成访问令牌', link: '/reference/callback/access-token.md' },
          ]
        },
        {
          text: '字典数据',
          collapsed: false,
          items: [
            { text: '终端平台编号', link: '/reference/dictionary/platforms.md' },
            { text: '地图服务商编号', link: '/reference/dictionary/maps.md' },
          ]
        },
      ]
    }
  ]
}

// sidebarSdk
function sidebarSdk() {
  return [
    { text: '开发资源', link: '/sdk/' },
    {
      text: '主题',
      items: [
        { text: '介绍', link: '/sdk/theme/' },
        { text: '结构', link: '/sdk/theme/structure.md' },
        { text: 'API', link: '/sdk/theme/api.md' },
        { text: '功能函数', link: '/sdk/theme/functions.md' },
        { text: '插件扩展', link: '/sdk/theme/extensions.md' },
        { text: '设置功能', link: '/sdk/theme/settings.md' },
      ]
    },
    {
      text: '微信小程序',
      items: [
        { text: '介绍', link: '/sdk/wechat/' },
        { text: 'API', link: '/sdk/wechat/api.md' },
        { text: '功能函数', link: '/sdk/wechat/functions.md' },
        { text: '插件扩展', link: '/sdk/wechat/extensions.md' },
        { text: '工具包', link: '/sdk/wechat/toolkit.md' },
      ]
    }
  ]
}
