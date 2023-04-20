import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-Hans',

    title: 'Fresns',
    description: 'Fresns 是一款免费开源的社交网络服务软件，专为跨平台而打造的通用型社区产品，支持灵活多样的内容形态，可以满足多种运营场景，符合时代潮流，更开放且更易于二次开发。',

    lastUpdated: true,

    head: [
        ['link', { rel: 'icon', type: 'image/png', href: 'https://files.fresns.org/wiki/icons/fresns.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Fresns' }],
        ['meta', { property: 'og:description', content: '一款免费开源的社交网络服务软件' }],
        ['meta', { property: 'og:image', content: 'https://files.fresns.org/wiki/images/og-image-zh-hans.jpg' }],
        ['meta', { property: 'og:url', content: 'https://zh-hans.fresns.org' }],
    ],

    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-Hans'
        },
        en: {
            label: 'English',
            link: 'https://fresns.org/'
        }
    },

    themeConfig:{
        logo: 'https://files.fresns.org/wiki/icons/fresns.png',
        nav: navbar(),

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/fresns',
            }
        ],

        sidebar: {
            '/guide/': sidebarGuide(),
            '/extensions/': sidebarExtensions(),
            '/api/': sidebarApi(),
            '/database/': sidebarDatabase(),
            '/supports/': sidebarSupports(),
            '/community/': sidebarCommunity(),
            '/contributing/': sidebarCommunity(),
        },

        footer: {
            message: '遵循 Apache-2.0 开源协议',
            copyright: 'Copyright © 2021-2023 <a href="https://github.com/jevantang" target="_blank">唐杰</a>',
        },

        outlineTitle: '本页导览',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '深色模式',

        algolia: {
            appId: 'E7ZGYF9AMI',
            apiKey: '8b34aa821267c2ff574bef1e69fbf8a4',
            indexName: 'zh-hans-fresns',
            locales: {
                root: {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                            buttonAriaLabel: '搜索文档'
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: '清除查询条件',
                                resetButtonAriaLabel: '清除查询条件',
                                cancelButtonText: '取消',
                                cancelButtonAriaLabel: '取消'
                            },
                            startScreen: {
                                recentSearchesTitle: '搜索历史',
                                noRecentSearchesText: '没有搜索历史',
                                saveRecentSearchButtonTitle: '保存至搜索历史',
                                removeRecentSearchButtonTitle: '从搜索历史中移除',
                                favoriteSearchesTitle: '收藏',
                                removeFavoriteSearchButtonTitle: '从收藏中移除'
                            },
                            errorScreen: {
                                titleText: '无法获取结果',
                                helpText: '你可能需要检查你的网络连接'
                            },
                            footer: {
                                selectText: '选择',
                                navigateText: '切换',
                                closeText: '关闭',
                                searchByText: '搜索提供者'
                            },
                            noResultsScreen: {
                                noResultsText: '无法找到相关结果',
                                suggestedQueryText: '你可以尝试查询',
                                reportMissingResultsText: '你认为该查询应该有结果？',
                                reportMissingResultsLinkText: '点击反馈'
                            }
                        }
                    }
                }
            }
        },

        editLink: {
            pattern: 'https://github.com/fresns/docs/tree/main/wiki/zh-Hans/:path',
            text: '为此页提供修改建议'
        },

        lastUpdatedText: '最后一次更新',

        docFooter: {
            prev: '上一项',
            next: '下一项',
        },
    }
})

// Navbar
function navbar() {
    return [
        { text: '首页', link: '/' },
        { text: '指南', link: '/guide/', activeMatch: '/guide/' },
        { text: '扩展', link: '/extensions/', activeMatch: '/extensions/' },
        { text: 'API', link: '/api/', activeMatch: '/api/' },
        { text: '数据库', link: '/database/', activeMatch: '/database/' },
        {
            text: '开发支持',
            items: [
                { text: '功能命令字', link: '/supports/cmd-word/basic.md' },
                { text: '辅助函数', link: '/supports/helpers/config.md' },
                { text: '实用程序', link: '/supports/utilities/config.md' },
                { text: '数据模型', link: '/supports/models/' },
            ],
            activeMatch: '/supports/',
        },
        {
            text: '生态系统',
            items: [
                { text: '团队', link: '/community/teams.md' },
                { text: '加入我们', link: '/community/join.md' },
                { text: '赞助我们', link: '/community/sponsor.md' },
                { text: '贡献指南', link: '/contributing/' },
                { text: '互动交流', link: 'https://discuss.fresns.com/zh-Hans' },
                { text: '应用市场', link: 'https://marketplace.fresns.com/zh-Hans/open-source' },
            ],
            activeMatch: `^/(community|contributing)/`,
        }
    ]
}

// sidebarGuide
function sidebarGuide() {
    return [
        {
            text: '使用指南',
            collapsed: false,
            items: [
                { text: '介绍', link: '/guide/' },
                { text: '特征', link: '/guide/features.md' },
                { text: '安装', link: '/guide/install.md' },
                { text: '升级', link: '/guide/upgrade.md' },
                { text: '运营', link: '/guide/operating.md' },
                { text: '提交反馈', link: '/guide/feedback.md' },
                { text: '常见问题', link: '/guide/faq.md' },
            ]
        },
        {
            text: '配置教程',
            collapsed: false,
            items: [
                { text: '宝塔面板配置教程', link: '/guide/install/baota.md' },
            ]
        }
    ]
}

// sidebarExtensions
function sidebarExtensions() {
    return [
        {
            text: '扩展 Fresns',
            collapsed: false,
            items: [
                { text: '介绍', link: '/extensions/' },
                { text: '产品理念', link: '/extensions/idea.md' },
                { text: '多语言说明', link: '/extensions/multilingual.md' },
                { text: '状态码使用', link: '/extensions/error-code.md' },
            ]
        },
        {
            text: '插件开发',
            collapsed: true,
            items: [
                { text: '介绍', link: '/extensions/plugin/' },
                { text: '插件指令', link: '/extensions/plugin/artisan.md' },
                { text: '命令字使用', link: '/extensions/plugin/command-word.md' },
                {
                    text: '功能参考',
                    collapsed: false,
                    items: [
                        { text: '定时任务和订阅', link: '/extensions/plugin/functions.md' },
                        { text: '命令字功能开发', link: '/extensions/plugin/command-word-dev.md' },
                        { text: '验证路径凭证', link: '/extensions/plugin/url-authorization.md' },
                    ]
                },
                {
                    text: '插件参考',
                    collapsed: false,
                    items: [
                        { text: '存储服务开发', link: '/extensions/plugin/storage.md' },
                        { text: '编辑器开发', link: '/extensions/plugin/editor.md' },
                        { text: '内容处理开发', link: '/extensions/plugin/content-handler.md' },
                        { text: '网站引擎开发', link: '/extensions/plugin/engine.md' },
                    ]
                },
            ]
        },
        {
            text: '主题开发',
            collapsed: true,
            items: [
                { text: '介绍', link: '/extensions/theme/' },
                { text: '主题功能', link: '/extensions/theme/functions.md' },
                { text: '路径结构', link: '/extensions/theme/structure.md' },
                { text: '模板标签', link: '/extensions/theme/tags.md' },
            ]
        },
        {
            text: '回调使用',
            collapsed: true,
            items: [
                { text: '介绍', link: '/extensions/callback/' },
                { text: '路径变量名', link: '/extensions/callback/variables.md' },
                { text: '生成路径凭证', link: '/extensions/callback/url-authorization.md' },
            ]
        },
    ]
}

// sidebarApi
function sidebarApi() {
    return [
        {
            text: '总览',
            collapsed: false,
            items: [
                { text: '介绍', link: '/api/' },
                { text: '错误码', link: '/api/error-code.md' },
                { text: '请求标头', link: '/api/headers.md' },
                { text: '通用数据结构', link: '/api/data-structure.md' },
            ]
        },
        {
            text: '全局配置',
            collapsed: false,
            items: [
                { text: '全局配置信息', link: '/api/global/configs.md' },
                { text: '状态码信息', link: '/api/global/code-messages.md' },
                { text: '扩展档案配置', link: '/api/global/archives.md' },
                { text: '获取上传凭证', link: '/api/global/upload-token.md' },
                { text: '用户角色', link: '/api/global/roles.md' },
                { text: '内容类型', link: '/api/global/content-types.md' },
                { text: '表情图', link: '/api/global/stickers.md' },
                { text: '阻止词', link: '/api/global/block-words.md' },
            ]
        },
        {
            text: '公共业务',
            collapsed: false,
            items: [
                { text: 'IP 信息', link: '/api/common/ip-info.md' },
                { text: '输入提示信息', link: '/api/common/input-tips.md' },
                { text: '回调返参查询', link: '/api/common/callback.md' },
                { text: '发送验证码', link: '/api/common/send-verify-code.md' },
                { text: '上传日志', link: '/api/common/upload-log.md' },
                { text: '上传文件', link: '/api/common/upload-file.md' },
                { text: '文件下载链接', link: '/api/common/file-link.md' },
                { text: '下载过文件的用户', link: '/api/common/file-users.md' },
            ]
        },
        {
            text: '账号',
            collapsed: false,
            items: [
                { text: '注册', link: '/api/account/register.md' },
                { text: '登录', link: '/api/account/login.md' },
                { text: '重置密码', link: '/api/account/reset-password.md' },
                { text: '账号基本信息', link: '/api/account/detail.md' },
                { text: '钱包交易记录', link: '/api/account/wallet-logs.md' },
                { text: '身份验证', link: '/api/account/verify-identity.md' },
                { text: '修改账号资料', link: '/api/account/edit.md' },
                { text: '退出登录', link: '/api/account/logout.md' },
                { text: '申请删除账号', link: '/api/account/apply-delete.md' },
                { text: '撤销删除申请', link: '/api/account/recall-delete.md' },
            ]
        },
        {
            text: '用户',
            collapsed: false,
            items: [
                { text: '获取用户[列表]', link: '/api/user/list.md' },
                { text: '获取用户[详情]', link: '/api/user/detail.md' },
                { text: '获取用户认识的关注者', link: '/api/user/followers-you-follow.md' },
                { text: '获取用户[详情] 互动列表', link: '/api/user/interaction.md' },
                { text: '获取用户[详情] 标记列表', link: '/api/user/mark-list.md' },
                { text: '用户登录', link: '/api/user/auth.md' },
                { text: '用户面板', link: '/api/user/panel.md' },
                { text: '修改用户资料', link: '/api/user/edit.md' },
                { text: '操作标记', link: '/api/user/mark.md' },
                { text: '标记备注', link: '/api/user/mark-note.md' },
            ]
        },
        {
            text: '消息',
            collapsed: false,
            items: [
                { text: '[通知]获取消息列表', link: '/api/message/notification-list.md' },
                { text: '[通知]更新阅读状态', link: '/api/message/notification-read.md' },
                { text: '[通知]删除消息', link: '/api/message/notification-delete.md' },
                { text: '[对话]获取对话列表', link: '/api/message/conversation-list.md' },
                { text: '[对话]获取对话详情', link: '/api/message/conversation-detail.md' },
                { text: '[对话]获取消息列表', link: '/api/message/conversation-messages.md' },
                { text: '[对话]置顶对话', link: '/api/message/conversation-pin.md' },
                { text: '[对话]更新阅读状态', link: '/api/message/conversation-read.md' },
                { text: '[对话]发送消息', link: '/api/message/conversation-send.md' },
                { text: '[对话]删除对话或对话的消息', link: '/api/message/conversation-delete.md' },
            ]
        },
        {
            text: '小组',
            collapsed: false,
            items: [
                { text: '获取小组[树结构列表]', link: '/api/group/tree.md' },
                { text: '获取小组[列表] 分类', link: '/api/group/categories.md' },
                { text: '获取小组[列表] 小组', link: '/api/group/list.md' },
                { text: '获取小组[详情]', link: '/api/group/detail.md' },
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
            text: '帖子',
            collapsed: false,
            items: [
                { text: '获取帖子[列表]', link: '/api/post/list.md' },
                { text: '获取帖子[列表] 关注对象的', link: '/api/post/follow.md' },
                { text: '获取帖子[列表] 位置附近的', link: '/api/post/nearby.md' },
                { text: '获取帖子[详情]', link: '/api/post/detail.md' },
                { text: '获取帖子[详情] 互动列表', link: '/api/post/interaction.md' },
                { text: '获取帖子[详情] 附属用户列表', link: '/api/post/users.md' },
                { text: '获取帖子[详情] 引用它的帖子列表', link: '/api/post/quotes.md' },
                { text: '获取帖子[详情] 日志列表', link: '/api/post/logs.md' },
                { text: '获取帖子[详情] 日志详情', link: '/api/post/log-detail.md' },
                { text: '删除帖子', link: '/api/post/delete.md' },
            ]
        },
        {
            text: '评论',
            collapsed: false,
            items: [
                { text: '获取评论[列表]', link: '/api/comment/list.md' },
                { text: '获取评论[列表] 关注对象的', link: '/api/comment/follow.md' },
                { text: '获取评论[列表] 位置附近的', link: '/api/comment/nearby.md' },
                { text: '获取评论[详情]', link: '/api/comment/detail.md' },
                { text: '获取评论[详情] 互动列表', link: '/api/comment/interaction.md' },
                { text: '获取评论[详情] 日志列表', link: '/api/comment/logs.md' },
                { text: '获取评论[详情] 日志详情', link: '/api/comment/log-detail.md' },
                { text: '删除评论', link: '/api/comment/delete.md' },
            ]
        },
        {
            text: '编辑器',
            collapsed: false,
            items: [
                { text: '快速发表', link: '/api/editor/quick-publish.md' },
                { text: '编辑器配置信息', link: '/api/editor/config.md' },
                { text: '获取草稿列表', link: '/api/editor/drafts.md' },
                { text: '创建草稿', link: '/api/editor/create.md' },
                { text: '生成编辑草稿', link: '/api/editor/generate.md' },
                { text: '获取草稿详情', link: '/api/editor/detail.md' },
                { text: '更新草稿内容', link: '/api/editor/update.md' },
                { text: '提交发表（或审核）', link: '/api/editor/publish.md' },
                { text: '撤回审核中草稿', link: '/api/editor/recall.md' },
                { text: '删除草稿', link: '/api/editor/delete.md' },
            ]
        },
        {
            text: '搜索',
            collapsed: false,
            items: [
                { text: '用户', link: '/api/search/users.md' },
                { text: '小组', link: '/api/search/groups.md' },
                { text: '话题', link: '/api/search/hashtags.md' },
                { text: '帖子', link: '/api/search/posts.md' },
                { text: '评论', link: '/api/search/comments.md' },
            ]
        },
    ]
}

// sidebarDatabase
function sidebarDatabase() {
    return  [
        {
            text: '总览',
            collapsed: false,
            items: [
                { text: '介绍', link: '/database/' },
                { text: '编号数据说明', link: '/database/number.md' },
            ]
        },
        {
            text: '表和字段',
            collapsed: false,
            items: [
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
                    text: '插件',
                    collapsed: true,
                    items: [
                        { text: 'plugins 插件表', link: '/database/plugins/plugins.md' },
                        { text: 'plugin_callbacks 插件回调表', link: '/database/plugins/plugin-callbacks.md' },
                        { text: 'plugin_usages 插件关联使用表', link: '/database/plugins/plugin-usages.md' },
                        { text: 'plugin_badges 插件徽标数据表', link: '/database/plugins/plugin-badges.md' },
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
                        { text: 'user_roles 用户角色关联表', link: '/database/users/user-roles.md' },
                        { text: 'user_likes 用户点赞记录表', link: '/database/users/user-likes.md' },
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
                    text: '扩展',
                    collapsed: true,
                    items: [
                        { text: 'archives 扩展参数表', link: '/database/extends/archives.md' },
                        { text: 'archive_usages 扩展参数使用表', link: '/database/extends/archive-usages.md' },
                        { text: 'operations 扩展资料表', link: '/database/extends/operations.md' },
                        { text: 'operation_usages 扩展资料使用表', link: '/database/extends/operation-usages.md' },
                        { text: 'extends 扩展内容表', link: '/database/extends/extends.md' },
                        { text: 'extend_usages 扩展内容使用表', link: '/database/extends/extend-usages.md' },
                    ]
                },
                {
                    text: '内容信息',
                    collapsed: true,
                    items: [
                        { text: 'posts 帖子主表', link: '/database/contents/posts.md' },
                        { text: 'post_appends 帖子-附属表', link: '/database/contents/post-appends.md' },
                        { text: 'post_allows 帖子-权限记录表', link: '/database/contents/post-allows.md' },
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
                        { text: 'stickers 表情表', link: '/database/contents/stickers.md' },
                        { text: 'block_words 阻止词表', link: '/database/contents/block-words.md' },
                        { text: 'seo 搜索引擎优化信息表', link: '/database/contents/seo.md' },
                        { text: 'placements 植入信息表', link: '/database/contents/placements.md' },
                    ]
                },
            ]
        },
        {
            text: '字典数据',
            collapsed: false,
            items: [
                { text: '终端平台编号', link: '/database/dictionary/platforms.md' },
                { text: '互联平台编号', link: '/database/dictionary/connects.md' },
                { text: '存储服务商编号', link: '/database/dictionary/storages.md' },
                { text: '地图服务商编号', link: '/database/dictionary/maps.md' },
                { text: '七大洲编号', link: '/database/dictionary/continents.md' },
                { text: '地区代码', link: '/database/dictionary/area-codes.md' },
                { text: '语言代码', link: '/database/dictionary/language-codes.md' },
                { text: '货币代码', link: '/database/dictionary/currency-codes.md' },
                { text: '时区选项', link: '/database/dictionary/timezone.md' },
                { text: '禁用名', link: '/database/dictionary/ban-names.md' },
                { text: '初始语言包', link: '/database/dictionary/language-pack.md' },
            ]
        },
        {
            text: '配置键名',
            collapsed: false,
            items: [
                { text: '介绍', link: '/database/keyname/index.md' },
                {
                    text: '仪表盘',
                    collapsed: true,
                    items: [
                        { text: '设置', link: '/database/keyname/settings.md' },
                    ]
                },
                {
                    text: '系统',
                    collapsed: true,
                    items: [
                        { text: '语言设置', link: '/database/keyname/languages.md' },
                        { text: '站点设置', link: '/database/keyname/general.md' },
                        { text: '政策条款', link: '/database/keyname/policy.md' },
                        { text: '发信设置', link: '/database/keyname/send.md' },
                        { text: '用户设置', link: '/database/keyname/user.md' },
                        { text: '钱包设置', link: '/database/keyname/wallet.md' },
                        { text: '存储设置', link: '/database/keyname/storage.md' },
                    ]
                },
                {
                    text: '运营',
                    collapsed: true,
                    items: [
                        { text: '命名配置', link: '/database/keyname/rename.md' },
                        { text: '互动配置', link: '/database/keyname/interaction.md' },
                        { text: '发表配置', link: '/database/keyname/publish.md' },
                    ]
                },
                {
                    text: '扩展',
                    collapsed: true,
                    items: [
                        { text: '内容处理扩展', link: '/database/keyname/content-handler.md' },
                    ]
                },
                {
                    text: '客户端',
                    collapsed: true,
                    items: [
                        { text: '菜单配置', link: '/database/keyname/menus.md' },
                        { text: '栏目配置', link: '/database/keyname/columns.md' },
                        { text: '路径配置', link: '/database/keyname/paths.md' },
                        { text: '语言包配置', link: '/database/keyname/language-pack.md' },
                        { text: '网站网页', link: '/database/keyname/website.md' },
                        { text: '移动应用', link: '/database/keyname/app.md' },
                    ]
                },
            ]
        },
        {
            text: '扩展配置键名',
            collapsed: false,
            items: [
                { text: '预设键名', link: '/database/keyname/planning-preset.md' },
                { text: '规范生成键名', link: '/database/keyname/planning-generate.md' },
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
                { text: '基础功能', link: '/supports/cmd-word/basic.md' },
                { text: '发信功能', link: '/supports/cmd-word/send.md' },
                { text: '账号功能', link: '/supports/cmd-word/account.md' },
                { text: '用户功能', link: '/supports/cmd-word/user.md' },
                { text: '钱包功能', link: '/supports/cmd-word/wallet.md' },
                { text: '文件功能', link: '/supports/cmd-word/file.md' },
                { text: '内容功能', link: '/supports/cmd-word/content.md' },
                { text: '定时任务', link: '/supports/cmd-word/crontab.md' },
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

// sidebarCommunity
function sidebarCommunity() {
    return  [
        {
            text: '关于',
            collapsed: false,
            items: [
                { text: '团队', link: '/community/teams.md' },
                { text: '加入我们', link: '/community/join.md' },
                { text: '赞助我们', link: '/community/sponsor.md' },
            ]
        },
        {
            text: '贡献',
            collapsed: false,
            items: [
                { text: '贡献指南', link: '/contributing/' },
                { text: '翻译文档', link: '/contributing/translations.md' },
            ]
        },
        {
            text: '互动',
            collapsed: false,
            items: [
                { text: '互动交流', link: 'https://discuss.fresns.com/zh-Hans' },
                { text: '应用市场', link: 'https://marketplace.fresns.com/zh-Hans/open-source' },
            ]
        },
    ]
}
